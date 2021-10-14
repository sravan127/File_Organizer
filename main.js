#!/usr/bin/env node

let cmdargs=process.argv.slice(2);
let fs = require("fs");
let path = require("path");

let helpObj = require("./commands/help");
let treeObj = require("./commands/tree");
let organizeObj = require("./commands/organise");

let cmd=cmdargs[0];
switch(cmd){
    case "tree": 
                //treefn(cmdargs[2]);
                treeObj.treeKey(cmdargs[1]);
                break;
    case "organise": 
                //organisefn(cmdargs[2]);
                organizeObj.organizeKey(cmdargs[1]);
                break;
    case "help": 
                //helpfn();
                helpObj.helpKey();
                break;
    default:
                console.log("Please enter a legal command to execute!");
}




