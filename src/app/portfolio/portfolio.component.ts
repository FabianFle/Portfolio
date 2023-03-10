import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {

  projekte: any = [
    {
      name: 'Portfolio',
      img: 'portfolioFrame.png',
      programmingLanguage: 'Angular | TypeScript | HTML | CSS',
      text: 'HIER MUSS ICH NOCH EINEN TEXT SCHREIBEN FÜR DIE ANWENDUNG',
      link: '#',
      linkGit: 'https://github.com/FabianFle/Portfolio.git',
    },
    {
      name: 'Join',
      img: 'JoinFrame.png',
      programmingLanguage: 'JavaScript | HTML | CSS | Git',
      text: 'HIER MUSS ICH NOCH EINEN TEXT SCHREIBEN FÜR DIE ANWENDUNG',
      link: 'https://fabianflegler-join.de',
      linkGit: 'https://github.com/FabianFle/Join.git',
    },
    {
      name: 'El Pollo Loco',
      img: 'ElPolloLocoFrame.png',
      programmingLanguage: 'JavaScript | HTML | CSS',
      text: 'HIER MUSS ICH NOCH EINEN TEXT SCHREIBEN FÜR DIE ANWENDUNG',
      link: 'https://fabianflegler-elpolloloco.de',
      linkGit: 'https://github.com/FabianFle/El-Pollo-Loco.git',
    },
    {
      name: 'Ring of Fire',
      img: 'ringoffireFrame.png',
      programmingLanguage: 'Angular | TypeScript | HTML | CSS | Firebase',
      text: 'HIER MUSS ICH NOCH EINEN TEXT SCHREIBEN FÜR DIE ANWENDUNG',
      link: 'https://ringoffireff.web.app/',
      linkGit: 'https://github.com/FabianFle/Ring-Of-Fire.git',
    },
  ];

}
