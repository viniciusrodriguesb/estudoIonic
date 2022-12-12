import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: 'home', icon: 'home' },
    { title: 'Navegação', url: 'navegacao', icon: 'navigate' },
    { title: 'Botões', url: 'buttons', icon: 'medical' }
  ];
  public labels = ['Senac'];
  constructor() {}
}
