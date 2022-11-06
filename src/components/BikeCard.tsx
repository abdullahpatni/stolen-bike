import { useEffect, useState } from "react";

import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

function BikeCard(props: { bike: any }) {
  const [bike, setbike] = useState(props.bike);

  function getStolenDate() {
    const date = new Date(bike?.date_stolen);
    return `${date.getHours()}:${date.getMinutes()}, ${date.toDateString()}`;
  }

  useEffect(() => {
    getStolenDate();
  });

  const theme = useTheme();
  return (
    <Card sx={{ display: "flex", marginBottom: "2em" }} className="Card_Container">
      <CardMedia component="img" sx={{ width: 200 }} image={bike?.large_img} alt={bike?.title} />
      <Box sx={{ display: "flex", flexDirection: "column", marginLeft: "2em" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5" sx={{ color: "#1976d2" }}>
            {bike?.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <b>Description : </b> {bike?.description}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <b>Date : </b> {getStolenDate()}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <b>Location : </b> {bike?.stolen_location}
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
}

export default BikeCard;
