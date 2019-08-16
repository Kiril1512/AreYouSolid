import { Injectable } from "@angular/core";
import * as firebase from 'firebase';

@Injectable()
export class AuthService {
    constructor() {}

    //This methods returns if user is authenticated or not
    public isAuthenticated(): boolean {
        const user = firebase.auth().currentUser;

        if (user) {
            return true;
        }
        else
        {
            return false;
        }
    }
}