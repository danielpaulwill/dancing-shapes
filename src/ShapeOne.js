import { useEffect, useState } from 'react';

function ShapeOne() {
  const [shapeCount, setShapeCount] = useState(1)
  const [shape, setShape] = useState()

  useEffect(() => {
    if (shapeCount === 1) {
      setShape("square")
    } else if (shapeCount === 2) {
      setShape("circle")
    } else if (shapeCount === 3) {
      setShape("triangle")
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

export default ShapeOne;
