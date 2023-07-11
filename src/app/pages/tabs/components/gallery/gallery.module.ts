import { NgModule } from '@angular/core';
import { GalleryComponent } from '@pages/tabs/components/gallery/gallery.component';
import { GalleryRoutingModule } from '@pages/tabs/components/gallery/gallery-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    GalleryComponent
  ],
  imports: [
    GalleryRoutingModule,
    CommonModule
  ],
})
export class GalleryModule { }
