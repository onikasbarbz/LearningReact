import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Rating from "@mui/material/Rating";
import Switch from "@mui/material/Switch";


const Mui = () => {
  const images = [
    {
      img: "./asset/yosemite.jpg",
      name: "yosemite",
      typo: "Yosemite National Park, California, USA",
    },
    {
      img: "./asset/yosemite.jpg",
      name: "yosemite",
      typo: "Glacier National Park,Montana,USA",
    },
    {
      img: "./asset/yosemite.jpg",
      name: "yosemite",
      typo: "Grand canyon National Park,Arizona, USA",
    },
    {
      img: "./asset/yosemite.jpg",
      name: "yosemite",
      typo: "Yellowstone National Park,Wyoming,USA",
    },
  ];
  const initialState = places.map(()=>false);
  const [active, setActive] = useState(initialState);

  const handleSwitchChange = (event) => {
    setActive(event.target.checked);
  };

  return (
    <div>
      {places.map((items,index)=>(
      <Card>
        <CardMedia
          component="img"
          alt="Yosemite National Park"
          image="/asset/yosemite.jpeg"
        />
        <Stack direction="row" alignItems="center" spacing={3} p={2}>
          <Stack direction="column" spacing={0.5}>
            <Typography>{items.typo}</Typography>
            <Stack direction="row" spacing={1}>
              <Chip
                size="small"
                label={active[index] ? "Active" : "Inactive"}
                color={active [index]? "success" : "default"}
              />
              <Rating defaultValue={1} size="small" />
            </Stack>
          </Stack>
          <Switch checked={active[index]} onChange={handleSwitchChange(index)} />
        </Stack>
      </Card>
      ))}
    </div>
  );
};

export default Mui;
