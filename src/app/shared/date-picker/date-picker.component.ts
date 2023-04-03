import { Component, Input } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import * as moment from "moment";

@Component({
  selector: "app-date-picker",
  templateUrl: "./date-picker.component.html",
  styleUrls: ["./date-picker.component.scss"],
})
export class DatePickerComponent {
  @Input() content: any;
  theDate: moment.Moment;
  dates: Date[][];
  today = moment().format("D");
  thisYear = moment().format("YYYY");
  yearsList = [];
  view = 1;

  constructor(private modalRef: NgbActiveModal) {
    this.theDate = moment();
    this.updateDates();
    this.prepareYears();
  }

  updateDates(): void {
    const numDays = this.theDate.daysInMonth();
    const firstDayOfWeek = this.theDate.clone().startOf("month").day();
    this.dates = Array(6)
      .fill(0)
      .map((_, i) => {
        const row = Array(7).fill(0);
        const offset = i * 7;
        for (let j = 0; j < 7; j++) {
          const index = offset + j;
          if (index >= firstDayOfWeek && index < firstDayOfWeek + numDays) {
            const t = this.theDate.clone().date(index - firstDayOfWeek + 1);
            row[j] = {
              date: moment(t).format("D"),
              ISO: t.toISOString(),
              selected: false,
            };
          }
        }
        return row;
      });
    // console.log(this.theDate);
  }

  previousMonth(): void {
    this.theDate = this.theDate.subtract(1, "month");
    this.updateDates();
  }

  nextMonth(): void {
    this.theDate = this.theDate.add(1, "month");
    this.updateDates();
  }

  selectThis(
    clickedDate: {
      date: moment.Moment;
      ISO: string;
      selected: boolean;
    },
    type: string
  ): void {
    console.log(clickedDate);

    if (type === "date") {
      for (const week of this.dates) {
        for (const dateData of week) {
          if (dateData) {
            dateData["selected"] =
              dateData["date"] === clickedDate.date ? true : false;
          }
        }
      }
    } else if (type === "year") {
      for (const yearData of this.yearsList) {
        yearData.selected = false;
        if (clickedDate["year"] === yearData.year) {
          yearData.selected = true;
        }
      }
    }
    this.theDate = moment(clickedDate.ISO);
    this.updateDates();
  }

  prepareYears(): void {
    this.yearsList = [];
    let thisYear = moment();
    for (let i = 0; i < 15; i++) {
      const year = moment(thisYear).add(i, "year");
      this.yearsList.push({
        year: moment(year).format("YYYY"),
        ISO: year.toISOString(),
        selected: false,
      });
    }
  }

  close() {
    this.modalRef.close({ success: false });
  }
  ok() {
    this.modalRef.close({ success: true, data: this.theDate });
  }
}
