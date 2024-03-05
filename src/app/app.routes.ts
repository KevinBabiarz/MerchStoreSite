import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {PanelComponent} from "./components/panel/panel.component";
import {NotFoundComponent} from "./components/not-found/not-found.component";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {NgModule} from "@angular/core";
import {JwtInterceptor} from "./interceptors/jwt.interceptor";

export const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"panel",component:PanelComponent},
  {path:"**", component: NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    }
  ]
})
export class AppRoutes{}
