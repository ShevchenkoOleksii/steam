import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-filter-box',
  templateUrl: './filter-box.component.html',
  styleUrls: ['./filter-box.component.css']
})
export class FilterBoxComponent implements OnInit {


  @Input() price = {
    value: 2000,
    music: false,
    all: true,
    adventure: false
  };

  @Output() onChanged = new EventEmitter<number>()
  @Output() onChecked = new EventEmitter<boolean>()
  constructor() { }

  ngOnInit(): void {
  }

  showPrice() {
    console.log(this.price.value)
  }

  getPrice() {
    return this.price.value
  }

  increase(price: number) {
    this.onChanged.emit(price)
  }

  info(music: boolean) {
    // console.log(music)
    this.onChecked.emit(music)
  }
}
