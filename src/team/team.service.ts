import { Injectable } from '@nestjs/common';
import { Prisma, Team } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TeamService {
  constructor(private prisma: PrismaService) {}

  find = async (
    uniqueInput: Prisma.UserWhereUniqueInput
  ): Promise<Team | null> => {
    return this.prisma.team.findUnique({
      where: uniqueInput
    });
  };

  all = async (params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.UserWhereUniqueInput;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput;
  }): Promise<Team[]> => {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.team.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy
    });
  };

  create = async (data: Prisma.TeamCreateInput): Promise<Team> => {
    return this.prisma.team.create({
      data
    });
  };

  update = async (params: {
    where: Prisma.TeamWhereUniqueInput;
    data: Prisma.TeamUpdateInput;
  }): Promise<Team> => {
    const { where, data } = params;
    return this.prisma.team.update({
      data,
      where
    });
  };

  delete = async (where: Prisma.TeamWhereUniqueInput): Promise<Team> => {
    return this.prisma.team.delete({
      where
    });
  };
}
