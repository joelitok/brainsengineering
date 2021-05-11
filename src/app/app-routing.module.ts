import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { BlogComponent } from './blog/blog.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { Error404Component } from './error404/error404.component';
import { FormationComponent } from './formation/formation.component';
import { IndexComponent } from './index/index.component';
import { ServicesComponent } from './services/services.component';

const routes: Routes = [

{path:'index', component:IndexComponent},
{path:'about-us', component:Error404Component},
{path:'services',component:ServicesComponent},
{path:'component',component:FormationComponent},
{path:'blog', component:BlogComponent},
{path:'about-us', component:AboutUsComponent},
{path:'', redirectTo:'index', pathMatch:'full' },
{path:'contact-us', component:ContactUsComponent},
{path:'not-found', component: Error404Component},
{path:'**', redirectTo:'/not-found'}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
