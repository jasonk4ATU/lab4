import { useState } from "react";

function Create() {
  const [title, setTitle] = useState(''); // State for movie title
  const [year, setYear] = useState(''); // State for movie year
  const [poster, setPoster] = useState(''); // State for movie poster URL

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission
    // Log the title, year, and poster URL to the console
    console.log(`Title: ${title}, Year: ${year}, Poster: ${poster}`);
  }

  return (
    <div>
      <h2>This is my Create Component.</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Add Movie Title: </label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)} // Update title on change
          />
        </div>
        <div className="form-group">
          <label>Add Movie Year: </label>
          <input
            type="text"
            className="form-control"
            value={year}
            onChange={(e) => setYear(e.target.value)} // Update year on change
          />
        </div>
        <div className="form-group">
          <label>Add Movie Poster URL: </label>
          <input
            type="text"
            className="form-control"
            value={poster}
            onChange={(e) => setPoster(e.target.value)} // Update poster URL on change
          />
        </div>
        <input type="submit" value="Add Movie" />
      </form>
    </div>
  );
}

export default Create;
