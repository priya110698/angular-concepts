import { Routes } from '@angular/router';
import { AddUserComponent } from './components/add-user/add-user.component';
import { ListUserComponent } from './components/list-user/list-user.component';
import { LoginComponent } from './components/login/login.component';
import { LayoutComponent } from './components/layout/layout.component';
import { UserService } from './services/user.service';
import { userDeactivateGuard, userGuardCanActivate } from './user.guard';
import { PaymentComponent } from './components/payment/payment.component';
import { SuccessPaymentComponent } from './components/success-payment/success-payment.component';
import { Role } from './enums/role.enum';

export const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full', },
    { path: 'login', component: LoginComponent },
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: 'add-user', component: AddUserComponent, canActivate: [userGuardCanActivate], canDeactivate: [userDeactivateGuard], data: { role: Role.Admin } },
            { path: 'list-user', component: ListUserComponent, resolve: { data: UserService } },
            // { path: 'edit-user/:id', component: AddUserComponent, canActivate: [userGuardCanActivate], canDeactivate: [userDeactivateGuard] }, //Using Route params
            { path: 'edit-user', component: AddUserComponent, canActivate: [userGuardCanActivate], canDeactivate: [userDeactivateGuard], data: { role: Role.Admin } }, //Using State
            { path: 'success', component: SuccessPaymentComponent },
            { path: 'payment', component: PaymentComponent },
        ]
    }
];
