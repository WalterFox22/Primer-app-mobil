import { Component } from '@angular/core';
//import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonButton, IonContent, IonHeader, IonTitle, IonToast, IonToolbar } from '@ionic/angular/standalone';
import { IonItem, IonList, IonRadio, IonRadioGroup } from '@ionic/angular/standalone';
import { IonCheckbox } from '@ionic/angular/standalone';
import { IonDatetime } from '@ionic/angular/standalone';
import { IonAlert } from '@ionic/angular/standalone';
import { IonLoading } from '@ionic/angular/standalone';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule,
    // Importa solo los componentes standalone de Ionic aquí
    IonButton, IonContent, IonHeader, IonTitle, IonToast, IonToolbar,
    IonItem, IonList, IonRadio, IonRadioGroup,
    IonCheckbox, IonDatetime,IonAlert,IonLoading
  ],
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  nombre: string = '';
  alertButtons = ['Action'];
}