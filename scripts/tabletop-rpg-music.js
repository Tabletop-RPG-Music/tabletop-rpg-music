Hooks.once("ready", async function () {
    if (game.moulinette) {
        game.moulinette.sources.push({
            type: "sounds",
            publisher: "Tabletop RPG Music",
            pack: "Tabletop RPG Music",
            source: "data",
            path: "modules/tabletop-rpg-music/music",
        });
    }
});
