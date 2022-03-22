import axios from "axios";

export const GET_LIST_CONTACT = "GET_LIST_CONTACT"

export const getListContact = () =>{
    console.log('masuk action')
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
            console.log(res)
            dispatch({
                type: GET_LIST_CONTACT,
                payload : {
                    loading: false,
                    data: res.data,
                    errorMessage : false
                }
            })
        }).catch((e)=> {
            console.log(e)
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