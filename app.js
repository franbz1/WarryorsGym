const express = require('express');
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;
const app = express();
//app middelwares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/public', express.static('public'))
//app routes
app.get('/warryorsgym1',(req,res)=>{
    res.sendFile(__dirname+`/public/index.html`);
})
app.post('/warryorsgym1post1',(req,res)=>{
    const data = req.body;
    if (Object.keys(data).length > 0) {
        res.send('Formulario enviado');
        console.log(req.body);
    }
    else{
        console.log("objeto vacio");
        res.send('objeto vacio');
    }
})
app.listen(port,()=>{
    console.log(`app start at port:${port}`);
})