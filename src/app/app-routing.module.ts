import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PageNotFoundComponent } from "./pages/page-not-found/page-not-found.component";

const routes: Routes = [
  {
    path: "",
    loadChildren: () =>
      import("./layout/user-layout/user-layout.module").then(
        (m) => m.UserLayoutModule
      ),
  },
  { path: "404", component: PageNotFoundComponent },
  { path: "**", redirectTo: "/404" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
