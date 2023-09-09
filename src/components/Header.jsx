import React, { Fragment } from "react";
import { Menu } from "@headlessui/react";
import { BiSearch } from "react-icons/bi";
import { BsBell } from "react-icons/bs";
import { BsChatLeft } from "react-icons/bs";
import { Popover, Transition } from "@headlessui/react";
import { PopoverBody } from "react-bootstrap";
// import { ChevronDownIcon } from "@heroicons/react/20/solid";

const Header = () => {
  return (
    <div className="bg-white h-18 px-8 py-4 flex justify-between ">
      <div className="relative">
        <BiSearch
          className="left-2 absolute text-gray-400 top-1/2 -translate-y-1/2"
          size={20}
        />
        <input
          className="text-sm  pr-2 pl-8 focus:outline-none border h-10 w-[24rem] border-gray-300 rounded-sm"
          placeholder="search"
          type="search"
        />
      </div>
      <div className="flex gap-5 mr-2 mt-4">
        <Popover className="relative">
          {({ open }) => (
            <>
              <Popover.Button className="">
                {/* <span className="mr-2">Messages</span> */}
                <BsChatLeft size={20} />
              </Popover.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute right-0 z-10 w-80">
                  <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                    <div className="relative grid gap-8 bg-white p-7 lg:grid-cols-2"></div>
                    <div className="bg-gray-50 p-4">
                      <a
                        href="##"
                        className="flow-root rounded-md px-2 py-2 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                      >
                        <span className="flex items-center">
                          <span className="text-sm font-medium text-gray-900">
                            Messages
                          </span>
                        </span>
                        <span className="block text-sm text-gray-500">
                          Start integrating products and tools
                        </span>
                      </a>
                    </div>
                  </div>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>
        <Popover className="relative">
          {({ open }) => (
            <>
              <Popover.Button className="">
                {/* <span className="mr-2">Messages</span> */}
                <BsBell size={20} />
              </Popover.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute right-0 z-10 w-80">
                  <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                    <div className="relative grid gap-8 bg-white p-7 lg:grid-cols-2"></div>
                    <div className="bg-gray-50 p-4">
                      <a
                        href="##"
                        className="flow-root rounded-md px-2 py-2 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                      >
                        <span className="flex items-center">
                          <span className="text-sm font-medium text-gray-900">
                            Notifications
                          </span>
                        </span>
                        <span className="block text-sm text-gray-500">
                          Start integrating products and tools
                        </span>
                      </a>
                    </div>
                  </div>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>
        <Menu></Menu>
      </div>
    </div>
  );
};

export default Header;
