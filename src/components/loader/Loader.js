import React from 'react';
import ClipLoader from "react-spinners/ClipLoader";

function Loader() {
    return (
        <div align="center">
        <ClipLoader
          size={100}
          color={"#123abc"}
        />
        </div>
    )
}

export default Loader;