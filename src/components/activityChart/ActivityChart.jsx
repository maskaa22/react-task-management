import Select from "react-select";
import c from "./ActivityChart.module.css";
import Chart from "../chart/Chart";

const ActivityChart = () => {
  const options = [
    { value: "weekly", label: "This Week" },
    { value: "monthly", label: "This Month" },
    { value: "yearly", label: "This Year" },
  ];

  const customStyle = {
    control: (base) => ({
      ...base,
      backgroundColor: "transparent",
      border: "none",
      boxShadow: "none",
    }),
    indicatorsContainer: (base) => ({
      ...base,
      padding: 0,
      marginLeft: 0,
    }),
    menu: (base) => ({
      ...base,
    }),
    option: (base, state) => ({
      ...base,
      backgroundColor: state.isFocused ? "#F0F4FF" : "transparent",
      color: "#333",
    }),
  };
  return (
    <div className={c.chart}>
      <div className={c.titleContainer}>
        <h3 className={c.title}>Activity</h3>
        <Select
          className={c.select}
          options={options}
          defaultValue={options[0]}
          styles={customStyle}
          components={{
            IndicatorSeparator: () => null,
          }}
        />
      </div>
      <Chart />
    </div>
  );
};

export default ActivityChart;
