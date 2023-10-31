import express from "express";

const server = express();

//Local Middle
function middleCheckId(request, response, next){
    if(!request.query.id){
        return response.status(400).send('Essa operação solicita ID.');
    }else{
        return next();
    }
}

server.route('/users')
    .get((request, response) => {
        response.send(`Chamada HTTP get all`)
    }).post((request, response)=>{
        response.send(`Chamada HTTP post`)
    }).put(middleCheckId, (request, response)=>{ //Aqui Middle está intermidiando a chamada e execução da functionResponse
        let id = request.query.id;
        response.send(`Chamada HTTP put ${id}`)
    }).delete(middleCheckId, (request, response)=>{//Aqui Middle está intermidiando a chamada e execução da functionResponse
        let id = request.query.id;
        response.send(`Chamada HTTP delete ${id}`)
    })

server.listen(3333, () => {
    console.log('Server Listen in port 3333');
});