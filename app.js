import express from 'express'
import path from 'path';
import { fileURLToPath } from 'url';
import hbs from 'hbs';
import  'dotenv/config';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express()
const port = process.env.PORT;

//Handlebar
app.set('view engine','hbs');
hbs.registerPartials(__dirname + '/views/partials');


//Servir contenido estatico
app.use(express.static('public'));

/*
app.get('/', (req, res) => {
  res.send('Home Page');
});
*/

app.get('/', (req, res) => {
   res.render('home',{
        nombre: 'Fernando Alcántara',
        titulo: 'Curso de NodeJS'
   });
});

app.get('/generic', (req, res) => {
    //res.sendFile(__dirname + '/public/generic.html');
    res.render('generic',{
        nombre: 'Fernando Alcántara',
        titulo: 'Curso de NodeJS'
   });
});


app.get('/elements', (req, res) => {
    //res.sendFile(__dirname + '/public/elements.html');
    res.render('elements',{
        nombre: 'Fernando Alcántara',
        titulo: 'Curso de NodeJS'
   });
});


app.get('/hola-mundo', (req, res) => {
    res.send('Hola mundo en su respectiva ruta');
});


app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/back/404.html');
});


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});