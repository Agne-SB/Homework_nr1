import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-skaiciuotuvas',
  imports: [
    FormsModule
  ],
  templateUrl: './skaiciuotuvas.html',
  styleUrl: './skaiciuotuvas.css'
})
export class Skaiciuotuvas {
public weight: number |  null=null;
public height: number |  null=null;
public result: number |  null=null;

public kmi() {
    if (this.weight != null && this.height != null) {
    this.result = Number(Number(this.weight / ((this.height / 100) ** 2)).toFixed(1)) ;
  }
}

}
