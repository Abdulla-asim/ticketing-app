"use client";

import { Bar, BarChart, XAxis, YAxis } from "recharts";
import { ChartContainer } from "@/components/ui/chart";
import { useEffect, useState } from "react";

const Chart1 = ({stats}) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="min-h-[200px] w-full flex items-center justify-center">
        Loading...
      </div>
    );
  }

  console.log(stats, stats.numOpen);
  

  const chartData = [
    { key: "Closed", number: stats.numClosed, mobile: 80 },
    { key: "Open", number: stats.numOpen, mobile: 80 },
    { key: "Started", number: stats.numStarted, mobile: 80 },
  ];

  const chartConfig = {
    number: {
      label: "Number",
      color: "#2563eb",
    },
    mobile: {
      label: "Number",
      color: "#60a5fa",
    },
  };

  return (
    <ChartContainer
      config={chartConfig}
      className="min-h-[200px] w-full flex items-center justify-center"
    >
      <BarChart accessibilityLayer data={chartData}>
        <XAxis dataKey="key" />
        <YAxis dataKey="number" />
        <Bar dataKey="number" fill="var(--primary)" radius={4} />
      </BarChart>
    </ChartContainer>
  );
};

export default Chart1;
