const express = require("express");
const app = express();
const path = require("path");
const axios = require("axios");

const mongoose = require("mongoose");
// const Leads = require("./models/lead");
const credSchema = require("./models/creden")
const ejsmate = require("ejs-mate");
// const methodoverride = require("method-override");
// const Joi = require("joi");
// 
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "assets")));
app.engine("ejs", ejsmate);
// app.use(methodoverride("_method"));
const PORT = process.env.PORT || 5000
//api
var products;
api();
async function api() {
  const res = await axios.get("https://reqres.in/api/users");
  products = res.data.data;
}

//connect
// mongoose
// .connect('mongodb+srv://ROOT:ROOT@cluster0.ghts8mu.mongodb.net/?retryWrites=true&w=majority')
// .connect("mongodb+srv://root:root@cluster0.8x4ixcy.mongodb.net/?retryWrites=true&w=majority")
// .connect('mongodb+srv://root:root@cluster0.ut0kwi0.mongodb.net/?retryWrites=true&w=majority')
// .connect("mongodb://localhost:27017/dem")
// .then(() => {
//   console.log("Database connected!");
app.listen(5000, () => {
  console.log("Listening to Port 5000")
})
//   const usern = new cred({name:"Adnan",password:"1234"});
//   usern.save();
// console.log(usern)



// })
// .catch((e) => {
//   console.log(e)
// });






app.get("/page", (req, res) => {
  res.render("pages/index");
});

app.get("pages/dashboard/users", (req, res) => {
  res.render("pages/users");
});
app.post("/login", async (req, res, next) => {
  const user = "Adnan";
  const pass = 1;
  const username = req.body.username;
  const password = req.body.password;
  // const logData = await credSchema.find({});
  // const user = logData[0].name;
  // const pass = logData[0].password;
  // const user="Adnan";
  // const pass=1;
  // console.log(user)
  if (username == user && password == pass) {
    //   const data = await Leads.find({});
    // console.log(data)
    res.render("pages/dashboard", { products });
    console.log(products)
  } else {
    res.render("pages/logininc");
  }
});

app.get("/products/:id", async (req, res, api) => {
  const Productss = await products.find((x) => x.id == req.params.id);
  // const Products = products[Productss];
  res.render("pages/show", { Productss });
  // console.log('this',Productss);
});

app.use((err, req, res, next) => {
  //res.send("Something  went wrong!!!");
  /*   const { status = 404 } = err;
    if (!err.message) err.message = "Page not found!"; */
  res.send("not wrkng")

  //console.log(message);
});