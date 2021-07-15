export const PageService = {
  saveUserDataLocal: (userInfo) => {
    localStorage.setItem("userInfo", JSON.stringify(userInfo));
  },
  saveUserDataSession: (userInfo) => {
    sessionStorage.setItem("userInfo", JSON.stringify(userInfo));
  },
  getUserData: () => {
    console.log("getuserData");

    return (
      localStorage.getItem("userInfo") || sessionStorage.getItem("userInfo")
    );
  },
};
