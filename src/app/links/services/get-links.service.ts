import { Injectable } from '@angular/core';
import { FlightClass } from '../../enums/flightClass-Type';
type Links = viewModel.LinksProperties;

@Injectable({
  providedIn: 'root'
})
export class GetLinksService {
  
  links:Links ={
    flightClasses:[
      {
      name:FlightClass.CharterFlight,
      links:[
        {
          url:'B2M/Flight/Charter/Booking/AddPassengerToBooking/Flight/',
          title:'AddPassengerToBooking',
          pnr:true
        },
        {
          url:'B2M/Flight/Charter/Booking/ReplaceBookingSegmen/Segment/',
          title:'ReplaceBookingSegment',
          pnr:true
        },
        {
          url:'B2M/Flight/Charter/Booking/ChangeBookingSegment/Segment/',
          title:'ChangeBookingSegment',
          pnr:true
        },
        {
          url:'B2M/Flight/Charter/Booking/AddSegmentToBooking/Passenger/',
          title:'AddSegmentToBooking',
          pnr:true
        },
        {
          url:'B2M/Flight/Charter/Booking/ConfirmOpenSegment/Passengers/',
          title:'ConfirmOpenSegment',
          pnr:true
        },
        {
          url:'B2M/Flight/Charter/RevenueManagement/Sale',
          title:'RevenueManagement',
          pnr:false
        }
      ]
    },
      {
      name:FlightClass.WebServiceFlight,
      links:[
      
         {
          url:'B2M/Flight/WebService/BookingManagement/FlightList',
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
      {
      name:FlightClass.NoneFlight,
      links:[
        {
          url:'B2M/Booking/GozaresheAmalKardeForosh',
          title:'GozaresheAmalKardeForosh',
          pnr:false
        }
      ]
    },
  ]

}

  get() {
    return this.links;
  }
}
