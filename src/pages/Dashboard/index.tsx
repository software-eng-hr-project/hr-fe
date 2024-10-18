import Dialog from "components/common/Dialog";
import { Flex, Text } from "@mantine/core";
import Table from "components/common/Table";
import { TableColumnType } from "components/common/Table/types";
import Tooltip from "components/common/Tooltip";
import http from "utils/axios.utils";

type ElementType = {
  key: string;
  position: number;
  mass: number;
  symbol: string;
  name: string;
};

export default function Dashboard() {
  const elements: ElementType[] = [
    { key: "1", position: 6, mass: 12.011, symbol: "C", name: "Carbon" },
    { key: "2", position: 7, mass: 14.007, symbol: "N", name: "Nitrogen" },
    { key: "3", position: 39, mass: 88.906, symbol: "Y", name: "Yttrium" },
    { key: "4", position: 56, mass: 137.33, symbol: "Ba", name: "Barium" },
    { key: "5", position: 58, mass: 140.12, symbol: "Ce", name: "Cerium" },
    { key: "6", position: 58, mass: 140.12, symbol: "Ce", name: "Cerium" },
    { key: "7", position: 58, mass: 140.12, symbol: "Ce", name: "Cerium" },
    { key: "8", position: 58, mass: 140.12, symbol: "Ce", name: "Cerium" },
    { key: "9", position: 58, mass: 140.12, symbol: "Ce", name: "Cerium" },
    { key: "10", position: 58, mass: 140.12, symbol: "Ce", name: "Cerium" },
    { key: "11", position: 58, mass: 140.12, symbol: "Ce", name: "Cerium" },
    { key: "12", position: 58, mass: 140.12, symbol: "Ce", name: "Cerium" },
  ];

  const columns: TableColumnType<ElementType>[] = [
    { title: "Position", dataIndex: "position" },
    { title: "Name", dataIndex: "name" },
    { title: "Symbol", dataIndex: "symbol" },
    { title: "Atomic Mass", dataIndex: "mass" },
    {
      title: "Actions",
      dataIndex: null,
      renderItem() {
        return (
          <Flex gap={10}>
            {/* <IconEdit color="#6c7a91" />
            <IconTrash /> */}
          </Flex>
        );
      },
    },
  ];

  return (
    <div>
      <Dialog
        onSubmit={() => {
          http.get("/users");
        }}
        onCancel={() => {}}
        okText="Send"
        buttonPositions="center"
        okButtonProps={{ color: "green" }}
        title="Are you sure you want to send request?"
        triggerItem={
          <Tooltip label="this is testing for backend service">
            <button type="submit">API test</button>
          </Tooltip>
        }
      >
        <Text>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod unde
          illo adipisci fugiat explicabo iste culpa nostrum doloremque eos, eius
          temporibus molestiae odit alias reiciendis libero. Voluptas, velit.
          Amet, ut!
        </Text>
        <Text>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod unde
          illo adipisci fugiat explicabo iste culpa nostrum doloremque eos, eius
          temporibus molestiae odit alias reiciendis libero. Voluptas, velit.
          Amet, ut!
        </Text>
      </Dialog>
      <div style={{ width: "700px", marginTop: "20px" }}>
        <Table
          header={
            <Flex p="sm">
              <Text color="text.0" weight="500" size="20px">
                {elements.length} Element
              </Text>
            </Flex>
          }
          columns={columns}
          data={elements}
          align="center"
          itemsPerPage={5}
          selectable
        />
      </div>
    </div>
  );
}
