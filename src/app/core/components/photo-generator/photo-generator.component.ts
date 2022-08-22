import { Component, OnInit } from '@angular/core';

import { GetPhotoService } from '../../services/get-photo.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-photo-generator',
  templateUrl: './photo-generator.component.html',
  styleUrls: ['./photo-generator.component.css'],
})
export class PhotoGeneratorComponent implements OnInit {
  photoToDisplay$!: Observable<string>;

  constructor(private photoService: GetPhotoService) {}

  ngOnInit(): void {}

  getRandomPhoto(): void {
    this.photoToDisplay$ = this.photoService.getRandomPhoto();
  }
}
