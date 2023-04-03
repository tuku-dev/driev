import { Router } from "@angular/router";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { Component } from "@angular/core";

@Component({
  selector: "app-skip-for-now",
  templateUrl: "./skip-for-now.component.html",
  styleUrls: ["./skip-for-now.component.scss"],
})
export class SkipForNowComponent {
  constructor(private dialogRef: NgbActiveModal, private router: Router) {}
  close() {
    this.dialogRef.close({ success: false });
  }

  skipNow() {
    this.close();
    this.router.navigate(["./"]);
  }
}
