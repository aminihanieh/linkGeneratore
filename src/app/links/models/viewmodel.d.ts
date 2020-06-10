declare namespace viewModel {

  interface LinksProperties {
    bookingPnr: string;

    flightClasses: FlightClass[];
  }

  interface FlightClass {

    name: string;

    links: Link[]
  }

  interface Link {

    url: string;

    title: string;

    pnr: boolean;
  }

}
