import { Injectable } from '@angular/core';
import { Attraction } from '@pages/home/interfaces/attraction.interface';

@Injectable({
  providedIn: 'root'
})
export class AttractionsService {

  private attractions : Attraction[] =
  [
    {
      title: 'Basen "Oaza Relaksu"',
      description: "Nasz basen o wymiarach, które zapewniają komfort i intymność, to idealne miejsce na relaks i odprężenie. "+
                   "Nie jest zbyt duży, ale wystarczająco przestronny, aby można było swobodnie popływać i ochłodzić się. "+
                   "Dodatkowo, dla naszych najmłodszych gości, mamy specjalny brodzik, "+
                   "w którym mogą bezpiecznie korzystać z wody i bawić się pod czujnym okiem rodziców.",
      image: "assets/images/attraction_img1.jpg",
    },
    {
      title: "Strefa Saun",
      description: "Nasza strefa saun to raj dla miłośników relaksu i odprężenia. "+
                   "Oferujemy różne rodzaje saun, takie jak sucha sauna fińska, parowa sauna turecka oraz aromatyczna sauna ziołowa. "+
                   "Dzięki temu, nasi goście mogą skorzystać z różnorodnych dobroczynnych właściwości sauny i odprężyć się "+
                   "po aktywnym dniu spędzonym na świeżym powietrzu. "+
                   "Sauna dostępna jest wyłącznie dla osób pełnoletnich.",
      image: "assets/images/attraction_img2.jpg",
    },
    {
      title: 'Restauracja "Smak Gór"',
      description: "Nasza wyjątkowa restauracja hotelowa to prawdziwe kulinarne doświadczenie. "+
                   "Nasz zespół utalentowanych kucharzy wykorzystuje tylko najświeższe składniki, "+
                   "często pochodzące z lokalnych dostawców, aby przygotować wyjątkowe dania. "+
                   "Regionalne potrawy, takie jak tradycyjne góralskie oscypek czy aromatyczna zupa borowikowa, "+
                   "dostarczą naszym gościom wyjątkowych smaków i autentycznego doświadczenia kulinarnego.",
      image: "assets/images/attraction_img3.jpg",
    },
    {
      title: "Zagroda ze zwierzętami",
      description: "Nasza urocza zagroda ze zwierzętami to atrakcja zarówno dla dzieci, jak i dorosłych. "+
                   "Oprócz zapewnienia rozrywki, ma również walor edukacyjny. "+
                   "Nasi mieszkańcy zagrody, takie jak koziołek Marcin, króliczek Bajka oraz kucyk Skowronek, "+
                   "są przyjazne i lubią spędzać czas z gośćmi. "+
                   "Dzięki temu, nasi goście mają okazję bliżej poznać te urocze zwierzęta i dowiedzieć się więcej o ich życiu i potrzebach.",
      image: "assets/images/attraction_img4.jpg",
    },
    {
      title: 'Wypożyczalnia "Na szlaku"',
      description: "Nasza wypożyczalnia sprzętu to świetne rozwiązanie dla aktywnych gości, którzy chcą odkrywać uroki okolicy. "+
                   "Oferujemy szeroki wybór sprzętu, takiego jak rowery górskie, kije trekkingowe, a nawet specjalne plecaki turystyczne. "+
                   "Dodatkowo, w naszej ofercie znajduje się również prowiant na drogę, "+
                   "aby nasi goście mogli cieszyć się smacznym posiłkiem w trakcie swojej przygody w górach.",
      image: "assets/images/attraction_img5.jpg",
    },
    {
      title: 'Mała Biblioteka "Odkrywcy Świata"',
      description: "Nasza mała biblioteka jest prawdziwym skarbem dla pasjonatów podróży i turystyki. "+
                   "Znajdziesz tu wiele książek o tematyce turystycznej, które opisują piękno naszego regionu, "+
                   "zabytki, ciekawe miejsca warte odwiedzenia oraz bogactwo przyrody. "+
                   "Bez względu na to, czy jesteś zainteresowany historią, kulturą czy przyrodą, "+
                   "nasza biblioteka zapewni Ci mnóstwo inspiracji i informacji, aby Twoje wycieczki były jeszcze bardziej fascynujące i pouczające.",
      image: "assets/images/attraction_img6.jpg",
    },
  ];

  getAttractions() : Attraction[] {
    return this.attractions;
  }

  constructor() { }
}
