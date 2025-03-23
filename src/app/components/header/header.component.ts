import { Component } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";
import { TranslateModule } from "@ngx-translate/core";
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-header',
  imports: [TranslateModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: '../../app.component.css'
})
export class HeaderComponent {
  langs: string[] = [];

  constructor(private translate: TranslateService) {
    this.translate.addLangs(['es', 'en']);
    this.translate.setDefaultLang('en');
    this.translate.use('es');
    this.langs = this.translate.getLangs();
  }

  changeLang(lang: string) {
    this.translate.use(lang);
  }
}
