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

  async sendMail() {
    let nameField = this.nameField.nativeElement;
    let emailField = this.emailField.nativeElement;
    let messageField = this.messageField.nativeElement;
    nameField.disable = true;
    emailField.disable = true;
    messageField.disable = true;

    debugger
    let fd = new FormData();
    fd.append('nameField', nameField.value)
    fd.append('emailField', emailField.value)
    fd.append('messageField', messageField.value)
    await fetch('https://fabianflegler.de/send_mail.php',
      {
        method: 'post',
        body: fd
      }
    )
  }
}
