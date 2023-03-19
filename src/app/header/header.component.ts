import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @ViewChild('closeBtn') closeBtn!: ElementRef;

  constructor() { }
  ngOnInit() { }

  closeMenu() {
    if (this.closeBtn) {
      this.closeBtn.nativeElement.click();
    }
  }
}
