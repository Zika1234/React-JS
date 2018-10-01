var exp = require('express');
var fr = require('fs');
var cors = require ('cors');

//install following modules
//npm install express
//npm install cors


var app=exp();

// execute node prob.js
// then opne in browser localhost:1234/rest/api/read and click load to get the result in console

app.get('/rest/api/read', function(req,res){
    var x= JSON.parse(fr.readFileSync('mobile.json'));
    console.log(x);
});


//To display mobile in range of 10k - 50k
// execute node prob.js
// then opne in browser localhost:1234/rest/api/mobPrice and click load to get the result in console


app.get('/rest/api/mobPrice', function(req,res){
    var x= JSON.parse(fr.readFileSync('mobile.json'));

    var i=0;
    for(i=0;i<x.length;i++)
    {
        if(x[i].mobPrice>=10000 && x[i].mobPrice<=50000)
        {
            console.log(JSON.stringify(x[i]))
        }
    }

  
});


// To update mobile name based on mobile-id-1002
// execute node prob.js
// then opne in browser localhost:1234/rest/api/update and click load to get the result in console
app.get('/rest/api/update', function(req,res){
    var x= JSON.parse(fr.readFileSync('mobile.json'));

    var j=0;
    for(j=0;j<x.length;j++)
    {
        if(x[j].mobId==1002)
        {
            x[j].mobName="Redmi"
            console.log(JSON.stringify(x[j]))
        }
    }

  
});



//Adding a new Mobile Data
// execute node prob.js
// then opne in browser and click
//localhost:1234/rest/api/add 
//and click load to get the result in console

app.get('/rest/api/add', function(req,res){
    var x= JSON.parse(fr.readFileSync('mobile.json'));

    var array = {
        "mobId":1006,
        "mobName":"One+",
        "mobPrice":32000
    }

    x.push(array);
    console.log(x);
  
});





















app.use(cors()).listen(1234, ()=>{
   
    console.log('Express Started');
})

