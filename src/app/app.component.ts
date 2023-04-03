import {Component, OnInit} from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { SplashScreen } from '@capacitor/splash-screen';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class AppComponent implements OnInit{
  constructor() {}

  ngOnInit() {
    SplashScreen.show({
      autoHide: true,
      showDuration: 1000,
    });
    console.log('SplashScreen:  ',SplashScreen)
  }
}
