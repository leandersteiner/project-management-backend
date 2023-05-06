import { Injectable } from '@nestjs/common';
import { BaseService } from '../common/base.service';
import { Organisation } from './organisation.schema';
import { CreateOrganisationDto } from './dto/create-organisation.dto';
import { UpdateOrganisationDto } from './dto/update-organisation.dto';

@Injectable()
export class OrganisationService extends BaseService<
  Organisation,
  CreateOrganisationDto,
  UpdateOrganisationDto
> {}
