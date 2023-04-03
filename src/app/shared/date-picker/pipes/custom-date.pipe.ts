import { Pipe, PipeTransform } from "@angular/core";
import * as moment from "moment";

@Pipe({
  name: "customDate",
  pure: false
})
export class CustomDatePipe implements PipeTransform {
  transform(date: Date | string, format: string = ""): string {
    let gotDate = new Date(date);
    return moment(gotDate).format(format);
  }
}
