import { IsNotEmpty } from 'class-validator';

export class CreateBoardDto {
  // DTO 생성
  @IsNotEmpty() // 파이프 사용
  title: string;

  @IsNotEmpty() // 파이프 사용
  description: string;
}
