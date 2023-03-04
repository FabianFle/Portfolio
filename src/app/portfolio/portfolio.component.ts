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
      text: '',
    },
    {
      name: 'Join',
      img: 'JoinFrame.png',
      programmingLanguage: 'JavaScript | HTML | CSS | Git',
      text: '',
    },
    {
      name: 'El Pollo Loco',
      img: 'ElPolloLocoFrame.png',
      programmingLanguage: 'JavaScript | HTML | CSS',
      text: '',
    },
    {
      name: 'Quiz-App',
      img: 'quizFrame.png',
      programmingLanguage: 'JavaScript | HTML | CSS',
      text: '',
    },
    {
      name: 'Pokedex',
      img: 'pokedexFrame.png',
      programmingLanguage: 'JavaScript | HTML | CSS | Api',
      text: '',
    },
    {
      name: 'Ring of Fire',
      img: 'ringoffireFrame.png',
      programmingLanguage: 'Angular | TypeScript | HTML | CSS | Firebase',
      text: '',
    },
  ];

}
