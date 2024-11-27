import React from "react";
import { Box, Flex } from "@chakra-ui/layout";
import {
  Icon,
  IconButton,
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList,
  background,
} from "@chakra-ui/react";
import { HamburgerIcon, SunIcon } from "@chakra-ui/icons";
import User from "./icons/User";
export default function NavBar() {
  const navItems = [];
  return (
    <Box
      display={"flex"}
      justifyContent={"space-between"}
      margin={"5"}
      flexDir={"column"}
      alignItems={"center"}
      p={"5"}
      rounded={"md"}
      width={"fit-content"}
      backgroundColor={"#f8fafc"}
      className="h-[calc(100vh-2.5rem)]"
    >
      <Flex flexDir={"column"} justifyContent={"center"} alignItems={"center"}>
        <div className="text-center ring-2 px-2 rounded-md ring-gray-900 h-fit w-fit mb-5">
          <a
            href="/"
            className="font-medium text-2xl"
            style={{ fontFamily: "Ubuntu, sans-serif" }}
          >
            C
            {/* Covi<span className="text-red-600">safe</span>
          <sup>+</sup> */}
          </a>
        </div>
        <ul className=" text-gray-900 flex flex-col gap-2 font-semibold ">
          {/* for active use this */}
          {/* <a
            href="#"
            className="inline-flex items-center text-sm font-medium text-gray-800 hover:text-gray-50 hover:border-red-300 focus:outline-none focus:text-gray-50 transition-colors duration-700 hover:bg-gray-900 focus:bg-slate-200 p-2 rounded-md"
          ></a> */}
          <li>
            <a
              href="#"
              className="inline-flex items-center text-sm font-medium transition-colors duration-700 hover:bg-slate-200 focus:bg-slate-200 p-3 rounded-md"
            >
              <svg
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 15L12 18"
                  stroke="currentcolor"
                  stroke-width="2"
                  stroke-linecap="round"
                />
                <path
                  d="M22 12.2039V13.725C22 17.6258 22 19.5763 20.8284 20.7881C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.7881C2 19.5763 2 17.6258 2 13.725V12.2039C2 9.91549 2 8.77128 2.5192 7.82274C3.0384 6.87421 3.98695 6.28551 5.88403 5.10813L7.88403 3.86687C9.88939 2.62229 10.8921 2 12 2C13.1079 2 14.1106 2.62229 16.116 3.86687L18.116 5.10812C20.0131 6.28551 20.9616 6.87421 21.4808 7.82274"
                  stroke="currentcolor"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="inline-flex items-center text-sm font-medium transition-colors duration-700 hover:bg-slate-200 focus:bg-slate-200 p-3 rounded-md"
            >
              <svg
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="12"
                  cy="6"
                  r="4"
                  stroke="currentColor"
                  stroke-width="2"
                />
                <path
                  d="M15 20.6151C14.0907 20.8619 13.0736 21 12 21C8.13401 21 5 19.2091 5 17C5 14.7909 8.13401 13 12 13C15.866 13 19 14.7909 19 17C19 17.3453 18.9234 17.6804 18.7795 18"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="inline-flex items-center text-sm font-medium transition-colors duration-700 hover:bg-slate-200 focus:bg-slate-200 p-3 rounded-md"
            >
              <svg
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 15L12 18"
                  stroke="currentcolor"
                  stroke-width="2"
                  stroke-linecap="round"
                />
                <path
                  d="M22 12.2039V13.725C22 17.6258 22 19.5763 20.8284 20.7881C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.7881C2 19.5763 2 17.6258 2 13.725V12.2039C2 9.91549 2 8.77128 2.5192 7.82274C3.0384 6.87421 3.98695 6.28551 5.88403 5.10813L7.88403 3.86687C9.88939 2.62229 10.8921 2 12 2C13.1079 2 14.1106 2.62229 16.116 3.86687L18.116 5.10812C20.0131 6.28551 20.9616 6.87421 21.4808 7.82274"
                  stroke="currentcolor"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="inline-flex items-center text-sm font-medium transition-colors duration-700 hover:bg-slate-200 focus:bg-slate-200 p-3 rounded-md"
            >
              <svg
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 15L12 18"
                  stroke="currentcolor"
                  stroke-width="2"
                  stroke-linecap="round"
                />
                <path
                  d="M22 12.2039V13.725C22 17.6258 22 19.5763 20.8284 20.7881C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.7881C2 19.5763 2 17.6258 2 13.725V12.2039C2 9.91549 2 8.77128 2.5192 7.82274C3.0384 6.87421 3.98695 6.28551 5.88403 5.10813L7.88403 3.86687C9.88939 2.62229 10.8921 2 12 2C13.1079 2 14.1106 2.62229 16.116 3.86687L18.116 5.10812C20.0131 6.28551 20.9616 6.87421 21.4808 7.82274"
                  stroke="currentcolor"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="inline-flex items-center text-sm font-medium transition-colors duration-700 hover:bg-slate-200 focus:bg-slate-200 p-3 rounded-md"
            >
              <svg
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 15L12 18"
                  stroke="currentcolor"
                  stroke-width="2"
                  stroke-linecap="round"
                />
                <path
                  d="M22 12.2039V13.725C22 17.6258 22 19.5763 20.8284 20.7881C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.7881C2 19.5763 2 17.6258 2 13.725V12.2039C2 9.91549 2 8.77128 2.5192 7.82274C3.0384 6.87421 3.98695 6.28551 5.88403 5.10813L7.88403 3.86687C9.88939 2.62229 10.8921 2 12 2C13.1079 2 14.1106 2.62229 16.116 3.86687L18.116 5.10812C20.0131 6.28551 20.9616 6.87421 21.4808 7.82274"
                  stroke="currentcolor"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
            </a>
          </li>
        </ul>
      </Flex>
      <div>
        <Menu>
          <MenuButton>
            <IconButton
              isRound={true}
              variant="solid"
              colorScheme="teal"
              background={"red.600"}
              aria-label="Done"
              fontSize="20px"
              icon={<User h={16} w={16} />}
            />
          </MenuButton>
          <MenuList>
            <MenuGroup title="Profile">
              <MenuItem>My Account</MenuItem>
              <MenuItem>Payments </MenuItem>
            </MenuGroup>
            <MenuDivider />
            <MenuGroup title="Help">
              <MenuItem>Docs</MenuItem>
              <MenuItem>FAQ</MenuItem>
            </MenuGroup>
          </MenuList>
        </Menu>
      </div>
    </Box>
  );
}
