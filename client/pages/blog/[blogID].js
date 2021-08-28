/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { useRouter } from 'next/router';

export default function BlogPost() {
  const router = useRouter();
  const { blogID } = router.query;
  return (
    <div>
      this is blog #
      {blogID}
    </div>
  );
}
