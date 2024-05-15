
import { useState } from 'react'
import './App.css'
import DeleteCheck from './components/DeleteCheck'
import FetchData from './components/FetchData'
import Header from './components/Header'

function App() {

  const [deleteData, setDeleteData] = useState([]);

  function deleteHandler(data){
    
    setDeleteData(prevState => {
      
    return [...prevState, data]
    });
  }

  return (
    <>
    <Header></Header>
    <DeleteCheck data={deleteData}></DeleteCheck>
    <FetchData onDelete={deleteHandler}></FetchData>
    
    </>
  )
}

export default App
