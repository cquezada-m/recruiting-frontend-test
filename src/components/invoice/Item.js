import { RadioGroup } from '@headlessui/react';
import CheckIcon from '../CheckIcon';

import { amountToCurrency, getStatusType } from '../../utils';

const InvoiceItem = ({ invoice }) => {
  const currency = amountToCurrency(invoice.amount, invoice.currency);

  return (
    <RadioGroup.Option
      key={invoice.id}
      value={invoice.id}
      className={({ active, checked }) =>
        `my-5 ${
          active
            ? 'ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-300'
            : ''
        }
    ${checked ? 'bg-blue-900 bg-opacity-75 text-white' : 'bg-white'}
    relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none`
      }
    >
      {({ checked }) => (
        <>
          <div className='flex w-full items-center justify-between'>
            <div className='p-2 w-20'>
              {checked && (
                <div className='shrink-0 text-white'>
                  <CheckIcon className='h-6 w-6' />
                </div>
              )}
            </div>
            <div className='flex w-full items-center justify-between'>
              <strong className='capitalize'>{invoice.organization_id}</strong>
              <div className='text-xs'>
                {currency.clp} ({currency.usd})
              </div>
              <div className='text-xs'>{getStatusType(invoice.type)}</div>
            </div>
          </div>
        </>
      )}
    </RadioGroup.Option>
  );
};

export default InvoiceItem;
