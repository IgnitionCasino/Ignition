(function () {
    mocha.setup("bdd");
    var assert = chai.assert;

    //Testing Board class
    describe("Board", function () {
        //Testing blank Board constructor and getBlankArray()
        describe("Board()", function () {
            it("should have dimensions of sidelength and elements all set to false", function () {
                var sidelength = 5;
                var board = Board(sidelength);
                grid = board.getGrid();
                assert.equal(grid.length, sidelength);
                assert.equal(grid[0].length, sidelength);
                for (var row = 0; row < sidelength; row++) {
                    for (var column = 0; column < sidelength; column++) {
                        assert.equal(grid[row][column], false);
                    }
                }
            });
        });

        //Testing changeSquare
        describe("Board.changeSquare(row, col)", function () {
            it("should have square at row, col set to true and all other squares false", function () {
                var sidelength = 13;
                var board = Board(sidelength);
                board.changeSquare(5, 3);
                board.changeSquare(1, 4);
                grid = board.getGrid();
                assert.equal(grid.length, sidelength);
                assert.equal(grid[0].length, sidelength);
                for (var row = 0; row < sidelength; row++) {
                    for (var column = 0; column < sidelength; column++) {
                        if (!(row == 5 && column == 3) && !(row == 1 && column == 4)) {
                            assert.equal(grid[row][column], false);
                        }
                        else {
                            assert.equal(grid[row][column], true);
                        }
                    }
                }
            });
        });

        //Testing changeSquarePixels
        describe("Board.changeSquarePixels(x, y)", function () {
            it("should have square at y / cellSide, x / cellSide set to true and all other squares false", function () {
                var sidelength = 16;
                var cellSide = 50;
                var board = Board(sidelength);
                board.changeSquarePixels(182, 263);
                board.changeSquarePixels(201, 96);
                grid = board.getGrid();
                assert.equal(grid.length, sidelength);
                assert.equal(grid[0].length, sidelength);
                for (var row = 0; row < sidelength; row++) {
                    for (var column = 0; column < sidelength; column++) {
                        if (!(row == 5 && column == 3) && !(row == 1 && column == 4)) {
                            assert.equal(grid[row][column], false);
                        }
                        else {
                            assert.equal(grid[row][column], true);
                        }
                    }
                }
            });
        });

        //Testing countNeighborSquaresAlive
        describe("Board.countNeighborSquaresAlive(row, col)", function () {
            it("should return correct number of alive neighbors of every square in grid", function () {
                var sidelength = 16;
                var board = Board(sidelength);
                board.changeSquare(1, 1);
                board.changeSquare(1, 2);
                board.changeSquare(1, 3);
                grid = board.getGrid();
                assert.equal(grid.length, sidelength);
                assert.equal(grid[0].length, sidelength);
                assert.equal(board.countNeighborSquaresAlive(0, 0), 1);
                assert.equal(board.countNeighborSquaresAlive(0, 1), 2);
                assert.equal(board.countNeighborSquaresAlive(0, 2), 3);
                assert.equal(board.countNeighborSquaresAlive(0, 3), 2);
                assert.equal(board.countNeighborSquaresAlive(0, 4), 1);
                assert.equal(board.countNeighborSquaresAlive(1, 0), 1);
                assert.equal(board.countNeighborSquaresAlive(1, 1), 1);
                assert.equal(board.countNeighborSquaresAlive(1, 2), 2);
                assert.equal(board.countNeighborSquaresAlive(1, 3), 1);
                assert.equal(board.countNeighborSquaresAlive(1, 4), 1);
                assert.equal(board.countNeighborSquaresAlive(2, 0), 1);
                assert.equal(board.countNeighborSquaresAlive(2, 1), 2);
                assert.equal(board.countNeighborSquaresAlive(2, 2), 3);
                assert.equal(board.countNeighborSquaresAlive(2, 3), 2);
                assert.equal(board.countNeighborSquaresAlive(2, 4), 1);
                for (var row = 0; row < sidelength; row++) {
                    for (var column = 0; column < sidelength; column++) {
                        if (!(row < 3 && column < 5)) {
                            assert.equal(board.countNeighborSquaresAlive(row, column), 0);
                        }
                    }
                }
            });
        });

        //Testing updateGrid
        describe("Board.updateGrid()", function () {
            it("should return correct next state of grid", function () {
                var sidelength = 16;
                var board = Board(sidelength);
                board.changeSquare(1, 1);
                board.changeSquare(1, 2);
                board.changeSquare(1, 3);
                board.updateGrid();
                assert.equal(grid.length, sidelength);
                assert.equal(grid[0].length, sidelength);
                grid = board.getGrid();
                assert.equal(grid[0][2], true);
                assert.equal(grid[1][2], true);
                assert.equal(grid[2][2], true);
                for (var row = 0; row < sidelength; row++) {
                    for (var column = 0; column < sidelength; column++) {
                        if (!(column == 2 && row <= 2)) {
                            assert.equal(grid[row][column], false);
                        }
                    }
                }
            });
        });
    });
    mocha.run();
})()