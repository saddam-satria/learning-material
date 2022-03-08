const ImageComponent = (content, url) => {
  const image = document.createElement('img');
  image.classList.add('image');
  image.src = url;

  content.append(image);
};
export default ImageComponent;
