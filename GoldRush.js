const Matrix = require('./Matrix')
class GoldRush extends Matrix {
    constructor(){
        super()
    }
    loadBoard () {
        for(let i = 0; i < 5; i++) {
            for (let j = 0; j < 5; j++) {
                this.matrix[i][j] = '.'
            }
            this.alter(0, 0, 1)
            this.alter(4, 4, 2)
            this.generateCoins()
        }
    }
    movePlayer(player, direction){
        let playerLoc = this.findCoordinate(player)
         if(direction === 'up'){
             this.matrix[playerLoc.y][playerLoc.x] = '.'
             this.matrix[playerLoc.y - 1][playerLoc.x] = player
         }
 
         else if(direction === 'down'){
             this.matrix[playerLoc.y][playerLoc.x] = '.'
             this.matrix[playerLoc.y + 1][playerLoc.x] = player
         }
 
         else if(direction === 'left'){
             this.matrix[playerLoc.y][playerLoc.x] = '.'
             this.matrix[playerLoc.y][playerLoc.x - 1] = player
         }
 
         else if(direction === 'right'){
             this.matrix[playerLoc.y][playerLoc.x] = '.'
             this.matrix[playerLoc.y][playerLoc.x + 1] = player
         }
     }
     generateCoins(){
        let counter = 1
        while(counter < 6){
        for(let i = 0; i < 5 ; i++) {
            for (let j = 0; j < 5 ; j++) {
                if(!(this.matrix[i][j] == '1' || this.matrix[i][j] == '2' )) {
                    this.alter(i, j, 'C')
                    counter++
                    }
                }
            }
        }  
    }

    generateCoins2(){
        let counter = 1
        while(counter < 6){
        for(let i of this.matrix.length) {
            for (let j of this.matrix[i].length) {
                if(!(this.matrix[i][j] == '.' || this.matrix[i][j] == '1' || this.matrix[i][j] == '2' )) {
                    this.alter(i, j, 'C')
                    counter++
                    }
                
                }
            }
        }  
    }
}

const board = new GoldRush()
board.loadBoard()
board.print() 
//prints
// 1       .       c       .       .
// .       .       .       .       .
// .       .       c       c       .
// .       .       .       c       .
// .       c       .       c       2
