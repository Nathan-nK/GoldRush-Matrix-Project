class Matrix {
    constructor (rowNum, colNum) {
        this.matrix = this.generateMatrix (rowNum, colNum)
    }

    generateMatrix() {
        let matrix = []
        for (let i = 0; i < 5; i++) {
            let row = []
            for (let j = 0; j < 5; j++) {
                row.push(".")
            }
            matrix.push(row)
        }
        return matrix
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

    get (rowNum, colNum) {
        return this.matrix[rowNum][colNum]
    }

    alter(rowNum, colNum, updatedNumber) {
        this.matrix[rowNum][colNum] = updatedNumber
    }

    findCoordinate(value) {
        for (let i = 0; i < this.matrix.length; i++) {
            for (let j = 0; j < this.matrix[i].length; j++) {        
                if (this.matrix[i][j] === value) {
                    return {x: j, y: i}
                }
            }
        }
    }
}

module.exports = Matrix