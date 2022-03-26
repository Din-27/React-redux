import axios from "axios";

export const GET_LIST_CONTACT = "GET_LIST_CONTACT"
export const ADD_CONTACT = "ADD_CONTACT"
export const DELETE_CONTACT = "DELETE_CONTACT"

export const getListContact = () =>{
    // console.log('masuk action')
    return (dispatch) => {
        dispatch({
            type: GET_LIST_CONTACT,
            payload : {
                loading: true,
                data: false,
                errorMessage : false
            }
        })

        axios({
            method: 'get',
            url: 'http://localhost:3000/Kontak',
            timeout: 120000
        }).then((res)=> {
            // console.log(res)
            dispatch({
                type: GET_LIST_CONTACT,
                payload : {
                    loading: false,
                    data: res.data,
                    errorMessage : false
                }
            })
        }).catch((e)=> {
            // console.log(e)
            dispatch({
                type: GET_LIST_CONTACT,
                payload : {
                    loading: false,
                    data: false,
                    errorMessage : e.message
                }
            })
        })
    }
}

export const addContact = (data) =>{
    // console.log('masuk action')
    return (dispatch) => {
        dispatch({
            type: ADD_CONTACT,
            payload : {
                loading: true,
                data: false,
                errorMessage : false
            }
        })

        axios({
            method: 'post',
            url: 'http://localhost:3000/Kontak',
            timeout: 120000,
            data: data
        }).then((res)=> {
            // console.log(res)
            dispatch({
                type: ADD_CONTACT,
                payload : {
                    loading: false,
                    data: res.data,
                    errorMessage : false
                }
            })
        }).catch((e)=> {
            // console.log(e)
            dispatch({
                type: ADD_CONTACT,
                payload : {
                    loading: false,
                    data: false,
                    errorMessage : e.message
                }
            })
        })
    }
}

export const deleteContact = (id) =>{
    console.log('masuk action')
    return (dispatch) => {
        dispatch({
            type: DELETE_CONTACT,
            payload : {
                loading: true,
                data: false,
                errorMessage : false
            }
        })

        axios({
            method: 'delete',
            url: 'http://localhost:3000/Kontak/' + id,
            timeout: 120000,
        }).then((res)=> {
            console.log(res)
            dispatch({
                type: DELETE_CONTACT,
                payload : {
                    loading: false,
                    data: res.data,
                    errorMessage : false
                }
            })
        }).catch((e)=> {
            console.log(e)
            dispatch({
                type: DELETE_CONTACT,
                payload : {
                    loading: false,
                    data: false,
                    errorMessage : e.message
                }
            })
        })
    }
}