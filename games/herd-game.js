class cow{
    constructor(id) {
        this.id = id;
        this.points = 0;
        this.kuh = false;
    }

}
let cows = [new cow(0), new cow(1), new cow(2)];


let herdquestions =[
    "Was ist ein typisches Getränk auf einer Party?",
    "Was ist ein typisches Gericht auf einem Weihnachtsessen?",
    "Was ist eine gängige Methode zur Entspannung?",
    "Was ist eine beliebte Sportart bei den Olympischen Spielen?",
    "Was ist ein häufiger Vorsatz zum Neujahr?",
    "Was ist ein gängiges Accessoire für Frauen?",
    "Was ist ein typischer Inhalt eines Picknickkorbs?",
    "Was findet man in einer Küche?",
    "Welche seltsame Superkraft würden die meisten Menschen gerne besitzen?",
    "Wenn Tiere plötzlich die Kontrolle über die Welt übernehmen würden, welches Tier würde die beste Regierung bilden?",
    "Wenn man nur noch einen Song für den Rest seines Lebens hören dürfte, welches Lied wäre das beliebteste?",
    "Welcher Gegenstand ist unverzichtbar für einen gelungenen Campingausflug?",
    "Welches Haustier ist am besten geeignet, um Kindern Verantwortung beizubringen?",
    "Welche Sportart ist ideal, um fit zu bleiben, ohne ins Fitnessstudio gehen zu müssen?",
    "In welchem Land ist es sehr kalt?",
    "Was ist das größte Stück Obst, welches du als Ganzes in den Mund nehmen kannst?",
    "Nenne einen Gegenstand, den du immer in deiner Handtasche/Rucksack haben solltest.",
    "Was ist ein typisches Geschenk zum Hochzeitstag?",
    "Welches Tier hat die beeindruckendsten Augen?",
    "Was ist das schönste Geräusch der Natur?",
    "Nenne eine Sache, die du am meisten an regnerischen Tagen magst.",
    "Was ist das Wichtigste für eine gute Nachtruhe?",
    "Was ist das beste Mittel gegen Langeweile?",
    "Nenne einen Ort, an dem man normalerweise nicht singt, aber es trotzdem tun könnte.",
    "Was kann man mit Geld kaufen, aber nicht mit Liebe?",
    "Was macht man vor dem Schlafengehen?",
    "Was ist etwas, das nur Kinder im Sommer tun?",
    "Nenne eine Sache, die man mit einem Hammer zerstören kann.",
    "Nenne einen Gegenstand, den man immer bei sich trägt.",
    "Was ist eine schlechte Angewohnheit?",
    "Nenne eine Aktivität, die man im Regen machen kann.",
    "Nenne ein Werkzeug, das in einer Werkstatt verwendet wird.",
    "Nenne eine Sache, die man im Winter macht.",
    "Nenne einen ungewöhnlichen Weg, um Geld zu verdienen.",
    "Was ist eine Sache, die man im Supermarkt kaufen kann, aber nicht essen sollte?",
    "Was ist eine Sache, die man im Dunkeln machen kann?",
    "Was ist ein typisches Geräusch, das du in einer Großstadt hörst?",
    "Nenne eine Sache, die besser ist, wenn sie alt ist.",
    "Was kann man tun, um eine Party sofort zu beenden?",
    "Nenne etwas, das du während eines Jobinterviews lieber nicht sagen solltest.",
    "Was haben Kühe, aber Menschen nicht?",
    "Was würdest du tun, wenn du eine Million Euro im Lotto gewinnst?",
    "Nenne eine Sache, die du auf eine einsame Insel mitnehmen würdest.",
    "Was ist das beste Geschenk für jemanden, den du nicht magst?",
    "Nenne etwas, das sich schnell bewegt.",
    "Was findet man oft in einem Kühlschrank?"]

function getpoints(numb) {
    if(document.getElementById("cow"+numb).classList.contains("btn-success")){
        cows[numb].points -= 1;
        document.getElementById("cow"+numb).classList.remove("btn-success");
        document.getElementById("pnkt-"+numb).innerText = cows[numb].points;
    }
    else {
        cows[numb].points += 1;
        document.getElementById("cow" + numb).classList.add("btn-success");
        document.getElementById("pnkt-" + numb).innerText = cows[numb].points;
    }
}
function placecow(form){
    document.getElementById("hascow"+form.cowID.value).innerHTML = '<i class="fa fa-cow"></i>'
}
function nextcowquestion() {

}

