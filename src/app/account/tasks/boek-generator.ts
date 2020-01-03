import { Media, Document, Paragraph, TextRun, Style, Table, WidthType, AlignmentType, TableShading, BorderStyle, ShadingType, TableRow, TableCell } from "docx";
import { Brouwer } from 'src/app/brouwer/brouwer.model';
import * as fs from 'fs';
import { stringify } from 'querystring';
import { AppProperties } from 'docx/build/file/app-properties/app-properties';


export class DocumentCreator {
    create(brouwers: Brouwer[]) {

        const doc = new Document();
        const paragraphs = new Array<Paragraph>();
        const tables = new Array<Table>();

        for (let brouwer of brouwers) {
            //Create heading
            const paragraph = new Paragraph({
                text: brouwer.naam + " " + brouwer.stand.toString(),
                alignment: AlignmentType.CENTER
            });
            //Create empty table
            const table = new Table({
                rows: 4 * brouwer.bieren.length,
                columns: 5,
                widthUnitType: WidthType.PERCENTAGE,
                width: 100
            })
            //const flesje = Media.addImage(doc, Buffer.from('src/assets/images/flesje.png'));
            //const hand = Media.addImage(doc, Buffer.from('src/assets/images/hand.jpg'));

            doc.Document.add(paragraph)




            //paragraph.addChildElement(table);
            paragraphs.push(paragraph)

            tables.push(table);

            for (var index in brouwer.bieren) {


                let kleur = '';

                if (brouwer.bieren[index].kleur == 'Rood/roze') {
                    kleur = 'red'
                }
                else if (brouwer.bieren[index].kleur == 'Blond') {
                    kleur = 'gold'
                } else if (brouwer.bieren[index].kleur == 'Amber') {
                    kleur = '#d53600'
                } else if (brouwer.bieren[index].kleur == 'Bruin') {
                    kleur = '#632423'
                } else if (brouwer.bieren[index].kleur == 'Zwart') {
                    kleur = 'black'
                }

                //Tekst voor naam bier
                const bierTekst = new TextRun({
                    text: brouwer.bieren[index].naam.toUpperCase(),
                    font: {
                        name: 'Century Gothic'
                    },
                    bold: true,
                    size: 16,
                });

                //Tekst voor percentage
                const percentageTekst = new TextRun({
                    text: brouwer.bieren[index].percentage.toString() + "%",
                    font: {
                        name: 'Century Gothic'
                    },
                    bold: true,
                    size: 16
                });

                //Tekst voor primeur && recent??
                let primeurTekst = new TextRun({
                    text: "",
                });

                if (brouwer.bieren[index].recent) {
                    primeurTekst = new TextRun({
                        text: "Nieuw!",
                        bold: true,
                        color: "red"
                    });
                }

                if (brouwer.bieren[index].primeur) {
                    primeurTekst = new TextRun({
                        text: "Primeur!",
                        bold: true,
                        color: "red"
                    });
                }



                //Tekst voor omschrijving
                const omschrijvingTekst = new TextRun({
                    text: brouwer.bieren[index].omschrijving,
                    font: {
                        name: 'Century Gothic'
                    },
                    size: 16
                });

                let tekstKleur = "white"

                if (kleur == 'gold') {
                    tekstKleur = 'black'
                } else if (kleur == '#d53600') {
                    tekstKleur = 'black'
                }

                //Tekst voor biersoort
                const biersoortTekst = new TextRun({
                    text: brouwer.bieren[index].biersoort,
                    font: {
                        name: 'Century Gothic'
                    },
                    size: 16,
                    bold: true,
                    color: tekstKleur,
                });

                //Tekst voor opvat -> image
                let opvatTekst: TextRun;
                if (brouwer.bieren[index].opVat) {
                    opvatTekst = new TextRun({
                        text: "vat",
                        bold: true
                    });
                } else {
                    opvatTekst = new TextRun({
                        text: "fles",
                        bold: true,
                    });
                }

                let jetonTekst = new TextRun({
                    text: brouwer.bieren[index].aantalJetons.toString(),
                    font: {
                        name: 'Century Gothic'
                    },
                    size: 16
                })

                if (brouwer.bieren[index].aantalJetons == 2) {
                    jetonTekst = new TextRun({
                        text: brouwer.bieren[index].aantalJetons.toString(),
                        font: {
                            name: 'Century Gothic'
                        },
                        size: 16,
                        bold: true,
                        color: 'red'
                    })
                }

                //Tekst voor smaak
                const smaakTekst = new TextRun({
                    text: brouwer.bieren[index].smaak,
                    font: {
                        name: 'Century Gothic'
                    },
                    size: 16
                });

                //Tekst voor gisting
                const soortgistingTekst = new TextRun({
                    text: brouwer.bieren[index].soortGisting,
                    font: {
                        name: 'Century Gothic'
                    },
                    size: 16
                });

                //Icon voor "schrijven"

                const puntjes = new TextRun({
                    text: "......................."
                })





                //Eerste rij
                table.getCell(0 + (parseInt(index)) * 4, 0).add(new Paragraph({
                    children: [bierTekst]
                })).Borders.addRightBorder(BorderStyle.NONE, 0, 'white')

                table.getCell(0 + (parseInt(index)) * 4, 1).Borders.addRightBorder(BorderStyle.NONE, 0, 'white').addLeftBorder(BorderStyle.NONE, 0, 'white')

                table.getCell(0 + (parseInt(index)) * 4, 2).add(new Paragraph({
                    children: [primeurTekst]
                })).Borders.addRightBorder(BorderStyle.NONE, 0, 'white').addLeftBorder(BorderStyle.NONE, 0, 'white')

                table.getCell(0 + (parseInt(index)) * 4, 3).Borders.addRightBorder(BorderStyle.NONE, 0, 'white').addLeftBorder(BorderStyle.NONE, 0, 'white')

                table.getCell(0 + (parseInt(index)) * 4, 4).add(new Paragraph({
                    children: [percentageTekst], alignment: AlignmentType.RIGHT
                })).Borders.addLeftBorder(BorderStyle.NONE, 0, 'white');



                //Tweede rij
                table.getCell(1 + (parseInt(index)) * 4, 0).add(new Paragraph({
                    children: [omschrijvingTekst], alignment: AlignmentType.LEFT
                })).Borders.addBottomBorder(BorderStyle.NONE, 0, 'white');
                table.getRow(1 + (parseInt(index)) * 4).mergeCells(0, 4);



                //Derde rij
                table.getCell(2 + (parseInt(index)) * 4, 0).add(new Paragraph({ children: [biersoortTekst], alignment: AlignmentType.CENTER })).setShading({
                    color: kleur,
                    fill: kleur,
                    val: ShadingType.SOLID
                }).Properties.Borders.addRightBorder(BorderStyle.NONE, 0, 'white').addTopBorder(BorderStyle.NONE, 0, 'white')

                table.getCell(2 + (parseInt(index)) * 4, 0).Properties.setWidth(4, WidthType.NIL)

                table.getCell(2 + (parseInt(index)) * 4, 1).add(new Paragraph({ children: [opvatTekst] })).Borders.addRightBorder(BorderStyle.NONE, 0, 'white').addTopBorder(BorderStyle.NONE, 0, 'white').addLeftBorder(BorderStyle.NONE, 0, 'white');
                table.getCell(2 + (parseInt(index)) * 4, 2).add(new Paragraph({ children: [soortgistingTekst], alignment: AlignmentType.CENTER })).Borders.addRightBorder(BorderStyle.NONE, 0, 'white').addTopBorder(BorderStyle.NONE, 0, 'white').addLeftBorder(BorderStyle.NONE, 0, 'white');
                table.getCell(2 + (parseInt(index)) * 4, 3).add(new Paragraph({ children: [jetonTekst], alignment: AlignmentType.CENTER })).Borders.addRightBorder(BorderStyle.NONE, 0, 'white').addTopBorder(BorderStyle.NONE, 0, 'white').addLeftBorder(BorderStyle.NONE, 0, 'white');
                table.getCell(2 + (parseInt(index)) * 4, 4).add(new Paragraph({ children: [smaakTekst], alignment: AlignmentType.CENTER })).Borders.addTopBorder(BorderStyle.NONE, 0, 'white').addLeftBorder(BorderStyle.NONE, 0, 'white');
                //Vierde rij
                table.getCell(3 + (parseInt(index)) * 4, 0).add(new Paragraph("hand")).Borders.addRightBorder(BorderStyle.NONE, 0, 'white');
                table.getCell(3 + (parseInt(index)) * 4, 1).add(new Paragraph({ children: [puntjes] })).Borders.addLeftBorder(BorderStyle.NONE, 0, 'white');;
                table.getRow(3 + (parseInt(index)) * 4).mergeCells(1, 4);
                //table.getRow(0 + (parseInt(index)) * 4).mergeCells(0, 4);





            }
            doc.Document.add(table)
        }

        return doc;
    }
}




