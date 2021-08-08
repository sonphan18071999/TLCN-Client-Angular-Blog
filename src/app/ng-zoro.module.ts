import { NzGridModule } from 'ng-zorro-antd/grid';
import { NgModule } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';

@NgModule({
    exports: [
        NzGridModule,
        NzButtonModule,
        NzCardModule
    ],
    imports: [
        NzGridModule,
        NzButtonModule,
        NzCardModule
    ]
  })
  export class NGZorroModule { }