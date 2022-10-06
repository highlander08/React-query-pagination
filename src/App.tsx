import logo from "./logo.svg";
import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";
import Characters from "./Characters";

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      <div className="container" style={{ marginLeft: "150px" }}>
        <h1 style={{ textAlign: "center" }}>Rick and Morty</h1>
        <QueryClientProvider client={queryClient}>
          <Characters />
        </QueryClientProvider>
      </div>
    </div>
  );
}

export default App;
