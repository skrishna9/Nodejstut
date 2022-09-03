// // // // // // const fs =require('fs');
// // // // // // const path =require('path');
// // // // // // const dirPath= path.join(__dirname,'curd');
// // // // // // const filePath= `${dirPath}/apple.txt`;
// // // // // // //fs.writeFileSync(filePath,'this is a apple');
// // // // // // //how to read file 
// // // // // // // fs.readFile(filePath,'utf8',(err,item)=>{
// // // // // // //     console.log(item)
// // // // // // // })
// // // // // // // fs.appendFile(filePath,'and file name is apple',(err)=>{
// // // // // // //     if(!err) console.log("file is updated")
// // // // // // // })
// // // // // // //Rename
// // // // // // // fs.rename(filePath,`${dirPath}/fruit.txt`,(err)=>{
// // // // // // //     if(!err) console.log("file name is updated")
// // // // // // // })
// // // // // // //How to delete file 
// // // // // // //fs.unlinkSync(`${dirPath}/fruit.txt`)
// // // // // let a=10;
// // // // // let b=0;


// // // // // let dataks= new Promise((resolve,reject)=>{
// // // // //     setTimeout(()=>{
// // // // //         resolve(20)
// // // // //     },2000)
// // // // // })
// // // // // dataks.then(()=>{
// // // // //     console.log(a+dataks);
// // // // // })

// // // // //How node js work
// // // // //call stack, NOde API , callback queue,

// // // // console.log("starting up");
// // // // setTimeout(()=>
// // // // {
// // // //     console.log("2 second log")
// // // // },2000)

// // // // setTimeout(()=>{
// // // //     console.log("0 second loss")
// // // // },000)
// // // // console.log("finihing up");

// // // // //firstly this programing exicute stating and finishing then after 0 second loss went to APIs then after it go call back queue then it exicute 
// // // // //finally the 2 second loss go to apis and then after it will go to call back queue then it exicute finally 
// // // // //express js 
// // // // //what is express js , how to install , make example with express js.

// // // const express= require('express');
// // // const app=express();
// // // app.get('',(req,resp)=>{
// // //     console.log("data sent by browser==>",req.query.name)
// // //     resp.send("Hello, this is Home page");
// // // });

// // // app.get('/about',(req,resp)=>{
// // //     resp.send("Hello, this is About page");
// // // });

// // // app.listen(3000);


// // // // //render HTML and JSON,how html tags,show json data,link pages
// // const express= require('express');
// // const app=express();
// // app.get('',(req,resp)=>{
// //     resp.send(`
// //         <h1>Welcome, to Home Page</h1><a href="/about">Go to About Page</a>
// //     `);
// // });

// // app.get('/about',(req,resp)=>{
// //     resp.send(`
// //     <a href="/">Go to Home Page</a>
// //     <input type="text" placeholder="User Name"value="${req.query.name}"/>
// //     <button>submit</button>
// //     `)
// // });

// // app.get('/help',(req,resp)=>{
// //     resp.send([
// //        {name:'krishna sharma',
// //        email:'sharmakri98597@gmail.com'} ,
// //        {name:'sagar sharma',
// //        email:'sskri98597@gmail.com'} 

    
       
    
// //     ]);
// // });

// // app.listen(3000);
// // //Make folder for HTML file and access it , Make Html file , Load html file

// // const express= require('express');
// // const path = require('path');
// // const app=express();

// // const publicPath=path.join(__dirname,'public');
// // app.use(express.static(publicPath));
// // app.listen(2000);
// //how to remove extension from URL,Apply get method , Remove an extension from URL,Make 404 page
// // const express= require('express');
// // const path = require('path');
// // const app=express();

// // const publicPath=path.join(__dirname,'public');
// // app.get('',(_,resp)=>
// // {
// //     resp.sendFile(`${publicPath}/index.html`)
// // })
// // app.get('/about',(_,resp)=>
// // {
// //     resp.sendFile(`${publicPath}/about.html`)
// // })
// // app.get('/help',(_,resp)=>
// // {
// //     resp.sendFile(`${publicPath}/help.html`)
// // })
// // app.get('*',(_,resp)=>
// // {
// //     resp.sendFile(`${publicPath}/404.html`)
// // })
// // app.listen(2000);

// //what is the template engine, install ejs template package , setup dynamic routing, make dynamic page.
// //

// // const express= require('express');
// // const path = require('path');
// // const app=express();
// // const publicPath=path.join(__dirname,'public');
// // app.set('view engine','ejs');
// // app.get('/profile',(_,resp)=>{
// //     const user={
// //         name:'krishna sharma',
// //         email:'sharmakri98597@gmail.com',
// //         city:'Kalaiya'
// //     }
// //     resp.render('profile',{user});
// // });
// // app.get('',(_,resp)=>
// // {
// //     resp.sendFile(`${publicPath}/index.html`)
// // })
// // app.get('/about',(_,resp)=>
// // {
// //     resp.sendFile(`${publicPath}/about.html`)
// // })
// // app.get('/help',(_,resp)=>
// // {
// //     resp.sendFile(`${publicPath}/help.html`)
// // })
// // app.get('*',(_,resp)=>
// // {
// //     resp.sendFile(`${publicPath}/404.html`)
// // })


// // app.listen(20001);
// //Dynamic Page 
// //How to make loop in ejs, make header file , show common header file 
// // const express= require('express');
// // const path = require('path');
// // const app=express();
// // const publicPath=path.join(__dirname,'public');
// // app.set('view engine','ejs');
// // app.get('/profile',(_,resp)=>{
// //     const user={
// //         name:'krishna sharma',
// //         email:'sharmakri98597@gmail.com',
// //         city:'Kalaiya',
// //         skills:['php','python','c++','java']
// //     }
// //     resp.render('profile',{user});
// // });
// // app.get('/login',(_,resp)=>{
// //     resp.render('login')
// // })
// // app.get('',(_,resp)=>
// // {
// //     resp.sendFile(`${publicPath}/index.html`)
// // })
// // app.get('/about',(_,resp)=>
// // {
// //     resp.sendFile(`${publicPath}/about.html`)
// // })
// // app.get('/help',(_,resp)=>
// // {
// //     resp.sendFile(`${publicPath}/help.html`)
// // })
// // app.get('*',(_,resp)=>
// // {
// //     resp.sendFile(`${publicPath}/404.html`)
// // })


// // app.listen(20001);



// //what are Middlewares , How to make a middleware , Apply Middleware on routes , Types of middleware
// //middleware is use for modification in requiest and response //this is application-level middleware 
// // const express=require('express');
// // const app=express();


// // const reqFilter=(req,resp,next)=>{
// //     console.log('reqFilter');
// //     if(!req.query.age)
// //     {
// //         resp.send("Please provide age")
// //     }
// //     else if(req.query.age<18)
// //     {
// //         resp.send("You cannot access this page")
// //     }
// //     else{
// //         next();
// //     }
    
// // }
// // app.use(reqFilter)
// // app.get('/',(req,resp)=>
// // {
// //     resp.send("Welcom, to Home Page");
// // });
// // app.get('/about',(req,resp)=>
// // {
// //     resp.send("Welcom, to About Page");
// // });
// // app.listen(20001);

// //Middleware Types //Application-Level middleware , Router-Level middleware , error-handling middleware , built-in middleware , third-party middleware 


// //Route Level Middleware, Apply middleware on single Route, make middleware in different file , apply middleware in the group of route 
// //route-middleware which can work on single middleware or on multiple and also we can use one middleware on all program


// // const express=require('express');
// // const reqFilter=require('./middleware')
// // const app=express();
// // const route = express.Router();
// // route.use(reqFilter);

// // //app.use(reqFilter)
// // app.get('/',(req,resp)=>
// // {
// //     resp.send("Welcom, to Home Page");
// // });
// // app.get('/about',(req,resp)=>
// // {
// //     resp.send("Welcom, to About Page");
// // });
// // route.get('/help',(req,resp)=>
// // {
// //     resp.send("Welcom, to About Page");
// // });

// // route.get('/contact',(req,resp)=>
// // {
// //     resp.send("Welcom, to Contact Page");
// // });
// // app.use('/',route);
// // app.listen(20001);

// //from starting MongoDB
// //how to install MongoDB, set Environment for Mongo , Mongodb compass Tool
// //it is a database it is a Nosql database code-step-by-step
// //the data stored in a collection 
// //collection don't have row and columns 
// //data is stored in the form of object
// //https://www.mongodb.com/try/download/community link for mongodb 

// //crud Operations in MongoDB
// //How to insert data collection// cmd for insertion=db.product.insertOne({name:'m 20',brand:'samsung', price:4000,category:'mobile'})
// //How to check inserted Data// cmd for check=db.product.find
// //How to Update Data //cmd for updatetion:-db.product.updateOne({name:"u10"},{$set:{brand:"opp"}})
// //How to Delete Data //cmd for deletion:-db.product.deleteOne({brand:"Iphone"})
// //Node and Mongo|DB
// //How to connect Node with MongoDB
// //install MongoDB with Node js 
// //Show Data from MongoDB//cmd for MongoDB npm:-npm install mongodb
// // const {MongoClient} =require('mongodb');
// // const url = 'mongodb://localhost:27017';
// // const database ='e-commercial'
// // const client= new MongoClient(url); //node js is client 

// // async function getData()
// // {
// //     let result=await client.connect();//promise is using for handling the data
// //     let db=result.db(database);
// //     let collection =db.collection('product');
// //     let response = await collection.find({}).toArray();
// //     console.log(response);
// // }
// //getData();

// //how to read data from mogodb , make file for db connection , handle promise 


// const {MongoClient} =require('mongodb');
// const url = 'mongodb://localhost:27017';
// const database ='e-commercial'
// const client= new MongoClient(url);

// async function dbconnect()
// {
//     let result=await client.connect();
//     let db=result.db(database);
//     return db.collection('product');
//     // let response = await collection.find({name:'u10'}).toArray();
//     // console.log(response);

     
// }

// //Promise Handling 
// // dbconnect().then((resp)=>{
// //     resp.find({name:'u10'}).toArray().then((data)=>{
// //         console.warn(data)
// //     })//when we do heavy operation pending result handling for using promise and it will provide result

// // })
// // console.warn(dbconnect())
// //Next method for handling promise
// // const main =async()=>{
// //     let data = await dbconnect();
// //     data =data.find().toArray();
// //     console.warn(data);
    
// // }
// // main();



