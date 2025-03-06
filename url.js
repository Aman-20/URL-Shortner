import express from 'express';
import mongoose from 'mongoose';
import { urlshort } from './controllers/controller.js';
import { originalurl } from './controllers/controller.js';

const app = express();

app.use(express.urlencoded({extended:true}));

mongoose.connect("paste your mongobd link here", {
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
