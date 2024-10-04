"use client";

import React, { useCallback, useState } from "react";
import Chart, {
  Series,
  Aggregation,
  ArgumentAxis,
  Grid,
  Label,
  ValueAxis,
  Margin,
  Legend,
  Tooltip,
} from "devextreme-react/chart";
import RangeSelector, {
  Size,
  Scale,
  Chart as RsChart,
  ValueAxis as RsValueAxis,
  Series as RsSeries,
  Aggregation as RsAggregation,
  Behavior,
  RangeSelectorTypes,
} from "devextreme-react/range-selector";
import { dataSource } from "./data.js";

function Stock() {
  const [visualRange, setVisualRange] = useState({});

  const updateVisualRange = useCallback(
    (e: RangeSelectorTypes.ValueChangedEvent) => {
      setVisualRange(e.value);
    },
    [setVisualRange]
  );

  return (
    <div id="chart-demo" className="scale-90 w-[1000px] h-[600px] m-2 p-5 border border-emerald-500">
      <Chart
        id="zoomedChart"
        dataSource={dataSource}
        title="Google Inc. Stock Prices"
      >
        <Series
          type="candlestick"
          openValueField="Open"
          highValueField="High"
          lowValueField="Low"
          closeValueField="Close"
          argumentField="Date"
        >
          <Aggregation enabled={true} />
        </Series>
        <ArgumentAxis
          visualRange={visualRange}
          valueMarginsEnabled={false}
          argumentType="datetime"
        >
          <Grid visible={true} />
          <Label visible={false} />
        </ArgumentAxis>
        <ValueAxis valueType="numeric" />
        <Margin right={10} />
        <Legend visible={true} />
        <Tooltip enabled={true} />
      </Chart>
      <RangeSelector className="mr-3 mt-2" dataSource={dataSource} onValueChanged={updateVisualRange}>
        <Size height={100} />
        <RsChart>
          <RsValueAxis valueType="numeric" />
          <RsSeries type="line" valueField="Open" argumentField="Date">
            <RsAggregation enabled={true} />
          </RsSeries>
        </RsChart>
        <Scale
          placeholderHeight={20}
          minorTickInterval="day"
          tickInterval="month"
          valueType="datetime"
          aggregationInterval="week"
        />
        <Behavior snapToTicks={false} valueChangeMode="onHandleMove" />
      </RangeSelector>
    </div>
  );
}

export default Stock;
