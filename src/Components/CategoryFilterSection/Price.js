import React, { useContext } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Heading } from "./CatergoryFilterSectionStyles/index";
import Slider from "@material-ui/core/Slider";
import { AppContext } from "../index";

const AirbnbSlider = withStyles({
  root: {
    color: "#6A983C",
    height: 3,
    padding: "13px 0",
  },
  thumb: {
    height: 27,
    width: 27,
    backgroundColor: "#fff",
    border: "1px solid currentColor",
    marginTop: -12,
    marginLeft: -13,
    boxShadow: "#ebebeb 0 2px 2px",
    "&:focus, &:hover, &$active": {
      boxShadow: "#ccc 0 2px 3px 1px",
    },
    "& .bar": {
      height: 9,
      width: 1,
      backgroundColor: "currentColor",
      marginLeft: 1,
      marginRight: 1,
    },
  },
  active: {},
  track: {
    height: 3,
  },
  rail: {
    color: "#d8d8d8",
    opacity: 1,
    height: 3,
  },
})(Slider);

function Price() {
  const { selectedPrice, handleChangePrice } = useContext(AppContext);

  return (
    <div>
      <Heading style={{ marginBottom: "40px" }}>Price</Heading>
      <AirbnbSlider
        value={selectedPrice}
        onChange={handleChangePrice}
        valueLabelDisplay="on"
        min={0}
        max={1000}
        getAriaLabel={index =>
          index === 0 ? "Minimum price" : "Maximum price"
        }
      />
    </div>
  );
}

export default Price;
