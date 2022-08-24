const CURRENT_USD_VALUE = 916.75;
const RECEIVED = 'received';
const PENDING = 'pending';

const CLP = new Intl.NumberFormat('es-CL', {
  currency: 'CLP',
  style: 'currency',
  currencyDisplay: 'code'
});

const USD = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  currencyDisplay: 'code'
});

const clpToUsd = (amount) => Math.round(amount / CURRENT_USD_VALUE);
const usdToClp = (amount) => Math.round(amount * CURRENT_USD_VALUE);

const amountToCurrency = (amount, currencyType) => {
  switch (currencyType) {
    case 'CLP':
      return { clp: CLP.format(amount), usd: USD.format(clpToUsd(amount)) };
    case 'USD':
      return { clp: CLP.format(usdToClp(amount)), usd: USD.format(amount) };
  }
};

const getStatusType = (type) => {
  switch (type) {
    case 'received':
      return 'Recibida';
    case 'pending':
      return 'Pendiente';
    case 'credit_note':
      return 'Nota de Credito';
    default:
      return type;
  }
};

const isEmptyObject = (object) => {
  return !Object.keys(object).length;
};

export { amountToCurrency, CLP, USD, clpToUsd, getStatusType, isEmptyObject };
