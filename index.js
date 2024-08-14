/* CLOUDPAD BACKEND */

const connectToMongo = require(`${__dirname}/db`);
const express = require('express');
const cors = require('cors');

connectToMongo();
const app = express();
const port = 5000;

const corsOptions = {
    origin: 'https://client-seven-silk-25.vercel.app',
    optionsSuccessStatus: 200, // For legacy browser support
  };
  
  app.use(cors(corsOptions));
  app.use(express.json());

// AVAIABLE ROUTES
app.use('/api/auth', require('./routes/authRouter'));
app.use('/api/notes', require('./routes/notesRouter'));

app.listen(port, ()=> {
    console.log(`server listening at http://localhost:${port}`);
});