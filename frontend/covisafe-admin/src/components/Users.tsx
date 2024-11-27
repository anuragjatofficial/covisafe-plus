import {
  Box,
  Button,
  Flex,
  Icon,
  Menu,
  MenuButton,
  MenuGroup,
  MenuItem,
  MenuList,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

export default function Users() {
  return (
    <Box
      border={"1px"}
      width={"full"}
      m={5}
      p={5}
      height={"screen"}
      borderColor={"gray.200"}
      rounded={"md"}
    >
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
            <Button size={"sm"} fontWeight={500} color={"gray.500"} gap={2}>
              <Icon viewBox="0 0 200 200" color="green.500" className="font-inter">
                <path
                  fill="currentColor"
                  d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
                />
              </Icon>
              9389 Active Users
            </Button>
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
    </Box>
  );
}
