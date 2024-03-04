import { Container, Grid, IconButton, Rating, Stack } from "@mui/material";
import React, { useEffect } from "react";
import Card from "@mui/material/Card";
import "./Bestseller.scss";
import { Favorite, ShoppingCart, Visibility } from "@mui/icons-material";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../../redux/thunk";
import { toggleFavoriteAction } from "../../../redux/actions/actions";
import { formattedNumber } from "../../../utils/appService";

const Bestseller = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.data.products);
    const bestSellerProduct = products.filter(
        (product) => product.isBestSeller,
    );
    const { isFavorite, error } = useSelector((state) => state.favorite);

    const handleFavoriteClick = async (productId) => {
        try {
            await toggleFavoriteAction(productId, dispatch);
        } catch (error) {
            console.error("Error dispatching toggleLikeAction:", error);
        }
    };

    useEffect(() => {
        dispatch(fetchData());
    }, [dispatch]);

    return (
        <Container className="bestseller" maxWidth="lg">
            <Stack className="stack1">
                <p className="name h2">Best Seller Products</p>
                <p className="content content h8 regular dark-lightest95">
                    Check our best seller products on Elma website right now
                </p>
            </Stack>

            <Stack className="stack2">
                <Grid container spacing={2}>
                    {bestSellerProduct.map((item) => {
                        const productId = item._id;
                        return (
                            <Grid key={item._id} xs={3}>
                                <Card className="card-item">
                                    <Stack
                                        className="stackheader"
                                        direction={"row"}
                                    >
                                        <div className="csale">
                                            <p className="sale h9">SALE</p>
                                        </div>
                                        <IconButton
                                            onClick={() =>
                                                handleFavoriteClick(productId)
                                            }
                                            className="heart"
                                        >
                                            {isFavorite ? (
                                                <Favorite color="error" />
                                            ) : (
                                                <Favorite />
                                            )}
                                        </IconButton>
                                    </Stack>
                                    <Stack className="img" spacing={1}>
                                        <img
                                            style={{ height: "180px" }}
                                            src={item.image}
                                            alt=""
                                        />
                                    </Stack>
                                    <Stack className="title" spacing={1}>
                                        <p className="cate">{`${item.category.name} - ${item.brand}`}</p>
                                        <p className="name">{item.name}</p>
                                        <Stack className="pr" direction={"row"}>
                                            <p className="price h7 medium indigo">
                                                {formattedNumber(item.price)}
                                            </p>
                                            <Rating
                                                className="rating"
                                                name="half-rating"
                                                value={item.rating}
                                                defaultValue={item.rating}
                                                precision={0.1}
                                                readOnly
                                            />
                                        </Stack>
                                    </Stack>

                                    <Stack className="btncard" spacing={1}>
                                        <Button
                                            className="btn btn1"
                                            variant="contained"
                                        >
                                            <p className="normal h7 medium white">
                                                <ShoppingCart className="icon" />
                                                Add to cart
                                            </p>
                                        </Button>
                                        <Button
                                            className="btn "
                                            variant="outlined"
                                            href={`productdetails?id=${item._id}`}
                                        >
                                            <p className="normal h7 medium indigo">
                                                <Visibility className="icon" />
                                                Quick view
                                            </p>
                                        </Button>
                                    </Stack>
                                </Card>
                            </Grid>
                        );
                    })}
                </Grid>
            </Stack>
        </Container>
    );
};

export default Bestseller;
