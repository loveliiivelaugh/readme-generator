import React from 'react';

export const useGithub = () => {
  const [githubData, setGithubData] = React.useState({ 
    githubApi: '',
    user: '',
    repos: '',
    languages: ''
  });
  React.useEffect(() => {
    const fetchGithubApi = async () => {
      await fetch('https://api.github.com')
        .then(response => response.json())
        .then(data => {
          console.info(data);
        });

      await fetch('https://api.github.com/users/loveliiivelaugh')
        .then(response => response.json())
        .then(data => {
          console.info(data);
        });

      await fetch('https://api.github.com/users/loveliiivelaugh/repos')
        .then(response => response.json())        .then(data => {
          console.info(data);
        });
        
      await fetch('https://api.github.com/repos/loveliiivelaugh/amplifyapp/languages')
        .then(response => response.json())
        .then(data => {
          console.info(data);
      });    
    }

    fetchGithubApi();
  }, []);

  return data;
