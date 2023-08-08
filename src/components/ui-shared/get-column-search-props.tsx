import { Button, Input, Space } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import type { ColumnType } from "antd/es/table";

export const getColumnSearchProps = ({
  dataIndex,
  handleFilter,
  handleResetFilter,
}: {
  dataIndex: string;
  handleFilter: (serachText: string, dataIndex: string) => void;
  handleResetFilter: () => void;
}): ColumnType<any> => ({
  filterDropdown: ({ setSelectedKeys, selectedKeys, confirm }) => (
    <div style={{ padding: 8 }} onKeyDown={(e) => e.stopPropagation()}>
      <Input
        placeholder={`Search ${dataIndex}`}
        value={selectedKeys[0]}
        onChange={(e) =>
          setSelectedKeys(e.target.value ? [e.target.value] : [])
        }
        style={{ marginBottom: 8, display: "block" }}
      />
      <Space>
        <Button
          type="primary"
          onClick={() => {
            handleFilter((selectedKeys as string[])[0], dataIndex);
            confirm();
          }}
          icon={<SearchOutlined />}
          size="small"
          style={{ width: 90 }}
        >
          Search
        </Button>
        <Button
          onClick={() => {
            setSelectedKeys([]);
            handleResetFilter();
          }}
          size="small"
          style={{ width: 90 }}
        >
          Reset
        </Button>
      </Space>
    </div>
  ),
});
