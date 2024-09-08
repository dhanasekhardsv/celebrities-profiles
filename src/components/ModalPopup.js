import React, { useEffect } from 'react';

const ModalPopup = ({ isOpen, children, closeModal }) => {
    useEffect(() => {
        const handleEsc = (event) => {
            if (event.key === 'Escape') {
                closeModal();
            }
        };
        window.addEventListener('keydown', handleEsc);
        return () => {
            window.removeEventListener('keydown', handleEsc);
        };
    }, [closeModal]);

    if (!isOpen) return null;

    return (
        <div className='fixed top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.4)] flex justify-center items-center p-4 overflow-auto'>
            <div className='bg-white h-fit w-11/12 sm:w-fit sm:max-w-2xl sm:min-w-96 m-auto p-4 border-[1px] border-solid border-[#888] rounded-lg shadow-sm opacity-100'>
                {children}
            </div>
        </div>
    )
}

export default ModalPopup
