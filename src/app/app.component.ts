import { Component, HostListener } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap';
import { ExampleModalComponent } from './example-modal/example-modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private modalService: BsModalService) {}

  @HostListener('document:keydown', ['$event'])
  public onKeyDown(e: KeyboardEvent) {
    if (e.ctrlKey) {
      switch (e.keyCode) {
        case 49: {
          this.showModalFast();
          break;
        }
        case 50: {
          this.showModalMedium();
          break;
        }
        case 51: {
          this.showModalSlow();
          break;
        }
      }
    }
  }

  public showModalFast() {
    this.showDialog(0);
  }
  public showModalMedium() {
    this.showDialog(150);
  }
  public showModalSlow() {
    this.showDialog(250);
  }

  private showDialog(delay: number): void {
    // We use { keyboard: false, backdrop: 'static' } in our project => The dialog cannot be closed and the browser has to be refreshed
    const modal = this.modalService.show(ExampleModalComponent);
    setTimeout(() => modal.hide(), delay);
  }
}
