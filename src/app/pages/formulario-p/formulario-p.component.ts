import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-formulario-p',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulario-p.component.html',
  styleUrl: './formulario-p.component.css'
})
export class FormularioPComponent {
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
  route = inject(Router)
  ruta = inject(ActivatedRoute)
  servicio = inject(ProductosService)
  guardar( datos:any ){
    console.log(datos);
    this.servicio.postPersonal(datos.value).subscribe()
    this.route.navigateByUrl("productos")

  }
  ngOnInit(){
    this.servicio.getPersonal().subscribe(p=>(
      this.productos = p
    )

    )

  }
}
