import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AadharUploadComponent } from "./modals/aadhar-upload/aadhar-upload.component";
import { DlUploadComponent } from "./modals/dl-upload/dl-upload.component";
import { PhotoUploadComponent } from "./modals/photo-upload/photo-upload.component";
import { LocalIdUploadComponent } from "./modals/local-id-upload/local-id-upload.component";
import { StudentIdUploadComponent } from "./modals/student-id-upload/student-id-upload.component";
import { FilesUploadComponent } from './modals/files-upload/files-upload.component';

@NgModule({
  declarations: [
    AadharUploadComponent,
    DlUploadComponent,
    PhotoUploadComponent,
    LocalIdUploadComponent,
    StudentIdUploadComponent,
    FilesUploadComponent,
  ],
  imports: [CommonModule],
})
export class KYCModule {}
