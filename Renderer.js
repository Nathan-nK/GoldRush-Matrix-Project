class Renderer {
    constructor() {
    }
    renderBoard(board) {
        $('.container').empty()
        $('.score').empty()
        const source = $('#game-template').html()
        const template = Handlebars.compile(source)
        for (let i of board.matrix) {
            const newHTML = template({ board: i })
            $('.container').append(newHTML)
        }
        $('.score').append(`<div class='player1'> Score of Player 1: ${board.player1.score} </div>
                            <div class='player2'> pcore of Player 2: ${board.player2.score} </div>`)
    }
}