import { Box, Flex, Skeleton, Button } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import Logo from '../Logo/Logo';
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { GetCart } from '../../redux/App/action';

function Navbar() {
    const [total, setTotal] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isAuth = useSelector((state) => state.AuthReducer.isAuth);
    const cart = useSelector((state) => state.AppReducer.cart);

    useEffect(() => {
        dispatch(GetCart());
        const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
        setTotal(totalItems);
        setIsLoading(false);
    }, [cart, dispatch]);

    return (
        <Flex p={4} zIndex={700} w="100%" boxShadow="sm" height="90px" alignItems="center" justifyContent="space-between" bgColor="white" position="sticky" top={0}>
            <Link to="/">
                <Logo />
            </Link>

            <Box display="flex" width={{ base: "70%", sm: "60%", md: "50%", lg: "45%", xl: "35%" }} alignItems="center" justifyContent="space-around">
                {isLoading ? (
                    <Skeleton w="30px" h="30px" />
                ) : (
                    <Link to="/cart">
                        <Badge overlap="rectangular" color="secondary" badgeContent={total}>
                            <ShoppingCartIcon color="primary" style={{ fontSize: "30px" }} />
                        </Badge>
                    </Link>
                )}

                {isAuth ? (
                    <Button color="skyblue" variant="ghost" size="sm" onClick={() => {
                        localStorage.removeItem("isAuth");
                        navigate("/login");
                    }}>Logout</Button>
                ) : (
                    <Link to="/login">
                        <Button color="skyblue" variant="ghost" size="sm">Login</Button>
                    </Link>
                )}

                <Link to="/profile">
                    <Button color="skyblue" variant="ghost" size="sm">Profile</Button>
                </Link>

                <Link to="/mystore">
                    <Button color="skyblue" variant="ghost" size="sm">My Store</Button>
                </Link>
            </Box>
        </Flex>
    );
}

export default Navbar;
