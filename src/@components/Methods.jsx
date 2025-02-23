/* eslint-disable react/prop-types */
import { Group, Line, Rect, Text } from "react-konva";

const Methods = ({
  fromMethodId,
  connectors,
  setConnectors,
  setFromMethodId,
  id,
  x,
  y,
  handleDragEnd,
}) => {
  const handleMethodClick = () => {
    console.log("from Method id", fromMethodId, id);
    if (fromMethodId) {
      const newConnector = {
        from: fromMethodId,
        to: id,
        id: connectors.length,
      };
      setConnectors([...connectors, newConnector]);
      setFromMethodId(null);
    } else {
      setFromMethodId(id);
    }
  };

  return (
    <>
      <Group
        x={x}
        y={y}
        draggable
        onDragMove={(e) => {
          // Get the new position after dragging
          const newX = e.target.x();
          const newY = e.target.y();
          // Call the onDragEnd callback with the new position and id
          handleDragEnd(id, newX, newY);
        }}
      >
        <Rect
          x={0}
          y={0}
          width={250}
          height={150}
          fill="#181e25"
          stroke="#FFAD62"
          strokeWidth={1.5}
          cornerRadius={8}
          onClick={handleMethodClick}
        />

        <Line
          x={20}
          y={20}
          points={[-20, 15, 230, 15]}
          stroke="#FFAD62"
          strokeWidth={1.5}
        />
        <Text
          x={10}
          y={10}
          text={"cart_router.py" + id}
          fontSize={14}
          fontFamily="Mulish"
          fill="#ffffff"
          fontStyle="normal"
        />

        <Text
          x={10}
          y={55}
          text="add_item_to_cart"
          fontSize={14}
          fontFamily="Mulish"
          fill="#ffffff"
          fontStyle="normal"
        />

        <Text
          x={10}
          y={80}
          text="“DependentLibs” : [“sqlalchemy”]"
          fontSize={10}
          fontFamily="Mulish"
          fill="#FFAD62"
          fontStyle="400"
        />
        <Text
          x={10}
          y={100}
          text="“Params” : [“user_id”, “item”, “db”]"
          fontSize={10}
          fontFamily="Mulish"
          fill="#FFAD62"
          fontStyle="400"
        />
        <Text
          x={10}
          y={120}
          text="“ResponseObject” : “JSONResponse”"
          fontSize={10}
          fontFamily="Mulish"
          fill="#FFAD62"
          fontStyle="400"
        />
      </Group>
    </>
  );
};

export default Methods;