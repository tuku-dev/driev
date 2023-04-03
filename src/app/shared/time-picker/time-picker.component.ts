import { Component } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-time-picker",
  templateUrl: "./time-picker.component.html",
  styleUrls: ["./time-picker.component.scss"],
})
export class TimePickerComponent {
  theTime = "00 : 00";
  startHour = 9;
  endHour = 20;
  incrementMinutes = 30;
  timeList = [];

  constructor(private modalRef: NgbActiveModal) {}
  ngOnInit(): void {
    this.prepareTimeList();
  }

  prepareTimeList() {
    for (let hour = this.startHour; hour <= this.endHour; hour++) {
      for (let minute of [0, this.incrementMinutes]) {
        if (hour === this.endHour && minute === this.incrementMinutes) {
          // Exclude 20:30
          continue;
        }
        const timeStr = {
          value: `${hour.toString().padStart(2, "0")}:${minute
            .toString()
            .padStart(2, "0")}`,
          selected: false,
        };
        this.timeList.push(timeStr);
      }
    }
    console.log(this.timeList);
  }

  selectThis(item) {
    console.log(item);
    for (let time of this.timeList) {
      time.selected = false;
      if (time.value === item.value) {
        time.selected = true;
      }
    }
  }

  close() {
    this.modalRef.close({ success: false });
  }
  ok() {
    this.modalRef.close({ success: true, data: this.theTime });
  }
}
