import {
    Button,
    Card,
    CardActionArea,
    Container,
    Grid,
    Rating,
    Stack,
} from "@mui/material";
import React from "react";
import "./RealatedProduct.scss";
import _ from "lodash";
import { formattedNumber } from "../../../utils/appService";

const RealatedProduct = (data) => {
    const productDetail = data.data;
    console.log(productDetail.brand);
    const products = JSON.parse(localStorage.getItem("productsList"));
    const relatedProducts = _.filter(
        products,
        (product) => product.brand === productDetail.brand,
    );
    return (
        <Container
            id="relatedProduct"
            className="RealatedProduct"
            maxWidth="lg"
        >
            <Stack className="productstack1">
                <Stack
                    className=" mg40 productname flex-space-between"
                    direction={"row"}
                >
                    <p className="namecate h2 medium">Related product</p>
                    <Button
                        href="/products"
                        className="btnproduct "
                        variant="outlined"
                    >
                        <p className="normal h7 medium indigo">View All</p>
                    </Button>
                </Stack>

                <Stack className="stack2">
                    <Grid container spacing={2}>
                        {relatedProducts.map((item) => {
                            return (
                                <Grid item xs={3}>
                                    <CardActionArea
                                        href={`/productdetails?id=${item._id}`}
                                    >
                                        <Card className="card-item">
                                            <Stack
                                                className="stackheader"
                                                direction={"row"}
                                            >
                                                <div className="csale">
                                                    <p className="sale h9">
                                                        SALE
                                                    </p>
                                                </div>
                                            </Stack>
                                            <Stack className="img" spacing={1}>
                                                <img
                                                    style={{
                                                        height: "180px",
                                                    }}
                                                    src={item.image}
                                                    alt=""
                                                />
                                            </Stack>
                                            <Stack
                                                className="title"
                                                spacing={1}
                                            >
                                                <p className="cate">
                                                    {item.brand}
                                                </p>
                                                <p className="textwrap2line name">
                                                    {item.name}
                                                </p>
                                                <Stack
                                                    className="pr"
                                                    direction={"row"}
                                                >
                                                    <p className="price h7 medium indigo">
                                                        {formattedNumber(
                                                            item.price,
                                                        )}
                                                    </p>
                                                    <Rating
                                                        className="rating"
                                                        name="half-rating"
                                                        value={item.rating}
                                                        precision={0.5}
                                                        readOnly
                                                    />
                                                </Stack>
                                            </Stack>
                                        </Card>
                                    </CardActionArea>
                                </Grid>
                            );
                        })}
                    </Grid>
                </Stack>
            </Stack>
        </Container>
    );
};

export default RealatedProduct;
