import React from "react";
import HouseIcon from "@mui/icons-material/House";
import { Box, Grid } from "zmp-ui";

interface ButtonProps {
    Icon?: React.ReactNode,
    color?: string,
    label?: string,
    path?: string,
}

const IconButton: React.FunctionComponent<ButtonProps> = ({
    Icon=null,
    color="#fff",
    label="",
    path="#"
}: ButtonProps) => {
    return (
        <div className="button-wrapper">
            <button style={{backgroundColor: color}}>
                {Icon}
            </button>
            <span className="button-label">{label}</span>
        </div>
    );
};

export const UtilPanel: React.FunctionComponent = () => {
    return (
        <Box mt={6}>
            <h1 className="header">Tiện ích</h1>
            <Grid
                columnCount={4}
                columnSpace="16px"
                rowSpace="16px"
            >
                <IconButton
                    Icon={<HouseIcon />}
                    color=""
                    label="Trang chủ"
                    path=""
                />
                <IconButton />
                <IconButton />
                <IconButton />
                <IconButton />
                <IconButton />
                <IconButton />
            </Grid>
        </Box>
    );
};