import { Injectable } from '@angular/core';

// Utilities
import * as moment from 'moment';

@Injectable()
export class StopwatchService {
    private startedAt: number;
    private pausedAt: number;

    public now(): number {
        return +moment();
    }

    public start(): void {
        this.startedAt = this.startedAt
            ? this.now() - this.pausedAt + this.startedAt
            : this.now();
    }

    public stop(): void {
        this.pausedAt = this.now();
    }

    public reset(): void {
        this.startedAt = 0;
    }

    public time(): number {
        return this.startedAt
            ? this.now() - this.startedAt
            : 0;
    }
}