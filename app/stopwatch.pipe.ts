import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'stopwatch', pure: false})
export class StopwatchPipe implements PipeTransform {
    transform(timeMs: number, component: string): string {
        if (component === 'minutes') {
            return Math.floor(timeMs / 60000).toString();
        
        } else if (component === 'seconds') {
            let seconds = Math.floor((timeMs % 60000) / 1000).toString();
            return (+seconds < 10 ? '0' : '') + seconds;
        
        } else if (component === 'hundredths') {
            let hundredths = ((timeMs % 1000) / 10).toFixed(0);
            return (+hundredths < 10 ? '0' : '') + hundredths;
        }
    }
}