import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public router: Router, public translate: TranslateService) {
    translate.setDefaultLang('en'); // set default language
  }

  public selectedLanguage: string = 'en';


  translateSite(language: string) {
    this.selectedLanguage = language;
    this.translate.use(language); // switch language
  }

}
