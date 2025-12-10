import { Injectable } from '@nestjs/common';
import { CreateScoreDto } from './dto/create-score.dto';

interface Score {
  username: string;
  score: number;
  createdAt: Date;
}

@Injectable()
export class LeaderboardService {
  private scores: Score[] = [];

  addScore(dto: CreateScoreDto): Score {
    const data: Score = {
      username: dto.username,
      score: dto.score,
      createdAt: new Date(),
    };
    this.scores.push(data);
    return data;
  }

  getLeaderboard(): Score[] {
    return this.scores.sort((a, b) => b.score - a.score);
  }
}
