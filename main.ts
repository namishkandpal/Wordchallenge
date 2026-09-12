// --- LEVEL 3: VOLCANO RIDDLES ---
function start_level_3 () {
    let idx2: number;
let ans2: string;
let trophy: Sprite;
current_level = 3
    if (levelIcon) {
        sprites.destroy(levelIcon)
    }
    sprites.destroyAllSpritesOfKind(SpriteKind.Food)
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
    sprites.destroyAllSpritesOfKind(SpriteKind.Projectile)
    scene.setBackgroundColor(9)
    // Tiny pause gives MakeCode time to wipe the screen completely!
    pause(300)
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
    levelIcon.setPosition(70, 15)
    game.splash("Level 3", "Boss Riddle Quiz")
    riddles = [
    "Tall steep hill?",
    "Water with no fish?",
    "Hot dry place?",
    "Big salty water?",
    "Erupts with lava?",
    "It lives in den",
    "This animal gives milk",
    "White, shell has to be broken to eat",
    "No rooms, not a map, room in word"
    ]
    answers3 = [
    "MOUNTAIN",
    "RIVER",
    "DESERT",
    "OCEAN",
    "VOLCANO",
    "LION",
    "COW",
    "EGG",
    "MUSHROOM"
    ]
    answers22 = [
    "mountain",
    "river",
    "desert",
    "ocean",
    "volcano",
    "Lion",
    "cow",
    "egg",
    "mushroom"
    ]
    while (riddle_score < 5) {
        idx2 = randint(0, 8)
        ans2 = game.askForString("LVL 3 (Score: " + ("" + info.score()) + ") -> " + riddles[idx2])
        if (ans2 != null && (ans2 == answers3[idx2] || ans2 == answers22[idx2])) {
            music.baDing.play()
            riddle_score += 1
            info.changeScoreBy(1)
            pause(200)
        } else {
            music.buzzer.play()
            info.changeLifeBy(-1)
            if (info.life() <= 0) {
                return
            }
            pause(200)
        }
    }
    sprites.destroy(levelIcon)
    if (info.score() >= 13) {
        trophy = sprites.create(img`
            . . . 5 5 5 5 5 5 5 5 5 5 . . . 
            . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
            . 5 5 . 5 5 5 5 5 5 5 5 . 5 5 . 
            . 5 5 . 5 5 5 5 5 5 5 5 . 5 5 . 
            . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
            . . . . 5 5 5 5 5 5 5 5 . . . . 
            . . . . . 5 5 5 5 5 5 . . . . . 
            . . . . . . 5 5 5 5 . . . . . . 
            . . . . . . 5 5 5 5 . . . . . . 
            . . . . . . 5 5 5 5 . . . . . . 
            . . . . 5 5 5 5 5 5 5 5 . . . . 
            . . . 5 5 5 5 5 5 5 5 5 5 . . . 
            `, SpriteKind.Player)
        trophy.setPosition(80, 30)
        pause(1000)
    }
    game.setGameOverEffect(true, effects.confetti)
    game.gameOver(true)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite2, otherSprite2) {
    // NEW FIX: Prevents the corner icon from triggering a hit!
    if (sprite2 != mySprite) {
        return
    }
    if (current_level != 1) {
        return
    }
    info.changeLifeBy(-1)
    otherSprite2.destroy(effects.disintegrate, 500)
})
// --- LEVEL 2: DESERT JUMBLES ---
function start_level_2 () {
    let idx: number;
let ans: string;
current_level = 2
    if (mySprite) {
        sprites.destroy(mySprite)
    }
    sprites.destroyAllSpritesOfKind(SpriteKind.Food)
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
    sprites.destroyAllSpritesOfKind(SpriteKind.Projectile)
    scene.setBackgroundColor(4)
    // Tiny pause gives MakeCode time to wipe the screen completely!
    pause(300)
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
    levelIcon.setPosition(74, 18)
    game.splash("Level 2", "Unscramble the words")
    jumbles = [
    "PMA",
    "EGLBO",
    "LIHL",
    "VACE",
    "EETR",
    "KLAE"
    ]
    answers = [
    "MAP",
    "GLOBE",
    "HILL",
    "CAVE",
    "TREE",
    "LAKE"
    ]
    answers2 = [
    "map",
    "globe",
    "hill",
    "cave",
    "tree",
    "lake"
    ]
    while (jumble_score < 5) {
        idx = randint(0, 5)
        ans = game.askForString("LVL 2 (Score: " + ("" + info.score()) + ") -> " + jumbles[idx])
        if (ans != null && (ans == answers[idx] || ans == answers2[idx])) {
            music.baDing.play()
            jumble_score += 1
            info.changeScoreBy(1)
            pause(200)
        } else {
            music.buzzer.play()
            info.changeLifeBy(-1)
            if (info.life() <= 0) {
                return
            }
            pause(200)
        }
    }
    start_level_3()
}
// --- LEVEL 1: GREEN PLAINS ---
function start_level_1 () {
    mySprite = sprites.create(img_player, SpriteKind.Player)
    controller.moveSprite(mySprite, 100, 0)
    mySprite.setPosition(80, 110)
    levelIcon = sprites.create(img_bird, SpriteKind.Player)
    levelIcon.setPosition(145, 15)
    current_level = 1
}
// --- OVERLAP CONTROLS ---
function check_level_progress () {
    if (info.score() >= 3 && current_level == 1) {
        current_level = 0
        start_level_2()
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    let old_idx: number;
// NEW FIX: Prevents the corner icon from triggering a catch!
    if (sprite != mySprite) {
        return
    }
    if (current_level != 1) {
        return
    }
    otherSprite.destroy(effects.ashes, 500)
    music.baDing.play()
    word = level1_words[current_target_idx]
    meaning = level1_meanings[current_target_idx]
    game.splash("" + word + ": " + meaning)
    info.changeScoreBy(1)
    if (info.score() >= 3) {
        check_level_progress()
    } else {
        old_idx = current_target_idx
        while (current_target_idx == old_idx) {
            current_target_idx = randint(0, 2)
        }
        if (current_target_idx == 0) {
            levelIcon.setImage(img_bird)
        } else if (current_target_idx == 1) {
            levelIcon.setImage(img_fish)
        } else {
            levelIcon.setImage(img_tree)
        }
    }
})
/**
 * 1. Variables & Images
 */
let meaning = ""
let current_target_idx = 0
let word = ""
let jumble_score = 0
let answers2: string[] = []
let answers: string[] = []
let jumbles: string[] = []
let mySprite: Sprite = null
let riddle_score = 0
let answers22: string[] = []
let answers3: string[] = []
let riddles: string[] = []
let levelIcon: Sprite = null
let current_level = 0
let img_tree: Image = null
let img_fish: Image = null
let img_bird: Image = null
let img_player: Image = null
let level1_meanings: string[] = []
let level1_words: string[] = []
level1_words = ["Bird", "Fish", "Tree"]
level1_meanings = ["Has feathers and wings", "Swims in the water", "Has green leaves"]
// Image setup (These will appear perfectly in your Blocks menu)
img_player = img`
    . . . . . . . . . . . . . . . . 
    . . . . . f f f f . . . . . . . 
    . . . . f d d d d f . . . . . . 
    . . . . f d f f d f . . . . . . 
    . . . . f d d d d f . . . . . . 
    . . . . . f f f f . . . . . . . 
    . . . . . . f f . . . . . . . . 
    . . . . f f 8 8 f f . . . . . . 
    . . . f 8 8 8 8 8 8 f . . . . . 
    . . f 8 8 8 8 8 8 8 8 f . . . . 
    . . . . . 8 8 8 8 . . . . . . . 
    . . . . . 8 8 8 8 . . . . . . . 
    . . . . d d . . d d . . . . . . 
    . . . . f f . . f f . . . . . . 
    `
img_bird = assets.image`BIRD`
img_fish = assets.image`FISH`
img_tree = img`
    . . . . . . . . . . . . . . . . 
    . . . . . . 7 7 7 . . . . . . . 
    . . . . 7 7 7 7 7 7 7 . . . . . 
    . . . 7 7 7 7 7 7 7 7 7 . . . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 . . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 . . . 
    . . . 7 7 7 7 7 7 7 7 7 . . . . 
    . . . . . . e e e . . . . . . . 
    . . . . . . e e e . . . . . . . 
    . . . . . . e e e . . . . . . . 
    . . . . . . e e e . . . . . . . 
    . . . . . . e e e . . . . . . . 
    . . . . . . e e e . . . . . . . 
    `
let img_word_bird = assets.image`bird1`
let img_word_fish = assets.image`Fish`
let img_word_tree = assets.image`Tree`
// --- WELCOME SCREEN ---
scene.setBackgroundColor(9)
info.setLife(20)
info.setScore(0)
let welcome_1 = sprites.create(assets.image`tiger`, SpriteKind.Player)
welcome_1.setPosition(30, 25)
let welcome_2 = sprites.create(img`
    . . e e . . . . . e e . . . . . 
    . e e e e . . . e e e e . . . . 
    . e e e e e e e e e e e . . . . 
    . e e f e e e e e f e e . . . . 
    . e e e e e e e e e e e . . . . 
    . e e e e e f e e e e e . . . . 
    . . e e e f f f e e e . . . . . 
    . . . e e e e e e e . . . . . . 
    `, SpriteKind.Player)
welcome_2.setPosition(80, 25)
let welcome_3 = sprites.create(img`
    . . . b b b . . . . . . . . . . 
    . . b b b b b b b . . . . . . . 
    . b b b b b b b b b . . . . . . 
    . b b b f b b b b b . . . . . . 
    . b b b b b b b b b b b b . . . 
    . b b . . . . b b b b b b b . . 
    . . . . . . . b b b . b b b . . 
    . . . . . . . b b b . b b b . . 
    `, SpriteKind.Player)
welcome_3.setPosition(130, 25)
game.splash("LANGUAGE PLAYGROUND", "Press A to begin")
sprites.destroy(welcome_1)
sprites.destroy(welcome_2)
sprites.destroy(welcome_3)
// --- START GAME ---
start_level_1()
game.onUpdateInterval(2000, function () {
    let WordPicker: number;
let projectile2: Sprite;
if (current_level == 1) {
        WordPicker = randint(0, 2)
        projectile2 = null
if (WordPicker == 0) {
            projectile2 = sprites.createProjectileFromSide(img_word_bird, 0, 50)
        } else if (WordPicker == 1) {
            projectile2 = sprites.createProjectileFromSide(img_word_fish, 0, 50)
        } else {
            projectile2 = sprites.createProjectileFromSide(img_word_tree, 0, 50)
        }
        if (WordPicker == current_target_idx) {
            projectile2.setKind(SpriteKind.Food)
        } else {
            projectile2.setKind(SpriteKind.Enemy)
        }
        projectile2.x = randint(10, 150)
    }
})
