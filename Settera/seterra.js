const dataLog = new Map([
    ["Liuksemburgas", "Liuksemburgas"],
    ["Albanija", "Tirana"],
    ["Šiaurės Makedonija", "Skopjė"],
    ["Andora", "Andora"],
    ["Malta", "Valeta"],
    ["Austrija", "Viena"],
    ["Moldova", "Kišiniovas"],
    ["Baltarusija", "Minskas"],
    ["Monakas", "Monakas"],
    ["Belgija", "Briuselis"],
    ["Nyderlandai", "Amsterdamas"],
    ["Bosnija ir Hercogovina", "Sarajevas"],
    ["Norvegija", "Oslas"],
    ["Bulgarija", "Sofija"],
    ["Portugalija", "Lisabona"],
    ["Čekija", "Praha"],
    ["Prancūzija", "Paryžius"],
    ["Danija", "Kopenhaga"],
    ["Rumunija", "Bukareštas"],
    ["Didižioji Britanija", "Londonas"],
    ["Rusija", "Maskva"],
    ["Estija", "Talinas"],
    ["San Marinas", "San Marinas"],
    ["Graikija", "Atėnai"],
    ["Slovėnija", "Liubliana"],
    ["Islandija", "Reikjavikas"],
    ["Slovakija", "Bratislava"],
    ["Italija", "Roma"],
    ["Suomija", "Helsinkis"],
    ["Jugoslavija", "Belgradas"],
    ["Švedija", "Stokholmas"],
    ["Kroatija", "Zagrebas"],
    ["Šveicarija", "Bernas"],
    ["Latvija", "Ryga"],
    ["Ukraina", "Kijevas"],
    ["Vatikanas", "Vatikanas"],
    ["Lenkija", "Varšuva"],
    ["Lichtenšteinas", "Vaducas"],
    ["Lietuva", "Vilnius"],
    ["Vengrija", "Budapeštas"],
    ["Vokietija", "Berlynas"],
    ["Argentina", "Buenos", "Airės"],
    ["Bolivija", "Sukrė"],
    ["Brazilija", "Brazilija"],
    ["Čilė", "Santjagas"],
    ["Ekvadoras", "Kitas"],
    ["Gajana", "Džordžtaunas"],
    ["Kolumbija", "Bogota"],
    ["Paragvajus", "Asunsjonas"],
    ["Peru", "Lima"],
    ["Surinamas", "Paramaribas"],
    ["Urugvajus", "Montevidėjas"],
    ["Venesuela", "Karakasas"],
    ["Antigva ir Barbuda", "Sent Džonsas"],
    ["Bahamos", "Nasau"],
    ["Barbadosas", "Bridžtaunas"],
    ["Belizas", "Belmopanas"],
    ["Dominika", "Rozo"],
    ["Dominikos", "Santo Domingas"],
    ["Grenada", "Sent Džordžas"],
    ["Gvatemala", "Gvatemala"],
    ["Haitis", "Port o Prensas"],
    ["Hondūras", "Tegusigalpa"],
    ["Jamaika", "Kingstonas"],
    ["Jungtinės Amerikos Valstijos", "Vašingtonas"],
    ["Kanada", "Otava"],
    ["Kosta Rika", "San Chosė"],
    ["Kuba", "Havana"],
    ["Meksika", "Meksikas"],
    ["Nikaragva", "Managva"],
    ["Panama", "Panama"],
    ["El Salvadoras", "San Salvadoras"],
    ["Sent Lusija", "Kastris"],
    ["Sent Vinsentas ir Grenadinai", "Kingstaunas"],
    ["Trinidadas ir Tobagas", "Port of Speinas"],
    ["Alžyras", "Alžyras"],
    ["Angola", "Luanda"],
    ["Beninas", "Porto Novas "],
    ["Bisau Gvinėja", "Bisau"],
    ["Bostvana", "Gabaronė"],
    ["Burkina Fasas", "Uagadugu"],
    ["Burundis", "Gitega"],
    ["Centrinė Afrikos Respublika", "Bangis"],
    ["Čadas", "Ndžamena"],
    ["Dramblio Kaulo Krantas", "Jamasukru"],
    ["Džibutis", "Džibutis"],
    ["Egiptas", "Kairas"],
    ["Eritrėja", "Asmara"],
    ["Etiopija", "Adis Adeba"],
    ["Gabonas", "Librevilis"],
    ["Gambija", "Bandžulis"],
    ["Gana", "Akra"],
    ["Gvinėja", "Konakris"],
    ["Kamerūnas", "Jaundė"],
    ["Kenija", "Nairobis"],
    ["Kongas", "Brazavilis"],
    ["Kongo demokratinė Respublika", "Kinšasa"],
    ["Lesotas", "Maseru"],
    ["Liberija", " Monrovija"],
    ["Libija", "Tripolis"],
    ["Madagaskaras", " Antananarivas"],
    ["Malavis", "Lilongvė"],
    ["Malis", "Bamakas"],
    ["Marokas", "Rabatas"],
    ["Mauritanija", "Nuakšotas"],
    ["Mozambikas", "Maputu"],
    ["Namibija", "Vindhukas"],
    ["Nigerija", "Abudža"],
    ["Nigeris", "Niamėjus"],
    ["Pietų Afrika", "Pretorija"],
    ["Pietų Sudanas", "Džuba"],
    ["Pusiaujo Gvinėja", "Malabas"],
    ["Ruanda", "Kigalis"],
    ["Senegalas", "Dakaras"],
    ["Siera Leonė", "Fritaunas"],
    ["Somalis", "Mogadišas"],
    ["Sudanas", "Hartumas"],
    ["Svazilandas", "Mbabanė"],
    ["Tanzanija", "Dodoma"],
    ["Togas", "Lomė"],
    ["Tunisas", "Tunisas"],
    ["Uganda", "Kampala"],
    ["Zambija", "Lusaka"],
    ["Zimbabvė", "Hararė"],
    ["Lichtenšteinas", "Vaducas"],
    ["Airija", "Dublinas"],
    ["Airija", "Dublinas"],
    ["Juodkalnija", "Podgorica"],
    ["Čekija", "Praha"],
    ["San Tomė ir Prinsipė", "San Tomė"],
    ["Komorai", "Moronis"],
    ["Žaliasis kyšulys", "Praja"],
    ["Pusiau Gvinėja", "Malabas"],
    ["Vakarų Sachara", "Ajunas"],
    ["Mauricijus", "Port Luisas"],
    ["Seišeliai", "Viktorija"],
    ["Šri Lanka", "Kolumbas"],
    ["Bruneja", "Bandar Seri Begavanas"],
    ["Maldyvai", "Malė"],
    ["Naujoji Zelandija", "Velingtonas"],
    ["Papua Naujoji Gvinėja", "Port Morsbis"],
    ["Rytų Timoras", "Dilis"],
    ["Kombodža", "Pnompenis"],
    ["Filipinai", "Manila"],
    ["Indonezija", "Džakarta"],
    ["Tailandas", "Bankokas"],
    ["Singapūras", "Singapūras"],
    ["Saliamono Salos", "Honiara"],
    ["Fidžis", "Suva"],
    ["Vanuatu", "Port Vila"],
    ["Naujoji Kaledonija", "Naumėja"],
    ["Laosas", "Vientianas"],
    ["Mianmaras", "Neipidas"],
    ["Malaizija", "KVALA Lampūras"],
    ["Vietnamas", "Hanojus"],
    ["Australija", "Kanbera"],
    ["Turkmėnistanas", "Ašhabadas"],
    ["Azerbaidžanas", "Baku"],
    ["Uzbekistanas", "Taškentas"],
    ["Irakas", "Bagdadas"],
    ["Indija", "Delis"],
    ["Izraelis", "Jeruzalė"],
    ["Kirkizija", "Biškekas"],
    ["Kinija", "Pekinas"],
    ["Nepalas", "Katmandu"],
    ["Bahreinas", "Menama"],
    ["Armėnija", "Jerevanas"],
    ["Kazachstanas", "Nursultanas"],
    ["Kipras", "Nikosija"],
    ["Omanas", "Maskatas"],
    ["Jordanija", "Amanas"],
    ["Japonija", "Tokijas"],
    ["Lebanonas", "Beirutas"],
    ["Taivanas", "Taibėjus"],
    ["Palestina", "Rytų Jeruzalė"],
    ["Gruzija", "Tbilisis"],
    ["Butanas", "Timpu"],
    ["Tadžikistanas", "Dušanbė"],
    ["Turkija", "Ankara"],
    ["Mongolija", "Ulan Batoras"],
    ["Šiaurės Korėja", "Pchenjanas"],
    ["Pietų Korėja", "Seulas"],
    ["Pakistanas", "Islamabadas"],
    ["Iranas", "Teheranas"],
    ["Saudo Arabija", "Rijadas"],
    ["Sirija", "Damaskas"],
    ["Kvataras", "Doha"],
    ["Jungtiniai Arabų Emyratai", "Abu Dabis"],
    ["Jemenas", "Sana"],
    ["Afganistanas", "Kabulas"],
    ["Bangladešas", "Daka"],
    ["Kuveitas", "El Kuveitas"],
    ["Ispanija", "Madridas"],
    ["Kosovas", "Priština"],
    ["Serbija", "Belgradas"],
    ["Olandija", "Amsterdamas"],
    ["Jungtinė Karalystė", "Londonas"],
    ["Kanada", "Otava"],
    ["Jungtinės Valstijos", "Vašingtonas"],
    ["Meksika", "Meksikas"],
    ["Gvatemala", "Gvatemala"],
    ["Belizas", "Belmopanas "],
    ["Salvadoras", "San-Salvadoras"],
    ["Hondūras", "Tegusigalpa"],
    ["Nikaragva", "Managva"],
    ["Kosta Rika", "San Chosė "],
    ["Panama", "Panama"],
    ["Kuba", "Havana"],
    ["Jamaika", "Kingstonas"],
    ["Dominikos Respublika", "Santo Domingas"],
    ["Haitis", "Port-o-Prensas"],
    ["Bahamos", "Nasau"],
    ["Puerto Rikas", "San-Chuanas"],
    ["Kolumbija", "Bogota"],
    ["Venesuela", "Karakasas"],
    ["Ekvadoras", "Kitas"],
    ["Peru", "Lima"],
    ["Bolivija", "Sukrė"],
    ["Paragvajus", "Asunsionas"],
    ["Urugvajus", "Montevidėjas"],
    ["Argentina", "Buenos Airės"],
    ["Čilė", "Santjagas"],
    ["Brazilija", "Brazilija"],
    ["Gajana", "Džordžtaunas "],
    ["Surinamas", "Paramaribas"],
    ["Prancūzijos Gviana", "Kajena"],
    ["Barbadosas", "Bridžtaunas"],
    ["Trinidadas ir Tobagas", "Port of Speinas"],
    ["Samoa", "Apija"],
    ["Tonga", "Nukualofa"],
    ["Tuvalu", "Funafutis"],
    ["Palau", "Ngerulmudas"],
    ["Vanuatu", "Port Vila"],
    ["Mikronezijos Federacinės Valstijos", "Palikiras"],
    ["Maršalo Salos", "Madžūras"],
    ["Nauru", "Jarenas"],
    ["Kiribatis", "Tarava"],
])

// Render text
const text = document.createElement("h1")
document.body.appendChild(text)

const ts = text.style
ts.position = "fixed"
ts.bottom = "0"
ts.right = "0"
ts.fontFamily = "Arial, sans-serif"
ts.color = "grey"
ts.textTransform = "capitalize"
ts.fontSize = "24px" // Pasirink koki nori teksto dydi. Pakeisk tik skaičiu
ts.marginRight = "10px"

// Render line
const line = document.createElement("div")
document.body.appendChild(line)

const ls = line.style
ls.position = "fixed"
ls.top = "0"
ls.right = "0"
ls.width = "6px"
ls.height = "100vh"
ls.backgroundColor = "grey"
ls.display = "none"

// Functionality
const landArea = document.querySelectorAll(".landarea")
const gameWindow = document.querySelector(".gamewindow")
const svgPoint = document.querySelector("#svgpoint")
let showIt = 0

const show = function () {
    let curStr = document.querySelector("#currQuestion").textContent
    let curCountry = Array.from(curStr.matchAll(/spausk\s(.+)/gi), m => m[1])[0]
    text.textContent = dataLog.get(curCountry)
}

document.addEventListener("keydown", e => {
    if (e.key === "-" && showIt === 0) {
        showIt = 1
        ts.display = "block"
        ls.display = "block"
        show()
    } else if (e.key === "-" && showIt === 1) {
        showIt = 0
        ts.display = "none"
        ls.display = "none"
    }
})

landArea.forEach(cur => {
    cur.addEventListener("click", e => {
        setTimeout(() => {
            show()
            ts.color = "rgba(255, 0, 0, 0.9)"
            ls.backgroundColor = "rgba(255, 0, 0, 0.9)"
        }, 100)
    })

    cur.addEventListener("mouseover", e => {
        let curStr = document.querySelector("#currQuestion").textContent
        let curCountry = Array.from(curStr.matchAll(/spausk\s(.+)/gi), m => m[1])[0]
        let curParent = e.target.parentNode.getAttribute("data-qText")

        if (curParent === curCountry) {
            ts.color = "rgba(0, 200, 0)"
            ls.backgroundColor = "rgba(0, 200, 0)"
        } else {
            ts.color = "rgba(255, 0, 0, 0.9)"
            ls.backgroundColor = "rgba(255, 0, 0, 0.9)"
        }
    })
})


