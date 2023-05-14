import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/partials/header/header.component';
import { HomeComponent } from './components/pages/home/home.component';
import { TriangleComponent } from './components/partials/triangle/triangle.component';
import { JobListComponent } from './components/partials/job-list/job-list.component';
import { SearchComponent } from './components/partials/search/search.component';
import { JobsComponent } from './components/pages/jobs/jobs.component';
import { PostingPageComponent } from './components/pages/posting-page/posting-page.component';
import { ButtonDefaultComponent } from './components/partials/button-default/button-default.component';
import { FooterComponent } from './components/partials/footer/footer.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        HomeComponent,
        TriangleComponent,
        JobListComponent,
        SearchComponent,
        JobsComponent,
        PostingPageComponent,
        ButtonDefaultComponent,
        FooterComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
