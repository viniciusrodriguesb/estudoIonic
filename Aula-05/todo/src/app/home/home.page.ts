import { Component } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  tarefas = [
    {descricao: 'Comprar pão'},
    {descricao: 'escovar os dentes'}
  ] 
  
  constructor(private alertController: AlertController,
              private toastController: ToastController) {}
              
  
  async showAdd(){
    const alert = await this.alertController.create({
        header: 'O que deseja fazer?',
        inputs: [
          {
            name:'task',
            type: 'text',
            placeholder: 'Digite a tarefa'
          }
        ],
        buttons:[
          {
            text: 'Cancelar',
            handler: () => {console.log('Cancelou...')}
          },
          {
            text: 'Adicionar',
            handler: (form) => {this.teste(form.task)}
          }
        ]
    }); 

    alert.present();
  }

  apagar(){
    this.tarefas.splice(1);
  }

  //TRIM É UTILIZADO PARA RETIRAR ESPAÇAMENTOS
  async teste(newTask: string){ 
    if(newTask.trim().length < 1){
      const toast = await this.toastController.create({
        message: 'Informe a tarefa!',
        duration: 4000,
        position: 'top'
      });
      toast.present();
    }else{
      const myArray = [];
      this.tarefas.push({descricao: newTask})
    }
  }
}