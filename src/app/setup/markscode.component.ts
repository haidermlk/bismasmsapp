import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { moveIn, fallIn } from '../shared/router.animation';
import { Observable } from 'rxjs';
import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { BackendService } from '../services/backend.service';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-markscode',
  templateUrl: './markscode.component.html',
  styleUrls: ['./markscode.component.css'],
  animations: [moveIn(), fallIn()],
  host: { '[@moveIn]': '' }
})
export class MarkscodeComponent implements OnInit, OnDestroy {

  members: any[];
  dataSource: MatTableDataSource<any>;
  myDocData;
  data;
  toggleField: string;
  state: string = '';
  savedChanges = false;
  error: boolean = false;
  errorMessage: String = "";
  dataLoading: boolean = false;
  private querySubscription;

  pCDs = ['Paid Amount', 'Discount'];
  freqCDs = ['Bi-Weekly', 'Monthly', 'Yearly', 'One-time', 'OTHER'];
  total_amount = 0;
  addDataForm: FormGroup;
  editDataForm: FormGroup;

  @ViewChild(MatPaginator, { static: false  }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false  }) sort: MatSort;
  displayedColumns = ['code', 'descr', '_id'];

  constructor(private _backendService: BackendService, private _fb: FormBuilder) { }

  ngOnInit() {
    this.toggleField = "searchMode";
    this.error = false;
    this.errorMessage = "";
    this.dataSource = new MatTableDataSource(this.members);
    this.addDataForm = this._fb.group({
      code: ['', Validators.required],
      descr: ['', Validators.required],
//      bfees: ['', Validators.required],
      mline: this._fb.array([this._fb.group({
        subject: ['', Validators.required],
        minmarks: ['', Validators.required],
        maxmarks: ['', Validators.required],
        marks: ['', [Validators.pattern("^[0-9]*$")]]
      })]),
      gmarks: ''
    });
    this.editDataForm = this._fb.group({
      _id: ['', Validators.required],
      code: ['', Validators.required],
      descr: ['', Validators.required],
//      bfees: ['', Validators.required],
      mline: this._fb.array([]),
      gmarks: ''
    });
  }

  LINES(formName) {
    return this[formName].get('mline') as FormArray;
  }
  addLINES(formName) {
    this.LINES(formName).push(this._fb.group({
      subject: ['', Validators.required],
      minmarks: ['', Validators.required],
      maxmarks: ['', Validators.required],
      marks: ['', [Validators.pattern("^[0-9]*$")]]

    }));
    this.calculateTotal(formName);
  }
  deleteLINES(index, formName) {
    this.LINES(formName).removeAt(index);
    this.calculateTotal(formName);
  }
  calculateTotal(formName) {
    this.total_amount = 0;
    for (let i = 0; i <= this[formName].value.mline.length; i++) {
      console.log(this[formName].value.mline[i]);
      if (this[formName].value.mline[i]) {
  //          if (this[formName].value.line[i].ptype == 'Paid Amount') {
                this.total_amount += +this[formName].value.mline[i].marks;
  //          } else {
  //              this.total_amount -= +this[formName].value.line[i].amount;
  //          }
        }
    }
//    this.total_amount += parseFloat(this[formName].controls['bfees'].value);
    this[formName].controls['gmarks'].setValue(this.total_amount.toFixed(2));
}

  toggle(filter?) {
    if (!filter) { filter = "searchMode" }
    else { filter = filter; }
    this.toggleField = filter;
    this.dataLoading = false;
  }

  getData(filterAllDocs?, getOneDoc?) {
    this.dataLoading = true;
    return this.querySubscription = this._backendService.getMarksCode(filterAllDocs, getOneDoc).subscribe((res) => {
        if (res["data"]["getMarksCode_Q"].code !== "") {
            if (getOneDoc) {
                this.data = res["data"]["getMarksCode_Q"][0];
                this.editDataForm = this._fb.group({
                    _id: ['', Validators.required],
                    code: ['', Validators.required],
                    descr: ['', Validators.required],
//                    bfees: ['', Validators.required],
                    mline: this._fb.array([]
                    ),
                    gmarks: ''
                });
                this.editDataForm.patchValue(this.data);

                for (let i = 0; i < this.data["mline"].length; i++) {
                    this.LINES('editDataForm').push(this._fb.group(this.data["mline"][i]));
                }
                this.calculateTotal(('editDataForm'));
                this.toggle('editMode');
            } else {
                this.dataSource = new MatTableDataSource(res["data"]["getMarksCode_Q"]);
                this.dataSource.paginator = this.paginator;
                this.dataSource.sort = this.sort;
            }
            this.error = false;
            this.errorMessage = "";
        } else {
            this.error = true;
            this.errorMessage = res["data"]["getMarksCode_Q"].message;
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

setData(formData) {
    this.dataLoading = true;
    this.querySubscription = this._backendService.setMarksCode(formData).subscribe((res) => {
        if (res["data"]["setMarksCode_M"].code !== "") {
            this.savedChanges = true;
            this.error = false;
            this.errorMessage = "";
        } else {
            this.error = true;
            this.errorMessage = res["data"]["setMarksCode_M"].message;
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

updateData(formData) {
    this.dataLoading = true;
    this.querySubscription = this._backendService.setMarksCodeDoc(formData).subscribe((res) => {
        if (res["data"]["setMarksCodeDoc_M"].code !== "") {
            this.savedChanges = true;
            this.error = false;
            this.errorMessage = "";
        } else {
            this.error = true;
            this.errorMessage = res["data"]["setMarksCodeDoc_M"].message;
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

getDoc(docId) {
    this.getData("", docId);
}

deleteDoc(docId) {
    if (confirm("Are you sure want to delete this record ?")) {
        this.querySubscription = this._backendService.delMarksCodeDoc(docId).subscribe((res) => {
            //console.log("res"+JSON.stringify(res))
            if (!res["data"]["delMarksCodeDoc_M"]) {
                this.toggle('searchMode');
                this.error = false;
                this.errorMessage = "";
            } else {
                this.error = true;
                this.errorMessage = res["data"]["delMarksCodeDoc_M"].message;
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
}

  //mat table paginator and filter functions
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  ngOnDestroy() {
    // this is not needed when observable is used, in this case, we are registering user on subscription
    if (this.querySubscription) {
      this.querySubscription.unsubscribe();
    }
  }
}