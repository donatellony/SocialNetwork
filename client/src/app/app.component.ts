import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})



export class AppComponent implements OnInit {
  title = 'The Social Network';
  users: User[];

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.getUsers();
  }


  private getUsers() {
    this.http.get<User[]>('https://localhost:5001/api/users')
      .subscribe(users => this.users = users,
        error => console.log(error));
  }
}

export interface User {
  id: number,
  userName: string
}
