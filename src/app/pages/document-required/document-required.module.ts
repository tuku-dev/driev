import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "./../../shared/shared.module";
import { DocumentRequiredComponent } from "./document-required.component";

@NgModule({
  declarations: [DocumentRequiredComponent],
  imports: [CommonModule, SharedModule],
})
export class DocumentRequiredModule {}
