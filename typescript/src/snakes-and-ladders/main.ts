import Player from './player';
import Board from './board';
import Ladder from './ladder';
import Snake from './snake';
export default class Main {

    public player: Player;
    public ladders: Ladder[] = [];
    public ladderPoints:number[][] =[ [33, 7], [85, 37], [72, 51], [99, 63] ] 
    public snakes: Snake[] = [];
    public init() {
        const board = new Board();
        const player = new Player();
        this.player = player;
        this.initLadders();
    }

    private initLadders() {
        for(const pts in this.ladderPoints) {
            let ladder = new Ladder(pts[0], pts[1]);
            this.ladders.push(ladder);
        }
    }
}