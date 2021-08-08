import { NzGridModule } from 'ng-zorro-antd/grid';
import { NgModule } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzSpinModule } from 'ng-zorro-antd/spin';

@NgModule({
    exports: [
        NzGridModule,
        NzButtonModule,
        NzCardModule,
        NzSpinModule
    ],
    imports: [
        NzGridModule,
        NzButtonModule,
        NzCardModule,
        NzSpinModule
    ]
  })
  export class NGZorroModule { }