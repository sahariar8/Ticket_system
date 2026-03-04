import Card from "../card/Card";

const Ticket = ({ data, handleStatus }) => {
  return (
    <div>
      <div className="mb-4">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
          Customer Tickets
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
        {data.map((ticket) => (
          <Card
            key={ticket.ticket_id}
            ticket={ticket}
            handleStatus={handleStatus}
          />
        ))}
      </div>
    </div>
  );
};

export default Ticket;
