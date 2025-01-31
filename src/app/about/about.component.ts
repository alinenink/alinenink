import { AfterViewInit, Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { TranslateModule, TranslateService } from "@ngx-translate/core";
import { GoogleAnalyticsService } from "../services/google-analytics.service"; // Importe o serviço de Google Analytics
import { Subscription } from "rxjs/dist/types";

@Component({
  selector: "app-about",
  imports: [CommonModule, TranslateModule, RouterModule],
  standalone: true,
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.scss"],
})
export class AboutComponent implements AfterViewInit {
  private langChangeSubscription!: Subscription;
  selectedLanguage: string = "";
  timeline = [
    {
      title: "graduation",
      description: "graduationDescription",
      date: "2014-2016",
    },
    {
      title: "beginnerExperience",
      description: "beginnerDescription",
      date: "2018-2019",
    },
    {
      title: "intermediateExperience",
      description: "intermediateDescription",
      date: "2019-2020",
    },
    {
      title: "postgraduateAgile",
      description: "postgraduateAgileDescription",
      date: "2021-2023",
    },
    {
      title: "advancedExperience",
      description: "advancedDescription",
      date: "2020-2022",
    },
    {
      title: "postgraduateUX",
      description: "postgraduateUXDescription",
      date: "2023",
    },
    {
      title: "techLeadExperience",
      description: "techLeadDescription",
      date: "2022-Present",
    },
  ];

  constructor(
    private googleAnalyticsService: GoogleAnalyticsService,
    private translate: TranslateService
  ) {
    // Disparo de Pageview no construtor
    this.googleAnalyticsService.sendEvent("page_view", {
      page_path: "/about",
      page_title: "About Page",
    });
  }

  ngAfterViewInit() {
    this.selectedLanguage = this.translate.currentLang || "en"; // Pega o idioma inicial
    console.log(this.selectedLanguage);


    // Ouvir mudanças de idioma globalmente
    this.langChangeSubscription = this.translate.onLangChange.subscribe(
      (event) => {
        this.selectedLanguage = event.lang; // Atualiza a variável ao mudar o idioma
        console.log(this.selectedLanguage);
      }
    );
  }

  ngOnDestroy() {
    if (this.langChangeSubscription) {
      this.langChangeSubscription.unsubscribe();
    }
  }

  /**
   * Método para realizar o download do currículo
   */
  downloadResume(): void {
    let fileUrl;

    if (this.selectedLanguage === 'en') {
      fileUrl = "assets/CVAline-Nink-English.pdf"; // Caminho para o arquivo ptbr
    } else {
      fileUrl = "assets/curriculo.pdf"; // Caminho para o arquivo en
    }

    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = "Curriculo-Aline-Nink.pdf";
    link.click();

    // Disparar evento de download para o Google Analytics
    this.googleAnalyticsService.sendEvent("download_resume", {
      file_name: "Curriculo-Aline-Nink.pdf",
      file_path: fileUrl,
      page_path: "/about",
    });
  }
}
