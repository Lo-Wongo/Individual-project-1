const express = require('express'),
    bodyParser = require('body-parser'),
    app = express(),
    ctrl = require('./controllers/contacts_controller'),
    port = 3001;


app.use(bodyParser.json());

// app.listen(port, () => console.log(`listening on port ${port}`));


app.get('/api/contacts', ctrl.get)
app.post('/api/contacts', ctrl.create)
app.delete('/api/contacts/:id', ctrl.delete)
app.put('/api/contacts/:id', ctrl.update)


app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
})



