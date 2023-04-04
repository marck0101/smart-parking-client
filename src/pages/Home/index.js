/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */
import Header from "../../components/Header";
import "./home.css";
import Title from "../../components/Title";
import { BsFillHouseDoorFill } from "react-icons/bs";
import {
  Box,
  Card,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { useEffect, useState } from "react";

export default function Home() {
  const [names, setNames] = useState([
    "",
    "Estacionamento 1",
    "Estacionamento 2",
  ]);
  const [nameSelect, setNameSelect] = useState("");

  useEffect(() => {
    console.log(nameSelect);
  }, [nameSelect]);

  const handleChange = (event) => {
    console.log(event.target.value);
    setNameSelect(event.target.value);
    console.log("nameSelect", nameSelect);
  };

  const [age, setAge] = useState("");

  const handleChangeII = (event) => {
    setNameSelect(event.target.value);
  };

  return (
    <>
      <Header />

      <div className="content">
        <Title name="Home">
          <BsFillHouseDoorFill size={25} />
        </Title>

        <div className="container">
          <div>
            <h3>Selecione um Estabelecimento</h3>
            <br />
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Selecione o estacionamento
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={nameSelect}
                  label="Selecione o estacionamento"
                  onChange={(event) => handleChangeII(event)}
                >
                  {names.map((name) => (
                    <MenuItem key={name} value={name}>
                      {name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
          </div>
        </div>
        {nameSelect && (
          <div className="container">
            <Grid container>
              <Grid item xs={12}>
                <h2>Visualizar Vagas {nameSelect}</h2>
                <>
                  {nameSelect === "Estacionamento 1" ? (
                    <>
                      <Card style={{ padding: 15 }}>
                        <br />
                        <h3>{nameSelect}</h3> <br />
                        <Grid item>
                          <img
                            src="./image/estacionamento2.jpg"
                            height="200"
                            width="400"
                          />
                        </Grid>
                      </Card>
                    </>
                  ) : (
                    <>
                      <Card style={{ padding: 15 }}>
                        <br />
                        <h3>{nameSelect}</h3> <br />
                        <Grid item>
                          <img
                            src="./image/estacionamento4.jpg"
                            height="200"
                            width="400"
                          />
                        </Grid>
                        <br />
                      </Card>
                    </>
                  )}
                </>
              </Grid>
            </Grid>
          </div>
        )}
      </div>
    </>
  );
}
