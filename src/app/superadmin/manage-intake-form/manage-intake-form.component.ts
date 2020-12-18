import { Component, OnInit, ViewChild } from '@angular/core'; 
import { FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormGroup} from '@angular/forms';
import { BiodataService } from '../../service/biodata.service'

@Component({
  selector: 'app-manage-intake-form',
  templateUrl: './manage-intake-form.component.html',
  styleUrls: ['./manage-intake-form.component.css']
})
export class ManageIntakeFormComponent implements OnInit {


  viewemail: any; 

  viewname: any; 

  viewphone: any;
  
  
  datalist: any; 
 
  myForm: FormGroup | any 

 
  constructor( private _service:BiodataService,private formBuilder: FormBuilder) {
    
   }

  ngOnInit(): void { 

    this.myForm = this.formBuilder.group({          
      firstName:new FormControl('', Validators.required),  
      email:new FormControl('', Validators.required),  
      phoneNumber:new FormControl('', Validators.required),
 
 }) 
      this._service.getData().subscribe( res=> {
        this.datalist = res 
      }) 
  }

  onSubmits()
    { 
      var formdATas = this.myForm.value; 
      this._service.createData(formdATas).subscribe( des => {
        this._service.getData().subscribe( res=> {
          this.datalist = res 
        }) 
      }) 
      this.clear()
    }


    onDelete(data:any)
    {
      this._service.deleteData(data).subscribe( res=>
        {
          this._service.getData().subscribe( res=> {
            this.datalist = res 
          }) 
        })
    }
    onView(data:any)
    {
      this.viewname = data.firstName;
      this.viewemail = data.email;
      this.viewphone = data.phoneNumber
    }

  clear()
  {
    this.myForm.reset();
  }
 
}
