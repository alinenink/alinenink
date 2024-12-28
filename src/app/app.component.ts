import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { MatIconModule } from "@angular/material/icon";
import { NavigationEnd, Router, RouterModule } from "@angular/router";
import { TranslateService, TranslateModule } from "@ngx-translate/core";

@Component({
  selector: "app-root",
  imports: [RouterModule, TranslateModule, MatIconModule, CommonModule],
  standalone: true,
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  isDarkMode = false;
  isMenuOpen = false;

  constructor(private translate: TranslateService, private router: Router) {
    this.translate.setDefaultLang("en"); // Define o idioma padrão
  }

  ngOnInit(): void {
    // Ouve eventos de navegação e rola para o topo
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        setTimeout(() => {
          window.scrollTo(0, 0); // Rola para o topo
        }, 0); // Garantindo que a página carregue antes
      }
    });
  }
  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
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
