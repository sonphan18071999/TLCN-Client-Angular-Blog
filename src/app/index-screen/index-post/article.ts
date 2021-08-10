export class Article{
    tittle: { type: String };
    content: [
    {    
      partName: { type: String },
      partContent: { type: String },
      images: [{ type: String }]
    }];
    likesCount: { type: Number};
    idUser: { type: String };
    AvatarPost: { type: String }
}