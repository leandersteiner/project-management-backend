import { Controller, Get, Post, Delete, Body, Param } from '@nestjs/common';
import { BoardService } from './board.service';
import { Board } from './board.interface';

@Controller('board')
export class BoardController {}
