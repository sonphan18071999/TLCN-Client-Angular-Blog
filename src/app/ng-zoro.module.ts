import { NgModule } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';

@NgModule({
    exports: [
        NzGridModule,
        NzButtonModule,
        NzCardModule,
        NzSpinModule,
        NzSkeletonModule,
        NzSpaceModule,
        NzToolTipModule
    ],
    imports: [
        NzGridModule,
        NzButtonModule,
        NzCardModule,
        NzSpinModule,
        NzSkeletonModule,
        NzSpaceModule,
        NzToolTipModule
    ]
  })
  export class NGZorroModule { }