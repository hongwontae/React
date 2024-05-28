import EventForm from "../components/EventForm";

import {redirect} from 'react-router-dom';




function FormPage(){


    return(
        <>
            <EventForm></EventForm>
        </>
    )
}

export default FormPage;

export async function formAction({request}){
    
    
    const data = await request.formData();
    const dataObj = {
        title : data.get('title'),
        age : data.get('age'),
        carrier : data.get('carrier'),
        date : data.get('date')
    };
    console.log(dataObj)
    
    


    return redirect('/')
}