import { Suspense, use, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import Navbar from "./assets/components/navbar/Navbar";
import Result from "./assets/components/result/Result";
import Ticket from "./assets/components/ticket/Ticket";
import Status from "./assets/components/status/Status";

const promiseData = fetch("data.json").then((response) => response.json());

function App() {
  const data = use(promiseData);

  const [taskStatus, setTaskStatus] = useState([]);
  const [resolvedTasks, setResolvedTasks] = useState([]);
  const [inProgress, setInProgress] = useState(0);
  const [resolvedCount, setResolvedCount] = useState(0);

  const handleStatus = (ticket) => {
    setTaskStatus([...taskStatus, ticket]);
    setInProgress(inProgress + 1);
    toast.success(`Added "${ticket.title}" to active tasks!`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const handleResolved = (ticket) => {
    const newTaskStatus = taskStatus.filter(
      (t) => t.ticket_id !== ticket.ticket_id,
    );
    setTaskStatus(newTaskStatus);
    setInProgress(inProgress - 1);
    setResolvedTasks([...resolvedTasks, ticket]);
    setResolvedCount(resolvedCount + 1);
    toast.success(`Marked "${ticket.title}" as resolved!`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  // Filter out tickets that are in taskStatus or resolvedTasks
  const availableTickets = data.filter(
    (ticket) => !resolvedTasks.find((t) => t.ticket_id === ticket.ticket_id),
  );

  return (
    <>
      <Navbar />
      <Result inProgress={inProgress} resolvedCount={resolvedCount} />
      <div className="bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen px-4 md:px-8 lg:px-10 py-6 lg:py-10">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-6 lg:gap-10">
          <div className="w-full lg:w-3/4">
            <Suspense
              fallback={
                <div className="flex justify-center items-center h-40">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
                </div>
              }
            >
              <Ticket data={availableTickets} handleStatus={handleStatus} />
            </Suspense>
          </div>
          <div className="w-full lg:w-1/4">
            <Status
              taskStatus={taskStatus}
              handleResolved={handleResolved}
              resolvedTasks={resolvedTasks}
            />
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default App;
