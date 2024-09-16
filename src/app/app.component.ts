import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { Title, Meta } from '@angular/platform-browser';
import {LanguageService} from "src/app/services/language/language.service"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'abhay-portfolio';
  
  constructor(
    private titleService: Title,
    private metaService: Meta,
    private languageService: LanguageService
    ){
    }
  ngOnInit(): void{
    
    this.languageService.initLanguage()


    this.titleService.setTitle( "Abhay Pratap Chhibber | Software Developer" );

    this.metaService.addTags([
      {name: 'keywords', content: "Backend, software, developer"},
      {name: 'description', content: "With a dynamic 4-year journey in tech, I'm a passionate coder and an enthusiast of the science behind computers. Throuhgout my college journey, I focused on gaining foundational knowledge about the art of programming and software engineering, along with picking up some intern work on the side to gain industry insights and now looking for dev roles to use my skills for good."},
    ]);
    
    
    AOS.init(); 

  }
}
