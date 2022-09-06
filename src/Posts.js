import React ,{ useState ,useEffect} from "react";
import PostList from "./PostList";

const Posts = () => {

    const [posts1, setPosts1] = useState([{
        "userId": 1,
        "id": 1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
      },
      {
        "userId": 1,
        "id": 2,
        "title": "qui est esse",
        "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
      },
      {
        "userId": 1,
        "id": 3,
        "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
        "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
      },
      {
        "userId": 1,
        "id": 4,
        "title": "eum et est occaecati",
        "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
      },
      {
        "userId": 1,
        "id": 5,
        "title": "nesciunt quas odio",
        "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
      },]);
      const [posts, setPosts] = useState([]);

      const deleteAction = (id) => {
        const updatedPosts = posts.filter((post) => post.id !== id);
        setPosts(updatedPosts);
    }

    const [isTrue, setIsTrue] = useState(false);
    // useEffect(() => {
    //     console.log("useEffect called");
    // }); 
    useEffect(() => {
      console.log("useEffect called");
  },[isTrue]); 

    return (
        <div className="container">
            <br/>
            <button type="button" className="btn btn-warning" onClick={()=>setIsTrue(!isTrue)}>click</button>
            <p>{isTrue.toString()}</p>
            <br/>
            <PostList posts ={posts} deleteAction={deleteAction}/>
            {/* <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
  </tbody>
</table> */}
        </div>
    );
}

export default Posts;