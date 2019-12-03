import React, { useState, useCallback, useEffect } from "react";
import Loader from "../Components/Loader";

const Production = ({company}) => {
  return (
    <>
        {company&& (
       <div>{company.name} / 
       {company.origin_country}</div>
       )}
    </>
  );
};

export default Production;
