import express, { response } from 'express';

const app = express();

app.get('/users', () => {
    console.log('lista de usuarios');

    response.json([
        "Picoli",
        "Suelen"
    ]);
});

app.listen(3333);