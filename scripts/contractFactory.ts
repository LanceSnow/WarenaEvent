import { BaseProvider } from "@ethersproject/providers";
import { ethers } from "ethers";
import { ABI_DO_NFT, MARKET, ABI_MARKET, PRIVATE_KEY, DO_WARENA, WARENA, ABI_WARENA } from "./config";
import { bsc, bsct } from "./network";

const current_network = bsct;

function market() {
    let provider = getProvider();
    let contract = new ethers.Contract(MARKET, ABI_MARKET, provider);
    let alice = new ethers.Wallet(PRIVATE_KEY, provider);
    let _market = contract.connect(alice);
    return _market;
}

function warena() {
    let provider = getProvider();
    let contract = new ethers.Contract(WARENA, ABI_WARENA, provider);
    let alice = new ethers.Wallet(PRIVATE_KEY, provider);
    let _warena = contract.connect(alice);
    return _warena;
}

function doWarena() {
    let provider = ethers.getDefaultProvider(bsct)
    let _doWarena = new ethers.Contract(DO_WARENA, ABI_DO_NFT, provider);
    return _doWarena;
  }

function getProvider(): BaseProvider {
    switch (current_network) {
        case bsct:
            return ethers.getDefaultProvider(bsct);
        case bsc:
            return ethers.getDefaultProvider(bsc);
    }
}


export {
    market,
    warena,
    doWarena,

}