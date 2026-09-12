//  --- LEVEL 3: VOLCANO RIDDLES ---
function start_level_3() {
    let idx2: number;
    let ans2: string;
    
    current_level = 3
    info.setScore(0)
    scene.setBackgroundColor(2)
    //  Volcano Red
    //  LEVEL 3 ICON: ELEPHANT
    levelIcon.setImage(img`
        . . . b b b . . . . . . . . . .
        . . b b b b b b b . . . . . . .
        . b b b b b b b b b . . . . . .
        . b b b f b b b b b . . . . . .
        . b b b b b b b b b b b b . . .
        . b b . . . . b b b b b b b . .
        . . . . . . . b b b . b b b . .
        . . . . . . . b b b . b b b . .
        `)
    game.showLongText(`
            LEVEL 3: VOLCANO RIDDLES
            Solve 5 riddles to win!
            -> Press A to begin
            `, DialogLayout.Bottom)
    riddles = ["Tall steep hill?", "Water with no fish?", "Hot dry place?", "Big salty water?", "Erupts with lava?", "It lives in den", "This animal gives milk", "I am white and my shell has to be broken before you can eat"]
    answers3 = ["MOUNTAIN", "RIVER", "DESERT", "OCEAN", "VOLCANO", "LION", "COW", "EGG"]
    answers22 = ["mountain", "river", "desert", "ocean", "volcano", "Lion", "cow", "egg"]
    while (riddle_score < 5) {
        idx2 = randint(0, 4)
        ans2 = game.askForString("-> " + riddles[idx2])
        if (ans2 != null && (ans2 == answers3[idx2] || ans2 == answers22[idx2])) {
            music.baDing.play()
            riddle_score += 1
            info.changeScoreBy(1)
            pause(500)
        } else {
            music.buzzer.play()
            info.changeLifeBy(-1)
            if (info.life() <= 0) {
                return
            }
            
            pause(500)
        }
        
    }
    game.setGameOverEffect(true, effects.confetti)
    game.gameOver(true)
}

sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function on_on_overlap(sprite2: Sprite, otherSprite2: Sprite) {
    info.changeLifeBy(-1)
    sprites.destroy(otherSprite2, effects.disintegrate, 500)
})
//  --- LEVEL 2: DESERT JUMBLES ---
function start_level_2() {
    let idx: number;
    let ans: string;
    
    current_level = 2
    info.setScore(0)
    sprites.destroyAllSpritesOfKind(SpriteKind.Food)
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
    scene.setBackgroundColor(4)
    //  Desert Orange
    //  LEVEL 2 ICON: CAT
    levelIcon.setImage(img`
        . . e e . . . . . e e . . . . .
        . e e e e . . . e e e e . . . .
        . e e e e e e e e e e e . . . .
        . e e f e e e e e f e e . . . .
        . e e e e e e e e e e e . . . .
        . e e e e e f e e e e e . . . .
        . . e e e f f f e e e . . . . .
        . . . e e e e e e e . . . . . .
        `)
    game.showLongText(`
            LEVEL 2: JUMBLE WORDS
            Unscramble 5 words to advance!
            -> Press A to begin
            `, DialogLayout.Bottom)
    jumbles = ["PMA", "EGLBO", "LIHL", "VACE", "EETR", "KLAE"]
    answers = ["MAP", "GLOBE", "HILL", "CAVE", "TREE", "LAKE"]
    answers2 = ["map", "globe", "hill", "cave", "tree", "lake"]
    while (jumble_score < 5) {
        idx = randint(0, 4)
        ans = game.askForString("-> " + jumbles[idx])
        if (ans != null && (ans == answers[idx] || ans == answers2[idx])) {
            music.baDing.play()
            jumble_score += 1
            info.changeScoreBy(1)
            pause(500)
        } else {
            music.buzzer.play()
            info.changeLifeBy(-1)
            if (info.life() <= 0) {
                return
            }
            
            pause(500)
        }
        
    }
    game.splash("LEVEL 2 COMPLETE!", "-> Press A for Level 3")
    start_level_3()
}

//  --- LEVEL 1: GREEN PLAINS ---
function start_level_1() {
    
    current_level = 1
    info.setScore(0)
    scene.setBackgroundColor(9)
    //  Light Blue Sky
    game.showLongText(`
            Catch the word that matches the symbol!
            Score 5 points to level up.
            `, DialogLayout.Bottom)
}

//  --- PROGRESS TRACKER ---
function check_level_progress() {
    if (info.score() >= 5) {
        if (current_level == 1) {
            game.splash("LEVEL 1 COMPLETE!", "-> Press A for Level 2")
            start_level_2()
        }
        
    }
    
}

sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function on_on_overlap2(sprite: Sprite, otherSprite: Sprite) {
    info.changeScoreBy(1)
    sprites.destroy(otherSprite, effects.ashes, 500)
    check_level_progress()
})
let jumble_score = 0
let answers2 : string[] = []
let answers : string[] = []
let jumbles : string[] = []
let riddle_score = 0
let answers22 : string[] = []
let answers3 : string[] = []
let riddles : string[] = []
let levelIcon : Sprite = null
let current_level = 0
current_level = 1
info.setLife(20)
//  --- THE BIRD ---
let mySprite = sprites.create(img`
        . . . . . . . . . . . . . . . .
        . . . . . 4 4 4 4 . . . . . . .
        . . . 4 4 4 4 4 4 4 . . . . . .
        . . 4 4 4 4 4 4 4 4 4 . . . . .
        . 4 4 4 4 4 4 4 f 4 4 4 . . . .
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 . .
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 5 .
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 5 5
        . 4 4 4 4 4 4 4 4 4 4 4 4 4 5 .
        . 4 4 4 4 4 4 4 4 4 4 . . . . .
        . . 4 4 4 4 4 4 4 4 . . . . . .
        . . . 4 4 . . 4 4 . . . . . . .
        . . . f f . . f f . . . . . . .
        `, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 0)
mySprite.setPosition(80, 110)
//  LEVEL ICON (Starts as Ant)
levelIcon = sprites.create(assets.image`
    BIRD
    `, SpriteKind.Player)
levelIcon.setPosition(145, 15)
start_level_1()
game.onUpdateInterval(2000, function on_update_interval() {
    let WordPicker: number;
    let projectile2: Sprite;
    if (current_level == 1) {
        WordPicker = randint(1, 3)
        projectile2 = null
        if (WordPicker == 1) {
            projectile2 = sprites.createProjectileFromSide(assets.image`
                bird1
                `, 0, 50)
            projectile2.setKind(SpriteKind.Food)
        } else if (WordPicker == 2) {
            projectile2 = sprites.createProjectileFromSide(assets.image`
                Fish
                `, 0, 50)
            projectile2.setKind(SpriteKind.Enemy)
        } else {
            projectile2 = sprites.createProjectileFromSide(assets.image`
                Tiger
                `, 0, 50)
            projectile2.setKind(SpriteKind.Enemy)
        }
        
        projectile2.x = randint(10, 150)
    }
    
})
