'use strict'

var events = require('events');
var auth = require('auth/auth');
var utils = require('utils');
var secret = require('secret');

exports.adalink = function(){

  echo("§R \n§a§nConnexion editeur :§R\n \n§bhttp://edition.lesbricodeurs.fr:5000/auth/" + auth.getIdeToken(utils.player().name,secret.shhh));
  
  echo("§R \n§d§nAccès editeur :§R\n \n§bhttp://edition.lesbricodeurs.fr:5000/edit/");
  
  echo("§R \n§e§nCarte du monde:§R\n \n§bhttp://188.165.206.136:8123/?worldname=construction&mapname=surface&zoom=2&x=1751&y=64&z=877" + "§R\n \n");

};

