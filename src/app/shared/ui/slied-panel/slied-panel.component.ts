import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-slied-panel',
  standalone: true,
  imports: [],
  templateUrl: './slied-panel.component.html',
  styleUrl: './slied-panel.component.scss',
  animations: [
    trigger('fadeSlideInRight', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(100%)' }),
        animate('300ms', style({ opacity: 1, transform: 'translateX(0)' })),
      ]),
      transition(':leave', [
        animate('300ms', style({ opacity: 0, transform: 'translateX(100%)' })),
      ]),
    ]),
  ],
})
export class SliedPanelComponent {
  @Input() isOpen = false;
  @Input() headerText = 'Slide Panel Header';
  @Output() onClose = new EventEmitter();

  onClosePanel() {
    this.onClose.emit(false);
  }
}
