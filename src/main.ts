import { importProvidersFrom } from '@angular/core';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app/app.component';
import appRouting from './app/app.routing';
import { NbDatepickerModule, NbThemeModule } from '@nebular/theme';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';


bootstrapApplication(AppComponent, {
  providers: [
      importProvidersFrom(BrowserModule, BrowserAnimationsModule, RouterModule.forRoot(appRouting),
      NbThemeModule.forRoot({ name: 'default' }),
      NbDatepickerModule.forRoot(),
      AngularFireModule.initializeApp(environment.firebaseConfig),
      ),
  ]
})
  .catch(err => console.error(err));
