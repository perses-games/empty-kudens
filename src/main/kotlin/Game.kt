package main.kotlin

import games.perses.game.DrawMode
import games.perses.game.Game
import games.perses.game.Screen
import games.perses.sprite.Sprite
import games.perses.sprite.SpriteBatch
import games.perses.texture.Textures
import kotlin.browser.document
import kotlin.js.Math.cos
import kotlin.js.Math.sin

/**
 * User: rnentjes
 * Date: 26-3-17
 * Time: 12:46
 */

class GameScreen: Screen() {
    var sprites = SpriteBatch()

    var sprite = Sprite("smiley")
    var x = 0f
    var y = 0f

    override fun loadResources() {
        Textures.load("smiley", "img/smiley.png")
    }

    override fun closeResources() {
        Textures.clear()
    }

    override fun update(time: Float, delta: Float) {
        Game.clearRed = sin((time / 3).toDouble()).toFloat()
        Game.clearGreen = sin((time / 5).toDouble()).toFloat()

        x = (400f + sin((time * 1.5)) * 300f).toFloat()
        y = (Game.view.height / 2.0 + cos((time * 2.5)) * 300f).toFloat()
    }

    override fun render() {
        sprites.draw(sprite, x, y, scale = 0.1f)
        sprites.render()
    }

}

fun main(args: Array<String>) {
    // set border color
    document.body?.style?.backgroundColor = "#242"

    Game.view.setToWidth(1200f)
    Game.view.drawMode = DrawMode.LINEAR

    Game.view.minAspectRatio = 1200f/1400f
    Game.view.maxAspectRatio = 1200f/800f

    Game.clearBlue = 0.5f
    Game.clearAlpha = 0.5f

    Game.start(GameScreen())
}