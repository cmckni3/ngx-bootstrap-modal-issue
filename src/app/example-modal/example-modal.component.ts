import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap';

@Component({
  selector: 'app-example-modal',
  templateUrl: './example-modal.component.html',
  styleUrls: ['./example-modal.component.css'],
})
export class ExampleModalComponent {
  constructor(public bsModalRef: BsModalRef) {}
}
