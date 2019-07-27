    
const Matrix = require('./Matrix')
class GoldRush extends Matrix {
    constructor(){
        super()
    }
    loadBoard () {
            this.alter(0, 0, 1)
            this.alter(4, 4, 2)
            this.generateCoins()
        }
    
    generateCoins() {
        for (let r = 0; r < 5; r++) {
            for (let c = 0; c < 5; c++) {
                const randomNumber = Math.random() * 100
                if {
                    this.matrix[r].push('c')
                }
            }
        }
    }
       // generateCoins(){
    //     for(let i = 0; i < 5 ; i++) {
    //         for (let j = 0; j < 5 ; j++) {
    //             if(!(this.matrix[i][j] == '1' || this.matrix[i][j] == '2' )) {
    //                if(Math.random()*10 < 6){
    //                 this.alter(i, j, 'C')
    //                 }
    //             } 
    //         }
    //     }
    // }
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