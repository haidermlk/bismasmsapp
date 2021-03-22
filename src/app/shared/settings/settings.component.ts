import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { moveIn, fallIn } from '../router.animation';
import { BackendService } from '../../services/backend.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  animations: [moveIn(), fallIn()],
  host: { '[@moveIn]': '' }
})

export class SettingsComponent implements OnInit {
  state: string = '';
  savedChanges = false;
  error: boolean = false;
  errorMessage: String = "";
  dataLoading: boolean = false;
  data: Observable<any>;
  private querySubscription;
  roles: any[] = [
    { value: 'student', viewValue: 'Student' },
    { value: 'parent', viewValue: 'Parent' },
    { value: 'staff', viewValue: 'Staff' },
    { value: 'admin', viewValue: 'Admin' },
    { value: 'teacher', viewValue: 'Teacher' }
  ];

  constructor(private _backendService: BackendService, private router: Router) {
  }

  ngOnInit() {
    if(!localStorage.getItem('token')){
        this.getUser();
      }
  }   

  getUser() {
    if(!localStorage.getItem('token')){
      this.error = true;
      this.errorMessage = "Please wait for some time to re-load your data from Server.";
    } else {
      this.error = false;
      this.errorMessage = "";
    }
    this.dataLoading = true;
    
    this.querySubscription = this._backendService.getUser().subscribe((res) => {

      if (res["data"]["getUser_Q"].email !== "") {
        this.data = res["data"]["getUser_Q"];
        this.error = false;
        this.errorMessage = "";
      } else {
        this.error = true;
        this.errorMessage = res["data"]["getUser_Q"].message;
      }
    },
      (error) => {
        this.error = true;
        this.errorMessage = error.message;
        this.dataLoading = false;
      },
      () => {
        this.dataLoading = false;
      });
  }

  routeLoginPage() {
    window.localStorage.removeItem("token");
    this.savedChanges = false;
    this.router.navigate(['/login']);
  }

  onSubmit(formData) {
    this.dataLoading = true;
    this.querySubscription = this._backendService.updateUser(formData).subscribe((res) => {
      if (res["data"]["updateUser_M"].email !== "") {
        this.savedChanges = true;
        this.error = false;
        this.errorMessage = "";
      } else {
        this.error = true;
        this.errorMessage = res["data"]["updateUser_M"].message;
      }
    },
      (error) => {
        this.error = true;
        this.errorMessage = error.message;
        this.dataLoading = false;
      },
      () => {
        this.dataLoading = false;
      });
  }

  ngOnDestroy() {
    if (this.querySubscription) {
      this.querySubscription.unsubscribe();
    }

    }
}