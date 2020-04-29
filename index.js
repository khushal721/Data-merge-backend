const express = require('express');
const app = express();
const port = 3000;
const parser = require('body-parser');
const cors = require('cors');

const userRouter = require('./routes/userManager');

app.use(parser.json());
app.use(cors());
app.use('/user', userRouter);

app.get('/', (req, res) => {
    res.send('get request accepted');
})

app.listen(port, () => {
    console.log('server started');
})