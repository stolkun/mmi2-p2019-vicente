import "waypoints/lib/noframework.waypoints.min.js";


const   icone = document.querySelectorAll(".section__heroe-icone"),
        modal = document.getElementById("modal"),
        modalClose = document.getElementById("modal__close"),
        modalText = {
            "abomination": {
                "thumbnail": require("../img/heroes_thumble/abomination.png"),
                "comment": "“Tortured and reclusive... this man is more dangerous than he seems... „"
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
    });
});

modalClose.addEventListener("click", (e) => {
    if(!modal.classList.contains("hidden")){
        modal.classList.toggle("hidden");
    }
});