/* eslint-disable react/jsx-filename-extension */
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useUser } from '../components/UserContext';
import css from '../styles/login.module.css';

export default function Login() {
  const { authUser, loading } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !authUser) {
      router.push('/');
    }
  }, [authUser, loading]);

  return (
    <div>
      <div className={css.main}>
        this is login
      </div>
    </div>
  );
}
