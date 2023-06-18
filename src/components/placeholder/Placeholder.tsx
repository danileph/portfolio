import Img from './Img'
interface PlaceholderCompound {
  Img: typeof Img
}

const Placeholder: PlaceholderCompound = () => {}
Placeholder.Img = Img;