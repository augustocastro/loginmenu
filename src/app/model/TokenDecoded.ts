import { User } from "./User";

export interface TokenDecoded {

    iss: string;
    usuario: User;
    sub: string;
    iat: number;
    exp: number;
}