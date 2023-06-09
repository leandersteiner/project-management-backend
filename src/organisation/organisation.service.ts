import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserService } from '../user/user.service';
import { CreateOrganisationDto } from './dto/create-organisation.dto';
import { Organisation } from './organisation.entity';
import { AddUserToOrganisationDto } from './dto/add-user-to-organisation.dto';
import { User } from '../user/user.entity';

@Injectable()
export class OrganisationService {
  constructor(
    @InjectRepository(Organisation)
    private readonly repository: Repository<Organisation>,
    private readonly userService: UserService
  ) {}

  findById = async (user: User, orgId: string): Promise<Organisation> => {
    const org = await this.repository.findOneBy({ id: orgId });
    this.ensureAllowed(user, org, 'member');
    return org;
  };

  findAllForUser = async (user: User): Promise<Organisation[]> => {
    return [
      ...(await this.findInvitedForUser(user)),
      ...(await this.findOwnedByUser(user))
    ];
  };

  findOwnedByUser = async (user: User): Promise<Organisation[]> => {
    return this.repository.findBy({
      owner: {
        id: user.id
      }
    });
  };

  findInvitedForUser = async (user: User): Promise<Organisation[]> => {
    return this.repository.findBy({
      members: {
        id: user.id
      }
    });
  };

  addUserToOrganisation = async (
    user: User,
    addUserDto: AddUserToOrganisationDto
  ): Promise<Organisation> => {
    const organisation = await this.repository.findOneBy({
      id: addUserDto.organisationId
    });
    this.ensureAllowed(user, organisation, 'owner');
    const memberIds = organisation.members.map((member) => member.id);
    if (memberIds.includes(addUserDto.userId)) return organisation;
    const userToAdd = await this.userService.findById(addUserDto.userId);
    organisation.members.push(userToAdd);
    await this.repository.save(organisation);
    return organisation;
  };

  create = async (
    user: User,
    createDto: CreateOrganisationDto
  ): Promise<Organisation> => {
    return this.repository.save({ ...createDto, owner: user });
  };

  delete = async (user: User, orgId: string): Promise<void> => {
    const org = await this.findById(user, orgId);
    this.ensureAllowed(user, org, 'owner');
    await this.repository.delete(org);
  };

  private ensureAllowed = (
    user: User,
    org: Organisation,
    role: 'owner' | 'member'
  ): void => {
    if (role === 'owner' && user.id !== org.owner.id) {
      throw new UnauthorizedException();
    }
    if (role === 'member' && !org.members.includes(user)) {
      throw new UnauthorizedException();
    }
  };
}
