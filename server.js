/******************************************************************************** 
*  WEB322 – Assignment 03 
*  
*  I declare that this assignment is my own work in accordance with Seneca's 
*  Academic Integrity Policy: 
*  
*  https://www.senecacollege.ca/about/policies/academic-integrity-policy.html 
*  
*  Name: Lamim Rashid       Student ID: 017156142       Date: 2/16/2024 
* 
*  Published URL: ___________________________________________________________
*
********************************************************************************/

const legoData = require("./modules/legoSets");

const express = require("express");
const path = require("path");

const app = express();
const port = 3000;

const name = "Lamim Rashid"
const studentID = "017156142"
const assignNum = "3";

app.use(express.static('public'));

app.get("/", (req, res) => {
  console.log(`Assignment ${assignNum}:  ${name} - ${studentID}`);
  res.sendFile(path.join(__dirname, "/views/home.html"))
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "/views/about.html"))
});

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "/views/404.html"));
});

app.get("/lego/sets", async (req, res) => {
  try {
    const set = await legoData.getAllSets();
    res.send(set);
  } catch (err) {
    res.send(err);
  }
});

app.get("/lego/sets/num-demo", async (req, res) => {
  try {
    const set = await legoData.getSetsByNum("001-1");
    res.send(set);
  } catch (err) {
    res.send(err);
  }
});


legoData.initalize();

app.listen(port, () => {
  console.log(`The server is running on port ${port}, try visiting http://localhost:${port}/`);
});
