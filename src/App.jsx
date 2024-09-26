import { useRef, useState } from 'react'
import './App.css'
import Button from './Button'
import Modal from './Modal'

function App() {
  const [visible, setVisible] = useState("hidden")
  const [buttonVisibility, setButtonVisibility] = useState("block")

  const modalRef = useRef(null)

  function openModal(){
    setVisible("block")
    setButtonVisibility("hidden")
  }

  function closeModal(){
    setVisible("hidden")  
    setButtonVisibility("block")  
  }

  function myFunction(event){
    if(event.target == modalRef.current)
      closeModal()
  }

  (visible == "block") ? window.addEventListener('click', myFunction) : null

  return (
    <>
      <div ref={modalRef} className='hero flex flex-col align-middle justify-center items-center min-w-full min-h-screen bg-purple-300'>
      <Button text={"Open"} onClick={openModal} visibility={buttonVisibility}/>
      <Modal visibility={visible} onClick={closeModal}/>
      </div>
    </>
  )
}

export default App
