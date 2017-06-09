import express from 'express';

import Schema from './Model/Schema';
import Model from './Model';

import { Envs } from './Configs';

import { graphql } from 'graphql';
import bodyParser from 'body-parser';
import Router from './Router';


// 全局变量
global.Model = Model;

let app = express();

/*
app.use(bodyParser.text({ type: 'application/graphql' }));
*/

app = Router(app);

let server = app.listen(Envs.port, function () {

  let host = server.address().address;
  let port = server.address().port;

  console.log('GraphQL listening at http://%s:%s', host, port);

});