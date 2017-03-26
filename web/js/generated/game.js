if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'game'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'game'.");
}
if (typeof kudens === 'undefined') {
  throw new Error("Error loading module 'game'. Its dependency 'kudens' was not found. Please, check whether 'kudens' is loaded prior to 'game'.");
}
var game = function (_, Kotlin, $module$kudens) {
  'use strict';
  var texture_0 = $module$kudens.games.perses.texture;
  var game_0 = $module$kudens.games.perses.game;
  var Screen = $module$kudens.games.perses.game.Screen;
  var SpriteBatch = $module$kudens.games.perses.sprite.SpriteBatch;
  var Sprite = $module$kudens.games.perses.sprite.Sprite;
  var DrawMode = $module$kudens.games.perses.game.DrawMode;
  GameScreen.prototype = Object.create(Screen.prototype);
  GameScreen.prototype.constructor = GameScreen;
  function GameScreen() {
    Screen.call(this);
    this.sprites = new SpriteBatch();
    this.sprite = new Sprite('smiley');
    this.x = 0.0;
    this.y = 0.0;
  }
  GameScreen.prototype.loadResources = function () {
    texture_0.Textures.load_puj7f4$('smiley', 'img/smiley.png');
  };
  GameScreen.prototype.closeResources = function () {
    texture_0.Textures.clear();
  };
  GameScreen.prototype.update_dleff0$ = function (time, delta) {
    game_0.Game.clearRed = Math.sin(time / 3);
    game_0.Game.clearGreen = Math.sin(time / 5);
    this.x = 400.0 + Math.sin(time * 1.5) * 300.0;
    this.y = game_0.Game.view.height / 2.0 + Math.cos(time * 2.5) * 300.0;
  };
  GameScreen.prototype.render = function () {
    this.sprites.draw_kjwdzj$(this.sprite, this.x, this.y, 0.1);
    this.sprites.render();
  };
  GameScreen.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'GameScreen',
    interfaces: [Screen]
  };
  function main(args) {
    var tmp$, tmp$_0;
    (tmp$_0 = (tmp$ = document.body) != null ? tmp$.style : null) != null ? (tmp$_0.backgroundColor = '#242') : null;
    game_0.Game.view.setToWidth_mx4ult$(1200.0);
    game_0.Game.view.drawMode = DrawMode.LINEAR;
    game_0.Game.view.minAspectRatio = 1200.0 / 1400.0;
    game_0.Game.view.maxAspectRatio = 1200.0 / 800.0;
    game_0.Game.setClearColor_7b5o5w$(0.0, 0.0, 0.5, 0.5);
    game_0.Game.start_lbnb05$(new GameScreen());
  }
  var package$main = _.main || (_.main = {});
  var package$kotlin = package$main.kotlin || (package$main.kotlin = {});
  package$kotlin.GameScreen = GameScreen;
  package$kotlin.main_kand9s$ = main;
  Kotlin.defineModule('game', _);
  main([]);
  return _;
}(typeof game === 'undefined' ? {} : game, kotlin, kudens);

//@ sourceMappingURL=game.js.map
