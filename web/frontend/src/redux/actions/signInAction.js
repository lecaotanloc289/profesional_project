import axios from "axios";
import { API_PUBLIC_URL } from "../../utils/config";
export const loginRequest = () => ({
    type: "LOGIN_REQUEST",
});
// Hành động đăng nhập thành công
export const loginSuccess = (userData) => ({
    type: "LOGIN_SUCCESS",
    payload: userData,
});

// Hành động đăng nhập thất bại
export const loginFailure = (error) => ({
    type: "LOGIN_FAILURE",
    payload: error,
});

// Hành động tải thông tin người dùng thành công
export const loadUserDataSuccess = (userData) => ({
    type: "LOAD_USER_DATA_SUCCESS",
    payload: userData,
});

// Hành động tải thông tin người dùng thất bại
export const loadUserDataFailure = (error) => ({
    type: "LOAD_USER_DATA_FAILURE",
    payload: error,
});

// Hành động đăng nhập và tải thông tin người dùng
export const signInAndLoadUserData = (data) => {
    return async (dispatch) => {
        const apiSignIn = `${API_PUBLIC_URL}users/signin`;
        try {
            const res = await axios.post(apiSignIn, {
                email: data.email,
                password_hash: data.password_hash,
            });

            // Lưu thông tin người dùng vào localStorage
            localStorage.setItem("userData", JSON.stringify(res.data));

            // Gọi hành động đăng nhập thành công
            dispatch(loginSuccess(res.data));

            // Bước 2: Thực hiện tải thông tin người dùng dựa trên id từ kết quả đăng nhập
            const apiLoadUserData = `${API_PUBLIC_URL}users/${res.data.user_id}`;
            const loadUserDataRes = await axios.get(apiLoadUserData);

            // Gọi hành động tải thông tin người dùng thành công
            dispatch(loadUserDataSuccess(loadUserDataRes.data));
        } catch (error) {
            // Gọi hành động đăng nhập thất bại
            dispatch(loginFailure(error.response));
            console.log("Error response from server:", error.response);

            // Gọi hành động tải thông tin người dùng thất bại
            dispatch(loadUserDataFailure(error.response));
        }
    };
};
