import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {  Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: { id: number; username: string; } | undefined;


  constructor(private http: HttpClient, private  router: Router) { }

  addUser(user: { username: string; password: string; }) {
    return this.http.post('http://localhost:3000/users', user).subscribe();
  }

  login(user: { username: string; password: string; }) {
    return this.http.get('http://localhost:3000/users?username=' + user.username + '&password=' + user.password);
  }

  logout() {
    this.user = undefined;
    localStorage.removeItem('user');
  }

  saveUser() {
    localStorage.setItem('user', '' + this.user?.id);
  }

  getSavedUser() {
    return localStorage.getItem('user');
  }

  isUserConnected() {
    if (this.user) {
      this.saveUser();
      return true;
    } else if (this.getSavedUser()) {
      this.getSavedUserInfo().subscribe((user: any) => {
        this.user = user[0];
        return true;
      });
    }
    return false;
  }

  private getSavedUserInfo() {
    const user = this.getSavedUser();
    if (!user) {
      this.router.navigate(['/login']);
    }
    return this.http.get('http://localhost:3000/users?id=' + this.getSavedUser());
  }
}
