import { Component, OnInit } from '@angular/core';
import { Ciudad } from '../../models/ciudad';

@Component({
  selector: 'app-ciudades',
  templateUrl: './ciudades.component.html',
  styleUrls: ['./ciudades.component.css']
})
export class CiudadesComponent implements OnInit {

  public arrCiudades: Ciudad[];
  public ciudadData: Ciudad | undefined;

constructor(){

  this.arrCiudades = [
    { ciudad:'Tokio',
    pais:'Japón',
    codigo:'58756',
    clima: {temperatura: 35, viento:8, precipitaciones:10}},

    { ciudad:'New York',
    pais:'EEUU',
    codigo:'1005',
    clima: {temperatura: 25, viento:15, precipitaciones:8}},

    { ciudad: 'Sevilla',
    pais: 'España',
    codigo: '41100',
    clima: {temperatura:40, viento:6, precipitaciones:12}},

    { ciudad: 'Madrid',
    pais: 'España',
    codigo: '29300',
    clima: {temperatura:34, viento:12, precipitaciones:40}},

    { ciudad: 'Paris',
    pais: 'Francia',
    codigo: '14890',
    clima: {temperatura:12, viento:6, precipitaciones:50}},
    
  ]};
                                          // AQUI EMPIEZA RETO 2//
                                          
  public crearCiudad = (
    elementCiudad: HTMLInputElement,
    elementPais: HTMLInputElement,
    elementCodigo: HTMLInputElement,
  ) => {
    const ciudad = elementCiudad.value;
    const pais = elementPais.value;
    const codigo = elementCodigo.value;

    this.arrCiudades.push({ciudad, pais, codigo, clima: {temperatura: 28, viento: 10, precipitaciones:80}})
  };

  public data( ciudad: string | undefined, pais: string | undefined, codigo: string | undefined, clima: any){
    
    this.ciudadData = {
      ciudad: ciudad,
      pais:pais,
      codigo: codigo,
      clima: {
        temperatura: clima.temperatura,
        viento: clima.viento,
        precipitaciones: clima.precipitaciones,
      }
    }
  }
  ngOnInit(): void {
  }

}
