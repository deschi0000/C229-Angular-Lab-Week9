import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ProductsComponent } from './pages/products/products.component';
import { ServicesComponent } from './pages/services/services.component';
import { BookStoreComponent } from './book-store/book-store.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CartDetailComponent } from './book-store/cart-detail/cart-detail.component';
import { CheckoutComponent } from './book-store/checkout/checkout.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent, data: {title: 'Home'}},
  {path: 'about', component: AboutComponent, data: {title: 'About'}},
  {path: 'products', component: ProductsComponent, data: {title: 'Products'}},
  {path: 'services', component: ServicesComponent, data: {title: 'Services'}},
  {path: 'book-list', component: BookStoreComponent, data: {title: 'Book Store'}},
  {path: 'cart', component: CartDetailComponent, data: {title: 'Shopping Cart'}},
  {path: 'checkout', component: CheckoutComponent, data: {title: 'Checkout'}},
  {path: 'contact', component: ContactComponent, data: {title: 'Contact'}},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', redirectTo: '/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
