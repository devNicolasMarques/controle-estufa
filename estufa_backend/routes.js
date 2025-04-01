const bodyParser = require('body-parser');
const vehicle = require('./routes/vehicle');
const person = require('./routes/person');
const auth = require('./routes/auth')

module.exports = (app) => {
    app.use(
        bodyParser.json(),
    vehicle,
    person,
    auth
)
}