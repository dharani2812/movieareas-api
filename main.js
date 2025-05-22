import express from "express"

const app = express();
const POST = 3000;

app.get('/',(req,res) => {
    res.json({msg : "Hello Student !"});
});


// R - READ 
app.get('/movies', (req,res) => {

})

// C - FOR CREATE

app.post('/movies', (req,res) => {
    
})

// UPDATE CRUD

app.put('/movies/:id', (req,res) => {
    
})

// DELETE

app.delete('/movies/:id', (req,res) => {
    
})



app.listen(POST,() => {
    console.log(`The Server is Running at http://localhost:${POST}`)
})