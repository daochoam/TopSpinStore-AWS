import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/interfaces/store-interfaces';
import { RequestCategoryService } from 'src/app/services/RequestCategory/request-category.service';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  ListCategory: [Category] = [{ Code: "", Name: "" }];
  Maps: boolean;

  SocialRed = [
    { Name: "whatsapp", Link: "https://wa.me/573168704626/?text=Hello,%20I%20need%20more%20information%20about%20your%20products." },
    { Name: "facebook", Link: "" },
    { Name: "twitter", Link: "" },
    { Name: "google", Link: "" },
    { Name: "instagram", Link: "" },
    { Name: "linkedin", Link: "" },
    { Name: "github", Link: "" },
  ]

  constructor(private RequestCategory: RequestCategoryService) {
    this.Maps = false;
  }

  ngOnInit() {
    this.RequestCategory.LoadAllCategory().then((Response: any) => {
      this.ListCategory = Response
    })
  }

  MapsView(View: boolean) {
    $(document).ready(function () {
      $('#').click(function () {
        var a = $(this);
        $(this).addClass('.active');
      });
    });
    this.Maps = View;
  }

}
