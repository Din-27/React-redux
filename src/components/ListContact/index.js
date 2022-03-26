import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getListContact, deleteContact } from '../../actions/ContactAction'

function ListContact() {
    
    const 
    { 
        getListContactResult, 
        getListContactLoading, 
        getListContactError,
        deleteContactResult
    } = useSelector((state)=> state.ContactReducer)
    const dispatch = useDispatch()

    useEffect(()=> {
    // console.log('didmount')
    dispatch(getListContact())
    }, [dispatch])

    useEffect(()=>{
        if(deleteContactResult){
          dispatch(getListContact())
        }
      }, [deleteContactResult, dispatch])


  return (
    <div>
        <h4>List Kontak</h4>
        {getListContactResult ? (
            getListContactResult.map((x, y)=> {
                return (
                    <p key={x.id}>
                        {y + 1}. 
                        {x.name} - 
                        {x.phone}
                        <button onClick={()=>dispatch(deleteContact(x.id))}>delete</button>
                        </p>
                )
            })
        ) : getListContactLoading ? (
            <p>loading ...</p>
        ) : (
            <p> {getListContactError ? getListContactError : "data kosong"} </p>
        )
        }
    </div>
  )
}

export default ListContact