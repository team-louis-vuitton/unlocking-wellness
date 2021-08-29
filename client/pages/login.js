/* eslint-disable react/jsx-filename-extension */
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useUser } from '../components/UserContext';
import css from '../styles/login.module.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const router = useRouter();
  const { signInWithEmailAndPassword } = useUser();
  console.log(signInWithEmailAndPassword)
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
  return (
    <div>
      <form className={css.main} onSubmit={onSubmit}>
        this is login
        <input type='text' placeholder='email'
        onChange={e => setEmail(e.target.value)}/>
        <input type='text' placeholder='password'
        onChange={e => setPassword(e.target.value)}/>
        <input type='submit' value='Log In' />
      </form>
    </div>
  );
}
