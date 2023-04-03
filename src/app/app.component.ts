import { Component } from "@angular/core";
import {
  Router,
  NavigationStart,
  NavigationError,
  NavigationEnd,
} from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "driev";
  currentRout: string;

  constructor(private router: Router) {
    //Router subscriber
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        // console.log("Started");
      }

      if (event instanceof NavigationError) {
        console.error(event.error);
      }

      if (event instanceof NavigationEnd) {
        this.currentRout = window.location.pathname;
        // console.log(this.currentRout);
      }
    });
  }
  ngOnInit(): void {
    let otpVerified = localStorage.getItem("otpVerified");
    if (otpVerified === "1") {
      console.log("otpVerified");
    }
  }
}
