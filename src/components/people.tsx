import { useState } from "react";
import type { ColumnsType } from "antd/es/table";
import { People } from "../types/people";
import { useListPeopleQuery } from "../services";
import { Grid, getColumnSearchProps } from "./ui-shared";

const PeopleList = () => {
  const [page, setPage] = useState<number>(1);
  const [search, setSearch] = useState<string>();
  const { data, isLoading, isFetching } = useListPeopleQuery({ page, search });

  const handleFilter = (searchText: string) => {
    setSearch(searchText);
    setPage(1);
  };

  const handleResetFilter = () => {
    setSearch(undefined);
    setPage(1);
  };

  const columns: ColumnsType<People> = [
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
      title: "Gender",
      dataIndex: "gender",
      key: "gender",
    },
    {
      title: "Birth Year",
      dataIndex: "birth_year",
      key: "birth_year",
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

export default PeopleList;
