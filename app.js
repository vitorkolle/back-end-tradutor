const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()

app.use((request, response, next) => {
    response.header('Access-Control-Allow-Origin', '*')

    response.header('Access-Control-Allow-Methods', 'GET')

    app.use(cors())

    next()
})

app.get('/traduzir', cors(), async function(request, response, next){
    let params = request.query

    const id = params.txt
    const linguagemA = params.linguagemA
    const linguagemT = params.linguagemT

    let traduzirTexto = require('./modulo/traducao.js')
    let traducao = await traduzirTexto.getTraduzirTexto(id, linguagemA, linguagemT)

    if(traducao){
        response.status(200)
        response.json(traducao)
        console.log(traducao)
    }else{
        response.status(404)
        response.json('ERRO:{ITEM NÃO ENCONTRADO}')
    }
})

app.listen('8080', function(){
    console.log('API funcionando!!!!')
})