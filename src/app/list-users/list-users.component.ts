import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {DataServiceService} from "../data-service.service"


@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {

  users: any = []

  constructor(private httpClient: HttpClient,private dataService:DataServiceService) { }
  public getData() {
    return this.httpClient.get(`https://reqres.in/api/users?page=1`);
  }

  // https://medium.com/@nodexperts_88267/data-transfer-one-component-to-another-angular-7-c076272c78e1

  selected_user:number=0
  public showUserInfo(event){
    console.log(this.selected_user)
    this.dataService.setData(this.selected_user)
  }
 

  ngOnInit(): void {
    this.getData().subscribe(
      (response) => {                           //next() callback
        console.log('response received', response)
        try {
          let users = response["data"]
          let unsorted_emails=users.map(user=>user.email)
          let sorted_emails=users.map(user=>user.email).sort()
          let sorted_index=sorted_emails.sort().map(sorted_mail=>unsorted_emails.indexOf(sorted_mail))
          this.users=sorted_index.map(i=>users[i])
          console.log('sorted', this.users)
         
        } catch (error) {

        }
      },
      (error) => {                              //error() callback
        console.error('Request failed with error', error)
      },
      () => {                                   //complete() callback
        console.log('Request completed')      //This is actually not needed 
      })
  }

}
