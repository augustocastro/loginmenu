import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";

import { Login } from "../model/Login";
import { Token } from "../model/Token";

const API = 'http://infobtcbr.com.br/backend';

@Injectable({
    providedIn: 'root'
})
export class LoginService {

    constructor(private httpClient: HttpClient) {
    }

    login(login: Login): Observable<Token> {
        let headers = new HttpHeaders();
        headers = headers.set('Content-Type', 'application/json; charset=utf-8');
        
        return this.httpClient.post<Token>(API + '/auth', JSON.stringify(login), { headers: headers });
    }
}