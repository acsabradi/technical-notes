import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AbstractControl, ReactiveFormsModule } from '@angular/forms';
import { FormControl, FormArray, FormGroup, Validators} from '@angular/forms';
import { SsnValidator, TinValidator } from '../own.validators';
/*
 FormControl : egy vezérlőt repeteneztál (textbox, select ,stb.),
 FormArray: vezérlők gyűjteménye, de beágyzaható másik tömb vagy group is (tömb -> sorszám alapú),
 FormGroup: vezérlők gyűjteménye, de beágyzaható másik tömb vagy group is (objektum -> kulcs alapú),
 Validators: beépített validátorok
*/


@Component({
  selector: 'app-employee-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule], // model vezérelt űrlapok készítéséhez importálni kell ezt a modult
  templateUrl: './employee-form.component.html',
  styleUrl: './employee-form.component.css'
})
export class EmployeeFormComponent {
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
  // model driven -> leképzem az űrlapot egy tulajdonságként
  employeeForm = new FormGroup({
    // elemei mezők repezentálása
    name: new FormControl('',[Validators.required]),
    birthDate: new FormControl('',[Validators.required]),
    sex: new FormControl('',[Validators.required]),
    status: new FormControl('',[Validators.required]),
    // az id-ket (ssn, tin) egy beágyazott formgroup-ot használok
    identifiers: new FormGroup({
      ssn: new FormControl('', [Validators.required, SsnValidator]),
      tin: new FormControl('', [Validators.required, TinValidator])
    })
  });


  // ahhoz, hogy a nézetből könnyebben hozzáférjek egy-egy controlhoz segéd metódusokat készítek
  control(name : string) : AbstractControl | null{
    return this.employeeForm.get(name);
  }


  submit(){
    console.log(this.employeeForm.value);
  }
}
