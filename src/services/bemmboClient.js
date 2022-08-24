import axios from 'axios';

const bemmboClient = axios.create({
  baseURL: 'https://recruiting.api.bemmbo.com/',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
});


const fetchPendingInvoices = () => bemmboClient.get('invoices/pending');

export { fetchPendingInvoices };
