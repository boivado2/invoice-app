import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const LogoutButton = ({children}) => {
  const { logout } = useAuth0();

  return (
    <button className=' auth-btn relative px-4 py-2 lg:py-4  border-l-2 lg:border-l-0 lg:border-t-2 h-full border-custom-dark-blue-100 flex flex-col  items-center lg:justify-center' onClick={() => logout({ returnTo: window.location.origin })}>
      {children}
    </button>
  );
};

export default LogoutButton;