import { Injectable } from '@angular/core';
import { Restaurant } from '../interfaces/restaurant';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  private restaurantFeatures: Restaurant[] =
  [
    {
      title: 'Restauracja "Smak Gór"',
      description: "Nasza restauracja to prawdziwy skarb dla miłośników wyśmienitego jedzenia. "+
                   "Wszystkie nasze potrawy są przygotowywane ze świeżych i regionalnych składników, "+
                   "które bezpośrednio dostarczają nam lokalni producenci. "+
                   'Właśnie dlatego otrzymaliśmy prestiżowy "Certyfikat Smaku Gór", '+
                   "który gwarantuje najwyższą jakość naszych dań oraz świadectwo pochodzenia naszych składników.",
      image: "assets/images/restaurant_img1.jpg"
    },
    {
      title: "Smaki Góralskiej Tradycji",
      description: "Nasza restauracja specjalizuje się w serwowaniu lokalnych, góralskich potraw, "+
                   "które są wynikiem udoskonalania przepisów przez wiele pokoleń. "+
                   "W naszym menu znajdziesz takie specjały jak aromatyczne oscypek z grilla, "+
                   "rozgrzewająca zupa bryndzowa oraz soczyste pieczenie wiejskie. "+
                   "Każde danie odzwierciedla bogactwo i smak tradycji góralskiej kuchni.",
      image: "assets/images/restaurant_img2.jpg"
    },
    {
      title: "Eksperymenty Kulinarne",
      description: "Jeśli szukasz czegoś niezwykłego i kreatywnego, nasza restauracja to idealne miejsce dla Ciebie. "+
                   "Nasz utalentowany zespół kucharzy uwielbia eksperymentować z nowymi smakami, łącząc tradycję z nowoczesnymi technikami kulinarnymi. "+
                   "Każde danie to niepowtarzalne doświadczenie, które zachwyci Twoje podniebienie i otworzy nowe perspektywy kulinarne.",
      image: "assets/images/restaurant_img3.jpg"
    },
    {
      title: "Prowiant na Wycieczki",
      description: "Niezależnie od tego, czy planujesz wędrówkę po górach, czy piknik nad jeziorem, "+
                   "nasza restauracja oferuje możliwość przygotowania pysznego prowiantu na Twoją przygodę. "+
                   "Nasze specjalnie zaprojektowane opakowania wielorazowego użytku utrzymają świeżość i smak naszych potraw, "+
                   "a jednocześnie są przyjazne dla środowiska. "+
                   "Prowiant na wycieczki to idealne rozwiązanie dla wszystkich, którzy pragną smacznego i pożywnego jedzenia w podróży.",
      image: "assets/images/restaurant_img4.jpg"
    },
    {
      title: "Imprezy Okolicznościowe",
      description: "Nasza restauracja to doskonałe miejsce na organizację niezapomnianych imprez okolicznościowych. "+
                   "Bez względu na to, czy to wesele, urodziny czy impreza firmowa, nasz zespół jest gotowy, "+
                   "aby stworzyć wyjątkową atmosferę i zaspokoić nawet najbardziej wymagające gusta kulinarne. "+
                   "Nasze eleganckie wnętrza i niepowtarzalne menu zapewnią niezapomniane doświadczenie smakowe i uczynią Twoją imprezę wyjątkową.",
      image: "assets/images/restaurant_img5.jpg"
    }
  ];

  getRestaurantFeatures(): Restaurant[] {
    return this.restaurantFeatures;
  }

  constructor() { }
}
