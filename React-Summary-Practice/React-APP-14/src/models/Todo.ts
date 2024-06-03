export class Todo{
    id: string;
    constructor(public text : string){
        this.text = text;
        this.id = new Date().toISOString()
    }
}