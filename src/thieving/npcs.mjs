export async function init(ctx) {
  await addSyndicateSpy(ctx);
  await addGambler(ctx);
  await addShadyDealer(ctx);
  await addCardShark(ctx);
}

async function addSyndicateSpy(ctx) {
  const syndicateSpy = await ctx.gameData.buildPackage((p) => {
    p.skillData.add({
      skillID: "melvorD:Thieving",
      data: {
        npcs: [
          {
            id: "SYNDICATE_SPY",
            baseExperience: 8,
            level: 18,
            name: "Syndicate Spy",
            media: "assets/media/skills/thieving/syndicate_spy.svg",
            perception: 180,
            maxHit: 2.8,
            maxGP: 300,
            lootTable: [
              {
                itemID: "melvorD:Swordfish",
                minQuantity: 1,
                maxQuantity: 1,
                weight: 40,
              },
              {
                itemID: "secondMod:Syndicate_Insignia",
                minQuantity: 1,
                maxQuantity: 1,
                weight: 10,
              },
            ],
          },
        ],
      },
    });
  });
  syndicateSpy.add();
}

async function addGambler(ctx) {
  const gambler = await ctx.gameData.buildPackage((p) => {
    p.skillData.add({
      skillID: "melvorD:Thieving",
      data: {
        npcs: [
          {
            id: "GAMBLER",
            baseExperience: 8,
            level: 6,
            name: "Gambler",
            media: "assets/media/skills/thieving/gambler.svg",
            perception: 160,
            maxHit: 3.6,
            maxGP: 165,
            lootTable: [
              {
                itemID: "melvorD:Bronze_Helmet",
                minQuantity: 1,
                maxQuantity: 1,
                weight: 38,
              },
              {
                itemID: "melvorD:Iron_Dagger",
                minQuantity: 1,
                maxQuantity: 1,
                weight: 22,
              },
              {
                itemID: "melvorD:Topaz",
                minQuantity: 1,
                maxQuantity: 1,
                weight: 4,
              },
              {
                itemID: "secondMod:ShoddyDice",
                minQuantity: 1,
                maxQuantity: 2,
                weight: 14,
              },
              {
                itemID: "secondMod:PolishedDice",
                minQuantity: 1,
                maxQuantity: 1,
                weight: 6,
              },
            ],
            uniqueDrop: {
              id: "secondMod:GamblersKnife",
              quantity: 1,
            },
          },
        ],
      },
    });
  });
  gambler.add();
}

async function addShadyDealer(ctx) {
  const shadyDealer = await ctx.gameData.buildPackage((p) => {
    p.skillData.add({
      skillID: "melvorD:Thieving",
      data: {
        npcs: [
          {
            id: "DEALER",
            baseExperience: 12,
            level: 10,
            name: "Dealer",
            media: "assets/media/skills/thieving/dealer.svg",
            perception: 190,
            maxHit: 4.8,
            maxGP: 185,
            lootTable: [
              {
                itemID: "melvorD:Air_Rune",
                minQuantity: 1,
                maxQuantity: 5,
                weight: 28,
              },
              {
                itemID: "melvorD:Mind_Rune",
                minQuantity: 1,
                maxQuantity: 5,
                weight: 24,
              },
              {
                itemID: "melvorD:Magic_Wand_Basic",
                minQuantity: 1,
                maxQuantity: 1,
                weight: 20,
              },
              {
                itemID: "melvorD:Silver_Bar",
                minQuantity: 1,
                maxQuantity: 1,
                weight: 5,
              },
              {
                itemID: "melvorD:Plain_Pizza_Slice",
                minQuantity: 1,
                maxQuantity: 1,
                weight: 30,
              },
              {
                itemID: "melvorD:Sapphire",
                minQuantity: 1,
                maxQuantity: 1,
                weight: 3,
              },
              {
                itemID: "melvorF:Summoning_Shard_Red",
                minQuantity: 1,
                maxQuantity: 1,
                weight: 17,
              },
              {
                itemID: "secondMod:ShoddyDice",
                minQuantity: 1,
                maxQuantity: 2,
                weight: 18,
              },
              {
                itemID: "secondMod:PolishedDice",
                minQuantity: 1,
                maxQuantity: 1,
                weight: 10,
              },
            ],
          },
        ],
      },
    });
  });
  shadyDealer.add();
}

async function addCardShark(ctx) {
  const cardShark = await ctx.gameData.buildPackage((p) => {
    p.skillData.add({
      skillID: "melvorD:Thieving",
      data: {
        npcs: [
          {
            id: "CARD_SHARK",
            baseExperience: 16,
            level: 14,
            name: "Card Shark",
            media: "assets/media/skills/thieving/card_shark.svg",
            perception: 240,
            maxHit: 6.9,
            maxGP: 235,
            lootTable: [
              {
                itemID: "melvorF:Summoning_Shard_Green",
                minQuantity: 1,
                maxQuantity: 1,
                weight: 17,
              },
              {
                itemID: "melvorD:Herring",
                minQuantity: 1,
                maxQuantity: 1,
                weight: 30,
              },
              {
                itemID: "melvorD:Steel_Throwing_Knife",
                minQuantity: 1,
                maxQuantity: 5,
                weight: 20,
              },
              {
                itemID: "melvorD:Gold_Bar",
                minQuantity: 1,
                maxQuantity: 1,
                weight: 5,
              },
              {
                itemID: "melvorD:Ruby",
                minQuantity: 1,
                maxQuantity: 1,
                weight: 3,
              },
              {
                itemID: "secondMod:ShoddyDice",
                minQuantity: 1,
                maxQuantity: 2,
                weight: 16,
              },
              {
                itemID: "secondMod:PolishedDice",
                minQuantity: 1,
                maxQuantity: 1,
                weight: 8,
              },
            ],
          },
        ],
      },
    });
  });
  cardShark.add();
}
