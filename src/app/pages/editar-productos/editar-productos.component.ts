import { Component, inject } from '@angular/core';
import { ProductosService } from '../../services/productos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-editar-productos',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './editar-productos.component.html',
  styleUrl: './editar-productos.component.css'
})
export class EditarProductosComponent {
  id: any
  nombre: any
  tipo: any
  marca:any
  tono: any
  precio: any
  cantidad: any
  unidad: any
  imagen_url:any
  

productos:any

servicio = inject(ProductosService)
route = inject(Router)
ruta = inject(ActivatedRoute)

  editar(datos:any){
    this.servicio.putNosotros(datos.value).subscribe()
    this.route.navigateByUrl("productos")
  }
  ngOnInit(){
    this.ruta.params.subscribe( p =>{
     this.id= p['idProductos']
 
     this.servicio.getPersonalUnico(this.id).subscribe( e =>{
       this.productos= e
     })
 
 
    })
   }
}
