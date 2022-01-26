import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataComponent } from './data/data.component';
import { ImprintComponent } from './imprint/imprint.component';
import { StartComponent } from './start/start.component';

const routes: Routes = [
  { path: "", component: StartComponent },
  { path: "imprint", component: ImprintComponent },
  { path: "data", component: DataComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    /* instead of use extraOptions for Router */
    onSameUrlNavigation:
      'reload' /**fix to rescroll to same anchor url after scrolling */,
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
    scrollOffset: [0, 0],
  })],//anfang einer seite landen
  exports: [RouterModule]
})
export class AppRoutingModule { }
