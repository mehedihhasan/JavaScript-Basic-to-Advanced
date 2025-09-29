// Internationalization

let num = 1234567.89;
console.log("US:", new Intl.NumberFormat("en-US").format(num));
console.log("DE:", new Intl.NumberFormat("de-DE").format(num));
console.log("IN:", new Intl.NumberFormat("en-IN").format(num));

console.log("USD:", new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(num));
console.log("EUR:", new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(num));

let dt = new Date("2025-12-31T18:30:00Z");
console.log("US date:", new Intl.DateTimeFormat("en-US").format(dt));
console.log("FR date:", new Intl.DateTimeFormat("fr-FR").format(dt));

let rtfEn = new Intl.RelativeTimeFormat("en", { numeric: "auto" });
console.log(rtfEn.format(-1, "day"));
console.log(rtfEn.format(1, "month"));

let rtfEs = new Intl.RelativeTimeFormat("es", { numeric: "auto" });
console.log(rtfEs.format(-1, "day"));
console.log(rtfEs.format(1, "month"));


// List formatting

let items = ["Apples", "Bananas", "Cherries"];
let listEn = new Intl.ListFormat("en", { style: "long", type: "conjunction" }).format(items);
let listFr = new Intl.ListFormat("fr", { style: "long", type: "disjunction" }).format(items);
console.log("EN:", listEn);
console.log("FR:", listFr);

let shortList = new Intl.ListFormat("en", { style: "short", type: "unit" }).format(["5 kg", "10 liters", "3 pieces"]);
console.log("Short list:", shortList);


// Collation

let words = ["apple", "Banana", "ápple", "Österreich"];
console.log("Default sort:", [...words].sort());
console.log("German sort:", [...words].sort(new Intl.Collator("de-DE", { sensitivity: "base" }).compare));
console.log("English sort:", [...words].sort(new Intl.Collator("en-US").compare));
console.log("Swedish sort:", [...words].sort(new Intl.Collator("sv-SE").compare));

let collator = new Intl.Collator("en", { sensitivity: "base" });
console.log("Compare apple vs Apple:", collator.compare("apple", "Apple"));
console.log("Compare apple vs ápple:", collator.compare("apple", "ápple"));


// Plural rules

let prEn = new Intl.PluralRules("en-US");
console.log("EN 1:", prEn.select(1));
console.log("EN 2:", prEn.select(2));
console.log("EN 0:", prEn.select(0));

let prFr = new Intl.PluralRules("fr-FR");
console.log("FR 1:", prFr.select(1));
console.log("FR 2:", prFr.select(2));
console.log("FR 0:", prFr.select(0));

let prRu = new Intl.PluralRules("ru-RU");
console.log("RU 1:", prRu.select(1));
console.log("RU 2:", prRu.select(2));
console.log("RU 5:", prRu.select(5));
console.log("RU 21:", prRu.select(21));
