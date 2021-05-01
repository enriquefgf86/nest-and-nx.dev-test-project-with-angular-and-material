import { Component, Inject, OnInit } from '@angular/core';
import {
  ChuckItemResult,
  ChuckSearchResult,
} from '@chuck-norris-front/interfaces';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

@Component({
  selector: 'chuck-norris-front-modal-search',
  templateUrl: './modal-search.component.html',
  styleUrls: ['./modal-search.component.css'],
})
export class ModalSearchComponent implements OnInit {
  allSearch: ChuckSearchResult;
  constructor(
    public dialogRef: MatDialogRef<ModalSearchComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { search: ChuckSearchResult }
  ) {}

  ngOnInit(): void {
    if (this.data.search) {
      this.allSearch = this.data.search;
    }
  }

  closeModal() {
    this.dialogRef.close();
  }
}
