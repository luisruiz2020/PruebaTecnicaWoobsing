import { Injectable } from '@angular/core';
import { User } from '../assets/User';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor() { }

  delete(user: User){
    return null;
  }

  create(user: User){
    return null;
  }

  update(user: User){
    return null;
  }

  getByName(nameUser: string){
    return null;
  }
}
