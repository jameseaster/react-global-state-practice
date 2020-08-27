import React, { useContext } from "react";
import Context from "../store/context";

const DownloadImage = () => {
  const { globalState } = useContext(Context);

  return (
    <form method="get" action="https://picsum.photos/200">
      <button disabled={!globalState.isLoggedIn} type="submit">
        DownloadImage
      </button>
    </form>
  );
};

export default DownloadImage;
