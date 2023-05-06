import { Module } from '@nestjs/common';
import { OrganisationController } from './organisation.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Organisation, OrganisationSchema } from './organisation.schema';
import { OrganisationService } from './organisation.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Organisation.name, schema: OrganisationSchema }
    ])
  ],
  controllers: [OrganisationController],
  providers: [OrganisationService],
  exports: [OrganisationService]
})
export class OrganisationModule {}
