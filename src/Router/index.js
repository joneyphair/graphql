import express from 'express';

import UserRouter from './UserRouter';

module.exports = function (app) {

    app.use('/user', UserRouter);

    app.get('/graphql', (req, res) => {

        Model().then((result) => {
            res.send(JSON.stringify(result, null, 2));
        });

    });

    return app;
}