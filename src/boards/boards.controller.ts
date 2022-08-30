import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { BoardsService } from './boards.service';
import { Board, BoardStatus } from './board.model';
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
  @UsePipes(ValidationPipe) // 파이프 생성(유효성 체크)
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

  @Patch('/:id/status') // 게시물 상태 업데이트
  updateBoardStatus(
    @Param('id') id: string,
    @Body('status') status: BoardStatus,
  ) {
    return this.boardsService.updateBoardStatus(id, status);
  }
}
