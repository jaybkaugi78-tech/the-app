import { useState } from "react";

// some default projects to show on load
const defaultProjects = [
  { id: 1, title: "Project 1", description: "Description of the project" },
  { id: 2, title: "Project 2", description: "Description of the project" },
  { id: 3, title: "Project 3", description: "Description of the project" },
];

function App() {
  const [projectList, setProjectList] = useState(defaultProjects);
  const [titleInput, setTitleInput] = useState("");
  const [descInput, setDescInput] = useState("");
  const [searchWord, setSearchWord] = useState("");

  // adds a new project to the list
  function addProject() {
    if (titleInput === "" || descInput === "") return;

    const newProject = {
      id: projectList.length + 1,
      title: titleInput,
      description: descInput,
    };

    setProjectList([...projectList, newProject]);
    setTitleInput("");
    setDescInput("");
  }

  // removes project by id
  function removeProject(id) {
    const remaining = projectList.filter((item) => item.id !== id);
    setProjectList(remaining);
  }

  // filter projects based on search
  const results = projectList.filter((item) =>
    item.title.toLowerCase().includes(searchWord.toLowerCase())
  );

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", padding: "20px", fontFamily: "Arial" }}>

      <h1 style={{ borderBottom: "2px solid black", paddingBottom: "10px" }}>
        Personal Project Showcase App
      </h1>

      {/* form to add projects */}
      <div style={{ border: "2px solid black", paddingBottom: "10px", fontSize: "24px", whiteSpace: "nowrap" }}>
        <h2>Add Project</h2>

        <p>Title</p>
        <input
          type="text"
          value={titleInput}
          onChange={(e) => setTitleInput(e.target.value)}
          style={{ width: "100%", padding: "8px", border: "1px solid black", marginBottom: "12px" }}
        />

        <p>Description</p>
        <textarea
          value={descInput}
          onChange={(e) => setDescInput(e.target.value)}
          style={{ width: "100%", padding: "8px", height: "80px", border: "1px solid black", marginBottom: "12px" }}
        />

        <button
          onClick={addProject}
          style={{ padding: "8px 18px", background: "black", color: "white", border: "none", cursor: "pointer" }}
        >
          Add
        </button>
      </div>

      {/* project list section */}
      <div style={{ border: "2px solid black", padding: "20px" }}>

        <input
          type="text"
          placeholder="Search Projects"
          value={searchWord}
          onChange={(e) => setSearchWord(e.target.value)}
          style={{ width: "100%", padding: "8px", border: "1px solid black", marginBottom: "15px" }}
        />

        {results.length === 0 && <p>No projects found.</p>}

        {results.map((item) => (
          <div
            key={item.id}
            style={{ display: "flex", alignItems: "center", gap: "10px",
              border: "1px solid black", padding: "10px", marginBottom: "10px" }}
          >
            <button
              onClick={() => removeProject(item.id)}
              style={{ padding: "6px 12px", cursor: "pointer", fontWeight: "bold" }}
            >
              X
            </button>
            <div>
              <h3 style={{ margin: "0" }}>{item.title}</h3>
              <p style={{ margin: "0", color: "gray" }}>{item.description}</p>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}

export default App;