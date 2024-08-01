import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Validators, AbstractControl, ReactiveFormsModule, FormGroup, FormArray, FormControl } from '@angular/forms';
import { DigitsValidator, ExactLengthValidator, ssnValidator } from '../digits.validator';
// FG: a kulcs-érték párok tárolása (az űrlap, illetve a beágyazott elemek)
// FA: most nem használjunk, dinamikus űrlapok esetén szokás használni
// FC: FormControl, egy-egy beviteli mező


@Component({
  selector: 'app-model-driven-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule], // reaktív űrlap készítéséhez kell
  templateUrl: './model-driven-form.component.html',
  styleUrl: './model-driven-form.component.css'
})
export class ModelDrivenFormComponent {
  // nemek, dinamikusan dolgozzuk fel a nézetben (radio gombok)
  sexes = [
    { id: 'M', name: 'férfi'},
    { id: 'F', name: 'nő'}
  ];
  // családi állapotok, dinamikusan dolgozzuk fel a nézetben (select)
  statuses = [
    { id: 1, name: 'egyedülálló'},
    { id: 2, name: 'házas'},
    { id: 3, name: 'elvált'},
    { id: 4, name: 'özvegy'},
  ];

  // reaktív űrlapok esetén explicit módon leírom az űrlap szerkezetét a modell osztályban
  // paraméerében egy olbjektumot vár, ami leírja az űrlapot
  employeeForm = new FormGroup({
    // kell egy mező, amelyben a felhasználó neve lesz
    ename: new FormControl('', [Validators.required, Validators.minLength(3)]),
    ids: new FormGroup({
      // Digits validátor -> ellenőrzi, hogy csak számjegyek
      // ExactLength validátor -> ellenőrizi a pontos karakterszámot
      ssn: new FormControl('', [/*Validators.required, DigitsValidator, ExactLengthValidator(9)*/ssnValidator('EN')])
    }),
    birthDate: new FormControl('', [Validators.required]),
    sex: new FormControl('', [Validators.required]),
    mStatus: new FormControl('', [Validators.required])
  });

  /*
    abstract control:
      - valid: eleget tesz a validációs szabályoknak
      - touched: kapott fókuszt és el is veszítette a mező
      - dirty: módosították a mező értékét a felületen keresztül

  */


  submit(){
    console.log(this.employeeForm);
  }

  c(controlName : string) : any{
    return this.employeeForm.controls[controlName as keyof object];
  }
}
