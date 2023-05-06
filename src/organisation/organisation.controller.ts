import { Controller } from '@nestjs/common';
import { OrganisationService } from './organisation.service';

@Controller('organisations')
export class OrganisationController {
  constructor(private readonly organizationService: OrganisationService) {}
}
