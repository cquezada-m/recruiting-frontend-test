import { Dialog, Transition } from '@headlessui/react';

const ResumeModal = ({ isOpen, closeModal, invoiceData }) => {
  return (
    <Dialog open={isOpen} onClose={closeModal}>
      <Dialog.Title>Resumen de Asignación</Dialog.Title>
      <p>{JSON.stringify(invoiceData)}</p>

      <button
        type='button'
        onClick={closeModal}
        className='inline-flex justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-white-900'
      >
        Seguir Asignando
      </button>
    </Dialog>
  );
};

export default ResumeModal;
