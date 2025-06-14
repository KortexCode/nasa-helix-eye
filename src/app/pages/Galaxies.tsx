import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { GalaxiesLayout } from '../components/GalaxiesLayout';
import { LoadingSpinner } from '../components/LoadingSpinner';
import { LOADING_STATUS, ERROR_STATUS, useFetchGalaxiesInfo } from '../hooks/useFetchGalaxiesInfo';

const GalaxiesPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 3rem;
  width: calc(100% - 6rem);
`

export const Galaxies = () => {
  const [galaxias, setGalaxias] = useState([]);
 /*  const { galaxies, requestStatus } = useFetchGalaxiesInfo(); */

 useEffect(() => {
  const data = window.__INITIAL_PROPS__;
  if(Object.keys(data).length === 0) return
  setGalaxias(data.galaxias);
 });

  const renderLayout = () => {
    
    console.log(galaxias);
  
    if (galaxias.length === 0) return <LoadingSpinner />
   /*  if (requestStatus === ERROR_STATUS) return <h1>Error</h1> */
    return <GalaxiesLayout galaxies={galaxias} />
  }

  return (
    <GalaxiesPageWrapper>
      <h1>Galaxias</h1>
      {renderLayout()}
    </GalaxiesPageWrapper>
  );
}