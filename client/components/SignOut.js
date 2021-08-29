import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Button from '@material-ui/core/Button';
import { useUser } from './UserContext';

const SignOutButton = () => {
  const {authUser, loading, signOut} = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !authUser) {
      router.push('/login');
    }
  }, [authUser, loading])

  return (
    <div>
      <Button variant="contained" color="primary" onClick={signOut}>Sign Out </Button>
    </div>

  )
}
export default SignOutButton;