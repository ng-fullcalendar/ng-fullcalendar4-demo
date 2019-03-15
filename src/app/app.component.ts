import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild('calendar') el: ElementRef;
  ngOnInit() {
    const dateObj = new Date();
    const yearMonth = dateObj.getUTCFullYear() + '-' + (dateObj.getUTCMonth() + 1);
    const calendar = new Calendar(this.el.nativeElement, {
      editable: true,
      events: [{
        title: 'Long Event',
        start: yearMonth + '-07',
        end: yearMonth + '-10'
      }],
      plugins: [ dayGridPlugin, interactionPlugin ]
    });
    calendar.render();
  }

}
