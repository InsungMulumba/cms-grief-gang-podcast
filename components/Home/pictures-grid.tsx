import React, { Component, FC } from "react";
import styled from "styled-components";
import colors from "../../styles/colors";

const Grid = styled.div`
  display: flex;
  width: 50%;
  max-width: 50%;
  flex-direction: column;
`;

const GridColumn = styled.div`
  display: flex;
  width: 50%;
`;

const GridImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const PicturesGrid: FC = () => {
  return (
    <>
      <Grid>
        <GridColumn>
          <GridImage src={`/carousel/pic-1.jpg`} loading="lazy" />
          <GridImage src={`/carousel/pic-2.jpg`} loading="lazy" />
        </GridColumn>
        <GridColumn>
          <GridImage src={`/carousel/pic-3.jpg`} loading="lazy" />
          <GridImage src={`/carousel/pic-4.jpg`} loading="lazy" />
        </GridColumn>
      </Grid>
    </>
  );
};

export default PicturesGrid;
