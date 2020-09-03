import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ApiConfig } from '../../api.config';
import { CreatePostDto } from './models/create-post-dto';
import { PostDto } from './models/post-dto';
import { EditPostDto } from './models/edit-post-dto';

@Injectable()
export class PostResourceService {
  private readonly URL = `${ApiConfig.url}/posts`;

  constructor(
    private httpClient: HttpClient
  ) {}

  public findAll(): Observable<PostDto[]> {
    return this.httpClient.get(this.URL) as Observable<PostDto[]>;
  }

  public create(createPostDto: CreatePostDto): Observable<PostDto> {
    return this.httpClient.post(this.URL, createPostDto) as Observable<PostDto>;
  }

  public edit(editPostDto: EditPostDto): Observable<PostDto> {
    return this.httpClient.put(this.URL, editPostDto) as Observable<PostDto>;
  }

  public delete(postId: number): Observable<any> {
    return this.httpClient.delete(`${this.URL}/${postId}`);
  }
}
