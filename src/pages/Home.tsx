import axios from "axios";
import { useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import BikeCard from "../components/BikeCard";

function Home() {
  const firstIndex = 0;
  const [bikeData, setbikeData] = useState([]);
  const [pageSize, setPageSize] = useState(25);
  const [page, setPage] = useState(1);
  const [data, setData] = useState(bikeData.slice(firstIndex, pageSize));

  useEffect(() => {
    setData(bikeData.slice(0, pageSize));
  }, [pageSize, bikeData]);

  useEffect(() => {
    axios
      .get(
        `/api/v3/search?page=1&per_page=100&location=Sydney&distance=10&stolenness=proximity&access_token=${process.env.REACT_ACCESS_TOKEN}`,
      )
      .then((response: any) => {
        setbikeData(response.data.bikes);
        // console.log(response.data.bikes);
      });
  }, []);

  // Change width
  const changeWidth = (e: any) => {
    setPageSize(parseInt(e.target.value, 10));
  };

  const handleChange = (event: any, value: any) => {
    setPage(value);
    setData(bikeData.slice(firstIndex + pageSize * (value - 1), pageSize * value));
  };

  return (
    <div style={{ margin: "5em" }}>
      {data.map((bike) => {
        return <BikeCard key={bike?.id} bike={bike} />;
      })}

      <Stack alignItems="center" sx={{ marginBottom: "1em" }}>
        <Pagination
          count={Math.ceil(bikeData.length / pageSize)}
          page={page}
          color="primary"
          onChange={handleChange}
        />
      </Stack>

      <TextField
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
        value={pageSize}
        type="number"
        onChange={changeWidth}
        fullWidth
      />
    </div>
  );
}

export default Home;
