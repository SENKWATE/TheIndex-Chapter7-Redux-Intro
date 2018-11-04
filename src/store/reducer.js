import authors from "../data"

const initialState = {
  authors: authors,
  newAuthorId: 1
}

const reducer = (state=initialState, action) => {
    switch(action.type){
        case 'ADD_AUTHOR':
            return {
                ...state,
                authors: state.authors.concat(action.payload), // wev used concat onstead of push to return a new array
                newAuthorId: state.newAuthorId + 1
            }
        case 'DELETE_AUTHOR':
            return {
                ...state,
                authors: state.authors.filter(author => author !== action.payload)
            }
        default:
            return state;
    }
}

export default reducer;
