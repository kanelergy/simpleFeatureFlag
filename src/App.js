import "./App.css";
import { withLDProvider } from "launchdarkly-react-client-sdk";
import Button from "./button";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button />
      </header>
    </div>
  );
}
export default withLDProvider({
  clientSideID: "6582673b32b49210483f1f4b",
  // context: {
  //   kind: "user",
  //   key: "example_user",
  //   name: "Example user",
  //   email: "User@example.com",
  // },
})(App);
