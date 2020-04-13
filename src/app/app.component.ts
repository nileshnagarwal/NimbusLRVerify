import { LrVerifyService } from './../services/lr-verify.service';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private service: LrVerifyService) {}

  lrVerifyForm = new FormGroup({
    lr_no: new FormControl('', Validators.required),
    verification_no: new FormControl('', Validators.required),
  });

  private lr: object;
  public isVerified: boolean;
  private err;
  private unknownErr;

  verifyLr(lrVerifyForm) {
    this.service.lrVerify(lrVerifyForm.value)
      .subscribe(res => {
        if (res.body['lr_no_id']) {
          this.err = '';
          this.isVerified = true;
          this.lr = res.body;
        } else {
          this.isVerified = false;
          this.unknownErr = 'Some Error Occured';
        }
      }, err => {
        this.err = err;
        this.isVerified = false;
        this.lr = null;
      }
    );
  }

  clearForm() {
    this.lrVerifyForm.reset();
  }
}
