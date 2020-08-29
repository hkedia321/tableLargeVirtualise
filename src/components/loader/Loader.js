import React from 'react';
import styled from 'styled-components';
import ClipLoader from "react-spinners/ClipLoader";

function Loader() {
    return (
        <ClipLoader
          size={100}
          color={"#123abc"}
        />
    )
}

export default Loader;