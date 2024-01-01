import { Injectable } from '@angular/core';
import { Apartments } from '@pages/tabs/interfaces/apartments';

@Injectable({
  providedIn: 'root'
})
export class ApartmentsService {

  private apartments : Apartments[] =
  [
    {
      name: "Pokój Single",
      description: "Niewielki, ale wygodny pokój dla singli. Wyposażony w wygodne łóżko, prywatną łazienkę oraz podstawowe udogodnienia. Przeznaczony głównie dla podróżnych chcących wygodnie spędzić noc",
      capacity: 1,
      price: 120,
      image: "assets/images/apartment_img1.jpg"
    },
    {
      name: "Pokój Standard",
      description: "Przytulny pokój idealny dla singli lub par. Zapewniający komfortowy pobyt i wystarczająco dużo przestrzeni do wypoczynku. Wyposażony w wygodne łóżko, prywatną łazienkę oraz podstawowe udogodnienia. Doskonały wybór dla tych, którzy szukają przyjemnego i przystępnego cenowo zakwaterowania.",
      capacity: 2,
      price: 200,
      image: "assets/images/apartment_img2.jpg"
    },
    {
      name: "Pokój Deluxe z Balkonem",
      description: "Elegancki pokój z balkonem, który oferuje piękne widoki na okoliczne góry. Przestronne wnętrze jest doskonale urządzone i zapewnia wyjątkowy komfort. Wyposażony w wygodne łóżko, łazienkę z wanną oraz dodatkowe udogodnienia, takie jak minibar i telewizor. Idealny dla par, które pragną cieszyć się romantycznym wypoczynkiem.",
      capacity: 2,
      price: 350,
      image: "assets/images/apartment_img3.jpg"
    },
    {
      name: "Apartament Rodzinny",
      description: "Przestronny apartament idealny dla rodzin. Składa się z oddzielnej sypialni i przytulnego salonu, zapewniając wystarczającą przestrzeń dla wszystkich członków rodziny. Wyposażony w wygodne łóżka, prywatną łazienkę, telewizor oraz dostęp do bezpłatnego Wi-Fi. Doskonały wybór dla tych, którzy chcą cieszyć się wygodą i intymnością podczas rodzinnych wakacji.",
      capacity: 4,
      price: 500,
      image: "assets/images/apartment_img4.jpg"
    },
    {
      name: "Apartament Luksusowy z Jacuzzi",
      description: "Wyjątkowy apartament luksusowy z prywatnym jacuzzi. Zapewnia nie tylko komfortowy pobyt, ale również niezapomniane doświadczenia relaksacyjne. Apartament składa się z eleganckiej sypialni, przestronnego salonu oraz luksusowej łazienki z jacuzzi. Dodatkowo oferuje dostęp do prywatnego tarasu lub balkonu. Idealny dla par pragnących cieszyć się luksusem i romantyczną atmosferą.",
      capacity: 2,
      price: 800,
      image: "assets/images/apartment_img5.jpg"
    },
    {
      name: "Pokój Premium z Dodatkowym Łóżkiem",
      description: "Przestronny pokój premium, który oferuje dodatkowe łóżko dla trzeciej osoby. Zapewnia wygodę i luksusowe wyposażenie. Wyposażony w wygodne łóżko, prywatną łazienkę, telewizor oraz minibar. Idealny dla rodzin z jednym dzieckiem lub grupy przyjaciół, którzy szukają przestronnego i komfortowego zakwaterowania.",
      capacity: 3,
      price: 300,
      image: "assets/images/apartment_img6.jpg"
    },
    {
      name: "Apartament Penthouse",
      description: "Ekskluzywny apartament na najwyższym piętrze hotelu, zapewniający niezrównane widoki na górski krajobraz. Luksusowe wnętrze składa się z eleganckiej sypialni, przestronnego salonu, jadalni oraz luksusowej łazienki. Dodatkowo oferuje prywatny taras z jacuzzi. To idealny wybór dla tych, którzy pragną cieszyć się najwyższym poziomem komfortu i luksusu.",
      capacity: 2,
      price: 1200,
      image: "assets/images/apartment_img7.jpg"
    }
  ]

  getApartments(): Apartments[] {
    return this.apartments;
  }

  getApartmentPrice(name: string): number {
    let price : number = 0;
    this.apartments.forEach(apart =>{
      if (apart.name == name){
        price = apart.price;
      }
    })
    return price;
  }

  constructor() { }
}
