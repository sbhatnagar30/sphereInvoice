import crypto;

import { database } from './database';
import { Constants } from './constants';

class Invoice {
    constructor() {
    }

    create(params: {
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

        const invoiceId = crypto.uid();
        database.save({ invoiceId, invoiceParams: params });
    }
}