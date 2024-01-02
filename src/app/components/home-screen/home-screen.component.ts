import { Component } from '@angular/core';
import { Observable, timer } from "rxjs";
import { map, shareReplay } from "rxjs/operators";
import { AnimationOptions } from 'ngx-lottie';
import { AnimationItem } from 'lottie-web';


@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.css']
})
export class HomeScreenComponent {

  options: AnimationOptions = {
    path: '../../../assets/jsons/heart_rate.json',
  };

  // options1: AnimationOptions = {
  //   path: '../../../assets/jsons/Get notifications.json',
  // };


  private time: Observable<Date> = timer(0, 1000)
  .pipe(
    map(tick => new Date()),
    shareReplay(1)
  );

  private hours$: Observable<number> =
    this.time$.pipe(
      map((now: Date) => now.getHours())
    );


  private minutes$: Observable<number> = this.time$.pipe(
      map((now: Date) => now.getMinutes())
    );


  private seconds$: Observable<number> = this.time$.pipe(
      map( (now: Date) => now.getSeconds())
    );

  get time$() {
    return this.time;
  }

  get hourRotation() {
    return this.hours$.pipe(
      map(hours => hours / 12 * 360)
    );
  }

  get minuteRotation() {
    return this.minutes$.pipe(
      map(minutes => minutes / 60 * 360)
    );
  }

  get secondRotation() {
    return this.seconds$.pipe(
      map(seconds => seconds / 60 * 360)
    );
  }

  onAnimate(animationItem: AnimationItem): void {
    console.log(animationItem);
  }
}
