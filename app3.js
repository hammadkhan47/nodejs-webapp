const express=require('express');
const bodyParser=require('body-parser');

const app3=express();
    
    app3.listen(3000,()=>{
        console.log('server')
    });