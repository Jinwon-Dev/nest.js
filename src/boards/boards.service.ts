import { Injectable, NotFoundException } from '@nestjs/common';
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
    const found = this.boards.find((board) => board.id === id); // 특정 게시물 정보 return

    if (!found) {
      // 게시물을 찾는데 없을 경우 에러 메시지
      throw new NotFoundException(`Can't fine Board with id ${id}`);
    }
    return found;
  }

  deleteBoard(id: string): void {
    // 게시물 지우기 기능
    const found = this.getBoardById(id);
    this.boards = this.boards.filter((board) => board.id !== found.id); // 없는 게시물을 지우려 할 때 에러 메시지
  }

  updateBoardStatus(id: string, status: BoardStatus): Board {
    // 게시물 상태 업데이트
    const board = this.getBoardById(id);
    board.status = status;
    return board;
  }
}
