import React, { useState, useCallback, useEffect } from "react";
import Loader from "../Components/Loader";

const Production = () => {
const [loading, setLoading] = useState(false);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
       <div>Production</div>
      )}
    </>
  );
};

export default Production;
