import { Component } from '@angular/core';

@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.css']
})
export class PayComponent {
  CardNumber: string = ''
  Brand = [
    { name: 'Users', destino: 'users', icon: "user" },
    { name: 'Colors', destino: 'colors', icon: "palette" },
    { name: 'Categories', destino: 'category', icon: "pen" },
    { name: 'Products', destino: 'products', icon: "shop" },
    { name: 'Info', destino: 'data', icon: "user" },
    { name: 'Shop', destino: 'pay', icon: "palette" },
    { name: 'Credit', destino: 'shop', icon: "pen" },

  ]

  CreditCard(Cards: string = this.CardNumber) {


  }
}
