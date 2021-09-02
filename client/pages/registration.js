
// const Registration = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const router = useRouter();
//   const [error, setError] = useState(null);

//   const { createUserWithEmailAndPassword } = useUser();
//   // console.log(createUserWithEmailAndPassword)
// const onSubmit = (event) => {
//   event.preventDefault();
//   setError(null);
//   createUserWithEmailAndPassword(email, password)
//     // .then((authUser) => {
//     //   console.log(`success. ${authUser} created in Firebase`)
//     //   router.push('/dashboard');
//     // })
//     // .catch((err) => {
//     //   setError(err.message);
//     // });
// };
//   return (
//     <div>
//       <form className={css.main} onSubmit={onSubmit}>
//         Sign Up
//         {/* <input type='text' placeholder='Username' className={css.input}/> */}
//         <input type='text' placeholder='email' className={css.input}
//         onChange={(e) => setEmail(e.target.value)}/>
//         <input type='text' placeholder='password' className={css.input}
//         onChange={(e) => setPassword(e.target.value)}/>
//         <input type='submit' value='Register' className={css.input}/>
//       </form>

//     </div>
//   )
// };

// export default Registration;

import { useRouter } from 'next/router';
import { useUser } from '../components/UserContext';
import React, { useState, useContext } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import SearchContext from '../components/SearchContext.js';
import Container from '@material-ui/core/Container';
import css from '../styles/login.module.css';
import Navbar from '../components/NavBar';
import Image from 'next/image';
import google from '../public/google.png';
import googledark from '../public/googledark.png';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
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
    marginTop: theme.spacing(8),
  },
  darkinput: {
    backgroundColor: 'transparent',
    '& .MuiOutlinedInput-input': {
      borderRadius: '0.5rem',
      color: 'white',
      backgroundColor: 'clear !important'
    },
    '& .MuiFormLabel-root': {
      color: 'white'
    },
    "& .MuiOutlinedInput-notchedOutline": {
      border: 'solid white 1px',
      color: 'white',
    },
    input: {
      "&:-webkit-autofill": {
        WebkitBoxShadow: "0 0 0 1000px red inset"
      }
    }
  },

  loginmain: {
    paddingTop: theme.spacing(8),
  },

  signup: {
    color: 'white'
  },

  submit: {
    margin: theme.spacing(3, 0, 2),
    marginTop: theme.spacing(8),
    height: '50px',
    fontWeight: 'bold',
    fontSize: '1.1rem',
  }
}));

export default function SignUp() {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [first, setFirst] = useState('');
  const [last, setLast] = useState('');
  const [phone, setPhone] = useState('');
  const router = useRouter();
  const [error, setError] = useState('');
  const { darkMode, toggleDarkMode } = useContext(SearchContext);


  const { createUserWithEmailAndPassword, signInWithGoogle } = useUser();

  const onSubmit = (event) => {
    event.preventDefault();
    // console.log(email, password, first, last, phone)
    setError(null);
    createUserWithEmailAndPassword(email, password, first, last, phone)
    // .then((authUser) => {
    //   console.log(`success. ${authUser} created in Firebase`)
    //   router.push('/dashboard');
    // })
    // .catch((err) => {
    //   setError(err.message);
    // });
  };
  const loginClick = () => {
    router.push('/login')
  }

  return (
    <div>
      <Navbar />
      <div className={darkMode ? css.darkmain : css.main}>
        <img className={darkMode ? css.darkimage : css.image} src="https://w.wallhaven.cc/full/6k/wallhaven-6kjqww.jpg" alt="wide open field and sky" />
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <form className={classes.form} noValidate>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    onChange={(e) => setFirst(e.target.value)}
                    autoComplete="fname"
                    name="firstName"
                    variant="outlined"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
                    className={darkMode ? classes.darkinput : null} Style={{ WebkitBoxShadow: "0 0 0 1000px blue inset" }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    onChange={(e) => setLast(e.target.value)}
                    variant="outlined"
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="lname"
                    className={darkMode ? classes.darkinput : null} Style={{ WebkitBoxShadow: "0 0 0 1000px blue inset" }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    onChange={e => setEmail(e.target.value)}
                    variant="outlined"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    className={darkMode ? classes.darkinput : null} Style={{ WebkitBoxShadow: "0 0 0 1000px blue inset" }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    onChange={e => setPhone(e.target.value)}
                    autoComplete="uphone"
                    name="phone"
                    variant="outlined"
                    fullWidth
                    id="phone"
                    label="Phone Number"
                    autoFocus
                    className={darkMode ? classes.darkinput : null} Style={{ WebkitBoxShadow: "0 0 0 1000px blue inset" }}
                  />
                </Grid>


                <Grid item xs={12}>
                  <TextField
                    onChange={e => setPassword(e.target.value)}
                    variant="outlined"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    className={darkMode ? classes.darkinput : null} Style={{ WebkitBoxShadow: "0 0 0 1000px blue inset" }}
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={onSubmit}
              >
                Sign Up
              </Button>
              <div className={css.gocontainer}>
              <div className={darkMode? css.googledark : css.google} onClick={() => signInWithGoogle()}>
              <span className={css.googleimage} ><Image src={google} /></span>
              <span className={darkMode? css.googlefontdark : css.googlefont}>
              Sign in with Google
              </span></div>
              </div>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link href="#" variant="body2"
                    onClick={loginClick}>
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </form>
          </div>
        </Container>
      </div>
    </div>
  );
}