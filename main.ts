sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
})
let food2: Sprite = null
let mySprite2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . f f f f f f . . . . . 
    . . . . f f f f f f f f . . . . 
    . . . f f f f f f f f f . . . . 
    . . . f f f f f f f f f . . . . 
    . . . f f f f f f f f f . . . . 
    . . . f f f f f f f f f . . . . 
    . . . . f f f f f f f . . . . . 
    . . . . . . f f f . . . . . . . 
    . . . f f f f f f f f . . . . . 
    . . f f f f f f f f f f f . . . 
    . . . . . . f f f . . . f . . . 
    . . . . . f f f f f . . . . . . 
    . . . . f f f f f f . . . . . . 
    . . . . f f . . f f f . . . . . 
    . . . . f f . . . f f . . . . . 
    `, SpriteKind.Player)
mySprite2.setPosition(65, 52)
scene.setBackgroundColor(1)
controller.moveSprite(mySprite2, 100, 100)
mySprite2.setStayInScreen(true)
game.onUpdateInterval(5000, function () {
    food2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . . f f f f f . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . . . f f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Food)
    food2.setPosition(randint(0, 100), randint(0, 100))
})
