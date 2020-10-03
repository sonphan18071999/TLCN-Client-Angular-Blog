import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { IndexScreenComponent } from './index-screen/index-screen.component';
import{ LoginComponent} from './login/login.component'
const routes: Routes = [{path: '',component:LoginComponent},
{path:'index',component:IndexScreenComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
