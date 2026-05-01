// signup
export const signupUser = (user) => {
    localStorage.setItem("user", JSON.stringify(user));
  };
  
  // login
  export const loginUser = (email, password) => {
    const user = JSON.parse(localStorage.getItem("user"));
  
    if (!user) return "User not found";
  
    if (user.email === email && user.password === password) {
      localStorage.setItem("isLoggedIn", "true");
      return "success";
    } else {
      return "Invalid credentials";
    }
  };
  
  // check login
  export const isAuth = () => {
    return localStorage.getItem("isLoggedIn") === "true";
  };
  
  // logout
  export const logout = () => {
    localStorage.removeItem("isLoggedIn");
  };