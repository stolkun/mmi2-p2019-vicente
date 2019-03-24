import "waypoints/lib/noframework.waypoints.min.js";

// MODAL
const   icone = document.querySelectorAll(".section__heroe-icone"),
        modal = document.getElementById("modal"),
        modalClose = document.getElementById("modal__close"),
        modalText = {
            "abomination": {
                "thumbnail": require("../img/heroes_thumble/abomination.png"),
                "comment": "“Tortured and reclusive... this man is more dangerous than he seems... „",
                "skills": [
                    [ require("../img/abomination/skill_1.png"), "Transform", "<p>Self(human): Change abomination to beast</p><p>+20% Blight resistance (4rds)</p><p>+10% Damage</p><p>+1 Speed (4rds)</p><p>Heal 5 hp</p><p>Other heroes: +8 Stress</p><p>Self(beast): Change abomination to human</p><p>-4 Speed</p><p>Heal 5hp</p><p>Other heroes: -2 Stress</p>", "<div></div><div class='green'></div><div class='green'></div><div class='green'></div>", "Self"],
                    [ require("../img/abomination/skill_2.png"), "Manacles", "<p>Accuracy: 95%</p><p>Damage Modification: -60%</p><p>Critical Modification: 1%</p><p>Stun enemies(90%)</p>", "<div></div><div class='green'></div><div class='green'></div><div></div>", "<div class='red'></div><div class='red'></div><div class='red'></div><div></div>"],
                    [ require("../img/abomination/skill_3.png"), "Beast's Bile", "<p>Accuracy: 95%</p><p>Damage Modification: -90%</p><p>Critical Modification: 2%</p><p>Blight (2pts/rd for 3 rds)</p><p>-20% Blight resistance</p>", "<div></div><div class='green'></div><div class='green'></div><div></div>", "<div></div><div class='red'></div><div class='red'></div><div></div>"],
                    [ require("../img/abomination/skill_4.png"), "Absolution", "<p>Self: Heal 7 Stress</p><p>Heal 3 hp</p>", "<div class='green'></div><div class='green'></div><div class='green'></div><div class='green'></div>", "Self"],
                    [ require("../img/abomination/skill_5.png"), "Rake", "<p>Accuracy: 90%</p><p>Damage Modification: -50%</p><p>Critical Modification: 3%</p><p>Self: +15% Damage(4rds)</p>", "<div></div><div></div><div class='green'></div><div class='green'></div>", "<div class='red'></div><div class='red'></div><div></div><div></div>"],
                    [ require("../img/abomination/skill_6.png"), "Rage", "<p>Accuracy: 85%</p><p>Critical Modification: 7,5%</p>", "<div></div><div></div><div class='green'></div><div class='green'></div>", "<div class='red'></div><div class='red'></div><div class='red'></div><div></div>"],
                    [ require("../img/abomination/skill_7.png"), "Slam", "<p>Self: forward 1</p><p>-25% Damage</p><p>Accuracy: 80%</p><p>Critical Modification: 1%</p><p>Knockback 2</p><p>-10 Dodge</p><p>-2 Speed</p>", "<div></div><div class='green'></div><div class='green'></div><div class='green'></div>", "<div class='red'></div><div class='red'></div><div></div><div></div>"]
                ],
                "rests": [
                    [ require("../img/abomination/rest_1.png"), "Anger Management", "<p>3</p>", "<p>Self: +20 Stress</p><p>All companions: -10 Stress</p>"],
                    [ require("../img/abomination/rest_2.png"), "Psych Up", "<p>3</p>", "<p>Self: +25% Damage</p><p>All companions:</p><p>If not religious: +10 Stress</p><p>If religious: +20 Stress</p>"],
                    [ require("../img/abomination/rest_3.png"), "The Quickening", "<p>3</p>", "<p>Self: +4 Speed(4Battles)</p>"],
                    [ require("../img/abomination/rest_4.png"), "Eldritch Blow", "<p>3</p>", "<p>Self: +40% Poisoning resistance, Bleeding and Disease(4Battles)</p><p>+20% Stress(4Battles)</p>"]
                ],
                "statistics": [
                    ["26", "31", "36", "41", "46"],
                    ["7,5", "12,5", "17,5", "22,5", "27,5"],
                    ["0%", "0%", "0%", "0%", "0%"],
                    ["7", "7", "8", "8", "9"],
                    ["+0", "+0", "+0", "+0", "+0"],
                    ["2%", "3%", "4%", "5%", "6%"],
                    ["6-11", "7-13", "8-15", "10-18", "11-20"]
                ],
                "resistances": [
                    "40%", "60%", "20%", "67%", "40%", "30%", "20%", "10%"
                ]
            },
            "antiquarian": {
                "thumbnail": require("../img/heroes_thumble/antiquarian.png"),
                "comment": "“She searches where others will not go... and sees what others will not see. „",
                "skills": [
                    [ require("../img/antiquarian/skill_1.png"), "Nervous Stab", "<p>Accuracy: 85%</p><p>Critical Modification: 3%</p>", "<div class='green'></div><div class='green'></div><div class='green'></div><div class='green'></div>", "<div class='red'></div><div class='red'></div><div class='red'></div><div></div>"],
                    [ require("../img/antiquarian/skill_2.png"), "Festering Vapours", "<p>Accuracy: 95%</p><p>-75% Damage</p><p>Blight(1pts/rd for 3rds)</p><p>-20% Blight resistance</p>", "<div class='green'></div><div class='green'></div><div class='green'></div><div class='green'></div>", "<div class='red'></div><div class='red'></div><div class='red'></div><div class='red'></div>"],
                    [ require("../img/antiquarian/skill_3.png"), "Get Down!", "<p>Back 2</p><p>+10% Blight Skill Chance (4 rds)</p><p>+15 Dodge</p><p>+1 Speed</p>", "<div class='green'></div><div class='green'></div><div class='green'></div><div class='green'></div>", "Self"],
                    [ require("../img/antiquarian/skill_4.png"), "Flashpowdrer", "<p>-100% Damage</p><p>Accuracy: 95%</p><p>-10 Accuracy(2rds)</p><p>Bypass/remove Stealth</p>", "<div class='green'></div><div class='green'></div><div class='green'></div><div class='green'></div>", "<div class='red'></div><div class='red'></div><div class='red'></div><div class='red'></div>"],
                    [ require("../img/antiquarian/skill_5.png"), "Fortifying Vapours", "<p>Heal 1-1</p><p>+10% Blight and Bleed resistance</p>", "<div class='green'></div class='green'><div></div><div></div><div></div>", "<div class='green'></div><div class='green'></div><div class='green'></div><div class='green'></div>"],
                    [ require("../img/antiquarian/skill_6.png"), "Invigorating Vapours", "<p>+3 Dodge</p>", "<div class='green'></div class='green'><div></div><div></div><div></div>", "<div class='green'></div><div class='green'></div><div class='green'></div><div class='green'></div>"],
                    [ require("../img/antiquarian/skill_7.png"), "Protect Me", "<p>+4 Dodge</p><p>+10% Protection</p><p>Mark Targets(3rds)</p><p>Force Guards by allies(2rds)</p>", "<div class='green'></div><div class='green'></div><div class='green'></div><div class='green'></div>", "<div class='green'></div><div class='green'></div><div class='green'></div><div class='green'></div>"]
                ],
                "rests": [
                    [ require("../img/antiquarian/rest_1.png"), "Resupply", "<p>1</p>", "<p>Self: Produces a random supply item (3uses)</p>"],
                    [ require("../img/antiquarian/rest_2.png"), "Trinket Scourge", "<p>2</p>", "<p>Self: Produce a random trinket</p>"],
                    [ require("../img/antiquarian/rest_3.png"), "Strange Powders", "<p>2</p>", "<p>One companion: +20% Blight, Bleed, Move, Debuff and Disease(4 Battles)</p>"],
                    [ require("../img/antiquarian/rest_4.png"), "Curious Incantation", "<p>1</p>", "<p>Self: -50% Stress(4Battles)</p>"]
                ],
                "statistics": [
                    ["17", "20", "23", "26", "29"],
                    ["10", "15", "20", "25", "30"],
                    ["0%", "0%", "0%", "0%", "0%"],
                    ["5", "5", "6", "6", "7"],
                    ["+0", "+0", "+0", "+0", "+0"],
                    ["1%", "2%", "3%", "4%", "5%"],
                    ["3-5", "4-6", "4-7", "5-8", "5-9"]
                ],
                "resistances": [
                    "20%", "20%", "20%", "67%", "20%", "20%", "20%", "10%"
                ]
            },
            "arbalest": {
                "thumbnail": require("../img/heroes_thumble/arbalest.png"),
                "comment": "“Shoot, bandage and pillage: the dancing steps of war. „",
                "skills": [
                    [ require("../img/arbalest/skill_1.png"), "Transform", "<p>Self(human): Change abomination to beast</p><p>+20% Blight resistance</p><p>+10% Damage</p><p>Other heroes: +8 Stress</p><p>Self(beast): Change abomination to human</p><p>-4 Speed</p><p>Heal 5hp</p><p>Other heroes: -5 Stress</p>", "<div></div><div class='green'></div><div class='green'></div><div class='green'></div>", "Self"],
                    [ require("../img/arbalest/skill_2.png"), "Manacles", "<p>Precision: 80%</p><p>Damage Modification: -50%</p><p>Stun enemies</p>", "<div></div><div class='green'></div><div class='green'></div><div></div>", "<div class='red'></div><div class='red'></div><div class='red'></div><div></div>"],
                    [ require("../img/arbalest/skill_3.png"), "Beast's Bile", "<p>Precision: 90%</p><p>Damage Modification: -100%</p><p>Critical Modification: 1%</p><p>Blightenemies</p><p>-20% Blight resistance</p>", "<div></div><div class='green'></div><div class='green'></div><div></div>", "<div></div><div class='red'></div><div class='red'></div><div></div>"],
                    [ require("../img/arbalest/skill_4.png"), "Absolution", "<p>Self: Heal 8 Stress</p><p>Heal 4 hp</p>", "<div class='green'></div><div class='green'></div><div class='green'></div><div class='green'></div>", "Self"],
                    [ require("../img/arbalest/skill_5.png"), "Rake", "<p>Precision: 90%</p><p>Damage Modification: -40%</p><p>Critical Modification: 2%</p><p>Self: +15% Damage by using it again</p>", "<div></div><div></div><div class='green'></div><div class='green'></div>", "<div class='red'></div><div class='red'></div><div></div><div></div>"],
                    [ require("../img/arbalest/skill_6.png"), "Rage", "<p>Precision: 85%</p><p>Critical Modification: 5%</p>", "<div></div><div></div><div class='green'></div><div class='green'></div>", "<div class='red'></div><div class='red'></div><div class='red'></div><div></div>"],
                    [ require("../img/arbalest/skill_7.png"), "Slam", "<p>Self(human): Change abomination to beast</p><p>+20% Poison resistance</p><p>+10% Damage</p><p>Other heroes: +8 Stress</p><p>Self(beast): Change abomination to human</p><p>-4 Speed</p><p>Heal 5hp</p><p>Other heroes: -5 Stress</p>", "<div></div><div class='green'></div><div class='green'></div><div class='green'></div>", "<div class='red'></div><div class='red'></div><div></div><div></div>"]
                ],
                "rests": [
                    [ require("../img/arbalest/rest_1.png"), "Anger Management", "<p>3</p>", "<p>Self: reduce 20 Stress</p><p>On comrade: reduce 8 Stress</p>"],
                    [ require("../img/arbalest/rest_2.png"), "Psych Up", "<p>3</p>", "<p>Self: +25% Damage</p>"],
                    [ require("../img/arbalest/rest_3.png"), "The Quickening", "<p>2</p>", "<p>Self: +4 Speed</p>"],
                    [ require("../img/arbalest/rest_4.png"), "Eldritch Blow", "<p>2</p>", "<p>Self: +40% Poisoning resistance, Bleeding and Disease resistance</p>"]
                ],
                "statistics": [
                    ["26", "33", "40", "47", "54"],
                    ["7,5", "12,5", "17,5", "22,5", "27,5"],
                    ["0%", "0%", "0%", "0%", "0%"],
                    ["7", "7", "8", "8", "9"],
                    ["+0", "+0", "+0", "+0", "+0"],
                    ["2,5%", "3%", "3,5%", "4%", "4,5%"],
                    ["7-14", "8-17", "10-20", "11-22", "12-25"]
                ],
                "resistances": [
                    "40%", "60%", "20%", "67%", "40%", "30%", "20%", "10%"
                ]
            },
            "bounty_hunter": {
                "thumbnail": require("../img/heroes_thumble/bounty_hunter.png"),
                "comment": "“The thrill of the hunt... The promise of payment... „",
                "skills": [
                    [ require("../img/bounty_hunter/skill_1.png"), "Transform", "<p>Self(human): Change abomination to beast</p><p>+20% Poison resistance</p><p>+10% Damage</p><p>Other heroes: +8 Stress</p><p>Self(beast): Change abomination to human</p><p>-4 Speed</p><p>Heal 5hp</p><p>Other heroes: -5 Stress</p>", "<div></div><div class='green'></div><div class='green'></div><div class='green'></div>", "Self"],
                    [ require("../img/bounty_hunter/skill_2.png"), "Manacles", "<p>Precision: 80%</p><p>Damage Modification: -50%</p><p>Stun enemies</p>", "<div></div><div class='green'></div><div class='green'></div><div></div>", "<div class='red'></div><div class='red'></div><div class='red'></div><div></div>"],
                    [ require("../img/bounty_hunter/skill_3.png"), "Beast's Bile", "<p>Precision: 90%</p><p>Damage Modification: -100%</p><p>Critical Modification: 1%</p><p>Poisoning enemies</p><p>-20% Poisoning resistance</p>", "<div></div><div class='green'></div><div class='green'></div><div></div>", "<div></div><div class='red'></div><div class='red'></div><div></div>"],
                    [ require("../img/bounty_hunter/skill_4.png"), "Absolution", "<p>Self: Heal 8 Stress</p><p>Heal 4 hp</p>", "<div class='green'></div><div class='green'></div><div class='green'></div><div class='green'></div>", "Self"],
                    [ require("../img/bounty_hunter/skill_5.png"), "Rake", "<p>Precision: 90%</p><p>Damage Modification: -40%</p><p>Critical Modification: 2%</p><p>Self: +15% Damage by using it again</p>", "<div></div><div></div><div class='green'></div><div class='green'></div>", "<div class='red'></div><div class='red'></div><div></div><div></div>"],
                    [ require("../img/bounty_hunter/skill_6.png"), "Rage", "<p>Precision: 85%</p><p>Critical Modification: 5%</p>", "<div></div><div></div><div class='green'></div><div class='green'></div>", "<div class='red'></div><div class='red'></div><div class='red'></div><div></div>"],
                    [ require("../img/bounty_hunter/skill_7.png"), "Slam", "<p>Self(human): Change abomination to beast</p><p>+20% Poison resistance</p><p>+10% Damage</p><p>Other heroes: +8 Stress</p><p>Self(beast): Change abomination to human</p><p>-4 Speed</p><p>Heal 5hp</p><p>Other heroes: -5 Stress</p>", "<div></div><div class='green'></div><div class='green'></div><div class='green'></div>", "<div class='red'></div><div class='red'></div><div></div><div></div>"]
                ],
                "rests": [
                    [ require("../img/bounty_hunter/rest_1.png"), "Anger Management", "<p>3</p>", "<p>Self: reduce 20 Stress</p><p>On comrade: reduce 8 Stress</p>"],
                    [ require("../img/bounty_hunter/rest_2.png"), "Psych Up", "<p>3</p>", "<p>Self: +25% Damage</p>"],
                    [ require("../img/bounty_hunter/rest_3.png"), "The Quickening", "<p>2</p>", "<p>Self: +4 Speed</p>"],
                    [ require("../img/bounty_hunter/rest_4.png"), "Eldritch Blow", "<p>2</p>", "<p>Self: +40% Poisoning resistance, Bleeding and Disease resistance</p>"]
                ],
                "statistics": [
                    ["26", "33", "40", "47", "54"],
                    ["7,5", "12,5", "17,5", "22,5", "27,5"],
                    ["0%", "0%", "0%", "0%", "0%"],
                    ["7", "7", "8", "8", "9"],
                    ["+0", "+0", "+0", "+0", "+0"],
                    ["2,5%", "3%", "3,5%", "4%", "4,5%"],
                    ["7-14", "8-17", "10-20", "11-22", "12-25"]
                ],
                "resistances": [
                    "40%", "60%", "20%", "67%", "40%", "30%", "20%", "10%"
                ]
            },
            "crusader": {
                "thumbnail": require("../img/heroes_thumble/crusader.png"),
                "comment": "“A mighty sword-hand anchored by a holy purpose. A zealous warrior.	„",
                "skills": [
                    [ require("../img/crusader/skill_1.png"), "Transform", "<p>Self(human): Change abomination to beast</p><p>+20% Poison resistance</p><p>+10% Damage</p><p>Other heroes: +8 Stress</p><p>Self(beast): Change abomination to human</p><p>-4 Speed</p><p>Heal 5hp</p><p>Other heroes: -5 Stress</p>", "<div></div><div class='green'></div><div class='green'></div><div class='green'></div>", "Self"],
                    [ require("../img/crusader/skill_2.png"), "Manacles", "<p>Precision: 80%</p><p>Damage Modification: -50%</p><p>Stun enemies</p>", "<div></div><div class='green'></div><div class='green'></div><div></div>", "<div class='red'></div><div class='red'></div><div class='red'></div><div></div>"],
                    [ require("../img/crusader/skill_3.png"), "Beast's Bile", "<p>Precision: 90%</p><p>Damage Modification: -100%</p><p>Critical Modification: 1%</p><p>Poisoning enemies</p><p>-20% Poisoning resistance</p>", "<div></div><div class='green'></div><div class='green'></div><div></div>", "<div></div><div class='red'></div><div class='red'></div><div></div>"],
                    [ require("../img/crusader/skill_4.png"), "Absolution", "<p>Self: Heal 8 Stress</p><p>Heal 4 hp</p>", "<div class='green'></div><div class='green'></div><div class='green'></div><div class='green'></div>", "Self"],
                    [ require("../img/crusader/skill_5.png"), "Rake", "<p>Precision: 90%</p><p>Damage Modification: -40%</p><p>Critical Modification: 2%</p><p>Self: +15% Damage by using it again</p>", "<div></div><div></div><div class='green'></div><div class='green'></div>", "<div class='red'></div><div class='red'></div><div></div><div></div>"],
                    [ require("../img/crusader/skill_6.png"), "Rage", "<p>Precision: 85%</p><p>Critical Modification: 5%</p>", "<div></div><div></div><div class='green'></div><div class='green'></div>", "<div class='red'></div><div class='red'></div><div class='red'></div><div></div>"],
                    [ require("../img/crusader/skill_7.png"), "Slam", "<p>Self(human): Change abomination to beast</p><p>+20% Poison resistance</p><p>+10% Damage</p><p>Other heroes: +8 Stress</p><p>Self(beast): Change abomination to human</p><p>-4 Speed</p><p>Heal 5hp</p><p>Other heroes: -5 Stress</p>", "<div></div><div class='green'></div><div class='green'></div><div class='green'></div>", "<div class='red'></div><div class='red'></div><div></div><div></div>"]
                ],
                "rests": [
                    [ require("../img/crusader/rest_1.png"), "Anger Management", "<p>3</p>", "<p>Self: reduce 20 Stress</p><p>On comrade: reduce 8 Stress</p>"],
                    [ require("../img/crusader/rest_2.png"), "Psych Up", "<p>3</p>", "<p>Self: +25% Damage</p>"],
                    [ require("../img/crusader/rest_3.png"), "The Quickening", "<p>2</p>", "<p>Self: +4 Speed</p>"],
                    [ require("../img/crusader/rest_4.png"), "Eldritch Blow", "<p>2</p>", "<p>Self: +40% Poisoning resistance, Bleeding and Disease resistance</p>"]
                ],
                "statistics": [
                    ["26", "33", "40", "47", "54"],
                    ["7,5", "12,5", "17,5", "22,5", "27,5"],
                    ["0%", "0%", "0%", "0%", "0%"],
                    ["7", "7", "8", "8", "9"],
                    ["+0", "+0", "+0", "+0", "+0"],
                    ["2,5%", "3%", "3,5%", "4%", "4,5%"],
                    ["7-14", "8-17", "10-20", "11-22", "12-25"]
                ],
                "resistances": [
                    "40%", "60%", "20%", "67%", "40%", "30%", "20%", "10%"
                ]
            },
            "flagellant": {
                "thumbnail": require("../img/heroes_thumble/flagellant.png"),
                "comment": "“Awash in blood and delusion, he bears the burden of a thousand lifetimes. „",
                "skills": [
                    [ require("../img/flagellant/skill_1.png"), "Transform", "<p>Self(human): Change abomination to beast</p><p>+20% Poison resistance</p><p>+10% Damage</p><p>Other heroes: +8 Stress</p><p>Self(beast): Change abomination to human</p><p>-4 Speed</p><p>Heal 5hp</p><p>Other heroes: -5 Stress</p>", "<div></div><div class='green'></div><div class='green'></div><div class='green'></div>", "Self"],
                    [ require("../img/flagellant/skill_2.png"), "Manacles", "<p>Precision: 80%</p><p>Damage Modification: -50%</p><p>Stun enemies</p>", "<div></div><div class='green'></div><div class='green'></div><div></div>", "<div class='red'></div><div class='red'></div><div class='red'></div><div></div>"],
                    [ require("../img/flagellant/skill_3.png"), "Beast's Bile", "<p>Precision: 90%</p><p>Damage Modification: -100%</p><p>Critical Modification: 1%</p><p>Poisoning enemies</p><p>-20% Poisoning resistance</p>", "<div></div><div class='green'></div><div class='green'></div><div></div>", "<div></div><div class='red'></div><div class='red'></div><div></div>"],
                    [ require("../img/flagellant/skill_4.png"), "Absolution", "<p>Self: Heal 8 Stress</p><p>Heal 4 hp</p>", "<div class='green'></div><div class='green'></div><div class='green'></div><div class='green'></div>", "Self"],
                    [ require("../img/flagellant/skill_5.png"), "Rake", "<p>Precision: 90%</p><p>Damage Modification: -40%</p><p>Critical Modification: 2%</p><p>Self: +15% Damage by using it again</p>", "<div></div><div></div><div class='green'></div><div class='green'></div>", "<div class='red'></div><div class='red'></div><div></div><div></div>"],
                    [ require("../img/flagellant/skill_6.png"), "Rage", "<p>Precision: 85%</p><p>Critical Modification: 5%</p>", "<div></div><div></div><div class='green'></div><div class='green'></div>", "<div class='red'></div><div class='red'></div><div class='red'></div><div></div>"],
                    [ require("../img/flagellant/skill_7.png"), "Slam", "<p>Self(human): Change abomination to beast</p><p>+20% Poison resistance</p><p>+10% Damage</p><p>Other heroes: +8 Stress</p><p>Self(beast): Change abomination to human</p><p>-4 Speed</p><p>Heal 5hp</p><p>Other heroes: -5 Stress</p>", "<div></div><div class='green'></div><div class='green'></div><div class='green'></div>", "<div class='red'></div><div class='red'></div><div></div><div></div>"]
                ],
                "rests": [
                    [ require("../img/flagellant/rest_1.png"), "Anger Management", "<p>3</p>", "<p>Self: reduce 20 Stress</p><p>On comrade: reduce 8 Stress</p>"],
                    [ require("../img/flagellant/rest_2.png"), "Psych Up", "<p>3</p>", "<p>Self: +25% Damage</p>"],
                    [ require("../img/flagellant/rest_3.png"), "The Quickening", "<p>2</p>", "<p>Self: +4 Speed</p>"],
                    [ require("../img/flagellant/rest_4.png"), "Eldritch Blow", "<p>2</p>", "<p>Self: +40% Poisoning resistance, Bleeding and Disease resistance</p>"]
                ],
                "statistics": [
                    ["26", "33", "40", "47", "54"],
                    ["7,5", "12,5", "17,5", "22,5", "27,5"],
                    ["0%", "0%", "0%", "0%", "0%"],
                    ["7", "7", "8", "8", "9"],
                    ["+0", "+0", "+0", "+0", "+0"],
                    ["2,5%", "3%", "3,5%", "4%", "4,5%"],
                    ["7-14", "8-17", "10-20", "11-22", "12-25"]
                ],
                "resistances": [
                    "40%", "60%", "20%", "67%", "40%", "30%", "20%", "10%"
                ]
            },
            "grave_robber": {
                "thumbnail": require("../img/heroes_thumble/grave_robber.png"),
                "comment": "“To those with the keen eye, gold gleams like a dagger's point.	„",
                "skills": [
                    [ require("../img/grave_robber/skill_1.png"), "Transform", "<p>Self(human): Change abomination to beast</p><p>+20% Poison resistance</p><p>+10% Damage</p><p>Other heroes: +8 Stress</p><p>Self(beast): Change abomination to human</p><p>-4 Speed</p><p>Heal 5hp</p><p>Other heroes: -5 Stress</p>", "<div></div><div class='green'></div><div class='green'></div><div class='green'></div>", "Self"],
                    [ require("../img/grave_robber/skill_2.png"), "Manacles", "<p>Precision: 80%</p><p>Damage Modification: -50%</p><p>Stun enemies</p>", "<div></div><div class='green'></div><div class='green'></div><div></div>", "<div class='red'></div><div class='red'></div><div class='red'></div><div></div>"],
                    [ require("../img/grave_robber/skill_3.png"), "Beast's Bile", "<p>Precision: 90%</p><p>Damage Modification: -100%</p><p>Critical Modification: 1%</p><p>Poisoning enemies</p><p>-20% Poisoning resistance</p>", "<div></div><div class='green'></div><div class='green'></div><div></div>", "<div></div><div class='red'></div><div class='red'></div><div></div>"],
                    [ require("../img/grave_robber/skill_4.png"), "Absolution", "<p>Self: Heal 8 Stress</p><p>Heal 4 hp</p>", "<div class='green'></div><div class='green'></div><div class='green'></div><div class='green'></div>", "Self"],
                    [ require("../img/grave_robber/skill_5.png"), "Rake", "<p>Precision: 90%</p><p>Damage Modification: -40%</p><p>Critical Modification: 2%</p><p>Self: +15% Damage by using it again</p>", "<div></div><div></div><div class='green'></div><div class='green'></div>", "<div class='red'></div><div class='red'></div><div></div><div></div>"],
                    [ require("../img/grave_robber/skill_6.png"), "Rage", "<p>Precision: 85%</p><p>Critical Modification: 5%</p>", "<div></div><div></div><div class='green'></div><div class='green'></div>", "<div class='red'></div><div class='red'></div><div class='red'></div><div></div>"],
                    [ require("../img/grave_robber/skill_7.png"), "Slam", "<p>Self(human): Change abomination to beast</p><p>+20% Poison resistance</p><p>+10% Damage</p><p>Other heroes: +8 Stress</p><p>Self(beast): Change abomination to human</p><p>-4 Speed</p><p>Heal 5hp</p><p>Other heroes: -5 Stress</p>", "<div></div><div class='green'></div><div class='green'></div><div class='green'></div>", "<div class='red'></div><div class='red'></div><div></div><div></div>"]
                ],
                "rests": [
                    [ require("../img/grave_robber/rest_1.png"), "Anger Management", "<p>3</p>", "<p>Self: reduce 20 Stress</p><p>On comrade: reduce 8 Stress</p>"],
                    [ require("../img/grave_robber/rest_2.png"), "Psych Up", "<p>3</p>", "<p>Self: +25% Damage</p>"],
                    [ require("../img/grave_robber/rest_3.png"), "The Quickening", "<p>2</p>", "<p>Self: +4 Speed</p>"],
                    [ require("../img/grave_robber/rest_4.png"), "Eldritch Blow", "<p>2</p>", "<p>Self: +40% Poisoning resistance, Bleeding and Disease resistance</p>"]
                ],
                "statistics": [
                    ["26", "33", "40", "47", "54"],
                    ["7,5", "12,5", "17,5", "22,5", "27,5"],
                    ["0%", "0%", "0%", "0%", "0%"],
                    ["7", "7", "8", "8", "9"],
                    ["+0", "+0", "+0", "+0", "+0"],
                    ["2,5%", "3%", "3,5%", "4%", "4,5%"],
                    ["7-14", "8-17", "10-20", "11-22", "12-25"]
                ],
                "resistances": [
                    "40%", "60%", "20%", "67%", "40%", "30%", "20%", "10%"
                ]
            },
            "hellion": {
                "thumbnail": require("../img/heroes_thumble/hellion.png"),
                "comment": "“Barbaric rage and unrelenting savagery make for a powerful ally. „",
                "skills": [
                    [ require("../img/hellion/skill_1.png"), "Transform", "<p>Self(human): Change abomination to beast</p><p>+20% Poison resistance</p><p>+10% Damage</p><p>Other heroes: +8 Stress</p><p>Self(beast): Change abomination to human</p><p>-4 Speed</p><p>Heal 5hp</p><p>Other heroes: -5 Stress</p>", "<div></div><div class='green'></div><div class='green'></div><div class='green'></div>", "Self"],
                    [ require("../img/hellion/skill_2.png"), "Manacles", "<p>Precision: 80%</p><p>Damage Modification: -50%</p><p>Stun enemies</p>", "<div></div><div class='green'></div><div class='green'></div><div></div>", "<div class='red'></div><div class='red'></div><div class='red'></div><div></div>"],
                    [ require("../img/hellion/skill_3.png"), "Beast's Bile", "<p>Precision: 90%</p><p>Damage Modification: -100%</p><p>Critical Modification: 1%</p><p>Poisoning enemies</p><p>-20% Poisoning resistance</p>", "<div></div><div class='green'></div><div class='green'></div><div></div>", "<div></div><div class='red'></div><div class='red'></div><div></div>"],
                    [ require("../img/hellion/skill_4.png"), "Absolution", "<p>Self: Heal 8 Stress</p><p>Heal 4 hp</p>", "<div class='green'></div><div class='green'></div><div class='green'></div><div class='green'></div>", "Self"],
                    [ require("../img/hellion/skill_5.png"), "Rake", "<p>Precision: 90%</p><p>Damage Modification: -40%</p><p>Critical Modification: 2%</p><p>Self: +15% Damage by using it again</p>", "<div></div><div></div><div class='green'></div><div class='green'></div>", "<div class='red'></div><div class='red'></div><div></div><div></div>"],
                    [ require("../img/hellion/skill_6.png"), "Rage", "<p>Precision: 85%</p><p>Critical Modification: 5%</p>", "<div></div><div></div><div class='green'></div><div class='green'></div>", "<div class='red'></div><div class='red'></div><div class='red'></div><div></div>"],
                    [ require("../img/hellion/skill_7.png"), "Slam", "<p>Self(human): Change abomination to beast</p><p>+20% Poison resistance</p><p>+10% Damage</p><p>Other heroes: +8 Stress</p><p>Self(beast): Change abomination to human</p><p>-4 Speed</p><p>Heal 5hp</p><p>Other heroes: -5 Stress</p>", "<div></div><div class='green'></div><div class='green'></div><div class='green'></div>", "<div class='red'></div><div class='red'></div><div></div><div></div>"]
                ],
                "rests": [
                    [ require("../img/hellion/rest_1.png"), "Anger Management", "<p>3</p>", "<p>Self: reduce 20 Stress</p><p>On comrade: reduce 8 Stress</p>"],
                    [ require("../img/hellion/rest_2.png"), "Psych Up", "<p>3</p>", "<p>Self: +25% Damage</p>"],
                    [ require("../img/hellion/rest_3.png"), "The Quickening", "<p>2</p>", "<p>Self: +4 Speed</p>"],
                    [ require("../img/hellion/rest_4.png"), "Eldritch Blow", "<p>2</p>", "<p>Self: +40% Poisoning resistance, Bleeding and Disease resistance</p>"]
                ],
                "statistics": [
                    ["26", "33", "40", "47", "54"],
                    ["7,5", "12,5", "17,5", "22,5", "27,5"],
                    ["0%", "0%", "0%", "0%", "0%"],
                    ["7", "7", "8", "8", "9"],
                    ["+0", "+0", "+0", "+0", "+0"],
                    ["2,5%", "3%", "3,5%", "4%", "4,5%"],
                    ["7-14", "8-17", "10-20", "11-22", "12-25"]
                ],
                "resistances": [
                    "40%", "60%", "20%", "67%", "40%", "30%", "20%", "10%"
                ]
            },
            "highwayman": {
                "thumbnail": require("../img/heroes_thumble/highwayman.png"),
                "comment": "“Elusive, evasive, persistent. Righteous traits for a rogue. „",
                "skills": [
                    [ require("../img/highwayman/skill_1.png"), "Transform", "<p>Self(human): Change abomination to beast</p><p>+20% Poison resistance</p><p>+10% Damage</p><p>Other heroes: +8 Stress</p><p>Self(beast): Change abomination to human</p><p>-4 Speed</p><p>Heal 5hp</p><p>Other heroes: -5 Stress</p>", "<div></div><div class='green'></div><div class='green'></div><div class='green'></div>", "Self"],
                    [ require("../img/highwayman/skill_2.png"), "Manacles", "<p>Precision: 80%</p><p>Damage Modification: -50%</p><p>Stun enemies</p>", "<div></div><div class='green'></div><div class='green'></div><div></div>", "<div class='red'></div><div class='red'></div><div class='red'></div><div></div>"],
                    [ require("../img/highwayman/skill_3.png"), "Beast's Bile", "<p>Precision: 90%</p><p>Damage Modification: -100%</p><p>Critical Modification: 1%</p><p>Poisoning enemies</p><p>-20% Poisoning resistance</p>", "<div></div><div class='green'></div><div class='green'></div><div></div>", "<div></div><div class='red'></div><div class='red'></div><div></div>"],
                    [ require("../img/highwayman/skill_4.png"), "Absolution", "<p>Self: Heal 8 Stress</p><p>Heal 4 hp</p>", "<div class='green'></div><div class='green'></div><div class='green'></div><div class='green'></div>", "Self"],
                    [ require("../img/highwayman/skill_5.png"), "Rake", "<p>Precision: 90%</p><p>Damage Modification: -40%</p><p>Critical Modification: 2%</p><p>Self: +15% Damage by using it again</p>", "<div></div><div></div><div class='green'></div><div class='green'></div>", "<div class='red'></div><div class='red'></div><div></div><div></div>"],
                    [ require("../img/highwayman/skill_6.png"), "Rage", "<p>Precision: 85%</p><p>Critical Modification: 5%</p>", "<div></div><div></div><div class='green'></div><div class='green'></div>", "<div class='red'></div><div class='red'></div><div class='red'></div><div></div>"],
                    [ require("../img/highwayman/skill_7.png"), "Slam", "<p>Self(human): Change abomination to beast</p><p>+20% Poison resistance</p><p>+10% Damage</p><p>Other heroes: +8 Stress</p><p>Self(beast): Change abomination to human</p><p>-4 Speed</p><p>Heal 5hp</p><p>Other heroes: -5 Stress</p>", "<div></div><div class='green'></div><div class='green'></div><div class='green'></div>", "<div class='red'></div><div class='red'></div><div></div><div></div>"]
                ],
                "rests": [
                    [ require("../img/highwayman/rest_1.png"), "Anger Management", "<p>3</p>", "<p>Self: reduce 20 Stress</p><p>On comrade: reduce 8 Stress</p>"],
                    [ require("../img/highwayman/rest_2.png"), "Psych Up", "<p>3</p>", "<p>Self: +25% Damage</p>"],
                    [ require("../img/highwayman/rest_3.png"), "The Quickening", "<p>2</p>", "<p>Self: +4 Speed</p>"],
                    [ require("../img/highwayman/rest_4.png"), "Eldritch Blow", "<p>2</p>", "<p>Self: +40% Poisoning resistance, Bleeding and Disease resistance</p>"]
                ],
                "statistics": [
                    ["26", "33", "40", "47", "54"],
                    ["7,5", "12,5", "17,5", "22,5", "27,5"],
                    ["0%", "0%", "0%", "0%", "0%"],
                    ["7", "7", "8", "8", "9"],
                    ["+0", "+0", "+0", "+0", "+0"],
                    ["2,5%", "3%", "3,5%", "4%", "4,5%"],
                    ["7-14", "8-17", "10-20", "11-22", "12-25"]
                ],
                "resistances": [
                    "40%", "60%", "20%", "67%", "40%", "30%", "20%", "10%"
                ]
            },
            "houndmaster": {
                "thumbnail": require("../img/heroes_thumble/houndmaster.png"),
                "comment": "“A lawman and his faithful beast. A bond forged by battle and bloodshed. „",
                "skills": [
                    [ require("../img/hound_master/skill_1.png"), "Transform", "<p>Self(human): Change abomination to beast</p><p>+20% Poison resistance</p><p>+10% Damage</p><p>Other heroes: +8 Stress</p><p>Self(beast): Change abomination to human</p><p>-4 Speed</p><p>Heal 5hp</p><p>Other heroes: -5 Stress</p>", "<div></div><div class='green'></div><div class='green'></div><div class='green'></div>", "Self"],
                    [ require("../img/hound_master/skill_2.png"), "Manacles", "<p>Precision: 80%</p><p>Damage Modification: -50%</p><p>Stun enemies</p>", "<div></div><div class='green'></div><div class='green'></div><div></div>", "<div class='red'></div><div class='red'></div><div class='red'></div><div></div>"],
                    [ require("../img/hound_master/skill_3.png"), "Beast's Bile", "<p>Precision: 90%</p><p>Damage Modification: -100%</p><p>Critical Modification: 1%</p><p>Poisoning enemies</p><p>-20% Poisoning resistance</p>", "<div></div><div class='green'></div><div class='green'></div><div></div>", "<div></div><div class='red'></div><div class='red'></div><div></div>"],
                    [ require("../img/hound_master/skill_4.png"), "Absolution", "<p>Self: Heal 8 Stress</p><p>Heal 4 hp</p>", "<div class='green'></div><div class='green'></div><div class='green'></div><div class='green'></div>", "Self"],
                    [ require("../img/hound_master/skill_5.png"), "Rake", "<p>Precision: 90%</p><p>Damage Modification: -40%</p><p>Critical Modification: 2%</p><p>Self: +15% Damage by using it again</p>", "<div></div><div></div><div class='green'></div><div class='green'></div>", "<div class='red'></div><div class='red'></div><div></div><div></div>"],
                    [ require("../img/hound_master/skill_6.png"), "Rage", "<p>Precision: 85%</p><p>Critical Modification: 5%</p>", "<div></div><div></div><div class='green'></div><div class='green'></div>", "<div class='red'></div><div class='red'></div><div class='red'></div><div></div>"],
                    [ require("../img/hound_master/skill_7.png"), "Slam", "<p>Self(human): Change abomination to beast</p><p>+20% Poison resistance</p><p>+10% Damage</p><p>Other heroes: +8 Stress</p><p>Self(beast): Change abomination to human</p><p>-4 Speed</p><p>Heal 5hp</p><p>Other heroes: -5 Stress</p>", "<div></div><div class='green'></div><div class='green'></div><div class='green'></div>", "<div class='red'></div><div class='red'></div><div></div><div></div>"]
                ],
                "rests": [
                    [ require("../img/hound_master/rest_1.jpg"), "Anger Management", "<p>3</p>", "<p>Self: reduce 20 Stress</p><p>On comrade: reduce 8 Stress</p>"],
                    [ require("../img/hound_master/rest_2.jpg"), "Psych Up", "<p>3</p>", "<p>Self: +25% Damage</p>"],
                    [ require("../img/hound_master/rest_3.jpg"), "The Quickening", "<p>2</p>", "<p>Self: +4 Speed</p>"],
                    [ require("../img/hound_master/rest_4.jpg"), "Eldritch Blow", "<p>2</p>", "<p>Self: +40% Poisoning resistance, Bleeding and Disease resistance</p>"]
                ],
                "statistics": [
                    ["26", "33", "40", "47", "54"],
                    ["7,5", "12,5", "17,5", "22,5", "27,5"],
                    ["0%", "0%", "0%", "0%", "0%"],
                    ["7", "7", "8", "8", "9"],
                    ["+0", "+0", "+0", "+0", "+0"],
                    ["2,5%", "3%", "3,5%", "4%", "4,5%"],
                    ["7-14", "8-17", "10-20", "11-22", "12-25"]
                ],
                "resistances": [
                    "40%", "60%", "20%", "67%", "40%", "30%", "20%", "10%"
                ]
            },
            "jester": {
                "thumbnail": require("../img/heroes_thumble/jester.png"),
                "comment": "“He will be laughing still... at the end. „",
                "skills": [
                    [ require("../img/jester/skill_1.png"), "Transform", "<p>Self(human): Change abomination to beast</p><p>+20% Poison resistance</p><p>+10% Damage</p><p>Other heroes: +8 Stress</p><p>Self(beast): Change abomination to human</p><p>-4 Speed</p><p>Heal 5hp</p><p>Other heroes: -5 Stress</p>", "<div></div><div class='green'></div><div class='green'></div><div class='green'></div>", "Self"],
                    [ require("../img/jester/skill_2.png"), "Manacles", "<p>Precision: 80%</p><p>Damage Modification: -50%</p><p>Stun enemies</p>", "<div></div><div class='green'></div><div class='green'></div><div></div>", "<div class='red'></div><div class='red'></div><div class='red'></div><div></div>"],
                    [ require("../img/jester/skill_3.png"), "Beast's Bile", "<p>Precision: 90%</p><p>Damage Modification: -100%</p><p>Critical Modification: 1%</p><p>Poisoning enemies</p><p>-20% Poisoning resistance</p>", "<div></div><div class='green'></div><div class='green'></div><div></div>", "<div></div><div class='red'></div><div class='red'></div><div></div>"],
                    [ require("../img/jester/skill_4.png"), "Absolution", "<p>Self: Heal 8 Stress</p><p>Heal 4 hp</p>", "<div class='green'></div><div class='green'></div><div class='green'></div><div class='green'></div>", "Self"],
                    [ require("../img/jester/skill_5.png"), "Rake", "<p>Precision: 90%</p><p>Damage Modification: -40%</p><p>Critical Modification: 2%</p><p>Self: +15% Damage by using it again</p>", "<div></div><div></div><div class='green'></div><div class='green'></div>", "<div class='red'></div><div class='red'></div><div></div><div></div>"],
                    [ require("../img/jester/skill_6.png"), "Rage", "<p>Precision: 85%</p><p>Critical Modification: 5%</p>", "<div></div><div></div><div class='green'></div><div class='green'></div>", "<div class='red'></div><div class='red'></div><div class='red'></div><div></div>"],
                    [ require("../img/jester/skill_7.png"), "Slam", "<p>Self(human): Change abomination to beast</p><p>+20% Poison resistance</p><p>+10% Damage</p><p>Other heroes: +8 Stress</p><p>Self(beast): Change abomination to human</p><p>-4 Speed</p><p>Heal 5hp</p><p>Other heroes: -5 Stress</p>", "<div></div><div class='green'></div><div class='green'></div><div class='green'></div>", "<div class='red'></div><div class='red'></div><div></div><div></div>"]
                ],
                "rests": [
                    [ require("../img/jester/rest_1.png"), "Anger Management", "<p>3</p>", "<p>Self: reduce 20 Stress</p><p>On comrade: reduce 8 Stress</p>"],
                    [ require("../img/jester/rest_2.png"), "Psych Up", "<p>3</p>", "<p>Self: +25% Damage</p>"],
                    [ require("../img/jester/rest_3.png"), "The Quickening", "<p>2</p>", "<p>Self: +4 Speed</p>"],
                    [ require("../img/jester/rest_4.png"), "Eldritch Blow", "<p>2</p>", "<p>Self: +40% Poisoning resistance, Bleeding and Disease resistance</p>"]
                ],
                "statistics": [
                    ["26", "33", "40", "47", "54"],
                    ["7,5", "12,5", "17,5", "22,5", "27,5"],
                    ["0%", "0%", "0%", "0%", "0%"],
                    ["7", "7", "8", "8", "9"],
                    ["+0", "+0", "+0", "+0", "+0"],
                    ["2,5%", "3%", "3,5%", "4%", "4,5%"],
                    ["7-14", "8-17", "10-20", "11-22", "12-25"]
                ],
                "resistances": [
                    "40%", "60%", "20%", "67%", "40%", "30%", "20%", "10%"
                ]
            },
            "leper": {
                "thumbnail": require("../img/heroes_thumble/leper.png"),
                "comment": "“This man understands that adversity and existence are one and the same. „",
                "skills": [
                    [ require("../img/leper/skill_1.png"), "Transform", "<p>Self(human): Change abomination to beast</p><p>+20% Poison resistance</p><p>+10% Damage</p><p>Other heroes: +8 Stress</p><p>Self(beast): Change abomination to human</p><p>-4 Speed</p><p>Heal 5hp</p><p>Other heroes: -5 Stress</p>", "<div></div><div class='green'></div><div class='green'></div><div class='green'></div>", "Self"],
                    [ require("../img/leper/skill_2.png"), "Manacles", "<p>Precision: 80%</p><p>Damage Modification: -50%</p><p>Stun enemies</p>", "<div></div><div class='green'></div><div class='green'></div><div></div>", "<div class='red'></div><div class='red'></div><div class='red'></div><div></div>"],
                    [ require("../img/leper/skill_3.png"), "Beast's Bile", "<p>Precision: 90%</p><p>Damage Modification: -100%</p><p>Critical Modification: 1%</p><p>Poisoning enemies</p><p>-20% Poisoning resistance</p>", "<div></div><div class='green'></div><div class='green'></div><div></div>", "<div></div><div class='red'></div><div class='red'></div><div></div>"],
                    [ require("../img/leper/skill_4.png"), "Absolution", "<p>Self: Heal 8 Stress</p><p>Heal 4 hp</p>", "<div class='green'></div><div class='green'></div><div class='green'></div><div class='green'></div>", "Self"],
                    [ require("../img/leper/skill_5.png"), "Rake", "<p>Precision: 90%</p><p>Damage Modification: -40%</p><p>Critical Modification: 2%</p><p>Self: +15% Damage by using it again</p>", "<div></div><div></div><div class='green'></div><div class='green'></div>", "<div class='red'></div><div class='red'></div><div></div><div></div>"],
                    [ require("../img/leper/skill_6.png"), "Rage", "<p>Precision: 85%</p><p>Critical Modification: 5%</p>", "<div></div><div></div><div class='green'></div><div class='green'></div>", "<div class='red'></div><div class='red'></div><div class='red'></div><div></div>"],
                    [ require("../img/leper/skill_7.png"), "Slam", "<p>Self(human): Change abomination to beast</p><p>+20% Poison resistance</p><p>+10% Damage</p><p>Other heroes: +8 Stress</p><p>Self(beast): Change abomination to human</p><p>-4 Speed</p><p>Heal 5hp</p><p>Other heroes: -5 Stress</p>", "<div></div><div class='green'></div><div class='green'></div><div class='green'></div>", "<div class='red'></div><div class='red'></div><div></div><div></div>"]
                ],
                "rests": [
                    [ require("../img/leper/rest_1.png"), "Anger Management", "<p>3</p>", "<p>Self: reduce 20 Stress</p><p>On comrade: reduce 8 Stress</p>"],
                    [ require("../img/leper/rest_2.png"), "Psych Up", "<p>3</p>", "<p>Self: +25% Damage</p>"],
                    [ require("../img/leper/rest_3.png"), "The Quickening", "<p>2</p>", "<p>Self: +4 Speed</p>"],
                    [ require("../img/leper/rest_4.png"), "Eldritch Blow", "<p>2</p>", "<p>Self: +40% Poisoning resistance, Bleeding and Disease resistance</p>"]
                ],
                "statistics": [
                    ["26", "33", "40", "47", "54"],
                    ["7,5", "12,5", "17,5", "22,5", "27,5"],
                    ["0%", "0%", "0%", "0%", "0%"],
                    ["7", "7", "8", "8", "9"],
                    ["+0", "+0", "+0", "+0", "+0"],
                    ["2,5%", "3%", "3,5%", "4%", "4,5%"],
                    ["7-14", "8-17", "10-20", "11-22", "12-25"]
                ],
                "resistances": [
                    "40%", "60%", "20%", "67%", "40%", "30%", "20%", "10%"
                ]
            },
            "man_at_arms": {
                "thumbnail": require("../img/heroes_thumble/man_at_arms.png"),
                "comment": "“The raw strength of youth may be spent, but his eyes hold the secrets of a hundred campaigns. „",
                "skills": [
                    [ require("../img/man_at_arms/skill_1.png"), "Transform", "<p>Self(human): Change abomination to beast</p><p>+20% Poison resistance</p><p>+10% Damage</p><p>Other heroes: +8 Stress</p><p>Self(beast): Change abomination to human</p><p>-4 Speed</p><p>Heal 5hp</p><p>Other heroes: -5 Stress</p>", "<div></div><div class='green'></div><div class='green'></div><div class='green'></div>", "Self"],
                    [ require("../img/man_at_arms/skill_2.png"), "Manacles", "<p>Precision: 80%</p><p>Damage Modification: -50%</p><p>Stun enemies</p>", "<div></div><div class='green'></div><div class='green'></div><div></div>", "<div class='red'></div><div class='red'></div><div class='red'></div><div></div>"],
                    [ require("../img/man_at_arms/skill_3.png"), "Beast's Bile", "<p>Precision: 90%</p><p>Damage Modification: -100%</p><p>Critical Modification: 1%</p><p>Poisoning enemies</p><p>-20% Poisoning resistance</p>", "<div></div><div class='green'></div><div class='green'></div><div></div>", "<div></div><div class='red'></div><div class='red'></div><div></div>"],
                    [ require("../img/man_at_arms/skill_4.png"), "Absolution", "<p>Self: Heal 8 Stress</p><p>Heal 4 hp</p>", "<div class='green'></div><div class='green'></div><div class='green'></div><div class='green'></div>", "Self"],
                    [ require("../img/man_at_arms/skill_5.png"), "Rake", "<p>Precision: 90%</p><p>Damage Modification: -40%</p><p>Critical Modification: 2%</p><p>Self: +15% Damage by using it again</p>", "<div></div><div></div><div class='green'></div><div class='green'></div>", "<div class='red'></div><div class='red'></div><div></div><div></div>"],
                    [ require("../img/man_at_arms/skill_6.png"), "Rage", "<p>Precision: 85%</p><p>Critical Modification: 5%</p>", "<div></div><div></div><div class='green'></div><div class='green'></div>", "<div class='red'></div><div class='red'></div><div class='red'></div><div></div>"],
                    [ require("../img/man_at_arms/skill_7.png"), "Slam", "<p>Self(human): Change abomination to beast</p><p>+20% Poison resistance</p><p>+10% Damage</p><p>Other heroes: +8 Stress</p><p>Self(beast): Change abomination to human</p><p>-4 Speed</p><p>Heal 5hp</p><p>Other heroes: -5 Stress</p>", "<div></div><div class='green'></div><div class='green'></div><div class='green'></div>", "<div class='red'></div><div class='red'></div><div></div><div></div>"]
                ],
                "rests": [
                    [ require("../img/man_at_arms/rest_1.png"), "Anger Management", "<p>3</p>", "<p>Self: reduce 20 Stress</p><p>On comrade: reduce 8 Stress</p>"],
                    [ require("../img/man_at_arms/rest_2.png"), "Psych Up", "<p>3</p>", "<p>Self: +25% Damage</p>"],
                    [ require("../img/man_at_arms/rest_3.png"), "The Quickening", "<p>2</p>", "<p>Self: +4 Speed</p>"],
                    [ require("../img/man_at_arms/rest_4.png"), "Eldritch Blow", "<p>2</p>", "<p>Self: +40% Poisoning resistance, Bleeding and Disease resistance</p>"]
                ],
                "statistics": [
                    ["26", "33", "40", "47", "54"],
                    ["7,5", "12,5", "17,5", "22,5", "27,5"],
                    ["0%", "0%", "0%", "0%", "0%"],
                    ["7", "7", "8", "8", "9"],
                    ["+0", "+0", "+0", "+0", "+0"],
                    ["2,5%", "3%", "3,5%", "4%", "4,5%"],
                    ["7-14", "8-17", "10-20", "11-22", "12-25"]
                ],
                "resistances": [
                    "40%", "60%", "20%", "67%", "40%", "30%", "20%", "10%"
                ]
            },
            "occultist": {
                "thumbnail": require("../img/heroes_thumble/occultist.png"),
                "comment": "“To fight the abyss, one must know it... „",
                "skills": [
                    [ require("../img/occultist/skill_1.png"), "Transform", "<p>Self(human): Change abomination to beast</p><p>+20% Poison resistance</p><p>+10% Damage</p><p>Other heroes: +8 Stress</p><p>Self(beast): Change abomination to human</p><p>-4 Speed</p><p>Heal 5hp</p><p>Other heroes: -5 Stress</p>", "<div></div><div class='green'></div><div class='green'></div><div class='green'></div>", "Self"],
                    [ require("../img/occultist/skill_2.png"), "Manacles", "<p>Precision: 80%</p><p>Damage Modification: -50%</p><p>Stun enemies</p>", "<div></div><div class='green'></div><div class='green'></div><div></div>", "<div class='red'></div><div class='red'></div><div class='red'></div><div></div>"],
                    [ require("../img/occultist/skill_3.png"), "Beast's Bile", "<p>Precision: 90%</p><p>Damage Modification: -100%</p><p>Critical Modification: 1%</p><p>Poisoning enemies</p><p>-20% Poisoning resistance</p>", "<div></div><div class='green'></div><div class='green'></div><div></div>", "<div></div><div class='red'></div><div class='red'></div><div></div>"],
                    [ require("../img/occultist/skill_4.png"), "Absolution", "<p>Self: Heal 8 Stress</p><p>Heal 4 hp</p>", "<div class='green'></div><div class='green'></div><div class='green'></div><div class='green'></div>", "Self"],
                    [ require("../img/occultist/skill_5.png"), "Rake", "<p>Precision: 90%</p><p>Damage Modification: -40%</p><p>Critical Modification: 2%</p><p>Self: +15% Damage by using it again</p>", "<div></div><div></div><div class='green'></div><div class='green'></div>", "<div class='red'></div><div class='red'></div><div></div><div></div>"],
                    [ require("../img/occultist/skill_6.png"), "Rage", "<p>Precision: 85%</p><p>Critical Modification: 5%</p>", "<div></div><div></div><div class='green'></div><div class='green'></div>", "<div class='red'></div><div class='red'></div><div class='red'></div><div></div>"],
                    [ require("../img/occultist/skill_7.png"), "Slam", "<p>Self(human): Change abomination to beast</p><p>+20% Poison resistance</p><p>+10% Damage</p><p>Other heroes: +8 Stress</p><p>Self(beast): Change abomination to human</p><p>-4 Speed</p><p>Heal 5hp</p><p>Other heroes: -5 Stress</p>", "<div></div><div class='green'></div><div class='green'></div><div class='green'></div>", "<div class='red'></div><div class='red'></div><div></div><div></div>"]
                ],
                "rests": [
                    [ require("../img/occultist/rest_1.png"), "Anger Management", "<p>3</p>", "<p>Self: reduce 20 Stress</p><p>On comrade: reduce 8 Stress</p>"],
                    [ require("../img/occultist/rest_2.png"), "Psych Up", "<p>3</p>", "<p>Self: +25% Damage</p>"],
                    [ require("../img/occultist/rest_3.png"), "The Quickening", "<p>2</p>", "<p>Self: +4 Speed</p>"],
                    [ require("../img/occultist/rest_4.png"), "Eldritch Blow", "<p>2</p>", "<p>Self: +40% Poisoning resistance, Bleeding and Disease resistance</p>"]
                ],
                "statistics": [
                    ["26", "33", "40", "47", "54"],
                    ["7,5", "12,5", "17,5", "22,5", "27,5"],
                    ["0%", "0%", "0%", "0%", "0%"],
                    ["7", "7", "8", "8", "9"],
                    ["+0", "+0", "+0", "+0", "+0"],
                    ["2,5%", "3%", "3,5%", "4%", "4,5%"],
                    ["7-14", "8-17", "10-20", "11-22", "12-25"]
                ],
                "resistances": [
                    "40%", "60%", "20%", "67%", "40%", "30%", "20%", "10%"
                ]
            },
            "plague_doctor": {
                "thumbnail": require("../img/heroes_thumble/plague_doctor.png"),
                "comment": "“What better laboratory than the blood-soaked battlefield? „",
                "skills": [
                    [ require("../img/plague_doctor/skill_1.png"), "Transform", "<p>Self(human): Change abomination to beast</p><p>+20% Poison resistance</p><p>+10% Damage</p><p>Other heroes: +8 Stress</p><p>Self(beast): Change abomination to human</p><p>-4 Speed</p><p>Heal 5hp</p><p>Other heroes: -5 Stress</p>", "<div></div><div class='green'></div><div class='green'></div><div class='green'></div>", "Self"],
                    [ require("../img/plague_doctor/skill_2.png"), "Manacles", "<p>Precision: 80%</p><p>Damage Modification: -50%</p><p>Stun enemies</p>", "<div></div><div class='green'></div><div class='green'></div><div></div>", "<div class='red'></div><div class='red'></div><div class='red'></div><div></div>"],
                    [ require("../img/plague_doctor/skill_3.png"), "Beast's Bile", "<p>Precision: 90%</p><p>Damage Modification: -100%</p><p>Critical Modification: 1%</p><p>Poisoning enemies</p><p>-20% Poisoning resistance</p>", "<div></div><div class='green'></div><div class='green'></div><div></div>", "<div></div><div class='red'></div><div class='red'></div><div></div>"],
                    [ require("../img/plague_doctor/skill_4.png"), "Absolution", "<p>Self: Heal 8 Stress</p><p>Heal 4 hp</p>", "<div class='green'></div><div class='green'></div><div class='green'></div><div class='green'></div>", "Self"],
                    [ require("../img/plague_doctor/skill_5.png"), "Rake", "<p>Precision: 90%</p><p>Damage Modification: -40%</p><p>Critical Modification: 2%</p><p>Self: +15% Damage by using it again</p>", "<div></div><div></div><div class='green'></div><div class='green'></div>", "<div class='red'></div><div class='red'></div><div></div><div></div>"],
                    [ require("../img/plague_doctor/skill_6.png"), "Rage", "<p>Precision: 85%</p><p>Critical Modification: 5%</p>", "<div></div><div></div><div class='green'></div><div class='green'></div>", "<div class='red'></div><div class='red'></div><div class='red'></div><div></div>"],
                    [ require("../img/plague_doctor/skill_7.png"), "Slam", "<p>Self(human): Change abomination to beast</p><p>+20% Poison resistance</p><p>+10% Damage</p><p>Other heroes: +8 Stress</p><p>Self(beast): Change abomination to human</p><p>-4 Speed</p><p>Heal 5hp</p><p>Other heroes: -5 Stress</p>", "<div></div><div class='green'></div><div class='green'></div><div class='green'></div>", "<div class='red'></div><div class='red'></div><div></div><div></div>"]
                ],
                "rests": [
                    [ require("../img/plague_doctor/rest_1.png"), "Anger Management", "<p>3</p>", "<p>Self: reduce 20 Stress</p><p>On comrade: reduce 8 Stress</p>"],
                    [ require("../img/plague_doctor/rest_2.png"), "Psych Up", "<p>3</p>", "<p>Self: +25% Damage</p>"],
                    [ require("../img/plague_doctor/rest_3.png"), "The Quickening", "<p>2</p>", "<p>Self: +4 Speed</p>"],
                    [ require("../img/plague_doctor/rest_4.png"), "Eldritch Blow", "<p>2</p>", "<p>Self: +40% Poisoning resistance, Bleeding and Disease resistance</p>"]
                ],
                "statistics": [
                    ["26", "33", "40", "47", "54"],
                    ["7,5", "12,5", "17,5", "22,5", "27,5"],
                    ["0%", "0%", "0%", "0%", "0%"],
                    ["7", "7", "8", "8", "9"],
                    ["+0", "+0", "+0", "+0", "+0"],
                    ["2,5%", "3%", "3,5%", "4%", "4,5%"],
                    ["7-14", "8-17", "10-20", "11-22", "12-25"]
                ],
                "resistances": [
                    "40%", "60%", "20%", "67%", "40%", "30%", "20%", "10%"
                ]
            },
            "shieldbreaker": {
                "thumbnail": require("../img/heroes_thumble/shieldbreaker.png"),
                "comment": "“Shifting, swaying — she mesmerizes her prey before the final strike. „",
                "skills": [
                    [ require("../img/shieldbreaker/skill_1.png"), "Transform", "<p>Self(human): Change abomination to beast</p><p>+20% Poison resistance</p><p>+10% Damage</p><p>Other heroes: +8 Stress</p><p>Self(beast): Change abomination to human</p><p>-4 Speed</p><p>Heal 5hp</p><p>Other heroes: -5 Stress</p>", "<div></div><div class='green'></div><div class='green'></div><div class='green'></div>", "Self"],
                    [ require("../img/shieldbreaker/skill_2.png"), "Manacles", "<p>Precision: 80%</p><p>Damage Modification: -50%</p><p>Stun enemies</p>", "<div></div><div class='green'></div><div class='green'></div><div></div>", "<div class='red'></div><div class='red'></div><div class='red'></div><div></div>"],
                    [ require("../img/shieldbreaker/skill_3.png"), "Beast's Bile", "<p>Precision: 90%</p><p>Damage Modification: -100%</p><p>Critical Modification: 1%</p><p>Poisoning enemies</p><p>-20% Poisoning resistance</p>", "<div></div><div class='green'></div><div class='green'></div><div></div>", "<div></div><div class='red'></div><div class='red'></div><div></div>"],
                    [ require("../img/shieldbreaker/skill_4.png"), "Absolution", "<p>Self: Heal 8 Stress</p><p>Heal 4 hp</p>", "<div class='green'></div><div class='green'></div><div class='green'></div><div class='green'></div>", "Self"],
                    [ require("../img/shieldbreaker/skill_5.png"), "Rake", "<p>Precision: 90%</p><p>Damage Modification: -40%</p><p>Critical Modification: 2%</p><p>Self: +15% Damage by using it again</p>", "<div></div><div></div><div class='green'></div><div class='green'></div>", "<div class='red'></div><div class='red'></div><div></div><div></div>"],
                    [ require("../img/shieldbreaker/skill_6.png"), "Rage", "<p>Precision: 85%</p><p>Critical Modification: 5%</p>", "<div></div><div></div><div class='green'></div><div class='green'></div>", "<div class='red'></div><div class='red'></div><div class='red'></div><div></div>"],
                    [ require("../img/shieldbreaker/skill_7.png"), "Slam", "<p>Self(human): Change abomination to beast</p><p>+20% Poison resistance</p><p>+10% Damage</p><p>Other heroes: +8 Stress</p><p>Self(beast): Change abomination to human</p><p>-4 Speed</p><p>Heal 5hp</p><p>Other heroes: -5 Stress</p>", "<div></div><div class='green'></div><div class='green'></div><div class='green'></div>", "<div class='red'></div><div class='red'></div><div></div><div></div>"]
                ],
                "rests": [
                    [ require("../img/shieldbreaker/rest_1.png"), "Anger Management", "<p>3</p>", "<p>Self: reduce 20 Stress</p><p>On comrade: reduce 8 Stress</p>"],
                    [ require("../img/shieldbreaker/rest_2.png"), "Psych Up", "<p>3</p>", "<p>Self: +25% Damage</p>"],
                    [ require("../img/shieldbreaker/rest_3.png"), "The Quickening", "<p>2</p>", "<p>Self: +4 Speed</p>"],
                    [ require("../img/shieldbreaker/rest_4.png"), "Eldritch Blow", "<p>2</p>", "<p>Self: +40% Poisoning resistance, Bleeding and Disease resistance</p>"]
                ],
                "statistics": [
                    ["26", "33", "40", "47", "54"],
                    ["7,5", "12,5", "17,5", "22,5", "27,5"],
                    ["0%", "0%", "0%", "0%", "0%"],
                    ["7", "7", "8", "8", "9"],
                    ["+0", "+0", "+0", "+0", "+0"],
                    ["2,5%", "3%", "3,5%", "4%", "4,5%"],
                    ["7-14", "8-17", "10-20", "11-22", "12-25"]
                ],
                "resistances": [
                    "40%", "60%", "20%", "67%", "40%", "30%", "20%", "10%"
                ]
            },
            "vestal": {
                "thumbnail": require("../img/heroes_thumble/vestal.png"),
                "comment": "“A sister of battle. Pious and unrelenting. „",
                "skills": [
                    [ require("../img/vestal/skill_1.png"), "Transform", "<p>Self(human): Change abomination to beast</p><p>+20% Poison resistance</p><p>+10% Damage</p><p>Other heroes: +8 Stress</p><p>Self(beast): Change abomination to human</p><p>-4 Speed</p><p>Heal 5hp</p><p>Other heroes: -5 Stress</p>", "<div></div><div class='green'></div><div class='green'></div><div class='green'></div>", "Self"],
                    [ require("../img/vestal/skill_2.png"), "Manacles", "<p>Precision: 80%</p><p>Damage Modification: -50%</p><p>Stun enemies</p>", "<div></div><div class='green'></div><div class='green'></div><div></div>", "<div class='red'></div><div class='red'></div><div class='red'></div><div></div>"],
                    [ require("../img/vestal/skill_3.png"), "Beast's Bile", "<p>Precision: 90%</p><p>Damage Modification: -100%</p><p>Critical Modification: 1%</p><p>Poisoning enemies</p><p>-20% Poisoning resistance</p>", "<div></div><div class='green'></div><div class='green'></div><div></div>", "<div></div><div class='red'></div><div class='red'></div><div></div>"],
                    [ require("../img/vestal/skill_4.png"), "Absolution", "<p>Self: Heal 8 Stress</p><p>Heal 4 hp</p>", "<div class='green'></div><div class='green'></div><div class='green'></div><div class='green'></div>", "Self"],
                    [ require("../img/vestal/skill_5.png"), "Rake", "<p>Precision: 90%</p><p>Damage Modification: -40%</p><p>Critical Modification: 2%</p><p>Self: +15% Damage by using it again</p>", "<div></div><div></div><div class='green'></div><div class='green'></div>", "<div class='red'></div><div class='red'></div><div></div><div></div>"],
                    [ require("../img/vestal/skill_6.png"), "Rage", "<p>Precision: 85%</p><p>Critical Modification: 5%</p>", "<div></div><div></div><div class='green'></div><div class='green'></div>", "<div class='red'></div><div class='red'></div><div class='red'></div><div></div>"],
                    [ require("../img/vestal/skill_7.png"), "Slam", "<p>Self(human): Change abomination to beast</p><p>+20% Poison resistance</p><p>+10% Damage</p><p>Other heroes: +8 Stress</p><p>Self(beast): Change abomination to human</p><p>-4 Speed</p><p>Heal 5hp</p><p>Other heroes: -5 Stress</p>", "<div></div><div class='green'></div><div class='green'></div><div class='green'></div>", "<div class='red'></div><div class='red'></div><div></div><div></div>"]
                ],
                "rests": [
                    [ require("../img/vestal/rest_1.png"), "Anger Management", "<p>3</p>", "<p>Self: reduce 20 Stress</p><p>On comrade: reduce 8 Stress</p>"],
                    [ require("../img/vestal/rest_2.png"), "Psych Up", "<p>3</p>", "<p>Self: +25% Damage</p>"],
                    [ require("../img/vestal/rest_3.png"), "The Quickening", "<p>2</p>", "<p>Self: +4 Speed</p>"],
                    [ require("../img/vestal/rest_4.png"), "Eldritch Blow", "<p>2</p>", "<p>Self: +40% Poisoning resistance, Bleeding and Disease resistance</p>"]
                ],
                "statistics": [
                    ["26", "33", "40", "47", "54"],
                    ["7,5", "12,5", "17,5", "22,5", "27,5"],
                    ["0%", "0%", "0%", "0%", "0%"],
                    ["7", "7", "8", "8", "9"],
                    ["+0", "+0", "+0", "+0", "+0"],
                    ["2,5%", "3%", "3,5%", "4%", "4,5%"],
                    ["7-14", "8-17", "10-20", "11-22", "12-25"]
                ],
                "resistances": [
                    "40%", "60%", "20%", "67%", "40%", "30%", "20%", "10%"
                ]
            }
        };

// MODAL ACTIVATION FOR ICONE
icone.forEach((element, index) => {
    element.addEventListener("click", (e) => {

        const stringDataHero = element.dataset.mod;
        
        if(modal.classList.contains("hidden")){
            modal.classList.toggle("hidden");
        }

        document.getElementsByClassName("modal__thumbnail")[0].setAttribute("src", modalText[stringDataHero]["thumbnail"]);
        document.getElementsByClassName("modal__quote")[0].innerText = modalText[stringDataHero]["comment"];
        
        const   skill = document.getElementsByClassName("modal__table")[0].children[1].children,
                rest = document.getElementsByClassName("modal__table")[1].children[1].children,
                statistics = document.getElementsByClassName("modal__table")[2].children[1].children,
                resistances = document.getElementsByClassName("modal__table")[3].children[0].children;

        for (let i = 0; i < skill.length; i++) {
            for (let j = 0; j < skill[i].children.length; j++) {
                if(skill[i].children[j] == skill[i].children[0]){
                    skill[i].children[j].children[0].setAttribute("src", modalText[stringDataHero]["skills"][i][j]);
                }else{
                    skill[i].children[j].innerHTML = modalText[stringDataHero]["skills"][i][j];
                }
            }
        }
        
        for (let i = 0; i < rest.length; i++) {
            for (let j = 0; j < rest[i].children.length; j++) {
                if(rest[i].children[j] == rest[i].children[0]){
                    rest[i].children[j].children[0].setAttribute("src", modalText[stringDataHero]["rests"][i][j]);
                }else{
                    rest[i].children[j].innerHTML = modalText[stringDataHero]["rests"][i][j];
                }
            }
        }
        
        for (let i = 0; i < statistics.length; i++) {
            for (let j = 0; j < statistics[i].children.length; j++) {
                if(j != 0){
                    statistics[i].children[j].innerHTML = modalText[stringDataHero]["statistics"][i][j - 1];
                }
            }
        }
        
        for (let i = 0; i < resistances.length; i++) {
            for (let j = 0; j < resistances[i].children.length; j++) {
                if(j != 0){
                    resistances[i].children[j].innerHTML = modalText[stringDataHero]["resistances"][i];
                }
            }
        }
    });
});

modalClose.addEventListener("click", (e) => {
    if(!modal.classList.contains("hidden")){
        modal.classList.toggle("hidden");
    }
});

// LOCATION
const locations = document.getElementsByClassName("section__location");

for(let i = 0; i < locations.length; i++){
    let waypoint = new Waypoint({
        element: locations[i],
        handler: function(direction) {
            this.element.children[0].children[0].classList.remove("hidden");
        },
        offset: '70%'
      });
}