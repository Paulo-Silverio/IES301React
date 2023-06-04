import { useState } from "react";
import './CSS.css';

let initialShapes = [
  { id: 0, type: "circle", x: 50, y: 100 },
  { id: 1, type: "square", x: 150, y: 100 },
  { id: 2, type: "circle", x: 250, y: 100 },
];

function ShapeEditor() {
  const [shapes, setShapes] = useState(initialShapes);
  function handleClick() {
    const nextShapes = shapes.map((shape) => {
      if (shape.type == "square") {
        // No change
        return shape;
      } else {
        return {
          ...shape,
          y: shape.y + 50,
        };
      }
    });
    setShapes(nextShapes);
  }
  return (
    <>
      <div className="atividades">
        <h1 className="atv"> ShapeEditor </h1>
        <button onClick={handleClick}>Move circles down!</button>
        {shapes.map((shape) => (
          <div
            key={shape.id}
            style={{
              background: "purple",
              position: "absolute",
              left: shape.x,
              top: shape.y,
              borderRadius: shape.type === "circle" ? "50%" : "",
              width: 20,
              height: 20,
            }}
          ></div>
        ))}
      </div>
    </>
  );
}

export default ShapeEditor;