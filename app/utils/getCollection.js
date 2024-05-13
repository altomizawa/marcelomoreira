export function getCollection(params) {
  let collection;
  switch (decodeURIComponent(params)) {
    case 'black&white':
      collection = 'black & white';
      break;
    case 'daydreams':
      collection = 'day dreams';
      break;
    case 'seducestemcells':
      collection = 'seduce stem cells';
      break;
    case 'drained':
    collection = 'drained';
    break;
    case 'seducestemcells':
      collection = 'seduce stem cells';
      break;
    case 'hallucinationsofahummingbird':
    collection = 'hallucinations of a hummingbird';
    break;
  
    case 'lips':
      collection = 'Lips';
      break;
    case 'carousselearring':
      collection = 'caroussel earring';
      break;
    case 'snakependant':
      collection = 'snake pendant';
      break;
    case 'pagescristalring':
    collection = 'pages cristal ring';
    break;
    case 'cellphoneholder':
      collection = 'Cellphone Holder';
      break;
    case 'magneticflatware':
    collection = 'magnetic flatware';
    break;
    case 'coffeetable':
    collection = 'coffee table';
    break;
    default: 
      collection = 'nothing to see'
  }

  return collection
}