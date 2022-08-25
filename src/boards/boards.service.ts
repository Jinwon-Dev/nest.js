import { Injectable } from '@nestjs/common';
import { Board } from './board.model';

@Injectable()
export class BoardsService {
  private boards: Board[] = []; // private을 써서 수정 차단

  getAllBoards(): Board[] {
    // 타입 정의
    return this.boards;
  }
}
