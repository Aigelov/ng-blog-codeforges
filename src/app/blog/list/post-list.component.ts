import { Component, OnInit } from '@angular/core';
import { Post } from '../models/Post';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html'
})

export class PostListComponent implements OnInit {

  public postList: Post[] = postListContent;

  ngOnInit() {
  }
}

const postListContent = [
  {
    title: 'Agile Dog',
    subTitle: 'Dog Man',
    imageUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
    content: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.'
  },
  {
    title: 'Shiba Inu',
    subTitle: 'Dog Breed',
    imageUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
    content: 'A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was.'
  },
  {
    title: 'Scrum Dog',
    subTitle: 'Man Breed',
    imageUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
    content: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.'
  },
  {
    title: 'Gun And Shot',
    subTitle: 'Philips Data',
    imageUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
    content: 'A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was.'
  }
];
