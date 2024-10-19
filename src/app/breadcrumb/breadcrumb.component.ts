import {Component} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";
import {filter} from "rxjs/operators";

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.scss'
})
export class BreadcrumbComponent {
  breadcrumbs: { label: string, url: string }[] = [];

  constructor(private router: Router) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.updateBreadcrumbs();
      });
  }

  updateBreadcrumbs() {
    const currentUrl = this.router.url.split('/').filter(Boolean);
    this.breadcrumbs = [];

    const baseBreadcrumbs = [
      {label: 'Home', url: '/'},
      {label: 'Computers', url: '/computers'},
      {label: 'Laptops', url: '/laptops'},
      {label: 'Gaming Laptops', url: '/gaming-laptops'}
    ];

    if (currentUrl.includes('gaming-laptops')) {
      this.breadcrumbs.push(baseBreadcrumbs[0], baseBreadcrumbs[1], baseBreadcrumbs[2], baseBreadcrumbs[3]);
    } else if (currentUrl.includes('laptops')) {
      this.breadcrumbs.push(baseBreadcrumbs[0], baseBreadcrumbs[1], baseBreadcrumbs[2]);
    } else if (currentUrl.includes('computers')) {
      this.breadcrumbs.push(baseBreadcrumbs[0], baseBreadcrumbs[1]);
    } else {
      this.breadcrumbs.push(baseBreadcrumbs[0]);
    }
  }
}
