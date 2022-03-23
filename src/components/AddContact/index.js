import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addContact, getListContact } from '../../actions/ContactAction'

function AddContact() {

  const dispatch = useDispatch()
  const {addContactResult} = useSelector((state)=> state.ContactReducer)
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(addContact({name: name, phone: phone}))
  }

  useEffect(()=>{
    if(addContactResult){
      dispatch(getListContact())
      setName('')
      setPhone('')
    }
  }, [addContactResult, dispatch])

  return (
    <div>
      <h4>Add Contact</h4>
      <form 
      onSubmit={(e)=>handleSubmit(e)}
      style={{display: 'flex', flexDirection: 'column'}}>
        <input 
        style={{width: '100px', margin: '5px 0'}}
        type="text" 
        name='name' 
        value={name} 
        onChange={(e)=>setName(e.target.value)}/>
        <input 
        style={{width: '100px', margin: '5px 0'}}
        type="text" 
        name='phone' 
        value={phone} 
        onChange={(e)=>setPhone(e.target.value)}/>
        <button 
        style={{width: '105px', margin: '5px 0'}}
        type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default AddContact