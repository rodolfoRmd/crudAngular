import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/templates/header/header.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import { FooterComponent } from './components/templates/footer/footer.component';
import { NavComponent } from './components/templates/nav/nav.component';

import { MatSidenavModule} from '@angular/material/sidenav';
import { MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import { HomeComponent } from './views/home/home.component';
import { ProductCrudComponent } from './views/product-crud/product-crud.component';
import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import { RedDirective } from './directives/red.directive';
import { ForDirective } from './directives/for.directive';
import {MatButtonModule} from '@angular/material/button';
import { ProdcutService } from './services/prodcut.service';
import {  MatSnackBarModule } from '@angular/material/snack-bar';
import {HttpClientModule} from '@angular/common/http';

import {FormsModule} from '@angular/forms'
import {MatFormFieldModule} from'@angular/material/form-field';
import {MatInputModule} from'@angular/material/input';
import { ProductReadComponent } from './components/product/product-read/product-read.component';
import { ProductRead2Component } from './components/product/product-read2/product-read2.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import localePt from '@angular/common/locales/pt'
import {registerLocaleData} from '@angular/common'

registerLocaleData(localePt)
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    ProductCrudComponent,
    ProductCreateComponent,
    RedDirective,
    ForDirective,
    ProductReadComponent,
    ProductRead2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule ,
    MatButtonModule,
    MatSnackBarModule, 
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [{
    provide:LOCALE_ID,
    useValue:'pt-br'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }