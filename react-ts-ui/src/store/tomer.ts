import {observable, makeAutoObservable} from 'mobx'

export class Timer {
    name: string = '';

    constructor() {
        makeAutoObservable(this);
    }

    public get greeting(): string {
        return `hello ${this.name}`
    }
    public setName(name: string): void{
        this.name = name
    }



}

export const timer = new Timer();

