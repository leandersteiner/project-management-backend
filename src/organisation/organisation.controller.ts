import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  UseGuards,
  UseInterceptors
} from '@nestjs/common';
import { OrganisationService } from './organisation.service';
import { Organisation } from './organisation.entity';
import { CreateOrganisationDto } from './dto/create-organisation.dto';
import { AddUserToOrganisationDto } from './dto/add-user-to-organisation.dto';
import { AuthGuard } from '../auth/auth.guard';
import { ReqUser } from '../common/helper/user.decorator';
import { User } from '../user/user.entity';

@UseInterceptors(ClassSerializerInterceptor)
@UseGuards(AuthGuard)
@Controller('orgs')
export class OrganisationController {
  constructor(private readonly organizationService: OrganisationService) {}

  @HttpCode(HttpStatus.OK)
  @Get('/')
  async getAll(@ReqUser() user: User): Promise<Organisation[]> {
    return this.organizationService.findAllForUser(user);
  }

  @HttpCode(HttpStatus.OK)
  @Get('/:orgId')
  async getById(
    @ReqUser() user: User,
    @Param('orgId') id: string
  ): Promise<Organisation> {
    return this.organizationService.findById(user, id);
  }

  @HttpCode(HttpStatus.CREATED)
  @Post('/')
  async create(
    @ReqUser() user: User,
    @Body() createDto: CreateOrganisationDto
  ): Promise<Organisation> {
    return this.organizationService.create(user, createDto);
  }

  @HttpCode(HttpStatus.OK)
  @Post('/:orgId')
  async addUserToOrganisation(
    @ReqUser() user: User,
    @Param('orgId') orgId: string,
    @Body() addUserDto: AddUserToOrganisationDto
  ): Promise<Organisation> {
    return this.organizationService.addUserToOrganisation(
      user,
      orgId,
      addUserDto
    );
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete('/:orgId')
  async delete(
    @ReqUser() user: User,
    @Param('orgId') id: string
  ): Promise<void> {
    return this.organizationService.delete(user, id);
  }
}
