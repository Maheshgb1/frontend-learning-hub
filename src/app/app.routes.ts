import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { HtmlComponent } from './pages/html/html.component';
import { CssComponent } from './pages/css/css.component';
import { JavascriptComponent } from './pages/javascript/javascript.component';
import { AngularComponent } from './pages/angular/angular.component';
import { NgrxComponent } from './pages/ngrx/ngrx.component';
import { RxjsComponent } from './pages/rxjs/rxjs.component';
import { BootstrapComponent } from './pages/bootstrap/bootstrap.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'html', component: HtmlComponent },
  { path: 'css', component: CssComponent },
  { path: 'javascript', component: JavascriptComponent },
  { path: 'angular', component: AngularComponent },
  { path: 'rxjs', component: RxjsComponent},
  { path: 'ngrx', component: NgrxComponent},
  { path: 'bootstrap', component: BootstrapComponent}
];
