"use client";
import Image from "next/image";
//loader
// const myLoader = ({src , witdth , quality}) => {
//   return `https://cdn.fotofits.com/petzlover/gallery/img/l/munchkin-kitten-872747.jpg?w=${500}&q=${75}`
// }

const ImageStyle = {
  borderRadius: "50px",
  border: "1px solid #fff",
};
export default function Home() {
  const handleLoadingComplete = (event) => {
    console.log("Image Loaded", event.target);
  };
  return (
    // <div>
    // {/* <div style={{ position: 'relative', width: '500', height: '500' }}> */}
    // <Image
    // // loader={myLoader}
    // src = "/OIP.jpg"
    // width={700}
    // height={700}
    // alt="dog-image"
    // sizes="(max-witdh : 768px) 100vw, 50vw"
    // // fill
    // // objectFit="cover"
    // quality={100}
    // />
    // {/* </div> */}
    // </div>

    <div>
      {/* <Image
      src='/OIP.jpg'
      alt='Logo'
      width={200}
      height={100}
      priority={true}
      /> */}

      <Image
        src="https://images.pexels.com/photos/28569814/pexels-photo-28569814/free-photo-of-xe-suv-mercedes-mau-tr-ng-phia-tr-c-c-a-container-ch-hang-rustic.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        width={523}
        alt="car"
        height={600}
        quality={100}
        style={ImageStyle}
        onLoad={handleLoadingComplete}
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,/9j/2wCEAAkGBxMTEhUTExMWFhUXGR4aGRgYGRodGh4aGh8aGhoaHhgYHSggGBolGxgaITEhJSkrLi4uGB8zODMtNygtLisBCgoKDg0OGxAQGy0lICYtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIALcBEwMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABAIDBQYHAQj/xAA9EAABAwIEBAMGBQcFAAAAAAABAAIRAwQFEiExBkFRYXEHEzKBkaEHFCNCUpLR8BYjYpLhFSRyscHR4fAUI4KisoP/xAAXAQEBAQEAAAAAAAAAAAAAAAABAgAD/8QAGBEBAQEBAQAAAAAAAAAAAAAAAAERAgL/2gAMAwEAAhEDEQA/APTFV1RWrRA0mSFnGaHlZbc8Nx3Bx8PTvSxeNNZpUOZVGAAlI83lPPTBx5YOYHoKrtyQOFB2yFdoN7qSxWSKSd1FkISJHoHedtxAK7sBgcAcbV6hq6ny0fhVTTiOZWCyVWaZiMxWxkZYYhU5Uk7YJxnP6UrGHTyhx9Tzla5I3q1pKYpcswuAUgtGczb8Txr5/..."
      />
    </div>
  );
}
