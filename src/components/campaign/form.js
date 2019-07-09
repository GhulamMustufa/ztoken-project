import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import ReCAPTCHA from "react-google-recaptcha";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

export default function Form() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="md" style={{ marginTop: "50px" }}>
      <div className={classes.root}>
        <Grid item xs={12} sm={12}>
          <Typography component="body2" variant="h5" align="center">
            Warn: We are not receiving campaigns yet, stay tuned. You are always
            welcome.
          </Typography>
        </Grid>
        <Grid container spacing={3}>
          <Container
            component="main"
            maxWidth="md"
            style={{
              display: "flex",
              flexDirection: "row",
              height: 150,
              justifyContent: "center",
              alignItems: "center",
              marginBottom: 10,
              marginTop: 10
            }}
          >
            <Grid item xs={12} sm={6}>
              <Typography component="body" variant="h5" align="center">
                Game Name
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                placeholder="Myths and Gods"
                id="game"
                name="game"
              />
            </Grid>
          </Container>
          <Container
            component="main"
            maxWidth="md"
            style={{
              backgroundColor: "#F0F0F0",
              display: "flex",
              flexDirection: "row",
              height: 150,
              justifyContent: "center",
              alignItems: "center",
              marginBottom: 10
            }}
          >
            <Grid item xs={6} sm={6}>
              <Typography component="h5" variant="h5" align="center">
                Project Image
              </Typography>
              <Typography variant="body2" color="textSecondary" align="center">
                This image will be used as thumbnail on{" "}
              </Typography>
              <Typography variant="body2" color="textSecondary" align="center">
                your campaign (png,jpg,size 628X359)
              </Typography>
            </Grid>
            <Grid item xs={6} sm={6}>
              <Paper className={classes.paper}>
                {" "}
                <label htmlFor="contained-button-file">
                  <Button
                    variant="contained"
                    component="span"
                    className={classes.button}
                  >
                    Choose file
                  </Button>
                </label>
              </Paper>
            </Grid>
          </Container>
          <Container
            component="main"
            maxWidth="md"
            style={{
              backgroundColor: "#F0F0F0",
              display: "flex",
              flexDirection: "row",
              height: 150,
              justifyContent: "center",
              alignItems: "center",
              marginBottom: 10
            }}
          >
            <Grid item xs={6} sm={6}>
              <Typography component="h5" variant="h5" align="center">
                Short Description
              </Typography>
              <Typography variant="body2" color="textSecondary" align="center">
                Short description attract more backers.
              </Typography>
              <Typography variant="body2" color="textSecondary" align="center">
                Its required max 150 characters
              </Typography>
            </Grid>
            <Grid item xs={6} sm={6}>
              <TextField
                id="description"
                multiline
                rows="4"
                placeholder="150 characters"
                className={classes.textField}
                margin="normal"
                variant="outlined"
                fullWidth
              />
            </Grid>
          </Container>

          <Container
            component="main"
            maxWidth="md"
            style={{
              display: "flex",
              flexDirection: "row",
              height: 80,
              justifyContent: "center",
              alignItems: "center",
              marginBottom: 10
            }}
          >
            <Grid item xs={12} sm={6}>
              <Typography component="body" variant="h5" align="center">
                Country
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                placeholder="Malta"
                id="country"
                name="country"
              />
            </Grid>
          </Container>

          <Container
            component="main"
            maxWidth="md"
            style={{
              display: "flex",
              flexDirection: "row",
              height: 80,
              justifyContent: "center",
              alignItems: "center",
              marginBottom: 10
            }}
          >
            <Grid item xs={12} sm={6}>
              <Typography component="body" variant="h5" align="center">
                Goal in btc
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                placeholder="100"
                id="goal"
                name="goal"
              />
            </Grid>
          </Container>

          <Container
            component="main"
            maxWidth="md"
            style={{
              display: "flex",
              flexDirection: "row",
              height: 80,
              justifyContent: "center",
              alignItems: "center",
              marginBottom: 10
            }}
          >
            <Grid item xs={12} sm={6}>
              <Typography component="body" variant="h5" align="center">
                Website
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                placeholder="www.mythsandgods.io"
                id="website"
                name="website"
              />
            </Grid>
          </Container>

          <Container
            component="main"
            maxWidth="md"
            style={{
              display: "flex",
              flexDirection: "row",
              height: 80,
              justifyContent: "center",
              alignItems: "center",
              marginBottom: 10
            }}
          >
            <Grid item xs={12} sm={6}>
              <Typography component="body" variant="h5" align="center">
                Contact Info
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                placeholder="hello@mythsandgods.io"
                id="contact"
                name="contact"
              />
            </Grid>
          </Container>

          <Container
            component="main"
            maxWidth="md"
            style={{
              display: "flex",
              flexDirection: "row",
              height: 80,
              justifyContent: "center",
              alignItems: "center",
              marginBottom: 10
            }}
          >
            <Grid item xs={12} sm={6}>
              <Typography component="body" variant="h5" align="center">
                Responsible Person
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                placeholder="https://www.linkedin.com/in/leandro-alves-1226"
                id="responsible"
                name="responsible"
              />
            </Grid>
          </Container>

          <Container
            component="main"
            maxWidth="md"
            style={{
              display: "flex",
              flexDirection: "row",
              height: 100,
              justifyContent: "center",
              alignItems: "center",
              marginBottom: 10
            }}
          >
            <Grid item xs={12} sm={6}>
              <Typography component="body" variant="h5" align="center">
                Game Video
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                placeholder="https://www.youtube.com/watch?v=niTFUT2aD"
                id="video"
                name="video"
              />
              <Typography component="body" variant="h5" align="center">
                (Insert youtube link)
              </Typography>
            </Grid>
          </Container>

          <Container
            component="main"
            maxWidth="md"
            style={{
              display: "flex",
              flexDirection: "row",
              height: 120,
              justifyContent: "center",
              alignItems: "center",
              marginBottom: 10
            }}
          >
            <Grid item xs={12} sm={6}>
              <Typography component="body" variant="h5" align="center">
                Campaign Period
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                placeholder="30 days, 60 days, 90 days"
                id="campaign"
                name="campaign"
              />
              <Typography component="body" variant="h5" align="center" />
            </Grid>
          </Container>

          <Container
            component="main"
            maxWidth="md"
            style={{
              backgroundColor: "#F0F0F0",
              display: "flex",
              flexDirection: "column",
              height: 300,
              justifyContent: "center",
              alignItems: "center",
              marginBottom: 10
            }}
          >
            <Typography component="h5" variant="h5" align="center">
              Describe your project
            </Typography>
            <Typography variant="body2" color="textSecondary" align="center">
              Describe with passion what will be accomplished.Clarify possible
              questions about how the funds will be used, tell us who is
            </Typography>
            <Typography variant="body2" color="textSecondary" align="center">
              behind the project and how and when will the project be delivered.
              Lets start.
            </Typography>

            <TextField
              id="description"
              multiline
              rows="8"
              className={classes.textField}
              margin="normal"
              variant="outlined"
              fullWidth
            />
          </Container>

          <Container
            component="main"
            maxWidth="md"
            style={{
              backgroundColor: "#F0F0F0",
              display: "flex",
              flexDirection: "column",
              height: 300,
              justifyContent: "center",
              alignItems: "center",
              marginBottom: 10
            }}
          >
            <Typography component="h5" variant="h5" align="center">
              Rewards
            </Typography>
            <Typography variant="body2" color="textSecondary" align="center">
              Describe the rewards that you will offer to your backers and how
              will be delivered
            </Typography>
            <Typography variant="body2" color="textSecondary" align="center">
              Lets start.
            </Typography>

            <TextField
              id="rewards"
              multiline
              rows="8"
              className={classes.textField}
              margin="normal"
              variant="outlined"
              fullWidth
            />
          </Container>
          <Container
            component="main"
            maxWidth="md"
            style={{
              display: "flex",
              flexDirection: "column",
              height: 150,
              justifyContent: "center",
              alignItems: "left",
              marginBottom: 20
            }}
          >
            <Grid item xs={12} sm={6}>
              <Typography component="body2" variant="h5" align="center">
                What is the current stage of development of your game ?
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                placeholder="30%, 50%, Beta version"
                id="stage"
                name="stage"
              />
            </Grid>
          </Container>

          <Container
            component="main"
            maxWidth="md"
            style={{
              display: "flex",
              flexDirection: "column",
              height: 150,
              justifyContent: "center",
              alignItems: "left",
              marginBottom: 10
            }}
          >
            <Grid item xs={12} sm={6}>
              <Typography component="body2" variant="h5" align="center">
                Which blockchain protocol your game is developed ?
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                placeholder="EOS, Etherium, Tron"
                id="protocol"
                name="protocol"
              />
            </Grid>
          </Container>
          <Container
            component="main"
            maxWidth="md"
            style={{
              display: "flex",
              flexDirection: "column",
              height: 150,
              justifyContent: "center",
              alignItems: "left",
              marginBottom: 10
            }}
          >
          <Grid item xs={12} sm={6}>
            <ReCAPTCHA sitekey="Your client site key" onChange={onChange} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button
              variant="contained"
              color="secondary"
              size="large"
              className={classes.button}
            >
              APPLY TO APPROVAL(soon)
            </Button>
          </Grid>
          </Container>
        </Grid>
      </div>
    </Container>
  );
}
function onChange(value) {
    console.log("Captcha value:", value);
  }