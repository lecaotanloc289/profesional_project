import React, { useEffect, useState } from "react";
import CardProduct from "./CardProduct/CardProduct";
import TabProduct from "./TabProduct/TabProduct";
import Descriptions from "./Descriptions/Descriptions";
import Review from "./Review/Review";
import Comment from "./Comment/Comment";
import RealatedProduct from "./RealatedProduct/RealatedProduct";
import { getIdFromUrl } from "../../utils/appService";
import axios from "axios";
import { API_PUBLIC_URL } from "../../utils/config";
import { Skeleton } from "@mui/material";

const ProductDetail = () => {
    const [data, setProductData] = useState(null);

    useEffect(() => {
        const id = getIdFromUrl();
        const getProductDetail = async (id) => {
            try {
                const res = await axios.get(`${API_PUBLIC_URL}products/${id}`);
                setProductData(res.data);
            } catch (error) {
                console.log(error);
            }
        };

        getProductDetail(id);
    }, []);
    // const data = productData;
    return (
        <>
            {data ? (
                <div>
                    <CardProduct data={data} />
                    <TabProduct />
                    <Descriptions data={data} />
                    <Review data={data} />
                    <Comment />
                    <RealatedProduct data={data} />
                </div>
            ) : (
                <Skeleton variant="rounded" animation="pulse" width={1000} />
            )}
        </>
    );
};

export default ProductDetail;
