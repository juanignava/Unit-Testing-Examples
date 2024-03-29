import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  users: object[] | undefined;

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.usersService.all().subscribe((res): void => {
      this.users = res;
    });
  }

}
