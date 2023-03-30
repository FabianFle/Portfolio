import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  skills: any = [
    {
      name: 'Angular',
      img: 'Angular.png'
    },
    {
      name: 'TypeScript',
      img: 'Vector (2).png'
    },
    {
      name: 'JavaScript',
      img: 'Javascript.png'
    },
    {
      name: 'HTML',
      img: 'html.png'
    }, 
    {
      name: 'Firebase',
      img: 'Firebase.png'
    }, 
    {
      name: 'Git',
      img: 'git.png'
    },
    {
      name: 'CSS',
      img: 'Vector (1).png'
    }, 
    {
      name: 'Rest-Api',
      img: 'Rest-Api.png'
    },
    {
      name: 'Scrum',
      img: 'Scrum.png'
    },
    {
      name: 'Material design',
      img: 'Frame.png'
    }
  ];
}
