import { Component, 
        OnInit, 
        Input, 
        Output, 
        EventEmitter  
      } from '@angular/core';

@Component({
  selector: 'app-button-test',
  templateUrl: './button-test.component.html',
  styleUrls: ['./button-test.component.scss']
})
export class ButtonTestComponent implements OnInit {
  @Input() text:any;
  @Output() onClick = new EventEmitter();
  
  constructor() { }

  btnClick(){
    this.onClick.next('edited' + this.text);
  }
  
  ngOnInit() {
  }

}
