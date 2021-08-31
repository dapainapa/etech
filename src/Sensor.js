import React, { useState, useEffect } from "react";
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import useStyles from './styles';
import memories from './images/memories.png';

const gitHubUrl = "https://api.thingspeak.com/channels/1481991/status.json?api_key=A80QELDUFKQYY5GN";

function App() {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    getGitHubUserWithFetch();
  }, []);

    const getGitHubUserWithFetch = async () => {
    const response = await fetch(gitHubUrl);
    const jsonData = await response.json();
    setUserData(jsonData);
  };

  
  return (
    <Container maxWidth="lg">
      <AppBar  position="static" color="inherit">
        <Typography variant="h4" align="center">{userData.channel}</Typography>
      </AppBar>
      </Container>
    );
}
// {userData.channel.latitude} {userData.channel.longitude}
export default App;