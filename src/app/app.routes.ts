import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactosComponent } from './pages/contactos/contactos.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { OfertasComponent } from './pages/ofertas/ofertas.component';
import { Error404Component } from './pages/error404/error404.component';
import { DetallesproductosComponent } from './pages/detallesproductos/detallesproductos.component';
import { LoginComponent } from './pages/login/login.component';
import { loginGuard } from './guards/login.guard';
import { paginasGuard, userGuard } from './guards/paginas.guard';
import { EditarProductosComponent } from './pages/editar-productos/editar-productos.component';
import { FormularioPComponent } from './pages/formulario-p/formulario-p.component';
import { CarritoComponent } from './pages/carrito/carrito.component';

export const routes: Routes = [
    {path: '', redirectTo:'home', pathMatch:'full'},
    {path: 'home', component:HomeComponent,},
    {path: 'productos', component:ProductosComponent,},
    {path: 'ofertas', component:OfertasComponent,},
    {path: 'nosotros', component:NosotrosComponent,},
    {path: 'contactos', component:ContactosComponent},
    { path: 'detalles/:idProductos', component: DetallesproductosComponent},
    {path: 'login', component:LoginComponent},
    { path: 'editar-productos/:idProductos', component:EditarProductosComponent,canActivate:[paginasGuard]},
    {path:'agregarP', component:FormularioPComponent,canActivate:[paginasGuard]},
    {path:'carrito', component:CarritoComponent,canActivate:[paginasGuard]},
    {path: '**', component:Error404Component},
   
];

