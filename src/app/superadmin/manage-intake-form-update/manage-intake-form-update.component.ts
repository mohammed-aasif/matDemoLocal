import { Component, OnInit, ViewChild } from '@angular/core'; 
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Router ,ActivatedRoute } from '@angular/router'; 
import { BiodataService } from '../../service/biodata.service'
@Component({
  selector: 'app-manage-intake-form-update',
  templateUrl: './manage-intake-form-update.component.html',
  styleUrls: ['./manage-intake-form-update.component.css']
})
export class ManageIntakeFormUpdateComponent implements OnInit {
 

  constructor(private _route: ActivatedRoute, private _smallRoute:Router ,  private _serve:BiodataService,private formBuilder: FormBuilder ) { }

  updateForms:FormGroup | any

  firstName:any;
  email:any;
  phoneNumber:any;
  showsuccess = false

  ngOnInit(): void { 


    
    this.updateForms = this.formBuilder.group({          
      firstName:new FormControl('', Validators.required),  
      email:new FormControl('', Validators.required),  
      phoneNumber:new FormControl('', Validators.required),
 
 }) 

    this._serve.getUserServiceList(this._route.snapshot.params.id).subscribe( res =>{
     this.updateForms.patchValue({
       "firstName":res.firstName,
       "email":res.email,
       "phoneNumber":res.phoneNumber
     })
    })
  } 


  onUpdate()
  {
     this._serve.updateUsers(this._route.snapshot.params.id,this.updateForms.value).subscribe( res =>
      {
        this.showsuccess = true;
        this._smallRoute.navigate(['/manage-intake-form'])
        console.log(res)
      })
  }
}
