const express = require('express')
const path = require('path')
const app = express()
const PORT = 3000;
//cliente so tem acesso ao public
app.use(express.static('./public'))


app.get('/', function (req, res)  {
 res.sendFile(path.join(__dirname,'/public/index.html'))
})


app.listen(PORT, function(){
   console.log(`Server is running on PORT: ` + PORT);
});