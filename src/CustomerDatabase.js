const { Datastore } = require('@google-cloud/datastore');

const PROJECT_ID = 'customers-255707';

class CustomerDatabase {
  constructor() {
    this.kind = 'Customer';
    this.datastore = new Datastore({
        projectId: PROJECT_ID,
      }
    );
  }

  createCustomerEntity({ id, firstName, lastName }) {
    return {
      key: this.datastore.key(['Customer', id]),
      data: { id, firstName, lastName },
    }
  }

  async init(customerData) {
    const customerEntities = customerData.map(customer => this.createCustomerEntity(customer));

    return await this.datastore
      .upsert(customerEntities)
      .catch(console.error);
  }

  async getCustomers() {
    const query = this.datastore
      .createQuery(this.kind)
      .order('id');

    return await this.datastore
      .runQuery(query)
      .then(results => {
        const customers = results[0];

        return customers.map(customer => {
          const { id, firstName, lastName } = customer;

          return { id, firstName, lastName };
        });
      })
      .catch(console.error);
  }

  async getCustomerById(id) {
    const key = this.datastore.key([this.kind, id]);

    return await this.datastore
      .get(key)
      .then(results => {
        const customer = results[0];
        const { id, firstName, lastName } = customer;

        return { id, firstName, lastName };
      })
      .catch(console.error);
  }
}

module.exports = {
  CustomerDatabase
};