import { useState } from "react";
import type { ColumnsType } from "antd/es/table";
import { Film } from "../types/films";
import { useListFilmsQuery } from "../services";
import { Grid, getColumnSearchProps } from "./ui-shared";

const FilmList = () => {
  const [page, setPage] = useState<number>(1);
  const [search, setSearch] = useState<string>();
  const { data, isLoading, isFetching } = useListFilmsQuery({ page, search });

  const handleFilter = (searchText: string) => {
    setSearch(searchText);
    setPage(1);
  };

  const handleResetFilter = () => {
    setSearch(undefined);
    setPage(1);
  };

  const columns: ColumnsType<Film> = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      ...getColumnSearchProps({
        dataIndex: "title",
        handleFilter,
        handleResetFilter,
      }),
    },
    {
      title: "Director",
      dataIndex: "director",
      key: "director",
    },
    {
      title: "Producer",
      dataIndex: "producer",
      key: "producer",
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

export default FilmList;
