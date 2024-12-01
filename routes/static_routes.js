const express=require('express');
const router= express.Router();
const path=require('path');

router.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"public/html","index.html"));
})
router.get('/login.html',(req,res)=>{
    res.sendFile(path.join(__dirname,'../public/html','login.html'));
})
router.get('/signup.html',(req,res)=>{
    res.sendFile(path.join(__dirname,'../public/html','signup.html'));
})
router.get('/joinus.html',(req,res)=>{
    res.sendFile(path.join(__dirname,'../public/html','joinus.html'));
})
router.get('/services.html',(req,res)=>{
    res.sendFile(path.join(__dirname,'../public/html','services.html'));
})
router.get('/aboutus.html',(req,res)=>{
    res.sendFile(path.join(__dirname,'../public/html','aboutus.html'));
})
router.get('/birthday.html',(req,res)=>{
    res.sendFile(path.join(__dirname,'../public/html','birthday.html'));
})
router.get('/birthday2.html',(req,res)=>{
    res.sendFile(path.join(__dirname,'../public/html','birthday2.html'));
})
router.get('/birthday3.html',(req,res)=>{
    res.sendFile(path.join(__dirname,'../public/html','birthday3.html'));
})
router.get('/birthday4.html',(req,res)=>{
    res.sendFile(path.join(__dirname,'../public/html','birthday4.html'));
})
router.get('/birthdaydetails.html',(req,res)=>{
    res.sendFile(path.join(__dirname,'../public/html','birthdaydetails.html'));
})
router.get('/ceremony.html',(req,res)=>{
    res.sendFile(path.join(__dirname,'../public/html','ceremony.html'));
})
router.get('/ceremony2.html',(req,res)=>{
    res.sendFile(path.join(__dirname,'../public/html','ceremony2.html'));
})
router.get('/ceremony3.html',(req,res)=>{
    res.sendFile(path.join(__dirname,'../public/html','ceremony3.html'));
})
router.get('/ceremony4.html',(req,res)=>{
    res.sendFile(path.join(__dirname,'../public/html','ceremony4.html'));
})
router.get('/ceremonydetails.html',(req,res)=>{
    res.sendFile(path.join(__dirname,'../public/html','ceremonydetails.html'));
})
router.get('/contactnow.html',(req,res)=>{
    res.sendFile(path.join(__dirname,'../public/html','contactnow.html'));
})
router.get('/contactus.html',(req,res)=>{
    res.sendFile(path.join(__dirname,'../public/html','contactus.html'));
})
router.get('/entertainment.html',(req,res)=>{
    res.sendFile(path.join(__dirname,'../public/html','entertainment.html'));
})
router.get('/entertainment2.html',(req,res)=>{
    res.sendFile(path.join(__dirname,'../public/html','entertainment2.html'));
})
router.get('/entertainment3.html',(req,res)=>{
    res.sendFile(path.join(__dirname,'../public/html','entertainment3.html'));
})
router.get('/entertainment4.html',(req,res)=>{
    res.sendFile(path.join(__dirname,'../public/html','entertainment4.html'));
})
router.get('/entertainmentdetails.html',(req,res)=>{
    res.sendFile(path.join(__dirname,'../public/html','entertainmentdetails.html'));
})
router.get('/exhibition.html',(req,res)=>{
    res.sendFile(path.join(__dirname,'../public/html','exhibition.html'));
})
router.get('/exhibition2.html',(req,res)=>{
    res.sendFile(path.join(__dirname,'../public/html','exhibition2.html'));
})
router.get('/exhibition3.html',(req,res)=>{
    res.sendFile(path.join(__dirname,'../public/html','exhibition3.html'));
})
router.get('/exhibition4.html',(req,res)=>{
    res.sendFile(path.join(__dirname,'../public/html','exhibition4.html'));
})
router.get('/exhibitiondetails.html',(req,res)=>{
    res.sendFile(path.join(__dirname,'../public/html','exhibitiondetails.html'));
})
router.get('/marriage.html',(req,res)=>{
    res.sendFile(path.join(__dirname,'../public/html','marriage.html'));
})
router.get('/marriage2.html',(req,res)=>{
    res.sendFile(path.join(__dirname,'../public/html','marriage2.html'));
})
router.get('/marriage3.html',(req,res)=>{
    res.sendFile(path.join(__dirname,'../public/html','marriage3.html'));
})
router.get('/marriage4.html',(req,res)=>{
    res.sendFile(path.join(__dirname,'../public/html','marriage4.html'));
})
router.get('/marriagedetails.html',(req,res)=>{
    res.sendFile(path.join(__dirname,'../public/html','marriagedetails.html'));
})

module.exports=router;