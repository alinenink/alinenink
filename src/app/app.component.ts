import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { MatIconModule } from "@angular/material/icon";
import { RouterModule } from "@angular/router";
import { TranslateService, TranslateModule } from "@ngx-translate/core";

@Component({
  selector: "app-root",
  imports: [RouterModule, TranslateModule, MatIconModule, CommonModule],
  standalone: true,
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  isDarkMode = false;
  isMenuOpen = false;

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang("en"); // Define o idioma padrão
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    document.body.classList.toggle("dark-mode", this.isDarkMode);
  }

  switchLanguage(event: Event): void {
    const target = event.target as HTMLSelectElement; // Type assertion
    const selectedLanguage = target.value;
    this.translate.use(selectedLanguage);
  }  
}
