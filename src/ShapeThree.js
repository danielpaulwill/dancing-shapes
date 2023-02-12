import { useEffect, useState } from 'react';

function ShapeThree() {
  const [shapeCount, setShapeCount] = useState(1)
  const [shape, setShape] = useState()

  useEffect(() => {
    if (shapeCount === 1) {
      setShape("pentagon")
    } else if (shapeCount === 2) {
      setShape("heart")
    } else if (shapeCount === 3) {
      setShape("parallelogram")
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

export default ShapeThree;
