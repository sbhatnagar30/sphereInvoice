# sphereInvoiceTest

### Install Dependencies
```npm i```

You will also need an instance of ganache-cli running:
```npm i -g ganache-cli```

then start ganache in terminal: `ganache-cli`

### Start the Server
```npm start```

### Generate an invoice
```curl -XPOST -d '{"amount":1,"currency":"ETH","chain":"ETH"}' -H 'content-type: application/json' localhost:3000/create```