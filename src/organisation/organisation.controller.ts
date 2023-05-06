import { Controller } from '@nestjs/common';
import { BaseController } from '../common/base.controller';
import { Organisation } from './organisation.schema';
import { CreateOrganisationDto } from './dto/create-organisation.dto';
import { UpdateOrganisationDto } from './dto/update-organisation.dto';
import { OrganisationService } from './organisation.service';

@Controller('organisation')
export class OrganisationController extends BaseController<
  Organisation,
  CreateOrganisationDto,
  UpdateOrganisationDto
> {
  constructor(private readonly organizationService: OrganisationService) {
    super(organizationService);
  }
}
