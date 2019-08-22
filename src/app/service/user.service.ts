
import { Injectable } from '@angular/core';

import * as jwt_decode from 'jwt-decode';
import { Perfil } from '../model/Perfil';
import { TokenService } from './token.service';
import { TokenDecoded } from '../model/TokenDecoded';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    private perfis = new Array<Perfil>();

    constructor(private tokenSerive: TokenService) {
        if (tokenSerive.hasToken()) {
            this.decodeToken();
        }
    }

    setToken(token: string): void {
        this.tokenSerive.setToken(token);
        this.decodeToken();
    }

    private decodeToken(): void {
        const token: string = this.tokenSerive.getToken();
        const tokenDecoded: TokenDecoded = jwt_decode(token) as TokenDecoded;
        this.perfis = tokenDecoded.usuario.perfis;
    }

    hashPerfil(nomePerfil: string): boolean {
        return this.perfis.filter(perfil => perfil.nome === nomePerfil).length > 0 ? true : false;
    }
}