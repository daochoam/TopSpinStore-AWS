import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoogleMapsModule } from '@angular/google-maps';

/** ANGULAR MATERIAL **/
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

/**  COMPONENTS ANGULAR */
import { MenuLateralComponent } from './menu-lateral/menu-lateral.component';
import { HttpClientModule } from '@angular/common/http';
import { UploadfilesComponent } from './uploadfiles/uploadfiles.component';
import { MensajesComponent } from './mensajes/mensajes.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LocationComponent } from './location/location.component';
import { DetallesComponent } from './detalles/detalles.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
    /**  COMPONENTS */
    MenuLateralComponent,
    UploadfilesComponent,
    MensajesComponent,
    LocationComponent,
    DetallesComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    GoogleMapsModule,

    /** ANGULAR MATERIAL **/
    MatAutocompleteModule,
    MatCheckboxModule,
    MatButtonModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatRadioModule,
    MatInputModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
  ],

  exports: [
    /** ANGULAR MATERIAL **/
    MatAutocompleteModule,
    MatCheckboxModule,
    MatButtonModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatRadioModule,
    MatInputModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,

    /**  COMPONENTS */
    MenuLateralComponent,
    UploadfilesComponent,
    MensajesComponent,
  ]
})
export class SharedModule { }
