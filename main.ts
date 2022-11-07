controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    let Up = 0
    Direction = Up
    Red.setImage(img`
        . . . . . 2 2 2 2 2 . . . . . . 
        . . . . 2 2 2 2 2 2 2 . . . . . 
        . . . . 2 2 2 2 2 2 2 . . . . . 
        . . . 2 2 2 2 2 2 2 2 2 . . . . 
        . . . e 2 2 2 2 2 2 2 e . . . . 
        . . . e d d d d d d d e . . . . 
        . . . . d d d d d d d . . . . . 
        . . . . d d d d d d d . . . . . 
        . . . . d d d d d d d . . . . . 
        . . . 8 8 8 8 8 8 8 8 8 . . . . 
        . . . 8 8 8 8 8 8 8 8 8 . . . . 
        . . . d 8 8 8 8 8 8 8 d . . . . 
        . . . . 8 8 8 8 8 8 8 . . . . . 
        . . . . . 8 8 8 8 8 . . . . . . 
        . . . . . 8 8 . 8 8 . . . . . . 
        . . . . . e e . e e . . . . . . 
        `)
})
function Createlevel () {
    if (level == 1) {
        tiles.setTilemap(tilemap`level1`)
    } else if (level == 2) {
    	
    } else if (level == 3) {
    	
    }
    tiles.placeOnRandomTile(Red, assets.tile`myTile2`)
    for (let index = 0; index < 4; index++) {
        Pokemon = sprites.create(img`
            . . . . 9 9 . . . . . . . . . . 
            . . 9 9 9 3 9 . . . . . . . . . 
            . 9 9 9 3 3 9 . . . . . . . . . 
            . . . 9 3 3 9 . . . . . . . . . 
            . . . 9 3 3 9 . . . . . . . . . 
            . . . . 9 9 9 9 9 9 9 9 . . . . 
            . . . 9 f f 9 9 9 9 9 9 9 . . . 
            . . . 9 f f 9 9 9 9 9 9 9 . . . 
            . 3 3 9 9 9 9 9 9 9 9 9 9 . . . 
            . 9 9 9 9 9 9 9 9 9 9 9 9 9 . . 
            . 9 9 9 9 9 9 9 9 9 9 9 9 9 . . 
            . . 9 9 9 9 9 9 9 9 9 9 9 . . . 
            . . 9 9 9 9 9 9 9 9 9 9 9 . . . 
            . . . . . 9 9 9 9 9 9 9 9 . . . 
            . . . . . 9 9 . . . 9 9 9 . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Enemy)
        tiles.placeOnRandomTile(Pokemon, sprites.castle.tileGrass1)
        Pokemon.follow(Red, 30)
    }
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    let Left = 0
    Direction = Left
    Red.setImage(img`
        . . . . . . . 2 2 2 . . . . . . 
        . . . . . . 2 2 2 2 2 . . . . . 
        . . . . . 2 2 2 2 2 2 2 . . . . 
        . . 1 1 2 2 2 2 2 2 2 2 . . . . 
        . . . . e e e e e e e e . . . . 
        . . . . e e e e e e e e . . . . 
        . . . . d d d d d d d d . . . . 
        . . . . d d d d d d d d . . . . 
        . . . . d d d d d d d d . . . . 
        . . . . 8 8 8 8 8 8 8 8 . . . . 
        . . . . 8 8 8 8 8 8 8 8 . . . . 
        . . . . 8 8 8 d d 8 8 8 . . . . 
        . . . . 8 8 8 8 8 8 8 8 . . . . 
        . . . . . 8 8 . . 8 8 . . . . . 
        . . . . . 8 8 . . 8 8 . . . . . 
        . . . . . e e . . e e . . . . . 
        `)
})
function Clearlevel () {
    let list: Sprite[] = []
    for (let value of list) {
        value.destroy()
    }
    level += 1
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    let Right = 0
    Direction = Right
    Red.setImage(img`
        . . . . . . 2 2 2 . . . . . . . 
        . . . . . 2 2 2 2 2 . . . . . . 
        . . . . 2 2 2 2 2 2 2 . . . . . 
        . . . . 2 2 2 2 2 2 2 2 1 1 . . 
        . . . . e e e e e e e e . . . . 
        . . . . e e e e e e e e . . . . 
        . . . . d d d d d d d d . . . . 
        . . . . d d d d d d d d . . . . 
        . . . . d d d d d d d d . . . . 
        . . . . 8 8 8 8 8 8 8 8 . . . . 
        . . . . 8 8 8 8 8 8 8 8 . . . . 
        . . . . 8 8 8 d d 8 8 8 . . . . 
        . . . . 8 8 8 8 8 8 8 8 . . . . 
        . . . . . 8 8 . . 8 8 . . . . . 
        . . . . . 8 8 . . 8 8 . . . . . 
        . . . . . e e . . e e . . . . . 
        `)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    game.over(false)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    let Down = 0
    Direction = Down
    Red.setImage(img`
        . . . . . 2 2 2 2 2 . . . . . . 
        . . . . 2 2 1 1 1 2 2 . . . . . 
        . . . . 2 1 2 2 2 1 2 . . . . . 
        . . . 2 2 1 2 2 2 1 2 2 . . . . 
        . . . e 1 1 1 1 1 1 1 e . . . . 
        . . . e d f d d d f d e . . . . 
        . . . . d f d d d f d . . . . . 
        . . . . d d d d d d d . . . . . 
        . . . . d d d d d d d . . . . . 
        . . . 8 8 2 1 1 1 2 8 8 . . . . 
        . . . 8 8 2 1 1 1 2 8 8 . . . . 
        . . . d 8 2 1 1 1 2 8 d . . . . 
        . . . . 8 2 5 1 5 2 8 . . . . . 
        . . . . . 8 8 8 8 8 . . . . . . 
        . . . . . 8 8 . 8 8 . . . . . . 
        . . . . . e e . e e . . . . . . 
        `)
})
let Pokemon: Sprite = null
let Direction = 0
let Red: Sprite = null
let level = 0
level = 1
Red = sprites.create(img`
    . . . . . 2 2 2 2 2 . . . . . . 
    . . . . 2 2 1 1 1 2 2 . . . . . 
    . . . . 2 1 2 2 2 1 2 . . . . . 
    . . . 2 2 1 2 2 2 1 2 2 . . . . 
    . . . e 1 1 1 1 1 1 1 e . . . . 
    . . . e d f d d d f d e . . . . 
    . . . . d f d d d f d . . . . . 
    . . . . d d d d d d d . . . . . 
    . . . . d d d d d d d . . . . . 
    . . . 8 8 2 1 1 1 2 8 8 . . . . 
    . . . 8 8 2 1 1 1 2 8 8 . . . . 
    . . . d 8 2 1 1 1 2 8 d . . . . 
    . . . . 8 2 5 1 5 2 8 . . . . . 
    . . . . . 8 8 8 8 8 . . . . . . 
    . . . . . 8 8 . 8 8 . . . . . . 
    . . . . . e e . e e . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(Red)
scene.cameraFollowSprite(Red)
Createlevel()
