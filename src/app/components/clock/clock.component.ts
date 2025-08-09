import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { LocalNotifications } from '@capacitor/local-notifications';

@Component({
  selector: 'app-clock',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './clock.component.html',
  styleUrl: './clock.component.scss'
})
export class ClockComponent {
  isClicked = false;
  audio = new Audio('assets/alarm1.wav');

  startAlarm() {
    alert("ok");
    const delay = 20 * 60 * 1000; // 20 minutes
    this.isClicked = true;

    setTimeout(() => {
      this.audio.loop = true;
      this.audio.play();

      LocalNotifications.schedule({
        notifications: [
          {
            title: '⏰ Alarm!',
            body: '20 minutes passed. Tap to stop.',
            id: 1,
            schedule: { at: new Date() },
            actionTypeId: 'TURN_OFF',
          }
        ]
      });

      LocalNotifications.addListener('localNotificationActionPerformed', (event) => {
        if (event.actionId === 'tap') {
          this.stopSound();
        }
      });

    }, delay);
  }

  stopSound() {
    this.audio.pause();
    this.audio.currentTime = 0;
    this.isClicked = false;
  }
}
