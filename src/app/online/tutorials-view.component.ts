import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { moveIn, fallIn } from '../shared/router.animation';
import { Observable } from 'rxjs';
import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { BackendService } from '../services/backend.service';

@Component({
  selector: 'app-tutorials-view',
  templateUrl: './tutorials-view.component.html',
  styleUrls: ['./tutorials-view.component.css'],
      animations: [moveIn(), fallIn()],
      host: { '[@moveIn]': '' }
})
export class TutorialsViewComponent implements OnInit, OnDestroy {

    members: any[];
    dataSource: MatTableDataSource<any>;
    myDocData;
    data$;
    toggleField: string;
    state: string = '';
    savedChanges = false;
    error: boolean = false;
    errorMessage: String = "";
    dataLoading: boolean = false;
    private querySubscription;
    showFileUpload: boolean = false;
    showDocument: boolean = false;
    docId: string;
    docUrl: Observable<string | null>;
    fileName: string;

    @ViewChild(MatPaginator, { static: false  }) paginator: MatPaginator;
    @ViewChild(MatSort, { static: false  }) sort: MatSort;
    displayedColumns = ['code', 'descr', '_id'];
    enrollmentCDs$;

    constructor(private _backendService: BackendService) { }

    ngOnInit() {
        this.toggleField = "resMode";
        this.dataSource = new MatTableDataSource(this.members);
        this.getData();
    }

    toggle(filter?) {
        if (!filter) { filter = "searchMode" }
        else { filter = filter; }
        this.toggleField = filter;
        this.dataLoading = false;
    }

    getData(formData?) {
    /*
        this.dataLoading = true;
        //this.querySubscription = this._backendService.getDocs('TUTORIALS',formData).subscribe((res) => {
          this.querySubscription = this._backendService.getUserStudentTutsDoc('TUTORIALS').subscribe((res) => {
            this.dataSource = new MatTableDataSource(res);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
        },
            (error) => {
                this.error = true;
                this.errorMessage = error.message;
                this.dataLoading = false;
            },
            () => {
                this.dataLoading = false;
            });
    */
        }

    getDoc(docId) {
        this.docId = docId; // this is required to pass at file upload directive
        this.dataLoading = true;
        this.data$ = this._backendService.getTutorial('TUTORIALS',docId);
        this.toggle('editMode');
        this.dataLoading = false;
    }
 /*   
    getDocUrl(docUrl){
        this.fileName = docUrl;
        this.docUrl = this._backendService.getFileDownloadUrl(docUrl);
    }
*/
 
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