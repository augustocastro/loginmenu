
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

    userHasPermission(permissoes: string[]): boolean {
        let count = 0;

        permissoes.forEach(permissao => {
            count += (this.perfis.filter(perfil => perfil.nome === permissao).length > 0 ? 1 : 0);
        });

        return count > 0 ? true : permissoes.length === 0 ? true : false;
    }
}