import { Component } from "@angular/core";
import * as moment from "moment";

@Component({
  selector: "app-notification",
  templateUrl: "./notification.component.html",
  styleUrls: ["./notification.component.scss"],
})
export class NotificationComponent {
  notificationList = [];
  constructor() {}
  ngOnInit(): void {
    this.notificationList = [
      {
        message: "Dolores ullam alias impedit placeat consequatur.",
        dated: "Sun Mar 19 2023 21:41:55 GMT+0530 (India Standard Time)",
        viewed: false,
      },
      {
        message: "Et quae quo voluptate impedit.",
        dated: "Sun Mar 19 2023 06:49:42 GMT+0530 (India Standard Time)",
        viewed: false,
      },
      {
        message: "Est voluptas assumenda aut sunt iusto sed fugit ipsa.",
        dated: "Sun Mar 19 2023 08:30:57 GMT+0530 (India Standard Time)",
        viewed: false,
      },
      {
        message:
          "Ea cum saepe delectus voluptatibus vel deleniti itaque labore.",
        dated: "Sun Mar 19 2023 18:17:18 GMT+0530 (India Standard Time)",
        viewed: true,
      },
      {
        message: "Laboriosam reiciendis minima facilis culpa et.",
        dated: "Tue Apr 19 2022 18:14:16 GMT+0530 (India Standard Time)",
        viewed: true,
      },
      {
        message: "Ullam totam blanditiis.",
        dated: "Fri Apr 08 2022 17:11:30 GMT+0530 (India Standard Time)",
        viewed: false,
      },
      {
        message: "Iste est dolore magnam hic.",
        dated: "Fri Jun 24 2022 18:52:18 GMT+0530 (India Standard Time)",
        viewed: false,
      },
      {
        message: "Iusto quia aut quaerat laudantium quod quo.",
        dated: "Mon Feb 27 2023 10:56:45 GMT+0530 (India Standard Time)",
        viewed: true,
      },
      {
        message:
          "Rerum nulla impedit consequatur tempora tempore doloremque dicta voluptas.",
        dated: "Mon May 30 2022 01:38:33 GMT+0530 (India Standard Time)",
        viewed: false,
      },
      {
        message: "Voluptatem laboriosam maxime quo.",
        dated: "Thu Jun 23 2022 16:54:46 GMT+0530 (India Standard Time)",
        viewed: true,
      },
      {
        message:
          "Tempore voluptatem alias saepe qui omnis rerum explicabo adipisci.",
        dated: "Fri Oct 07 2022 16:13:43 GMT+0530 (India Standard Time)",
        viewed: true,
      },
      {
        message: "Quod quisquam sunt et eos enim fugiat veniam.",
        dated: "Sun Jul 03 2022 19:11:42 GMT+0530 (India Standard Time)",
        viewed: true,
      },
      {
        message: "Sit et quibusdam suscipit asperiores voluptas vel.",
        dated: "Sat Oct 01 2022 17:34:32 GMT+0530 (India Standard Time)",
        viewed: true,
      },
      {
        message: "Sit illum vero nobis tempora est.",
        dated: "Fri Nov 04 2022 15:30:18 GMT+0530 (India Standard Time)",
        viewed: true,
      },
      {
        message: "Cumque cupiditate nemo.",
        dated: "Mon May 30 2022 19:45:17 GMT+0530 (India Standard Time)",
        viewed: true,
      },
      {
        message: "Et et optio sunt est esse laborum labore dignissimos.",
        dated: "Wed Jun 15 2022 01:57:38 GMT+0530 (India Standard Time)",
        viewed: true,
      },
      {
        message: "Incidunt numquam minus totam et illum distinctio.",
        dated: "Mon Nov 28 2022 05:55:16 GMT+0530 (India Standard Time)",
        viewed: true,
      },
      {
        message: "Expedita explicabo non repellat facere.",
        dated: "Fri Sep 30 2022 18:32:09 GMT+0530 (India Standard Time)",
        viewed: true,
      },
      {
        message: "Sit facere minus et nostrum ut quo deserunt.",
        dated: "Wed Jul 27 2022 19:06:21 GMT+0530 (India Standard Time)",
        viewed: true,
      },
    ];
  }

  dateFormat(dateTimeStr) {
    const now: Date = new Date();
    const inputTimestamp: number = Date.parse(dateTimeStr);
    const inputDateTime: Date = new Date(inputTimestamp);
    const timeDiff: number = Math.abs(inputDateTime.getTime() - now.getTime());
    const hoursDiff: number = Math.ceil(timeDiff / (1000 * 60 * 60));

    if (hoursDiff <= 1) {
      return "now";
    } else if (hoursDiff <= 24) {
      return `${hoursDiff} hours ago`;
    } else if (inputDateTime.toDateString() === now.toDateString()) {
      return "today";
    } else if (
      inputDateTime.toDateString() ===
      new Date(now.getTime() - 86400000).toDateString()
    ) {
      return "yesterday";
    } else if (
      inputDateTime.toDateString() ===
      new Date(now.getTime() + 86400000).toDateString()
    ) {
      return "tomorrow";
    } else {
      return inputDateTime.toLocaleDateString();
    }
  }
}
