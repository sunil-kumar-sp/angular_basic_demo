import { Component, OnInit } from '@angular/core';
import { DataServiceService } from "../data-service.service"
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {

  selected_user: number = -1
  user_info: any = {}
  table_headers:string[] = []
  callback = (data) => {
    this.selected_user = data
    this.process_data(data)
  }


  constructor(private httpClient: HttpClient, private dataService: DataServiceService) {
    this.dataService.callback = this.callback

  }


  public getData(id) {
    return this.httpClient.get(`https://reqres.in/api/users/` + id);
  }

  process_data = (id) => {
    this.getData(id).subscribe(
      (response) => {                           //next() callback
        console.log('response received', response)
     
        try {
          this.user_info=response["data"]
          this.table_headers=Object.keys(this.user_info)
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






  ngOnInit(): void {
  }

}
