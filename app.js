const express = require('express');
const app = express();
const path = require("path");

// Configuração para rodar na PORTA
const PORT = process.env.PORT || 3080;

//Import da rota configurada na pasta ROUTER
const indexRouter = require('./router/indexRouter');
const carsControllers = require('./router/carsRouter');
const motorsControllers = require('./router/motorsRouter');

// Chamada da Rota
app.use('/', indexRouter);
app.use('/carros', carsControllers)
app.use('/motos', motorsControllers)


// Chamando a aplicação do EJS
app.set('view engine', 'ejs');
app.set('views', './views')

app.use(express.static(path.join(__dirname, "public")))



app.listen(PORT,() => console.log(`Rodando na porta ${PORT}`))





 