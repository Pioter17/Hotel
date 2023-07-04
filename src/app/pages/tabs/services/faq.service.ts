import { Injectable } from '@angular/core';
import { FaqElement } from '@pages/tabs/interfaces/home-interfaces.interface';

@Injectable({
  providedIn: 'root'
})
export class FaqService {

  private faqElements : FaqElement[] =
  [
    {
      question: "Czy można odwołać rezerwację?",
      answer: "Tak, u nas możesz odwołać rezerwację nawet dwa dni przed terminem. " +
              "Dotyczy to jedynie osób, które podczas rezerwacji zalogowały się na swoje konto. "+
              "Wszyscy, którzy rezerwowali pokoje bez logowania również mogą odwołać rezerwację, ale w tym przypadku jest to możliwe do 5 dni przed terminem i jedynie drogą telefoniczną.",
    },
    {
      question: "Czy można przyjechać ze zwierzętami?",
      answer: "Tak! W naszym hotelu czworonożni przyjaciele są mile widziani. "+
              "Dopłata za psa lub kota wynosi 50zł za dobę i zawiera dodatkowo jedną porcję karmy dla czworonogów. "+
              "Pamiętajcie jedynie, żeby w przypadku przyprowadzenia psa nie zapomnieć o dowodzie szczepienia na wściekliznę.",
    },
    {
      question: "Czy hotel jest tylko dla dorosłych?",
      answer: "Nie, do naszego hotelu można przyjechać również z dziećmi. "+
              "Jednak osoby chcące zaznać spokojnego wypoczynku z dala od hałasów również nie będą zawiedzione. "+
              "Oferujemy bowiem także pokoje tylko dla dorosłych (i młodzieży powyżej 15 roku życia) w oddzielnym skrzydle hotelu. "+
              "Ceny są takie same, ale panują tam dodatkowe zasady dotyczące zachowania ciszy, co ułatwia odpoczynek osobom chcącym się zrelaksować bez żadnych szumów.",
    },
    {
      question: "Czy jest infrastruktura dla osób niepełnosprawnych?",
      answer: "Tak! Nasz hotel zapewnia wszelką potrzebną infrastrukturę dla osób z niepełnosprawnością ruchową. "+
              "Przy każdych schodach jest winda lub podjazd, a nasi pracownicy z chęcią pomogą każdemu gościowi.",
    }
  ];

  getFaqElements(): FaqElement[] {
    return this.faqElements;
  }

  constructor() { }
}
