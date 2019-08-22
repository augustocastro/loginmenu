
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
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
        const tokenDecode: TokenDecoded = jwt_decode(token) as TokenDecoded;
        this.perfis = tokenDecode.usuario.perfis;
    }

    hashRole(nomePerfil: string): boolean {
        return this.perfis.filter(perfil => perfil.nome === nomePerfil).length > 0 ? true : false;
    }
}