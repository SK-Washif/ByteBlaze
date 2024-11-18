import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Blog = () => {
  const blog = useLoaderData()
  return (
    <div>
      <h1>Single Blog details</h1>
    </div>
  );
};

export default Blog;