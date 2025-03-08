import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";

export const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  {
    path: "about",
    loadComponent: () =>
      import("./about/about.component").then((m) => m.AboutComponent),
  },
  {
    path: "skills",
    loadComponent: () =>
      import("./skills/skills.component").then((m) => m.SkillsComponent),
  },
  {
    path: "projects",
    loadComponent: () =>
      import("./projects/projects.component").then((m) => m.ProjectsComponent),
  },
  {
    path: "contact",
    loadComponent: () =>
      import("./contact/contact.component").then((m) => m.ContactComponent),
  },
  {
    path: "project/:id",
    loadComponent: () =>
      import("./view-more/view-more.component").then(
        (m) => m.ViewMoreComponent
      ),
      data: { animation: "ProjectPage" },
  }, 
  { path: "**", redirectTo: "/home" },
];
