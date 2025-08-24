import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { PeriodItemVM } from '../../repositories/periods/model';

@Injectable({
  providedIn: 'root'
})
export class GlobalPeriodService implements OnDestroy {
  private activePeriod$ = new BehaviorSubject<PeriodItemVM | null>(null);
  private loading$ = new BehaviorSubject<boolean>(false);
  private sub$ = new Subscription();
  private initialized = false;

  constructor() {}

  ngOnDestroy(): void {
    this.sub$.unsubscribe();
  }

  setActivePeriod(period: PeriodItemVM | null): void {
    this.activePeriod$.next(period);
  }

  getActivePeriod$(): Observable<PeriodItemVM | null> {
    return this.activePeriod$.asObservable();
  }

  getActivePeriod(): PeriodItemVM | null {
    return this.activePeriod$.value;
  }

  setLoading(loading: boolean): void {
    this.loading$.next(loading);
  }

  getLoading$(): Observable<boolean> {
    return this.loading$.asObservable();
  }

  clearPeriod(): void {
    this.activePeriod$.next(null);
  }

  isInitialized(): boolean {
    return this.initialized;
  }

  markAsInitialized(): void {
    this.initialized = true;
  }

  // Este método será llamado desde el componente que tenga acceso al ActivePeriodService
  updatePeriodFromService(period: PeriodItemVM): void {
    this.setActivePeriod(period);
    this.markAsInitialized();
  }
} 