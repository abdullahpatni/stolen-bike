import axios from "axios";
import { useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { Chip, Grid } from "@mui/material";
import BikeCard from "../components/BikeCard";

function Home() {
  const firstIndex = 0;
  const [bikeData, setbikeData] = useState([]);
  const [pageSize, setPageSize] = useState(25);
  const [page, setPage] = useState(1);
  const [data, setData] = useState(bikeData.slice(firstIndex, pageSize));
  const [totalCount, setTotalCount] = useState(data.length);

  const [searchValue, setSearchValue] = useState("");

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
        setTotalCount(response.data.bikes.length);
      });
  }, []);

  useEffect(() => {
    const newPacientes = data.filter((value: any) =>
      value.title.toLowerCase().includes(searchValue.toLowerCase()),
    );
    setData(newPacientes);
    setTotalCount(newPacientes.length);
  }, [searchValue]);

  const changeWidth = (e: any) => {
    setPageSize(parseInt(e.target.value, 10));
  };

  const handleChange = (event: any, value: any) => {
    setPage(value);
    setData(bikeData.slice(firstIndex + pageSize * (value - 1), pageSize * value));
  };

  return (
    <div style={{ margin: "5em" }}>
      <Grid container alignItems="center" sx={{ marginBottom: "1em", justifyContent: "space-between" }}>
        <Grid item xs={8}>
          <TextField
            id="outlined-basic"
            label="Title"
            variant="outlined"
            value={searchValue}
            type="text"
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Search by Title"
            fullWidth
          />
        </Grid>
        <Grid item>
          <Chip label={totalCount} color="primary" variant="outlined" />
        </Grid>
      </Grid>
      <ul>
        {data.map((bike) => {
          return (
            <li key={bike?.id}>
              <BikeCard bike={bike} />
            </li>
          );
        })}
      </ul>

      <Grid container alignItems="center" sx={{ marginBottom: "1em" }}>
        <Grid item xs={2}>
          <TextField
            id="outlined-basic"
            label="Outlined"
            variant="outlined"
            value={pageSize}
            type="number"
            onChange={changeWidth}
            fullWidth
          />
        </Grid>
        <Grid item xs={8}>
          <Pagination
            count={Math.ceil(bikeData.length / pageSize)}
            page={page}
            color="primary"
            onChange={handleChange}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;
