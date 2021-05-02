const express = require('express');
const path = require('path');
const logger = require('./middleware/loggers');
const router = require('./routes/api/members');

const app = express();

// //this inits the middleware logger
// app.use(logger);

//body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// // set a static folder
// app.use(express.static(path.join(__dirname, 'public')));

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'index.html'));
// })


//Members api routes
app.use('/api/members', require('./routes/api/members'));


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server has started on port ${PORT}`));

