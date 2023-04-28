const express=require("express");
const dotenv = require("dotenv");
const cors=require("cors");

const eventsRouter= require("./routers/events");
const userRouter=require("./routers/users")

dotenv.config();

const app=express();

app.use(express.json());
app.use(cors({origin:"http://localhost:3000"}));

app.use("/events", eventsRouter);
app.use("/users", userRouter);

app.listen(process.env.PORT, ()=>{console.log(`Server started at ${process.env.PORT}`)});

