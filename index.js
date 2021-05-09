const express = require("express");
const app = express();
// const exphbs = require("express-handlebars");
const cors = require("cors");
const port = 4000;
// const products = require("./Products");

//HandleBars
// app.engine("handlebars", exphbs({ defaultLayout: "main" }));
// app.set("view engine", "handlebars");

//Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Homepage
// app.get("/", (req, res) => {
//   res.render("index", { title: "Product App", products });
// });

app.use(cors());

app.use("/products", require("./routes/api/products"));
app.use("/categories", require("./routes/api/categories"));

app.listen(port, () => {
  console.log(
    `Esempio di listening app all'indirizzo http://localhost:${port}`
  );
});
