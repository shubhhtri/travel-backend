const pool=require("../config/db");
const jwt=require("jsonwebtoken");


const getAllUsers= async (req, res)=>{
    try{
        console.log(req.params.token);
        const result=await pool.query("select * from users");
        res.status(200).json(result.rows);
    }catch(err){
        console.log(err);
    }
    
}

const getUserbyId= async (req, res)=>{
    const id=req.params.id;
    try{
        const result=await pool.query("select * from users where id=$1",[id]);
        res.status(200).json(result.rows);
    }catch(err){
        console.log(err);
    }
} 

const deleteUser= async (req, res)=>{
    const id=req.params.id;
    try{
        const result=await pool.query("delete from users where id=$1",[id]);
        res.status(200).json(result);
    }catch(err){
        console.log(err);
    }
} 

const changeUser= async (req, res)=>{
    const id=req.params.id;
    const {name, email, phone, dob, intrests}=req.body;
    const q="update users set name=$1, email=$2, phone=$3, dob=$4, intrests=$5 where id=$6";

    try{
        const result=pool.query(q,[name, email, phone, dob, intrests, id]);
        res.status(200).json(result);
    }catch(err){
        console.log(err);
    }
} 

const addUser= async (req, res)=>{
    const {name, email, phone, dob, interests}=req.body;
    const q="insert into users (name, email, phone, dob, interests) values ($1, $2, $3, $4, $5)";
    try{
        const result=await pool.query(q,[name, email, phone, dob, interests]);

        const token=jwt.sign({email, phone}, process.env.SECRETKEY, {expiresIn:"1h"});

        res.status(201).json({message:"Sucess", result, token});
    }catch(err){
        console.log(err);
    }
} 

module.exports={
    getAllUsers,
    getUserbyId,
    deleteUser,
    changeUser,
    addUser
}