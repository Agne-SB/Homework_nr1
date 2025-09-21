import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Skaiciuotuvas} from './skaiciuotuvas/skaiciuotuvas';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Skaiciuotuvas],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('kmi-skaiciuokle');
}
