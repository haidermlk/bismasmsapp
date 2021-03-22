import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutusComponent } from './shared/aboutus.component';
import { SettingsComponent } from './shared/settings/settings.component';
import { LoginComponent } from './shared/login/login.component';
import { SignupComponent } from './shared/login/signup.component';
import { AuthGuardService } from './services/auth-guard.service';
import { NavAuthGuardService } from './services/nav-auth-guard.service';
import { StudentComponent } from './manage/student.component';
import { StudentViewComponent } from './manage/student-view.component';
import { FeeComponent } from './manage/fee.component';
import { FeeViewComponent } from './manage/fee-view.component';
import { MarksComponent } from './manage/marks.component';
import { MarksViewComponent } from './manage/marks-view.component';
import { FeecodeComponent } from './setup/feecode.component';
import { MarkscodeComponent } from './setup/markscode.component';
import { EnrollmentComponent } from './setup/enrollment.component';
import { EmployeeComponent } from './staff/employee.component';
import { VoucherComponent } from './staff/voucher.component';
import { ExpensesComponent } from './staff/expenses.component';
import { SalaryComponent } from './staff/salary.component';
import { SalaryCodeComponent } from './staff/salarycode.component';
import { JobCodeComponent } from './staff/jobcode.component';
import { LeaveCodeComponent } from './staff/leavecode.component';
import { AssignmentsComponent } from './online/assignments.component';
import { AssignmentsViewComponent } from './online/assignments-view.component';
import { HomeworkComponent } from './online/homework.component';
import { HomeworkViewComponent } from './online/homework-view.component';
import { TutorialsComponent } from './online/tutorials.component';
import { TutorialsViewComponent } from './online/tutorials-view.component';
import { ClassesComponent } from './online/classes.component';
import { ClassesViewComponent } from './online/classes-view.component';
import { NotificationsComponent } from './shared/settings/notifications.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'student', component: StudentComponent, canActivate: [AuthGuardService] },
  { path: 'student-view', component: StudentViewComponent, canActivate: [AuthGuardService] },
  { path: 'student-view', component: StudentViewComponent, canActivate: [AuthGuardService] },
  { path: 'enrollment', component: EnrollmentComponent, canActivate: [AuthGuardService] },
  { path: 'feecode', component: FeecodeComponent, canActivate: [AuthGuardService] },
  { path: 'fee', component: FeeComponent, canActivate: [AuthGuardService] },
  { path: 'fee-view', component: FeeViewComponent, canActivate: [AuthGuardService] },
  { path: 'fee/:id', component: FeeComponent, canActivate: [AuthGuardService ] },
  { path: 'marks', component: MarksComponent, canActivate: [AuthGuardService ] },
  { path: 'marks-view', component: MarksViewComponent, canActivate: [AuthGuardService] },
  { path: 'marks/:id', component: MarksComponent, canActivate: [AuthGuardService] },
  { path: 'markscode', component: MarkscodeComponent, canActivate: [AuthGuardService] },
  { path: 'employee', component: EmployeeComponent, canActivate: [AuthGuardService] },
  { path: 'voucher', component: VoucherComponent, canActivate: [AuthGuardService] },
  { path: 'expenses', component: ExpensesComponent, canActivate: [AuthGuardService] },
  { path: 'assignments', component: AssignmentsComponent, canActivate: [AuthGuardService] },
  { path: 'assignments-view', component: AssignmentsViewComponent, canActivate: [AuthGuardService] },
  { path: 'homework', component: HomeworkComponent, canActivate: [AuthGuardService] },
  { path: 'homework-view', component: HomeworkViewComponent, canActivate: [AuthGuardService] },
  { path: 'tutorials', component: TutorialsComponent, canActivate: [AuthGuardService] },
  { path: 'tutorials-view', component: TutorialsViewComponent, canActivate: [AuthGuardService] },
  { path: 'classes', component: ClassesComponent, canActivate: [AuthGuardService] },
  { path: 'classes-view', component: ClassesViewComponent, canActivate: [AuthGuardService] },
  { path: 'salary/:id', component: SalaryComponent, canActivate: [AuthGuardService] },
  { path: 'settings', component: SettingsComponent, canActivate: [AuthGuardService] },
  { path: 'salary', component: SalaryComponent, canActivate: [AuthGuardService] },
  { path: 'notifications', component: NotificationsComponent, canActivate: [AuthGuardService] },
  { path: 'jobcode', component: JobCodeComponent, canActivate: [AuthGuardService] },
  { path: 'leavecode', component: LeaveCodeComponent, canActivate: [AuthGuardService] },
  { path: 'salarycode', component: SalaryCodeComponent, canActivate: [AuthGuardService]},
  { path: '**', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

