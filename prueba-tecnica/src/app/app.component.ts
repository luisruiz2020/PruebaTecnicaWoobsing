import { Component } from '@angular/core';
import { CrudService } from '../app/crud.service';
import { User } from '../assets/User';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'prueba-tecnica';

  userT= {
    name: '', 
    lastname: '',
    direction: '',
    email: '',
    phonenumber: '',
  }

  constructor(public crudService: CrudService){

  }

  createUser(){
    let tempUser = new User;
    tempUser.direction = this.userT.direction;
    tempUser.email = this.userT.direction;
    tempUser.lastname = this.userT.lastname;
    tempUser.name = this.userT.name;
    tempUser.phonenumber = this.userT.phonenumber;
    this.crudService.create(tempUser);
  }

  updateUser(){
    let tempUser = new User;
    tempUser = this.crudService.getByName(this.userT.name);
    if(tempUser != null){
      if(tempUser.name != this.userT.name){

      }
      if(tempUser.lastname != this.userT.lastname){
        
      }
      if(tempUser.email != this.userT.email){
        
      }
      if(tempUser.direction != this.userT.direction){
        
      }
      
      this.crudService.update(tempUser);
    }
  }

  getUser(){

  }

  deleteUser(){

  }
}
