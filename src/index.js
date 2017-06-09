import express from 'express';
import bodyParser from 'body-parser';
import expressValidator from 'express-validator';

import Schema from './Model/Schema';
import Model from './Model';
import { Envs } from './Configs';


import Router from './Router';

// 全局变量
global.Model = Model;

let app = express();

app.use(bodyParser.json());
app.use(expressValidator());

app = Router(app);

let server = app.listen(Envs.port, function () {

  let host = server.address().address;
  let port = server.address().port;

  console.log('GraphQL listening at http://%s:%s', host, port);

});