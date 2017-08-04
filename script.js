$(document).ready(function(){
    startGame();
});

var playerTurn = 1;

function startGame(){
    $('.space').on('click',markSpace);
}


function markSpace(){
    if(playerTurn===1 && $(this).hasClass('empty')){
        markX($(this));
    }
    else if(playerTurn===2 && $(this).hasClass('empty')){
        markOh ($(this));
    }
}

function markX(space){
    console.log('markX is being called');
    space.removeClass('empty');
    space.addClass('ex');
    playerTurn = 2;
    console.log('Now it is player two\'s turn');
}

function markOh(space2){
    console.log('markOh is being called');
    space2.removeClass('empty');
    space2.addClass('oh');
    playerTurn = 1;
    console.log('Now it is player one\'s turn');
}
