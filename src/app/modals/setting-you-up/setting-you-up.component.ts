import { FormBuilder, Validators } from "@angular/forms";
import { FormGroup } from "@angular/forms";
import { Component } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { Router } from "@angular/router";

@Component({
  selector: "app-setting-you-up",
  templateUrl: "./setting-you-up.component.html",
  styleUrls: ["./setting-you-up.component.scss"],
})
export class SettingYouUpComponent {
  submitted = false;
  settingUpForm: FormGroup;
  constructor(
    private dialogRef: NgbActiveModal,
    private fb: FormBuilder,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.settingUpForm = this.fb.group({
      file: [""],
      fullName: [
        "",
        [
          Validators.required,
          Validators.pattern(/^\s*[a-zA-Z\s][a-zA-Z0-9\s]+\s*$/),
        ],
      ],
      emailId: [
        "",
        [
          Validators.required,
          Validators.email,
          Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/),
        ],
      ],
      phoneNumber: [
        "",
        [
          Validators.required,
          Validators.pattern(/^[1-9][0-9]*$/),
          Validators.minLength(10),
          Validators.maxLength(10),
        ],
      ],
      occupation: ["", [Validators.required]],
      occupationName: ["", [Validators.required]],
    });
  }

  get f() {
    return this.settingUpForm.controls;
  }

  close() {
    this.dialogRef.close({ success: false });
  }

  submitSetupForm() {
    // this.submitted = true;
    // if (this.settingUpForm.invalid) {
    //   return;
    // }
    this.close();
    localStorage.setItem("loggedIn", "1");
    location.reload();
    this.router.navigate(["/profile"]);
  }
}
