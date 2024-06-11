import {create} from 'zustand';

export const useErrorStore = create((set)=>({
    errorMessageToggle : {
        messageToggle : false
    },
    toggleErrorMessage : ()=> set((prev)=>({
        errorMessageToggle : {
            ...prev,
            messageToggle : !prev.errorMessageToggle.messageToggle
        }
    }))
}))