import { Artist } from './Artist';

export class Event {
    id:number;
    displayName:string;
    type:string;
    uri:string;
    startTime:Start;
    performance:Performance[];

    constructor(){}
}

export class Start{
    date:string;
    time:string;
    constructor(){}
}

export class Performance{
    id:number;
    displayName: string;
    artist:Artist;
    constructor(id:number, displayName:string, artist:Artist){
        this.id=id;
        this.displayName = displayName;
        this.artist = artist;
    }
}