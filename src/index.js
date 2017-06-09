import express from 'express';
import bodyParser from 'body-parser';
import expressValidator from 'express-validator';

import Schema from './Model/Schema';

import { Envs } from './Configs';

import './Core';
import RouterFactory from './router';

//添加路由group功能
express.application.group = express.Router.group = function(arg1, arg2) {
    var fn, path;

    if (arg2 === undefined) {
        path = "/";
        fn = arg1;
    }
    else {
        path = arg1;
        fn = arg2
    }

    var router = express.Router();
    fn(router);
    this.use(path, router);
    return router;
};

let app = express();

app.use(bodyParser.json());
app.use(expressValidator());

app = RouterFactory(app);

let server = app.listen(Envs.port, function () {

  let host = server.address().address;
  let port = server.address().port;

  console.log('GraphQL listening at http://%s:%s', host, port);

});