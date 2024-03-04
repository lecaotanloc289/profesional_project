import { toggleFavorite } from "../../utils/appService";
import {
    SET_CATEGORIES,
    SET_PRODUCTS,
    SET_PRODUCTS_DATA,
    TOGGLE_LIKE_FAILURE,
    TOGGLE_LIKE_SUCCESS,
} from "./actionTypes";

export const setCategories = (categories) => ({
    type: SET_CATEGORIES,
    payload: categories,
});

export const setProducts = (products) => ({
    type: SET_PRODUCTS,
    payload: products,
});

export const toggleFavoriteAction = async (productId, dispatch) => {
    var userId;
    if (localStorage.getItem("isAuthenticated") === "true") {
        const userData = JSON.parse(localStorage.getItem("userData"));
        userId = userData.id;
    }

    try {
        const result = await toggleFavorite(userId, productId);
        console.log(result);
        dispatch({
            type: TOGGLE_LIKE_SUCCESS,
            payload: result,
        });
    } catch (error) {
        dispatch({
            type: TOGGLE_LIKE_FAILURE,
            payload: error.message,
        });
    }
};

export const setProductData = (data) => ({
    type: SET_PRODUCTS_DATA,
    payload: data
})