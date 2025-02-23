import { Layer, Stage,  Arrow } from "react-konva";
import Grid from "./Grid";
import { useEffect, useState } from "react";
import Methods from "./Methods";
// import { Controls } from "@xyflow/react";
// import { SlControlStart } from "react-icons/sl";
// import { Background, Controls, ReactFlow } from "@xyflow/react";

const Canvas = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);
    const [fromMethodId, setFromMethodId] = useState(null);
    const [connectors, setConnectors] = useState([]);

    // Sample shapes generation function for testing
    const generateShapes = () => {
        const shapes = [];
        for (let i = 0; i < 6; i++) {
            shapes.push({
                id: i,
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
            });
        }
        return shapes;
    };

    const handleDragEnd = (id, newX, newY) => {
        setShapes((prevShapes) =>
            prevShapes.map((shape) =>
                shape.id === id ? { ...shape, x: newX, y: newY } : shape
            )
        );
    };

    const INITIAL_SHAPES = generateShapes();
    const [shapes, setShapes] = useState(INITIAL_SHAPES);

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
            setHeight(window.innerHeight);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const getOrthogonalPath = (from, to) => {
        const path = [];
        const offset = 20; // Offset for the orthogonal path

        // Start point
        path.push(from.x, from.y);

        // Horizontal line to vertical alignment
        path.push(to.x, from.y);

        // Vertical line to destination
        path.push(to.x, to.y);

        return path;
    };

    return (
        <div className="relative">
            <Stage
                width={width * 2}
                height={height * 2}
                className="relative z-40 overflow-auto canvas bg-primary-dark-gray"
            >
                <Grid width={width * 2} height={height * 2} gridSize={30} />
                <Layer>
                    {connectors.map((con) => {
                        const from = shapes.find((s) => s.id === con.id);
                        const to = shapes.find((s) => s.id === con.to);

                        const path = getOrthogonalPath(from, to);

                        return (
                            <Arrow
                                key={con.id}
                                points={path}
                                stroke="#7C7C7C"
                                strokeWidth={2}
                                lineJoin="round"
                            />
                        );
                    })}
                    {shapes.map((shape) => (
                        <Methods
                            key={shape.id}
                            x={shape.x}
                            y={shape.y}
                            id={shape.id}
                            fromMethodId={fromMethodId}
                            setFromMethodId={setFromMethodId}
                            connectors={connectors}
                            setConnectors={setConnectors}
                            setShapes={setShapes}
                            handleDragEnd={handleDragEnd}
                        />
                    ))}
                </Layer>
            </Stage>
           
            <button
                className="fixed z-50 p-2 text-white bg-orange-500 rounded bottom-20 left-20"
                onClick={() => alert("Add Methods clicked!")}
            >
                + Add Methods
            </button>
        </div>
    );
};

export default Canvas;