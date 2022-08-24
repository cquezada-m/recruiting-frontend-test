import { RadioGroup } from '@headlessui/react';
import InvoiceItem from './Item';

const InvoiceContainer = ({
  label,
  invoices,
  selected,
  handleSelectedInvoice
}) => (
  <RadioGroup value={selected} onChange={handleSelectedInvoice} className='mb-20'>
    <RadioGroup.Label className='center'>{label}</RadioGroup.Label>
    <div className='space-y-2'>
      {invoices.map((invoice) => (
        <InvoiceItem invoice={invoice} />
      ))}
    </div>
  </RadioGroup>
);

export default InvoiceContainer;
