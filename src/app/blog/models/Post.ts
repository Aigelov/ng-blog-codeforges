export class Post {
  title: string;
  subTitle: string;
  imageUrl: string;
  content: string;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
