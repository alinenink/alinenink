import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { GoogleAnalyticsService } from '../services/google-analytics.service'; // Importe o serviço

@Component({
  selector: 'app-contact',
  imports: [CommonModule, TranslateModule],
  standalone: true,
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  email = 'alinenink@outlook.com';
  linkedInUrl = 'https://linkedin.com/in/alinenink';

  constructor(private googleAnalyticsService: GoogleAnalyticsService) {
    // Disparo de pageview
    this.googleAnalyticsService.sendEvent('page_view', {
      page_path: '/contact',
      page_title: 'Contact Page'
    });
  }

  /**
   * Método para rastrear o envio de e-mail
   */
  sendEmail(): void {
    const mailToLink = `mailto:${this.email}`;
    window.location.href = mailToLink;

    // Disparar evento para o Google Analytics
    this.googleAnalyticsService.sendEvent('send_email', {
      email_address: this.email,
      page_path: '/contact'
    });
  }

  /**
   * Método para redirecionar e rastrear LinkedIn
   */
  redirectToLinkedIn(): void {
    window.open(this.linkedInUrl, '_blank');

    // Disparar evento para o Google Analytics
    this.googleAnalyticsService.sendEvent('redirect_linkedin', {
      linkedIn_url: this.linkedInUrl,
      page_path: '/contact'
    });
  }
}
