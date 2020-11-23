export class Article{
    tittle: String
    description: String
    content: [
        { partContent: string ,
         images: string }
    ]
    idUser:  String
    AvatarPost: String
    hashTag :[{
        name:string
    }]
}