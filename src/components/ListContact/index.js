import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getListContact } from '../../actions/ContactAction'

function ListContact() {
    
    const 
    { 
        getListContactResult, 
        getListContactLoading, 
        getListContactError 
    } = useSelector((state)=> state.ContactReducer)
    const dispatch = useDispatch()

    useEffect(()=> {

        console.log('didmount')
        dispatch(getListContact())

    }, [dispatch])


  return (
    <div>
        <h4>List Kontak</h4>
        {getListContactResult ? (
            getListContactResult.map((x)=> {
                return (
                    <p key={x.id}>{x.name} - {x.phone}</p>
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