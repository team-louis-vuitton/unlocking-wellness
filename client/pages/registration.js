
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
import React, { useState } from 'react';
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
import css from '../styles/login.module.css';
import Navbar from '../components/NavBar';

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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userName, setUserName] = useState('');
  const [first, setFirst] = useState('');
  const [last, setLast] = useState('');
  const router = useRouter();
  const [error, setError] = useState('');

  const { createUserWithEmailAndPassword, signInWithGoogle } = useUser();

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(email, password, userName)
    setError(null);
    createUserWithEmailAndPassword(email, password)
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
      <div className={css.main}>
        <img className={css.image} src="https://s.yimg.com/ny/api/res/1.2/shrea.WwR4tjQHvDpeOjcg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtjZj13ZWJw/https://media.zenfs.com/en-US/pop_sugar_uk_fitness_137/934be5b88309504d015f5f2754906a1e" alt="Strong female yogi gathering chi to cast a level 1 fireball" />
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
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
              />
            </Grid>
                <Grid item xs={12}>
                  <TextField
                    onChange={e => setUserName(e.target.value)}
                    autoComplete="uname"
                    name="userName"
                    variant="outlined"
                    required
                    fullWidth
                    id="userName"
                    label="User Name"
                    autoFocus
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

              <img className={css.google} src="https://developers.google.com/identity/images/btn_google_signin_light_normal_web.png" onClick={() => signInWithGoogle()} />
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