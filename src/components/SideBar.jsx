import React from "react";
import defaultAvatar from "../assets/images/default_profile.png";
export const SideBar = () => {
  return (
    <>
      <aside className="hidden lg:flex flex-col w-72 h-fit px-4 py-8 overflow-y-auto bg-gray-400 absolute top-24 m-4 rounded-xl">
        <div className="flex flex-col items-center mt-6 -mx-2">
          <img
            className="object-cover w-32 h-32 mx-2 rounded-full border-2 border-black"
            src={defaultAvatar}
            alt="avatar"
          />
          <h4 className="mx-2 mt-2 font-bold text-black ">USER </h4>
          <p className="mx-2 mt-1 text-sm font-medium text-gray-700 ">EMAIL</p>
        </div>

        <div className="flex flex-col justify-between flex-1 mt-6">
          <nav className="space-y-6">
            <div>
              <label className="px-3 text-xs text-gray-600 uppercase ">
                # Admin
              </label>
              <a
                className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-lg  hover:bg-[#080710] hover:text-white"
                href="{{ route('users') }}"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 640 512"
                >
                  <path
                    fill="currentColor"
                    d="M144 160a80 80 0 1 0 0-160a80 80 0 1 0 0 160m368 0a80 80 0 1 0 0-160a80 80 0 1 0 0 160M0 298.7C0 310.4 9.6 320 21.3 320h214.1c-26.6-23.5-43.3-57.8-43.3-96c0-7.6.7-15 1.9-22.3c-13.6-6.3-28.7-9.7-44.6-9.7h-42.7C47.8 192 0 239.8 0 298.7M320 320c24 0 45.9-8.8 62.7-23.3c2.5-3.7 5.2-7.3 8-10.7c2.7-3.3 5.7-6.1 9-8.3C410 262.3 416 243.9 416 224c0-53-43-96-96-96s-96 43-96 96s43 96 96 96m65.4 60.2c-10.3-5.9-18.1-16.2-20.8-28.2H261.3C187.7 352 128 411.7 128 485.3c0 14.7 11.9 26.7 26.7 26.7h300.5c-2.1-5.2-3.2-10.9-3.2-16.4v-3c-1.3-.7-2.7-1.5-4-2.3l-2.6 1.5c-16.8 9.7-40.5 8-54.7-9.7c-4.5-5.6-8.6-11.5-12.4-17.6l-.1-.2l-.1-.2l-2.4-4.1l-.1-.2l-.1-.2c-3.4-6.2-6.4-12.6-9-19.3c-8.2-21.2 2.2-42.6 19-52.3l2.7-1.5v-4.6l-2.7-1.5zM533.3 192h-42.6c-15.9 0-31 3.5-44.6 9.7c1.3 7.2 1.9 14.7 1.9 22.3c0 17.4-3.5 33.9-9.7 49c2.5.9 4.9 2 7.1 3.3l2.6 1.5c1.3-.8 2.6-1.6 4-2.3v-3c0-19.4 13.3-39.1 35.8-42.6c7.9-1.2 16-1.9 24.2-1.9s16.3.6 24.2 1.9c22.5 3.5 35.8 23.2 35.8 42.6v3c1.3.7 2.7 1.5 4 2.3l2.6-1.5c16.8-9.7 40.5-8 54.7 9.7c2.3 2.8 4.5 5.8 6.6 8.7c-2.1-57.1-49-102.7-106.6-102.7m91.3 163.9c6.3-3.6 9.5-11.1 6.8-18c-2.1-5.5-4.6-10.8-7.4-15.9l-2.3-4c-3.1-5.1-6.5-9.9-10.2-14.5c-4.6-5.7-12.7-6.7-19-3l-2.9 1.7c-9.2 5.3-20.4 4-29.6-1.3s-16.1-14.5-16.1-25.1v-3.4c0-7.3-4.9-13.8-12.1-14.9c-6.5-1-13.1-1.5-19.9-1.5s-13.4.5-19.9 1.5c-7.2 1.1-12.1 7.6-12.1 14.9v3.4c0 10.6-6.9 19.8-16.1 25.1s-20.4 6.6-29.6 1.3l-2.9-1.7c-6.3-3.6-14.4-2.6-19 3c-3.7 4.6-7.1 9.5-10.2 14.6l-2.3 3.9c-2.8 5.1-5.3 10.4-7.4 15.9c-2.6 6.8.5 14.3 6.8 17.9l2.9 1.7c9.2 5.3 13.7 15.8 13.7 26.4s-4.5 21.1-13.7 26.4l-3 1.7c-6.3 3.6-9.5 11.1-6.8 17.9c2.1 5.5 4.6 10.7 7.4 15.8l2.4 4.1c3 5.1 6.4 9.9 10.1 14.5c4.6 5.7 12.7 6.7 19 3l2.9-1.7c9.2-5.3 20.4-4 29.6 1.3s16.1 14.5 16.1 25.1v3.4c0 7.3 4.9 13.8 12.1 14.9c6.5 1 13.1 1.5 19.9 1.5s13.4-.5 19.9-1.5c7.2-1.1 12.1-7.6 12.1-14.9V492c0-10.6 6.9-19.8 16.1-25.1s20.4-6.6 29.6-1.3l2.9 1.7c6.3 3.6 14.4 2.6 19-3c3.7-4.6 7.1-9.4 10.1-14.5l2.4-4.2c2.8-5.1 5.3-10.3 7.4-15.8c2.6-6.8-.5-14.3-6.8-17.9l-3-1.7c-9.2-5.3-13.7-15.8-13.7-26.4s4.5-21.1 13.7-26.4l3-1.7zM472 384a40 40 0 1 1 80 0a40 40 0 1 1-80 0"
                  />
                </svg>

                <span className="mx-4 font-medium">Users Management </span>
              </a>
              <a
                className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-lg  hover:bg-[#080710] hover:text-white"
                href="#"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 26 26"
                >
                  <path
                    fill="currentColor"
                    d="M12.906-.031a1 1 0 0 0-.125.031A1 1 0 0 0 12 1v1H3a3 3 0 0 0-3 3v13c0 1.656 1.344 3 3 3h9v.375l-5.438 2.719a1.006 1.006 0 0 0 .875 1.812L12 23.625V24a1 1 0 1 0 2 0v-.375l4.563 2.281a1.006 1.006 0 0 0 .875-1.812L14 21.375V21h9c1.656 0 3-1.344 3-3V5a3 3 0 0 0-3-3h-9V1a1 1 0 0 0-1.094-1.031M2 5h22v13H2zm18.875 1a1 1 0 0 0-.594.281L17 9.563L14.719 7.28a1 1 0 0 0-1.594.219l-2.969 5.188l-1.219-3.063a1 1 0 0 0-1.656-.344l-3 3a1.016 1.016 0 1 0 1.439 1.44l1.906-1.906l1.438 3.562a1 1 0 0 0 1.812.125l3.344-5.844l2.062 2.063a1 1 0 0 0 1.438 0l4-4A1 1 0 0 0 20.875 6"
                  />
                </svg>

                <span className="mx-4 font-medium">Statistics</span>
              </a>
            </div>
            <div>
              <label className="px-3 text-xs text-gray-600 uppercase ">
                # User
              </label>

              <a
                className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-lg  hover:bg-[#080710] hover:text-white"
                href="#"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M19.995 4.097A2.25 2.25 0 0 0 17.75 2H6.25l-.154.005A2.25 2.25 0 0 0 4 4.251v15.498l.005.154A2.25 2.25 0 0 0 6.25 22h7.568l-1.5-1.5H6.25l-.102-.007a.75.75 0 0 1-.648-.743V4.251l.007-.102a.75.75 0 0 1 .743-.648h11.5l.102.007a.75.75 0 0 1 .648.743v11.567l1.159-1.159c.106-.106.22-.2.34-.28V4.25zm-3.707 17.902a.692.692 0 0 1-.076 0a.75.75 0 0 1-.493-.219l-2.5-2.502a.75.75 0 0 1 1.062-1.06l1.969 1.971l4.47-4.47a.75.75 0 1 1 1.06 1.061l-5 5a.75.75 0 0 1-.492.219M13.84 16.5a2.316 2.316 0 0 0-.182 0h-2.413a.75.75 0 0 1 0-1.5h5.004a.75.75 0 1 1 0 1.5zM9 7.752a1 1 0 1 1-2 0a1 1 0 0 1 2 0m1.496-.002a.75.75 0 0 1 .75-.75h5.004a.75.75 0 1 1 0 1.5h-5.004a.75.75 0 0 1-.75-.75m.75 3.25a.75.75 0 0 0 0 1.5h5.004a.75.75 0 1 0 0-1.5zM8 12.75a1 1 0 1 0 0-2a1 1 0 0 0 0 2m1 2.998a1 1 0 1 1-2 0a1 1 0 0 1 2 0"
                  />
                </svg>

                <span className="mx-4 font-medium">My Tasks</span>
              </a>
            </div>
          </nav>
        </div>
      </aside>
    </>
  );
};
