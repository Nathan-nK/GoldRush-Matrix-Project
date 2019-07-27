class Matrix {
    constructor(rowNum, colNum) {
        this.generateMatrix(rowNum, colNum)
    }

    generateMatrix(numRows, numColumns) {
        this.matrix = []
        for (let r = 0; r < numRows; r++) {
            this.matrix.push([])
            for (let c = 0; c < numColumns; c++) {
                const randomNumber = Math.random() * 100
                if (randomNumber <= 20) {
                    this.matrix[r].push('.')
                }
                else if ((randomNumber > 20) && (randomNumber <= 50)) {
                    this.matrix[r].push('b')
                }
                else {
                    this.matrix[r].push('c')
                }
            }
        }
        this.alter(0, 0, 1)
        this.alter(numRows - 1, numColumns - 1, 2)
        return this.matrix
    }
      
    print() {
        for (let i = 0; i < this.matrix.length; i++) {
            let line = ""
            for (let j = 0; j < this.matrix[i].length; j++) {
                line += (this.matrix[i][j] + "\t")
            }
            console.log(line)
        }
    }

    get(rowNum, colNum) {
        return this.matrix[rowNum][colNum]
    }

    alter(rowNum, colNum, updatedNumber) {
        this.matrix[rowNum][colNum] = updatedNumber
    }

    findCordinate(value) {
        for (let i = 0; i < this.matrix.length; i++) {
            for (let j = 0; j < this.matrix[i].length; j++) {
                if (this.matrix[i][j] === value) {
                    return { x: j, y: i }
                }
            }
        }
    }
}
