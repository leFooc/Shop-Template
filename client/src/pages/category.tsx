import React from "react";
import { Page, Header, Box, Grid } from "zmp-ui";
import { CategoryList } from "../components/category/categoryList";
import { SearchBar } from "../components/category/searchBar";
import "../components/category/category.scss";
import { products } from "../../mock/product";
import { ProductCell } from "../components/category/productCell";

export const Category: React.FunctionComponent = () => {
    return (
    <>
      <Header 
            title="Danh muc" 
      />
      <SearchBar />
      <CategoryList />
      <Page className="page">
        <Box className="content">
          <Grid
            className="products-wrapper"
            columnCount={2}
            columnSpace="8px"
            rowSpace="8px"
          >
            {
              products.map((product, idx) => 
                <ProductCell 
                  src={product.images[0].src}
                  alt={product.images[0].alt}
                  name={product.name}
                />
            )}
          </Grid>
        </Box>
      </Page>
    </>
    );
};