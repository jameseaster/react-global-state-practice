import React, { useContext } from "react";
import { LoginNotificationWrapper } from "../elements";
import Context from "../store/context";

const LoginNotification = () => {
  const { globalState } = useContext(Context);

  return (
    <LoginNotificationWrapper loggedIn={globalState.isLoggedIn}>
      <p>Please login to download image</p>
    </LoginNotificationWrapper>
  );
};

export default LoginNotification;
