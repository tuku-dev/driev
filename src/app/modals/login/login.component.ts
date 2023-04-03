import { SettingYouUpComponent } from "./../setting-you-up/setting-you-up.component";
import { Component, ViewChildren } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { NgbActiveModal, NgbModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent {
  @ViewChildren("formRow") rows: any;
  loginForm: FormGroup;
  otpForm: FormGroup;
  submitted = false;
  otpSubmitted = false;
  section = 1;
  constructor(
    private dialogRef: NgbActiveModal,
    public fb: FormBuilder,
    public modalService: NgbModal
  ) {}
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      contactNumber: [
        "",
        [
          Validators.required,
          Validators.pattern(/^[1-9][0-9]*$/),
          Validators.minLength(10),
          Validators.maxLength(10),
        ],
      ],
    });
    this.otpForm = this.fb.group({
      input1: [
        "",
        [Validators.required, Validators.minLength(1), Validators.maxLength(1)],
      ],
      input2: [
        "",
        [Validators.required, Validators.minLength(1), Validators.maxLength(1)],
      ],
      input3: [
        "",
        [Validators.required, Validators.minLength(1), Validators.maxLength(1)],
      ],
      input4: [
        "",
        [Validators.required, Validators.minLength(1), Validators.maxLength(1)],
      ],
    });
    // this.openSetupModal();
  }
  get f() {
    return this.loginForm.controls;
  }
  get f1() {
    return this.otpForm.controls;
  }
  close() {
    this.dialogRef.close({ success: false });
  }
  sendOtp() {
    // this.submitted = true;
    // if (this.loginForm.invalid) {
    //   console.log(this.loginForm);
    //   return;
    // }
    this.section = 2;
  }

  keyUpEvent(event: { keyCode: number; which: number }, index: number) {
    if ((event.keyCode >= 48 && event.keyCode <= 57) || event.keyCode === 8) {
      let pos = index;
      pos = index;
      if (event.keyCode === 8) {
        pos = index - 2;
      }
      if (pos > -1 && pos < 4) {
        this.rows._results[pos].nativeElement.focus();
      }
    }
  }
  verifyOtp() {
    // this.otpSubmitted = true;
    // if (this.otpForm.invalid) {
    //   console.log(this.otpForm);
    //   return;
    // }
    localStorage.setItem("otpVerified", "1");
    this.close();
    this.openSetupModal();
  }

  openSetupModal() {
    const modalRef = this.modalService.open(SettingYouUpComponent, {
      centered: true,
      windowClass: "setting-you-up-modal",
      size: "lg",
    });

    modalRef.componentInstance.content = {
      title: "Hello There",
      message: "",
      btnText: "close",
    };
  }
}
