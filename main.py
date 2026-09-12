# --- LEVEL 3: VOLCANO RIDDLES ---
def start_level_3():
    global current_level, riddles, answers3, answers22, riddle_score
    current_level = 3
    if levelIcon:
        sprites.destroy(levelIcon)
    sprites.destroy_all_sprites_of_kind(SpriteKind.food)
    sprites.destroy_all_sprites_of_kind(SpriteKind.enemy)
    sprites.destroy_all_sprites_of_kind(SpriteKind.projectile)
    scene.set_background_color(9)
    # Tiny pause gives MakeCode time to wipe the screen completely!
    pause(300)
    levelIcon.set_image(img("""
        . . . b b b . . . . . . . . . .
        . . b b b b b b b . . . . . . .
        . b b b b b b b b b . . . . . .
        . b b b f b b b b b . . . . . .
        . b b b b b b b b b b b b . . .
        . b b . . . . b b b b b b b . .
        . . . . . . . b b b . b b b . .
        . . . . . . . b b b . b b b . .
        """))
    levelIcon.set_position(70, 15)
    game.splash("Level 3", "Boss Riddle Quiz")
    riddles = ["Tall steep hill?",
        "Water with no fish?",
        "Hot dry place?",
        "Big salty water?",
        "Erupts with lava?",
        "It lives in den",
        "This animal gives milk",
        "White, shell has to be broken to eat",
        "No rooms, not a map, room in word"]
    answers3 = ["MOUNTAIN",
        "RIVER",
        "DESERT",
        "OCEAN",
        "VOLCANO",
        "LION",
        "COW",
        "EGG",
        "MUSHROOM"]
    answers22 = ["mountain",
        "river",
        "desert",
        "ocean",
        "volcano",
        "Lion",
        "cow",
        "egg",
        "mushroom"]
    while riddle_score < 5:
        idx2 = randint(0, 8)
        ans2 = game.ask_for_string("LVL 3 (Score: " + ("" + str(info.score())) + ") -> " + riddles[idx2])
        if ans2 != None and (ans2 == answers3[idx2] or ans2 == answers22[idx2]):
            music.ba_ding.play()
            riddle_score += 1
            info.change_score_by(1)
            pause(200)
        else:
            music.buzzer.play()
            info.change_life_by(-1)
            if info.life() <= 0:
                return
            pause(200)
    sprites.destroy(levelIcon)
    if info.score() >= 13:
        trophy = sprites.create(img("""
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
                """),
            SpriteKind.player)
        trophy.set_position(80, 30)
        pause(1000)
    game.set_game_over_effect(True, effects.confetti)
    game.game_over(True)

def on_on_overlap(sprite2, otherSprite2):
    # NEW FIX: Prevents the corner icon from triggering a hit!
    if sprite2 != mySprite:
        return
    if current_level != 1:
        return
    info.change_life_by(-1)
    otherSprite2.destroy(effects.disintegrate, 500)
sprites.on_overlap(SpriteKind.player, SpriteKind.enemy, on_on_overlap)

# --- LEVEL 2: DESERT JUMBLES ---
def start_level_2():
    global current_level, jumbles, answers, answers2, jumble_score
    current_level = 2
    if mySprite:
        sprites.destroy(mySprite)
    sprites.destroy_all_sprites_of_kind(SpriteKind.food)
    sprites.destroy_all_sprites_of_kind(SpriteKind.enemy)
    sprites.destroy_all_sprites_of_kind(SpriteKind.projectile)
    scene.set_background_color(4)
    # Tiny pause gives MakeCode time to wipe the screen completely!
    pause(300)
    levelIcon.set_image(img("""
        . . e e . . . . . e e . . . . .
        . e e e e . . . e e e e . . . .
        . e e e e e e e e e e e . . . .
        . e e f e e e e e f e e . . . .
        . e e e e e e e e e e e . . . .
        . e e e e e f e e e e e . . . .
        . . e e e f f f e e e . . . . .
        . . . e e e e e e e . . . . . .
        """))
    levelIcon.set_position(74, 18)
    game.splash("Level 2", "Unscramble the words")
    jumbles = ["PMA", "EGLBO", "LIHL", "VACE", "EETR", "KLAE"]
    answers = ["MAP", "GLOBE", "HILL", "CAVE", "TREE", "LAKE"]
    answers2 = ["map", "globe", "hill", "cave", "tree", "lake"]
    while jumble_score < 5:
        idx = randint(0, 5)
        ans = game.ask_for_string("LVL 2 (Score: " + ("" + str(info.score())) + ") -> " + jumbles[idx])
        if ans != None and (ans == answers[idx] or ans == answers2[idx]):
            music.ba_ding.play()
            jumble_score += 1
            info.change_score_by(1)
            pause(200)
        else:
            music.buzzer.play()
            info.change_life_by(-1)
            if info.life() <= 0:
                return
            pause(200)
    start_level_3()
# --- LEVEL 1: GREEN PLAINS ---
def start_level_1():
    global mySprite, levelIcon, current_level
    mySprite = sprites.create(img_player, SpriteKind.player)
    controller.move_sprite(mySprite, 100, 0)
    mySprite.set_position(80, 110)
    levelIcon = sprites.create(img_bird, SpriteKind.player)
    levelIcon.set_position(145, 15)
    current_level = 1
# --- OVERLAP CONTROLS ---
def check_level_progress():
    global current_level
    if info.score() >= 3 and current_level == 1:
        current_level = 0
        start_level_2()

def on_on_overlap2(sprite, otherSprite):
    global word, meaning, current_target_idx
    # NEW FIX: Prevents the corner icon from triggering a catch!
    if sprite != mySprite:
        return
    if current_level != 1:
        return
    otherSprite.destroy(effects.ashes, 500)
    music.ba_ding.play()
    word = level1_words[current_target_idx]
    meaning = level1_meanings[current_target_idx]
    game.splash("" + word + ": " + meaning)
    info.change_score_by(1)
    if info.score() >= 3:
        check_level_progress()
    else:
        old_idx = current_target_idx
        while current_target_idx == old_idx:
            current_target_idx = randint(0, 2)
        if current_target_idx == 0:
            levelIcon.set_image(img_bird)
        elif current_target_idx == 1:
            levelIcon.set_image(img_fish)
        else:
            levelIcon.set_image(img_tree)
sprites.on_overlap(SpriteKind.player, SpriteKind.food, on_on_overlap2)

"""

1. Variables & Images

"""
meaning = ""
current_target_idx = 0
word = ""
jumble_score = 0
answers2: List[str] = []
answers: List[str] = []
jumbles: List[str] = []
mySprite: Sprite = None
riddle_score = 0
answers22: List[str] = []
answers3: List[str] = []
riddles: List[str] = []
levelIcon: Sprite = None
current_level = 0
img_tree: Image = None
img_fish: Image = None
img_bird: Image = None
img_player: Image = None
level1_meanings: List[str] = []
level1_words: List[str] = []
level1_words = ["Bird", "Fish", "Tree"]
level1_meanings = ["Has feathers and wings",
    "Swims in the water",
    "Has green leaves"]
# Image setup (These will appear perfectly in your Blocks menu)
img_player = img("""
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
    """)
img_bird = assets.image("""
    BIRD
    """)
img_fish = assets.image("""
    FISH
    """)
img_tree = img("""
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
    """)
img_word_bird = assets.image("""
    bird1
    """)
img_word_fish = assets.image("""
    Fish
    """)
img_word_tree = assets.image("""
    Tree
    """)
# --- WELCOME SCREEN ---
scene.set_background_color(9)
info.set_life(20)
info.set_score(0)
welcome_1 = sprites.create(assets.image("""
    tiger
    """), SpriteKind.player)
welcome_1.set_position(30, 25)
welcome_2 = sprites.create(img("""
        . . e e . . . . . e e . . . . .
        . e e e e . . . e e e e . . . .
        . e e e e e e e e e e e . . . .
        . e e f e e e e e f e e . . . .
        . e e e e e e e e e e e . . . .
        . e e e e e f e e e e e . . . .
        . . e e e f f f e e e . . . . .
        . . . e e e e e e e . . . . . .
        """),
    SpriteKind.player)
welcome_2.set_position(80, 25)
welcome_3 = sprites.create(img("""
        . . . b b b . . . . . . . . . .
        . . b b b b b b b . . . . . . .
        . b b b b b b b b b . . . . . .
        . b b b f b b b b b . . . . . .
        . b b b b b b b b b b b b . . .
        . b b . . . . b b b b b b b . .
        . . . . . . . b b b . b b b . .
        . . . . . . . b b b . b b b . .
        """),
    SpriteKind.player)
welcome_3.set_position(130, 25)
game.splash("LANGUAGE PLAYGROUND", "Press A to begin")
sprites.destroy(welcome_1)
sprites.destroy(welcome_2)
sprites.destroy(welcome_3)
# --- START GAME ---
start_level_1()

def on_update_interval():
    if current_level == 1:
        WordPicker = randint(0, 2)
        projectile2 = None
        if WordPicker == 0:
            projectile2 = sprites.create_projectile_from_side(img_word_bird, 0, 50)
        elif WordPicker == 1:
            projectile2 = sprites.create_projectile_from_side(img_word_fish, 0, 50)
        else:
            projectile2 = sprites.create_projectile_from_side(img_word_tree, 0, 50)
        if WordPicker == current_target_idx:
            projectile2.set_kind(SpriteKind.food)
        else:
            projectile2.set_kind(SpriteKind.enemy)
        projectile2.x = randint(10, 150)
game.on_update_interval(2000, on_update_interval)
