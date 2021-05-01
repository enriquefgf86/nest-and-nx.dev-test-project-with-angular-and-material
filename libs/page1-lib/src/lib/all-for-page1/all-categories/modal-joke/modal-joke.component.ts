import { Component, Inject, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ChuckItemResult } from '@chuck-norris-front/interfaces'

@Component({
  selector: 'chuck-norris-front-modal-joke',
  templateUrl: './modal-joke.component.html',
  styleUrls: ['./modal-joke.component.css'],
})
export class ModalJokeComponent implements OnInit {
  modalJoke: ChuckItemResult;
  constructor(
    public dialogRef: MatDialogRef<ModalJokeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { joke: ChuckItemResult },
    private router:Router
  ) {}

  ngOnInit(): void {
    console.log(this.data.joke);

    if (this.data.joke) {
      this.modalJoke = this.data.joke;
    }
  }

  closeModal(){
    this.dialogRef.close();
  }

async  seeDetails(event){
  if(event){
console.log(event);

  }
this.router.navigate([`pages/page2/${event.target.id}`])
this.closeModal()
    
  }
}
