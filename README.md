# sphereInvoiceTest

### Install Dependencies
```npm i```

### Start the Server
```npm start```

### Generate an invoice
```curl -XPOST -d '{"amount":1,"currency":"ETH","chain":"ETH"}' -H 'content-type: application/json' localhost:3000/create```