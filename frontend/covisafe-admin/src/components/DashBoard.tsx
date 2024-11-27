import { useEffect, useState } from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList,
  Tab,
  Table,
  TableContainer,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
  useToast,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserData } from "../redux/actions/usersAction";
import { RootState } from "../redux/type";
import { fetchAppointmentData } from "../redux/actions/appointmentAction";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
  ChartData,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import User from "./icons/User";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const weeklyData = [12, 19, 3, 5, 2, 3, 7];
const labels = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const datasets = [
  {
    label: "Personal Wallet",
    data: [
      5000, 10000, 8000, 6000, 4000, 7000, 9000, 11000, 14000, 13000, 17000,
      15000,
    ],
    backgroundColor: "rgba(75, 192, 192, 0.5)", // Light blue
  },
  {
    label: "Corporate Wallet",
    data: [
      4000, 8000, 6000, 5000, 3000, 6000, 7000, 9000, 12000, 10000, 15000,
      13000,
    ],
    backgroundColor: "rgba(54, 162, 235, 0.5)", // Slightly darker blue
  },
  {
    label: "Investment Wallet",
    data: [
      3000, 7000, 5000, 4000, 2000, 5000, 6000, 8000, 10000, 9000, 12000, 11000,
    ],
    backgroundColor: "rgba(153, 102, 255, 0.5)", // Light purple
  },
];
const data: ChartData<"bar", number[], string> = {
  labels: labels,
  datasets: datasets,
};
// Chart.js options (with proper typings)
const options: ChartOptions<"bar"> = {
  responsive: true,
  maintainAspectRatio: false, // Allow custom height
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
      text: "Crypto Analytics",
    },
  },
  scales: {
    x: {
      stacked: true, // Enable stacking for X-axis
      ticks: {
        color: "#64748b",
        font: {
          weight: "bold",
        },
      },
      grid: {
        drawTicks: false,
        display: false, // Remove vertical grid lines
      },
    },
    y: {
      border: {
        display: false,
      },
      stacked: true, // Enable stacking for Y-axis
      beginAtZero: true,
      ticks: {
        color: "#64748b",
        stepSize: 8000, // Set a custom interval between levels
        font: {
          weight: "bold",
        },
      },
    },
  },
};

export default function DashBoard() {
  const dispatch: any = useDispatch();
  const userData = useSelector((state: RootState) => state.userData.data);
  const userAppointment = useSelector(
    (state: RootState) => state.appointmentData.data
  );
  const loading = useSelector((state: RootState) => state.userData.loading);
  const usersLoading = useSelector(
    (state: RootState) => state.userData.loading
  );
  const toast = useToast();
  const [recentUsers, setRecentUsers] = useState<any[]>([]);
  const [recentAppointment, setRecentAppointment] = useState<any[]>([]);

  useEffect(() => {
    const token: string = localStorage.getItem("token") || "";

    if (token) {
      dispatch(fetchUserData(token));
      dispatch(fetchAppointmentData(token));
      console.log(userAppointment);
    } else {
      toast({
        title: "Error in",
        description: "you are not logged in please login first",
        status: "error",
        position: "top",
        duration: 9000,
        isClosable: true,
      });
    }
  }, [dispatch]);

  useEffect(() => {
    // Update recentUsers whenever data changes
    if (userData && userData.length) {
      const recentUsersData = userData.slice(0, 10);
      setRecentUsers(recentUsersData);
    }
    console.log("called agian recentusers useffect");
  }, [userData]);

  useEffect(() => {
    // update recentAppointment whenever data changes
    if (userAppointment && userAppointment.length) {
      const recentAppointmentData = userAppointment.slice(0, 10);
      setRecentAppointment(recentAppointmentData);
    }

    console.log("called agian recentAppointment useffect");
  }, [userAppointment]);

  console.log(userAppointment);

  const SearchIcon = () => {
    return (
      <svg
        width="24px"
        height="24px"
        viewBox="0 -0.5 25 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M7.30524 15.7137C6.4404 14.8306 5.85381 13.7131 5.61824 12.4997C5.38072 11.2829 5.50269 10.0233 5.96924 8.87469C6.43181 7.73253 7.22153 6.75251 8.23924 6.05769C10.3041 4.64744 13.0224 4.64744 15.0872 6.05769C16.105 6.75251 16.8947 7.73253 17.3572 8.87469C17.8238 10.0233 17.9458 11.2829 17.7082 12.4997C17.4727 13.7131 16.8861 14.8306 16.0212 15.7137C14.8759 16.889 13.3044 17.5519 11.6632 17.5519C10.0221 17.5519 8.45059 16.889 7.30524 15.7137V15.7137Z"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M11.6702 7.20292C11.2583 7.24656 10.9598 7.61586 11.0034 8.02777C11.0471 8.43968 11.4164 8.73821 11.8283 8.69457L11.6702 7.20292ZM13.5216 9.69213C13.6831 10.0736 14.1232 10.2519 14.5047 10.0904C14.8861 9.92892 15.0644 9.4888 14.9029 9.10736L13.5216 9.69213ZM16.6421 15.0869C16.349 14.7943 15.8741 14.7947 15.5815 15.0879C15.2888 15.381 15.2893 15.8559 15.5824 16.1485L16.6421 15.0869ZM18.9704 19.5305C19.2636 19.8232 19.7384 19.8228 20.0311 19.5296C20.3237 19.2364 20.3233 18.7616 20.0301 18.4689L18.9704 19.5305ZM11.8283 8.69457C12.5508 8.61801 13.2384 9.02306 13.5216 9.69213L14.9029 9.10736C14.3622 7.83005 13.0496 7.05676 11.6702 7.20292L11.8283 8.69457ZM15.5824 16.1485L18.9704 19.5305L20.0301 18.4689L16.6421 15.0869L15.5824 16.1485Z"
          fill="currentColor"
        />
      </svg>
    );
  };

  return (
    <div className="w-full flex flex-col  p-5 font-inter gap-4">
      {/* container for welcome text & search bar */}
      <div className="flex justify-between">
        <div>
          <h2 className="text-gray-500 font-medium text-base"> Hello Admin</h2>
          <h1 className="text-gray-800 font-[600] text-2xl font-inter">
            Welcome to dashboard!
          </h1>
        </div>
        <div className="flex gap-2">
          {/* search input  */}
          <InputGroup size={"md"}>
            <InputLeftElement pointerEvents={"none"} textColor={"gray.500"}>
              <SearchIcon />
            </InputLeftElement>
            <Input
              fontSize={"sm"}
              size={"md"}
              borderWidth={"1px"}
              focusBorderColor="gray.700"
              _focusVisible={{ border: "1px solid" }}
              rounded={"md"}
              ringColor={"black"}
            />
          </InputGroup>
          {/* notification icon */}
          <Button
            size={"md"}
            paddingX={"2.5"}
            width={"fit-content"}
            bg={"none"}
            _focusVisible={{ outlineColor: "gray.800", outline: "1px solid" }}
            borderWidth={"1px"}
            ringColor={"gray.100"}
          >
            <svg
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 19.25C15 20.0456 14.6839 20.8087 14.1213 21.3713C13.5587 21.9339 12.7956 22.25 12 22.25C11.2044 22.25 10.4413 21.9339 9.87869 21.3713C9.31608 20.8087 9 20.0456 9 19.25"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M5.58096 18.25C5.09151 18.1461 4.65878 17.8626 4.36813 17.4553C4.07748 17.048 3.95005 16.5466 4.01098 16.05L5.01098 7.93998C5.2663 6.27263 6.11508 4.75352 7.40121 3.66215C8.68734 2.57077 10.3243 1.98054 12.011 1.99998V1.99998C13.6977 1.98054 15.3346 2.57077 16.6207 3.66215C17.9069 4.75352 18.7557 6.27263 19.011 7.93998L20.011 16.05C20.0723 16.5452 19.9462 17.0454 19.6576 17.4525C19.369 17.8595 18.9386 18.144 18.451 18.25C14.2186 19.2445 9.81332 19.2445 5.58096 18.25V18.25Z"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </Button>
        </div>
      </div>
      {/* Tabs for chart */}
      <Tabs variant={"unstyled"}>
        <Flex justifyContent={"space-between"}>
          <TabList
            bg={"#f1f5f9"}
            width={"fit-content"}
            rounded={"md"}
            py={0}
            my="0"
          >
            <Tab
              _selected={{
                bg: "white",
                textColor: "gray.800",
                fontWeight: "500",
                shadow: "sm",
              }}
              margin={1}
              paddingY={0}
              paddingX={2}
              rounded={"md"}
              fontSize={"md"}
              fontWeight={500}
              textColor={"gray.500"}
            >
              Weekly
            </Tab>
            <Tab
              _selected={{
                bg: "white",
                textColor: "gray.800",
                fontWeight: "500",
              }}
              margin={1}
              paddingY={0}
              paddingX={2}
              rounded={"md"}
              fontWeight={500}
              fontSize={"md"}
              textColor={"gray.500"}
            >
              Monthly
            </Tab>
            <Tab
              _selected={{
                bg: "white",
                textColor: "gray.800",
                fontWeight: "500",
              }}
              margin={1}
              paddingY={0}
              paddingX={2}
              rounded={"md"}
              fontSize={"md"}
              fontWeight={500}
              textColor={"gray.500"}
            >
              Yearly
            </Tab>
          </TabList>
          <Flex gap={2}>
            <Button className="flex gap-2" bg={"gray.800"} color={"gray.50"}>
              Download
              <svg
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.5"
                  d="M3 15C3 17.8284 3 19.2426 3.87868 20.1213C4.75736 21 6.17157 21 9 21H15C17.8284 21 19.2426 21 20.1213 20.1213C21 19.2426 21 17.8284 21 15"
                  stroke="CurrentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12 3V16M12 16L16 11.625M12 16L8 11.625"
                  stroke="CurrentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </Button>
            <Input type="date" width={"fit-content"}></Input>
          </Flex>
        </Flex>
        <TabPanels>
          <TabPanel
            paddingX={0}
            paddingY={7}
            overflow={"auto"}
            maxWidth={"full"}
          >
            <Flex padding={0}>
              <div className="w-full border rounded-lg pb-10 pt-5 px-5">
                {/* bar chart */}
                <div className="h-[350px] w-full ">
                  <Box>
                    <h2 className="font-semibold font-inter text-gray-600 pb-3">
                      Crypto Analytics
                    </h2>
                    {/* <BarChart labels={labels} datasets={datasets} /> */}
                  </Box>
                  <Bar data={data} className="" options={options} />
                </div>
              </div>
            </Flex>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
          <TabPanel>
            <p>three!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>

      {/* Table section */}

      <TableContainer
        p={5}
        border={"1px"}
        borderColor={"gray.200"}
        rounded={"md"}
        overflow={"scroll"}
        maxWidth={"full"}
      >
        <Flex alignItems={"center"} justifyContent={"space-between"}>
          <h2 className=" font-semibold font-inter text-gray-600 pb-3">
            Crypto Analytics
          </h2>
          <Flex>
            {/* Menu */}
            {/* <Button
              size={"md"}
              paddingX={"2.5"}
              width={"fit-content"}
              bg={"none"}
              _focusVisible={{ outlineColor: "gray.800", outline: "1px solid" }}
            >
              <svg
                width="24px"
                height="24px"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clip-rule="evenodd"
                  d="M5.7 12.1143C4.82423 12.1143 4.11429 12.8242 4.11429 13.7C4.11429 14.5758 4.82423 15.2857 5.7 15.2857C6.57577 15.2857 7.28571 14.5758 7.28571 13.7C7.28571 12.8242 6.57577 12.1143 5.7 12.1143ZM2 13.7C2 11.6565 3.65655 10 5.7 10C7.74345 10 9.4 11.6565 9.4 13.7C9.4 15.7435 7.74345 17.4 5.7 17.4C3.65655 17.4 2 15.7435 2 13.7Z"
                  fill="currentColor"
                  fill-rule="evenodd"
                />
                <path
                  clip-rule="evenodd"
                  d="M22.7 12.1143C21.8242 12.1143 21.1143 12.8242 21.1143 13.7C21.1143 14.5758 21.8242 15.2857 22.7 15.2857C23.5758 15.2857 24.2857 14.5758 24.2857 13.7C24.2857 12.8242 23.5758 12.1143 22.7 12.1143ZM19 13.7C19 11.6565 20.6565 10 22.7 10C24.7435 10 26.4 11.6565 26.4 13.7C26.4 15.7435 24.7435 17.4 22.7 17.4C20.6565 17.4 19 15.7435 19 13.7Z"
                  fill="currentColor"
                  fill-rule="evenodd"
                />
                <path
                  clip-rule="evenodd"
                  d="M14.2 12.1143C13.3242 12.1143 12.6143 12.8242 12.6143 13.7C12.6143 14.5758 13.3242 15.2857 14.2 15.2857C15.0758 15.2857 15.7857 14.5758 15.7857 13.7C15.7857 12.8242 15.0758 12.1143 14.2 12.1143ZM10.5 13.7C10.5 11.6565 12.1565 10 14.2 10C16.2435 10 17.9 11.6565 17.9 13.7C17.9 15.7435 16.2435 17.4 14.2 17.4C12.1565 17.4 10.5 15.7435 10.5 13.7Z"
                  fill="currentColor"
                  fill-rule="evenodd"
                />
              </svg>
            </Button> */}

            <Menu>
              <MenuButton
                _focus={{ bgColor: "gray.800", color: "gray.50" }}
                // isRound={true}
                rounded={"full"}
                p={2}
                // variant="solid"
                // colorScheme="teal"
                color={"gray.800"}
                // bg={"none"}
                // className="!hover:bg-gray-800"
                _hover={{ bgColor: "gray.800", color: "gray.50" }}
                // aria-label="Done"
                // fontSize="20px"
              >
                <svg
                  width="24px"
                  height="24px"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clip-rule="evenodd"
                    d="M5.7 12.1143C4.82423 12.1143 4.11429 12.8242 4.11429 13.7C4.11429 14.5758 4.82423 15.2857 5.7 15.2857C6.57577 15.2857 7.28571 14.5758 7.28571 13.7C7.28571 12.8242 6.57577 12.1143 5.7 12.1143ZM2 13.7C2 11.6565 3.65655 10 5.7 10C7.74345 10 9.4 11.6565 9.4 13.7C9.4 15.7435 7.74345 17.4 5.7 17.4C3.65655 17.4 2 15.7435 2 13.7Z"
                    fill="currentColor"
                    fill-rule="evenodd"
                  />
                  <path
                    clip-rule="evenodd"
                    d="M22.7 12.1143C21.8242 12.1143 21.1143 12.8242 21.1143 13.7C21.1143 14.5758 21.8242 15.2857 22.7 15.2857C23.5758 15.2857 24.2857 14.5758 24.2857 13.7C24.2857 12.8242 23.5758 12.1143 22.7 12.1143ZM19 13.7C19 11.6565 20.6565 10 22.7 10C24.7435 10 26.4 11.6565 26.4 13.7C26.4 15.7435 24.7435 17.4 22.7 17.4C20.6565 17.4 19 15.7435 19 13.7Z"
                    fill="currentColor"
                    fill-rule="evenodd"
                  />
                  <path
                    clip-rule="evenodd"
                    d="M14.2 12.1143C13.3242 12.1143 12.6143 12.8242 12.6143 13.7C12.6143 14.5758 13.3242 15.2857 14.2 15.2857C15.0758 15.2857 15.7857 14.5758 15.7857 13.7C15.7857 12.8242 15.0758 12.1143 14.2 12.1143ZM10.5 13.7C10.5 11.6565 12.1565 10 14.2 10C16.2435 10 17.9 11.6565 17.9 13.7C17.9 15.7435 16.2435 17.4 14.2 17.4C12.1565 17.4 10.5 15.7435 10.5 13.7Z"
                    fill="currentColor"
                    fill-rule="evenodd"
                  />
                </svg>
              </MenuButton>
              <MenuList>
                <MenuGroup>
                  <MenuItem>Refresh</MenuItem>
                  <MenuItem>Export </MenuItem>
                </MenuGroup>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>
        <Table size="sm">
          <Thead>
            <Tr className="border-spacing-9">
              <Th py={3}>ID</Th>
              <Th py={3}>Name</Th>
              <Th py={3}>Coin</Th>
              <Th py={3}>Date</Th>
              <Th py={3}>Process</Th>
              <Th py={3}>Amount</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>#1234</Td>
              <Td>Amy Yelsner</Td>
              <Td>
                <i className="pi pi-ethereum bg-surface-950 text-surface-0 dark:bg-surface-0 dark:text-surface-950 w-7 h-7 rounded-full flex items-center justify-center"></i>
              </Td>
              <Td>May 5th</Td>
              <Td>Buy</Td>
              <Td>Amount</Td>
            </Tr>
            <Tr>
              <Td>#1234</Td>
              <Td>Amy Yelsner</Td>
              <Td>
                <i className="pi pi-ethereum bg-surface-950 text-surface-0 dark:bg-surface-0 dark:text-surface-950 w-7 h-7 rounded-full flex items-center justify-center"></i>
              </Td>
              <Td>May 5th</Td>
              <Td>Buy</Td>
              <Td>Amount</Td>
            </Tr>
            <Tr>
              <Td>#1234</Td>
              <Td>Amy Yelsner</Td>
              <Td>
                <i className="pi pi-ethereum bg-surface-950 text-surface-0 dark:bg-surface-0 dark:text-surface-950 w-7 h-7 rounded-full flex items-center justify-center"></i>
              </Td>
              <Td>May 5th</Td>
              <Td>Buy</Td>
              <Td>Amount</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
}
