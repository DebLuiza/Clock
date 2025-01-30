import CardCarousel from "../CardCarousel/CardCarousel"
import styles from "./Styles/Carousel.module.scss"

export default function Carousel() {

  const handleCheckboxChange = (isChecked) => {
    console.log('Checkbox está:', isChecked ? 'marcado' : 'desmarcado');
  };
  
  return (
    <div>
      <CardCarousel checked={false} onChange={handleCheckboxChange}/>
    </div>
  )
}
