import axios from "axios";
import { API_PUBLIC_URL } from "./config";
import queryString from "query-string";

export const getUserInfo = async (user_id) => {
    try {
        const api = `${API_PUBLIC_URL}users/${user_id}`;
        const res = await axios.get(api);
        return res.data;
    } catch (err) {
        console.log("Error fetching user info:", err);
        throw err;
    }
};

export const getAllCategories = async () => {
    try {
        const api = `${API_PUBLIC_URL}categories`;
        const res = await axios.get(api);
        // res.data : Object
        return res.data;
    } catch (err) {
        console.log("Error fetching categories: ", err);
        throw err;
    }
};

export const toggleFavorite = async (userId, productId) => {
    const isAuthenticated = localStorage.getItem("isAuthenticated");
    if (isAuthenticated !== "true") return;
    else
        try {
            const res = await axios.put(
                `${API_PUBLIC_URL}users/favorite/${userId}/${productId}`,
            );
            return res.data;
        } catch (err) {
            throw err;
        }
};

export const countProductByCategory = (products, categoryId) => {
    return products.filter((product) => product.category._id === categoryId)
        .length;
};


export const formattedNumber = (price) =>
    new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND",
    }).format(price);

export const getIdFromUrl = () => {
    const id = queryString.parse(window.location.search);
    return id.id;
};
