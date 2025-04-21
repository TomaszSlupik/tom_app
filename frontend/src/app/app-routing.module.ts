import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { SkillsComponent } from './skills/skills.component';
import { EducationComponent } from './education/education.component';
import { ContactComponent } from './contact/contact.component';
import { MessageSentComponent } from './message-sent/message-sent.component';


const routes: Routes = [
  {path: "o_mnie", component: AboutusComponent},
  {path: 'umiejetnosci', component: SkillsComponent},
  {path: 'wyksztalcenie', component: EducationComponent},
  {path: 'kontakt', component: ContactComponent},
  { path: 'message-sent', component: MessageSentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
