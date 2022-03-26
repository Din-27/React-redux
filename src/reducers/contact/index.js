import { GET_LIST_CONTACT, ADD_CONTACT, DELETE_CONTACT } from "../../actions/ContactAction"

const initialState = {
    getListContactResult : false,
    getListContactLoading : false,
    getListContactError : false,

    addContactResult : false,
    addContactLoading : false,
    addContactError : false,

    deleteContactResult : false,
    deleteContactLoading : false,
    deleteContactError : false
}

const contact = (state = initialState, action) => {
    switch(action.type){
        case GET_LIST_CONTACT:
            return {
                ...state,
                getListContactResult: action.payload.data,
                getListContactLoading : action.payload.loading,
                getListContactError : action.payload.errorMessage
            }
        case ADD_CONTACT:
            return {
                ...state,
                addContactResult: action.payload.data,
                addContactLoading : action.payload.loading,
                addContactError : action.payload.errorMessage
            }
        case DELETE_CONTACT:
            return {
                ...state,
                deleteContactResult: action.payload.data,
                deleteContactLoading : action.payload.loading,
                deleteContactError : action.payload.errorMessage
            }
        default:
            return state
    }
}

export default contact