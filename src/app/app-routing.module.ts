import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { JobsComponent } from './components/pages/jobs/jobs.component';
import { PostingPageComponent } from './components/pages/posting-page/posting-page.component';

const routes: Routes = [
    { path: "", component: HomeComponent },
    { path: "jobs", component: JobsComponent },
    { path: "jobs/:searchTerm", component: JobsComponent },
    { path: "posting/:id", component: PostingPageComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
