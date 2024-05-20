import {createContext, useState} from 'react';

export const ModalContext = createContext({
    modalState : '',
    showModal : ()=>{},
    hideModal : ()=>{},
    showCheckout : ()=>{},
    hideCheckout : ()=>{},
});

export default function ModalContextProvider({children}){

    const [modalState, setModalState] = useState('')
    
    function showModal(){
        setModalState('cart');
    };

    function hideModal(){
        setModalState('');
    }

    function showCheckout(){
        setModalState('check');
    }

    function hideCheckout(){
        setModalState('')
    }

    let modalCtx={
        modalState,
        showModal,
        hideModal,
        showCheckout,
        hideCheckout
    }



    return(
        <ModalContext.Provider value={modalCtx}>{children}</ModalContext.Provider>
    )
}

