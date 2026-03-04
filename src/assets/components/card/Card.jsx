import { useState } from "react";

const Card = ({ ticket, handleStatus }) => {
  const priorityColor = {
    "HIGH PRIORITY": "bg-red-100 text-red-800",
    "MEDIUM PRIORITY": "bg-yellow-100 text-yellow-800",
    "LOW PRIORITY": "bg-green-100 text-green-800",
    "CRITICAL PRIORITY": "bg-red-200 text-red-900",
  };

  const statusColor = {
    Open: "text-blue-600",
    "In- Progress": "text-orange-600",
    Resolved: "text-green-600",
  };

  return (
    <button
      onClick={() => handleStatus(ticket)}
      className="text-left bg-white rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1 transition-all p-6 w-full cursor-pointer border border-gray-200 hover:border-blue-300 group"
    >
      {/* Header Section - Title and Status Side by Side */}
      <div className="mb-3">
        <div className="flex justify-between items-start gap-3 mb-2">
          <h3 className="text-lg font-bold text-gray-800 group-hover:text-blue-600 transition flex-1 line-clamp-2">
            {ticket.title}
          </h3>
          <span
            className={`text-xs font-bold whitespace-nowrap px-2 py-1 rounded-full ${statusColor[ticket.status] || "text-gray-600"}`}
          >
            {ticket.status}
          </span>
        </div>
        <p className="text-xs text-gray-500 font-mono">{ticket.ticket_id}</p>
      </div>

      {/* Description */}
      <div className="mb-4 pb-4 border-b border-gray-100">
        <p className="text-sm text-gray-600 line-clamp-2 leading-relaxed">
          {ticket.description}
        </p>
      </div>

      {/* ID, Priority, Customer Name, Date in one line */}
      <div className="flex flex-wrap items-center gap-2 text-xs text-gray-600">
        <span className="px-2 py-1 bg-gray-100 rounded text-gray-700 font-semibold">
          {ticket.ticket_id}
        </span>
        <span
          className={`px-2 py-1 rounded font-semibold ${priorityColor[ticket.priority] || "bg-gray-100 text-gray-800"}`}
        >
          {ticket.priority.split(" ")[0]}
        </span>
        <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded font-medium">
          {ticket.customer_name}
        </span>
        <span className="px-2 py-1 bg-gray-100 rounded text-gray-700">
          {ticket.date}
        </span>
      </div>
    </button>
  );
};

export default Card;
