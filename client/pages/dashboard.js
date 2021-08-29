import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useUser } from '../components/UserContext';

export default function Dashboard() {
  const { authUser, loading } = useUser();
  const router = useRouter();
  console.log(authUser)
  useEffect(() => {
    if (!loading && !authUser) {
      router.push('/login');
    }
  }, [authUser, loading]);

  return (
    <div>
      <div>
        this is Dashboard
      </div>
    </div>
  );
}
