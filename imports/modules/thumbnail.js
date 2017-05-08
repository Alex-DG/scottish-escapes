import Thumbnail from '../../imports/ui/components/Thumbnail';

const getThumbnail = (original, scale) => {
  var canvas = original;

  canvas.width = original.width * scale;
  canvas.height = original.height * scale;

  canvas.getContext("2d").drawImage(original, 0, 0, canvas.width, canvas.height);

  return canvas
}

export default getThumbnail;
