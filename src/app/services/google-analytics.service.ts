import { Injectable } from '@angular/core';

declare var gtag: Function;

@Injectable({
  providedIn: 'root'
})
export class GoogleAnalyticsService {

  constructor() { }

  /**
   * Envia um evento personalizado para o Google Analytics
   * @param eventName Nome do evento
   * @param eventParams Parâmetros do evento (opcional)
   */
  sendEvent(eventName: string, eventParams?: { [key: string]: any }): void {
    if (typeof gtag === 'function') {
      gtag('event', eventName, eventParams || {});
    } else {
      console.warn('Google Analytics não está configurado ou não foi carregado.');
    }
  }

  /**
   * Configurações gerais do Google Analytics
   * @param trackingId ID de rastreamento do Google Analytics
   */
  initializeAnalytics(trackingId: string): void {
    if (typeof gtag === 'function') {
      gtag('config', trackingId, {
        cookie_flags: 'SameSite=None; Secure'
      });
    } else {
      console.warn('Google Analytics não está configurado ou não foi carregado.');
    }
  }
}
