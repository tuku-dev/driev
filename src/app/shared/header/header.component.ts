import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { LoginComponent } from "src/app/modals/login/login.component";
import { SideNavComponent } from "../side-nav/side-nav.component";
import { NavigationComponent } from "./../navigation/navigation.component";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent {
  assetPath = "../../../assets/";
  isLoggedIn = false;

  constructor(private modalService: NgbModal, private router: Router) {}
  ngOnInit(): void {
    if (localStorage.getItem("loggedIn") === "1") {
      this.isLoggedIn = true;
    }
    // this.openNav();
  }

  openNav() {
    const modalRef = this.modalService.open(NavigationComponent, {
      windowClass: "left fade mobile-menu",
    });
  }

  openProfileMenus() {
    // console.log(this.screenWidth);
    const modalRef = this.modalService.open(SideNavComponent, {
      centered: true,
      windowClass: "side-nav-modal",
    });

    modalRef.componentInstance.content = {
      message: "",
      btnText: "close",
    };
  }
  openLoginModal() {
    const modalRef = this.modalService.open(LoginComponent, {
      centered: true,
      windowClass: "login-modal",
    });

    modalRef.componentInstance.content = {
      message: "",
      btnText: "close",
    };
  }
}
