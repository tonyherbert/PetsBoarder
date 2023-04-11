import * as React from "react";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import PetForm from "../Form/Pet/PetForm";

interface Props {
  setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}
const PetList: React.FC<Props> = ({ setLoggedIn }) => {
  const [Pets, setPets] = React.useState<any>([]);
  const navigate = useNavigate();
  React.useEffect(() => {
    async function fetchData() {
      try {
        const token = localStorage.getItem("token");
        const { data } = await axios.get("http://localhost:3002/api/v1/Pet", {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        setPets(data);
      } catch {
        setLoggedIn(false);
        navigate("/");
      }
    }
    fetchData();
  }, [navigate, setLoggedIn]);
  return (
    <Container>
      <Grid container spacing={2} marginTop={2}>
        {" "}
        <PetForm />
        {Pets.map((Pet: any) => {
          return (
            <Grid item xs={12} md={4} key={Pet.id}>
              <CardActionArea component="a" href="#">
                <Card sx={{ display: "flex" }}>
                  <CardContent sx={{ flex: 1 }}>
                    <Typography component="h2" variant="h5">
                      <Link
                        to={`/video/${Pet}`}
                        style={{ textDecoration: "none", color: "black" }}
                      >
                        {Pet.title}
                      </Link>
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary">
                      {Pet.uploadDate}
                    </Typography>
                  </CardContent>
                  <CardMedia
                    component="img"
                    sx={{ width: 160, display: { xs: "none", sm: "block" } }}
                    image={`http://127.0.0.1:3002/${Pet.coverImage}`}
                    alt="alt"
                  />
                </Card>
              </CardActionArea>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};
export default PetList;
