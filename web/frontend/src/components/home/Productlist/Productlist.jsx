import {
    Button,
    CardActionArea,
    Container,
    Grid,
    Rating,
    Stack,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import "./Productlist.scss";
import { ChevronRightRounded } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../../redux/thunk";
import { formattedNumber } from "../../../utils/appService";

const list = [
    {
        Title: "Product list 1",
    },
    {
        Title: "Product list 2",
    },
    {
        Title: "Product list 3",
    },
];

const Productlist = () => {
    const dispatch = useDispatch();
    // ở file này get được nhưng qua các file khác không get được
    const products = useSelector((state) => state.data.products);
    // sử dụng localStorage thay thế.
    const data = JSON.stringify(products);
    localStorage.setItem("productsList", data);

    const [randomProducts, setRandomProducts] = useState([]);

    useEffect(() => {
        fetchData();
    }, [dispatch]);
    
    // random product
    useEffect(() => {
        if (products.length > 0) {
            const randomIndex = Math.floor(Math.random() * products.length);
            const randomProduct = products[randomIndex];
            setRandomProducts((prevProducts) => [
                ...prevProducts,
                randomProduct,
            ]);
        }
    }, [products]);
    return (
        <Container className="productlist" maxWidth="lg">
            <Grid className="cnt" container spacing={2}>
                {list.map((items) => {
                    return (
                        <Grid xs={4}>
                            <Stack direction={"row"}>
                                <p className="title ">{items.Title}</p>
                            </Stack>
                        </Grid>
                    );
                })}
            </Grid>

            <Grid className="grid2" container spacing={1}>
                {products
                    .map((item) => {
                        return (
                            <Grid xs={4}>
                                <CardActionArea
                                    href={`productdetails?id=${item._id}`}
                                >
                                    <Stack className="stackn" direction={"row"}>
                                        <Stack className="image">
                                            <img
                                                width={10}
                                                className="img"
                                                src={item.image}
                                                alt=""
                                            />
                                        </Stack>
                                        <Stack spacing={0.5}>
                                            <p className="name text-ellipsis">
                                                {item.name}
                                            </p>
                                            <Stack
                                                className="pr"
                                                spacing={3}
                                                direction={"row"}
                                            >
                                                <p className="content h8 regular ">
                                                    {formattedNumber(
                                                        item.price,
                                                    )}
                                                </p>
                                                <Rating
                                                    name="read-only"
                                                    className="rating"
                                                    value={item.rating}
                                                    readOnly
                                                    precision={0.2}
                                                />
                                            </Stack>
                                        </Stack>
                                    </Stack>
                                </CardActionArea>
                            </Grid>
                        );
                    })
                    .slice(0, 15)}
            </Grid>

            <Grid className="cnt2" container spacing={4}>
                {list.map((items) => {
                    return (
                        <Grid xs={4}>
                            <Stack direction={"row"}>
                                <Button
                                    href="/products"
                                    className="btn1"
                                    variant="text"
                                >
                                    <p className="normal h7 medium indigo">
                                        View More Products…
                                    </p>
                                    <ChevronRightRounded className="icon indigo" />
                                </Button>
                            </Stack>
                        </Grid>
                    );
                })}
            </Grid>
        </Container>
    );
};

export default Productlist;
