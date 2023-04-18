import { Wallet } from 'ethers';

export class HotWallet {
    wallet;
    constructor(provider: any) {
        this.wallet = Wallet.createRandom(provider);
        console.log('hot wallet address: ' + this.wallet.address);
    }
}