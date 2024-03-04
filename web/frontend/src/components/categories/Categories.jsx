import React from "react";
import {
  Breadcrumbs,
  Card,
  CardMedia,
  Container,
  Link,
  Stack,
} from "@mui/material";
import ChevronRightRounded from "@mui/icons-material/ChevronRightRounded";
import Home from "@mui/icons-material/Home";
import "./Categories.scss";
import "../../styles/global.scss";
import icons from "../../assets/icons";
import { images } from "../../assets/images";
import logo from "../../assets/logo";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

function handleClick(event) {}


function breadcrumb({ paths }) {
  return (
    <Link
      className="flex-row"
      underline="none"
      key="1"
      href="/"
      onClick={handleClick}
    >
      <img width={16} height={16} src={icons.Home} alt="" />
      <p className="h7 regular">{paths.label}</p>
    </Link>
  );
  // <Link underline="none" key="2" href="/shop" onClick={handleClick}>
  //     <p className="h7 regular">Shop</p>
  // </Link>,
  // <Link underline="none" key="3" href="/categories" onClick={handleClick}>
  //     <p className="h7 regular">Categories</p>
  // </Link>,
}
const paths = [
    { label: "Categories", url: "/categories" },
  ];
export function ElmaBreadCrumbs() {
    
  return (
    <Breadcrumbs
      separator={<ChevronRightRounded fontSize="large" />}
      aria-label="breadcrumb"
    >
      <Link
        className="flex-row"
        underline="none"
        key="1"
        href="/"
        onClick={handleClick}
      >
        <img width={16} height={16} src={icons.Home} alt="" />
        <p className="h7 regular">Home</p>
      </Link>
      ; 
      {paths.map((item, index) => (
        <Link underline="none" key="2" href={item.url} onClick={handleClick}>
        <p className="h7 regular">{item.label}</p>
       
     </Link>
      ))}
      ,
    </Breadcrumbs>
  );
}

export function CategoriesTitle() {
  return (
    <>
      <p className="h2 medium">Shop Categories</p>
      <p className="h7 regular dark-lightest95">
        Check all our categories to get what brand you needs
      </p>
    </>
  );
}

export function CategoryName() {
  return (
    <div className="flex-space-between">
      <Stack spacing={2} direction={"row"}>
        <ChevronRightRounded fontSize="large" className="chev-icon" />
        <p className="h7 regular dark-title category-name">Category Name</p>
      </Stack>
      <p className="h8 regular dark-lightest95">124</p>
    </div>
  );
}

export function CategoriesItems() {
  const imagePaths = [
    { image: images.Category1, backgroundColor: "var(--light-fill-teal)" },
    { image: images.Category2, backgroundColor: "var(--light-fill-green)" },
    { image: images.Category3, backgroundColor: "var(--light-fill-orange)" },
    { image: images.Category4, backgroundColor: "var(--light-fill-yellow)" },
    { image: images.Category5, backgroundColor: "var(--light-fill-purpel)" },
    { image: images.Category6, backgroundColor: "var(--light-fill-blue)" },
  ];
  return (
    <div className="grid-container">
      {imagePaths.map((item, index) => (
        <Card key={index} className="card-item radius-8">
          <Stack spacing={3}>
            <div
              className="radius-8 card-item-img"
              style={{ backgroundColor: item.backgroundColor }}
            >
              <img src={item.image} alt="" />
            </div>
            <Stack spacing={4}>
              <div className="flex-space-between">
                <p className="h4 medium dark-title">Product list 1</p>
                <p className="h8 regular teal number-items">2,3k items</p>
              </div>
              <CategoryName />
              <CategoryName />
              <CategoryName />
              <CategoryName />
              <CategoryName />
            </Stack>
          </Stack>
        </Card>
      ))}
    </div>
  );
}

export function PopularBrands() {
  return (
    <div>
      <div className="flex-column center header-brand">
        <p className="h2 medium">Popular Brands</p>
        <p className="h7 regular dark-lightest95">
          Check our best seller products on Elma website right now
        </p>
      </div>
      <Grid2 spacing={4} container>
        <Grid2 className="flex-column center img" xs={3}>
          <img src={logo.Apple} alt="" />
        </Grid2>
        <Grid2 className="flex-column center img" xs={3}>
          <img src={logo.Xiaomi} alt="" />
        </Grid2>
        <Grid2 className="flex-column center img" xs={3}>
          <img src={logo.Wacom} alt="" />
        </Grid2>
        <Grid2 className="flex-column center img" xs={3}>
          <img src={logo.Asus} alt="" />
        </Grid2>
        <Grid2 className="flex-column center img" xs={3}>
          <img src={logo.Sony} alt="" />
        </Grid2>
        <Grid2 className="flex-column center img" xs={3}>
          <img src={logo.Barbour} alt="" />
        </Grid2>
        <Grid2 className="flex-column center img" xs={3}>
          <img src={logo.Samsung} alt="" />
        </Grid2>
        <Grid2 className="flex-column center" xs={3}>
          <img src={logo.Fila} alt="" />
        </Grid2>
      </Grid2>
    </div>
  );
}
const Categories = () => {
  return (
    <>
      <div className="category-1"></div>
      <Container className="category-11" maxWidth="lg">
        <ElmaBreadCrumbs />
        <CategoriesTitle />
        <CategoriesItems />

        <PopularBrands />
      </Container>
    </>
  );
};

export default Categories;
