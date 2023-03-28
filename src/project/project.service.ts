import { Injectable } from '@nestjs/common';
import { Prisma, Project } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProjectService {
  constructor(private prisma: PrismaService) {}

  find = async (
    uniqueInput: Prisma.UserWhereUniqueInput
  ): Promise<Project | null> => {
    return this.prisma.project.findUnique({
      where: uniqueInput
    });
  };

  all = async (params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.UserWhereUniqueInput;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput;
  }): Promise<Project[]> => {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.project.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy
    });
  };

  create = async (data: Prisma.ProjectCreateInput): Promise<Project> => {
    return this.prisma.project.create({
      data
    });
  };

  update = async (params: {
    where: Prisma.ProjectWhereUniqueInput;
    data: Prisma.ProjectUpdateInput;
  }): Promise<Project> => {
    const { where, data } = params;
    return this.prisma.project.update({
      data,
      where
    });
  };

  delete = async (where: Prisma.ProjectWhereUniqueInput): Promise<Project> => {
    return this.prisma.project.delete({
      where
    });
  };
}
