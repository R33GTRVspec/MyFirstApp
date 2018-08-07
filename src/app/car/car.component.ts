import {
  AfterContentChecked,
  AfterContentInit, AfterViewChecked, AfterViewInit,
  Component,
  ContentChild, DoCheck,
  ElementRef,
  Input,
  OnChanges, OnDestroy,
  OnInit,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy
{
  @Input ('carItem') car: {name: string, year: number};
  @Input () name: string;
  @ContentChild('carHeading') carHeading: ElementRef;

  constructor() {
    console.log('constructor');
  }

  ngOnInit(): void {
    console.log('ngOnInit');
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges', changes);
  }
  ngDoCheck(): void {
    console.log('ngDoCheck');
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }
}

