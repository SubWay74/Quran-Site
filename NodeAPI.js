const express = require('express');
const app = express();
const port = 3001;

app.use(express.json());

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  // Here, you can validate the username and password against your database or any other source of truth.
  if (username === 'username74' && password === '123456') {
    // If the login is successful, redirect to the website with the desired route.
    res.redirect('/home');
  } else {
    // If the login is unsuccessful, return an error message.
    res.status(401).json({ message: 'Invalid username or password.' });
  }
});

app.listen(port, () => {
  console.log(`Server listening at localhost:${port}`);
});
