import React from 'react';
import { BottomNavigation, Box, Header, Page } from 'zmp-ui';
import { Carousel } from '../components/homepage/carousel';
import "../components/homepage/homepage.scss";
import { UtilPanel } from '../components/homepage/utilPanel';
import { ProductCarousel } from '../components/homepage/productCarousel';

export const HomePage: React.FunctionComponent = () => {


  return (
    <>
      <Header 
          backIcon={<div></div>}
          title="Trang chu" 
        />
      <Page className="page">
        <Box className="content">
          <Carousel />
          <UtilPanel />
          <ProductCarousel />
        </Box>
      </Page>
    </>
  );
};
