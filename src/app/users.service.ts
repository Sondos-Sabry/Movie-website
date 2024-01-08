import { Injectable } from '@angular/core';

@Injectable( )
export class UsersService {
frindes:string[]=['ali', 'ahmad', 'sayed']
welcome():void
{
    window.alert('Hello')
}
  constructor() { }
}
