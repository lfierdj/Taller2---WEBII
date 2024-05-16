import { Component, inject } from '@angular/core';
import { ProductosService } from '../../services/productos.service';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-detallesproductos',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './detallesproductos.component.html',
  styleUrl: './detallesproductos.component.css'
})
export class DetallesproductosComponent {
  servicios = inject(ProductosService)
  ruta = inject(ActivatedRoute)
  productos : any;
  

  ngOnInit(){
    this.ruta.params.subscribe(id=>{
      this.servicios.getPersonalUnico(id['idProductos']).subscribe(a=>{
        this.productos = a
      })
    })
}
}
