import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  result_str: string = "Some text";
  show_recs: boolean = false;

  constructor(private router: Router) {}

  onGetRecommendationClick() {
    // Navigate to the recommendation page
    this.router.navigate(['/tabs/tab4']);
  }
}
