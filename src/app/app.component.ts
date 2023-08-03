import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular12';
  public name = 'HuuTinh';
  public  age = 15;
  public traiCay = ['Táo','Nho','Cam', 'Bưởi'];

  public resetName(): void {
    console.log("resetName");
    this.name = 'HuuTinh';
  }
  
  public ngOnInt(): void {
  console.log('trai cay = ', this.traiCay);
 }
 constructor(){}
}
