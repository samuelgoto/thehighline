const fs = require('fs');

let dataset = {
  "@context": "https://code.sgo.to/datasets",
  "@type": "Dataset",
  "classes": []
};
for (let dir of fs.readdirSync("images/")) {
  // console.log(dir);
  dataset.classes.push(`images/${dir}/index.jsonld`);
  let result = {
    "@context": "https://code.sgo.to/datasets",
    "@id": `${dir}`,
    "@type": "Class",
    "name": `${dir}`,
    images: []
  };
  for (let file of fs.readdirSync(`images/${dir}`)) {
   // console.log(file);
   result.images.push({
     "@type": "Image",
     url: `${file}`
    });
   // break;
  }
  fs.writeFileSync(`images/${dir}/index.jsonld`,
                   JSON.stringify(result, undefined, 2));
  // break;
}

fs.writeFileSync(`manifest.jsonld`,
                 JSON.stringify(dataset, undefined, 2));
