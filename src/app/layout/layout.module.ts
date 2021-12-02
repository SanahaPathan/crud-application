import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA,
  NO_ERRORS_SCHEMA ],

  exports:[
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    MatToolbarModule,
    MatIconModule,
    
  ]
})
export class LayoutModule { }
