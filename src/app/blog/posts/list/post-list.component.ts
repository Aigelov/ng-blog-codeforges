import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { MatDialog, MatSnackBar } from '@angular/material';
import { finalize } from 'rxjs/operators';
import * as _ from 'lodash';
import { PostService } from '../services/post.service';
import { PostDialogComponent } from '../dialogs/post-dialog.component';
import { PostDto } from '../services/models/post-dto';
import { EditPostDto } from '../services/models/edit-post-dto';
import { ConfirmationDialogComponent } from '../../dialogs/confirmation-dialog.component';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})

export class PostListComponent implements OnInit {

  public loading = false;
  public displayedColumns: string[] = ['id', 'title', 'subTitle', 'imageUrl', 'action'];
  private postListSubject: BehaviorSubject<PostDto[]> = new BehaviorSubject<PostDto[]>(null);

  constructor(
    private postService: PostService,
    private matDialog: MatDialog,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.loading = true;
    this.postService.getAllPostItems()
      .pipe(finalize(() => this.loading = false))
      .subscribe(postListItems => this.postListSubject.next(postListItems));
  }

  public getPostList(): Observable<PostDto[]> {
    return this.postListSubject.asObservable();
  }

  public editPost(editPostDto: EditPostDto) {
    const ref = this.matDialog.open(PostDialogComponent, {
      width: '600px',
      data: { editPostDto }
    });

    ref.afterClosed().subscribe((editedPost: PostDto) => {
      if (editedPost) {
        const list = this.postListSubject.getValue();
        const postIndex = _.findIndex(list, post => post.id === editedPost.id);
        list[postIndex] = editedPost;

        this.postListSubject.next(_.cloneDeep(list));

        this.snackBar.open(`The Post ${editedPost.title} has been updated successfully`, null, {
          duration: 2500,
          horizontalPosition: 'center',
          verticalPosition: 'top'
        });
      }
    });
  }

  public deletePost(postDto: PostDto) {
    const ref = this.matDialog.open(ConfirmationDialogComponent, { width: '600px' });

    ref.afterClosed().subscribe((canContinue: boolean) => {
      if (canContinue) {
        this.loading = true;
        this.postService.deletePost(postDto.id)
          .pipe(finalize(() => this.loading = false))
          .subscribe(() => {
            const list = this.postListSubject.getValue();
            _.remove(list, post => post.id === postDto.id);

            this.postListSubject.next(_.cloneDeep(list));

            this.snackBar.open(`The Post ${postDto.title} has been removed successfully`, null, {
              duration: 2500,
              horizontalPosition: 'center',
              verticalPosition: 'top'
            });
          });
      }
    });
  }

  public createPost() {
    const ref = this.matDialog.open(PostDialogComponent, { width: '600px' });

    ref.afterClosed().subscribe((newPost: PostDto) => {
      if (newPost) {
        const list = this.postListSubject.getValue();
        list.unshift(newPost);

        this.postListSubject.next(_.cloneDeep(list));

        this.snackBar.open(`The Post ${newPost.title} has been created successfully`, null, {
          duration: 2500,
          horizontalPosition: 'center',
          verticalPosition: 'top'
        });
      }
    });
  }
}
