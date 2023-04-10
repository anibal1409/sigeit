import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { StateService } from './common/state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'sigeit';
  loading = true;
  private sub$ = new Subscription();

  constructor(
    private stateService: StateService,
    private cdRef: ChangeDetectorRef
  ) {}
  ngOnInit(): void {
    this.sub$.add(
      this.stateService.getLoading$().subscribe((loading) => {
        this.loading = loading;
        this.cdRef.detectChanges();
      })
    );
    return;
  }
  ngOnDestroy(): void {
    this.sub$.unsubscribe();
  }
}
