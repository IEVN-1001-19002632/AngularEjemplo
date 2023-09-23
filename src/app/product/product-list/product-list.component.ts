import { Component } from '@angular/core';
import { Iproductos } from '../iproductos';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  //directivas *nglif

  imageWidth:number=50;
  imagenMargin:number=2;
  muestraImg:boolean=true;
  listFilter:string='';

  showImage():void{
    this.muestraImg=!this.muestraImg;
  }

productos:Iproductos[]=[
  {
    "productoId":1,
    "Modelo":"Sentra",
    "Descripcion":"4 puertas familiar",
    'year':"febrero 3 2020",
    "Precio":120000,
    "Marca":"NISSAN",
    "Color":"Morado",
    "imagenUrl":"https://img.automexico.com/2021/03/01/fc414a41-06cf.jpg"
  },
  {
    "productoId":5,
    "Modelo":"A4",
    "Descripcion":"4 puertas familiar",
    'year':"febrero 3 2020",
    "Precio":150000,
    "Marca":"AUDI",
    "Color":"Gris",
    "imagenUrl":"https://img.remediosdigitales.com/d46bf6/audi-a4-2020-precio-mexico_/1366_2000.jpg"
  },
  {
    "productoId":3,
    "Modelo":"RIO",
    "Descripcion":"2 puertas familiar",
    'year':"Marzo 5 2022",
    "Precio":150000,
    "Marca":"KIA",
    "Color":"Blanco",
    "imagenUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/2018_Kia_Rio_EX_-_Side.jpg/1200px-2018_Kia_Rio_EX_-_Side.jpg"
  }
]
}
