function Telefon(marka, cena, kolor, ekran) {
	this.marka = marka;
	this.cena = cena;
	this.kolor = kolor;
	this.ekran = ekran;
}

Telefon.prototype.printInfo = function (){
	console.log("Marka telefonu to " + this.marka + ", kolor to " + this.kolor + ", posiada wyświetlacz "+ this.ekran +", a cena to "+ this.cena);
}

var iPhone6S = new Telefon("Apple", 2250, "srebrny", "5 cali");
iPhone6S.printInfo();

var Galaxy6 = new Telefon("Samsung", 1850, "czarny", "5,5 cala");
Galaxy6.printInfo();

var XperiaZ = new Telefon("Sony", 2100, "biały", "4,5 cala");
XperiaZ.printInfo();