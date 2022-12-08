import { Component, OnInit } from '@angular/core';
import { Child } from '../child';
import { CHILD } from '../mock-child';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  child = CHILD;
  selectedChild?: Child;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(child: Child): void {
    this.selectedChild = child;
  }
}