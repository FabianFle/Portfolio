import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-imprint',
  templateUrl: './imprint.component.html',
  styleUrls: ['./imprint.component.scss']
})
export class ImprintComponent implements OnInit {
  public selectedLanguage: string = 'en';

  constructor(public translate: TranslateService) {
    translate.setDefaultLang('en'); // set default language
  }

  translateSite(language: string) {
    this.selectedLanguage = language;
    this.translate.use(language); // switch language
  }

  ngOnInit() { window.scrollTo(0, 0); }

}
