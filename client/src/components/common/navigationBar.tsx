import React from "react";
import { useNavigate } from "react-router-dom";
import { BottomNavigation } from "zmp-ui";
import { CartIcon } from "./cartIcon";




const NavigationBar: React.FunctionComponent = () => {
    const [active, setActive] = React.useState<string>("homepage");
    const navigate = useNavigate();

    return (
        <BottomNavigation
            fixed
            activeKey={active}
            onChange={(key: string) => setActive(key)}
        >
            <BottomNavigation.Item
                key="homepage"
                label="abc"
                icon="abc"
                activeIcon="abc"
                linkTo="/"
            />
            <BottomNavigation.Item
                key="category"
                label="abc"
                icon="abc"
                activeIcon="abc"
                linkTo="/products"
            />
            <BottomNavigation.Item
                key="cart"
                label="abc"
                icon={<CartIcon/>}
                activeIcon={<CartIcon />}
                linkTo="/carts"
            />
            <BottomNavigation.Item
                key="profile"
                label="abc"
                icon="abc"
                activeIcon="abc"
                linkTo="/profile"
            />
        </BottomNavigation>
    )
}

export default NavigationBar;