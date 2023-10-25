const express = require('express');
const app = express();
const path = require('path');
const morgan = require('morgan');

//settings
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//middlewares
app.use(morgan('dev'));

//routes
app.use('/', require('./routers/indexRouter'));
app.use('/settings/', require('./routers/settingsRouter'));

app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});