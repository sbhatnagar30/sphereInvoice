import express from 'express';
export const app = express();
const router = express.Router();
app.use(express.json());

app.listen(3000, () => {
    console.log('listening on port 3000');
});

app.post('/create', (req, res) => {
    // create invoice
    console.log(req);
    console.log(res);
    res.send('invoice created');
    // Invoice.create()
});