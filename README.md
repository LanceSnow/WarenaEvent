# Warena Event
This project provides scripts for this event.
Make sure the `current_network` is `bsct` or `bsc`.
Check the address of smart contracts.
Take a test on `bsct` PLS.
Thank you!

# Step
1. install npm packages.
    ```npm i```

2. change the config in [config.ts](./scripts/config.ts)

3. change the `current_network` in [contractFactory.ts](./scripts/contractFactory.ts)

4. run [batchMintAndCreatePrivateLendOrder.ts](./scripts/batchMintAndCreatePrivateLendOrder.ts)
    ```
    npx hardhat run ./scripts/batchMintAndCreatePrivateLendOrder.ts
    ```
5. Wait until the winner appears.

6. change the WINNERS in [config.ts](./scripts/config.ts)

7. run [batchCreatePrivateLendOrder.ts](./scripts/batchCreatePrivateLendOrder.ts)
    ```
    npx hardhat run ./scripts/batchCreatePrivateLendOrder.ts
    ```
