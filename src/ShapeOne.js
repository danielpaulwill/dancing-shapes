import { useEffect, useState } from 'react';

function ShapeOne() {
  const [shapeCount, setShapeCount] = useState(1)
  const [shape, setShape] = useState()

  const square = "https://raw.githubusercontent.com/danielpaulwill/dancing-shapes/main/src/assets/square.png"
  const circle = "https://raw.githubusercontent.com/danielpaulwill/dancing-shapes/main/src/assets/circle.png"
  const triangle = "https://raw.githubusercontent.com/danielpaulwill/dancing-shapes/main/src/assets/triangle.png"

  useEffect(() => {
    if (shapeCount === 1) {
      setShape(square)
    } else if (shapeCount === 2) {
      setShape(circle)
    } else if (shapeCount === 3) {
      setShape(triangle)
    } else setShapeCount(1)
  }, [shapeCount])

  function handleShapeClick() {
    setShapeCount(shapeCount => ++shapeCount)
  }

  return (
    <div className='oneX' onClick={handleShapeClick}>
      <img src={shape} className='oneY' alt='first shape'></img>
    </div>
  );
}

export default ShapeOne;
