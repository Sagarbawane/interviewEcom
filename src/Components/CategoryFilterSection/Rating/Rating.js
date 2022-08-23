import React, { useContext } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Rating, FormControlLabel, Checkbox } from "@mui/material";
import { AppContext } from "../../index";
import { Heading } from "../CatergoryFilterSectionStyles/index";

const GreenCheckbox = withStyles({
  root: {
    color: "#6A983C",

    "&$checked": {
      color: "#6A983C",
    },
  },
  checked: {},
})(props => <Checkbox color="default" {...props} />);

function RatingComponent() {
  const { ratings, handleChangeRating } = useContext(AppContext);

  return (
    <div>
      <Heading>Rating</Heading>
      {ratings.map(ele => {
        return (
          <FormControlLabel
            control={
              <GreenCheckbox
                checked={ele.checked}
                onChange={() => handleChangeRating(ele.rating)}
              />
            }
            label={
              <>
                <Rating name="read-only" value={ele.rating} readOnly />
              </>
            }
          />
        );
      })}
    </div>
  );
}

export default RatingComponent;
