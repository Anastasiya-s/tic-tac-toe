class TicTacToe {
    constructor() {
        this.playerSymbol = 'x';
        this.playGround = [
            [null, null, null],
            [null, null, null],
            [null, null, null]
        ];
        this.winner = null;
    }

    getCurrentPlayerSymbol() {
        return this.playerSymbol;
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.playGround[rowIndex][columnIndex] === null) {
            this.playGround[rowIndex][columnIndex] = this.playerSymbol;
            this.playerSymbol === 'x' ? this.playerSymbol = 'o' : this.playerSymbol = 'x';
            this.isFinished();
        }
    }

    isFinished() {
        if (!!this.winner) return this.winner;
        this.isDraw() ? true : false;
    }

    getWinner() {
        if (this.playGround[0][0] === 'x' || 'o' && this.playGround[0][0] === this.playGround[0][1] && this.playGround[0][0] === this.playGround[0][2] ) {
            return this.winner = this.getFieldValue(0, 0);
        }
        if (!!this.playGround[1][0] && this.playGround[1][0] === this.playGround[1][1] && this.playGround[1][0] === this.playGround[1][2] ) {
            
            return this.winner =this.getFieldValue(1, 0);
        }
        if (!!this.playGround[2][0] && this.playGround[2][0] === this.playGround[2][1] && this.playGround[2][0] === this.playGround[2][2] ) {
            return this.winner = this.getFieldValue(2, 0);
        }
        if (!!this.playGround[0][0] && this.playGround[0][0] === this.playGround[1][0] && this.playGround[0][0] === this.playGround[2][0] ) {
            return this.winner = this.getFieldValue(0, 0);
        }
        if (this.playGround[0][1] === 'x' || 'o'  && this.playGround[0][1] === this.playGround[1][1] && this.playGround[0][1] === this.playGround[2][1] ) {
            
            return this.winner = this.getFieldValue(0, 1);;
        }
        if (!!this.playGround[0][2] && this.playGround[0][2] === this.playGround[1][2] && this.playGround[0][2] === this.playGround[2][2] ) {
            return this.winner = this.getFieldValue(0, 2);
        }
        if (!!this.playGround[0][2] && this.playGround[0][2] === this.playGround[1][1] && this.playGround[0][2] === this.playGround[2][0] ) {
            return this.winner = this.getFieldValue(0, 2);
        }
        if (!!this.playGround[2][0] && this.playGround[2][0] === this.playGround[1][1] && this.playGround[2][0] === this.playGround[0][2] ) {
            return this.winner = this.getFieldValue(2, 0);
        }
    }

    noMoreTurns() {
        return this.playGround.map(row => row.join('')).join('').length === 9;
        
    }

    isDraw() {
        return this.noMoreTurns() && !!this.winner;

    }

    getFieldValue(rowIndex, colIndex) {
        return this.playGround[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
