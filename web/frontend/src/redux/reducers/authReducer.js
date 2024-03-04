const initialState = {
    isAuthenticated: false,
    userData: null,
    loading: false,
    error: null,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_USER_INFO_SUCCESS":
            return {
                isAuthenticated: true,
                userData: action.payload,
            };
        case "LOGIN_SUCCESS":
            return {
                ...state,
                isAuthenticated: true,
                userData: action.payload,
                error: null,
            };
        case "LOGIN_FAILURE":
            return {
                ...state,
                isAuthenticated: false,
                userData: null,
                error: action.payload,
            };
        case "SIGN_OUT":
            return {
                isAuthenticated: false,
                userData: null,
            };
        case "REGISTER_REQUEST":
            return {
                ...state,
                loading: true,
                error: null,
            };
        case "REGISTER_SUCCESS":
            return {
                ...state,
                loading: false,
                error: null,
                user: action.payload,
            };
        case "REGISTER_FAILURE":
            return {
                ...state,
                loading: false,
                error: action.payload,
                user: null,
            };
        case "LOAD_USER_DATA_SUCCESS":
            return {
                ...state,
                userData: action.payload,
                error: null,
            };

        case "LOAD_USER_DATA_FAILURE":
            return {
                ...state,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default authReducer;
