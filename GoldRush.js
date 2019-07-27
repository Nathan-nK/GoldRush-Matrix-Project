class GoldRush extends Matrix {

    constructor (rowNum, colNum) {
        super(rowNum, colNum)
        this.rowNum = rowNum
        this.colNum = colNum 
        this.player1 = {score : 0}
        this.player2 = {score : 0}

    }
    
    movePlayer(player, direction) {
        const location = this.findCordinate(player)
        const currentPlayer = 'player' + player
        console.log(location)
        if (direction === 'down') {
            if (location.y === this.rowNum - 1) {
                console.log('Error')
            }
            else {
                if (this.matrix[location.y + 1][location.x] === 'c') {
                    this[currentPlayer].score += 10
                    this.matrix[location.y + 1][location.x] = player
                    this.matrix[location.y][location.x] = '.'
                }
                else if ((this.matrix[location.y + 1][location.x] === 1) || (this.matrix[location.y + 1][location.x] === 2) || (this.matrix[location.y + 1][location.x] === 'b')) {
                    console.log('Error')
                }
                else {
                    this.matrix[location.y + 1][location.x] = player
                    this.matrix[location.y][location.x] = '.'
                }
            }
        }
        else if (direction === 'up') {
            if (location.y === 0) {
                console.log('Error')
            }
            else {
                if (this.matrix[location.y - 1][location.x] === 'c') {
                    this[currentPlayer].score += 10
                    this.matrix[location.y - 1][location.x] = player
                    this.matrix[location.y][location.x] = '.'
                }
                else if ((this.matrix[location.y - 1][location.x] === 1) || (this.matrix[location.y - 1][location.x] === 2) || (this.matrix[location.y - 1][location.x] === 'b')) {
                    console.log('Error')
                }
                else {
                    this.matrix[location.y - 1][location.x] = player
                    this.matrix[location.y][location.x] = '.'
                }
            }
        }
        else if (direction === 'left') {
            if (location.x === 0) {
                console.log('Error')
            }
            else {
                if (this.matrix[location.y][location.x - 1] === 'c') {
                    this[currentPlayer].score += 10
                    this.matrix[location.y][location.x - 1] = player
                    this.matrix[location.y][location.x] = '.'
                }
                else if ((this.matrix[location.y][location.x - 1] === 1) || (this.matrix[location.y][location.x - 1] === 2) || (this.matrix[location.y][location.x - 1] === 'b')) {
                    console.log('Error')
                }
                else {
                    this.matrix[location.y][location.x - 1] = player
                    this.matrix[location.y][location.x] = '.'
                }
            }
        }
        else if (direction === 'right') { 
            if (location.x === this.colNum - 1) {
                console.log('Error')
            }
            else {
                if (this.matrix[location.y][location.x + 1] === 'c') {
                    this[currentPlayer].score += 10
                    this.matrix[location.y][location.x + 1] = player
                    this.matrix[location.y][location.x] = '.'
                }
                else if ((this.matrix[location.y][location.x + 1] === 1) || (this.matrix[location.y][location.x + 1] === 2) || (this.matrix[location.y][location.x + 1] === 'b')) {
                    console.log('Error')
                }
                else {
                    this.matrix[location.y][location.x + 1] = player
                    this.matrix[location.y][location.x] = '.'
                }
            }
        }
    }
}