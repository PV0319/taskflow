import HomePage from "./pages/HomePage";
import TaskDetailPage from "./pages/TaskDetailPage";
import {Routes,Route} from "react-router-dom"
function App(){

return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/tasks/:id" element={<TaskDetailPage />} />
    </Routes>
);

}
export default App;



