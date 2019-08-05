import { Artist } from './Artist';

export class Event {
    id:number;
    displayName:string;
    type:string;
    uri:string;
    startTime:Start;
    performance:Performance;
    artist:Artist;
}

class Start{
    date:string;
    time:string;
}

class Performance{
    id:number;
    displayName: string;

}