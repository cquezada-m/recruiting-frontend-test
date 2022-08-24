import './App.css';
import { useEffect, useState } from 'react';
import { dummyInvoices } from './data/dummyInvoices';
import InvoiceContainer from './components/invoice';
import ResumeModal from './components/ResumeModal';
import { isEmptyObject } from './utils';

function App() {
  const filteredByType = (type = 'received', references = null) => {
    return dummyInvoices.filter((invoice) =>
      references ? invoice.reference == references : invoice.type == type
    );
  };

  const filteredReceivedInvoices = filteredByType('received');
  const [selected, setSelected] = useState({ received: {}, credit_note: {} });
  const [receivedInvoices, setReceivedInvoices] = useState(
    filteredReceivedInvoices
  );
  const [creditNotesInvoices, setCreditNotesInvoices] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const toogleModal = () => setIsOpen(!isOpen);

  const handleSelectedInvoice = (invoiceId) => {
    const selectedInvoice = dummyInvoices.find(
      (invoice) => invoice.id == invoiceId
    );

    const currentData = {
      ...selected,
      [selectedInvoice.type]: selectedInvoice
    };

    setSelected(currentData);
  };

  const handleCloseModal = () => {
    const currentCreditNotes = creditNotesInvoices.filter(
      (crediNote) => crediNote.id != selected.credit_note.id
    );
    console.log('currentCreditNotes', currentCreditNotes);
    console.log('creditNotesInvoices', creditNotesInvoices);

    setSelected({ received: {}, credit_note: {} });
    setCreditNotesInvoices(currentCreditNotes);
    toogleModal();
  };

  useEffect(() => {
    const currentReceivedId = selected.received.id;
    const _creditNotesInvoices = filteredByType(null, currentReceivedId);
    setCreditNotesInvoices(_creditNotesInvoices);
  }, [selected.received]);

  return (
    <div className='w-full px-4 py-16'>
      <div className='mx-auto w-full max-w-lg'>
        <InvoiceContainer
          label={'Selecciona una factura'}
          invoices={receivedInvoices}
          selected={selected.received.id}
          handleSelectedInvoice={handleSelectedInvoice}
        />

        {creditNotesInvoices.length > 0 && (
          <InvoiceContainer
            label={'Selecciona una nota de crédito'}
            invoices={creditNotesInvoices}
            selected={selected.credit_note.id}
            handleSelectedInvoice={handleSelectedInvoice}
          />
        )}

        {!isEmptyObject(selected.received) &&
          !isEmptyObject(selected.credit_note) && (
            <>
              <button
                type='button'
                onClick={toogleModal}
                className='inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2'
              >
                Asignar
              </button>

              <ResumeModal
                isOpen={isOpen}
                closeModal={handleCloseModal}
                invoiceData={selected}
              />
            </>
          )}
      </div>
    </div>
  );
}

export default App;
