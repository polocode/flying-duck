controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    duck.vy = -70
})
let duck: Sprite = null
scene.setBackgroundColor(9)
effects.clouds.startScreenEffect()
duck = sprites.create(img`
    . . . . . . . . . . b 5 b . . . 
    . . . . . . . . . b 5 b . . . . 
    . . . . . . b b b b b b . . . . 
    . . . . . b b 5 5 5 5 f f f . . 
    . . . . b b 5 f f f 5 f f f . . 
    . . . . b f f f f f f f 4 4 4 b 
    . . . . f 5 5 f f f 4 4 4 4 b . 
    . . . b d 5 5 5 5 4 4 4 4 b . . 
    . b b d d d 5 5 5 5 5 5 5 b . . 
    b d d d b b b 5 5 5 5 5 5 5 b . 
    c d d b 5 5 d c 5 5 5 5 5 5 b . 
    c b b d 5 d c d 5 5 5 5 5 5 b . 
    c b 5 5 b c d d 5 5 5 5 5 5 b . 
    b b c c c d d d 5 5 5 5 5 d b . 
    . . . . c c d d d 5 5 5 b b . . 
    . . . . . . c c c c c b b . . . 
    `, SpriteKind.Player)
duck.setFlag(SpriteFlag.StayInScreen, true)
duck.y = 100
duck.ay = 100
