import { Component } from '@angular/core';

// Services
import { StopwatchService } from './stopwatch.service';

// Pipes
import { StopwatchPipe } from './stopwatch.pipe';

@Component({
    selector: 'app',
    template: `
        <div class="centered">
            <div class="timer clickable" (click)="toggle()">
                <div class="time">
                    <span class="large">{{ time | stopwatch:'minutes' }} </span>
                    <span class="large">{{ time | stopwatch:'seconds' }} </span>
                    <span class="small">{{ time | stopwatch:'hundredths' }}</span>
                </div>
            </div>
            <div class="reset clickable" (click)="reset()">Reset</div>
        </div>
    `,
    providers: [StopwatchService],
    pipes: [StopwatchPipe]
})
export class AppComponent {
    public time: number;

    private timer: any;

    constructor(private _stopwatchService: StopwatchService) {
        this.time = 0;
    }

    start() {
        this.timer = setInterval(this.update(), 10);
        this._stopwatchService.start();
    }

    stop() {
        if (this.timer) {
            clearInterval(this.timer);
            this.timer = null;
            this._stopwatchService.stop();
        }
    }

    reset() {
        this.stop();
        this._stopwatchService.reset();
        this.update()();
    }

    toggle() {
        if (this.timer) {
            this.stop();
        } else {
            this.start();
        }
    }

    update() {
        return () =>
            this.time = this._stopwatchService.time();
    }
}