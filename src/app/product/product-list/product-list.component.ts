import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  //directivas *nglif
productos:any[]=[
  {
    "productoId":1,
    "Modelo":"Sentra",
    "Descripcion":"4 puertas familiar",
    'year':"febrero 3 2020",
    "Precio":120000,
    "Marca":"NISSAN",
    "Color":"Morado",
    "imagenUrl":"datos pendientes"
  },
  {
    "productoId":1,
    "Modelo":"A4",
    "Descripcion":"4 puertas familiar",
    'year':"febrero 3 2020",
    "Precio":150000,
    "Marca":"AUDI",
    "Color":"Blanco",
    "imagenUrl":"datos pendientes"
  },
  {
    "productoId":3,
    "Modelo":"RIO",
    "Descripcion":"2 puertas familiar",
    'year':"mARZO 5 2022",
    "Precio":150000,
    "Marca":"KIA",
    "Color":"azul",
    "imagenUrl":"datos pendientes"
  }
]
}
