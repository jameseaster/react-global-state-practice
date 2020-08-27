import React, { useContext } from "react";
import Context from "../store/context";

const Nav = () => {
  const { globalState, globalDispatch } = useContext(Context);

  return (
    <nav>
      {globalState.isLoggedIn ? (
        <button
          type="button"
          onClick={() => globalDispatch({ type: "LOGOUT" })}
        >
          LOGOUT
        </button>
      ) : (
        <button type="button" onClick={() => globalDispatch({ type: "LOGIN" })}>
          LOGIN
        </button>
      )}
    </nav>
  );
};

export default Nav;
