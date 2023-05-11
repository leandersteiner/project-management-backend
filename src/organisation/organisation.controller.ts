import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Post
} from '@nestjs/common';
import { OrganisationService } from './organisation.service';
import { Organisation } from './organisation.entity';
import { CreateOrganisationDto } from './dto/create-organisation.dto';
import { AddUserToOrganisationDto } from './dto/add-user-to-organisation.dto';

@Controller('orgs')
export class OrganisationController {
  constructor(private readonly organizationService: OrganisationService) {}

  @HttpCode(HttpStatus.OK)
  @Get('/')
  async getAll(): Promise<Organisation[]> {
    return this.organizationService.findAllForUser('userId');
  }

  @HttpCode(HttpStatus.OK)
  @Get('/:orgId')
  async getById(): Promise<Organisation> {
    return this.organizationService.findById('id');
  }

  @HttpCode(HttpStatus.CREATED)
  @Post('/')
  async create(
    @Body() createDto: CreateOrganisationDto
  ): Promise<Organisation> {
    return this.organizationService.create(createDto);
  }

  @HttpCode(HttpStatus.OK)
  @Post('/:orgId')
  async addUserToOrganisation(
    @Body() addUserDto: AddUserToOrganisationDto
  ): Promise<Organisation> {
    return this.organizationService.addUserToOrganisation(addUserDto);
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete('/:orgId')
  async delete(): Promise<void> {
    return this.organizationService.delete('id');
  }
}
