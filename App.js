import Header from './Header';
import {useState,useEffect} from 'react';
import axios from 'axios';

function App() {
  
  const[postData,setPostData]=useState(null);
    {/* useEffect(()=>{
    //normal apicall 
      fetch("http://jsonplaceholder.typicode.com/posts")
      .then((data)=>data.json())
      .then((data)=>{
        setPostData(data);
      });
    },[]);
  */}

  // using axios 
  useEffect(()=>
  {
    axios("http://jsonplaceholder.typicode.com/posts")
    .then((res)=>
    setPostData(res.data));
  })
 return(<>
        <div className="App">
            <Header />
            <div className="container">
            {
               (postData)?
               (<ul>
            {
              postData.map(post=>{
              return(
                <div class="card mt-3" key={post.id}>
                    <div class="card-body">
                      <h5 class="card-title"><h3>{post.title}</h3></h5>
                      <p class="card-text"> <p>{post.body}</p></p>
                      <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
               
                )
                  })
            }
               </ul>):(<h3>Loading..</h3>)
            }
            </div>
        </div>
 </>
);
}

export default App;
