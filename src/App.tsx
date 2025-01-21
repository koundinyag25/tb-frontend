import "./App.css";

import { Layout } from "antd";
import { Home } from "./screens/home/Home";

function App() {
  return (
    <Layout>
      <Layout.Header className="bg-white border-b p-0">
        <div className="flex justify-start items-center bg-gray-100 rounded-lg p-2 w-full h-full flex-start">
          <div className="text-sm font-bold">CVE Search</div>
        </div>
      </Layout.Header>
      <Layout.Content className="bg-white">
        <Home />
      </Layout.Content>
    </Layout>
  );
}

export default App;
