/******************************************************************************** 
*  WEB322 – Assignment 034
*  
*  I declare that this assignment is my own work in accordance with Seneca's 
*  Academic Integrity Policy: 
*  
*  https://www.senecacollege.ca/about/policies/academic-integrity-policy.html 
*  
*  Name: Lamim Rashid       Student ID: 017156142       Date: 03/02/2024 
* 
*  Published URL: https://inquisitive-cyan-slippers.cyclic.app
*
********************************************************************************/

const legoData = require("./modules/legoSets");

const express = require("express");
const path = require("path");

const app = express();
const port = 3000;

const name = "Lamim Rashid"
const studentID = "017156142"
const assignNum = "4";

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get("/", (req, res) => {
  console.log(`Assignment ${assignNum}:  ${name} - ${studentID}`);
  res.render('home');
});

app.get("/about", (req, res) => {
  res.render('about');
});

app.get("/lego/sets/:id", async (req, res) => {
  const setID = req.params['id'];
  try {
    const set = await legoData.getSetsByID(setID);
    res.render("set", { sets: set });
  } catch (err) {
    res.status(404).send(err + ' 404 failed to get set ' + setID + '.');
  }
});


app.get("/lego/sets", async (req, res) => {
  const theme = req.query.theme;
  try {
    if (theme) {
      const set = await legoData.getAllSets(theme);
      res.render("sets", { sets: set });
    }
    else {
      const set = await legoData.getAllSets();
      res.render("sets", { sets: set });
    }
  } catch (err) {
    res.status(404).send(err + ' 404 failed to get sets.');
  }
});

app.use((req, res, next) => {
  res.status(404).render('404');
});

legoData.initalize();

app.listen(port, () => {
  console.log(`The server is running on port ${port}, try visiting http://localhost:${port}/`);
});
