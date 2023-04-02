const express = require('express');
const app = express();

// Configuração para rodar na PORTA
const PORT = process.env.PORT || 3080;

//Import da rota configurada na pasta ROUTER
const indexRouter = require('./router/indexRouter');

// Chamada da Rota
app.use('/', indexRouter);


// Chamando a aplicação do EJS
app.set('view engine', 'ejs');
app.set('views', './views')



app.listen(PORT,() => console.log(`Rodando na porta ${PORT}`))





 