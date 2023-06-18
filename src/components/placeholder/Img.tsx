import {ComponentProps, FC} from 'react';
import Image from "next/image";

type IImgProps =  ComponentProps<typeof Image>;

const Img: FC<IImgProps> = ({src, ...other}) => {
  return (
    <Image src={'/imgs/img-placeholder.svg'} {...other} />
  )
}

export default Img;
