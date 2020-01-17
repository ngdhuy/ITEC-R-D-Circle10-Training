var express = require('express'),
    app = express(),
    port = 4000;

app.listen(port);

app.listen(port, () => {
    console.log('Server started on: ' + port);
});