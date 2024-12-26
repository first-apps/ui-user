import { PostContainer } from "./components/PostContainer";
import { PostContent } from "./components/PostContent";
import { Store } from "./components/Store";

export default async function Home() {
  // const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const data = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await data.json();
  console.log(posts);

  return (
    <div>
      {/* User App - Home Page */}
      {/* <h1>{state?.[0]?.title}</h1> */}
      {posts?.map((post) => (
        <PostContainer key={post.id} data={post}>
          <PostContent>{post.title}</PostContent>
        </PostContainer>
      ))}
      <Store data={{ posts }} />
    </div>
  );
}
