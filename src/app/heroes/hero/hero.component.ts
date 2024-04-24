import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name:string = 'Iroman';
  public age:number = 45;

  get capitalizeName():string{
    return this.name.toUpperCase();
  }

  get heroDescription():string{
    return `${this.name} - ${this.age}`;
  }

  changeHero():void {
    this.name = 'DeedPool'
  }

  changeAge():void{
    this.age = 34;
  }

  resetForm():void{
    this.name = 'Iroman';
    this.age = 45;
  }

}
