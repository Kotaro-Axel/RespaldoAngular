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

  constructor(private servicesService: ServicesService) { }

  ngOnInit(): void {

    this.servicesService.getProduct("products/").subscribe((data: any[]) => {

      console.log(data);

      this.products = data;

    });
  }

}
