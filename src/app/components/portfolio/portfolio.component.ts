import { Component } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";
import { TranslateModule } from "@ngx-translate/core";

@Component({
  selector: 'app-portfolio',
  imports: [TranslateModule],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css', '../../app.component.css']
})


export class PortfolioComponent {
  constructor(private translate: TranslateService) {
    this.translate.addLangs(['es', 'en']);
    this.translate.setDefaultLang('en');
    this.translate.use('es');
  }

}
