var Docxtemplater = require('docxtemplater');
var fs = require('fs');
var path = require('path');
var PizZip = require('pizzip');
const docx = require("docx");

function replaceErrors(key, value) {
    if (value instanceof Error) {
        return Object.getOwnPropertyNames(value).reduce(function(error, key) {
            error[key] = value[key];
            return error;
        }, {});
    }
    return value;
}

function errorHandler(error) {
    console.log(JSON.stringify({ error: error }, replaceErrors));

    if (error.properties && error.properties.errors instanceof Array) {
        const errorMessages = error.properties.errors.map(function(error) {
            return error.properties.explanation;
        }).join("\n");
        console.log('errorMessages', errorMessages);
    }
    throw error;
}



//Load the docx file as a binary
var content = fs
    .readFileSync(path.resolve('./assets/card.docx'), 'binary');
var zip = new PizZip(content);
var doc;
try {
    doc = new Docxtemplater(zip);
} catch (error) {
    errorHandler(error);
}

exports.genDocx = (req, res) => {
    //set the templateVariables
    doc.setData({
        card_num: '121',
        shelter_address: 'г.Москва, ул.Ебанько, д.44',
        organisation: ' ГБУ "Автодор"',
        enclosure: '12',
        gender: 'женский',
        age: '10 лет',
        weight: '23 кг',
        name: 'Вовка',
        breed: 'метис',
        hair_color: 'рыжий',
        hair_type: 'короткая',
        ears_type: 'стоячие',
        tail_type: 'крючком',
        size: 'большой',
        special: 'нет',
        id_tag: '3745672374237',
        ster_date: '02.01.1535',
        doctor: "Ебанько Анал Гавриилович",
        socialised: "да",
        catch_order: '121',
        catch_date: '01.32.2077',
        act_catch: 'УК2312',
        catch_address: 'Красная Площадь',
        legal_entity: "__________________________",
        guardian: "__________________________",
        individual: 'ВВП',
        date_in: '21.14.1678',
        act_in: 'УКРФ01',
        date_out: '28.19.4888',
        act_out: '12334ГУ',
        reason: "переданно в собственность владельцу"

    });

    try {
        doc.render()
    } catch (error) {
        errorHandler(error);
    }
    var buf = doc.getZip()
        .generate({ type: 'nodebuffer' });
    // res.send(buf);
    // docx.Packer.toBuffer(doc).then((buffer) => {

    fs.writeFileSync(path.resolve('./assets/output.docx'), buf);

    res.download('./assets/output.docx', 'document.docx', function(err) {
        if (err) {
            // if the file download fails, we throw an error
            throw err;
        }
    });
    // res.send(fs.readFile('./assets/output.docx', 'docx'));
}