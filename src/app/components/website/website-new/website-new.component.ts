import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { WebsiteService } from '../../../services/website.service.client';
import { Website } from '../../../models/website.model.client'

@Component({
  selector: 'app-website-new',
  templateUrl: './website-new.component.html',
  styleUrls: ['./website-new.component.css']
})
export class WebsiteNewComponent implements OnInit {

  userId: String;
  websites: Website[];
  newWebsite: Website = {_id:"", name:"", developerId:"", description:""};

  constructor(private websiteService: WebsiteService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params: any) => {
        this.userId = params.uid;
        this.websiteService.findWebsitesByUser(this.userId).subscribe(
          (websites: Website[]) => {
            this.websites = websites;
          }
        );
      }
    );
  }

  createWebsite(website) {
    if (website.name.trim() != "" && website.description.trim() != "") {
      this.websiteService.createWebsite(this.userId, website).subscribe(
        (website: Website) => {
          const url: any = '/user/' + this.userId + '/website';
          this.router.navigate([url]);
        },
        (error: any) => {
          // Place an error message here
        }
      );
    }
  }
}
