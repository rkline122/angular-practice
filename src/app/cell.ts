export class cell{
    private rowLocation : number;
    private colLocation : number;
    private color: string;

    public constructor(rowLocation : number, colLocation : number, color : string){
        this.rowLocation = rowLocation;
        this.colLocation = colLocation;
        this.color = color;
    }

    public getRowLocation(): number {
        return this.rowLocation;
    }

    public getColLocation(): number {
        return this.colLocation;
    }

    public getColor(): string {
        return this.color;
    }

    public setColor(color:string) {
        this.color = color;
    }
}