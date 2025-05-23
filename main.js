import express from "express"
import moviesRouter from "./routes/movies.route.js"
import connectDB from "./lib/db.js";

const app = express();
const POST = 3000;

connectDB();

app.use(express.json())
app.use(express.urlencoded({extended : true}))

app.get('/',(req,res) => {
    res.json({msg : "Hello Student !"});
});

app.use('/',moviesRouter)

app.listen(POST,() => {
    console.log(`The Server is Running at http://localhost:${POST}`)
})