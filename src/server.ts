import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import mustache from 'mustache-express';

import mainRoutes from './routes/index';

dotenv.config();

const server = express();

// configurações da view engine Mustache
server.set('view engine', 'mustache');
server.set('views', path.join(__dirname, 'views'));
server.engine('mustache', mustache());


server.use(express.static(path.join(__dirname, '../public')));

server.use(express.urlencoded( { extended: true}));
server.use(express.json());

// Routes
server.use(mainRoutes);

server.use((req, res) => {
    res.render('pages/404')
});

server.listen(process.env.PORT);