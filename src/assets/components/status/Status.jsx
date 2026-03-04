const Status = ({ taskStatus, handleResolved, resolvedTasks }) => {
  return (
    <div className="space-y-5">
      {/* Active Tasks */}
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
        Task Status
      </h1>
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-gray-800">Active Tasks</h2>
          <span className="bg-amber-100 text-amber-800 text-sm font-bold px-3 py-1 rounded-full">
            {taskStatus.length}
          </span>
        </div>
        <div className="space-y-3">
          {taskStatus.length ? (
            taskStatus.map((ticket) => (
              <div
                className="p-4 bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-amber-500 rounded-md hover:shadow-md transition"
                key={ticket.ticket_id}
              >
                <p className="font-semibold text-gray-800 mb-2 text-sm">
                  {ticket.title}
                </p>
                <button
                  className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded-md transition text-sm"
                  onClick={() => handleResolved(ticket)}
                >
                  Complete
                </button>
              </div>
            ))
          ) : (
            <div className="text-center py-8">
              <svg
                className="w-12 h-12 text-gray-300 mx-auto mb-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                />
              </svg>
              <p className="text-gray-500 text-sm">Select a ticket to add</p>
            </div>
          )}
        </div>
      </div>

      {/* Resolved Tasks */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-gray-800">Resolved Tasks</h2>
          <span className="bg-green-100 text-green-800 text-sm font-bold px-3 py-1 rounded-full">
            {resolvedTasks.length}
          </span>
        </div>
        <div className="space-y-3">
          {resolvedTasks.length ? (
            resolvedTasks.map((ticket) => (
              <div
                className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-500 rounded-md hover:shadow-md transition"
                key={ticket.ticket_id}
              >
                <div className="flex items-start justify-between">
                  <p className="font-semibold text-gray-800 text-sm flex-1">
                    {ticket.title}
                  </p>
                  <svg
                    className="w-5 h-5 text-green-500 flex-shrink-0 ml-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-8">
              <svg
                className="w-12 h-12 text-gray-300 mx-auto mb-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p className="text-gray-500 text-sm">No resolved tasks yet</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Status;
