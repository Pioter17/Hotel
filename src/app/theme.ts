import { NbJSThemeOptions, NbThemeOptions } from '@nebular/theme';

export const CUSTOM_THEME: NbJSThemeOptions = {
  name: 'custom-theme',
  base: 'default', // Możesz dostosować na podstawie innego motywu, np. 'default', 'cosmic', 'corporate', itd.
  variables: {
    // Tutaj definiujesz swoje kolory
    primary: 'rgb(40, 180, 169)', // Twój preferowany kolor główny
    // Dodaj inne kolory, jeśli potrzebujesz
  },
};
