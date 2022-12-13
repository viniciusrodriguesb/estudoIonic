import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alerta',
  templateUrl: './alerta.page.html',
  styleUrls: ['./alerta.page.scss'],
})
export class AlertaPage implements OnInit {

  constructor(private alertController: AlertController) { }

  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Monstro',
      subHeader: 'Bem-Vindo, monstro',
      message: 'Este é um alerta',
      buttons: ['OK']
    });

    await alert.present();
  }

  async exibirCustom() {
    const alert = await this.alertController.create({
      header: 'Mensagem',
      message: 'Deseja realmente sair?',
      buttons: ['OK', 'CANCELAR']
    });

    await alert.present();
  }

  async exibirComplete() {
    const alert = await this.alertController.create({
      header: 'CONFIRMA',
      message: 'Confirma a gravação?',
      buttons: [{text: 'OK', 
                handler: () => {console.log('Vou gravar!')}
                },

                {text: 'CANCELAR',
                handler: () => {console.log('Desistir')}
                }]
    });
    await alert.present();
  }

  

}
