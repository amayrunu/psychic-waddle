const EXPRESS = require("express");
const APP = EXPRESS();
const MONGOOSE = require('mongoose');
MONGOOSE.connect('mongodb://lu97is:eable1997@ds117148.mlab.com:17148/nodetest1997',(err)=>{
if(err){
    console.lon+g('error'+err)

}    else{
    console.log('conectado')
}

})

APP.get('/',(req,res)=> {
    res.send('hola mundo');
});

APP.listen(8080,()=>{
    console.log('servidor en puerto 8081   ')
})