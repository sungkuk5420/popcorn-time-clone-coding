import React, { useState, useCallback, useEffect } from "react";
import Loader from "../Components/Loader";

const Created = () => {
const [loading, setLoading] = useState(false);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
       <div>Created</div>
      )}
    </>
  );
};

export default Created;
