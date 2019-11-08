import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProductComponent } from './product/product.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { AddProductsComponent } from 'src/app/add-products/add-products.component';
import { ProductDescriptionComponent } from './product-description/product-description.component';

const appRoutes: Routes = [
  {path: '', component: ProductComponent },
  {path: 'add-product', component: AddProductsComponent},
  {path: 'product-description/:id', component: ProductDescriptionComponent},
  {path: '**', redirectTo: ''}
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductComponent,
    FooterComponent,
    AddProductsComponent,
    ProductDescriptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
