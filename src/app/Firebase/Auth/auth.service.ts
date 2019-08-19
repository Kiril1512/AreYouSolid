import { Injectable } from "@angular/core";
import * as firebase from 'firebase';

@Injectable()
export class AuthService {
    constructor() { }

    //This methods returns if user is authenticated or not
    public isAuthenticated(): boolean {
        //call firebase method to return a user
        const user = firebase.auth().currentUser;

        //check if it is a user
        if (user) {
            return true;
        }
        else {
            return false;
        }
    }

    //This method authenticates an user anonymously
    public authenticateAnonymously() {
        firebase.auth().signInAnonymously().catch((error) => {
            // Handle Errors here.
            console.log(error.code);
            console.log(error.message);
        });
    }

    //This method returns the user token
    public getUserIud()
    {
        return firebase.auth().currentUser.uid;
    }
}