const express = require('express');

const app = express();

require('./database')

app.use(require('./routes/index.routes'));

const IP ="localhost";
const PORT=3000;
app.listen(PORT);
console.log(`server on:\nhttp://${IP}:${PORT}`);