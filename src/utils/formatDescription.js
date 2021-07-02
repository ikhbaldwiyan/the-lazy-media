export default function formatDescription(description) {
  let content = [];

  if(description) {
    for (let i = 0; i < description.length; i++) {
      const index = description[i]
      if (index.includes('https://thelazy.media') || index.includes('http://thelazy.media') ) {
        const img = `<img class="img-cover" src=${index} /> <br /> <br /> `
        content.push(img);
      } else if(index.includes('https://www.youtube.com/')) {
        const yt = `<iframe width="100%" height="400"src="${index}"></iframe> <br /> <br />`
        content.push(yt);
      } else {
        let desc = index;
        desc += ' <br> <br> ';
        content.push(desc);
      }
    }
  }

  return content;
}
