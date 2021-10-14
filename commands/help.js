function helpfn(){
    console.log(`
       List of all the commands:
          node main.js tree <dirpath>
          node main.js organise <dirpath>
          node main.js help

    `);
}

module.exports={
    helpKey: helpfn
}
