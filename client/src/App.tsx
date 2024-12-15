import NewPost from './components/NewPosts.tsx';
import PostList from './components/PostList.tsx';
function App() {

  

    return (
      <div className="mx-auto w-1/2 p-4">
        <h1 className="text-2xl font-bold mb-4">Bolgs in your life</h1>
        <NewPost />
        <hr className="my-4 border-y-4" />
        <PostList />
      </div>
    )
  }



export default App
