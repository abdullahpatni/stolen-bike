import axios from "axios";
import { useEffect, useState } from "react";
import BikeCard from "../components/BikeCard";

function Home() {
  const [bikeData, setbikeData] = useState([]);
  useEffect(() => {
    axios
      .get(
        "/api/v3/search?page=1&per_page=1000&location=IP&distance=10&stolenness=all&access_token=2b8Qd-E0WdW0Q1FAhKFxH3VAtod7mGbOVBZ82nyTwWk",
      )
      .then((response: any) => {
        setbikeData(response.data.bikes);
        console.log(response.data.bikes);
      });
  }, []);

  return (
    <div style={{ margin: "5em" }}>
      <h1>HOME here</h1>
      {bikeData.map((bike) => {
        return <BikeCard key={bike?.id} bike={bike} />;
      })}
    </div>
  );
}

export default Home;
