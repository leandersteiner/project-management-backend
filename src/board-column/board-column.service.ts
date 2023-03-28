import { Injectable } from '@nestjs/common';
import { Prisma, BoardColumn } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class BoardColumnService {
  constructor(private prisma: PrismaService) {}

  find = async (
    uniqueInput: Prisma.UserWhereUniqueInput
  ): Promise<BoardColumn | null> => {
    return this.prisma.boardColumn.findUnique({
      where: uniqueInput
    });
  };

  all = async (params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.UserWhereUniqueInput;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput;
  }): Promise<BoardColumn[]> => {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.boardColumn.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy
    });
  };

  create = async (
    data: Prisma.BoardColumnCreateInput
  ): Promise<BoardColumn> => {
    return this.prisma.boardColumn.create({
      data
    });
  };

  update = async (params: {
    where: Prisma.BoardColumnWhereUniqueInput;
    data: Prisma.BoardColumnUpdateInput;
  }): Promise<BoardColumn> => {
    const { where, data } = params;
    return this.prisma.boardColumn.update({
      data,
      where
    });
  };

  delete = async (
    where: Prisma.BoardColumnWhereUniqueInput
  ): Promise<BoardColumn> => {
    return this.prisma.boardColumn.delete({
      where
    });
  };
}
