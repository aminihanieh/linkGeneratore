import { Injectable } from '@angular/core';
import { FlightClass } from '../../enums/flightClass-Type';
type Links = viewModel.LinksProperties;

@Injectable({
  providedIn: 'root'
})
export class GetLinksService {
  
  links:Links ={
    bookingPnr: 'J2YRVW',


    flightClasses:[
      {
      name:FlightClass.CharterFlight,
      links:[
        {
          url:'CharterFlight/B2M/AddPassengerToBooking/Flight/',
          title:'AddPassengerToBooking',
          pnr:true
        },
        {
          url:'CharterFlight/B2M/ReplaceBookingSegment/Segment/',
          title:'ReplaceBookingSegment',
          pnr:true
        },
        {
          url:'CharterFlight/B2M/ChangeBookingSegment/Segment/',
          title:'ChangeBookingSegment',
          pnr:true
        },
        {
          url:'CharterFlight/B2M/AddSegmentToBooking/Passenger/',
          title:'AddSegmentToBooking',
          pnr:true
        },
        {
          url:'CharterFlight/B2M/ConfirmOpenSegment/Passengers/',
          title:'ConfirmOpenSegment',
          pnr:true
        },
        {
          url:'CharterFlight/B2M/RevenueManagement/Sale',
          title:'RevenueManagement',
          pnr:false
        }
      ]
    },
      {
      name:FlightClass.WebServiceFlight,
      links:[
        {
          url:'WebServiceFlight/B2M/Dashboard',
          title:'Dashboard',
          pnr:false
        },
         {
          url:'WebServiceFlight/B2M/BookingManagement/Flight/',
          title:'BookingManagement',
          pnr:false
        },
        {
          url:'WebServiceFlight/B2M/SupplierFlightList',
          title:'SupplierFlightList',
          pnr:false
        }
      ]
    },
      {
      name:FlightClass.FederatedFlight,
      links:[
        {
          url:'FederatedFlight/B2M/ChangeContactInformation/',
          title:'ChangeContactInformation',
          pnr:true
        }
      ]
    },
  ]

}

  get() {
    return this.links;
  }
}
