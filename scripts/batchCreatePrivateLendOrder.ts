
import { ethers } from "hardhat";
import { BUSD, NFT_IDS, DO_WARENA, WINNERS, Alice } from "./config";
import { doWarena, market, warena } from "./contractFactory";

async function main() {
  await checkAndApprove();
  if (WINNERS.length != NFT_IDS.length) {
    console.error("check the winners and the NFTs");
  }
  let doNFT_ids = [];
  let _doWarena = doWarena();

  for (let index = 0; index < NFT_IDS.length; index++) {
    const oid = NFT_IDS[index];
    let doNFT_id = await _doWarena.getVNftId(oid)
    doNFT_ids.push(doNFT_id.toString());
  }

  console.log("doNFT_ids : ", doNFT_ids);


  let tx;
  let _market = market();
  let token = BUSD;
  let pricePerDay = ethers.utils.parseUnits("0.0714", 18);
  let minDuration = 86400 * 14;
  let maxEndTime = Math.floor(new Date().getTime() / 1000) + 86400 * 14;

  for (let index = 0; index < NFT_IDS.length; index++) {
    const doNFT_id = doNFT_ids[index];
    const renter = WINNERS[index];
    tx = await _market.createPrivateLendOrder(DO_WARENA, doNFT_id, maxEndTime, minDuration, pricePerDay, token, renter, 2);
    console.log("mintAndCreatePrivateLendOrder  tx.hash", tx.hash);
    // 操作还没完成，需要等待挖矿
    await tx.wait();
  }
  console.log("success");
}

async function checkAndApprove() {
  let _warena = warena();
  let bool = await _warena.isApprovedForAll(Alice, DO_WARENA)
  console.log(bool);
  if (!bool) {
    let tx = await _warena.setApprovalForAll(DO_WARENA, true);
    console.log("setApprovalForAll", tx.hash);
    await tx.wait();
  }
}



// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
