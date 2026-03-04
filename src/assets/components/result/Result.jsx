import vector from "../../../assets/vector1.png";

const Result = ({ inProgress, resolvedCount }) => {
  return (
    <div className="px-4 md:px-8 lg:px-10 py-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* In Progress Card */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg shadow-md p-6 hover:shadow-lg transition text-white relative overflow-hidden">
            {/* Vector Image Background */}
            <div
              className="absolute inset-0 opacity-20 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${vector})`,
              }}
            ></div>
            <div className="flex items-center justify-between relative z-10">
              <div>
                <p className="text-blue-100 text-sm font-semibold">
                  In Progress
                </p>
                <p className="text-4xl font-bold text-white mt-2">
                  {inProgress}
                </p>
              </div>
              <div className="bg-white/20 rounded-full p-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Resolved Card */}
          <div className="bg-gradient-to-r from-[#34C759] to-green-600 rounded-lg shadow-md p-6 hover:shadow-lg transition text-white relative overflow-hidden">
            {/* Vector Image Background */}
            <div
              className="absolute inset-0 opacity-20 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${vector})`,
              }}
            ></div>
            <div className="flex items-center justify-between relative z-10">
              <div>
                <p className="text-green-100 text-sm font-semibold">Resolved</p>
                <p className="text-4xl font-bold text-white mt-2">
                  {resolvedCount}
                </p>
              </div>
              <div className="bg-white/20 rounded-full p-4">
                <svg
                  className="w-8 h-8 text-white"
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;
