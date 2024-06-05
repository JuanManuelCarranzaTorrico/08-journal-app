import { Button, ImageList, ImageListItem } from "@mui/material";
import Swal from "sweetalert2";


export const ImageGalery = ({ images }) =>{
  const handleClick = (image) =>{
    Swal.fire({
      imageUrl: image,
      showCancelButton: true,
      imageAlt: 'imagen de la nota'
    })
  }
  return (
    <ImageList sx={{ width: '100%', height: 450 }} cols={4} rowHeight={164}>
      {images.map((image) => (
        <ImageListItem key={image}>
          
          <img
            srcSet={`${image}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            src={`${image}?w=164&h=164&fit=crop&auto=format`}
            alt={'imagen de la nota'}
            loading="lazy"
            onClick={()=>{handleClick(image)}}
          />
          
        </ImageListItem>
      ))}
    </ImageList>
  );
}

