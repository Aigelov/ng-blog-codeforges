import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { finalize } from 'rxjs/operators';
import * as _ from 'lodash';
import { CreatePostDto } from '../services/models/create-post-dto';
import { PostService } from '../services/post.service';
import { EditPostDto } from '../services/models/edit-post-dto';
import { PostDto } from '../services/models/post-dto';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-create-post-dialog',
  templateUrl: 'post-dialog.component.html'
})

export class PostDialogComponent implements OnInit {

  public postModel: CreatePostDto | EditPostDto = {} as CreatePostDto | EditPostDto;
  public loading = false;
  public editing = false;

  constructor(
    private postService: PostService,
    private dialogRef: MatDialogRef<PostDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { editPostDto: EditPostDto }
  ) {
  }

  ngOnInit() {
    this.editing = !!_.get(this.data, 'editPostDto');

    if (this.editing) {
      this.postModel = _.cloneDeep(this.data.editPostDto);
    }
  }

  public submit(form: NgForm) {
    if (form.valid) {
      this.loading = true;
      this.handleAfterSubmit(this.editing
        ? this.postService.editPost(this.postModel as EditPostDto)
        : this.postService.createPost(this.postModel));
    }
  }

  private handleAfterSubmit(observable: Observable<PostDto>) {
    return observable
      .pipe(finalize(() => this.loading = false))
      .subscribe((response: PostDto) => {
        this.dialogRef.close(response);
      });
  }
}
