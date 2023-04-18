import express from 'express';
export const app = express();
const router = express.Router();
app.use(express.json());

import Web3 from 'web3';
const web3Provider = new Web3('ws://localhost:8545');

import { HotWallet } from "./hotWallet";
const hotWallet = new HotWallet(web3Provider);

import { Invoice } from './invoice';

app.listen(3000, () => {
    console.log('listening on port 3000');
});

app.post('/create', async (req, res) => {
    // create invoice
    const params = {
        recipients: req.body.recipients,
        currency: req.body.currency,
        chain: req.body.chain,
        date: new Date(),
    }
    try {
        const invoiceId = await Invoice.create(params);
        res.send(invoiceId);
    } catch (err) {
        // respond with 500 for now
        console.log(err);
        res.send(500);
    }
});

web3Provider.eth.subscribe('newBlockHeaders', async (err, data) => {
    console.log(data);
});

web3Provider.eth.subscribe('pendingTransactions', async (err, data) => {
    const txDetails = await web3Provider.eth.getTransaction(data);
})