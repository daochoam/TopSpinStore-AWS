import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UsersRoutingModule } from './users-routing.module';

import { DataComponent } from './pages/data/data.component';
import { PayComponent } from './pages/pay/pay.component';
import { ShopComponent } from './pages/shop/shop.component';
import { UsersComponent } from './pages/users/users.component';

import { SharedModule } from 'src/app/shared/shared.module';




@NgModule({
  declarations: [
    DataComponent,
    PayComponent,
    ShopComponent,
    UsersComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    UsersRoutingModule,

    SharedModule,
  ]
})
export class UsersModule { }
