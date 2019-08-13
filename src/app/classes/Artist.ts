export class Artist{
    id:number;
    display:string;
    uri:string;

    constructor(id:number, display:string, uri:string){
        this.id = id;
        this.display = display;
        this.uri = uri;
    }
}