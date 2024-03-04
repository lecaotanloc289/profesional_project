import {
    Button,
    Container,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    Stack,
    TextField,
} from "@mui/material";
import React from "react";
import "./CardProduct.scss";
import { ShoppingCart, StarRounded } from "@mui/icons-material";
import { formattedNumber } from "../../../utils/appService";

const CardProduct = (data) => {
    const item = data.data;
    const specs = item.description.split("\n- ");

    const [type, setType] = React.useState("");

    const handleChange = (event) => {
        setType(event.target.value);
    };
    return (
        <Container className="productdetail" maxWidth="lg">
            <div className="cardcontainer">
                <Stack className="stack" direction={"row"} spacing={10}>
                    <Stack className="stack1" spacing={2}>
                        <div className="img-product">
                            <img
                                className="imagecard"
                                src={item.image}
                                alt=""
                            />
                        </div>
                        {/* render khi get image product details */}
                        <Stack className="img-detail" direction={"row"}>
                            {item.images.map((image, index) => (
                                <div className="imagedetail" key={index}>
                                    <img
                                        className="image-detail"
                                        src={image}
                                        alt=""
                                    />
                                </div>
                            ))}
                        </Stack>
                    </Stack>
                    <Stack className="stack2" spacing={2}>
                        <Stack spacing={2}>
                            <p className="title">
                                {`${item.name} - ${item.brand}`}
                            </p>
                            <Stack className="info" direction={"row"}>
                                <div className="inforbuy">
                                    <StarRounded className="iconstar" />
                                    {item.rating}
                                </div>
                                <p className="h81 dark-lightest95">
                                    0 Product sold
                                </p>
                                <p className="h81 dark-lightest95">
                                    3,1k Product watched
                                </p>
                            </Stack>

                            {specs.map((spec) => (
                                <p className="h8 regular dark-lighter5a">
                                    {spec}
                                </p>
                            ))}
                            {/* <Button>Reade more</Button> */}
                        </Stack>

                        <Stack className="stack4" direction={"row"} spacing={5}>
                            {/* <Stack className="center" spacing={1}>
                                <p className="dark-lighter5a">
                                    Open the select
                                </p>
                                <FormControl>
                                    <InputLabel id="demo-controlled-open-select-label"></InputLabel>
                                    <Select
                                        labelId="demo-controlled-open-select-label"
                                        id="demo-controlled-open-select"
                                        value={type}
                                        label=""
                                        onChange={handleChange}
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={10}>Red</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                </FormControl>
                            </Stack> */}

                            <Stack className="center" spacing={1}>
                                <p className="dark-lighter5a">Quantity</p>
                                <TextField
                                    className="input div input"
                                    id="outlined-number"
                                    label=""
                                    type="number"
                                    defaultValue={1}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </Stack>
                        </Stack>

                        <Stack
                            className="stack3"
                            direction={"row "}
                            spacing={2}
                        >
                            <p className="price h3">
                                {formattedNumber(item.price)}
                            </p>
                            <Stack direction={"row"} spacing={2}>
                                <Button
                                    className=" learn-more"
                                    variant="outlined"
                                >
                                    <p className="normal h7 medium indigo">
                                        Buy now
                                    </p>
                                </Button>
                                <Button className=" btn1" variant="contained">
                                    <p className="normal h7 medium white">
                                        Add to cart
                                    </p>
                                    <ShoppingCart />
                                </Button>
                            </Stack>
                        </Stack>
                    </Stack>
                </Stack>
            </div>
        </Container>
    );
};

export default CardProduct;
