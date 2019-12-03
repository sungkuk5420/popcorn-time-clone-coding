import React, { useState, useCallback, useEffect } from "react";
import Loader from "../Components/Loader";

const Youtube = () => {
const [loading, setLoading] = useState(false);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
       <div>Youtube</div>
      )}
    </>
  );
};

export default Youtube;
