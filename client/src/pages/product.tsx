import React from "react";
import { Page, Header, Box} from "zmp-ui";

export const Products: React.FunctionComponent = () => {
    return (
    <Page className="page">
      <Header 
        backIcon={<div></div>}
        title="San pham" 
      />
      <Box className="content">
        hi
      </Box>
    </Page>
    );
} ;