var refresh = function() {
    var fs = require('fs');
    console.log("refreshing list!");
    //creating list
    try {
        var files = fs.readdirSync('gifs');
        var holdOutput = "";
        files.forEach(element => {
            holdOutput += element.replace(".txt", "") + '\n';
        });
        
        fs.writeFile("gifList.txt", holdOutput, function (err) {
            if (err) throw err;
            console.log("saved list");
        });
    }
    catch (error) {
        console.log(error);
    }
    console.log("finished list!");
};

module.exports.refresh = refresh;