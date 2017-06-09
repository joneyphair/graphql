import express from 'express';

import {Wechat} from './Controller';


module.exports = function (app) {

    app.group('/user', function(router){

        router.get('/', function(req, res) {
            res.send('home page!');
        });

        router.get('/about', function(req, res) {
            res.send('about page!');
        });

    });

    app.group('wechat',function(router){

        const {UserController} = Wechat;

        router.get('/user',function(){

        }); 

    });

    app.get('/graphql', (req, res) => {

        Yout.model.query().then((result) => {
            res.send(JSON.stringify(result, null, 2));
        });

    });

    return app;
}