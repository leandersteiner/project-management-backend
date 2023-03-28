import { Injectable } from '@nestjs/common';
import { Prisma, TaskState } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TaskStateService {
  constructor(private prisma: PrismaService) {}

  find = async (
    uniqueInput: Prisma.UserWhereUniqueInput
  ): Promise<TaskState | null> => {
    return this.prisma.taskState.findUnique({
      where: uniqueInput
    });
  };

  all = async (params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.UserWhereUniqueInput;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput;
  }): Promise<TaskState[]> => {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.taskState.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy
    });
  };

  create = async (data: Prisma.TaskStateCreateInput): Promise<TaskState> => {
    return this.prisma.taskState.create({
      data
    });
  };

  update = async (params: {
    where: Prisma.TaskStateWhereUniqueInput;
    data: Prisma.TaskStateUpdateInput;
  }): Promise<TaskState> => {
    const { where, data } = params;
    return this.prisma.taskState.update({
      data,
      where
    });
  };

  delete = async (
    where: Prisma.TaskStateWhereUniqueInput
  ): Promise<TaskState> => {
    return this.prisma.taskState.delete({
      where
    });
  };
}
