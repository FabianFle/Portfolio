import { Component, ElementRef, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @ViewChild('closeBtn') closeBtn!: ElementRef;
  public selectedLanguage: string = 'en';

  constructor(public translate: TranslateService) {
    translate.setDefaultLang('en'); // set default language
  }

  closeMenu() {
    if (this.closeBtn) {
      this.closeBtn.nativeElement.click();
    }
  }

  translateSite(language: string) {
    this.selectedLanguage = language;
    this.translate.use(language); // switch language

    let name = (document.getElementById('name') as HTMLInputElement);
    let mail = (document.getElementById('mail') as HTMLInputElement);
    let message = (document.getElementById('message') as HTMLInputElement);
    let sendBtn = (document.getElementById('sendBtn') as HTMLButtonElement);


    if (language == 'en') {
      name.placeholder = 'Your name';
      mail.placeholder = 'Your email';
      message.placeholder = 'Your message';
      sendBtn.innerHTML = 'Send message :)';
    }
    if (language == 'de') {
      name.placeholder = 'Dein Name';
      mail.placeholder = 'Deine Email Adresse';
      message.placeholder = 'Deine Nachricht an mich';
      sendBtn.innerHTML = 'Nachricht senden :)';
    }
  }

}
