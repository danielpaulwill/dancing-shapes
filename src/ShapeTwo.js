import { useEffect, useState } from 'react';

function ShapeTwo() {
  const [shapeCount, setShapeCount] = useState(1)
  const [shape, setShape] = useState()

  const oval = "https://raw.githubusercontent.com/danielpaulwill/dancing-shapes/main/src/assets/oval.png"
  const trapezoid = "https://raw.githubusercontent.com/danielpaulwill/dancing-shapes/main/src/assets/trapezoid.png"
  const star = "https://raw.githubusercontent.com/danielpaulwill/dancing-shapes/main/src/assets/star.png"

  useEffect(() => {
    if (shapeCount === 1) {
      setShape(oval)
    } else if (shapeCount === 2) {
      setShape(trapezoid)
    } else if (shapeCount === 3) {
      setShape(star)
    } else setShapeCount(1)
  }, [shapeCount])

  function handleShapeClick() {
    console.log("clicked")
    setShapeCount(shapeCount => ++shapeCount)
  }

  return (
    <div className='twoX' onClick={handleShapeClick}>
      <img src={shape} className='twoY' alt='second shape'></img>
    </div>
  );
}

export default ShapeTwo;
