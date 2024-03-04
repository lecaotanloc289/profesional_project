import React from "react";
import logo from "../../assets/logo";
import { Link } from "@mui/material";

export default function Elma() {
  return (
    <Link href="/" className="elma-logo">
      <img src={logo.Elma} alt="" />
    </Link>
  );
}
