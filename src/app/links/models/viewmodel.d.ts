declare namespace viewModel {

  interface LinksProperties {
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
