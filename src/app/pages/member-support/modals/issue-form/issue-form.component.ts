import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { Component } from "@angular/core";

@Component({
  selector: "app-issue-form",
  templateUrl: "./issue-form.component.html",
  styleUrls: ["./issue-form.component.scss"],
})
export class IssueFormComponent {
  assetPath = "../../../../assets/";
  constructor(private modalRef: NgbActiveModal) {}
  ngOnInit(): void {}
  submitForm() {
    this.modalRef.close({ success: true });
  }
}
