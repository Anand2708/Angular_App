export interface ILoginModel {
    UserName: string;
    Password: string;
}


export class LoginModel implements ILoginModel {
    constructor(public UserName: string,
        public Password: string
    ) { }
}