let fs=require("fs");
let path=require("path");

function treefn(srcpath){
    //let destpath=""
    if(srcpath===undefined){
        printtree(process.cwd(),"");
    }
    else{
        if(fs.existsSync(srcpath)===true){
            printtree(srcpath,"");
        }
        else{
            console.log("Please enter a valid source path.");
        }
    }
    
}


function printtree(dirpath,separator){
    let isfile=fs.lstatSync(dirpath).isFile();
    if(isfile===true){
        let filename=path.basename(dirpath);
        console.log(separator + "├──" + filename);
    }
    else{
        let dirname=path.basename(dirpath);
        let children=fs.readdirSync(dirpath);
        console.log(separator + "└──" + dirname);
        for(let i=0;i<children.length;i++){
            //let childname=path.basename(children[i]);
            let childpath=path.join(dirpath,children[i]);
            printtree(childpath, separator+"\t");
        }
    }
}

module.exports = {
    treeKey: treefn
}