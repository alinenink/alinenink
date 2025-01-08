import { Component, NO_ERRORS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatTabsModule } from "@angular/material/tabs";
import { TranslateModule } from "@ngx-translate/core";

@Component({
  selector: "app-projects",
  imports: [CommonModule, MatTabsModule, TranslateModule],
  standalone: true,
  templateUrl: "./projects.component.html",
  styleUrls: ["./projects.component.scss"],
  schemas: [NO_ERRORS_SCHEMA], // Permite elementos personalizados
})
export class ProjectsComponent {
  projects = [
    {
      title: "financialDashboard",
      description: "financialDashboardDescription",
      technologies: [
        "Typescript",
        "React.js",
        "Redux Toolkit",
        "Chart.js",
        "Tailwind CSS",
        "SCSS",
      ],
      link: "https://alinenink.github.io/dashboardfinancas",
      image: "assets/dashboard.png",
    },
    {
      title: "recipeManager",
      description: "recipeManagerDescription",
      technologies: [
        "Typescript",
        "Angular",
        "SCSS",
        "CSS Grid",
        "Flexbox",
        "Tailwind CSS",
        "Font Awesome",
        "Node.js",
        "Express.js"
      ],
      link: "https://alinenink.github.io/myrecipes/",
      image: "assets/recipe-manager.png"
    }    
    // {
    //    title: "ecommercePlatform",
    //   description: "ecommercePlatformDescription",
    //    technologies: [
    //     "Angular",
    //     "Node.js",
    //    "Tailwind CSS",
    //    "Express.js",
    //     "MongoDB"
    //  ],
    //    link: "https://github.com/alinenink/ecommerce.io",
    //  image: "assets/ecommerce.png",
    // },
  ];

  openLink(url: string): void {
    window.open(url, "_blank");
  }
}
