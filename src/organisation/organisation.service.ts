import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserService } from '../user/user.service';
import { CreateOrganisationDto } from './dto/create-organisation.dto';
import { Organisation } from './organisation.entity';

@Injectable()
export class OrganisationService {
  constructor(
    @InjectRepository(Organisation)
    private readonly repository: Repository<Organisation>,
    private readonly userService: UserService
  ) {}

  findById = async (organisationId: string): Promise<Organisation> => {
    return this.repository.findOneBy({ id: organisationId });
  };

  findAllForUser = async (userId: string): Promise<Organisation[]> => {
    return [
      ...(await this.findInvitedForUser(userId)),
      ...(await this.findOwnedByUser(userId))
    ];
  };

  findOwnedByUser = async (userId: string): Promise<Organisation[]> => {
    return this.repository.findBy({
      owner: {
        id: userId
      }
    });
  };

  findInvitedForUser = async (userId: string): Promise<Organisation[]> => {
    return this.repository.findBy({
      members: {
        id: userId
      }
    });
  };

  addUserToOrganisation = async (
    userId: string,
    organisationId: string
  ): Promise<Organisation> => {
    const organisation = await this.repository.findOne({
      where: { id: organisationId },
      relations: ['members']
    });
    const user = await this.userService.findById(userId);
    const memberIds = organisation.members.map((member) => member.id);
    if (memberIds.includes(user.id)) return organisation;
    await this.repository.save(organisation);
    return organisation;
  };

  create = async (createDto: CreateOrganisationDto): Promise<Organisation> => {
    return this.repository.save(createDto);
  };

  delete = async (id: string): Promise<void> => {
    await this.repository.delete({ id: id });
  };
}
