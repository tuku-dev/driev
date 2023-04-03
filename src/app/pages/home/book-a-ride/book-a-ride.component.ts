import { DatePickerComponent } from "./../../../shared/date-picker/date-picker.component";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { Component } from "@angular/core";
import * as moment from "moment";
import { TimePickerComponent } from "src/app/shared/time-picker/time-picker.component";

@Component({
  selector: "app-book-a-ride",
  templateUrl: "./book-a-ride.component.html",
  styleUrls: ["./book-a-ride.component.scss"],
})
export class BookARideComponent {
  datePicker: any;
  timePicker: any;

  constructor(public modalService: NgbModal) {}

  ngOnInit(): void {
    this.openTimePicker();
  }

  openDatePicker() {
    const modalRef = this.modalService.open(DatePickerComponent, {
      centered: true,
      windowClass: "date-picker",
    });

    modalRef.result.then(
      (response) => {
        if (response.success) {
          this.datePicker = moment(response.data).format("DD / MM / YYYY");
          console.log(this.datePicker);
        }
      },
      () => {}
    );
  }
  openTimePicker() {
    const modalRef = this.modalService.open(TimePickerComponent, {
      centered: true,
      windowClass: "time-picker",
    });

    modalRef.result.then(
      (response) => {
        if (response.success) {
          this.timePicker = response.data;
          console.log(this.timePicker);
        }
      },
      () => {}
    );
  }
}
