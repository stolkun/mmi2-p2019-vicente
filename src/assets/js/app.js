import "waypoints/lib/noframework.waypoints.min.js";
import { stat } from "fs";


const   icone = document.querySelectorAll(".section__heroe-icone"),
        modal = document.getElementById("modal"),
        modalClose = document.getElementById("modal__close"),
        modalText = {
            "abomination": {
                "thumbnail": require("../img/heroes_thumble/abomination.png"),
                "comment": "“Tortured and reclusive... this man is more dangerous than he seems... „",
                "skills": [
                    [ require("../img/abomination/skill_1.png"), "Transform", "<p>Self(human): Change abomination to beast</p><p>+20% Poison resistance</p><p>+10% Damage</p><p>Other heroes: +8 Stress</p><p>Self(beast): Change abomination to human</p><p>-4 Speed</p><p>Heal 5hp</p><p>Other heroes: -5 Stress</p>", "<div></div><div class='green'></div><div class='green'></div><div class='green'></div>", "Self"],
                    [ require("../img/abomination/skill_2.png"), "Manacles", "<p>Precision: 80%</p><p>Damage Modification: -50%</p><p>Stun enemies</p>", "<div></div><div class='green'></div><div class='green'></div><div></div>", "<div class='red'></div><div class='red'></div><div class='red'></div><div></div>"],
                    [ require("../img/abomination/skill_3.png"), "Beast's Bile", "<p>Precision: 90%</p><p>Damage Modification: -100%</p><p>Critical Modification: 1%</p><p>Poisoning enemies</p><p>-20% Poisoning resistance</p>", "<div></div><div class='green'></div><div class='green'></div><div></div>", "<div></div><div class='red'></div><div class='red'></div><div></div>"],
                    [ require("../img/abomination/skill_4.png"), "Absolution", "<p>Self: Heal 8 Stress</p><p>Heal 4 hp</p>", "<div class='green'></div><div class='green'></div><div class='green'></div><div class='green'></div>", "Self"],
                    [ require("../img/abomination/skill_5.png"), "Rake", "<p>Precision: 90%</p><p>Damage Modification: -40%</p><p>Critical Modification: 2%</p><p>Self: +15% Damage by using it again</p>", "<div></div><div></div><div class='green'></div><div class='green'></div>", "<div class='red'></div><div class='red'></div><div></div><div></div>"],
                    [ require("../img/abomination/skill_6.png"), "Rage", "<p>Precision: 85%</p><p>Critical Modification: 5%</p>", "<div></div><div></div><div class='green'></div><div class='green'></div>", "<div class='red'></div><div class='red'></div><div class='red'></div><div></div>"],
                    [ require("../img/abomination/skill_7.png"), "Slam", "<p>Self(human): Change abomination to beast</p><p>+20% Poison resistance</p><p>+10% Damage</p><p>Other heroes: +8 Stress</p><p>Self(beast): Change abomination to human</p><p>-4 Speed</p><p>Heal 5hp</p><p>Other heroes: -5 Stress</p>", "<div></div><div class='green'></div><div class='green'></div><div class='green'></div>", "<div class='red'></div><div class='red'></div><div></div><div></div>"]
                ],
                "rests": [
                    [ require("../img/abomination/rest_1.png"), "Anger Management", "<p>3</p>", "<p>Self: reduce 20 Stress</p><p>On comrade: reduce 8 Stress</p>"],
                    [ require("../img/abomination/rest_2.png"), "Psych Up", "<p>3</p>", "<p>Self: +25% Damage</p>"],
                    [ require("../img/abomination/rest_3.png"), "The Quickening", "<p>2</p>", "<p>Self: +4 Speed</p>"],
                    [ require("../img/abomination/rest_4.png"), "Eldritch Blow", "<p>2</p>", "<p>Self: +40% Poisoning resistance, Bleeding and Disease resistance</p>"]
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
            "antiquarian": {
                "thumbnail": require("../img/heroes_thumble/antiquarian.png"),
                "comment": "“She searches where others will not go... and sees what others will not see. „"
            },
            "arbalest": {
                "thumbnail": require("../img/heroes_thumble/arbalest.png"),
                "comment": "“Shoot, bandage and pillage: the dancing steps of war. „"
            },
            "bounty_hunter": {
                "thumbnail": require("../img/heroes_thumble/bounty_hunter.png"),
                "comment": "“The thrill of the hunt... The promise of payment... „"
            },
            "crusader": {
                "thumbnail": require("../img/heroes_thumble/crusader.png"),
                "comment": "“A mighty sword-hand anchored by a holy purpose. A zealous warrior.	„"
            },
            "flagellant": {
                "thumbnail": require("../img/heroes_thumble/flagellant.png"),
                "comment": "“Awash in blood and delusion, he bears the burden of a thousand lifetimes. „"
            },
            "grave_robber": {
                "thumbnail": require("../img/heroes_thumble/grave_robber.png"),
                "comment": "“To those with the keen eye, gold gleams like a dagger's point.	„"
            },
            "hellion": {
                "thumbnail": require("../img/heroes_thumble/hellion.png"),
                "comment": "“Barbaric rage and unrelenting savagery make for a powerful ally. „"
            },
            "highwayman": {
                "thumbnail": require("../img/heroes_thumble/highwayman.png"),
                "comment": "“Elusive, evasive, persistent. Righteous traits for a rogue. „"
            },
            "houndmaster": {
                "thumbnail": require("../img/heroes_thumble/houndmaster.png"),
                "comment": "“A lawman and his faithful beast. A bond forged by battle and bloodshed. „"
            },
            "jester": {
                "thumbnail": require("../img/heroes_thumble/jester.png"),
                "comment": "“He will be laughing still... at the end. „"
            },
            "leper": {
                "thumbnail": require("../img/heroes_thumble/leper.png"),
                "comment": "“This man understands that adversity and existence are one and the same. „"
            },
            "man_at_arms": {
                "thumbnail": require("../img/heroes_thumble/man_at_arms.png"),
                "comment": "“The raw strength of youth may be spent, but his eyes hold the secrets of a hundred campaigns. „"
            },
            "occultist": {
                "thumbnail": require("../img/heroes_thumble/occultist.png"),
                "comment": "“To fight the abyss, one must know it... „"
            },
            "plague_doctor": {
                "thumbnail": require("../img/heroes_thumble/plague_doctor.png"),
                "comment": "“What better laboratory than the blood-soaked battlefield? „"
            },
            "shieldbreaker": {
                "thumbnail": require("../img/heroes_thumble/shieldbreaker.png"),
                "comment": "“Shifting, swaying — she mesmerizes her prey before the final strike. „"
            },
            "vestal": {
                "thumbnail": require("../img/heroes_thumble/vestal.png"),
                "comment": "“A sister of battle. Pious and unrelenting. „"
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