import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { moveIn, fallIn } from '../shared/router.animation';
import { Observable } from 'rxjs';
import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { BackendService } from '../services/backend.service';

@Component({
    selector: 'app-student',
    templateUrl: './student.component.html',
    styleUrls: ['./student.component.css'],
    animations: [moveIn(), fallIn()],
    host: { '[@moveIn]': '' }
})
export class StudentComponent implements OnInit, OnDestroy {

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

    @ViewChild(MatPaginator, { static: false  }) paginator: MatPaginator;
    @ViewChild(MatSort, { static: false  }) sort: MatSort;
    displayedColumns = ['code', 'descr', '_id'];
    feeCDs;
    marksCDs;
    enrollmentCDs;
    // file upload
 /*   docId: string;
    fileName: string;
    showFileUpload: boolean = false;
    showDocument: boolean = false;
    docUrl: Observable<string | null>; */

    constructor(private _backendService: BackendService) { }

    ngOnInit() {
        this.toggleField = "searchMode";
        this.dataSource = new MatTableDataSource(this.members);
        this.getMarskData();
        this.getEnrollmentData();
        this.getFeeData();
    }

    toggle(filter?) {
        if (!filter) { filter = "searchMode" }
        else { filter = filter; }
        this.toggleField = filter;
        this.dataLoading = false;
    }

    getEnrollmentData() {
        this.dataLoading = true;
        return this.querySubscription = this._backendService.getEnrollment().subscribe((res) => {
            if (res["data"]["getEnrollmentCDs_Q"].code !== "") {
                this.enrollmentCDs = res["data"]["getEnrollmentCDS_Q"];
                this.error = false;
                this.errorMessage = "";
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

    getMarskData() {
        this.dataLoading = true;
        return this.querySubscription = this._backendService.getMarksCode().subscribe((res) => {
            if (res["data"]["getMarksCDs_Q"].code !== "") {
                this.marksCDs = res["data"]["getMarksCDs_Q"];
                this.error = false;
                this.errorMessage = "";
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
  
    getFeeData() {
        this.dataLoading = true;
        return this.querySubscription = this._backendService.getFeeCode().subscribe((res) => {
            if (res["data"]["getFeeCDs_Q"].code !== "") {
                this.feeCDs = res["data"]["getFeesCD_Q"];
                this.error = false;
                this.errorMessage = "";
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

    getData(filterAllDocs?, getOneDoc?) {
        this.dataLoading = true;
        return this.querySubscription = this._backendService.getStudent(filterAllDocs, getOneDoc).subscribe((res) => {
            if (res["data"]["getStudent_Q"].CODE !== "") {
                if (getOneDoc) {
                    this.data = res["data"]["getStudent_Q"][0];
                    this.toggle('editMode');
                } else {
                    this.dataSource = new MatTableDataSource(res["data"]["getStudent_Q"]);
                    this.dataSource.paginator = this.paginator;
                    this.dataSource.sort = this.sort;
                }
                this.error = false;
                this.errorMessage = "";
            } else {
                this.error = true;
                this.errorMessage = res["data"]["getStudent_Q"].message;
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
        this.querySubscription = this._backendService.setStudent(formData).subscribe((res) => {
            if (res["data"]["setStudent_M"].CODE !== "") {
                this.savedChanges = true;
                this.error = false;
                this.errorMessage = "";
            } else {
                this.error = true;
                this.errorMessage = res["data"]["setStudent_M"].message;
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
        this.querySubscription = this._backendService.setStudentDoc(formData).subscribe((res) => {
            if (res["data"]["setStudentDoc_M"].CODE !== "") {
                this.savedChanges = true;
                this.error = false;
                this.errorMessage = "";
            } else {
                this.error = true;
                this.errorMessage = res["data"]["setStudentDoc_M"].message;
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

    deleteDoc(docId) {
        if (confirm("Are you sure want to delete this record ?")) {
            this.querySubscription = this._backendService.delStudentDoc(docId).subscribe((res) => {
                //console.log("res"+JSON.stringify(res))
                if (!res["data"]["delStudentDoc_M"]) {
                    this.toggle('searchMode');
                    this.error = false;
                    this.errorMessage = "";
                } else {
                    this.error = true;
                    this.errorMessage = res["data"]["delStudentDoc_M"].message;
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