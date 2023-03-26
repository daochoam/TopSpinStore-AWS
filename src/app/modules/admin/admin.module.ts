import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { CategoryComponent } from './pages/category/category.component';
import { ProductsComponent } from './pages/products/products.component';
import { UsersComponent } from './pages/users/users.component';
import { AdminComponent } from './pages/admin/admin.component';
import { SetProductsComponent } from './components/set-products/set-products.component';
import { SetUsersComponent } from './components/set-users/set-users.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    // Admin Pages
    AdminComponent,
    CategoryComponent,
    ProductsComponent,
    UsersComponent,

    // Admin Settings
    SetProductsComponent,
    SetUsersComponent

  ],
  imports: [
    FormsModule,
    CommonModule,
    AdminRoutingModule,

    SharedModule
  ]
})
export class AdminModule { }
