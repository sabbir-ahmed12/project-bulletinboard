import "./App.css";
import PostsList from "../src/features/posts/PostsList";
import AddPostForm from "./features/posts/AddPostForm";

function App() {
  return (
    <>
      <AddPostForm />
      <PostsList />
    </>
  );
}

export default App;
