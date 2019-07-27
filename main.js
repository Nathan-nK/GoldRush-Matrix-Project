const renderer = new Renderer()
let board

$(document).keypress(function (e) {
    // user left
    if (e.which == 119) { //w
          board.movePlayer(1, "up")
    }
    if (e.which == 115) { //s
        board.movePlayer(1, "down")
    }
    if (e.which == 97) { //a
        board.movePlayer(1, "left")
    }
    if (e.which == 100) { //d
        board.movePlayer(1, "right")
    }

    // user right 
    if (e.which == 105) { //i
        board.movePlayer(2, "up")
    }
    if (e.which == 107) { //k
        board.movePlayer(2, "down")
    }
    if (e.which == 106) { //j
        board.movePlayer(2, "left")
    }
    if (e.which == 108) { //l
        board.movePlayer(2, "right")
    }
    renderer.renderBoard(board)
})

function reload() {
    const sizaOfBoard = $('input[id=input]').val()
    board = new GoldRush(sizaOfBoard,sizaOfBoard)
    renderer.renderBoard(board)
}   
