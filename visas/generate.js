const fs = require('fs');
const yaml = require('js-yaml');
const flat = require('flat');
const pdf = require('markdown-pdf');
const Readable = require('stream').Readable;

try {
    // Load info map
    const info = yaml.safeLoad(fs.readFileSync('info.yaml', 'utf8'));
    const map = flat.flatten(info);

    // Load markdown letter template
    const template = fs.readFileSync('letter.md', 'utf8');

    // Generate letter from template using info map
    const letter = template.replace(/##.*?##/g, m => map[m.replace(/##/g,'')]);
    //console.log(letter);

    // Generate pdf from markdown letter
    new Readable({read(size) {
        this.push(letter);
        this.push(null);
    }}).pipe(pdf({cssPath: './pdf.css'})).pipe(fs.createWriteStream('Our_Networks_Invitation_Letter_for_' + map['applicant.name'].replace(/ /g,'_') + '.pdf')) 
} catch (e) {
    console.log(e);
}
