// Resource management

let obj = { data: "sensitive info" };
let weakRef = new WeakRef(obj);
console.log("WeakRef deref:", weakRef.deref());

let registry = new FinalizationRegistry((heldValue) => {
  console.log(`Object with value "${heldValue}" has been garbage collected`);
});
registry.register(obj, "myObject");
obj = null;

let cache = new Map();
function getData(key) {
  if (!cache.has(key)) {
    cache.set(key, { value: `Data for ${key}` });
  }
  return cache.get(key);
}
console.log(getData("user1"));
console.log(getData("user2"));

let weakMap = new WeakMap();
let user = {};
weakMap.set(user, { session: "active" });
console.log("Session:", weakMap.get(user));
user = null;


let responsePromise = null;

async function readFile(url) {  
    if (!responsePromise) {
       
        responsePromise = fetch(url);
    }
    const response = await responsePromise;
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const processedData = await processData(response);
    
 }

 const reader = stream.getReader();
try {
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    // ... process value ...
  }
} finally {
  // Manual cleanup: This line is crucial for resource release
  reader.releaseLock(); 
}

// Internationalization

let num = 1234567.89;
console.log("US:", new Intl.NumberFormat("en-US").format(num));
console.log("DE:", new Intl.NumberFormat("de-DE").format(num));

console.log("USD:", new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(num));
console.log("EUR:", new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(num));


let dt = new Date("2025-12-31T18:30:00Z");
console.log("US date:", new Intl.DateTimeFormat("en-US").format(dt));
console.log("FR date:", new Intl.DateTimeFormat("fr-FR").format(dt));
console.log("JP date:", new Intl.DateTimeFormat("ja-JP").format(dt));

let fullOpts = { weekday: "long", year: "numeric", month: "long", day: "numeric", hour: "2-digit", minute: "2-digit" };
console.log("US full:", new Intl.DateTimeFormat("en-US", fullOpts).format(dt));
console.log("FR full:", new Intl.DateTimeFormat("fr-FR", fullOpts).format(dt));

console.log("New York:", new Intl.DateTimeFormat("en-US", { timeZone: "America/New_York", timeStyle: "long", dateStyle: "long" }).format(dt));
console.log("Tokyo:", new Intl.DateTimeFormat("ja-JP", { timeZone: "Asia/Tokyo", timeStyle: "long", dateStyle: "long" }).format(dt));

let words = ["apple", "Banana", "ápple", "Österreich"];
console.log("Default sort:", [...words].sort());
console.log("German sort:", [...words].sort(new Intl.Collator("de-DE", { sensitivity: "base" }).compare));
console.log("English sort:", [...words].sort(new Intl.Collator("en-US").compare));

let prEn = new Intl.PluralRules("en-US");
console.log("Plural 1:", prEn.select(1));
console.log("Plural 2:", prEn.select(2));

let prFr = new Intl.PluralRules("fr-FR");
console.log("Plural 1 FR:", prFr.select(1));
console.log("Plural 2 FR:", prFr.select(2));

let rtfEn = new Intl.RelativeTimeFormat("en", { numeric: "auto" });
console.log(rtfEn.format(-1, "day"));
console.log(rtfEn.format(1, "month"));

let rtfEs = new Intl.RelativeTimeFormat("es", { numeric: "auto" });
console.log(rtfEs.format(-1, "day"));
console.log(rtfEs.format(1, "month"));

let list = ["Apples", "Bananas", "Cherries"];
let listEn = new Intl.ListFormat("en", { style: "long", type: "conjunction" }).format(list);
let listFr = new Intl.ListFormat("fr", { style: "long", type: "disjunction" }).format(list);
console.log("List EN:", listEn);
console.log("List FR:", listFr);

let dnEn = new Intl.DisplayNames(["en"], { type: "region" });
let dnFr = new Intl.DisplayNames(["fr"], { type: "region" });
console.log("US in EN:", dnEn.of("US"));
console.log("US in FR:", dnFr.of("US"));

let langNames = new Intl.DisplayNames(["en"], { type: "language" });
console.log("fr:", langNames.of("fr"));
console.log("de:", langNames.of("de"));

let localeEn = new Intl.Locale("en-US");
console.log("Base name:", localeEn.baseName);
console.log("Language:", localeEn.language);
console.log("Region:", localeEn.region);
console.log("Maximized:", localeEn.maximize().toString());
