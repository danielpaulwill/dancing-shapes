import { useEffect, useState } from 'react';

function ShapeThree() {
  const [shapeCount, setShapeCount] = useState(1)
  const [shape, setShape] = useState()

  const pentagon = "https://raw.githubusercontent.com/danielpaulwill/dancing-shapes/main/src/assets/pentagon.png"
  const heart = "https://raw.githubusercontent.com/danielpaulwill/dancing-shapes/main/src/assets/heart.png"
  const rectangle = "https://raw.githubusercontent.com/danielpaulwill/dancing-shapes/main/src/assets/rectangle.png"

  useEffect(() => {
    if (shapeCount === 1) {
      setShape(pentagon)
    } else if (shapeCount === 2) {
      setShape(heart)
    } else if (shapeCount === 3) {
      setShape(rectangle)
    } else setShapeCount(1)
  }, [shapeCount])

  function handleShapeClick() {
    setShapeCount(shapeCount => ++shapeCount)
  }

  return (
    <div className='threeX' onClick={handleShapeClick}>
      <img src={shape} className='threeY'  alt='third shape'></img>
    </div>
  );
}

export default ShapeThree;
