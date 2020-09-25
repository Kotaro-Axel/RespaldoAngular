import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-testing-component',
  templateUrl: './testing-component.component.html',
  styleUrls: ['./testing-component.component.css']
})


//Main Class
export class TestingComponentComponent implements OnInit {


  products = [];
  status: Boolean = false;

  nameButton: String = 'Mostrar';
  info: String = 'No hay datos';

  constructor(private servicesService: ServicesService) { }

  ngOnInit(): void {
    this.servicesService.getProduct("products/").subscribe((data: any[]) => {

      console.log(data);
      this.products = data;

    });
  }

  sendService(){

  }

  cleanService(){
    this.products = [];
  }

  showHide(){
    this.status = !this.status // Toggle 
    console.log(this.status);
    if (this.status) {
      this.nameButton = 'Ocultar';
    } else {
      this.nameButton = 'Mostrar';
    }
  }

}
