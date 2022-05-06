
const bsct = {
    name: 'bsct',
    chainId: 97,
    _defaultProvider: (providers) => new providers.JsonRpcProvider('https://data-seed-prebsc-1-s1.binance.org:8545')
}

const bsc = {
    name: 'bsc',
    chainId: 56,
    _defaultProvider: (providers) => new providers.JsonRpcProvider('https://bsc-dataseed.binance.org')
}

const polygon = {
    name: 'polygon',
    chainId: 137,
    _defaultProvider: (providers) => new providers.JsonRpcProvider('https://polygon-rpc.com')
}

const rinkeby = {
    name: 'rinkeby',
    chainId: 4,
    _defaultProvider: (providers) => new providers.JsonRpcProvider('https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161')
}

const ethereum = {
    name: 'ethereum',
    chainId: 1,
    _defaultProvider: (providers) => new providers.JsonRpcProvider('https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161')
}




export{
    bsc,
    bsct,
    polygon,
    rinkeby,
    ethereum,
}