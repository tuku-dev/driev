import { ReactiveFormsModule } from "@angular/forms";
import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PersonalDetailsComponent } from "./personal-details.component";

@NgModule({
  declarations: [PersonalDetailsComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
})
export class PersonalDetailsModule {}
