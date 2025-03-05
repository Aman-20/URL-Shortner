import anymodel from "../models/model.js";
import shortid from 'shortid';

export const urlshort = async (req, res) => {

    const longcode = req.body.longurl;
    const shortcode = shortid.generate();
    const shorturl = `http://localhost:3000/${shortcode}`;

    const newUrl = new anymodel({shortcode, longcode});
    await newUrl.save();

    console.log(newUrl);

    res.render('view.ejs', {shorturl:shorturl});
};

export const originalurl = async(req, res)=>{
    const shortcode = req.params.shortcode
    const urlrecord = await anymodel.findOne({shortcode});
    if(urlrecord){
        res.redirect(urlrecord.longcode)
    }else{
        res.status(404).send("URL not found !!")
    }
}

// const longcode = req.body.longurl;
// const shortcode = shortid.generate();
// const shorturl = `http://localhost:3000/${shortcode}`;

// const newUrl = new anymodel({shortcode, longcode});
// await newUrl.save();

// console.log(newUrl);

// https://www.google.com/search?q=images&rlz=1C1RXQR_enIN1137IN1137&oq=&gs_lcrp=EgZjaHJvbWUqCQgBECMYJxjqAjIJCAAQIxgnGOoCMgkIARAjGCcY6gIyCQgCECMYJxjqAjIJCAMQIxgnGOoCMgkIBBAjGCcY6gIyCQgFECMYJxjqAjIJCAYQIxgnGOoCMgkIBxAjGCcY6gLSAQg1OTQ1ajBqN6gCCLACAfEFD6tr0qr-UJQ&sourceid=chrome&ie=UTF-8


// const obj = {
//     longcode:req.body.longurl,
//     shortcode:shortid.generate()
// }
// let user = await anymodel.create(obj);
// console.log(user);