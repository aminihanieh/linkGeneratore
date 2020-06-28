import { Component} from '@angular/core';
import { FlightClass } from '../enums/flightClass-Type';
import { GetLinksService } from './services/get-links.service';
type Links = viewModel.LinksProperties;

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.scss']
})
export class LinksComponent  {

  localApi='http://192.168.1.70:4200/';
  selectedPnr: string ;
  fixed='Spa/fa/';

  viewModel:Links ;
  flightClass = FlightClass;

  pnrList=[
    "C63NJE",
    "V22OYW",
    "G58X63",
    "U2574B",
    "NP4C8S",
    "H73645",
    "QR7226",
    "T24CK8",
  ]

  constructor(private _getLinksService: GetLinksService) {
    this.viewModel = this._getLinksService.get()
   }

   onValueChange(arg){
this.selectedPnr = arg  }

}
