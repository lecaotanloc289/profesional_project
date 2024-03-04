import React from "react";
import PropTypes from "prop-types";
import {
    Button,
    Checkbox,
    Container,
    IconButton,
    Radio,
    Stack,
} from "@mui/material";
import {
    Call,
    ChevronLeftRounded,
    ExpandMoreRounded,
} from "@mui/icons-material";
import icons from "../../assets/icons";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import "./OrderTracking.scss";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { OrderSummary } from "../cart/Cart";
import { formatNumber } from "../search/Search";
import { images } from "../../assets/images";
const steps = ["Order payed", "Packed", "On shipping", "Received", "Review"];
const recommend_product = [
    {
        image: images.clock,
        name: "Garmin Watch Fit X",
        price: 1725,
        rate: 4.6,
    },
    {
        image: images.clock1,
        name: "Garmin Watch Fit X",
        price: 1725,
        rate: 4.6,
    },
    {
        image: images.iphone,
        name: "Garmin Watch Fit X",
        price: 1725,
        rate: 4.6,
    },
    {
        image: images.sweat,
        name: "Garmin Watch Fit X",
        price: 1725,
        rate: 4.6,
    },
    {
        image: images.Bitmap,
        name: "Garmin Watch Fit X",
        price: 1725,
        rate: 4.6,
    },
    {
        image: images.lap,
        name: "Garmin Watch Fit X",
        price: 1725,
        rate: 4.6,
    },
];
export function OrderTrackingStepper() {
    return (
        <Box className="step1" sx={{ width: "100%" }}>
            <Stepper className="step2" activeStep={2} alternativeLabel>
                {steps.map((label) => (
                    <Step className="step3" key={label}>
                        <StepLabel className="step4">{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
        </Box>
    );
}
function OrderTracking() {
    return (
        <Container maxWidth="lg">
            <OrderTrackingHeader />
            <Container className="flex-space-between">
                <YourPackageIn />
                <InsidePackage />
            </Container>
        </Container>
    );
}

function OrderTrackingHeader() {
    return (
        <Stack direction={"row"} className="flex-space-between center mg20">
            <div>
                <p className="h2 medium dark-title ">Order Tracking</p>
            </div>
            <Button href="/" className="button-outlined" variant="outlined">
                <img height={20} src={icons.Home} alt="" />
                <p className="normal h7 medium indigo">Go to Homepage</p>
            </Button>
        </Stack>
    );
}

function TrackDetail() {
    const trackdetail = [
        {
            title: "Order confirmed by Seller & Elma system",
            date: "16 Jul 2024",
            time: "08:00 PM",
        },
        {
            title: "Package received on DHL New York city",
            date: "17 Jul 2024",
            time: "08:00 PM",
        },
        {
            title: "Package send from DHL New York city",
            date: "17 Jul 2024",
            time: "10:00 PM",
        },
        {
            title: "Package arrive on DHL Washington DC",
            date: "18 Jul 2024",
            time: "07:00 AM",
        },
        {
            title: "Package will send to your home by our courier (James)",
            date: "18 Jul 2024",
            time: "11:00 AM",
        },
    ];
    return (
        <Accordion className="mg40 non-box-shadow">
            <AccordionSummary
                expandIcon={<ExpandMoreRounded />}
                aria-controls="panel1-content"
                id="panel1-header"
            >
                <p className="h7 medium dark-title">Track details</p>
            </AccordionSummary>
            <AccordionDetails>
                <Stack spacing={3}>
                    {trackdetail.map((item, index) => (
                        <div className="flex-space-between center">
                            <div className="flex-row center">
                                <Radio />
                                <p className="h8 regular dark-title">
                                    {item.title}
                                </p>
                            </div>
                            <div>
                                <p className="h8 regular dark-lightest95">
                                    {item.date + " - " + item.time}
                                </p>
                            </div>
                        </div>
                    ))}
                </Stack>
            </AccordionDetails>
        </Accordion>
    );
}

function CallUs() {
    return (
        <div className="flex-space-between center">
            <div>
                <p className="h7 medium dark-title">
                    Have been trouble on your package?
                </p>
                <p className="h8 regular dark-lightest95">
                    You can call us. We can help solve your problem
                </p>
            </div>
            <Button variant="contained" className="primary-background">
                <Call />
                <p className="normal h7 medium white">Call Us</p>
            </Button>
        </div>
    );
}

function YourPackageIn() {
    return (
        <Container>
            {/* Section 1 */}
            <Stack
                width={700}
                direction={"row"}
                className="flex-space-between center"
            >
                <div>
                    <p className="h5 medium dark-title ">Your package in..</p>
                    <p className="h7 regular dark-lightest95 mgt4">
                        Will sent to 5690 Matilda Green Suite 627, New York,
                        12345
                    </p>
                </div>
                <div>
                    <p className="normal h7 medium ">Order ID: </p>
                    <div className="flex-row">
                        <p className="h8 regular dark-lighter5a">
                            200715DXFMW0UD
                        </p>
                        <IconButton>
                            <img height={20} src={icons.Copy} alt="" />
                        </IconButton>
                    </div>
                </div>
            </Stack>
            <OrderTrackingStepper />
            <TrackDetail />
            <CallUs />
        </Container>
    );
}

function InsidePackage() {
    return (
        <Container>
            <p className="h5 medium dark-title ">Inside package</p>
            <div>
                <Stack className="mg40" spacing={3}>
                    {recommend_product.map((item, index) => (
                        <Stack spacing={3} direction={"row"} className="center">
                            <div
                                style={{ width: "50px", height: "50px" }}
                                className="image-container flex-center"
                            >
                                <img height={50} src={item.image} alt="" />
                            </div>
                            <div>
                                <p className="h8 medium dark-title">
                                    {item.name}
                                </p>
                                <div className="flex-space-between flex-row">
                                    <p className="green h8 regular">
                                        {"$" +
                                            formatNumber(
                                                item.price,
                                                "en-US",
                                                2,
                                            )}
                                    </p>
                                    <div className="flex-row">
                                        <p className="dark-lighter5a h8 regular">
                                            1 item
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Stack>
                    ))}
                    <Stack spacing={2}>
                        <div className="flex-row flex-space-between">
                            <p className="h7 regular dark-lightest95">
                                Subtotal
                            </p>
                            <p className="h7 regular dark-title">
                                {"$" + formatNumber(1750, "en-US", 2)}
                            </p>
                        </div>
                        <div className="flex-row flex-space-between">
                            <p className="h7 regular dark-lightest95">
                                Shipping
                            </p>
                            <p className="h7 regular dark-title">
                                {"$" + formatNumber(1750, "en-US", 2)}
                            </p>
                        </div>
                        <div className="flex-row flex-space-between">
                            <p className="h7 regular dark-lightest95">Tax 8%</p>
                            <p className="h7 regular dark-title">
                                {"$" + formatNumber(1750, "en-US", 2)}
                            </p>
                        </div>
                        <div className="flex-row flex-space-between">
                            <p className="h7 regular dark-lightest95">
                                Discount 10%
                            </p>
                            <p className="h7 regular red">
                                {"$" + formatNumber(1750, "en-US", 2)}
                            </p>
                        </div>
                        <div className="flex-row flex-space-between">
                            <p className="h7 medium dark-title">Order Total</p>
                            <p className="h7 medium dark-title">
                                {"$" + formatNumber(1750, "en-US", 2)}
                            </p>
                        </div>
                    </Stack>
                </Stack>
            </div>
        </Container>
    );
}

export default OrderTracking;
