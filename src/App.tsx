import Header from "./components/layout/Header";
import Sidebar from "./components/layout/Sidebar";
import KnowledgeBasePage from "./components/knowledge/KnowledgeBasePage";

const App = () => {
  return (
    <div className="flex flex-col h-screen overflow-hidden bg-[#F9FAFB]">
      {/* Top Header - fixed height */}
      <Header />

      {/* Body: Sidebar + Main Content scrollable area */}
      <div className="flex flex-1 pt-12 overflow-hidden">
        {/* Fixed width Sidebar */}
        <Sidebar />
        
        {/* Content area: Offset by sidebar width and scrollable */}
        <main className="flex-1 ml-[208px] overflow-y-auto p-6 lg:p-8">
          <KnowledgeBasePage />
        </main>
      </div>
    </div>
  );
};

export default App;
