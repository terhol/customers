const express = require('express');
const { CustomerDatabase } = require('./CustomerDatabase');

const PORT = 5555;
const db = new CustomerDatabase();

const app = express();

app
  .listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });

app
  .get('/getCustomers', async(req, res) => {
    const customers = await db.getCustomers();

    res.json(customers);
  })
  .get('/getCustomer', async(req, res) => {
    const { id } = req.query;
    const customer = await db.getCustomerById(parseInt(id));

    res.json(customer);
  });

module.exports = {
  app
};