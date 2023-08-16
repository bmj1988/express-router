const express = require('express');
const app = express();

const peopleRouter = require('./routes/people');
app.use('/people', peopleRouter);

const port = 8080;
app.listen(port, () => console.log('Server is listening on port', port));