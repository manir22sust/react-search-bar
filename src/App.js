import { useState } from "react";
import "./App.css";
import Data from "./data/MOCK_DATA.json";

function App() {
  const [query, setQuery] = useState("");
  return (
    <div className="app">
      <input
        type="text"
        placeholder="Enter Post Title"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />

      {Data.filter((post) => {
        if (query === "") {
          return post;
        } else if (post.title.toLowerCase().includes(query.toLowerCase())) {
          return post;
        }
      }).map((post) => (
        <div className="box" key={post.id}>
          <p>{post.title}</p>
          <p>{post.author}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
