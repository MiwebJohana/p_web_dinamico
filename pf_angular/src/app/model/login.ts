export class Login {

    idlog?: number;
    email: String;
    password: String;



    constructor(email: String, password: String) {
        this.email = email;
        this.password = password;
    }
}
