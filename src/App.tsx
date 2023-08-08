import { Card, Tabs } from "antd";
import type { TabsProps } from "antd";
import { Provider } from "react-redux";
import { store } from "./store";
import People from "./components/people";
import FilmList from "./components/films";
import SpeciesList from "./components/species";
import classes from "./app.module.css";

const items: TabsProps["items"] = [
  {
    key: "1",
    label: `People`,
    children: <People />,
  },
  {
    key: "2",
    label: `Films`,
    children: <FilmList />,
  },
  {
    key: "3",
    label: `Species`,
    children: <SpeciesList />,
  },
];

function App() {
  return (
    <Provider store={store}>
      <Card className={classes.card}>
        <Tabs defaultActiveKey="1" items={items} onChange={() => {}} />
      </Card>
    </Provider>
  );
}

export default App;
