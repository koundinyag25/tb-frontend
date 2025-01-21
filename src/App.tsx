import "./App.css";

import { Layout } from "antd";
import { Home } from "./screens/home/Home";

function App() {
  return (
    <Layout>
      <Layout.Header className="bg-white border-b border-gray-200"></Layout.Header>
      <Layout.Content className="bg-white">
        <Home />
      </Layout.Content>
    </Layout>
  );
}

export default App;
