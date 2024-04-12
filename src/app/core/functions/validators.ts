import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

// export class MyValidations() {
//   noAllowedHobbies(){}
// }

export function noWhiteSpaceValidator(control: AbstractControl): ValidationErrors | null {
  // let strTest = '   Pippo   ';
  // let strTestClean = strTest.trim(); // Output: 'Pippo';
  
  if (control.value?.trim() === '')
    return { 'whiteSpace': true }
  else
    return null
}

// Factory Functions

export function noAllowedCountriesValidator(forbiddenCountries: Array<string>): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
  if (forbiddenCountries?.includes(control.value?.trim().toLowerCase()))
    return { 'forbiddenCountry': true }
  else
    return null
  }
}