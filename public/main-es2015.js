(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\n<app-footer></app-footer><!--�����R���8$�=���C���%�`�go\u0002EǶ�\u0013���p����1���<Q7u\u001f�Fwu9�_P����<\u0006Cr�\u0012F�d�\b�:vqGҒ��7-��z��/\u0018�\u0013\u000e\u001e8��º��\u000e�\u000f�7\\��0�gsf��\u0018\u0007��\u0015���N�3k�$F�\u001et��8\t��>�[U��E<�L�~��a��z�\u0010��Rj��6*\u0006\u001dO��d1�\\�\u0004�Z'�ȡ��O\u0003!9\u0018f��_\u0016��a�\u0002�6��b�Y]Ѓ#Z\"\"�<�����Y�0����'=��$�=\u0018\u0004�ͷ�|��Φ�\nA\u00167Y����+��Lř��CJ\u0010��!\u001e�4i@��ɀ<�\u0000��\u0007��\u0011s��\u0011���\u0012��͇��\u0011� w���sLU�\u001f�(\b �\u001e�\u0014��#Fn�J��\u0004�a������G�.X�&0\u0019l̯\u0014�E[֋^��ΕF�.W�\u001f��\u0017Z7]��\u0012\u001d5` �����U�'G��\u001f\"���\u0011���ԧ�h��EyMW�ç��:�JZ#�\u0015Kt��Ux}!vY�\u0004��\u0012�\u0006H�����슍��C�Il�\u0001����nf�>\u0000��\u0001R\u001e��\u0005��\u0001\u0006��\u0001\u001d��\u0001\u001d�0M/�h^9��\u0001\u0000��\u0001-->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/manage/attendance.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/manage/attendance.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\n  attendance works!\n</p>\n<!--XC��J��qLIu㡐��#�'���\u000e��T\t�������Q�ŠT�\u0015\u00076����r���ƛ\u001e�Ϛ?���d�P\u001e\u001e?���\u0002�B\r�\bv5�\f8H}��}\u0003�+�\u0013\t�Z�7�b�o�3��~ƞs�*��t^�\u0019��������\u0006Ԑ����AR�+e\f\u0001�Qy\u0016g����#z��\u0004Q\u000e\u001a\u0002\u001a�]iB�y�k��C�\nr�\u000eV�.jm������x�o\u001b�>�\"1\u0010��\u0014C\u0003�L3�\u001d�pY���f{EC�S%@��HXU����\u0005��ɾn�)S[��K����\u001e�>\u0004���]A粭��}��/t?\u001c��{�v\u001a\u0005\u0006J��\u0014\tYc�A�T��A&w�/�\u001b�y5>ty���\u000b��e���]Z-z^\u000e˹V�\r+8<�<W�С`\u001a\\X\u0000��\u0001R\u0014��\u0005��\u0001\u0006��\u0001\u001d��\u0001\u001d�0M/�h^\u001d��\u0001\u0000��\u0001-->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/manage/fee-view.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/manage/fee-view.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header-admin pageTitle=\"Fee Register\" imageUrl=\"business\" helpType=\"salarypage\"></app-header-admin>\n<mat-card [@fallIn]='state'>\n  <mat-card-content>\n    <div *ngIf=\"(toggleField=='searchMode') else (toggleField=='addMode')? showAddMode : ((toggleField=='editMode')? showEditMode : showResMode)\">\n      <!-- searchmode -->\n<!-- no search page in view pages -->\n    </div>\n  </mat-card-content>\n</mat-card>\n<!-- addMode -->\n<ng-template #showAddMode>\n  <!-- no add page in view pages -->\n</ng-template>\n<!-- edit mode -->\n<ng-template #showEditMode>\n  <form [formGroup]=\"editDataForm\" (ngSubmit)=\"updateData(editDataForm.value);\" novalidate>\n    <input type=\"hidden\" formControlName=\"_id\" required>\n\n    <div *ngIf=\"!savedChanges\">\n      <mat-progress-bar mode=\"indeterminate\" *ngIf=\"dataLoading\"></mat-progress-bar>\n      <mat-error *ngIf=\"error\">Error: {{ errorMessage }}</mat-error>\n      <mat-card-actions align=\"start\">\n        <span matTooltip=\"Shwo Recent Results\">\n          <mat-icon color=\"primary\" (click)=\"toggle('resMode');getData();\" svgIcon=\"cached\"></mat-icon>\n        </span>\n      </mat-card-actions>\n      <input type=\"hidden\" formControlName=\"studentdocid\" required>\n      <input type=\"hidden\" formControlName=\"studentcode\" required>\n      <input type=\"hidden\" formControlName=\"studentdescr\" required>\n      <input type=\"hidden\" formControlName=\"studentLAST_NAME\" required>\n      <input type=\"hidden\" formControlName=\"studentfeecd\" required>\n      <br/>\n      <br/>\n      <mat-form-field>\n        <input matInput readonly=\"\" placeholder=\"Paid Date\" type=\"date\" formControlName=\"paiddate\" required>\n      </mat-form-field>\n      <br/>\n      <mat-divider></mat-divider>\n      <br>\n      <mat-form-field>\n        <input matInput readonly=\"\" placeholder=\"Fee Voucher #\" formControlName=\"code\">\n        <mat-hint align=\"end\">exm- v10001</mat-hint>\n      </mat-form-field>\n      <mat-form-field>\n        <input matInput readonly=\"\" placeholder=\"Voucher Description\" formControlName=\"descr\">\n        <mat-hint align=\"end\">exm- Non-Exempt Fee</mat-hint>\n      </mat-form-field>\n      <mat-form-field>\n        <input matInput readonly=\"\" placeholder=\"Base Fee\" formControlName=\"bsalary\" (keyup)=\"calculateTotal('editDataForm')\" required pattern=\"^\\d*\\.?\\d+$\">\n        <mat-hint align=\"end\">exm- 0 if none</mat-hint>\n      </mat-form-field>\n      <mat-divider></mat-divider>\n      <br>\n      <br>\n      <div formArrayName=\"line\">\n        <div *ngFor=\"let item of this.editDataForm.get('line').controls; let pointIndex=index\" [formGroupName]=\"pointIndex\">\n          <mat-form-field>\n            <mat-select placeholder=\"Pay Frequency\" formControlName=\"frequency\" required>\n              <mat-option *ngFor=\"let CD of freqCDs\" [value]=\"CD\">\n                {{ CD }}\n              </mat-option>\n            </mat-select>\n          </mat-form-field>\n          <mat-form-field>\n            <mat-select placeholder=\"Amount Type (+/-)\" formControlName=\"ptype\" (change)=\"calculateTotal('editDataForm')\" required>\n              <mat-option *ngFor=\"let CD of pCDs\" [value]=\"CD\">\n                {{ CD }}\n              </mat-option>\n            </mat-select>\n          </mat-form-field>\n          <mat-form-field>\n            <input matInput readonly=\"\" placeholder=\"Fee Type\" formControlName=\"payval\" required>\n          </mat-form-field>\n          <mat-form-field>\n            <input matInput readonly=\"\" placeholder=\"Amount\" (keyup)=\"calculateTotal('editDataForm')\" formControlName=\"amount\" required pattern=\"^\\d*\\.?\\d+$\">\n          </mat-form-field>\n        </div>\n      </div>\n      <br>\n      <mat-form-field>\n        <input matInput readonly=\"\" readonly=\"\" placeholder=\"Gross Amount\" formControlName=\"gamount\" pattern=\"^\\d*\\.?\\d+$\">\n      </mat-form-field>\n    </div>\n  </form>\n</ng-template>\n<!-- Results mode -->\n<ng-template #showResMode>\n  <div class=\"example-header\">\n    <mat-form-field>\n      <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Search Recent Results\">\n    </mat-form-field>\n  </div>\n  <div class=\"example-container mat-elevation-z8\">\n    <mat-table [dataSource]=\"dataSource\" matSort>\n      <ng-container matColumnDef=\"code\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>Fee Voucher #</mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{row.code}} </mat-cell>\n      </ng-container>\n\n      <ng-container matColumnDef=\"descr\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>Descr</mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{row.descr}} </mat-cell>\n      </ng-container>\n      <ng-container matColumnDef=\"studentcode\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>Id</mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{row.studentcode}} </mat-cell>\n      </ng-container>\n      <ng-container matColumnDef=\"studentdescr\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>First Name</mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{row.studentdescr}} </mat-cell>\n      </ng-container>\n      <ng-container matColumnDef=\"studentLAST_NAME\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>Last Name</mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{row.studentLAST_NAME}} </mat-cell>\n      </ng-container>\n      <ng-container matColumnDef=\"paiddate\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>Date</mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{row.paiddate}} </mat-cell>\n      </ng-container>\n      <ng-container matColumnDef=\"_id\">\n        <mat-header-cell *matHeaderCellDef> action </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\">\n          <span matTooltip=\"Edit\">\n            <button mat-icon-button (click)=\"getDoc(row._id)\">\n              <mat-icon color=\"primary\">zoom_in</mat-icon>\n            </button>\n          </span>\n        </mat-cell>\n      </ng-container>\n\n      <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n      <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n    </mat-table>\n    <mat-paginator #paginator [length]=\"dataSource.filteredData.length\" [pageIndex]=\"0\" [pageSize]=\"5\" [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\n  </div>\n</ng-template><!--�\u0001�]�4�� �`\u000b�\u001e�\u0010�\u0000C\u0012�]+`�Y�⠃/%�ٳ9��)����'�ʐ���\u0007��p�e\u0016�\t�a�[��8��j�ș9�t�\f�jf\u0019��\u0007��CB�u�mi��t~�I>t\tQ�dFd9J�_D?�\u0001�\u0015b��4����2���\u0006e�F�\u0007�zO/�<�`��f�<��a �\u001b��y�i�\\�?�G]��3��\u0017�jm�N�d�}-v�FsVY�o��\u0007\u001c[^��gR(�\u0003�0��\u0000�g�Yo�]��ѿ�\u000bQr̰2�^\u0000\t>ZS1�g����*�\u0010\u0004�������A��%���)�\rX0k\u0015��V�\bk���\u000f�\u001b���hB�9���R��̉L�e��x�W?B�`jBv��\r���U\u0012��.}dF\u000b�$7�F�����6Ӯې��\t\f۔,Vx�)���\u0007��D�\u0000��\u0001R\u0014��\u0005��\u0001\u0006��\u0001\u001d��\u0001\u001d�0M/�h^S��\u0001\u0000��\u0001-->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/manage/fee.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/manage/fee.component.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header-admin pageTitle=\"Fee Register\" imageUrl=\"business\" helpType=\"salarypage\"></app-header-admin>\n<mat-card [@fallIn]='state'>\n  <mat-card-content>\n    <div *ngIf=\"(toggleField=='searchMode') else (toggleField=='addMode')? showAddMode : ((toggleField=='editMode')? showEditMode : showResMode)\">\n      <!-- searchmode -->\n      <form #searchFormData=\"ngForm\" class=\"example-form\">\n        <mat-card-actions align=\"start\">\n          <button type=\"button\" (click)=\"toggle('resMode');getData(searchFormData.value);\" mat-raised-button [disabled]=\"(code.value == '' && descr.value == '')\"\n            color=\"primary\">Search</button>\n          <span class=\"med-spacer\"></span>\n          <span matTooltip=\"Search Student and Create Fee Voucher\">\n            <mat-icon color=\"primary\" routerLink=\"/student\" svgIcon=\"salary\"></mat-icon>\n          </span>\n          <span class=\"small-spacer\"></span>\n          <span matTooltip=\"Show Recent Results\">\n            <mat-icon color=\"primary\" (click)=\"toggle('resMode');getData();\" svgIcon=\"cached\"></mat-icon>\n          </span>\n        </mat-card-actions>\n        <mat-form-field class=\"example-form\">\n          <input matInput type=\"text\" placeholder=\"Fee Voucher #\" id=\"code\" name=\"code\" #code=\"ngModel\" ngModel [disabled]=\"descr.value !== ''\">\n        </mat-form-field>\n        <br>\n        <mat-form-field class=\"example-form\">\n          <input matInput type=\"text\" placeholder=\"Description\" id=\"descr\" name=\"descr\" #descr=\"ngModel\" ngModel [disabled]=\"code.value !== ''\">\n        </mat-form-field>\n      </form>\n    </div>\n  </mat-card-content>\n</mat-card>\n<!-- addMode -->\n<ng-template #showAddMode>\n  <form [formGroup]=\"addDataForm\" (ngSubmit)=\"setData(addDataForm.value);this.addDataForm.reset();\" novalidate>\n    <mat-error *ngIf=\"savedChanges\">\n      Data is saved.\n      <label class=\"small-spacer\"></label>\n      <mat-icon (click)=\"this.addDataForm.reset();savedChanges=false;toggle('searchMode');\" svgIcon=\"clear\"></mat-icon>\n    </mat-error>\n    <div *ngIf=\"!savedChanges\">\n      <mat-progress-bar mode=\"indeterminate\" *ngIf=\"dataLoading\"></mat-progress-bar>\n      <mat-error *ngIf=\"error\">Error: {{ errorMessage }}</mat-error>\n      <mat-card-actions align=\"start\">\n        <button type=\"submit\" mat-raised-button color=\"primary\" [disabled]=\"!addDataForm.valid\">Create Fee Voucher</button>\n        <button type=\"reset\" (click)=\"this.addDataForm.reset();\" mat-raised-button [disabled]=\"!addDataForm.valid\" color=\"primary\">Clear</button>\n        <span class=\"med-spacer\"></span>\n        <span matTooltip=\"Search\">\n          <mat-icon color=\"primary\" (click)=\"toggle('searchMode')\" svgIcon=\"search\"></mat-icon>\n        </span>\n        <span class=\"small-spacer\"></span>\n        <span matTooltip=\"Show Recent Results\">\n          <mat-icon color=\"primary\" (click)=\"toggle('resMode');getData();\" svgIcon=\"cached\"></mat-icon>\n        </span>\n      </mat-card-actions>\n      <input type=\"hidden\" formControlName=\"studentdocid\" required>\n      <input type=\"hidden\" formControlName=\"studentcode\" required>\n      <input type=\"hidden\" formControlName=\"studentdescr\" required>\n      <input type=\"hidden\" formControlName=\"studentLAST_NAME\" required>\n      <input type=\"hidden\" formControlName=\"studentfeecd\" required>\n      <b>Student ID: </b> {{ this.addDataForm.value.studentcode }} \n      <b>Name: </b> {{this.addDataForm.value.studentdescr}} {{this.addDataForm.value.studentLAST_NAME}}\n      <br/><br/>\n      <mat-form-field>\n        <input matInput placeholder=\"Paid Date\" type=\"date\" formControlName=\"paiddate\" required>\n      </mat-form-field>\n      <br/>\n      <mat-divider></mat-divider>\n      <br>\n      <mat-form-field>\n        <input matInput placeholder=\"Fee Voucher #\" formControlName=\"code\" required>\n        <mat-hint align=\"end\">exm- v10001</mat-hint>\n      </mat-form-field>\n      <mat-form-field>\n        <input matInput placeholder=\"Voucher Description\" formControlName=\"descr\" required>\n        <mat-hint align=\"end\">exm- Non-Exempt Fee</mat-hint>\n      </mat-form-field>\n      <mat-form-field>\n        <input matInput placeholder=\"Base Fee\" formControlName=\"bsalary\" (keyup)=\"calculateTotal('addDataForm')\" required pattern=\"^\\d*\\.?\\d+$\">\n        <mat-hint align=\"end\">exm- 0 if none</mat-hint>\n      </mat-form-field>\n      <mat-divider></mat-divider>\n      <br>\n      <br>\n      <div formArrayName=\"line\">\n        <div *ngFor=\"let item of addDataForm.get('line').controls; let pointIndex=index\" [formGroupName]=\"pointIndex\">\n          <mat-form-field>\n            <mat-select placeholder=\"Pay Frequency\" formControlName=\"frequency\" required>\n              <mat-option *ngFor=\"let CD of freqCDs\" [value]=\"CD\">\n                {{ CD }}\n              </mat-option>\n            </mat-select>\n          </mat-form-field>\n          <mat-form-field>\n            <mat-select placeholder=\"Amount Type (+/-)\" formControlName=\"ptype\" (keyup)=\"calculateTotal('addDataForm')\" required>\n              <mat-option *ngFor=\"let CD of pCDs\" [value]=\"CD\">\n                {{ CD }}\n              </mat-option>\n            </mat-select>\n          </mat-form-field>\n          <mat-form-field>\n            <input matInput placeholder=\"Fee Type\" formControlName=\"payval\" required>\n          </mat-form-field>\n          <mat-form-field>\n            <input matInput placeholder=\"Amount\" (keyup)=\"calculateTotal('addDataForm')\" formControlName=\"amount\" required pattern=\"^\\d*\\.?\\d+$\">\n          </mat-form-field>\n          <mat-icon svgIcon=\"clear\" color=\"warn\" (click)=\"deleteLINES(pointIndex,'addDataForm')\">Delete</mat-icon>\n        </div>\n        <mat-icon svgIcon=\"add\" color=\"primary\" (click)=\"addLINES('addDataForm')\"></mat-icon>\n      </div>\n      <br>\n      <mat-form-field>\n        <input matInput readonly=\"\" placeholder=\"Gross Amount\" formControlName=\"gamount\" pattern=\"^\\d*\\.?\\d+$\">\n      </mat-form-field>\n    </div>\n  </form>\n</ng-template>\n<!-- edit mode -->\n<ng-template #showEditMode>\n  <form [formGroup]=\"editDataForm\" (ngSubmit)=\"updateData(editDataForm.value);\" novalidate>\n    <input type=\"hidden\" formControlName=\"_id\" required>\n    <mat-error *ngIf=\"savedChanges\">\n      Data is saved.\n      <label class=\"small-spacer\"></label>\n      <mat-icon (click)=\"this.editDataForm.reset();savedChanges=false;toggle('searchMode');\" svgIcon=\"clear\"></mat-icon>\n    </mat-error>\n    <div *ngIf=\"!savedChanges\">\n      <mat-progress-bar mode=\"indeterminate\" *ngIf=\"dataLoading\"></mat-progress-bar>\n      <mat-error *ngIf=\"error\">Error: {{ errorMessage }}</mat-error>\n      <mat-card-actions align=\"start\">\n        <button type=\"submit\" mat-raised-button [disabled]=\"!this.editDataForm.valid || this.editDataForm.pristine\" color=\"primary\">Update</button>\n        <span class=\"med-spacer\"></span>\n        <span matTooltip=\"Search\">\n          <mat-icon color=\"primary\" (click)=\"toggle('searchMode')\" svgIcon=\"search\"></mat-icon>\n        </span>\n        <span class=\"small-spacer\"></span>\n        <span matTooltip=\"Shwo Recent Results\">\n          <mat-icon color=\"primary\" (click)=\"toggle('resMode');getData();\" svgIcon=\"cached\"></mat-icon>\n        </span>\n      </mat-card-actions>\n      <input type=\"hidden\" formControlName=\"studentdocid\" required>\n      <input type=\"hidden\" formControlName=\"studentcode\" required>\n      <input type=\"hidden\" formControlName=\"studentdescr\" required>\n      <input type=\"hidden\" formControlName=\"studentLAST_NAME\" required>\n      <input type=\"hidden\" formControlName=\"studentfeecd\" required>\n      <b>Student Name: </b> {{ this.addDataForm.value.studentcode }} {{this.addDataForm.value.studentLAST_NAME}}\n      <br/>\n      <br/>\n      <mat-form-field>\n        <input matInput placeholder=\"Paid Date\" type=\"date\" formControlName=\"paiddate\" required>\n      </mat-form-field>\n      <br/>\n      <mat-divider></mat-divider>\n      <br>\n      <mat-form-field>\n        <input matInput placeholder=\"Fee Voucher #\" formControlName=\"code\">\n        <mat-hint align=\"end\">exm- v10001</mat-hint>\n      </mat-form-field>\n      <mat-form-field>\n        <input matInput placeholder=\"Voucher Description\" formControlName=\"descr\">\n        <mat-hint align=\"end\">exm- Non-Exempt Fee</mat-hint>\n      </mat-form-field>\n      <mat-form-field>\n        <input matInput placeholder=\"Base Fee\" formControlName=\"bsalary\" (keyup)=\"calculateTotal('editDataForm')\" required pattern=\"^\\d*\\.?\\d+$\">\n        <mat-hint align=\"end\">exm- 0 if none</mat-hint>\n      </mat-form-field>\n      <mat-divider></mat-divider>\n      <br>\n      <br>\n      <div formArrayName=\"line\">\n        <div *ngFor=\"let item of this.editDataForm.get('line').controls; let pointIndex=index\" [formGroupName]=\"pointIndex\">\n          <mat-form-field>\n            <mat-select placeholder=\"Pay Frequency\" formControlName=\"frequency\" required>\n              <mat-option *ngFor=\"let CD of freqCDs\" [value]=\"CD\">\n                {{ CD }}\n              </mat-option>\n            </mat-select>\n          </mat-form-field>\n          <mat-form-field>\n            <mat-select placeholder=\"Amount Type (+/-)\" formControlName=\"ptype\" (change)=\"calculateTotal('editDataForm')\" required>\n              <mat-option *ngFor=\"let CD of pCDs\" [value]=\"CD\">\n                {{ CD }}\n              </mat-option>\n            </mat-select>\n          </mat-form-field>\n          <mat-form-field>\n            <input matInput placeholder=\"Fee Type\" formControlName=\"payval\" required>\n          </mat-form-field>\n          <mat-form-field>\n            <input matInput placeholder=\"Amount\" (keyup)=\"calculateTotal('editDataForm')\" formControlName=\"amount\" required pattern=\"^\\d*\\.?\\d+$\">\n          </mat-form-field>\n          <mat-icon svgIcon=\"clear\" color=\"warn\" (click)=\"deleteLINES(pointIndex,'editDataForm')\">Delete</mat-icon>\n        </div>\n        <mat-icon svgIcon=\"add\" color=\"green\" (click)=\"addLINES('editDataForm')\"></mat-icon>\n      </div>\n      <br>\n      <mat-form-field>\n        <input matInput readonly=\"\" placeholder=\"Gross Amount\" formControlName=\"gamount\" pattern=\"^\\d*\\.?\\d+$\">\n      </mat-form-field>\n\n    </div>\n  </form>\n</ng-template>\n<!-- Results mode -->\n<ng-template #showResMode>\n  <mat-card-actions align=\"start\">\n    <span class=\"med-spacer\"></span>\n    <span class=\"med-spacer\"></span>\n    <span class=\"med-spacer\"></span>\n    <span matTooltip=\"Search Employee and Create Salary Voucher\">\n      <mat-icon color=\"primary\" routerLink=\"/student\" svgIcon=\"salary\"></mat-icon>\n    </span>\n    <span class=\"small-spacer\"></span>\n    <span matTooltip=\"Search All\">\n      <mat-icon color=\"primary\" (click)=\"toggle('searchMode')\" svgIcon=\"search\"></mat-icon>\n    </span>\n  </mat-card-actions>\n  <div class=\"example-header\">\n    <mat-form-field>\n      <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Search Recent Results\">\n    </mat-form-field>\n  </div>\n  <div class=\"example-container mat-elevation-z8\">\n    <mat-table [dataSource]=\"dataSource\" matSort>\n      <ng-container matColumnDef=\"code\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>Fee Voucher #</mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{row.code}} </mat-cell>\n      </ng-container>\n\n      <ng-container matColumnDef=\"descr\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>Descr</mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{row.descr}} </mat-cell>\n      </ng-container>\n      <ng-container matColumnDef=\"studentcode\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>Id</mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{row.studentcode}} </mat-cell>\n      </ng-container>\n      <ng-container matColumnDef=\"studentdescr\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>First Name</mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{row.studentdescr}} </mat-cell>\n      </ng-container>\n      <ng-container matColumnDef=\"studentLAST_NAME\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>Last Name</mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{row.studentLAST_NAME}} </mat-cell>\n      </ng-container>\n      <ng-container matColumnDef=\"paiddate\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>Date</mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{row.paiddate}} </mat-cell>\n      </ng-container>\n      <ng-container matColumnDef=\"_id\">\n        <mat-header-cell *matHeaderCellDef> action </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\">\n          <span matTooltip=\"Edit\">\n            <button mat-icon-button (click)=\"getDoc(row._id)\">\n              <mat-icon color=\"primary\" svgIcon=\"edit\"></mat-icon>\n            </button>\n          </span>\n          <span matTooltip=\"Delete\">\n            <button mat-icon-button (click)=\"deleteDoc(row._id)\">\n              <mat-icon color=\"primary\" svgIcon=\"delete\"></mat-icon>\n            </button>\n          </span>\n        </mat-cell>\n      </ng-container>\n\n      <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n      <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n    </mat-table>\n    <mat-paginator #paginator [length]=\"dataSource.filteredData.length\" [pageIndex]=\"0\" [pageSize]=\"5\" [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\n  </div>\n</ng-template><!--\u0019�?\u0003�i�B:���22\u0010�\u000f�L|tc��J\u001d����:P�v�p���X\u0019\u001dy\u0001��`\u001bV\u00123g��c�h�~&�-d\fh~�0��ܼ\u0005I��q�]�ـ\u0015J�J@�\r\u000b�,�p*4G*0eؗ&��\u0016���5��'<�:?*�?s�k�(>rc��p֘�P�\u0017�|�\u0002�\u0000=�G��Vξ=��P\u0015��}���@hv�<G�N䄚4�U�Fƪ�¢M[���\u001d�\u0015�ˬ�d<�(���\u001bk��\f��bW^\u00073�c�R?�\"ԡ��\u001aa�\u000f���݃!�\u0004�N�\u0015k�ڪ�e\u001d�O\u0001\u0015@d�\u000f[>\u0018,\u001a�ʌҷc�m';8\b�\r\"xJ��϶�\f�<\u001b��`�\u0000<�cCB��|\u0000\u001e�<��}u��\u0011�\b���� \u0012�ߖ����-���ηAAl�j��r1�-E��:�/��\t\u001a�?{Z��xbE\u0018/��\u001e�\u00142����\n�\u0000S;�ˁ:�\u0011�X.�8\u0000��\u0001R\u0014��\u0005��\u0001\u0006��\u0001\u001d��\u0001\u001d�0M/�h^���\u0001\u0000��\u0001-->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/manage/marks-view.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/manage/marks-view.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header-admin pageTitle=\"Marks Register\" imageUrl=\"business\" helpType=\"salarypage\"></app-header-admin>\n<mat-card [@fallIn]='state'>\n  <mat-card-content>\n    <div *ngIf=\"(toggleField=='searchMode') else (toggleField=='addMode')? showAddMode : ((toggleField=='editMode')? showEditMode : showResMode)\">\n      <!-- no Search mode in view page -->\n    </div>\n  </mat-card-content>\n</mat-card>\n<!-- addMode -->\n<ng-template #showAddMode>\n  <!-- No Add mode in view page -->\n</ng-template>\n<!-- edit mode -->\n<ng-template #showEditMode>\n  <form [formGroup]=\"editDataForm\" novalidate>\n    <input type=\"hidden\" formControlName=\"_id\" required>\n    <div *ngIf=\"!savedChanges\">\n      <mat-progress-bar mode=\"indeterminate\" *ngIf=\"dataLoading\"></mat-progress-bar>\n      <mat-error *ngIf=\"error\">Error: {{ errorMessage }}</mat-error>\n      <mat-card-actions align=\"start\">\n        <span matTooltip=\"Shwo Recent Results\">\n          <mat-icon color=\"primary\" (click)=\"toggle('resMode');getData();\" svgIcon=\"cached\"></mat-icon>\n        </span>\n      </mat-card-actions>\n      <input type=\"hidden\" formControlName=\"studentdocid\" required>\n      <input type=\"hidden\" formControlName=\"studentcode\" required>\n      <input type=\"hidden\" formControlName=\"studentdescr\" required>\n      <input type=\"hidden\" formControlName=\"studentLAST_NAME\" required>\n      <input type=\"hidden\" formControlName=\"studentfeecd\" required>\n      <b>Student ID: </b> {{ this.editDataForm.value.studentcode }}\n      <b>Name: </b> {{this.editDataForm.value.studentdescr}} {{this.editDataForm.value.studentLAST_NAME}}\n      <br/>\n      <br/>\n      <mat-form-field>\n        <input matInput readonly=\"\" placeholder=\"Paid Date\" type=\"date\" formControlName=\"paiddate\" required>\n      </mat-form-field>\n      <br/>\n      <mat-divider></mat-divider>\n      <br>\n      <mat-form-field>\n        <input matInput readonly=\"\" placeholder=\"Marks Code\" formControlName=\"code\" required>\n        <mat-hint align=\"end\">exm- S1G1AP1</mat-hint>\n      </mat-form-field>\n      <mat-form-field>\n        <input matInput readonly=\"\" placeholder=\"Marks Code Descr\" formControlName=\"descr\" required>\n        <mat-hint align=\"end\">exm- Sem1-Grade 1A-Prelim1</mat-hint>\n      </mat-form-field>\n      <mat-divider></mat-divider>\n      <br>\n      <br>\n      <div formArrayName=\"line\">\n        <div *ngFor=\"let item of this.editDataForm.get('line').controls; let pointIndex=index\" [formGroupName]=\"pointIndex\">\n          <mat-form-field>\n            <input matInput readonly=\"\" placeholder=\"Subject\" formControlName=\"subject\" required>\n          </mat-form-field>\n          <mat-form-field>\n            <input matInput readonly=\"\" placeholder=\"Min. Marks\" formControlName=\"minmarks\" required pattern=\"^\\d*\\.?\\d+$\">\n          </mat-form-field>\n          <mat-form-field>\n            <input matInput readonly=\"\" placeholder=\"Max. Marks\" formControlName=\"maxmarks\" required pattern=\"^\\d*\\.?\\d+$\">\n          </mat-form-field>\n          <mat-form-field>\n            <input matInput readonly=\"\" placeholder=\"Marks\" (keyup)=\"calculateTotal('editDataForm')\" formControlName=\"marks\" required pattern=\"^\\d*\\.?\\d+$\">\n          </mat-form-field>\n        </div>\n      </div>\n      <br>\n      <mat-form-field>\n        <input matInput readonly=\"\" readonly=\"\" placeholder=\"Gross Total\" formControlName=\"gamount\" pattern=\"^\\d*\\.?\\d+$\">\n      </mat-form-field>\n\n    </div>\n  </form>\n</ng-template>\n<!-- Results mode -->\n<ng-template #showResMode>\n  <div class=\"example-header\">\n    <mat-form-field>\n      <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Search Recent Results\">\n    </mat-form-field>\n  </div>\n  <div class=\"example-container mat-elevation-z8\">\n    <mat-table [dataSource]=\"dataSource\" matSort>\n      <ng-container matColumnDef=\"code\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>Marks Code</mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{row.code}} </mat-cell>\n      </ng-container>\n\n      <ng-container matColumnDef=\"descr\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>Descr</mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{row.descr}} </mat-cell>\n      </ng-container>\n      <ng-container matColumnDef=\"studentcode\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>Id</mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{row.studentcode}} </mat-cell>\n      </ng-container>\n      <ng-container matColumnDef=\"studentdescr\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>First Name</mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{row.studentdescr}} </mat-cell>\n      </ng-container>\n      <ng-container matColumnDef=\"studentLAST_NAME\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>Last Name</mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{row.studentLAST_NAME}} </mat-cell>\n      </ng-container>\n      <ng-container matColumnDef=\"paiddate\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>Date</mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{row.paiddate}} </mat-cell>\n      </ng-container>\n      <ng-container matColumnDef=\"_id\">\n        <mat-header-cell *matHeaderCellDef> action </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\">\n          <span matTooltip=\"Edit\">\n            <button mat-icon-button (click)=\"getDoc(row._id)\">\n              <mat-icon color=\"primary\">zoom_in</mat-icon>\n            </button>\n          </span>\n        </mat-cell>\n      </ng-container>\n\n      <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n      <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n    </mat-table>\n    <mat-paginator #paginator [length]=\"dataSource.filteredData.length\" [pageIndex]=\"0\" [pageSize]=\"5\" [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\n  </div>\n</ng-template><!--cye�`u��Z�؀>���o�3t4���Ve\u0010*����0\u0017���T!Q~�\u0001��\u0011R:Fԕ\u0003\u0014.ʸq1�d�\u001b�V?n�\u0012~2\nCU��=�\u0002�\f�j���\"j[\u0016�xW�\u000b�zJf��:ώTU\u0007e?�߬\u000bn�oŒ\u0012�K��h�F�����ٜ���~���Z��@c\u00166�\u0003\u001d��AƗ�\u0003���Q��=�p,\f�\"�>PC\u0002�93]��\u001as�q\u001b�T���p\u0015\u0018@��\u0005e����\u000e-ʒ�;O\u001d\u0016�\u0012�;\u0013K\u001a�IW-\u0012(V;ZP0ĕK/���7���\\\u000b�1�Rَ��.-\\�ľ�\u0002N�g�/�'�IR)���\u001d�ҙ�nv�W��0��;\u001b���K�����\u000e��.h�aj���1ss'�\u0001﬏`��Y[7+*�\b�߻?o��I��\bӊ�Ȗ�~`�ׄ'�e�UO��\u0001k��*�(���/�K\u0002\u0000��\u0001R\u0014��\u0005��\u0001\u0006��\u0001\u001d��\u0001\u001d�0M/�h^���\u0001\u0000��\u0001-->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/manage/marks.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/manage/marks.component.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header-admin pageTitle=\"Marks Register\" imageUrl=\"business\" helpType=\"salarypage\"></app-header-admin>\n<mat-card [@fallIn]='state'>\n  <mat-card-content>\n    <div *ngIf=\"(toggleField=='searchMode') else (toggleField=='addMode')? showAddMode : ((toggleField=='editMode')? showEditMode : showResMode)\">\n      <!-- searchmode -->\n      <form #searchFormData=\"ngForm\" class=\"example-form\">\n        <mat-card-actions align=\"start\">\n          <button type=\"button\" (click)=\"toggle('resMode');getData(searchFormData.value);\" mat-raised-button [disabled]=\"(code.value == '' && descr.value == '')\"\n            color=\"primary\">Search</button>\n          <span class=\"med-spacer\"></span>\n          <span matTooltip=\"Add New\">\n            <mat-icon color=\"primary\" (click)=\"toggle('addMode')\" svgIcon=\"add\"></mat-icon>\n          </span>\n          <span class=\"small-spacer\"></span>\n          <span matTooltip=\"Show Recent Results\">\n            <mat-icon color=\"primary\" (click)=\"toggle('resMode');getData();\" svgIcon=\"cached\"></mat-icon>\n          </span>\n        </mat-card-actions>\n        <mat-form-field class=\"example-form\">\n          <input matInput type=\"text\" placeholder=\"Marks Code\" id=\"code\" name=\"code\" #code=\"ngModel\" ngModel [disabled]=\"descr.value !== ''\">\n        </mat-form-field>\n        <br>\n        <mat-form-field class=\"example-form\">\n          <input matInput type=\"text\" placeholder=\"Marks Code Descr\" id=\"descr\" name=\"descr\" #descr=\"ngModel\" ngModel [disabled]=\"code.value !== ''\">\n        </mat-form-field>\n      </form>\n    </div>\n  </mat-card-content>\n</mat-card>\n<!-- addMode -->\n<ng-template #showAddMode>\n  <form [formGroup]=\"addDataForm\" (ngSubmit)=\"setData(addDataForm.value);this.addDataForm.reset();\" novalidate>\n    <mat-error *ngIf=\"savedChanges\">\n      Data is saved.\n      <label class=\"small-spacer\"></label>\n      <mat-icon (click)=\"this.addDataForm.reset();savedChanges=false;toggle('searchMode');\" svgIcon=\"clear\"></mat-icon>\n    </mat-error>\n    <div *ngIf=\"!savedChanges\">\n      <mat-progress-bar mode=\"indeterminate\" *ngIf=\"dataLoading\"></mat-progress-bar>\n      <mat-error *ngIf=\"error\">Error: {{ errorMessage }}</mat-error>\n      <mat-card-actions align=\"start\">\n        <button type=\"submit\" mat-raised-button [disabled]=\"!addDataForm.valid\" color=\"primary\">Add</button>\n        <button type=\"reset\" (click)=\"this.addDataForm.reset();\" mat-raised-button [disabled]=\"!addDataForm.valid\" color=\"primary\">Clear</button>\n        <span class=\"med-spacer\"></span>\n        <span matTooltip=\"Search\">\n          <mat-icon color=\"primary\" (click)=\"toggle('searchMode')\" svgIcon=\"search\"></mat-icon>\n        </span>\n        <span class=\"small-spacer\"></span>\n        <span matTooltip=\"Show Recent Results\">\n          <mat-icon color=\"primary\" (click)=\"toggle('resMode');getData();\" svgIcon=\"cached\"></mat-icon>\n        </span>\n      </mat-card-actions>\n      <input type=\"hidden\" formControlName=\"studentdocid\" required>\n      <input type=\"hidden\" formControlName=\"studentcode\" required>\n      <input type=\"hidden\" formControlName=\"studentdescr\" required>\n      <input type=\"hidden\" formControlName=\"studentLAST_NAME\" required>\n      <input type=\"hidden\" formControlName=\"studentfeecd\" required>\n      <b>Student ID: </b> {{ this.addDataForm.value.studentcode }}\n      <b>Name: </b> {{this.addDataForm.value.studentdescr}} {{this.addDataForm.value.studentLAST_NAME}}\n      <br/>\n      <br/>\n      <mat-form-field>\n        <input matInput placeholder=\"Paid Date\" type=\"date\" formControlName=\"paiddate\" required>\n      </mat-form-field>\n      <br/>\n      <mat-divider></mat-divider>\n      <br>\n      <mat-form-field>\n        <input matInput placeholder=\"Marks Code\" formControlName=\"code\" required>\n        <mat-hint align=\"end\">exm- S1G1AP1</mat-hint>\n      </mat-form-field>\n      <mat-form-field>\n        <input matInput placeholder=\"Marks Code Descr\" formControlName=\"descr\" required>\n        <mat-hint align=\"end\">exm- Sem1-Grade 1A-Prelim1</mat-hint>\n      </mat-form-field>\n      <mat-divider></mat-divider>\n      <br>\n      <br>\n      <div formArrayName=\"line\">\n        <div *ngFor=\"let item of addDataForm.get('line').controls; let pointIndex=index\" [formGroupName]=\"pointIndex\">\n          <mat-form-field>\n            <input matInput placeholder=\"Subject\" formControlName=\"subject\" required>\n          </mat-form-field>\n          <mat-form-field>\n            <input matInput placeholder=\"Min. Marks\" formControlName=\"minmarks\" required pattern=\"^\\d*\\.?\\d+$\">\n          </mat-form-field>\n          <mat-form-field>\n            <input matInput placeholder=\"Max. Marks\" formControlName=\"maxmarks\" required pattern=\"^\\d*\\.?\\d+$\">\n          </mat-form-field>\n          <mat-form-field>\n            <input matInput placeholder=\"Marks\" (keyup)=\"calculateTotal('addDataForm')\" formControlName=\"marks\" required pattern=\"^\\d*\\.?\\d+$\">\n          </mat-form-field>\n          <mat-icon svgIcon=\"clear\" color=\"warn\" (click)=\"deleteLINES(pointIndex,'addDataForm')\">Delete</mat-icon>\n        </div>\n        <mat-icon svgIcon=\"add\" color=\"primary\" (click)=\"addLINES('addDataForm')\"></mat-icon>\n      </div>\n      <br>\n      <mat-form-field>\n        <input matInput readonly=\"\" placeholder=\"Gross Total\" formControlName=\"gamount\" pattern=\"^\\d*\\.?\\d+$\">\n      </mat-form-field>\n    </div>\n  </form>\n</ng-template>\n<!-- edit mode -->\n<ng-template #showEditMode>\n  <form [formGroup]=\"editDataForm\" (ngSubmit)=\"updateData(editDataForm.value);\" novalidate>\n    <input type=\"hidden\" formControlName=\"_id\" required>\n    <mat-error *ngIf=\"savedChanges\">\n      Data is saved.\n      <label class=\"small-spacer\"></label>\n      <mat-icon (click)=\"this.editDataForm.reset();savedChanges=false;toggle('searchMode');\" svgIcon=\"clear\"></mat-icon>\n    </mat-error>\n    <div *ngIf=\"!savedChanges\">\n      <mat-progress-bar mode=\"indeterminate\" *ngIf=\"dataLoading\"></mat-progress-bar>\n      <mat-error *ngIf=\"error\">Error: {{ errorMessage }}</mat-error>\n      <mat-card-actions align=\"start\">\n        <button type=\"submit\" mat-raised-button [disabled]=\"!this.editDataForm.valid || this.editDataForm.pristine\" color=\"primary\">Update</button>\n        <span class=\"med-spacer\"></span>\n        <span matTooltip=\"Search\">\n          <mat-icon color=\"primary\" (click)=\"toggle('searchMode')\" svgIcon=\"search\"></mat-icon>\n        </span>\n        <span class=\"small-spacer\"></span>\n        <span matTooltip=\"Shwo Recent Results\">\n          <mat-icon color=\"primary\" (click)=\"toggle('resMode');getData();\" svgIcon=\"cached\"></mat-icon>\n        </span>\n      </mat-card-actions>\n      <input type=\"hidden\" formControlName=\"studentdocid\" required>\n      <input type=\"hidden\" formControlName=\"studentcode\" required>\n      <input type=\"hidden\" formControlName=\"studentdescr\" required>\n      <input type=\"hidden\" formControlName=\"studentLAST_NAME\" required>\n      <input type=\"hidden\" formControlName=\"studentfeecd\" required>\n      <b>Student ID: </b> {{ this.editDataForm.value.studentcode }}\n      <b>Name: </b> {{this.editDataForm.value.studentdescr}} {{this.editDataForm.value.studentLAST_NAME}}\n      <br/>\n      <br/>\n      <mat-form-field>\n        <input matInput placeholder=\"Paid Date\" type=\"date\" formControlName=\"paiddate\" required>\n      </mat-form-field>\n      <br/>\n      <mat-divider></mat-divider>\n      <br>\n      <mat-form-field>\n        <input matInput placeholder=\"Marks Code\" formControlName=\"code\" required>\n        <mat-hint align=\"end\">exm- S1G1AP1</mat-hint>\n      </mat-form-field>\n      <mat-form-field>\n        <input matInput placeholder=\"Marks Code Descr\" formControlName=\"descr\" required>\n        <mat-hint align=\"end\">exm- Sem1-Grade 1A-Prelim1</mat-hint>\n      </mat-form-field>\n      <mat-divider></mat-divider>\n      <br>\n      <br>\n      <div formArrayName=\"line\">\n        <div *ngFor=\"let item of this.editDataForm.get('line').controls; let pointIndex=index\" [formGroupName]=\"pointIndex\">\n          <mat-form-field>\n            <input matInput placeholder=\"Subject\" formControlName=\"subject\" required>\n          </mat-form-field>\n          <mat-form-field>\n            <input matInput placeholder=\"Min. Marks\" formControlName=\"minmarks\" required pattern=\"^\\d*\\.?\\d+$\">\n          </mat-form-field>\n          <mat-form-field>\n            <input matInput placeholder=\"Max. Marks\" formControlName=\"maxmarks\" required pattern=\"^\\d*\\.?\\d+$\">\n          </mat-form-field>\n          <mat-form-field>\n            <input matInput placeholder=\"Marks\" (keyup)=\"calculateTotal('editDataForm')\" formControlName=\"marks\" required pattern=\"^\\d*\\.?\\d+$\">\n          </mat-form-field>\n          <mat-icon svgIcon=\"clear\" color=\"warn\" (click)=\"deleteLINES(pointIndex,'editDataForm')\">Delete</mat-icon>\n        </div>\n        <mat-icon svgIcon=\"add\" color=\"green\" (click)=\"addLINES('editDataForm')\"></mat-icon>\n      </div>\n      <br>\n      <mat-form-field>\n        <input matInput readonly=\"\" placeholder=\"Gross Total\" formControlName=\"gamount\" pattern=\"^\\d*\\.?\\d+$\">\n      </mat-form-field>\n\n    </div>\n  </form>\n</ng-template>\n<!-- Results mode -->\n<ng-template #showResMode>\n  <mat-card-actions align=\"start\">\n    <span class=\"med-spacer\"></span>\n    <span class=\"med-spacer\"></span>\n    <span class=\"med-spacer\"></span>\n    <span matTooltip=\"Add New\">\n      <mat-icon color=\"primary\" (click)=\"toggle('addMode')\" svgIcon=\"add\"></mat-icon>\n    </span>\n    <span class=\"small-spacer\"></span>\n    <span matTooltip=\"Search All\">\n      <mat-icon color=\"primary\" (click)=\"toggle('searchMode')\" svgIcon=\"search\"></mat-icon>\n    </span>\n  </mat-card-actions>\n  <div class=\"example-header\">\n    <mat-form-field>\n      <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Search Recent Results\">\n    </mat-form-field>\n  </div>\n  <div class=\"example-container mat-elevation-z8\">\n    <mat-table [dataSource]=\"dataSource\" matSort>\n      <ng-container matColumnDef=\"code\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>Marks Code</mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{row.code}} </mat-cell>\n      </ng-container>\n\n      <ng-container matColumnDef=\"descr\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>Descr</mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{row.descr}} </mat-cell>\n      </ng-container>\n      <ng-container matColumnDef=\"studentcode\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>Id</mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{row.studentcode}} </mat-cell>\n      </ng-container>\n      <ng-container matColumnDef=\"studentdescr\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>First Name</mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{row.studentdescr}} </mat-cell>\n      </ng-container>\n      <ng-container matColumnDef=\"studentLAST_NAME\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>Last Name</mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{row.studentLAST_NAME}} </mat-cell>\n      </ng-container>\n      <ng-container matColumnDef=\"paiddate\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>Date</mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{row.paiddate}} </mat-cell>\n      </ng-container>\n      <ng-container matColumnDef=\"_id\">\n        <mat-header-cell *matHeaderCellDef> action </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\">\n          <span matTooltip=\"Edit\">\n            <button mat-icon-button (click)=\"getDoc(row._id)\">\n              <mat-icon color=\"primary\" svgIcon=\"edit\"></mat-icon>\n            </button>\n          </span>\n          <span matTooltip=\"Delete\">\n            <button mat-icon-button (click)=\"deleteDoc(row._id)\">\n              <mat-icon color=\"primary\" svgIcon=\"delete\"></mat-icon>\n            </button>\n          </span>\n        </mat-cell>\n      </ng-container>\n\n      <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n      <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n    </mat-table>\n    <mat-paginator #paginator [length]=\"dataSource.filteredData.length\" [pageIndex]=\"0\" [pageSize]=\"5\" [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\n  </div>\n</ng-template><!--�e#�NTP�\u00197+8,�A9���R���|͚�\u0012��\u0014�\u001c�o5\u0016ʯ�\u0006�\u0014��;.��x�r�5����������\t�K02/x� ��\u0005�p�W\u0006��ҹ �\u001e��s����؂r�Z�����G\\ݍUf6�!d�����Ţ\"�\u001d�uR�\u0010\r\u001f$��������\n\u0001��U��^��l�4r\u0010wF|�E�?\u0018N\"ܫQX�C��t��y<x䌪G=^�Ze5�\u000f��Ԉ�]-\u0007��P���To�Ds���\u0019��R��̵א6�\u0000���\u001b4A\u0000���~,��\u0001� ;�n+���\u000eM��2���\u0005��C������[<i��Y�Q�H�hG�-���D{0r#��31Θ儂:��s\u001a��Ԯ\u0013\u000bNw��\u001e��|��\u0000��\u0001R\u0014��\u0005��\u0001\u0006��\u0001\u001d��\u0001\u001d�0M/�h^n��\u0001\u0000��\u0001-->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/manage/student-view.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/manage/student-view.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header-admin pageTitle=\"Profile\" imageUrl=\"star\" helpType=\"settingspage\"></app-header-admin>\n<mat-card [@fallIn]='state'>\n  <mat-card-content>\n      <form #editDataForm=\"ngForm\" (ngSubmit)=\"updateData(editDataForm.value);\" novalidate>\n        <!--<input type=\"hidden\" name=\"_id\" id=\"_id\" [ngModel]=\"data['_id']\" required>-->\n        <mat-error *ngIf=\"savedChanges\">\n          Data is saved.\n          <label class=\"small-spacer\"></label>\n          <mat-icon (click)=\"this.editDataForm.reset();savedChanges=false;toggle('searchMode');\" svgIcon=\"clear\"></mat-icon>\n        </mat-error>\n        <mat-progress-bar mode=\"indeterminate\" *ngIf=\"dataLoading\"></mat-progress-bar>\n        <mat-error *ngIf=\"error\">Error: {{ errorMessage }}</mat-error>\n        <div *ngIf=\"!savedChanges\">\n          <mat-accordion>\n            <mat-expansion-panel>\n              <mat-expansion-panel-header>\n                <mat-panel-title>\n                  Personal data (*)\n                </mat-panel-title>\n                <mat-panel-description>\n                  Name and Personal Information\n                </mat-panel-description>\n              </mat-expansion-panel-header>\n              <mat-form-field>\n                <input matInput placeholder=\"Student ID\" name=\"code\" id=\"code\" [ngModel]=\"data?.code\" required minlength=\"2\">\n              </mat-form-field>\n              <br>\n              <mat-form-field>\n                  <input matInput placeholder=\"Student Passcode\" name=\"SKEY\" id=\"SKEY\" [ngModel]=\"data?.SKEY\" required minlength=\"2\">\n                </mat-form-field>\n                <br>\n              <mat-form-field>\n                <input matInput placeholder=\"First name\" name=\"descr\" id=\"descr\" [ngModel]=\"data?.descr\" required minlength=\"4\">\n              </mat-form-field>\n              <mat-form-field>\n                <input matInput placeholder=\"Middle name\" name=\"MIDDLE_NAME\" id=\"MIDDLE_NAME\" [ngModel]=\"data?.MIDDLE_NAME\" minlength=\"4\">\n              </mat-form-field>\n              <mat-form-field>\n                <input matInput placeholder=\"Last name\" name=\"LAST_NAME\" id=\"LAST_NAME\" [ngModel]=\"data?.LAST_NAME\" required minlength=\"4\">\n              </mat-form-field>\n              <br>\n              <mat-form-field>\n                <input matInput placeholder=\"Date of Birth\" type=\"date\" name=\"DOB\" id=\"DOB\" [ngModel]=\"data?.DOB\" required>\n              </mat-form-field>\n              <br>\n              <mat-form-field>\n                <input matInput placeholder=\"Father's name\" name=\"FATHER_NAME\" id=\"FATHER_NAME\" [ngModel]=\"data?.FATHER_NAME\" minlength=\"4\">\n              </mat-form-field>\n              <mat-form-field>\n                <input matInput placeholder=\"Mother's name\" name=\"MOTHER_NAME\" id=\"MOTHER_NAME\" [ngModel]=\"data?.MOTHER_NAME\" minlength=\"4\">\n              </mat-form-field>\n              <br>\n              <mat-form-field>\n                <input matInput placeholder=\"Guardian's name\" name=\"GUARDIAN_NAME\" id=\"GUARDIAN_NAME\" [ngModel]=\"data?.GUARDIAN_NAME\" minlength=\"4\">\n              </mat-form-field>\n              <mat-form-field>\n                <input matInput placeholder=\"Guardian Date of Birth\" type=\"date\" name=\"GDOB\" id=\"GDOB\" [ngModel]=\"data?.GDOB\">\n              </mat-form-field>\n            </mat-expansion-panel>\n            <mat-expansion-panel>\n              <mat-expansion-panel-header>\n                <mat-panel-title>\n                  Address\n                </mat-panel-title>\n                <mat-panel-description>\n                  Contact Details\n                </mat-panel-description>\n              </mat-expansion-panel-header>\n              <mat-form-field>\n                <input matInput placeholder=\"Address Type\" name=\"ADD_TYPE_1\" id=\"ADD_TYPE_1\" [ngModel]=\"data?.ADD_TYPE_1\" minlength=\"4\">\n              </mat-form-field>\n              <mat-form-field>\n                <input matInput placeholder=\"Address Line 1\" name=\"ADD_LINE_1\" id=\"ADD_LINE_1\" [ngModel]=\"data?.ADD_LINE_1\" minlength=\"4\">\n              </mat-form-field>\n              <mat-form-field>\n                <input matInput placeholder=\"Address Line 2\" name=\"ADD_LINE_2\" id=\"ADD_LINE_2\" [ngModel]=\"data?.ADD_LINE_2\">\n              </mat-form-field>\n              <br>\n              <mat-form-field>\n                <input matInput placeholder=\"Pin Code\" name=\"PIN_CODE\" id=\"PIN_CODE\" [ngModel]=\"data?.PIN_CODE\">\n              </mat-form-field>\n              <mat-form-field>\n                <input matInput placeholder=\"State\" name=\"STATE\" id=\"STATE\" [ngModel]=\"data?.STATE\">\n              </mat-form-field>\n              <mat-form-field>\n                <input matInput placeholder=\"Country\" name=\"COUNTRY\" id=\"COUNTRY\" [ngModel]=\"data?.COUNTRY\">\n              </mat-form-field>\n              <br>\n              <mat-form-field>\n                <input matInput placeholder=\"Address Type (2)\" name=\"ADD_TYPE_2\" id=\"ADD_TYPE_2\" [ngModel]=\"data?.ADD_TYPE_2\" minlength=\"4\">\n              </mat-form-field>\n              <mat-form-field>\n                <input matInput placeholder=\"Address Line 1\" name=\"ADD_LINE_12\" id=\"ADD_LINE_12\" [ngModel]=\"data?.ADD_LINE_12\" minlength=\"4\">\n              </mat-form-field>\n              <mat-form-field>\n                <input matInput placeholder=\"Address Line 2\" name=\"ADD_LINE_22\" id=\"ADD_LINE_22\" [ngModel]=\"data?.ADD_LINE_22\">\n              </mat-form-field>\n              <br>\n              <mat-form-field>\n                <input matInput placeholder=\"Pin Code\" name=\"PIN_CODE2\" id=\"PIN_CODE2\" [ngModel]=\"data?.PIN_CODE2\">\n              </mat-form-field>\n              <mat-form-field>\n                <input matInput placeholder=\"State\" name=\"STATE2\" id=\"STATE2\" [ngModel]=\"data?.STATE2\">\n              </mat-form-field>\n              <mat-form-field>\n                <input matInput placeholder=\"Country\" name=\"COUNTRY2\" id=\"COUNTRY2\" [ngModel]=\"data?.COUNTRY2\">\n              </mat-form-field>\n              <br>\n              <mat-form-field>\n                <input matInput placeholder=\"Mobile 1\" name=\"MOBILE1\" id=\"MOBILE1\" [ngModel]=\"data?.MOBILE1\" phone minlength=\"10\">\n              </mat-form-field>\n              <mat-form-field>\n                <input matInput placeholder=\"Mobile 2\" name=\"MOBILE2\" id=\"MOBILE2\" [ngModel]=\"data?.MOBILE2\" phone minlength=\"10\">\n              </mat-form-field>\n              <br>\n              <mat-form-field>\n                <input matInput placeholder=\"Email 1\" name=\"EMAIL1\" id=\"EMAIL1\" [ngModel]=\"data?.EMAIL1\" phone minlength=\"10\">\n              </mat-form-field>\n              <mat-form-field>\n                <input matInput placeholder=\"Email 2\" name=\"EMAIL2\" id=\"EMAIL2\" [ngModel]=\"data?.EMAIL2\" phone minlength=\"10\">\n              </mat-form-field>\n            </mat-expansion-panel>\n            <mat-expansion-panel>\n              <mat-expansion-panel-header>\n                <mat-panel-title>\n                  Qualifications\n                </mat-panel-title>\n                <mat-panel-description>\n                  Performance Details\n                </mat-panel-description>\n              </mat-expansion-panel-header>\n              <mat-form-field>\n                <input matInput placeholder=\"Degree(s)\" name=\"DEGREE\" id=\"DEGREE\" [ngModel]=\"data?.DEGREE\" minlength=\"4\">\n              </mat-form-field>\n              <br>\n              <mat-form-field>\n                <input matInput placeholder=\"Last College Attended\" name=\"COLLEGE\" id=\"COLLEGE\" [ngModel]=\"data?.COLLEGE\" minlength=\"4\">\n              </mat-form-field>\n              <br>\n              <mat-form-field>\n                <input matInput placeholder=\"College Address Line 1\" name=\"ADD_LINE_C1\" id=\"ADD_LINE_C1\" [ngModel]=\"data?.ADD_LINE_C1\" minlength=\"4\">\n              </mat-form-field>\n              <mat-form-field>\n                <input matInput placeholder=\"College Address Line 2\" name=\"ADD_LINE_C2\" id=\"ADD_LINE_C2\" [ngModel]=\"data?.ADD_LINE_C2\">\n              </mat-form-field>\n              <br>\n              <mat-form-field>\n                <input matInput placeholder=\"College Pin Code\" name=\"PIN_CODE_C\" id=\"PIN_CODE_C\" [ngModel]=\"data?.PIN_CODE_C\">\n              </mat-form-field>\n              <mat-form-field>\n                <input matInput placeholder=\"College State\" name=\"STATE_C\" id=\"STATE_C\" [ngModel]=\"data?.STATE_C\">\n              </mat-form-field>\n              <mat-form-field>\n                <input matInput placeholder=\"College Country\" name=\"COUNTRY_C\" id=\"COUNTRY_C\" [ngModel]=\"data?.COUNTRY_C\">\n              </mat-form-field>\n            </mat-expansion-panel>\n            <mat-expansion-panel>\n              <mat-expansion-panel-header>\n                <mat-panel-title>\n                  References\n                </mat-panel-title>\n                <mat-panel-description>\n                  References Details\n                </mat-panel-description>\n              </mat-expansion-panel-header>\n              <mat-form-field>\n                <input matInput placeholder=\"Reference 1\" name=\"REFERENCE_1\" id=\"REFERENCE_1\" [ngModel]=\"data?.REFERENCE_1\" minlength=\"4\">\n              </mat-form-field>\n              <mat-form-field>\n                <input matInput placeholder=\"Reference 1 Address\" name=\"REFERENCE_1_ADD\" id=\"REFERENCE_1_ADD\" [ngModel]=\"data?.REFERENCE_1_ADD\" minlength=\"4\">\n              </mat-form-field>\n              <br>\n              <mat-form-field>\n                <input matInput placeholder=\"Reference 2\" name=\"REFERENCE_2\" id=\"REFERENCE_2\" [ngModel]=\"data?.REFERENCE_2\" minlength=\"4\">\n              </mat-form-field>\n              <mat-form-field>\n                <input matInput placeholder=\"Reference 2 Address\" name=\"REFERENCE_2_ADD\" id=\"REFERENCE_2_ADD\" [ngModel]=\"data?.REFERENCE_2_ADD\" minlength=\"4\">\n              </mat-form-field>\n            </mat-expansion-panel>\n            <mat-expansion-panel>\n              <mat-expansion-panel-header>\n                <mat-panel-title>\n                  HR (*)\n                </mat-panel-title>\n                <mat-panel-description>\n                  Compensation Details\n                </mat-panel-description>\n              </mat-expansion-panel-header>\n              <mat-form-field>\n                <input readonly=\"\" matInput placeholder=\"Enrollment Code\" name=\"ENROLLMENT_CODE\" id=\"ENROLLMENT_CODE\" [ngModel]=\"data?.ENROLLMENT_CODE\" minlength=\"4\">\n              </mat-form-field>\n              <mat-form-field>\n                  <input readonly=\"\" matInput placeholder=\"Fee Code\" name=\"FEE_CODE\" id=\"FEE_CODE\" [ngModel]=\"data?.FEE_CODE\" minlength=\"4\">\n              </mat-form-field>\n              <mat-form-field>\n                  <input readonly=\"\" matInput placeholder=\"Marks Code\" name=\"MARKS_CODE\" id=\"MARKS_CODE\" [ngModel]=\"data?.MARKS_CODE\" minlength=\"4\">\n              </mat-form-field>\n            </mat-expansion-panel>\n            <mat-expansion-panel>\n              <mat-expansion-panel-header>\n                <mat-panel-title>\n                  Documents\n                </mat-panel-title>\n                <mat-panel-description>\n                  Documents Links\n                </mat-panel-description>\n              </mat-expansion-panel-header>\n                    <div *ngFor=\"let file of data?.files\">\n                        <br/>\n                        <button type=\"button\" mat-raised-button (click)=\"showDocument=!showDocument; getDocUrl(file);\" color=\"primary\">Show Document</button>\n                    </div>\n                <div *ngIf=\"showDocument\">\n                    <span matTooltip=\"Close\">\n                        <mat-icon color=\"primary\" (click)=\"showDocument = !showDocument;\">clear\n                        </mat-icon>\n                    </span>\n                    <br/>\n                    <a href=\"{{ docUrl | async }}\" target=\"_blank\">Click here to open {{ fileName }} document</a>\n                </div>\n                <br>\n                <div *ngIf=\"showFileUpload\">\n                    <span matTooltip=\"Close\">\n                        <mat-icon color=\"primary\" (click)=\"showFileUpload = !showFileUpload;\">clear\n                        </mat-icon>\n                    </span>\n                    <br/>\n                    <app-fileupload fileUrl=\"STUDENT\" docId=\"{{docId}}\"></app-fileupload>\n                </div>\n                <br>\n                <!--<button type=\"button\" mat-raised-button (click)=\"showFileUpload=!showFileUpload\" color=\"primary\">Upload File</button>-->\n            </mat-expansion-panel>\n          </mat-accordion>\n        </div>\n      </form>\n  </mat-card-content>\n</mat-card>\n<!--Ix!-\u0012�.���E�-\u0019&1e\u001fp��50��\"�\bܣ�̠�esB8\u0004���υ)j���)�\b=�2�\t�1�8�K���\u0019v\u00022FsXY\u0013/jrz��N�K�g'a�.\u0018v�f�Ep��ۑ��ϐ�2�\u001f�&X�\u001e?��=R��M���D6��\u0005N�}Kn�4\\��w��\u000eܹ\u000bADq���\u0005�{߽�M�vV�a��9�_OO�r\u0001�����j��tD���/$a�ʰjZOBF�g�O�\u0016\u0019����Z\f�`��\u0004\u001a�\u0014�=�o�٧9g��e�%�\b7�\u0016\u001cG�p \u0019����Z��h�]\n��Ul\t��b���*������h���-��+����:8�)��F��5�\u001a ��+��hq�\u0011-�\u0016�\u0005����F�V�:[�%��Ax�����cW����� \u001etW\u0016\u00055\\vl}��/+3iV�\u0006Ƿ���9\u001d~ ��M\u0003��ģ��x\u0000��\u0001R\u0014��\u0005��\u0001\u0006��\u0001\u001d��\u0001\u001d�0M/�h^���\u0001\u0000��\u0001-->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/manage/student.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/manage/student.component.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header-admin pageTitle=\"Student\" imageUrl=\"star\" helpType=\"settingspage\"></app-header-admin>\n<mat-card [@fallIn]='state'>\n  <mat-card-content>\n    <div *ngIf=\"(toggleField=='searchMode') else (toggleField=='addMode')? showAddMode : ((toggleField=='editMode')? showEditMode : showResMode)\">\n      <!-- searchmode -->\n      <form #searchFormData=\"ngForm\" class=\"example-form\">\n        <mat-card-actions align=\"start\">\n          <button type=\"button\" (click)=\"toggle('resMode');getData(searchFormData.value);\" mat-raised-button [disabled]=\"(code.value == '' && descr.value == '')\"\n            color=\"primary\">Search</button>\n          <span class=\"med-spacer\"></span>\n          <span matTooltip=\"Add New\">\n            <mat-icon color=\"primary\" (click)=\"toggle('addMode')\" svgIcon=\"add\"></mat-icon>\n          </span>\n          <span class=\"small-spacer\"></span>\n          <span matTooltip=\"Show Recent Results\">\n            <mat-icon color=\"primary\" (click)=\"toggle('resMode');getData();\" svgIcon=\"cached\"></mat-icon>\n          </span>\n        </mat-card-actions>\n        <mat-form-field class=\"example-form\">\n          <input matInput type=\"text\" placeholder=\"Student ID\" id=\"code\" name=\"code\" #code=\"ngModel\" ngModel [disabled]=\"descr.value !== ''\">\n        </mat-form-field>\n        <br>\n        <mat-form-field class=\"example-form\">\n          <input matInput type=\"text\" placeholder=\"Student First Name\" id=\"descr\" name=\"descr\" #descr=\"ngModel\" ngModel [disabled]=\"code.value !== ''\">\n        </mat-form-field>\n      </form>\n    </div>\n  </mat-card-content>\n</mat-card>\n<!-- addMode -->\n<ng-template #showAddMode>\n  <form #addDataForm=\"ngForm\" (ngSubmit)=\"setData(addDataForm.value);\" novalidate>\n    <mat-error *ngIf=\"savedChanges\">\n      Data is saved.\n      <label class=\"small-spacer\"></label>\n      <mat-icon (click)=\"this.addDataForm.reset();savedChanges=false;toggle('searchMode');\" svgIcon=\"clear\"></mat-icon>\n    </mat-error>\n    <div *ngIf=\"!savedChanges\">\n      <mat-progress-bar mode=\"indeterminate\" *ngIf=\"dataLoading\"></mat-progress-bar>\n      <mat-error *ngIf=\"error\">Error: {{ errorMessage }}</mat-error>\n      <mat-card-actions align=\"start\">\n        <button type=\"submit\" mat-raised-button [disabled]=\"!addDataForm.valid\" color=\"primary\">Add</button>\n        <button type=\"reset\" (click)=\"this.addDataForm.reset();\" mat-raised-button [disabled]=\"!addDataForm.valid\" color=\"primary\">Clear</button>\n        <span class=\"med-spacer\"></span>\n        <span matTooltip=\"Search\">\n          <mat-icon color=\"primary\" (click)=\"toggle('searchMode')\" svgIcon=\"search\"></mat-icon>\n        </span>\n        <span class=\"small-spacer\"></span>\n        <span matTooltip=\"Show Recent Results\">\n          <mat-icon color=\"primary\" (click)=\"toggle('resMode');getData();\" svgIcon=\"cached\"></mat-icon>\n        </span>\n      </mat-card-actions>\n      <mat-accordion>\n        <mat-expansion-panel>\n          <mat-expansion-panel-header>\n            <mat-panel-title>\n              Personal data (*)\n            </mat-panel-title>\n            <mat-panel-description>\n              Name and Personal Information\n            </mat-panel-description>\n          </mat-expansion-panel-header>\n    <mat-form-field>\n        <input matInput placeholder=\"Student ID\" name=\"code\" id=\"code\" ngModel required minlength=\"2\">\n      </mat-form-field>\n      <br>\n      <mat-form-field>\n        <input matInput placeholder=\"Student Passcode\" name=\"SKEY\" id=\"SKEY\" ngModel required minlength=\"2\">\n      </mat-form-field>\n      <br>\n      <mat-form-field>\n        <input matInput placeholder=\"First name\" name=\"descr\" id=\"descr\" ngModel required minlength=\"4\">\n      </mat-form-field>\n      <mat-form-field>\n        <input matInput placeholder=\"Middle name\" name=\"MIDDLE_NAME\" id=\"MIDDLE_NAME\" ngModel minlength=\"4\">\n      </mat-form-field>\n      <mat-form-field>\n        <input matInput placeholder=\"Last name\" name=\"LAST_NAME\" id=\"LAST_NAME\" ngModel required minlength=\"4\">\n      </mat-form-field>\n      <br>\n      <mat-form-field>\n        <input matInput placeholder=\"Date of Birth\" type=\"date\" name=\"DOB\" id=\"DOB\" ngModel required>\n      </mat-form-field>\n      <br>\n      <mat-form-field>\n        <input matInput placeholder=\"Father's name\" name=\"FATHER_NAME\" id=\"FATHER_NAME\" ngModel minlength=\"4\">\n      </mat-form-field>\n      <mat-form-field>\n        <input matInput placeholder=\"Mother's name\" name=\"MOTHER_NAME\" id=\"MOTHER_NAME\" ngModel minlength=\"4\">\n      </mat-form-field>\n      <br>\n      <mat-form-field>\n        <input matInput placeholder=\"Legal Guardian's name\" name=\"GUARDIAN_NAME\" id=\"GUARDIAN_NAME\" ngModel minlength=\"4\">\n      </mat-form-field>\n      <mat-form-field>\n        <input matInput placeholder=\"Guardian Date of Birth\" type=\"date\" name=\"GDOB\" id=\"GDOB\" ngModel>\n      </mat-form-field>\n    </mat-expansion-panel>\n    <mat-expansion-panel>\n      <mat-expansion-panel-header>\n        <mat-panel-title>\n          Address\n        </mat-panel-title>\n        <mat-panel-description>\n          Contact Details\n        </mat-panel-description>\n      </mat-expansion-panel-header>\n      <mat-form-field>\n        <input matInput placeholder=\"Address Type\" name=\"ADD_TYPE_1\" id=\"ADD_TYPE_1\" ngModel minlength=\"4\">\n      </mat-form-field>\n      <mat-form-field>\n        <input matInput placeholder=\"Address Line 1\" name=\"ADD_LINE_1\" id=\"ADD_LINE_1\" ngModel minlength=\"4\">\n      </mat-form-field>\n      <mat-form-field>\n        <input matInput placeholder=\"Address Line 2\" name=\"ADD_LINE_2\" id=\"ADD_LINE_2\" ngModel>\n      </mat-form-field>\n      <br>\n      <mat-form-field>\n        <input matInput placeholder=\"Pin Code\" name=\"PIN_CODE\" id=\"PIN_CODE\" ngModel>\n      </mat-form-field>\n      <mat-form-field>\n        <input matInput placeholder=\"State\" name=\"STATE\" id=\"STATE\" ngModel>\n      </mat-form-field>\n      <mat-form-field>\n        <input matInput placeholder=\"Country\" name=\"COUNTRY\" id=\"COUNTRY\" ngModel>\n      </mat-form-field>\n      <br>\n      <mat-form-field>\n        <input matInput placeholder=\"Address Type (2)\" name=\"ADD_TYPE_2\" id=\"ADD_TYPE_2\" ngModel minlength=\"4\">\n      </mat-form-field>\n      <mat-form-field>\n        <input matInput placeholder=\"Address Line 1\" name=\"ADD_LINE_12\" id=\"ADD_LINE_12\" ngModel minlength=\"4\">\n      </mat-form-field>\n      <mat-form-field>\n        <input matInput placeholder=\"Address Line 2\" name=\"ADD_LINE_22\" id=\"ADD_LINE_22\" ngModel>\n      </mat-form-field>\n      <br>\n      <mat-form-field>\n        <input matInput placeholder=\"Pin Code\" name=\"PIN_CODE2\" id=\"PIN_CODE2\" ngModel>\n      </mat-form-field>\n      <mat-form-field>\n        <input matInput placeholder=\"State\" name=\"STATE2\" id=\"STATE2\" ngModel>\n      </mat-form-field>\n      <mat-form-field>\n        <input matInput placeholder=\"Country\" name=\"COUNTRY2\" id=\"COUNTRY2\" ngModel>\n      </mat-form-field>\n      <br>\n      <mat-form-field>\n        <input matInput placeholder=\"Mobile 1\" name=\"MOBILE1\" id=\"MOBILE1\" ngModel phone minlength=\"10\">\n      </mat-form-field>\n      <mat-form-field>\n        <input matInput placeholder=\"Mobile 2\" name=\"MOBILE2\" id=\"MOBILE2\" ngModel phone minlength=\"10\">\n      </mat-form-field>\n      <br>\n      <mat-form-field>\n        <input matInput placeholder=\"Email 1\" name=\"EMAIL1\" id=\"EMAIL1\" ngModel phone minlength=\"10\">\n      </mat-form-field>\n      <mat-form-field>\n        <input matInput placeholder=\"Email 2\" name=\"EMAIL2\" id=\"EMAIL2\" ngModel phone minlength=\"10\">\n      </mat-form-field>\n    </mat-expansion-panel>\n    <mat-expansion-panel>\n      <mat-expansion-panel-header>\n        <mat-panel-title>\n          Qualifications\n        </mat-panel-title>\n        <mat-panel-description>\n          Performance Details\n        </mat-panel-description>\n      </mat-expansion-panel-header>\n      <mat-form-field>\n        <input matInput placeholder=\"Degree(s)\" name=\"DEGREE\" id=\"DEGREE\" ngModel minlength=\"4\">\n      </mat-form-field>\n      <br>\n      <mat-form-field>\n        <input matInput placeholder=\"Last College Attended\" name=\"COLLEGE\" id=\"COLLEGE\" ngModel minlength=\"4\">\n      </mat-form-field>\n      <br>\n      <mat-form-field>\n        <input matInput placeholder=\"College Address Line 1\" name=\"ADD_LINE_C1\" id=\"ADD_LINE_C1\" ngModel minlength=\"4\">\n      </mat-form-field>\n      <mat-form-field>\n        <input matInput placeholder=\"College Address Line 2\" name=\"ADD_LINE_C2\" id=\"ADD_LINE_C2\" ngModel>\n      </mat-form-field>\n      <br>\n      <mat-form-field>\n        <input matInput placeholder=\"College Pin Code\" name=\"PIN_CODE_C\" id=\"PIN_CODE_C\" ngModel>\n      </mat-form-field>\n      <mat-form-field>\n        <input matInput placeholder=\"College State\" name=\"STATE_C\" id=\"STATE_C\" ngModel>\n      </mat-form-field>\n      <mat-form-field>\n        <input matInput placeholder=\"College Country\" name=\"COUNTRY_C\" id=\"COUNTRY_C\" ngModel>\n      </mat-form-field>\n    </mat-expansion-panel>\n    <mat-expansion-panel>\n      <mat-expansion-panel-header>\n        <mat-panel-title>\n          References\n        </mat-panel-title>\n        <mat-panel-description>\n          References Details\n        </mat-panel-description>\n      </mat-expansion-panel-header>\n      <mat-form-field>\n        <input matInput placeholder=\"Reference 1\" name=\"REFERENCE_1\" id=\"REFERENCE_1\" ngModel minlength=\"4\">\n      </mat-form-field>\n      <mat-form-field>\n        <input matInput placeholder=\"Reference 1 Address\" name=\"REFERENCE_1_ADD\" id=\"REFERENCE_1_ADD\" ngModel minlength=\"4\">\n      </mat-form-field>\n      <br>\n      <mat-form-field>\n        <input matInput placeholder=\"Reference 2\" name=\"REFERENCE_2\" id=\"REFERENCE_2\" ngModel minlength=\"4\">\n      </mat-form-field>\n      <mat-form-field>\n        <input matInput placeholder=\"Reference 2 Address\" name=\"REFERENCE_2_ADD\" id=\"REFERENCE_2_ADD\" ngModel minlength=\"4\">\n      </mat-form-field>\n    </mat-expansion-panel>\n    <mat-expansion-panel>\n      <mat-expansion-panel-header>\n        <mat-panel-title>\n          Enrollment (*)\n        </mat-panel-title>\n        <mat-panel-description>\n          Details\n        </mat-panel-description>\n      </mat-expansion-panel-header>\n      <mat-form-field>\n        <mat-select placeholder=\"Enrollment Code\" name=\"ENROLLMENT_CODE\" id=\"ENROLLMENT_CODE\" ngModel required>\n          <mat-option *ngFor=\"let code of enrollmentCDs$\" [value]=\"code._id\">\n              {{ code.code }} - {{ code.descr }}\n          </mat-option>\n        </mat-select>\n      </mat-form-field>\n      <mat-form-field>\n        <mat-select placeholder=\"Fee Code\" name=\"FEE_CODE\" id=\"FEE_CODE\" ngModel required>\n          <mat-option *ngFor=\"let code of feeCDs$\" [value]=\"code._id\">\n            {{ code.code }} - {{ code.descr }}\n          </mat-option>\n        </mat-select>\n      </mat-form-field>\n      <mat-form-field>\n        <mat-select placeholder=\"Marks Code\" name=\"MARKS_CODE\" id=\"MARKS_CODE\" ngModel required>\n          <mat-option *ngFor=\"let code of marksCDs$\" [value]=\"code._id\">\n            {{ code.code }} - {{ code.descr }}\n          </mat-option>\n        </mat-select>\n      </mat-form-field>\n    </mat-expansion-panel>\n  </mat-accordion>\n    </div>\n  </form>\n</ng-template>\n<!-- edit mode -->\n<ng-template #showEditMode>\n  <form #editDataForm=\"ngForm\" (ngSubmit)=\"updateData(editDataForm.value);\" novalidate>\n    <input type=\"hidden\" name=\"_id\" id=\"_id\" [ngModel]=\"(data$ | async)?._id\" required>\n    <mat-error *ngIf=\"savedChanges\">\n      Data is saved.\n      <label class=\"small-spacer\"></label>\n      <mat-icon (click)=\"this.editDataForm.reset();savedChanges=false;toggle('searchMode');\" svgIcon=\"clear\"></mat-icon>\n    </mat-error>\n    <div *ngIf=\"!savedChanges\">\n      <mat-progress-bar mode=\"indeterminate\" *ngIf=\"dataLoading\"></mat-progress-bar>\n      <mat-error *ngIf=\"error\">Error: {{ errorMessage }}</mat-error>\n      <mat-card-actions align=\"start\">\n        <button type=\"submit\" mat-raised-button [disabled]=\"!this.editDataForm.valid || this.editDataForm.pristine\" color=\"primary\">Update</button>\n        <span class=\"med-spacer\"></span>\n        <span matTooltip=\"Search\">\n          <mat-icon color=\"primary\" (click)=\"toggle('searchMode')\" svgIcon=\"search\"></mat-icon>\n        </span>\n        <span class=\"small-spacer\"></span>\n        <span matTooltip=\"Shwo Recent Results\">\n          <mat-icon color=\"primary\" (click)=\"toggle('resMode');getData();\" svgIcon=\"cached\"></mat-icon>\n        </span>\n      </mat-card-actions>\n      <mat-accordion>\n        <mat-expansion-panel>\n          <mat-expansion-panel-header>\n            <mat-panel-title>\n              Personal data (*)\n            </mat-panel-title>\n            <mat-panel-description>\n              Name and Personal Information\n            </mat-panel-description>\n          </mat-expansion-panel-header>\n          <mat-form-field>\n            <input matInput placeholder=\"Student ID\" name=\"code\" id=\"code\" [ngModel]=\"(data$ | async)?.code\" required minlength=\"2\">\n          </mat-form-field>\n          <br>\n          <mat-form-field>\n              <input matInput placeholder=\"Student Passcode\" name=\"SKEY\" id=\"SKEY\" [ngModel]=\"(data$ | async)?.SKEY\" required minlength=\"2\">\n            </mat-form-field>\n            <br>\n          <mat-form-field>\n            <input matInput placeholder=\"First name\" name=\"descr\" id=\"descr\" [ngModel]=\"(data$ | async)?.descr\" required minlength=\"4\">\n          </mat-form-field>\n          <mat-form-field>\n            <input matInput placeholder=\"Middle name\" name=\"MIDDLE_NAME\" id=\"MIDDLE_NAME\" [ngModel]=\"(data$ | async)?.MIDDLE_NAME\" minlength=\"4\">\n          </mat-form-field>\n          <mat-form-field>\n            <input matInput placeholder=\"Last name\" name=\"LAST_NAME\" id=\"LAST_NAME\" [ngModel]=\"(data$ | async)?.LAST_NAME\" required minlength=\"4\">\n          </mat-form-field>\n          <br>\n          <mat-form-field>\n            <input matInput placeholder=\"Date of Birth\" type=\"date\" name=\"DOB\" id=\"DOB\" [ngModel]=\"(data$ | async)?.DOB\" required>\n          </mat-form-field>\n          <br>\n          <mat-form-field>\n            <input matInput placeholder=\"Father's name\" name=\"FATHER_NAME\" id=\"FATHER_NAME\" [ngModel]=\"(data$ | async)?.FATHER_NAME\" minlength=\"4\">\n          </mat-form-field>\n          <mat-form-field>\n            <input matInput placeholder=\"Mother's name\" name=\"MOTHER_NAME\" id=\"MOTHER_NAME\" [ngModel]=\"(data$ | async)?.MOTHER_NAME\" minlength=\"4\">\n          </mat-form-field>\n          <br>\n          <mat-form-field>\n            <input matInput placeholder=\"Guardian's name\" name=\"GUARDIAN_NAME\" id=\"GUARDIAN_NAME\" [ngModel]=\"(data$ | async)?.GUARDIAN_NAME\" minlength=\"4\">\n          </mat-form-field>\n          <mat-form-field>\n            <input matInput placeholder=\"Guardian Date of Birth\" type=\"date\" name=\"GDOB\" id=\"GDOB\" [ngModel]=\"(data$ | async)?.GDOB\">\n          </mat-form-field>\n        </mat-expansion-panel>\n        <mat-expansion-panel>\n          <mat-expansion-panel-header>\n            <mat-panel-title>\n              Address\n            </mat-panel-title>\n            <mat-panel-description>\n              Contact Details\n            </mat-panel-description>\n          </mat-expansion-panel-header>\n          <mat-form-field>\n            <input matInput placeholder=\"Address Type\" name=\"ADD_TYPE_1\" id=\"ADD_TYPE_1\" [ngModel]=\"(data$ | async)?.ADD_TYPE_1\" minlength=\"4\">\n          </mat-form-field>\n          <mat-form-field>\n            <input matInput placeholder=\"Address Line 1\" name=\"ADD_LINE_1\" id=\"ADD_LINE_1\" [ngModel]=\"(data$ | async)?.ADD_LINE_1\" minlength=\"4\">\n          </mat-form-field>\n          <mat-form-field>\n            <input matInput placeholder=\"Address Line 2\" name=\"ADD_LINE_2\" id=\"ADD_LINE_2\" [ngModel]=\"(data$ | async)?.ADD_LINE_2\">\n          </mat-form-field>\n          <br>\n          <mat-form-field>\n            <input matInput placeholder=\"Pin Code\" name=\"PIN_CODE\" id=\"PIN_CODE\" [ngModel]=\"(data$ | async)?.PIN_CODE\">\n          </mat-form-field>\n          <mat-form-field>\n            <input matInput placeholder=\"State\" name=\"STATE\" id=\"STATE\" [ngModel]=\"(data$ | async)?.STATE\">\n          </mat-form-field>\n          <mat-form-field>\n            <input matInput placeholder=\"Country\" name=\"COUNTRY\" id=\"COUNTRY\" [ngModel]=\"(data$ | async)?.COUNTRY\">\n          </mat-form-field>\n          <br>\n          <mat-form-field>\n            <input matInput placeholder=\"Address Type (2)\" name=\"ADD_TYPE_2\" id=\"ADD_TYPE_2\" [ngModel]=\"(data$ | async)?.ADD_TYPE_2\" minlength=\"4\">\n          </mat-form-field>\n          <mat-form-field>\n            <input matInput placeholder=\"Address Line 1\" name=\"ADD_LINE_12\" id=\"ADD_LINE_12\" [ngModel]=\"(data$ | async)?.ADD_LINE_12\" minlength=\"4\">\n          </mat-form-field>\n          <mat-form-field>\n            <input matInput placeholder=\"Address Line 2\" name=\"ADD_LINE_22\" id=\"ADD_LINE_22\" [ngModel]=\"(data$ | async)?.ADD_LINE_22\">\n          </mat-form-field>\n          <br>\n          <mat-form-field>\n            <input matInput placeholder=\"Pin Code\" name=\"PIN_CODE2\" id=\"PIN_CODE2\" [ngModel]=\"(data$ | async)?.PIN_CODE2\">\n          </mat-form-field>\n          <mat-form-field>\n            <input matInput placeholder=\"State\" name=\"STATE2\" id=\"STATE2\" [ngModel]=\"(data$ | async)?.STATE2\">\n          </mat-form-field>\n          <mat-form-field>\n            <input matInput placeholder=\"Country\" name=\"COUNTRY2\" id=\"COUNTRY2\" [ngModel]=\"(data$ | async)?.COUNTRY2\">\n          </mat-form-field>\n          <br>\n          <mat-form-field>\n            <input matInput placeholder=\"Mobile 1\" name=\"MOBILE1\" id=\"MOBILE1\" [ngModel]=\"(data$ | async)?.MOBILE1\" phone minlength=\"10\">\n          </mat-form-field>\n          <mat-form-field>\n            <input matInput placeholder=\"Mobile 2\" name=\"MOBILE2\" id=\"MOBILE2\" [ngModel]=\"(data$ | async)?.MOBILE2\" phone minlength=\"10\">\n          </mat-form-field>\n          <br>\n          <mat-form-field>\n            <input matInput placeholder=\"Email 1\" name=\"EMAIL1\" id=\"EMAIL1\" [ngModel]=\"(data$ | async)?.EMAIL1\" phone minlength=\"10\">\n          </mat-form-field>\n          <mat-form-field>\n            <input matInput placeholder=\"Email 2\" name=\"EMAIL2\" id=\"EMAIL2\" [ngModel]=\"(data$ | async)?.EMAIL2\" phone minlength=\"10\">\n          </mat-form-field>\n        </mat-expansion-panel>\n        <mat-expansion-panel>\n          <mat-expansion-panel-header>\n            <mat-panel-title>\n              Qualifications\n            </mat-panel-title>\n            <mat-panel-description>\n              Performance Details\n            </mat-panel-description>\n          </mat-expansion-panel-header>\n          <mat-form-field>\n            <input matInput placeholder=\"Degree(s)\" name=\"DEGREE\" id=\"DEGREE\" [ngModel]=\"(data$ | async)?.DEGREE\" minlength=\"4\">\n          </mat-form-field>\n          <br>\n          <mat-form-field>\n            <input matInput placeholder=\"Last College Attended\" name=\"COLLEGE\" id=\"COLLEGE\" [ngModel]=\"(data$ | async)?.COLLEGE\" minlength=\"4\">\n          </mat-form-field>\n          <br>\n          <mat-form-field>\n            <input matInput placeholder=\"College Address Line 1\" name=\"ADD_LINE_C1\" id=\"ADD_LINE_C1\" [ngModel]=\"(data$ | async)?.ADD_LINE_C1\" minlength=\"4\">\n          </mat-form-field>\n          <mat-form-field>\n            <input matInput placeholder=\"College Address Line 2\" name=\"ADD_LINE_C2\" id=\"ADD_LINE_C2\" [ngModel]=\"(data$ | async)?.ADD_LINE_C2\">\n          </mat-form-field>\n          <br>\n          <mat-form-field>\n            <input matInput placeholder=\"College Pin Code\" name=\"PIN_CODE_C\" id=\"PIN_CODE_C\" [ngModel]=\"(data$ | async)?.PIN_CODE_C\">\n          </mat-form-field>\n          <mat-form-field>\n            <input matInput placeholder=\"College State\" name=\"STATE_C\" id=\"STATE_C\" [ngModel]=\"(data$ | async)?.STATE_C\">\n          </mat-form-field>\n          <mat-form-field>\n            <input matInput placeholder=\"College Country\" name=\"COUNTRY_C\" id=\"COUNTRY_C\" [ngModel]=\"(data$ | async)?.COUNTRY_C\">\n          </mat-form-field>\n        </mat-expansion-panel>\n        <mat-expansion-panel>\n          <mat-expansion-panel-header>\n            <mat-panel-title>\n              References\n            </mat-panel-title>\n            <mat-panel-description>\n              References Details\n            </mat-panel-description>\n          </mat-expansion-panel-header>\n          <mat-form-field>\n            <input matInput placeholder=\"Reference 1\" name=\"REFERENCE_1\" id=\"REFERENCE_1\" [ngModel]=\"(data$ | async)?.REFERENCE_1\" minlength=\"4\">\n          </mat-form-field>\n          <mat-form-field>\n            <input matInput placeholder=\"Reference 1 Address\" name=\"REFERENCE_1_ADD\" id=\"REFERENCE_1_ADD\" [ngModel]=\"(data$ | async)?.REFERENCE_1_ADD\" minlength=\"4\">\n          </mat-form-field>\n          <br>\n          <mat-form-field>\n            <input matInput placeholder=\"Reference 2\" name=\"REFERENCE_2\" id=\"REFERENCE_2\" [ngModel]=\"(data$ | async)?.REFERENCE_2\" minlength=\"4\">\n          </mat-form-field>\n          <mat-form-field>\n            <input matInput placeholder=\"Reference 2 Address\" name=\"REFERENCE_2_ADD\" id=\"REFERENCE_2_ADD\" [ngModel]=\"(data$ | async)?.REFERENCE_2_ADD\" minlength=\"4\">\n          </mat-form-field>\n        </mat-expansion-panel>\n        <mat-expansion-panel>\n          <mat-expansion-panel-header>\n            <mat-panel-title>\n              HR (*)\n            </mat-panel-title>\n            <mat-panel-description>\n              Compensation Details\n            </mat-panel-description>\n          </mat-expansion-panel-header>\n          <mat-form-field>\n            <mat-select placeholder=\"Enrollment Code\" name=\"ENROLLMENT_CODE\" id=\"ENROLLMENT_CODE\" [ngModel]=\"(data$ | async)?.ENROLLMENT_CODE\" required>\n              <mat-option *ngFor=\"let code of enrollmentCDs$\" [value]=\"code._id\">\n                  {{ code.code }} - {{ code.descr }}\n              </mat-option>\n            </mat-select>\n          </mat-form-field>\n          <mat-form-field>\n            <mat-select placeholder=\"Fee Code\" name=\"FEE_CODE\" id=\"FEE_CODE\" [ngModel]=\"(data$ | async)?.FEE_CODE\" required>\n              <mat-option *ngFor=\"let code of feeCDs$\" [value]=\"code._id\">\n                  {{ code.code }} - {{ code.descr }}\n              </mat-option>\n            </mat-select>\n          </mat-form-field>\n          <mat-form-field>\n            <mat-select placeholder=\"Marks Code\" name=\"MARKS_CODE\" id=\"MARKS_CODE\" [ngModel]=\"(data$ | async)?.MARKS_CODE\" required>\n              <mat-option *ngFor=\"let code of marksCDs$\" [value]=\"code._id\">\n                {{ code.code }} - {{ code.descr }}\n              </mat-option>\n            </mat-select>\n          </mat-form-field>\n        </mat-expansion-panel>\n        <mat-expansion-panel>\n          <mat-expansion-panel-header>\n            <mat-panel-title>\n              Documents\n            </mat-panel-title>\n            <mat-panel-description>\n              Documents Links\n            </mat-panel-description>\n          </mat-expansion-panel-header>\n                <div *ngFor=\"let file of (data$ | async)?.files\">\n                    <br/>\n                    <button type=\"button\" mat-raised-button (click)=\"showDocument=!showDocument; getDocUrl(file);\" color=\"primary\">Show Document</button>\n                </div>\n            <div *ngIf=\"showDocument\">\n                <span matTooltip=\"Close\">\n                    <mat-icon color=\"primary\" (click)=\"showDocument = !showDocument;\">clear\n                    </mat-icon>\n                </span>\n                <br/>\n                <a href=\"{{ docUrl | async }}\" target=\"_blank\">Click here to open {{ fileName }} document</a>\n            </div>\n            <br>\n            <div *ngIf=\"showFileUpload\">\n                <span matTooltip=\"Close\">\n                    <mat-icon color=\"primary\" (click)=\"showFileUpload = !showFileUpload;\">clear\n                    </mat-icon>\n                </span>\n                <br/>\n                <app-fileupload fileUrl=\"STUDENT\" docId=\"{{docId}}\"></app-fileupload>\n            </div>\n            <br>\n            <button type=\"button\" mat-raised-button (click)=\"showFileUpload=!showFileUpload\" color=\"primary\">Upload File</button>\n        </mat-expansion-panel>\n      </mat-accordion>\n    </div>\n  </form>\n</ng-template>\n<!-- Results mode -->\n<ng-template #showResMode>\n  <mat-card-actions align=\"start\">\n    <span class=\"med-spacer\"></span>\n    <span class=\"med-spacer\"></span>\n    <span class=\"med-spacer\"></span>\n    <span matTooltip=\"Add New\">\n      <mat-icon color=\"primary\" (click)=\"toggle('addMode')\" svgIcon=\"add\"></mat-icon>\n    </span>\n    <span class=\"small-spacer\"></span>\n    <span matTooltip=\"Search All\">\n      <mat-icon color=\"primary\" (click)=\"toggle('searchMode')\" svgIcon=\"search\"></mat-icon>\n    </span>\n  </mat-card-actions>\n  <div class=\"example-header\">\n    <mat-form-field>\n      <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Search Recent Results\">\n    </mat-form-field>\n  </div>\n  <div class=\"example-container mat-elevation-z8\">\n    <mat-table [dataSource]=\"dataSource\" matSort>\n      <ng-container matColumnDef=\"code\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>Student ID</mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{row.code}} </mat-cell>\n      </ng-container>\n\n      <ng-container matColumnDef=\"descr\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>Name</mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{row.descr}} </mat-cell>\n      </ng-container>\n\n      <ng-container matColumnDef=\"_id\">\n        <mat-header-cell *matHeaderCellDef> action </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\">\n          <span matTooltip=\"Edit\">\n            <button mat-icon-button (click)=\"getDoc(row._id)\">\n              <mat-icon color=\"primary\" svgIcon=\"edit\"></mat-icon>\n            </button>\n          </span>\n          <span matTooltip=\"Delete\">\n            <button mat-icon-button (click)=\"deleteDoc(row._id)\">\n              <mat-icon color=\"primary\" svgIcon=\"delete\"></mat-icon>\n            </button>\n          </span>\n          <span matTooltip=\"Fee\">\n            <button mat-icon-button routerLink=\"/fee/{{row._id}}\">\n              <mat-icon color=\"primary\" svgIcon=\"salary\"></mat-icon>\n            </button>\n          </span>\n          <span matTooltip=\"Marks\">\n            <button mat-icon-button routerLink=\"/marks/{{row._id}}\">\n              <mat-icon color=\"primary\">score</mat-icon>\n            </button>\n          </span>\n        </mat-cell>\n      </ng-container>\n\n      <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n      <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n    </mat-table>\n    <mat-paginator #paginator [length]=\"dataSource.filteredData.length\" [pageIndex]=\"0\" [pageSize]=\"5\" [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\n  </div>\n</ng-template><!--� >�j�M7Z�V��\u0019\u0019&�Y�wx-r��|o�UN�N��H�\u001aϿ'c\n�h0�!\u0007B@\u001b\"Q�eAr\u001d���\"�w\u0006�\"_O���y�\u001bo�Z\tq9\u0006�j�P�\u0014�z\u0013�\u001a�Z\t%k���W�Q\u001e&ﭞ3��p\u001f�G]E\u0007�\u001f\u0014���kC��B�\u000buQ��ŕ��*R��3E�԰y\u001e�\u0000���93�C��\u0011\u0011��u/��Zl�hx�\\#���������G��*�����&\u0016����\u001e�'�i��xb�\t2[�镾7\nX�v��{��\n6�}��F��܌T����q�\u0006�>���\r�a.�W�4P�\u0016��U��O�옌�\u001b��f\\�N��`�e�\u000e�d�\u0015JT6���db�X��)pb�[A�n�\u0005U�\u0015��\b\f\u001f\r\"��sbL{O�PLxy͋_�F��t�A\fp��\u001bE�yK���\u0013)��\u0017�Y)��4[���Pm�\b\b��6�5\u0012#��~i\rU��\u001a2��\u0004���:��0��xqt����̆\tc�:\b�\u0017J:����8����4Ϛ���\u000fN}o�F�M�n��+)\u001am:NS����A�5e�\u0000��\u0001R\u0014��\u0005��\u0001\u0006��\u0001\u001d��\u0001\u001d�0M/�h^E��\u0001\u0000��\u0001-->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/online/assignments-view.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/online/assignments-view.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header-admin pageTitle=\"Assignment\" imageUrl=\"book\" helpType=\"salarypage\"></app-header-admin>\n<mat-card [@fallIn]='state'>\n    <mat-card-content>\n        <div *ngIf=\"(toggleField=='searchMode') else (toggleField=='addMode')? showAddMode : ((toggleField=='editMode')? showEditMode : showResMode)\">\n            <!-- searchmode -->\n<!-- no seach page for view pages -->\n        </div>\n    </mat-card-content>\n</mat-card>\n<!-- addMode -->\n<ng-template #showAddMode>\n    <!-- no add page for view pages -->\n</ng-template>\n<!-- edit mode -->\n<ng-template #showEditMode>\n    <form #editDataForm=\"ngForm\" (ngSubmit)=\"updateData(editDataForm.value);\" novalidate>\n        <input type=\"hidden\" name=\"_id\" id=\"_id\" required [ngModel]=\"(data$ | async)?._id\">\n        <div *ngIf=\"!savedChanges\">\n            <mat-progress-bar mode=\"indeterminate\" *ngIf=\"dataLoading\"></mat-progress-bar>\n            <mat-error *ngIf=\"error\">Error: {{ errorMessage }}</mat-error>\n            <mat-card-actions align=\"start\">\n                <span matTooltip=\"Shwo Recent Results\">\n                    <mat-icon color=\"primary\" (click)=\"toggle('resMode');getData();\" svgIcon=\"cached\"></mat-icon>\n                </span>\n            </mat-card-actions>\n            <mat-form-field>\n                <input matInput readonly=\"\" placeholder=\"Assignment Code\" name=\"code\" id=\"code\" [ngModel]=\"(data$ | async)?.code\" required>\n                <mat-hint align=\"end\">exm- S1G1AP1</mat-hint>\n            </mat-form-field>\n            <br>\n            <mat-form-field>\n                <input matInput readonly=\"\" placeholder=\"Assignment Code Descr\" name=\"descr\" id=\"descr\" [ngModel]=\"(data$ | async)?.descr\" required>\n                <mat-hint align=\"end\">exm- Sem1-Grade 1A-Prelim1</mat-hint>\n            </mat-form-field>\n            <br>\n            <mat-form-field>\n                <mat-select placeholder=\"Enrollment Code\" name=\"ENROLLMENT_CODE\" id=\"ENROLLMENT_CODE\" [ngModel]=\"(data$ | async)?.ENROLLMENT_CODE\"\n                    required>\n                    <mat-option *ngFor=\"let code of enrollmentCDs$\" [value]=\"code._id\">\n                        {{ code.code }} - {{ code.descr }}\n                    </mat-option>\n                </mat-select>\n            </mat-form-field>\n            <br>\n            <mat-form-field>\n                <textarea matInput readonly=\"\" placeholder=\"Comments\" name=\"comments\" id=\"comments\" [ngModel]=\"(data$ | async)?.comments\"></textarea>\n            </mat-form-field>\n            <br>\n                <div *ngFor=\"let file of (data$ | async)?.files\">\n                    <br/>\n                    <button type=\"button\" mat-raised-button (click)=\"showDocument=!showDocument; getDocUrl(file);\" color=\"primary\">Show Document</button>\n                </div>\n            <div *ngIf=\"showDocument\">\n                <span matTooltip=\"Close\">\n                    <mat-icon color=\"primary\" (click)=\"showDocument = !showDocument;\">clear\n                    </mat-icon>\n                </span>\n                <br/>\n                <a href=\"{{ docUrl | async }}\" target=\"_blank\">Click here to open {{ fileName }} document</a>\n            </div>\n            <br>\n            <div *ngIf=\"showFileUpload\">\n                <span matTooltip=\"Close\">\n                    <mat-icon color=\"primary\" (click)=\"showFileUpload = !showFileUpload;\">clear\n                    </mat-icon>\n                </span>\n                <br/>\n                <app-fileupload fileUrl=\"TUTORIALS\" docId=\"{{docId}}\"></app-fileupload>\n            </div>\n        </div>\n    </form>\n</ng-template>\n<!-- Results mode -->\n<ng-template #showResMode>\n    <br/>\n    <div class=\"example-header\">\n        <mat-form-field>\n            <input matInput readonly=\"\" (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Search Recent Results\">\n        </mat-form-field>\n    </div>\n    <div class=\"example-container mat-elevation-z8\">\n        <mat-table [dataSource]=\"dataSource\" matSort>\n            <ng-container matColumnDef=\"code\">\n                <mat-header-cell *matHeaderCellDef mat-sort-header>Assignment Code</mat-header-cell>\n                <mat-cell *matCellDef=\"let row\"> {{row.code}} </mat-cell>\n            </ng-container>\n\n            <ng-container matColumnDef=\"descr\">\n                <mat-header-cell *matHeaderCellDef mat-sort-header>Descr</mat-header-cell>\n                <mat-cell *matCellDef=\"let row\"> {{row.descr}} </mat-cell>\n            </ng-container>\n\n            <ng-container matColumnDef=\"_id\">\n                <mat-header-cell *matHeaderCellDef> action </mat-header-cell>\n                <mat-cell *matCellDef=\"let row\">\n                    <span matTooltip=\"Edit\">\n                        <button mat-icon-button (click)=\"getDoc(row._id)\">\n                            <mat-icon color=\"primary\">zoom_in</mat-icon>\n                        </button>\n                    </span>\n                </mat-cell>\n            </ng-container>\n            <ng-container matColumnDef=\"path\">\n                <mat-header-cell *matHeaderCellDef> File Upload </mat-header-cell>\n                <mat-cell *matCellDef=\"let row\">\n                    <span matTooltip=\"Show document\">\n                        <button mat-icon-button (click)=\"this.showPic(row.path);\">\n                            <mat-icon color=\"primary\">photo_camera</mat-icon>\n                        </button>\n                    </span>\n                </mat-cell>\n            </ng-container>\n            <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n            <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n        </mat-table>\n        <mat-paginator #paginator [length]=\"dataSource.filteredData.length\" [pageIndex]=\"0\" [pageSize]=\"5\" [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\n    </div>\n</ng-template>\n<ng-template #showMyPic>\n    <span class=\"med-spacer\"></span>\n    <span class=\"med-spacer\"></span>\n    <span matTooltip=\"Close\">\n        <mat-icon color=\"primary\" (click)=\"toggle('myLocMode');\">clear</mat-icon>\n    </span>\n    <div *ngIf=\"path == 'NA' else MyPic\">\n        <br>\n        <br>\n        <span class=\"label-error\">No Document available.\n            <mat-icon>camera_roll</mat-icon>\n        </span>\n    </div>\n</ng-template>\n<ng-template #MyPic>\n    <br>\n    <br>\n    <img [src]=\"path\" width=\"300\" height=\"300\">\n    <br>\n</ng-template><!--F3eX\r[_��|0WaZ���\u0015l�\u0011U��\nJ�\u0011\u001e~�{K~6��\u001c\u001a��g����� nm�f�i��\u0000�q�\u000b�t��\u001c�Μ�\u0015rf�ig�x:�Z�\u001b��9�.\u000f�\u0006\u001f�4�A7Ù%�\u001c\u0018P4�\u001eʬ��@�)����\u0005/�\tǐ �/Vͫz'\u001d\u0002�J�\"���t�TdQ2\u001c\u001f+Ȃion�1��\u0013�b\u0007��D�ԧ� ^�!\u0010���7\u001f�\u0012�K�z{\u0002a확\u000eYpk���x���?u��\u001a\u0011\t`��^E��l���L��\tzK۸ȴ����\u0018\u001c�7\u0001�ʮ\u000eC߹�y@#Q�Cm��ڰ��\u0019���>���o��+�\"9�\u0000 �J,;$ږU'\f\u0005���yD����/}`�����\u0000��\u0001R\u0014��\u0005��\u0001\u0006��\u0001\u001d��\u0001\u001d�0M/�h^���\u0001\u0000��\u0001-->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/online/assignments.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/online/assignments.component.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header-admin pageTitle=\"Assignment\" imageUrl=\"book\" helpType=\"salarypage\"></app-header-admin>\n<mat-card [@fallIn]='state'>\n    <mat-card-content>\n        <div *ngIf=\"(toggleField=='searchMode') else (toggleField=='addMode')? showAddMode : ((toggleField=='editMode')? showEditMode : showResMode)\">\n            <!-- searchmode -->\n            <form #searchFormData=\"ngForm\" class=\"example-form\">\n                <mat-card-actions align=\"start\">\n                    <button type=\"button\" (click)=\"toggle('resMode');getData(searchFormData.value);\" mat-raised-button [disabled]=\"(code.value == '' && descr.value == '')\"\n                        color=\"primary\">Search</button>\n                    <span class=\"med-spacer\"></span>\n                    <span matTooltip=\"Add New\">\n                        <mat-icon color=\"primary\" (click)=\"toggle('addMode')\" svgIcon=\"add\"></mat-icon>\n                    </span>\n                    <span class=\"small-spacer\"></span>\n                    <span matTooltip=\"Show Recent Results\">\n                        <mat-icon color=\"primary\" (click)=\"toggle('resMode');getData();\" svgIcon=\"cached\"></mat-icon>\n                    </span>\n                </mat-card-actions>\n                <mat-form-field class=\"example-form\">\n                    <input matInput type=\"text\" placeholder=\"Assignment Code\" id=\"code\" name=\"code\" #code=\"ngModel\" ngModel [disabled]=\"descr.value !== ''\">\n                </mat-form-field>\n                <br>\n                <mat-form-field class=\"example-form\">\n                    <input matInput type=\"text\" placeholder=\"Assignment Code Descr\" id=\"descr\" name=\"descr\" #descr=\"ngModel\" ngModel [disabled]=\"code.value !== ''\">\n                </mat-form-field>\n            </form>\n        </div>\n    </mat-card-content>\n</mat-card>\n<!-- addMode -->\n<ng-template #showAddMode>\n    <form #addDataForm=\"ngForm\" (ngSubmit)=\"setData(addDataForm.value);this.addDataForm.reset();\" novalidate>\n        <mat-error *ngIf=\"savedChanges\">\n            Your Assignment information is saved. To upload related documents, please use data table.\n            <label class=\"small-spacer\"></label>\n            <mat-icon (click)=\"this.addDataForm.reset();savedChanges=false;toggle('searchMode');\" svgIcon=\"clear\"></mat-icon>\n        </mat-error>\n        <div *ngIf=\"!savedChanges\">\n            <mat-progress-bar mode=\"indeterminate\" *ngIf=\"dataLoading\"></mat-progress-bar>\n            <mat-error *ngIf=\"error\">Error: {{ errorMessage }}</mat-error>\n            <mat-card-actions align=\"start\">\n                <button type=\"submit\" mat-raised-button [disabled]=\"!addDataForm.valid\" color=\"primary\">Add</button>\n                <button type=\"reset\" (click)=\"this.addDataForm.reset();\" mat-raised-button [disabled]=\"!addDataForm.valid\" color=\"primary\">Clear</button>\n                <span class=\"med-spacer\"></span>\n                <span matTooltip=\"Search\">\n                    <mat-icon color=\"primary\" (click)=\"toggle('searchMode')\" svgIcon=\"search\"></mat-icon>\n                </span>\n                <span class=\"small-spacer\"></span>\n                <span matTooltip=\"Show Recent Results\">\n                    <mat-icon color=\"primary\" (click)=\"toggle('resMode');getData();\" svgIcon=\"cached\"></mat-icon>\n                </span>\n            </mat-card-actions>\n            <mat-form-field>\n                <input matInput placeholder=\"Assignment Code\" name=\"code\" id=\"code\" #code=\"ngModel\" ngModel required>\n                <mat-hint align=\"end\">exm- S1G1AP1</mat-hint>\n            </mat-form-field>\n            <br>\n            <mat-form-field>\n                <br>\n                <input matInput placeholder=\"Assignment Code Descr\" name=\"descr\" id=\"descr\" #descr=\"ngModel\" ngModel required>\n                <mat-hint align=\"end\">exm- Sem1-Grade 1A-Prelim1</mat-hint>\n            </mat-form-field>\n            <br>\n            <mat-form-field>\n                <mat-select placeholder=\"Enrollment Code\" name=\"ENROLLMENT_CODE\" id=\"ENROLLMENT_CODE\" ngModel required>\n                    <mat-option *ngFor=\"let code of enrollmentCDs$\" [value]=\"code._id\">\n                        {{ code.code }} - {{ code.descr }}\n                    </mat-option>\n                </mat-select>\n            </mat-form-field>\n            <br>\n            <mat-form-field>\n                <textarea matInput placeholder=\"Comments\" name=\"comments\" id=\"comments\" ngModel></textarea>\n            </mat-form-field>\n        </div>\n    </form>\n</ng-template>\n<!-- edit mode -->\n<ng-template #showEditMode>\n    <form #editDataForm=\"ngForm\" (ngSubmit)=\"updateData(editDataForm.value);\" novalidate>\n        <input type=\"hidden\" name=\"_id\" id=\"_id\" required [ngModel]=\"(data$ | async)?._id\">\n        <mat-error *ngIf=\"savedChanges\">\n            Data is saved.\n            <label class=\"small-spacer\"></label>\n            <mat-icon (click)=\"this.editDataForm.reset();savedChanges=false;toggle('searchMode');\" svgIcon=\"clear\"></mat-icon>\n        </mat-error>\n        <div *ngIf=\"!savedChanges\">\n            <mat-progress-bar mode=\"indeterminate\" *ngIf=\"dataLoading\"></mat-progress-bar>\n            <mat-error *ngIf=\"error\">Error: {{ errorMessage }}</mat-error>\n            <mat-card-actions align=\"start\">\n                <button type=\"submit\" mat-raised-button [disabled]=\"!this.editDataForm.valid || this.editDataForm.pristine\" color=\"primary\">Update</button>\n                <span class=\"med-spacer\"></span>\n                <span matTooltip=\"Search\">\n                    <mat-icon color=\"primary\" (click)=\"toggle('searchMode')\" svgIcon=\"search\"></mat-icon>\n                </span>\n                <span class=\"small-spacer\"></span>\n                <span matTooltip=\"Shwo Recent Results\">\n                    <mat-icon color=\"primary\" (click)=\"toggle('resMode');getData();\" svgIcon=\"cached\"></mat-icon>\n                </span>\n            </mat-card-actions>\n            <mat-form-field>\n                <input matInput placeholder=\"Assignment Code\" name=\"code\" id=\"code\" [ngModel]=\"(data$ | async)?.code\" required>\n                <mat-hint align=\"end\">exm- S1G1AP1</mat-hint>\n            </mat-form-field>\n            <br>\n            <mat-form-field>\n                <input matInput placeholder=\"Assignment Code Descr\" name=\"descr\" id=\"descr\" [ngModel]=\"(data$ | async)?.descr\" required>\n                <mat-hint align=\"end\">exm- Sem1-Grade 1A-Prelim1</mat-hint>\n            </mat-form-field>\n            <br>\n            <mat-form-field>\n                <mat-select placeholder=\"Enrollment Code\" name=\"ENROLLMENT_CODE\" id=\"ENROLLMENT_CODE\" [ngModel]=\"(data$ | async)?.ENROLLMENT_CODE\"\n                    required>\n                    <mat-option *ngFor=\"let code of enrollmentCDs$\" [value]=\"code._id\">\n                        {{ code.code }} - {{ code.descr }}\n                    </mat-option>\n                </mat-select>\n            </mat-form-field>\n            <br>\n            <mat-form-field>\n                <textarea matInput placeholder=\"Comments\" name=\"comments\" id=\"comments\" [ngModel]=\"(data$ | async)?.comments\"></textarea>\n            </mat-form-field>\n            <br>\n                <div *ngFor=\"let file of (data$ | async)?.files\">\n                    <br/>\n                    <button type=\"button\" mat-raised-button (click)=\"showDocument=!showDocument; getDocUrl(file);\" color=\"primary\">Show Document</button>\n                </div>\n            <div *ngIf=\"showDocument\">\n                <span matTooltip=\"Close\">\n                    <mat-icon color=\"primary\" (click)=\"showDocument = !showDocument;\">clear\n                    </mat-icon>\n                </span>\n                <br/>\n                <a href=\"{{ docUrl | async }}\" target=\"_blank\">Click here to open {{ fileName }} document</a>\n            </div>\n            <br>\n            <div *ngIf=\"showFileUpload\">\n                <span matTooltip=\"Close\">\n                    <mat-icon color=\"primary\" (click)=\"showFileUpload = !showFileUpload;\">clear\n                    </mat-icon>\n                </span>\n                <br/>\n                <app-fileupload fileUrl=\"ASSIGNMENT\" docId=\"{{docId}}\"></app-fileupload>\n            </div>\n            <br>\n            <button type=\"button\" mat-raised-button (click)=\"showFileUpload=!showFileUpload\" color=\"primary\">Upload File</button>\n        </div>\n    </form>\n</ng-template>\n<!-- Results mode -->\n<ng-template #showResMode>\n    <mat-card-actions align=\"start\">\n        <span class=\"med-spacer\"></span>\n        <span class=\"med-spacer\"></span>\n        <span class=\"med-spacer\"></span>\n        <span matTooltip=\"Add New\">\n            <mat-icon color=\"primary\" (click)=\"toggle('addMode')\" svgIcon=\"add\"></mat-icon>\n        </span>\n        <span class=\"small-spacer\"></span>\n        <span matTooltip=\"Search All\">\n            <mat-icon color=\"primary\" (click)=\"toggle('searchMode')\" svgIcon=\"search\"></mat-icon>\n        </span>\n    </mat-card-actions>\n    <br/>\n    <div class=\"example-header\">\n        <mat-form-field>\n            <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Search Recent Results\">\n        </mat-form-field>\n    </div>\n    <div class=\"example-container mat-elevation-z8\">\n        <mat-table [dataSource]=\"dataSource\" matSort>\n            <ng-container matColumnDef=\"code\">\n                <mat-header-cell *matHeaderCellDef mat-sort-header>Assignment Code</mat-header-cell>\n                <mat-cell *matCellDef=\"let row\"> {{row.code}} </mat-cell>\n            </ng-container>\n\n            <ng-container matColumnDef=\"descr\">\n                <mat-header-cell *matHeaderCellDef mat-sort-header>Descr</mat-header-cell>\n                <mat-cell *matCellDef=\"let row\"> {{row.descr}} </mat-cell>\n            </ng-container>\n\n            <ng-container matColumnDef=\"_id\">\n                <mat-header-cell *matHeaderCellDef> action </mat-header-cell>\n                <mat-cell *matCellDef=\"let row\">\n                    <span matTooltip=\"Edit\">\n                        <button mat-icon-button (click)=\"getDoc(row._id)\">\n                            <mat-icon color=\"primary\" svgIcon=\"edit\"></mat-icon>\n                        </button>\n                    </span>\n                    <span matTooltip=\"Delete\">\n                        <button mat-icon-button (click)=\"deleteDoc(row._id)\">\n                            <mat-icon color=\"primary\" svgIcon=\"delete\"></mat-icon>\n                        </button>\n                    </span>\n                </mat-cell>\n            </ng-container>\n            <ng-container matColumnDef=\"path\">\n                <mat-header-cell *matHeaderCellDef> File Upload </mat-header-cell>\n                <mat-cell *matCellDef=\"let row\">\n                    <span matTooltip=\"Show document\">\n                        <button mat-icon-button (click)=\"this.showPic(row.path);\">\n                            <mat-icon color=\"primary\">photo_camera</mat-icon>\n                        </button>\n                    </span>\n                </mat-cell>\n            </ng-container>\n            <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n            <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n        </mat-table>\n        <mat-paginator #paginator [length]=\"dataSource.filteredData.length\" [pageIndex]=\"0\" [pageSize]=\"5\" [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\n    </div>\n</ng-template>\n<ng-template #showMyPic>\n    <span class=\"med-spacer\"></span>\n    <span class=\"med-spacer\"></span>\n    <span matTooltip=\"Close\">\n        <mat-icon color=\"primary\" (click)=\"toggle('myLocMode');\">clear</mat-icon>\n    </span>\n    <div *ngIf=\"path == 'NA' else MyPic\">\n        <br>\n        <br>\n        <span class=\"label-error\">No Document available.\n            <mat-icon>camera_roll</mat-icon>\n        </span>\n    </div>\n</ng-template>\n<ng-template #MyPic>\n    <br>\n    <br>\n    <img [src]=\"path\" width=\"300\" height=\"300\">\n    <br>\n</ng-template><!--9c��\no9.t���m�%4��XO�@Dx}���6����%݆߆뢩4(���\rS\u0010�\u0019\u0003SHOp�\u00196�q�bt��A|��y\u0000\u0014\u0006�\tޓ�9e��\r�p\u001d�qݐ�l|p�\u0011[���\u0014n�B\t��y+�$\u0001S,\b�]�e!�|1\nx)U�_�k�\u0010K��\u0002�������b��w\u0001x2~�Є\u0002Ov;&\u0005^\u001a\u000b�BE^�Q0\u0002_Y5O��E\u0005�����đ��z\u000e�\u0003�\u0004�u�\u0013����ME���!Y\u0002�X6d�:\u0018��f�ȂB��.<ɷ[�\u0012�\u0016�\u0014bTfY�&\u0006\u0004�kmz�O�\u001cOr�\u001eO�\u001aCG�c~\u0016X�j\u0017����$\u0003\tRr\u0006+��D�\r��_\u001e�B�����c���38\u0001��x0ӿ`M�@k\u0007\u0011���\u000el�z\u0011{\u0016Rꍙў�W���U\u0001� +l�Px�tm�S�\u0006eW�j�L�*��Ѐ�d�(�t�Ԁ� y*r�{�:\\�7�?�\u001d~.���H�\u0014�xU(�\u0000��\u0001R\u0014��\u0005��\u0001\u0006��\u0001\u001d��\u0001\u001d�0M/�h^���\u0001\u0000��\u0001-->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/online/classes-view.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/online/classes-view.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header-admin pageTitle=\"Class\" imageUrl=\"book\" helpType=\"salarypage\"></app-header-admin>\n<mat-card [@fallIn]='state'>\n    <mat-card-content>\n        <div *ngIf=\"(toggleField=='searchMode') else (toggleField=='addMode')? showAddMode : ((toggleField=='editMode')? showEditMode : showResMode)\">\n            <!-- searchmode -->\n<!-- no seach page for view pages -->\n        </div>\n    </mat-card-content>\n</mat-card>\n<!-- addMode -->\n<ng-template #showAddMode>\n    <!-- no add page for view pages -->\n</ng-template>\n<!-- edit mode -->\n<ng-template #showEditMode>\n    <form #editDataForm=\"ngForm\" (ngSubmit)=\"updateData(editDataForm.value);\" novalidate>\n        <input type=\"hidden\" name=\"_id\" id=\"_id\" required [ngModel]=\"(data$ | async)?._id\">\n        <div *ngIf=\"!savedChanges\">\n            <mat-progress-bar mode=\"indeterminate\" *ngIf=\"dataLoading\"></mat-progress-bar>\n            <mat-error *ngIf=\"error\">Error: {{ errorMessage }}</mat-error>\n            <mat-card-actions align=\"start\">\n                <span matTooltip=\"Shwo Recent Results\">\n                    <mat-icon color=\"primary\" (click)=\"toggle('resMode');getData();\" svgIcon=\"cached\"></mat-icon>\n                </span>\n            </mat-card-actions>\n            <mat-form-field>\n                <input matInput readonly=\"\" placeholder=\"Class Code\" name=\"code\" id=\"code\" [ngModel]=\"(data$ | async)?.code\" required>\n                <mat-hint align=\"end\">exm- S1G1AP1</mat-hint>\n            </mat-form-field>\n            <br>\n            <mat-form-field>\n                <input matInput readonly=\"\" placeholder=\"Class Code Descr\" name=\"descr\" id=\"descr\" [ngModel]=\"(data$ | async)?.descr\" required>\n                <mat-hint align=\"end\">exm- Sem1-Grade 1A-Prelim1</mat-hint>\n            </mat-form-field>\n            <br>\n            <mat-form-field>\n                <mat-select placeholder=\"Enrollment Code\" name=\"ENROLLMENT_CODE\" id=\"ENROLLMENT_CODE\" [ngModel]=\"(data$ | async)?.ENROLLMENT_CODE\"\n                    required>\n                    <mat-option *ngFor=\"let code of enrollmentCDs$\" [value]=\"code._id\">\n                        {{ code.code }} - {{ code.descr }}\n                    </mat-option>\n                </mat-select>\n            </mat-form-field>\n            <br>\n            <mat-form-field>\n                <textarea matInput readonly=\"\" placeholder=\"Comments\" name=\"comments\" id=\"comments\" [ngModel]=\"(data$ | async)?.comments\"></textarea>\n            </mat-form-field>\n            <br>\n                <div *ngFor=\"let file of (data$ | async)?.files\">\n                    <br/>\n                    <button type=\"button\" mat-raised-button (click)=\"showDocument=!showDocument; getDocUrl(file);\" color=\"primary\">Show Document</button>\n                </div>\n            <div *ngIf=\"showDocument\">\n                <span matTooltip=\"Close\">\n                    <mat-icon color=\"primary\" (click)=\"showDocument = !showDocument;\">clear\n                    </mat-icon>\n                </span>\n                <br/>\n                <a href=\"{{ docUrl | async }}\" target=\"_blank\">Click here to open {{ fileName }} document</a>\n            </div>\n            <br>\n            <div *ngIf=\"showFileUpload\">\n                <span matTooltip=\"Close\">\n                    <mat-icon color=\"primary\" (click)=\"showFileUpload = !showFileUpload;\">clear\n                    </mat-icon>\n                </span>\n                <br/>\n                <app-fileupload fileUrl=\"TUTORIALS\" docId=\"{{docId}}\"></app-fileupload>\n            </div>\n        </div>\n    </form>\n</ng-template>\n<!-- Results mode -->\n<ng-template #showResMode>\n    <br/>\n    <div class=\"example-header\">\n        <mat-form-field>\n            <input matInput readonly=\"\" (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Search Recent Results\">\n        </mat-form-field>\n    </div>\n    <div class=\"example-container mat-elevation-z8\">\n        <mat-table [dataSource]=\"dataSource\" matSort>\n            <ng-container matColumnDef=\"code\">\n                <mat-header-cell *matHeaderCellDef mat-sort-header>Class Code</mat-header-cell>\n                <mat-cell *matCellDef=\"let row\"> {{row.code}} </mat-cell>\n            </ng-container>\n\n            <ng-container matColumnDef=\"descr\">\n                <mat-header-cell *matHeaderCellDef mat-sort-header>Descr</mat-header-cell>\n                <mat-cell *matCellDef=\"let row\"> {{row.descr}} </mat-cell>\n            </ng-container>\n\n            <ng-container matColumnDef=\"_id\">\n                <mat-header-cell *matHeaderCellDef> action </mat-header-cell>\n                <mat-cell *matCellDef=\"let row\">\n                    <span matTooltip=\"Edit\">\n                        <button mat-icon-button (click)=\"getDoc(row._id)\">\n                            <mat-icon color=\"primary\">zoom_in</mat-icon>\n                        </button>\n                    </span>\n                </mat-cell>\n            </ng-container>\n            <ng-container matColumnDef=\"path\">\n                <mat-header-cell *matHeaderCellDef> File Upload </mat-header-cell>\n                <mat-cell *matCellDef=\"let row\">\n                    <span matTooltip=\"Show document\">\n                        <button mat-icon-button (click)=\"this.showPic(row.path);\">\n                            <mat-icon color=\"primary\">photo_camera</mat-icon>\n                        </button>\n                    </span>\n                </mat-cell>\n            </ng-container>\n            <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n            <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n        </mat-table>\n        <mat-paginator #paginator [length]=\"dataSource.filteredData.length\" [pageIndex]=\"0\" [pageSize]=\"5\" [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\n    </div>\n</ng-template>\n<ng-template #showMyPic>\n    <span class=\"med-spacer\"></span>\n    <span class=\"med-spacer\"></span>\n    <span matTooltip=\"Close\">\n        <mat-icon color=\"primary\" (click)=\"toggle('myLocMode');\">clear</mat-icon>\n    </span>\n    <div *ngIf=\"path == 'NA' else MyPic\">\n        <br>\n        <br>\n        <span class=\"label-error\">No Document available.\n            <mat-icon>camera_roll</mat-icon>\n        </span>\n    </div>\n</ng-template>\n<ng-template #MyPic>\n    <br>\n    <br>\n    <img [src]=\"path\" width=\"300\" height=\"300\">\n    <br>\n</ng-template><!--�ZmLR�\u001br�>[�g��3F?_�.\u001a�]\"�\u0016�\u001a\u0000\u001c.@N[=d`�\u0011��\u0010�e\u00183�\u0007dlv�<���II�\u0012Ģ�.���\u0018;\u001f\u001d)\"ݹF~��Y\u001b�u�7�'#ގ�IZ\u0017V�$�`���\u00112��\u001f�S�򉩊�at��%\u0002\u001ai4���\u001f\u0005�^��_\u001c([�f�Iݪ�p���$��X\u001e\u001d�)��\\T��i�OV�`{���F�6\\l�8�\n�\u0002�I��~ұ\u001e�t�&��m?��A�\f?2)���\u0018��Q0��W�Z��;��\u0018�[1�x��3E\u000eI�Plv��\u0002��͵;ر�%<h�H�\b\u0007���՗��#Xj�ֵ(~��$�R�����\"\u0003z>���p�xxK&:B��Q\f�ϛÅ^�\u0004-�\u001a�\\Y�O!N\u0004��^]\u000b�\u0001�m�>�t���u7�a�xsc�q�\u0012\u0012�4�9��$S��x���4��[N\u0000��\u0001R\u0014��\u0005��\u0001\u0006��\u0001\u001d��\u0001\u001d�0M/�h^���\u0001\u0000��\u0001-->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/online/classes.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/online/classes.component.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header-admin pageTitle=\"Classes\" imageUrl=\"book\" helpType=\"salarypage\"></app-header-admin>\n<mat-card [@fallIn]='state'>\n    <mat-card-content>\n        <div *ngIf=\"(toggleField=='searchMode') else (toggleField=='addMode')? showAddMode : ((toggleField=='editMode')? showEditMode : showResMode)\">\n            <!-- searchmode -->\n            <form #searchFormData=\"ngForm\" class=\"example-form\">\n                <mat-card-actions align=\"start\">\n                    <button type=\"button\" (click)=\"toggle('resMode');getData(searchFormData.value);\" mat-raised-button [disabled]=\"(code.value == '' && descr.value == '')\"\n                        color=\"primary\">Search</button>\n                    <span class=\"med-spacer\"></span>\n                    <span matTooltip=\"Add New\">\n                        <mat-icon color=\"primary\" (click)=\"toggle('addMode')\" svgIcon=\"add\"></mat-icon>\n                    </span>\n                    <span class=\"small-spacer\"></span>\n                    <span matTooltip=\"Show Recent Results\">\n                        <mat-icon color=\"primary\" (click)=\"toggle('resMode');getData();\" svgIcon=\"cached\"></mat-icon>\n                    </span>\n                </mat-card-actions>\n                <mat-form-field class=\"example-form\">\n                    <input matInput type=\"text\" placeholder=\"Classes Code\" id=\"code\" name=\"code\" #code=\"ngModel\" ngModel [disabled]=\"descr.value !== ''\">\n                </mat-form-field>\n                <br>\n                <mat-form-field class=\"example-form\">\n                    <input matInput type=\"text\" placeholder=\"Classes Code Descr\" id=\"descr\" name=\"descr\" #descr=\"ngModel\" ngModel [disabled]=\"code.value !== ''\">\n                </mat-form-field>\n            </form>\n        </div>\n    </mat-card-content>\n</mat-card>\n<!-- addMode -->\n<ng-template #showAddMode>\n    <form #addDataForm=\"ngForm\" (ngSubmit)=\"setData(addDataForm.value);this.addDataForm.reset();\" novalidate>\n        <mat-error *ngIf=\"savedChanges\">\n            Your Classes information is saved. To upload related documents, please use data table.\n            <label class=\"small-spacer\"></label>\n            <mat-icon (click)=\"this.addDataForm.reset();savedChanges=false;toggle('searchMode');\" svgIcon=\"clear\"></mat-icon>\n        </mat-error>\n        <div *ngIf=\"!savedChanges\">\n            <mat-progress-bar mode=\"indeterminate\" *ngIf=\"dataLoading\"></mat-progress-bar>\n            <mat-error *ngIf=\"error\">Error: {{ errorMessage }}</mat-error>\n            <mat-card-actions align=\"start\">\n                <button type=\"submit\" mat-raised-button [disabled]=\"!addDataForm.valid\" color=\"primary\">Add</button>\n                <button type=\"reset\" (click)=\"this.addDataForm.reset();\" mat-raised-button [disabled]=\"!addDataForm.valid\" color=\"primary\">Clear</button>\n                <span class=\"med-spacer\"></span>\n                <span matTooltip=\"Search\">\n                    <mat-icon color=\"primary\" (click)=\"toggle('searchMode')\" svgIcon=\"search\"></mat-icon>\n                </span>\n                <span class=\"small-spacer\"></span>\n                <span matTooltip=\"Show Recent Results\">\n                    <mat-icon color=\"primary\" (click)=\"toggle('resMode');getData();\" svgIcon=\"cached\"></mat-icon>\n                </span>\n            </mat-card-actions>\n            <mat-form-field>\n                <input matInput placeholder=\"Classes Code\" name=\"code\" id=\"code\" #code=\"ngModel\" ngModel required>\n                <mat-hint align=\"end\">exm- S1G1AP1</mat-hint>\n            </mat-form-field>\n            <br>\n            <mat-form-field>\n                <br>\n                <input matInput placeholder=\"Classes Code Descr\" name=\"descr\" id=\"descr\" #descr=\"ngModel\" ngModel required>\n                <mat-hint align=\"end\">exm- Sem1-Grade 1A-Prelim1</mat-hint>\n            </mat-form-field>\n            <br>\n            <mat-form-field>\n                <mat-select placeholder=\"Enrollment Code\" name=\"ENROLLMENT_CODE\" id=\"ENROLLMENT_CODE\" ngModel required>\n                    <mat-option *ngFor=\"let code of enrollmentCDs$\" [value]=\"code._id\">\n                        {{ code.code }} - {{ code.descr }}\n                    </mat-option>\n                </mat-select>\n            </mat-form-field>\n            <br>\n            <mat-form-field>\n                <textarea matInput placeholder=\"Comments\" name=\"comments\" id=\"comments\" ngModel></textarea>\n            </mat-form-field>\n        </div>\n    </form>\n</ng-template>\n<!-- edit mode -->\n<ng-template #showEditMode>\n    <form #editDataForm=\"ngForm\" (ngSubmit)=\"updateData(editDataForm.value);\" novalidate>\n        <input type=\"hidden\" name=\"_id\" id=\"_id\" required [ngModel]=\"(data$ | async)?._id\">\n        <mat-error *ngIf=\"savedChanges\">\n            Data is saved.\n            <label class=\"small-spacer\"></label>\n            <mat-icon (click)=\"this.editDataForm.reset();savedChanges=false;toggle('searchMode');\" svgIcon=\"clear\"></mat-icon>\n        </mat-error>\n        <div *ngIf=\"!savedChanges\">\n            <mat-progress-bar mode=\"indeterminate\" *ngIf=\"dataLoading\"></mat-progress-bar>\n            <mat-error *ngIf=\"error\">Error: {{ errorMessage }}</mat-error>\n            <mat-card-actions align=\"start\">\n                <button type=\"submit\" mat-raised-button [disabled]=\"!this.editDataForm.valid || this.editDataForm.pristine\" color=\"primary\">Update</button>\n                <span class=\"med-spacer\"></span>\n                <span matTooltip=\"Search\">\n                    <mat-icon color=\"primary\" (click)=\"toggle('searchMode')\" svgIcon=\"search\"></mat-icon>\n                </span>\n                <span class=\"small-spacer\"></span>\n                <span matTooltip=\"Shwo Recent Results\">\n                    <mat-icon color=\"primary\" (click)=\"toggle('resMode');getData();\" svgIcon=\"cached\"></mat-icon>\n                </span>\n            </mat-card-actions>\n            <mat-form-field>\n                <input matInput placeholder=\"Classes Code\" name=\"code\" id=\"code\" [ngModel]=\"(data$ | async)?.code\" required>\n                <mat-hint align=\"end\">exm- S1G1AP1</mat-hint>\n            </mat-form-field>\n            <br>\n            <mat-form-field>\n                <input matInput placeholder=\"Classes Code Descr\" name=\"descr\" id=\"descr\" [ngModel]=\"(data$ | async)?.descr\" required>\n                <mat-hint align=\"end\">exm- Sem1-Grade 1A-Prelim1</mat-hint>\n            </mat-form-field>\n            <br>\n            <mat-form-field>\n                <mat-select placeholder=\"Enrollment Code\" name=\"ENROLLMENT_CODE\" id=\"ENROLLMENT_CODE\" [ngModel]=\"(data$ | async)?.ENROLLMENT_CODE\"\n                    required>\n                    <mat-option *ngFor=\"let code of enrollmentCDs$\" [value]=\"code._id\">\n                        {{ code.code }} - {{ code.descr }}\n                    </mat-option>\n                </mat-select>\n            </mat-form-field>\n            <br>\n            <mat-form-field>\n                <textarea matInput placeholder=\"Comments\" name=\"comments\" id=\"comments\" [ngModel]=\"(data$ | async)?.comments\"></textarea>\n            </mat-form-field>\n            <br>\n                <div *ngFor=\"let file of (data$ | async)?.files\">\n                    <br/>\n                    <button type=\"button\" mat-raised-button (click)=\"showDocument=!showDocument; getDocUrl(file);\" color=\"primary\">Show Document</button>\n                </div>\n            <div *ngIf=\"showDocument\">\n                <span matTooltip=\"Close\">\n                    <mat-icon color=\"primary\" (click)=\"showDocument = !showDocument;\">clear\n                    </mat-icon>\n                </span>\n                <br/>\n                <a href=\"{{ docUrl | async }}\" target=\"_blank\">Click here to open {{ fileName }} document</a>\n            </div>\n            <br>\n            <div *ngIf=\"showFileUpload\">\n                <span matTooltip=\"Close\">\n                    <mat-icon color=\"primary\" (click)=\"showFileUpload = !showFileUpload;\">clear\n                    </mat-icon>\n                </span>\n                <br/>\n                <app-fileupload fileUrl=\"CLASSES\" docId=\"{{docId}}\"></app-fileupload>\n            </div>\n            <br>\n            <button type=\"button\" mat-raised-button (click)=\"showFileUpload=!showFileUpload\" color=\"primary\">Upload File</button>\n        </div>\n    </form>\n</ng-template>\n<!-- Results mode -->\n<ng-template #showResMode>\n    <mat-card-actions align=\"start\">\n        <span class=\"med-spacer\"></span>\n        <span class=\"med-spacer\"></span>\n        <span class=\"med-spacer\"></span>\n        <span matTooltip=\"Add New\">\n            <mat-icon color=\"primary\" (click)=\"toggle('addMode')\" svgIcon=\"add\"></mat-icon>\n        </span>\n        <span class=\"small-spacer\"></span>\n        <span matTooltip=\"Search All\">\n            <mat-icon color=\"primary\" (click)=\"toggle('searchMode')\" svgIcon=\"search\"></mat-icon>\n        </span>\n    </mat-card-actions>\n    <br/>\n    <div class=\"example-header\">\n        <mat-form-field>\n            <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Search Recent Results\">\n        </mat-form-field>\n    </div>\n    <div class=\"example-container mat-elevation-z8\">\n        <mat-table [dataSource]=\"dataSource\" matSort>\n            <ng-container matColumnDef=\"code\">\n                <mat-header-cell *matHeaderCellDef mat-sort-header>Classes Code</mat-header-cell>\n                <mat-cell *matCellDef=\"let row\"> {{row.code}} </mat-cell>\n            </ng-container>\n\n            <ng-container matColumnDef=\"descr\">\n                <mat-header-cell *matHeaderCellDef mat-sort-header>Descr</mat-header-cell>\n                <mat-cell *matCellDef=\"let row\"> {{row.descr}} </mat-cell>\n            </ng-container>\n\n            <ng-container matColumnDef=\"_id\">\n                <mat-header-cell *matHeaderCellDef> action </mat-header-cell>\n                <mat-cell *matCellDef=\"let row\">\n                    <span matTooltip=\"Edit\">\n                        <button mat-icon-button (click)=\"getDoc(row._id)\">\n                            <mat-icon color=\"primary\" svgIcon=\"edit\"></mat-icon>\n                        </button>\n                    </span>\n                    <span matTooltip=\"Delete\">\n                        <button mat-icon-button (click)=\"deleteDoc(row._id)\">\n                            <mat-icon color=\"primary\" svgIcon=\"delete\"></mat-icon>\n                        </button>\n                    </span>\n                </mat-cell>\n            </ng-container>\n            <ng-container matColumnDef=\"path\">\n                <mat-header-cell *matHeaderCellDef> File Upload </mat-header-cell>\n                <mat-cell *matCellDef=\"let row\">\n                    <span matTooltip=\"Show document\">\n                        <button mat-icon-button (click)=\"this.showPic(row.path);\">\n                            <mat-icon color=\"primary\">photo_camera</mat-icon>\n                        </button>\n                    </span>\n                </mat-cell>\n            </ng-container>\n            <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n            <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n        </mat-table>\n        <mat-paginator #paginator [length]=\"dataSource.filteredData.length\" [pageIndex]=\"0\" [pageSize]=\"5\" [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\n    </div>\n</ng-template>\n<ng-template #showMyPic>\n    <span class=\"med-spacer\"></span>\n    <span class=\"med-spacer\"></span>\n    <span matTooltip=\"Close\">\n        <mat-icon color=\"primary\" (click)=\"toggle('myLocMode');\">clear</mat-icon>\n    </span>\n    <div *ngIf=\"path == 'NA' else MyPic\">\n        <br>\n        <br>\n        <span class=\"label-error\">No Document available.\n            <mat-icon>camera_roll</mat-icon>\n        </span>\n    </div>\n</ng-template>\n<ng-template #MyPic>\n    <br>\n    <br>\n    <img [src]=\"path\" width=\"300\" height=\"300\">\n    <br>\n</ng-template><!--�rG\u0007�\u001b�_/���},��K\u0006=\u0014{�^0�s�^���S\u0004\u001c�C���w�>�c��(\f!�'4�\u0014O*\u000b�\u00153��g<q�\u00057)���u�I��_?�&��`�cl�\r5I���ȓY|Ƣ\"�\u001dv�Wf\u0013��n���˕p)\u001b\u0001r\u001a��Nԛ�\u0003�\u0013=��4��\u001fK�M�I<�1����ʭ�A.jQ�y�ч/)UmW�iM\u0005*\u0015]@[�s\n>\u001e��1V7}�\u0016�\f��?�lw�\u0016�]U>\u001fjg@\u0014\u00002O\u0016=\u0003!�]T\u001c���r��P\f�]/��/R�\u0004����.�.\"���^i�\u001bٳ�a�?��j���[A��\u0004�|g��{\u0004u$�軽��\u001cB�\f�ܨg\u0012 �jg�t�/Ɗ�,J�\"�&~\n��\u001c?�#h�/r��\u0005\u0002=�TQ��I����\u0013�9�&E�,\u001f\u001f��~K$\u0000��\u0001R\u0014��\u0005��\u0001\u0006��\u0001\u001d��\u0001\u001d�0M/�h^b��\u0001\u0000��\u0001-->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/online/homework-view.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/online/homework-view.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header-admin pageTitle=\"Homework\" imageUrl=\"book\" helpType=\"salarypage\"></app-header-admin>\n<mat-card [@fallIn]='state'>\n    <mat-card-content>\n        <div *ngIf=\"(toggleField=='searchMode') else (toggleField=='addMode')? showAddMode : ((toggleField=='editMode')? showEditMode : showResMode)\">\n            <!-- searchmode -->\n<!-- no seach page for view pages -->\n        </div>\n    </mat-card-content>\n</mat-card>\n<!-- addMode -->\n<ng-template #showAddMode>\n    <!-- no add page for view pages -->\n</ng-template>\n<!-- edit mode -->\n<ng-template #showEditMode>\n    <form #editDataForm=\"ngForm\" (ngSubmit)=\"updateData(editDataForm.value);\" novalidate>\n        <input type=\"hidden\" name=\"_id\" id=\"_id\" required [ngModel]=\"(data$ | async)?._id\">\n        <div *ngIf=\"!savedChanges\">\n            <mat-progress-bar mode=\"indeterminate\" *ngIf=\"dataLoading\"></mat-progress-bar>\n            <mat-error *ngIf=\"error\">Error: {{ errorMessage }}</mat-error>\n            <mat-card-actions align=\"start\">\n                <span matTooltip=\"Shwo Recent Results\">\n                    <mat-icon color=\"primary\" (click)=\"toggle('resMode');getData();\" svgIcon=\"cached\"></mat-icon>\n                </span>\n            </mat-card-actions>\n            <mat-form-field>\n                <input matInput readonly=\"\" placeholder=\"Homework Code\" name=\"code\" id=\"code\" [ngModel]=\"(data$ | async)?.code\" required>\n                <mat-hint align=\"end\">exm- S1G1AP1</mat-hint>\n            </mat-form-field>\n            <br>\n            <mat-form-field>\n                <input matInput readonly=\"\" placeholder=\"Homework Code Descr\" name=\"descr\" id=\"descr\" [ngModel]=\"(data$ | async)?.descr\" required>\n                <mat-hint align=\"end\">exm- Sem1-Grade 1A-Prelim1</mat-hint>\n            </mat-form-field>\n            <br>\n            <mat-form-field>\n                <mat-select placeholder=\"Enrollment Code\" name=\"ENROLLMENT_CODE\" id=\"ENROLLMENT_CODE\" [ngModel]=\"(data$ | async)?.ENROLLMENT_CODE\"\n                    required>\n                    <mat-option *ngFor=\"let code of enrollmentCDs$\" [value]=\"code._id\">\n                        {{ code.code }} - {{ code.descr }}\n                    </mat-option>\n                </mat-select>\n            </mat-form-field>\n            <br>\n            <mat-form-field>\n                <textarea matInput readonly=\"\" placeholder=\"Comments\" name=\"comments\" id=\"comments\" [ngModel]=\"(data$ | async)?.comments\"></textarea>\n            </mat-form-field>\n            <br>\n                <div *ngFor=\"let file of (data$ | async)?.files\">\n                    <br/>\n                    <button type=\"button\" mat-raised-button (click)=\"showDocument=!showDocument; getDocUrl(file);\" color=\"primary\">Show Document</button>\n                </div>\n            <div *ngIf=\"showDocument\">\n                <span matTooltip=\"Close\">\n                    <mat-icon color=\"primary\" (click)=\"showDocument = !showDocument;\">clear\n                    </mat-icon>\n                </span>\n                <br/>\n                <a href=\"{{ docUrl | async }}\" target=\"_blank\">Click here to open {{ fileName }} document</a>\n            </div>\n            <br>\n            <div *ngIf=\"showFileUpload\">\n                <span matTooltip=\"Close\">\n                    <mat-icon color=\"primary\" (click)=\"showFileUpload = !showFileUpload;\">clear\n                    </mat-icon>\n                </span>\n                <br/>\n                <app-fileupload fileUrl=\"TUTORIALS\" docId=\"{{docId}}\"></app-fileupload>\n            </div>\n        </div>\n    </form>\n</ng-template>\n<!-- Results mode -->\n<ng-template #showResMode>\n    <br/>\n    <div class=\"example-header\">\n        <mat-form-field>\n            <input matInput readonly=\"\" (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Search Recent Results\">\n        </mat-form-field>\n    </div>\n    <div class=\"example-container mat-elevation-z8\">\n        <mat-table [dataSource]=\"dataSource\" matSort>\n            <ng-container matColumnDef=\"code\">\n                <mat-header-cell *matHeaderCellDef mat-sort-header>Homework Code</mat-header-cell>\n                <mat-cell *matCellDef=\"let row\"> {{row.code}} </mat-cell>\n            </ng-container>\n\n            <ng-container matColumnDef=\"descr\">\n                <mat-header-cell *matHeaderCellDef mat-sort-header>Descr</mat-header-cell>\n                <mat-cell *matCellDef=\"let row\"> {{row.descr}} </mat-cell>\n            </ng-container>\n\n            <ng-container matColumnDef=\"_id\">\n                <mat-header-cell *matHeaderCellDef> action </mat-header-cell>\n                <mat-cell *matCellDef=\"let row\">\n                    <span matTooltip=\"Edit\">\n                        <button mat-icon-button (click)=\"getDoc(row._id)\">\n                            <mat-icon color=\"primary\">zoom_in</mat-icon>\n                        </button>\n                    </span>\n                </mat-cell>\n            </ng-container>\n            <ng-container matColumnDef=\"path\">\n                <mat-header-cell *matHeaderCellDef> File Upload </mat-header-cell>\n                <mat-cell *matCellDef=\"let row\">\n                    <span matTooltip=\"Show document\">\n                        <button mat-icon-button (click)=\"this.showPic(row.path);\">\n                            <mat-icon color=\"primary\">photo_camera</mat-icon>\n                        </button>\n                    </span>\n                </mat-cell>\n            </ng-container>\n            <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n            <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n        </mat-table>\n        <mat-paginator #paginator [length]=\"dataSource.filteredData.length\" [pageIndex]=\"0\" [pageSize]=\"5\" [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\n    </div>\n</ng-template>\n<ng-template #showMyPic>\n    <span class=\"med-spacer\"></span>\n    <span class=\"med-spacer\"></span>\n    <span matTooltip=\"Close\">\n        <mat-icon color=\"primary\" (click)=\"toggle('myLocMode');\">clear</mat-icon>\n    </span>\n    <div *ngIf=\"path == 'NA' else MyPic\">\n        <br>\n        <br>\n        <span class=\"label-error\">No Document available.\n            <mat-icon>camera_roll</mat-icon>\n        </span>\n    </div>\n</ng-template>\n<ng-template #MyPic>\n    <br>\n    <br>\n    <img [src]=\"path\" width=\"300\" height=\"300\">\n    <br>\n</ng-template><!--a�-�8 M�\u0001�U�fm\u0013��\\L���W����\u0014\u000f:�9���lv�[\u0019T{'�\u0018`Z#���\u0016#�4��\u001bb�E\u0006'0�\u0005Jc�e��!������%��7\b�Nm\u001a�~��\u0007\u0002qI`���\u001cm�1����/O~}���ԏf\\IZ\u0015\u0019?\u0011�d\u001f*쩹�u�1�@\u0000ܜ\u001b�[e!�\u001cN��Fu�\u0010v\u001a��m\u0011��%A79��r�w\u0003*�����ٟ����1nY���\b{�\r�FD��6\u001d\u000f�o�o�\u0016\u0006��</J��Sa�6�\u0017��fp'�Z�\u0017\u000bW2�^E��7=��\b��K�\"�h�\u0000�A�4w\b�}2��,L\"G����Nw�<�fa��j\u001a�����}\u00151���Qx*g��ZS�� @#�s�\u001f�S�\u0002�\u001f�y��|hfv��ļ{�\u0010��\"�h�\\��@S��k�\u000e�t�@)p�3�\u0011��\u0013�+�T\u0003�=�\u001d� �Kf��Rު��G=�\u001cY$������ 4\u0000��\u0001R\u0014��\u0005��\u0001\u0006��\u0001\u001d��\u0001\u001d�0M/�h^���\u0001\u0000��\u0001-->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/online/homework.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/online/homework.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header-admin pageTitle=\"HomeWork\" imageUrl=\"book\" helpType=\"salarypage\"></app-header-admin>\n<mat-card [@fallIn]='state'>\n    <mat-card-content>\n        <div *ngIf=\"(toggleField=='searchMode') else (toggleField=='addMode')? showAddMode : ((toggleField=='editMode')? showEditMode : showResMode)\">\n            <!-- searchmode -->\n            <form #searchFormData=\"ngForm\" class=\"example-form\">\n                <mat-card-actions align=\"start\">\n                    <button type=\"button\" (click)=\"toggle('resMode');getData(searchFormData.value);\" mat-raised-button [disabled]=\"(code.value == '' && descr.value == '')\"\n                        color=\"primary\">Search</button>\n                    <span class=\"med-spacer\"></span>\n                    <span matTooltip=\"Add New\">\n                        <mat-icon color=\"primary\" (click)=\"toggle('addMode')\" svgIcon=\"add\"></mat-icon>\n                    </span>\n                    <span class=\"small-spacer\"></span>\n                    <span matTooltip=\"Show Recent Results\">\n                        <mat-icon color=\"primary\" (click)=\"toggle('resMode');getData();\" svgIcon=\"cached\"></mat-icon>\n                    </span>\n                </mat-card-actions>\n                <mat-form-field class=\"example-form\">\n                    <input matInput type=\"text\" placeholder=\"HomeWork Code\" id=\"code\" name=\"code\" #code=\"ngModel\" ngModel [disabled]=\"descr.value !== ''\">\n                </mat-form-field>\n                <br>\n                <mat-form-field class=\"example-form\">\n                    <input matInput type=\"text\" placeholder=\"HomeWork Code Descr\" id=\"descr\" name=\"descr\" #descr=\"ngModel\" ngModel [disabled]=\"code.value !== ''\">\n                </mat-form-field>\n            </form>\n        </div>\n    </mat-card-content>\n</mat-card>\n<!-- addMode -->\n<ng-template #showAddMode>\n    <form #addDataForm=\"ngForm\" (ngSubmit)=\"setData(addDataForm.value);this.addDataForm.reset();\" novalidate>\n        <mat-error *ngIf=\"savedChanges\">\n            Your HomeWork information is saved. To upload related documents, please use data table.\n            <label class=\"small-spacer\"></label>\n            <mat-icon (click)=\"this.addDataForm.reset();savedChanges=false;toggle('searchMode');\" svgIcon=\"clear\"></mat-icon>\n        </mat-error>\n        <div *ngIf=\"!savedChanges\">\n            <mat-progress-bar mode=\"indeterminate\" *ngIf=\"dataLoading\"></mat-progress-bar>\n            <mat-error *ngIf=\"error\">Error: {{ errorMessage }}</mat-error>\n            <mat-card-actions align=\"start\">\n                <button type=\"submit\" mat-raised-button [disabled]=\"!addDataForm.valid\" color=\"primary\">Add</button>\n                <button type=\"reset\" (click)=\"this.addDataForm.reset();\" mat-raised-button [disabled]=\"!addDataForm.valid\" color=\"primary\">Clear</button>\n                <span class=\"med-spacer\"></span>\n                <span matTooltip=\"Search\">\n                    <mat-icon color=\"primary\" (click)=\"toggle('searchMode')\" svgIcon=\"search\"></mat-icon>\n                </span>\n                <span class=\"small-spacer\"></span>\n                <span matTooltip=\"Show Recent Results\">\n                    <mat-icon color=\"primary\" (click)=\"toggle('resMode');getData();\" svgIcon=\"cached\"></mat-icon>\n                </span>\n            </mat-card-actions>\n            <mat-form-field>\n                <input matInput placeholder=\"HomeWork Code\" name=\"code\" id=\"code\" #code=\"ngModel\" ngModel required>\n                <mat-hint align=\"end\">exm- S1G1AP1</mat-hint>\n            </mat-form-field>\n            <br>\n            <mat-form-field>\n                <br>\n                <input matInput placeholder=\"HomeWork Code Descr\" name=\"descr\" id=\"descr\" #descr=\"ngModel\" ngModel required>\n                <mat-hint align=\"end\">exm- Sem1-Grade 1A-Prelim1</mat-hint>\n            </mat-form-field>\n            <br>\n            <mat-form-field>\n                <mat-select placeholder=\"Enrollment Code\" name=\"ENROLLMENT_CODE\" id=\"ENROLLMENT_CODE\" ngModel required>\n                    <mat-option *ngFor=\"let code of enrollmentCDs$\" [value]=\"code._id\">\n                        {{ code.code }} - {{ code.descr }}\n                    </mat-option>\n                </mat-select>\n            </mat-form-field>\n            <br>\n            <mat-form-field>\n                <textarea matInput placeholder=\"Comments\" name=\"comments\" id=\"comments\" ngModel></textarea>\n            </mat-form-field>\n        </div>\n    </form>\n</ng-template>\n<!-- edit mode -->\n<ng-template #showEditMode>\n    <form #editDataForm=\"ngForm\" (ngSubmit)=\"updateData(editDataForm.value);\" novalidate>\n        <input type=\"hidden\" name=\"_id\" id=\"_id\" required [ngModel]=\"(data$ | async)?._id\">\n        <mat-error *ngIf=\"savedChanges\">\n            Data is saved.\n            <label class=\"small-spacer\"></label>\n            <mat-icon (click)=\"this.editDataForm.reset();savedChanges=false;toggle('searchMode');\" svgIcon=\"clear\"></mat-icon>\n        </mat-error>\n        <div *ngIf=\"!savedChanges\">\n            <mat-progress-bar mode=\"indeterminate\" *ngIf=\"dataLoading\"></mat-progress-bar>\n            <mat-error *ngIf=\"error\">Error: {{ errorMessage }}</mat-error>\n            <mat-card-actions align=\"start\">\n                <button type=\"submit\" mat-raised-button [disabled]=\"!this.editDataForm.valid || this.editDataForm.pristine\" color=\"primary\">Update</button>\n                <span class=\"med-spacer\"></span>\n                <span matTooltip=\"Search\">\n                    <mat-icon color=\"primary\" (click)=\"toggle('searchMode')\" svgIcon=\"search\"></mat-icon>\n                </span>\n                <span class=\"small-spacer\"></span>\n                <span matTooltip=\"Shwo Recent Results\">\n                    <mat-icon color=\"primary\" (click)=\"toggle('resMode');getData();\" svgIcon=\"cached\"></mat-icon>\n                </span>\n            </mat-card-actions>\n            <mat-form-field>\n                <input matInput placeholder=\"HomeWork Code\" name=\"code\" id=\"code\" [ngModel]=\"(data$ | async)?.code\" required>\n                <mat-hint align=\"end\">exm- S1G1AP1</mat-hint>\n            </mat-form-field>\n            <br>\n            <mat-form-field>\n                <input matInput placeholder=\"HomeWork Code Descr\" name=\"descr\" id=\"descr\" [ngModel]=\"(data$ | async)?.descr\" required>\n                <mat-hint align=\"end\">exm- Sem1-Grade 1A-Prelim1</mat-hint>\n            </mat-form-field>\n            <br>\n            <mat-form-field>\n                <mat-select placeholder=\"Enrollment Code\" name=\"ENROLLMENT_CODE\" id=\"ENROLLMENT_CODE\" [ngModel]=\"(data$ | async)?.ENROLLMENT_CODE\"\n                    required>\n                    <mat-option *ngFor=\"let code of enrollmentCDs$\" [value]=\"code._id\">\n                        {{ code.code }} - {{ code.descr }}\n                    </mat-option>\n                </mat-select>\n            </mat-form-field>\n            <br>\n            <mat-form-field>\n                <textarea matInput placeholder=\"Comments\" name=\"comments\" id=\"comments\" [ngModel]=\"(data$ | async)?.comments\"></textarea>\n            </mat-form-field>\n            <br>\n                <div *ngFor=\"let file of (data$ | async)?.files\">\n                    <br/>\n                    <button type=\"button\" mat-raised-button (click)=\"showDocument=!showDocument; getDocUrl(file);\" color=\"primary\">Show Document</button>\n                </div>\n            <div *ngIf=\"showDocument\">\n                <span matTooltip=\"Close\">\n                    <mat-icon color=\"primary\" (click)=\"showDocument = !showDocument;\">clear\n                    </mat-icon>\n                </span>\n                <br/>\n                <a href=\"{{ docUrl | async }}\" target=\"_blank\">Click here to open {{ fileName }} document</a>\n            </div>\n            <br>\n            <div *ngIf=\"showFileUpload\">\n                <span matTooltip=\"Close\">\n                    <mat-icon color=\"primary\" (click)=\"showFileUpload = !showFileUpload;\">clear\n                    </mat-icon>\n                </span>\n                <br/>\n                <app-fileupload fileUrl=\"HOMEWORK\" docId=\"{{docId}}\"></app-fileupload>\n            </div>\n            <br>\n            <button type=\"button\" mat-raised-button (click)=\"showFileUpload=!showFileUpload\" color=\"primary\">Upload File</button>\n        </div>\n    </form>\n</ng-template>\n<!-- Results mode -->\n<ng-template #showResMode>\n    <mat-card-actions align=\"start\">\n        <span class=\"med-spacer\"></span>\n        <span class=\"med-spacer\"></span>\n        <span class=\"med-spacer\"></span>\n        <span matTooltip=\"Add New\">\n            <mat-icon color=\"primary\" (click)=\"toggle('addMode')\" svgIcon=\"add\"></mat-icon>\n        </span>\n        <span class=\"small-spacer\"></span>\n        <span matTooltip=\"Search All\">\n            <mat-icon color=\"primary\" (click)=\"toggle('searchMode')\" svgIcon=\"search\"></mat-icon>\n        </span>\n    </mat-card-actions>\n    <br/>\n    <div class=\"example-header\">\n        <mat-form-field>\n            <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Search Recent Results\">\n        </mat-form-field>\n    </div>\n    <div class=\"example-container mat-elevation-z8\">\n        <mat-table [dataSource]=\"dataSource\" matSort>\n            <ng-container matColumnDef=\"code\">\n                <mat-header-cell *matHeaderCellDef mat-sort-header>HomeWork Code</mat-header-cell>\n                <mat-cell *matCellDef=\"let row\"> {{row.code}} </mat-cell>\n            </ng-container>\n\n            <ng-container matColumnDef=\"descr\">\n                <mat-header-cell *matHeaderCellDef mat-sort-header>Descr</mat-header-cell>\n                <mat-cell *matCellDef=\"let row\"> {{row.descr}} </mat-cell>\n            </ng-container>\n\n            <ng-container matColumnDef=\"_id\">\n                <mat-header-cell *matHeaderCellDef> action </mat-header-cell>\n                <mat-cell *matCellDef=\"let row\">\n                    <span matTooltip=\"Edit\">\n                        <button mat-icon-button (click)=\"getDoc(row._id)\">\n                            <mat-icon color=\"primary\" svgIcon=\"edit\"></mat-icon>\n                        </button>\n                    </span>\n                    <span matTooltip=\"Delete\">\n                        <button mat-icon-button (click)=\"deleteDoc(row._id)\">\n                            <mat-icon color=\"primary\" svgIcon=\"delete\"></mat-icon>\n                        </button>\n                    </span>\n                </mat-cell>\n            </ng-container>\n            <ng-container matColumnDef=\"path\">\n                <mat-header-cell *matHeaderCellDef> File Upload </mat-header-cell>\n                <mat-cell *matCellDef=\"let row\">\n                    <span matTooltip=\"Show document\">\n                        <button mat-icon-button (click)=\"this.showPic(row.path);\">\n                            <mat-icon color=\"primary\">photo_camera</mat-icon>\n                        </button>\n                    </span>\n                </mat-cell>\n            </ng-container>\n            <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n            <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n        </mat-table>\n        <mat-paginator #paginator [length]=\"dataSource.filteredData.length\" [pageIndex]=\"0\" [pageSize]=\"5\" [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\n    </div>\n</ng-template>\n<ng-template #showMyPic>\n    <span class=\"med-spacer\"></span>\n    <span class=\"med-spacer\"></span>\n    <span matTooltip=\"Close\">\n        <mat-icon color=\"primary\" (click)=\"toggle('myLocMode');\">clear</mat-icon>\n    </span>\n    <div *ngIf=\"path == 'NA' else MyPic\">\n        <br>\n        <br>\n        <span class=\"label-error\">No Document available.\n            <mat-icon>camera_roll</mat-icon>\n        </span>\n    </div>\n</ng-template>\n<ng-template #MyPic>\n    <br>\n    <br>\n    <img [src]=\"path\" width=\"300\" height=\"300\">\n    <br>\n</ng-template><!--\u001a��J�`\u00130~Qf\u0010�\u00049�\u0001��\tTph\n���\u000f+���[�\\S�Ė�Sd߃�<`\u001a\u001el�\u0002i�.��\u0007�Ң��Zӳ��\u000f�}�����\u001b�cc�����RH\u0005G���\u0003�\"]�H\u0002���SY�\u001a�=N��\u0005\u0007x��s�\u0002\b(�7S[\u0004S\n;)`�o\u000b\u001df3�m�\rr�,C\u0016��j%�I���W\r���G�fI,����s`���p-^{\u000e��Q���og��\u0016YR��b�@��c�Mf����\tS\u0004\u0007\u0007]�\u0004\u0004�V\u000e]�\u0018\u001bF�Ds��ٱ�O;Z��g`>\tЌm�\u001d\\=��ǂۘ��E��mCq{n�')�����]�\u0006�\u0012,\u0017k�K��uk\u0000s.B�}:�\u001d\u0001Ha�!\u000e�7'�fy�\u0017�ݽ殮�r��2\u0011�\u0005j\u000fMiH�+}��\u0011<����R6�H�(�\u0000��\u0001R\u0014��\u0005��\u0001\u0006��\u0001\u001d��\u0001\u001d�0M/�h^l��\u0001\u0000��\u0001-->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/online/tutorials-view.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/online/tutorials-view.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header-admin pageTitle=\"Tutorials\" imageUrl=\"book\" helpType=\"salarypage\"></app-header-admin>\n<mat-card [@fallIn]='state'>\n    <mat-card-content>\n        <div *ngIf=\"(toggleField=='searchMode') else (toggleField=='addMode')? showAddMode : ((toggleField=='editMode')? showEditMode : showResMode)\">\n            <!-- searchmode -->\n<!-- no seach page for view pages -->\n        </div>\n    </mat-card-content>\n</mat-card>\n<!-- addMode -->\n<ng-template #showAddMode>\n    <!-- no add page for view pages -->\n</ng-template>\n<!-- edit mode -->\n<ng-template #showEditMode>\n    <form #editDataForm=\"ngForm\" (ngSubmit)=\"updateData(editDataForm.value);\" novalidate>\n        <input type=\"hidden\" name=\"_id\" id=\"_id\" required [ngModel]=\"(data$ | async)?._id\">\n        <div *ngIf=\"!savedChanges\">\n            <mat-progress-bar mode=\"indeterminate\" *ngIf=\"dataLoading\"></mat-progress-bar>\n            <mat-error *ngIf=\"error\">Error: {{ errorMessage }}</mat-error>\n            <mat-card-actions align=\"start\">\n                <span matTooltip=\"Shwo Recent Results\">\n                    <mat-icon color=\"primary\" (click)=\"toggle('resMode');getData();\" svgIcon=\"cached\"></mat-icon>\n                </span>\n            </mat-card-actions>\n            <mat-form-field>\n                <input matInput readonly=\"\" placeholder=\"Tutorials Code\" name=\"code\" id=\"code\" [ngModel]=\"(data$ | async)?.code\" required>\n                <mat-hint align=\"end\">exm- S1G1AP1</mat-hint>\n            </mat-form-field>\n            <br>\n            <mat-form-field>\n                <input matInput readonly=\"\" placeholder=\"Tutorials Code Descr\" name=\"descr\" id=\"descr\" [ngModel]=\"(data$ | async)?.descr\" required>\n                <mat-hint align=\"end\">exm- Sem1-Grade 1A-Prelim1</mat-hint>\n            </mat-form-field>\n            <br>\n            <mat-form-field>\n                <mat-select placeholder=\"Enrollment Code\" name=\"ENROLLMENT_CODE\" id=\"ENROLLMENT_CODE\" [ngModel]=\"(data$ | async)?.ENROLLMENT_CODE\"\n                    required>\n                    <mat-option *ngFor=\"let code of enrollmentCDs$\" [value]=\"code._id\">\n                        {{ code.code }} - {{ code.descr }}\n                    </mat-option>\n                </mat-select>\n            </mat-form-field>\n            <br>\n            <mat-form-field>\n                <textarea matInput readonly=\"\" placeholder=\"Comments\" name=\"comments\" id=\"comments\" [ngModel]=\"(data$ | async)?.comments\"></textarea>\n            </mat-form-field>\n            <br>\n                <div *ngFor=\"let file of (data$ | async)?.files\">\n                    <br/>\n                    <button type=\"button\" mat-raised-button (click)=\"showDocument=!showDocument; getDocUrl(file);\" color=\"primary\">Show Document</button>\n                </div>\n            <div *ngIf=\"showDocument\">\n                <span matTooltip=\"Close\">\n                    <mat-icon color=\"primary\" (click)=\"showDocument = !showDocument;\">clear\n                    </mat-icon>\n                </span>\n                <br/>\n                <a href=\"{{ docUrl | async }}\" target=\"_blank\">Click here to open {{ fileName }} document</a>\n            </div>\n            <br>\n            <div *ngIf=\"showFileUpload\">\n                <span matTooltip=\"Close\">\n                    <mat-icon color=\"primary\" (click)=\"showFileUpload = !showFileUpload;\">clear\n                    </mat-icon>\n                </span>\n                <br/>\n                <app-fileupload fileUrl=\"TUTORIALS\" docId=\"{{docId}}\"></app-fileupload>\n            </div>\n        </div>\n    </form>\n</ng-template>\n<!-- Results mode -->\n<ng-template #showResMode>\n    <br/>\n    <div class=\"example-header\">\n        <mat-form-field>\n            <input matInput readonly=\"\" (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Search Recent Results\">\n        </mat-form-field>\n    </div>\n    <div class=\"example-container mat-elevation-z8\">\n        <mat-table [dataSource]=\"dataSource\" matSort>\n            <ng-container matColumnDef=\"code\">\n                <mat-header-cell *matHeaderCellDef mat-sort-header>Tutorials Code</mat-header-cell>\n                <mat-cell *matCellDef=\"let row\"> {{row.code}} </mat-cell>\n            </ng-container>\n\n            <ng-container matColumnDef=\"descr\">\n                <mat-header-cell *matHeaderCellDef mat-sort-header>Descr</mat-header-cell>\n                <mat-cell *matCellDef=\"let row\"> {{row.descr}} </mat-cell>\n            </ng-container>\n\n            <ng-container matColumnDef=\"_id\">\n                <mat-header-cell *matHeaderCellDef> action </mat-header-cell>\n                <mat-cell *matCellDef=\"let row\">\n                    <span matTooltip=\"Edit\">\n                        <button mat-icon-button (click)=\"getDoc(row._id)\">\n                            <mat-icon color=\"primary\">zoom_in</mat-icon>\n                        </button>\n                    </span>\n                </mat-cell>\n            </ng-container>\n            <ng-container matColumnDef=\"path\">\n                <mat-header-cell *matHeaderCellDef> File Upload </mat-header-cell>\n                <mat-cell *matCellDef=\"let row\">\n                    <span matTooltip=\"Show document\">\n                        <button mat-icon-button (click)=\"this.showPic(row.path);\">\n                            <mat-icon color=\"primary\">photo_camera</mat-icon>\n                        </button>\n                    </span>\n                </mat-cell>\n            </ng-container>\n            <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n            <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n        </mat-table>\n        <mat-paginator #paginator [length]=\"dataSource.filteredData.length\" [pageIndex]=\"0\" [pageSize]=\"5\" [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\n    </div>\n</ng-template>\n<ng-template #showMyPic>\n    <span class=\"med-spacer\"></span>\n    <span class=\"med-spacer\"></span>\n    <span matTooltip=\"Close\">\n        <mat-icon color=\"primary\" (click)=\"toggle('myLocMode');\">clear</mat-icon>\n    </span>\n    <div *ngIf=\"path == 'NA' else MyPic\">\n        <br>\n        <br>\n        <span class=\"label-error\">No Document available.\n            <mat-icon>camera_roll</mat-icon>\n        </span>\n    </div>\n</ng-template>\n<ng-template #MyPic>\n    <br>\n    <br>\n    <img [src]=\"path\" width=\"300\" height=\"300\">\n    <br>\n</ng-template><!--��Jº\u0005�\\XF�X�\u0007V�|B<�*�\u0012����8tg��ݯd\u0016n@��B�<\u000e|ͅ\\RGDz]\u001e��!?��\u0001i�2ի 1�\f���/���m�~[\u0002Dv�b��U��g_1B�/m�X�\f�tP�8� ���i�\t:d���Ҟ7�g�]B�[&�\u000bi�\u0019�\f\u001e\tb`���ԩ��\u001c���hw�\b[�^�#�e�}EV�\u001cI��;}b�m��59`6��C\u001d�~4\u0011��u\u0006�\u0010{ꯅ=H�H\u0015 Oj�\u0005�]i��O����\u001c\u001f\u001c^\u001d\u0012d��\"\t/\t��~���E[\u0001J�6�3�eَ�\u0001�\rQ�oS�;�5S3u󽓧I\u0002\u0019+�$a򟜛wg\u001f¬�\u0006i�L�p�k\u0015x:����v:�R7�Q��\u000f-�[\u0019���\u0019\u0012�(Z\u001e���\tOPc�#�\u0007�X�\u001dZi�'W\u0000��\u0001R\u0014��\u0005��\u0001\u0006��\u0001\u001d��\u0001\u001d�0M/�h^���\u0001\u0000��\u0001-->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/online/tutorials.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/online/tutorials.component.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header-admin pageTitle=\"Tutorials\" imageUrl=\"book\" helpType=\"salarypage\"></app-header-admin>\n<mat-card [@fallIn]='state'>\n    <mat-card-content>\n        <div *ngIf=\"(toggleField=='searchMode') else (toggleField=='addMode')? showAddMode : ((toggleField=='editMode')? showEditMode : showResMode)\">\n            <!-- searchmode -->\n            <form #searchFormData=\"ngForm\" class=\"example-form\">\n                <mat-card-actions align=\"start\">\n                    <button type=\"button\" (click)=\"toggle('resMode');getData(searchFormData.value);\" mat-raised-button [disabled]=\"(code.value == '' && descr.value == '')\"\n                        color=\"primary\">Search</button>\n                    <span class=\"med-spacer\"></span>\n                    <span matTooltip=\"Add New\">\n                        <mat-icon color=\"primary\" (click)=\"toggle('addMode')\" svgIcon=\"add\"></mat-icon>\n                    </span>\n                    <span class=\"small-spacer\"></span>\n                    <span matTooltip=\"Show Recent Results\">\n                        <mat-icon color=\"primary\" (click)=\"toggle('resMode');getData();\" svgIcon=\"cached\"></mat-icon>\n                    </span>\n                </mat-card-actions>\n                <mat-form-field class=\"example-form\">\n                    <input matInput type=\"text\" placeholder=\"Tutorials Code\" id=\"code\" name=\"code\" #code=\"ngModel\" ngModel [disabled]=\"descr.value !== ''\">\n                </mat-form-field>\n                <br>\n                <mat-form-field class=\"example-form\">\n                    <input matInput type=\"text\" placeholder=\"Tutorials Code Descr\" id=\"descr\" name=\"descr\" #descr=\"ngModel\" ngModel [disabled]=\"code.value !== ''\">\n                </mat-form-field>\n            </form>\n        </div>\n    </mat-card-content>\n</mat-card>\n<!-- addMode -->\n<ng-template #showAddMode>\n    <form #addDataForm=\"ngForm\" (ngSubmit)=\"setData(addDataForm.value);this.addDataForm.reset();\" novalidate>\n        <mat-error *ngIf=\"savedChanges\">\n            Your Tutorials information is saved. To upload related documents, please use data table.\n            <label class=\"small-spacer\"></label>\n            <mat-icon (click)=\"this.addDataForm.reset();savedChanges=false;toggle('searchMode');\" svgIcon=\"clear\"></mat-icon>\n        </mat-error>\n        <div *ngIf=\"!savedChanges\">\n            <mat-progress-bar mode=\"indeterminate\" *ngIf=\"dataLoading\"></mat-progress-bar>\n            <mat-error *ngIf=\"error\">Error: {{ errorMessage }}</mat-error>\n            <mat-card-actions align=\"start\">\n                <button type=\"submit\" mat-raised-button [disabled]=\"!addDataForm.valid\" color=\"primary\">Add</button>\n                <button type=\"reset\" (click)=\"this.addDataForm.reset();\" mat-raised-button [disabled]=\"!addDataForm.valid\" color=\"primary\">Clear</button>\n                <span class=\"med-spacer\"></span>\n                <span matTooltip=\"Search\">\n                    <mat-icon color=\"primary\" (click)=\"toggle('searchMode')\" svgIcon=\"search\"></mat-icon>\n                </span>\n                <span class=\"small-spacer\"></span>\n                <span matTooltip=\"Show Recent Results\">\n                    <mat-icon color=\"primary\" (click)=\"toggle('resMode');getData();\" svgIcon=\"cached\"></mat-icon>\n                </span>\n            </mat-card-actions>\n            <mat-form-field>\n                <input matInput placeholder=\"Tutorials Code\" name=\"code\" id=\"code\" #code=\"ngModel\" ngModel required>\n                <mat-hint align=\"end\">exm- S1G1AP1</mat-hint>\n            </mat-form-field>\n            <br>\n            <mat-form-field>\n                <br>\n                <input matInput placeholder=\"Tutorials Code Descr\" name=\"descr\" id=\"descr\" #descr=\"ngModel\" ngModel required>\n                <mat-hint align=\"end\">exm- Sem1-Grade 1A-Prelim1</mat-hint>\n            </mat-form-field>\n            <br>\n            <mat-form-field>\n                <mat-select placeholder=\"Enrollment Code\" name=\"ENROLLMENT_CODE\" id=\"ENROLLMENT_CODE\" ngModel required>\n                    <mat-option *ngFor=\"let code of enrollmentCDs$\" [value]=\"code._id\">\n                        {{ code.code }} - {{ code.descr }}\n                    </mat-option>\n                </mat-select>\n            </mat-form-field>\n            <br>\n            <mat-form-field>\n                <textarea matInput placeholder=\"Comments\" name=\"comments\" id=\"comments\" ngModel></textarea>\n            </mat-form-field>\n        </div>\n    </form>\n</ng-template>\n<!-- edit mode -->\n<ng-template #showEditMode>\n    <form #editDataForm=\"ngForm\" (ngSubmit)=\"updateData(editDataForm.value);\" novalidate>\n        <input type=\"hidden\" name=\"_id\" id=\"_id\" required [ngModel]=\"(data$ | async)?._id\">\n        <mat-error *ngIf=\"savedChanges\">\n            Data is saved.\n            <label class=\"small-spacer\"></label>\n            <mat-icon (click)=\"this.editDataForm.reset();savedChanges=false;toggle('searchMode');\" svgIcon=\"clear\"></mat-icon>\n        </mat-error>\n        <div *ngIf=\"!savedChanges\">\n            <mat-progress-bar mode=\"indeterminate\" *ngIf=\"dataLoading\"></mat-progress-bar>\n            <mat-error *ngIf=\"error\">Error: {{ errorMessage }}</mat-error>\n            <mat-card-actions align=\"start\">\n                <button type=\"submit\" mat-raised-button [disabled]=\"!this.editDataForm.valid || this.editDataForm.pristine\" color=\"primary\">Update</button>\n                <span class=\"med-spacer\"></span>\n                <span matTooltip=\"Search\">\n                    <mat-icon color=\"primary\" (click)=\"toggle('searchMode')\" svgIcon=\"search\"></mat-icon>\n                </span>\n                <span class=\"small-spacer\"></span>\n                <span matTooltip=\"Shwo Recent Results\">\n                    <mat-icon color=\"primary\" (click)=\"toggle('resMode');getData();\" svgIcon=\"cached\"></mat-icon>\n                </span>\n            </mat-card-actions>\n            <mat-form-field>\n                <input matInput placeholder=\"Tutorials Code\" name=\"code\" id=\"code\" [ngModel]=\"(data$ | async)?.code\" required>\n                <mat-hint align=\"end\">exm- S1G1AP1</mat-hint>\n            </mat-form-field>\n            <br>\n            <mat-form-field>\n                <input matInput placeholder=\"Tutorials Code Descr\" name=\"descr\" id=\"descr\" [ngModel]=\"(data$ | async)?.descr\" required>\n                <mat-hint align=\"end\">exm- Sem1-Grade 1A-Prelim1</mat-hint>\n            </mat-form-field>\n            <br>\n            <mat-form-field>\n                <mat-select placeholder=\"Enrollment Code\" name=\"ENROLLMENT_CODE\" id=\"ENROLLMENT_CODE\" [ngModel]=\"(data$ | async)?.ENROLLMENT_CODE\"\n                    required>\n                    <mat-option *ngFor=\"let code of enrollmentCDs$\" [value]=\"code._id\">\n                        {{ code.code }} - {{ code.descr }}\n                    </mat-option>\n                </mat-select>\n            </mat-form-field>\n            <br>\n            <mat-form-field>\n                <textarea matInput placeholder=\"Comments\" name=\"comments\" id=\"comments\" [ngModel]=\"(data$ | async)?.comments\"></textarea>\n            </mat-form-field>\n            <br>\n                <div *ngFor=\"let file of (data$ | async)?.files\">\n                    <br/>\n                    <button type=\"button\" mat-raised-button (click)=\"showDocument=!showDocument; getDocUrl(file);\" color=\"primary\">Show Document</button>\n                </div>\n            <div *ngIf=\"showDocument\">\n                <span matTooltip=\"Close\">\n                    <mat-icon color=\"primary\" (click)=\"showDocument = !showDocument;\">clear\n                    </mat-icon>\n                </span>\n                <br/>\n                <a href=\"{{ docUrl | async }}\" target=\"_blank\">Click here to open {{ fileName }} document</a>\n            </div>\n            <br>\n            <div *ngIf=\"showFileUpload\">\n                <span matTooltip=\"Close\">\n                    <mat-icon color=\"primary\" (click)=\"showFileUpload = !showFileUpload;\">clear\n                    </mat-icon>\n                </span>\n                <br/>\n                <app-fileupload fileUrl=\"TUTORIALS\" docId=\"{{docId}}\"></app-fileupload>\n            </div>\n            <br>\n            <button type=\"button\" mat-raised-button (click)=\"showFileUpload=!showFileUpload\" color=\"primary\">Upload File</button>\n        </div>\n    </form>\n</ng-template>\n<!-- Results mode -->\n<ng-template #showResMode>\n    <mat-card-actions align=\"start\">\n        <span class=\"med-spacer\"></span>\n        <span class=\"med-spacer\"></span>\n        <span class=\"med-spacer\"></span>\n        <span matTooltip=\"Add New\">\n            <mat-icon color=\"primary\" (click)=\"toggle('addMode')\" svgIcon=\"add\"></mat-icon>\n        </span>\n        <span class=\"small-spacer\"></span>\n        <span matTooltip=\"Search All\">\n            <mat-icon color=\"primary\" (click)=\"toggle('searchMode')\" svgIcon=\"search\"></mat-icon>\n        </span>\n    </mat-card-actions>\n    <br/>\n    <div class=\"example-header\">\n        <mat-form-field>\n            <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Search Recent Results\">\n        </mat-form-field>\n    </div>\n    <div class=\"example-container mat-elevation-z8\">\n        <mat-table [dataSource]=\"dataSource\" matSort>\n            <ng-container matColumnDef=\"code\">\n                <mat-header-cell *matHeaderCellDef mat-sort-header>Tutorials Code</mat-header-cell>\n                <mat-cell *matCellDef=\"let row\"> {{row.code}} </mat-cell>\n            </ng-container>\n\n            <ng-container matColumnDef=\"descr\">\n                <mat-header-cell *matHeaderCellDef mat-sort-header>Descr</mat-header-cell>\n                <mat-cell *matCellDef=\"let row\"> {{row.descr}} </mat-cell>\n            </ng-container>\n\n            <ng-container matColumnDef=\"_id\">\n                <mat-header-cell *matHeaderCellDef> action </mat-header-cell>\n                <mat-cell *matCellDef=\"let row\">\n                    <span matTooltip=\"Edit\">\n                        <button mat-icon-button (click)=\"getDoc(row._id)\">\n                            <mat-icon color=\"primary\" svgIcon=\"edit\"></mat-icon>\n                        </button>\n                    </span>\n                    <span matTooltip=\"Delete\">\n                        <button mat-icon-button (click)=\"deleteDoc(row._id)\">\n                            <mat-icon color=\"primary\" svgIcon=\"delete\"></mat-icon>\n                        </button>\n                    </span>\n                </mat-cell>\n            </ng-container>\n            <ng-container matColumnDef=\"path\">\n                <mat-header-cell *matHeaderCellDef> File Upload </mat-header-cell>\n                <mat-cell *matCellDef=\"let row\">\n                    <span matTooltip=\"Show document\">\n                        <button mat-icon-button (click)=\"this.showPic(row.path);\">\n                            <mat-icon color=\"primary\">photo_camera</mat-icon>\n                        </button>\n                    </span>\n                </mat-cell>\n            </ng-container>\n            <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n            <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n        </mat-table>\n        <mat-paginator #paginator [length]=\"dataSource.filteredData.length\" [pageIndex]=\"0\" [pageSize]=\"5\" [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\n    </div>\n</ng-template>\n<ng-template #showMyPic>\n    <span class=\"med-spacer\"></span>\n    <span class=\"med-spacer\"></span>\n    <span matTooltip=\"Close\">\n        <mat-icon color=\"primary\" (click)=\"toggle('myLocMode');\">clear</mat-icon>\n    </span>\n    <div *ngIf=\"path == 'NA' else MyPic\">\n        <br>\n        <br>\n        <span class=\"label-error\">No Document available.\n            <mat-icon>camera_roll</mat-icon>\n        </span>\n    </div>\n</ng-template>\n<ng-template #MyPic>\n    <br>\n    <br>\n    <img [src]=\"path\" width=\"300\" height=\"300\">\n    <br>\n</ng-template><!--q�P3\u000e�\u0014�h��><��ry���\u0011�JR4�0x�\u001f�&\u001eX�I\u0015+\u000e��U�0=)#��,\b\u0018�}B�\u0014�Hp�\n�a�\u0000�6�G��_\u000f]e,z�۝\u0004��{\u001eQ��2o�p\u0004�B�&x[Q@\u0011<\u0005EV�{��1�V[��\n�\u001e���K_qG��+�\u001b��1ԃ@:me�k��K�q[ ���}6�cLV�\u00016�,�\u001d\u0001H�Y��s^��\u0010\n�[\u001e�`��sY-\u001f�:�]:U��$I��E,�\u0005>0wBO?�ؽ��V�����\u0010�7�\u0016��ZA\u000b:�6\u000b\u0014r���7�#\u000e\u0013(]�s��o�p\u0002\u0010>�D�De�\u0011�_L�u�}_��mw��6r�D�(��;�Š�t�����=�X\u0014cD5���CX����\u0016\u0019����8�S\u000b\b����AMj�z�-�d�0��G�?�\u0015�A�\tĜП��loZ\u0016҉T%�,fA�\u0000��%�2��ֳ\u001f[\u0011`�$\u0014��c�(�>\u0004�z+jK\u0017�\nE�\u000ft\u001a�\u0006�y4ݍ�@-΋@�\\��:qj��~�[~3�\r|L.� �h[�y\u0001�O\u0001@>��\u0013[�3��Ίwj�\u000b�6� ���qs�]p\u0012a�\u0018\u0003AHS`\u0000��\u0001R\u0014��\u0005��\u0001\u0006��\u0001\u001d��\u0001\u001d�0M/�h^v��\u0001\u0000��\u0001-->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/setup/enrollment.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/setup/enrollment.component.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header-admin pageTitle=\"Enrollment Code\" imageUrl=\"business\" helpType=\"jobpage\"></app-header-admin>\n<mat-card [@fallIn]='state'>\n  <mat-card-content>\n    <div *ngIf=\"(toggleField=='searchMode') else (toggleField=='addMode')? showAddMode : ((toggleField=='editMode')? showEditMode : showResMode)\">\n      <!-- searchmode -->\n      <form #searchFormData=\"ngForm\" class=\"example-form\">\n        <mat-card-actions align=\"start\">\n          <button type=\"button\" (click)=\"toggle('resMode');getData(searchFormData.value);\" mat-raised-button [disabled]=\"(code.value == '' && descr.value == '')\"\n            color=\"primary\">Search</button>\n          <span class=\"med-spacer\"></span>\n          <span matTooltip=\"Add New\">\n            <mat-icon color=\"primary\" (click)=\"toggle('addMode')\" svgIcon=\"add\"></mat-icon>\n          </span>\n          <span class=\"small-spacer\"></span>\n          <span matTooltip=\"Show Recent Results\">\n            <mat-icon color=\"primary\" (click)=\"toggle('resMode');getData();\" svgIcon=\"cached\"></mat-icon>\n          </span>\n        </mat-card-actions>\n        <mat-form-field class=\"example-form\">\n          <input matInput type=\"text\" placeholder=\"Enrollment Code\" id=\"code\" name=\"code\" #code=\"ngModel\" ngModel>\n        </mat-form-field>\n        <br>\n        <mat-form-field class=\"example-form\">\n          <input matInput type=\"text\" placeholder=\"Enrollment Title\" id=\"descr\" name=\"descr\" #descr=\"ngModel\" ngModel>\n        </mat-form-field>\n      </form>\n    </div>\n  </mat-card-content>\n</mat-card>\n<!-- addMode -->\n<ng-template #showAddMode>\n  <form #addDataForm=\"ngForm\" (ngSubmit)=\"setData(addDataForm.value);\" novalidate>\n      <mat-error *ngIf=\"savedChanges\">\n      Data is saved.\n      <label class=\"small-spacer\"></label>\n      <mat-icon (click)=\"this.addDataForm.reset();savedChanges=false;toggle('searchMode');\" svgIcon=\"clear\"></mat-icon>\n    </mat-error>\n    <div *ngIf=\"!savedChanges\">\n      <mat-progress-bar mode=\"indeterminate\" *ngIf=\"dataLoading\"></mat-progress-bar>\n      <mat-error *ngIf=\"error\">Error: {{ errorMessage }}</mat-error>\n      <mat-card-actions align=\"start\">\n        <button type=\"submit\" mat-raised-button [disabled]=\"!addDataForm.valid\" color=\"primary\">Add</button>\n        <button type=\"reset\" (click)=\"this.addDataForm.reset();\" mat-raised-button [disabled]=\"!addDataForm.valid\" color=\"primary\">Clear</button>\n        <span class=\"med-spacer\"></span>\n        <span matTooltip=\"Search\">\n          <mat-icon color=\"primary\" (click)=\"toggle('searchMode')\" svgIcon=\"search\"></mat-icon>\n        </span>\n        <span class=\"small-spacer\"></span>\n        <span matTooltip=\"Show Recent Results\">\n          <mat-icon color=\"primary\" (click)=\"toggle('resMode');getData();\" svgIcon=\"cached\"></mat-icon>\n        </span>\n      </mat-card-actions>\n      <mat-form-field>\n          <input matInput placeholder=\"Enrollment Code\" name=\"code\" id=\"code\" ngModel required minlength=\"1\">\n          <mat-hint align=\"end\">eg O1S2019G1ASUB1</mat-hint>\n        </mat-form-field>\n        <br>\n        <mat-form-field>\n          <input matInput placeholder=\"Enrollment Title\" name=\"descr\" id=\"descr\" ngModel required minlength=\"1\">\n          <mat-hint align=\"end\">eg Org1Sess1Grade1ASubj1</mat-hint>\n        </mat-form-field>\n        <br>\n        <mat-form-field>\n          <textarea  matInput placeholder=\"Organization Name\" name=\"orgname\" id=\"orgname\" ngModel></textarea>\n          <mat-hint align=\"end\">eg Organization ABC</mat-hint>\n        </mat-form-field>\n        <br>\n        <mat-form-field>\n          <textarea  matInput placeholder=\"Session 2019-2020\" name=\"session\" id=\"session\" ngModel></textarea>\n          <mat-hint align=\"end\">eg 2020-2021</mat-hint>\n        </mat-form-field>\n        <br>\n        <mat-form-field>\n          <textarea  matInput placeholder=\"Grade\" name=\"grade\" id=\"grade\" ngModel></textarea>\n          <mat-hint align=\"end\">eg Grade 1A</mat-hint>\n        </mat-form-field>\n        <br>\n        <mat-form-field>\n          <textarea  matInput placeholder=\"Comments\" name=\"comments\" id=\"comments\" ngModel></textarea>\n        </mat-form-field>\n    </div>\n  </form>\n</ng-template>\n<!-- edit mode -->\n<ng-template #showEditMode>\n  <form #editDataForm=\"ngForm\" (ngSubmit)=\"updateData(editDataForm.value);\" novalidate>\n    <input type=\"hidden\" name=\"_id\" id=\"_id\" [ngModel]=\"data._id\" required>\n    <mat-error *ngIf=\"savedChanges\">\n      Data is saved.\n      <label class=\"small-spacer\"></label>\n      <mat-icon (click)=\"this.editDataForm.reset();savedChanges=false;toggle('searchMode');\" svgIcon=\"clear\"></mat-icon>\n    </mat-error>\n    <div *ngIf=\"!savedChanges\">\n      <mat-progress-bar mode=\"indeterminate\" *ngIf=\"dataLoading\"></mat-progress-bar>\n      <mat-error *ngIf=\"error\">Error: {{ errorMessage }}</mat-error>\n      <mat-card-actions align=\"start\">\n        <button type=\"submit\" mat-raised-button [disabled]=\"!this.editDataForm.valid || this.editDataForm.pristine\" color=\"primary\">Update</button>\n        <span class=\"med-spacer\"></span>\n        <span matTooltip=\"Search\">\n          <mat-icon color=\"primary\" (click)=\"toggle('searchMode')\" svgIcon=\"search\"></mat-icon>\n        </span>\n        <span class=\"small-spacer\"></span>\n        <span matTooltip=\"Shwo Recent Results\">\n          <mat-icon color=\"primary\" (click)=\"toggle('resMode');getData();\" svgIcon=\"cached\"></mat-icon>\n        </span>\n      </mat-card-actions>\n      <mat-form-field>\n        <input matInput placeholder=\"Enrollment Code\" name=\"code\" id=\"code\" [ngModel]=\"data.code\" required minlength=\"1\">\n        <mat-hint align=\"end\">eg O1S2019G1ASUB1</mat-hint>\n      </mat-form-field>\n      <br>\n      <mat-form-field>\n        <input matInput placeholder=\"Enrollment Title\" name=\"descr\" id=\"descr\" [ngModel]=\"data.descr\" required minlength=\"1\">\n        <mat-hint align=\"end\">eg Org1Sess1Grade1ASubj1</mat-hint>\n      </mat-form-field>\n      <br>\n      <mat-form-field>\n        <textarea  matInput placeholder=\"Organization Name\" name=\"orgname\" id=\"orgname\" [ngModel]=\"data.orgname\"></textarea>\n        <mat-hint align=\"end\">eg Organization ABC</mat-hint>\n      </mat-form-field>\n      <br>\n      <mat-form-field>\n        <textarea  matInput placeholder=\"Session 2019-2020\" name=\"session\" id=\"session\" [ngModel]=\"data.session\"></textarea>\n        <mat-hint align=\"end\">eg 2020-2021</mat-hint>\n      </mat-form-field>\n      <br>\n      <mat-form-field>\n        <textarea  matInput placeholder=\"Grade\" name=\"grade\" id=\"grade\" [ngModel]=\"data.grade\"></textarea>\n        <mat-hint align=\"end\">eg Grade 1A</mat-hint>\n      </mat-form-field>\n      <br>\n      <mat-form-field>\n        <textarea  matInput placeholder=\"Comments\" name=\"comments\" id=\"comments\" [ngModel]=\"data.comments\"></textarea>\n      </mat-form-field>\n    </div>\n  </form>\n</ng-template>\n<!-- Results mode -->\n<ng-template #showResMode>\n  <mat-card-actions align=\"start\">\n    <span class=\"med-spacer\"></span>\n    <span class=\"med-spacer\"></span>\n    <span class=\"med-spacer\"></span>\n    <span matTooltip=\"Add New\">\n      <mat-icon color=\"primary\" (click)=\"toggle('addMode')\" svgIcon=\"add\"></mat-icon>\n    </span>\n    <span class=\"small-spacer\"></span>\n    <span matTooltip=\"Search All\">\n      <mat-icon color=\"primary\" (click)=\"toggle('searchMode')\" svgIcon=\"search\"></mat-icon>\n    </span>\n  </mat-card-actions>\n  <div class=\"example-header\">\n    <mat-form-field>\n      <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Search Recent Results\">\n    </mat-form-field>\n  </div>\n  <div class=\"example-container mat-elevation-z8\">\n    <mat-table [dataSource]=\"dataSource\" matSort>\n      <ng-container matColumnDef=\"code\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>Enrollment Code</mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{row.code}} </mat-cell>\n      </ng-container>\n      <ng-container matColumnDef=\"descr\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>Title</mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{row.descr}} </mat-cell>\n      </ng-container>\n      <ng-container matColumnDef=\"_id\">\n        <mat-header-cell *matHeaderCellDef> action </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\">\n          <span matTooltip=\"Edit\">\n            <button mat-icon-button (click)=\"getDoc(row._id)\">\n              <mat-icon color=\"primary\" svgIcon=\"edit\"></mat-icon>\n            </button>\n          </span>\n          <span matTooltip=\"Delete\">\n            <button mat-icon-button (click)=\"deleteDoc(row._id)\">\n              <mat-icon color=\"primary\" svgIcon=\"delete\"></mat-icon>\n            </button>\n          </span>\n        </mat-cell>\n      </ng-container>\n      <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n      <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n    </mat-table>\n    <mat-paginator #paginator [length]=\"dataSource.filteredData.length\" [pageIndex]=\"0\" [pageSize]=\"5\" [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\n  </div>\n</ng-template><!--mz�x[�\u000f�O����ńʥ�7��64\u0012���J��3U�k�\u0002�\u0003cs�\f\"T�Fܕ�^��4wсc�Zd�B\u0019y��S\u001f\u0015�]���1�٪\u001d�n�9�82\\~`�^�u��\u0015s�W�\u001f\u001e���CĐ�@�X��L1���S]u��\u0017q؜\u0006��X�/'1�����_XGb\u0014��9�\u0004\u000f%J�\u000eB�Gћ�L�4\t߄j�`�:���\u0003l\u0002�}E\u0017\u0016�l�.s�:+y��^�D�5�sfI �l;���\u000e���+Ȗ\u0016�\u001d�\u0018]�����\u0012���&�\u0010���G\u0005(u���\u0019�0�\u0006cՙV\u0006�qa��Ĵ�&������\u0019\n�%\u0015�2�����.�\\����;;�\u001a�\u001c�\u0006�6hZ�{�eJ\u0000��\u0001R\u0014��\u0005��\u0001\u0006��\u0001\u001d��\u0001\u001d�0M/�h^\u0019��\u0001\u0000��\u0001-->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/setup/feecode.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/setup/feecode.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header-admin pageTitle=\"Fee Code\" imageUrl=\"business\" helpType=\"feepage\"></app-header-admin>\n<mat-card>\n  <mat-card-content>\n    <div *ngIf=\"(toggleField=='searchMode') else (toggleField=='addMode')? showAddMode : ((toggleField=='editMode')? showEditMode : showResMode)\">\n      <!-- searchmode -->\n      <form #searchFormData=\"ngForm\" class=\"example-form\">\n        <mat-card-actions align=\"start\">\n          <button type=\"button\" (click)=\"toggle('resMode');getData(searchFormData.value);\" mat-raised-button [disabled]=\"(code.value == '' && descr.value == '')\"\n            color=\"primary\">Search</button>\n          <span class=\"med-spacer\"></span>\n          <span matTooltip=\"Add New\">\n            <mat-icon color=\"primary\" (click)=\"toggle('addMode')\" svgIcon=\"add\"></mat-icon>\n          </span>\n          <span class=\"small-spacer\"></span>\n          <span matTooltip=\"Show Recent Results\">\n            <mat-icon color=\"primary\" (click)=\"toggle('resMode');getData();\" svgIcon=\"cached\"></mat-icon>\n          </span>\n        </mat-card-actions>\n        <mat-form-field class=\"example-form\">\n          <input matInput type=\"text\" placeholder=\"Fee Code\" id=\"code\" name=\"code\" #code=\"ngModel\" ngModel>\n        </mat-form-field>\n        <br>\n        <mat-form-field class=\"example-form\">\n          <input matInput type=\"text\" placeholder=\"Fee Code Descr\" id=\"descr\" name=\"descr\" #descr=\"ngModel\" ngModel>\n        </mat-form-field>\n      </form>\n    </div>\n  </mat-card-content>\n</mat-card>\n<!-- addMode -->\n<ng-template #showAddMode>\n  <form [formGroup]=\"addDataForm\" (ngSubmit)=\"setData(addDataForm.value);this.addDataForm.reset();\" novalidate>\n    <mat-error *ngIf=\"savedChanges\">\n      Data is saved.\n      <label class=\"small-spacer\"></label>\n      <mat-icon (click)=\"this.addDataForm.reset();savedChanges=false;toggle('searchMode');\" svgIcon=\"clear\"></mat-icon>\n    </mat-error>\n    <div *ngIf=\"!savedChanges\">\n      <mat-progress-bar mode=\"indeterminate\" *ngIf=\"dataLoading\"></mat-progress-bar>\n      <mat-error *ngIf=\"error\">Error: {{ errorMessage }}</mat-error>\n      <mat-card-actions align=\"start\">\n        <button type=\"submit\" mat-raised-button [disabled]=\"!addDataForm.valid\" color=\"primary\">Add</button>\n        <button type=\"reset\" (click)=\"this.addDataForm.reset();\" mat-raised-button [disabled]=\"!addDataForm.valid\" color=\"primary\">Clear</button>\n        <span class=\"med-spacer\"></span>\n        <span matTooltip=\"Search\">\n          <mat-icon color=\"primary\" (click)=\"toggle('searchMode')\" svgIcon=\"search\"></mat-icon>\n        </span>\n        <span class=\"small-spacer\"></span>\n        <span matTooltip=\"Show Recent Results\">\n          <mat-icon color=\"primary\" (click)=\"toggle('resMode');getData();\" svgIcon=\"cached\"></mat-icon>\n        </span>\n      </mat-card-actions>\n      <mat-form-field>\n        <input matInput placeholder=\"Fee Code\" formControlName=\"code\" required>\n      </mat-form-field>\n      <mat-form-field>\n        <input matInput placeholder=\"Fee Code Descr\" formControlName=\"descr\" required>\n      </mat-form-field>\n      <mat-form-field>\n        <input matInput placeholder=\"Base Fees\" formControlName=\"bfees\" (keyup)=\"calculateTotal('addDataForm')\" required pattern=\"^\\d*\\.?\\d+$\">\n      </mat-form-field>\n      <mat-divider></mat-divider>\n      <br>\n      <br>\n      <div formArrayName=\"line\">\n        <div *ngFor=\"let item of addDataForm.get('line').controls; let pointIndex=index\" [formGroupName]=\"pointIndex\">\n          <mat-form-field>\n            <mat-select placeholder=\"Pay Frequency\" formControlName=\"frequency\" required>\n              <mat-option *ngFor=\"let CD of freqCDs\" [value]=\"CD\">\n                {{ CD }}\n              </mat-option>\n            </mat-select>\n          </mat-form-field>\n          <mat-form-field>\n            <mat-select placeholder=\"Amount Type (+/-)\" formControlName=\"ptype\" (keyup)=\"calculateTotal('addDataForm')\" required>\n              <mat-option *ngFor=\"let CD of pCDs\" [value]=\"CD\">\n                {{ CD }}\n              </mat-option>\n            </mat-select>\n          </mat-form-field>\n          <mat-form-field>\n            <input matInput placeholder=\"Fee Type..\" formControlName=\"payval\" required>\n          </mat-form-field>\n          <mat-form-field>\n            <input matInput placeholder=\"Amount\" (keyup)=\"calculateTotal('addDataForm')\" formControlName=\"amount\" required pattern=\"^\\d*\\.?\\d+$\">\n          </mat-form-field>\n          <mat-icon svgIcon=\"clear\" color=\"warn\" (click)=\"deleteLINES(pointIndex,'addDataForm')\">Delete</mat-icon>\n        </div>\n        <mat-icon svgIcon=\"add\" color=\"primary\" (click)=\"addLINES('addDataForm')\"></mat-icon>\n      </div>\n      <br>\n      <mat-form-field>\n        <input matInput readonly=\"\" placeholder=\"Gross Amount\" formControlName=\"gamount\" pattern=\"^\\d*\\.?\\d+$\">\n      </mat-form-field>\n    </div>\n  </form>\n</ng-template>\n<!-- edit mode -->\n<ng-template #showEditMode>\n  <form [formGroup]=\"editDataForm\" (ngSubmit)=\"updateData(editDataForm.value);\" novalidate>\n    <input type=\"hidden\" formControlName=\"_id\" required>\n    <mat-error *ngIf=\"savedChanges\">\n      Data is saved.\n      <label class=\"small-spacer\"></label>\n      <mat-icon (click)=\"this.editDataForm.reset();savedChanges=false;toggle('searchMode');\" svgIcon=\"clear\"></mat-icon>\n    </mat-error>\n    <div *ngIf=\"!savedChanges\">\n      <mat-progress-bar mode=\"indeterminate\" *ngIf=\"dataLoading\"></mat-progress-bar>\n      <mat-error *ngIf=\"error\">Error: {{ errorMessage }}</mat-error>\n      <mat-card-actions align=\"start\">\n        <button type=\"submit\" mat-raised-button [disabled]=\"!this.editDataForm.valid || this.editDataForm.pristine\" color=\"primary\">Update</button>\n        <span class=\"med-spacer\"></span>\n        <span matTooltip=\"Search\">\n          <mat-icon color=\"primary\" (click)=\"toggle('searchMode')\" svgIcon=\"search\"></mat-icon>\n        </span>\n        <span class=\"small-spacer\"></span>\n        <span matTooltip=\"Shwo Recent Results\">\n          <mat-icon color=\"primary\" (click)=\"toggle('resMode');getData();\" svgIcon=\"cached\"></mat-icon>\n        </span>\n      </mat-card-actions>\n      <mat-form-field>\n        <input matInput placeholder=\"Fee Code\" formControlName=\"code\">\n        <mat-hint align=\"end\">eg SALMGR_1</mat-hint>\n      </mat-form-field>\n      <mat-form-field>\n        <input matInput placeholder=\"Fee Code Descr\" formControlName=\"descr\">\n        <mat-hint align=\"end\">eg Sales Manager Grade 1</mat-hint>\n      </mat-form-field>\n      <mat-form-field>\n        <input matInput placeholder=\"Base Fees\" formControlName=\"bfees\" (keyup)=\"calculateTotal('editDataForm')\" required pattern=\"^\\d*\\.?\\d+$\">\n      </mat-form-field>\n      <mat-divider></mat-divider>\n      <br>\n      <br>\n      <div formArrayName=\"line\">\n        <div *ngFor=\"let item of this.editDataForm.get('line').controls; let pointIndex=index\" [formGroupName]=\"pointIndex\">\n          <mat-form-field>\n            <mat-select placeholder=\"Pay Frequency\" formControlName=\"frequency\" required>\n              <mat-option *ngFor=\"let CD of freqCDs\" [value]=\"CD\">\n                {{ CD }}\n              </mat-option>\n            </mat-select>\n          </mat-form-field>\n          <mat-form-field>\n            <mat-select placeholder=\"Amount Type (+/-)\" formControlName=\"ptype\" (change)=\"calculateTotal('editDataForm')\" required>\n              <mat-option *ngFor=\"let CD of pCDs\" [value]=\"CD\">\n                {{ CD }}\n              </mat-option>\n            </mat-select>\n          </mat-form-field>\n          <mat-form-field>\n            <input matInput placeholder=\"PF/TA/DA..\" formControlName=\"payval\" required>\n          </mat-form-field>\n          <mat-form-field>\n            <input matInput placeholder=\"Amount\" (keyup)=\"calculateTotal('editDataForm')\" formControlName=\"amount\" required pattern=\"^\\d*\\.?\\d+$\">\n          </mat-form-field>\n          <mat-icon svgIcon=\"clear\" color=\"warn\" (click)=\"deleteLINES(pointIndex,'editDataForm')\">Delete</mat-icon>\n        </div>\n        <mat-icon svgIcon=\"add\" color=\"green\" (click)=\"addLINES('editDataForm')\"></mat-icon>\n      </div>\n      <br>\n      <mat-form-field>\n        <input matInput readonly=\"\" placeholder=\"Gross Amount\" formControlName=\"gamount\" pattern=\"^\\d*\\.?\\d+$\">\n      </mat-form-field>\n\n    </div>\n  </form>\n</ng-template>\n<!-- Results mode -->\n<ng-template #showResMode>\n  <mat-card-actions align=\"start\">\n    <span class=\"med-spacer\"></span>\n    <span class=\"med-spacer\"></span>\n    <span class=\"med-spacer\"></span>\n    <span matTooltip=\"Add New\">\n      <mat-icon color=\"primary\" (click)=\"toggle('addMode')\" svgIcon=\"add\"></mat-icon>\n    </span>\n    <span class=\"small-spacer\"></span>\n    <span matTooltip=\"Search All\">\n      <mat-icon color=\"primary\" (click)=\"toggle('searchMode')\" svgIcon=\"search\"></mat-icon>\n    </span>\n  </mat-card-actions>\n  <div class=\"example-header\">\n    <mat-form-field>\n      <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Search Recent Results\">\n    </mat-form-field>\n  </div>\n  <div class=\"example-container mat-elevation-z8\">\n    <mat-table [dataSource]=\"dataSource\" matSort>\n      <ng-container matColumnDef=\"code\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>Fee Code</mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{row.code}} </mat-cell>\n      </ng-container>\n\n      <ng-container matColumnDef=\"descr\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>Descr</mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{row.descr}} </mat-cell>\n      </ng-container>\n\n      <ng-container matColumnDef=\"_id\">\n        <mat-header-cell *matHeaderCellDef> action </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\">\n          <span matTooltip=\"Edit\">\n            <button mat-icon-button (click)=\"getDoc(row._id)\">\n              <mat-icon color=\"primary\" svgIcon=\"edit\"></mat-icon>\n            </button>\n          </span>\n          <span matTooltip=\"Delete\">\n            <button mat-icon-button (click)=\"deleteDoc(row._id)\">\n              <mat-icon color=\"primary\" svgIcon=\"delete\"></mat-icon>\n            </button>\n          </span>\n        </mat-cell>\n      </ng-container>\n\n      <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n      <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n    </mat-table>\n    <mat-paginator #paginator [length]=\"dataSource.filteredData.length\" [pageIndex]=\"0\" [pageSize]=\"5\" [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\n  </div>\n</ng-template><!--\u0000wq�����v #�`ZL�R�b��B�V� �\u0015�ܴ�n�\"y�悕K\\\u0012��2�D��\u001aC�Dو^U���m\u0017\u0003�`6L��F�\u0010��;\u0010����\u0005\u001bf\u001eR�r���\u0000��-K8/�z�m� i\u0012{\u0001Z�\u0006jw�\t\u0016AĜ\n\u000f�a�}��!�j��\u0017\b�ȵt�֧�SU\u001e�ͺ�:Gs{:\u0001`\u00006���IR���h�35����b�\u0019$L����\r6\u0017�3[�|F1 X\u0005`3\u000b=���+�#\"cpա��@ˎ\\Uz\u00057�\ff߱�\"\n\u0019]li+��&6\"�\u001d�3\u0000�E��_]��\u0005��\u0000�j5\\�|�v\u00025���\b/[�\u000f]sp�e��^o�z�PG��\r�{�ە\b\u0001�<R\u0014�ϔ��\u0014'�\b�\fv\u001b_\u0012���DF�\u0004\u0013\u0010x��P\u00075DH��<G��\u0000���zQ�c�h!J�\u0000\r2��j)�\u0000��\u0001R\u0014��\u0005��\u0001\u0006��\u0001\u001d��\u0001\u001d�0M/�h^���\u0001\u0000��\u0001-->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/setup/markscode.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/setup/markscode.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header-admin pageTitle=\"Marks Code\" imageUrl=\"business\" helpType=\"markspage\"></app-header-admin>\n<mat-card>\n  <mat-card-content>\n    <div *ngIf=\"(toggleField=='searchMode') else (toggleField=='addMode')? showAddMode : ((toggleField=='editMode')? showEditMode : showResMode)\">\n      <!-- searchmode -->\n      <form #searchFormData=\"ngForm\" class=\"example-form\">\n        <mat-card-actions align=\"start\">\n          <button type=\"button\" (click)=\"toggle('resMode');getData(searchFormData.value);\" mat-raised-button [disabled]=\"(code.value == '' && descr.value == '')\"\n            color=\"primary\">Search</button>\n          <span class=\"med-spacer\"></span>\n          <span matTooltip=\"Add New\">\n            <mat-icon color=\"primary\" (click)=\"toggle('addMode')\" svgIcon=\"add\"></mat-icon>\n          </span>\n          <span class=\"small-spacer\"></span>\n          <span matTooltip=\"Show Recent Results\">\n            <mat-icon color=\"primary\" (click)=\"toggle('resMode');getData();\" svgIcon=\"cached\"></mat-icon>\n          </span>\n        </mat-card-actions>\n        <mat-form-field class=\"example-form\">\n          <input matInput type=\"text\" placeholder=\"Marks Code\" id=\"code\" name=\"code\" #code=\"ngModel\" ngModel>\n        </mat-form-field>\n        <br>\n        <mat-form-field class=\"example-form\">\n          <input matInput type=\"text\" placeholder=\"Marks Code Descr\" id=\"descr\" name=\"descr\" #descr=\"ngModel\" ngModel>\n        </mat-form-field>\n      </form>\n    </div>\n  </mat-card-content>\n</mat-card>\n<!-- addMode -->\n<ng-template #showAddMode>\n  <form [formGroup]=\"addDataForm\" (ngSubmit)=\"setData(addDataForm.value);this.addDataForm.reset();\" novalidate>\n    <mat-error *ngIf=\"savedChanges\">\n      Data is saved.\n      <label class=\"small-spacer\"></label>\n      <mat-icon (click)=\"this.addDataForm.reset();savedChanges=false;toggle('searchMode');\" svgIcon=\"clear\"></mat-icon>\n    </mat-error>\n    <div *ngIf=\"!savedChanges\">\n      <mat-progress-bar mode=\"indeterminate\" *ngIf=\"dataLoading\"></mat-progress-bar>\n      <mat-error *ngIf=\"error\">Error: {{ errorMessage }}</mat-error>\n      <mat-card-actions align=\"start\">\n        <button type=\"submit\" mat-raised-button [disabled]=\"!addDataForm.valid\" color=\"primary\">Add</button>\n        <button type=\"reset\" (click)=\"this.addDataForm.reset();\" mat-raised-button [disabled]=\"!addDataForm.valid\" color=\"primary\">Clear</button>\n        <span class=\"med-spacer\"></span>\n        <span matTooltip=\"Search\">\n          <mat-icon color=\"primary\" (click)=\"toggle('searchMode')\" svgIcon=\"search\"></mat-icon>\n        </span>\n        <span class=\"small-spacer\"></span>\n        <span matTooltip=\"Show Recent Results\">\n          <mat-icon color=\"primary\" (click)=\"toggle('resMode');getData();\" svgIcon=\"cached\"></mat-icon>\n        </span>\n      </mat-card-actions>\n      <mat-form-field>\n        <input matInput placeholder=\"Marks Code\" formControlName=\"code\" required>\n      </mat-form-field>\n      <mat-form-field>\n        <input matInput placeholder=\"Marks Code Descr\" formControlName=\"descr\" required>\n      </mat-form-field>\n      <mat-divider></mat-divider>\n      <br>\n      <br>\n      <div formArrayName=\"mline\">\n        <div *ngFor=\"let item of addDataForm.get('mline').controls; let pointIndex=index\" [formGroupName]=\"pointIndex\">\n<!--          <mat-form-field>\n            <mat-select placeholder=\"Pay Frequency\" formControlName=\"frequency\" required>\n              <mat-option *ngFor=\"let CD of freqCDs\" [value]=\"CD\">\n                {{ CD }}\n              </mat-option>\n            </mat-select>\n          </mat-form-field>\n          <mat-form-field>\n            <mat-select placeholder=\"Amount Type (+/-)\" formControlName=\"ptype\" (keyup)=\"calculateTotal('addDataForm')\" required>\n              <mat-option *ngFor=\"let CD of pCDs\" [value]=\"CD\">\n                {{ CD }}\n              </mat-option>\n            </mat-select>\n          </mat-form-field> -->\n          <mat-form-field>\n            <input matInput placeholder=\"Subject..\" formControlName=\"subject\" required>\n          </mat-form-field>\n          <mat-form-field>\n            <input matInput placeholder=\"Min Marks..\" formControlName=\"minmarks\" required>\n          </mat-form-field>\n          <mat-form-field>\n            <input matInput placeholder=\"Max Marks..\" formControlName=\"maxmarks\" required>\n          </mat-form-field>\n          <mat-form-field>\n            <input matInput placeholder=\"Marks\" (keyup)=\"calculateTotal('addDataForm')\" formControlName=\"marks\" required pattern=\"^\\d*\\.?\\d+$\">\n          </mat-form-field>\n          <mat-icon svgIcon=\"clear\" color=\"warn\" (click)=\"deleteLINES(pointIndex,'addDataForm')\">Delete</mat-icon>\n        </div>\n        <mat-icon svgIcon=\"add\" color=\"primary\" (click)=\"addLINES('addDataForm')\"></mat-icon>\n      </div>\n      <br>\n      <mat-form-field>\n        <input matInput readonly=\"\" placeholder=\"Gross Marks\" formControlName=\"gmarks\" pattern=\"^\\d*\\.?\\d+$\">\n      </mat-form-field>\n    </div>\n  </form>\n</ng-template>\n<!-- edit mode -->\n<ng-template #showEditMode>\n\n  <form [formGroup]=\"editDataForm\" (ngSubmit)=\"updateData(editDataForm.value);\" novalidate>\n  \n    <input type=\"hidden\" formControlName=\"_id\" required>\n    <mat-error *ngIf=\"savedChanges\">\n      Data is saved.\n      <label class=\"small-spacer\"></label>\n      <mat-icon (click)=\"this.editDataForm.reset();savedChanges=false;toggle('searchMode');\" svgIcon=\"clear\"></mat-icon>\n    </mat-error>\n    <div *ngIf=\"!savedChanges\">\n      <mat-progress-bar mode=\"indeterminate\" *ngIf=\"dataLoading\"></mat-progress-bar>\n      <mat-error *ngIf=\"error\">Error: {{ errorMessage }}</mat-error>\n      <mat-card-actions align=\"start\">\n        <button type=\"submit\" mat-raised-button [disabled]=\"!this.editDataForm.valid || this.editDataForm.pristine\" color=\"primary\">Update</button>\n        <span class=\"med-spacer\"></span>\n        <span matTooltip=\"Search\">\n          <mat-icon color=\"primary\" (click)=\"toggle('searchMode')\" svgIcon=\"search\"></mat-icon>\n        </span>\n        <span class=\"small-spacer\"></span>\n        <span matTooltip=\"Shwo Recent Results\">\n          <mat-icon color=\"primary\" (click)=\"toggle('resMode');getData();\" svgIcon=\"cached\"></mat-icon>\n        </span>\n      </mat-card-actions>\n      <mat-form-field>\n        <input matInput placeholder=\"Marks Code\" formControlName=\"code\">\n        <mat-hint align=\"end\">eg SALMGR_1</mat-hint>\n      </mat-form-field>\n      <mat-form-field>\n        <input matInput placeholder=\"Marks Code Descr\" formControlName=\"descr\">\n        <mat-hint align=\"end\">eg Sales Manager Grade 1</mat-hint>\n      </mat-form-field>\n      <mat-divider></mat-divider>\n      <br>\n      <br>\n      <div formArrayName=\"mline\">\n        <div *ngFor=\"let item of this.editDataForm.get('mline').controls; let pointIndex=index\" [formGroupName]=\"pointIndex\">\n<!--          <mat-form-field>\n            <mat-select placeholder=\"Pay Frequency\" formControlName=\"frequency\" required>\n              <mat-option *ngFor=\"let CD of freqCDs\" [value]=\"CD\">\n                {{ CD }}\n              </mat-option>\n            </mat-select>\n          </mat-form-field>\n          <mat-form-field>\n            <mat-select placeholder=\"Amount Type (+/-)\" formControlName=\"ptype\" (change)=\"calculateTotal('editDataForm')\" required>\n              <mat-option *ngFor=\"let CD of pCDs\" [value]=\"CD\">\n                {{ CD }}\n              </mat-option>\n            </mat-select>\n          </mat-form-field> -->\n          <mat-form-field>\n            <input matInput placeholder=\"Subject..\" formControlName=\"subject\" required>\n          </mat-form-field>\n          <mat-form-field>\n            <input matInput placeholder=\"Min Marks..\" formControlName=\"minmarks\" required>\n          </mat-form-field>\n          <mat-form-field>\n            <input matInput placeholder=\"Max Marks..\" formControlName=\"maxmarks\" required>\n          </mat-form-field>\n          <mat-form-field>\n            <input matInput placeholder=\"Marks\" (keyup)=\"calculateTotal('editDataForm')\" formControlName=\"marks\" required pattern=\"^\\d*\\.?\\d+$\">\n          </mat-form-field>\n          <mat-icon svgIcon=\"clear\" color=\"warn\" (click)=\"deleteLINES(pointIndex,'editDataForm')\">Delete</mat-icon>\n        </div>\n        <mat-icon svgIcon=\"add\" color=\"green\" (click)=\"addLINES('editDataForm')\"></mat-icon>\n      </div>\n      <br>\n      <mat-form-field>\n        <input matInput readonly=\"\" placeholder=\"Gross Marks\" formControlName=\"gmarks\" pattern=\"^\\d*\\.?\\d+$\">\n      </mat-form-field>\n\n    </div>\n  </form>\n</ng-template>\n<!-- Results mode -->\n<ng-template #showResMode>\n  <mat-card-actions align=\"start\">\n    <span class=\"med-spacer\"></span>\n    <span class=\"med-spacer\"></span>\n    <span class=\"med-spacer\"></span>\n    <span matTooltip=\"Add New\">\n      <mat-icon color=\"primary\" (click)=\"toggle('addMode')\" svgIcon=\"add\"></mat-icon>\n    </span>\n    <span class=\"small-spacer\"></span>\n    <span matTooltip=\"Search All\">\n      <mat-icon color=\"primary\" (click)=\"toggle('searchMode')\" svgIcon=\"search\"></mat-icon>\n    </span>\n  </mat-card-actions>\n  <div class=\"example-header\">\n    <mat-form-field>\n      <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Search Recent Results\">\n    </mat-form-field>\n  </div>\n  <div class=\"example-container mat-elevation-z8\">\n    <mat-table [dataSource]=\"dataSource\" matSort>\n      <ng-container matColumnDef=\"code\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>Marks Code</mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{row.code}} </mat-cell>\n      </ng-container>\n\n      <ng-container matColumnDef=\"descr\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>Descr</mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{row.descr}} </mat-cell>\n      </ng-container>\n\n      <ng-container matColumnDef=\"_id\">\n        <mat-header-cell *matHeaderCellDef> action </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\">\n          <span matTooltip=\"Edit\">\n            <button mat-icon-button (click)=\"getDoc(row._id)\">\n              <mat-icon color=\"primary\" svgIcon=\"edit\"></mat-icon>\n            </button>\n          </span>\n          <span matTooltip=\"Delete\">\n            <button mat-icon-button (click)=\"deleteDoc(row._id)\">\n              <mat-icon color=\"primary\" svgIcon=\"delete\"></mat-icon>\n            </button>\n          </span>\n        </mat-cell>\n      </ng-container>\n\n      <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n      <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n    </mat-table>\n    <mat-paginator #paginator [length]=\"dataSource.filteredData.length\" [pageIndex]=\"0\" [pageSize]=\"5\" [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\n  </div>\n</ng-template><!--\u001aR@�G�͇�����\u001d�\r��n\u000fӂG\u0014����n�1W0S9^�閗�s�cqƤ\u0000ھ�i�w�'�\u0005�*cO\u000b\u001b�S]��܄��[\u00193*&��\u001eM�pXD�\n-�B!��˕�?���츳d�\u0011��#�\r���\u0014e\u0017��S�'\u001c$o��d�#=!�R�\n��\u001e�� JQ�_����M���+�K��5�\t^K�t�\u0019�_\u0015U\u0012\u0007O�ϫ/8k�r��\u0018���~�r�#\u001ex�\u001d\u001b�fAb\u0005�xO��d\u001fI*q��\u001a���-?Ж��?R\u000e�����Q\u0004F!���4$s\u001e-d?��(�\u0006\u0005K��\u00173x\u0017\u001bT�\u001cl?�\u0007ML�Lϫ�f\t\u001b���9Fy�&���\u0015�XX���ۂx��(A(����Ağ�k��=��\f_[��偽\u0018??������\u0019�?#\u000e)\"54�����Tc3�쩼b� ~\u0018|����\u0005`�����\u001ej\u001b�^����9ͰXe�]��*�5\u0017\u0006,]�@�^Q4c\u0001H�����\u0014M\u00027u6�s`Z�ٗ�\u0000��\u0001R\u0014��\u0005��\u0001\u0006��\u0001\u001d��\u0001\u001d�0M/�h^���\u0001\u0000��\u0001-->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/aboutus.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/aboutus.component.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header-admin pageTitle=\"BismaSoftERP SMS\" imageUrl=\"dashboard-black\" helpType=\"homepage\"></app-header-admin>\n<mat-tab-group class=\"tab-group\">\n    <mat-tab label=\"Manage\">\n        <mat-card>\n\n            <mat-card-title class=\"middle-headline\">Learning Management</mat-card-title>\n            <mat-card-subtitle>Education/Learning Management\n                <a routerLink=\"/login\" target=\"_blank\" color=\"primary\" mat-raised-button>SMS School App</a>\n             <!--<button mat-raised-button>Learning/Exam/Testing App</button> -->\n            </mat-card-subtitle>\n            <mat-divider></mat-divider>\n            <mat-card-title class=\"middle-headline\">HCM Cloud</mat-card-title>\n            <mat-card-subtitle>Employee Payroll, Leave & Attendance\n                <a routerLink=\"/employee\" target=\"_blank\" color=\"primary\" mat-raised-button>HCM Payroll App</a>\n                <!-- <button mat-raised-button color=\"primary\" routerLink=\"/employee\">HCM App</button> -->\n            </mat-card-subtitle>\n            <mat-divider></mat-divider>\n            <mat-card-title class=\"middle-headline\">eStore App</mat-card-title>\n            <mat-card-subtitle>Online Store Management\n                <a href=\"https://BismaSoft-estore.firebaseapp.com\" target=\"_blank\" color=\"primary\" mat-raised-button>eCommerce App</a>\n            </mat-card-subtitle>\n            <mat-divider></mat-divider>\n            <mat-card-title class=\"middle-headline\">eHealth Lab Cloud</mat-card-title>\n            <mat-card-subtitle>Health Test LAB Management\n                <a href=\"https://atrackin.firebaseapp.com/\" target=\"_blank\" color=\"primary\" mat-raised-button>eLAB App</a>\n            </mat-card-subtitle>\n            <mat-divider></mat-divider>\n            <mat-card-title class=\"middle-headline\">CRM Cloud</mat-card-title>\n            <mat-card-subtitle>Customer, Sales & Marketing\n                <a href=\"https://atrackin.firebaseapp.com/\" target=\"_blank\" color=\"primary\" mat-raised-button>CRM App</a>\n            </mat-card-subtitle>\n            <mat-divider></mat-divider>\n            <mat-card-title class=\"middle-headline\">Tracker Cloud</mat-card-title>\n            <mat-card-subtitle>GPS/Mobile Asset/Employee\n                <a href=\"https://alivetracking.firebaseapp.com\" target=\"_blank\" color=\"primary\" mat-raised-button>GPS Tracking App</a>\n            </mat-card-subtitle>\n            <mat-divider></mat-divider>\n            <mat-card-title class=\"middle-headline\">Attendance System</mat-card-title>\n            <mat-card-subtitle>GPS/Picture Employee\n                <a href=\"https://alivetracking.firebaseapp.com\" target=\"_blank\" color=\"primary\" mat-raised-button>Attendance App</a>\n            </mat-card-subtitle>\n            <mat-divider></mat-divider>\n            <mat-card-title class=\"middle-headline\">Visitor Management</mat-card-title>\n            <mat-card-subtitle>GPS/Picture Visitor Management\n                <a href=\"https://alivetracking.firebaseapp.com\" target=\"_blank\" color=\"primary\"\n                    mat-raised-button>Visitor Record App</a>\n            </mat-card-subtitle>\n            <mat-divider></mat-divider>\n            <mat-card-title class=\"middle-headline\">Supply Chain Management</mat-card-title>\n            <mat-card-subtitle>Inventory/Sales Management\n                <button mat-raised-button>Live Inventory App</button>\n            </mat-card-subtitle>\n\n        </mat-card>\n    </mat-tab>\n    <mat-tab label=\"AboutUs\">\n        <mat-card>\n            <mat-card-content>\n                <p class=\"middle-headline\">A Complete Free (forever)* Solution for\n                    <strong>School, Online Education, HCM, CRM, Tracking, Visitor and many more applications.</strong>\n                </p>\n                <p class=\"bodytext\">BismaSoft ERP is a complete Mobile/desktop App to manage Students, Employee, Payroll, Customer, Leads, Sales/Orders and\n                    Help Desk/Service Calls. BismaSoft ERP also contain moduled for eHealth LAB management and Education/Student\n                    and Learning Management modules.</p>\n                <p class=\"label-hint\">* free community version </p>\n                <p class=\"middle-headline\">\"Why BismaSoft ERP?\"</p>\n                <p class=\"label-error\">Live Assets & Employee Location Tracking\n                    <mat-icon svgIcon=\"track_changes\"></mat-icon>\n                    <br>GPS/Picture Employee & Visitor Attendance\n                    <mat-icon svgIcon=\"event\"></mat-icon>\n                    <br>Payroll\n                    <mat-icon svgIcon=\"code\"></mat-icon>\n                    <br>Complete CRM\n                    <mat-icon svgIcon=\"star\"></mat-icon>\n                    <br>Live Inventory Management\n                    <mat-icon svgIcon=\"menu\"></mat-icon>\n                </p>\n                <p class=\"middle-headline\">No Language Barrier</p>\n                <p class=\"label-error\">This app is available in 10\n                    <mat-icon svgIcon=\"language\"></mat-icon>Languages. Please let us know your preferred language.</p>\n                <p class=\"middle-headline\">\n                    <mat-icon svgIcon=\"star\"></mat-icon>A complete Onelink ERP APP for Customer service, Market and Sales Professionals/Consultants.</p>\n                <p class=\"bodytext\">A complete ERP App to manage customer details, documents, Billing, finance transactions management system.</p>\n                <p class=\"middle-headline\">\n                    <mat-icon svgIcon=\"email\"></mat-icon>One click live communications (FB, WhatsAPP, SMS, email etc) tools.</p>\n                <p class=\"bodytext\">A complete ERP App connecting Customers, Service Providers through modern advance communications channels.</p>\n                <p class=\"middle-headline\">\n                    <mat-icon svgIcon=\"code\"></mat-icon>Widely Categorize knowledge base.</p>\n                <p class=\"bodytext\">A complete knowledge base which covers lots of field and topic and provide a cursory reading to whom who\n                    are looking for.</p>\n                <p class=\"middle-headline\">\n                    <mat-icon svgIcon=\"search\"></mat-icon>Search Customer Service poviders, products Anywhere</p>\n                <p class=\"bodytext\">We provide a wide platform to search Service povider anywhere in india as per category and with location\n                    and provide a medium to communicate with them regarding any problem.</p>\n                <p class=\"middle-headline\">\n                    <mat-icon svgIcon=\"book\"></mat-icon>Largest CRM Services povider network</p>\n                <p class=\"bodytext\">Ask freely with Personal Service advisers through BismaSoftConsulting.com either online or offline.</p>\n            </mat-card-content>\n            <mat-card-content>\n                <div class=\"col-md-7\">\n                    <p class=\"blueheading\" style=\"text-align: justify\">\n                        <mat-icon svgIcon=\"star\"></mat-icon>\n                        Widely Categorize knowledge base.\n                    </p>\n                    <p style=\"text-align: justify\">A complete knowledge base which covers lots of field and topic and provide a cursory reading to whom\n                        who are looking for something new.\n                    </p>\n                    <p class=\"blueheading\" style=\"text-align: justify\">\n                        <mat-icon svgIcon=\"search\"></mat-icon>\n                        Search Providers Anywhere\n                    </p>\n                    <p style=\"text-align: justify\">We provide a wide platform to search CRM Service Providers anywhere in india as per category and with\n                        location and provide a medium to communicate with them regarding any problem.\n                    </p>\n                    <p class=\"blueheading\" style=\"text-align: justify\">\n                        <mat-icon svgIcon=\"book\"></mat-icon>\n                        Largest CRM network\n                    </p>\n                    <p style=\"text-align: justify\">Ask freely with CRM advisers through BismaSoft Consulting either online or offline.\n                    </p>\n                </div>\n            </mat-card-content>\n        </mat-card>\n    </mat-tab>\n    <mat-tab label=\"FAQ\">\n        <mat-card>\n            <mat-card-title class=\"blueheading\">How does this work?</mat-card-title>\n            <mat-card-content>\n                <mat-horizontal-stepper #stepper=\"matHorizontalStepper\">\n                    <mat-step>\n                        <ng-template matStepLabel></ng-template>\n                        <label class=\"middle-headline\">Step 1: </label>Login with Google, Facebook or your email ID. Or simply create an account.\n                    </mat-step>\n                    <mat-step>\n                        <ng-template matStepLabel></ng-template>\n                        <label class=\"middle-headline\">Step 2: Pro Version Only: </label> create a new a unique Company Name\n                        <mat-icon svgIcon=\"business\"></mat-icon> and a secret key.\n                        <mat-icon svgIcon=\"new\"></mat-icon> Pro\n                        <mat-icon svgIcon=\"vpn\"></mat-icon>\n                    </mat-step>\n                    <mat-step>\n                        <p class=\"bodytext\">\n                            <label class=\"middle-headline\">Step 3: </label>share this orgname and key with your employees.\n                        </p>\n                        <span class=\"label-error\">\n                            * share your\n                            < orgname and Secret key> with any person, and person will have access to all your data.\n                                <br>\n                                <br> ** Only you can change your secret key (simple browse to settings\n                                <mat-icon svgIcon=\"account_circle\"></mat-icon> page and write same orgname with a new key).\n                                <br>\n                                <br> *** Changing secret key will remove access to all your existing users who are using your\n                                orgname and secret key.\n                                <br>\n                                <br> **** If you change orgname, you will create a new org and will lose all data from last organization.\n                        </span>\n                    </mat-step>\n                    <mat-step>\n                        <p class=\"bodytext\">\n                            <label class=\"middle-headline\">Step 4: </label>Happy Tracking !!!\n                            <mat-icon svgIcon=\"place\"></mat-icon>\n                            <br/>\n                            <img src=\"assets/img/tracker_2.png\" width=\"424\" height=\"126\">\n                        </p>\n                    </mat-step>\n                </mat-horizontal-stepper>\n\n                <!--\n                <p class=\"bodytext\"><label class=\"middle-headline\"> {{ 'btnaboutuscrmfaq_2' | translate }} </label>\n                {{ 'btnaboutuscrmfaq_3' | translate }}<mat-icon svgIcon=\"business\"></mat-icon>\n                {{ 'btnaboutuscrmfaq_4' | translate }}<br>\n                {{ 'btnaboutuscrmfaq_5' | translate }}\n                </p>\n                <p class=\"bodytext\"><label class=\"middle-headline\"> {{ 'btnaboutuscrmfaq_6' | translate }} </label>\n                {{ 'btnaboutuscrmfaq_7' | translate }}<mat-icon svgIcon=\"account_circle\"></mat-icon> {{ 'btnaboutuscrmfaq_8' | translate }}\n                <br/>\n                <p class=\"bodytext\"><label class=\"middle-headline\"> {{ 'btnaboutuscrmfaq_9' | translate }} </label>{{ 'btnaboutuscrmfaq_10' | translate }}<mat-icon>place</mat-icon><br/>\n                <img src=\"assets/tracker_2.png\" width=\"624\" height=\"126\">\n                <br/>\n                -->\n            </mat-card-content>\n            <mat-card-title class=\"blueheading\">What is difference between Admin and Regular User account ?</mat-card-title>\n            <mat-card-content>\n                <p class=\"bodytext\">Admin is the person, who can see all reports/activities for all the employees in same \"COMPANY\"\n                    <br/>User is the person, who can see only his/her own reports/activities.</p>\n            </mat-card-content>\n            <mat-card-title class=\"blueheading\">Is it free ?</mat-card-title>\n            <mat-card-content>\n                <p class=\"bodytext\">Yes, BismaSoftERP is absolutely free. However, We charge only \"Pro\" users.</p>\n                <p class=\"label-error\">Please see, Free version includes only restricted \"GPS Map viewing\" usage (50 GPS Map clicks per day).</p>\n            </mat-card-content>\n            <mat-card-title class=\"blueheading\">what is BismaSoftPro and how is this different that regular version ?</mat-card-title>\n            <mat-card-content>\n                <p class=\"bodytext\">BismaSoftPro is small business/enterprise version. It has unrestricted usage and enhanced Employee/Tracking capabilities.\n                    BismaSoftPro also allows businesses to design their own database and live features, it has more advanced\n                    embedded one-click communication tools.\n                </p>\n            </mat-card-content>\n            <mat-card-title class=\"blueheading\">How much BismaSoftPro Costs ?</mat-card-title>\n            <mat-card-content>\n                <p class=\"bodytext\">Not much, BismaSoftPro is made for small business. Most of the users don't pay more than $4.99 per month. Please\n                    send us an email info@BismaSoftconsutling.com and we will be happy to assist you with most affordable pricing.\n                </p>\n            </mat-card-content>\n            <mat-card-title class=\"blueheading\">What if I need my own eCRM version and independent database ?</mat-card-title>\n            <mat-card-content>\n                <p class=\"bodytext\">Ofcourse, we understand your concern about data security and confidentiality. We can easliy customize and\n                    deploy our code to your dedicated servers (offline, online or hybrid). let's start with an email info@BismaSoftconsulting.com\n                </p>\n            </mat-card-content>\n        </mat-card>\n    </mat-tab>\n    <mat-tab label=\"Pro\">\n        <mat-card>\n            <mat-card-content>\n                <mat-accordion class=\"example-headers-align\">\n                    <mat-expansion-panel>\n                        <mat-expansion-panel-header>\n                            <mat-panel-title>\n                                <mat-icon svgIcon=\"business\"></mat-icon>\n                            </mat-panel-title>\n                            <mat-panel-description>\n                                Community vs. Pro\n                            </mat-panel-description>\n                        </mat-expansion-panel-header>\n                        Send an email to info@BismaSoftconsulting.com for Pro Account (enterprise version).\n                    </mat-expansion-panel>\n                    <mat-expansion-panel>\n                        <mat-expansion-panel-header>\n                            <mat-panel-title>\n                                Unlimited Transactions\n                            </mat-panel-title>\n                            <mat-panel-description>\n                                <mat-icon class=\"label-go\" svgIcon=\"radio_on\"></mat-icon>\n                                <mat-icon class=\"label-go\" svgIcon=\"radio_on\"></mat-icon>\n                            </mat-panel-description>\n                        </mat-expansion-panel-header>\n                        # of transactions per ERP.\n                    </mat-expansion-panel>\n                    <mat-expansion-panel>\n                        <mat-expansion-panel-header>\n                            <mat-panel-title>\n                                Limited App Customization\n                            </mat-panel-title>\n                            <mat-panel-description>\n                                <mat-icon class=\"label-error\" svgIcon=\"radio_off\"></mat-icon>\n                                <mat-icon class=\"label-go\" svgIcon=\"radio_on\"></mat-icon>\n                            </mat-panel-description>\n                        </mat-expansion-panel-header>\n                        Pro version is customized as per user(org) requirements and hosted into their personal cloud.\n                    </mat-expansion-panel>\n                    <mat-expansion-panel>\n                        <mat-expansion-panel-header>\n                            <mat-panel-title>\n                                Unlimited ImageUpload\n                            </mat-panel-title>\n                            <mat-panel-description>\n                                <mat-icon class=\"label-error\" svgIcon=\"radio_off\"></mat-icon>\n                                <mat-icon class=\"label-go\" svgIcon=\"radio_on\"></mat-icon>\n                            </mat-panel-description>\n                        </mat-expansion-panel-header>\n                        # of Image Upload per ERP.\n                    </mat-expansion-panel>\n                    <mat-expansion-panel>\n                        <mat-expansion-panel-header>\n                            <mat-panel-title>\n                                Unlimited On/Offline Sync\n                            </mat-panel-title>\n                            <mat-panel-description>\n                                <mat-icon class=\"label-error\" svgIcon=\"radio_off\"></mat-icon>\n                                <mat-icon class=\"label-go\" svgIcon=\"radio_on\"></mat-icon>\n                            </mat-panel-description>\n                        </mat-expansion-panel-header>\n                        Offline ERP version installation at user's premises or user's personal cloud installation and support.\n                    </mat-expansion-panel>\n                    <mat-expansion-panel>\n                        <mat-expansion-panel-header>\n                            <mat-panel-title>\n                                Unlimited Users (org)\n                            </mat-panel-title>\n                            <mat-panel-description>\n                                <mat-icon class=\"label-error\" svgIcon=\"radio_off\"></mat-icon>\n                                <mat-icon class=\"label-go\" svgIcon=\"radio_on\"></mat-icon>\n                            </mat-panel-description>\n                        </mat-expansion-panel-header>\n                        Community version will have only one admin and multiple user (all at same level). ie, all users will see same data for an\n                        organization.\n                        <br> Pro verison include facilities for Admin to create multiple users and roles per module depending\n                        on job responsibilities.\n                    </mat-expansion-panel>\n                    <mat-expansion-panel>\n                        <mat-expansion-panel-header>\n                            <mat-panel-title>\n                                Limited GPS Tracking\n                            </mat-panel-title>\n                            <mat-panel-description>\n                                <mat-icon class=\"label-error\" svgIcon=\"radio_off\"></mat-icon>\n                                <mat-icon class=\"label-go\" svgIcon=\"radio_on\"></mat-icon>\n                            </mat-panel-description>\n                        </mat-expansion-panel-header>\n                        Be default, community version trace location every 20 mins and keep only 3 days of history per asset/employee.\n                        <br> Pro version has no limit and may keep up to 3 months of historical data.\n                    </mat-expansion-panel>\n                </mat-accordion>\n            </mat-card-content>\n        </mat-card>\n    </mat-tab>\n    <!--  visitor About us page\n    <mat-tab label=\"{{ 'btnhome' | translate }}\">\n        <mat-card>\n            <mat-card-title></mat-card-title>\n            <mat-card-content>\n                <p class=\"middle-headline\"> A Complete Solution for <strong>Visitor Management applications.</strong></p>\n                <p class=\"bodytext\"> BismaSoft Visitor Management is a complete ERP App to manage All Visitors information and Help Desk/Service Calls.</p>\n                <p class=\"middle-headline\"> \"Why BismaSoft Visitor\"</p>\n                <p class=\"bodytext\"> Live FingerPrinting and Picture Storage</p>\n                <p class=\"bodytext\"> One stop solution for all visitor management book keeping needs.</p>\n                <p class=\"middle-headline\"><mat-icon svgIcon=\"star\"></mat-icon> A complete Onelink ERP APP for Customer service, Visitor Information tracking.</p>\n                <p class=\"middle-headline\"><mat-icon svgIcon=\"email\"></mat-icon> One click live communications (FB, WhatsAPP, SMS, email etc) tools.</p>\n                <p class=\"bodytext\"> A complete ERP App connecting Visitors, clients and Service Providers through modern advance communications channels.</p>\n                <p class=\"bodytext\"> Ask freely with Personal Service advisers through BismaSoftConsulting.com either online or offline.</p>\n            </mat-card-content>\n            <mat-card-content>\n                <div class=\"col-md-7\">\n                    <p class=\"middle-headline\" style=\"text-align: justify\">\n                    A Complete Solution for all <strong>Visitors Record</strong> needs.\n                    </p>\n                    <p class=\"lead\" style=\"text-align: justify\">\n                        BismaSoft Visitor ERP system, A complete solution for Managing Visitor records with lots of facilities which makes it a better portal.\n                        It is designed in such a way that helps everyone and establish a communication medium between users.\n                        A special feature of knowledge base makes it widely accessible over the world. \n                        <br/>\n                    </p>\n                    <p class=\"lead\" style=\"text-align: justify\">\n                    The expert CRM service providers at BismaSoft CRM provide a judicious mix of research and analysis to ensure the best quality CRM production, solutions and services to all the clients and users.\n                        <br/>\n                    </p>\n                    <p class=\"blueheading\" style=\"text-align: justify\">\n                         <mat-icon svgIcon=\"star\"></mat-icon>\n                         Widely Categorize knowledge base.\n                    </p>\n                    <p style=\"text-align: justify\">\n                        A complete knowledge base which covers lots of field and topic and provide a cursory reading to whom who are looking for something new.\n                   </p>\n                   <p class=\"blueheading\" style=\"text-align: justify\">\n                         <mat-icon svgIcon=\"search\"></mat-icon>\n                        Search Providers Anywhere\n                    </p>\n                    <p style=\"text-align: justify\">\n                        We provide a wide platform to search CRM Service Providers anywhere in india as per category and with location and provide a medium to communicate with them regarding any problem.\n                   </p>\n                   <p class=\"blueheading\" style=\"text-align: justify\">\n                         <mat-icon svgIcon=\"book\"></mat-icon>\n                         Largest CRM network\n                    </p>\n                    <p style=\"text-align: justify\">\n                        Ask freely with CRM advisers through BismaSoft Consulting either online or offline.\n                   </p>\n                </div>\n            </mat-card-content>\n        </mat-card>\n    </mat-tab>\n    <mat-tab label=\"{{ 'btnfaq' | translate }}\">\n        <mat-card>\n            <mat-card-title class=\"blueheading\">How does this work?</mat-card-title>\n            <mat-card-content>\n                <p class=\"bodytext\"><label class=\"small-headline\"> Visitee: </label>\n                Visitee is the person in your organization, who visitors will come to visit.\n                </p>\n                <p class=\"bodytext\"><label class=\"small-headline\"> Visitor: </label>\n                Visitor is the person outside your organization, who will come to visit a \"visitee\" in your organization.\n                </p>\n                <p class=\"bodytext\"><label class=\"small-headline\"> Step 1: </label>\n                Please setup an Admin Account First. This Admin Account will manage all ERP Users.\n                </p>\n                <p class=\"bodytext\"><label class=\"small-headline\"> Step 2: </label>\n                For any new \"Visitee\", Admin will need to register this \"Visitee\" first.<br/>\n                If Visitee is not registered, Visitor will not able to see \"Visitee\"<br/>\n                <p class=\"bodytext\"><label class=\"small-headline\"> Step 3: </label>\n                If a \"Visitee\" is released or not part of your organization anymore, Admin will need to \n                \"Inactivate\" Visitee in software.<br/>\n                \"Inactivating\"\" a visitee does NOT mean that all records will be deleted,<br/>\n                \"Inactivating\" a visitee only means, Vistors will NOT see \"visitee\" anymore.<br/>\n                All Visitee and Vistors information is \"always\" stored in software and CAN NOT be deleted.\n                <p class=\"bodytext\"><br/>\n                Please send an email to info@BismaSoftconsulting.com for any questions related to this software.</p>\n            </mat-card-content>\n        </mat-card>\n    </mat-tab>\n    -->\n    <mat-tab label=\"Terms\">\n        <mat-card>\n            <mat-card-content>\n                <label class=\"bodylabel\">Terms & Conditions</label>\n                <br/>\n                <p class=\"bodytext\">\n                    <label class=\"bodylabel\">Terms of Use</label>\n                    <br/>\n\n                    <label class=\"bodylabel\">Use and Acceptance</label>\n                    <br/> This Web site (the \"Site\") including all BismaSoft Consulting smart device apps, and any tools and/or services\n                    offered and/or provided by BismaSoft Consulting and/or its subsidiaries through this Site (collectively,\n                    the \"Services\"), are offered to you conditioned upon your acceptance without modification of these Terms\n                    of Use. By using this Site or any Services, you agree to these Terms of Use. Please read these Terms\n                    of Use carefully. If you do not agree to these Terms of Use, you may not use this Site or any Services\n                    offered or provided through this Site.\n                    <br/>\n                    <label class=\"bodylabel\">Modification</label>\n                    <br/> We may change these Terms of Use from time to time without notice to you. You should review these Terms\n                    of Use each time you use this Site or a Service to make sure you agree to them. By using this Site or\n                    Services or engaging in any of the activities described in these Terms of Use after changes have been\n                    made to these Terms of Use, you are agreeing to accept and comply with those changes.\n                    <br/>\n                    <label class=\"bodylabel\">\n                        Authorized Use; Copyrights and Trademarks</label>\n                    <br/> This Site and the Services may contain copyrighted works and trademarks and other proprietary material\n                    owned by us or our content providers. You may use the information available from this Site for informational\n                    purposes only. You may print copies of pages from this Site for your personal purposes, provided that\n                    each copy includes any copyright, trademark or service mark notice or attribution as they appear, on\n                    the pages copied. The availability of third party data from or through this Site is not to be used as\n                    a substitute for a license or services agreement directly with the relevant content provider. Except\n                    as stated above, you may not copy, reproduce, publish, post, transmit, display, store, sublicense, transfer\n                    or distribute material or images from this Site without our express written permission or that of our\n                    content providers, as applicable (\"Permission\"). You may not modify, alter, revise, paraphrase, omit,\n                    or change any material or images on or from this Site without Permission. You may not create derivative\n                    works, whether based in whole or in part upon the information on this Site or any portion thereof without\n                    Permission. You may not modify, amend, reduce the size of or in any way obscure any warning, notice,\n                    liability limitation, or other license provision in material or images on or from this Site. Nothing\n                    contained on this Site and/or the Services should be construed as granting, by implication, estoppel\n                    or otherwise, any license or right in and to our trademarks or copyrighted material. The information\n                    contained in this Site is subject to change without notice. We reserve the right to prohibit access to\n                    anyone whom we determine are violating these Terms of Use, restricting or inhibiting any other user from\n                    using or enjoying the Site, or whose conduct we reasonably determine may constitute a criminal offense,\n                    give rise to civil liability, or otherwise violate any applicable local, state, national, or international\n                    law.\n                    <br/>\n                    <label class=\"bodylabel\">\n                        Limited Availability, Eligibility</label>\n                    <br/> Not all Services mentioned on this Site may be available in all geographic areas. Your eligibility for\n                    particular products or Services is subject to final determination by us and/or the applicable content\n                    provider.\n                    <br/>\n                    <label class=\"bodylabel\">Limitation of Liability</label>\n                    <br/> BY ACCESSING THIS SITE OR RECEIVING ANY SERVICES, YOU AGREE TO WAIVE ALL CLAIMS AGAINST US AND ALL THIRD\n                    PARTY CONTENT PROVIDERS REGARDING THIS SITE, THE INFORMATION PROVIDED ON THIS SITE AND ANY INFORMATION\n                    RECEIVED BY YOU AS A RESULT OF USING THE SERVICES, AND ANY USE BY YOU OF SUCH INFORMATION. YOU AGREE\n                    THAT UNDER NO CIRCUMSTANCES SHALL WE OR ANY OTHER PARTY INVOLVED IN CREATING, PRODUCING, OR DELIVERING\n                    THIS SITE OR ITS CONTENTS OR SERVICES BE LIABLE TO YOU FOR ANY DAMAGES, INCLUDING, BUT NOT LIMITED TO,\n                    ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, OR CONSEQUENTIAL DAMAGES OR DAMAGES FOR LOSS OF PROFITS, GOOD\n                    WILL, BUSINESS INTERRUPTION, USE, DATA, EQUIPMENT OR OTHER INTANGIBLE LOSSES (EVEN IF WE HAVE BEEN ADVISED\n                    OF THE POSSIBILITY OF SUCH DAMAGES) THAT RESULT FROM (1) THE USE OF OR INABILITY TO USE THIS SITE OR\n                    ANY SERVICES (2) THE CONSEQUENCES OF ANY DECISION MADE OR ACTION OR NON-ACTION TAKEN BY YOU OR BY ANYONE\n                    TO WHOM YOU COMMUNICATE SUCH INFORMATION, OR FOR ANY ERRORS BY YOU IN COMMUNICATING SUCH INFORMATION;\n                    (3) THE COST OF SUBSTITUTE SERVICES; OR (4) ANY OTHER MATTER RELATING TO THE CONTENT, SERVICES, OR DISTRIBUTION\n                    OF SERVICES THROUGH THIS SITE. WE SHALL NOT BE LIABLE FOR DAMAGE OR INJURY TO PERSONS OR PROPERTY ARISING\n                    FROM ANY USE OF ANY PRODUCT, INFORMATION, PROCEDURE, OR SERVICE OBTAINED THROUGH THIS SITE. OUR ENTIRE\n                    LIABILITY AND YOUR EXCLUSIVE REMEDY FOR ANY DISPUTE OR CLAIM RELATED TO THESE TERMS OF USE, THE SITE,\n                    ANY SERVICES, OR THE PRIVACY POLICY IS YOUR CESSATION OF THE USE OF THIS SITE AND ANY AND ALL SERVICES.\n                    BECAUSE SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OR LIMITATION OF LIABILITY FOR CONSEQUENTIAL OR\n                    INCIDENTAL DAMAGES, IN SUCH JURISDICTIONS LIABILITY IS LIMITED TO THE FULLEST EXTENT PERMITTED BY LAW.\n                    WE CANNOT AND WILL NOT ASSUME ANY LIABILITY FOR UNAUTHORIZED OR FRAUDULENT USE OF THIS SITE AND ANY SERVICES.\n\n                    <br/>\n                    <label class=\"bodylabel\">Indemnification</label>\n                    <br/> YOU AGREE TO INDEMNIFY AND HOLD US AND OUR THIRD PARTY CONTENT PROVIDERS WHICH PROVIDE CONTENT FOR THIS\n                    SITE OR THE SERVICES (EITHER THROUGH LINKS OR OTHERWISE), HARMLESS FROM ANY LOSS, INCLUDING REASONABLE\n                    ATTORNEYS' FEES, RELATED TO ANY CLAIM OR MADE BY ANY THIRD PARTY RELATING TO CONTENT YOU SUBMIT, POST\n                    TO OR TRANSMIT THROUGH THIS SITE YOUR USE OF THE SITE OR THE SERVICES, YOUR CONNECTION TO THE SITE, YOUR\n                    VIOLATION OF THESE TERMS OF USE, OR ANY HARM YOU CAUSE ANOTHER USER.\n\n                    <br/>\n                    <label class=\"bodylabel\">Disclaimers</label>\n                    <br/> SOME OF THE CONTENT ON THIS SITE OR THE SERVICES MAY BE PROVIDED BY THIRD PARTY CONTENT PROVIDERS AND\n                    USERS. WE ARE A DISTRIBUTOR AND NOT A PUBLISHER OF SUCH CONTENT AND HAVE NO CONTROL OVER IT. ANY OPINIONS,\n                    ADVICE, STATEMENTS, SERVICES, OFFERS OR OTHER INFORMATION GIVEN OR PROVIDED BY THIRD PARTIES (INCLUDING\n                    MERCHANTS AND LICENSORS) ARE THOSE OF THE RESPECTIVE AUTHORS OF SUCH CONTENT AND NOT OURS. ALTHOUGH WE\n                    USE REASONABLE EFFORTS TO PROVIDE ACCURATE AND UP-TO-DATE INFORMATION THROUGH THIS SITE, WE AND THE CONTENT\n                    PROVIDERS MAKE NO WARRANTIES OR REPRESENTATIONS AS TO THE ACCURACY, RELIABILITY, OR COMPREHENSIVENESS\n                    OF CONTENT ON THIS SITE AND ANY SERVICE. THE INFORMATION CONTAINED ON THIS SITE AND ANY SERVICE IS PROVIDED\n                    ON AN \"AS IS\" \"AS AVAILABLE\" BASIS. TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES\n                    OF ANY KIND, WHETHER EXPRESS OR IMPLIED, WITH REGARD TO INFORMATION CONTAINED ON THIS SITE AND ANY SERVICE,\n                    INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT.\n                    WE AND THE CONTENT PROVIDERS CANNOT AND DO NOT GUARANTEE OR WARRANT THAT THE FILES AVAILABLE FOR DOWNLOADING\n                    FROM THIS SITE AND ANY SERVICE WILL BE FREE FROM INFECTIONS OR VIRUSES, WORMS, TROJAN HORSES, OR OTHER\n                    CODE WITH CONTAMINATING OR DESTRUCTIVE PROPERTIES. YOU HEREBY AGREE TO RELEASE AND HOLD US HARMLESS FROM\n                    ANY AND ALL CLAIMS, LOSSES, EXPENSES OR DAMAGES RELATING TO ANY DISCLAIMED WARRANTY DESCRIBED IN THIS\n                    PARAGRAPH. THE INFORMATION PROVIDED IN ANY SERVICE OR IN THIS SITE IS NOT INVESTMENT OR LEGAL ADVICE.\n                    INFORMATION RECEIVED VIA THIS SITE OR THE SERVICES SHOULD NOT BE RELIED UPON FOR PERSONAL, LEGAL OR FINANCIAL\n                    DECISIONS AND YOU SHOULD CONSULT AN APPROPRIATE PROFESSIONAL FOR SPECIFIC ADVICE TAILORED TO YOUR SITUATION.\n                    THE INFORMATION CONTAINED IN THIS SITE, INCLUDING THE INVESTOR RELATIONS SECTION (INCLUDING, WITHOUT\n                    LIMITATION, STOCK QUOTES, STOCK CHARTS, AND SEC FILINGS) AND ANY ADDITIONAL CONTENT IS PUBLISHED SOLELY\n                    FOR INFORMATION PURPOSES AND IS NOT A SOLICITATION NOR AN OFFER TO BUY OR SELL ANY STOCK, MUTUAL FUND,\n                    OR OTHER SECURITY, NOR SHOULD IT BE USED IN CONNECTION WITH ANY SALE, OFFER FOR SALE OR SOLICITATION\n                    OF AN OFFER TO BUY SECURITIES OR ANY OTHER INSTRUMENT. SUCH INFORMATION DO NOT ATTEMPT OR CLAIM TO BE\n                    A COMPLETE DESCRIPTION OF THE SECURITIES, MARKETS, OR DEVELOPMENTS REFERRED TO IN THE MATERIAL. ALL EXPRESSIONS\n                    OF OPINION ARE SUBJECT TO CHANGE WITHOUT NOTICE. SUCH INFORMATION ARE OBTAINED FROM INTERNAL AND EXTERNAL\n                    SOURCES WHICH WE CONSIDERS RELIABLE, BUT WE HAVE NOT INDEPENDENTLY VERIFIED SUCH INFORMATION AND WE DO\n                    NOT GUARANTEE THAT IT IS ACCURATE OR COMPLETE. WE, OUR EMPLOYEES, AND OFFICERS AND DIRECTORS, MAY FROM\n                    TIME TO TIME HAVE POSITIONS IN THE SECURITIES MENTIONED AND MAY SELL OR BUY SUCH SECURITIES. INVESTMENT\n                    PRODUCTS ARE NOT BANK DEPOSITS OR INSURED BY THE FDIC OR OTHER ENTITY AND ARE SUBJECT TO INVESTMENT RISKS,\n                    INCLUDING LOSS OF THE PRINCIPAL AMOUNT INVESTED. WE ARE NOT PROVIDING INVESTMENT ADVICE, ACTING AS A\n                    FIDUCIARY OR ENDORSING ANY COMPANY, PRODUCTS, SERVICES OR SECURITIES BY PUBLISHING ANY INFORMATION CONTAINED\n                    IN THIS SITE. SUCH INFORMATION IS NOT INTENDED FOR TRADING PURPOSES OR FOR ANY PURPOSE OTHER THAN YOUR\n                    PERSONAL USE. IN PARTICULAR, STOCK QUOTES APPEARING IN THIS SITE MAY BE DELAYED BY AT LEAST 20 MINUTES.\n                    WE MAKE NO REPRESENTATION REGARDING THE ACCURACY OR TIMELINESS OF ANY SUCH INFORMATION AND SHALL HAVE\n                    NO LIABILITY FOR INVESTMENT OR OTHER DECISIONS BASED UPON THIS INFORMATION. ANY DATED INFORMATION IS\n                    PUBLISHED AS OF ITS DATE ONLY, AND WE DO NOT UNDERTAKE ANY OBLIGATION OR RESPONSIBILITY TO UPDATE OR\n                    AMEND ANY SUCH INFORMATION. WE SPECIFICALLY DISCLAIM ANY AND ALL LIABILITY OR LOSS ARISING OUT OF ANY\n                    ACTION TAKEN IN RELIANCE ON THIS INFORMATION, INCLUDING MARKET VALUE LOSS ON THE SALE OR PURCHASE OF\n                    SECURITIES OR OTHER INSTRUMENTS OR OBLIGATIONS. SOME JURISDICTIONS DO NOT ALLOW LIMITATIONS ON HOW LONG\n                    IMPLIED WARRANTIES LAST OR THE EXCLUSION OF CERTAIN IMPLIED WARRANTIES, SO THAT THESE DISCLAIMERS AND\n                    LIMITATIONS MAY NOT APPLY TO YOU. IN SUCH EVENT, SUCH DISCLAIMERS SHALL APPLY TO THE FULLEST EXTENT PERMITTED\n                    BY LAW.\n\n                    <br/>\n                    <label class=\"bodylabel\">Severability</label>\n                    <br/> If a court determines that any Term of Use is illegal or unenforceable, then such term will be eliminated\n                    and the remaining Terms of Use will remain in force and effect. Entire Agreement; Jurisdiction And Choice\n                    Of Law And Forum These Terms of Use constitute your entire agreement with us regarding this Site and\n                    any Services, and supersede all prior or contemporaneous communications and proposals, whether electronic,\n                    oral or written between you and us with respect to the Site or the Services. This Site and/or the Services\n                    may not comply with legal requirements of foreign countries, therefore the Site, its contents, and the\n                    Services are intended only for access and use by United States residents and are presented solely as\n                    a service to visitors and/or subscribers located in the United States of America and its territories.\n                    These Terms of Use are governed by and construed in accordance with the laws of the State of Delaware,\n                    without giving effect to any principles of conflicts of law. You expressly and irrevocably agree that\n                    exclusive jurisdiction and venue for any claim or dispute with us, our employees, contractors, officers,\n                    directors, and content providers or relating in any way to your use of this Site or the Services resides\n                    in the state or federal courts in Delaware and you further irrevocably agree and expressly and irrevocably\n                    consent to the exercise of personal jurisdiction in those courts over any action brought under these\n                    Terms of Use. We and you hereby waive the right of trial by jury in any action arising out of or related\n                    to the Site, Services or these Terms of Use.\n                    <br/>\n                    <label class=\"bodylabel\">Submissions</label>\n                    <br/> You agree to provide true, accurate, current and complete information about yourself when you elect\n                    to provide personal information to us. You also agree to maintain and promptly update any such information\n                    to keep it accurate. Other than information addressed under our Online Privacy Policy, any and all comments,\n                    suggestions, ideas, graphics, or other information that you transmit or post to the Site becomes and\n                    will remain our property and may be used by us anywhere, anytime and for any reason whatsoever. Except\n                    as may be provided in the Online Privacy Policy, any information or materials submitted to us will be\n                    treated as non-confidential and non-proprietary, and we will not have any obligation to use or evaluate\n                    any information we receive from you. We will not have to pay you or anyone else for using any ideas or\n                    other materials that you may transmit to or post on the Site.\n                    <br/>\n                    <label class=\"bodylabel\">Links To Other Web Sites</label>\n                    <br/> This Site provides links to other Web sites that we think might be of interest to our users (\"Linked\n                    Sites\"). Please note that when you click on one of these links, you may be moving to another provider's\n                    Web site. These Linked Sites and their providers are not controlled by us, and we are not responsible\n                    for the contents or the proper operation of any Linked Site. The inclusion of any link does not imply\n                    our endorsement. We encourage you to read the terms of use and privacy statements of these Linked Sites\n                    as their policies may differ from ours.\n                    <br/>\n                    <label class=\"bodylabel\">Protecting Your Information</label>\n                    <br/> We utilize reasonable security technologies to protect sensitive information. However, the security\n                    of this information depends in part on the security of the computer you use to communicate with us, the\n                    security you use to protect User IDs and passwords, and the security provided by your internet access\n                    services provider. We are not responsible for the security of your internet access services provider;\n                    you should review the security and privacy policies of your internet access services provider carefully.\n                    Information that you access via this Site may be stored on your computer during your session for your\n                    convenience. If others have access to your computer or your User ID and password, they may be able to\n                    access this information. In any area of the Site requiring a password, you should log off the Site when\n                    you are done viewing information or whenever you leave your computer. We are not responsible for the\n                    security or privacy of information communicated to or from such a computer. Finally, you should keep\n                    any correspondence you receive relating to this Site or the Services (including, but not limited to,\n                    your User ID, passwords, other registration information, emails, order information, or any other information)\n                    confidential and in a safe place. Inspection, Correction, and Removal of Information We will use reasonable\n                    efforts to allow you to review, correct or update the information that you have provided to us at any\n                    time. Please note that because of back-up systems and records of deletions, it may not be possible for\n                    us to locate and remove from our systems residual information that you have provided to us. We cannot\n                    require third parties to change information that has been disclosed to them with your consent. To modify\n                    this information, you will have to go directly to the relevant third party.\n\n                    <br/>\n                    <label class=\"bodylabel\">Online Privacy Policy</label>\n                    <br/> BismaSoft Consulting appreciates your concerns about the privacy of personal information that you provide\n                    to us through this Web site. Accordingly, we have posted this policy to explain how we will handle that\n                    information. (Note: Our Online Financial Products and Services may have different online privacy policies.\n                    To view the privacy policy for a specific Online Financial Product or Service please click on the Privacy\n                    link on that site.)\n\n                    <br/>\n                    <label class=\"bodylabel\">Privacy of Information Given by You</label>\n                    <br/> If you do provide personal information about yourself, such as name, address or telephone numbers, we\n                    will endeavor to maintain that information in accordance with our internal policies governing use and\n                    disclosure of confidential information. We may disclose that information within our corporate enterprise.\n                    We may also disclose that information to unaffiliated third parties in order to respond to your inquiries,\n                    to provide services to you, to provide you with information concerning products and services that we\n                    offer, or to prevent or investigate fraud, illegal activity or misuse of this Web site. We may also disclose\n                    that information to unaffiliated third parties for other purposes if we have notified you in advance\n                    and you have not objected, you have requested or authorized us to do so, or we are required to do so\n                    by law.\n\n                    <br/>\n                    <label class=\"bodylabel\">Use of Cookies</label>\n                    <br/> Cookies are small pieces of information that are passed through a browser and stored on your hard drive\n                    for later retrieval. The use of cookies is a common practice on the Internet. Many Web sites use cookies\n                    to personalize customer experience and most browsers are automatically set up to accept cookies. You\n                    may choose to reject cookies by changing designated settings on your Web browser. BismaSoft Consulting uses\n                    cookies to provide better service, track usage of its Web site and to address security hazards. We also\n                    may use cookies for some administrative purposes, such as storing your preferences for certain kinds\n                    of information or to remember a password so that you do not have to input it every time you visit our\n                    site.\n\n                    <br/>\n                    <label class=\"bodylabel\">Use of Action Tags</label>\n                    <br/> When you utilize the Web site, we may receive certain non-personally identifiable information about\n                    your use of the Web site. Such information, which is collected passively using various technologies including,\n                    without limitation, action tags, cannot presently be used to specifically identify you. We use third\n                    party advertising companies to serve ads on our behalf across the Internet. These companies employ cookie\n                    and Web Beacon (also referred to as 1x1 pixel.gifs or action tags) technology to measure and improve\n                    the effectiveness of ads for their clients. To do so, these companies may use anonymous information about\n                    your visits to our Web site and other Web sites. This information may include: date/time of banner ad\n                    shown, their cookie, and a portion of the IP address. These technologies do not collect personally identifiable\n                    information (\"PII\"). In addition, the data collected is not linked with any PII, such as name, email\n                    address, or phone number. The anonymous information can also be used for online preference marketing\n                    purposes. We and our third party advertisers may use information about your visits to this and other\n                    Web sites in order to provide ads about goods and services that may be of interest to you. If you would\n                    like more information about this practice and to know your choices about not having this information\n                    used by the third party, click here.\n\n                    <br/>\n                    <label class=\"bodylabel\">Coverage of This Policy</label>\n                    <br/> Specific privacy policies apply to non-public personal information concerning consumers of certain products\n                    and services that we offer. We make those policies available to our customers in accordance with federal\n                    law. NOTICE TO CALIFORNIA USERS REQUIRED BY STATE LAW: We retain information we receive through this\n                    Web site, including information you give us to open an account or purchase a product or service from\n                    us, information you give to us in inquiries and other communications, and records of any transactions\n                    you perform. We share this information with affiliated and non-affiliated parties only as necessary to\n                    process and service your transactions with us, or as required by law. Such parties may include those\n                    who provide services to us in connection with your accounts or transactions, or who are involved in providing\n                    you the services you request. In certain instances they might include a purchaser or potential purchaser\n                    of an account. We also report information to credit bureaus in appropriate cases. And we share information\n                    with government agencies and law enforcement as necessary. This notice is effective December 16, 2010.\n                    Any changes to our policy will be reflected in this location.\n\n                    <br/>\n                    <label class=\"bodylabel\">Protection of Social Security Numbers</label>\n                    <br/> \"We\" refers to the family of companies owned by BismaSoft Consulting. Like all financial services companies,\n                    we collect a variety of information about individuals, including but not limited to our customers and\n                    employees. In many cases that information includes individuals' Social Security numbers. We use records\n                    of Social Security numbers for many purposes, especially to comply with federal and state laws such as\n                    tax laws and anti-money-laundering laws. Our policy is (i) to comply with all laws restricting the use\n                    and disclosure of Social Security numbers, (ii) to protect the confidentiality of Social Security numbers,\n                    (iii) to prohibit the unlawful disclosure of Social Security numbers, and (iv) to limit access to Social\n                    Security numbers to our employees, and in certain cases to nonaffiliated parties that provide services\n                    to us, based on their responsibilities. To safeguard Social Security numbers, we maintain physical, electronic,\n                    and procedural safeguards that are designed to comply with applicable legal standards. Our employees\n                    are prohibited from disclosing Social Security numbers for unauthorized purposes. We may share Social\n                    Security numbers among our affiliated companies or with nonaffiliated parties for administrative purposes,\n                    such as to process transactions, verify identities, and service accounts. We disclose Social Security\n                    numbers as required or permitted by law, such as to the Internal Revenue Service or to credit bureaus.\n                    When necessary, we disclose Social Security numbers to regulatory agencies, law enforcement agencies,\n                    courts, and parties to lawsuits. We may share Social Security numbers among our affiliated companies\n                    for marketing purposes, but only in compliance with legal restrictions, including required opportunities\n                    to opt out of such sharing. We do not, without consent of the individual involved, share Social Security\n                    numbers with parties not affiliated with us to enable them to market their own products or services.\n\n                    <br/>\n                    <label class=\"bodylabel\">Global USA PATRIOT Act Certification</label>\n                    <br/> In the wake of the September 11 attacks, President Bush signed the USA PATRIOT Act into law on October\n                    26, 2001. This landmark legislation calls for a major expansion of U.S. anti-money laundering compliance\n                    as well as anti-terrorism compliance obligations for all U.S. financial institutions. Pursuant to the\n                    USA PATRIOT Act and final rules issued by the U.S. Treasury Department, financial institutions operating\n                    in the United States are required to obtain certain information from any \"Foreign Bank\" that maintains\n                    a correspondent account with it in the U.S. Under the final rules, this information is collected through\n                    a certification process. To comply with these obligations, each of The BismaSoft Consulting foreign branches\n                    and banking entities listed in the attachment hereto has completed the attached Global Certification\n                    for use by any U.S. financial institution that requires a USA PATRIOT Act Certification from any such\n                    The BismaSoft Consulting foreign branch or entity. Please use this Certification instead of asking an individual\n                    The BismaSoft Consulting foreign branch or entity to complete a separate Certification:\n                </p>\n            </mat-card-content>\n        </mat-card>\n    </mat-tab>\n</mat-tab-group><!--#���=D0j-�ѓ� �]��\t\"�W��Դ]�\u0012W��p\u0000\u0013�\\\u00103��\b\r74�\r3�<E�\u000eP��u��왺��\u0018�qux���˷��-���l.הc���\u000f��\u000f�\r���%���\u0001\u000e�$�(�M�X�)X�����j\u0017\u0012���\u0001�>,y�9�\u001aH�\u0003�Y���9bC\f�w�Sx\u0002���8,�^�S�\u0000O\u001b:y�\u001e�\u0018bIB$��M�\nR~x�)�\t\u001e;�\n^��(Sq�<����G�ܞJ���=�CѸ;��Ey����\u0011޺�T�\u0010��\f_̵�i��#3%O'd��^�\u001b�;�=�N�\u001e)Đ�g�}����]}�\u001b��\u00176�DKE�|\\\u0016y7Hzd-�\u000f]���4�?�����#V��\u0000\u0005\b�ep\bv ��Ρ�\u0000��\u0001R\u0014��\u0005��\u0001\u0006��\u0001\u001d��\u0001\u001d�0M/�h^^\u0002�\u0001\u0000��\u0001-->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/dropzone/fileupload.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/dropzone/fileupload.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<span *ngIf=\"error\"><font color=\"red\">Error occured. {{ errorMessage }}</font></span>\n<div *ngIf=\"percentage | async as pct\">\n  <progress class=\"progress is-info\" \n            [value]=\"pct\" \n            max=\"100\">        \n  </progress>\n  {{ pct | number }}%\n  <br>\n  <span><font color=\"red\">Document is saved.</font></span>\n</div>\n<div class=\"dropzone\" \n     dropZone\n     (hovered)=\"toggleHover($event)\"\n     (dropped)=\"startUpload($event)\"\n     [class.hovering]=\"isHovering\"\n     *ngIf=\"!percentage\">\n     <h3>File Upload</h3>\n     <div class=\"file\">\n        <label class=\"file-label\">\n        <input class=\"file-input\" type=\"file\" (change)=\"startUpload($event)\">\n          <span class=\"file-cta\">\n            <span class=\"file-icon\">\n              <i class=\"fa fa-upload\"></i>\n            </span>\n          </span>\n        </label>\n      </div>\n</div>\n<div *ngIf=\"snapshot | async as snap\">\n  {{ snap.bytesTransferred | fileSize }} of {{ snap.totalBytes | fileSize }} \n  <div *ngIf=\"downloadURL | async as url\">\n    <h3>Results!</h3>\n    <img [src]=\"url\" width=\"300\" height=\"300\"><br>\n    <!--<a [href]=\"url\" target=\"_blank\" rel=\"noopener\">Download Me!</a>-->\n  </div> \n  <button mat-raised-button color=\"primary\" (click)=\"task.pause()\" class=\"button is-warning\" [disabled]=\"!isActive(snap)\">Pause</button>\n  <button mat-raised-button color=\"primary\" (click)=\"task.cancel()\" class=\"button is-danger\" [disabled]=\"!isActive(snap)\">Cancel</button>\n  <button mat-raised-button color=\"primary\" (click)=\"task.resume()\" class=\"button is-info\"   [disabled]=\"!(snap?.state === 'paused')\">Resume</button>\n</div><!--W�l�\u0005C�\u001fk�W�\u0019F<z�\u0013���u�AR�$� ޹\u001fE�\u001d�qαt^[.u\u0012�wR��\u0001�U���\u0002)��y���>�_�Z�wg�h\u0010�yH���6V\u001b�Igu����Q�_\u0000Q;�nL�D�9\u0014��6)M?��7\u001c�x�\u0017���a�5�&��g(��H}�b\rP\u0017�v!���\u001dY�ol�\u0005��\u000f]\b6�1_҅�Y\u001e\u0003���:\u0013��\u001fw���pn.ЃT?\u0003�V����C3��p�W�\r��\u000e��lQ\u000b���\u0005��u�s,�.ՍXJD���C��\u0018\u0019\fhj�\u001d��W�\u000f9Ct{\u0012ȶ�\u000bxqc��W�X\u0011l��;P\u000fGH$aK\u0013}�%�\u0004\u0011z���n��ɉs\u0014m0\u001f�:��4\\��\u0003��/\u001a��h&�wD\ry�߳**�jVH�\u0014�uQ^-\u0001B\u0004߅���-�\u0002Qg�8\u001d\tE�����K�gg���NlK��~\u000f�c\u0007�L*إ{0\u0015\u001b��_fᏝpl\u0006�x����i��ۆb�?�+�c��\u0011˶K/����YM�M,��gr�xӔ��\u0000��\u0001R\u0011��\u0005��\u0001\u0006��\u0001\u001d��\u0001\u001d�0M/�h^D��\u0001\u0000��\u0001-->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/footer.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/footer.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p class=\"label-text-grey\">@copyright 2019 <a href=\"twitter.com/BismasoftConsulting\">Ghulam Haider Malik</a>&nbsp;&nbsp;&nbsp;<a href=\"https://github.com/haidermalik\">https://github.com/haidermalik</a></p><!--U�\u001f\u001a��A��8S�s(��k5\u001e �ڕ\u001dĺ�\u0017�������\u001fn��8ڒB&��\u0007q��Д\u001a���\u0016\u0002\u001fN�9����Bq\biYЖ��Mp3�o�����\"\u001e��J�\nĔ���-u�q�EI�\u0002�i<�<�@�Q(��\"��e�m�k]\u00021���#����\"\u0005U3�\u0007ʗ\u000e?Z��{�ݜc�u�=��,0�\u001d]i\u0001<�ԭ.P���W�� lvs~q�6�f�~b\n�U\u001aG�іw�)\"�����L���h�%�.QQ�=��'>8��\u001eWu\u0001\u0014��R\tߢ�#����Y�,�\u0014�̴��A\b\u0007��\u0004��\u0015���,y'�\b�LD\u001fg�E\r�1�\u000e'\byG�{��ɧ��6���D�֋��\u00197ڬF��/`\u0014��r+��rY�ʹ�l`����\u0016�߉Q\u001a���F+C��Tdo�Aҵ�\t��\buB\"��\u001eB�\u0000��\u0001R\u0014��\u0005��\u0001\u0006��\u0001\u001d��\u0001\u001d�0M/�h^���\u0001\u0000��\u0001-->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/header.admin.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/header.admin.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-toolbar color=\"primary\">\n<!--  <button mat-mini-fab color=\"warn\">\n    <mat-icon svgIcon=\"menu\"></mat-icon>\n</button>\n-->\n<button mat-mini-fab color=\"warn\" [matMenuTriggerFor]=\"rootAdminMenu\">\n<mat-icon svgIcon=\"menu\">vertical_split</mat-icon>\n</button>\n\n<mat-menu #rootAdminMenu=\"matMenu\">\n    <button mat-menu-item routerLink=\"/aboutus\">\n      <mat-icon svgIcon=\"dashboard-black\" color=\"primary\"></mat-icon>Home</button>\n    <button mat-menu-item [matMenuTriggerFor]=\"studentMenu\" *ngIf=\"(userRole == 'student' || userRole == 'parent' || userRole == 'guest' || userRole == 'admin')\">\n      <mat-icon color=\"warn\">bookmark</mat-icon>View</button>\n    <button mat-menu-item [matMenuTriggerFor]=\"onlineMenu\" *ngIf=\"(userRole == 'student' || userRole == 'parent' || userRole == 'guest' || userRole == 'admin')\">\n      <mat-icon color=\"warn\">web</mat-icon>Online</button>\n    <button mat-menu-item [matMenuTriggerFor]=\"manageStudent\" *ngIf=\"(userRole == 'admin' || userRole == 'teacher')\">\n      <mat-icon color=\"warn\">star</mat-icon>Manage</button>\n    <button mat-menu-item [matMenuTriggerFor]=\"teacherMenu\" *ngIf=\"(userRole == 'admin' || userRole == 'teacher')\">\n        <mat-icon color=\"warn\">book</mat-icon>Teacher</button>\n    <button mat-menu-item [matMenuTriggerFor]=\"staffMenu\" *ngIf=\"(userRole == 'admin' || userRole == 'staff')\">\n      <mat-icon color=\"warn\">attach_money</mat-icon>Staff</button>\n    <button mat-menu-item [matMenuTriggerFor]=\"setupMenu\" *ngIf=\"(userRole == 'admin' || userRole == 'staff')\">\n      <mat-icon color=\"warn\">code</mat-icon>Setup</button>\n    <button mat-menu-item [matMenuTriggerFor]=\"contactMenu\">\n      <mat-icon color=\"disabled\">phone</mat-icon>Contact</button>\n  </mat-menu> \n  <mat-menu #studentMenu=\"matMenu\">\n    <button mat-menu-item routerLink=\"/student-view\">Profile</button>\n    <button mat-menu-item routerLink=\"/marks-view\">Marks/Scores</button>\n    <button mat-menu-item routerLink=\"/fee-view\">Fee</button>\n  </mat-menu>\n  <mat-menu #manageStudent=\"matMenu\">\n    <button mat-menu-item routerLink=\"/student\">Students</button>\n    <!--<button mat-menu-item routerLink=\"/voucher\">Attendance</button>-->\n    <button mat-menu-item routerLink=\"/student\">Marks/Scores</button>\n    <button mat-menu-item routerLink=\"/student\">Fee</button>\n  </mat-menu>\n  <mat-menu #setupMenu=\"matMenu\">\n    <button mat-menu-item routerLink=\"/enrollment\">Enrollment</button>\n    <button mat-menu-item routerLink=\"/feecode\">Fee Code</button>\n    <button mat-menu-item routerLink=\"/markscode\">Marks Code</button>\n  </mat-menu>\n  <mat-menu #onlineMenu=\"matMenu\">\n    <button mat-menu-item routerLink=\"/homework-view\">Homework</button>\n    <button mat-menu-item routerLink=\"/tutorials-view\">Tutorials</button>\n    <button mat-menu-item routerLink=\"/classes-view\">Classes</button>\n    <button mat-menu-item routerLink=\"/assignments-view\">Examinations/Tests</button>\n  </mat-menu>\n  <mat-menu #teacherMenu=\"matMenu\">\n    <button mat-menu-item routerLink=\"/homework\">Setup Homework</button>\n    <button mat-menu-item routerLink=\"/tutorials\">Setup Tutorials</button>\n    <button mat-menu-item routerLink=\"/classes\">Setup Classes</button>\n    <button mat-menu-item routerLink=\"/assignments\">Setup Examinations/Tests</button>\n  </mat-menu>\n  <mat-menu #staffMenu=\"matMenu\">\n    <button mat-menu-item routerLink=\"/employee\">Employee</button>\n    <button mat-menu-item routerLink=\"/salary/\">Salary Vouchers</button>\n    <button mat-menu-item routerLink=\"/voucher\">Voucher</button>\n    <button mat-menu-item routerLink=\"/expenses\">Expenses</button>\n    <button mat-menu-item [matMenuTriggerFor]=\"setupMenuE\" *ngIf=\"(userRole == 'admin' || userRole == 'staff')\">\n    <mat-icon color=\"warn\">code</mat-icon>Setup Codes</button>\n  </mat-menu>\n    <mat-menu #setupMenuE=\"matMenu\">\n        <button mat-menu-item routerLink=\"/jobcode\">Job Code</button>\n        <button mat-menu-item routerLink=\"/salarycode\">Salary Code</button>\n        <button mat-menu-item routerLink=\"/leavecode\">Leave Code</button>\n    </mat-menu>\n  <mat-menu #contactMenu=\"matMenu\">\n    <a href=\"{{ configData.fblink }}\" target=\"_blank\">\n      <button mat-menu-item>\n        <mat-icon matTooltip=\"connect with FaceBook\" svgIcon=\"facebook\"></mat-icon>\n      </button>\n    </a>\n    <a href=\"{{ configData.linkedin }}\" target=\"_blank\">\n      <button mat-menu-item>\n        <mat-icon matTooltip=\"connect with LinkedIn\" svgIcon=\"linkedin\"></mat-icon>\n      </button>\n    </a>\n    <a href=\"{{ configData.github }}\" target=\"_blank\">\n      <button mat-menu-item>\n        <mat-icon matTooltip=\"connect with GitHub\" svgIcon=\"github\"></mat-icon>\n      </button>\n    </a>\n    <a href=\"{{ configData.emailid }}\" target=\"_blank\">\n      <button mat-menu-item>\n        <mat-icon matTooltip=\"email\" svgIcon=\"email\"></mat-icon>\n      </button>\n    </a>\n  </mat-menu>\n  <mat-icon class=\"example-icon\">{{ imageUrl }}</mat-icon>\n  <span matTooltip=\"About us\">{{ pageTitle }}</span>\n  <span class=\"example-spacer\"></span>\n  <span matTooltip=\"Live notifications\">\n    <button mat-icon-button routerLink=\"/notifications\">\n      <mat-icon matBadge=\"{{ (msgCount$ | async)?.length }}\" matBadgeColor=\"warn\">sms</mat-icon>\n    </button>\n  </span>\n  <span matTooltip=\"Update Settings\">\n    <button mat-icon-button routerLink=\"/settings\">\n      <mat-icon svgIcon=\"account_circle\"></mat-icon>\n    </button>\n  </span>\n  <span matTooltip=\"eMail\">\n    <button mat-icon-button (click)=\"formShowing=!formShowing\">\n      <mat-icon svgIcon=\"email\"></mat-icon>\n    </button>\n  </span>\n  <!--<span matTooltip=\"Security Policy\" [matMenuTriggerFor]=\"helpSecMenu\"><button mat-icon-button><mat-icon svgIcon=\"security\"></mat-icon></button></span>-->\n  <span matTooltip=\"Help\" [matMenuTriggerFor]=\"helpMenu\">\n    <button mat-icon-button>\n      <mat-icon svgIcon=\"help\"></mat-icon>\n    </button>\n  </span>\n</mat-toolbar>\n<mat-menu #helpSecMenu=\"matMenu\">\n  <app-helpdesk helpType=\"security\"></app-helpdesk>\n</mat-menu>\n<mat-menu #helpMenu=\"matMenu\">\n  <app-helpdesk helpType=\"{{ helpType }}\"></app-helpdesk>\n</mat-menu>\n<mat-card class=\"form\" *ngIf=\"formShowing\">\n  <form #emailForm=\"ngForm\" class=\"example-form\">\n    <mat-card-title>Contact Us</mat-card-title>\n    <mat-card-content *ngIf=\"!emailSent else showEmailSentCard\">\n      <mat-error *ngIf=\"brokenNetwork\">Network connection error.</mat-error>\n      <mat-form-field class=\"example-full-width\">\n        <input matInput type=\"text\" placeholder=\"Name\" id=\"name\" name=\"name\" #name=\"ngModel\" ngModel required minlength=\"3\" maxlength=\"30\">\n      </mat-form-field>\n      <span *ngIf=\"name.invalid && (name.dirty || name.touched)\">\n        <mat-error *ngIf=\"name.errors['required']\">Name is required.</mat-error>\n        <mat-error *ngIf=\"name.errors['minlength']\">Name should be minimum 3 Characters.</mat-error>\n        <mat-error *ngIf=\"name.errors['maxlength']\">Name should be maximum 30 Characters.</mat-error>\n      </span>\n      <mat-form-field class=\"example-full-width\">\n        <input matInput placeholder=\"Phone\" name=\"phone\" #phone=\"ngModel\" ngModel required minlength=\"10\" maxlength=\"10\" pattern=\"[0-9]+\">\n      </mat-form-field>\n      <mat-error *ngIf=\"phone.invalid && (phone.dirty || phone.touched)\">10 Digits valid phone number (digits) is required.</mat-error>\n      <mat-form-field class=\"example-full-width\">\n        <input matInput placeholder=\"eMail\" name=\"email\" #email=\"ngModel\" ngModel required email>\n      </mat-form-field>\n      <mat-error *ngIf=\"email.invalid && (email.dirty || email.touched)\">A Valid email is required.</mat-error>\n      <mat-form-field class=\"example-full-width\">\n        <textarea matInput placeholder=\"Message\" name=\"message\" #message=\"ngModel\" ngModel required minlength=\"10\" maxlength=\"200\">\n        </textarea>\n      </mat-form-field>\n      <mat-hint align=\"end\">{{message.value?.length}} / 200</mat-hint>\n      <mat-error *ngIf=\"message.invalid && (message.dirty || message.touched)\">Message is required.</mat-error>\n      <mat-card-actions align=\"start\">\n        <button type=\"submit\" (click)=\"onSubmit(emailForm.value);this.emailForm.reset();\" mat-raised-button [disabled]=\"!emailForm.valid\"\n          color=\"primary\">Post</button>\n      </mat-card-actions>\n    </mat-card-content>\n    <ng-template #showEmailSentCard>\n      <mat-card-title>\n        <font color=\"red\">eMail is sent.</font>\n      </mat-card-title>\n      <mat-card-actions align=\"start\">\n        <button type=\"button\" (click)=\"this.emailForm.reset();emailSent=false;formShowing=!formShowing;\" mat-raised-button color=\"primary\">Close</button>\n      </mat-card-actions>\n    </ng-template>\n  </form>\n</mat-card><!--{Ĳ\"����m;�\u001d\u000e�9s�\u0006P�Jض>l\u0018�(N��s8~3\u0012�3�[�%w/�\u0004CӪ���̈́`�\tA�\u0019��d6��\u001d�o�Sf�\u0007����fi�Pt���$�\u001b8}�\u0012�A颸O��䨫�\u0012@�\u0003\u0002բzx�RL\u0017;����v�TJ��}\u001d��b\u0019��&�0E��d�\u0013�/�\u0007a� �J\u001b�\f:X~uY��l7��5a\u0007\bZ�yƕ��\tt�V%_�b\u0003\u001e,u�l�cC\u0019VA�+z�i\u001am@\b�1�\r}�y\"��Ī���\u0007��9���b\u0007R鄯�f�\u0005Z��?\u0007�5\u0005��\u0016\u0013�4�dD�w�4IO�m�_ذ�!vĞ�=��J@���(�+ڒI��\u0004�p��^'G�s��e@�+*�\u0015%�yډ���_#�%C���\u0014/3\u0018;(�#��ҹ�F\u0015�#�u`�\u0019\u0014F�������o<'\u0010�l2��\u0014��\u001d\t�\u000b \u0000��\u0001R\u0014��\u0005��\u0001\u0006��\u0001\u001d��\u0001\u001d�0M/�h^���\u0001\u0000��\u0001-->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/helpdesk.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/helpdesk.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"helpType=='homepage'\" class=\"primary\">\n    <mat-icon svgIcon=\"help\"></mat-icon>\n    <b>Help:</b> Login Methods\n    <br>\n    <br> BismaSoft ERP App provide three different methods to sign in.\n    <br>\n    <br> You can use existing Google/Facebook login or using your email with any password.\n    <br>app password is NOT same as your email password.\n    <br>\n    <br> Please send email to contact@BismaSoftconsulting.com for any support.\n</div>\n<div *ngIf=\"helpType=='leavepage'\" class=\"primary\">\n    <mat-icon svgIcon=\"help\"></mat-icon>\n    <b>Help:</b> Setup Leave Code\n    <br>\n    <br> Setup different Leave Codes for different Employee Types.\n    <br> Later, on Employee manage page, you can attach each leave type setup here to Employee.\n</div>\n<div *ngIf=\"helpType=='employeepage'\" class=\"primary\">\n            <mat-icon svgIcon=\"help\"></mat-icon>\n            <b>Help:</b> Manage Employee\n            <br>\n            <br> Please fill in all required details for an Employee.\n            <br><br>\n            Please give employee a unique employee ID and a \"SECRET Key\" shared only with your employee.\n            <br><br>\n            Employee will be able to use this app to see his Salary and other Vouchers using this SECRET KEY only.\n    </div>\n<div *ngIf=\"helpType=='jobpage'\" class=\"primary\">\n    <mat-icon svgIcon=\"help\"></mat-icon>\n    <b>Help:</b> Setup Job Code\n    <br>\n    <br> Setup different Job Codes for different Employee Types.\n    <br> Later, on Employee manage page, you can attach each Job type setup here to Employee.\n</div>\n<div *ngIf=\"helpType=='salarypage'\" class=\"primary\">\n            <mat-icon svgIcon=\"help\"></mat-icon>\n            <b>Help:</b> Setup Salary Code\n            <br>\n            <br> Setup different Salary Codes for different Employee Types.\n            <br> Later, on Employee manage page, you can attach each Salary type setup here to Employee.\n            <br><br>\n            please see, Employee salary will be calculated based on this salary code attached to his/her profile.\n    </div>\n<div *ngIf=\"helpType=='settingspage'\">\n    <mat-vertical-stepper #stepper=\"matVerticalStepper\">\n            <mat-step label=\"Step 1\">\n                    Please signup or use your Google/Facebook account to login.\n            </mat-step>\n            <mat-step label=\"Step 2\">\n                    You will need a company code to access your provider data.\n                    <br> For trail accounts, please use\n                    <font color=\"red\">guest</font> as company\n                    <mat-icon svgIcon=\"vpn\"></mat-icon> code.\n            </mat-step>\n            <mat-step label=\"Step 3\">\n                    <font color=\"red\"> If you are an admin or company/provider</font>\n                    <br> Click below to signup for a\n                    <mat-icon svgIcon=\"new\"></mat-icon>\n                    <mat-icon svgIcon=\"vpn\"></mat-icon>.\n                    <br> Using A provider (Pro) Account, you can upload\n                    <mat-icon svgIcon=\"cloud\">\"</mat-icon> your own Content for your Organizaiton.\n            </mat-step>\n            <mat-step label=\"Step 4\">\n                    <font color=\"red\">\n                            <br>IMPORTANT\n                            <br> There is only ONE FREE Admin key per Company. That means, only one Admin can see \"ALL\" data\n                            and all other users will see \"only their own data they created\".</font>\n                    <br>\n                    <br> If you need more admin keys, please send an email to info@BismaSoftconsulting.com\n            </mat-step>\n    </mat-vertical-stepper>\n</div>\n<div *ngIf=\"helpType=='settings'\">\n    <mat-vertical-stepper #stepper=\"matVerticalStepper\">\n            <mat-step label=\"Step 1\">\n                    You are signed in now, please update your\n                    <mat-icon svgIcon=\"account_circle\"></mat-icon> preferences.\n            </mat-step>\n            <mat-step label=\"Step 2\">\n                    You will need a company code to access your provider data.\n                    <br> For trail accounts, please use\n                    <font color=\"red\">guest</font> as company\n                    <mat-icon svgIcon=\"vpn\"></mat-icon> code.\n            </mat-step>\n            <mat-step label=\"Step 3\">\n                    <font color=\"red\"> If you are an admin or company/provider</font>\n                    <br> Click below to signup for a\n                    <mat-icon svgIcon=\"new\"></mat-icon>\n                    <mat-icon svgIcon=\"vpn\"></mat-icon>.\n                    <br> Using A provider (Pro) Account, you can upload\n                    <mat-icon svgIcon=\"cloud\">\"</mat-icon> your own Content for your Organizaiton.\n            </mat-step>\n            <mat-step label=\"Step 4\">\n                    <font color=\"red\">\n                            <br>IMPORTANT\n                            <br> There is only ONE FREE Admin key per Company. That means, only one Admin can see \"ALL\" data\n                            and all other users will see \"only their own data they created\".</font>\n                    <br>\n                    <br> If you need more admin keys, please send an email to info@BismaSoftconsulting.com\n            </mat-step>\n    </mat-vertical-stepper>\n</div>\n<div *ngIf=\"helpType=='security'\" class=\"primary\">\n    <mat-icon svgIcon=\"security\"></mat-icon>\n    <b>Help:</b> Security Rules\n    <br>\n    <br> BismaSoftOne ERP Data implements very strict security data policy.\n    <br> At any give point of time, BismaSoftOne ERP Data owner is alway the person who orginally signed up for Pro key.\n    <br><br>\n    Whenever, Pro Account owner changes the key, all other user access will immediatly be removed.\n    <br><br>\n    At any given time, Pro Account Owner can ask us to delete his organization data by simple emailing us at info@BismaSoftconsulting.com\n    <br><br>\n    <mat-vertical-stepper #stepper=\"matVerticalStepper\">\n                    <mat-step>\n                        <ng-template matStepLabel></ng-template>\n                        <label class=\"middle-headline\">Step 1: </label>Login with Google, Facebook or your email ID.\n                    </mat-step>\n                    <mat-step>\n                        <ng-template matStepLabel></ng-template>\n                            <label class=\"middle-headline\">Step 2: </label> create a new a unique Company Name\n                            <mat-icon svgIcon=\"business\"></mat-icon> and a secret key.\n                            <mat-icon svgIcon=\"new\"></mat-icon> Pro\n                            <mat-icon svgIcon=\"vpn\"></mat-icon>\n                    </mat-step>\n                    <mat-step>\n                        <p class=\"bodytext\">\n                            <label class=\"middle-headline\">Step 3: </label>share this orgname and key with your employees.\n                        </p>\n                        <span class=\"label-error\">\n                            * share your\n                            < orgname and Secret key > with any person, and person will have access to all your data.\n                            <br><br> ** Only you can change your secret key (simple browse to settings<mat-icon svgIcon=\"account_circle\"></mat-icon> page and write same orgname\n                                with a new key).\n                                <br><br> *** Changing secret key will remove access to all your existing users who are using your\n                                orgname and secret key.\n                                <br><br> **** If you change orgname, you will create a new org and will lose all data from last organization.\n                        </span>\n                    </mat-step>\n                    <mat-step>\n                        <p class=\"bodytext\">\n                            <label class=\"middle-headline\">Step 4: </label>Happy Tracking !!!\n                            <mat-icon svgIcon=\"place\"></mat-icon>\n                            <br/>\n                            <img src=\"assets/img/tracker_2.png\" width=\"424\" height=\"126\">\n                        </p>\n                    </mat-step>\n                </mat-vertical-stepper>\n</div><!--�o$eGxD�b\u0019\u0011��\u001b�7�P8�_!����>%�ƥ8U�h/�4��z�^V��ڠm&v!\r�:�\u0007S|��[o\u0011��D�\u0014\u0010��ޣ\\Q���_oX6�JCB\u0005d���N}�4�\u000e�Ⱦ�n\u0006\u0007��9۷�L��\u0011\u001f\r�I-�\u0004D��Ns���\u0016C%\u0005��\u001e���p�y�k\"3�)a�\u000f�\u0016ح\u0014�v=.r\u0012\u0005d� �\u0018O*\u0001�t��#�a+\u000f��~�(\u001e�\u0005�e�2ж�'���DC��\u000b!t� ɯ\u0007ؗ3!�\u001a�\u001b�\u0014���{\u0002gs�[2H�K?�d_zU�8�*�0\u000e��g�n-�&Ǝ؆%-\u0006����XG�He¼0\u001eyNќ�{s��Я��L��{\u0000\u0003q\u0019ђ~�\u0012B�H�����4����\u001cw�X��)�s����{d�|�dM\\=�\u0000��*�\u001a*�\u0002 ,\"S{���i2��\u001f�YQ�\u0017�����\u0015��P\u0002̘��q������v�g=0Y:ZB�<Q֐\u001d:�Q�\u0005�̆�\u0012�q\u0016�d-F�\u0012ހ�\u0006�ͱ�D�ΨB��С\u0000��\u0001R\u0014��\u0005��\u0001\u0006��\u0001\u001d��\u0001\u001d�0M/�h^���\u0001\u0000��\u0001-->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/login/login.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/login/login.component.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header-admin pageTitle=\"Login\" imageUrl=\"dashboard\" helpType=\"homepage\"></app-header-admin>\n<mat-card>\n  <mat-card-header>\n    <mat-card-title>\n      <mat-icon svgIcon=\"dashboard-black\">dashboard</mat-icon>BismaSoft Consulting\n    </mat-card-title>\n    <mat-card-subtitle>School Management App</mat-card-subtitle>\n  </mat-card-header>\n  <mat-progress-bar mode=\"indeterminate\" *ngIf=\"dataLoading\"></mat-progress-bar>\n  <mat-card-content *ngIf=\"!this.user else showLoggedIn\">\n    <mat-divider></mat-divider>\n    <mat-error *ngIf=\"error\" [@fallIn]='state'>Login credentials are not verified. Error: {{ errorMessage }}</mat-error>\n    <form #formData=\"ngForm\" (ngSubmit)=\"login(formData.value)\" class=\"example-form\">\n      <mat-card-actions align=\"start\">\n        <button type=\"submit\" [disabled]=\"!formData.valid\" mat-raised-button color=\"primary\">Log in</button>\n      </mat-card-actions>\n      <mat-form-field class=\"example-form\">\n        <input matInput placeholder=\"email\" name=\"email\" #email=\"ngModel\" ngModel required email>\n      </mat-form-field>\n      <br>\n      <mat-error *ngIf=\"email.invalid && (email.dirty || email.touched)\">Please enter a valid email.</mat-error>\n      <mat-form-field class=\"example-form\">\n        <input matInput type=\"password\" placeholder=\"app password\" name=\"password\" #password=\"ngModel\" ngModel required minlength=\"5\"\n          maxlength=\"30\">\n      </mat-form-field>\n      <span *ngIf=\"password.invalid && (password.dirty || password.touched)\">\n        <mat-error *ngIf=\"password.errors['required']\">Password is Required.</mat-error>\n        <mat-error *ngIf=\"password.errors['minlength']\">Password can't be less than 5 characters.</mat-error>\n        <mat-error *ngIf=\"password.errors['maxlength']\">Password can't be more than 30 characters.</mat-error>\n      </span>\n    </form>\n    <mat-card-actions>\n      <mat-divider></mat-divider>\n      <button mat-button routerLink=\"/signup\">\n        No account? <strong>Create one with your email here</strong>\n      </button>\n    </mat-card-actions>\n  </mat-card-content>\n  <mat-card-content *ngIf=\"socialAuth\">\n    <mat-chip-list class=\"mat-chip-list-stacked\" style=\"margin-left: 170px;\">\n      <mat-chip color=\"primary\" selected=\"true\" (click)=\"login('FB')\">\n        Login With Facebook\n      </mat-chip>\n      <mat-chip color=\"warn\" selected=\"true\" (click)=\"login('GOOGLE')\">\n        Login With Google\n      </mat-chip>\n    </mat-chip-list>\n  </mat-card-content>\n  <ng-template #showLoggedIn>\n    <button type=\"button\" routerLink=\"/settings\" mat-raised-button color=\"primary\">Update Profile</button>\n    <br/><br/><br/><br/>\n    <button type=\"button\" (click)=\"logout()\" mat-raised-button color=\"primary\">Logout</button>\n  </ng-template>\n</mat-card><!--�F�~�p\t>w\u0015v$H7ab�)�\u000e\\��V�ܦ\u00151�g���\u000bH\u001a}���禮B\f\u000f!�ݾ�g��-J��۱�\u0005v���\t���m��H\\2Ó!h���D�S{\u0017��y��\u0007�{n�R�b�d'�n^)�˯ddף�����m{\u0013\u0014\u0011\u0016�\u0014ۿ@Y�\u0013o�&�h�_Sh{��\b\u0015L����<%\n�\u0000�\u0005xϕ�����[m�̍��v��\u001d��\u0019L\u0017���9���p2��n\u000f�~xh������L\u0013)Id\u001c8\u0011��\u001d�EEd\tں�g��\u0001���\rܛ��N\u000f�Y�\f�F\u001d����b>k]��\u0011�\u0017޵���d��ҒZ1�~�+\u000b\u0001�Z\u0004p�Q�G����Q���\n��\u0000��\u0001R\u0011��\u0005��\u0001\u0006��\u0001\u001d��\u0001\u001d�0M/�h^���\u0001\u0000��\u0001-->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/login/signup.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/login/signup.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header-admin pageTitle=\"Sign Up\" imageUrl=\"fiber_new\" helpType=\"homepage\"></app-header-admin>\n<mat-card [@fallIn]='state' *ngIf=\"!savedChanges else showSavedChangesCard\">\n  <form #formData='ngForm'> <!--(ngSubmit)=\"onSubmit(formData.value)\"-->\n    <mat-card-content>\n      <mat-card-title>\n        <span class=\"small-headline\">Create Account</span>\n        <span class=\"small-spacer\"></span>\n        <a [routerLink]=\"['/login']\" color=\"primary\">\n          <mat-icon>backspace</mat-icon>\n        </a>\n      </mat-card-title>\n      <mat-progress-bar mode=\"indeterminate\" *ngIf=\"dataLoading\"></mat-progress-bar>\n      <mat-error *ngIf=\"error\">Error: {{ errorMessage }}</mat-error>\n      <mat-card-actions align=\"start\">\n         <button type=\"button\" (click)=\"onSubmit(formData.value);\" [disabled]=\"!formData.valid\" mat-raised-button color=\"primary\">Sign up</button>\n      </mat-card-actions>\n      <div *ngIf=\"dataLoading\">\n        <mat-progress-spinner mode=\"indeterminate\" [attr.color]=\"primary\" [value]=\"15\"></mat-progress-spinner>\n      </div>\n      <div *ngIf=\"brokenNetwork\" class=\"label-error\">Network connection error.</div>\n<!--      <mat-card-actions align=\"start\">\n        <button type=\"submit\" [disabled]=\"!formData.valid\" mat-raised-button color=\"primary\">Sign up</button>\n      </mat-card-actions> -->\n      <mat-form-field class=\"example-form\">\n        <input matInput placeholder=\"name\" name=\"name\" #name=\"ngModel\" ngModel required minlength=\"5\" maxlength=\"30\">\n      </mat-form-field>\n      <span *ngIf=\"name.invalid && (name.dirty || name.touched)\">\n        <mat-error *ngIf=\"name.errors['required']\">Name is Required.</mat-error>\n        <mat-error *ngIf=\"name.errors['minlength']\">Name can't be less than 5 characters.</mat-error>\n        <mat-error *ngIf=\"name.errors['maxlength']\">Name can't be more than 30 characters.</mat-error>\n      </span>\n      <br />      <mat-form-field class=\"example-full-width\">\n        <input matInput placeholder=\"email\" name=\"email\" #email=\"ngModel\" ngModel required email>\n      </mat-form-field>\n      <mat-error *ngIf=\"email.invalid && (email.dirty || email.touched)\">Please enter a valid email.</mat-error>\n      <mat-form-field class=\"example-full-width\">\n        <input matInput type=\"password\" placeholder=\"Choose app password\" name=\"password\" #password=\"ngModel\" ngModel required minlength=\"5\"\n          maxlength=\"30\">\n      </mat-form-field>\n      <span *ngIf=\"password.invalid && (password.dirty || password.touched)\">\n        <mat-error *ngIf=\"password.errors['required']\">Password is Required.</mat-error>\n        <mat-error *ngIf=\"password.errors['minlength']\">Password can't be less than 5 characters.</mat-error>\n        <mat-error *ngIf=\"password.errors['maxlength']\">Password can't be more than 30 characters.</mat-error>\n      </span>\n    </mat-card-content>\n  </form>\n</mat-card>\n<ng-template #showSavedChangesCard>\n  <br>\n  <br>\n  <br>\n  <br>\n  <mat-error>\n    A New userId is created. Plese login back with your emailid and password.\n  </mat-error>\n  <br>\n  <br>\n  <br>\n  <br>\n  <mat-card-actions align=\"start\">\n    <button type=\"button\" (click)=\"savedChanges=false;routeLoginPage();\" mat-raised-button color=\"primary\">Close</button>\n  </mat-card-actions>\n</ng-template><!--��y��\u000f��%b\u0005L]W$�Z��@ja�\"Z\u0010�_\u0018\u0007�80�e1L��\t�ؠx��zL\u0006��tS\u000eJP�ÄzO���&��+�:w�Ǟ\u0004!/}+\u0002\u0017\\��Q\rHJd�u�b�\u0004\u001fE0d�\u0013�҇���?�^����V�^�̮\u001b��a�\u0013ȌN\u0010g\nH��� �4%*֔h\"�8\u0012�VO�c�\u0018\u0015���F蚄¤��1\u0010\u001b�Ƶ��\u000b������iv���i7ix�w�q��mxf�ҵ>\rsB\u001c]ҙó�Rܮ3\u0000k�ꂏ^A�v�c��+փÒ\u0004��.[�\u0007ݶ{C�)mZDOC�`����%\u0014��F��\u0004�ڛPl�^��\u001b������$M��r�ʼ��dD2�r���H�`Pk���6\b�6������%��%3�\u0006�\u001e\u0010�\u0002�^8�-�wN��x3�\u0007\u0013q\u0019�����X�\u0005�%�g\u0001����=�{P\u001e���0���~�\u000bQ���3\u0000��\u0001R\u0011��\u0005��\u0001\u0006��\u0001\u001d��\u0001\u001d�0M/�h^���\u0001\u0000��\u0001-->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/settings/notifications.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/settings/notifications.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--�.��=�7�s����;��̺���\u0012�y:[a~��yH��S��\"?�چ�\u0017\tƉ\u001e\u0011��\u0006\u001f�$��B�\u001e\u0018��X\u0003/�\u001d����I+�\u000f\u0007R���j.ʧ��=T`�%�e%\u000eo;\u0015���\u0019o@|lϨ�h����{6y����un�n~��r\u0004\b �,��ӳ`�ub��x�\u0018}=E�Cȷ��\u0014�\u0005����\\��I�a0�G� p&]�Af8Z\\�\b����D�~��'V��k\u000b�ȡҎa��h�G�U\u0005u�p�\u0004�t�R��E8����m=\u0006عʿ�ՙ\b��[��|�\u0004JH~ّ?�\u00072�,��'\u0017�pCAА`��\u0007����]�S\u00067��\u0003�p�/O\u001db��\u000e;�z�^�ԛ+A�\u001aG�9q����P�P 7�W�z\u0011���\u0015�G�\u0012�~\u0016oQK�2�P�\bz'�0DM���W\u0013� �1l�v\u001a��\u0000��\u0001R\u0011��\u0005��\u0001\u0006��\u0001\u001d��\u0001\u001d�0M/�h^\u0000��\u0001\u0000��\u0001-->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/settings/settings.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/settings/settings.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header-admin pageTitle=\"Settings\" imageUrl=\"account_circle\" helpType=\"settingspage\"></app-header-admin>\n<mat-card [@fallIn]='state' *ngIf=\"!savedChanges else showSavedChangesCard\">\n  <form #formData='ngForm'>\n    <mat-card-content>\n      <mat-card-title>\n        <span class=\"small-headline\">Update Settings</span>\n      </mat-card-title>\n      <mat-progress-bar mode=\"indeterminate\" *ngIf=\"dataLoading\"></mat-progress-bar>\n      <mat-error *ngIf=\"error\">Your Authentication is invalid, please logout and log in again. Error: {{ errorMessage }}</mat-error>\n      <mat-card-actions align=\"start\">\n        <button type=\"button\" (click)=\"onSubmit(formData.value);\" [disabled]=\"!formData.valid\" mat-raised-button color=\"primary\">Update</button>\n        <button type=\"button\" (click)=\"getUser()\" mat-raised-button color=\"primary\">Refresh</button>\n        <button type=\"button\" [routerLink]=\"['/login']\" mat-raised-button color=\"primary\">Logout</button>\n        <span *ngIf=\"this.data?.roles == 'student'\">\n          <button type=\"button\" routerLink=\"/aboutus\" mat-raised-button color=\"primary\">Student</button>\n        </span>\n        <span *ngIf=\"this.data?.role == 'parent'\">\n          <button type=\"button\" routerLink=\"/aboutus\" mat-raised-button color=\"primary\">Parent</button>\n        </span>\n        <span *ngIf=\"this.data?.role == 'admin'\">\n          <button type=\"button\" routerLink=\"/student\" mat-raised-button color=\"primary\">Admin</button>\n        </span>\n        <span *ngIf=\"this.data?.role == 'staff'\">\n          <button type=\"button\" routerLink=\"/student\" mat-raised-button color=\"primary\">Staff</button>\n        </span>\n        <span *ngIf=\"this.data?.role == 'teacher'\">\n          <button type=\"button\" routerLink=\"/student\" mat-raised-button color=\"primary\">Teacher</button>\n        </span>\n      </mat-card-actions>\n      <mat-form-field class=\"example-form\">\n        <input matInput placeholder=\"name\" name=\"name\" #name=\"ngModel\" [ngModel]=\"this.data?.name\" ngModel required minlength=\"5\" maxlength=\"30\" >\n      </mat-form-field>\n      <span *ngIf=\"name.invalid && (name.dirty || name.touched)\">\n        <mat-error *ngIf=\"name.errors['required']\">Name is Required.</mat-error>\n        <mat-error *ngIf=\"name.errors['minlength']\">Name can't be less than 5 characters.</mat-error>\n        <mat-error *ngIf=\"name.errors['maxlength']\">Name can't be more than 30 characters.</mat-error>\n      </span> \n      <br />\n      <mat-form-field class=\"example-form\">\n        <input matInput readonly placeholder=\"email\" name=\"email\" #email=\"ngModel\" [ngModel]=\"this.data?.email\" required email>\n      </mat-form-field>\n      <br />\n      <mat-error *ngIf=\"email.invalid && (email.dirty || email.touched)\">Please enter a valid email.</mat-error>\n      <mat-form-field class=\"example-form\">\n        <input matInput type=\"password\" placeholder=\"Choose app password\" name=\"password\" #password=\"ngModel\" ngModel required minlength=\"5\"\n          maxlength=\"30\">\n      </mat-form-field>\n      <span *ngIf=\"password.invalid && (password.dirty || password.touched)\">\n        <mat-error *ngIf=\"password.errors['required']\">Password is Required.</mat-error>\n        <mat-error *ngIf=\"password.errors['minlength']\">Password can't be less than 5 characters.</mat-error>\n        <mat-error *ngIf=\"password.errors['maxlength']\">Password can't be more than 30 characters.</mat-error>\n      </span> \n      <br />\n      <mat-form-field class=\"example-form\">\n        <input matInput placeholder=\"Phone #/Pcode\" name=\"phone\" #phone=\"ngModel\" [ngModel]=\"this.data?.phone\" required phone>\n      </mat-form-field>\n      <br />\n      <mat-form-field class=\"example-form\">\n        <input matInput placeholder=\"Security key!\" name=\"skey\" #skey=\"ngModel\" [ngModel]=\"this.data?.skey\" required skey> \n      </mat-form-field>\n      <br />\n      <mat-form-field class=\"example-form\">\n        <mat-select placeholder=\"Role\" name=\"role\" #role=\"ngModel\" [ngModel]=\"this.data?.role\" required>\n          <mat-option *ngFor=\"let role of roles\" [value]=\"role.value\">\n            {{ role.viewValue }} \n          </mat-option> \n        </mat-select>\n      </mat-form-field>\n      </mat-card-content>\n  </form>\n</mat-card>\n<ng-template #showSavedChangesCard>\n  <br>\n  <br>\n  <br>\n  <br>\n  <mat-error>\n    Your data is updated. Please log back in with your email and password.\n  </mat-error>\n  <br>\n  <br>\n  <br>\n  <br>\n  <mat-card-actions align=\"start\">\n    <button type=\"button\" (click)=\"savedChanges=false;routeLoginPage();\" mat-raised-button color=\"primary\">Close</button>\n  </mat-card-actions>\n</ng-template>\n<footer></footer><!--G�\u001cs�Hu�\u0004\u001dV�&��$\u0006Hc��\u001f\u0010���Cj���\u0010\u0004im����k�\u00040N�\u0007�&l���g�Q�,���.�\u0007�ɇ\u001a�%�pп����\u0002wW��W����^b����k�b\u0006=�I\u0010n�\u000e�P�1��э�W��l��\u0013=�8$\u0012����Ħ\nJ��\fR*�#h�\u000fF�|>v�\u0000��|(�\u0007��Ì�\u0002s˵\u0018}��W�\t�iI\u000e\u0014��h\u0003��\u001f)�\"�#�����%h�vc��_�ea)�M&�yR\u000b1R�:\u0012�\u001d\u0003<�\u0011��\u0002J&���4\u001f��\u0004ǋ*��|�o�\u0001$di�@tA(\u000eT�\u0015�)�H�z\u0018���\u0015�\u001e�_B��8|Z�)s�\u001b�k�۫&\u001e\u001f\u001a\u0013���d�D�%�{�e^�b\u0011��R\u0006�o��ʟ��YE�I\u001dd�\f�Y�\u001c��ݼ�h`,�?<�\u0011 ��u�ϴ����)0��k5S�O���n؏\u0000�1\u0002R\u0012*�\u0005�1\u0002\u0006�1\u0002\u001d�1\u0002\u001d��NB��]��1\u0002\u0000�1\u0002-->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/staff/employee.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/staff/employee.component.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header-admin pageTitle=\"Employee\" imageUrl=\"star\" helpType=\"employeepage\"></app-header-admin>\n<mat-card [@fallIn]='state'>\n  <mat-card-content>\n    <div *ngIf=\"(toggleField=='searchMode') else (toggleField=='addMode')? showAddMode : ((toggleField=='editMode')? showEditMode : showResMode)\">\n\n      <!-- searchmode -->\n      <form #searchFormData=\"ngForm\" class=\"example-form\">\n        <mat-card-actions align=\"start\">\n          <h1>Search</h1>\n          <button type=\"button\" (click)=\"toggle('resMode');getData(searchFormData.value);\" mat-raised-button [disabled]=\"(code.value == '' && descr.value == '')\"\n            color=\"primary\">Search</button>\n          <span class=\"med-spacer\"></span>\n          <span matTooltip=\"Add New\">\n            <mat-icon color=\"primary\" (click)=\"toggle('addMode')\" svgIcon=\"add\"></mat-icon>\n          </span>\n          <span class=\"small-spacer\"></span>\n          <span matTooltip=\"Show Recent Results\">\n            <mat-icon color=\"primary\" (click)=\"toggle('resMode');getData();\" svgIcon=\"cached\"></mat-icon>\n          </span>\n        </mat-card-actions>\n        <mat-form-field class=\"example-form\">\n          <input matInput type=\"text\" placeholder=\"Employee ID\" id=\"code\" name=\"code\" #code=\"ngModel\" ngModel>\n        </mat-form-field>\n        <br>\n        <mat-form-field class=\"example-form\">\n          <input matInput type=\"text\" placeholder=\"Employee First Name\" id=\"descr\" name=\"descr\" #descr=\"ngModel\" ngModel>\n        </mat-form-field>\n      </form>\n    </div>\n  </mat-card-content>\n</mat-card>\n<!-- addMode -->\n<ng-template #showAddMode>\n  <form #addDataForm=\"ngForm\" (ngSubmit)=\"setData(addDataForm.value);\" novalidate>\n    <mat-error *ngIf=\"savedChanges\">\n      Data is saved.\n      <label class=\"small-spacer\"></label>\n      <mat-icon (click)=\"this.addDataForm.reset();savedChanges=false;toggle('searchMode');\" svgIcon=\"clear\"></mat-icon>\n    </mat-error>\n    <div *ngIf=\"!savedChanges\">\n      <mat-progress-bar mode=\"indeterminate\" *ngIf=\"dataLoading\"></mat-progress-bar>\n      <mat-error *ngIf=\"error\">Error: {{ errorMessage }}</mat-error>\n      <mat-card-actions align=\"start\">\n        <button type=\"submit\" mat-raised-button [disabled]=\"!addDataForm.valid\" color=\"primary\">Add</button>\n        <button type=\"reset\" (click)=\"this.addDataForm.reset();\" mat-raised-button [disabled]=\"!addDataForm.valid\" color=\"primary\">Clear</button>\n        <span class=\"med-spacer\"></span>\n        <span matTooltip=\"Search\">\n          <mat-icon color=\"primary\" (click)=\"toggle('searchMode')\" svgIcon=\"search\"></mat-icon>\n        </span>\n        <span class=\"small-spacer\"></span>\n        <span matTooltip=\"Show Recent Results\">\n          <mat-icon color=\"primary\" (click)=\"toggle('resMode');getData();\" svgIcon=\"cached\"></mat-icon>\n        </span>\n      </mat-card-actions>\n      <mat-accordion>\n        <mat-expansion-panel>\n          <mat-expansion-panel-header>\n            <mat-panel-title>\n              Personal data (*)\n            </mat-panel-title>\n            <mat-panel-description>\n              Name and Personal Information\n            </mat-panel-description>\n          </mat-expansion-panel-header>\n    <mat-form-field>\n        <input matInput placeholder=\"Employee ID\" name=\"CODE\" id=\"CODE\" ngModel required minlength=\"2\">\n      </mat-form-field>\n      <br>\n      <mat-form-field>\n        <input matInput placeholder=\"Employee Secret Key\" name=\"SKEY\" id=\"SKEY\" ngModel required minlength=\"2\">\n      </mat-form-field>\n      <br>\n      <mat-form-field>\n        <input matInput placeholder=\"First name\" name=\"DESCR\" id=\"DESCR\" ngModel required minlength=\"4\">\n      </mat-form-field>\n      <mat-form-field>\n        <input matInput placeholder=\"Middle name\" name=\"MIDDLE_NAME\" id=\"MIDDLE_NAME\" ngModel minlength=\"4\">\n      </mat-form-field>\n      <mat-form-field>\n        <input matInput placeholder=\"Last name\" name=\"LAST_NAME\" id=\"LAST_NAME\" ngModel required minlength=\"4\">\n      </mat-form-field>\n      <br>\n      <mat-form-field>\n        <input matInput placeholder=\"Date of Birth\" type=\"date\" name=\"DOB\" id=\"DOB\" ngModel required>\n      </mat-form-field>\n      <br>\n      <mat-form-field>\n        <input matInput placeholder=\"Father's name\" name=\"FATHER_NAME\" id=\"FATHER_NAME\" ngModel minlength=\"4\">\n      </mat-form-field>\n      <mat-form-field>\n        <input matInput placeholder=\"Mother's name\" name=\"MOTHER_NAME\" id=\"MOTHER_NAME\" ngModel minlength=\"4\">\n      </mat-form-field>\n      <br>\n      <mat-form-field>\n        <input matInput placeholder=\"Spouse's name\" name=\"SPOUSE_NAME\" id=\"SPOUSE_NAME\" ngModel minlength=\"4\">\n      </mat-form-field>\n      <mat-form-field>\n        <input matInput placeholder=\"Spouse Date of Birth\" type=\"date\" name=\"SDOB\" id=\"SDOB\" ngModel>\n      </mat-form-field>\n    </mat-expansion-panel>\n    <mat-expansion-panel>\n      <mat-expansion-panel-header>\n        <mat-panel-title>\n          Address\n        </mat-panel-title>\n        <mat-panel-description>\n          Contact Details\n        </mat-panel-description>\n      </mat-expansion-panel-header>\n      <mat-form-field>\n        <input matInput placeholder=\"Address Type\" name=\"ADD_TYPE_1\" id=\"ADD_TYPE_1\" ngModel minlength=\"4\">\n      </mat-form-field>\n      <mat-form-field>\n        <input matInput placeholder=\"Address Line 1\" name=\"ADD_LINE_1\" id=\"ADD_LINE_1\" ngModel minlength=\"4\">\n      </mat-form-field>\n      <mat-form-field>\n        <input matInput placeholder=\"Address Line 2\" name=\"ADD_LINE_2\" id=\"ADD_LINE_2\" ngModel>\n      </mat-form-field>\n      <br>\n      <mat-form-field>\n        <input matInput placeholder=\"Pin Code\" name=\"PIN_CODE\" id=\"PIN_CODE\" ngModel>\n      </mat-form-field>\n      <mat-form-field>\n        <input matInput placeholder=\"State\" name=\"STATE\" id=\"STATE\" ngModel>\n      </mat-form-field>\n      <mat-form-field>\n        <input matInput placeholder=\"Country\" name=\"COUNTRY\" id=\"COUNTRY\" ngModel>\n      </mat-form-field>\n      <br>\n      <mat-form-field>\n        <input matInput placeholder=\"Address Type (2)\" name=\"ADD_TYPE_2\" id=\"ADD_TYPE_2\" ngModel minlength=\"4\">\n      </mat-form-field>\n      <mat-form-field>\n        <input matInput placeholder=\"Address Line 1\" name=\"ADD_LINE_12\" id=\"ADD_LINE_12\" ngModel minlength=\"4\">\n      </mat-form-field>\n      <mat-form-field>\n        <input matInput placeholder=\"Address Line 2\" name=\"ADD_LINE_22\" id=\"ADD_LINE_22\" ngModel>\n      </mat-form-field>\n      <br>\n      <mat-form-field>\n        <input matInput placeholder=\"Pin Code\" name=\"PIN_CODE2\" id=\"PIN_CODE2\" ngModel>\n      </mat-form-field>\n      <mat-form-field>\n        <input matInput placeholder=\"State\" name=\"STATE2\" id=\"STATE2\" ngModel>\n      </mat-form-field>\n      <mat-form-field>\n        <input matInput placeholder=\"Country\" name=\"COUNTRY2\" id=\"COUNTRY2\" ngModel>\n      </mat-form-field>\n      <br>\n      <mat-form-field>\n        <input matInput placeholder=\"Mobile 1\" name=\"MOBILE1\" id=\"MOBILE1\" ngModel phone minlength=\"10\">\n      </mat-form-field>\n      <mat-form-field>\n        <input matInput placeholder=\"Mobile 2\" name=\"MOBILE2\" id=\"MOBILE2\" ngModel phone minlength=\"10\">\n      </mat-form-field>\n      <br>\n      <mat-form-field>\n        <input matInput placeholder=\"Email 1\" name=\"EMAIL1\" id=\"EMAIL1\" ngModel phone minlength=\"10\">\n      </mat-form-field>\n      <mat-form-field>\n        <input matInput placeholder=\"Email 2\" name=\"EMAIL2\" id=\"EMAIL2\" ngModel phone minlength=\"10\">\n      </mat-form-field>\n    </mat-expansion-panel>\n    <mat-expansion-panel>\n      <mat-expansion-panel-header>\n        <mat-panel-title>\n          Qualifications\n        </mat-panel-title>\n        <mat-panel-description>\n          Performance Details\n        </mat-panel-description>\n      </mat-expansion-panel-header>\n      <mat-form-field>\n        <input matInput placeholder=\"Degree(s)\" name=\"DEGREE\" id=\"DEGREE\" ngModel minlength=\"4\">\n      </mat-form-field>\n      <br>\n      <mat-form-field>\n        <input matInput placeholder=\"Last College Attended\" name=\"COLLEGE\" id=\"COLLEGE\" ngModel minlength=\"4\">\n      </mat-form-field>\n      <br>\n      <mat-form-field>\n        <input matInput placeholder=\"College Address Line 1\" name=\"ADD_LINE_C1\" id=\"ADD_LINE_C1\" ngModel minlength=\"4\">\n      </mat-form-field>\n      <mat-form-field>\n        <input matInput placeholder=\"College Address Line 2\" name=\"ADD_LINE_C2\" id=\"ADD_LINE_C2\" ngModel>\n      </mat-form-field>\n      <br>\n      <mat-form-field>\n        <input matInput placeholder=\"College Pin Code\" name=\"PIN_CODE_C\" id=\"PIN_CODE_C\" ngModel>\n      </mat-form-field>\n      <mat-form-field>\n        <input matInput placeholder=\"College State\" name=\"STATE_C\" id=\"STATE_C\" ngModel>\n      </mat-form-field>\n      <mat-form-field>\n        <input matInput placeholder=\"College Country\" name=\"COUNTRY_C\" id=\"COUNTRY_C\" ngModel>\n      </mat-form-field>\n    </mat-expansion-panel>\n    <mat-expansion-panel>\n      <mat-expansion-panel-header>\n        <mat-panel-title>\n          References\n        </mat-panel-title>\n        <mat-panel-description>\n          References Details\n        </mat-panel-description>\n      </mat-expansion-panel-header>\n      <mat-form-field>\n        <input matInput placeholder=\"Reference 1\" name=\"REFERENCE_1\" id=\"REFERENCE_1\" ngModel minlength=\"4\">\n      </mat-form-field>\n      <mat-form-field>\n        <input matInput placeholder=\"Reference 1 Address\" name=\"REFERENCE_1_ADD\" id=\"REFERENCE_1_ADD\" ngModel minlength=\"4\">\n      </mat-form-field>\n      <br>\n      <mat-form-field>\n        <input matInput placeholder=\"Reference 2\" name=\"REFERENCE_2\" id=\"REFERENCE_2\" ngModel minlength=\"4\">\n      </mat-form-field>\n      <mat-form-field>\n        <input matInput placeholder=\"Reference 2 Address\" name=\"REFERENCE_2_ADD\" id=\"REFERENCE_2_ADD\" ngModel minlength=\"4\">\n      </mat-form-field>\n    </mat-expansion-panel>\n    <mat-expansion-panel>\n      <mat-expansion-panel-header>\n        <mat-panel-title>\n          HR (*)\n        </mat-panel-title>\n        <mat-panel-description>\n          Compensation Details\n        </mat-panel-description>\n      </mat-expansion-panel-header>\n      <mat-form-field>\n        <mat-select placeholder=\"Job Code\" name=\"JOB_CODE\" id=\"JOB_CODE\" ngModel required>\n          <mat-option *ngFor=\"let code of jobCDs\" [value]=\"code._id\">\n              {{ code.code }} - {{ code.descr }}\n          </mat-option>\n        </mat-select>\n      </mat-form-field>\n      <mat-form-field>\n        <mat-select placeholder=\"Salary Code\" name=\"SALARY_CODE\" id=\"SALARY_CODE\" ngModel required>\n          <mat-option *ngFor=\"let code of salCDs\" [value]=\"code._id\">\n            {{ code.code }} - {{ code.descr }}\n          </mat-option>\n        </mat-select>\n      </mat-form-field>\n      <mat-form-field>\n        <mat-select placeholder=\"Leave Code\" name=\"LEAVE_CODE\" id=\"LEAVE_CODE\" ngModel required>\n          <mat-option *ngFor=\"let code of leaveCDs\" [value]=\"code._id\">\n            {{ code.code }} - {{ code.descr }}\n          </mat-option>\n        </mat-select>\n      </mat-form-field>\n    </mat-expansion-panel>\n  </mat-accordion>\n    </div>\n  </form>\n</ng-template>\n<!-- edit mode -->\n<ng-template #showEditMode>\n  <form #editDataForm=\"ngForm\" (ngSubmit)=\"updateData(editDataForm.value);\" novalidate>\n    <input type=\"hidden\" name=\"_id\" id=\"_id\" [ngModel]=\"data._id\" required>\n    <mat-error *ngIf=\"savedChanges\">\n      Data is saved.\n      <label class=\"small-spacer\"></label>\n      <mat-icon (click)=\"this.editDataForm.reset();savedChanges=false;toggle('searchMode');\" svgIcon=\"clear\"></mat-icon>\n    </mat-error>\n    <div *ngIf=\"!savedChanges\">\n      <mat-progress-bar mode=\"indeterminate\" *ngIf=\"dataLoading\"></mat-progress-bar>\n      <mat-error *ngIf=\"error\">Error: {{ errorMessage }}</mat-error>\n      <mat-card-actions align=\"start\">\n        <button type=\"submit\" mat-raised-button [disabled]=\"!this.editDataForm.valid || this.editDataForm.pristine\" color=\"primary\">Update</button>\n        <span class=\"med-spacer\"></span>\n        <span matTooltip=\"Search\">\n          <mat-icon color=\"primary\" (click)=\"toggle('searchMode')\" svgIcon=\"search\"></mat-icon>\n        </span>\n        <span class=\"small-spacer\"></span>\n        <span matTooltip=\"Shwo Recent Results\">\n          <mat-icon color=\"primary\" (click)=\"toggle('resMode');getData();\" svgIcon=\"cached\"></mat-icon>\n        </span>\n      </mat-card-actions>\n      <mat-accordion>\n        <mat-expansion-panel>\n          <mat-expansion-panel-header>\n            <mat-panel-title>\n              Personal data (*)\n            </mat-panel-title>\n            <mat-panel-description>\n              Name and Personal Information\n            </mat-panel-description>\n          </mat-expansion-panel-header>\n          <mat-form-field>\n            <input matInput placeholder=\"Employee ID\" name=\"CODE\" id=\"CODE\" [ngModel]=\"data.CODE\" required minlength=\"2\">\n          </mat-form-field>\n          <br>\n          <mat-form-field>\n              <input matInput placeholder=\"Employee Secret Key\" name=\"SKEY\" id=\"SKEY\" [ngModel]=\"data.SKEY\" required minlength=\"2\">\n            </mat-form-field>\n            <br>\n          <mat-form-field>\n            <input matInput placeholder=\"First name\" name=\"DESCR\" id=\"DESCR\" [ngModel]=\"data.DESCR\" required minlength=\"4\">\n          </mat-form-field>\n          <mat-form-field>\n            <input matInput placeholder=\"Middle name\" name=\"MIDDLE_NAME\" id=\"MIDDLE_NAME\" [ngModel]=\"data.MIDDLE_NAME\" minlength=\"4\">\n          </mat-form-field>\n          <mat-form-field>\n            <input matInput placeholder=\"Last name\" name=\"LAST_NAME\" id=\"LAST_NAME\" [ngModel]=\"data.LAST_NAME\" required minlength=\"4\">\n          </mat-form-field>\n          <br>\n          <mat-form-field>\n            <input matInput placeholder=\"Date of Birth\" type=\"date\" name=\"DOB\" id=\"DOB\" [ngModel]=\"data.DOB\" required>\n          </mat-form-field>\n          <br>\n          <mat-form-field>\n            <input matInput placeholder=\"Father's name\" name=\"FATHER_NAME\" id=\"FATHER_NAME\" [ngModel]=\"data.FATHER_NAME\" minlength=\"4\">\n          </mat-form-field>\n          <mat-form-field>\n            <input matInput placeholder=\"Mother's name\" name=\"MOTHER_NAME\" id=\"MOTHER_NAME\" [ngModel]=\"data.MOTHER_NAME\" minlength=\"4\">\n          </mat-form-field>\n          <br>\n          <mat-form-field>\n            <input matInput placeholder=\"Spouse's name\" name=\"SPOUSE_NAME\" id=\"SPOUSE_NAME\" [ngModel]=\"data.SPOUSE_NAME\" minlength=\"4\">\n          </mat-form-field>\n          <mat-form-field>\n            <input matInput placeholder=\"Spouse Date of Birth\" type=\"date\" name=\"SDOB\" id=\"SDOB\" [ngModel]=\"data.SDOB\">\n          </mat-form-field>\n        </mat-expansion-panel>\n        <mat-expansion-panel>\n          <mat-expansion-panel-header>\n            <mat-panel-title>\n              Address\n            </mat-panel-title>\n            <mat-panel-description>\n              Contact Details\n            </mat-panel-description>\n          </mat-expansion-panel-header>\n          <mat-form-field>\n            <input matInput placeholder=\"Address Type\" name=\"ADD_TYPE_1\" id=\"ADD_TYPE_1\" [ngModel]=\"data.ADD_TYPE_1\" minlength=\"4\">\n          </mat-form-field>\n          <mat-form-field>\n            <input matInput placeholder=\"Address Line 1\" name=\"ADD_LINE_1\" id=\"ADD_LINE_1\" [ngModel]=\"data.ADD_LINE_1\" minlength=\"4\">\n          </mat-form-field>\n          <mat-form-field>\n            <input matInput placeholder=\"Address Line 2\" name=\"ADD_LINE_2\" id=\"ADD_LINE_2\" [ngModel]=\"data.ADD_LINE_2\">\n          </mat-form-field>\n          <br>\n          <mat-form-field>\n            <input matInput placeholder=\"Pin Code\" name=\"PIN_CODE\" id=\"PIN_CODE\" [ngModel]=\"data.PIN_CODE\">\n          </mat-form-field>\n          <mat-form-field>\n            <input matInput placeholder=\"State\" name=\"STATE\" id=\"STATE\" [ngModel]=\"data.STATE\">\n          </mat-form-field>\n          <mat-form-field>\n            <input matInput placeholder=\"Country\" name=\"COUNTRY\" id=\"COUNTRY\" [ngModel]=\"data.COUNTRY\">\n          </mat-form-field>\n          <br>\n          <mat-form-field>\n            <input matInput placeholder=\"Address Type (2)\" name=\"ADD_TYPE_2\" id=\"ADD_TYPE_2\" [ngModel]=\"data.ADD_TYPE_2\" minlength=\"4\">\n          </mat-form-field>\n          <mat-form-field>\n            <input matInput placeholder=\"Address Line 1\" name=\"ADD_LINE_12\" id=\"ADD_LINE_12\" [ngModel]=\"data.ADD_LINE_12\" minlength=\"4\">\n          </mat-form-field>\n          <mat-form-field>\n            <input matInput placeholder=\"Address Line 2\" name=\"ADD_LINE_22\" id=\"ADD_LINE_22\" [ngModel]=\"data.ADD_LINE_22\">\n          </mat-form-field>\n          <br>\n          <mat-form-field>\n            <input matInput placeholder=\"Pin Code\" name=\"PIN_CODE2\" id=\"PIN_CODE2\" [ngModel]=\"data.PIN_CODE2\">\n          </mat-form-field>\n          <mat-form-field>\n            <input matInput placeholder=\"State\" name=\"STATE2\" id=\"STATE2\" [ngModel]=\"data.STATE2\">\n          </mat-form-field>\n          <mat-form-field>\n            <input matInput placeholder=\"Country\" name=\"COUNTRY2\" id=\"COUNTRY2\" [ngModel]=\"data.COUNTRY2\">\n          </mat-form-field>\n          <br>\n          <mat-form-field>\n            <input matInput placeholder=\"Mobile 1\" name=\"MOBILE1\" id=\"MOBILE1\" [ngModel]=\"data.MOBILE1\" phone minlength=\"10\">\n          </mat-form-field>\n          <mat-form-field>\n            <input matInput placeholder=\"Mobile 2\" name=\"MOBILE2\" id=\"MOBILE2\" [ngModel]=\"data.MOBILE2\" phone minlength=\"10\">\n          </mat-form-field>\n          <br>\n          <mat-form-field>\n            <input matInput placeholder=\"Email 1\" name=\"EMAIL1\" id=\"EMAIL1\" [ngModel]=\"data.EMAIL1\" phone minlength=\"10\">\n          </mat-form-field>\n          <mat-form-field>\n            <input matInput placeholder=\"Email 2\" name=\"EMAIL2\" id=\"EMAIL2\" [ngModel]=\"data.EMAIL2\" phone minlength=\"10\">\n          </mat-form-field>\n        </mat-expansion-panel>\n        <mat-expansion-panel>\n          <mat-expansion-panel-header>\n            <mat-panel-title>\n              Qualifications\n            </mat-panel-title>\n            <mat-panel-description>\n              Performance Details\n            </mat-panel-description>\n          </mat-expansion-panel-header>\n          <mat-form-field>\n            <input matInput placeholder=\"Degree(s)\" name=\"DEGREE\" id=\"DEGREE\" [ngModel]=\"data.DEGREE\" minlength=\"4\">\n          </mat-form-field>\n          <br>\n          <mat-form-field>\n            <input matInput placeholder=\"Last College Attended\" name=\"COLLEGE\" id=\"COLLEGE\" [ngModel]=\"data.COLLEGE\" minlength=\"4\">\n          </mat-form-field>\n          <br>\n          <mat-form-field>\n            <input matInput placeholder=\"College Address Line 1\" name=\"ADD_LINE_C1\" id=\"ADD_LINE_C1\" [ngModel]=\"data.ADD_LINE_C1\" minlength=\"4\">\n          </mat-form-field>\n          <mat-form-field>\n            <input matInput placeholder=\"College Address Line 2\" name=\"ADD_LINE_C2\" id=\"ADD_LINE_C2\" [ngModel]=\"data.ADD_LINE_C2\">\n          </mat-form-field>\n          <br>\n          <mat-form-field>\n            <input matInput placeholder=\"College Pin Code\" name=\"PIN_CODE_C\" id=\"PIN_CODE_C\" [ngModel]=\"data.PIN_CODE_C\">\n          </mat-form-field>\n          <mat-form-field>\n            <input matInput placeholder=\"College State\" name=\"STATE_C\" id=\"STATE_C\" [ngModel]=\"data.STATE_C\">\n          </mat-form-field>\n          <mat-form-field>\n            <input matInput placeholder=\"College Country\" name=\"COUNTRY_C\" id=\"COUNTRY_C\" [ngModel]=\"data.COUNTRY_C\">\n          </mat-form-field>\n        </mat-expansion-panel>\n        <mat-expansion-panel>\n          <mat-expansion-panel-header>\n            <mat-panel-title>\n              References\n            </mat-panel-title>\n            <mat-panel-description>\n              References Details\n            </mat-panel-description>\n          </mat-expansion-panel-header>\n          <mat-form-field>\n            <input matInput placeholder=\"Reference 1\" name=\"REFERENCE_1\" id=\"REFERENCE_1\" [ngModel]=\"data.REFERENCE_1\" minlength=\"4\">\n          </mat-form-field>\n          <mat-form-field>\n            <input matInput placeholder=\"Reference 1 Address\" name=\"REFERENCE_1_ADD\" id=\"REFERENCE_1_ADD\" [ngModel]=\"data.REFERENCE_1_ADD\" minlength=\"4\">\n          </mat-form-field>\n          <br>\n          <mat-form-field>\n            <input matInput placeholder=\"Reference 2\" name=\"REFERENCE_2\" id=\"REFERENCE_2\" [ngModel]=\"data.REFERENCE_2\" minlength=\"4\">\n          </mat-form-field>\n          <mat-form-field>\n            <input matInput placeholder=\"Reference 2 Address\" name=\"REFERENCE_2_ADD\" id=\"REFERENCE_2_ADD\" [ngModel]=\"data.REFERENCE_2_ADD\" minlength=\"4\">\n          </mat-form-field>\n        </mat-expansion-panel>\n        <mat-expansion-panel>\n          <mat-expansion-panel-header>\n            <mat-panel-title>\n              HR (*)\n            </mat-panel-title>\n            <mat-panel-description>\n              Compensation Details\n            </mat-panel-description>\n          </mat-expansion-panel-header>\n          <mat-form-field>\n            <mat-select placeholder=\"Job Code\" name=\"JOB_CODE\" id=\"JOB_CODE\" ngModel required>\n              <mat-option *ngFor=\"let code of jobCDs\" [value]=\"code._id\">\n                  {{ code.code }} - {{ code.descr }}\n              </mat-option>\n            </mat-select>\n          </mat-form-field>\n          <mat-form-field>\n            <mat-select placeholder=\"Salary Code\" name=\"SALARY_CODE\" id=\"SALARY_CODE\" ngModel required>\n              <mat-option *ngFor=\"let code of salCDs\" [value]=\"code._id\">\n                {{ code.code }} - {{ code.descr }}\n              </mat-option>\n            </mat-select>\n          </mat-form-field>\n          <mat-form-field>\n            <mat-select placeholder=\"Leave Code\" name=\"LEAVE_CODE\" id=\"LEAVE_CODE\" ngMOdel required>\n              <mat-option *ngFor=\"let code of leaveCDs\" [value]=\"code._id\">\n                {{ code.code }} - {{ code.descr }}\n              </mat-option>\n            </mat-select>\n          </mat-form-field>\n          </mat-expansion-panel>\n      </mat-accordion>\n    </div>\n  </form>\n</ng-template>\n<!-- Results mode -->\n<ng-template #showResMode>\n  \n  <mat-card-actions align=\"start\">\n    <span class=\"med-spacer\"></span>\n    <span class=\"med-spacer\"></span>\n    <span class=\"med-spacer\"></span>\n    <span matTooltip=\"Add New\">\n      <mat-icon color=\"primary\" (click)=\"toggle('addMode')\" svgIcon=\"add\"></mat-icon>\n    </span>\n    <span class=\"small-spacer\"></span>\n    <span matTooltip=\"Search All\">\n      <mat-icon color=\"primary\" (click)=\"toggle('searchMode')\" svgIcon=\"search\"></mat-icon>\n    </span>\n  </mat-card-actions>\n  <div class=\"example-header\">\n    <mat-form-field>\n      <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Search Recent Results\">\n    </mat-form-field>\n  </div>\n  <div class=\"example-container mat-elevation-z8\">\n    <mat-table [dataSource]=\"dataSource\" matSort>\n      <ng-container matColumnDef=\"code\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>Employee ID</mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{row.CODE}} </mat-cell>\n      </ng-container>\n      <ng-container matColumnDef=\"descr\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>Name</mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{row.DESCR}} </mat-cell>\n      </ng-container>\n      <ng-container matColumnDef=\"_id\">\n        <mat-header-cell *matHeaderCellDef> action </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\">\n          <span matTooltip=\"Edit\">\n            <button mat-icon-button (click)=\"getDoc(row._id)\">\n              <mat-icon color=\"primary\" svgIcon=\"edit\"></mat-icon>\n            </button>\n          </span>\n          <span matTooltip=\"Delete\">\n            <button mat-icon-button (click)=\"deleteDoc(row._id)\">\n              <mat-icon color=\"primary\" svgIcon=\"delete\"></mat-icon>\n            </button>\n          </span>\n          <span matTooltip=\"Salary\">\n            <button mat-icon-button routerLink=\"/salary/{{row._id}}\">\n              <mat-icon color=\"primary\" svgIcon=\"salary\"></mat-icon>\n            </button>\n          </span>\n        </mat-cell>\n      </ng-container>\n\n      <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n      <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n    </mat-table>\n    <mat-paginator #paginator [length]=\"dataSource.filteredData.length\" [pageIndex]=\"0\" [pageSize]=\"5\" [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\n  </div>\n</ng-template><!--7�f\"/���ڛ����n��\u001e�\u0017�V�Y1���\\>��DLy^ �\u0007�\u0003�a��~\b\u001d\r�\r�H�\fo�^�;\u0018\t[�*\u001aWuO�,W�*��)���h�憫ߋE�\u00045��P�:(~AR]hC��y4���b\u0012�\fj��\u001f\u000f���t�k�z\u0000�\u0016*\u0012��\\\u0011K��F�g���3�`UJl\u0001M\u000f\u0004�`�t\u0000�t\u001fS�:,ۜLJڇ�!\u001a��yX\u0013h\u001a��L�Z�\u0003�Sh���6PqU\u0004�8�^��R�.��Y1�O�\u0019�i��\u0001�\u00128�-�T����\f�Yc|\u0012;I\u0003\u0002���a�1t0#=ϝ�(�B5�%�\t�K\u000b@�Z�T���@�r\u001aX�\u0010ۢ����J5\t徐�8��O�&]�\f��7ýe��)��oHL�(��}��왯�T�%Y�\u0007F�-[��g\rı;���\u001bT%d��\u0003�\u0017A�-\b�\u0005i7��kۏv^���a\"��Ъ���t�1T�\u0014נ�3]�\u00102\b��f=�`\u000f�-�e\u001dW=;�N\u000ba;�7����ƺ\"���Hj��sak�a���z\"�\u001f�A�c�_z\u0016�\u0000��\u0001R\u0014��\u0005��\u0001\u0006��\u0001\u001d��\u0001\u001d�0M/�h^!��\u0001\u0000��\u0001-->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/staff/expenses.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/staff/expenses.component.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header-admin pageTitle=\"Expenses\" imageUrl=\"business\" helpType=\"voucherpage\"></app-header-admin>\n<mat-card>\n  <mat-card-content>\n    <div *ngIf=\"(toggleField=='searchMode') else (toggleField=='addMode')? showAddMode : ((toggleField=='editMode')? showEditMode : showResMode)\">\n      <!-- searchmode -->\n      <form #searchFormData=\"ngForm\" class=\"example-form\">\n        <mat-card-actions align=\"start\">\n          <button type=\"button\" (click)=\"toggle('resMode');getData(searchFormData.value);\" mat-raised-button [disabled]=\"(code.value == '' && descr.value == '')\"\n            color=\"primary\">Search</button>\n          <span class=\"med-spacer\"></span>\n          <span matTooltip=\"Add New\">\n            <mat-icon color=\"primary\" (click)=\"toggle('addMode')\" svgIcon=\"add\"></mat-icon>\n          </span>\n          <span class=\"small-spacer\"></span>\n          <span matTooltip=\"Show Recent Results\">\n            <mat-icon color=\"primary\" (click)=\"toggle('resMode');getData();\" svgIcon=\"cached\"></mat-icon>\n          </span>\n        </mat-card-actions>\n        <mat-form-field class=\"example-form\">\n          <input matInput type=\"text\" placeholder=\"Expenses Id\" id=\"code\" name=\"code\" #code=\"ngModel\" ngModel>\n        </mat-form-field>\n        <br>\n        <mat-form-field class=\"example-form\">\n          <input matInput type=\"text\" placeholder=\"Expenses Descr\" id=\"descr\" name=\"descr\" #descr=\"ngModel\" ngModel>\n        </mat-form-field>\n      </form>\n    </div>\n  </mat-card-content>\n</mat-card>\n<!-- addMode -->\n<ng-template #showAddMode>\n  <form [formGroup]=\"addDataForm\" (ngSubmit)=\"setData(addDataForm.value);this.addDataForm.reset();\" novalidate>\n    <mat-error *ngIf=\"savedChanges\">\n      Data is saved.\n      <label class=\"small-spacer\"></label>\n      <mat-icon (click)=\"this.addDataForm.reset();savedChanges=false;toggle('searchMode');\" svgIcon=\"clear\"></mat-icon>\n    </mat-error>\n    <div *ngIf=\"!savedChanges\">\n      <mat-progress-bar mode=\"indeterminate\" *ngIf=\"dataLoading\"></mat-progress-bar>\n      <mat-error *ngIf=\"error\">Error: {{ errorMessage }}</mat-error>\n      <mat-card-actions align=\"start\">\n        <button type=\"submit\" mat-raised-button [disabled]=\"!addDataForm.valid\" color=\"primary\">Add</button>\n        <button type=\"reset\" (click)=\"this.addDataForm.reset();\" mat-raised-button [disabled]=\"!addDataForm.valid\" color=\"primary\">Clear</button>\n        <span class=\"med-spacer\"></span>\n        <span matTooltip=\"Search\">\n          <mat-icon color=\"primary\" (click)=\"toggle('searchMode')\" svgIcon=\"search\"></mat-icon>\n        </span>\n        <span class=\"small-spacer\"></span>\n        <span matTooltip=\"Show Recent Results\">\n          <mat-icon color=\"primary\" (click)=\"toggle('resMode');getData();\" svgIcon=\"cached\"></mat-icon>\n        </span>\n      </mat-card-actions>\n      <mat-accordion>\n        <mat-expansion-panel>\n          <mat-expansion-panel-header>\n            <mat-panel-title>\n              ID (*)\n            </mat-panel-title>\n            <mat-panel-description>\n              Expenses Header Information\n            </mat-panel-description>\n          </mat-expansion-panel-header>\n          <mat-form-field>\n            <input matInput placeholder=\"Expenses ID\" formControlName=\"code\" required>\n          </mat-form-field>\n          <br>\n          <mat-form-field>\n            <input matInput placeholder=\"Expenses Descr\" formControlName=\"descr\" required>\n          </mat-form-field>\n          <br>\n          <mat-form-field>\n            <mat-select placeholder=\"Type\" formControlName=\"TYPE\" required>\n              <mat-option *ngFor=\"let code of typeCDs\" [value]=\"code\">\n                {{ code }}\n              </mat-option>\n            </mat-select>\n          </mat-form-field>\n          <br>\n          <mat-form-field>\n            <mat-select placeholder=\"Status\" formControlName=\"STATUS\" required>\n              <mat-option *ngFor=\"let code of statusCDs\" [value]=\"code\">\n                {{ code }}\n              </mat-option>\n            </mat-select>\n          </mat-form-field>\n        </mat-expansion-panel>\n        <mat-expansion-panel>\n          <mat-expansion-panel-header>\n            <mat-panel-title>\n              Vendor\n            </mat-panel-title>\n            <mat-panel-description>\n              Address/Invoice Details\n            </mat-panel-description>\n          </mat-expansion-panel-header>\n          <mat-form-field>\n            <input matInput placeholder=\"Invoice #\" formControlName=\"INVOICE\">\n          </mat-form-field>\n          <mat-form-field>\n            <input matInput placeholder=\"Vendor Name\" formControlName=\"VENDOR\">\n          </mat-form-field>\n          <div formArrayName=\"ADDRESS\">\n            <div *ngFor=\"let item of ADDRESSES('addDataForm').controls; let pointIndex=index\" [formGroupName]=\"pointIndex\">\n              <br>\n              <mat-form-field>\n                <input matInput placeholder=\"Address Type\" formControlName=\"ADD_TYPE\">\n              </mat-form-field>\n              <mat-form-field>\n                <input matInput placeholder=\"Address Line 1\" formControlName=\"ADD_LINE_1\">\n              </mat-form-field>\n              <mat-form-field>\n                <input matInput placeholder=\"Address Line 2\" formControlName=\"ADD_LINE_2\">\n              </mat-form-field>\n              <br>\n              <mat-form-field>\n                <input matInput placeholder=\"Pin Code\" formControlName=\"PIN_CODE\" pattern=\"^[0-9]*$\">\n              </mat-form-field>\n              <mat-form-field>\n                <input matInput placeholder=\"State\" formControlName=\"STATE\">\n              </mat-form-field>\n              <mat-form-field>\n                <input matInput placeholder=\"Country\" formControlName=\"COUNTRY\">\n              </mat-form-field>\n              <mat-icon color=\"warn\" svgIcon=\"clear\" (click)=\"deleteADDRESSES(pointIndex,'addDataForm')\"></mat-icon>\n            </div>\n            <mat-icon color=\"green\" svgIcon=\"add\" (click)=\"addADDRESSES('addDataForm')\"></mat-icon>\n          </div>\n          <mat-divider></mat-divider>\n          <div formArrayName=\"PHONE\">\n            <div *ngFor=\"let item of PHONES('addDataForm').controls; let pointIndex=index\" [formGroupName]=\"pointIndex\">\n              <br>\n              <mat-form-field>\n                <input matInput placeholder=\"Phone Type\" formControlName=\"PHONE_TYPE\">\n              </mat-form-field>\n              <mat-form-field>\n                <input matInput placeholder=\"Phone #\" formControlName=\"PHONE_NUMBER\" pattern=\"^[0-9]*$\">\n              </mat-form-field>\n              <mat-icon color=\"warn\" svgIcon=\"clear\" (click)=\"deletePHONES(pointIndex,'addDataForm')\"></mat-icon>\n            </div>\n            <mat-icon color=\"green\" svgIcon=\"add\" (click)=\"addPHONES('addDataForm')\"></mat-icon>\n          </div>\n          <mat-divider></mat-divider>\n          <div formArrayName=\"EMAILID\">\n            <div *ngFor=\"let item of EMAILIDS('addDataForm').controls; let pointIndex=index\" [formGroupName]=\"pointIndex\">\n              <br>\n              <mat-form-field>\n                <input matInput placeholder=\"Email Type\" formControlName=\"EMAIL_TYPE\">\n              </mat-form-field>\n              <mat-form-field>\n                <input matInput placeholder=\"Email ID\" formControlName=\"EMAILID\" email>\n              </mat-form-field>\n              <mat-icon color=\"warn\" svgIcon=\"clear\" (click)=\"deleteEMAILS(pointIndex,'addDataForm')\"></mat-icon>\n            </div>\n            <mat-icon color=\"green\" svgIcon=\"add\" (click)=\"addEMAILS('addDataForm')\"></mat-icon>\n          </div>\n        </mat-expansion-panel>\n        <mat-expansion-panel>\n          <mat-expansion-panel-header>\n            <mat-panel-title>\n              Dates\n            </mat-panel-title>\n            <mat-panel-description>\n              Important Dates\n            </mat-panel-description>\n          </mat-expansion-panel-header>\n          <mat-form-field>\n            <input matInput placeholder=\"Expenses Entered Date\" type=\"date\" formControlName=\"EDATE\">\n          </mat-form-field>\n          <br>\n          <mat-form-field>\n            <input matInput placeholder=\"Expenses Received Date\" type=\"date\" formControlName=\"RDATE\">\n          </mat-form-field>\n          <br>\n          <mat-form-field>\n            <input matInput placeholder=\"Expenses Due Date\" type=\"date\" formControlName=\"DDATE\">\n          </mat-form-field>\n          <br>\n          <mat-form-field>\n            <input matInput placeholder=\"Expenses Paid Date\" type=\"date\" formControlName=\"PDATE\">\n          </mat-form-field>\n          <br>\n        </mat-expansion-panel>\n        <mat-expansion-panel>\n          <mat-expansion-panel-header>\n            <mat-panel-title>\n              Line (*)\n            </mat-panel-title>\n            <mat-panel-description>\n              Amout/Details\n            </mat-panel-description>\n          </mat-expansion-panel-header>\n          <div formArrayName=\"LINE\">\n            <div *ngFor=\"let item of LINES('addDataForm').controls; let pointIndex=index\" [formGroupName]=\"pointIndex\">\n              <br>\n              <mat-form-field>\n                <input matInput placeholder=\"Line #/Code\" formControlName=\"LINE_NUM\" required>\n              </mat-form-field>\n              <mat-form-field>\n                <input matInput placeholder=\"Description\" formControlName=\"LINE_NAME\" required>\n              </mat-form-field>\n              <mat-form-field>\n                <input matInput placeholder=\"Amount\" (keyup)=\"calculateTotal('addDataForm')\" formControlName=\"AMOUNT\" required pattern=\"^\\d*\\.?\\d+$\">\n              </mat-form-field>\n              <mat-icon svgIcon=\"clear\" color=\"warn\" (click)=\"deleteLINES(pointIndex,'addDataForm')\">Delete</mat-icon>\n            </div>\n            <mat-icon svgIcon=\"add\" color=\"green\" (click)=\"addLINES('addDataForm')\"></mat-icon>\n          </div>\n          <br>\n          <mat-form-field>\n            <input matInput readonly=\"\" placeholder=\"Gross Amount\" formControlName=\"GAMOUNT\" pattern=\"^\\d*\\.?\\d+$\">\n          </mat-form-field>\n          <br>\n          <mat-radio-group formControlName=\"GAMOUNT_DISC_TYPE\">\n            <mat-radio-button value=\"1\">%</mat-radio-button>\n            <mat-radio-button value=\"2\">Fixed</mat-radio-button>\n          </mat-radio-group>\n          <div *ngIf=\"this.addDataForm.controls.GAMOUNT_DISC_TYPE.value==1\">\n            <mat-form-field>\n              <input matInput placeholder=\"Discount %\" formControlName=\"DISC_G_PERCENT\" (keyup)=\"calculateTotal('addDataForm')\" pattern=\"^\\d*\\.?\\d+$\">\n            </mat-form-field>\n          </div>\n          <br>\n          <mat-form-field>\n            <input matInput placeholder=\"Discount Amount\" formControlName=\"DISC_GAMOUNT\" (keyup)=\"calculateTotal('addDataForm')\" pattern=\"^\\d*\\.?\\d+$\">\n          </mat-form-field>\n          <br>\n          <mat-divider></mat-divider>\n          <mat-radio-group formControlName=\"TAX_TYPE\">\n            <mat-radio-button value=\"1\">%</mat-radio-button>\n            <mat-radio-button value=\"2\">Fixed</mat-radio-button>\n          </mat-radio-group>\n          <div *ngIf=\"this.addDataForm.controls.TAX_TYPE.value==1\">\n            <mat-form-field>\n              <input matInput placeholder=\"Tax %\" formControlName=\"TAX_PERCENT\" (keyup)=\"calculateTotal('addDataForm')\" pattern=\"^\\d*\\.?\\d+$\">\n            </mat-form-field>\n          </div>\n          <br>\n          <mat-form-field>\n            <input matInput placeholder=\"Tax Amount\" formControlName=\"TAX_GAMOUNT\" (keyup)=\"calculateTotal('addDataForm')\" pattern=\"^\\d*\\.?\\d+$\">\n          </mat-form-field>\n          <br>\n          <mat-radio-group formControlName=\"SHIP_TYPE\">\n            <mat-radio-button value=\"1\">%</mat-radio-button>\n            <mat-radio-button value=\"2\">Fixed</mat-radio-button>\n          </mat-radio-group>\n          <div *ngIf=\"this.addDataForm.controls.SHIP_TYPE.value==1\">\n            <mat-form-field>\n              <input matInput placeholder=\"Shipping %\" formControlName=\"SHIP_PERCENT\" (keyup)=\"calculateTotal('addDataForm')\" pattern=\"^\\d*\\.?\\d+$\">\n            </mat-form-field>\n          </div>\n          <br>\n          <mat-form-field>\n            <input matInput placeholder=\"Shipping Amount\" formControlName=\"SHIP_GAMOUNT\" (keyup)=\"calculateTotal('addDataForm')\" pattern=\"^\\d*\\.?\\d+$\">\n          </mat-form-field>\n          <br>\n          <mat-form-field>\n            <input matInput placeholder=\"Final Amount\" formControlName=\"FINAL_AMOUNT\" (keyup)=\"calculateTotal('addDataForm')\" pattern=\"^\\d*\\.?\\d+$\">\n          </mat-form-field>\n          <br>\n          <mat-form-field>\n            <input matInput placeholder=\"Paid Amount\" formControlName=\"PAID_AMOUNT\" (keyup)=\"calculateTotal('addDataForm')\" pattern=\"^\\d*\\.?\\d+$\">\n          </mat-form-field>\n          <br>\n          <mat-form-field>\n            <input matInput readonly=\"\" placeholder=\"Balance\" formControlName=\"BALANCE\" pattern=\"^\\d*\\.?\\d+$\">\n          </mat-form-field>\n        </mat-expansion-panel>\n      </mat-accordion>\n    </div>\n  </form>\n</ng-template>\n<!-- edit mode -->\n<ng-template #showEditMode>\n    <form [formGroup]=\"editDataForm\" (ngSubmit)=\"updateData(editDataForm.value);\" novalidate>\n    <input type=\"hidden\" formControlName=\"_id\" required>\n    <mat-error *ngIf=\"savedChanges\">\n      Data is saved.\n      <label class=\"small-spacer\"></label>\n      <mat-icon (click)=\"this.editDataForm.reset();savedChanges=false;toggle('searchMode');\" svgIcon=\"clear\"></mat-icon>\n    </mat-error>\n    <div *ngIf=\"!savedChanges\">\n      <mat-progress-bar mode=\"indeterminate\" *ngIf=\"dataLoading\"></mat-progress-bar>\n      <mat-error *ngIf=\"error\">Error: {{ errorMessage }}</mat-error>\n      <mat-card-actions align=\"start\">\n        <button type=\"submit\" mat-raised-button [disabled]=\"!this.editDataForm.valid || this.editDataForm.pristine\" color=\"primary\">Update</button>\n        <span class=\"med-spacer\"></span>\n        <span matTooltip=\"Search\">\n          <mat-icon color=\"primary\" (click)=\"toggle('searchMode')\" svgIcon=\"search\"></mat-icon>\n        </span>\n        <span class=\"small-spacer\"></span>\n        <span matTooltip=\"Shwo Recent Results\">\n          <mat-icon color=\"primary\" (click)=\"toggle('resMode');getData();\" svgIcon=\"cached\"></mat-icon>\n        </span>\n      </mat-card-actions>\n      <mat-accordion>\n        <mat-expansion-panel>\n          <mat-expansion-panel-header>\n            <mat-panel-title>\n              ID (*)\n            </mat-panel-title>\n            <mat-panel-description>\n              Expenses Header Information\n            </mat-panel-description>\n          </mat-expansion-panel-header>\n          <mat-form-field>\n            <input matInput placeholder=\"Expenses ID\" formControlName=\"code\">\n          </mat-form-field>\n          <br>\n          <mat-form-field>\n            <input matInput placeholder=\"Expenses Descr\" formControlName=\"descr\">\n          </mat-form-field>\n          <br>\n          <mat-form-field>\n            <mat-select placeholder=\"Type\" formControlName=\"TYPE\">\n              <mat-option *ngFor=\"let code of typeCDs\" [value]=\"code\">\n                {{ code }}\n              </mat-option>\n            </mat-select>\n          </mat-form-field>\n          <br>\n          <mat-form-field>\n            <mat-select placeholder=\"Status\" formControlName=\"STATUS\">\n              <mat-option *ngFor=\"let code of statusCDs\" [value]=\"code\">\n                {{ code }}\n              </mat-option>\n            </mat-select>\n          </mat-form-field>\n        </mat-expansion-panel>\n        <mat-expansion-panel>\n          <mat-expansion-panel-header>\n            <mat-panel-title>\n              Vendor\n            </mat-panel-title>\n            <mat-panel-description>\n              Address/Invoice Details\n            </mat-panel-description>\n          </mat-expansion-panel-header>\n          <mat-form-field>\n            <input matInput placeholder=\"Invoice #\" formControlName=\"INVOICE\">\n          </mat-form-field>\n          <mat-form-field>\n            <input matInput placeholder=\"Vendor Name\" formControlName=\"VENDOR\">\n          </mat-form-field>\n          <div formArrayName=\"ADDRESS\">\n            <div *ngFor=\"let item of editDataForm.get('ADDRESS').controls; let pointIndex=index\" [formGroupName]=\"pointIndex\">\n              <br>\n              <mat-form-field>\n                <input matInput placeholder=\"Address Type\" formControlName=\"ADD_TYPE\">\n              </mat-form-field>\n              <mat-form-field>\n                <input matInput placeholder=\"Address Line 1\" formControlName=\"ADD_LINE_1\">\n              </mat-form-field>\n              <mat-form-field>\n                <input matInput placeholder=\"Address Line 2\" formControlName=\"ADD_LINE_2\">\n              </mat-form-field>\n              <br>\n              <mat-form-field>\n                <input matInput placeholder=\"Pin Code\" formControlName=\"PIN_CODE\" pattern=\"^[0-9]*$\">\n              </mat-form-field>\n              <mat-form-field>\n                <input matInput placeholder=\"State\" formControlName=\"STATE\">\n              </mat-form-field>\n              <mat-form-field>\n                <input matInput placeholder=\"Country\" formControlName=\"COUNTRY\">\n              </mat-form-field>\n              <mat-icon color=\"warn\" svgIcon=\"clear\" (click)=\"deleteADDRESSES(pointIndex,'editDataForm')\"></mat-icon>\n            </div>\n            <mat-icon color=\"green\" svgIcon=\"add\" (click)=\"addADDRESSES('editDataForm')\"></mat-icon>\n          </div>\n          <mat-divider></mat-divider>\n          <div formArrayName=\"PHONE\">\n            <div *ngFor=\"let item of editDataForm.get('PHONE').controls; let pointIndex=index\" [formGroupName]=\"pointIndex\">\n              <br>\n              <mat-form-field>\n                <input matInput placeholder=\"Phone Type\" formControlName=\"PHONE_TYPE\">\n              </mat-form-field>\n              <mat-form-field>\n                <input matInput placeholder=\"Phone #\" formControlName=\"PHONE_NUMBER\" pattern=\"^[0-9]*$\">\n              </mat-form-field>\n              <mat-icon color=\"warn\" svgIcon=\"clear\" (click)=\"deletePHONES(pointIndex,'editDataForm')\"></mat-icon>\n            </div>\n            <mat-icon color=\"green\" svgIcon=\"add\" (click)=\"addPHONES('editDataForm')\"></mat-icon>\n          </div>\n          <mat-divider></mat-divider>\n          <div formArrayName=\"EMAILID\">\n            <div *ngFor=\"let item of editDataForm.get('EMAILID').controls; let pointIndex=index\" [formGroupName]=\"pointIndex\">\n              <br>\n              <mat-form-field>\n                <input matInput placeholder=\"Email Type\" formControlName=\"EMAIL_TYPE\">\n              </mat-form-field>\n              <mat-form-field>\n                <input matInput placeholder=\"Email ID\" formControlName=\"EMAILID\" email>\n              </mat-form-field>\n              <mat-icon color=\"warn\" svgIcon=\"clear\" (click)=\"deleteEMAILS(pointIndex,'editDataForm')\"></mat-icon>\n            </div>\n            <mat-icon color=\"green\" svgIcon=\"add\" (click)=\"addEMAILS('editDataForm')\"></mat-icon>\n          </div>\n        </mat-expansion-panel>\n        <mat-expansion-panel>\n          <mat-expansion-panel-header>\n            <mat-panel-title>\n              Dates\n            </mat-panel-title>\n            <mat-panel-description>\n              Important Dates\n            </mat-panel-description>\n          </mat-expansion-panel-header>\n          <mat-form-field>\n            <input matInput placeholder=\"Expenses Entered Date\" type=\"date\" formControlName=\"EDATE\">\n          </mat-form-field>\n          <br>\n          <mat-form-field>\n            <input matInput placeholder=\"Expenses Received Date\" type=\"date\" formControlName=\"RDATE\">\n          </mat-form-field>\n          <br>\n          <mat-form-field>\n            <input matInput placeholder=\"Expenses Due Date\" type=\"date\" formControlName=\"DDATE\">\n          </mat-form-field>\n          <br>\n          <mat-form-field>\n            <input matInput placeholder=\"Expenses Paid Date\" type=\"date\" formControlName=\"PDATE\">\n          </mat-form-field>\n          <br>\n        </mat-expansion-panel>\n        <mat-expansion-panel>\n          <mat-expansion-panel-header>\n            <mat-panel-title>\n              Line (*)\n            </mat-panel-title>\n            <mat-panel-description>\n              Amout/Details\n            </mat-panel-description>\n          </mat-expansion-panel-header>\n          <div formArrayName=\"LINE\">\n            <div *ngFor=\"let item of editDataForm.get('LINE').controls; let pointIndex=index\" [formGroupName]=\"pointIndex\">\n              <br>\n              <mat-form-field>\n                <input matInput placeholder=\"Line #/Code\" formControlName=\"LINE_NUM\" required>\n              </mat-form-field>\n              <mat-form-field>\n                <input matInput placeholder=\"Description\" formControlName=\"LINE_NAME\" required>\n              </mat-form-field>\n              <mat-form-field>\n                <input matInput placeholder=\"Amount\" (keyup)=\"calculateTotal('editDataForm')\" formControlName=\"AMOUNT\" required pattern=\"^\\d*\\.?\\d+$\">\n              </mat-form-field>\n              <mat-icon svgIcon=\"clear\" color=\"warn\" (click)=\"deleteLINES(pointIndex,'editDataForm')\">Delete</mat-icon>\n            </div>\n            <mat-icon svgIcon=\"add\" color=\"green\" (click)=\"addLINES('editDataForm')\"></mat-icon>\n          </div>\n          <br>\n          <mat-form-field>\n            <input matInput readonly=\"\" placeholder=\"Gross Amount\" formControlName=\"GAMOUNT\" pattern=\"^\\d*\\.?\\d+$\">\n          </mat-form-field>\n          <br>\n          <mat-radio-group formControlName=\"GAMOUNT_DISC_TYPE\">\n            <mat-radio-button value=\"1\">%</mat-radio-button>\n            <mat-radio-button value=\"2\">Fixed</mat-radio-button>\n          </mat-radio-group>\n          <div *ngIf=\"this.editDataForm.controls.GAMOUNT_DISC_TYPE.value==1\">\n            <mat-form-field>\n              <input matInput placeholder=\"Discount %\" formControlName=\"DISC_G_PERCENT\" (keyup)=\"calculateTotal('editDataForm')\" pattern=\"^\\d*\\.?\\d+$\">\n            </mat-form-field>\n          </div>\n          <br>\n          <mat-form-field>\n            <input matInput placeholder=\"Discount Amount\" formControlName=\"DISC_GAMOUNT\" (keyup)=\"calculateTotal('editDataForm')\" pattern=\"^\\d*\\.?\\d+$\">\n          </mat-form-field>\n          <br>\n          <mat-divider></mat-divider>\n          <mat-radio-group formControlName=\"TAX_TYPE\">\n            <mat-radio-button value=\"1\">%</mat-radio-button>\n            <mat-radio-button value=\"2\">Fixed</mat-radio-button>\n          </mat-radio-group>\n          <div *ngIf=\"this.editDataForm.controls.TAX_TYPE.value==1\">\n            <mat-form-field>\n              <input matInput placeholder=\"Tax %\" formControlName=\"TAX_PERCENT\" (keyup)=\"calculateTotal('editDataForm')\" pattern=\"^\\d*\\.?\\d+$\">\n            </mat-form-field>\n          </div>\n          <br>\n          <mat-form-field>\n            <input matInput placeholder=\"Tax Amount\" formControlName=\"TAX_GAMOUNT\" (keyup)=\"calculateTotal('editDataForm')\" pattern=\"^\\d*\\.?\\d+$\">\n          </mat-form-field>\n          <br>\n          <mat-radio-group formControlName=\"SHIP_TYPE\">\n            <mat-radio-button value=\"1\">%</mat-radio-button>\n            <mat-radio-button value=\"2\">Fixed</mat-radio-button>\n          </mat-radio-group>\n          <div *ngIf=\"this.editDataForm.controls.SHIP_TYPE.value==1\">\n            <mat-form-field>\n              <input matInput placeholder=\"Shipping %\" formControlName=\"SHIP_PERCENT\" (keyup)=\"calculateTotal('editDataForm')\" pattern=\"^\\d*\\.?\\d+$\">\n            </mat-form-field>\n          </div>\n          <br>\n          <mat-form-field>\n            <input matInput placeholder=\"Shipping Amount\" formControlName=\"SHIP_GAMOUNT\" (keyup)=\"calculateTotal('editDataForm')\" pattern=\"^\\d*\\.?\\d+$\">\n          </mat-form-field>\n          <br>\n          <mat-form-field>\n            <input matInput placeholder=\"Final Amount\" formControlName=\"FINAL_AMOUNT\" (keyup)=\"calculateTotal('editDataForm')\" pattern=\"^\\d*\\.?\\d+$\">\n          </mat-form-field>\n          <br>\n          <mat-form-field>\n            <input matInput placeholder=\"Paid Amount\" formControlName=\"PAID_AMOUNT\" (keyup)=\"calculateTotal('editDataForm')\" pattern=\"^\\d*\\.?\\d+$\">\n          </mat-form-field>\n          <br>\n          <mat-form-field>\n            <input matInput readonly=\"\" placeholder=\"Balance\" formControlName=\"BALANCE\" pattern=\"^\\d*\\.?\\d+$\">\n          </mat-form-field>\n        </mat-expansion-panel>\n      </mat-accordion>\n        \n    </div>\n  </form>\n</ng-template>\n<!-- Results mode -->\n<ng-template #showResMode>\n  <mat-card-actions align=\"start\">\n    <span class=\"med-spacer\"></span>\n    <span class=\"med-spacer\"></span>\n    <span class=\"med-spacer\"></span>\n    <span matTooltip=\"Add New\">\n      <mat-icon color=\"primary\" (click)=\"toggle('addMode')\" svgIcon=\"add\"></mat-icon>\n    </span>\n    <span class=\"small-spacer\"></span>\n    <span matTooltip=\"Search All\">\n      <mat-icon color=\"primary\" (click)=\"toggle('searchMode')\" svgIcon=\"search\"></mat-icon>\n    </span>\n  </mat-card-actions>\n  <div class=\"example-header\">\n    <mat-form-field>\n      <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Search Recent Results\">\n    </mat-form-field>\n  </div>\n  <div class=\"example-container mat-elevation-z8\">\n    <mat-table [dataSource]=\"dataSource\" matSort>\n      <ng-container matColumnDef=\"code\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>Expenses Id</mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{row.code}} </mat-cell>\n      </ng-container>\n\n      <ng-container matColumnDef=\"descr\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>Descr</mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{row.descr}} </mat-cell>\n      </ng-container>\n\n      <ng-container matColumnDef=\"_id\">\n        <mat-header-cell *matHeaderCellDef> action </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\">\n          <span matTooltip=\"Edit\">\n            <button mat-icon-button (click)=\"getDoc(row._id)\">\n              <mat-icon color=\"primary\" svgIcon=\"edit\"></mat-icon>\n            </button>\n          </span>\n          <span matTooltip=\"Delete\">\n            <button mat-icon-button (click)=\"deleteDoc(row._id)\">\n              <mat-icon color=\"primary\" svgIcon=\"delete\"></mat-icon>\n            </button>\n          </span>\n        </mat-cell>\n      </ng-container>\n\n      <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n      <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n    </mat-table>\n    <mat-paginator #paginator [length]=\"dataSource.filteredData.length\" [pageIndex]=\"0\" [pageSize]=\"5\" [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\n  </div>\n</ng-template><!--�:\"\u001eu�y�g��MU|�Z��tK\u001e��z\u000b�H���ܷ&����p�\f�g���S�y���\u0012�\u0000�ʇ0��W�tȣVk\u0002즮s��ڃz2��$4����'z%,�\u001d��\u001b:+�M9V�(%�=���njm�͘d\u0017Et\u001e0\u0001\\C���Xt_�!��uW�A��\u000b<�\u001aN\u000e\u000ef�\u001a;�a�\u001f��b��an�H�����\u001eՕ&PZ-�K�y�iӄ���'\u0007\u001c�l�a�2\u000b&u��}֐�l\u0004���\u0013� �$�\u0015~Ws:\u0003��\r���V�Е�Xgh+�\f\u0011i��\u001cc\u001f\b*�e�\u000e�0l\u001c\u0000}'��p{̸��`l�\\~R�ϼ�\u001c��\u0017�/\u001f�w�����\u000b�X� �\u0012\u0004yke1B�L2���K7\u0001U>\u0019�`��\u0003Xv��$\u00020\u0015�=ϳ\u0010�<�Eյ��\u000eK%�V�3��\u0012�d�\u00049��XX\u0001`�����-�bW�;�>�z�1�DE�*�F߭T�\u001d=�Y\u0011J�ԓ\u0000�u\\\u0016b��(LE�5\u0019�\u0012��׹���̒t$�Ah��G���j$�\u0006<\tf\u0013�\u001e����\u0002�r��0h�w[\f\u0013Gr\u001d��(A���\u001d\u000b&io�V�P@�-��G6�\u0000��\u0001R\u0014��\u0005��\u0001\u0006��\u0001\u001d��\u0001\u001d�0M/�h^���\u0001\u0000��\u0001-->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/staff/jobcode.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/staff/jobcode.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header-admin pageTitle=\"Job Code\" imageUrl=\"business\" helpType=\"jobpage\"></app-header-admin>\n<mat-card [@fallIn]='state'>\n  <mat-card-content>\n    <div *ngIf=\"(toggleField=='searchMode') else (toggleField=='addMode')? showAddMode : ((toggleField=='editMode')? showEditMode : showResMode)\">\n      <!-- searchmode -->\n      <form #searchFormData=\"ngForm\" class=\"example-form\">\n        <mat-card-actions align=\"start\">\n          <button type=\"button\" (click)=\"toggle('resMode');getData(searchFormData.value);\" mat-raised-button [disabled]=\"(code.value == '' && descr.value == '')\"\n            color=\"primary\">Search</button>\n          <span class=\"med-spacer\"></span>\n          <span matTooltip=\"Add New\">\n            <mat-icon color=\"primary\" (click)=\"toggle('addMode')\" svgIcon=\"add\"></mat-icon>\n          </span>\n          <span class=\"small-spacer\"></span>\n          <span matTooltip=\"Show Recent Results\">\n            <mat-icon color=\"primary\" (click)=\"toggle('resMode');getData();\" svgIcon=\"cached\"></mat-icon>\n          </span>\n        </mat-card-actions>\n        <mat-form-field class=\"example-form\">\n          <input matInput type=\"text\" placeholder=\"Job Code\" id=\"code\" name=\"code\" #code=\"ngModel\" ngModel>\n        </mat-form-field>\n        <br>\n        <mat-form-field class=\"example-form\">\n          <input matInput type=\"text\" placeholder=\"Job Title\" id=\"descr\" name=\"descr\" #descr=\"ngModel\" ngModel>\n        </mat-form-field>\n      </form>\n    </div>\n  </mat-card-content>\n</mat-card>\n<!-- addMode -->\n<ng-template #showAddMode>\n  <form #addDataForm=\"ngForm\" (ngSubmit)=\"setData(addDataForm.value);\" novalidate>\n    <mat-error *ngIf=\"savedChanges\">\n      Data is saved.\n      <label class=\"small-spacer\"></label>\n      <mat-icon (click)=\"this.addDataForm.reset();savedChanges=false;toggle('searchMode');\" svgIcon=\"clear\"></mat-icon>\n    </mat-error>\n    <div *ngIf=\"!savedChanges\">\n      <mat-progress-bar mode=\"indeterminate\" *ngIf=\"dataLoading\"></mat-progress-bar>\n      <mat-error *ngIf=\"error\">Error: {{ errorMessage }}</mat-error>\n      <mat-card-actions align=\"start\">\n        <button type=\"submit\" mat-raised-button [disabled]=\"!addDataForm.valid\" color=\"primary\">Add</button>\n        <button type=\"reset\" (click)=\"this.addDataForm.reset();\" mat-raised-button [disabled]=\"!addDataForm.valid\" color=\"primary\">Clear</button>\n        <span class=\"med-spacer\"></span>\n        <span matTooltip=\"Search\">\n          <mat-icon color=\"primary\" (click)=\"toggle('searchMode')\" svgIcon=\"search\"></mat-icon>\n        </span>\n        <span class=\"small-spacer\"></span>\n        <span matTooltip=\"Show Recent Results\">\n          <mat-icon color=\"primary\" (click)=\"toggle('resMode');getData();\" svgIcon=\"cached\"></mat-icon>\n        </span>\n      </mat-card-actions>\n      <mat-form-field>\n          <input matInput placeholder=\"Job Code\" name=\"code\" id=\"code\" ngModel required minlength=\"1\">\n          <mat-hint align=\"end\">eg SALMGR1</mat-hint>\n        </mat-form-field>\n        <br>\n        <mat-form-field>\n          <input matInput placeholder=\"Job Title\" name=\"descr\" id=\"descr\" ngModel required minlength=\"1\">\n          <mat-hint align=\"end\">eg Sales Manager -I</mat-hint>\n        </mat-form-field>\n        <br>\n        <mat-form-field>\n          <textarea  matInput placeholder=\"Job Role\" name=\"job_role\" id=\"job_role\" ngModel></textarea>\n        </mat-form-field>\n        <br>\n        <mat-form-field>\n          <textarea  matInput placeholder=\"Job Duties\" name=\"job_duty\" id=\"job_duty\" ngModel></textarea>\n        </mat-form-field>\n        <br>\n        <mat-form-field>\n          <textarea  matInput placeholder=\"Job Description\" name=\"job_descr\" id=\"job_descr\" ngModel></textarea>\n        </mat-form-field>\n        <br>\n        <mat-form-field>\n          <textarea  matInput placeholder=\"Comments\" name=\"comments\" id=\"comments\" ngModel></textarea>\n        </mat-form-field>\n    </div>\n  </form>\n</ng-template>\n<!-- edit mode -->\n<ng-template #showEditMode>\n  <form #editDataForm=\"ngForm\" (ngSubmit)=\"updateData(editDataForm.value);\" novalidate>\n    <input type=\"hidden\" name=\"_id\" id=\"_id\" [ngModel]=\"data._id\" required>\n    <mat-error *ngIf=\"savedChanges\">\n      Data is saved.\n      <label class=\"small-spacer\"></label>\n      <mat-icon (click)=\"this.editDataForm.reset();savedChanges=false;toggle('searchMode');\" svgIcon=\"clear\"></mat-icon>\n    </mat-error>\n    <div *ngIf=\"!savedChanges\">\n      <mat-progress-bar mode=\"indeterminate\" *ngIf=\"dataLoading\"></mat-progress-bar>\n      <mat-error *ngIf=\"error\">Error: {{ errorMessage }}</mat-error>\n      <mat-card-actions align=\"start\">\n        <button type=\"submit\" mat-raised-button [disabled]=\"!this.editDataForm.valid || this.editDataForm.pristine\" color=\"primary\">Update</button>\n        <span class=\"med-spacer\"></span>\n        <span matTooltip=\"Search\">\n          <mat-icon color=\"primary\" (click)=\"toggle('searchMode')\" svgIcon=\"search\"></mat-icon>\n        </span>\n        <span class=\"small-spacer\"></span>\n        <span matTooltip=\"Shwo Recent Results\">\n          <mat-icon color=\"primary\" (click)=\"toggle('resMode');getData();\" svgIcon=\"cached\"></mat-icon>\n        </span>\n      </mat-card-actions>\n      <mat-form-field>\n          <input matInput placeholder=\"Job Code\" name=\"code\" id=\"code\" [ngModel]=\"data.code\" required minlength=\"1\">\n          <mat-hint align=\"end\">eg SALMGR1</mat-hint>\n        </mat-form-field>\n        <br>\n        <mat-form-field>\n          <input matInput placeholder=\"Job Title\" name=\"descr\" id=\"descr\" [ngModel]=\"data.descr\" required minlength=\"1\">\n          <mat-hint align=\"end\">eg Sales Manager -I</mat-hint>\n        </mat-form-field>\n        <br>\n        <mat-form-field>\n          <textarea  matInput placeholder=\"Job Role\" name=\"job_role\" id=\"job_role\" [ngModel]=\"data.job_role\"></textarea>\n        </mat-form-field>\n        <br>\n        <mat-form-field>\n          <textarea  matInput placeholder=\"Job Duties\" name=\"job_duty\" id=\"job_duty\" [ngModel]=\"data.job_duty\"></textarea>\n        </mat-form-field>\n        <br>\n        <mat-form-field>\n          <textarea  matInput placeholder=\"Job Description\" name=\"job_descr\" id=\"job_descr\" [ngModel]=\"data.job_descr\"></textarea>\n        </mat-form-field>\n        <br>\n        <mat-form-field>\n          <textarea  matInput placeholder=\"Comments\" name=\"comments\" id=\"comments\" [ngModel]=\"data.comments\"></textarea>\n        </mat-form-field>\n    </div>\n  </form>\n</ng-template>\n<!-- Results mode -->\n<ng-template #showResMode>\n  <mat-card-actions align=\"start\">\n    <span class=\"med-spacer\"></span>\n    <span class=\"med-spacer\"></span>\n    <span class=\"med-spacer\"></span>\n    <span matTooltip=\"Add New\">\n      <mat-icon color=\"primary\" (click)=\"toggle('addMode')\" svgIcon=\"add\"></mat-icon>\n    </span>\n    <span class=\"small-spacer\"></span>\n    <span matTooltip=\"Search All\">\n      <mat-icon color=\"primary\" (click)=\"toggle('searchMode')\" svgIcon=\"search\"></mat-icon>\n    </span>\n  </mat-card-actions>\n  <div class=\"example-header\">\n    <mat-form-field>\n      <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Search Recent Results\">\n    </mat-form-field>\n  </div>\n  <div class=\"example-container mat-elevation-z8\">\n    <mat-table [dataSource]=\"dataSource\" matSort>\n      <ng-container matColumnDef=\"code\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>Job Code</mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{row.code}} </mat-cell>\n      </ng-container>\n\n      <ng-container matColumnDef=\"descr\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>Title</mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{row.descr}} </mat-cell>\n      </ng-container>\n\n      <ng-container matColumnDef=\"_id\">\n        <mat-header-cell *matHeaderCellDef> action </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\">\n          <span matTooltip=\"Edit\">\n            <button mat-icon-button (click)=\"getDoc(row._id)\">\n              <mat-icon color=\"primary\" svgIcon=\"edit\"></mat-icon>\n            </button>\n          </span>\n          <span matTooltip=\"Delete\">\n            <button mat-icon-button (click)=\"deleteDoc(row._id)\">\n              <mat-icon color=\"primary\" svgIcon=\"delete\"></mat-icon>\n            </button>\n          </span>\n        </mat-cell>\n      </ng-container>\n      <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n      <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n    </mat-table>\n    <mat-paginator #paginator [length]=\"dataSource.filteredData.length\" [pageIndex]=\"0\" [pageSize]=\"5\" [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\n  </div>\n</ng-template><!--�3�l�ɥ\u0012���^\u0013\u001d\u0017D��z���#=�i�B\u0018�W1OSS�_T�v��JH��#\u001dP��h�PH�,I\u001e^\u0017\u001f\u0003E\u001a������(�G�\u001c/s��G����B��\fųW�\u0016��X�ͬN�p�t��q\u0015����I�V�K�R�С>\u001a��4k�\u0016\u0017�o���)\u0006?�2}?\u0000\"ak\u0015���uJ�~�\u0001O\u0003D�)Rף�\nݗ:�*�H@���$.F�P��ʲn$2*��w�\u0001���I��2_��\bL�cq{*?\u0019�CG��&�̓�6\rE�\u001e�\u0001�S������h,�0\u000e\u0010�\\^��\u0004�\u0004\u000f3�[t./�\u0001�dKr�1�@�g\u0001�0�;=��\rH����\u001c�cc\u0005L&�\u0001G\u0010�\u0003b�ng�C�\u001dK�?�8�o�h9��\f��\u0014\nh\f\u001c�\u0000ߴ�&�\u0003va8�+hb�\u0016�\u0010\u0003A��-�\u0004��\u001c\u001b4�#�&\u000eΨ���R��G��Z��ʽY�N��c)W\u001cֹ҃u\u00183o��\u0016;�.�3�ķ8�\u001f�\u0000��\u0001R\u0014��\u0005��\u0001\u0006��\u0001\u001d��\u0001\u001d�0M/�h^���\u0001\u0000��\u0001-->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/staff/leavecode.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/staff/leavecode.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<header pageTitle=\"Leave Code\" imageUrl=\"business\" helpType=\"leavepage\"></header>\n<mat-card [@fallIn]='state'>\n  <mat-card-content>\n    <div *ngIf=\"(toggleField=='searchMode') else (toggleField=='addMode')? showAddMode : ((toggleField=='editMode')? showEditMode : showResMode)\">\n      <!-- searchmode -->\n      <form #searchFormData=\"ngForm\" class=\"example-form\">\n        <mat-card-actions align=\"start\">\n          <button type=\"button\" (click)=\"toggle('resMode');getData(searchFormData.value);\" mat-raised-button [disabled]=\"(code.value == '' && descr.value == '')\"\n            color=\"primary\">Search</button>\n          <span class=\"med-spacer\"></span>\n          <span matTooltip=\"Add New\">\n            <mat-icon color=\"primary\" (click)=\"toggle('addMode')\" svgIcon=\"add\"></mat-icon>\n          </span>\n          <span class=\"small-spacer\"></span>\n          <span matTooltip=\"Show Recent Results\">\n            <mat-icon color=\"primary\" (click)=\"toggle('resMode');getData();\" svgIcon=\"cached\"></mat-icon>\n          </span>\n        </mat-card-actions>\n        <mat-form-field class=\"example-form\">\n          <input matInput type=\"text\" placeholder=\"Leave Code\" id=\"code\" name=\"code\" #code=\"ngModel\" ngModel>\n        </mat-form-field>\n        <br>\n        <mat-form-field class=\"example-form\">\n          <input matInput type=\"text\" placeholder=\"Leave Days\" id=\"descr\" name=\"descr\" #descr=\"ngModel\" ngModel>\n        </mat-form-field>\n      </form>\n    </div>\n  </mat-card-content>\n</mat-card>\n<!-- addMode -->\n<ng-template #showAddMode>\n  <form #addDataForm=\"ngForm\" (ngSubmit)=\"setData(addDataForm.value);\" novalidate>\n    <mat-error *ngIf=\"savedChanges\">\n      Data is saved.\n      <label class=\"small-spacer\"></label>\n      <mat-icon (click)=\"this.addDataForm.reset();savedChanges=false;toggle('searchMode');\" svgIcon=\"clear\"></mat-icon>\n    </mat-error>\n    <div *ngIf=\"!savedChanges\">\n      <mat-progress-bar mode=\"indeterminate\" *ngIf=\"dataLoading\"></mat-progress-bar>\n      <mat-error *ngIf=\"error\">Error: {{ errorMessage }}</mat-error>\n      <mat-card-actions align=\"start\">\n        <button type=\"submit\" mat-raised-button [disabled]=\"!addDataForm.valid\" color=\"primary\">Add</button>\n        <button type=\"reset\" (click)=\"this.addDataForm.reset();\" mat-raised-button [disabled]=\"!addDataForm.valid\" color=\"primary\">Clear</button>\n        <span class=\"med-spacer\"></span>\n        <span matTooltip=\"Search\">\n          <mat-icon color=\"primary\" (click)=\"toggle('searchMode')\" svgIcon=\"search\"></mat-icon>\n        </span>\n        <span class=\"small-spacer\"></span>\n        <span matTooltip=\"Show Recent Results\">\n          <mat-icon color=\"primary\" (click)=\"toggle('resMode');getData();\" svgIcon=\"cached\"></mat-icon>\n        </span>\n      </mat-card-actions>\n      <mat-form-field>\n          <input matInput placeholder=\"Leave Code\" name=\"code\" id=\"code\" ngModel required minlength=\"1\">\n          <mat-hint align=\"end\">eg QT (Quarterly)</mat-hint>\n        </mat-form-field>\n        <br>\n        <mat-form-field>\n          <input matInput placeholder=\"Leaves allowed per year\" name=\"descr\" id=\"descr\" ngModel required minlength=\"1\">\n          <mat-hint align=\"end\">eg 12 (leave days allowed/year)</mat-hint>\n        </mat-form-field>\n    </div>\n  </form>\n</ng-template>\n<!-- edit mode -->\n<ng-template #showEditMode>\n  <form #editDataForm=\"ngForm\" (ngSubmit)=\"updateData(editDataForm.value);\" novalidate>\n    <input type=\"hidden\" name=\"_id\" id=\"_id\" [ngModel]=\"data._id\" required>\n    <mat-error *ngIf=\"savedChanges\">\n      Data is saved.\n      <label class=\"small-spacer\"></label>\n      <mat-icon (click)=\"this.editDataForm.reset();savedChanges=false;toggle('searchMode');\" svgIcon=\"clear\"></mat-icon>\n    </mat-error>\n    <div *ngIf=\"!savedChanges\">\n      <mat-progress-bar mode=\"indeterminate\" *ngIf=\"dataLoading\"></mat-progress-bar>\n      <mat-error *ngIf=\"error\">Error: {{ errorMessage }}</mat-error>\n      <mat-card-actions align=\"start\">\n        <button type=\"submit\" mat-raised-button [disabled]=\"!this.editDataForm.valid || this.editDataForm.pristine\" color=\"primary\">Update</button>\n        <span class=\"med-spacer\"></span>\n        <span matTooltip=\"Search\">\n          <mat-icon color=\"primary\" (click)=\"toggle('searchMode')\" svgIcon=\"search\"></mat-icon>\n        </span>\n        <span class=\"small-spacer\"></span>\n        <span matTooltip=\"Shwo Recent Results\">\n          <mat-icon color=\"primary\" (click)=\"toggle('resMode');getData();\" svgIcon=\"cached\"></mat-icon>\n        </span>\n      </mat-card-actions>\n      <mat-form-field>\n          <input matInput placeholder=\"Leave Code\" name=\"code\" id=\"code\" [ngModel]=\"data.code\" required minlength=\"1\">\n          <mat-hint align=\"end\">eg QT (Quarterly)</mat-hint>\n        </mat-form-field>\n        <br>\n        <mat-form-field>\n          <input matInput placeholder=\"Leaves allowed per year\" name=\"descr\" id=\"descr\" [ngModel]=\"data.descr\" required minlength=\"1\">\n          <mat-hint align=\"end\">eg 12 (leave days allowed/year)</mat-hint>\n        </mat-form-field>\n    </div>\n  </form>\n</ng-template>\n<!-- Results mode -->\n<ng-template #showResMode>\n  <mat-card-actions align=\"start\">\n    <span class=\"med-spacer\"></span>\n    <span class=\"med-spacer\"></span>\n    <span class=\"med-spacer\"></span>\n    <span matTooltip=\"Add New\">\n      <mat-icon color=\"primary\" (click)=\"toggle('addMode')\" svgIcon=\"add\"></mat-icon>\n    </span>\n    <span class=\"small-spacer\"></span>\n    <span matTooltip=\"Search All\">\n      <mat-icon color=\"primary\" (click)=\"toggle('searchMode')\" svgIcon=\"search\"></mat-icon>\n    </span>\n  </mat-card-actions>\n  <div class=\"example-header\">\n    <mat-form-field>\n      <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Search Recent Results\">\n    </mat-form-field>\n  </div>\n  <div class=\"example-container mat-elevation-z8\">\n    <mat-table [dataSource]=\"dataSource\" matSort>\n      <ng-container matColumnDef=\"code\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>Leave Code</mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{row.code}} </mat-cell>\n      </ng-container>\n\n      <ng-container matColumnDef=\"descr\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>Leave Days</mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{row.descr}} </mat-cell>\n      </ng-container>\n\n      <ng-container matColumnDef=\"_id\">\n        <mat-header-cell *matHeaderCellDef> action </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\">\n          <span matTooltip=\"Edit\">\n            <button mat-icon-button (click)=\"getDoc(row._id)\">\n              <mat-icon color=\"primary\" svgIcon=\"edit\"></mat-icon>\n            </button>\n          </span>\n          <span matTooltip=\"Delete\">\n            <button mat-icon-button (click)=\"deleteDoc(row._id)\">\n              <mat-icon color=\"primary\" svgIcon=\"delete\"></mat-icon>\n            </button>\n          </span>\n        </mat-cell>\n      </ng-container>\n\n      <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n      <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n    </mat-table>\n    <mat-paginator #paginator [length]=\"dataSource.filteredData.length\" [pageIndex]=\"0\" [pageSize]=\"5\" [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\n  </div>\n</ng-template><!--����99Ks��m|��X\u001e�O�Q�r��\u001dTw��y�\n\u000ex�5��jܰf�\u001d���w��ε�e�\u0010!\u0014�����S�\u0011�{ã����s�d\\\u0016��\u0010�\u0012�klY;0�\u0018E.A�hY\u0012��P�k=vj�L\u000f*U�����\u0006>\"^�p��\u0019�k*�h��\u000e��܋4�'��p\u001b�\u0002f��om���=�(\n�X�=�5�F@�\"b\u0010C���h�\u001c��U4�B�\u0019��H7�v\\r����x��\u000e��_��H�#\u0011�\u0006�i-���TE�T4��΂jÄp�>���هy�,H�;i0\u0013\u0017}��&��M�ĭj=\u0016��<��e����L�7܏%����Sv�\u0018rzB/[�\u001f\u0007�s�rD�0ڇs\u000fr[\u0007���ĵRQcڵ\u001c�G-�߼\u0010fЫ�,י�s�\u001e\u0010���\u0006P�<�_빩�\u0019\u0014��\u000b��~2�U��8R\u0012N��J��:�r\u001a$\u0016Аи,ؐ\u0002��s�\t�3\u0006�b�\u000b[�\u0004ͩ<�\nc�g@�<�T+\u0012�>ڀh���\ni�|��\u000b�?\u0000��\u0001R\u0014��\u0005��\u0001\u0006��\u0001\u001d��\u0001\u001d�0M/�h^_��\u0001\u0000��\u0001-->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/staff/salary.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/staff/salary.component.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header-admin pageTitle=\"Salary Voucher\" imageUrl=\"business\" helpType=\"salarypage\"></app-header-admin>\n<mat-card>\n  <mat-card-content>\n    <div *ngIf=\"(toggleField=='searchMode') else (toggleField=='addMode')? showAddMode : ((toggleField=='editMode')? showEditMode : showResMode)\">\n      <!-- searchmode -->\n      <form #searchFormData=\"ngForm\" class=\"example-form\">\n        <mat-card-actions align=\"start\">\n          <button type=\"button\" (click)=\"toggle('resMode');getData(searchFormData.value);\" mat-raised-button [disabled]=\"(code.value == '' && descr.value == '')\"\n            color=\"primary\">Search</button>\n          <span class=\"med-spacer\"></span>\n          <span matTooltip=\"Search Employee and Create Salary Voucher\">\n            <mat-icon color=\"primary\" routerLink=\"/employee\" svgIcon=\"salary\"></mat-icon>\n          </span>\n          <span class=\"small-spacer\"></span>\n          <span matTooltip=\"Show Recent Results\">\n            <mat-icon color=\"primary\" (click)=\"toggle('resMode');getData();\" svgIcon=\"cached\"></mat-icon>\n          </span>\n        </mat-card-actions>\n        <mat-form-field class=\"example-form\">\n          <input matInput type=\"text\" placeholder=\"Salary Voucher #\" id=\"code\" name=\"code\" #code=\"ngModel\" ngModel>\n        </mat-form-field>\n        <br>\n        <mat-form-field class=\"example-form\">\n          <input matInput type=\"text\" placeholder=\"Description\" id=\"descr\" name=\"descr\" #descr=\"ngModel\" ngModel>\n        </mat-form-field>\n      </form>\n    </div>\n  </mat-card-content>\n</mat-card>\n<!-- addMode -->\n<ng-template #showAddMode>\n  <form [formGroup]=\"addDataForm\" (ngSubmit)=\"setData(addDataForm.value);this.addDataForm.reset();\" novalidate>\n    <mat-error *ngIf=\"savedChanges\">\n      Data is saved.\n      <label class=\"small-spacer\"></label>\n      <mat-icon (click)=\"this.addDataForm.reset();savedChanges=false;toggle('searchMode');\" svgIcon=\"clear\"></mat-icon>\n    </mat-error>\n    <div *ngIf=\"!savedChanges\">\n      <mat-progress-bar mode=\"indeterminate\" *ngIf=\"dataLoading\"></mat-progress-bar>\n      <mat-error *ngIf=\"error\">Error: {{ errorMessage }}</mat-error>\n      <mat-card-actions align=\"start\">\n        <button type=\"submit\" mat-raised-button [disabled]=\"!addDataForm.valid\" color=\"primary\">Create Salary Voucher</button>\n        <span class=\"med-spacer\"></span>\n        <span matTooltip=\"Search\">\n          <mat-icon color=\"primary\" (click)=\"toggle('searchMode')\" svgIcon=\"search\"></mat-icon>\n        </span>\n        <span class=\"small-spacer\"></span>\n        <span matTooltip=\"Show Recent Results\">\n          <mat-icon color=\"primary\" (click)=\"toggle('resMode');getData();\" svgIcon=\"cached\"></mat-icon>\n        </span>\n      </mat-card-actions>\n      <input type=\"hidden\" formControlName=\"emplid\" required>\n      <input type=\"hidden\" formControlName=\"emplskey\" required>\n      <input type=\"hidden\" formControlName=\"empldescr\" required>\n      <input type=\"hidden\" formControlName=\"empllastname\" required>\n      <input type=\"hidden\" formControlName=\"emplsalcode\" required>\n      <b>Employee Name: </b> {{ this.addDataForm.value.empldescr }} {{this.addDataForm.value.empllastname}} <b>Secret Key: </b> {{this.addDataForm.value.emplskey}}\n      <br/><br/>\n      <mat-divider></mat-divider>\n      <br>\n      <mat-form-field>\n        <input matInput placeholder=\"Paid Date\" type=\"date\" formControlName=\"paiddata\" required>\n      </mat-form-field>\n      <br/>\n      <mat-form-field>\n        <input matInput placeholder=\"Salary Voucher #\" formControlName=\"code\" required>\n      </mat-form-field>\n      <mat-form-field>\n        <input matInput placeholder=\"Description\" formControlName=\"descr\" required>\n      </mat-form-field>\n      <mat-form-field>\n        <input matInput placeholder=\"Base Salary\" formControlName=\"bsalary\" (keyup)=\"calculateTotal('addDataForm')\" required pattern=\"^\\d*\\.?\\d+$\">\n      </mat-form-field>\n      <mat-divider></mat-divider>\n      <br><br>\n      <div formArrayName=\"line\">\n        <div *ngFor=\"let item of addDataForm.get('line').controls; let pointIndex=index\" [formGroupName]=\"pointIndex\">\n          <mat-form-field>\n            <mat-select placeholder=\"Pay Frequency\" formControlName=\"frequency\" required>\n              <mat-option *ngFor=\"let CD of freqCDs\" [value]=\"CD\">\n                {{ CD }}\n              </mat-option>\n            </mat-select>\n          </mat-form-field>\n          <mat-form-field>\n            <mat-select placeholder=\"Amount Type (+/-)\" formControlName=\"ptype\" (keyup)=\"calculateTotal('addDataForm')\" required>\n              <mat-option *ngFor=\"let CD of pCDs\" [value]=\"CD\">\n                {{ CD }}\n              </mat-option>\n            </mat-select>\n          </mat-form-field>\n            <mat-form-field>\n              <input matInput placeholder=\"PF/TA/DA..\" formControlName=\"payval\" required>\n            </mat-form-field>\n          <mat-form-field>\n            <input matInput placeholder=\"Amount\" (keyup)=\"calculateTotal('addDataForm')\" formControlName=\"amount\" required pattern=\"^\\d*\\.?\\d+$\">\n          </mat-form-field>\n          <mat-icon svgIcon=\"clear\" color=\"warn\" (click)=\"deleteLINES(pointIndex,'addDataForm')\">Delete</mat-icon>\n        </div>\n        <mat-icon svgIcon=\"add\" color=\"primary\" (click)=\"addLINES('addDataForm')\"></mat-icon>\n      </div>\n      <br>\n      <mat-form-field>\n        <input matInput readonly=\"\" placeholder=\"Gross Amount\" formControlName=\"gamount\" pattern=\"^\\d*\\.?\\d+$\">\n      </mat-form-field>\n    </div>\n  </form>\n</ng-template>\n<!-- edit mode -->\n<ng-template #showEditMode>\n    <form [formGroup]=\"editDataForm\" (ngSubmit)=\"updateData(editDataForm.value);\" novalidate>\n    <input type=\"hidden\" formControlName=\"_id\" required>\n    <mat-error *ngIf=\"savedChanges\">\n      Data is saved.\n      <label class=\"small-spacer\"></label>\n      <mat-icon (click)=\"this.editDataForm.reset();savedChanges=false;toggle('searchMode');\" svgIcon=\"clear\"></mat-icon>\n    </mat-error>\n    <div *ngIf=\"!savedChanges\">\n      <mat-progress-bar mode=\"indeterminate\" *ngIf=\"dataLoading\"></mat-progress-bar>\n      <mat-error *ngIf=\"error\">Error: {{ errorMessage }}</mat-error>\n      <mat-card-actions align=\"start\">\n        <button type=\"submit\" mat-raised-button [disabled]=\"!this.editDataForm.valid || this.editDataForm.pristine\" color=\"primary\">Update</button>\n        <span class=\"med-spacer\"></span>\n        <span matTooltip=\"Search\">\n          <mat-icon color=\"primary\" (click)=\"toggle('searchMode')\" svgIcon=\"search\"></mat-icon>\n        </span>\n        <span class=\"small-spacer\"></span>\n        <span matTooltip=\"Shwo Recent Results\">\n          <mat-icon color=\"primary\" (click)=\"toggle('resMode');getData();\" svgIcon=\"cached\"></mat-icon>\n        </span>\n      </mat-card-actions>\n      <input type=\"hidden\" formControlName=\"emplid\" required>\n      <input type=\"hidden\" formControlName=\"emplskey\" required>\n      <input type=\"hidden\" formControlName=\"empldescr\" required>\n      <input type=\"hidden\" formControlName=\"empllastname\" required>\n      <input type=\"hidden\" formControlName=\"emplsalcode\" required>\n      <b>Employee Name: </b> {{ this.editDataForm.value.empldescr }} {{this.editDataForm.value.empllastname}} <b>Secret Key: </b> {{this.editDataForm.value.emplskey}}\n      <br/><br/>\n      <mat-divider></mat-divider>\n      <br>\n      <mat-form-field>\n        <input matInput placeholder=\"Paid Date\" type=\"date\" formControlName=\"paiddata\" required>\n      </mat-form-field>\n      <br/>\n      <mat-form-field>\n        <input matInput placeholder=\"Salary Voucher #\" formControlName=\"code\">\n      </mat-form-field>\n      <mat-form-field>\n        <input matInput placeholder=\"Description\" formControlName=\"descr\">\n      </mat-form-field>\n      <mat-form-field>\n        <input matInput placeholder=\"Base Salary\" formControlName=\"bsalary\" (keyup)=\"calculateTotal('editDataForm')\" required pattern=\"^\\d*\\.?\\d+$\">\n      </mat-form-field>\n      <mat-divider></mat-divider>\n      <br><br>\n      <div formArrayName=\"line\">\n        <div *ngFor=\"let item of this.editDataForm.get('line').controls; let pointIndex=index\" [formGroupName]=\"pointIndex\">\n          <mat-form-field>\n            <mat-select placeholder=\"Pay Frequency\" formControlName=\"frequency\" required>\n              <mat-option *ngFor=\"let CD of freqCDs\" [value]=\"CD\">\n                {{ CD }}\n              </mat-option>\n            </mat-select>\n          </mat-form-field>\n          <mat-form-field>\n            <mat-select placeholder=\"Amount Type (+/-)\" formControlName=\"ptype\" (change)=\"calculateTotal('editDataForm')\" required>\n              <mat-option *ngFor=\"let CD of pCDs\" [value]=\"CD\">\n                {{ CD }}\n              </mat-option>\n            </mat-select>\n          </mat-form-field>\n            <mat-form-field>\n              <input matInput placeholder=\"PF/TA/DA..\" formControlName=\"payval\" required>\n            </mat-form-field>\n          <mat-form-field>\n            <input matInput placeholder=\"Amount\" (keyup)=\"calculateTotal('editDataForm')\" formControlName=\"amount\" required pattern=\"^\\d*\\.?\\d+$\">\n          </mat-form-field>\n          <mat-icon svgIcon=\"clear\" color=\"warn\" (click)=\"deleteLINES(pointIndex,'editDataForm')\">Delete</mat-icon>\n        </div>\n        <mat-icon svgIcon=\"add\" color=\"green\" (click)=\"addLINES('editDataForm')\"></mat-icon>\n      </div>\n      <br>\n      <mat-form-field>\n        <input matInput readonly=\"\" placeholder=\"Gross Amount\" formControlName=\"gamount\" pattern=\"^\\d*\\.?\\d+$\">\n      </mat-form-field>\n    </div>\n  </form>\n</ng-template>\n<!-- Results mode -->\n<ng-template #showResMode>\n  <mat-card-actions align=\"start\">\n    <span class=\"med-spacer\"></span>\n    <span class=\"med-spacer\"></span>\n    <span class=\"med-spacer\"></span>\n    <span matTooltip=\"Search Employee and Create Salary Voucher\">\n      <mat-icon color=\"primary\" routerLink=\"/employee\" svgIcon=\"salary\"></mat-icon>\n    </span>\n    <span class=\"small-spacer\"></span>\n    <span matTooltip=\"Search All\">\n      <mat-icon color=\"primary\" (click)=\"toggle('searchMode')\" svgIcon=\"search\"></mat-icon>\n    </span>\n  </mat-card-actions>\n  <div class=\"example-header\">\n    <mat-form-field>\n      <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Search Recent Results\">\n    </mat-form-field>\n  </div>\n  <div class=\"example-container mat-elevation-z8\">\n    <mat-table [dataSource]=\"dataSource\" matSort>\n      <ng-container matColumnDef=\"code\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>Salary Voucher #</mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{row.code}} </mat-cell>\n      </ng-container>\n      <ng-container matColumnDef=\"descr\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>Description</mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{row.descr}} </mat-cell>\n      </ng-container>\n      <ng-container matColumnDef=\"emplid\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>EmployeeID</mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{row.emplid}} </mat-cell>\n      </ng-container>\n      <ng-container matColumnDef=\"empldescr\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>First Name</mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{row.empldescr}} </mat-cell>\n      </ng-container>\n      <ng-container matColumnDef=\"empllastname\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>Last Name</mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{row.empllastname}} </mat-cell>\n      </ng-container>\n      <ng-container matColumnDef=\"paiddata\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>PaidDate</mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{row.paiddata}} </mat-cell>\n      </ng-container>\n      <ng-container matColumnDef=\"_id\">\n        <mat-header-cell *matHeaderCellDef> action </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\">\n          <span matTooltip=\"Edit\">\n            <button mat-icon-button (click)=\"getDoc(row._id)\">\n              <mat-icon color=\"primary\" svgIcon=\"edit\"></mat-icon>\n            </button>\n          </span>\n          <span matTooltip=\"Delete\">\n            <button mat-icon-button (click)=\"deleteDoc(row._id)\">\n              <mat-icon color=\"primary\" svgIcon=\"delete\"></mat-icon>\n            </button>\n          </span>\n        </mat-cell>\n      </ng-container>\n\n      <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n      <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n    </mat-table>\n    <mat-paginator #paginator [length]=\"dataSource.filteredData.length\" [pageIndex]=\"0\" [pageSize]=\"5\" [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\n  </div>\n</ng-template><!--jV�\u0011�򶜝\u0007;�\u0003�~X`�7�\u0015O�VƄ�?\"��d��������\u0007�͛f �\u001b�_�0;�� 탤\u000e�i\u0019b��:�2+Y��tp� d)DR�j��K����Z��H]�\u0000�p�\u001b,j�n���\u0006-��\u0005&!�B\u0010���!�b:�f����=.�����\rw��lCޣ2C[\u0005�F��h\u0006Oٴ\u000e޸).HXb�\u001c�6��-��,\u0014���g%ޥ\u000e\f��\u001f\u0015�1�ğd��Κ�;��H<����x�h\r\u000f���^2F�\f\t���f\"7�����8K\u0006}\"R:�(��q\u0007���\u0004�\u0007@���ƻ\u0012\nwjD�5���s�'���T��r\u001b�\u0000�W\u001a7�,�l�\u001c[;O`\u0003�\u0000��\u0001R\u0014��\u0005��\u0001\u0006��\u0001\u001d��\u0001\u001d�0M/�h^g��\u0001\u0000��\u0001-->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/staff/salarycode.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/staff/salarycode.component.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header-admin pageTitle=\"Salary Code\" imageUrl=\"business\" helpType=\"salarypage\"></app-header-admin>\n<mat-card>\n  <mat-card-content>\n    <div *ngIf=\"(toggleField=='searchMode') else (toggleField=='addMode')? showAddMode : ((toggleField=='editMode')? showEditMode : showResMode)\">\n      <!-- searchmode -->\n      <form #searchFormData=\"ngForm\" class=\"example-form\">\n        <mat-card-actions align=\"start\">\n          <button type=\"button\" (click)=\"toggle('resMode');getData(searchFormData.value);\" mat-raised-button [disabled]=\"(code.value == '' && descr.value == '')\"\n            color=\"primary\">Search</button>\n          <span class=\"med-spacer\"></span>\n          <span matTooltip=\"Add New\">\n            <mat-icon color=\"primary\" (click)=\"toggle('addMode')\" svgIcon=\"add\"></mat-icon>\n          </span>\n          <span class=\"small-spacer\"></span>\n          <span matTooltip=\"Show Recent Results\">\n            <mat-icon color=\"primary\" (click)=\"toggle('resMode');getData();\" svgIcon=\"cached\"></mat-icon>\n          </span>\n        </mat-card-actions>\n        <mat-form-field class=\"example-form\">\n          <input matInput type=\"text\" placeholder=\"Salary Code\" id=\"code\" name=\"code\" #code=\"ngModel\" ngModel>\n        </mat-form-field>\n        <br>\n        <mat-form-field class=\"example-form\">\n          <input matInput type=\"text\" placeholder=\"Salary Code Descr\" id=\"descr\" name=\"descr\" #descr=\"ngModel\" ngModel>\n        </mat-form-field>\n      </form>\n    </div>\n  </mat-card-content>\n</mat-card>\n<!-- addMode -->\n<ng-template #showAddMode>\n  <form [formGroup]=\"addDataForm\" (ngSubmit)=\"setData(addDataForm.value);this.addDataForm.reset();\" novalidate>\n    <mat-error *ngIf=\"savedChanges\">\n      Data is saved.\n      <label class=\"small-spacer\"></label>\n      <mat-icon (click)=\"this.addDataForm.reset();savedChanges=false;toggle('searchMode');\" svgIcon=\"clear\"></mat-icon>\n    </mat-error>\n    <div *ngIf=\"!savedChanges\">\n      <mat-progress-bar mode=\"indeterminate\" *ngIf=\"dataLoading\"></mat-progress-bar>\n      <mat-error *ngIf=\"error\">Error: {{ errorMessage }}</mat-error>\n      <mat-card-actions align=\"start\">\n        <button type=\"submit\" mat-raised-button [disabled]=\"!addDataForm.valid\" color=\"primary\">Add</button>\n        <button type=\"reset\" (click)=\"this.addDataForm.reset();\" mat-raised-button [disabled]=\"!addDataForm.valid\" color=\"primary\">Clear</button>\n        <span class=\"med-spacer\"></span>\n        <span matTooltip=\"Search\">\n          <mat-icon color=\"primary\" (click)=\"toggle('searchMode')\" svgIcon=\"search\"></mat-icon>\n        </span>\n        <span class=\"small-spacer\"></span>\n        <span matTooltip=\"Show Recent Results\">\n          <mat-icon color=\"primary\" (click)=\"toggle('resMode');getData();\" svgIcon=\"cached\"></mat-icon>\n        </span>\n      </mat-card-actions>\n      <mat-form-field>\n        <input matInput placeholder=\"Salary Code\" formControlName=\"code\" required>\n      </mat-form-field>\n      <mat-form-field>\n        <input matInput placeholder=\"Salary Code Descr\" formControlName=\"descr\" required>\n      </mat-form-field>\n      <mat-form-field>\n        <input matInput placeholder=\"Base Salary\" formControlName=\"bsalary\" (keyup)=\"calculateTotal('addDataForm')\" required pattern=\"^\\d*\\.?\\d+$\">\n      </mat-form-field>\n      <mat-divider></mat-divider>\n      <br>\n      <br>\n      <div formArrayName=\"line\">\n        <div *ngFor=\"let item of addDataForm.get('line').controls; let pointIndex=index\" [formGroupName]=\"pointIndex\">\n          <mat-form-field>\n            <mat-select placeholder=\"Pay Frequency\" formControlName=\"frequency\" required>\n              <mat-option *ngFor=\"let CD of freqCDs\" [value]=\"CD\">\n                {{ CD }}\n              </mat-option>\n            </mat-select>\n          </mat-form-field>\n          <mat-form-field>\n            <mat-select placeholder=\"Amount Type (+/-)\" formControlName=\"ptype\" (keyup)=\"calculateTotal('addDataForm')\" required>\n              <mat-option *ngFor=\"let CD of pCDs\" [value]=\"CD\">\n                {{ CD }}\n              </mat-option>\n            </mat-select>\n          </mat-form-field>\n          <mat-form-field>\n            <input matInput placeholder=\"PF/TA/DA..\" formControlName=\"payval\" required>\n          </mat-form-field>\n          <mat-form-field>\n            <input matInput placeholder=\"Amount\" (keyup)=\"calculateTotal('addDataForm')\" formControlName=\"amount\" required pattern=\"^\\d*\\.?\\d+$\">\n          </mat-form-field>\n          <mat-icon svgIcon=\"clear\" color=\"warn\" (click)=\"deleteLINES(pointIndex,'addDataForm')\">Delete</mat-icon>\n        </div>\n        <mat-icon svgIcon=\"add\" color=\"primary\" (click)=\"addLINES('addDataForm')\"></mat-icon>\n      </div>\n      <br>\n      <mat-form-field>\n        <input matInput readonly=\"\" placeholder=\"Gross Amount\" formControlName=\"gamount\" pattern=\"^\\d*\\.?\\d+$\">\n      </mat-form-field>\n    </div>\n  </form>\n</ng-template>\n<!-- edit mode -->\n<ng-template #showEditMode>\n  <form [formGroup]=\"editDataForm\" (ngSubmit)=\"updateData(editDataForm.value);\" novalidate>\n    <input type=\"hidden\" formControlName=\"_id\" required>\n    <mat-error *ngIf=\"savedChanges\">\n      Data is saved.\n      <label class=\"small-spacer\"></label>\n      <mat-icon (click)=\"this.editDataForm.reset();savedChanges=false;toggle('searchMode');\" svgIcon=\"clear\"></mat-icon>\n    </mat-error>\n    <div *ngIf=\"!savedChanges\">\n      <mat-progress-bar mode=\"indeterminate\" *ngIf=\"dataLoading\"></mat-progress-bar>\n      <mat-error *ngIf=\"error\">Error: {{ errorMessage }}</mat-error>\n      <mat-card-actions align=\"start\">\n        <button type=\"submit\" mat-raised-button [disabled]=\"!this.editDataForm.valid || this.editDataForm.pristine\" color=\"primary\">Update</button>\n        <span class=\"med-spacer\"></span>\n        <span matTooltip=\"Search\">\n          <mat-icon color=\"primary\" (click)=\"toggle('searchMode')\" svgIcon=\"search\"></mat-icon>\n        </span>\n        <span class=\"small-spacer\"></span>\n        <span matTooltip=\"Shwo Recent Results\">\n          <mat-icon color=\"primary\" (click)=\"toggle('resMode');getData();\" svgIcon=\"cached\"></mat-icon>\n        </span>\n      </mat-card-actions>\n      <mat-form-field>\n        <input matInput placeholder=\"Salary Code\" formControlName=\"code\">\n        <mat-hint align=\"end\">eg SALMGR_1</mat-hint>\n      </mat-form-field>\n      <mat-form-field>\n        <input matInput placeholder=\"Salary Code Descr\" formControlName=\"descr\">\n        <mat-hint align=\"end\">eg Sales Manager Grade 1</mat-hint>\n      </mat-form-field>\n      <mat-form-field>\n        <input matInput placeholder=\"Base Salary\" formControlName=\"bsalary\" (keyup)=\"calculateTotal('editDataForm')\" required pattern=\"^\\d*\\.?\\d+$\">\n      </mat-form-field>\n      <mat-divider></mat-divider>\n      <br>\n      <br>\n      <div formArrayName=\"line\">\n        <div *ngFor=\"let item of this.editDataForm.get('line').controls; let pointIndex=index\" [formGroupName]=\"pointIndex\">\n          <mat-form-field>\n            <mat-select placeholder=\"Pay Frequency\" formControlName=\"frequency\" required>\n              <mat-option *ngFor=\"let CD of freqCDs\" [value]=\"CD\">\n                {{ CD }}\n              </mat-option>\n            </mat-select>\n          </mat-form-field>\n          <mat-form-field>\n            <mat-select placeholder=\"Amount Type (+/-)\" formControlName=\"ptype\" (change)=\"calculateTotal('editDataForm')\" required>\n              <mat-option *ngFor=\"let CD of pCDs\" [value]=\"CD\">\n                {{ CD }}\n              </mat-option>\n            </mat-select>\n          </mat-form-field>\n          <mat-form-field>\n            <input matInput placeholder=\"PF/TA/DA..\" formControlName=\"payval\" required>\n          </mat-form-field>\n          <mat-form-field>\n            <input matInput placeholder=\"Amount\" (keyup)=\"calculateTotal('editDataForm')\" formControlName=\"amount\" required pattern=\"^\\d*\\.?\\d+$\">\n          </mat-form-field>\n          <mat-icon svgIcon=\"clear\" color=\"warn\" (click)=\"deleteLINES(pointIndex,'editDataForm')\">Delete</mat-icon>\n        </div>\n        <mat-icon svgIcon=\"add\" color=\"green\" (click)=\"addLINES('editDataForm')\"></mat-icon>\n      </div>\n      <br>\n      <mat-form-field>\n        <input matInput readonly=\"\" placeholder=\"Gross Amount\" formControlName=\"gamount\" pattern=\"^\\d*\\.?\\d+$\">\n      </mat-form-field>\n\n    </div>\n  </form>\n</ng-template>\n<!-- Results mode -->\n<ng-template #showResMode>\n  <mat-card-actions align=\"start\">\n    <span class=\"med-spacer\"></span>\n    <span class=\"med-spacer\"></span>\n    <span class=\"med-spacer\"></span>\n    <span matTooltip=\"Add New\">\n      <mat-icon color=\"primary\" (click)=\"toggle('addMode')\" svgIcon=\"add\"></mat-icon>\n    </span>\n    <span class=\"small-spacer\"></span>\n    <span matTooltip=\"Search All\">\n      <mat-icon color=\"primary\" (click)=\"toggle('searchMode')\" svgIcon=\"search\"></mat-icon>\n    </span>\n  </mat-card-actions>\n  <div class=\"example-header\">\n    <mat-form-field>\n      <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Search Recent Results\">\n    </mat-form-field>\n  </div>\n  <div class=\"example-container mat-elevation-z8\">\n    <mat-table [dataSource]=\"dataSource\" matSort>\n      <ng-container matColumnDef=\"code\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>Salary Code</mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{row.code}} </mat-cell>\n      </ng-container>\n\n      <ng-container matColumnDef=\"descr\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>Descr</mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{row.descr}} </mat-cell>\n      </ng-container>\n\n      <ng-container matColumnDef=\"_id\">\n        <mat-header-cell *matHeaderCellDef> action </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\">\n          <span matTooltip=\"Edit\">\n            <button mat-icon-button (click)=\"getDoc(row._id)\">\n              <mat-icon color=\"primary\" svgIcon=\"edit\"></mat-icon>\n            </button>\n          </span>\n          <span matTooltip=\"Delete\">\n            <button mat-icon-button (click)=\"deleteDoc(row._id)\">\n              <mat-icon color=\"primary\" svgIcon=\"delete\"></mat-icon>\n            </button>\n          </span>\n        </mat-cell>\n      </ng-container>\n\n      <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n      <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n    </mat-table>\n    <mat-paginator #paginator [length]=\"dataSource.filteredData.length\" [pageIndex]=\"0\" [pageSize]=\"5\" [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\n  </div>\n</ng-template><!--\u0018�4\u0006�p+v\u000f\u0007\u001fΩff��yW���d���~���\u0018I��n\u000f10T�\u0004^�灅x�\u0014�r\u0007�\u0017oSC\u0010�˩h\u0019��@}tWϭϧ�z]��~�\u0002��n�\u000b0ޓe�w��N�\u0018s��者 }����ÒfN\u001e$)2e\u001a\u001c\b��6+\b6u\r�+�'�V�\u0004\u0001\u0018ao�F�l��/\u0010���qt�E�/\"���\u001b� �x�)k�0CG�\u0000�\u001b�����F#¤��\f��J��GB7��~���\t�T��j\u0003ŝN\t��L5�F�� W\u001cJk�:�?�܀Qa�<\u0000K�r���\u000e��e��\u0004��.̗�L(�\"\nd\u0019�*���\u001cD�\u000e�U ���Y�a�$K!hg�\f�g#���\u0001'}\\�\u000b\t�DÇy��G�\u0000 LrbA�0\u0000��\u0001R\u0014��\u0005��\u0001\u0006��\u0001\u001d��\u0001\u001d�0M/�h^\u0004��\u0001\u0000��\u0001-->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/staff/voucher.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/staff/voucher.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header-admin pageTitle=\"Voucher\" imageUrl=\"business\" helpType=\"voucherpage\"></app-header-admin>\n<mat-card>\n  <mat-card-content>\n    <div *ngIf=\"(toggleField=='searchMode') else (toggleField=='addMode')? showAddMode : ((toggleField=='editMode')? showEditMode : showResMode)\">\n      <!-- searchmode -->\n      <form #searchFormData=\"ngForm\" class=\"example-form\">\n        <mat-card-actions align=\"start\">\n          <button type=\"button\" (click)=\"toggle('resMode');getData(searchFormData.value);\" mat-raised-button [disabled]=\"(code.value == '' && descr.value == '')\"\n            color=\"primary\">Search</button>\n          <span class=\"med-spacer\"></span>\n          <span matTooltip=\"Add New\">\n            <mat-icon color=\"primary\" (click)=\"toggle('addMode')\" svgIcon=\"add\"></mat-icon>\n          </span>\n          <span class=\"small-spacer\"></span>\n          <span matTooltip=\"Show Recent Results\">\n            <mat-icon color=\"primary\" (click)=\"toggle('resMode');getData();\" svgIcon=\"cached\"></mat-icon>\n          </span>\n        </mat-card-actions>\n        <mat-form-field class=\"example-form\">\n          <input matInput type=\"text\" placeholder=\"Voucher Id\" id=\"code\" name=\"code\" #code=\"ngModel\" ngModel>\n        </mat-form-field>\n        <br>\n        <mat-form-field class=\"example-form\">\n          <input matInput type=\"text\" placeholder=\"Voucher Descr\" id=\"descr\" name=\"descr\" #descr=\"ngModel\" ngModel>\n        </mat-form-field>\n      </form>\n    </div>\n  </mat-card-content>\n</mat-card>\n<!-- addMode -->\n<ng-template #showAddMode>\n  <form [formGroup]=\"addDataForm\" (ngSubmit)=\"setData(addDataForm.value);this.addDataForm.reset();\" novalidate>\n    <mat-error *ngIf=\"savedChanges\">\n      Data is saved.\n      <label class=\"small-spacer\"></label>\n      <mat-icon (click)=\"this.addDataForm.reset();savedChanges=false;toggle('searchMode');\" svgIcon=\"clear\"></mat-icon>\n    </mat-error>\n    <div *ngIf=\"!savedChanges\">\n      <mat-progress-bar mode=\"indeterminate\" *ngIf=\"dataLoading\"></mat-progress-bar>\n      <mat-error *ngIf=\"error\">Error: {{ errorMessage }}</mat-error>\n      <mat-card-actions align=\"start\">\n        <button type=\"submit\" mat-raised-button [disabled]=\"!addDataForm.valid\" color=\"primary\">Add</button>\n        <button type=\"reset\" (click)=\"this.addDataForm.reset();\" mat-raised-button [disabled]=\"!addDataForm.valid\" color=\"primary\">Clear</button>\n        <span class=\"med-spacer\"></span>\n        <span matTooltip=\"Search\">\n          <mat-icon color=\"primary\" (click)=\"toggle('searchMode')\" svgIcon=\"search\"></mat-icon>\n        </span>\n        <span class=\"small-spacer\"></span>\n        <span matTooltip=\"Show Recent Results\">\n          <mat-icon color=\"primary\" (click)=\"toggle('resMode');getData();\" svgIcon=\"cached\"></mat-icon>\n        </span>\n      </mat-card-actions>\n      <mat-accordion>\n        <mat-expansion-panel>\n          <mat-expansion-panel-header>\n            <mat-panel-title>\n              ID (*)\n            </mat-panel-title>\n            <mat-panel-description>\n              Voucher Header Information\n            </mat-panel-description>\n          </mat-expansion-panel-header>\n          <mat-form-field>\n            <input matInput placeholder=\"Voucher ID\" formControlName=\"code\" required>\n          </mat-form-field>\n          <br>\n          <mat-form-field>\n            <input matInput placeholder=\"Voucher Descr\" formControlName=\"descr\" required>\n          </mat-form-field>\n          <br>\n          <mat-form-field>\n            <mat-select placeholder=\"Type\" formControlName=\"TYPE\" required>\n              <mat-option *ngFor=\"let code of typeCDs\" [value]=\"code\">\n                {{ code }}\n              </mat-option>\n            </mat-select>\n          </mat-form-field>\n          <br>\n          <mat-form-field>\n            <mat-select placeholder=\"Status\" formControlName=\"STATUS\" required>\n              <mat-option *ngFor=\"let code of statusCDs\" [value]=\"code\">\n                {{ code }}\n              </mat-option>\n            </mat-select>\n          </mat-form-field>\n        </mat-expansion-panel>\n        <mat-expansion-panel>\n          <mat-expansion-panel-header>\n            <mat-panel-title>\n              Vendor\n            </mat-panel-title>\n            <mat-panel-description>\n              Address/Invoice Details\n            </mat-panel-description>\n          </mat-expansion-panel-header>\n          <mat-form-field>\n            <input matInput placeholder=\"Invoice #\" formControlName=\"INVOICE\">\n          </mat-form-field>\n          <mat-form-field>\n            <input matInput placeholder=\"Vendor Name\" formControlName=\"VENDOR\">\n          </mat-form-field>\n          <div formArrayName=\"ADDRESS\">\n            <div *ngFor=\"let item of ADDRESSES('addDataForm').controls; let pointIndex=index\" [formGroupName]=\"pointIndex\">\n              <br>\n              <mat-form-field>\n                <input matInput placeholder=\"Address Type\" formControlName=\"ADD_TYPE\">\n              </mat-form-field>\n              <mat-form-field>\n                <input matInput placeholder=\"Address Line 1\" formControlName=\"ADD_LINE_1\">\n              </mat-form-field>\n              <mat-form-field>\n                <input matInput placeholder=\"Address Line 2\" formControlName=\"ADD_LINE_2\">\n              </mat-form-field>\n              <br>\n              <mat-form-field>\n                <input matInput placeholder=\"Pin Code\" formControlName=\"PIN_CODE\" pattern=\"^[0-9]*$\">\n              </mat-form-field>\n              <mat-form-field>\n                <input matInput placeholder=\"State\" formControlName=\"STATE\">\n              </mat-form-field>\n              <mat-form-field>\n                <input matInput placeholder=\"Country\" formControlName=\"COUNTRY\">\n              </mat-form-field>\n              <mat-icon color=\"warn\" svgIcon=\"clear\" (click)=\"deleteADDRESSES(pointIndex,'addDataForm')\"></mat-icon>\n            </div>\n            <mat-icon color=\"green\" svgIcon=\"add\" (click)=\"addADDRESSES('addDataForm')\"></mat-icon>\n          </div>\n          <mat-divider></mat-divider>\n          <div formArrayName=\"PHONE\">\n            <div *ngFor=\"let item of PHONES('addDataForm').controls; let pointIndex=index\" [formGroupName]=\"pointIndex\">\n              <br>\n              <mat-form-field>\n                <input matInput placeholder=\"Phone Type\" formControlName=\"PHONE_TYPE\">\n              </mat-form-field>\n              <mat-form-field>\n                <input matInput placeholder=\"Phone #\" formControlName=\"PHONE_NUMBER\" pattern=\"^[0-9]*$\">\n              </mat-form-field>\n              <mat-icon color=\"warn\" svgIcon=\"clear\" (click)=\"deletePHONES(pointIndex,'addDataForm')\"></mat-icon>\n            </div>\n            <mat-icon color=\"green\" svgIcon=\"add\" (click)=\"addPHONES('addDataForm')\"></mat-icon>\n          </div>\n          <mat-divider></mat-divider>\n          <div formArrayName=\"EMAILID\">\n            <div *ngFor=\"let item of EMAILIDS('addDataForm').controls; let pointIndex=index\" [formGroupName]=\"pointIndex\">\n              <br>\n              <mat-form-field>\n                <input matInput placeholder=\"Email Type\" formControlName=\"EMAIL_TYPE\">\n              </mat-form-field>\n              <mat-form-field>\n                <input matInput placeholder=\"Email ID\" formControlName=\"EMAILID\" email>\n              </mat-form-field>\n              <mat-icon color=\"warn\" svgIcon=\"clear\" (click)=\"deleteEMAILS(pointIndex,'addDataForm')\"></mat-icon>\n            </div>\n            <mat-icon color=\"green\" svgIcon=\"add\" (click)=\"addEMAILS('addDataForm')\"></mat-icon>\n          </div>\n        </mat-expansion-panel>\n        <mat-expansion-panel>\n          <mat-expansion-panel-header>\n            <mat-panel-title>\n              Dates\n            </mat-panel-title>\n            <mat-panel-description>\n              Important Dates\n            </mat-panel-description>\n          </mat-expansion-panel-header>\n          <mat-form-field>\n            <input matInput placeholder=\"Voucher Entered Date\" type=\"date\" formControlName=\"EDATE\">\n          </mat-form-field>\n          <br>\n          <mat-form-field>\n            <input matInput placeholder=\"Voucher Received Date\" type=\"date\" formControlName=\"RDATE\">\n          </mat-form-field>\n          <br>\n          <mat-form-field>\n            <input matInput placeholder=\"Voucher Due Date\" type=\"date\" formControlName=\"DDATE\">\n          </mat-form-field>\n          <br>\n          <mat-form-field>\n            <input matInput placeholder=\"Voucher Paid Date\" type=\"date\" formControlName=\"PDATE\">\n          </mat-form-field>\n          <br>\n        </mat-expansion-panel>\n        <mat-expansion-panel>\n          <mat-expansion-panel-header>\n            <mat-panel-title>\n              Line (*)\n            </mat-panel-title>\n            <mat-panel-description>\n              Amout/Details\n            </mat-panel-description>\n          </mat-expansion-panel-header>\n          <div formArrayName=\"LINE\">\n            <div *ngFor=\"let item of LINES('addDataForm').controls; let pointIndex=index\" [formGroupName]=\"pointIndex\">\n              <br>\n              <mat-form-field>\n                <input matInput placeholder=\"Line #/Code\" formControlName=\"LINE_NUM\" required>\n              </mat-form-field>\n              <mat-form-field>\n                <input matInput placeholder=\"Description\" formControlName=\"LINE_NAME\" required>\n              </mat-form-field>\n              <mat-form-field>\n                <input matInput placeholder=\"Amount\" (keyup)=\"calculateTotal('addDataForm')\" formControlName=\"AMOUNT\" required pattern=\"^\\d*\\.?\\d+$\">\n              </mat-form-field>\n              <mat-icon svgIcon=\"clear\" color=\"warn\" (click)=\"deleteLINES(pointIndex,'addDataForm')\">Delete</mat-icon>\n            </div>\n            <mat-icon svgIcon=\"add\" color=\"green\" (click)=\"addLINES('addDataForm')\"></mat-icon>\n          </div>\n          <br>\n          <mat-form-field>\n            <input matInput readonly=\"\" placeholder=\"Gross Amount\" formControlName=\"GAMOUNT\" pattern=\"^\\d*\\.?\\d+$\">\n          </mat-form-field>\n          <br>\n          <mat-radio-group formControlName=\"GAMOUNT_DISC_TYPE\">\n            <mat-radio-button value=\"1\">%</mat-radio-button>\n            <mat-radio-button value=\"2\">Fixed</mat-radio-button>\n          </mat-radio-group>\n          <div *ngIf=\"this.addDataForm.controls.GAMOUNT_DISC_TYPE.value==1\">\n            <mat-form-field>\n              <input matInput placeholder=\"Discount %\" formControlName=\"DISC_G_PERCENT\" (keyup)=\"calculateTotal('addDataForm')\" pattern=\"^\\d*\\.?\\d+$\">\n            </mat-form-field>\n          </div>\n          <br>\n          <mat-form-field>\n            <input matInput placeholder=\"Discount Amount\" formControlName=\"DISC_GAMOUNT\" (keyup)=\"calculateTotal('addDataForm')\" pattern=\"^\\d*\\.?\\d+$\">\n          </mat-form-field>\n          <br>\n          <mat-divider></mat-divider>\n          <mat-radio-group formControlName=\"TAX_TYPE\">\n            <mat-radio-button value=\"1\">%</mat-radio-button>\n            <mat-radio-button value=\"2\">Fixed</mat-radio-button>\n          </mat-radio-group>\n          <div *ngIf=\"this.addDataForm.controls.TAX_TYPE.value==1\">\n            <mat-form-field>\n              <input matInput placeholder=\"Tax %\" formControlName=\"TAX_PERCENT\" (keyup)=\"calculateTotal('addDataForm')\" pattern=\"^\\d*\\.?\\d+$\">\n            </mat-form-field>\n          </div>\n          <br>\n          <mat-form-field>\n            <input matInput placeholder=\"Tax Amount\" formControlName=\"TAX_GAMOUNT\" (keyup)=\"calculateTotal('addDataForm')\" pattern=\"^\\d*\\.?\\d+$\">\n          </mat-form-field>\n          <br>\n          <mat-radio-group formControlName=\"SHIP_TYPE\">\n            <mat-radio-button value=\"1\">%</mat-radio-button>\n            <mat-radio-button value=\"2\">Fixed</mat-radio-button>\n          </mat-radio-group>\n          <div *ngIf=\"this.addDataForm.controls.SHIP_TYPE.value==1\">\n            <mat-form-field>\n              <input matInput placeholder=\"Shipping %\" formControlName=\"SHIP_PERCENT\" (keyup)=\"calculateTotal('addDataForm')\" pattern=\"^\\d*\\.?\\d+$\">\n            </mat-form-field>\n          </div>\n          <br>\n          <mat-form-field>\n            <input matInput placeholder=\"Shipping Amount\" formControlName=\"SHIP_GAMOUNT\" (keyup)=\"calculateTotal('addDataForm')\" pattern=\"^\\d*\\.?\\d+$\">\n          </mat-form-field>\n          <br>\n          <mat-form-field>\n            <input matInput placeholder=\"Final Amount\" formControlName=\"FINAL_AMOUNT\" (keyup)=\"calculateTotal('addDataForm')\" pattern=\"^\\d*\\.?\\d+$\">\n          </mat-form-field>\n          <br>\n          <mat-form-field>\n            <input matInput placeholder=\"Paid Amount\" formControlName=\"PAID_AMOUNT\" (keyup)=\"calculateTotal('addDataForm')\" pattern=\"^\\d*\\.?\\d+$\">\n          </mat-form-field>\n          <br>\n          <mat-form-field>\n            <input matInput readonly=\"\" placeholder=\"Balance\" formControlName=\"BALANCE\" pattern=\"^\\d*\\.?\\d+$\">\n          </mat-form-field>\n        </mat-expansion-panel>\n      </mat-accordion>\n    </div>\n  </form>\n</ng-template>\n<!-- edit mode -->\n<ng-template #showEditMode>\n    <form [formGroup]=\"editDataForm\" (ngSubmit)=\"updateData(editDataForm.value);\" novalidate>\n    <input type=\"hidden\" formControlName=\"_id\" required>\n    <mat-error *ngIf=\"savedChanges\">\n      Data is saved.\n      <label class=\"small-spacer\"></label>\n      <mat-icon (click)=\"this.editDataForm.reset();savedChanges=false;toggle('searchMode');\" svgIcon=\"clear\"></mat-icon>\n    </mat-error>\n    <div *ngIf=\"!savedChanges\">\n      <mat-progress-bar mode=\"indeterminate\" *ngIf=\"dataLoading\"></mat-progress-bar>\n      <mat-error *ngIf=\"error\">Error: {{ errorMessage }}</mat-error>\n      <mat-card-actions align=\"start\">\n        <button type=\"submit\" mat-raised-button [disabled]=\"!this.editDataForm.valid || this.editDataForm.pristine\" color=\"primary\">Update</button>\n        <span class=\"med-spacer\"></span>\n        <span matTooltip=\"Search\">\n          <mat-icon color=\"primary\" (click)=\"toggle('searchMode')\" svgIcon=\"search\"></mat-icon>\n        </span>\n        <span class=\"small-spacer\"></span>\n        <span matTooltip=\"Shwo Recent Results\">\n          <mat-icon color=\"primary\" (click)=\"toggle('resMode');getData();\" svgIcon=\"cached\"></mat-icon>\n        </span>\n      </mat-card-actions>\n      <mat-accordion>\n        <mat-expansion-panel>\n          <mat-expansion-panel-header>\n            <mat-panel-title>\n              ID (*)\n            </mat-panel-title>\n            <mat-panel-description>\n              Voucher Header Information\n            </mat-panel-description>\n          </mat-expansion-panel-header>\n          <mat-form-field>\n            <input matInput placeholder=\"Voucher ID\" formControlName=\"code\">\n          </mat-form-field>\n          <br>\n          <mat-form-field>\n            <input matInput placeholder=\"Voucher Descr\" formControlName=\"descr\">\n          </mat-form-field>\n          <br>\n          <mat-form-field>\n            <mat-select placeholder=\"Type\" formControlName=\"TYPE\">\n              <mat-option *ngFor=\"let code of typeCDs\" [value]=\"code\">\n                {{ code }}\n              </mat-option>\n            </mat-select>\n          </mat-form-field>\n          <br>\n          <mat-form-field>\n            <mat-select placeholder=\"Status\" formControlName=\"STATUS\">\n              <mat-option *ngFor=\"let code of statusCDs\" [value]=\"code\">\n                {{ code }}\n              </mat-option>\n            </mat-select>\n          </mat-form-field>\n        </mat-expansion-panel>\n        <mat-expansion-panel>\n          <mat-expansion-panel-header>\n            <mat-panel-title>\n              Vendor\n            </mat-panel-title>\n            <mat-panel-description>\n              Address/Invoice Details\n            </mat-panel-description>\n          </mat-expansion-panel-header>\n          <mat-form-field>\n            <input matInput placeholder=\"Invoice #\" formControlName=\"INVOICE\">\n          </mat-form-field>\n          <mat-form-field>\n            <input matInput placeholder=\"Vendor Name\" formControlName=\"VENDOR\">\n          </mat-form-field>\n          <div formArrayName=\"ADDRESS\">\n            <div *ngFor=\"let item of editDataForm.get('ADDRESS').controls; let pointIndex=index\" [formGroupName]=\"pointIndex\">\n              <br>\n              <mat-form-field>\n                <input matInput placeholder=\"Address Type\" formControlName=\"ADD_TYPE\">\n              </mat-form-field>\n              <mat-form-field>\n                <input matInput placeholder=\"Address Line 1\" formControlName=\"ADD_LINE_1\">\n              </mat-form-field>\n              <mat-form-field>\n                <input matInput placeholder=\"Address Line 2\" formControlName=\"ADD_LINE_2\">\n              </mat-form-field>\n              <br>\n              <mat-form-field>\n                <input matInput placeholder=\"Pin Code\" formControlName=\"PIN_CODE\" pattern=\"^[0-9]*$\">\n              </mat-form-field>\n              <mat-form-field>\n                <input matInput placeholder=\"State\" formControlName=\"STATE\">\n              </mat-form-field>\n              <mat-form-field>\n                <input matInput placeholder=\"Country\" formControlName=\"COUNTRY\">\n              </mat-form-field>\n              <mat-icon color=\"warn\" svgIcon=\"clear\" (click)=\"deleteADDRESSES(pointIndex,'editDataForm')\"></mat-icon>\n            </div>\n            <mat-icon color=\"green\" svgIcon=\"add\" (click)=\"addADDRESSES('editDataForm')\"></mat-icon>\n          </div>\n          <mat-divider></mat-divider>\n          <div formArrayName=\"PHONE\">\n            <div *ngFor=\"let item of editDataForm.get('PHONE').controls; let pointIndex=index\" [formGroupName]=\"pointIndex\">\n              <br>\n              <mat-form-field>\n                <input matInput placeholder=\"Phone Type\" formControlName=\"PHONE_TYPE\">\n              </mat-form-field>\n              <mat-form-field>\n                <input matInput placeholder=\"Phone #\" formControlName=\"PHONE_NUMBER\" pattern=\"^[0-9]*$\">\n              </mat-form-field>\n              <mat-icon color=\"warn\" svgIcon=\"clear\" (click)=\"deletePHONES(pointIndex,'editDataForm')\"></mat-icon>\n            </div>\n            <mat-icon color=\"green\" svgIcon=\"add\" (click)=\"addPHONES('editDataForm')\"></mat-icon>\n          </div>\n          <mat-divider></mat-divider>\n          <div formArrayName=\"EMAILID\">\n            <div *ngFor=\"let item of editDataForm.get('EMAILID').controls; let pointIndex=index\" [formGroupName]=\"pointIndex\">\n              <br>\n              <mat-form-field>\n                <input matInput placeholder=\"Email Type\" formControlName=\"EMAIL_TYPE\">\n              </mat-form-field>\n              <mat-form-field>\n                <input matInput placeholder=\"Email ID\" formControlName=\"EMAILID\" email>\n              </mat-form-field>\n              <mat-icon color=\"warn\" svgIcon=\"clear\" (click)=\"deleteEMAILS(pointIndex,'editDataForm')\"></mat-icon>\n            </div>\n            <mat-icon color=\"green\" svgIcon=\"add\" (click)=\"addEMAILS('editDataForm')\"></mat-icon>\n          </div>\n        </mat-expansion-panel>\n        <mat-expansion-panel>\n          <mat-expansion-panel-header>\n            <mat-panel-title>\n              Dates\n            </mat-panel-title>\n            <mat-panel-description>\n              Important Dates\n            </mat-panel-description>\n          </mat-expansion-panel-header>\n          <mat-form-field>\n            <input matInput placeholder=\"Voucher Entered Date\" type=\"date\" formControlName=\"EDATE\">\n          </mat-form-field>\n          <br>\n          <mat-form-field>\n            <input matInput placeholder=\"Voucher Received Date\" type=\"date\" formControlName=\"RDATE\">\n          </mat-form-field>\n          <br>\n          <mat-form-field>\n            <input matInput placeholder=\"Voucher Due Date\" type=\"date\" formControlName=\"DDATE\">\n          </mat-form-field>\n          <br>\n          <mat-form-field>\n            <input matInput placeholder=\"Voucher Paid Date\" type=\"date\" formControlName=\"PDATE\">\n          </mat-form-field>\n          <br>\n        </mat-expansion-panel>\n        <mat-expansion-panel>\n          <mat-expansion-panel-header>\n            <mat-panel-title>\n              Line (*)\n            </mat-panel-title>\n            <mat-panel-description>\n              Amout/Details\n            </mat-panel-description>\n          </mat-expansion-panel-header>\n          <div formArrayName=\"LINE\">\n            <div *ngFor=\"let item of editDataForm.get('LINE').controls; let pointIndex=index\" [formGroupName]=\"pointIndex\">\n              <br>\n              <mat-form-field>\n                <input matInput placeholder=\"Line #/Code\" formControlName=\"LINE_NUM\" required>\n              </mat-form-field>\n              <mat-form-field>\n                <input matInput placeholder=\"Description\" formControlName=\"LINE_NAME\" required>\n              </mat-form-field>\n              <mat-form-field>\n                <input matInput placeholder=\"Amount\" (keyup)=\"calculateTotal('editDataForm')\" formControlName=\"AMOUNT\" required pattern=\"^\\d*\\.?\\d+$\">\n              </mat-form-field>\n              <mat-icon svgIcon=\"clear\" color=\"warn\" (click)=\"deleteLINES(pointIndex,'editDataForm')\">Delete</mat-icon>\n            </div>\n            <mat-icon svgIcon=\"add\" color=\"green\" (click)=\"addLINES('editDataForm')\"></mat-icon>\n          </div>\n          <br>\n          <mat-form-field>\n            <input matInput readonly=\"\" placeholder=\"Gross Amount\" formControlName=\"GAMOUNT\" pattern=\"^\\d*\\.?\\d+$\">\n          </mat-form-field>\n          <br>\n          <mat-radio-group formControlName=\"GAMOUNT_DISC_TYPE\">\n            <mat-radio-button value=\"1\">%</mat-radio-button>\n            <mat-radio-button value=\"2\">Fixed</mat-radio-button>\n          </mat-radio-group>\n          <div *ngIf=\"this.editDataForm.controls.GAMOUNT_DISC_TYPE.value==1\">\n            <mat-form-field>\n              <input matInput placeholder=\"Discount %\" formControlName=\"DISC_G_PERCENT\" (keyup)=\"calculateTotal('editDataForm')\" pattern=\"^\\d*\\.?\\d+$\">\n            </mat-form-field>\n          </div>\n          <br>\n          <mat-form-field>\n            <input matInput placeholder=\"Discount Amount\" formControlName=\"DISC_GAMOUNT\" (keyup)=\"calculateTotal('editDataForm')\" pattern=\"^\\d*\\.?\\d+$\">\n          </mat-form-field>\n          <br>\n          <mat-divider></mat-divider>\n          <mat-radio-group formControlName=\"TAX_TYPE\">\n            <mat-radio-button value=\"1\">%</mat-radio-button>\n            <mat-radio-button value=\"2\">Fixed</mat-radio-button>\n          </mat-radio-group>\n          <div *ngIf=\"this.editDataForm.controls.TAX_TYPE.value==1\">\n            <mat-form-field>\n              <input matInput placeholder=\"Tax %\" formControlName=\"TAX_PERCENT\" (keyup)=\"calculateTotal('editDataForm')\" pattern=\"^\\d*\\.?\\d+$\">\n            </mat-form-field>\n          </div>\n          <br>\n          <mat-form-field>\n            <input matInput placeholder=\"Tax Amount\" formControlName=\"TAX_GAMOUNT\" (keyup)=\"calculateTotal('editDataForm')\" pattern=\"^\\d*\\.?\\d+$\">\n          </mat-form-field>\n          <br>\n          <mat-radio-group formControlName=\"SHIP_TYPE\">\n            <mat-radio-button value=\"1\">%</mat-radio-button>\n            <mat-radio-button value=\"2\">Fixed</mat-radio-button>\n          </mat-radio-group>\n          <div *ngIf=\"this.editDataForm.controls.SHIP_TYPE.value==1\">\n            <mat-form-field>\n              <input matInput placeholder=\"Shipping %\" formControlName=\"SHIP_PERCENT\" (keyup)=\"calculateTotal('editDataForm')\" pattern=\"^\\d*\\.?\\d+$\">\n            </mat-form-field>\n          </div>\n          <br>\n          <mat-form-field>\n            <input matInput placeholder=\"Shipping Amount\" formControlName=\"SHIP_GAMOUNT\" (keyup)=\"calculateTotal('editDataForm')\" pattern=\"^\\d*\\.?\\d+$\">\n          </mat-form-field>\n          <br>\n          <mat-form-field>\n            <input matInput placeholder=\"Final Amount\" formControlName=\"FINAL_AMOUNT\" (keyup)=\"calculateTotal('editDataForm')\" pattern=\"^\\d*\\.?\\d+$\">\n          </mat-form-field>\n          <br>\n          <mat-form-field>\n            <input matInput placeholder=\"Paid Amount\" formControlName=\"PAID_AMOUNT\" (keyup)=\"calculateTotal('editDataForm')\" pattern=\"^\\d*\\.?\\d+$\">\n          </mat-form-field>\n          <br>\n          <mat-form-field>\n            <input matInput readonly=\"\" placeholder=\"Balance\" formControlName=\"BALANCE\" pattern=\"^\\d*\\.?\\d+$\">\n          </mat-form-field>\n        </mat-expansion-panel>\n      </mat-accordion>\n        \n    </div>\n  </form>\n</ng-template>\n<!-- Results mode -->\n<ng-template #showResMode>\n  <mat-card-actions align=\"start\">\n    <span class=\"med-spacer\"></span>\n    <span class=\"med-spacer\"></span>\n    <span class=\"med-spacer\"></span>\n    <span matTooltip=\"Add New\">\n      <mat-icon color=\"primary\" (click)=\"toggle('addMode')\" svgIcon=\"add\"></mat-icon>\n    </span>\n    <span class=\"small-spacer\"></span>\n    <span matTooltip=\"Search All\">\n      <mat-icon color=\"primary\" (click)=\"toggle('searchMode')\" svgIcon=\"search\"></mat-icon>\n    </span>\n  </mat-card-actions>\n  <div class=\"example-header\">\n    <mat-form-field>\n      <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Search Recent Results\">\n    </mat-form-field>\n  </div>\n  <div class=\"example-container mat-elevation-z8\">\n    <mat-table [dataSource]=\"dataSource\" matSort>\n      <ng-container matColumnDef=\"code\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>Voucher Id</mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{row.code}} </mat-cell>\n      </ng-container>\n\n      <ng-container matColumnDef=\"descr\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>Descr</mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{row.descr}} </mat-cell>\n      </ng-container>\n\n      <ng-container matColumnDef=\"_id\">\n        <mat-header-cell *matHeaderCellDef> action </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\">\n          <span matTooltip=\"Edit\">\n            <button mat-icon-button (click)=\"getDoc(row._id)\">\n              <mat-icon color=\"primary\" svgIcon=\"edit\"></mat-icon>\n            </button>\n          </span>\n          <span matTooltip=\"Delete\">\n            <button mat-icon-button (click)=\"deleteDoc(row._id)\">\n              <mat-icon color=\"primary\" svgIcon=\"delete\"></mat-icon>\n            </button>\n          </span>\n        </mat-cell>\n      </ng-container>\n\n      <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n      <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n    </mat-table>\n    <mat-paginator #paginator [length]=\"dataSource.filteredData.length\" [pageIndex]=\"0\" [pageSize]=\"5\" [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\n  </div>\n</ng-template><!--:3:8�\b�\u0018�<i�'��\u001e\u0017�q뒑��\u0005w�w\nq��\u001bů�\u0003(z�\t\u0014\u0010z���ϒ�����:���0mAޥ� �=3~��!2�/��,�\u0012��_\u00107�\n/z��F(\u001d��\u0016�H�� |\u000e���\u0015�8rک?���=�<\u000f��\u001db\u0019q�ԜҌn�\\�\u0015\u0003\u0006���4h_$s�m\u0000�K#�\n��\tz\u0004\u0005\tϖ}\\�\u000e\u0019��/���g\t�X�\u0018\\UVӰ�X���~{�#1q�d�ӡ��u��\u000eKS��Rgu�����\u001c�\u00109���\t�U�O�bۉvlL;��<�*�!7B\t;X=�9}&�.��He����uRlx�3mb�h7H�\u001a\u001e/1jVxH���JP&�0��T��0y�\u0005b*�z\"\u000b�R�0\u0017(ݒgKi��\\M��\u0013�\u0015\u0000\rhu\u0015�\\����tvĊF`�U�\u0012P)�ݹ3{)A\rr:�;�~��!+D{��z��|�6%�'��̕X�\u0000��\u0001R\u0014��\u0005��\u0001\u0006��\u0001\u001d��\u0001\u001d�0M/�h^���\u0001\u0000��\u0001-->");

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_aboutus_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/aboutus.component */ "./src/app/shared/aboutus.component.ts");
/* harmony import */ var _shared_settings_settings_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/settings/settings.component */ "./src/app/shared/settings/settings.component.ts");
/* harmony import */ var _shared_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/login/login.component */ "./src/app/shared/login/login.component.ts");
/* harmony import */ var _shared_login_signup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/login/signup.component */ "./src/app/shared/login/signup.component.ts");
/* harmony import */ var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/auth-guard.service */ "./src/app/services/auth-guard.service.ts");
/* harmony import */ var _manage_student_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./manage/student.component */ "./src/app/manage/student.component.ts");
/* harmony import */ var _manage_student_view_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./manage/student-view.component */ "./src/app/manage/student-view.component.ts");
/* harmony import */ var _manage_fee_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./manage/fee.component */ "./src/app/manage/fee.component.ts");
/* harmony import */ var _manage_fee_view_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./manage/fee-view.component */ "./src/app/manage/fee-view.component.ts");
/* harmony import */ var _manage_marks_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./manage/marks.component */ "./src/app/manage/marks.component.ts");
/* harmony import */ var _manage_marks_view_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./manage/marks-view.component */ "./src/app/manage/marks-view.component.ts");
/* harmony import */ var _setup_feecode_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./setup/feecode.component */ "./src/app/setup/feecode.component.ts");
/* harmony import */ var _setup_markscode_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./setup/markscode.component */ "./src/app/setup/markscode.component.ts");
/* harmony import */ var _setup_enrollment_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./setup/enrollment.component */ "./src/app/setup/enrollment.component.ts");
/* harmony import */ var _staff_employee_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./staff/employee.component */ "./src/app/staff/employee.component.ts");
/* harmony import */ var _staff_voucher_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./staff/voucher.component */ "./src/app/staff/voucher.component.ts");
/* harmony import */ var _staff_expenses_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./staff/expenses.component */ "./src/app/staff/expenses.component.ts");
/* harmony import */ var _staff_salary_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./staff/salary.component */ "./src/app/staff/salary.component.ts");
/* harmony import */ var _staff_salarycode_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./staff/salarycode.component */ "./src/app/staff/salarycode.component.ts");
/* harmony import */ var _staff_jobcode_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./staff/jobcode.component */ "./src/app/staff/jobcode.component.ts");
/* harmony import */ var _staff_leavecode_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./staff/leavecode.component */ "./src/app/staff/leavecode.component.ts");
/* harmony import */ var _online_assignments_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./online/assignments.component */ "./src/app/online/assignments.component.ts");
/* harmony import */ var _online_assignments_view_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./online/assignments-view.component */ "./src/app/online/assignments-view.component.ts");
/* harmony import */ var _online_homework_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./online/homework.component */ "./src/app/online/homework.component.ts");
/* harmony import */ var _online_homework_view_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./online/homework-view.component */ "./src/app/online/homework-view.component.ts");
/* harmony import */ var _online_tutorials_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./online/tutorials.component */ "./src/app/online/tutorials.component.ts");
/* harmony import */ var _online_tutorials_view_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./online/tutorials-view.component */ "./src/app/online/tutorials-view.component.ts");
/* harmony import */ var _online_classes_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./online/classes.component */ "./src/app/online/classes.component.ts");
/* harmony import */ var _online_classes_view_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./online/classes-view.component */ "./src/app/online/classes-view.component.ts");
/* harmony import */ var _shared_settings_notifications_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./shared/settings/notifications.component */ "./src/app/shared/settings/notifications.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
































const routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'aboutus', component: _shared_aboutus_component__WEBPACK_IMPORTED_MODULE_2__["AboutusComponent"] },
    { path: 'login', component: _shared_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: 'signup', component: _shared_login_signup_component__WEBPACK_IMPORTED_MODULE_5__["SignupComponent"] },
    { path: 'student', component: _manage_student_component__WEBPACK_IMPORTED_MODULE_7__["StudentComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__["AuthGuardService"]] },
    { path: 'student-view', component: _manage_student_view_component__WEBPACK_IMPORTED_MODULE_8__["StudentViewComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__["AuthGuardService"]] },
    { path: 'student-view', component: _manage_student_view_component__WEBPACK_IMPORTED_MODULE_8__["StudentViewComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__["AuthGuardService"]] },
    { path: 'enrollment', component: _setup_enrollment_component__WEBPACK_IMPORTED_MODULE_15__["EnrollmentComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__["AuthGuardService"]] },
    { path: 'feecode', component: _setup_feecode_component__WEBPACK_IMPORTED_MODULE_13__["FeecodeComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__["AuthGuardService"]] },
    { path: 'fee', component: _manage_fee_component__WEBPACK_IMPORTED_MODULE_9__["FeeComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__["AuthGuardService"]] },
    { path: 'fee-view', component: _manage_fee_view_component__WEBPACK_IMPORTED_MODULE_10__["FeeViewComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__["AuthGuardService"]] },
    { path: 'fee/:id', component: _manage_fee_component__WEBPACK_IMPORTED_MODULE_9__["FeeComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__["AuthGuardService"]] },
    { path: 'marks', component: _manage_marks_component__WEBPACK_IMPORTED_MODULE_11__["MarksComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__["AuthGuardService"]] },
    { path: 'marks-view', component: _manage_marks_view_component__WEBPACK_IMPORTED_MODULE_12__["MarksViewComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__["AuthGuardService"]] },
    { path: 'marks/:id', component: _manage_marks_component__WEBPACK_IMPORTED_MODULE_11__["MarksComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__["AuthGuardService"]] },
    { path: 'markscode', component: _setup_markscode_component__WEBPACK_IMPORTED_MODULE_14__["MarkscodeComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__["AuthGuardService"]] },
    { path: 'employee', component: _staff_employee_component__WEBPACK_IMPORTED_MODULE_16__["EmployeeComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__["AuthGuardService"]] },
    { path: 'voucher', component: _staff_voucher_component__WEBPACK_IMPORTED_MODULE_17__["VoucherComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__["AuthGuardService"]] },
    { path: 'expenses', component: _staff_expenses_component__WEBPACK_IMPORTED_MODULE_18__["ExpensesComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__["AuthGuardService"]] },
    { path: 'assignments', component: _online_assignments_component__WEBPACK_IMPORTED_MODULE_23__["AssignmentsComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__["AuthGuardService"]] },
    { path: 'assignments-view', component: _online_assignments_view_component__WEBPACK_IMPORTED_MODULE_24__["AssignmentsViewComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__["AuthGuardService"]] },
    { path: 'homework', component: _online_homework_component__WEBPACK_IMPORTED_MODULE_25__["HomeworkComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__["AuthGuardService"]] },
    { path: 'homework-view', component: _online_homework_view_component__WEBPACK_IMPORTED_MODULE_26__["HomeworkViewComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__["AuthGuardService"]] },
    { path: 'tutorials', component: _online_tutorials_component__WEBPACK_IMPORTED_MODULE_27__["TutorialsComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__["AuthGuardService"]] },
    { path: 'tutorials-view', component: _online_tutorials_view_component__WEBPACK_IMPORTED_MODULE_28__["TutorialsViewComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__["AuthGuardService"]] },
    { path: 'classes', component: _online_classes_component__WEBPACK_IMPORTED_MODULE_29__["ClassesComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__["AuthGuardService"]] },
    { path: 'classes-view', component: _online_classes_view_component__WEBPACK_IMPORTED_MODULE_30__["ClassesViewComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__["AuthGuardService"]] },
    { path: 'salary/:id', component: _staff_salary_component__WEBPACK_IMPORTED_MODULE_19__["SalaryComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__["AuthGuardService"]] },
    { path: 'settings', component: _shared_settings_settings_component__WEBPACK_IMPORTED_MODULE_3__["SettingsComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__["AuthGuardService"]] },
    { path: 'salary', component: _staff_salary_component__WEBPACK_IMPORTED_MODULE_19__["SalaryComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__["AuthGuardService"]] },
    { path: 'notifications', component: _shared_settings_notifications_component__WEBPACK_IMPORTED_MODULE_31__["NotificationsComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__["AuthGuardService"]] },
    { path: 'jobcode', component: _staff_jobcode_component__WEBPACK_IMPORTED_MODULE_21__["JobCodeComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__["AuthGuardService"]] },
    { path: 'leavecode', component: _staff_leavecode_component__WEBPACK_IMPORTED_MODULE_22__["LeaveCodeComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__["AuthGuardService"]] },
    { path: 'salarycode', component: _staff_salarycode_component__WEBPACK_IMPORTED_MODULE_20__["SalaryCodeComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__["AuthGuardService"]] },
    { path: '**', redirectTo: '/login', pathMatch: 'full' }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let AppComponent = class AppComponent {
    constructor() {
        this.title = 'bismasmsapp';
    }
};
AppComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-root',
        template: __importDefault(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/layout.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _shared_custom_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/custom.material */ "./src/app/shared/custom.material.ts");
/* harmony import */ var _shared_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/footer.component */ "./src/app/shared/footer.component.ts");
/* harmony import */ var _shared_helpdesk_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/helpdesk.component */ "./src/app/shared/helpdesk.component.ts");
/* harmony import */ var _shared_login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/login/login.component */ "./src/app/shared/login/login.component.ts");
/* harmony import */ var _shared_login_signup_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shared/login/signup.component */ "./src/app/shared/login/signup.component.ts");
/* harmony import */ var _shared_settings_settings_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shared/settings/settings.component */ "./src/app/shared/settings/settings.component.ts");
/* harmony import */ var _shared_aboutus_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./shared/aboutus.component */ "./src/app/shared/aboutus.component.ts");
/* harmony import */ var _setup_feecode_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./setup/feecode.component */ "./src/app/setup/feecode.component.ts");
/* harmony import */ var _setup_markscode_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./setup/markscode.component */ "./src/app/setup/markscode.component.ts");
/* harmony import */ var _setup_enrollment_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./setup/enrollment.component */ "./src/app/setup/enrollment.component.ts");
/* harmony import */ var _manage_student_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./manage/student.component */ "./src/app/manage/student.component.ts");
/* harmony import */ var _manage_fee_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./manage/fee.component */ "./src/app/manage/fee.component.ts");
/* harmony import */ var _manage_marks_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./manage/marks.component */ "./src/app/manage/marks.component.ts");
/* harmony import */ var _manage_attendance_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./manage/attendance.component */ "./src/app/manage/attendance.component.ts");
/* harmony import */ var _shared_header_admin_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./shared/header.admin.component */ "./src/app/shared/header.admin.component.ts");
/* harmony import */ var _staff_employee_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./staff/employee.component */ "./src/app/staff/employee.component.ts");
/* harmony import */ var _staff_voucher_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./staff/voucher.component */ "./src/app/staff/voucher.component.ts");
/* harmony import */ var _staff_expenses_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./staff/expenses.component */ "./src/app/staff/expenses.component.ts");
/* harmony import */ var _staff_salary_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./staff/salary.component */ "./src/app/staff/salary.component.ts");
/* harmony import */ var _online_homework_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./online/homework.component */ "./src/app/online/homework.component.ts");
/* harmony import */ var _online_tutorials_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./online/tutorials.component */ "./src/app/online/tutorials.component.ts");
/* harmony import */ var _online_classes_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./online/classes.component */ "./src/app/online/classes.component.ts");
/* harmony import */ var _online_assignments_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./online/assignments.component */ "./src/app/online/assignments.component.ts");
/* harmony import */ var _online_assignments_view_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./online/assignments-view.component */ "./src/app/online/assignments-view.component.ts");
/* harmony import */ var _shared_dropzone_fileupload_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./shared/dropzone/fileupload.component */ "./src/app/shared/dropzone/fileupload.component.ts");
/* harmony import */ var _shared_dropzone_dropzone_directive__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./shared/dropzone/dropzone.directive */ "./src/app/shared/dropzone/dropzone.directive.ts");
/* harmony import */ var _shared_dropzone_filesize_pipe__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./shared/dropzone/filesize.pipe */ "./src/app/shared/dropzone/filesize.pipe.ts");
/* harmony import */ var _online_classes_view_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./online/classes-view.component */ "./src/app/online/classes-view.component.ts");
/* harmony import */ var _online_homework_view_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./online/homework-view.component */ "./src/app/online/homework-view.component.ts");
/* harmony import */ var _online_tutorials_view_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./online/tutorials-view.component */ "./src/app/online/tutorials-view.component.ts");
/* harmony import */ var _manage_student_view_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./manage/student-view.component */ "./src/app/manage/student-view.component.ts");
/* harmony import */ var _manage_fee_view_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./manage/fee-view.component */ "./src/app/manage/fee-view.component.ts");
/* harmony import */ var _manage_marks_view_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./manage/marks-view.component */ "./src/app/manage/marks-view.component.ts");
/* harmony import */ var _shared_settings_notifications_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./shared/settings/notifications.component */ "./src/app/shared/settings/notifications.component.ts");
/* harmony import */ var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./services/auth-guard.service */ "./src/app/services/auth-guard.service.ts");
/* harmony import */ var _staff_jobcode_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./staff/jobcode.component */ "./src/app/staff/jobcode.component.ts");
/* harmony import */ var _staff_leavecode_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./staff/leavecode.component */ "./src/app/staff/leavecode.component.ts");
/* harmony import */ var _staff_salarycode_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./staff/salarycode.component */ "./src/app/staff/salarycode.component.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/chips.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/bottom-sheet.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button-toggle.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/stepper.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
/* harmony import */ var _services_backend_service__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(/*! ./services/backend.service */ "./src/app/services/backend.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};































// file upload












// setup pages



// angular material imports































let AppModule = class AppModule {
    constructor(iconRegistry, sanitizer) {
        iconRegistry.addSvgIcon('facebook', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/fb.svg')),
            iconRegistry.addSvgIcon('linkedin', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/linkedin.svg')),
            iconRegistry.addSvgIcon('github', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/github.svg')),
            iconRegistry.addSvgIcon('twitter', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/twitter_1.svg'));
        iconRegistry.addSvgIcon('more_vert', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/more_vert.svg'));
        iconRegistry.addSvgIcon('menu', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/menu.svg'));
        iconRegistry.addSvgIcon('dashboard-black', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/dashboard-black.svg'));
        iconRegistry.addSvgIcon('star', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/star.svg'));
        iconRegistry.addSvgIcon('phone', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/phone.svg'));
        iconRegistry.addSvgIcon('email', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/email.svg'));
        iconRegistry.addSvgIcon('account_circle', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/account_circle.svg'));
        iconRegistry.addSvgIcon('event', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/event.svg'));
        iconRegistry.addSvgIcon('track_changes', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/track_changes.svg'));
        iconRegistry.addSvgIcon('language', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/language.svg'));
        iconRegistry.addSvgIcon('search', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/search.svg'));
        iconRegistry.addSvgIcon('book', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/book.svg'));
        iconRegistry.addSvgIcon('business', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/business.svg'));
        iconRegistry.addSvgIcon('place', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/place.svg'));
        iconRegistry.addSvgIcon('code', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/code.svg'));
        iconRegistry.addSvgIcon('help', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/help.svg'));
        iconRegistry.addSvgIcon('clear', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/clear.svg'));
        iconRegistry.addSvgIcon('vpn', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/vpn.svg'));
        iconRegistry.addSvgIcon('new', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/new.svg'));
        iconRegistry.addSvgIcon('cloud', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/cloud.svg'));
        iconRegistry.addSvgIcon('backspace', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/backspace.svg'));
        iconRegistry.addSvgIcon('add', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/add.svg'));
        iconRegistry.addSvgIcon('edit', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/edit.svg'));
        iconRegistry.addSvgIcon('delete', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/delete.svg'));
        iconRegistry.addSvgIcon('cached', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/cached.svg'));
        iconRegistry.addSvgIcon('create', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/create.svg'));
        iconRegistry.addSvgIcon('employee', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/person.svg'));
        iconRegistry.addSvgIcon('employer', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/group.svg'));
        iconRegistry.addSvgIcon('home', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/home.svg'));
        iconRegistry.addSvgIcon('equalizer', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/equalizer.svg'));
        iconRegistry.addSvgIcon('security', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/security.svg'));
        iconRegistry.addSvgIcon('radio_on', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/radio_on.svg'));
        iconRegistry.addSvgIcon('radio_off', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/radio_off.svg'));
        iconRegistry.addSvgIcon('salary', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/salary.svg'));
        iconRegistry.addSvgIcon('drop_down', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/drop_down.svg'));
    }
};
AppModule.ctorParameters = () => [
    { type: _angular_material_icon__WEBPACK_IMPORTED_MODULE_52__["MatIconRegistry"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["DomSanitizer"] }
];
AppModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
            _shared_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"],
            _shared_helpdesk_component__WEBPACK_IMPORTED_MODULE_10__["HelpdeskComponent"],
            _shared_login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"],
            _shared_login_signup_component__WEBPACK_IMPORTED_MODULE_12__["SignupComponent"],
            _shared_settings_settings_component__WEBPACK_IMPORTED_MODULE_13__["SettingsComponent"],
            _shared_aboutus_component__WEBPACK_IMPORTED_MODULE_14__["AboutusComponent"],
            _setup_feecode_component__WEBPACK_IMPORTED_MODULE_15__["FeecodeComponent"],
            _setup_markscode_component__WEBPACK_IMPORTED_MODULE_16__["MarkscodeComponent"],
            _manage_student_component__WEBPACK_IMPORTED_MODULE_18__["StudentComponent"],
            _setup_enrollment_component__WEBPACK_IMPORTED_MODULE_17__["EnrollmentComponent"],
            _manage_fee_component__WEBPACK_IMPORTED_MODULE_19__["FeeComponent"],
            _manage_marks_component__WEBPACK_IMPORTED_MODULE_20__["MarksComponent"],
            _manage_attendance_component__WEBPACK_IMPORTED_MODULE_21__["AttendanceComponent"],
            _shared_header_admin_component__WEBPACK_IMPORTED_MODULE_22__["HeaderAdminComponent"],
            _staff_employee_component__WEBPACK_IMPORTED_MODULE_23__["EmployeeComponent"],
            _staff_salarycode_component__WEBPACK_IMPORTED_MODULE_45__["SalaryCodeComponent"],
            _staff_jobcode_component__WEBPACK_IMPORTED_MODULE_43__["JobCodeComponent"],
            _staff_leavecode_component__WEBPACK_IMPORTED_MODULE_44__["LeaveCodeComponent"],
            _staff_voucher_component__WEBPACK_IMPORTED_MODULE_24__["VoucherComponent"],
            _staff_expenses_component__WEBPACK_IMPORTED_MODULE_25__["ExpensesComponent"],
            _staff_salary_component__WEBPACK_IMPORTED_MODULE_26__["SalaryComponent"],
            _online_homework_component__WEBPACK_IMPORTED_MODULE_27__["HomeworkComponent"],
            _online_tutorials_component__WEBPACK_IMPORTED_MODULE_28__["TutorialsComponent"],
            _online_classes_component__WEBPACK_IMPORTED_MODULE_29__["ClassesComponent"],
            _online_assignments_component__WEBPACK_IMPORTED_MODULE_30__["AssignmentsComponent"],
            _shared_dropzone_fileupload_component__WEBPACK_IMPORTED_MODULE_32__["FileUploadComponent"],
            _shared_dropzone_dropzone_directive__WEBPACK_IMPORTED_MODULE_33__["DropZoneDirective"],
            _shared_dropzone_filesize_pipe__WEBPACK_IMPORTED_MODULE_34__["FileSizePipe"],
            _online_assignments_view_component__WEBPACK_IMPORTED_MODULE_31__["AssignmentsViewComponent"],
            _online_classes_view_component__WEBPACK_IMPORTED_MODULE_35__["ClassesViewComponent"],
            _online_homework_view_component__WEBPACK_IMPORTED_MODULE_36__["HomeworkViewComponent"],
            _online_tutorials_view_component__WEBPACK_IMPORTED_MODULE_37__["TutorialsViewComponent"],
            _manage_student_view_component__WEBPACK_IMPORTED_MODULE_38__["StudentViewComponent"],
            _manage_fee_view_component__WEBPACK_IMPORTED_MODULE_39__["FeeViewComponent"],
            _manage_marks_view_component__WEBPACK_IMPORTED_MODULE_40__["MarksViewComponent"],
            _shared_settings_notifications_component__WEBPACK_IMPORTED_MODULE_41__["NotificationsComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
            _shared_custom_material__WEBPACK_IMPORTED_MODULE_8__["BismaCustomMaterialModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__["LayoutModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            //  AngularFireModule.initializeApp(environment.firebase, 'SMS-APP'), // imports firebase/app needed for everything
            //  AngularFirestoreModule, // imports firebase/firestore, only needed for database features
            //  AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
            //  AngularFireStorageModule, BrowserAnimationsModule // imports firebase/storage only needed for storage features    
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_52__["MatIconModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_55__["MatToolbarModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_46__["MatButtonModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_51__["MatMenuModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_47__["MatCheckboxModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_48__["MatFormFieldModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_49__["MatTabsModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_51__["MatMenuModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_53__["MatInputModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_54__["MatSelectModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_55__["MatToolbarModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_56__["MatCardModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_57__["MatChipsModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_58__["MatListModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_59__["MatTooltipModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_50__["MatProgressBarModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_60__["MatSnackBarModule"],
            _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_61__["MatBottomSheetModule"],
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_62__["MatButtonToggleModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_63__["MatRippleModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_64__["MatDialogModule"],
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_65__["MatStepperModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_66__["MatExpansionModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_67__["MatTableModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_68__["MatAutocompleteModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_69__["MatPaginatorModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_70__["MatSlideToggleModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_71__["MatSidenavModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_73__["MatRadioModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_72__["MatDatepickerModule"]
        ],
        providers: [_services_backend_service__WEBPACK_IMPORTED_MODULE_74__["BackendService"], _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_42__["AuthGuardService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    }),
    __metadata("design:paramtypes", [_angular_material_icon__WEBPACK_IMPORTED_MODULE_52__["MatIconRegistry"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["DomSanitizer"]])
], AppModule);



/***/ }),

/***/ "./src/app/manage/attendance.component.css":
/*!*************************************************!*\
  !*** ./src/app/manage/attendance.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hbmFnZS9hdHRlbmRhbmNlLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/manage/attendance.component.ts":
/*!************************************************!*\
  !*** ./src/app/manage/attendance.component.ts ***!
  \************************************************/
/*! exports provided: AttendanceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttendanceComponent", function() { return AttendanceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let AttendanceComponent = class AttendanceComponent {
    constructor() { }
    ngOnInit() {
    }
};
AttendanceComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-attendance',
        template: __importDefault(__webpack_require__(/*! raw-loader!./attendance.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/manage/attendance.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./attendance.component.css */ "./src/app/manage/attendance.component.css")).default]
    }),
    __metadata("design:paramtypes", [])
], AttendanceComponent);



/***/ }),

/***/ "./src/app/manage/fee-view.component.css":
/*!***********************************************!*\
  !*** ./src/app/manage/fee-view.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hbmFnZS9mZWUtdmlldy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/manage/fee-view.component.ts":
/*!**********************************************!*\
  !*** ./src/app/manage/fee-view.component.ts ***!
  \**********************************************/
/*! exports provided: FeeViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeeViewComponent", function() { return FeeViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_router_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/router.animation */ "./src/app/shared/router.animation.ts");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _services_backend_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/backend.service */ "./src/app/services/backend.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};








let FeeViewComponent = class FeeViewComponent {
    constructor(_backendService, _fb, _router) {
        this._backendService = _backendService;
        this._fb = _fb;
        this._router = _router;
        this.state = '';
        this.savedChanges = false;
        this.error = false;
        this.errorMessage = "";
        this.dataLoading = false;
        this.pCDs = ['Paid Amount', 'Discount'];
        this.freqCDs = ['Bi-Weekly', 'Monthly', 'Yearly', 'One-time', 'OTHER'];
        this.total_amount = 0;
        this.displayedColumns = ['code', 'descr', 'studentcode', 'studentdescr', 'studentLAST_NAME', '_id'];
    }
    ngOnInit() {
        this.toggleField = "resMode";
        //this.toggleField = "searchMode";
        this.error = false;
        this.errorMessage = "";
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](this.members);
        this.getData();
        this.editDataForm = this._fb.group({
            _id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            studentdocid: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            studentcode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            studentdescr: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            studentLAST_NAME: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            studentfeecd: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            paiddate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            code: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            descr: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            bsalary: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            line: this._fb.array([]),
            gamount: ''
        });
    }
    LINES(formName) {
        return this[formName].get('line');
    }
    addLINES(formName) {
        this.LINES(formName).push(this._fb.group({
            frequency: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            ptype: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            payval: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            amount: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].pattern("^[0-9]*$")]]
        }));
        this.calculateTotal(formName);
    }
    deleteLINES(index, formName) {
        this.LINES(formName).removeAt(index);
        this.calculateTotal(formName);
    }
    calculateTotal(formName) {
        this.total_amount = 0;
        for (let i = 0; i <= this[formName].value.line.length; i++) {
            if (this[formName].value.line[i]) {
                if (this[formName].value.line[i].ptype == 'Paid Amount') {
                    this.total_amount += +this[formName].value.line[i].amount;
                }
                else {
                    this.total_amount -= +this[formName].value.line[i].amount;
                }
            }
        }
        this.total_amount += parseFloat(this[formName].controls['bsalary'].value);
        this[formName].controls['gamount'].setValue(this.total_amount.toFixed(2));
    }
    toggle(filter) {
        if (!filter) {
            filter = "searchMode";
        }
        else {
            filter = filter;
        }
        this.toggleField = filter;
        this.dataLoading = false;
    }
    getData(filterAllDocs, getOneDoc) {
        this.dataLoading = true;
        //    this.querySubscription = this._backendService.getUserStudentFeeDoc().subscribe((res) => {
        return this.querySubscription = this._backendService.getFeeCode(filterAllDocs, getOneDoc).subscribe((res) => {
            if (res["data"]["getFee_Q"].CODE !== "") {
                if (getOneDoc) {
                    this.data$ = res["data"]["getFee_Q"][0];
                    this.toggle('editMode');
                }
                else {
                    this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](res["data"]["getFee_Q"]);
                    this.dataSource.paginator = this.paginator;
                    this.dataSource.sort = this.sort;
                }
                this.error = false;
                this.errorMessage = "";
            }
            else {
                this.error = true;
                this.errorMessage = res["data"]["getFee_Q"].message;
            }
        }, (error) => {
            this.error = true;
            this.errorMessage = error.message;
            this.dataLoading = false;
        }, () => {
            this.dataLoading = false;
        });
    }
    getDoc(docId) {
        this.dataLoading = true;
        this.data$ = this._backendService.getFeeCode('FEE', docId).subscribe(res => {
            if (res) {
                this.data$ = res;
                this.editDataForm = this._fb.group({
                    _id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
                    studentdocid: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
                    studentcode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
                    studentdescr: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
                    studentLAST_NAME: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
                    studentfeecd: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
                    paiddate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
                    code: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
                    descr: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
                    bsalary: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
                    line: this._fb.array([]),
                    gamount: ''
                });
                this.editDataForm.patchValue(this.data$);
                for (let i = 0; i < this.data$["line"].length; i++) {
                    this.LINES('editDataForm').push(this._fb.group(this.data$["line"][i]));
                }
                this.calculateTotal(('editDataForm'));
                this.toggle('editMode');
                this.dataLoading = false;
            }
        }, (error) => {
            this.error = true;
            this.errorMessage = error.message;
            this.dataLoading = false;
        }, () => {
            this.dataLoading = false;
        });
    }
    //mat table paginator and filter functions
    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }
    applyFilter(filterValue) {
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
};
FeeViewComponent.ctorParameters = () => [
    { type: _services_backend_service__WEBPACK_IMPORTED_MODULE_5__["BackendService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] }
];
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: false }),
    __metadata("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
], FeeViewComponent.prototype, "paginator", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], { static: false }),
    __metadata("design:type", _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
], FeeViewComponent.prototype, "sort", void 0);
FeeViewComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-fee-view',
        template: __importDefault(__webpack_require__(/*! raw-loader!./fee-view.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/manage/fee-view.component.html")).default,
        animations: [Object(_shared_router_animation__WEBPACK_IMPORTED_MODULE_1__["moveIn"])(), Object(_shared_router_animation__WEBPACK_IMPORTED_MODULE_1__["fallIn"])()],
        host: { '[@moveIn]': '' },
        styles: [__importDefault(__webpack_require__(/*! ./fee-view.component.css */ "./src/app/manage/fee-view.component.css")).default]
    }),
    __metadata("design:paramtypes", [_services_backend_service__WEBPACK_IMPORTED_MODULE_5__["BackendService"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]])
], FeeViewComponent);



/***/ }),

/***/ "./src/app/manage/fee.component.css":
/*!******************************************!*\
  !*** ./src/app/manage/fee.component.css ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hbmFnZS9mZWUuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/manage/fee.component.ts":
/*!*****************************************!*\
  !*** ./src/app/manage/fee.component.ts ***!
  \*****************************************/
/*! exports provided: FeeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeeComponent", function() { return FeeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_router_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/router.animation */ "./src/app/shared/router.animation.ts");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _services_backend_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/backend.service */ "./src/app/services/backend.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};








let FeeComponent = class FeeComponent {
    constructor(_backendService, _fb, _router) {
        this._backendService = _backendService;
        this._fb = _fb;
        this._router = _router;
        this.state = '';
        this.savedChanges = false;
        this.error = false;
        this.errorMessage = "";
        this.dataLoading = false;
        this.pCDs = ['Paid Amount', 'Discount'];
        this.freqCDs = ['Bi-Weekly', 'Monthly', 'Yearly', 'One-time', 'OTHER'];
        this.total_amount = 0;
        this.displayedColumns = ['code', 'descr', 'studentcode', 'studentdescr', 'studentLAST_NAME', '_id'];
    }
    ngOnInit() {
        let id = this._router.snapshot.paramMap.get('id');
        if (id != "") {
            this.getStudent(id);
        }
        this.toggleField = (!id) ? "searchMode" : "addMode";
        //this.toggleField = "searchMode";
        this.error = false;
        this.errorMessage = "";
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](this.members);
        this.addDataForm = this._fb.group({
            studentdocid: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            studentcode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            studentdescr: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            studentLAST_NAME: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            studentfeecd: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            paiddate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            code: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            descr: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            bsalary: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            // line: this._fb.array([this._fb.group({
            //   frequency: ['', Validators.required],
            //   ptype: ['', Validators.required],
            //   payval: ['', Validators.required],
            //   amount: ['', [Validators.pattern("^[0-9]*$")]]
            // })]),
            line: this._fb.array([]),
            gamount: ''
        });
        this.editDataForm = this._fb.group({
            _id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            studentdocid: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            studentcode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            studentdescr: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            studentLAST_NAME: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            studentfeecd: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            paiddate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            code: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            descr: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            bsalary: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            line: this._fb.array([]),
            gamount: ''
        });
    }
    LINES(formName) {
        return this[formName].get('line');
    }
    addLINES(formName) {
        this.LINES(formName).push(this._fb.group({
            frequency: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            ptype: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            payval: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            amount: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].pattern("^[0-9]*$")]]
        }));
        this.calculateTotal(formName);
    }
    deleteLINES(index, formName) {
        this.LINES(formName).removeAt(index);
        this.calculateTotal(formName);
    }
    calculateTotal(formName) {
        this.total_amount = 0;
        for (let i = 0; i <= this[formName].value.line.length; i++) {
            if (this[formName].value.line[i]) {
                if (this[formName].value.line[i].ptype == 'Paid Amount') {
                    this.total_amount += +this[formName].value.line[i].amount;
                }
                else {
                    this.total_amount -= +this[formName].value.line[i].amount;
                }
            }
        }
        this.total_amount += parseFloat(this[formName].controls['bsalary'].value);
        this[formName].controls['gamount'].setValue(this.total_amount.toFixed(2));
    }
    toggle(filter) {
        if (!filter) {
            filter = "searchMode";
        }
        else {
            filter = filter;
        }
        this.toggleField = filter;
        this.dataLoading = false;
    }
    getData(filterAllDocs, getOneDoc) {
        this.dataLoading = true;
        return this.querySubscription = this._backendService.getFeeCode(filterAllDocs, getOneDoc).subscribe((res) => {
            if (res["data"]["getFee_Q"].CODE !== "") {
                if (getOneDoc) {
                    this.data$ = res["data"]["getFee_Q"][0];
                    this.toggle('editMode');
                }
                else {
                    this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](res["data"]["getFee_Q"]);
                    this.dataSource.paginator = this.paginator;
                    this.dataSource.sort = this.sort;
                }
                this.error = false;
                this.errorMessage = "";
            }
            else {
                this.error = true;
                this.errorMessage = res["data"]["getFee_Q"].message;
            }
        }, (error) => {
            this.error = true;
            this.errorMessage = error.message;
            this.dataLoading = false;
        }, () => {
            this.dataLoading = false;
        });
    }
    setData(formData) {
        this.dataLoading = true;
        this.querySubscription = this._backendService.setFeeCode(formData).subscribe((res) => {
            if (res["data"]["setFee_M"].CODE !== "") {
                this.savedChanges = true;
                this.error = false;
                this.errorMessage = "";
            }
            else {
                this.error = true;
                this.errorMessage = res["data"]["setFee_M"].message;
            }
        }, (error) => {
            this.error = true;
            this.errorMessage = error.message;
            this.dataLoading = false;
        }, () => {
            this.dataLoading = false;
        });
    }
    updateData(formData) {
        this.dataLoading = true;
        this.querySubscription = this._backendService.setFeeCodeDoc(formData).subscribe((res) => {
            if (res["data"]["setFeeDoc_M"].CODE !== "") {
                this.savedChanges = true;
                this.error = false;
                this.errorMessage = "";
            }
            else {
                this.error = true;
                this.errorMessage = res["data"]["setFeeDoc_M"].message;
            }
        }, (error) => {
            this.error = true;
            this.errorMessage = error.message;
            this.dataLoading = false;
        }, () => {
            this.dataLoading = false;
        });
    }
    deleteDoc(docId) {
        if (confirm("Are you sure want to delete this record ?")) {
            this.querySubscription = this._backendService.delFeeCodeDoc(docId).subscribe((res) => {
                //console.log("res"+JSON.stringify(res))
                if (!res["data"]["delFeeDoc_M"]) {
                    this.toggle('searchMode');
                    this.error = false;
                    this.errorMessage = "";
                }
                else {
                    this.error = true;
                    this.errorMessage = res["data"]["delFeeDoc_M"].message;
                }
            }, (error) => {
                this.error = true;
                this.errorMessage = error.message;
                this.dataLoading = false;
            }, () => {
                this.dataLoading = false;
            });
        }
    }
    getStudent(id) {
        this.dataLoading = true;
        this.querySubscription = this._backendService.getStudent('STUDENT', id).subscribe((res) => {
            this.addDataForm.controls["studentdocid"].patchValue(res["_id"]);
            this.addDataForm.controls["studentcode"].patchValue(res["code"]);
            this.addDataForm.controls["studentdescr"].patchValue(res["descr"]);
            this.addDataForm.controls["studentLAST_NAME"].patchValue(res["LAST_NAME"]);
            this.addDataForm.controls["studentfeecd"].patchValue(res["FEE_CODE"]);
            this._backendService.getFeeCode("FEE_CD", res["FEE_CODE"]).subscribe((res2) => {
                if (res2["code"] !== "") {
                    this.data$ = res2;
                    this.addDataForm.patchValue(this.data$);
                    this.addDataForm.controls["code"].patchValue("");
                    for (let i = 0; i < this.data$["line"].length; i++) {
                        this.LINES('addDataForm').push(this._fb.group(this.data$["line"][i]));
                    }
                    this.calculateTotal(('addDataForm'));
                }
            });
        }, (error) => {
            this.error = true;
            this.errorMessage = error.message;
            this.dataLoading = false;
        }, () => {
            this.dataLoading = false;
        });
    }
    getDoc(docId) {
        this.getData("", docId);
    }
    //mat table paginator and filter functions
    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }
    applyFilter(filterValue) {
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
};
FeeComponent.ctorParameters = () => [
    { type: _services_backend_service__WEBPACK_IMPORTED_MODULE_5__["BackendService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] }
];
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: false }),
    __metadata("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
], FeeComponent.prototype, "paginator", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], { static: false }),
    __metadata("design:type", _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
], FeeComponent.prototype, "sort", void 0);
FeeComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-fee',
        template: __importDefault(__webpack_require__(/*! raw-loader!./fee.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/manage/fee.component.html")).default,
        animations: [Object(_shared_router_animation__WEBPACK_IMPORTED_MODULE_1__["moveIn"])(), Object(_shared_router_animation__WEBPACK_IMPORTED_MODULE_1__["fallIn"])()],
        host: { '[@moveIn]': '' },
        styles: [__importDefault(__webpack_require__(/*! ./fee.component.css */ "./src/app/manage/fee.component.css")).default]
    }),
    __metadata("design:paramtypes", [_services_backend_service__WEBPACK_IMPORTED_MODULE_5__["BackendService"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]])
], FeeComponent);



/***/ }),

/***/ "./src/app/manage/marks-view.component.css":
/*!*************************************************!*\
  !*** ./src/app/manage/marks-view.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hbmFnZS9tYXJrcy12aWV3LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/manage/marks-view.component.ts":
/*!************************************************!*\
  !*** ./src/app/manage/marks-view.component.ts ***!
  \************************************************/
/*! exports provided: MarksViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarksViewComponent", function() { return MarksViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_router_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/router.animation */ "./src/app/shared/router.animation.ts");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _services_backend_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/backend.service */ "./src/app/services/backend.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};








let MarksViewComponent = class MarksViewComponent {
    constructor(_backendService, _fb, _router) {
        this._backendService = _backendService;
        this._fb = _fb;
        this._router = _router;
        this.state = '';
        this.savedChanges = false;
        this.error = false;
        this.errorMessage = "";
        this.dataLoading = false;
        this.total_amount = 0;
        this.displayedColumns = ['code', 'descr', 'studentcode', 'studentdescr', 'studentLAST_NAME', '_id'];
    }
    ngOnInit() {
        this.toggleField = "resMode";
        this.getData();
        //this.toggleField = "searchMode";
        this.error = false;
        this.errorMessage = "";
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](this.members);
        this.editDataForm = this._fb.group({
            _id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            studentdocid: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            studentcode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            studentdescr: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            studentLAST_NAME: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            studentfeecd: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            paiddate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            code: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            descr: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            line: this._fb.array([]),
            gamount: ''
        });
    }
    LINES(formName) {
        return this[formName].get('line');
    }
    addLINES(formName) {
        this.LINES(formName).push(this._fb.group({
            subject: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            minmarks: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            maxmarks: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            marks: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].pattern("^[0-9]*$")]]
        }));
        this.calculateTotal(formName);
    }
    deleteLINES(index, formName) {
        this.LINES(formName).removeAt(index);
        this.calculateTotal(formName);
    }
    calculateTotal(formName) {
        this.total_amount = 0;
        for (let i = 0; i <= this[formName].value.line.length; i++) {
            if (this[formName].value.line[i]) {
                this.total_amount += +this[formName].value.line[i].marks;
            }
        }
        this[formName].controls['gamount'].setValue(this.total_amount.toFixed(0));
    }
    toggle(filter) {
        if (!filter) {
            filter = "searchMode";
        }
        else {
            filter = filter;
        }
        this.toggleField = filter;
        this.dataLoading = false;
    }
    getData(filterAllDocs, getOneDoc) {
        this.dataLoading = true;
        //this.querySubscription = this._backendService.getUserStudentMarksDoc().subscribe((res) => {
        return this.querySubscription = this._backendService.getMarksCode(filterAllDocs, getOneDoc).subscribe((res) => {
            if (res["data"]["getFee_Q"].CODE !== "") {
                if (getOneDoc) {
                    this.data$ = res["data"]["getFee_Q"][0];
                    this.toggle('editMode');
                }
                else {
                    this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](res["data"]["getFee_Q"]);
                    this.dataSource.paginator = this.paginator;
                    this.dataSource.sort = this.sort;
                }
                this.error = false;
                this.errorMessage = "";
            }
            else {
                this.error = true;
                this.errorMessage = res["data"]["getFee_Q"].message;
            }
        }, (error) => {
            this.error = true;
            this.errorMessage = error.message;
            this.dataLoading = false;
        }, () => {
            this.dataLoading = false;
        });
    }
    getDoc(docId) {
        this.dataLoading = true;
        this.data$ = this._backendService.getMarksCode('MARKS', docId).subscribe(res => {
            if (res) {
                this.data$ = res;
                this.editDataForm = this._fb.group({
                    _id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
                    studentdocid: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
                    studentcode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
                    studentdescr: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
                    studentLAST_NAME: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
                    studentfeecd: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
                    paiddate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
                    code: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
                    descr: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
                    line: this._fb.array([]),
                    gamount: ''
                });
                this.editDataForm.patchValue(this.data$);
                for (let i = 0; i < this.data$["line"].length; i++) {
                    this.LINES('editDataForm').push(this._fb.group(this.data$["line"][i]));
                }
                this.calculateTotal(('editDataForm'));
                this.toggle('editMode');
                this.dataLoading = false;
            }
        }, (error) => {
            this.error = true;
            this.errorMessage = error.message;
            this.dataLoading = false;
        }, () => {
            this.dataLoading = false;
        });
    }
    //mat table paginator and filter functions
    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }
    applyFilter(filterValue) {
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
};
MarksViewComponent.ctorParameters = () => [
    { type: _services_backend_service__WEBPACK_IMPORTED_MODULE_5__["BackendService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] }
];
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: false }),
    __metadata("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
], MarksViewComponent.prototype, "paginator", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], { static: false }),
    __metadata("design:type", _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
], MarksViewComponent.prototype, "sort", void 0);
MarksViewComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-marks-view',
        template: __importDefault(__webpack_require__(/*! raw-loader!./marks-view.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/manage/marks-view.component.html")).default,
        animations: [Object(_shared_router_animation__WEBPACK_IMPORTED_MODULE_1__["moveIn"])(), Object(_shared_router_animation__WEBPACK_IMPORTED_MODULE_1__["fallIn"])()],
        host: { '[@moveIn]': '' },
        styles: [__importDefault(__webpack_require__(/*! ./marks-view.component.css */ "./src/app/manage/marks-view.component.css")).default]
    }),
    __metadata("design:paramtypes", [_services_backend_service__WEBPACK_IMPORTED_MODULE_5__["BackendService"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]])
], MarksViewComponent);



/***/ }),

/***/ "./src/app/manage/marks.component.css":
/*!********************************************!*\
  !*** ./src/app/manage/marks.component.css ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hbmFnZS9tYXJrcy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/manage/marks.component.ts":
/*!*******************************************!*\
  !*** ./src/app/manage/marks.component.ts ***!
  \*******************************************/
/*! exports provided: MarksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarksComponent", function() { return MarksComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_router_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/router.animation */ "./src/app/shared/router.animation.ts");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _services_backend_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/backend.service */ "./src/app/services/backend.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};








let MarksComponent = class MarksComponent {
    constructor(_backendService, _fb, _router) {
        this._backendService = _backendService;
        this._fb = _fb;
        this._router = _router;
        this.state = '';
        this.savedChanges = false;
        this.error = false;
        this.errorMessage = "";
        this.dataLoading = false;
        this.total_amount = 0;
        this.displayedColumns = ['code', 'descr', 'studentcode', 'studentdescr', 'studentLAST_NAME', '_id'];
    }
    ngOnInit() {
        let id = this._router.snapshot.paramMap.get('id');
        if (id != "") {
            this.getStudent(id);
        }
        this.toggleField = (!id) ? "searchMode" : "addMode";
        //this.toggleField = "searchMode";
        this.error = false;
        this.errorMessage = "";
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](this.members);
        this.addDataForm = this._fb.group({
            studentdocid: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            studentcode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            studentdescr: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            studentLAST_NAME: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            studentfeecd: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            paiddate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            code: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            descr: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            // line: this._fb.array([this._fb.group({
            //     subject: ['', Validators.required],
            //     minmarks: ['', Validators.required],
            //     maxmarks: ['', Validators.required],
            //     marks: ['', [Validators.pattern("^[0-9]*$")]]
            // })]),
            line: this._fb.array([]),
            gamount: ''
        });
        this.editDataForm = this._fb.group({
            _id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            studentdocid: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            studentcode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            studentdescr: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            studentLAST_NAME: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            studentfeecd: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            paiddate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            code: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            descr: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            line: this._fb.array([]),
            gamount: ''
        });
    }
    LINES(formName) {
        return this[formName].get('line');
    }
    addLINES(formName) {
        this.LINES(formName).push(this._fb.group({
            subject: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            minmarks: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            maxmarks: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            marks: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].pattern("^[0-9]*$")]]
        }));
        this.calculateTotal(formName);
    }
    deleteLINES(index, formName) {
        this.LINES(formName).removeAt(index);
        this.calculateTotal(formName);
    }
    calculateTotal(formName) {
        this.total_amount = 0;
        for (let i = 0; i <= this[formName].value.line.length; i++) {
            if (this[formName].value.line[i]) {
                this.total_amount += +this[formName].value.line[i].marks;
            }
        }
        this[formName].controls['gamount'].setValue(this.total_amount.toFixed(0));
    }
    toggle(filter) {
        if (!filter) {
            filter = "searchMode";
        }
        else {
            filter = filter;
        }
        this.toggleField = filter;
        this.dataLoading = false;
    }
    getData(filterAllDocs, getOneDoc) {
        this.dataLoading = true;
        return this.querySubscription = this._backendService.getMarksCode(filterAllDocs, getOneDoc).subscribe((res) => {
            if (res["data"]["getFee_Q"].CODE !== "") {
                if (getOneDoc) {
                    this.data$ = res["data"]["getFee_Q"][0];
                    this.toggle('editMode');
                }
                else {
                    this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](res["data"]["getFee_Q"]);
                    this.dataSource.paginator = this.paginator;
                    this.dataSource.sort = this.sort;
                }
                this.error = false;
                this.errorMessage = "";
            }
            else {
                this.error = true;
                this.errorMessage = res["data"]["getFee_Q"].message;
            }
        }, (error) => {
            this.error = true;
            this.errorMessage = error.message;
            this.dataLoading = false;
        }, () => {
            this.dataLoading = false;
        });
    }
    setData(formData) {
        this.dataLoading = true;
        this.querySubscription = this._backendService.setMarksCode(formData).subscribe((res) => {
            if (res["data"]["setFee_M"].CODE !== "") {
                this.savedChanges = true;
                this.error = false;
                this.errorMessage = "";
            }
            else {
                this.error = true;
                this.errorMessage = res["data"]["setFee_M"].message;
            }
        }, (error) => {
            this.error = true;
            this.errorMessage = error.message;
            this.dataLoading = false;
        }, () => {
            this.dataLoading = false;
        });
    }
    updateData(formData) {
        this.dataLoading = true;
        this.querySubscription = this._backendService.setMarksCodeDoc(formData).subscribe((res) => {
            if (res["data"]["setFeeDoc_M"].CODE !== "") {
                this.savedChanges = true;
                this.error = false;
                this.errorMessage = "";
            }
            else {
                this.error = true;
                this.errorMessage = res["data"]["setFeeDoc_M"].message;
            }
        }, (error) => {
            this.error = true;
            this.errorMessage = error.message;
            this.dataLoading = false;
        }, () => {
            this.dataLoading = false;
        });
    }
    deleteDoc(docId) {
        if (confirm("Are you sure want to delete this record ?")) {
            this.querySubscription = this._backendService.delMarksCodeDoc(docId).subscribe((res) => {
                //console.log("res"+JSON.stringify(res))
                if (!res["data"]["delFeeDoc_M"]) {
                    this.toggle('searchMode');
                    this.error = false;
                    this.errorMessage = "";
                }
                else {
                    this.error = true;
                    this.errorMessage = res["data"]["delFeeDoc_M"].message;
                }
            }, (error) => {
                this.error = true;
                this.errorMessage = error.message;
                this.dataLoading = false;
            }, () => {
                this.dataLoading = false;
            });
        }
    }
    getDoc(docId) {
        this.dataLoading = true;
        this.data$ = this._backendService.getMarksCode('MARKS', docId).subscribe(res => {
            if (res) {
                this.data$ = res;
                this.editDataForm = this._fb.group({
                    _id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
                    studentdocid: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
                    studentcode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
                    studentdescr: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
                    studentLAST_NAME: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
                    studentfeecd: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
                    paiddate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
                    code: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
                    descr: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
                    line: this._fb.array([]),
                    gamount: ''
                });
                this.editDataForm.patchValue(this.data$);
                for (let i = 0; i < this.data$["line"].length; i++) {
                    this.LINES('editDataForm').push(this._fb.group(this.data$["line"][i]));
                }
                this.calculateTotal(('editDataForm'));
                this.toggle('editMode');
                this.dataLoading = false;
            }
        }, (error) => {
            this.error = true;
            this.errorMessage = error.message;
            this.dataLoading = false;
        }, () => {
            this.dataLoading = false;
        });
    }
    getStudent(id) {
        // this.dataLoading = true;
        this.querySubscription = this.querySubscription = this._backendService.getStudent('STUDENT', id).subscribe((res) => {
            this.addDataForm.controls["studentdocid"].patchValue(res["_id"]);
            this.addDataForm.controls["studentcode"].patchValue(res["code"]);
            this.addDataForm.controls["studentdescr"].patchValue(res["descr"]);
            this.addDataForm.controls["studentLAST_NAME"].patchValue(res["LAST_NAME"]);
            this.addDataForm.controls["studentfeecd"].patchValue(res["MARKS_CODE"]);
            this._backendService.getMarksCode("MARKS_CD", res["MARKS_CODE"]).subscribe((res2) => {
                if (res2["code"] !== "") {
                    this.data$ = res2;
                    this.addDataForm.patchValue(this.data$);
                    this.addDataForm.controls["code"].patchValue("");
                    for (let i = 0; i < this.data$["line"].length; i++) {
                        this.LINES('addDataForm').push(this._fb.group(this.data$["line"][i]));
                    }
                    this.calculateTotal(('addDataForm'));
                }
            });
        }, (error) => {
            this.error = true;
            this.errorMessage = error.message;
            this.dataLoading = false;
        }, () => {
            this.dataLoading = false;
        });
    }
    //mat table paginator and filter functions
    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }
    applyFilter(filterValue) {
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
};
MarksComponent.ctorParameters = () => [
    { type: _services_backend_service__WEBPACK_IMPORTED_MODULE_5__["BackendService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] }
];
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: false }),
    __metadata("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
], MarksComponent.prototype, "paginator", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], { static: false }),
    __metadata("design:type", _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
], MarksComponent.prototype, "sort", void 0);
MarksComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-marks',
        template: __importDefault(__webpack_require__(/*! raw-loader!./marks.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/manage/marks.component.html")).default,
        animations: [Object(_shared_router_animation__WEBPACK_IMPORTED_MODULE_1__["moveIn"])(), Object(_shared_router_animation__WEBPACK_IMPORTED_MODULE_1__["fallIn"])()],
        host: { '[@moveIn]': '' },
        styles: [__importDefault(__webpack_require__(/*! ./marks.component.css */ "./src/app/manage/marks.component.css")).default]
    }),
    __metadata("design:paramtypes", [_services_backend_service__WEBPACK_IMPORTED_MODULE_5__["BackendService"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]])
], MarksComponent);



/***/ }),

/***/ "./src/app/manage/student-view.component.css":
/*!***************************************************!*\
  !*** ./src/app/manage/student-view.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hbmFnZS9zdHVkZW50LXZpZXcuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/manage/student-view.component.ts":
/*!**************************************************!*\
  !*** ./src/app/manage/student-view.component.ts ***!
  \**************************************************/
/*! exports provided: StudentViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentViewComponent", function() { return StudentViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_router_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/router.animation */ "./src/app/shared/router.animation.ts");
/* harmony import */ var _services_backend_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/backend.service */ "./src/app/services/backend.service.ts");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};






let StudentViewComponent = class StudentViewComponent {
    constructor(_backendService) {
        this._backendService = _backendService;
        this.state = '';
        this.savedChanges = false;
        this.error = false;
        this.errorMessage = "";
        this.dataLoading = false;
        this.displayedColumns = ['code', 'descr', '_id'];
        this.showFileUpload = false;
        this.showDocument = false;
    }
    ngOnInit() {
        this.toggleField = "searchMode";
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](this.members);
        this.getEnrollData();
        this.getFeeData();
        this.getMarksData();
    }
    toggle(filter) {
        if (!filter) {
            filter = "searchMode";
        }
        else {
            filter = filter;
        }
        this.toggleField = filter;
        //  this.dataLoading = false;
    }
    getEnrollData() {
        this.dataLoading = true;
        return this.querySubscription = this._backendService.getEnrollment().subscribe((res) => {
            if (res["data"]["getLeaveCode_Q"].code !== "") {
                this.enrollCDs = res["data"]["getEnrollment_Q"];
                this.error = false;
                this.errorMessage = "";
            }
        }, (error) => {
            this.error = true;
            this.errorMessage = error.message;
            this.dataLoading = false;
        }, () => {
            this.dataLoading = false;
        });
    }
    getFeeData() {
        this.dataLoading = true;
        return this.querySubscription = this._backendService.getFeeCode().subscribe((res) => {
            if (res["data"]["getFeeCode_Q"].code !== "") {
                this.feeCDs = res["data"]["getFeeCode_Q"];
                this.error = false;
                this.errorMessage = "";
            }
        }, (error) => {
            this.error = true;
            this.errorMessage = error.message;
            this.dataLoading = false;
        }, () => {
            this.dataLoading = false;
        });
    }
    getMarksData() {
        this.dataLoading = true;
        return this.querySubscription = this._backendService.getMarksCode().subscribe((res) => {
            if (res["data"]["getJobCode_Q"].code !== "") {
                this.markCDs = res["data"]["getMarksCode_Q"];
                this.error = false;
                this.errorMessage = "";
            }
        }, (error) => {
            this.error = true;
            this.errorMessage = error.message;
            this.dataLoading = false;
        }, () => {
            this.dataLoading = false;
        });
    }
    getData(filterAllDocs, getOneDoc) {
        this.dataLoading = true;
        return this.querySubscription = this._backendService.getEmployee(filterAllDocs, getOneDoc).subscribe((res) => {
            if (res["data"]["getEmployee_Q"].CODE !== "") {
                if (getOneDoc) {
                    this.data = res["data"]["getEmployee_Q"][0];
                    this.toggle('editMode');
                }
                else {
                    this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](res["data"]["getEmployee_Q"]);
                    this.dataSource.paginator = this.paginator;
                    this.dataSource.sort = this.sort;
                }
                this.error = false;
                this.errorMessage = "";
            }
            else {
                this.error = true;
                this.errorMessage = res["data"]["getEmployee_Q"].message;
            }
        }, (error) => {
            this.error = true;
            this.errorMessage = error.message;
            this.dataLoading = false;
        }, () => {
            this.dataLoading = false;
        });
    }
    setData(formData) {
        this.dataLoading = true;
        this.querySubscription = this._backendService.setEmployee(formData).subscribe((res) => {
            if (res["data"]["setEmployee_M"].CODE !== "") {
                this.savedChanges = true;
                this.error = false;
                this.errorMessage = "";
            }
            else {
                this.error = true;
                this.errorMessage = res["data"]["setEmployee_M"].message;
            }
        }, (error) => {
            this.error = true;
            this.errorMessage = error.message;
            this.dataLoading = false;
        }, () => {
            this.dataLoading = false;
        });
    }
    updateData(formData) {
        this.dataLoading = true;
        this.querySubscription = this._backendService.setEmployeeDoc(formData).subscribe((res) => {
            if (res["data"]["setEmployeeDoc_M"].CODE !== "") {
                this.savedChanges = true;
                this.error = false;
                this.errorMessage = "";
            }
            else {
                this.error = true;
                this.errorMessage = res["data"]["setEmployeeDoc_M"].message;
            }
        }, (error) => {
            this.error = true;
            this.errorMessage = error.message;
            this.dataLoading = false;
        }, () => {
            this.dataLoading = false;
        });
    }
    getDoc(docId) {
        this.getData("", docId);
    }
    deleteDoc(docId) {
        if (confirm("Are you sure want to delete this record ?")) {
            this.querySubscription = this._backendService.delEmployeeDoc(docId).subscribe((res) => {
                //console.log("res"+JSON.stringify(res))
                if (!res["data"]["delEmployeeDoc_M"]) {
                    this.toggle('searchMode');
                    this.error = false;
                    this.errorMessage = "";
                }
                else {
                    this.error = true;
                    this.errorMessage = res["data"]["delEmployeeDoc_M"].message;
                }
            }, (error) => {
                this.error = true;
                this.errorMessage = error.message;
                this.dataLoading = false;
            }, () => {
                this.dataLoading = false;
            });
        }
    }
    //mat table paginator and filter functions
    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }
    applyFilter(filterValue) {
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
};
StudentViewComponent.ctorParameters = () => [
    { type: _services_backend_service__WEBPACK_IMPORTED_MODULE_2__["BackendService"] }
];
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], { static: false }),
    __metadata("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
], StudentViewComponent.prototype, "paginator", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_4__["MatSort"], { static: false }),
    __metadata("design:type", _angular_material_sort__WEBPACK_IMPORTED_MODULE_4__["MatSort"])
], StudentViewComponent.prototype, "sort", void 0);
StudentViewComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-student-view',
        template: __importDefault(__webpack_require__(/*! raw-loader!./student-view.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/manage/student-view.component.html")).default,
        animations: [Object(_shared_router_animation__WEBPACK_IMPORTED_MODULE_1__["moveIn"])(), Object(_shared_router_animation__WEBPACK_IMPORTED_MODULE_1__["fallIn"])()],
        host: { '[@moveIn]': '' },
        styles: [__importDefault(__webpack_require__(/*! ./student-view.component.css */ "./src/app/manage/student-view.component.css")).default]
    }),
    __metadata("design:paramtypes", [_services_backend_service__WEBPACK_IMPORTED_MODULE_2__["BackendService"]])
], StudentViewComponent);



/***/ }),

/***/ "./src/app/manage/student.component.css":
/*!**********************************************!*\
  !*** ./src/app/manage/student.component.css ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hbmFnZS9zdHVkZW50LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/manage/student.component.ts":
/*!*********************************************!*\
  !*** ./src/app/manage/student.component.ts ***!
  \*********************************************/
/*! exports provided: StudentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentComponent", function() { return StudentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_router_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/router.animation */ "./src/app/shared/router.animation.ts");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _services_backend_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/backend.service */ "./src/app/services/backend.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};






let StudentComponent = class StudentComponent {
    // file upload
    /*   docId: string;
       fileName: string;
       showFileUpload: boolean = false;
       showDocument: boolean = false;
       docUrl: Observable<string | null>; */
    constructor(_backendService) {
        this._backendService = _backendService;
        this.state = '';
        this.savedChanges = false;
        this.error = false;
        this.errorMessage = "";
        this.dataLoading = false;
        this.displayedColumns = ['code', 'descr', '_id'];
    }
    ngOnInit() {
        this.toggleField = "searchMode";
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](this.members);
        this.getMarskData();
        this.getEnrollmentData();
        this.getFeeData();
    }
    toggle(filter) {
        if (!filter) {
            filter = "searchMode";
        }
        else {
            filter = filter;
        }
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
        }, (error) => {
            this.error = true;
            this.errorMessage = error.message;
            this.dataLoading = false;
        }, () => {
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
        }, (error) => {
            this.error = true;
            this.errorMessage = error.message;
            this.dataLoading = false;
        }, () => {
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
        }, (error) => {
            this.error = true;
            this.errorMessage = error.message;
            this.dataLoading = false;
        }, () => {
            this.dataLoading = false;
        });
    }
    getData(filterAllDocs, getOneDoc) {
        this.dataLoading = true;
        return this.querySubscription = this._backendService.getStudent(filterAllDocs, getOneDoc).subscribe((res) => {
            if (res["data"]["getStudent_Q"].CODE !== "") {
                if (getOneDoc) {
                    this.data = res["data"]["getStudent_Q"][0];
                    this.toggle('editMode');
                }
                else {
                    this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](res["data"]["getStudent_Q"]);
                    this.dataSource.paginator = this.paginator;
                    this.dataSource.sort = this.sort;
                }
                this.error = false;
                this.errorMessage = "";
            }
            else {
                this.error = true;
                this.errorMessage = res["data"]["getStudent_Q"].message;
            }
        }, (error) => {
            this.error = true;
            this.errorMessage = error.message;
            this.dataLoading = false;
        }, () => {
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
            }
            else {
                this.error = true;
                this.errorMessage = res["data"]["setStudent_M"].message;
            }
        }, (error) => {
            this.error = true;
            this.errorMessage = error.message;
            this.dataLoading = false;
        }, () => {
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
            }
            else {
                this.error = true;
                this.errorMessage = res["data"]["setStudentDoc_M"].message;
            }
        }, (error) => {
            this.error = true;
            this.errorMessage = error.message;
            this.dataLoading = false;
        }, () => {
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
                }
                else {
                    this.error = true;
                    this.errorMessage = res["data"]["delStudentDoc_M"].message;
                }
            }, (error) => {
                this.error = true;
                this.errorMessage = error.message;
                this.dataLoading = false;
            }, () => {
                this.dataLoading = false;
            });
        }
    }
    //mat table paginator and filter functions
    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }
    applyFilter(filterValue) {
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
};
StudentComponent.ctorParameters = () => [
    { type: _services_backend_service__WEBPACK_IMPORTED_MODULE_5__["BackendService"] }
];
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: false }),
    __metadata("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
], StudentComponent.prototype, "paginator", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], { static: false }),
    __metadata("design:type", _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
], StudentComponent.prototype, "sort", void 0);
StudentComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-student',
        template: __importDefault(__webpack_require__(/*! raw-loader!./student.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/manage/student.component.html")).default,
        animations: [Object(_shared_router_animation__WEBPACK_IMPORTED_MODULE_1__["moveIn"])(), Object(_shared_router_animation__WEBPACK_IMPORTED_MODULE_1__["fallIn"])()],
        host: { '[@moveIn]': '' },
        styles: [__importDefault(__webpack_require__(/*! ./student.component.css */ "./src/app/manage/student.component.css")).default]
    }),
    __metadata("design:paramtypes", [_services_backend_service__WEBPACK_IMPORTED_MODULE_5__["BackendService"]])
], StudentComponent);



/***/ }),

/***/ "./src/app/online/assignments-view.component.css":
/*!*******************************************************!*\
  !*** ./src/app/online/assignments-view.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29ubGluZS9hc3NpZ25tZW50cy12aWV3LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/online/assignments-view.component.ts":
/*!******************************************************!*\
  !*** ./src/app/online/assignments-view.component.ts ***!
  \******************************************************/
/*! exports provided: AssignmentsViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssignmentsViewComponent", function() { return AssignmentsViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_router_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/router.animation */ "./src/app/shared/router.animation.ts");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _services_backend_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/backend.service */ "./src/app/services/backend.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};






let AssignmentsViewComponent = class AssignmentsViewComponent {
    constructor(_backendService) {
        this._backendService = _backendService;
        this.state = '';
        this.savedChanges = false;
        this.error = false;
        this.errorMessage = "";
        this.dataLoading = false;
        this.showFileUpload = false;
        this.showDocument = false;
        this.displayedColumns = ['code', 'descr', '_id'];
    }
    ngOnInit() {
        this.toggleField = "resMode";
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](this.members);
        this.getData();
    }
    toggle(filter) {
        if (!filter) {
            filter = "searchMode";
        }
        else {
            filter = filter;
        }
        this.toggleField = filter;
        this.dataLoading = false;
    }
    getData(formData) {
        /*        this.dataLoading = true;
                //this.querySubscription = this._backendService.getDocs('ASSIGNMENT',formData).subscribe((res) => {
                this.querySubscription = this._backendService.getUserStudentTutsDoc('ASSIGNMENT',formData).subscribe((res) => {
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
        this.data$ = this._backendService.getAssignment('ASSIGNMENT', docId);
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
    applyFilter(filterValue) {
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
};
AssignmentsViewComponent.ctorParameters = () => [
    { type: _services_backend_service__WEBPACK_IMPORTED_MODULE_5__["BackendService"] }
];
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: false }),
    __metadata("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
], AssignmentsViewComponent.prototype, "paginator", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], { static: false }),
    __metadata("design:type", _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
], AssignmentsViewComponent.prototype, "sort", void 0);
AssignmentsViewComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-assignments-view',
        template: __importDefault(__webpack_require__(/*! raw-loader!./assignments-view.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/online/assignments-view.component.html")).default,
        animations: [Object(_shared_router_animation__WEBPACK_IMPORTED_MODULE_1__["moveIn"])(), Object(_shared_router_animation__WEBPACK_IMPORTED_MODULE_1__["fallIn"])()],
        host: { '[@moveIn]': '' },
        styles: [__importDefault(__webpack_require__(/*! ./assignments-view.component.css */ "./src/app/online/assignments-view.component.css")).default]
    }),
    __metadata("design:paramtypes", [_services_backend_service__WEBPACK_IMPORTED_MODULE_5__["BackendService"]])
], AssignmentsViewComponent);



/***/ }),

/***/ "./src/app/online/assignments.component.css":
/*!**************************************************!*\
  !*** ./src/app/online/assignments.component.css ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29ubGluZS9hc3NpZ25tZW50cy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/online/assignments.component.ts":
/*!*************************************************!*\
  !*** ./src/app/online/assignments.component.ts ***!
  \*************************************************/
/*! exports provided: AssignmentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssignmentsComponent", function() { return AssignmentsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_router_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/router.animation */ "./src/app/shared/router.animation.ts");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _services_backend_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/backend.service */ "./src/app/services/backend.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};






let AssignmentsComponent = class AssignmentsComponent {
    constructor(_backendService) {
        this._backendService = _backendService;
        this.state = '';
        this.savedChanges = false;
        this.error = false;
        this.errorMessage = "";
        this.dataLoading = false;
        this.showFileUpload = false;
        this.showDocument = false;
        this.displayedColumns = ['code', 'descr', '_id'];
    }
    ngOnInit() {
        this.toggleField = "searchMode";
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](this.members);
        this.getEnrollmentCDs();
    }
    toggle(filter) {
        if (!filter) {
            filter = "searchMode";
        }
        else {
            filter = filter;
        }
        this.toggleField = filter;
        this.dataLoading = false;
    }
    getEnrollmentCDs() {
        this.dataLoading = true;
        this.querySubscription = this._backendService.getEnrollment('ENROLL_CD').subscribe((res) => {
            this.enrollmentCDs$ = res;
        }, (error) => {
            this.error = true;
            this.errorMessage = error.message;
            this.dataLoading = false;
        }, () => {
            this.dataLoading = false;
        });
    }
    getData(filterAllDocs, getOneDoc) {
        this.dataLoading = true;
        return this.querySubscription = this._backendService.getAssignment(filterAllDocs, getOneDoc).subscribe((res) => {
            if (res["data"]["getAssignment_Q"].CODE !== "") {
                if (getOneDoc) {
                    this.data$ = res["data"]["getAssignment_Q"][0];
                    this.toggle('editMode');
                }
                else {
                    this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](res["data"]["getAssignment_Q"]);
                    this.dataSource.paginator = this.paginator;
                    this.dataSource.sort = this.sort;
                }
                this.error = false;
                this.errorMessage = "";
            }
            else {
                this.error = true;
                this.errorMessage = res["data"]["getAssignment_Q"].message;
            }
        }, (error) => {
            this.error = true;
            this.errorMessage = error.message;
            this.dataLoading = false;
        }, () => {
            this.dataLoading = false;
        });
    }
    setData(formData) {
        this.dataLoading = true;
        this.querySubscription = this._backendService.setAssignment(formData).subscribe((res) => {
            if (res["data"]["setAssignment_M"].CODE !== "") {
                this.savedChanges = true;
                this.error = false;
                this.errorMessage = "";
            }
            else {
                this.error = true;
                this.errorMessage = res["data"]["setAssignment_M"].message;
            }
        }, (error) => {
            this.error = true;
            this.errorMessage = error.message;
            this.dataLoading = false;
        }, () => {
            this.dataLoading = false;
        });
    }
    updateData(formData) {
        this.dataLoading = true;
        this.querySubscription = this._backendService.setAssignmentDoc(formData).subscribe((res) => {
            if (res["data"]["setAssignmentDoc_M"].CODE !== "") {
                this.savedChanges = true;
                this.error = false;
                this.errorMessage = "";
            }
            else {
                this.error = true;
                this.errorMessage = res["data"]["setAssignmentDoc_M"].message;
            }
        }, (error) => {
            this.error = true;
            this.errorMessage = error.message;
            this.dataLoading = false;
        }, () => {
            this.dataLoading = false;
        });
    }
    deleteDoc(docId) {
        if (confirm("Are you sure want to delete this record ?")) {
            this.querySubscription = this._backendService.delAssignmentDoc(docId).subscribe((res) => {
                //console.log("res"+JSON.stringify(res))
                if (!res["data"]["delAssignmentDoc_M"]) {
                    this.toggle('searchMode');
                    this.error = false;
                    this.errorMessage = "";
                }
                else {
                    this.error = true;
                    this.errorMessage = res["data"]["delAssignmentDoc_M"].message;
                }
            }, (error) => {
                this.error = true;
                this.errorMessage = error.message;
                this.dataLoading = false;
            }, () => {
                this.dataLoading = false;
            });
        }
    }
    getDoc(docId) {
        this.docId = docId; // this is required to pass at file upload directive
        this.dataLoading = true;
        this.data$ = this._backendService.getAssignment('ASSIGNMENT', docId);
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
    applyFilter(filterValue) {
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
};
AssignmentsComponent.ctorParameters = () => [
    { type: _services_backend_service__WEBPACK_IMPORTED_MODULE_5__["BackendService"] }
];
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: false }),
    __metadata("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
], AssignmentsComponent.prototype, "paginator", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], { static: false }),
    __metadata("design:type", _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
], AssignmentsComponent.prototype, "sort", void 0);
AssignmentsComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-assignments',
        template: __importDefault(__webpack_require__(/*! raw-loader!./assignments.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/online/assignments.component.html")).default,
        animations: [Object(_shared_router_animation__WEBPACK_IMPORTED_MODULE_1__["moveIn"])(), Object(_shared_router_animation__WEBPACK_IMPORTED_MODULE_1__["fallIn"])()],
        host: { '[@moveIn]': '' },
        styles: [__importDefault(__webpack_require__(/*! ./assignments.component.css */ "./src/app/online/assignments.component.css")).default]
    }),
    __metadata("design:paramtypes", [_services_backend_service__WEBPACK_IMPORTED_MODULE_5__["BackendService"]])
], AssignmentsComponent);



/***/ }),

/***/ "./src/app/online/classes-view.component.css":
/*!***************************************************!*\
  !*** ./src/app/online/classes-view.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29ubGluZS9jbGFzc2VzLXZpZXcuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/online/classes-view.component.ts":
/*!**************************************************!*\
  !*** ./src/app/online/classes-view.component.ts ***!
  \**************************************************/
/*! exports provided: ClassesViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassesViewComponent", function() { return ClassesViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_router_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/router.animation */ "./src/app/shared/router.animation.ts");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _services_backend_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/backend.service */ "./src/app/services/backend.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};






let ClassesViewComponent = class ClassesViewComponent {
    constructor(_backendService) {
        this._backendService = _backendService;
        this.state = '';
        this.savedChanges = false;
        this.error = false;
        this.errorMessage = "";
        this.dataLoading = false;
        this.showFileUpload = false;
        this.showDocument = false;
        this.displayedColumns = ['code', 'descr', '_id'];
    }
    ngOnInit() {
        this.toggleField = "resMode";
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](this.members);
        this.getData();
    }
    toggle(filter) {
        if (!filter) {
            filter = "searchMode";
        }
        else {
            filter = filter;
        }
        this.toggleField = filter;
        this.dataLoading = false;
    }
    getData(formData) {
        /*
          this.dataLoading = true;
          //this.querySubscription = this._backendService.getDocs('CLASSES',formData).subscribe((res) => {
            this.querySubscription = this._backendService.getUserStudentTutsDoc('CLASSES').subscribe((res) => {
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
        this.data$ = this._backendService.getClass('CLASSES', docId);
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
    applyFilter(filterValue) {
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
};
ClassesViewComponent.ctorParameters = () => [
    { type: _services_backend_service__WEBPACK_IMPORTED_MODULE_5__["BackendService"] }
];
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: false }),
    __metadata("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
], ClassesViewComponent.prototype, "paginator", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], { static: false }),
    __metadata("design:type", _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
], ClassesViewComponent.prototype, "sort", void 0);
ClassesViewComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-classes-view',
        template: __importDefault(__webpack_require__(/*! raw-loader!./classes-view.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/online/classes-view.component.html")).default,
        animations: [Object(_shared_router_animation__WEBPACK_IMPORTED_MODULE_1__["moveIn"])(), Object(_shared_router_animation__WEBPACK_IMPORTED_MODULE_1__["fallIn"])()],
        host: { '[@moveIn]': '' },
        styles: [__importDefault(__webpack_require__(/*! ./classes-view.component.css */ "./src/app/online/classes-view.component.css")).default]
    }),
    __metadata("design:paramtypes", [_services_backend_service__WEBPACK_IMPORTED_MODULE_5__["BackendService"]])
], ClassesViewComponent);



/***/ }),

/***/ "./src/app/online/classes.component.css":
/*!**********************************************!*\
  !*** ./src/app/online/classes.component.css ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29ubGluZS9jbGFzc2VzLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/online/classes.component.ts":
/*!*********************************************!*\
  !*** ./src/app/online/classes.component.ts ***!
  \*********************************************/
/*! exports provided: ClassesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassesComponent", function() { return ClassesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_router_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/router.animation */ "./src/app/shared/router.animation.ts");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _services_backend_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/backend.service */ "./src/app/services/backend.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};






let ClassesComponent = class ClassesComponent {
    constructor(_backendService) {
        this._backendService = _backendService;
        this.state = '';
        this.savedChanges = false;
        this.error = false;
        this.errorMessage = "";
        this.dataLoading = false;
        this.showFileUpload = false;
        this.showDocument = false;
        this.displayedColumns = ['code', 'descr', '_id'];
    }
    ngOnInit() {
        this.toggleField = "searchMode";
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](this.members);
        this.getEnrollmentCDs();
    }
    toggle(filter) {
        if (!filter) {
            filter = "searchMode";
        }
        else {
            filter = filter;
        }
        this.toggleField = filter;
        this.dataLoading = false;
    }
    getEnrollmentCDs() {
        this.dataLoading = true;
        this.querySubscription = this._backendService.getEnrollment('ENROLL_CD').subscribe((res) => {
            this.enrollmentCDs$ = res;
        }, (error) => {
            this.error = true;
            this.errorMessage = error.message;
            this.dataLoading = false;
        }, () => {
            this.dataLoading = false;
        });
    }
    getData(filterAllDocs, getOneDoc) {
        this.dataLoading = true;
        return this.querySubscription = this._backendService.getClass(filterAllDocs, getOneDoc).subscribe((res) => {
            if (res["data"]["getClass_Q"].CODE !== "") {
                if (getOneDoc) {
                    this.data$ = res["data"]["getClass_Q"][0];
                    this.toggle('editMode');
                }
                else {
                    this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](res["data"]["getClass_Q"]);
                    this.dataSource.paginator = this.paginator;
                    this.dataSource.sort = this.sort;
                }
                this.error = false;
                this.errorMessage = "";
            }
            else {
                this.error = true;
                this.errorMessage = res["data"]["getClass_Q"].message;
            }
        }, (error) => {
            this.error = true;
            this.errorMessage = error.message;
            this.dataLoading = false;
        }, () => {
            this.dataLoading = false;
        });
    }
    setData(formData) {
        this.dataLoading = true;
        this.querySubscription = this._backendService.setClass(formData).subscribe((res) => {
            if (res["data"]["setClass_M"].CODE !== "") {
                this.savedChanges = true;
                this.error = false;
                this.errorMessage = "";
            }
            else {
                this.error = true;
                this.errorMessage = res["data"]["setClass_M"].message;
            }
        }, (error) => {
            this.error = true;
            this.errorMessage = error.message;
            this.dataLoading = false;
        }, () => {
            this.dataLoading = false;
        });
    }
    updateData(formData) {
        this.dataLoading = true;
        this.querySubscription = this._backendService.setClassDoc(formData).subscribe((res) => {
            if (res["data"]["setClassDoc_M"].CODE !== "") {
                this.savedChanges = true;
                this.error = false;
                this.errorMessage = "";
            }
            else {
                this.error = true;
                this.errorMessage = res["data"]["setClassDoc_M"].message;
            }
        }, (error) => {
            this.error = true;
            this.errorMessage = error.message;
            this.dataLoading = false;
        }, () => {
            this.dataLoading = false;
        });
    }
    deleteDoc(docId) {
        if (confirm("Are you sure want to delete this record ?")) {
            this.querySubscription = this._backendService.delClassDoc(docId).subscribe((res) => {
                //console.log("res"+JSON.stringify(res))
                if (!res["data"]["delClassDoc_M"]) {
                    this.toggle('searchMode');
                    this.error = false;
                    this.errorMessage = "";
                }
                else {
                    this.error = true;
                    this.errorMessage = res["data"]["delClassDoc_M"].message;
                }
            }, (error) => {
                this.error = true;
                this.errorMessage = error.message;
                this.dataLoading = false;
            }, () => {
                this.dataLoading = false;
            });
        }
    }
    getDoc(docId) {
        this.docId = docId; // this is required to pass at file upload directive
        this.dataLoading = true;
        this.data$ = this._backendService.getClass('CLASSES', docId);
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
    applyFilter(filterValue) {
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
};
ClassesComponent.ctorParameters = () => [
    { type: _services_backend_service__WEBPACK_IMPORTED_MODULE_5__["BackendService"] }
];
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: false }),
    __metadata("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
], ClassesComponent.prototype, "paginator", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], { static: false }),
    __metadata("design:type", _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
], ClassesComponent.prototype, "sort", void 0);
ClassesComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-classes',
        template: __importDefault(__webpack_require__(/*! raw-loader!./classes.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/online/classes.component.html")).default,
        animations: [Object(_shared_router_animation__WEBPACK_IMPORTED_MODULE_1__["moveIn"])(), Object(_shared_router_animation__WEBPACK_IMPORTED_MODULE_1__["fallIn"])()],
        host: { '[@moveIn]': '' },
        styles: [__importDefault(__webpack_require__(/*! ./classes.component.css */ "./src/app/online/classes.component.css")).default]
    }),
    __metadata("design:paramtypes", [_services_backend_service__WEBPACK_IMPORTED_MODULE_5__["BackendService"]])
], ClassesComponent);



/***/ }),

/***/ "./src/app/online/homework-view.component.css":
/*!****************************************************!*\
  !*** ./src/app/online/homework-view.component.css ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29ubGluZS9ob21ld29yay12aWV3LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/online/homework-view.component.ts":
/*!***************************************************!*\
  !*** ./src/app/online/homework-view.component.ts ***!
  \***************************************************/
/*! exports provided: HomeworkViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeworkViewComponent", function() { return HomeworkViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_router_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/router.animation */ "./src/app/shared/router.animation.ts");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _services_backend_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/backend.service */ "./src/app/services/backend.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};






let HomeworkViewComponent = class HomeworkViewComponent {
    constructor(_backendService) {
        this._backendService = _backendService;
        this.state = '';
        this.savedChanges = false;
        this.error = false;
        this.errorMessage = "";
        this.dataLoading = false;
        this.showFileUpload = false;
        this.showDocument = false;
        this.displayedColumns = ['code', 'descr', '_id'];
    }
    ngOnInit() {
        this.toggleField = "resMode";
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](this.members);
        this.getData();
    }
    toggle(filter) {
        if (!filter) {
            filter = "searchMode";
        }
        else {
            filter = filter;
        }
        this.toggleField = filter;
        this.dataLoading = false;
    }
    getData(formData) {
        /*   this.dataLoading = true;
           //this.querySubscription = this._backendService.getDocs('HOMEWORK',formData).subscribe((res) => {
           this.querySubscription = this._backendService.getUserStudentTutsDoc('HOMEWORK').subscribe((res) => {
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
        this.data$ = this._backendService.getHomework('HOMEWORK', docId);
        this.toggle('editMode');
        this.dataLoading = false;
    }
    /*
        getDocUrl(docUrl) {
            this.fileName = docUrl;
            this.docUrl = this._backendService.getFileDownloadUrl(docUrl);
        }
    */
    //mat table paginator and filter functions
    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }
    applyFilter(filterValue) {
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
};
HomeworkViewComponent.ctorParameters = () => [
    { type: _services_backend_service__WEBPACK_IMPORTED_MODULE_5__["BackendService"] }
];
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: false }),
    __metadata("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
], HomeworkViewComponent.prototype, "paginator", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], { static: false }),
    __metadata("design:type", _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
], HomeworkViewComponent.prototype, "sort", void 0);
HomeworkViewComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-homework-view',
        template: __importDefault(__webpack_require__(/*! raw-loader!./homework-view.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/online/homework-view.component.html")).default,
        animations: [Object(_shared_router_animation__WEBPACK_IMPORTED_MODULE_1__["moveIn"])(), Object(_shared_router_animation__WEBPACK_IMPORTED_MODULE_1__["fallIn"])()],
        host: { '[@moveIn]': '' },
        styles: [__importDefault(__webpack_require__(/*! ./homework-view.component.css */ "./src/app/online/homework-view.component.css")).default]
    }),
    __metadata("design:paramtypes", [_services_backend_service__WEBPACK_IMPORTED_MODULE_5__["BackendService"]])
], HomeworkViewComponent);



/***/ }),

/***/ "./src/app/online/homework.component.css":
/*!***********************************************!*\
  !*** ./src/app/online/homework.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29ubGluZS9ob21ld29yay5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/online/homework.component.ts":
/*!**********************************************!*\
  !*** ./src/app/online/homework.component.ts ***!
  \**********************************************/
/*! exports provided: HomeworkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeworkComponent", function() { return HomeworkComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_router_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/router.animation */ "./src/app/shared/router.animation.ts");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _services_backend_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/backend.service */ "./src/app/services/backend.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};






let HomeworkComponent = class HomeworkComponent {
    constructor(_backendService) {
        this._backendService = _backendService;
        this.state = '';
        this.savedChanges = false;
        this.error = false;
        this.errorMessage = "";
        this.dataLoading = false;
        this.showFileUpload = false;
        this.showDocument = false;
        this.displayedColumns = ['code', 'descr', '_id'];
    }
    ngOnInit() {
        this.toggleField = "searchMode";
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](this.members);
        this.getEnrollmentCDs();
    }
    toggle(filter) {
        if (!filter) {
            filter = "searchMode";
        }
        else {
            filter = filter;
        }
        this.toggleField = filter;
        this.dataLoading = false;
    }
    getEnrollmentCDs() {
        this.dataLoading = true;
        this.querySubscription = this._backendService.getEnrollment('ENROLL_CD').subscribe((res) => {
            this.enrollmentCDs$ = res;
        }, (error) => {
            this.error = true;
            this.errorMessage = error.message;
            this.dataLoading = false;
        }, () => {
            this.dataLoading = false;
        });
    }
    getData(filterAllDocs, getOneDoc) {
        this.dataLoading = true;
        return this.querySubscription = this._backendService.getHomework(filterAllDocs, getOneDoc).subscribe((res) => {
            if (res["data"]["getHomework_Q"].CODE !== "") {
                if (getOneDoc) {
                    this.data$ = res["data"]["getHomework_Q"][0];
                    this.toggle('editMode');
                }
                else {
                    this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](res["data"]["getHomework_Q"]);
                    this.dataSource.paginator = this.paginator;
                    this.dataSource.sort = this.sort;
                }
                this.error = false;
                this.errorMessage = "";
            }
            else {
                this.error = true;
                this.errorMessage = res["data"]["getHomework_Q"].message;
            }
        }, (error) => {
            this.error = true;
            this.errorMessage = error.message;
            this.dataLoading = false;
        }, () => {
            this.dataLoading = false;
        });
    }
    setData(formData) {
        this.dataLoading = true;
        this.querySubscription = this._backendService.setHomework(formData).subscribe((res) => {
            if (res["data"]["setHomework_M"].CODE !== "") {
                this.savedChanges = true;
                this.error = false;
                this.errorMessage = "";
            }
            else {
                this.error = true;
                this.errorMessage = res["data"]["setHomework_M"].message;
            }
        }, (error) => {
            this.error = true;
            this.errorMessage = error.message;
            this.dataLoading = false;
        }, () => {
            this.dataLoading = false;
        });
    }
    updateData(formData) {
        this.dataLoading = true;
        this.querySubscription = this._backendService.setHomeworkDoc(formData).subscribe((res) => {
            if (res["data"]["setHomeworkDoc_M"].CODE !== "") {
                this.savedChanges = true;
                this.error = false;
                this.errorMessage = "";
            }
            else {
                this.error = true;
                this.errorMessage = res["data"]["setHomeworkDoc_M"].message;
            }
        }, (error) => {
            this.error = true;
            this.errorMessage = error.message;
            this.dataLoading = false;
        }, () => {
            this.dataLoading = false;
        });
    }
    deleteDoc(docId) {
        if (confirm("Are you sure want to delete this record ?")) {
            this.querySubscription = this._backendService.delHomeworkDoc(docId).subscribe((res) => {
                //console.log("res"+JSON.stringify(res))
                if (!res["data"]["delHomeworkDoc_M"]) {
                    this.toggle('searchMode');
                    this.error = false;
                    this.errorMessage = "";
                }
                else {
                    this.error = true;
                    this.errorMessage = res["data"]["delHomeworkDoc_M"].message;
                }
            }, (error) => {
                this.error = true;
                this.errorMessage = error.message;
                this.dataLoading = false;
            }, () => {
                this.dataLoading = false;
            });
        }
    }
    getDoc(docId) {
        this.docId = docId; // this is required to pass at file upload directive
        this.dataLoading = true;
        this.data$ = this._backendService.getHomework('HOMEWORK', docId);
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
    applyFilter(filterValue) {
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
};
HomeworkComponent.ctorParameters = () => [
    { type: _services_backend_service__WEBPACK_IMPORTED_MODULE_5__["BackendService"] }
];
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: false }),
    __metadata("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
], HomeworkComponent.prototype, "paginator", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], { static: false }),
    __metadata("design:type", _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
], HomeworkComponent.prototype, "sort", void 0);
HomeworkComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-homework',
        template: __importDefault(__webpack_require__(/*! raw-loader!./homework.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/online/homework.component.html")).default,
        animations: [Object(_shared_router_animation__WEBPACK_IMPORTED_MODULE_1__["moveIn"])(), Object(_shared_router_animation__WEBPACK_IMPORTED_MODULE_1__["fallIn"])()],
        host: { '[@moveIn]': '' },
        styles: [__importDefault(__webpack_require__(/*! ./homework.component.css */ "./src/app/online/homework.component.css")).default]
    }),
    __metadata("design:paramtypes", [_services_backend_service__WEBPACK_IMPORTED_MODULE_5__["BackendService"]])
], HomeworkComponent);



/***/ }),

/***/ "./src/app/online/tutorials-view.component.css":
/*!*****************************************************!*\
  !*** ./src/app/online/tutorials-view.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29ubGluZS90dXRvcmlhbHMtdmlldy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/online/tutorials-view.component.ts":
/*!****************************************************!*\
  !*** ./src/app/online/tutorials-view.component.ts ***!
  \****************************************************/
/*! exports provided: TutorialsViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TutorialsViewComponent", function() { return TutorialsViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_router_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/router.animation */ "./src/app/shared/router.animation.ts");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _services_backend_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/backend.service */ "./src/app/services/backend.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};






let TutorialsViewComponent = class TutorialsViewComponent {
    constructor(_backendService) {
        this._backendService = _backendService;
        this.state = '';
        this.savedChanges = false;
        this.error = false;
        this.errorMessage = "";
        this.dataLoading = false;
        this.showFileUpload = false;
        this.showDocument = false;
        this.displayedColumns = ['code', 'descr', '_id'];
    }
    ngOnInit() {
        this.toggleField = "resMode";
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](this.members);
        this.getData();
    }
    toggle(filter) {
        if (!filter) {
            filter = "searchMode";
        }
        else {
            filter = filter;
        }
        this.toggleField = filter;
        this.dataLoading = false;
    }
    getData(formData) {
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
        this.data$ = this._backendService.getTutorial('TUTORIALS', docId);
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
    applyFilter(filterValue) {
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
};
TutorialsViewComponent.ctorParameters = () => [
    { type: _services_backend_service__WEBPACK_IMPORTED_MODULE_5__["BackendService"] }
];
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: false }),
    __metadata("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
], TutorialsViewComponent.prototype, "paginator", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], { static: false }),
    __metadata("design:type", _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
], TutorialsViewComponent.prototype, "sort", void 0);
TutorialsViewComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-tutorials-view',
        template: __importDefault(__webpack_require__(/*! raw-loader!./tutorials-view.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/online/tutorials-view.component.html")).default,
        animations: [Object(_shared_router_animation__WEBPACK_IMPORTED_MODULE_1__["moveIn"])(), Object(_shared_router_animation__WEBPACK_IMPORTED_MODULE_1__["fallIn"])()],
        host: { '[@moveIn]': '' },
        styles: [__importDefault(__webpack_require__(/*! ./tutorials-view.component.css */ "./src/app/online/tutorials-view.component.css")).default]
    }),
    __metadata("design:paramtypes", [_services_backend_service__WEBPACK_IMPORTED_MODULE_5__["BackendService"]])
], TutorialsViewComponent);



/***/ }),

/***/ "./src/app/online/tutorials.component.css":
/*!************************************************!*\
  !*** ./src/app/online/tutorials.component.css ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29ubGluZS90dXRvcmlhbHMuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/online/tutorials.component.ts":
/*!***********************************************!*\
  !*** ./src/app/online/tutorials.component.ts ***!
  \***********************************************/
/*! exports provided: TutorialsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TutorialsComponent", function() { return TutorialsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_router_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/router.animation */ "./src/app/shared/router.animation.ts");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _services_backend_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/backend.service */ "./src/app/services/backend.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};






let TutorialsComponent = class TutorialsComponent {
    constructor(_backendService) {
        this._backendService = _backendService;
        this.state = '';
        this.savedChanges = false;
        this.error = false;
        this.errorMessage = "";
        this.dataLoading = false;
        this.showFileUpload = false;
        this.showDocument = false;
        this.displayedColumns = ['code', 'descr', '_id'];
    }
    ngOnInit() {
        this.toggleField = "searchMode";
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](this.members);
        this.getEnrollmentCDs();
    }
    toggle(filter) {
        if (!filter) {
            filter = "searchMode";
        }
        else {
            filter = filter;
        }
        this.toggleField = filter;
        this.dataLoading = false;
    }
    getEnrollmentCDs() {
        this.dataLoading = true;
        this.querySubscription = this._backendService.getEnrollment('ENROLL_CD').subscribe((res) => {
            this.enrollmentCDs$ = res;
        }, (error) => {
            this.error = true;
            this.errorMessage = error.message;
            this.dataLoading = false;
        }, () => {
            this.dataLoading = false;
        });
    }
    getData(filterAllDocs, getOneDoc) {
        this.dataLoading = true;
        return this.querySubscription = this._backendService.getTutorial(filterAllDocs, getOneDoc).subscribe((res) => {
            if (res["data"]["getTutorial_Q"].CODE !== "") {
                if (getOneDoc) {
                    this.data$ = res["data"]["getTutorial_Q"][0];
                    this.toggle('editMode');
                }
                else {
                    this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](res["data"]["getTutorial_Q"]);
                    this.dataSource.paginator = this.paginator;
                    this.dataSource.sort = this.sort;
                }
                this.error = false;
                this.errorMessage = "";
            }
            else {
                this.error = true;
                this.errorMessage = res["data"]["getTutorial_Q"].message;
            }
        }, (error) => {
            this.error = true;
            this.errorMessage = error.message;
            this.dataLoading = false;
        }, () => {
            this.dataLoading = false;
        });
    }
    setData(formData) {
        this.dataLoading = true;
        this.querySubscription = this._backendService.setTutorial(formData).subscribe((res) => {
            if (res["data"]["setTutorial_M"].CODE !== "") {
                this.savedChanges = true;
                this.error = false;
                this.errorMessage = "";
            }
            else {
                this.error = true;
                this.errorMessage = res["data"]["setTutorial_M"].message;
            }
        }, (error) => {
            this.error = true;
            this.errorMessage = error.message;
            this.dataLoading = false;
        }, () => {
            this.dataLoading = false;
        });
    }
    updateData(formData) {
        this.dataLoading = true;
        this.querySubscription = this._backendService.setTutorialDoc(formData).subscribe((res) => {
            if (res["data"]["setTutorialDoc_M"].CODE !== "") {
                this.savedChanges = true;
                this.error = false;
                this.errorMessage = "";
            }
            else {
                this.error = true;
                this.errorMessage = res["data"]["setTutorialDoc_M"].message;
            }
        }, (error) => {
            this.error = true;
            this.errorMessage = error.message;
            this.dataLoading = false;
        }, () => {
            this.dataLoading = false;
        });
    }
    deleteDoc(docId) {
        if (confirm("Are you sure want to delete this record ?")) {
            this.querySubscription = this._backendService.delTutorialDoc(docId).subscribe((res) => {
                //console.log("res"+JSON.stringify(res))
                if (!res["data"]["delTutorialDoc_M"]) {
                    this.toggle('searchMode');
                    this.error = false;
                    this.errorMessage = "";
                }
                else {
                    this.error = true;
                    this.errorMessage = res["data"]["delTutorialDoc_M"].message;
                }
            }, (error) => {
                this.error = true;
                this.errorMessage = error.message;
                this.dataLoading = false;
            }, () => {
                this.dataLoading = false;
            });
        }
    }
    getDoc(docId) {
        this.docId = docId; // this is required to pass at file upload directive
        this.dataLoading = true;
        this.data$ = this._backendService.getTutorial('TUTORIALS', docId);
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
    applyFilter(filterValue) {
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
};
TutorialsComponent.ctorParameters = () => [
    { type: _services_backend_service__WEBPACK_IMPORTED_MODULE_5__["BackendService"] }
];
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: false }),
    __metadata("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
], TutorialsComponent.prototype, "paginator", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], { static: false }),
    __metadata("design:type", _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
], TutorialsComponent.prototype, "sort", void 0);
TutorialsComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-tutorials',
        template: __importDefault(__webpack_require__(/*! raw-loader!./tutorials.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/online/tutorials.component.html")).default,
        animations: [Object(_shared_router_animation__WEBPACK_IMPORTED_MODULE_1__["moveIn"])(), Object(_shared_router_animation__WEBPACK_IMPORTED_MODULE_1__["fallIn"])()],
        host: { '[@moveIn]': '' },
        styles: [__importDefault(__webpack_require__(/*! ./tutorials.component.css */ "./src/app/online/tutorials.component.css")).default]
    }),
    __metadata("design:paramtypes", [_services_backend_service__WEBPACK_IMPORTED_MODULE_5__["BackendService"]])
], TutorialsComponent);



/***/ }),

/***/ "./src/app/services/auth-guard.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/auth-guard.service.ts ***!
  \************************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _backend_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./backend.service */ "./src/app/services/backend.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



let AuthGuardService = class AuthGuardService {
    constructor(_backendService, _router) {
        this._backendService = _backendService;
        this._router = _router;
    }
    canActivate() {
        return __awaiter(this, void 0, void 0, function* () {
            const authenticatedUser = yield this._backendService.getUser();
            const authenticated = !!authenticatedUser;
            if (!authenticated) {
                this._router.navigate(['/login']);
            }
            return authenticated;
            console.log(authenticated);
        });
    }
};
AuthGuardService.ctorParameters = () => [
    { type: _backend_service__WEBPACK_IMPORTED_MODULE_2__["BackendService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
];
AuthGuardService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [_backend_service__WEBPACK_IMPORTED_MODULE_2__["BackendService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
], AuthGuardService);



/***/ }),

/***/ "./src/app/services/backend.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/backend.service.ts ***!
  \*********************************************/
/*! exports provided: BackendService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackendService", function() { return BackendService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



let BackendService = class BackendService {
    //  private _graphQLURL = "http://bismasofttracking";
    constructor(_http) {
        this._http = _http;
        // private _graphQLURL = "http://pics.skillroverz.com/bismasofttracking";
        this._graphQLURL = "http://localhost:8080/bismasofttracking";
    }
    getConfig() {
        return _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].social;
    }
    // function to send emails using a PHP API //
    sendEmail(messageData) {
        let httpOptions_e = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/X-www-form-urlencoded' })
        };
        return this._http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].emailAPI, messageData, httpOptions_e);
    }
    // User-login-signup functions //
    getUser() {
        let httpOptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json', 'token': localStorage.getItem('token') ? localStorage.getItem('token') : "" }) };
        let graphqlQuery = {
            "query": "query getUser { getUser_Q { name email message } }"
            //     "query": "query getUser { getUser_Q { name email phone skey message } }"
        };
        return this._http.post(this._graphQLURL, graphqlQuery, httpOptions);
    }
    loginUser(input) {
        let httpOptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json', 'token': localStorage.getItem('token') ? localStorage.getItem('token') : "" }) };
        let formData = !input ? { email: "", password: "" } : input;
        let graphqlQuery = {
            "query": "query loginUser($email: String!,$password: String!) { loginUser_Q(email: $email, password: $password) { token message } }",
            "variables": {
                "email": formData.email,
                "password": formData.password
            }
        };
        return this._http.post(this._graphQLURL, graphqlQuery, httpOptions);
    }
    createUser(input) {
        let httpOptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json', 'token': localStorage.getItem('token') ? localStorage.getItem('token') : "" }) };
        let formData = !input ? { name: "", email: "", password: "", phone: "", skey: "" } : input;
        //    let formData = !input ? { name: "", email: "", password: "" } : input;
        let graphqlQuery = {
            "query": "mutation addUser($name: String!, $email: String!, $password: String!, $phone: String!, $skey: String!) { addUser_M(name:$name, email: $email, password: $password, phone: $phone, skey: $skey ) { email message } }",
            //      "query": "mutation addUser($name: String!, $email: String!, $password: String!) { addUser_M(name:$name, email: $email, password: $password) { email message } }",
            "variables": {
                "name": formData.name,
                "email": formData.email,
                "password": formData.password,
                "phone": "",
                "skey": ""
            }
        };
        return this._http.post(this._graphQLURL, graphqlQuery, httpOptions);
    }
    updateUser(input) {
        let httpOptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json', 'token': localStorage.getItem('token') ? localStorage.getItem('token') : "" }) };
        let graphqlQuery = {
            "query": "mutation updateUser($name: String!,$email: String!,$password: String!,$phone: String!,$skey: String!) { updateUser_M(name:$name, email: $email, password: $password, phone: $phone, skey: $skey) { email message } }",
            //      "query": "mutation updateUser($name: String!,$email: String!,$password: String!,$phone: String!,$skey: String!) { updateUser_M(name:$name, email: $email, password: $password) { email message } }",
            "variables": {
                "name": input.name,
                "email": input.email,
                "password": input.password,
                "phone": input.phone,
                "skey": input.skey
            }
        };
        return this._http.post(this._graphQLURL, graphqlQuery, httpOptions);
    }
    updateUserAdmin(input) {
        let httpOptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json', 'token': localStorage.getItem('token') ? localStorage.getItem('token') : "" }) };
        let graphqlQuery = {
            "query": "mutation updateUserAdmin($name: String!,$email: String!,$password: String!,$phone: String!,$skey: String!) { updateUserAdmin_M(name:$name, email: $email, password: $password, phone: $phone, skey: $skey) { email message } }",
            "variables": {
                "name": input.name,
                "email": input.email,
                "password": input.password,
                "phone": input.phone,
                "skey": input.skey
            }
        };
        return this._http.post(this._graphQLURL, graphqlQuery, httpOptions);
    }
    // voucher page functions
    getVoucher(filterAllDocs, getOneDoc) {
        let httpOptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json', 'token': localStorage.getItem('token') ? localStorage.getItem('token') : "" }) };
        let formData = !filterAllDocs ? { _id: "", CODE: "", DESCR: '' } : filterAllDocs;
        formData._id = !getOneDoc ? "" : getOneDoc;
        formData.CODE = filterAllDocs && filterAllDocs.CODE ? filterAllDocs.CODE : "";
        formData.DESCR = filterAllDocs && filterAllDocs.DESCR ? filterAllDocs.DESCR : "";
        let graphqlQuery = {
            "query": "query getVoucher($_id: String!,$CODE: String!,$DESCR: String!) { getVoucher_Q(_id: $_id, CODE: $CODE, DESCR: $DESCR) { _id CODE DESCR TYPE STATUS INVOICE VENDOR ADDRESS { ADD_TYPE ADD_LINE_1 ADD_LINE_2 PIN_CODE STATE COUNTRY } PHONE { PHONE_TYPE PHONE_NUMBER } EMAILID { EMAIL_TYPE EMAILID } EDATE RDATE DDATE PDATE LINE { LINE_NUM LINE_NAME AMOUNT } GAMOUNT GAMOUNT_DISC_TYPE DISC_G_PERCENT DISC_GAMOUNT TAX_TYPE TAX_PERCENT TAX_GAMOUNT SHIP_TYPE SHIP_PERCENT SHIP_GAMOUNT FINAL_AMOUNT PAID_AMOUNT BALANCE message } }",
            "variables": {
                "_id": formData._id,
                "CODE": formData.CODE,
                "DESCR": formData.DESCR
            }
        };
        return this._http.post(this._graphQLURL, graphqlQuery, httpOptions);
    }
    setVoucher(input) {
        let httpOptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json', 'token': localStorage.getItem('token') ? localStorage.getItem('token') : "" }) };
        let graphqlQuery = {
            "query": "mutation setVoucher($CODE: String,$DESCR: String,$TYPE: String,$STATUS: String,$INVOICE: String,$VENDOR: String,$ADDRESS:[ADDRESS],$PHONE:[PHONE],$EMAILID:[EMAILID],$EDATE: String,$RDATE: String,$DDATE: String,$PDATE: String, $LINE:[LINE], $GAMOUNT: String, $GAMOUNT_DISC_TYPE: String, $DISC_G_PERCENT: String, $DISC_GAMOUNT: String, $TAX_TYPE: String, $TAX_PERCENT: String, $TAX_GAMOUNT: String, $SHIP_TYPE: String, $SHIP_PERCENT: String, $SHIP_GAMOUNT: String, $FINAL_AMOUNT: String, $PAID_AMOUNT: String, $BALANCE: String ) { setVoucher_M(CODE:$CODE,DESCR:$DESCR,TYPE:$TYPE,STATUS:$STATUS,INVOICE:$INVOICE,VENDOR:$VENDOR,ADDRESS:$ADDRESS,PHONE:$PHONE,EMAILID:$EMAILID,EDATE:$EDATE,RDATE:$RDATE,DDATE:$DDATE,PDATE:$PDATE,LINE:$LINE, GAMOUNT:$GAMOUNT, GAMOUNT_DISC_TYPE:$GAMOUNT_DISC_TYPE, DISC_G_PERCENT:$DISC_G_PERCENT, DISC_GAMOUNT:$DISC_GAMOUNT, TAX_TYPE:$TAX_TYPE, TAX_PERCENT:$TAX_PERCENT, TAX_GAMOUNT:$TAX_GAMOUNT, SHIP_TYPE:$SHIP_TYPE, SHIP_PERCENT:$SHIP_PERCENT, SHIP_GAMOUNT:$SHIP_GAMOUNT, FINAL_AMOUNT:$FINAL_AMOUNT, PAID_AMOUNT:$PAID_AMOUNT, BALANCE:$BALANCE) { CODE message } }",
            "variables": {
                "CODE": input.CODE,
                "DESCR": input.DESCR,
                "TYPE": input.TYPE,
                "STATUS": input.STATUS,
                "INVOICE": input.INVOICE,
                "VENDOR": input.VENDOR,
                "ADDRESS": input.ADDRESS,
                "PHONE": input.PHONE,
                "EMAILID": input.EMAILID,
                "EDATE": input.EDATE,
                "RDATE": input.RDATE,
                "DDATE": input.DDATE,
                "PDATE": input.PDATE,
                "LINE": input.LINE,
                "GAMOUNT": input.GAMOUNT,
                "GAMOUNT_DISC_TYPE": input.GAMOUNT_DISC_TYPE,
                "DISC_G_PERCENT": input.DISC_G_PERCENT,
                "DISC_GAMOUNT": input.DISC_GAMOUNT,
                "TAX_TYPE": input.TAX_TYPE,
                "TAX_PERCENT": input.TAX_PERCENT,
                "TAX_GAMOUNT": input.TAX_GAMOUNT,
                "SHIP_TYPE": input.SHIP_TYPE,
                "SHIP_PERCENT": input.SHIP_PERCENT,
                "SHIP_GAMOUNT": input.SHIP_GAMOUNT,
                "FINAL_AMOUNT": input.FINAL_AMOUNT,
                "PAID_AMOUNT": input.PAID_AMOUNT,
                "BALANCE": input.BALANCE
            }
        };
        return this._http.post(this._graphQLURL, graphqlQuery, httpOptions);
    }
    setVoucherDoc(input) {
        let httpOptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json', 'token': localStorage.getItem('token') ? localStorage.getItem('token') : "" }) };
        let graphqlQuery = {
            "query": "mutation setVoucherDoc($_id:String,$CODE: String,$DESCR: String,$TYPE: String,$STATUS: String,$INVOICE: String,$VENDOR: String,$ADDRESS:[ADDRESS],$PHONE:[PHONE],$EMAILID:[EMAILID],$EDATE: String,$RDATE: String,$DDATE: String,$PDATE: String, $LINE:[LINE], $GAMOUNT: String, $GAMOUNT_DISC_TYPE: String, $DISC_G_PERCENT: String, $DISC_GAMOUNT: String, $TAX_TYPE: String, $TAX_PERCENT: String, $TAX_GAMOUNT: String, $SHIP_TYPE: String, $SHIP_PERCENT: String, $SHIP_GAMOUNT: String, $FINAL_AMOUNT: String, $PAID_AMOUNT: String, $BALANCE: String ) { setVoucherDoc_M(_id:$_id,CODE:$CODE,DESCR:$DESCR,TYPE:$TYPE,STATUS:$STATUS,INVOICE:$INVOICE,VENDOR:$VENDOR,ADDRESS:$ADDRESS,PHONE:$PHONE,EMAILID:$EMAILID,EDATE:$EDATE,RDATE:$RDATE,DDATE:$DDATE,PDATE:$PDATE,LINE:$LINE, GAMOUNT:$GAMOUNT, GAMOUNT_DISC_TYPE:$GAMOUNT_DISC_TYPE, DISC_G_PERCENT:$DISC_G_PERCENT, DISC_GAMOUNT:$DISC_GAMOUNT, TAX_TYPE:$TAX_TYPE, TAX_PERCENT:$TAX_PERCENT, TAX_GAMOUNT:$TAX_GAMOUNT, SHIP_TYPE:$SHIP_TYPE, SHIP_PERCENT:$SHIP_PERCENT, SHIP_GAMOUNT:$SHIP_GAMOUNT, FINAL_AMOUNT:$FINAL_AMOUNT, PAID_AMOUNT:$PAID_AMOUNT, BALANCE:$BALANCE) { CODE message } }",
            "variables": {
                "_id": input._id,
                "CODE": input.CODE,
                "DESCR": input.DESCR,
                "TYPE": input.TYPE,
                "STATUS": input.STATUS,
                "INVOICE": input.INVOICE,
                "VENDOR": input.VENDOR,
                "ADDRESS": input.ADDRESS,
                "PHONE": input.PHONE,
                "EMAILID": input.EMAILID,
                "EDATE": input.EDATE,
                "RDATE": input.RDATE,
                "DDATE": input.DDATE,
                "PDATE": input.PDATE,
                "LINE": input.LINE,
                "GAMOUNT": input.GAMOUNT,
                "GAMOUNT_DISC_TYPE": input.GAMOUNT_DISC_TYPE,
                "DISC_G_PERCENT": input.DISC_G_PERCENT,
                "DISC_GAMOUNT": input.DISC_GAMOUNT,
                "TAX_TYPE": input.TAX_TYPE,
                "TAX_PERCENT": input.TAX_PERCENT,
                "TAX_GAMOUNT": input.TAX_GAMOUNT,
                "SHIP_TYPE": input.SHIP_TYPE,
                "SHIP_PERCENT": input.SHIP_PERCENT,
                "SHIP_GAMOUNT": input.SHIP_GAMOUNT,
                "FINAL_AMOUNT": input.FINAL_AMOUNT,
                "PAID_AMOUNT": input.PAID_AMOUNT,
                "BALANCE": input.BALANCE
            }
        };
        return this._http.post(this._graphQLURL, graphqlQuery, httpOptions);
    }
    delVoucherDoc(input) {
        let httpOptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json', 'token': localStorage.getItem('token') ? localStorage.getItem('token') : "" }) };
        let graphqlQuery = {
            "query": "mutation delVoucherDoc($_id:String) { delVoucherDoc_M(_id:$_id) { message } }",
            "variables": {
                "_id": input
            }
        };
        return this._http.post(this._graphQLURL, graphqlQuery, httpOptions);
    }
    // employee manage page functions
    getEmployee(filterAllDocs, getOneDoc) {
        let httpOptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json', 'token': localStorage.getItem('token') ? localStorage.getItem('token') : "" }) };
        let formData = !filterAllDocs ? { _id: "", CODE: "", DESCR: '' } : filterAllDocs;
        formData._id = !getOneDoc ? "" : getOneDoc;
        formData.CODE = filterAllDocs && filterAllDocs.CODE ? filterAllDocs.CODE : "";
        formData.DESCR = filterAllDocs && filterAllDocs.DESCR ? filterAllDocs.DESCR : "";
        let graphqlQuery = {
            "query": "query getEmployee($_id: String!,$CODE: String!,$DESCR: String!) { getEmployee_Q(_id: $_id, CODE: $CODE, DESCR: $DESCR) { _id CODE SKEY DESCR MIDDLE_NAME LAST_NAME DOB FATHER_NAME MOTHER_NAME SPOUSE_NAME SDOB ADD_TYPE_1 ADD_LINE_1 ADD_LINE_2 PIN_CODE STATE COUNTRY ADD_TYPE_2 ADD_LINE_12 ADD_LINE_22 PIN_CODE2 STATE2 COUNTRY2 MOBILE1 MOBILE2 EMAIL1 EMAIL2 DEGREE COLLEGE ADD_LINE_C1 ADD_LINE_C2 PIN_CODE_C STATE_C COUNTRY_C REFERENCE_1 REFERENCE_1_ADD REFERENCE_2 REFERENCE_2_ADD JOB_CODE SALARY_CODE LEAVE_CODE message } }",
            "variables": {
                "_id": formData._id,
                "CODE": formData.CODE,
                "DESCR": formData.DESCR
            }
        };
        return this._http.post(this._graphQLURL, graphqlQuery, httpOptions);
    }
    setEmployee(input) {
        let httpOptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json', 'token': localStorage.getItem('token') ? localStorage.getItem('token') : "" }) };
        let graphqlQuery = {
            "query": "mutation setEmployee($CODE: String,$SKEY: String,$DESCR: String,$MIDDLE_NAME: String,$LAST_NAME: String,$DOB: String,$FATHER_NAME: String,$MOTHER_NAME: String,$SPOUSE_NAME: String,$SDOB: String,$ADD_TYPE_1: String,$ADD_LINE_1: String,$ADD_LINE_2: String,$PIN_CODE: String,$STATE: String,$COUNTRY: String,$ADD_TYPE_2: String,$ADD_LINE_12: String,$ADD_LINE_22: String,$PIN_CODE2: String,$STATE2: String,$COUNTRY2: String,$MOBILE1: String,$MOBILE2: String,$EMAIL1: String,$EMAIL2: String,$DEGREE: String,$COLLEGE: String,$ADD_LINE_C1: String,$ADD_LINE_C2: String,$PIN_CODE_C: String,$STATE_C: String,$COUNTRY_C: String,$REFERENCE_1: String,$REFERENCE_1_ADD: String,$REFERENCE_2: String,$REFERENCE_2_ADD: String,$JOB_CODE: String,$SALARY_CODE: String,$LEAVE_CODE: String) { setEmployee_M(CODE: $CODE,SKEY: $SKEY,DESCR: $DESCR,MIDDLE_NAME: $MIDDLE_NAME,LAST_NAME: $LAST_NAME,DOB: $DOB,FATHER_NAME: $FATHER_NAME,MOTHER_NAME: $MOTHER_NAME,SPOUSE_NAME: $SPOUSE_NAME,SDOB: $SDOB,ADD_TYPE_1: $ADD_TYPE_1,ADD_LINE_1: $ADD_LINE_1,ADD_LINE_2: $ADD_LINE_2,PIN_CODE: $PIN_CODE,STATE: $STATE,COUNTRY: $COUNTRY,ADD_TYPE_2: $ADD_TYPE_2,ADD_LINE_12: $ADD_LINE_12,ADD_LINE_22: $ADD_LINE_22,PIN_CODE2: $PIN_CODE2,STATE2: $STATE2,COUNTRY2:$COUNTRY2,MOBILE1: $MOBILE1,MOBILE2: $MOBILE2,EMAIL1: $EMAIL1,EMAIL2: $EMAIL2,DEGREE: $DEGREE,COLLEGE: $COLLEGE,ADD_LINE_C1: $ADD_LINE_C1,ADD_LINE_C2: $ADD_LINE_C2,PIN_CODE_C: $PIN_CODE_C,STATE_C: $STATE_C,COUNTRY_C: $COUNTRY_C,REFERENCE_1: $REFERENCE_1,REFERENCE_1_ADD: $REFERENCE_1_ADD,REFERENCE_2: $REFERENCE_2,REFERENCE_2_ADD: $REFERENCE_2_ADD,JOB_CODE: $JOB_CODE,SALARY_CODE: $SALARY_CODE,LEAVE_CODE: $LEAVE_CODE) { CODE message } }",
            "variables": {
                "CODE": input.CODE,
                "SKEY": input.SKEY,
                "DESCR": input.DESCR,
                "MIDDLE_NAME": input.MIDDLE_NAME,
                "LAST_NAME": input.LAST_NAME,
                "DOB": input.DOB,
                "FATHER_NAME": input.FATHER_NAME,
                "MOTHER_NAME": input.MOTHER_NAME,
                "SPOUSE_NAME": input.SPOUSE_NAME,
                "SDOB": input.SDOB,
                "ADD_TYPE_1": input.ADD_TYPE_1,
                "ADD_LINE_1": input.ADD_LINE_1,
                "ADD_LINE_2": input.ADD_LINE_2,
                "PIN_CODE": input.PIN_CODE,
                "STATE": input.STATE,
                "COUNTRY": input.COUNTRY,
                "ADD_TYPE_2": input.ADD_TYPE_2,
                "ADD_LINE_12": input.ADD_LINE_12,
                "ADD_LINE_22": input.ADD_LINE_22,
                "PIN_CODE2": input.PIN_CODE2,
                "STATE2": input.STATE2,
                "COUNTRY2": input.COUNTRY2,
                "MOBILE1": input.MOBILE1,
                "MOBILE2": input.MOBILE2,
                "EMAIL1": input.EMAIL1,
                "EMAIL2": input.EMAIL2,
                "DEGREE": input.DEGREE,
                "COLLEGE": input.COLLEGE,
                "ADD_LINE_C1": input.ADD_LINE_C1code,
                "ADD_LINE_C2": input.ADD_LINE_C2,
                "PIN_CODE_C": input.PIN_CODE_C,
                "STATE_C": input.STATE_C,
                "COUNTRY_C": input.COUNTRY_C,
                "REFERENCE_1": input.REFERENCE_1,
                "REFERENCE_1_ADD": input.REFERENCE_1_ADD,
                "REFERENCE_2": input.REFERENCE_2,
                "REFERENCE_2_ADD": input.REFERENCE_2_ADD,
                "JOB_CODE": input.JOB_CODE,
                "SALARY_CODE": input.SALARY_CODE,
                "LEAVE_CODE": input.LEAVE_CODE,
            }
        };
        return this._http.post(this._graphQLURL, graphqlQuery, httpOptions);
    }
    setEmployeeDoc(input) {
        let httpOptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json', 'token': localStorage.getItem('token') ? localStorage.getItem('token') : "" }) };
        let graphqlQuery = {
            "query": "mutation setEmployeeDoc($_id:String,$CODE: String,$SKEY: String,$DESCR: String,$MIDDLE_NAME: String,$LAST_NAME: String,$DOB: String,$FATHER_NAME: String,$MOTHER_NAME: String,$SPOUSE_NAME: String,$SDOB: String,$ADD_TYPE_1: String,$ADD_LINE_1: String,$ADD_LINE_2: String,$PIN_CODE: String,$STATE: String,$COUNTRY: String,$ADD_TYPE_2: String,$ADD_LINE_12: String,$ADD_LINE_22: String,$PIN_CODE2: String,$STATE2: String,$COUNTRY2: String,$MOBILE1: String,$MOBILE2: String,$EMAIL1: String,$EMAIL2: String,$DEGREE: String,$COLLEGE: String,$ADD_LINE_C1: String,$ADD_LINE_C2: String,$PIN_CODE_C: String,$STATE_C: String,$COUNTRY_C: String,$REFERENCE_1: String,$REFERENCE_1_ADD: String,$REFERENCE_2: String,$REFERENCE_2_ADD: String,$JOB_CODE: String,$SALARY_CODE: String,$LEAVE_CODE: String) { setEmployeeDoc_M(_id:$_id,CODE: $CODE,SKEY: $SKEY,DESCR: $DESCR,MIDDLE_NAME: $MIDDLE_NAME,LAST_NAME: $LAST_NAME,DOB: $DOB,FATHER_NAME: $FATHER_NAME,MOTHER_NAME: $MOTHER_NAME,SPOUSE_NAME: $SPOUSE_NAME,SDOB: $SDOB,ADD_TYPE_1: $ADD_TYPE_1,ADD_LINE_1: $ADD_LINE_1,ADD_LINE_2: $ADD_LINE_2,PIN_CODE: $PIN_CODE,STATE: $STATE,COUNTRY: $COUNTRY,ADD_TYPE_2: $ADD_TYPE_2,ADD_LINE_12: $ADD_LINE_12,ADD_LINE_22: $ADD_LINE_22,PIN_CODE2: $PIN_CODE2,STATE2: $STATE2,COUNTRY2:$COUNTRY2,MOBILE1: $MOBILE1,MOBILE2: $MOBILE2,EMAIL1: $EMAIL1,EMAIL2: $EMAIL2,DEGREE: $DEGREE,COLLEGE: $COLLEGE,ADD_LINE_C1: $ADD_LINE_C1,ADD_LINE_C2: $ADD_LINE_C2,PIN_CODE_C: $PIN_CODE_C,STATE_C: $STATE_C,COUNTRY_C: $COUNTRY_C,REFERENCE_1: $REFERENCE_1,REFERENCE_1_ADD: $REFERENCE_1_ADD,REFERENCE_2: $REFERENCE_2,REFERENCE_2_ADD: $REFERENCE_2_ADD,JOB_CODE: $JOB_CODE,SALARY_CODE: $SALARY_CODE,LEAVE_CODE: $LEAVE_CODE) { CODE message } }",
            "variables": {
                "_id": input._id,
                "CODE": input.CODE,
                "SKEY": input.SKEY,
                "DESCR": input.DESCR,
                "MIDDLE_NAME": input.MIDDLE_NAME,
                "LAST_NAME": input.LAST_NAME,
                "DOB": input.DOB,
                "FATHER_NAME": input.FATHER_NAME,
                "MOTHER_NAME": input.MOTHER_NAME,
                "SPOUSE_NAME": input.SPOUSE_NAME,
                "SDOB": input.SDOB,
                "ADD_TYPE_1": input.ADD_TYPE_1,
                "ADD_LINE_1": input.ADD_LINE_1,
                "ADD_LINE_2": input.ADD_LINE_2,
                "PIN_CODE": input.PIN_CODE,
                "STATE": input.STATE,
                "COUNTRY": input.COUNTRY,
                "ADD_TYPE_2": input.ADD_TYPE_2,
                "ADD_LINE_12": input.ADD_LINE_12,
                "ADD_LINE_22": input.ADD_LINE_22,
                "PIN_CODE2": input.PIN_CODE2,
                "STATE2": input.STATE2,
                "COUNTRY2": input.COUNTRY2,
                "MOBILE1": input.MOBILE1,
                "MOBILE2": input.MOBILE2,
                "EMAIL1": input.EMAIL1,
                "EMAIL2": input.EMAIL2,
                "DEGREE": input.DEGREE,
                "COLLEGE": input.COLLEGE,
                "ADD_LINE_C1": input.ADD_LINE_C1code,
                "ADD_LINE_C2": input.ADD_LINE_C2,
                "PIN_CODE_C": input.PIN_CODE_C,
                "STATE_C": input.STATE_C,
                "COUNTRY_C": input.COUNTRY_C,
                "REFERENCE_1": input.REFERENCE_1,
                "REFERENCE_1_ADD": input.REFERENCE_1_ADD,
                "REFERENCE_2": input.REFERENCE_2,
                "REFERENCE_2_ADD": input.REFERENCE_2_ADD,
                "JOB_CODE": input.JOB_CODE,
                "SALARY_CODE": input.SALARY_CODE,
                "LEAVE_CODE": input.LEAVE_CODE
            }
        };
        return this._http.post(this._graphQLURL, graphqlQuery, httpOptions);
    }
    delEmployeeDoc(input) {
        let httpOptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json', 'token': localStorage.getItem('token') ? localStorage.getItem('token') : "" }) };
        let graphqlQuery = {
            "query": "mutation delEmployeeDoc($_id:String) { delEmployeeDoc_M(_id:$_id) { message } }",
            "variables": {
                "_id": input
            }
        };
        return this._http.post(this._graphQLURL, graphqlQuery, httpOptions);
    }
    // salarycode setup page functions
    getSalaryCode(filterAllDocs, getOneDoc) {
        let httpOptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json', 'token': localStorage.getItem('token') ? localStorage.getItem('token') : "" }) };
        let formData = !filterAllDocs ? { _id: "", code: "", descr: '' } : filterAllDocs;
        formData._id = !getOneDoc ? "" : getOneDoc;
        formData.code = filterAllDocs && filterAllDocs.code ? filterAllDocs.code : "";
        formData.descr = filterAllDocs && filterAllDocs.descr ? filterAllDocs.descr : "";
        let graphqlQuery = {
            "query": "query getSalaryCode($_id: String!,$code: String!,$descr: String!) { getSalaryCode_Q(_id: $_id, code: $code, descr: $descr) { _id code descr bsalary, line { frequency ptype payval amount }, gamount, message } }",
            "variables": {
                "_id": formData._id,
                "code": formData.code,
                "descr": formData.descr
            }
        };
        return this._http.post(this._graphQLURL, graphqlQuery, httpOptions);
    }
    setSalaryCode(input) {
        let httpOptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json', 'token': localStorage.getItem('token') ? localStorage.getItem('token') : "" }) };
        let graphqlQuery = {
            "query": "mutation setSalaryCode($code: String!,$descr: String!,$bsalary: String!,$line:[Line], $gamount: String!) { setSalaryCode_M(code:$code,descr:$descr,bsalary:$bsalary,line:$line,gamount:$gamount) { code message } }",
            "variables": {
                "code": input.code,
                "descr": input.descr,
                "bsalary": input.bsalary,
                "line": input.line,
                "gamount": input.gamount
            }
        };
        return this._http.post(this._graphQLURL, graphqlQuery, httpOptions);
    }
    setSalaryCodeDoc(input) {
        let httpOptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json', 'token': localStorage.getItem('token') ? localStorage.getItem('token') : "" }) };
        let graphqlQuery = {
            "query": "mutation setSalaryCodeDoc($_id:String,$code: String!,$descr: String!,$bsalary: String!,$line:[Line], $gamount: String!) { setSalaryCodeDoc_M(_id:$_id,code:$code,descr:$descr,bsalary:$bsalary,line:$line,gamount:$gamount) { code message } }",
            "variables": {
                "_id": input._id,
                "code": input.code,
                "descr": input.descr,
                "bsalary": input.bsalary,
                "line": input.line,
                "gamount": input.gamount
            }
        };
        return this._http.post(this._graphQLURL, graphqlQuery, httpOptions);
    }
    delSalaryCodeDoc(input) {
        let httpOptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json', 'token': localStorage.getItem('token') ? localStorage.getItem('token') : "" }) };
        let graphqlQuery = {
            "query": "mutation delSalaryCodeDoc($_id:String) { delSalaryCodeDoc_M(_id:$_id) { message } }",
            "variables": {
                "_id": input
            }
        };
        return this._http.post(this._graphQLURL, graphqlQuery, httpOptions);
    }
    // jobcode setup page functions
    getJobCode(filterAllDocs, getOneDoc) {
        let httpOptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json', 'token': localStorage.getItem('token') ? localStorage.getItem('token') : "" }) };
        let formData = !filterAllDocs ? { _id: "", code: "", descr: '' } : filterAllDocs;
        formData._id = !getOneDoc ? "" : getOneDoc;
        formData.code = filterAllDocs && filterAllDocs.code ? filterAllDocs.code : "";
        formData.descr = filterAllDocs && filterAllDocs.descr ? filterAllDocs.descr : "";
        let graphqlQuery = {
            "query": "query getJobCode($_id: String!,$code: String!,$descr: String!) { getJobCode_Q(_id: $_id, code: $code, descr: $descr) { _id code descr job_role job_duty job_descr comments message } }",
            "variables": {
                "_id": formData._id,
                "code": formData.code,
                "descr": formData.descr
            }
        };
        return this._http.post(this._graphQLURL, graphqlQuery, httpOptions);
    }
    setJobCode(input) {
        let httpOptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json', 'token': localStorage.getItem('token') ? localStorage.getItem('token') : "" }) };
        let graphqlQuery = {
            "query": "mutation setJobCode($code: String!,$descr: String!,$job_role: String!,$job_duty: String!,$job_descr: String!,$comments: String!) { setJobCode_M(code:$code,descr:$descr,job_role:$job_role,job_duty:$job_duty,job_descr:$job_descr,comments:$comments) { code message } }",
            "variables": {
                "code": input.code,
                "descr": input.descr,
                "job_role": input.job_role,
                "job_duty": input.job_duty,
                "job_descr": input.job_descr,
                "comments": input.comments,
            }
        };
        return this._http.post(this._graphQLURL, graphqlQuery, httpOptions);
    }
    setJobCodeDoc(input) {
        let httpOptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json', 'token': localStorage.getItem('token') ? localStorage.getItem('token') : "" }) };
        let graphqlQuery = {
            "query": "mutation setJobCodeDoc($_id: String,$code: String!,$descr: String!,$job_role: String!,$job_duty: String!,$job_descr: String!,$comments: String!) { setJobCodeDoc_M(_id:$_id,code:$code,descr:$descr,job_role:$job_role,job_duty:$job_duty,job_descr:$job_descr,comments:$comments) { code message } }",
            "variables": {
                "_id": input._id,
                "code": input.code,
                "descr": input.descr,
                "job_role": input.job_role,
                "job_duty": input.job_duty,
                "job_descr": input.job_descr,
                "comments": input.comments,
            }
        };
        return this._http.post(this._graphQLURL, graphqlQuery, httpOptions);
    }
    delJobCodeDoc(input) {
        let httpOptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json', 'token': localStorage.getItem('token') ? localStorage.getItem('token') : "" }) };
        let graphqlQuery = {
            "query": "mutation delJobCodeDoc($_id:String) { delJobCodeDoc_M(_id:$_id) { message } }",
            "variables": {
                "_id": input
            }
        };
        return this._http.post(this._graphQLURL, graphqlQuery, httpOptions);
    }
    // leavecode setup page functions
    getLeaveCode(filterAllDocs, getOneDoc) {
        let httpOptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json', 'token': localStorage.getItem('token') ? localStorage.getItem('token') : "" }) };
        let formData = !filterAllDocs ? { _id: "", code: "", descr: '' } : filterAllDocs;
        formData._id = !getOneDoc ? "" : getOneDoc;
        formData.code = filterAllDocs && filterAllDocs.code ? filterAllDocs.code : "";
        formData.descr = filterAllDocs && filterAllDocs.descr ? filterAllDocs.descr : "";
        let graphqlQuery = {
            "query": "query getLeaveCode($_id: String!,$code: String!,$descr: String!) { getLeaveCode_Q(_id: $_id, code: $code, descr: $descr) { _id code descr message } }",
            "variables": {
                "_id": formData._id,
                "code": formData.code,
                "descr": formData.descr
            }
        };
        return this._http.post(this._graphQLURL, graphqlQuery, httpOptions);
    }
    setLeaveCode(input) {
        let httpOptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json', 'token': localStorage.getItem('token') ? localStorage.getItem('token') : "" }) };
        let graphqlQuery = {
            "query": "mutation setLeaveCode($code: String!,$descr: String!) { setLeaveCode_M(code:$code,descr:$descr) { code message } }",
            "variables": {
                "code": input.code,
                "descr": input.descr,
            }
        };
        return this._http.post(this._graphQLURL, graphqlQuery, httpOptions);
    }
    setLeaveCodeDoc(input) {
        let httpOptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json', 'token': localStorage.getItem('token') ? localStorage.getItem('token') : "" }) };
        let graphqlQuery = {
            "query": "mutation setLeaveCodeDoc($_id:String,$code: String!,$descr: String!) { setLeaveCodeDoc_M(_id:$_id,code:$code,descr:$descr) { code message } }",
            "variables": {
                "_id": input._id,
                "code": input.code,
                "descr": input.descr,
            }
        };
        return this._http.post(this._graphQLURL, graphqlQuery, httpOptions);
    }
    delLeaveCodeDoc(input) {
        let httpOptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json', 'token': localStorage.getItem('token') ? localStorage.getItem('token') : "" }) };
        let graphqlQuery = {
            "query": "mutation delLeaveCodeDoc($_id:String) { delLeaveCodeDoc_M(_id:$_id) { message } }",
            "variables": {
                "_id": input
            }
        };
        return this._http.post(this._graphQLURL, graphqlQuery, httpOptions);
    }
    // Expenses voucher page functions
    getExpenses(filterAllDocs, getOneDoc) {
        let httpOptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json', 'token': localStorage.getItem('token') ? localStorage.getItem('token') : "" }) };
        let formData = !filterAllDocs ? { _id: "", code: "", descr: '' } : filterAllDocs;
        formData._id = !getOneDoc ? "" : getOneDoc;
        formData.code = filterAllDocs && filterAllDocs.code ? filterAllDocs.code : "";
        formData.descr = filterAllDocs && filterAllDocs.descr ? filterAllDocs.descr : "";
        let graphqlQuery = {
            "query": "query getExpenses($_id: String!,$code: String!,$descr: String!) { getSalaryVoucher_Q(_id: $_id, code: $code, descr: $descr) { _id emplid emplskey empldescr empllastname emplsalcode paiddata code descr bsalary line { frequency ptype payval amount } gamount, message } }",
            "variables": {
                "_id": formData._id,
                "code": formData.code,
                "descr": formData.descr
            }
        };
        return this._http.post(this._graphQLURL, graphqlQuery, httpOptions);
    }
    setExpenses(input) {
        let httpOptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json', 'token': localStorage.getItem('token') ? localStorage.getItem('token') : "" }) };
        let graphqlQuery = {
            "query": "mutation setExpenses($emplid:String,$emplskey:String,$empldescr: String,$empllastname: String,$emplsalcode: String,$paiddata: String,$code: String!,$descr: String!,$bsalary: String!,$line:[Line], $gamount: String!) { setSalaryVoucher_M(emplid:$emplid,emplskey:$emplskey,empldescr: $empldescr,empllastname: $empllastname,emplsalcode: $emplsalcode,paiddata: $paiddata,code:$code,descr:$descr,bsalary:$bsalary,line:$line,gamount:$gamount) { code message } }",
            "variables": {
                "emplid": input.emplid,
                "emplskey": input.emplskey,
                "empldescr": input.empldescr,
                "empllastname": input.empllastname,
                "emplsalcode": input.emplsalcode,
                "paiddata": input.paiddata,
                "code": input.code,
                "descr": input.descr,
                "bsalary": input.bsalary,
                "line": input.line,
                "gamount": input.gamount
            }
        };
        return this._http.post(this._graphQLURL, graphqlQuery, httpOptions);
    }
    setExepnsesDoc(input) {
        //"query": "mutation setExpensesDoc($_id:String,$code: String!,$descr: String!,$bsalary: String!,$line:[Line], $gamount: String!) { setSalaryVoucherDoc_M(_id:$_id,code:$code,descr:$descr,bsalary:$bsalary,line:$line,gamount:$gamount) { code message } }",
        let httpOptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json', 'token': localStorage.getItem('token') ? localStorage.getItem('token') : "" }) };
        let graphqlQuery = {
            "query": "mutation setExpensesDoc($_id:String,$emplid:String,$emplskey:String,$empldescr: String,$empllastname: String,$emplsalcode: String,$paiddata: String,$code: String!,$descr: String!,$bsalary: String!,$line:[Line], $gamount: String!) { setSalaryVoucherDoc_M(_id:$_id,emplid:$emplid,emplskey:$emplskey,empldescr: $empldescr,empllastname: $empllastname,emplsalcode: $emplsalcode,paiddata: $paiddata,code:$code,descr:$descr,bsalary:$bsalary,line:$line,gamount:$gamount) { code message } }",
            "variables": {
                "_id": input._id,
                "emplid": input.emplid,
                "emplskey": input.emplskey,
                "empldescr": input.empldescr,
                "empllastname": input.empllastname,
                "emplsalcode": input.emplsalcode,
                "paiddata": input.paiddata,
                "code": input.code,
                "descr": input.descr,
                "bsalary": input.bsalary,
                "line": input.line,
                "gamount": input.gamount
            }
        };
        return this._http.post(this._graphQLURL, graphqlQuery, httpOptions);
    }
    delExpensesDoc(input) {
        let httpOptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json', 'token': localStorage.getItem('token') ? localStorage.getItem('token') : "" }) };
        let graphqlQuery = {
            "query": "mutation delExpensesDoc($_id:String) { delFeeDoc_M(_id:$_id) { message } }",
            "variables": {
                "_id": input
            }
        };
        return this._http.post(this._graphQLURL, graphqlQuery, httpOptions);
    }
    // salary voucher page functions
    getSalaryVoucher(filterAllDocs, getOneDoc) {
        let httpOptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json', 'token': localStorage.getItem('token') ? localStorage.getItem('token') : "" }) };
        let formData = !filterAllDocs ? { _id: "", code: "", descr: '' } : filterAllDocs;
        formData._id = !getOneDoc ? "" : getOneDoc;
        formData.code = filterAllDocs && filterAllDocs.code ? filterAllDocs.code : "";
        formData.descr = filterAllDocs && filterAllDocs.descr ? filterAllDocs.descr : "";
        let graphqlQuery = {
            "query": "query getSalaryVoucher($_id: String!,$code: String!,$descr: String!) { getSalaryVoucher_Q(_id: $_id, code: $code, descr: $descr) { _id emplid emplskey empldescr empllastname emplsalcode paiddata code descr bsalary line { frequency ptype payval amount } gamount, message } }",
            "variables": {
                "_id": formData._id,
                "code": formData.code,
                "descr": formData.descr
            }
        };
        return this._http.post(this._graphQLURL, graphqlQuery, httpOptions);
    }
    setSalaryVoucher(input) {
        let httpOptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json', 'token': localStorage.getItem('token') ? localStorage.getItem('token') : "" }) };
        let graphqlQuery = {
            "query": "mutation setSalaryVoucher($emplid:String,$emplskey:String,$empldescr: String,$empllastname: String,$emplsalcode: String,$paiddata: String,$code: String!,$descr: String!,$bsalary: String!,$line:[Line], $gamount: String!) { setSalaryVoucher_M(emplid:$emplid,emplskey:$emplskey,empldescr: $empldescr,empllastname: $empllastname,emplsalcode: $emplsalcode,paiddata: $paiddata,code:$code,descr:$descr,bsalary:$bsalary,line:$line,gamount:$gamount) { code message } }",
            "variables": {
                "emplid": input.emplid,
                "emplskey": input.emplskey,
                "empldescr": input.empldescr,
                "empllastname": input.empllastname,
                "emplsalcode": input.emplsalcode,
                "paiddata": input.paiddata,
                "code": input.code,
                "descr": input.descr,
                "bsalary": input.bsalary,
                "line": input.line,
                "gamount": input.gamount
            }
        };
        return this._http.post(this._graphQLURL, graphqlQuery, httpOptions);
    }
    setSalaryVoucherDoc(input) {
        //"query": "mutation setSalaryVoucherDoc($_id:String,$code: String!,$descr: String!,$bsalary: String!,$line:[Line], $gamount: String!) { setSalaryVoucherDoc_M(_id:$_id,code:$code,descr:$descr,bsalary:$bsalary,line:$line,gamount:$gamount) { code message } }",
        let httpOptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json', 'token': localStorage.getItem('token') ? localStorage.getItem('token') : "" }) };
        let graphqlQuery = {
            "query": "mutation setSalaryVoucherDoc($_id:String,$emplid:String,$emplskey:String,$empldescr: String,$empllastname: String,$emplsalcode: String,$paiddata: String,$code: String!,$descr: String!,$bsalary: String!,$line:[Line], $gamount: String!) { setSalaryVoucherDoc_M(_id:$_id,emplid:$emplid,emplskey:$emplskey,empldescr: $empldescr,empllastname: $empllastname,emplsalcode: $emplsalcode,paiddata: $paiddata,code:$code,descr:$descr,bsalary:$bsalary,line:$line,gamount:$gamount) { code message } }",
            "variables": {
                "_id": input._id,
                "emplid": input.emplid,
                "emplskey": input.emplskey,
                "empldescr": input.empldescr,
                "empllastname": input.empllastname,
                "emplsalcode": input.emplsalcode,
                "paiddata": input.paiddata,
                "code": input.code,
                "descr": input.descr,
                "bsalary": input.bsalary,
                "line": input.line,
                "gamount": input.gamount
            }
        };
        return this._http.post(this._graphQLURL, graphqlQuery, httpOptions);
    }
    delSalaryVoucherDoc(input) {
        let httpOptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json', 'token': localStorage.getItem('token') ? localStorage.getItem('token') : "" }) };
        let graphqlQuery = {
            "query": "mutation delSalaryVoucherDoc($_id:String) { delSalaryVoucherDoc_M(_id:$_id) { message } }",
            "variables": {
                "_id": input
            }
        };
        return this._http.post(this._graphQLURL, graphqlQuery, httpOptions);
    }
    // generic collection url pages and generic CRUD functions
    get timestamp() {
        const d = new Date();
        return d;
        // return firebase.firestore.FieldValue.serverTimestamp();
    }
    ;
    // Student manage page functions
    getStudent(filterAllDocs, getOneDoc) {
        let httpOptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json', 'token': localStorage.getItem('token') ? localStorage.getItem('token') : "" }) };
        let formData = !filterAllDocs ? { _id: "", CODE: "", DESCR: '' } : filterAllDocs;
        formData._id = !getOneDoc ? "" : getOneDoc;
        formData.CODE = filterAllDocs && filterAllDocs.CODE ? filterAllDocs.CODE : "";
        formData.DESCR = filterAllDocs && filterAllDocs.DESCR ? filterAllDocs.DESCR : "";
        let graphqlQuery = {
            "query": "query getStudent($_id: String!,$CODE: String!,$DESCR: String!) { getStudent_Q(_id: $_id, CODE: $CODE, DESCR: $DESCR) { _id CODE SKEY DESCR MIDDLE_NAME LAST_NAME DOB FATHER_NAME MOTHER_NAME SPOUSE_NAME SDOB ADD_TYPE_1 ADD_LINE_1 ADD_LINE_2 PIN_CODE STATE COUNTRY ADD_TYPE_2 ADD_LINE_12 ADD_LINE_22 PIN_CODE2 STATE2 COUNTRY2 MOBILE1 MOBILE2 EMAIL1 EMAIL2 DEGREE COLLEGE ADD_LINE_C1 ADD_LINE_C2 PIN_CODE_C STATE_C COUNTRY_C REFERENCE_1 REFERENCE_1_ADD REFERENCE_2 REFERENCE_2_ADD JOB_CODE SALARY_CODE LEAVE_CODE message } }",
            "variables": {
                "_id": formData._id,
                "CODE": formData.CODE,
                "DESCR": formData.DESCR
            }
        };
        return this._http.post(this._graphQLURL, graphqlQuery, httpOptions);
    }
    setStudent(input) {
        let httpOptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json', 'token': localStorage.getItem('token') ? localStorage.getItem('token') : "" }) };
        let graphqlQuery = {
            "query": "mutation setStudent($CODE: String,$SKEY: String,$DESCR: String,$MIDDLE_NAME: String,$LAST_NAME: String,$DOB: String,$FATHER_NAME: String,$MOTHER_NAME: String,$SPOUSE_NAME: String,$SDOB: String,$ADD_TYPE_1: String,$ADD_LINE_1: String,$ADD_LINE_2: String,$PIN_CODE: String,$STATE: String,$COUNTRY: String,$ADD_TYPE_2: String,$ADD_LINE_12: String,$ADD_LINE_22: String,$PIN_CODE2: String,$STATE2: String,$COUNTRY2: String,$MOBILE1: String,$MOBILE2: String,$EMAIL1: String,$EMAIL2: String,$DEGREE: String,$COLLEGE: String,$ADD_LINE_C1: String,$ADD_LINE_C2: String,$PIN_CODE_C: String,$STATE_C: String,$COUNTRY_C: String,$REFERENCE_1: String,$REFERENCE_1_ADD: String,$REFERENCE_2: String,$REFERENCE_2_ADD: String,$JOB_CODE: String,$SALARY_CODE: String,$LEAVE_CODE: String) { setStudent_M(CODE: $CODE,SKEY: $SKEY,DESCR: $DESCR,MIDDLE_NAME: $MIDDLE_NAME,LAST_NAME: $LAST_NAME,DOB: $DOB,FATHER_NAME: $FATHER_NAME,MOTHER_NAME: $MOTHER_NAME,SPOUSE_NAME: $SPOUSE_NAME,SDOB: $SDOB,ADD_TYPE_1: $ADD_TYPE_1,ADD_LINE_1: $ADD_LINE_1,ADD_LINE_2: $ADD_LINE_2,PIN_CODE: $PIN_CODE,STATE: $STATE,COUNTRY: $COUNTRY,ADD_TYPE_2: $ADD_TYPE_2,ADD_LINE_12: $ADD_LINE_12,ADD_LINE_22: $ADD_LINE_22,PIN_CODE2: $PIN_CODE2,STATE2: $STATE2,COUNTRY2:$COUNTRY2,MOBILE1: $MOBILE1,MOBILE2: $MOBILE2,EMAIL1: $EMAIL1,EMAIL2: $EMAIL2,DEGREE: $DEGREE,COLLEGE: $COLLEGE,ADD_LINE_C1: $ADD_LINE_C1,ADD_LINE_C2: $ADD_LINE_C2,PIN_CODE_C: $PIN_CODE_C,STATE_C: $STATE_C,COUNTRY_C: $COUNTRY_C,REFERENCE_1: $REFERENCE_1,REFERENCE_1_ADD: $REFERENCE_1_ADD,REFERENCE_2: $REFERENCE_2,REFERENCE_2_ADD: $REFERENCE_2_ADD,JOB_CODE: $JOB_CODE,SALARY_CODE: $SALARY_CODE,LEAVE_CODE: $LEAVE_CODE) { CODE message } }",
            "variables": {
                "CODE": input.CODE,
                "SKEY": input.SKEY,
                "DESCR": input.DESCR,
                "MIDDLE_NAME": input.MIDDLE_NAME,
                "LAST_NAME": input.LAST_NAME,
                "DOB": input.DOB,
                "FATHER_NAME": input.FATHER_NAME,
                "MOTHER_NAME": input.MOTHER_NAME,
                "SPOUSE_NAME": input.GURADIN_NAME,
                "SDOB": input.GDOB,
                "ADD_TYPE_1": input.ADD_TYPE_1,
                "ADD_LINE_1": input.ADD_LINE_1,
                "ADD_LINE_2": input.ADD_LINE_2,
                "PIN_CODE": input.PIN_CODE,
                "STATE": input.STATE,
                "COUNTRY": input.COUNTRY,
                "ADD_TYPE_2": input.ADD_TYPE_2,
                "ADD_LINE_12": input.ADD_LINE_12,
                "ADD_LINE_22": input.ADD_LINE_22,
                "PIN_CODE2": input.PIN_CODE2,
                "STATE2": input.STATE2,
                "COUNTRY2": input.COUNTRY2,
                "MOBILE1": input.MOBILE1,
                "MOBILE2": input.MOBILE2,
                "EMAIL1": input.EMAIL1,
                "EMAIL2": input.EMAIL2,
                "DEGREE": input.DEGREE,
                "COLLEGE": input.COLLEGE,
                "ADD_LINE_C1": input.ADD_LINE_C1,
                "ADD_LINE_C2": input.ADD_LINE_C2,
                "PIN_CODE_C": input.PIN_CODE_C,
                "STATE_C": input.STATE_C,
                "COUNTRY_C": input.COUNTRY_C,
                "REFERENCE_1": input.REFERENCE_1,
                "REFERENCE_1_ADD": input.REFERENCE_1_ADD,
                "REFERENCE_2": input.REFERENCE_2,
                "REFERENCE_2_ADD": input.REFERENCE_2_ADD,
                "JOB_CODE": input.ENROLLMENT_CODE,
                "SALARY_CODE": input.FEE_CODE,
                "LEAVE_CODE": input.MARKS_CODE
            }
        };
        return this._http.post(this._graphQLURL, graphqlQuery, httpOptions);
    }
    setStudentDoc(input) {
        let httpOptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json', 'token': localStorage.getItem('token') ? localStorage.getItem('token') : "" }) };
        let graphqlQuery = {
            "query": "mutation setStudentDoc($_id:String,$CODE: String,$SKEY: String,$DESCR: String,$MIDDLE_NAME: String,$LAST_NAME: String,$DOB: String,$FATHER_NAME: String,$MOTHER_NAME: String,$SPOUSE_NAME: String,$SDOB: String,$ADD_TYPE_1: String,$ADD_LINE_1: String,$ADD_LINE_2: String,$PIN_CODE: String,$STATE: String,$COUNTRY: String,$ADD_TYPE_2: String,$ADD_LINE_12: String,$ADD_LINE_22: String,$PIN_CODE2: String,$STATE2: String,$COUNTRY2: String,$MOBILE1: String,$MOBILE2: String,$EMAIL1: String,$EMAIL2: String,$DEGREE: String,$COLLEGE: String,$ADD_LINE_C1: String,$ADD_LINE_C2: String,$PIN_CODE_C: String,$STATE_C: String,$COUNTRY_C: String,$REFERENCE_1: String,$REFERENCE_1_ADD: String,$REFERENCE_2: String,$REFERENCE_2_ADD: String,$JOB_CODE: String,$SALARY_CODE: String,$LEAVE_CODE: String) { setStudentDoc_M(_id:$_id,CODE: $CODE,SKEY: $SKEY,DESCR: $DESCR,MIDDLE_NAME: $MIDDLE_NAME,LAST_NAME: $LAST_NAME,DOB: $DOB,FATHER_NAME: $FATHER_NAME,MOTHER_NAME: $MOTHER_NAME,SPOUSE_NAME: $SPOUSE_NAME,SDOB: $SDOB,ADD_TYPE_1: $ADD_TYPE_1,ADD_LINE_1: $ADD_LINE_1,ADD_LINE_2: $ADD_LINE_2,PIN_CODE: $PIN_CODE,STATE: $STATE,COUNTRY: $COUNTRY,ADD_TYPE_2: $ADD_TYPE_2,ADD_LINE_12: $ADD_LINE_12,ADD_LINE_22: $ADD_LINE_22,PIN_CODE2: $PIN_CODE2,STATE2: $STATE2,COUNTRY2:$COUNTRY2,MOBILE1: $MOBILE1,MOBILE2: $MOBILE2,EMAIL1: $EMAIL1,EMAIL2: $EMAIL2,DEGREE: $DEGREE,COLLEGE: $COLLEGE,ADD_LINE_C1: $ADD_LINE_C1,ADD_LINE_C2: $ADD_LINE_C2,PIN_CODE_C: $PIN_CODE_C,STATE_C: $STATE_C,COUNTRY_C: $COUNTRY_C,REFERENCE_1: $REFERENCE_1,REFERENCE_1_ADD: $REFERENCE_1_ADD,REFERENCE_2: $REFERENCE_2,REFERENCE_2_ADD: $REFERENCE_2_ADD,JOB_CODE: $JOB_CODE,SALARY_CODE: $SALARY_CODE,LEAVE_CODE: $LEAVE_CODE) { CODE message } }",
            "variables": {
                "_id": input._id,
                "CODE": input.CODE,
                "SKEY": input.SKEY,
                "DESCR": input.DESCR,
                "MIDDLE_NAME": input.MIDDLE_NAME,
                "LAST_NAME": input.LAST_NAME,
                "DOB": input.DOB,
                "FATHER_NAME": input.FATHER_NAME,
                "MOTHER_NAME": input.MOTHER_NAME,
                "SPOUSE_NAME": input.GUARDIAN_NAME,
                "SDOB": input.GDOB,
                "ADD_TYPE_1": input.ADD_TYPE_1,
                "ADD_LINE_1": input.ADD_LINE_1,
                "ADD_LINE_2": input.ADD_LINE_2,
                "PIN_CODE": input.PIN_CODE,
                "STATE": input.STATE,
                "COUNTRY": input.COUNTRY,
                "ADD_TYPE_2": input.ADD_TYPE_2,
                "ADD_LINE_12": input.ADD_LINE_12,
                "ADD_LINE_22": input.ADD_LINE_22,
                "PIN_CODE2": input.PIN_CODE2,
                "STATE2": input.STATE2,
                "COUNTRY2": input.COUNTRY2,
                "MOBILE1": input.MOBILE1,
                "MOBILE2": input.MOBILE2,
                "EMAIL1": input.EMAIL1,
                "EMAIL2": input.EMAIL2,
                "DEGREE": input.DEGREE,
                "COLLEGE": input.COLLEGE,
                "ADD_LINE_C1": input.ADD_LINE_C1,
                "ADD_LINE_C2": input.ADD_LINE_C2,
                "PIN_CODE_C": input.PIN_CODE_C,
                "STATE_C": input.STATE_C,
                "COUNTRY_C": input.COUNTRY_C,
                "REFERENCE_1": input.REFERENCE_1,
                "REFERENCE_1_ADD": input.REFERENCE_1_ADD,
                "REFERENCE_2": input.REFERENCE_2,
                "REFERENCE_2_ADD": input.REFERENCE_2_ADD,
                "JOB_CODE": input.ENROLLMENT_CODE,
                "SALARY_CODE": input.FEE_CODE,
                "LEAVE_CODE": input.MARKS_CODE
            }
        };
        return this._http.post(this._graphQLURL, graphqlQuery, httpOptions);
    }
    delStudentDoc(input) {
        let httpOptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json', 'token': localStorage.getItem('token') ? localStorage.getItem('token') : "" }) };
        let graphqlQuery = {
            "query": "mutation delStudentDoc($_id:String) { delStudentDoc_M(_id:$_id) { message } }",
            "variables": {
                "_id": input
            }
        };
        return this._http.post(this._graphQLURL, graphqlQuery, httpOptions);
    }
    // Enrollment setup page functions
    getEnrollment(filterAllDocs, getOneDoc) {
        let httpOptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json', 'token': localStorage.getItem('token') ? localStorage.getItem('token') : "" }) };
        let formData = !filterAllDocs ? { _id: "", code: "", descr: '' } : filterAllDocs;
        formData._id = !getOneDoc ? "" : getOneDoc;
        formData.code = filterAllDocs && filterAllDocs.code ? filterAllDocs.code : "";
        formData.descr = filterAllDocs && filterAllDocs.descr ? filterAllDocs.descr : "";
        let graphqlQuery = {
            "query": "query getEnrollment($_id: String!,$code: String!,$descr: String!) { getEnrollment_Q(_id: $_id, code: $code, descr: $descr) { _id code descr orgname session grade comments message } }",
            "variables": {
                "_id": formData._id,
                "code": formData.code,
                "descr": formData.descr
            }
        };
        return this._http.post(this._graphQLURL, graphqlQuery, httpOptions);
    }
    setEnrollment(input) {
        let httpOptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json', 'token': localStorage.getItem('token') ? localStorage.getItem('token') : "" }) };
        let graphqlQuery = {
            "query": "mutation setEnrollment($code: String!,$descr: String!,$orgname: String!,$session: String!,$grade: String!,$comments: String!) { setEnrollment_M(code:$code,descr:$descr,orgname:$orgname,session:$session,grade:$grade,comments:$comments) { code message } }",
            "variables": {
                "code": input.code,
                "descr": input.descr,
                "orgname": input.orgname,
                "session": input.session,
                "grade": input.grade,
                "comments": input.comments,
            }
        };
        return this._http.post(this._graphQLURL, graphqlQuery, httpOptions);
    }
    setEnrollmentDoc(input) {
        let httpOptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json', 'token': localStorage.getItem('token') ? localStorage.getItem('token') : "" }) };
        let graphqlQuery = {
            "query": "mutation setEnrollmentDoc($_id:String,$code: String!,$descr: String!,$orgname: String!,$session: String!,$grade: String!,$comments: String!) { setEnrollmentDoc_M(_id:$_id,code:$code,descr:$descr,orgname:$orgname,session:$session,grade:$grade,comments:$comments) { code message } }",
            "variables": {
                "_id": input._id,
                "code": input.code,
                "descr": input.descr,
                "orgname": input.orgname,
                "session": input.session,
                "grade": input.grade,
                "comments": input.comments
            }
        };
        return this._http.post(this._graphQLURL, graphqlQuery, httpOptions);
    }
    delEnrollmentDoc(input) {
        let httpOptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json', 'token': localStorage.getItem('token') ? localStorage.getItem('token') : "" }) };
        let graphqlQuery = {
            "query": "mutation delEnrollmeCodeDoc($_id:String) { delEnrollmeCodeDoc_M(_id:$_id) { message } }",
            "variables": {
                "_id": input
            }
        };
        return this._http.post(this._graphQLURL, graphqlQuery, httpOptions);
    }
    // Marks code setup page functions
    getMarksCode(filterAllDocs, getOneDoc) {
        let httpOptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json', 'token': localStorage.getItem('token') ? localStorage.getItem('token') : "" }) };
        let formData = !filterAllDocs ? { _id: "", code: "", descr: '' } : filterAllDocs;
        formData._id = !getOneDoc ? "" : getOneDoc;
        formData.code = filterAllDocs && filterAllDocs.code ? filterAllDocs.code : "";
        formData.descr = filterAllDocs && filterAllDocs.descr ? filterAllDocs.descr : "";
        let graphqlQuery = {
            "query": "query getMarksCode($_id: String!,$code: String!,$descr: String!) { getMarksCode_Q(_id: $_id, code: $code, descr: $descr) { _id code descr , mline { subject minmarks maxmarks marks }, gmarks, message } }",
            "variables": {
                "_id": formData._id,
                "code": formData.code,
                "descr": formData.descr
            }
        };
        return this._http.post(this._graphQLURL, graphqlQuery, httpOptions);
    }
    setMarksCode(input) {
        let httpOptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json', 'token': localStorage.getItem('token') ? localStorage.getItem('token') : "" }) };
        let graphqlQuery = {
            "query": "mutation setMarksCode($code: String!,$descr: String!,$mline:[MLine], $gmarks: String!) { setMarksCode_M(code:$code,descr:$descr,mline:$mline,gmarks:$gmarks) { code message } }",
            "variables": {
                "code": input.code,
                "descr": input.descr,
                "mline": input.mline,
                "gmarks": input.gmarks
            }
        };
        return this._http.post(this._graphQLURL, graphqlQuery, httpOptions);
    }
    setMarksCodeDoc(input) {
        let httpOptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json', 'token': localStorage.getItem('token') ? localStorage.getItem('token') : "" }) };
        let graphqlQuery = {
            "query": "mutation setMarksCodeDoc($_id:String,$code: String!,$descr: String!,$mline:[MLine], $gmarks: String!) { setMarksCodeDoc_M(_id:$_id,code:$code,descr:$descr,mline:$mline,gmarks:$gmarks) { code message } }",
            "variables": {
                "_id": input._id,
                "code": input.code,
                "descr": input.descr,
                "mline": input.mline,
                "gmarks": input.gmarks
            }
        };
        return this._http.post(this._graphQLURL, graphqlQuery, httpOptions);
    }
    delMarksCodeDoc(input) {
        let httpOptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json', 'token': localStorage.getItem('token') ? localStorage.getItem('token') : "" }) };
        let graphqlQuery = {
            "query": "mutation delMarksCodeDoc($_id:String) { delMarksCodeDoc_M(_id:$_id) { message } }",
            "variables": {
                "_id": input
            }
        };
        return this._http.post(this._graphQLURL, graphqlQuery, httpOptions);
    }
    // Fee code setup page functions
    getFeeCode(filterAllDocs, getOneDoc) {
        let httpOptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json', 'token': localStorage.getItem('token') ? localStorage.getItem('token') : "" }) };
        let formData = !filterAllDocs ? { _id: "", code: "", descr: '' } : filterAllDocs;
        formData._id = !getOneDoc ? "" : getOneDoc;
        formData.code = filterAllDocs && filterAllDocs.code ? filterAllDocs.code : "";
        formData.descr = filterAllDocs && filterAllDocs.descr ? filterAllDocs.descr : "";
        let graphqlQuery = {
            "query": "query getFeeCode($_id: String!,$code: String!,$descr: String!) { getFeeCode_Q(_id: $_id, code: $code, descr: $descr) { _id code descr bfees, line { frequency ptype payval amount }, gamount, message } }",
            "variables": {
                "_id": formData._id,
                "code": formData.code,
                "descr": formData.descr
            }
        };
        return this._http.post(this._graphQLURL, graphqlQuery, httpOptions);
    }
    setFeeCode(input) {
        let httpOptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json', 'token': localStorage.getItem('token') ? localStorage.getItem('token') : "" }) };
        let graphqlQuery = {
            "query": "mutation setFeeCode($code: String!,$descr: String!,$bfees: String!,$line:[Line], $gamount: String!) { setFeeCode_M(code:$code,descr:$descr,bfees:$bfees,line:$line,gamount:$gamount) { code message } }",
            "variables": {
                "code": input.code,
                "descr": input.descr,
                "bfees": input.bfees,
                "line": input.line,
                "gamount": input.gamount
            }
        };
        return this._http.post(this._graphQLURL, graphqlQuery, httpOptions);
    }
    setFeeCodeDoc(input) {
        let httpOptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json', 'token': localStorage.getItem('token') ? localStorage.getItem('token') : "" }) };
        let graphqlQuery = {
            "query": "mutation setFeeCodeDoc($_id:String,$code: String!,$descr: String!,$bfees: String!,$line:[Line], $gamount: String!) { setFeeCodeDoc_M(_id:$_id,code:$code,descr:$descr,bfees:$bfees,line:$line,gamount:$gamount) { code message } }",
            "variables": {
                "_id": input._id,
                "code": input.code,
                "descr": input.descr,
                "bfees": input.bfees,
                "line": input.line,
                "gamount": input.gamount
            }
        };
        return this._http.post(this._graphQLURL, graphqlQuery, httpOptions);
    }
    delFeeCodeDoc(input) {
        let httpOptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json', 'token': localStorage.getItem('token') ? localStorage.getItem('token') : "" }) };
        let graphqlQuery = {
            "query": "mutation delFeeCodeDoc($_id:String) { delFeeCodeDoc_M(_id:$_id) { message } }",
            "variables": {
                "_id": input
            }
        };
        return this._http.post(this._graphQLURL, graphqlQuery, httpOptions);
    }
    // Assignment Code setup page functions
    getAssignment(filterAllDocs, getOneDoc) {
        let httpOptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json', 'token': localStorage.getItem('token') ? localStorage.getItem('token') : "" }) };
        let formData = !filterAllDocs ? { _id: "", code: "", descr: '' } : filterAllDocs;
        formData._id = !getOneDoc ? "" : getOneDoc;
        formData.code = filterAllDocs && filterAllDocs.code ? filterAllDocs.code : "";
        formData.descr = filterAllDocs && filterAllDocs.descr ? filterAllDocs.descr : "";
        let graphqlQuery = {
            "query": "query getAssignmentCode($_id: String!,$code: String!,$descr: String!) { getAssignmentCode_Q(_id: $_id, code: $code, descr: $descr) { _id code descr Assignment_role Assignment_duty Assignment_descr comments message } }",
            "variables": {
                "_id": formData._id,
                "code": formData.code,
                "descr": formData.descr
            }
        };
        return this._http.post(this._graphQLURL, graphqlQuery, httpOptions);
    }
    setAssignment(input) {
        let httpOptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json', 'token': localStorage.getItem('token') ? localStorage.getItem('token') : "" }) };
        let graphqlQuery = {
            "query": "mutation setAssignmentCode($code: String!,$descr: String!,$Assignment_role: String!,$Assignment_duty: String!,$Assignment_descr: String!,$comments: String!) { setAssignmentCode_M(code:$code,descr:$descr,Assignment_role:$Assignment_role,Assignment_duty:$Assignment_duty,Assignment_descr:$Assignment_descr,comments:$comments) { code message } }",
            "variables": {
                "code": input.code,
                "descr": input.descr,
                "Assignment_role": input.Assignment_role,
                "Assignment_duty": input.Assignment_duty,
                "Assignment_descr": input.Assignment_descr,
                "comments": input.comments,
            }
        };
        return this._http.post(this._graphQLURL, graphqlQuery, httpOptions);
    }
    setAssignmentDoc(input) {
        let httpOptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json', 'token': localStorage.getItem('token') ? localStorage.getItem('token') : "" }) };
        let graphqlQuery = {
            "query": "mutation setAssignmentCodeDoc($_id:String,$code: String!,$descr: String!,$Assignment_role: String!,$Assignment_duty: String!,$Assignment_descr: String!,$comments: String!) { setAssignmentCodeDoc_M(_id:$_id,code:$code,descr:$descr,Assignment_role:$Assignment_role,Assignment_duty:$Assignment_duty,Assignment_descr:$Assignment_descr,comments:$comments) { code message } }",
            "variables": {
                "_id": input._id,
                "code": input.code,
                "descr": input.descr,
                "Assignment_role": input.Assignment_role,
                "Assignment_duty": input.Assignment_duty,
                "Assignment_descr": input.Assignment_descr,
                "comments": input.comments,
            }
        };
        return this._http.post(this._graphQLURL, graphqlQuery, httpOptions);
    }
    delAssignmentDoc(input) {
        let httpOptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json', 'token': localStorage.getItem('token') ? localStorage.getItem('token') : "" }) };
        let graphqlQuery = {
            "query": "mutation delAssignmentCodeDoc($_id:String) { delAssignmentCodeDoc_M(_id:$_id) { message } }",
            "variables": {
                "_id": input
            }
        };
        return this._http.post(this._graphQLURL, graphqlQuery, httpOptions);
    }
    // Class Code setup page functions
    getClass(filterAllDocs, getOneDoc) {
        let httpOptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json', 'token': localStorage.getItem('token') ? localStorage.getItem('token') : "" }) };
        let formData = !filterAllDocs ? { _id: "", code: "", descr: '' } : filterAllDocs;
        formData._id = !getOneDoc ? "" : getOneDoc;
        formData.code = filterAllDocs && filterAllDocs.code ? filterAllDocs.code : "";
        formData.descr = filterAllDocs && filterAllDocs.descr ? filterAllDocs.descr : "";
        let graphqlQuery = {
            "query": "query getClassCode($_id: String!,$code: String!,$descr: String!) { getClassCode_Q(_id: $_id, code: $code, descr: $descr) { _id code descr Class_role Class_duty Class_descr comments message } }",
            "variables": {
                "_id": formData._id,
                "code": formData.code,
                "descr": formData.descr
            }
        };
        return this._http.post(this._graphQLURL, graphqlQuery, httpOptions);
    }
    setClass(input) {
        let httpOptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json', 'token': localStorage.getItem('token') ? localStorage.getItem('token') : "" }) };
        let graphqlQuery = {
            "query": "mutation setClassCode($code: String!,$descr: String!,$Class_role: String!,$Class_duty: String!,$Class_descr: String!,$comments: String!) { setClassCode_M(code:$code,descr:$descr,Class_role:$Class_role,Class_duty:$Class_duty,Class_descr:$Class_descr,comments:$comments) { code message } }",
            "variables": {
                "code": input.code,
                "descr": input.descr,
                "Class_role": input.Class_role,
                "Class_duty": input.Class_duty,
                "Class_descr": input.Class_descr,
                "comments": input.comments,
            }
        };
        return this._http.post(this._graphQLURL, graphqlQuery, httpOptions);
    }
    setClassDoc(input) {
        let httpOptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json', 'token': localStorage.getItem('token') ? localStorage.getItem('token') : "" }) };
        let graphqlQuery = {
            "query": "mutation setClassCodeDoc($_id:String,$code: String!,$descr: String!,$Class_role: String!,$Class_duty: String!,$Class_descr: String!,$comments: String!) { setClassCodeDoc_M(_id:$_id,code:$code,descr:$descr,Class_role:$Class_role,Class_duty:$Class_duty,Class_descr:$Class_descr,comments:$comments) { code message } }",
            "variables": {
                "_id": input._id,
                "code": input.code,
                "descr": input.descr,
                "Class_role": input.Class_role,
                "Class_duty": input.Class_duty,
                "Class_descr": input.Class_descr,
                "comments": input.comments,
            }
        };
        return this._http.post(this._graphQLURL, graphqlQuery, httpOptions);
    }
    delClassDoc(input) {
        let httpOptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json', 'token': localStorage.getItem('token') ? localStorage.getItem('token') : "" }) };
        let graphqlQuery = {
            "query": "mutation delClassCodeDoc($_id:String) { delClassCodeDoc_M(_id:$_id) { message } }",
            "variables": {
                "_id": input
            }
        };
        return this._http.post(this._graphQLURL, graphqlQuery, httpOptions);
    }
    // Homework Code setup page functions
    getHomework(filterAllDocs, getOneDoc) {
        let httpOptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json', 'token': localStorage.getItem('token') ? localStorage.getItem('token') : "" }) };
        let formData = !filterAllDocs ? { _id: "", code: "", descr: '' } : filterAllDocs;
        formData._id = !getOneDoc ? "" : getOneDoc;
        formData.code = filterAllDocs && filterAllDocs.code ? filterAllDocs.code : "";
        formData.descr = filterAllDocs && filterAllDocs.descr ? filterAllDocs.descr : "";
        let graphqlQuery = {
            "query": "query getHomeworkCode($_id: String!,$code: String!,$descr: String!) { getHomeworkCode_Q(_id: $_id, code: $code, descr: $descr) { _id code descr Homework_role Homework_duty Homework_descr comments message } }",
            "variables": {
                "_id": formData._id,
                "code": formData.code,
                "descr": formData.descr
            }
        };
        return this._http.post(this._graphQLURL, graphqlQuery, httpOptions);
    }
    setHomework(input) {
        let httpOptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json', 'token': localStorage.getItem('token') ? localStorage.getItem('token') : "" }) };
        let graphqlQuery = {
            "query": "mutation setHomeworkCode($code: String!,$descr: String!,$Homework_role: String!,$Homework_duty: String!,$Homework_descr: String!,$comments: String!) { setHomeworkCode_M(code:$code,descr:$descr,Homework_role:$Homework_role,Homework_duty:$Homework_duty,Homework_descr:$Homework_descr,comments:$comments) { code message } }",
            "variables": {
                "code": input.code,
                "descr": input.descr,
                "Homework_role": input.Homework_role,
                "Homework_duty": input.Homework_duty,
                "Homework_descr": input.Homework_descr,
                "comments": input.comments,
            }
        };
        return this._http.post(this._graphQLURL, graphqlQuery, httpOptions);
    }
    setHomeworkDoc(input) {
        let httpOptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json', 'token': localStorage.getItem('token') ? localStorage.getItem('token') : "" }) };
        let graphqlQuery = {
            "query": "mutation setHomeworkCodeDoc($_id:String,$code: String!,$descr: String!,$Homework_role: String!,$Homework_duty: String!,$Homework_descr: String!,$comments: String!) { setHomeworkCodeDoc_M(_id:$_id,code:$code,descr:$descr,Homework_role:$Homework_role,Homework_duty:$Homework_duty,Homework_descr:$Homework_descr,comments:$comments) { code message } }",
            "variables": {
                "_id": input._id,
                "code": input.code,
                "descr": input.descr,
                "Homework_role": input.Homework_role,
                "Homework_duty": input.Homework_duty,
                "Homework_descr": input.Homework_descr,
                "comments": input.comments,
            }
        };
        return this._http.post(this._graphQLURL, graphqlQuery, httpOptions);
    }
    delHomeworkDoc(input) {
        let httpOptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json', 'token': localStorage.getItem('token') ? localStorage.getItem('token') : "" }) };
        let graphqlQuery = {
            "query": "mutation delHomeworkCodeDoc($_id:String) { delHomeworkCodeDoc_M(_id:$_id) { message } }",
            "variables": {
                "_id": input
            }
        };
        return this._http.post(this._graphQLURL, graphqlQuery, httpOptions);
    }
    // Tutorial Code setup page functions
    getTutorial(filterAllDocs, getOneDoc) {
        let httpOptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json', 'token': localStorage.getItem('token') ? localStorage.getItem('token') : "" }) };
        let formData = !filterAllDocs ? { _id: "", code: "", descr: '' } : filterAllDocs;
        formData._id = !getOneDoc ? "" : getOneDoc;
        formData.code = filterAllDocs && filterAllDocs.code ? filterAllDocs.code : "";
        formData.descr = filterAllDocs && filterAllDocs.descr ? filterAllDocs.descr : "";
        let graphqlQuery = {
            "query": "query getTutorialCode($_id: String!,$code: String!,$descr: String!) { getTutorialCode_Q(_id: $_id, code: $code, descr: $descr) { _id code descr Tutorial_role Tutorial_duty Tutorial_descr comments message } }",
            "variables": {
                "_id": formData._id,
                "code": formData.code,
                "descr": formData.descr
            }
        };
        return this._http.post(this._graphQLURL, graphqlQuery, httpOptions);
    }
    setTutorial(input) {
        let httpOptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json', 'token': localStorage.getItem('token') ? localStorage.getItem('token') : "" }) };
        let graphqlQuery = {
            "query": "mutation setTutorialCode($code: String!,$descr: String!,$Tutorial_role: String!,$Tutorial_duty: String!,$Tutorial_descr: String!,$comments: String!) { setTutorialCode_M(code:$code,descr:$descr,Tutorial_role:$Tutorial_role,Tutorial_duty:$Tutorial_duty,Tutorial_descr:$Tutorial_descr,comments:$comments) { code message } }",
            "variables": {
                "code": input.code,
                "descr": input.descr,
                "Tutorial_role": input.Tutorial_role,
                "Tutorial_duty": input.Tutorial_duty,
                "Tutorial_descr": input.Tutorial_descr,
                "comments": input.comments,
            }
        };
        return this._http.post(this._graphQLURL, graphqlQuery, httpOptions);
    }
    setTutorialDoc(input) {
        let httpOptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json', 'token': localStorage.getItem('token') ? localStorage.getItem('token') : "" }) };
        let graphqlQuery = {
            "query": "mutation setTutorialCodeDoc($_id:String,$code: String!,$descr: String!,$Tutorial_role: String!,$Tutorial_duty: String!,$Tutorial_descr: String!,$comments: String!) { setTutorialCodeDoc_M(_id:$_id,code:$code,descr:$descr,Tutorial_role:$Tutorial_role,Tutorial_duty:$Tutorial_duty,Tutorial_descr:$Tutorial_descr,comments:$comments) { code message } }",
            "variables": {
                "_id": input._id,
                "code": input.code,
                "descr": input.descr,
                "Tutorial_role": input.Tutorial_role,
                "Tutorial_duty": input.Tutorial_duty,
                "Tutorial_descr": input.Tutorial_descr,
                "comments": input.comments,
            }
        };
        return this._http.post(this._graphQLURL, graphqlQuery, httpOptions);
    }
    delTutorialDoc(input) {
        let httpOptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json', 'token': localStorage.getItem('token') ? localStorage.getItem('token') : "" }) };
        let graphqlQuery = {
            "query": "mutation delTutorialCodeDoc($_id:String) { delTutorialCodeDoc_M(_id:$_id) { message } }",
            "variables": {
                "_id": input
            }
        };
        return this._http.post(this._graphQLURL, graphqlQuery, httpOptions);
    }
    getUserStudentFeeDoc() {
    }
    getUserStudentMarksDoc() {
    }
    getUserStudentMSGCounts() {
    }
    getUsersStudentTutsDoc() {
    }
    getUserStudentDoc() {
    }
};
BackendService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
BackendService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
], BackendService);



/***/ }),

/***/ "./src/app/setup/enrollment.component.ts":
/*!***********************************************!*\
  !*** ./src/app/setup/enrollment.component.ts ***!
  \***********************************************/
/*! exports provided: EnrollmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnrollmentComponent", function() { return EnrollmentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_router_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/router.animation */ "./src/app/shared/router.animation.ts");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _services_backend_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/backend.service */ "./src/app/services/backend.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};






//import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
let EnrollmentComponent = class EnrollmentComponent {
    constructor(_backendService) {
        this._backendService = _backendService;
        this.state = '';
        this.savedChanges = false;
        this.error = false;
        this.errorMessage = "";
        this.dataLoading = false;
        this.displayedColumns = ['code', 'descr', '_id'];
    }
    ngOnInit() {
        this.toggleField = "searchMode";
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](this.members);
    }
    toggle(filter) {
        if (!filter) {
            filter = "searchMode";
        }
        else {
            filter = filter;
        }
        this.toggleField = filter;
    }
    getData(filterAllDocs, getOneDoc) {
        this.dataLoading = true;
        return this.querySubscription = this._backendService.getEnrollment(filterAllDocs, getOneDoc).subscribe((res) => {
            if (res["data"]["getEnrollment_Q"].code !== "") {
                if (getOneDoc) {
                    this.data = res["data"]["getEnrollment_Q"][0];
                    this.toggle('editMode');
                }
                else {
                    this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](res["data"]["getEnrollment_Q"]);
                    this.dataSource.paginator = this.paginator;
                    this.dataSource.sort = this.sort;
                }
                this.error = false;
                this.errorMessage = "";
            }
            else {
                this.error = true;
                this.errorMessage = res["data"]["getEnrollment_Q"].message;
            }
        }, (error) => {
            this.error = true;
            this.errorMessage = error.message;
            this.dataLoading = false;
        }, () => {
            this.dataLoading = false;
        });
    }
    setData(formData) {
        this.dataLoading = true;
        this.querySubscription = this._backendService.setEnrollment(formData).subscribe((res) => {
            if (res["data"]["setEnrollment_M"].code !== "") {
                this.savedChanges = true;
                this.error = false;
                this.errorMessage = "";
            }
            else {
                this.error = true;
                this.errorMessage = res["data"]["setEnrollment_M"].message;
            }
        }, (error) => {
            this.error = true;
            this.errorMessage = error.message;
            this.dataLoading = false;
        }, () => {
            this.dataLoading = false;
        });
    }
    updateData(formData) {
        this.dataLoading = true;
        this.querySubscription = this._backendService.setEnrollmentDoc(formData).subscribe((res) => {
            if (res["data"]["setEnrollmentDoc_M"].code !== "") {
                this.savedChanges = true;
                this.error = false;
                this.errorMessage = "";
            }
            else {
                this.error = true;
                this.errorMessage = res["data"]["setEnrollmentDoc_M"].message;
            }
        }, (error) => {
            this.error = true;
            this.errorMessage = error.message;
            this.dataLoading = false;
        }, () => {
            this.dataLoading = false;
        });
    }
    getDoc(docId) {
        this.getData("", docId);
    }
    deleteDoc(docId) {
        if (confirm("Are you sure want to delete this record ?")) {
            this.querySubscription = this._backendService.delEnrollmentDoc(docId).subscribe((res) => {
                //console.log("res"+JSON.stringify(res))
                if (!res["data"]["delEnrollmentDoc_M"]) {
                    this.toggle('searchMode');
                    this.error = false;
                    this.errorMessage = "";
                }
                else {
                    this.error = true;
                    this.errorMessage = res["data"]["delEnrollmentDoc_M"].message;
                }
            }, (error) => {
                this.error = true;
                this.errorMessage = error.message;
                this.dataLoading = false;
            }, () => {
                this.dataLoading = false;
            });
        }
    }
    //mat table paginator and filter functions
    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }
    applyFilter(filterValue) {
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
};
EnrollmentComponent.ctorParameters = () => [
    { type: _services_backend_service__WEBPACK_IMPORTED_MODULE_5__["BackendService"] }
];
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: false }),
    __metadata("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
], EnrollmentComponent.prototype, "paginator", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], { static: false }),
    __metadata("design:type", _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
], EnrollmentComponent.prototype, "sort", void 0);
EnrollmentComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'enrollment',
        template: __importDefault(__webpack_require__(/*! raw-loader!./enrollment.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/setup/enrollment.component.html")).default,
        animations: [Object(_shared_router_animation__WEBPACK_IMPORTED_MODULE_1__["moveIn"])(), Object(_shared_router_animation__WEBPACK_IMPORTED_MODULE_1__["fallIn"])()],
        host: { '[@moveIn]': '' }
    }),
    __metadata("design:paramtypes", [_services_backend_service__WEBPACK_IMPORTED_MODULE_5__["BackendService"]])
], EnrollmentComponent);



/***/ }),

/***/ "./src/app/setup/feecode.component.css":
/*!*********************************************!*\
  !*** ./src/app/setup/feecode.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NldHVwL2ZlZWNvZGUuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/setup/feecode.component.ts":
/*!********************************************!*\
  !*** ./src/app/setup/feecode.component.ts ***!
  \********************************************/
/*! exports provided: FeecodeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeecodeComponent", function() { return FeecodeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_router_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/router.animation */ "./src/app/shared/router.animation.ts");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _services_backend_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/backend.service */ "./src/app/services/backend.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};







let FeecodeComponent = class FeecodeComponent {
    constructor(_backendService, _fb) {
        this._backendService = _backendService;
        this._fb = _fb;
        this.state = '';
        this.savedChanges = false;
        this.error = false;
        this.errorMessage = "";
        this.dataLoading = false;
        this.pCDs = ['Paid Amount', 'Discount'];
        this.freqCDs = ['Bi-Weekly', 'Monthly', 'Yearly', 'One-time', 'OTHER'];
        this.total_amount = 0;
        this.displayedColumns = ['code', 'descr', '_id'];
    }
    ngOnInit() {
        this.toggleField = "searchMode";
        this.error = false;
        this.errorMessage = "";
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](this.members);
        this.addDataForm = this._fb.group({
            code: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            descr: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            bfees: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            line: this._fb.array([this._fb.group({
                    frequency: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
                    ptype: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
                    payval: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
                    amount: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].pattern("^[0-9]*$")]]
                })]),
            gamount: ''
        });
        this.editDataForm = this._fb.group({
            _id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            code: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            descr: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            bfees: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            line: this._fb.array([]),
            gamount: ''
        });
    }
    LINES(formName) {
        return this[formName].get('line');
    }
    addLINES(formName) {
        this.LINES(formName).push(this._fb.group({
            frequency: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            ptype: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            payval: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            amount: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].pattern("^[0-9]*$")]]
        }));
        this.calculateTotal(formName);
    }
    deleteLINES(index, formName) {
        this.LINES(formName).removeAt(index);
        this.calculateTotal(formName);
    }
    calculateTotal(formName) {
        this.total_amount = 0;
        for (let i = 0; i <= this[formName].value.line.length; i++) {
            if (this[formName].value.line[i]) {
                if (this[formName].value.line[i].ptype == 'Paid Amount') {
                    this.total_amount += +this[formName].value.line[i].amount;
                }
                else {
                    this.total_amount -= +this[formName].value.line[i].amount;
                }
            }
        }
        this.total_amount += parseFloat(this[formName].controls['bfees'].value);
        this[formName].controls['gamount'].setValue(this.total_amount.toFixed(2));
    }
    toggle(filter) {
        if (!filter) {
            filter = "searchMode";
        }
        else {
            filter = filter;
        }
        this.toggleField = filter;
        this.dataLoading = false;
    }
    getData(filterAllDocs, getOneDoc) {
        this.dataLoading = true;
        return this.querySubscription = this._backendService.getFeeCode(filterAllDocs, getOneDoc).subscribe((res) => {
            if (res["data"]["getFeeCode_Q"].code !== "") {
                if (getOneDoc) {
                    this.data = res["data"]["getFeeCode_Q"][0];
                    this.editDataForm = this._fb.group({
                        _id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
                        code: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
                        descr: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
                        bfees: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
                        line: this._fb.array([]),
                        gamount: ''
                    });
                    this.editDataForm.patchValue(this.data);
                    for (let i = 0; i < this.data["line"].length; i++) {
                        this.LINES('editDataForm').push(this._fb.group(this.data["line"][i]));
                    }
                    this.calculateTotal(('editDataForm'));
                    this.toggle('editMode');
                }
                else {
                    this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](res["data"]["getFeeCode_Q"]);
                    this.dataSource.paginator = this.paginator;
                    this.dataSource.sort = this.sort;
                }
                this.error = false;
                this.errorMessage = "";
            }
            else {
                this.error = true;
                this.errorMessage = res["data"]["getFeeCode_Q"].message;
            }
        }, (error) => {
            this.error = true;
            this.errorMessage = error.message;
            this.dataLoading = false;
        }, () => {
            this.dataLoading = false;
        });
    }
    setData(formData) {
        this.dataLoading = true;
        this.querySubscription = this._backendService.setFeeCode(formData).subscribe((res) => {
            if (res["data"]["setFeeCode_M"].code !== "") {
                this.savedChanges = true;
                this.error = false;
                this.errorMessage = "";
            }
            else {
                this.error = true;
                this.errorMessage = res["data"]["setFeeCode_M"].message;
            }
        }, (error) => {
            this.error = true;
            this.errorMessage = error.message;
            this.dataLoading = false;
        }, () => {
            this.dataLoading = false;
        });
    }
    updateData(formData) {
        this.dataLoading = true;
        this.querySubscription = this._backendService.setFeeCodeDoc(formData).subscribe((res) => {
            if (res["data"]["setFeeCodeDoc_M"].code !== "") {
                this.savedChanges = true;
                this.error = false;
                this.errorMessage = "";
            }
            else {
                this.error = true;
                this.errorMessage = res["data"]["setFeeCodeDoc_M"].message;
            }
        }, (error) => {
            this.error = true;
            this.errorMessage = error.message;
            this.dataLoading = false;
        }, () => {
            this.dataLoading = false;
        });
    }
    getDoc(docId) {
        this.getData("", docId);
    }
    deleteDoc(docId) {
        if (confirm("Are you sure want to delete this record ?")) {
            this.querySubscription = this._backendService.delFeeCodeDoc(docId).subscribe((res) => {
                //console.log("res"+JSON.stringify(res))
                if (!res["data"]["delFeeCodeDoc_M"]) {
                    this.toggle('searchMode');
                    this.error = false;
                    this.errorMessage = "";
                }
                else {
                    this.error = true;
                    this.errorMessage = res["data"]["delFeeCodeDoc_M"].message;
                }
            }, (error) => {
                this.error = true;
                this.errorMessage = error.message;
                this.dataLoading = false;
            }, () => {
                this.dataLoading = false;
            });
        }
    }
    //mat table paginator and filter functions
    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }
    applyFilter(filterValue) {
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
};
FeecodeComponent.ctorParameters = () => [
    { type: _services_backend_service__WEBPACK_IMPORTED_MODULE_5__["BackendService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] }
];
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: false }),
    __metadata("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
], FeecodeComponent.prototype, "paginator", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], { static: false }),
    __metadata("design:type", _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
], FeecodeComponent.prototype, "sort", void 0);
FeecodeComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-feecode',
        template: __importDefault(__webpack_require__(/*! raw-loader!./feecode.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/setup/feecode.component.html")).default,
        animations: [Object(_shared_router_animation__WEBPACK_IMPORTED_MODULE_1__["moveIn"])(), Object(_shared_router_animation__WEBPACK_IMPORTED_MODULE_1__["fallIn"])()],
        host: { '[@moveIn]': '' },
        styles: [__importDefault(__webpack_require__(/*! ./feecode.component.css */ "./src/app/setup/feecode.component.css")).default]
    }),
    __metadata("design:paramtypes", [_services_backend_service__WEBPACK_IMPORTED_MODULE_5__["BackendService"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]])
], FeecodeComponent);



/***/ }),

/***/ "./src/app/setup/markscode.component.css":
/*!***********************************************!*\
  !*** ./src/app/setup/markscode.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NldHVwL21hcmtzY29kZS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/setup/markscode.component.ts":
/*!**********************************************!*\
  !*** ./src/app/setup/markscode.component.ts ***!
  \**********************************************/
/*! exports provided: MarkscodeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkscodeComponent", function() { return MarkscodeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_router_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/router.animation */ "./src/app/shared/router.animation.ts");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _services_backend_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/backend.service */ "./src/app/services/backend.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};







let MarkscodeComponent = class MarkscodeComponent {
    constructor(_backendService, _fb) {
        this._backendService = _backendService;
        this._fb = _fb;
        this.state = '';
        this.savedChanges = false;
        this.error = false;
        this.errorMessage = "";
        this.dataLoading = false;
        this.pCDs = ['Paid Amount', 'Discount'];
        this.freqCDs = ['Bi-Weekly', 'Monthly', 'Yearly', 'One-time', 'OTHER'];
        this.total_amount = 0;
        this.displayedColumns = ['code', 'descr', '_id'];
    }
    ngOnInit() {
        this.toggleField = "searchMode";
        this.error = false;
        this.errorMessage = "";
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](this.members);
        this.addDataForm = this._fb.group({
            code: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            descr: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            //      bfees: ['', Validators.required],
            mline: this._fb.array([this._fb.group({
                    subject: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
                    minmarks: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
                    maxmarks: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
                    marks: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].pattern("^[0-9]*$")]]
                })]),
            gmarks: ''
        });
        this.editDataForm = this._fb.group({
            _id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            code: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            descr: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            //      bfees: ['', Validators.required],
            mline: this._fb.array([]),
            gmarks: ''
        });
    }
    LINES(formName) {
        return this[formName].get('mline');
    }
    addLINES(formName) {
        this.LINES(formName).push(this._fb.group({
            subject: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            minmarks: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            maxmarks: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            marks: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].pattern("^[0-9]*$")]]
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
    toggle(filter) {
        if (!filter) {
            filter = "searchMode";
        }
        else {
            filter = filter;
        }
        this.toggleField = filter;
        this.dataLoading = false;
    }
    getData(filterAllDocs, getOneDoc) {
        this.dataLoading = true;
        return this.querySubscription = this._backendService.getMarksCode(filterAllDocs, getOneDoc).subscribe((res) => {
            if (res["data"]["getMarksCode_Q"].code !== "") {
                if (getOneDoc) {
                    this.data = res["data"]["getMarksCode_Q"][0];
                    this.editDataForm = this._fb.group({
                        _id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
                        code: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
                        descr: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
                        //                    bfees: ['', Validators.required],
                        mline: this._fb.array([]),
                        gmarks: ''
                    });
                    this.editDataForm.patchValue(this.data);
                    for (let i = 0; i < this.data["mline"].length; i++) {
                        this.LINES('editDataForm').push(this._fb.group(this.data["mline"][i]));
                    }
                    this.calculateTotal(('editDataForm'));
                    this.toggle('editMode');
                }
                else {
                    this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](res["data"]["getMarksCode_Q"]);
                    this.dataSource.paginator = this.paginator;
                    this.dataSource.sort = this.sort;
                }
                this.error = false;
                this.errorMessage = "";
            }
            else {
                this.error = true;
                this.errorMessage = res["data"]["getMarksCode_Q"].message;
            }
        }, (error) => {
            this.error = true;
            this.errorMessage = error.message;
            this.dataLoading = false;
        }, () => {
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
            }
            else {
                this.error = true;
                this.errorMessage = res["data"]["setMarksCode_M"].message;
            }
        }, (error) => {
            this.error = true;
            this.errorMessage = error.message;
            this.dataLoading = false;
        }, () => {
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
            }
            else {
                this.error = true;
                this.errorMessage = res["data"]["setMarksCodeDoc_M"].message;
            }
        }, (error) => {
            this.error = true;
            this.errorMessage = error.message;
            this.dataLoading = false;
        }, () => {
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
                }
                else {
                    this.error = true;
                    this.errorMessage = res["data"]["delMarksCodeDoc_M"].message;
                }
            }, (error) => {
                this.error = true;
                this.errorMessage = error.message;
                this.dataLoading = false;
            }, () => {
                this.dataLoading = false;
            });
        }
    }
    //mat table paginator and filter functions
    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }
    applyFilter(filterValue) {
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
};
MarkscodeComponent.ctorParameters = () => [
    { type: _services_backend_service__WEBPACK_IMPORTED_MODULE_5__["BackendService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] }
];
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: false }),
    __metadata("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
], MarkscodeComponent.prototype, "paginator", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], { static: false }),
    __metadata("design:type", _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
], MarkscodeComponent.prototype, "sort", void 0);
MarkscodeComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-markscode',
        template: __importDefault(__webpack_require__(/*! raw-loader!./markscode.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/setup/markscode.component.html")).default,
        animations: [Object(_shared_router_animation__WEBPACK_IMPORTED_MODULE_1__["moveIn"])(), Object(_shared_router_animation__WEBPACK_IMPORTED_MODULE_1__["fallIn"])()],
        host: { '[@moveIn]': '' },
        styles: [__importDefault(__webpack_require__(/*! ./markscode.component.css */ "./src/app/setup/markscode.component.css")).default]
    }),
    __metadata("design:paramtypes", [_services_backend_service__WEBPACK_IMPORTED_MODULE_5__["BackendService"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]])
], MarkscodeComponent);



/***/ }),

/***/ "./src/app/shared/aboutus.component.css":
/*!**********************************************!*\
  !*** ./src/app/shared/aboutus.component.css ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9hYm91dHVzLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/shared/aboutus.component.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/aboutus.component.ts ***!
  \*********************************************/
/*! exports provided: AboutusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutusComponent", function() { return AboutusComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let AboutusComponent = class AboutusComponent {
    constructor() { }
    ngOnInit() {
    }
};
AboutusComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'aboutus',
        template: __importDefault(__webpack_require__(/*! raw-loader!./aboutus.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/aboutus.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./aboutus.component.css */ "./src/app/shared/aboutus.component.css")).default]
    }),
    __metadata("design:paramtypes", [])
], AboutusComponent);



/***/ }),

/***/ "./src/app/shared/custom.material.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/custom.material.ts ***!
  \*******************************************/
/*! exports provided: BismaCustomMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BismaCustomMaterialModule", function() { return BismaCustomMaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/chips.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/stepper.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/badge */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/badge.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


// angular material imports
























// import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

// import {DomSanitizer} from '@angular/platform-browser';
// import {MatIconRegistry} from '@angular/material';
let BismaCustomMaterialModule = class BismaCustomMaterialModule {
    constructor(iconRegistry, sanitizer) {
        iconRegistry.addSvgIcon('more_vert', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/more_vert.svg'));
        iconRegistry.addSvgIcon('facebook', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/fb.svg'));
        iconRegistry.addSvgIcon('linkedin', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/linkedin.svg'));
        iconRegistry.addSvgIcon('github', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/github.svg'));
        iconRegistry.addSvgIcon('menu', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/menu.svg'));
        iconRegistry.addSvgIcon('dashboard-black', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/dashboard-black.svg'));
        iconRegistry.addSvgIcon('star', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/star.svg'));
        iconRegistry.addSvgIcon('phone', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/phone.svg'));
        iconRegistry.addSvgIcon('email', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/email.svg'));
        iconRegistry.addSvgIcon('account_circle', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/account_circle.svg'));
        iconRegistry.addSvgIcon('event', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/event.svg'));
        iconRegistry.addSvgIcon('track_changes', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/track_changes.svg'));
        iconRegistry.addSvgIcon('language', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/language.svg'));
        iconRegistry.addSvgIcon('search', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/search.svg'));
        iconRegistry.addSvgIcon('book', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/book.svg'));
        iconRegistry.addSvgIcon('business', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/business.svg'));
        iconRegistry.addSvgIcon('place', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/place.svg'));
        iconRegistry.addSvgIcon('code', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/code.svg'));
        iconRegistry.addSvgIcon('help', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/help.svg'));
        iconRegistry.addSvgIcon('clear', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/clear.svg'));
        iconRegistry.addSvgIcon('vpn', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/vpn.svg'));
        iconRegistry.addSvgIcon('new', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/new.svg'));
        iconRegistry.addSvgIcon('cloud', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/cloud.svg'));
        iconRegistry.addSvgIcon('backspace', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/backspace.svg'));
        iconRegistry.addSvgIcon('add', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/add.svg'));
        iconRegistry.addSvgIcon('edit', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/edit.svg'));
        iconRegistry.addSvgIcon('delete', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/delete.svg'));
        iconRegistry.addSvgIcon('cached', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/cached.svg'));
        iconRegistry.addSvgIcon('create', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/create.svg'));
        iconRegistry.addSvgIcon('employee', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/person.svg'));
        iconRegistry.addSvgIcon('employer', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/group.svg'));
        iconRegistry.addSvgIcon('home', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/home.svg'));
        iconRegistry.addSvgIcon('equalizer', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/equalizer.svg'));
        iconRegistry.addSvgIcon('security', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/security.svg'));
        iconRegistry.addSvgIcon('radio_on', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/radio_on.svg'));
        iconRegistry.addSvgIcon('radio_off', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/radio_off.svg'));
        iconRegistry.addSvgIcon('salary', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/salary.svg'));
        iconRegistry.addSvgIcon('drop_down', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/drop_down.svg'));
    }
};
BismaCustomMaterialModule.ctorParameters = () => [
    { type: _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconRegistry"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_20__["DomSanitizer"] }
];
BismaCustomMaterialModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_25__["BrowserAnimationsModule"],
        ],
        exports: [
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_25__["BrowserAnimationsModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__["MatTabsModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_6__["MatProgressBarModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__["MatMenuModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelectModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__["MatToolbarModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_13__["MatChipsModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_14__["MatListModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__["MatTooltipModule"],
            // MatNativeDateModule,
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_22__["MatDatepickerModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_19__["MatTableModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_21__["MatPaginatorModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_6__["MatProgressBarModule"],
            // MatSortModule,
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_16__["MatSnackBarModule"],
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__["MatStepperModule"],
            // MatGridListModule,
            _angular_material_badge__WEBPACK_IMPORTED_MODULE_23__["MatBadgeModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_18__["MatExpansionModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_24__["MatRadioModule"]
            // MatRadioModule
        ],
        declarations: []
    }),
    __metadata("design:paramtypes", [_angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconRegistry"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_20__["DomSanitizer"]])
], BismaCustomMaterialModule);



/***/ }),

/***/ "./src/app/shared/dropzone/dropzone.directive.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/dropzone/dropzone.directive.ts ***!
  \*******************************************************/
/*! exports provided: DropZoneDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropZoneDirective", function() { return DropZoneDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let DropZoneDirective = class DropZoneDirective {
    constructor() {
        this.dropped = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.hovered = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    onDrop($event) {
        $event.preventDefault();
        this.dropped.emit($event.dataTransfer.files);
        this.hovered.emit(false);
    }
    ondragover($event) {
        $event.preventDefault();
        this.hovered.emit(true);
    }
    onDragLeave($event) {
        $event.preventDefault();
        this.hovered.emit(false);
    }
};
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
    __metadata("design:type", Object)
], DropZoneDirective.prototype, "dropped", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
    __metadata("design:type", Object)
], DropZoneDirective.prototype, "hovered", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('drop', ['event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], DropZoneDirective.prototype, "onDrop", null);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('dragOver', ['event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], DropZoneDirective.prototype, "ondragover", null);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('dragleave', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], DropZoneDirective.prototype, "onDragLeave", null);
DropZoneDirective = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
        selector: '[appDropZone]'
    }),
    __metadata("design:paramtypes", [])
], DropZoneDirective);



/***/ }),

/***/ "./src/app/shared/dropzone/filesize.pipe.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/dropzone/filesize.pipe.ts ***!
  \**************************************************/
/*! exports provided: FileSizePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileSizePipe", function() { return FileSizePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

const FILE_SIZE_UNITS = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
const FILE_SIZE_UNITS_LONG = ['Bytes', 'Kilobytes', 'Megabytes', 'Gigabytes', 'Pettabytes', 'Exabytes', 'Zettabytes', 'Yottabytes'];
let FileSizePipe = class FileSizePipe {
    transform(sizeInBytes, longForm) {
        const units = longForm
            ? FILE_SIZE_UNITS_LONG
            : FILE_SIZE_UNITS;
        let power = Math.round(Math.log(sizeInBytes) / Math.log(1024));
        power = Math.min(power, units.length - 1);
        const size = sizeInBytes / Math.pow(1024, power); // size in new units
        const formattedSize = Math.round(size * 100) / 100; // keep up to 2 decimals
        const unit = units[power];
        return size ? `${formattedSize} ${unit}` : '0';
    }
};
FileSizePipe = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
        name: 'fileSize'
    })
], FileSizePipe);



/***/ }),

/***/ "./src/app/shared/dropzone/fileupload.component.css":
/*!**********************************************************!*\
  !*** ./src/app/shared/dropzone/fileupload.component.css ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".dropzone { \n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column; \n    height: 300px;\n    border: 2px dashed #f16624;\n    border-radius: 5px;\n    background: white;\n    margin: 10px 0;\n    &.hovering {\n        border: 2px solid #f16624;\n        color: #dadada !important;\n    }\n}\nprogress::-webkit-progress-value {\n    -webkit-transition: width 0.1s ease;\n    transition: width 0.1s ease;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2Ryb3B6b25lL2ZpbGV1cGxvYWQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2IsMEJBQTBCO0lBQzFCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsY0FBYztJQUNkO1FBQ0kseUJBQXlCO1FBQ3pCLHlCQUF5QjtJQUM3QjtBQUNKO0FBQ0E7SUFDSSxtQ0FBMkI7SUFBM0IsMkJBQTJCO0FBQy9CIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2Ryb3B6b25lL2ZpbGV1cGxvYWQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kcm9wem9uZSB7IFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBcbiAgICBoZWlnaHQ6IDMwMHB4O1xuICAgIGJvcmRlcjogMnB4IGRhc2hlZCAjZjE2NjI0O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBtYXJnaW46IDEwcHggMDtcbiAgICAmLmhvdmVyaW5nIHtcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgI2YxNjYyNDtcbiAgICAgICAgY29sb3I6ICNkYWRhZGEgIWltcG9ydGFudDtcbiAgICB9XG59XG5wcm9ncmVzczo6LXdlYmtpdC1wcm9ncmVzcy12YWx1ZSB7XG4gICAgdHJhbnNpdGlvbjogd2lkdGggMC4xcyBlYXNlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/shared/dropzone/fileupload.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/dropzone/fileupload.component.ts ***!
  \*********************************************************/
/*! exports provided: FileUploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileUploadComponent", function() { return FileUploadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let FileUploadComponent = class FileUploadComponent {
    constructor() {
        this.error = false;
        /*
            startUpload(event) {
                const file = event.target.files[0];
                const filePath = this.fileUrl + '/' + event.target.files[0].name + '_' + new Date().getTime();
                const fileRef = this._storage.ref(filePath);
                const task = this._storage.upload(filePath, file);
                // observe percentage changes
                this.percentage = task.percentageChanges();
                // get notified when the download URL is available
                task.snapshotChanges().pipe(
                    finalize(() => this.downloadURL = fileRef.getDownloadURL())
                )
                    .subscribe((res) => {
                        if (res.bytesTransferred == res.totalBytes) {
                            this._backendService.updateFileUpload(this.fileUrl, this.docId, res.ref["location"].path);
                        }
                    });
            }
        
            isActive(snapshot) {
                return snapshot.state === 'running' && snapshot.bytesTransferred < snapshot.totalBytes;
            }
          */
    }
    //  constructor(private _storage: AngularMongoStorage, private _backendService: BackendService) { }
    toggleHover(event) {
        this.isHovering = event;
    }
};
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", String)
], FileUploadComponent.prototype, "fileUrl", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", String)
], FileUploadComponent.prototype, "docId", void 0);
FileUploadComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-fileupload',
        template: __importDefault(__webpack_require__(/*! raw-loader!./fileupload.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/dropzone/fileupload.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./fileupload.component.css */ "./src/app/shared/dropzone/fileupload.component.css")).default]
    })
], FileUploadComponent);



/***/ }),

/***/ "./src/app/shared/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/shared/footer.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9mb290ZXIuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/shared/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/shared/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-footer',
        template: __importDefault(__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/footer.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./footer.component.css */ "./src/app/shared/footer.component.css")).default]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);



/***/ }),

/***/ "./src/app/shared/header.admin.component.css":
/*!***************************************************!*\
  !*** ./src/app/shared/header.admin.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9oZWFkZXIuYWRtaW4uY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/shared/header.admin.component.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/header.admin.component.ts ***!
  \**************************************************/
/*! exports provided: HeaderAdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderAdminComponent", function() { return HeaderAdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_backend_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/backend.service */ "./src/app/services/backend.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


let HeaderAdminComponent = class HeaderAdminComponent {
    constructor(_backendService) {
        this._backendService = _backendService;
        this.emailSent = false;
        this.formShowing = false;
        this.userRole = 'admin';
        this.dataLoading = false;
        this.brokenNetwork = false;
    }
    ngOnInit() {
        this.configData = this._backendService.getConfig();
        if (window.localStorage.getItem("role")) {
            this.userRole = window.localStorage.getItem("role");
            this.getMsgCounts();
        }
    }
    getMsgCounts() {
        this.msgCount$ = this._backendService.getUserStudentMSGCounts();
    }
    onSubmit(formData) {
        this.dataLoading = true;
        //console.log(formData);
        this._backendService.sendEmail(formData).subscribe(res => {
            //console.log(res);
        }, error => {
            //console.log(error);
            console.log("API didn't respond.");
            this.brokenNetwork = true;
            this.dataLoading = false;
        }, () => {
            this.dataLoading = false;
            this.emailSent = true;
        });
    }
};
HeaderAdminComponent.ctorParameters = () => [
    { type: _services_backend_service__WEBPACK_IMPORTED_MODULE_1__["BackendService"] }
];
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", String)
], HeaderAdminComponent.prototype, "imageUrl", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", String)
], HeaderAdminComponent.prototype, "pageTitle", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", String)
], HeaderAdminComponent.prototype, "helpType", void 0);
HeaderAdminComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-header-admin',
        template: __importDefault(__webpack_require__(/*! raw-loader!./header.admin.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/header.admin.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./header.admin.component.css */ "./src/app/shared/header.admin.component.css")).default]
    }),
    __metadata("design:paramtypes", [_services_backend_service__WEBPACK_IMPORTED_MODULE_1__["BackendService"]])
], HeaderAdminComponent);



/***/ }),

/***/ "./src/app/shared/helpdesk.component.css":
/*!***********************************************!*\
  !*** ./src/app/shared/helpdesk.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9oZWxwZGVzay5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/shared/helpdesk.component.ts":
/*!**********************************************!*\
  !*** ./src/app/shared/helpdesk.component.ts ***!
  \**********************************************/
/*! exports provided: HelpdeskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpdeskComponent", function() { return HelpdeskComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let HelpdeskComponent = class HelpdeskComponent {
    constructor() {
        this.showHelp = false;
    }
    ngOnInit() {
    }
};
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", String)
], HelpdeskComponent.prototype, "helpType", void 0);
HelpdeskComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-helpdesk',
        template: __importDefault(__webpack_require__(/*! raw-loader!./helpdesk.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/helpdesk.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./helpdesk.component.css */ "./src/app/shared/helpdesk.component.css")).default]
    }),
    __metadata("design:paramtypes", [])
], HelpdeskComponent);



/***/ }),

/***/ "./src/app/shared/login/login.component.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/login/login.component.ts ***!
  \*************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _router_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../router.animation */ "./src/app/shared/router.animation.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _services_backend_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/backend.service */ "./src/app/services/backend.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





let LoginComponent = class LoginComponent {
    constructor(_backendService, router) {
        this._backendService = _backendService;
        this.router = router;
        this.socialAuth = false; // show Google and FB Sign in only when social auth is enabled
        this.error = false;
        this.errorMessage = "";
        this.dataLoading = false;
        this.user = false;
    }
    ngOnInit() {
        if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].socialAuthEnabled) {
            this.socialAuth = true; // show Google and FB Sign in only when social auth is enabled
            this.socialAuth = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].socialAuthEnabled;
        }
        if (localStorage.getItem("token")) {
            this.user = true;
        }
    }
    login(formData) {
        this.dataLoading = true;
        this.querySubscription = this._backendService.loginUser(formData).subscribe((res) => {
            console.log("res" + JSON.stringify(res));
            if (res["data"]["loginUser_Q"].token !== "") {
                window.localStorage.setItem("token", res["data"]["loginUser_Q"].token);
                this.user = true;
                this.error = false;
                this.errorMessage = "";
            }
            else {
                this.error = true;
                this.errorMessage = res["data"]["loginUser_Q"].message;
            }
        }, (error) => {
            this.error = true;
            this.errorMessage = error.message;
            this.dataLoading = false;
        }, () => {
            this.dataLoading = false;
        });
    }
    logout() {
        window.localStorage.removeItem("token");
        this.user = false;
    }
    ngOnDestroy() {
        if (this.querySubscription) {
            this.querySubscription.unsubscribe();
        }
    }
};
LoginComponent.ctorParameters = () => [
    { type: _services_backend_service__WEBPACK_IMPORTED_MODULE_4__["BackendService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
];
LoginComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'login',
        template: __importDefault(__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/login/login.component.html")).default,
        animations: [Object(_router_animation__WEBPACK_IMPORTED_MODULE_2__["moveIn"])(), Object(_router_animation__WEBPACK_IMPORTED_MODULE_2__["fallIn"])()],
        host: { '[@moveIn]': '' }
    }),
    __metadata("design:paramtypes", [_services_backend_service__WEBPACK_IMPORTED_MODULE_4__["BackendService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
], LoginComponent);



/***/ }),

/***/ "./src/app/shared/login/signup.component.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/login/signup.component.ts ***!
  \**************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _router_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../router.animation */ "./src/app/shared/router.animation.ts");
/* harmony import */ var _services_backend_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/backend.service */ "./src/app/services/backend.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




let SignupComponent = class SignupComponent {
    constructor(_backendService, router) {
        this._backendService = _backendService;
        this.router = router;
        this.state = '';
        this.idtaken = false;
        this.savedChanges = false;
        this.error = false;
        this.errorMessage = "";
        this.dataLoading = false;
    }
    routeLoginPage() {
        this.router.navigate(['/login']);
    }
    onSubmit(formData) {
        this.dataLoading = true;
        this.querySubscription = this._backendService.createUser(formData).subscribe((res) => {
            if (res["data"]["addUser_M"].email !== "") {
                this.savedChanges = true;
                this.error = false;
                this.errorMessage = "";
            }
            else {
                this.error = true;
                this.errorMessage = res["data"]["addUser_M"].message;
            }
        }, (error) => {
            this.error = true;
            this.errorMessage = error.message;
            this.dataLoading = false;
        }, () => {
            this.dataLoading = false;
        });
    }
    ngOnDestroy() {
        if (this.querySubscription) {
            this.querySubscription.unsubscribe();
        }
    }
};
SignupComponent.ctorParameters = () => [
    { type: _services_backend_service__WEBPACK_IMPORTED_MODULE_3__["BackendService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
];
SignupComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'signup',
        template: __importDefault(__webpack_require__(/*! raw-loader!./signup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/login/signup.component.html")).default,
        animations: [Object(_router_animation__WEBPACK_IMPORTED_MODULE_2__["moveIn"])(), Object(_router_animation__WEBPACK_IMPORTED_MODULE_2__["fallIn"])()],
        host: { '[@moveIn]': '' }
    }),
    __metadata("design:paramtypes", [_services_backend_service__WEBPACK_IMPORTED_MODULE_3__["BackendService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
], SignupComponent);



/***/ }),

/***/ "./src/app/shared/router.animation.ts":
/*!********************************************!*\
  !*** ./src/app/shared/router.animation.ts ***!
  \********************************************/
/*! exports provided: moveIn, fallIn, moveInLeft */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "moveIn", function() { return moveIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fallIn", function() { return fallIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "moveInLeft", function() { return moveInLeft; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

function moveIn() {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('moveIn', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'fixed', width: '100%' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'fixed', width: '100%' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: '0', transform: 'translateX(100px)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('.6s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: '1', transform: 'translateX(0)' }))
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: '1', transform: 'translateX(0)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('.3s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: '0', transform: 'translateX(-200px)' }))
        ])
    ]);
}
function fallIn() {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('fallIn', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: '0', transform: 'translateY(40px)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('.4s .2s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: '1', transform: 'translateY(0)' }))
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: '1', transform: 'translateX(0)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('.3s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: '0', transform: 'translateX(-200px)' }))
        ])
    ]);
}
function moveInLeft() {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('moveInLeft', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: '0', transform: 'translateX(-100px)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('.6s .2s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: '1', transform: 'translateX(0)' }))
        ])
    ]);
}


/***/ }),

/***/ "./src/app/shared/settings/notifications.component.css":
/*!*************************************************************!*\
  !*** ./src/app/shared/settings/notifications.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9zZXR0aW5ncy9ub3RpZmljYXRpb25zLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/shared/settings/notifications.component.ts":
/*!************************************************************!*\
  !*** ./src/app/shared/settings/notifications.component.ts ***!
  \************************************************************/
/*! exports provided: NotificationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsComponent", function() { return NotificationsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_router_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/router.animation */ "./src/app/shared/router.animation.ts");
/* harmony import */ var _services_backend_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/backend.service */ "./src/app/services/backend.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



let NotificationsComponent = class NotificationsComponent {
    constructor(_backendService) {
        this._backendService = _backendService;
        this.toggle = false;
        this.state = '';
        this.savedChanges = false;
        this.error = false;
        this.errorMessage = "";
        this.dataLoading = false;
    }
    ngOnInit() {
        //  this.getDoc();
    }
};
NotificationsComponent.ctorParameters = () => [
    { type: _services_backend_service__WEBPACK_IMPORTED_MODULE_2__["BackendService"] }
];
NotificationsComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-notifications',
        template: __importDefault(__webpack_require__(/*! raw-loader!./notifications.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/settings/notifications.component.html")).default,
        animations: [Object(_shared_router_animation__WEBPACK_IMPORTED_MODULE_1__["moveIn"])(), Object(_shared_router_animation__WEBPACK_IMPORTED_MODULE_1__["fallIn"])()],
        host: { '[@moveIn]': '' },
        styles: [__importDefault(__webpack_require__(/*! ./notifications.component.css */ "./src/app/shared/settings/notifications.component.css")).default]
    }),
    __metadata("design:paramtypes", [_services_backend_service__WEBPACK_IMPORTED_MODULE_2__["BackendService"]])
], NotificationsComponent);



/***/ }),

/***/ "./src/app/shared/settings/settings.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/settings/settings.component.ts ***!
  \*******************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _router_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../router.animation */ "./src/app/shared/router.animation.ts");
/* harmony import */ var _services_backend_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/backend.service */ "./src/app/services/backend.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




let SettingsComponent = class SettingsComponent {
    constructor(_backendService, router) {
        this._backendService = _backendService;
        this.router = router;
        this.state = '';
        this.savedChanges = false;
        this.error = false;
        this.errorMessage = "";
        this.dataLoading = false;
        this.roles = [
            { value: 'student', viewValue: 'Student' },
            { value: 'parent', viewValue: 'Parent' },
            { value: 'staff', viewValue: 'Staff' },
            { value: 'admin', viewValue: 'Admin' },
            { value: 'teacher', viewValue: 'Teacher' }
        ];
    }
    ngOnInit() {
        if (!localStorage.getItem('token')) {
            this.getUser();
        }
    }
    getUser() {
        if (!localStorage.getItem('token')) {
            this.error = true;
            this.errorMessage = "Please wait for some time to re-load your data from Server.";
        }
        else {
            this.error = false;
            this.errorMessage = "";
        }
        this.dataLoading = true;
        this.querySubscription = this._backendService.getUser().subscribe((res) => {
            if (res["data"]["getUser_Q"].email !== "") {
                this.data = res["data"]["getUser_Q"];
                this.error = false;
                this.errorMessage = "";
            }
            else {
                this.error = true;
                this.errorMessage = res["data"]["getUser_Q"].message;
            }
        }, (error) => {
            this.error = true;
            this.errorMessage = error.message;
            this.dataLoading = false;
        }, () => {
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
            }
            else {
                this.error = true;
                this.errorMessage = res["data"]["updateUser_M"].message;
            }
        }, (error) => {
            this.error = true;
            this.errorMessage = error.message;
            this.dataLoading = false;
        }, () => {
            this.dataLoading = false;
        });
    }
    ngOnDestroy() {
        if (this.querySubscription) {
            this.querySubscription.unsubscribe();
        }
    }
};
SettingsComponent.ctorParameters = () => [
    { type: _services_backend_service__WEBPACK_IMPORTED_MODULE_3__["BackendService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
];
SettingsComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-settings',
        template: __importDefault(__webpack_require__(/*! raw-loader!./settings.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/settings/settings.component.html")).default,
        animations: [Object(_router_animation__WEBPACK_IMPORTED_MODULE_2__["moveIn"])(), Object(_router_animation__WEBPACK_IMPORTED_MODULE_2__["fallIn"])()],
        host: { '[@moveIn]': '' }
    }),
    __metadata("design:paramtypes", [_services_backend_service__WEBPACK_IMPORTED_MODULE_3__["BackendService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
], SettingsComponent);



/***/ }),

/***/ "./src/app/staff/employee.component.css":
/*!**********************************************!*\
  !*** ./src/app/staff/employee.component.css ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0YWZmL2VtcGxveWVlLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/staff/employee.component.ts":
/*!*********************************************!*\
  !*** ./src/app/staff/employee.component.ts ***!
  \*********************************************/
/*! exports provided: EmployeeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeComponent", function() { return EmployeeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_router_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/router.animation */ "./src/app/shared/router.animation.ts");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _services_backend_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/backend.service */ "./src/app/services/backend.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};






let EmployeeComponent = class EmployeeComponent {
    constructor(_backendService) {
        this._backendService = _backendService;
        this.state = '';
        this.savedChanges = false;
        this.error = false;
        this.errorMessage = "";
        this.dataLoading = false;
        this.displayedColumns = ['code', 'descr', '_id'];
    }
    ngOnInit() {
        this.toggleField = "searchMode";
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](this.members);
        this.getJobData();
        this.getLeaveData();
        this.getSalData();
    }
    toggle(filter) {
        if (!filter) {
            filter = "searchMode";
        }
        else {
            filter = filter;
        }
        this.toggleField = filter;
        //  this.dataLoading = false;
    }
    getLeaveData() {
        this.dataLoading = true;
        return this.querySubscription = this._backendService.getLeaveCode().subscribe((res) => {
            if (res["data"]["getLeaveCode_Q"].code !== "") {
                this.leaveCDs = res["data"]["getLeaveCode_Q"];
                this.error = false;
                this.errorMessage = "";
            }
        }, (error) => {
            this.error = true;
            this.errorMessage = error.message;
            this.dataLoading = false;
        }, () => {
            this.dataLoading = false;
        });
    }
    getSalData() {
        this.dataLoading = true;
        return this.querySubscription = this._backendService.getSalaryCode().subscribe((res) => {
            if (res["data"]["getSalaryCode_Q"].code !== "") {
                this.salCDs = res["data"]["getSalaryCode_Q"];
                this.error = false;
                this.errorMessage = "";
            }
        }, (error) => {
            this.error = true;
            this.errorMessage = error.message;
            this.dataLoading = false;
        }, () => {
            this.dataLoading = false;
        });
    }
    getJobData() {
        this.dataLoading = true;
        return this.querySubscription = this._backendService.getJobCode().subscribe((res) => {
            if (res["data"]["getJobCode_Q"].code !== "") {
                this.jobCDs = res["data"]["getJobCode_Q"];
                this.error = false;
                this.errorMessage = "";
            }
        }, (error) => {
            this.error = true;
            this.errorMessage = error.message;
            this.dataLoading = false;
        }, () => {
            this.dataLoading = false;
        });
    }
    getData(filterAllDocs, getOneDoc) {
        this.dataLoading = true;
        return this.querySubscription = this._backendService.getEmployee(filterAllDocs, getOneDoc).subscribe((res) => {
            if (res["data"]["getEmployee_Q"].CODE !== "") {
                if (getOneDoc) {
                    this.data = res["data"]["getEmployee_Q"][0];
                    this.toggle('editMode');
                }
                else {
                    this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](res["data"]["getEmployee_Q"]);
                    this.dataSource.paginator = this.paginator;
                    this.dataSource.sort = this.sort;
                }
                this.error = false;
                this.errorMessage = "";
            }
            else {
                this.error = true;
                this.errorMessage = res["data"]["getEmployee_Q"].message;
            }
        }, (error) => {
            this.error = true;
            this.errorMessage = error.message;
            this.dataLoading = false;
        }, () => {
            this.dataLoading = false;
        });
    }
    setData(formData) {
        this.dataLoading = true;
        this.querySubscription = this._backendService.setEmployee(formData).subscribe((res) => {
            if (res["data"]["setEmployee_M"].CODE !== "") {
                this.savedChanges = true;
                this.error = false;
                this.errorMessage = "";
            }
            else {
                this.error = true;
                this.errorMessage = res["data"]["setEmployee_M"].message;
            }
        }, (error) => {
            this.error = true;
            this.errorMessage = error.message;
            this.dataLoading = false;
        }, () => {
            this.dataLoading = false;
        });
    }
    updateData(formData) {
        this.dataLoading = true;
        this.querySubscription = this._backendService.setEmployeeDoc(formData).subscribe((res) => {
            if (res["data"]["setEmployeeDoc_M"].CODE !== "") {
                this.savedChanges = true;
                this.error = false;
                this.errorMessage = "";
            }
            else {
                this.error = true;
                this.errorMessage = res["data"]["setEmployeeDoc_M"].message;
            }
        }, (error) => {
            this.error = true;
            this.errorMessage = error.message;
            this.dataLoading = false;
        }, () => {
            this.dataLoading = false;
        });
    }
    getDoc(docId) {
        this.getData("", docId);
    }
    deleteDoc(docId) {
        if (confirm("Are you sure want to delete this record ?")) {
            this.querySubscription = this._backendService.delEmployeeDoc(docId).subscribe((res) => {
                //console.log("res"+JSON.stringify(res))
                if (!res["data"]["delEmployeeDoc_M"]) {
                    this.toggle('searchMode');
                    this.error = false;
                    this.errorMessage = "";
                }
                else {
                    this.error = true;
                    this.errorMessage = res["data"]["delEmployeeDoc_M"].message;
                }
            }, (error) => {
                this.error = true;
                this.errorMessage = error.message;
                this.dataLoading = false;
            }, () => {
                this.dataLoading = false;
            });
        }
    }
    //mat table paginator and filter functions
    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }
    applyFilter(filterValue) {
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
};
EmployeeComponent.ctorParameters = () => [
    { type: _services_backend_service__WEBPACK_IMPORTED_MODULE_5__["BackendService"] }
];
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: false }),
    __metadata("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
], EmployeeComponent.prototype, "paginator", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], { static: false }),
    __metadata("design:type", _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
], EmployeeComponent.prototype, "sort", void 0);
EmployeeComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-employee',
        template: __importDefault(__webpack_require__(/*! raw-loader!./employee.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/staff/employee.component.html")).default,
        animations: [Object(_shared_router_animation__WEBPACK_IMPORTED_MODULE_1__["moveIn"])(), Object(_shared_router_animation__WEBPACK_IMPORTED_MODULE_1__["fallIn"])()],
        host: { '[@moveIn]': '' },
        styles: [__importDefault(__webpack_require__(/*! ./employee.component.css */ "./src/app/staff/employee.component.css")).default]
    }),
    __metadata("design:paramtypes", [_services_backend_service__WEBPACK_IMPORTED_MODULE_5__["BackendService"]])
], EmployeeComponent);



/***/ }),

/***/ "./src/app/staff/expenses.component.css":
/*!**********************************************!*\
  !*** ./src/app/staff/expenses.component.css ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0YWZmL2V4cGVuc2VzLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/staff/expenses.component.ts":
/*!*********************************************!*\
  !*** ./src/app/staff/expenses.component.ts ***!
  \*********************************************/
/*! exports provided: ExpensesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpensesComponent", function() { return ExpensesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _services_backend_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/backend.service */ "./src/app/services/backend.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};







let ExpensesComponent = class ExpensesComponent {
    constructor(_backendService, _fb, _router) {
        this._backendService = _backendService;
        this._fb = _fb;
        this._router = _router;
        this.state = '';
        this.savedChanges = false;
        this.error = false;
        this.errorMessage = "";
        this.dataLoading = false;
        this.statusCDs = ['OPEN', 'CLOSED', 'PAID', 'PENDING', 'HOLD', 'CANCELLED'];
        this.typeCDs = ['REGULAR', 'RECURRING', 'DIRECT INVOICE', 'EXPEDITE', 'OTHER', 'EXPENSE'];
        this.discCDs = ['%', 'Fixed'];
        this.total_amount = 0;
        this.displayedColumns = ['code', 'descr', '_id'];
    }
    ngOnInit() {
        this.toggleField = "searchMode";
        this.error = false;
        this.errorMessage = "";
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](this.members);
        this.addDataForm = this._fb.group({
            code: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            descr: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            TYPE: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            STATUS: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            INVOICE: [''],
            VENDOR: [''],
            ADDRESS: this._fb.array([this._fb.group({
                    ADD_TYPE: '',
                    ADD_LINE_1: '',
                    ADD_LINE_2: '',
                    PIN_CODE: '',
                    STATE: '',
                    COUNTRY: ''
                })]),
            PHONE: this._fb.array([this._fb.group({
                    PHONE_TYPE: '',
                    PHONE_NUMBER: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern("^[0-9]*$")]]
                })]),
            EMAILID: this._fb.array([this._fb.group({
                    EMAIL_TYPE: '',
                    EMAILID: ''
                })]),
            EDATE: '',
            RDATE: '',
            DDATE: '',
            PDATE: '',
            LINE: this._fb.array([this._fb.group({
                    LINE_NUM: '',
                    LINE_NAME: '',
                    AMOUNT: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern("^[0-9]*$")]]
                })]),
            GAMOUNT: '',
            GAMOUNT_DISC_TYPE: '',
            DISC_G_PERCENT: '',
            DISC_GAMOUNT: '',
            TAX_TYPE: '',
            TAX_PERCENT: '',
            TAX_GAMOUNT: '',
            SHIP_TYPE: '',
            SHIP_PERCENT: '',
            SHIP_GAMOUNT: '',
            FINAL_AMOUNT: '',
            PAID_AMOUNT: '',
            BALANCE: ''
        });
        this.editDataForm = this._fb.group({
            code: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            descr: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            TYPE: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            STATUS: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            INVOICE: [''],
            VENDOR: [''],
            ADDRESS: this._fb.array([]),
            PHONE: this._fb.array([]),
            EMAILID: this._fb.array([]),
            EDATE: '',
            RDATE: '',
            DDATE: '',
            PDATE: '',
            LINE: this._fb.array([]),
            GAMOUNT: '',
            GAMOUNT_DISC_TYPE: '',
            DISC_G_PERCENT: '',
            DISC_GAMOUNT: '',
            TAX_TYPE: '',
            TAX_PERCENT: '',
            TAX_GAMOUNT: '',
            SHIP_TYPE: '',
            SHIP_PERCENT: '',
            SHIP_GAMOUNT: '',
            FINAL_AMOUNT: '',
            PAID_AMOUNT: '',
            BALANCE: ''
        });
    }
    LINES(formName) {
        return this[formName].get('LINE');
    }
    addLINES(formName) {
        this.LINES(formName).push(this._fb.group({
            LINE_NUM: '',
            LINE_NAME: '',
            AMOUNT: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern("^[0-9]*$")]]
        }));
        this.calculateTotal(formName);
    }
    deleteLINES(index, formName) {
        this.LINES(formName).removeAt(index);
        this.calculateTotal(formName);
    }
    ADDRESSES(formName) {
        return this[formName].get('ADDRESS');
    }
    addADDRESSES(formName) {
        this.ADDRESSES(formName).push(this._fb.group({
            ADD_TYPE: '',
            ADD_LINE_1: '',
            ADD_LINE_2: '',
            PIN_CODE: '',
            STATE: '',
            COUNTRY: ''
        }));
        this.calculateTotal(formName);
    }
    deleteADDRESSES(index, formName) {
        this.ADDRESSES(formName).removeAt(index);
        this.calculateTotal(formName);
    }
    PHONES(formName) {
        return this[formName].get('PHONE');
    }
    addPHONES(formName) {
        this.PHONES(formName).push(this._fb.group({
            PHONE_TYPE: '',
            PHONE_NUMBER: '',
        }));
        this.calculateTotal(formName);
    }
    deletePHONES(index, formName) {
        this.PHONES(formName).removeAt(index);
        this.calculateTotal(formName);
    }
    EMAILIDS(formName) {
        return this[formName].get('EMAILID');
    }
    addEMAILS(formName) {
        this.EMAILIDS(formName).push(this._fb.group({
            EMAIL_TYPE: '',
            EMAILID: '',
        }));
        this.calculateTotal(formName);
    }
    deleteEMAILS(index, formName) {
        this.EMAILIDS(formName).removeAt(index);
        this.calculateTotal(formName);
    }
    calculateTotal(formName) {
        this.total_amount = 0;
        for (let i = 0; i <= this[formName].value.LINE.length; i++) {
            if (this[formName].value.LINE[i]) {
                this.total_amount += +this[formName].value.LINE[i].AMOUNT;
            }
        }
        this[formName].controls['GAMOUNT'].setValue(this.total_amount.toFixed(2));
        if (this[formName].controls.GAMOUNT_DISC_TYPE.value == 1 && this[formName].controls.DISC_G_PERCENT.value != '') {
            this[formName].controls['DISC_GAMOUNT'].setValue((this.total_amount * this[formName].controls.DISC_G_PERCENT.value / 100).toFixed(2));
        }
        if (this[formName].controls.TAX_TYPE.value == 1 && this[formName].controls.TAX_PERCENT.value != '') {
            this[formName].controls['TAX_GAMOUNT'].setValue(((this.total_amount - this[formName].controls['DISC_GAMOUNT'].value) * this[formName].controls.TAX_PERCENT.value / 100).toFixed(2));
        }
        if (this[formName].controls.SHIP_TYPE.value == 1 && this[formName].controls.SHIP_PERCENT.value != '') {
            this[formName].controls['SHIP_GAMOUNT'].setValue(((this.total_amount - this[formName].controls['DISC_GAMOUNT'].value) * this[formName].controls.SHIP_PERCENT.value / 100).toFixed(2));
        }
        this[formName].controls['FINAL_AMOUNT'].setValue((this.total_amount - this[formName].controls['DISC_GAMOUNT'].value - this[formName].controls['TAX_GAMOUNT'].value - this[formName].controls['SHIP_GAMOUNT'].value).toFixed(2));
        this[formName].controls['BALANCE'].setValue((this[formName].controls['FINAL_AMOUNT'].value - this[formName].controls['PAID_AMOUNT'].value).toFixed(2));
    }
    toggle(filter) {
        if (!filter) {
            filter = "searchMode";
        }
        else {
            filter = filter;
        }
        this.toggleField = filter;
        this.dataLoading = false;
    }
    getData(filterAllDocs, getOneDoc) {
        this.dataLoading = true;
        return this.querySubscription = this._backendService.getExpenses(filterAllDocs, getOneDoc).subscribe((res) => {
            if (res["data"]["getSalaryVoucher_Q"].code !== "") {
                if (getOneDoc) {
                    this.data = res["data"]["getSalaryVoucher_Q"][0];
                    this.editDataForm = this._fb.group({
                        _id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
                        emplid: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
                        emplskey: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
                        empldescr: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
                        empllastname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
                        emplsalcode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
                        paiddata: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
                        code: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
                        descr: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
                        bsalary: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
                        line: this._fb.array([]),
                        gamount: ''
                    });
                    this.editDataForm.patchValue(this.data);
                    for (let i = 0; i < this.data["line"].length; i++) {
                        this.LINES('editDataForm').push(this._fb.group(this.data["line"][i]));
                    }
                    this.calculateTotal(('editDataForm'));
                    this.toggle('editMode');
                }
                else {
                    this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](res["data"]["getSalaryVoucher_Q"]);
                    this.dataSource.paginator = this.paginator;
                    this.dataSource.sort = this.sort;
                }
                this.error = false;
                this.errorMessage = "";
            }
            else {
                this.error = true;
                this.errorMessage = res["data"]["getSalaryVoucher_Q"].message;
            }
        }, (error) => {
            this.error = true;
            this.errorMessage = error.message;
            this.dataLoading = false;
        }, () => {
            this.dataLoading = false;
        });
    }
    setData(formData) {
        this.dataLoading = true;
        this.querySubscription = this._backendService.setSalaryVoucher(formData).subscribe((res) => {
            if (res["data"]["setSalaryVoucher_M"].code != "") {
                this.savedChanges = true;
                this.error = false;
                this.errorMessage = "";
            }
            else {
                this.error = true;
                this.errorMessage = res["data"]["setSalaryVoucher_M"].message;
            }
        }, (error) => {
            this.error = true;
            this.errorMessage = error.message;
            this.dataLoading = false;
        }, () => {
            this.dataLoading = false;
        });
    }
    updateData(formData) {
        this.dataLoading = true;
        this.querySubscription = this._backendService.setSalaryVoucherDoc(formData).subscribe((res) => {
            if (res["data"]["setSalaryVoucherDoc_M"].code !== "") {
                this.savedChanges = true;
                this.error = false;
                this.errorMessage = "";
            }
            else {
                this.error = true;
                this.errorMessage = res["data"]["setSalaryVoucherDoc_M"].message;
            }
        }, (error) => {
            this.error = true;
            this.errorMessage = error.message;
            this.dataLoading = false;
        }, () => {
            this.dataLoading = false;
        });
    }
    getDoc(docId) {
        this.getData("", docId);
    }
    deleteDoc(docId) {
        if (confirm("Are you sure want to delete this record ?")) {
            this.querySubscription = this._backendService.delSalaryVoucherDoc(docId).subscribe((res) => {
                //console.log("res"+JSON.stringify(res))
                if (!res["data"]["delSalaryVoucherDoc_M"]) {
                    this.toggle('searchMode');
                    this.error = false;
                    this.errorMessage = "";
                }
                else {
                    this.error = true;
                    this.errorMessage = res["data"]["delSalaryVoucherDoc_M"].message;
                }
            }, (error) => {
                this.error = true;
                this.errorMessage = error.message;
                this.dataLoading = false;
            }, () => {
                this.dataLoading = false;
            });
        }
    }
    //mat table paginator and filter functions
    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }
    applyFilter(filterValue) {
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
};
ExpensesComponent.ctorParameters = () => [
    { type: _services_backend_service__WEBPACK_IMPORTED_MODULE_4__["BackendService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] }
];
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], { static: false }),
    __metadata("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
], ExpensesComponent.prototype, "paginator", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], { static: false }),
    __metadata("design:type", _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
], ExpensesComponent.prototype, "sort", void 0);
ExpensesComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-expenses',
        template: __importDefault(__webpack_require__(/*! raw-loader!./expenses.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/staff/expenses.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./expenses.component.css */ "./src/app/staff/expenses.component.css")).default]
    }),
    __metadata("design:paramtypes", [_services_backend_service__WEBPACK_IMPORTED_MODULE_4__["BackendService"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]])
], ExpensesComponent);



/***/ }),

/***/ "./src/app/staff/jobcode.component.ts":
/*!********************************************!*\
  !*** ./src/app/staff/jobcode.component.ts ***!
  \********************************************/
/*! exports provided: JobCodeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobCodeComponent", function() { return JobCodeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_router_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/router.animation */ "./src/app/shared/router.animation.ts");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _services_backend_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/backend.service */ "./src/app/services/backend.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};






//import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
let JobCodeComponent = class JobCodeComponent {
    constructor(_backendService) {
        this._backendService = _backendService;
        this.state = '';
        this.savedChanges = false;
        this.error = false;
        this.errorMessage = "";
        this.dataLoading = false;
        this.displayedColumns = ['code', 'descr', '_id'];
    }
    ngOnInit() {
        this.toggleField = "searchMode";
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](this.members);
    }
    toggle(filter) {
        if (!filter) {
            filter = "searchMode";
        }
        else {
            filter = filter;
        }
        this.toggleField = filter;
    }
    getData(filterAllDocs, getOneDoc) {
        this.dataLoading = true;
        return this.querySubscription = this._backendService.getJobCode(filterAllDocs, getOneDoc).subscribe((res) => {
            if (res["data"]["getJobCode_Q"].CODE !== "") {
                if (getOneDoc) {
                    this.data = res["data"]["getJobCode_Q"][0];
                    this.toggle('editMode');
                }
                else {
                    this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](res["data"]["getJobCode_Q"]);
                    this.dataSource.paginator = this.paginator;
                    this.dataSource.sort = this.sort;
                }
                this.error = false;
                this.errorMessage = "";
            }
            else {
                this.error = true;
                this.errorMessage = res["data"]["getJobCode_Q"].message;
            }
        }, (error) => {
            this.error = true;
            this.errorMessage = error.message;
            this.dataLoading = false;
        }, () => {
            this.dataLoading = false;
        });
    }
    setData(formData) {
        this.dataLoading = true;
        this.querySubscription = this._backendService.setJobCode(formData).subscribe((res) => {
            if (res["data"]["setJobCode_M"].CODE !== "") {
                this.savedChanges = true;
                this.error = false;
                this.errorMessage = "";
            }
            else {
                this.error = true;
                this.errorMessage = res["data"]["setJobCode_M"].message;
            }
        }, (error) => {
            this.error = true;
            this.errorMessage = error.message;
            this.dataLoading = false;
        }, () => {
            this.dataLoading = false;
        });
    }
    updateData(formData) {
        this.dataLoading = true;
        this.querySubscription = this._backendService.setJobCodeDoc(formData).subscribe((res) => {
            if (res["data"]["setJobCodeDoc_M"].code !== "") {
                this.savedChanges = true;
                this.error = false;
                this.errorMessage = "";
            }
            else {
                this.error = true;
                this.errorMessage = res["data"]["setJobCodeDoc_M"].message;
            }
        }, (error) => {
            this.error = true;
            this.errorMessage = error.message;
            this.dataLoading = false;
        }, () => {
            this.dataLoading = false;
        });
    }
    getDoc(docId) {
        this.getData("", docId);
    }
    deleteDoc(docId) {
        if (confirm("Are you sure want to delete this record ?")) {
            this.querySubscription = this._backendService.delJobCodeDoc(docId).subscribe((res) => {
                //console.log("res"+JSON.stringify(res))
                if (!res["data"]["delJobCodeDoc_M"]) {
                    this.toggle('searchMode');
                    this.error = false;
                    this.errorMessage = "";
                }
                else {
                    this.error = true;
                    this.errorMessage = res["data"]["delJobCodeDoc_M"].message;
                }
            }, (error) => {
                this.error = true;
                this.errorMessage = error.message;
                this.dataLoading = false;
            }, () => {
                this.dataLoading = false;
            });
        }
    }
    /**
    deleteDoc(docId) {
        if (confirm("Are you sure want to delete this record ?")) {
            this._backendService.deleteData(docId, 'job');
            this.toggle('searchMode');
        }
    }
    updateData(docId,formData) {
        if (confirm("Are you sure want to update this record ?")) {
            return this._backendService.setData(formData,'job',docId).then(
                (success) => this.savedDataFlag = true
            );
        }
    }
    **/
    //mat table paginator and filter functions
    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }
    applyFilter(filterValue) {
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
};
JobCodeComponent.ctorParameters = () => [
    { type: _services_backend_service__WEBPACK_IMPORTED_MODULE_5__["BackendService"] }
];
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: false }),
    __metadata("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
], JobCodeComponent.prototype, "paginator", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], { static: false }),
    __metadata("design:type", _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
], JobCodeComponent.prototype, "sort", void 0);
JobCodeComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'jobcode',
        template: __importDefault(__webpack_require__(/*! raw-loader!./jobcode.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/staff/jobcode.component.html")).default,
        animations: [Object(_shared_router_animation__WEBPACK_IMPORTED_MODULE_1__["moveIn"])(), Object(_shared_router_animation__WEBPACK_IMPORTED_MODULE_1__["fallIn"])()],
        host: { '[@moveIn]': '' }
    }),
    __metadata("design:paramtypes", [_services_backend_service__WEBPACK_IMPORTED_MODULE_5__["BackendService"]])
], JobCodeComponent);



/***/ }),

/***/ "./src/app/staff/leavecode.component.ts":
/*!**********************************************!*\
  !*** ./src/app/staff/leavecode.component.ts ***!
  \**********************************************/
/*! exports provided: LeaveCodeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaveCodeComponent", function() { return LeaveCodeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_router_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/router.animation */ "./src/app/shared/router.animation.ts");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _services_backend_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/backend.service */ "./src/app/services/backend.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};






let LeaveCodeComponent = class LeaveCodeComponent {
    constructor(_backendService) {
        this._backendService = _backendService;
        this.state = '';
        this.savedChanges = false;
        this.error = false;
        this.errorMessage = "";
        this.dataLoading = false;
        this.displayedColumns = ['code', 'descr', '_id'];
    }
    ngOnInit() {
        this.toggleField = "searchMode";
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](this.members);
    }
    toggle(filter) {
        if (!filter) {
            filter = "searchMode";
        }
        else {
            filter = filter;
        }
        this.toggleField = filter;
    }
    getData(filterAllDocs, getOneDoc) {
        this.dataLoading = true;
        return this.querySubscription = this._backendService.getLeaveCode(filterAllDocs, getOneDoc).subscribe((res) => {
            if (res["data"]["getLeaveCode_Q"].code !== "") {
                if (getOneDoc) {
                    this.data = res["data"]["getLeaveCode_Q"][0];
                    this.toggle('editMode');
                }
                else {
                    this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](res["data"]["getLeaveCode_Q"]);
                    this.dataSource.paginator = this.paginator;
                    this.dataSource.sort = this.sort;
                }
                this.error = false;
                this.errorMessage = "";
            }
            else {
                this.error = true;
                this.errorMessage = res["data"]["getLeaveCode_Q"].message;
            }
        }, (error) => {
            this.error = true;
            this.errorMessage = error.message;
            this.dataLoading = false;
        }, () => {
            this.dataLoading = false;
        });
    }
    setData(formData) {
        this.dataLoading = true;
        this.querySubscription = this._backendService.setLeaveCode(formData).subscribe((res) => {
            if (res["data"]["setLeaveCode_M"].code !== "") {
                this.savedChanges = true;
                this.error = false;
                this.errorMessage = "";
            }
            else {
                this.error = true;
                this.errorMessage = res["data"]["setLeaveCode_M"].message;
            }
        }, (error) => {
            this.error = true;
            this.errorMessage = error.message;
            this.dataLoading = false;
        }, () => {
            this.dataLoading = false;
        });
    }
    updateData(formData) {
        this.dataLoading = true;
        this.querySubscription = this._backendService.setLeaveCodeDoc(formData).subscribe((res) => {
            if (res["data"]["setLeaveCodeDoc_M"].code !== "") {
                this.savedChanges = true;
                this.error = false;
                this.errorMessage = "";
            }
            else {
                this.error = true;
                this.errorMessage = res["data"]["setLeaveCodeDoc_M"].message;
            }
        }, (error) => {
            this.error = true;
            this.errorMessage = error.message;
            this.dataLoading = false;
        }, () => {
            this.dataLoading = false;
        });
    }
    getDoc(docId) {
        this.getData("", docId);
    }
    deleteDoc(docId) {
        if (confirm("Are you sure want to delete this record ?")) {
            this.querySubscription = this._backendService.delLeaveCodeDoc(docId).subscribe((res) => {
                //console.log("res"+JSON.stringify(res))
                if (!res["data"]["delLeaveCodeDoc_M"]) {
                    this.toggle('searchMode');
                    this.error = false;
                    this.errorMessage = "";
                }
                else {
                    this.error = true;
                    this.errorMessage = res["data"]["delLeaveCodeDoc_M"].message;
                }
            }, (error) => {
                this.error = true;
                this.errorMessage = error.message;
                this.dataLoading = false;
            }, () => {
                this.dataLoading = false;
            });
        }
    }
    //mat table paginator and filter functions
    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }
    applyFilter(filterValue) {
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
};
LeaveCodeComponent.ctorParameters = () => [
    { type: _services_backend_service__WEBPACK_IMPORTED_MODULE_5__["BackendService"] }
];
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: false }),
    __metadata("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
], LeaveCodeComponent.prototype, "paginator", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], { static: false }),
    __metadata("design:type", _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
], LeaveCodeComponent.prototype, "sort", void 0);
LeaveCodeComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'leavecode',
        template: __importDefault(__webpack_require__(/*! raw-loader!./leavecode.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/staff/leavecode.component.html")).default,
        animations: [Object(_shared_router_animation__WEBPACK_IMPORTED_MODULE_1__["moveIn"])(), Object(_shared_router_animation__WEBPACK_IMPORTED_MODULE_1__["fallIn"])()],
        host: { '[@moveIn]': '' }
    }),
    __metadata("design:paramtypes", [_services_backend_service__WEBPACK_IMPORTED_MODULE_5__["BackendService"]])
], LeaveCodeComponent);



/***/ }),

/***/ "./src/app/staff/salary.component.css":
/*!********************************************!*\
  !*** ./src/app/staff/salary.component.css ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0YWZmL3NhbGFyeS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/staff/salary.component.ts":
/*!*******************************************!*\
  !*** ./src/app/staff/salary.component.ts ***!
  \*******************************************/
/*! exports provided: SalaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalaryComponent", function() { return SalaryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_router_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/router.animation */ "./src/app/shared/router.animation.ts");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _services_backend_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/backend.service */ "./src/app/services/backend.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};








let SalaryComponent = class SalaryComponent {
    constructor(_backendService, _fb, _router) {
        this._backendService = _backendService;
        this._fb = _fb;
        this._router = _router;
        this.state = '';
        this.savedChanges = false;
        this.error = false;
        this.errorMessage = "";
        this.dataLoading = false;
        this.pCDs = ['Allowance', 'Deduction'];
        this.freqCDs = ['Bi-Weekly', 'Monthly', 'Yearly', 'One-time', 'OTHER'];
        this.total_amount = 0;
        this.displayedColumns = ['code', 'descr', 'emplid', 'empldescr', 'empllastname', 'paiddata', '_id'];
    }
    ngOnInit() {
        let id = this._router.snapshot.paramMap.get('id');
        this.getEmployee(id);
        this.toggleField = (!id) ? "searchMode" : "addMode";
        //this.toggleField = "searchMode";
        this.error = false;
        this.errorMessage = "";
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](this.members);
        this.addDataForm = this._fb.group({
            emplid: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            emplskey: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            empldescr: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            empllastname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            emplsalcode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            paiddata: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            code: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            descr: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            bsalary: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            line: this._fb.array([]),
            /**
            line: this._fb.array([this._fb.group({
                frequency: ['', Validators.required],
                ptype: ['', Validators.required],
                payval: ['', Validators.required],
                amount: ['', [Validators.pattern("^[0-9]*$")]]
            })]),
            */
            gamount: ''
        });
        this.editDataForm = this._fb.group({
            _id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            emplid: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            emplskey: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            empldescr: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            empllastname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            emplsalcode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            paiddata: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            code: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            descr: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            bsalary: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            line: this._fb.array([]),
            gamount: ''
        });
    }
    getEmployee(id) {
        this.dataLoading = true;
        return this.querySubscription = this._backendService.getEmployee("", id).subscribe((res) => {
            this.addDataForm.controls["emplid"].patchValue(res["data"]["getEmployee_Q"][0]._id);
            this.addDataForm.controls["emplskey"].patchValue(res["data"]["getEmployee_Q"][0].SKEY);
            this.addDataForm.controls["empldescr"].patchValue(res["data"]["getEmployee_Q"][0].DESCR);
            this.addDataForm.controls["empllastname"].patchValue(res["data"]["getEmployee_Q"][0].LAST_NAME);
            this.addDataForm.controls["emplsalcode"].patchValue(res["data"]["getEmployee_Q"][0].SALARY_CODE);
            this._backendService.getSalaryCode("", res["data"]["getEmployee_Q"][0].SALARY_CODE).subscribe((res) => {
                if (res["data"]["getSalaryCode_Q"].code !== "") {
                    this.data = res["data"]["getSalaryCode_Q"][0];
                    this.addDataForm.patchValue(this.data);
                    this.addDataForm.controls["code"].patchValue("");
                    for (let i = 0; i < this.data["line"].length; i++) {
                        this.LINES('addDataForm').push(this._fb.group(this.data["line"][i]));
                    }
                    this.calculateTotal(('addDataForm'));
                }
            });
        }, (error) => {
            this.error = true;
            this.errorMessage = error.message;
            this.dataLoading = false;
        }, () => {
            this.dataLoading = false;
        });
    }
    LINES(formName) {
        return this[formName].get('line');
    }
    addLINES(formName) {
        this.LINES(formName).push(this._fb.group({
            frequency: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            ptype: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            payval: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            amount: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].pattern("^[0-9]*$")]]
        }));
        this.calculateTotal(formName);
    }
    deleteLINES(index, formName) {
        this.LINES(formName).removeAt(index);
        this.calculateTotal(formName);
    }
    calculateTotal(formName) {
        this.total_amount = 0;
        for (let i = 0; i <= this[formName].value.line.length; i++) {
            if (this[formName].value.line[i]) {
                if (this[formName].value.line[i].ptype == 'Allowance') {
                    this.total_amount += +this[formName].value.line[i].amount;
                }
                else {
                    this.total_amount -= +this[formName].value.line[i].amount;
                }
            }
        }
        this.total_amount += parseFloat(this[formName].controls['bsalary'].value);
        this[formName].controls['gamount'].setValue(this.total_amount.toFixed(2));
    }
    toggle(filter) {
        if (!filter) {
            filter = "searchMode";
        }
        else {
            filter = filter;
        }
        this.toggleField = filter;
        this.dataLoading = false;
    }
    getData(filterAllDocs, getOneDoc) {
        this.dataLoading = true;
        return this.querySubscription = this._backendService.getSalaryVoucher(filterAllDocs, getOneDoc).subscribe((res) => {
            if (res["data"]["getSalaryVoucher_Q"].code !== "") {
                if (getOneDoc) {
                    this.data = res["data"]["getSalaryVoucher_Q"][0];
                    this.editDataForm = this._fb.group({
                        _id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
                        emplid: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
                        emplskey: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
                        empldescr: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
                        empllastname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
                        emplsalcode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
                        paiddata: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
                        code: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
                        descr: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
                        bsalary: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
                        line: this._fb.array([]),
                        gamount: ''
                    });
                    this.editDataForm.patchValue(this.data);
                    for (let i = 0; i < this.data["line"].length; i++) {
                        this.LINES('editDataForm').push(this._fb.group(this.data["line"][i]));
                    }
                    this.calculateTotal(('editDataForm'));
                    this.toggle('editMode');
                }
                else {
                    this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](res["data"]["getSalaryVoucher_Q"]);
                    this.dataSource.paginator = this.paginator;
                    this.dataSource.sort = this.sort;
                }
                this.error = false;
                this.errorMessage = "";
            }
            else {
                this.error = true;
                this.errorMessage = res["data"]["getSalaryVoucher_Q"].message;
            }
        }, (error) => {
            this.error = true;
            this.errorMessage = error.message;
            this.dataLoading = false;
        }, () => {
            this.dataLoading = false;
        });
    }
    setData(formData) {
        this.dataLoading = true;
        this.querySubscription = this._backendService.setSalaryVoucher(formData).subscribe((res) => {
            if (res["data"]["setSalaryVoucher_M"].code != "") {
                this.savedChanges = true;
                this.error = false;
                this.errorMessage = "";
            }
            else {
                this.error = true;
                this.errorMessage = res["data"]["setSalaryVoucher_M"].message;
            }
        }, (error) => {
            this.error = true;
            this.errorMessage = error.message;
            this.dataLoading = false;
        }, () => {
            this.dataLoading = false;
        });
    }
    updateData(formData) {
        this.dataLoading = true;
        this.querySubscription = this._backendService.setSalaryVoucherDoc(formData).subscribe((res) => {
            if (res["data"]["setSalaryVoucherDoc_M"].code !== "") {
                this.savedChanges = true;
                this.error = false;
                this.errorMessage = "";
            }
            else {
                this.error = true;
                this.errorMessage = res["data"]["setSalaryVoucherDoc_M"].message;
            }
        }, (error) => {
            this.error = true;
            this.errorMessage = error.message;
            this.dataLoading = false;
        }, () => {
            this.dataLoading = false;
        });
    }
    getDoc(docId) {
        this.getData("", docId);
    }
    deleteDoc(docId) {
        if (confirm("Are you sure want to delete this record ?")) {
            this.querySubscription = this._backendService.delSalaryVoucherDoc(docId).subscribe((res) => {
                //console.log("res"+JSON.stringify(res))
                if (!res["data"]["delSalaryVoucherDoc_M"]) {
                    this.toggle('searchMode');
                    this.error = false;
                    this.errorMessage = "";
                }
                else {
                    this.error = true;
                    this.errorMessage = res["data"]["delSalaryVoucherDoc_M"].message;
                }
            }, (error) => {
                this.error = true;
                this.errorMessage = error.message;
                this.dataLoading = false;
            }, () => {
                this.dataLoading = false;
            });
        }
    }
    //mat table paginator and filter functions
    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }
    applyFilter(filterValue) {
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
};
SalaryComponent.ctorParameters = () => [
    { type: _services_backend_service__WEBPACK_IMPORTED_MODULE_5__["BackendService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] }
];
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: false }),
    __metadata("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
], SalaryComponent.prototype, "paginator", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], { static: false }),
    __metadata("design:type", _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
], SalaryComponent.prototype, "sort", void 0);
SalaryComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-salary',
        template: __importDefault(__webpack_require__(/*! raw-loader!./salary.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/staff/salary.component.html")).default,
        animations: [Object(_shared_router_animation__WEBPACK_IMPORTED_MODULE_1__["moveIn"])(), Object(_shared_router_animation__WEBPACK_IMPORTED_MODULE_1__["fallIn"])()],
        host: { '[@moveIn]': '' },
        styles: [__importDefault(__webpack_require__(/*! ./salary.component.css */ "./src/app/staff/salary.component.css")).default]
    }),
    __metadata("design:paramtypes", [_services_backend_service__WEBPACK_IMPORTED_MODULE_5__["BackendService"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]])
], SalaryComponent);



/***/ }),

/***/ "./src/app/staff/salarycode.component.css":
/*!************************************************!*\
  !*** ./src/app/staff/salarycode.component.css ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0YWZmL3NhbGFyeWNvZGUuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/staff/salarycode.component.ts":
/*!***********************************************!*\
  !*** ./src/app/staff/salarycode.component.ts ***!
  \***********************************************/
/*! exports provided: SalaryCodeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalaryCodeComponent", function() { return SalaryCodeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_router_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/router.animation */ "./src/app/shared/router.animation.ts");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _services_backend_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/backend.service */ "./src/app/services/backend.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


//import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';





let SalaryCodeComponent = class SalaryCodeComponent {
    constructor(_backendService, _fb) {
        this._backendService = _backendService;
        this._fb = _fb;
        this.state = '';
        this.savedChanges = false;
        this.error = false;
        this.errorMessage = "";
        this.dataLoading = false;
        this.pCDs = ['Allowance', 'Deduction'];
        this.freqCDs = ['Bi-Weekly', 'Monthly', 'Yearly', 'One-time', 'OTHER'];
        this.total_amount = 0;
        this.displayedColumns = ['code', 'descr', '_id'];
    }
    ngOnInit() {
        this.toggleField = "searchMode";
        this.error = false;
        this.errorMessage = "";
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](this.members);
        this.addDataForm = this._fb.group({
            code: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            descr: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            bsalary: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            line: this._fb.array([this._fb.group({
                    frequency: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
                    ptype: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
                    payval: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
                    amount: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].pattern("^[0-9]*$")]]
                })]),
            gamount: ''
        });
        this.editDataForm = this._fb.group({
            _id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            code: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            descr: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            bsalary: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            line: this._fb.array([]),
            gamount: ''
        });
    }
    LINES(formName) {
        return this[formName].get('line');
    }
    addLINES(formName) {
        this.LINES(formName).push(this._fb.group({
            frequency: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            ptype: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            payval: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            amount: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].pattern("^[0-9]*$")]]
        }));
        this.calculateTotal(formName);
    }
    deleteLINES(index, formName) {
        this.LINES(formName).removeAt(index);
        this.calculateTotal(formName);
    }
    calculateTotal(formName) {
        this.total_amount = 0;
        for (let i = 0; i <= this[formName].value.line.length; i++) {
            if (this[formName].value.line[i]) {
                if (this[formName].value.line[i].ptype == 'Allowance') {
                    this.total_amount += +this[formName].value.line[i].amount;
                }
                else {
                    this.total_amount -= +this[formName].value.line[i].amount;
                }
            }
        }
        this.total_amount += parseFloat(this[formName].controls['bsalary'].value);
        this[formName].controls['gamount'].setValue(this.total_amount.toFixed(2));
    }
    toggle(filter) {
        if (!filter) {
            filter = "searchMode";
        }
        else {
            filter = filter;
        }
        this.toggleField = filter;
        this.dataLoading = false;
    }
    getData(filterAllDocs, getOneDoc) {
        this.dataLoading = true;
        return this.querySubscription = this._backendService.getSalaryCode(filterAllDocs, getOneDoc).subscribe((res) => {
            if (res["data"]["getSalaryCode_Q"].code !== "") {
                if (getOneDoc) {
                    this.data = res["data"]["getSalaryCode_Q"][0];
                    this.editDataForm = this._fb.group({
                        _id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
                        code: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
                        descr: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
                        bsalary: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
                        line: this._fb.array([]),
                        gamount: ''
                    });
                    this.editDataForm.patchValue(this.data);
                    for (let i = 0; i < this.data["line"].length; i++) {
                        this.LINES('editDataForm').push(this._fb.group(this.data["line"][i]));
                    }
                    this.calculateTotal(('editDataForm'));
                    this.toggle('editMode');
                }
                else {
                    this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](res["data"]["getSalaryCode_Q"]);
                    this.dataSource.paginator = this.paginator;
                    this.dataSource.sort = this.sort;
                }
                this.error = false;
                this.errorMessage = "";
            }
            else {
                this.error = true;
                this.errorMessage = res["data"]["getSalaryCode_Q"].message;
            }
        }, (error) => {
            this.error = true;
            this.errorMessage = error.message;
            this.dataLoading = false;
        }, () => {
            this.dataLoading = false;
        });
    }
    setData(formData) {
        this.dataLoading = true;
        this.querySubscription = this._backendService.setSalaryCode(formData).subscribe((res) => {
            if (res["data"]["setSalaryCode_M"].code !== "") {
                this.savedChanges = true;
                this.error = false;
                this.errorMessage = "";
            }
            else {
                this.error = true;
                this.errorMessage = res["data"]["setSalaryCode_M"].message;
            }
        }, (error) => {
            this.error = true;
            this.errorMessage = error.message;
            this.dataLoading = false;
        }, () => {
            this.dataLoading = false;
        });
    }
    updateData(formData) {
        this.dataLoading = true;
        this.querySubscription = this._backendService.setSalaryCodeDoc(formData).subscribe((res) => {
            if (res["data"]["setSalaryCodeDoc_M"].code !== "") {
                this.savedChanges = true;
                this.error = false;
                this.errorMessage = "";
            }
            else {
                this.error = true;
                this.errorMessage = res["data"]["setSalaryCodeDoc_M"].message;
            }
        }, (error) => {
            this.error = true;
            this.errorMessage = error.message;
            this.dataLoading = false;
        }, () => {
            this.dataLoading = false;
        });
    }
    getDoc(docId) {
        this.getData("", docId);
    }
    deleteDoc(docId) {
        if (confirm("Are you sure want to delete this record ?")) {
            this.querySubscription = this._backendService.delSalaryCodeDoc(docId).subscribe((res) => {
                //console.log("res"+JSON.stringify(res))
                if (!res["data"]["delSalaryCodeDoc_M"]) {
                    this.toggle('searchMode');
                    this.error = false;
                    this.errorMessage = "";
                }
                else {
                    this.error = true;
                    this.errorMessage = res["data"]["delSalaryCodeDoc_M"].message;
                }
            }, (error) => {
                this.error = true;
                this.errorMessage = error.message;
                this.dataLoading = false;
            }, () => {
                this.dataLoading = false;
            });
        }
    }
    //mat table paginator and filter functions
    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }
    applyFilter(filterValue) {
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
};
SalaryCodeComponent.ctorParameters = () => [
    { type: _services_backend_service__WEBPACK_IMPORTED_MODULE_5__["BackendService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] }
];
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: false }),
    __metadata("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
], SalaryCodeComponent.prototype, "paginator", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], { static: false }),
    __metadata("design:type", _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
], SalaryCodeComponent.prototype, "sort", void 0);
SalaryCodeComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-salarycode',
        template: __importDefault(__webpack_require__(/*! raw-loader!./salarycode.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/staff/salarycode.component.html")).default,
        animations: [Object(_shared_router_animation__WEBPACK_IMPORTED_MODULE_1__["moveIn"])(), Object(_shared_router_animation__WEBPACK_IMPORTED_MODULE_1__["fallIn"])()],
        host: { '[@moveIn]': '' },
        styles: [__importDefault(__webpack_require__(/*! ./salarycode.component.css */ "./src/app/staff/salarycode.component.css")).default]
    }),
    __metadata("design:paramtypes", [_services_backend_service__WEBPACK_IMPORTED_MODULE_5__["BackendService"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]])
], SalaryCodeComponent);



/***/ }),

/***/ "./src/app/staff/voucher.component.css":
/*!*********************************************!*\
  !*** ./src/app/staff/voucher.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0YWZmL3ZvdWNoZXIuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/staff/voucher.component.ts":
/*!********************************************!*\
  !*** ./src/app/staff/voucher.component.ts ***!
  \********************************************/
/*! exports provided: VoucherComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VoucherComponent", function() { return VoucherComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _services_backend_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/backend.service */ "./src/app/services/backend.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};






let VoucherComponent = class VoucherComponent {
    constructor(_backendService, _fb) {
        this._backendService = _backendService;
        this._fb = _fb;
        this.state = '';
        this.savedChanges = false;
        this.error = false;
        this.errorMessage = "";
        this.dataLoading = false;
        this.statusCDs = ['OPEN', 'CLOSED', 'PAID', 'PENDING', 'HOLD', 'CANCELLED'];
        this.typeCDs = ['REGULAR', 'RECURRING', 'DIRECT INVOICE', 'EXPEDITE', 'OTHER', 'EXPENSE'];
        this.discCDs = ['%', 'Fixed'];
        this.total_amount = 0;
        this.displayedColumns = ['code', 'descr', '_id'];
    }
    ngOnInit() {
        this.toggleField = "searchMode";
        this.error = false;
        this.errorMessage = "";
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](this.members);
        this.addDataForm = this._fb.group({
            code: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            descr: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            TYPE: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            STATUS: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            INVOICE: [''],
            VENDOR: [''],
            ADDRESS: this._fb.array([this._fb.group({
                    ADD_TYPE: '',
                    ADD_LINE_1: '',
                    ADD_LINE_2: '',
                    PIN_CODE: '',
                    STATE: '',
                    COUNTRY: ''
                })]),
            PHONE: this._fb.array([this._fb.group({
                    PHONE_TYPE: '',
                    PHONE_NUMBER: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern("^[0-9]*$")]]
                })]),
            EMAILID: this._fb.array([this._fb.group({
                    EMAIL_TYPE: '',
                    EMAILID: ''
                })]),
            EDATE: '',
            RDATE: '',
            DDATE: '',
            PDATE: '',
            LINE: this._fb.array([this._fb.group({
                    LINE_NUM: '',
                    LINE_NAME: '',
                    AMOUNT: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern("^[0-9]*$")]]
                })]),
            GAMOUNT: '',
            GAMOUNT_DISC_TYPE: '',
            DISC_G_PERCENT: '',
            DISC_GAMOUNT: '',
            TAX_TYPE: '',
            TAX_PERCENT: '',
            TAX_GAMOUNT: '',
            SHIP_TYPE: '',
            SHIP_PERCENT: '',
            SHIP_GAMOUNT: '',
            FINAL_AMOUNT: '',
            PAID_AMOUNT: '',
            BALANCE: ''
        });
        this.editDataForm = this._fb.group({
            code: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            descr: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            TYPE: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            STATUS: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            INVOICE: [''],
            VENDOR: [''],
            ADDRESS: this._fb.array([]),
            PHONE: this._fb.array([]),
            EMAILID: this._fb.array([]),
            EDATE: '',
            RDATE: '',
            DDATE: '',
            PDATE: '',
            LINE: this._fb.array([]),
            GAMOUNT: '',
            GAMOUNT_DISC_TYPE: '',
            DISC_G_PERCENT: '',
            DISC_GAMOUNT: '',
            TAX_TYPE: '',
            TAX_PERCENT: '',
            TAX_GAMOUNT: '',
            SHIP_TYPE: '',
            SHIP_PERCENT: '',
            SHIP_GAMOUNT: '',
            FINAL_AMOUNT: '',
            PAID_AMOUNT: '',
            BALANCE: ''
        });
    }
    LINES(formName) {
        return this[formName].get('LINE');
    }
    addLINES(formName) {
        this.LINES(formName).push(this._fb.group({
            LINE_NUM: '',
            LINE_NAME: '',
            AMOUNT: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern("^[0-9]*$")]]
        }));
        this.calculateTotal(formName);
    }
    deleteLINES(index, formName) {
        this.LINES(formName).removeAt(index);
        this.calculateTotal(formName);
    }
    ADDRESSES(formName) {
        return this[formName].get('ADDRESS');
    }
    addADDRESSES(formName) {
        this.ADDRESSES(formName).push(this._fb.group({
            ADD_TYPE: '',
            ADD_LINE_1: '',
            ADD_LINE_2: '',
            PIN_CODE: '',
            STATE: '',
            COUNTRY: ''
        }));
        this.calculateTotal(formName);
    }
    deleteADDRESSES(index, formName) {
        this.ADDRESSES(formName).removeAt(index);
        this.calculateTotal(formName);
    }
    PHONES(formName) {
        return this[formName].get('PHONE');
    }
    addPHONES(formName) {
        this.PHONES(formName).push(this._fb.group({
            PHONE_TYPE: '',
            PHONE_NUMBER: '',
        }));
        this.calculateTotal(formName);
    }
    deletePHONES(index, formName) {
        this.PHONES(formName).removeAt(index);
        this.calculateTotal(formName);
    }
    EMAILIDS(formName) {
        return this[formName].get('EMAILID');
    }
    addEMAILS(formName) {
        this.EMAILIDS(formName).push(this._fb.group({
            EMAIL_TYPE: '',
            EMAILID: '',
        }));
        this.calculateTotal(formName);
    }
    deleteEMAILS(index, formName) {
        this.EMAILIDS(formName).removeAt(index);
        this.calculateTotal(formName);
    }
    calculateTotal(formName) {
        this.total_amount = 0;
        for (let i = 0; i <= this[formName].value.LINE.length; i++) {
            if (this[formName].value.LINE[i]) {
                this.total_amount += +this[formName].value.LINE[i].AMOUNT;
            }
        }
        this[formName].controls['GAMOUNT'].setValue(this.total_amount.toFixed(2));
        if (this[formName].controls.GAMOUNT_DISC_TYPE.value == 1 && this[formName].controls.DISC_G_PERCENT.value != '') {
            this[formName].controls['DISC_GAMOUNT'].setValue((this.total_amount * this[formName].controls.DISC_G_PERCENT.value / 100).toFixed(2));
        }
        if (this[formName].controls.TAX_TYPE.value == 1 && this[formName].controls.TAX_PERCENT.value != '') {
            this[formName].controls['TAX_GAMOUNT'].setValue(((this.total_amount - this[formName].controls['DISC_GAMOUNT'].value) * this[formName].controls.TAX_PERCENT.value / 100).toFixed(2));
        }
        if (this[formName].controls.SHIP_TYPE.value == 1 && this[formName].controls.SHIP_PERCENT.value != '') {
            this[formName].controls['SHIP_GAMOUNT'].setValue(((this.total_amount - this[formName].controls['DISC_GAMOUNT'].value) * this[formName].controls.SHIP_PERCENT.value / 100).toFixed(2));
        }
        this[formName].controls['FINAL_AMOUNT'].setValue((this.total_amount - this[formName].controls['DISC_GAMOUNT'].value - this[formName].controls['TAX_GAMOUNT'].value - this[formName].controls['SHIP_GAMOUNT'].value).toFixed(2));
        this[formName].controls['BALANCE'].setValue((this[formName].controls['FINAL_AMOUNT'].value - this[formName].controls['PAID_AMOUNT'].value).toFixed(2));
    }
    toggle(filter) {
        if (!filter) {
            filter = "searchMode";
        }
        else {
            filter = filter;
        }
        this.toggleField = filter;
        this.dataLoading = false;
    }
    getData(filterAllDocs, getOneDoc) {
        this.dataLoading = true;
        return this.querySubscription = this._backendService.getVoucher(filterAllDocs, getOneDoc).subscribe((res) => {
            if (res["data"]["getVoucher_Q"].CODE !== "") {
                if (getOneDoc) {
                    this.data = res["data"]["getVoucher_Q"][0];
                    this.editDataForm = this._fb.group({
                        _id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
                        CODE: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
                        DESCR: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
                        TYPE: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
                        STATUS: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
                        INVOICE: [''],
                        VENDOR: [''],
                        ADDRESS: this._fb.array([]),
                        PHONE: this._fb.array([]),
                        EMAILID: this._fb.array([]),
                        EDATE: '',
                        RDATE: '',
                        DDATE: '',
                        PDATE: '',
                        LINE: this._fb.array([]),
                        GAMOUNT: '',
                        GAMOUNT_DISC_TYPE: '',
                        DISC_G_PERCENT: '',
                        DISC_GAMOUNT: '',
                        TAX_TYPE: '',
                        TAX_PERCENT: '',
                        TAX_GAMOUNT: '',
                        SHIP_TYPE: '',
                        SHIP_PERCENT: '',
                        SHIP_GAMOUNT: '',
                        FINAL_AMOUNT: '',
                        PAID_AMOUNT: '',
                        BALANCE: ''
                    });
                    this.editDataForm.patchValue(this.data);
                    for (let i = 0; i < this.data["ADDRESS"].length; i++) {
                        this.ADDRESSES('editDataForm').push(this._fb.group(this.data["ADDRESS"][i]));
                    }
                    for (let i = 0; i < this.data["PHONE"].length; i++) {
                        this.PHONES('editDataForm').push(this._fb.group(this.data["PHONE"][i]));
                    }
                    for (let i = 0; i < this.data["EMAILID"].length; i++) {
                        this.EMAILIDS('editDataForm').push(this._fb.group(this.data["EMAILID"][i]));
                    }
                    for (let i = 0; i < this.data["LINE"].length; i++) {
                        this.LINES('editDataForm').push(this._fb.group(this.data["LINE"][i]));
                    }
                    this.calculateTotal(('editDataForm'));
                    this.toggle('editMode');
                }
                else {
                    this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](res["data"]["getVoucher_Q"]);
                    this.dataSource.paginator = this.paginator;
                    this.dataSource.sort = this.sort;
                }
                this.error = false;
                this.errorMessage = "";
            }
            else {
                this.error = true;
                this.errorMessage = res["data"]["getVoucher_Q"].message;
            }
        }, (error) => {
            this.error = true;
            this.errorMessage = error.message;
            this.dataLoading = false;
        }, () => {
            this.dataLoading = false;
        });
    }
    setData(formData) {
        this.dataLoading = true;
        this.querySubscription = this._backendService.setVoucher(formData).subscribe((res) => {
            if (res["data"]["setVoucher_M"].CODE !== "") {
                this.savedChanges = true;
                this.error = false;
                this.errorMessage = "";
            }
            else {
                this.error = true;
                this.errorMessage = res["data"]["setVoucher_M"].message;
            }
        }, (error) => {
            this.error = true;
            this.errorMessage = error.message;
            this.dataLoading = false;
        }, () => {
            this.dataLoading = false;
        });
    }
    updateData(formData) {
        this.dataLoading = true;
        this.querySubscription = this._backendService.setVoucherDoc(formData).subscribe((res) => {
            if (res["data"]["setVoucherDoc_M"].CODE !== "") {
                this.savedChanges = true;
                this.error = false;
                this.errorMessage = "";
            }
            else {
                this.error = true;
                this.errorMessage = res["data"]["setVoucherDoc_M"].message;
            }
        }, (error) => {
            this.error = true;
            this.errorMessage = error.message;
            this.dataLoading = false;
        }, () => {
            this.dataLoading = false;
        });
    }
    getDoc(docId) {
        this.getData("", docId);
    }
    deleteDoc(docId) {
        if (confirm("Are you sure want to delete this record ?")) {
            this.querySubscription = this._backendService.delVoucherDoc(docId).subscribe((res) => {
                //console.log("res"+JSON.stringify(res))
                if (!res["data"]["delVoucherDoc_M"]) {
                    this.toggle('searchMode');
                    this.error = false;
                    this.errorMessage = "";
                }
                else {
                    this.error = true;
                    this.errorMessage = res["data"]["delVoucherDoc_M"].message;
                }
            }, (error) => {
                this.error = true;
                this.errorMessage = error.message;
                this.dataLoading = false;
            }, () => {
                this.dataLoading = false;
            });
        }
    }
    //mat table paginator and filter functions
    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }
    applyFilter(filterValue) {
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
};
VoucherComponent.ctorParameters = () => [
    { type: _services_backend_service__WEBPACK_IMPORTED_MODULE_4__["BackendService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] }
];
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], { static: false }),
    __metadata("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
], VoucherComponent.prototype, "paginator", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], { static: false }),
    __metadata("design:type", _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
], VoucherComponent.prototype, "sort", void 0);
VoucherComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-voucher',
        template: __importDefault(__webpack_require__(/*! raw-loader!./voucher.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/staff/voucher.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./voucher.component.css */ "./src/app/staff/voucher.component.css")).default]
    }),
    __metadata("design:paramtypes", [_services_backend_service__WEBPACK_IMPORTED_MODULE_4__["BackendService"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]])
], VoucherComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
const environment = {
    production: true,
    emailAPI: 'http://XXXXXX.com/contact-form.php',
    database: 'guest',
    adminkey: 'guest',
    social: {
        role: 'Guest',
        fblink: 'https://www.facebook.com/bismasoftconsulting',
        linkedin: 'YYYYYYYY',
        github: 'https://github.com/haidermalik',
        emailid: 'info@skillroverz.com'
    },
    socialAuthEnabled: false,
    graphql: 'http://localhost:8080/graphql'
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\bismasmsapp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map