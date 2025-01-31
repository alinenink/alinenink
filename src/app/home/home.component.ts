import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { GoogleAnalyticsService } from '../services/google-analytics.service';

@Component({
  selector: 'app-home',
  imports: [CommonModule, TranslateModule, RouterModule],
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit, OnDestroy {
  private typingInterval: any;
  private langChangeSubscription!: Subscription;
  selectedLanguage: string = '';

  constructor(
    private translate: TranslateService,
    private router: Router,
    private googleAnalyticsService: GoogleAnalyticsService
  ) {}

  ngAfterViewInit() {
    this.selectedLanguage = this.translate.currentLang || 'en'; // Pega o idioma inicial
    this.startTypingAnimation();

    // Disparar evento de pageview
    this.googleAnalyticsService.sendEvent('page_view', {
      page_path: '/home',
      page_title: 'Home Page'
    });

    // Ouvir mudanças de idioma globalmente
    this.langChangeSubscription = this.translate.onLangChange.subscribe((event) => {
      this.selectedLanguage = event.lang; // Atualiza a variável ao mudar o idioma
      this.startTypingAnimation();
    });
  }

  startTypingAnimation() {
    this.translate.get('SUBTITLE').subscribe((translatedText: string) => {
      this.typeText(translatedText, 'animated-text');
    });
  }

  private typeText(text: string, elementId: string) {
    const element = document.getElementById(elementId);
    let i = 0;

    if (element) {
      element.innerHTML = ''; // Limpa o texto anterior
      clearInterval(this.typingInterval);
      this.typingInterval = setInterval(() => {
        if (i < text.length) {
          element.innerHTML += text.charAt(i);
          i++;
        } else {
          clearInterval(this.typingInterval);
        }
      }, 100);
    }
  }

  scrollToSection(sectionId: string) {
    this.router.navigate(['/' + sectionId]).then(() => {
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const yOffset = -100;
          const yPosition = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: yPosition, behavior: 'smooth' });

          this.googleAnalyticsService.sendEvent('scroll_to_section', {
            section_id: sectionId,
            page_path: '/home'
          });
        }
      }, 100);
    });
  }

  ngOnDestroy() {
    if (this.langChangeSubscription) {
      this.langChangeSubscription.unsubscribe();
    }
    clearInterval(this.typingInterval);
  }
}
