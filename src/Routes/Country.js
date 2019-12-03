import React, { useState, useCallback, useEffect } from "react";

const Country = ({country}) => {
  return (
    <>
        {country&& (
       <div>{country.name}</div>
       )}
    </>
  );
};

export default Country;
