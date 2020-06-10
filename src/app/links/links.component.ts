import { Component, OnInit } from '@angular/core';
import { FlightClass } from '../enums/flightClass-Type';
import { GetLinksService } from './services/get-links.service';
type Links = viewModel.LinksProperties;

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.scss']
})
export class LinksComponent implements OnInit {

  localApi='http://192.168.1.70:4200/';
  pnr: string = "";
  fixed='Spa/fa/';

  viewModel:Links ;
  flightClass = FlightClass;

  
  constructor(private _getLinksService: GetLinksService) {
    this.viewModel = this._getLinksService.get()
   }

  ngOnInit(): void {
    console.log(this.viewModel);
  }


}
