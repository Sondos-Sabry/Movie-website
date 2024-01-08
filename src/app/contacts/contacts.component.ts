import { Component } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent {

  contactsFriends:string [] = [];
  constructor(x:UsersService)
  {
   //  let x = new UsersService();
   // this.contactsFriends = x.frindes;
  }
}
