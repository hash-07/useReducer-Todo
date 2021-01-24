import React, { useState } from 'react';
import { Redirect} from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios'
import sutradhar_logo from '../sutradhar_logo.png'
import './Login.css'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Sutradhar <br />
      </Link>
      {new Date().getFullYear()}

    </Typography>
  );
}
const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    // backgroundImage: 'url(https://sutradhar.tech/Sutradhar/sutradhar_logo.png)',
    backgroundRepeat: 'no-repeat',
    height: '650px', width: '600px',
    backgroundSize: '1000px 1200px',
    objectFit: 'contain',
    marginTop: '0px',
    backgroundColor:
    theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[800],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

let isValid = false;

const isEmail = (emailVal) => {
  var atSymbol = emailVal.indexOf("@");
  if (atSymbol < 1) return false;
  
  var dot = emailVal.lastIndexOf(".");
  if (dot <= atSymbol + 2) return false;
  
  if (dot === emailVal.length - 1) return false;
  return true;
};
const validate = () => {
  const email = document.getElementById("email");
  const emailVal = email.value.trim();
  
  if (emailVal === "") {
    setErrorMsg(email, "email cannot be blank");
    isValid = false;
  } else if (!isEmail(emailVal)) {
    setErrorMsg(email, "Not a valid email");
    isValid = false;
  } else {
    setSuccessMsg(email);
    isValid = true;
  }
  return isValid;
}

function setErrorMsg(input, errorMsgs) {
  //const formControl = input.parentElement;
  //  const small = formControl.querySelector("small");
  const small = document.getElementById("small");
  small.className = "form_control error";
  small.innerText = errorMsgs;
  
}

function setSuccessMsg(input) {
  const formControl = input.parentElement;
  formControl.className = "form_control success";
}


export default function Login({loggedIn, setLoggedIn}) {
    
  const classes = useStyles();
  console.log();
  const [mail, setMail] = useState('');
  const [pass, setPass] = useState('');
  
  const mailfun = (e) => {
    setMail(e.target.value);
  }
  const passfun = (e) => {
    setPass(e.target.value);
  }
  const SubmitHandler = (e) => {
    e.preventDefault();
    if(validate()){
      axios
        .request({
          method: "POST",
          url: "https://sutradhar.tech:8082/api/global",
          headers: {
            "cache-control": "no-cache",
            Accept: "application/json",
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json; charset=utf-8",
          },
          data: {
            AppShortName: "shg",
            api: "loginAdmin",
            descn: mail,
            password: pass
            // message: this.state.Item,
          },
        })
        .then((response) => {
          console.log(response);
          if(response.data.Success){
            setLoggedIn(true);
          } else {
            alert(response.data.Message);
          }
        })
        .catch((error) => {
          console.log(error);
        });
      }else{
        console.log("Go away.")
      }
      
    }
    

const goThere = () => {
  <Link to="/Text" ></Link>
}

if (loggedIn){
  return (<Redirect to="/Dashboard"/>)
}
    return (
      <>
     
      <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} style={{display: 'flex', justifyContent: 'center',alignItems:'center'}} className={classes.image}>
        <img src={sutradhar_logo} />
      </Grid>
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} noValidate onSubmit={SubmitHandler}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              type="email"
              id="email"
              label="Email Address"
              name=""
              autoComplete="email"
              autoFocus
              value={mail}
              onChange={mailfun}
              />
            <i className="fas fa-check-circle"></i>
            <i className="fas fa-exclamation-circle"></i>
            <small id="small">Error msg</small>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={pass}
              onChange={passfun}
            />
            <i className="fas fa-check-circle"></i>
            <i className="fas fa-exclamation-circle"></i>
            <small id="small">Error msg</small> <br />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
              />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={goThere}
            >
              Sign In
            </Button>
            <Link link="/Text"></Link>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
    
    </>
  );
}

