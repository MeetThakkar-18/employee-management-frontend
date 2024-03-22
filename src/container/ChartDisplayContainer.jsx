import React, { useState } from "react";
import { useSelector } from "react-redux";
import ChartDisplay from "../components/ChartDisplay";
import { selectChartData } from "../features/chartSlice";
import ChartModal from "../components/chartModal";

const ChartDisplayContainer = () => {
  const chartData = useSelector(selectChartData);
  const [modalOpen, setModalOpen] = useState(false);
  const [chartDetails, setChartDetails] = useState(null);

  const handleGenerateChart = (title, type, field) => {
    setChartDetails({ title, type, field });
  };

  return (
    <div>
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <button
          onClick={() => setModalOpen(true)}
          style={{
            marginTop: "12px",
            padding: "10px 20px",
            fontSize: "16px",
            backgroundColor: "#007bff",
            color: "#fff",
            borderRadius: "5px",
            border: "none",
            cursor: "pointer",
          }}
        >
          Generate Charts
        </button>
      </div>
      <ChartModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        onGenerateChart={handleGenerateChart}
      />
      {chartDetails && (
        <ChartDisplay
          data={chartData}
          title={chartDetails.title}
          type={chartDetails.type}
          field={chartDetails.field}
        />
      )}
    </div>
  );
};

export default ChartDisplayContainer;
