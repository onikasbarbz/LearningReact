import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Rating from "@mui/material/Rating";
import Switch from "@mui/material/Switch";
import yosemite from "./asset/yosemite.jpg";
import glacier from "./asset/glacier.jpg";
import grand from "./asset/grand.jpg";
import yellow from "./asset/yellow.jpg";
import { styled } from "@mui/material/styles";
const CustomRating = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "#ffb400",
  },
  "& .MuiRating-iconHover": {
    color: "#ffb400",
  },
  "& .MuiRating-iconEmpty": {
    color: "#b0b0b0", // Grey color for the border of empty stars
  },
});
const Mui = () => {
  const places = [
    {
      img: yosemite,
      name: "yosemite",
      typo: "Yosemite National Park, California, USA",
    },
    {
      img: glacier,
      name: "glacier",
      typo: "Glacier National Park, Montana, USA",
    },
    {
      img: grand,
      name: "grand",
      typo: "Grand canyon National Park, Arizona, USA",
    },
    {
      img: yellow,
      name: "yellow",
      typo: "Yellowstone National Park, Wyoming, USA",
    },
  ];
  const initialState = places.map(() => false);
  const [active, setActive] = useState(initialState);

  const handleSwitchChange = (index) => (event) => {
    const newActive = [...active];
    newActive[index] = event.target.checked;
    setActive(newActive);
  };

  return (
    <div
      style={{
        backgroundColor: "#202020",
        minHeight: "200vh",
        padding: "40px",
        margin: "-30px",
      }}
    >
      {places.map((items, index) => (
        <Card
          style={{
            backgroundColor: active[index] ? "#454545" : "#303030",
            marginBottom: "20px",
            borderRadius: "10px",
          }}
        >
          <CardMedia
            component="img"
            alt={items.name}
            image={items.img}
            style={{ height: "300px", width: "1355px", borderRadius: "5px" }}
          />
          <Stack direction="row" alignItems="center" spacing={3} p={2}>
            <Stack direction="column" spacing={0.5}>
              <Typography style={{ color: "white", fontSize: "1.5rem" }}>
                {items.typo}
              </Typography>
              <Stack direction="row" spacing={1} alignItems="center">
                <Chip
                  size="medium"
                  label={active[index] ? "Active" : "Inactive"}
                  color={active[index] ? "success" : "default"}
                  style={{
                    backgroundColor: active[index] ? "#4CAF50" : "#686868",
                    color: active[index] ? "black" : "white",
                  }}
                />
                <CustomRating defaultValue={1} size="medium" />
              </Stack>
            </Stack>
            <div style={{ marginLeft: "auto" }}>
              <Switch
                checked={active[index]}
                onChange={handleSwitchChange(index)}
              />
            </div>
          </Stack>
        </Card>
      ))}
    </div>
  );
};

export default Mui;
