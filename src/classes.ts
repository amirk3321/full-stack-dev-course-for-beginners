class PostModel {
    postId: string
    postDes: string
    totalLike: number
    protected postTitle: string
    private creatorUid!: string

    constructor(postId: string, postDes: string, postTitle: string, totalLike: number) {
        this.postId = postId
        this.postTitle = postTitle
        this.postDes = postDes
        this.totalLike = totalLike

    }

    set setUID(uid: string) {
        this.creatorUid = uid;
    }

    get getUID(): string {
        return this.creatorUid;
    }

    getCreateNewPost(): void {
        console.log("creatorUid " + this.creatorUid)
        console.log(this.postId, this.postTitle, this.postDes, this.totalLike)
        console.log("Post Created Successfully")
    }
}

class CommissionPost extends PostModel {

    price: string

    constructor(price: string, postId: string, postDes: string, postTitle: string, totalLike: number) {
        super(postId, postDes, postTitle, totalLike)
        this.price = price
    }


    createCommissionPost(): void {
        console.log(this.getUID)
        console.log(this.postId, this.postTitle, this.postDes, this.totalLike)
        console.log("Post Created Successfully")
    }

}

let post = new PostModel("1", "new Post description", "Post title", 20);

// post.setUID = "1234"
//
// post.setUID = "123456"
//
// console.log(post.getUID);
//
// post.getCreateNewPost()

let commissionPostObj = new CommissionPost("20$",
    "new Post description commission",
    "Post title commission",
    "10", 10,)


commissionPostObj.setUID = "1234"
commissionPostObj.createCommissionPost()