import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { ExperienceComponent } from './experience/experience.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { SkillsComponent } from './skills/skills.component';
import { ContactComponent } from './contact/contact.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PortfolioDialogComponent } from './portfolio-dialog/portfolio-dialog.component';
import { CustomButtonComponent } from './shared/custom-button/custom-button.component';
import { EducationComponent } from './education/education.component';
import { PreloaderComponent } from './preloader/preloader.component';
import { MessageSentComponent } from './message-sent/message-sent.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    ExperienceComponent,
    PortfolioComponent,
    AboutusComponent,
    SkillsComponent,
    ContactComponent,
    PortfolioDialogComponent,
    CustomButtonComponent,
    EducationComponent,
    PreloaderComponent,
    MessageSentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
