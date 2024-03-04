export const getUserInfoSuccess = (userInfo) => ({
    type: "GET_USER_INFO_SUCCESS",
    payload: userInfo,
});

export const signOut = () => ({
    type: "SIGN_OUT",
});
