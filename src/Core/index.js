//全局

import controller from './controller';
import model  from './model';

const Yout = {};

Yout.model = model;
Yout.controller = controller; 

//全局
global.Yout = Yout;
