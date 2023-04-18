import express from 'express';
export const app = express();
const router = express.Router();
app.use(express.json());

import { Invoice } from './invoice';

app.listen(3000, () => {
    console.log('listening on port 3000');
});

app.post('/create', (req, res) => {
    // create invoice
    const params = {
        recipients: req.body.recipients,
        currency: req.body.currency,
        chain: req.body.chain,
        date: new Date(),
    }
    try {
        Invoice.create(params);
        res.send('invoice created');
    } catch (err) {
        // respond with 500 for now
        console.log(err);
        res.send(500);
    }
});