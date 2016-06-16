var View = function (game, $el) {
  this.game = game;
  this.$el = $el;
  this.setupBoard();
  this.bindEvents();
  this.makeMove();
};

View.prototype.bindEvents = function () {
  $('li').on("click", ev => {
    $target = $(ev.currentTarget);
    let pos = $target.attr('pos');
    let x = pos.slice(0,1);
    let y = pos.slice(2,3);
    this.game.playMove([parseInt(x), parseInt(y)]);
    $target.css('background-color', 'white');
    this.makeMove($target);
  })
};

View.prototype.makeMove = function ($square) {
  const mark = this.game.currentPlayer;
  console.log($square);
  $square.text(mark);

  if(this.game.isOver() === true) {
    alert(`Game over! Player ${mark} wins!`);
  }

  if(this.game.isOver() === 'cats') {
    alert("Cat's game!");
  }
  //debugger;
};

View.prototype.setupBoard = function () {
  let $el = this.$el;
  for(let i = 0; i < 3; i++) {
    $el.append('<ul>');
  }
  let $ul = $('ul');
  $ul.append('<li><li><li>');

  //TODO - make 9 li's
  for(let i = 0; i < 3; i++) {
    for(let j = 0; j < 3; j++) {
      $($ul[i].children[j]).attr("pos", [i, j]);
    }
  }
};

module.exports = View;
