import sqlite3 from 'sqlite3';
import {promisify} from 'bluebird';
import { graphql } from 'graphql';
import Schema from './Schema';

const db = new sqlite3.Database('db.sqlite3');

db.get = promisify(db.get);
db.all = promisify(db.all);

function Model (query){
    query = query || `{ viewer { id, name } }`;
    return graphql(Schema, query, {db});
}

module.exports = Model; 