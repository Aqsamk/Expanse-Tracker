const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const sequelize = require('./util/database');

const Expanse = require('./models/User');

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));



app.get('/', (req,res,next) => {
    res.send('Form is submitted')
})

app.get('/expanse/add-expanse', (req,res,next) => {

    res.sendFile(__dirname+ "/view/form.html")
    
})


app.post('/expanse/add-expanse', async (req,res,next) => {

   // try{
        /*if(!req.body.phonenumber){
            throw new Error('Phone number is mendatory')
        }*/

        const description = req.body.description;
        const money = req.body.money;
        const catagory = req.body.catagory;

   const data = await Expanse.create({description:description,money:money,catagory:catagory})
   res.status(201).json({newExpDetail:data});
  // res.redirect('/expanse/add-expanse')
    
   

})

app.get('/expanse/get-expanse', async (req,res,next) => {
    const expanses = await Expanse.findAll();
    res.status(200).json({allExpanse:expanses})
})

app.delete('/expanse/delete-expanse/:id', async (req,res,next) => {
    const eId = req.params.id;
    await Expanse.destroy({where:{id:eId}})
    res.sendStatus(200);
})

/*sequelize.sync()
.then((res) => {
   // console.log(res)
    app.listen(5000); 
})
.catch(err => console.log(err))*/

app.listen(5000, () => {
    console.log('server is running on port 5000')
})