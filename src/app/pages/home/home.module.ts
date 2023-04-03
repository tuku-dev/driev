import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BlogComponent } from "./blog/blog.component";
import { BookARideComponent } from "./book-a-ride/book-a-ride.component";
import { FeaturedScooterComponent } from "./featured-scooter/featured-scooter.component";
import { FeedbackComponent } from "./feedback/feedback.component";
import { HomeComponent } from "./home.component";
import { RecommendedPlansComponent } from "./recommended-plans/recommended-plans.component";
import { ThingsYouKnowComponent } from "./things-you-know/things-you-know.component";
import { ThreeCardsComponent } from "./three-cards/three-cards.component";
@NgModule({
  declarations: [
    HomeComponent,
    BookARideComponent,
    RecommendedPlansComponent,
    ThingsYouKnowComponent,
    FeaturedScooterComponent,
    FeedbackComponent,
    BlogComponent,
    ThreeCardsComponent,
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule],
})
export class HomeModule {}
