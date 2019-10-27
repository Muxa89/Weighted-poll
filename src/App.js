import React, { useEffect } from "react";
import "./App.css";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Sortable from "sortablejs";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";

function App() {
  const items = ["111", "222", "333", "444", "555", "666", "777"];

  useEffect(() => {
    Sortable.create(document.getElementById("sortable"), {
      dragoverBubble: true
    });
  }, []);

  return (
    <Container>
      <Grid container justify="center" spacing={5}>
        <Grid item xs sm={3} style={{ textAlign: "center" }}>
          <Typography variant="h5" component="h2">
            Варианты
          </Typography>
          <List id="sortable">
            {items.map(item => (
              <ListItem style={{ cursor: "pointer" }} disableGutters>
                <ListItemText style={{ textAlign: "center" }} primary={item} />
              </ListItem>
            ))}
          </List>
        </Grid>
        <Grid item xs sm={3} style={{ textAlign: "center" }}>
          <Typography variant="h5" component="h2">
            Баллы
          </Typography>
          <List>
            {items.map((item, index) => (
              <ListItem disableGutters>
                <ListItemText
                  style={{ textAlign: "center" }}
                  primary={5 - index > 0 ? 5 - index : 0}
                />
              </ListItem>
            ))}
          </List>
        </Grid>
      </Grid>
      <Grid container justify="center">
        <Button color="primary" variant="contained">
          Отправить
        </Button>
      </Grid>
    </Container>
  );
}

export default App;
