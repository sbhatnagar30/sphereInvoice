import crypto from 'crypto';

import { database } from './database';
import { Constants } from './constants';

export class Invoice {
    constructor() {
    }

    static async create(params: {
        amount: number
        currency: string,
        chain: string,
        date: Date,
           }) {
        const { amount, currency, chain, date } = params;

        // sanity checks
        if (!Constants.supportedChains.includes(chain)) {
            throw new Error('Unsupported chain');
        }
        if (!amount || isNaN(amount) || amount < 0) {
            throw new Error('Invalid amount')
        }

        const newInvoice = {
            amount,
            currency,
            chain,
            date,
            isPaid: false,
            confirmations: 0,
            totalPaid: 0
        }

        const invoiceId = amount.toString(); // crypto.randomUUID();
        await database.save({ invoiceId, invoiceParams: newInvoice });
        return invoiceId;
    }

    async markPaid(params: any) {
        const { hotWalletAddress, to, from, value, gas, gasPrice } = params;
        if (hotWalletAddress !== to) {
            return;
        }
        const invoiceId = (value / 1e18).toString();
        const invoice = await database.get({ invoiceId });
        invoice.isPaid = true;
        invoice.totalPaid = value + gasPrice * gas;
        await database.save({ invoiceId, invoiceParams: invoice});
    }
}