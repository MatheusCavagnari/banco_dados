const { Sequelize } = require('sequelize');
const express = require('express');
const config = require('./node/config')
const Pessoa = require('./node/Models/Pessoa.js')
const cors = require('cors')
const bodyParser = require('body-parser')
const port = 3000;
const app = express();


var corsOptions = {
    origin: 'localhost',
    optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.urlencoded({
    extended: true
}))
app.use(express.json())



// app.use(bodyParser.json('100kb'))
// app.use(bodyParser.urlencoded({
//     extended: true
// }));

const sequelize = new Sequelize(config);

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/formulario.html')
})


app.post(`/postForm`, async (req) => {
    const data = req.query
    console.log(data)
    // const data = req.body;





    const t = await sequelize.transaction();

    try {

        // Then, we do some calls passing this transaction as an option:

        const pessoa = await Pessoa.create({ nome: data.nome, email: data.email }, { transaction: t });



        // If the execution reaches this line, no errors were thrown.
        // We commit the transaction.
        await t.commit();

    } catch (error) {

        // If the execution reaches this line, an error was thrown.
        // We rollback the transaction.
        await t.rollback();

    }





})

app.listen(port, () => {
    console.log(`O app esta na porta localhost:${port}`)
});




const teste = async () => {

    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');

        // Pessoa.create({ nome: 'Valdecir', email: 'valvaldomal@gmail.com' })

        // Pessoa.create()
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

teste()