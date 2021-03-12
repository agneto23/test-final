import { Controller, Get, Route, Post, Body, Security } from 'tsoa';

@Route('')
export class IndexController extends Controller {


    constructor() {
        super();
    }

    @Get('')
    public async index() {
        return { msg: 'Hello World!' };
    }


}
