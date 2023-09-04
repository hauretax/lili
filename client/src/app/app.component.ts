import { Component } from '@angular/core';
import { PointsService } from './Points.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'client';

  constructor(private pointsService: PointsService) { }

  getPoints() {
    return this.pointsService.getPoints();
  }
  getTry() {
    return this.pointsService.getTry();
  }

}
