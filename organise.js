let fs=require("fs");
let path=require("path");


types = {
    media: ["mp4", "mkv","mp3"],
    archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"],
    documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex'],
    app: ['exe', 'dmg', 'pkg', "deb"]
}


function organisefn(srcpath){
    let destpath=""
    if(srcpath===undefined){
        srcpath=process.cwd();
    }
    else{
        if(fs.existsSync(srcpath)===true){
            destpath=path.join(srcpath,"Organised_Folder");
            if(fs.existsSync(destpath)===false){
                fs.mkdirSync(destpath);
            }
        }
        else{
            console.log("Please enter a valid source path.");
        }
    }
    organisehelper(srcpath,destpath);
}

function organisehelper(src,dest){
    let data=fs.readdirSync(src,"utf-8");
    let childpath="" 
    let category=""  
    for(let i=0;i<data.length;i++){
         childpath=path.join(src,data[i]);
        let isfile=fs.lstatSync(childpath).isFile();
        if(isfile){
            category=getCategory(childpath);
            createnew(childpath,dest,category);
        }
        
    }
    
}


function getCategory(fname){
    let ext=path.extname(fname).slice(1);
    for(let type in types){
        let arr=types[type];
        if(arr.includes(ext))
          return type;
    }
    return "other";
}


function createnew(src,dest,category){
    let destfolder=path.join(dest,category);
    if(fs.existsSync(destfolder)===false){
        fs.mkdirSync(destfolder);
    }
    let name=path.basename(src);
    let destfilepath=path.join(destfolder,name);
    fs.copyFileSync(src,destfilepath);
    console.log(name,"  copied to  ",category);
}


module.exports = {
    organizeKey: organisefn
}