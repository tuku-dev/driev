import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Component } from "@angular/core";

@Component({
  selector: "app-personal-details",
  templateUrl: "./personal-details.component.html",
  styleUrls: ["./personal-details.component.scss"],
})
export class PersonalDetailsComponent {
  assetPath = "../../../assets/";
  cancelUpload = 0;
  settingUpForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) {}

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

  submitSetupForm() {
    this.submitted = true;
    if (this.settingUpForm.invalid) {
      return;
    }
  }
}
