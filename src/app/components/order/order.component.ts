import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../../services.service';


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})

//OrderClass Component

export class OrderComponent implements OnInit {

  constructor(private connection: ServicesService) { }

  ngOnInit(): void {
  }

}
