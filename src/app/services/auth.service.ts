import { Observable, of, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/User';
import { HttpClient, HttpHeaders } from "@angular/common/http";



@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private url = "http://localhost:5000/auth";

 
  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  httpOptions: { headers: HttpHeaders } = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
  };


  private isAuthenticated = false;
  private userRole: string | null = null;




  async register(user:User): Promise<any> {

    // const url =  "http://localhost:5000/auth/register";
    // const role = this.getUserRole(email)
    // console.log(role);

    try {
   
      const response =this.http.post<User>(`${this.url}/register`, user, this.httpOptions)
      return response;
    } 
    catch (error) {
      throw error;
    }
   
    
  }

  setToken(token: string): void {
    localStorage.setItem('token', token);
  }
  setRole(role: string): void {
    localStorage.setItem('role', role)
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isLoggedIn() {

    return this.getToken() !== null;
    
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }

  login({ email, password }: any): Observable<any> {
    if (email === 'admin@tut.ac.za' && password === 'admin123')  {

      this.setToken('abcdefghijklmnopqrstuvwxyz');
      this.setRole('admin');
 
      this.router.navigate(['/admin']);
      
      return of({ name: 'Gus Admim', email: 'admin@tut.ac.za' });
    }
    else if (email === 'alumni@tut4life.ac.za' && password === 'alumni123')  {
      this.setToken('abcdefghijklmnopqrstuvwxyz');
      this.router.navigate(['/alumni']);
      this.setRole('alumni');

      return of({ name: 'Gus Alumni', email: 'alumni@tut4life.ac.za' });
    }
    
   this.isAuthenticated = false;
    return throwError(new Error('Failed to login'));
  }

  
  isAuthenticatedUser(): boolean {
    return this.isAuthenticated;
  }
 
  getUserRole(email: any): any {
   

    const domain = email.split('@')[1]
    if(domain === '@tut4life.ac.za' ){
      const role = 'Alumni';
      return this.userRole = role;

    }
    else if(domain === '@tut.ac.za'){
      const role = 'Admin';
      return this.userRole = role;

    } 
  }

 

}