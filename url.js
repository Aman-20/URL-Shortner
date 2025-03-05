import express from 'express';
import mongoose from 'mongoose';
import { urlshort } from './controllers/controller.js';
import { originalurl } from './controllers/controller.js';

const app = express();

app.use(express.urlencoded({extended:true}));

mongoose.connect("mongodb+srv://rnafork:aman110304@cluster0.t30fq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
    dbName: "UrlShortner"
}).then(() => {
    console.log("mongoDB is Connected .....");
});

app.get('/', (req, res)=>{
    res.render('view.ejs', {shorturl:null});
});

app.post('/shorten', urlshort);

app.get('/:shortcode', originalurl);

app.listen(3000, ()=>{
    console.log("express is connected...");
});