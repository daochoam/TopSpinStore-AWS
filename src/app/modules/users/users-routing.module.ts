import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataComponent } from './pages/data/data.component';
import { PayComponent } from './pages/pay/pay.component';
import { ShopComponent } from './pages/shop/shop.component';
import { UsersComponent } from './pages/users/users.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', redirectTo: 'data' },
      { path: 'data', component: DataComponent },
      { path: 'pay', component: PayComponent },
      { path: 'shop', component: ShopComponent },
      { path: 'users', component: UsersComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
