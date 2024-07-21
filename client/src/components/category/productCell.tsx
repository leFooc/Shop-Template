import React from "react";
import { Box } from "zmp-ui";

interface ProductCellProps {
    src: string,
    alt: string,
    name: string,
}

export const ProductCell: React.FunctionComponent<ProductCellProps> = (props: ProductCellProps) => {
    return (
        <Box>
            <div className="product-cell-wrapper">
                <img 
                    className="product-image"
                    src={props.src}
                    alt={props.alt}
                />
                <span className="product-label">
                    {props.name}
                </span>
            </div>
        </Box>
    );
};