# --- LEVEL 3: VOLCANO RIDDLES ---
def start_level_3():
    global current_level, riddles, answers3, answers22, riddle_score
    current_level = 3
    info.set_score(0)
    scene.set_background_color(2)
    # Volcano Red
    # LEVEL 3 ICON: ELEPHANT
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
    game.show_long_text("""
            LEVEL 3: VOLCANO RIDDLES
            Solve 5 riddles to win!
            -> Press A to begin
            """,
        DialogLayout.BOTTOM)
    riddles = ["Tall steep hill?",
        "Water with no fish?",
        "Hot dry place?",
        "Big salty water?",
        "Erupts with lava?",
        "It lives in den",
        "This animal gives milk",
        "I am white and my shell has to be broken before you can eat"]
    answers3 = ["MOUNTAIN",
        "RIVER",
        "DESERT",
        "OCEAN",
        "VOLCANO",
        "LION",
        "COW",
        "EGG"]
    answers22 = ["mountain",
        "river",
        "desert",
        "ocean",
        "volcano",
        "Lion",
        "cow",
        "egg"]
    while riddle_score < 5:
        idx2 = randint(0, 4)
        ans2 = game.ask_for_string("-> " + riddles[idx2])
        if ans2 != None and (ans2 == answers3[idx2] or ans2 == answers22[idx2]):
            music.ba_ding.play()
            riddle_score += 1
            info.change_score_by(1)
            pause(500)
        else:
            music.buzzer.play()
            info.change_life_by(-1)
            if info.life() <= 0:
                return
            pause(500)
    game.set_game_over_effect(True, effects.confetti)
    game.game_over(True)

def on_on_overlap(sprite2, otherSprite2):
    info.change_life_by(-1)
    sprites.destroy(otherSprite2, effects.disintegrate, 500)
sprites.on_overlap(SpriteKind.player, SpriteKind.enemy, on_on_overlap)

# --- LEVEL 2: DESERT JUMBLES ---
def start_level_2():
    global current_level, jumbles, answers, answers2, jumble_score
    current_level = 2
    info.set_score(0)
    sprites.destroy_all_sprites_of_kind(SpriteKind.food)
    sprites.destroy_all_sprites_of_kind(SpriteKind.enemy)
    scene.set_background_color(4)
    # Desert Orange
    # LEVEL 2 ICON: CAT
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
    game.show_long_text("""
            LEVEL 2: JUMBLE WORDS
            Unscramble 5 words to advance!
            -> Press A to begin
            """,
        DialogLayout.BOTTOM)
    jumbles = ["PMA", "EGLBO", "LIHL", "VACE", "EETR", "KLAE"]
    answers = ["MAP", "GLOBE", "HILL", "CAVE", "TREE", "LAKE"]
    answers2 = ["map", "globe", "hill", "cave", "tree", "lake"]
    while jumble_score < 5:
        idx = randint(0, 4)
        ans = game.ask_for_string("-> " + jumbles[idx])
        if ans != None and (ans == answers[idx] or ans == answers2[idx]):
            music.ba_ding.play()
            jumble_score += 1
            info.change_score_by(1)
            pause(500)
        else:
            music.buzzer.play()
            info.change_life_by(-1)
            if info.life() <= 0:
                return
            pause(500)
    game.splash("LEVEL 2 COMPLETE!", "-> Press A for Level 3")
    start_level_3()
# --- LEVEL 1: GREEN PLAINS ---
def start_level_1():
    global current_level
    current_level = 1
    info.set_score(0)
    scene.set_background_color(9)
    # Light Blue Sky
    game.show_long_text("""
            Catch the word that matches the symbol!
            Score 5 points to level up.
            """,
        DialogLayout.BOTTOM)
# --- PROGRESS TRACKER ---
def check_level_progress():
    if info.score() >= 5:
        if current_level == 1:
            game.splash("LEVEL 1 COMPLETE!", "-> Press A for Level 2")
            start_level_2()

def on_on_overlap2(sprite, otherSprite):
    info.change_score_by(1)
    sprites.destroy(otherSprite, effects.ashes, 500)
    check_level_progress()
sprites.on_overlap(SpriteKind.player, SpriteKind.food, on_on_overlap2)

jumble_score = 0
answers2: List[str] = []
answers: List[str] = []
jumbles: List[str] = []
riddle_score = 0
answers22: List[str] = []
answers3: List[str] = []
riddles: List[str] = []
levelIcon: Sprite = None
current_level = 0
current_level = 1
info.set_life(20)
# --- THE BIRD ---
mySprite = sprites.create(img("""
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
        """),
    SpriteKind.player)
controller.move_sprite(mySprite, 100, 0)
mySprite.set_position(80, 110)
# LEVEL ICON (Starts as Ant)
levelIcon = sprites.create(assets.image("""
    BIRD
    """), SpriteKind.player)
levelIcon.set_position(145, 15)
start_level_1()

def on_update_interval():
    if current_level == 1:
        WordPicker = randint(1, 3)
        projectile2 = None
        if WordPicker == 1:
            projectile2 = sprites.create_projectile_from_side(assets.image("""
                bird1
                """), 0, 50)
            projectile2.set_kind(SpriteKind.food)
        elif WordPicker == 2:
            projectile2 = sprites.create_projectile_from_side(assets.image("""
                Fish
                """), 0, 50)
            projectile2.set_kind(SpriteKind.enemy)
        else:
            projectile2 = sprites.create_projectile_from_side(assets.image("""
                Tiger
                """), 0, 50)
            projectile2.set_kind(SpriteKind.enemy)
        projectile2.x = randint(10, 150)
game.on_update_interval(2000, on_update_interval)
