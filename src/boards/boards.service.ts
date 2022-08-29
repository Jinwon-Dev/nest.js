import { Injectable } from '@nestjs/common';
import { Board, BoardStatus } from './board.model';
import { v1 as uuid } from 'uuid';
import { CreateBoardDto } from './dto/create-board.dto';

@Injectable()
export class BoardsService {
  private boards: Board[] = []; // private을 써서 수정 차단

  getAllBoards(): Board[] {
    // 타입 정의
    return this.boards;
  }

  createBoard(createBoardDto: CreateBoardDto) {
    // DTO 적용
    // 게시물 생성 기능
    const { title, description } = createBoardDto;
    const board: Board = {
      id: uuid(), // uuid 사용
      title,
      description,
      status: BoardStatus.PUBLIC,
    };

    this.boards.push(board);
    return board;
  }

  getBoardById(id: string): Board {
    // id로 게시물 찾기
    return this.boards.find((board) => board.id === id);
  }
}
