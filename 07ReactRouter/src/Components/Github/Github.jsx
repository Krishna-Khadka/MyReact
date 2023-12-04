import React, { useState, useEffect } from 'react'
import { useLoaderData } from 'react-router-dom';

// using useEffect Snippet
const Github = () => {
  const data = useLoaderData()
  // const [data, setData] = useState()
  // useEffect(() => {
  //  fetch('https://api.github.com/users/Krishna-Khadka')
  //  .then(response => response.json())
  //  .then(data => {
  //   console.log(data);
  //   setData(data)
  //  })
  //  .catch(error => {
  //   console.error('Error fetching github data:', error);
  //  })
  // }, [])
  
  return (
    <div className='text-center text-3xl bg-gray-600 p-4 m-4'>
      {
        data ? (
          <>
          Github Followers: {data.followers}
          <img src={data.avatar_url} alt="pic" width={300} />
          </>
        ): (
          'Loading image....'
        )}
    </div>
  );
};

export default Github

export const githubLoader = async () => {
  const response = await fetch('https://api.github.com/users/Krishna-Khadka')
  return response.json()
}