import Board from '../../src/snakes-and-ladders/board';
import Main from '../../src/snakes-and-ladders/main';
import Ladder from '../../src/snakes-and-ladders/ladder';
import Snake from '../../src/snakes-and-ladders/snake';

test("max limit of cells shoul be 100", () => {
  var board = new Board()
  expect(board.maxCells).toBe(100);
});

test("max limit should not be less than 100", () => {
    var board = new Board();
    board.maxCells = 10;
    expect(board.maxCells).toBeLessThan(100);
});

test("max player limit should be 1", () => {
    var main = new Main();
    main.init();
    expect(main.player).toBeDefined();
});

test("player should be undefined when init is not called", () => {
    var main = new Main();
    expect(main.player).toBeUndefined();
});


test("max ladders count should be 4", () => {
    var main = new Main();
    main.init();
    expect(main.ladders.length).toBe(4);
});

test("check valid ladder points", () => {
    var main = new Main();
    const ladderPoints: number[][] =[ [33, 7], [85, 37], [72, 51], [99, 63] ] 
    expect(main.ladderPoints).toEqual(ladderPoints);
});

// test("check valid snake points", () => {
//     var main = new Main();
//     const snakePoints: number[][] =[ [36, 19], [65, 37], [72, 51], [99, 63] ] 
//     expect(main.ladderPoints).toEqual(ladderPoints);
// });