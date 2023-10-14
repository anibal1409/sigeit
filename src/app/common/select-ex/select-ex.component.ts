import { coerceBooleanProperty } from '@angular/cdk/coercion';
import {
  ChangeDetectorRef,
  Component,
  forwardRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  Validator,
} from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatFormFieldControl } from '@angular/material/form-field';

import {
  map,
  Observable,
  startWith,
  Subject,
} from 'rxjs';

import { searchCallback } from './search-callback';

@Component({
  selector: 'app-select-ex',
  templateUrl: './select-ex.component.html',
  styleUrls: ['./select-ex.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectExComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: SelectExComponent,
      multi: true,
    },
    { 
      provide: MatFormFieldControl, 
      useExisting: SelectExComponent,
     }
  ],
  host: {
   '[class.example-floating]': 'shouldLabelFloat',
   '[id]': 'id',
 }
})
export class SelectExComponent implements OnInit, OnChanges, ControlValueAccessor, MatFormFieldControl<number>, Validator, OnDestroy {
  @ViewChild('inputAutoComplete') inputAutoComplete: any;
  @Input()
  label: string = '';

  
  private _placeholder!: string;
  @Input()
  get placeholder(): string { return this._placeholder; }
  set placeholder(value: string) {
    this._placeholder = value;
    this.stateChanges.next();
  }

  @Input()
  items: Array<any> = [];

  @Input()
  optionValueField: string = 'id';

  @Input()
  optionTextField: string = 'name';

  @Input()
  displayFn(key: any): string {
    if (key === null) {
      return '';
    }
    
    let item = this.items.find(i => i[this.optionValueField] === key);
  
    return item ? item[this.optionTextField] : '';
  }
  @Input()
  get required(): boolean { return this._required; }
  set required(value: boolean) {
    this._required = coerceBooleanProperty(value);
    this.stateChanges.next();
  }
  private _required = false;

  @Input()
  get disabled(): boolean { return this._disabled; }
  set disabled(value: boolean) {
    this._disabled = coerceBooleanProperty(value);
    this.stateChanges.next();
  }
  private _disabled = false;

  @Input()
  get value(): number {
    return this._val;
  }
  set value(val: number) {
    this._val = val;
  }
  _val: number = 0;


  myControl = new FormControl();
  filteredOptions!: Observable<any[]>;
  isDisabled = false;

  autofilled: boolean | undefined;
  userAriaDescribedBy: string | undefined;

  stateChanges = new Subject<void>();
  focused = false;
  ngControl = null;
  controlType = 'app-select-ex';
  id = `app-select-ex`;
  describedBy = '';
  errorState = false;

  get empty() {
    return !this._val;
  }

  get shouldLabelFloat() { return this.focused || !this.empty; }
  // get errorState() { return !this.empty; }

  onChange = (_: any) => { };
  onTouch = () => { };

  constructor(private changeDetectorRef: ChangeDetectorRef) {}

  ngOnDestroy(): void {
    this.stateChanges.complete();
  }

  registerOnValidatorChange?(fn: () => void): void {
  }
  
  setDescribedByIds(ids: string[]): void {}

  onContainerClick(event: MouseEvent): void {}

  writeValue(id: number): void {
    this._val = id;
    this.myControl.setValue(id);
    this.changeDetectorRef.detectChanges();
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled =  isDisabled;
    if (isDisabled) {
      this.myControl.disable({emitEvent: false});
    } else {
      this.myControl.enable({emitEvent: false});
    }
  }

  validate({ value }: FormControl): any {
    const error = !value ? {
      required: true
    } : null;
    this. errorState = !!error;
    return error;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['items'].currentValue) {
      this.filter();
      this.myControl.setValue(this._val);
      this.changeDetectorRef.detectChanges();
    }
  }

  ngOnInit() {
    this.filter();
  }

  private filter(): void {
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map((name) => {
          
          let items = this.items.slice();
          if (name) {
            
            items = items.filter(item => {
              return searchCallback(name?.toString(), item[this.optionTextField]) || item[this.optionValueField] === name;
            });
          }

          return items;
        })
      );
  }

  clearInput(evt: any): void {
    evt.stopPropagation();
    this.myControl?.reset();
    this.inputAutoComplete?.nativeElement.focus();
    this._val = 0;
    this.onTouch();
    this.onChange(this._val);
  }

  selectOption(event: MatAutocompleteSelectedEvent): void {
    this._val = event.option.value;
    this.onTouch();
    this.onChange(this._val);
  }
}
