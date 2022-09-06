import React from "react";


const PostList = ({posts,deleteAction}) => {
    return (
        <table className="table">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">userId</th>
            <th scope="col">title</th>
            <th scope="col">body</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => {
              return (
      <tr key={post.id}>
          <th scope="row">{post.id}</th>
          <td>{post.userId}</td>
          <td>{post.title}</td>
          <td>{post.body}</td>
          <td><button onClick={()=>deleteAction(post.id)} type="button" className="btn btn-danger">Delete</button></td>
      </tr>);
      })}
      {/* {posts.map((post) => (
      <tr>
          <th scope="row">{post.id}</th>
          <td>{post.userId}</td>
          <td>{post.title}</td>
          <td>{post.body}</td>
      </tr>
      ))} */}
        </tbody>
      </table>
    );
}

export default PostList;