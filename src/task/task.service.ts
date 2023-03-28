import { Injectable } from '@nestjs/common';
import { Prisma, Task } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TaskService {
  constructor(private prisma: PrismaService) {}

  find = async (
    uniqueInput: Prisma.UserWhereUniqueInput
  ): Promise<Task | null> => {
    return this.prisma.task.findUnique({
      where: uniqueInput
    });
  };

  all = async (params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.UserWhereUniqueInput;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput;
  }): Promise<Task[]> => {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.task.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy
    });
  };

  create = async (data: Prisma.TaskCreateInput): Promise<Task> => {
    return this.prisma.task.create({
      data
    });
  };

  update = async (params: {
    where: Prisma.TaskWhereUniqueInput;
    data: Prisma.TaskUpdateInput;
  }): Promise<Task> => {
    const { where, data } = params;
    return this.prisma.task.update({
      data,
      where
    });
  };

  delete = async (where: Prisma.TaskWhereUniqueInput): Promise<Task> => {
    return this.prisma.task.delete({
      where
    });
  };
}
