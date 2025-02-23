/* eslint-disable react/prop-types */
import { Layer, Line } from "react-konva";

const Grid = ({ width, height, gridSize }) => {
  const lines = [];

  // Horizontal lines
  for (let i = 0; i < height / gridSize; i++) {
    lines.push(
      <Line
        key={`h${i}`}
        points={[0, i * gridSize, width, i * gridSize]}
        stroke="#222222"
        strokeWidth={1}
      />
    );
  }

  // Vertical lines
  for (let i = 0; i < width / gridSize; i++) {
    lines.push(
      <Line
        key={`v${i}`}
        points={[i * gridSize, 0, i * gridSize, height]}
        stroke="#222222"
        strokeWidth={1}
      />
    );
  }

  return <Layer>{lines}</Layer>;
};

export default Grid;