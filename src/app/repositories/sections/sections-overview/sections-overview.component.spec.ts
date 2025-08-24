import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterTestingModule } from '@angular/router/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { SectionsOverviewComponent } from './sections-overview.component';
import { SelectExModule } from '../../../common/select-ex';
import { SectionsService } from '../sections.service';
import { StateService, UserStateService } from '../../../common';

describe('SectionsOverviewComponent', () => {
  let component: SectionsOverviewComponent;
  let fixture: ComponentFixture<SectionsOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionsOverviewComponent ],
      imports: [
        ReactiveFormsModule,
        MatTableModule,
        MatFormFieldModule,
        MatSelectModule,
        MatButtonModule,
        MatIconModule,
        MatTooltipModule,
        RouterTestingModule,
        NoopAnimationsModule,
        SelectExModule
      ],
      providers: [
        {
          provide: SectionsService,
          useValue: {
            getLoading$: () => ({ subscribe: () => {} }),
            getActivePeriod$: () => ({ subscribe: () => {} }),
            getDepartaments$: () => ({ subscribe: () => {} }),
            getSections$: () => ({ subscribe: () => {} })
          }
        },
        {
          provide: StateService,
          useValue: {
            setLoading: () => {}
          }
        },
        {
          provide: UserStateService,
          useValue: {
            getDepartmentId: () => 1,
            getSchoolId: () => 1
          }
        }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionsOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have correct columns configuration', () => {
    expect(component.columns).toBeDefined();
    expect(component.columns.length).toBe(6);
    expect(component.columns.find(col => col.field === 'code')).toBeDefined();
    expect(component.columns.find(col => col.field === 'name')).toBeDefined();
    expect(component.columns.find(col => col.field === 'semester')).toBeDefined();
    expect(component.columns.find(col => col.field === 'sectionName')).toBeDefined();
    expect(component.columns.find(col => col.field === 'teacherName')).toBeDefined();
    expect(component.columns.find(col => col.field === 'capacity')).toBeDefined();
  });

  it('should have semester column with grouping restriction', () => {
    const semesterColumn = component.columns.find(col => col.field === 'semester');
    expect(semesterColumn).toBeDefined();
    expect(semesterColumn?.showWhenGroupedBy).toBe('teacherName');
  });

  it('should update displayed columns when grouping changes', () => {
    // Inicialmente agrupado por semestre, la columna semestre no debe mostrarse
    expect(component.displayedColumns).not.toContain('semester');
    
    // Cambiar a agrupación por profesor
    component.groupByCtrl.setValue('teacherName');
    component.updateDisplayedColumns();
    
    // Ahora la columna semestre debe mostrarse
    expect(component.displayedColumns).toContain('semester');
  });

  it('should have equalPrevious method for avoiding repeated information', () => {
    expect(component.equalPrevious).toBeDefined();
    expect(typeof component.equalPrevious).toBe('function');
  });

  it('should return false for first row in equalPrevious', () => {
    const mockSection = { id: 1, code: 'TEST001', name: 'Test Subject' };
    const mockData = [mockSection];
    
    const result = component.equalPrevious(mockSection, 'code', mockData);
    expect(result).toBe(false);
  });

  it('should have correct grouping options', () => {
    expect(component.groupsBy).toBeDefined();
    expect(component.groupsBy.length).toBe(2);
    expect(component.groupsBy.find(g => g.field === 'semester')).toBeDefined();
    expect(component.groupsBy.find(g => g.field === 'teacherName')).toBeDefined();
  });
}); 