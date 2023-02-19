export class player{

  private playerNumber: number;
  private tokenColor: string;

  public constructor(playerNumber: number, tokenColor: string){
    this.playerNumber = playerNumber;
    this.tokenColor = tokenColor;
  }

  public getPlayerNumber(): number {
    return this.playerNumber;
  }

  public getTokenColor(): string {
    return this.tokenColor;
  }
}