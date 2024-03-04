import axios from "axios";
import { API_PUBLIC_URL } from "../../utils/config";
import { FETCH_SEARCH_RESULTS_SUCCESS, SET_SEARCH_TERM } from "./actionTypes";


export const setSearchTerm = (term) => ({
    type: SET_SEARCH_TERM,
    payload: term,
});

export const fetchSearchResultsSuccess = (results) => ({
    type: FETCH_SEARCH_RESULTS_SUCCESS,
    payload: results,
});

export const fetchSearchResults = (term) => {
    return async (dispatch) => {
        try {
            const response = await axios.get(
                `${API_PUBLIC_URL}products/search?key=${term}`,
            );
            const results = response.data;
            dispatch(fetchSearchResultsSuccess(results));
        } catch (error) {
            console.error("Error fetching search results:", error);
        }
    };
};
