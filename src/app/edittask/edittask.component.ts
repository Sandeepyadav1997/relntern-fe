import { Component, Inject } from '@angular/core';
import { InternService } from '../intern.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormControl, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-edittask',
  templateUrl: './edittask.component.html',
  styleUrls: ['./edittask.component.css']
})
export class EdittaskComponent {

  //  tasks = [
  //    {value: 'In-Progress-0', viewValue: 'In-Progress'},
  //    {value: 'completed-1', viewValue: 'Completed'},
     
  //];
  statusList = ["Inprogress" , "Completed"];
  
register(_t36: NgForm) {
throw new Error('Method not implemented.');
}
navigateTo() {
throw new Error('Method not implemented.');
}
logout() {
throw new Error('Method not implemented.');
}
isMentor: any;
goToPage(arg0: string) {
throw new Error('Method not implemented.');
}

  registerForm: any;
  internId:any;
  // mentor_id : any;
  mentoruserid: any;
  mentor_id: any;
roledesc: any;
 
  constructor(private internService: InternService, private router: Router, private matDialog: MatDialog,    @Inject(MAT_DIALOG_DATA) public data: { task: any },
    private formBuilder: FormBuilder,private routes : ActivatedRoute)
    {
      this.registerForm = this.formBuilder.group({
        
        task: ['', Validators.required],
        description: ['', Validators.required],
        start: ['', Validators.required],
        end: ['', Validators.required],
        status: ['', Validators.required],
        // mentor_id: []
      });
    }
    updatetask(){
      this.matDialog.closeAll();
        this.router.navigate(['/list']);
      console.log(this.registerForm.value);
      this.internService.updateTask(this.data.task.id,this.registerForm.value).subscribe ((response: any) =>{
        console.log (response);
        
       
      })
      this.internService.getActiveInterns().subscribe(
        (resp) => {
          console.log(resp);
          const internDetails: any = resp;
          //this.router.navigate(['view-task/',internDetails["id"]]);
      this.matDialog.closeAll();
        },
        (err) => {
          console.log(err);
        }
      );
      

    }

    closeDialog(){
      this.matDialog.closeAll();
    }

}
