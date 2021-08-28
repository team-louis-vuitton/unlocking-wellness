import { useState, useEffect } from 'react';
import Firebase from './Firebase';

const formatAuthUser = (user) => ({
  uid: user.id,
  email: user.email,
});

