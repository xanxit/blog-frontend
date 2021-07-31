const isAuthenticated = () => {
  const user= localStorage.getItem("payload_name");
  if (user!= null) {
    return true;
  } else {
    return false;
  }
};

export default isAuthenticated;