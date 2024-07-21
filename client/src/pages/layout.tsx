import React from "react";
import { Outlet } from "react-router-dom";
import NavigationBar from "../components/common/navigationBar";

export const Layout: React.FunctionComponent = () => {
    return (
        <>
            <Outlet/>
            <NavigationBar />
        </>
    )
}