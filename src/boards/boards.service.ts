import { Injectable } from '@nestjs/common';

@Injectable()
export class BoardsService {
  private boards = []; // private을 써서 수정 차단

  getAllBoards() {
    return this.boards;
  }
}
