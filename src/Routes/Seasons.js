import React, { useState, useCallback, useEffect } from "react";
import styled from "styled-components";
const Image = styled.img`
width:100px;
`;
const Seasons = ({season}) => {
  return (
    <>
       <div>{season.name}
       <Image src={"https://image.tmdb.org/t/p/w500"+season.poster_path}/>
       </div>
    </>
  );
};

export default Seasons;
