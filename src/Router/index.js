import express from 'express';


module.exports = function (app) {

    app.group('/user', function(router){

        router.get('/', function(req, res) {
            res.send('home page!');
        });

        router.get('/about', function(req, res) {
            res.send('about page!');
        });

    });

    app.get('/graphql', (req, res) => {

        Yout.model().then((result) => {
            res.send(JSON.stringify(result, null, 2));
        });

    });

    return app;
}