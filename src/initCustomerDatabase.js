const { CustomerDatabase } = require('./CustomerDatabase');

const db = new CustomerDatabase();
db.init([
  { id: 1, firstName: 'John', lastName: 'Smith' },
  { id: 2, firstName: 'Jane', lastName: 'Williams' },
]);

console.log('Customer database successfully inited.');