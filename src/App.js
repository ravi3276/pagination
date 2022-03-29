import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Posts from './Posts';
import Pagination from './Pagination';
function App() {
  const [posts,setPosts]=useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  useEffect(()=>{
    const fetchData=async ()=>{
      setLoading(true);
      const response= await axios.get('https://jsonplaceholder.typicode.com/posts');
      setPosts(response.data);
      setLoading(false)
    }
    fetchData();
  },[])

  const lastpostindex=currentPage * postsPerPage;
  const firstpostindex=lastpostindex - postsPerPage;

  const currentPosts=posts.slice(firstpostindex,lastpostindex);
  const paginate=(pageNumber)=>{
    setCurrentPage(pageNumber);
  }

  return (
    <div className="App">
      <div className='container mt-5'>
      <h1 className='text-primary mb-3'>Pagination</h1>
      <Posts posts={currentPosts} loading={loading} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
    </div>
    </div>
  );
}

export default App;
