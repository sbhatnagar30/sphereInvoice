import crypto from 'crypto';

import { database } from './database';
import { Constants } from './constants';

export class Invoice {
    constructor() {
    }

    static async create(params: {
        recipients: Array<{ address: string, amount: number }>,
        currency: string,
        chain: string,
        date: Date,
           }) {
        const { recipients, currency, chain, date } = params;

        // sanity checks
        if (!Constants.supportedChains.includes(chain)) {
            throw new Error('Unsupported chain');
        }
        for (const recipient of recipients) {
            if (!recipient.address || !recipient.amount || recipient.amount < 0) {
                throw new Error('Invalid Recipients for this invoice');
            }
        }

        const invoiceId = crypto.randomUUID();
        await database.save({ invoiceId, invoiceParams: params });
    }
}