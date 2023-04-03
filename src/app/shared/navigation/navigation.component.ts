import { Router } from "@angular/router";
import { SideNavComponent } from "./../side-nav/side-nav.component";
import { Component, HostListener } from "@angular/core";
import { NgbActiveModal, NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { LoginComponent } from "src/app/modals/login/login.component";

@Component({
  selector: "app-navigation",
  templateUrl: "./navigation.component.html",
  styleUrls: ["./navigation.component.scss"],
})
export class NavigationComponent {
  navs = [];
  isLoggedIn = false;
  screenHeight: number;
  screenWidth: number;
  constructor(
    public modalService: NgbModal,
    private router: Router,
    private modalRef: NgbActiveModal
  ) {
    this.getScreenSize();
  }
  ngOnInit(): void {
    this.navs = [
      { name: "Home", link: "./" },
      {
        name: "Pricing",
        link: "/pricing",
      },
      {
        name: "Support",
        link: "/support",
      },
      {
        name: "Contact Us",
        link: "/contact-us",
      },
      {
        name: "About Us",
        link: "/about-us",
      },
    ];
    // this.openLoginModal();

    if (localStorage.getItem("loggedIn") === "1") {
      this.isLoggedIn = true;
    }
  }

  @HostListener("window:resize", ["$event"])
  getScreenSize(event?: any) {
    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;
  }

  openProfileMenus() {
    if (this.screenWidth < 991) {
      // console.log(this.screenWidth);
      const modalRef = this.modalService.open(SideNavComponent, {
        centered: true,
        windowClass: "side-nav-modal",
      });

      modalRef.componentInstance.content = {
        message: "",
        btnText: "close",
      };
    } else {
      this.router.navigate(["/profile"]);
    }
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

  close() {
    if (this.screenWidth < 991) {
      this.modalRef.close();
    }
  }
}
