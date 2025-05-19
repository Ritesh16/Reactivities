import { makeAutoObservable } from 'mobx';

export default class CounterStore {
    title = 'Counter Store';
    count = 42;
    events: string[] = [

    ];

    constructor() {
        makeAutoObservable(this);
    }

    increment = (amount = 1) => {
        this.count += amount;
        this.events.push(`Incremented by ${amount} - count is not ${this.count}`);
    }

    decrement = (amount = 1) => {
        this.count -= amount;
        this.events.push(`Decremented by ${amount} - count is not ${this.count}`);
    }

    get eventCount() {
        return this.events.length;
    }
}