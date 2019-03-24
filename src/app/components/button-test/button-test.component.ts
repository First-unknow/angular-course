import { Component, 
        OnInit, 
        Input, 
        Output, 
        EventEmitter,
        TemplateRef  
      } from '@angular/core';

@Component({
  selector: 'app-button-test',
  templateUrl: './button-test.component.html',
  styleUrls: ['./button-test.component.scss']
})
export class ButtonTestComponent implements OnInit {
  @Input() text:any;
  @Input() hoc:TemplateRef<any>;
  @Output() onClick = new EventEmitter();
  date = new Date;
  constructor() { }

  btnClick(){
    this.onClick.next('edited' + this.text);
  }
  
  ngOnInit() {
  }

}
