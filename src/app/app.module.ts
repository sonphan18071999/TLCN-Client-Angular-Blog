import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {MaterialModule } from './material.module';
import { IndexScreenComponent } from './index-screen/index-screen.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { IndexPostComponent } from './index-post/index-post.component';
import { PopUpPostContentComponent } from './pop-up-post-content/pop-up-post-content.component';
import { DetailsPostComponent } from './details-post/details-post.component';
import { ProfileComponent } from './profile/profile.component';
import {MatMenuModule} from '@angular/material/menu';
import { CreateArticleComponent } from './create-article/create-article.component';
import { SocketioService } from './details-post/socketio.service';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    IndexScreenComponent,
    HeaderComponent,
    FooterComponent,
    IndexPostComponent,
    PopUpPostContentComponent,
    DetailsPostComponent,
    ProfileComponent,
    CreateArticleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    MatMenuModule,
  ],
  providers: [SocketioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
