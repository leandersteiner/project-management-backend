import { Injectable } from '@nestjs/common';
import { Prisma, Sprint } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SprintService {
  constructor(private prisma: PrismaService) {}

  find = async (
    uniqueInput: Prisma.UserWhereUniqueInput
  ): Promise<Sprint | null> => {
    return this.prisma.sprint.findUnique({
      where: uniqueInput
    });
  };

  all = async (params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.UserWhereUniqueInput;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput;
  }): Promise<Sprint[]> => {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.sprint.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy
    });
  };

  create = async (data: Prisma.SprintCreateInput): Promise<Sprint> => {
    return this.prisma.sprint.create({
      data
    });
  };

  update = async (params: {
    where: Prisma.SprintWhereUniqueInput;
    data: Prisma.SprintUpdateInput;
  }): Promise<Sprint> => {
    const { where, data } = params;
    return this.prisma.sprint.update({
      data,
      where
    });
  };

  delete = async (where: Prisma.SprintWhereUniqueInput): Promise<Sprint> => {
    return this.prisma.sprint.delete({
      where
    });
  };
}
