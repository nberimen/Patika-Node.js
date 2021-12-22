const posts = [
    { post: "post 1" },
    { post: "post 2" },
    { post: "post 3" },
  ];
  
  const listPosts = () => {
    posts.forEach((post) => console.log(post.post));
  };
  
  const addPost = (newPost) => {
    const promise1 = new Promise((resolve, reject) => {
        posts.push(newPost);
      resolve(posts);
      //reject("error");
    });
    return promise1;
};
  

const showPosts = async (newPost) => {
    try {
        await addPost(newPost);
        listPosts();
    } catch (err) {
        console.log(err);
    }
}
showPosts({ post: "post 4" });