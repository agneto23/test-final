const jwt = require('jsonwebtoken');
const dotenv = require("dotenv");

dotenv.config();

export class TokenService {

    constructor() {
    }

    public generateAccessToken(token) {
        return {token}
    }

}
