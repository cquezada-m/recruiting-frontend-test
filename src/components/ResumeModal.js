import { Dialog } from '@headlessui/react';

import { amountToCurrency } from '../utils';

const ResumeModal = ({
  isOpen,
  closeModal,
  invoiceData: { received, credit_note }
}) => {
  const currencyReceived = amountToCurrency(received.amount, received.currency);
  const currencyCreditNote = amountToCurrency(credit_note.amount, credit_note.currency);
  const diffAmount = currencyReceived.amount - currencyCreditNote.amount
  const diffCurrency = amountToCurrency(diffAmount, 'CLP');

  return (
    <Dialog open={isOpen} onClose={closeModal} className='relative z-50'>
      <div className='fixed inset-0 bg-black/30' aria-hidden='true' />
      <div className='fixed inset-0 flex items-center justify-center p-4'>
        <Dialog.Panel className='mx-auto max-w-lg rounded bg-white w-1/2 h-1/2 p-5'>
          <Dialog.Title className={'capitalize'}>
            Resumen {received.organization_id}
          </Dialog.Title>
          <div className='my-10 text-purple-700 text-opacity-75'>
            <strong className='block'>
              Factura:
              <span className='font-light text-black pl-3'>{received.id}</span>
            </strong>
            <strong className='block'>
              Monto:
              <span className='font-light text-black pl-3'>
                {currencyReceived.clp} ({currencyReceived.usd})
              </span>
            </strong>
            <br></br>
            <strong className='block'>
              Nota de Credito:
              <span className='font-light text-black pl-3'>
                {credit_note.id}
              </span>
            </strong>
            <strong className='block'>
              Monto:
              <span className='font-light text-black pl-3'>
                {currencyCreditNote.clp} ({currencyCreditNote.usd})
              </span>
            </strong>
            <br></br>
            <strong className='block mb-20'>
              A Pagar:
              <span className='font-light text-black pl-3'>
                {diffCurrency.clp} ({diffCurrency.usd})
              </span>
            </strong>
          </div>

          <button
            type='button'
            onClick={closeModal}
            className='inline-flex justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-white-900'
          >
            Seguir Asignando
          </button>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default ResumeModal;
