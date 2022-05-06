
import { ethers } from "hardhat";
import { DO_WARENA, NFT_IDS, BUSD, Alice } from "./config";
import { market, warena } from "./contractFactory";


async function main() {
  await checkAndApprove();
  let tx;
  let _market = market();
  let token = BUSD;
  let pricePerDay = ethers.utils.parseUnits("0.0714", 18);
  let zeroAddress = "0x0000000000000000000000000000000000000000";
  let minDuration = 86400 * 14;
  let maxEndTime = Math.floor(new Date().getTime() / 1000) + 86400 * 14;

  for (let index = 0; index < NFT_IDS.length; index++) {
    const oid = NFT_IDS[index];
    tx = await _market.mintAndCreatePrivateLendOrder(DO_WARENA, oid, maxEndTime, minDuration, pricePerDay, token, zeroAddress, 2);
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


main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
