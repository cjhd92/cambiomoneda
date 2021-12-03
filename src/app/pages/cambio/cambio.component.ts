import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cambio',
  templateUrl: './cambio.component.html',
  styleUrls: ['./cambio.component.css']
})
export class CambioComponent implements OnInit {

  moneda:string=""
informacion:string="";
selection = 'Dog';
datos;
opcionSeleccionado: string  = '0';
verSeleccion: string        = '';

  constructor( private DataService: DataService) {

    this.datos = [1,2,3,4,5,6,7,8,9,10];
   }

  ngOnInit(): void {

    this.DataService.getData()
                              .subscribe((datas:[]) =>{
                                console.log('data info',datas);
                                //this.informacion=datas;
                              })
    //console.log('data info',this.DataService.getData());


  }



}
