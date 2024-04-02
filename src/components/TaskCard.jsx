export const TaskCard = ({ color }) => {
  return (
    <div
      className={`${color} border border-white p-4 font-poppins rounded-lg shadow-lg`}
    >
      <div className="flex justify-between text-white">
        <h2 className="text-2xl  font-semibold">Task</h2>
        <button className="hover:text-red-600 m-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 14 14"
          >
            <path
              fill="currentColor"
              fill-rule="evenodd"
              d="M1.707.293A1 1 0 0 0 .293 1.707L5.586 7L.293 12.293a1 1 0 1 0 1.414 1.414L7 8.414l5.293 5.293a1 1 0 0 0 1.414-1.414L8.414 7l5.293-5.293A1 1 0 0 0 12.293.293L7 5.586z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>
      <p className="text-white">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
      </p>
      <div className="flex justify-end mt-4 gap-1 text-white">
        <button className="hover:text-purple-600 m-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 16 16"
          >
            <path
              fill="currentColor"
              fill-rule="evenodd"
              d="M13 6a.75.75 0 0 1-.75-.75v-1.5h-1.5a.75.75 0 0 1 0-1.5h1.5V.75a.75.75 0 0 1 1.5 0v1.5h1.5a.75.75 0 0 1 0 1.5h-1.5v1.5A.75.75 0 0 1 13 6M3 13.5a.5.5 0 0 1-.5-.5V3a.5.5 0 0 1 .5-.5h4.25a.75.75 0 0 0 0-1.5H3a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8.75a.75.75 0 0 0-1.5 0V13a.5.5 0 0 1-.5.5z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
        <button className="hover:text-blue-800 m-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            viewBox="0 0 24 24"
          >
            <path fill="currentColor" d="M4 16h4v4H4V16z" className="st0">
              <animate
                fill="remove"
                accumulate="none"
                additive="replace"
                attributeName="opacity"
                begin=".2"
                calcMode="linear"
                dur="3s"
                keyTimes="0;0.9;1"
                repeatCount="indefinite"
                restart="always"
                values="1;0;0"
              />
            </path>
            <path fill="currentColor" d="M10 16h4v4h-4V16z" className="st0">
              <animate
                fill="remove"
                accumulate="none"
                additive="replace"
                attributeName="opacity"
                begin=".4"
                calcMode="linear"
                dur="3s"
                keyTimes="0;0.9;1"
                repeatCount="indefinite"
                restart="always"
                values="1;0;0"
              />
            </path>
            <path fill="currentColor" d="M16 16h4v4h-4V16z" className="st0">
              <animate
                fill="remove"
                accumulate="none"
                additive="replace"
                attributeName="opacity"
                begin=".6"
                calcMode="linear"
                dur="3s"
                keyTimes="0;0.9;1"
                repeatCount="indefinite"
                restart="always"
                values="1;0;0"
              />
            </path>
            <path fill="currentColor" d="M4 10h4v4H4V10z" className="st0">
              <animate
                fill="remove"
                accumulate="none"
                additive="replace"
                attributeName="opacity"
                begin=".8"
                calcMode="linear"
                dur="3s"
                keyTimes="0;0.9;1"
                repeatCount="indefinite"
                restart="always"
                values="1;0;0"
              />
            </path>
            <path fill="currentColor" d="M10 10h4v4h-4V10z" className="st0">
              <animate
                fill="remove"
                accumulate="none"
                additive="replace"
                attributeName="opacity"
                begin="1"
                calcMode="linear"
                dur="3s"
                keyTimes="0;0.9;1"
                repeatCount="indefinite"
                restart="always"
                values="1;0;0"
              />
            </path>
            <path fill="currentColor" d="M16 10h4v4h-4V10z" className="st0">
              <animate
                fill="remove"
                accumulate="none"
                additive="replace"
                attributeName="opacity"
                begin="1.2"
                calcMode="linear"
                dur="3s"
                keyTimes="0;0.9;1"
                repeatCount="indefinite"
                restart="always"
                values="1;0;0"
              />
            </path>
            <path fill="currentColor" d="M4 4h4v4H4V4z" className="st0">
              <animate
                fill="remove"
                accumulate="none"
                additive="replace"
                attributeName="opacity"
                begin="1.4"
                calcMode="linear"
                dur="3s"
                keyTimes="0;0.9;1"
                repeatCount="indefinite"
                restart="always"
                values="1;0;0"
              />
            </path>
            <path fill="currentColor" d="M10 4h4v4h-4V4z" className="st0">
              <animate
                fill="remove"
                accumulate="none"
                additive="replace"
                attributeName="opacity"
                begin="1.6"
                calcMode="linear"
                dur="3s"
                keyTimes="0;0.9;1"
                repeatCount="indefinite"
                restart="always"
                values="1;0;0"
              />
            </path>
            <path fill="currentColor" d="M16 4h4v4h-4V4z" className="st0">
              <animate
                fill="remove"
                accumulate="none"
                additive="replace"
                attributeName="opacity"
                begin="1.8"
                calcMode="linear"
                dur="3s"
                keyTimes="0;0.9;1"
                repeatCount="indefinite"
                restart="always"
                values="1;0;0"
              />
            </path>
          </svg>
        </button>
        <button className="hover:text-green-800 m-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 16 16"
          >
            <path
              fill="currentColor"
              fill-rule="evenodd"
              d="M3 13.5a.5.5 0 0 1-.5-.5V3a.5.5 0 0 1 .5-.5h9.25a.75.75 0 0 0 0-1.5H3a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9.75a.75.75 0 0 0-1.5 0V13a.5.5 0 0 1-.5.5zm12.78-8.82a.75.75 0 0 0-1.06-1.06L9.162 9.177L7.289 7.241a.75.75 0 1 0-1.078 1.043l2.403 2.484a.75.75 0 0 0 1.07.01z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};
