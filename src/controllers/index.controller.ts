import { Controller, Get, Route, Post, Body, Security } from 'tsoa';
import { MessageService } from '../service/message-service'
import {MessageVO} from "../vo/message";


@Route('')
export class IndexController extends Controller {

    private messageService;

    constructor() {
        super();
        this.messageService = new MessageService();
    }

    @Get('')
    public async index() {
        return { msg: 'Hello World!' };
    }

    @Post('DevOps')
    public async create(@Body() request: MessageVO) {
        return this.messageService.greetings(request.to);
    }


}
