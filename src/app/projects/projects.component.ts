import { Component, NO_ERRORS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatTabsModule } from "@angular/material/tabs";
import { TranslateModule } from "@ngx-translate/core";
import { GoogleAnalyticsService } from "../services/google-analytics.service"; // Importe o serviço

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
  ];

  constructor(private googleAnalyticsService: GoogleAnalyticsService) {
    // Disparo de pageview ao acessar a página
    this.googleAnalyticsService.sendEvent("page_view", {
      page_path: "/projects",
      page_title: "Projects Page",
    });
  }

  openLink(url: string): void {
    // Abre o link em uma nova aba
    window.open(url, "_blank");

    // Dispara um evento de clique no link para o Google Analytics
    this.googleAnalyticsService.sendEvent("click_project_link", {
      project_url: url,
      page_path: "/projects",
    });
  }
}
