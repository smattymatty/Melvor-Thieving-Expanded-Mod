export async function init(ctx) {
  addShopDisplayOrder(ctx);
  addShopCategoryOrder(ctx);
}

function addShopDisplayOrder(ctx) {
  const shopPurchases = ctx.gameData.buildPackage((p) => {
    p.shopDisplayOrder.add({
      insertAt: "End",
      ids: [
        "smattyThieving:Unlock_Syndicate_Hideout",
        "smattyThieving:Unlock_ShroudLands",
        "smattyThieving:Thiefs_Rations1",
        "smattyThieving:Thiefs_Rations2",
        "smattyThieving:Thiefs_Rations3",
        "smattyThieving:Thiefs_Rations4",
      ],
    });
  });
  shopPurchases.add();
}

function addShopCategoryOrder(ctx) {
  const shopCategory = ctx.gameData.buildPackage((p) => {
    p.shopCategoryOrder.add({
      insertAt: "After",
      afterID: "melvorF:Township",
      ids: ["smattyThieving:ThievingExtended"],
    });
  });
  shopCategory.add();
}
