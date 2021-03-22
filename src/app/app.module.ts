import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { LogService }
from './shared/log.service';
import { LogTestComponent }
from './shared/log-test.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BismaCustomMaterialModule } from './shared/custom.material';
import { FooterComponent } from './shared/footer.component';
import { HelpdeskComponent } from './shared/helpdesk.component';
import { LoginComponent } from './shared/login/login.component';
import { SignupComponent } from './shared/login/signup.component';
import { SettingsComponent } from './shared/settings/settings.component';
import { AboutusComponent } from './shared/aboutus.component';
import { FeecodeComponent } from './setup/feecode.component';
import { MarkscodeComponent } from './setup/markscode.component';
import { EnrollmentComponent } from './setup/enrollment.component';
import { StudentComponent } from './manage/student.component';
import { FeeComponent } from './manage/fee.component';
import { MarksComponent } from './manage/marks.component';
// Angular Firebase settings
//import { AngularFireModule } from '@angular/fire';
//import { AngularFirestoreModule } from '@angular/fire/firestore';
//import { AngularFireStorageModule } from '@angular/fire/storage';
//import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { AttendanceComponent } from './manage/attendance.component';
import { HeaderAdminComponent } from './shared/header.admin.component';
import { EmployeeComponent } from './staff/employee.component';
import { VoucherComponent } from './staff/voucher.component';
import { ExpensesComponent } from './staff/expenses.component';
import { SalaryComponent } from './staff/salary.component';
import { HomeworkComponent } from './online/homework.component';
import { TutorialsComponent } from './online/tutorials.component';
import { ClassesComponent } from './online/classes.component';
import { AssignmentsComponent } from './online/assignments.component';
// file upload
import { AssignmentsViewComponent } from './online/assignments-view.component';
import { FileUploadComponent } from './shared/dropzone/fileupload.component';
import { DropZoneDirective } from './shared/dropzone/dropzone.directive';
import { FileSizePipe } from './shared/dropzone/filesize.pipe';
import { ClassesViewComponent } from './online/classes-view.component';
import { HomeworkViewComponent } from './online/homework-view.component';
import { TutorialsViewComponent } from './online/tutorials-view.component';
import { StudentViewComponent } from './manage/student-view.component';
import { FeeViewComponent } from './manage/fee-view.component';
import { MarksViewComponent } from './manage/marks-view.component';
import { NotificationsComponent } from './shared/settings/notifications.component';

import { AuthGuardService } from './services/auth-guard.service';
// setup pages
import { JobCodeComponent } from './staff/jobcode.component';
import { LeaveCodeComponent } from './staff/leavecode.component';
import { SalaryCodeComponent } from './staff/salarycode.component';

// angular material imports
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTabsModule } from '@angular/material/tabs';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatIconRegistry } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatListModule } from '@angular/material/list';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatBottomSheetModule, MAT_BOTTOM_SHEET_DEFAULT_OPTIONS } from '@angular/material/bottom-sheet';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatRippleModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatStepperModule } from '@angular/material/stepper';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTableModule } from '@angular/material/table';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DomSanitizer } from '@angular/platform-browser';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatRadioModule } from '@angular/material/radio';
import { BackendService } from './services/backend.service';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HelpdeskComponent,
    LoginComponent,
    SignupComponent,
    SettingsComponent,
    AboutusComponent,
    FeecodeComponent,
    MarkscodeComponent,
    StudentComponent,
    EnrollmentComponent,
    FeeComponent,
    MarksComponent,
    AttendanceComponent,
    HeaderAdminComponent,
    EmployeeComponent,
    SalaryCodeComponent,
    JobCodeComponent,
    LeaveCodeComponent,
    VoucherComponent,
    ExpensesComponent,
    SalaryComponent,
    HomeworkComponent,
    TutorialsComponent,
    ClassesComponent,
    AssignmentsComponent,
    FileUploadComponent,
    DropZoneDirective,
    FileSizePipe,
    AssignmentsViewComponent,
    ClassesViewComponent,
    HomeworkViewComponent,
    TutorialsViewComponent,
    StudentViewComponent,
    FeeViewComponent,
    MarksViewComponent,
    NotificationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BismaCustomMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    LayoutModule,
    BrowserAnimationsModule,
  //  AngularFireModule.initializeApp(environment.firebase, 'SMS-APP'), // imports firebase/app needed for everything
  //  AngularFirestoreModule, // imports firebase/firestore, only needed for database features
  //  AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
  //  AngularFireStorageModule, BrowserAnimationsModule // imports firebase/storage only needed for storage features    
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatTabsModule,
    MatMenuModule,
    MatInputModule,
    MatSelectModule,
    MatToolbarModule,
    MatCardModule,
    MatChipsModule,
    MatListModule,
    MatTooltipModule,
    MatProgressBarModule,
    MatSnackBarModule,
    MatBottomSheetModule,
    MatButtonToggleModule,
    MatRippleModule,
    MatDialogModule,
    MatStepperModule,
    MatExpansionModule,
    MatTableModule,
    MatAutocompleteModule,
    MatPaginatorModule,
    MatSlideToggleModule,
    MatSidenavModule,
    MatRadioModule,
    MatDatepickerModule

],
  providers: [BackendService,AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {

    iconRegistry.addSvgIcon(
      'facebook',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/fb.svg')
    ),
      iconRegistry.addSvgIcon(
        'linkedin',
        sanitizer.bypassSecurityTrustResourceUrl('assets/icons/linkedin.svg')
      ),
      iconRegistry.addSvgIcon(
        'github',
        sanitizer.bypassSecurityTrustResourceUrl('assets/icons/github.svg')),
      iconRegistry.addSvgIcon(
        'twitter',
        sanitizer.bypassSecurityTrustResourceUrl('assets/icons/twitter_1.svg'));
      iconRegistry.addSvgIcon(
          'more_vert',
        sanitizer.bypassSecurityTrustResourceUrl('assets/icons/more_vert.svg'));
      iconRegistry.addSvgIcon(
          'menu',
        sanitizer.bypassSecurityTrustResourceUrl('assets/icons/menu.svg'));
      iconRegistry.addSvgIcon(
          'dashboard-black',
        sanitizer.bypassSecurityTrustResourceUrl('assets/icons/dashboard-black.svg'));
      iconRegistry.addSvgIcon(
          'star',
        sanitizer.bypassSecurityTrustResourceUrl('assets/icons/star.svg'));
      iconRegistry.addSvgIcon(
          'phone',
        sanitizer.bypassSecurityTrustResourceUrl('assets/icons/phone.svg'));
      iconRegistry.addSvgIcon(
          'email',
        sanitizer.bypassSecurityTrustResourceUrl('assets/icons/email.svg'));
      iconRegistry.addSvgIcon(
          'account_circle',
        sanitizer.bypassSecurityTrustResourceUrl('assets/icons/account_circle.svg'));
      iconRegistry.addSvgIcon(
          'event',
        sanitizer.bypassSecurityTrustResourceUrl('assets/icons/event.svg'));
      iconRegistry.addSvgIcon(
          'track_changes',
        sanitizer.bypassSecurityTrustResourceUrl('assets/icons/track_changes.svg'));
      iconRegistry.addSvgIcon(
          'language',
        sanitizer.bypassSecurityTrustResourceUrl('assets/icons/language.svg'));
      iconRegistry.addSvgIcon(
          'search',
        sanitizer.bypassSecurityTrustResourceUrl('assets/icons/search.svg'));
      iconRegistry.addSvgIcon(
          'book',
        sanitizer.bypassSecurityTrustResourceUrl('assets/icons/book.svg'));
      iconRegistry.addSvgIcon(
          'business',
        sanitizer.bypassSecurityTrustResourceUrl('assets/icons/business.svg'));
      iconRegistry.addSvgIcon(
          'place',
        sanitizer.bypassSecurityTrustResourceUrl('assets/icons/place.svg'));
      iconRegistry.addSvgIcon(
          'code',
        sanitizer.bypassSecurityTrustResourceUrl('assets/icons/code.svg'));
      iconRegistry.addSvgIcon(
          'help',
        sanitizer.bypassSecurityTrustResourceUrl('assets/icons/help.svg'));
      iconRegistry.addSvgIcon(
          'clear',
        sanitizer.bypassSecurityTrustResourceUrl('assets/icons/clear.svg'));
      iconRegistry.addSvgIcon(
          'vpn',
        sanitizer.bypassSecurityTrustResourceUrl('assets/icons/vpn.svg'));
      iconRegistry.addSvgIcon(
          'new',
        sanitizer.bypassSecurityTrustResourceUrl('assets/icons/new.svg'));
      iconRegistry.addSvgIcon(
          'cloud',
        sanitizer.bypassSecurityTrustResourceUrl('assets/icons/cloud.svg'));
      iconRegistry.addSvgIcon(
          'backspace',
        sanitizer.bypassSecurityTrustResourceUrl('assets/icons/backspace.svg'));
      iconRegistry.addSvgIcon(
          'add',
        sanitizer.bypassSecurityTrustResourceUrl('assets/icons/add.svg'));
      iconRegistry.addSvgIcon(
          'edit',
        sanitizer.bypassSecurityTrustResourceUrl('assets/icons/edit.svg'));
      iconRegistry.addSvgIcon(
          'delete',
        sanitizer.bypassSecurityTrustResourceUrl('assets/icons/delete.svg'));
      iconRegistry.addSvgIcon(
          'cached',
        sanitizer.bypassSecurityTrustResourceUrl('assets/icons/cached.svg'));
      iconRegistry.addSvgIcon(
          'create',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/create.svg'));
      iconRegistry.addSvgIcon(
          'employee',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/person.svg'));
      iconRegistry.addSvgIcon(
          'employer',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/group.svg'));
      iconRegistry.addSvgIcon(
          'home',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/home.svg'));
      iconRegistry.addSvgIcon(
          'equalizer',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/equalizer.svg'));
      iconRegistry.addSvgIcon(
          'security',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/security.svg'));
      iconRegistry.addSvgIcon(
          'radio_on',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/radio_on.svg'));
      iconRegistry.addSvgIcon(
          'radio_off',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/radio_off.svg'));
      iconRegistry.addSvgIcon(
          'salary',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/salary.svg'));
      iconRegistry.addSvgIcon(
          'drop_down',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/drop_down.svg'));

  }
}
