import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const LoginButton = ({children}) => {
  const { loginWithRedirect } = useAuth0();

  return <button  className=' auth-btn py-2 px-4 lg:py-4  border-l-2 lg:border-l-0 lg:border-t-2 h-full border-custom-dark-blue-100 flex flex-col  items-center justify-center' onClick={() => loginWithRedirect()}>
    {children}
  </button>;
};

export default LoginButton;