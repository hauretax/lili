import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PointsService {
  private points: number = 0;
  private try: number = 0;

  increasePoints(amount: number) {
    this.points += amount;
  }

  increaseTry(amount: number) {
    this.try += amount;
  }

  getPoints() {
    return this.points;
  }

  getTry() {
    return this.try;
  }
}
