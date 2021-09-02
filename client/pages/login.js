/* eslint-disable react/jsx-filename-extension */
// export default function Login() {
// const [email, setEmail] = useState('');
// const [password, setPassword] = useState('');
// const [error, setError] = useState(null);
// const router = useRouter();
// const { signInWithEmailAndPassword } = useUser();
// console.log(signInWithEmailAndPassword)
// const onSubmit = (e) => {
//   e.preventDefault();
//   setError(null);
//   signInWithEmailAndPassword(email, password)
//     // .then((authUser) => {
//     //   router.push('/dashboard')
//     // })
//     // .catch((err) => {
//     //   setError(err.message)
//     // })
// }
//   return (
//     <div>
//       <form className={css.main} onSubmit={onSubmit}>
//         this is login
//         <input type='text' placeholder='email'
//         onChange={e => setEmail(e.target.value)}/>
//         <input type='text' placeholder='password'
//         onChange={e => setPassword(e.target.value)}/>
//         <input type='submit' value='Log In' />
//       </form>
//     </div>
//   );
// }

// import Link from 'next/link';
import { useRouter } from 'next/router';
import { useUser } from '../components/UserContext';
import css from '../styles/login.module.css';
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
import Container from '@material-ui/core/Container';
import Navbar from '../components/NavBar';
import SearchContext from '../components/SearchContext.js';
import Image from 'next/image';
import google from '../public/google.png';
import googledark from '../public/googledark.png';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

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

export default function SignIn() {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const router = useRouter();
  const { signInWithEmailAndPassword, signInWithGoogle } = useUser();
  const { darkMode, toggleDarkMode } = useContext(SearchContext);
  //console.log(darkMode)
  // console.log(signInWithEmailAndPassword)
  const onSubmit = (e) => {
    e.preventDefault();
    setError(null);
    signInWithEmailAndPassword(email, password)
    // .then((authUser) => {
    //   router.push('/dashboard')
    // })
    // .catch((err) => {
    //   setError(err.message)
    // })
  }
  const routeToRegi = () => {
    router.push('/registration')
  }

  return (
    <div>
      <Navbar />
      <div className={darkMode? css.darkmain : css.main}>
        <img className={darkMode? css.darkimage : css.image} src="https://s.yimg.com/ny/api/res/1.2/shrea.WwR4tjQHvDpeOjcg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtjZj13ZWJw/https://media.zenfs.com/en-US/pop_sugar_uk_fitness_137/934be5b88309504d015f5f2754906a1e" alt="Strong female yogi gathering chi to cast a level 1 fireball" />
        <Container component="main" maxWidth="xs" className={classes.loginmain}>
          <CssBaseline />
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <form className={classes.form} noValidate>

              <TextField
                onChange={e => setEmail(e.target.value)}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                className={darkMode? classes.darkinput : null} Style = {{ WebkitBoxShadow: "0 0 0 1000px blue inset" }}
              />
              <TextField
                onChange={e => setPassword(e.target.value)}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                className={darkMode? classes.darkinput : null}
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={onSubmit}
              >
                Sign In
              </Button>
              <div className={css.gocontainer}>
              <div className={darkMode? css.googledark : css.google} onClick={() => signInWithGoogle()}>
              <span className={css.googleimage} ><Image src={google} /></span>
              <span className={darkMode? css.googlefontdark : css.googlefont}>
              Sign in with Google
              </span></div>
              </div>
              <Grid container>
                <Grid item>
                  <Link className={darkMode? classes.signup : null} onClick={() => routeToRegi()} href="#" style={{fontWeight: 'bold', fontSize: 15}}>
                    {"Don't have an account? Sign Up"}
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