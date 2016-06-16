const View = require('./ttt-view')
const Game = require('./game')

$( () => {
  let $ttt = $('.ttt');
  const game = new Game();
  const view = new View(game, $ttt);
});
