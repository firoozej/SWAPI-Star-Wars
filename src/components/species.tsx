import { useState } from "react";
import type { ColumnsType } from "antd/es/table";
import { Species } from "../types/species";
import { useListspeciesQuery } from "../services";
import { Grid, getColumnSearchProps } from "./ui-shared";

const SpeciesList = () => {
  const [page, setPage] = useState<number>(1);
  const [search, setSearch] = useState<string>();
  const { data, isLoading, isFetching } = useListspeciesQuery({ page, search });

  const handleFilter = (searchText: string) => {
    setSearch(searchText);
    setPage(1);
  };

  const handleResetFilter = () => {
    setSearch(undefined);
    setPage(1);
  };

  const columns: ColumnsType<Species> = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      ...getColumnSearchProps({
        dataIndex: "name",
        handleFilter,
        handleResetFilter,
      }),
    },
    {
      title: "Classification",
      dataIndex: "classification",
      key: "classification",
    },
    {
      title: "Designation",
      dataIndex: "designation",
      key: "designation",
    },
  ];

  return (
    <Grid
      columns={columns}
      dataSource={data}
      isLoading={isFetching || isLoading}
      currentPage={page}
      onPageChange={(page) => setPage(page)}
    />
  );
};

export default SpeciesList;
