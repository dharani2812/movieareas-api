import express from "express"

const app = express();
const POST = 3000;

app.get('/',(req,res) => {
    res.json({msg : "Hello Student !"});
});

app.listen(POST,() => {
    console.log(`The Server is Running at http://localhost:${POST}`)
})