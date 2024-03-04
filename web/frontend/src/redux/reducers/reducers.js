import {
    SET_CATEGORIES,
    SET_PRODUCTS,
    TOGGLE_LIKE_FAILURE,
    TOGGLE_LIKE_SUCCESS,
} from "../actions/actionTypes";

const initialState = {
    categories: [],
    products: [],
};

const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CATEGORIES:
            return { ...state, categories: action.payload };
        case SET_PRODUCTS:
            return { ...state, products: action.payload };

        default:
            return state;
    }
};

const initialFavoriteState = {
    products: {},
    error: null,
};
const favoriteReducer = (state = initialFavoriteState, action) => {
    switch (action.type) {
        case TOGGLE_LIKE_SUCCESS:
            return {
                ...state,
                isFavorite: !state.isFavorite,
                error: null,
            };

        case TOGGLE_LIKE_FAILURE:
            return {
                ...state,
                error: action.payload,
            };

        default:
            return state;
    }
};

export { dataReducer, favoriteReducer };
