import { Col, Pagination, Row, Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import { ListResponse } from "../../types";

export const Grid = ({
  columns,
  dataSource,
  isLoading,
  currentPage,
  onPageChange,
}: {
  columns: ColumnsType<any>;
  dataSource?: ListResponse<any>;
  isLoading: boolean;
  currentPage: number,
  onPageChange: (page: number) => void;
}) => {
  return (
    <Row gutter={[0, 32]}>
      <Col span={24}>
        <Table
          columns={columns}
          dataSource={dataSource?.results}
          pagination={false}
          loading={isLoading}
        />
      </Col>
      <Col span={24}>
        <Pagination
          current={currentPage}
          pageSize={10}
          showSizeChanger={false}
          total={dataSource?.count}
          onChange={(page) => {
            onPageChange(page);
          }}
        />
      </Col>
    </Row>
  );
};
