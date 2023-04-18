# sphereInvoiceTest

### Install Dependencies
```npm i```

You will also need an instance of ganache-cli running:
```npm i -g ganache-cli```

then start ganache in terminal: `ganache-cli`

### Start the Server
```npm start```

the server will print the port and also the hot wallet address that it is using to detect payments

### Generate an invoice
```curl -XPOST -d '{"amount":1,"currency":"ETH","chain":"ETH"}' -H 'content-type: application/json' localhost:3000/create```

### TODO:

* fix payment detection logic
* migrate to better database
* implement proper invoice ids
* use contract to accept payments instead of address
* update confirmations on invoices based on incoming block hashes
* expand hot wallet features to be able to refund and sweep