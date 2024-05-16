import { Component, inject } from '@angular/core';
import { ProductosService } from '../../services/productos.service';
import { RouterLink, CanActivateFn } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { paginasGuard } from '../../guards/paginas.guard';

@Component({
  selector: 'app-tabla',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './tabla.component.html',
  styleUrl: './tabla.component.css'
})
export class TablaComponent {
  servicio = inject(ProductosService)
  
  productos : any;

  ngOnInit(){
    this.servicio.getPersonal().subscribe(p=>(
      this.productos = p
    )
    )
  }

  eliminar(id:any){
    this.servicio.deletePersonalID(id).subscribe()
    window.location.reload()
    
  }
  visualizar: any
  ver( id: any){
    this.visualizar = id
  }
  Preciomin = 0
  Preciomax = 500
}

