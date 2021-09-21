import { FormGroupDirective, NgControl, NgForm } from '@angular/forms';
import { ErrorStateMatcher, mixinErrorState } from '@angular/material/core';
import { Constructor } from '@angular/material/core/common-behaviors/constructor';
import { CanUpdateErrorState } from '@angular/material/core/common-behaviors/error-state';

// Boilerplate for applying mixins to FileInput
/** @docs-private */
export class FileInputBase {
  constructor(
    public _defaultErrorStateMatcher: ErrorStateMatcher,
    public _parentForm: NgForm,
    public _parentFormGroup: FormGroupDirective,
    public ngControl: NgControl
  ) {}
}

/**
 * Allows to use a custom ErrorStateMatcher with the file-input component
 */
export const FileInputMixinBase: Constructor<CanUpdateErrorState> & typeof FileInputBase = mixinErrorState(FileInputBase);
