//server.js
const app = require("../app");
const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log('Server started listening on PORT : ' + PORT)
})