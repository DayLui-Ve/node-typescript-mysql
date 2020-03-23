import express = require('express')
import path = require('path')

export default class Server{

    public app: express.Application
    public port: Number

    constructor( puerto:Number ){

        this.port = puerto
        this.app = express()

    }

    static init (puerto:Number){
        return new Server(puerto)
    }

    private publicFolder(){
        const publicPath = path.resolve(__dirname, '../public');
        this.app.use( express.static(publicPath) )
    }

    start(callback: () => void){

        this.app.listen(this.port, callback)
        this.publicFolder()

    }

}