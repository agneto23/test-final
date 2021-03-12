const expect = require("chai").expect;
import {MessageService} from "../src/service/message-service"



describe("Message service test", function () {

    it("should be return a message", function (done) {
        const messageService = new MessageService();

        const name = "Juan Perez";

        const service = {message: "Hello Juan Perez your message will be send"}

        expect(messageService.greetings(name).name).to.equal(service.message);
        done();
    });

});
