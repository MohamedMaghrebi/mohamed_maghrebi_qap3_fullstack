

const methodOverride = require('method-override');

const express = require("express");
const app = express();

const PORT =  3000;

global.DEBUG = true;

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true, })); // This is important!
app.use(methodOverride('_method')); // So is this!

app.get("/", (request, response) => {
    if(DEBUG) console.log("root route.")
    response.send("the route for the sites root /.")
// response.render("view.ejs")
})

const loginRouter = require('./src/routes/routes');
app.use('/logins',loginRouter)

app.use((request, response) => {
    if(DEBUG) console.log('404 - route not found.');
    response.status(404).write('404 - route not found.');
    response.end();
})

app.listen(PORT, () => {
    console.log(`Simple app running on port ${PORT}.`)
});