import React, { useState, useCallback, useEffect } from "react";
import Loader from "../Components/Loader";

const Youtube = ({video}) => {
const [loading, setLoading] = useState(false);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
       <>
       <iframe width="420" height="315"
        src={"https://www.youtube.com/embed/"+video.key}>
        </iframe>
       </>
      )}
    </>
  );
};

export default Youtube;
