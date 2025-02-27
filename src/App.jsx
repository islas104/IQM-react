import Dropdown from './components/Dropdown';
import FSCMoodlets from './components/FSCMoodlets';

function App() {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "100vh", backgroundColor: "#F3F4F6", padding: "24px" }}>
      <h1>FSC Moodlet Component</h1>
      <FSCMoodlets />
      <h2>Status Dropdown</h2>
      <Dropdown options={["Option 1", "Option 2", "Option 3"]} />
    </div>
  );
}

export default App;
