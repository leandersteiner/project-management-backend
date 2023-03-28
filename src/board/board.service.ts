import { Injectable } from '@nestjs/common';
import { Prisma, Board } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class BoardService {
  constructor(private prisma: PrismaService) {}

  find = async (
    uniqueInput: Prisma.UserWhereUniqueInput
  ): Promise<Board | null> => {
    return this.prisma.board.findUnique({
      where: uniqueInput
    });
  };

  all = async (params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.UserWhereUniqueInput;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput;
  }): Promise<Board[]> => {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.board.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy
    });
  };

  create = async (data: Prisma.BoardCreateInput): Promise<Board> => {
    return this.prisma.board.create({
      data
    });
  };

  update = async (params: {
    where: Prisma.BoardWhereUniqueInput;
    data: Prisma.BoardUpdateInput;
  }): Promise<Board> => {
    const { where, data } = params;
    return this.prisma.board.update({
      data,
      where
    });
  };

  delete = async (where: Prisma.BoardWhereUniqueInput): Promise<Board> => {
    return this.prisma.board.delete({
      where
    });
  };
}
