const path = require('path');
const express = require('express');

const publicPath = path.join(__dirname, '/../public');
const port = process.env.PORT || 3000;
var app = express();

app.use(express.static(publicPath));

// app.get('/', (req, res) => {
//     res.send('Hey now brown cow');
// });
app.listen(port, () => {
    console.log(`server is up and running on port ${port}`);
});
