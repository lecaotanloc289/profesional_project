import React, { useEffect, useState } from "react";
import "./Category.scss";
import { Button, CardActionArea, Container, Grid, Stack } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../../redux/thunk";
import { countProductByCategory } from "../../../utils/appService";

const Category = () => {
    const dispatch = useDispatch();
    const categories = useSelector((state) => state.data.categories);
    const products = useSelector((state) => state.data.products);

    useEffect(() => {
        dispatch(fetchData());
    }, [dispatch]);

    return (
        <Container className="category" maxWidth="lg">
            <Stack className="stack1">
                <Stack className="name" direction={"row"}>
                    <p className="namecate h2 medium">Category</p>
                    <Button className=" " variant="outlined" href="/categories">
                        <p className="normal h7 medium indigo">View All</p>
                    </Button>
                </Stack>
            </Stack>
            <Stack className="stack2 mg10">
                <Grid container spacing={2}>
                    {
                        categories.map((category, index) => {
                            return (
                                <Grid item xs={2}>
                                    <CardActionArea
                                        href={`products?category=${category._id}`}
                                        className="flex-center"
                                    >
                                        <Stack className="stack3 " spacing={3}>
                                            <img
                                                width={50}
                                                src={category.icon}
                                                alt=""
                                            />

                                            <Stack
                                                className="namecnt"
                                                spacing={1}
                                            >
                                                <p className="name ">
                                                    {category.name}
                                                </p>
                                                <p className="content ">
                                                    {countProductByCategory(
                                                        products,
                                                        category._id,
                                                    )}{" "}
                                                    items
                                                </p>
                                            </Stack>
                                        </Stack>
                                    </CardActionArea>
                                </Grid>
                            );
                        })
                        // .slice(0, 6)
                    }
                </Grid>
            </Stack>
        </Container>
    );
};

export default Category;
