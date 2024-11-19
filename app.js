const express = require('express');
const cors = require('cors');
const app = express();
const routes = require('./app/routes/api');
const path = require('path');


// middleware
app.use(express.json());
app.use(cors());
// routes
app.use('/api', routes);
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
//server run
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});