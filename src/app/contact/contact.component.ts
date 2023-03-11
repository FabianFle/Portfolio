import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  @ViewChild('myForm') myFrom!: ElementRef;
  @ViewChild('nameField') nameField!: ElementRef;
  @ViewChild('emailField') emailField!: ElementRef;
  @ViewChild('messageField') messageField!: ElementRef;
  @ViewChild('sendButton') sendButton!: ElementRef;

  constructor() {}

  sendMail() {
    let nameField = this.nameField.nativeElement;
    let emailField = this.emailField.nativeElement;
    let messageField = this.messageField.nativeElement;
    this.mailSendToServer(nameField, emailField, messageField);
    this.BtnDisable();

    setTimeout(() => {
      this.BtnDisableFlase();
    }, 3000);
  }


  async mailSendToServer(nameField: HTMLInputElement, emailField: HTMLInputElement, messageField: HTMLInputElement) {
    let fd = new FormData();
    fd.append('nameField', nameField.value)
    fd.append('emailField', emailField.value)
    fd.append('messageField', messageField.value)
    await fetch('https://fabianflegler.de/send_mail.php',
      {
        method: 'POST',
        body: fd
      }
    )
    this.examineText(nameField, emailField, messageField);
  }

  examineText(nameField: HTMLInputElement, emailField: HTMLInputElement, messageField: HTMLInputElement) {
    nameField.value = nameField.value.replace (/<>/, "_");
    emailField.value = emailField.value.replace (/<>/, "_");
    messageField.value = messageField.value.replace (/<>/, "_");
  }


  BtnDisable() {
    this.nameField.nativeElement.disable = true;
    this.emailField.nativeElement.disable = true;
    this.messageField.nativeElement.disable = true;
    document.getElementById('loaderDNone')?.classList.remove('loaderDNone');
  }


  BtnDisableFlase() {
    this.nameField.nativeElement.disable = false;
    this.emailField.nativeElement.disable = false;
    this.messageField.nativeElement.disable = false;
    document.getElementById('loaderDNone')?.classList.add('loaderDNone');
    document.getElementById('emailSendDiv')?.classList.remove('loaderDNone');

    setTimeout(() => {
      document.getElementById('emailSendDiv')?.classList.add('loaderDNone');
    }, 5000)

    this.inputValueNull();
  }

  inputValueNull() {
    this.nameField.nativeElement.value = '';
    this.emailField.nativeElement.value = '';
    this.messageField.nativeElement.value = '';
  }
}
