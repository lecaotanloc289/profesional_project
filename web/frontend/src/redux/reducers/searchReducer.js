import {
    SET_SEARCH_TERM,
    FETCH_SEARCH_RESULTS_SUCCESS,
} from "../actions/searchAcion";

const initialState = {
    searchTerm: "",
    searchResults: [],
};

const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SEARCH_TERM:
            return { ...state, searchTerm: action.payload };
        case FETCH_SEARCH_RESULTS_SUCCESS:
            return { ...state, searchResults: action.payload };
        default:
            return state;
    }
};

export default searchReducer;
