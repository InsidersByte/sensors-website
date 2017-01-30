const express = require('express');
const cors = require('cors');
const config = require('./config/index');

const app = express();

app.use(cors());

require('./routes/index')({ app, express });

app.listen(config.port, () => {
    console.log(`Server running on port ${config.port}`);
});
