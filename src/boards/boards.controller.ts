import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { BoardsService } from './boards.service';
import { Board } from './board.model';
import { CreateBoardDto } from './dto/create-board.dto';

@Controller('boards')
export class BoardsController {
  constructor(private boardsService: BoardsService) {}

  @Get('/')
  getAllBoard(): Board[] {
    // 타입 정의
    return this.boardsService.getAllBoards(); // 모든 게시물을 가져오는 handler
  }

  @Post()
  createBoard(
    // 게시물 생성
    @Body() createBoardDto: CreateBoardDto, // DTO 적용
  ): Board {
    return this.boardsService.createBoard(createBoardDto);
  }

  @Get('/:id') // id로 게시물 찾기
  getBoardById(@Param('id') id: string): Board {
    return this.boardsService.getBoardById(id);
  }

  @Delete('/:id') // 게시물 지우기 기능
  deleteBoard(@Param('id') id: string): void {
    this.boardsService.deleteBoard(id);
  }
}
