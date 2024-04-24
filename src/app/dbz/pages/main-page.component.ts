import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzServiceTsService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class DbzComponent{

  constructor(private dbzService: DbzServiceTsService){}

  get characters(): Character[]{
    return [...this.dbzService.characters];
  }

  onDeleteCharacter(id:string):void{
    this.dbzService.onDeleteCharacterByIds(id);
  }

  onNewCharacter(character: Character): void{
    this.dbzService.addCharacter(character);
  }

}
