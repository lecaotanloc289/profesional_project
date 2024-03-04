import React, { useEffect, useState } from "react";
import "./header.scss";
import Container from "@mui/material/Container";
import {
    Badge,
    Button,
    Divider,
    Link,
    Menu,
    MenuItem,
    Stack,
    TextField,
} from "@mui/material";
import icons from "../../assets/icons";
import CircleIcon from "../items/CircleIcon";
import Elma from "../items/Elma";
import Navbar from "./navbar";
import { getUserInfoSuccess, signOut } from "../../redux/actions/userAction";
import { getUserInfo } from "../../utils/appService";
import { useDispatch } from "react-redux";
import { fetchSearchResults } from "../../redux/actions/actions";
export default function Header() {
    const badge_style = {
        fontSize: "20px",
    };
    // STATE SIGNIN
    const [isSignIn, setIsSignIn] = useState(false);
    const [username, setUsername] = useState("");
    const isAuthenticated = localStorage.getItem("isAuthenticated");
    
    useEffect(() => {
        var userData = JSON.parse(localStorage.getItem("userData"));
        if (userData && isAuthenticated === "true") {
            getUserInfo(userData.id)
                .then((userInfo) => {
                    setUsername(userInfo.name);
                    getUserInfoSuccess(userInfo);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
        if (isAuthenticated === "true") {
            setIsSignIn(true);
        } else setIsSignIn(false);
    }, []);

    const handleSignOut = () => {
        signOut();
        localStorage.setItem("isAuthenticated", "false");
        window.location.href = "/signin";
    };

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    // getting search value
    const [search, setSearchTerm] = useState("");
    const [cartItems, setCartItems] = useState(0);
    // render data at search component
    const dispatch = useDispatch();
    // const searchTerm = useSelector((state) => state.search.searchTerm);
    if (search != "") {
        localStorage.setItem("searchValue", search);
    }
    useEffect(() => {
        dispatch(fetchSearchResults(localStorage.getItem("searchValue")));
    }, [dispatch, localStorage.getItem("searchValue")]);
    const handleSearch = (e) => {
        if (search === "") console.log(search);
        else window.location.href = `/search?key=${search}`;
    };
    return (
        <div>
            <Container maxWidth="lg">
                <Navbar />
            </Container>

            <Divider />

            <Container className="header" maxWidth="lg">
                <Stack className="header-2" spacing={2} direction={"row"}>
                    <Elma />

                    <Stack className="searching" direction={"row"}>
                        <TextField
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="search-field"
                        ></TextField>
                        <Button
                            className="search-button "
                            variant="contained"
                            onClick={handleSearch}
                        >
                            <img src={icons.Search} alt="" />
                        </Button>
                    </Stack>

                    <Stack spacing={1.5} direction={"row"}>
                        <Link href="/cart">
                            <div className="cart-icon">
                                <Badge
                                    className="red"
                                    badgeContent={cartItems}
                                    color="error"
                                    style={badge_style}
                                >
                                    <img src={icons.Cart} alt="" />
                                </Badge>
                            </div>
                        </Link>
                        <CircleIcon
                            href={"/love"}
                            link={icons.Love}
                            children=""
                        />
                        <CircleIcon
                            href={"/user"}
                            link={icons.User}
                            children=""
                        />
                        <Stack className="center" spacing={1}>
                            {isSignIn ? (
                                <div>
                                    <p className="h7 medium dark-lighter">
                                        {username}
                                    </p>
                                    <a className="normal" onClick={handleClick}>
                                        <p className="account h7 medium black">
                                            My Account
                                            <img
                                                src={icons.Chevron_down}
                                                alt=""
                                            />
                                        </p>
                                    </a>
                                    <div>
                                        <Menu
                                            id="basic-menu"
                                            anchorEl={anchorEl}
                                            open={open}
                                            onClose={handleClose}
                                            MenuListProps={{
                                                "aria-labelledby":
                                                    "basic-button",
                                            }}
                                        >
                                            <MenuItem onClick={handleClose}>
                                                Profile
                                            </MenuItem>
                                            <MenuItem onClick={handleClose}>
                                                My account
                                            </MenuItem>
                                            <MenuItem onClick={handleSignOut}>
                                                Logout
                                            </MenuItem>
                                        </Menu>
                                    </div>
                                </div>
                            ) : (
                                <div className="">
                                    <Link className="normal" href="/signin">
                                        <p className="normal account h7 medium black">
                                            Sign In
                                        </p>
                                    </Link>
                                    <Link href="/register">
                                        <p className="account h7 medium black">
                                            Register
                                        </p>
                                    </Link>
                                </div>
                            )}
                        </Stack>
                    </Stack>
                </Stack>
            </Container>
        </div>
    );
}

export function BasicMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    "aria-labelledby": "basic-button",
                }}
            >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
        </div>
    );
}


