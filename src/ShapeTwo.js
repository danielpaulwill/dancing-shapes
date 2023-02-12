import { useEffect, useState } from 'react';

function ShapeTwo() {
  const [shapeCount, setShapeCount] = useState(1)
  const [shape, setShape] = useState()

  useEffect(() => {
    if (shapeCount === 1) {
      setShape("oval")
    } else if (shapeCount === 2) {
      setShape("trapezoid")
    } else if (shapeCount === 3) {
      setShape("star")
    } else setShapeCount(1)
  }, [shapeCount])

  function handleShapeClick() {
    setShapeCount(shapeCount => ++shapeCount)
  }

  return (
    <div className={shape} onClick={handleShapeClick}>
    </div>
  );
}

export default ShapeTwo;
