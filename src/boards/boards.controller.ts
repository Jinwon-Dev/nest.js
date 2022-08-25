import { Controller, Get } from '@nestjs/common';
import { BoardsService } from './boards.service';
import { Board } from './board.model';

@Controller('boards')
export class BoardsController {
  constructor(private boardsService: BoardsService) {}

  @Get('/')
  getAllBoard(): Board[] {
    // 타입 정의
    return this.boardsService.getAllBoards(); // 모든 게시물을 가져오는 handler
  }
}
