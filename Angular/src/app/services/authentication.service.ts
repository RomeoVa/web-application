import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Empresa } from '../models/empresa';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<Empresa>;
    public currentUser: Observable<Empresa>;

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<Empresa>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): Empresa {
        return this.currentUserSubject.value;
    }

    login(rfc: string, contrasena: string) {
        return this.http.post<any>(`http://localhost:3000/empresas/login/`, {rfc, contrasena})
            .pipe(map(user => {
                // login successful if there's a jwt token in the response
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify({rfc:rfc}));
                    this.currentUserSubject.next(user);
                }

                return user;
            }));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }
}
