import React, { useState, useCallback, useEffect } from "react";
import Loader from "../Components/Loader";

const Seasons = () => {
const [loading, setLoading] = useState(false);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
       <div>Seasons</div>
      )}
    </>
  );
};

export default Seasons;
