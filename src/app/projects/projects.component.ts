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
      link: "https://github.com/alinenink/financialdashboard.io",
      image: "assets/dashboard.png",
    },
    {
      title: "ecommercePlatform",
      description: "ecommercePlatformDescription",
      link: "https://github.com/alinenink/ecommerce.io",
      image: "assets/ecommerce.png",
    },
  ];

  openLink(url: string): void {
    window.open(url, "_blank");
  }
}
