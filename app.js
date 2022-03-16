const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();
let items=[];
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.get("/", function (req, res) {
  let day = date();

  res.render("list", { kindofDay: day,newListItems:items });
});

app.post("/", function (req, res) {
  let item = req.body.newItem;
  items.push(item);
  res.redirect("/");
});

app.set('port',(process.env.PORT || 3000));

app.listen(app.get('port'), function () {
  console.log("Server started on port 3000");
});
