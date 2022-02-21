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
    indie: true,
    adventure: true,
    action: true,
    radio: ''
  };

  @Output() onChanged = new EventEmitter<number>()
  @Output() onChecked = new EventEmitter<any>()
  @Output() onCheckedIndie = new EventEmitter<boolean>()
  @Output() onCheckedAction = new EventEmitter<boolean>()
  @Output() onCheckedAdventure = new EventEmitter<boolean>()
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
    // console.log(this.price)
  }

  info(price: any) {
    console.log(price)
    this.onChecked.emit(price)
  }

  infoIndie(indie: boolean) {
    this.onCheckedIndie.emit(indie)
  }

  infoAction(action: boolean) {
    this.onCheckedAction.emit(action)
  }

  infoAdventure(adventure: boolean) {
    this.onCheckedAdventure.emit(adventure)
  }
}
