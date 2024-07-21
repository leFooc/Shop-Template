import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";

export const SearchBar: React.FunctionComponent = () => {

    return (
        <div className="search-bar-wrapper">
            <input 
                className="search-bar-input"
                placeholder="find some thing"
            />
            <button className="icon-wrapper search-icon">
                <SearchIcon />
            </button>
            <button className="icon-wrapper cancel-icon">
                <CloseIcon />
            </button> 
        </div>
    );
};