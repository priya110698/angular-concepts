import { Routes } from '@angular/router';
import { AddUserComponent } from './components/add-user/add-user.component';
import { ListUserComponent } from './components/list-user/list-user.component';
import { LoginComponent } from './components/login/login.component';
import { LayoutComponent } from './components/layout/layout.component';
import { UserService } from './services/user.service';
import { userDeactivateGuard, userGuardCanActivate } from './user.guard';

export const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full', },
    { path: 'login', component: LoginComponent },
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: 'add-user', component: AddUserComponent, canActivate: [userGuardCanActivate], canDeactivate: [userDeactivateGuard] },
            { path: 'list-user', component: ListUserComponent, resolve: { data: UserService } },
        ]
    }
];
