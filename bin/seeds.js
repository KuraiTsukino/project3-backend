// 1. Importaciones
const mongoose = require("mongoose")
const Country = require("./../models/Country")

require("dotenv").config()

// 2. Conexión a base de datos.
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

// 3. Establecer los datos para poblar la base de datos.

const countries = [
    {
        name: "Albania",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Flag_of_Albania.svg/640px-Flag_of_Albania.svg.png",
        capital: "Tirana",
        borders: ["Montenegro", "North Macedonia", "Kosovo", "Greece",],
        currency: "Lek",
        language: ["Albanian"],
        airports: ["Tirana International Airport"],
        image: "https://images.rove.me/albania_w1280.jpg"
    },
    {
        name: "Andorra",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Flag_of_Andorra.svg/640px-Flag_of_Andorra.svg.png",
        capital: "Andorra la Vella",
        borders: ["France", "Spain"],
        currency: "Euro",
        language: ["Catalan"],
        airports: ["Aeropuerto Andorra La Seu"],
        image: "https://fotos.perfil.com/2021/02/22/trim/1280/720/andorra-1130706.jpg"
    },
    {
        name: "Armenia",
        flag: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Flag_of_Armenia.svg",
        capital: "Yerevan",
        borders: ["Azerbaijan", "Georgia", "Iran", "Turkey"],
        currency: "Dram",
        language: ["Armenian"],
        airports: ["Zvartnots International Airport"],
        image: "https://www.angels-initiative.com/sites/default/files/news_articles/yerevan.jpg"
    },
    {
        name: "Austria",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Flag_of_Austria.svg/640px-Flag_of_Austria.svg.png",
        capital: "Vienna",
        borders: ["Czech Republic", "Germany", "Hungary", "Italy", "Liechtenstein", "Slovakia", "Slovenia", "Switzerland"],
        currency: "Euro",
        language: ["Austrian German"],
        airports: ["Vienna Airport", "Salzburg Airport", "Innsbruck Airport", "Graz Airport", "Linz Airport", "Klagenfurt Airport"],
        image: "https://cdn.getyourguide.com/img/country/546b6d28a6868.jpeg/88.jpg"
    },
    {
        name: "Azerbaijan",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Flag_of_Azerbaijan.svg/640px-Flag_of_Azerbaijan.svg.png",
        capital: "Baku",
        borders: ["Armenia", "Georgia", "Iran", "Russia", "Turkey"],
        currency: "Manat",
        language: ["Azerbaijani"],
        airports: ["Baku Airport"],
        image: "https://www.collinsdictionary.com/images/full/azerbaijan_387797695_1000.jpg"
    },
    {
        name: "Belarus",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Flag_of_Belarus.svg/640px-Flag_of_Belarus.svg.png",
        capital: "Minsk",
        borders: ["Latvia", "Lithuania", "Poland", "Russia", "Ukraine"],
        currency: "Belarusian ruble",
        language: ["Belarusian", "Russian"],
        airports: ["Minsk Airport"],
        image: "http://d39raawggeifpx.cloudfront.net/styles/16_9_desktop/s3/articleimages/bneGeneric_Belarus_minsk_cityscape_Cropped_0.jpg"
    },
    {
        name: "Belgium",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Flag_of_Belgium.svg/554px-Flag_of_Belgium.svg.png",
        capital: "Brussels",
        borders: ["France", "Germany", "Luxembourg", "Netherlands"],
        currency: "Euro",
        language: ["Dutch", "French", "German"],
        airports: ["Brussels Airport", "Charleroi Airport", "Ostend Bruges Airport", "Antwerp Airport", "Liege Airport"],
        image: "https://www.bakermckenzie.com/-/media/images/locations/brussels.ashx"
    },
    {
        name: "Bosnia and Herzegovina",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Flag_of_Bosnia_and_Herzegovina.svg/640px-Flag_of_Bosnia_and_Herzegovina.svg.png",
        capital: "Sarajevo",
        borders: ["Croatia", "Montenegro", "Serbia"],
        currency: "Convertible mark",
        language: ["Bosnian", "Serbian", "Croatian"],
        airports: ["Sarajevo Airport", "Tuzla Airport"],
        image: "https://ychef.files.bbci.co.uk/976x549/p093hwwm.jpg"
    },
    {
        name: "Bulgaria",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Bulgaria.svg/640px-Flag_of_Bulgaria.svg.png",
        capital: "Sofia",
        borders: ["Greece", "North Macedonia", "Romania", "Serbia", "Turkey"],
        currency: "Lev",
        language: ["Bulgarian"],
        airports: ["Sofia Airport", "Burgas Airport", "Varna Airport"],
        image: "https://jardinessinfronteras.files.wordpress.com/2019/05/1-il-gran-tour-il-meglio-della-bulgaria.jpg"
    },
    {
        name: "Croatia",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Flag_of_Croatia.svg/640px-Flag_of_Croatia.svg.png",
        capital: "Zagreb",
        borders: ["Bosnia and Herzegovina", "Hungary", "Montenegro", "Serbia", "Slovenia"],
        currency: "Kuna",
        language: ["Croatian"],
        airports: ["Zagreb Airport", "Split Airport", "Dubrovnik Airport", "Zadar Airport", "Pula Airport"],
        image: "https://travelandleisure.mx/wp-content/uploads/2018/07/croacia-1.jpg"
    },
    {
        name: "Cyprus",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Flag_of_Cyprus.svg/640px-Flag_of_Cyprus.svg.png",
        capital: "Nicosia",
        borders: [""],
        currency: "Euro",
        language: ["Greek", "Turkish"],
        airports: ["Larnaca Airport", "Paphos Airport"],
        image: "https://www.schengenvisainfo.com/news/wp-content/uploads/2021/04/Cyprus.jpg"
    },
    {
        name: "Czech Republic",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_the_Czech_Republic.svg/640px-Flag_of_the_Czech_Republic.svg.png",
        capital: "Prague",
        borders: ["Austria", "Germany", "Poland", "Slovakia"],
        currency: "Czech koruna",
        language: ["Czech"],
        airports: ["Prague Airport", "Brno Airport"],
        image: "https://static.barcelo.com/content/dam/bhg/master/es/main-destination-photo/country/czech-republic/destino_republica_checa.jpg.bhgimg.optm1100.jpg/1604670927172.jpg"
    },
    {
        name: "Denmark",
        flag: "https://upload.wikimedia.org/wikipedia/commons/9/9c/Flag_of_Denmark.svg.png",
        capital: "Copenhagen",
        borders: ["Germany"],
        currency: "Danish krone",
        language: ["Danish", "German"],
        airports: ["Copenhagen Airport", "Billund Airport", "Aalborg Airport", "Aarhus Airport", "Vágar Airport"],
        image: "https://ychef.files.bbci.co.uk/976x549/p08sd02y.jpg"
    },
    {
        name: "Estonia",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Flag_of_Estonia.svg/640px-Flag_of_Estonia.svg.png",
        capital: "Tallinn",
        borders: ["Latvia", "Russia"],
        currency: "Euro",
        language: ["Estonian"],
        airports: ["Tallinn Airport"],
        image: "https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2016/07/19175636/Estonia-1920-5.jpg"
    }, 
    {
        name: "Finland",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_Finland.svg/640px-Flag_of_Finland.svg.png",
        capital: "Helsinki",
        borders: ["Norway", "Sweden", "Russia"],
        currency: "Euro",
        language: ["Finnish", "Swedish"],
        airports: ["Helsinki Airport", "Oulu Airport", "Rovaniemi Airport", "Turku Airport", "Vaasa Airport", "Tampere Airport"],
        image: "https://www.latercera.com/resizer/YTKsa9VcfUYyMQtpqscmpL5Awtg=/900x600/smart/arc-anglerfish-arc2-prod-copesa.s3.amazonaws.com/public/XHR3AGI3Q5FG3LOXFG3PQSY75A.jpg"
    },
    {
        name: "France",
        flag: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/640px-Flag_of_France.svg.png",
        capital: "Paris",
        borders: ["Andorra", "Belgium", "Germany", "Italy", "Luxembourg", "Monaco", "Spain", "Switzerland"],
        currency: "Euro",
        language: ["French"],
        airports: ["Paris Charles de Gaulle Airport", "Paris Orly Airport", "Nice Airport", "Lyon-Saint Exupéry Airport", "Marseille Airport", "Toulouse Blagnac Airport", "Bordeaux Airport", "Nantes Airport", "Paris Beauvais Airport", "Réunion Roland Garros Airport", "Lille Airport", "Montpellier Airport", "Ajaccio Airport", "Bastia Airport", "Strasbourg Airport", "Brest Bretagne Airport", "Biarritz Airport", "Rennes Bretagne Airport", "Figari South Corsica Airport", "Toulon-Hyères Airport", "Bergerac Airport"],
        image: "https://cdnuploads.aa.com.tr/uploads/Contents/2021/10/13/thumbs_b_c_9f8507ca497994bc492067672fa3f58e.jpg?v=154848"
    },
    {
        name: "Georgia",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Flag_of_Georgia.svg/640px-Flag_of_Georgia.svg.png",
        capital: "Tbilisi",
        borders: ["Armenia", "Azerbaijan", "Russia", "Turkey"],
        currency: "Georgian lari",
        language: ["Georgian", "Abkhazian"],
        airports: ["Tbilisi Airport", "Kutaisi Airport"],
        image: "https://static-abcblogs.abc.es/wp-content/uploads/sites/87/2021/12/01.jpeg"
    },
    {
        name: "Germany",
        flag: "https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/640px-Flag_of_Germany.svg.png",
        capital: "Berlin",
        borders: ["Austria", "Belgium", "Czechia", "Denmark", "France", "Luxembourg", "Netherlands", "Poland", "Switzerland"],
        currency: "Euro",
        language: "German",
        airports: ["Frankfurt Airport", "Munich Airport", "Düsseldorf Airport", "Hamburg Airport", "Stuttgart Airport", "Cologne Bonn Airport", "Hanover Airport", "Nuremberg Airport", "Dortmund Airport", "Leipzig Halle Airport", "Bremen Airport", "Allgäu Airport Memmingen", "Dresden Airport", "Frankfurt-Hahn Airport", "Karlsruhe Baden-Baden Airport", "Weeze Airport", "Münster Osnabrück Airport", "Paderborn Lippstadt Airport", "Friedrichshafen Airport", "Berlin Brandenburg Airport"],
        image: "https://www.state.gov/wp-content/uploads/2018/11/Germany-2109x1406.jpg"
    },
    {
        name: "Greece",
        flag: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Greece.svg.png",
        capital: "Athens",
        borders: ["Albania", "Bulgaria", "Turkey", "Macedonia"],
        currency: "Euro",
        language: ["Greek"],
        airports: ["Athens Airport", "Heraklion Airport", "Thessaloniki Airport", "Rhodes Airport", "Corfu Airport", "Chania Airport", "Kos Airport", "Santorini Airport", "Zante Airport", "Mykonos Airport"],
        image: "https://www.collinsdictionary.com/images/full/greece_387166810_1000.jpg"
    },
    {
        name: "Hungary",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Flag_of_Hungary.svg/640px-Flag_of_Hungary.svg.png",
        capital: "Budapest",
        borders: ["Austria", "Croatia", "Romania", "Serbia", "Slovakia", "Slovenia", "Ukraine"],
        currency: "Forint",
        language: ["Hungarian"],
        airports: ["Budapest Airport", "Debrecen Airport"],
        image: "https://static1.ideal.es/www/multimedia/202011/26/media/jaen/Imagen%20Parlamento%20en%20Budapest.jpg"
    },
    {
        name: "Iceland",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Flag_of_Iceland.svg/640px-Flag_of_Iceland.svg.png",
        capital: "Reykjavík",
        borders: [""],
        currency: "Icelandic króna",
        language: ["Icelandic"],
        airports: ["Keflavik Airport"],
        image: "https://cdn.britannica.com/71/73371-050-9DFAEC1E/Reykjavik-Iceland.jpg"
    },
    {
        name: "Ireland",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Flag_of_Ireland.svg/640px-Flag_of_Ireland.svg.png",
        capital: "Dublín",
        borders: ["United Kingdom"],
        currency: "Euro",
        language: ["Irish", "English"],
        airports: ["Dublin Airport", "Cork Airport", "Shannon Airport", "Ireland West Airport Knock", "Kerry Airport"],
        image: "https://totalenergies.com/sites/g/files/nytnzq121/files/styles/crop_landscape_ratio_2_1/public/thumbnails/image/istock_leonid_andronov_75429801.jpg1600_-1xoxar.jpg?itok=cxyUuYzj"
    },
    {
        name: "Italy",
        flag: "https://upload.wikimedia.org/wikipedia/en/thumb/0/03/Flag_of_Italy.svg/640px-Flag_of_Italy.svg.png",
        capital: "Rome",
        borders: ["Austria", "France", "San Marino", "Slovenia", "Switzerland", "Vatican City"],
        currency: "Euro",
        language: "Italian",
        airports: ["Rome Fiumicino Airport", "Milan Malpensa Airport", "Bergamo Airport", "Venice Airport", "Naples Airport", "Catania Fontanarossa Airport", "Bologna Airport", "Palermo Airport", "Milan Linate Airport", "Rome Ciampino Airport", "Bari Airport", "Pisa Airport", "Cagliari Airport", "Turin Airport", "Verona Airport", "Treviso Airport", "Olbia Costa Smeralda Airport", "Lamezia Terme Airport", "Florence Airport", "Brindisi Airport", "Genoa Airport", "Alghero Airport", "Trieste Airport", "Pescara Airport", "Ancona Airport", "Trapani Airport", "Comiso Airport", "Perugia Airport"],
        image: "https://media.cntraveler.com/photos/61689e582a7485c4bdf82d27/16:9/w_2560%2Cc_limit/Rome_GettyImages-1267009088.jpg"
    },
    {
        name: "Kazakhstan",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Flag_of_Kazakhstan.svg/640px-Flag_of_Kazakhstan.svg.png",
        capital: "Nur-Sultan",
        borders: ["China", "Kyrgyzstan", "Russia", "Turkmenistan", "Uzbekistan"],
        currency: "Tenge",
        language: ["Kazakh"],
        airports: ["Almaty Airport", "Nursultan Nazarbayev Airport"],
        image: "https://www.remotelands.com/travelogues/app/uploads/2020/01/Cities-Kazakhstan-2.jpg"
    }, 
    {
        name: "Latvia",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Flag_of_Latvia.svg/640px-Flag_of_Latvia.svg.png",
        capital: "Riga",
        borders: ["Belarus", "Estonia", "Lithuania", "Russia"],
        currency: "Euro",
        language: ["Latvian"],
        airports: ["Riga Airport"],
        image: "https://a.cdn-hotels.com/gdcs/production19/d1332/a20481e0-f585-11e8-b7e0-0242ac110002.jpg?impolicy=fcrop&w=800&h=533&q=medium"
    },
    {
        name: "Liechtenstein",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Flag_of_Liechtenstein.svg/640px-Flag_of_Liechtenstein.svg.png",
        capital: "Vaduz",
        borders: ["Austria", "Switzerland"],
        currency: "Swiss franc",
        language: ["German"],
        airports: [""],
        image: "https://cloudfront-eu-central-1.images.arcpublishing.com/prisa/WMJQJW7FIRDSNMHWUVQ3HJI6EE.jpg"
    },
    {
        name: "Lithuania",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Flag_of_Lithuania.svg/640px-Flag_of_Lithuania.svg.png",
        capital: "Vilnus",
        borders: ["Belarus", "Latvia", "Poland", "Russia"],
        currency: "Euro",
        language: ["Lithuanian"],
        airports: ["Vilnius Airport", "Kaunas Airport"],
        image: "https://www.coe.int/documents/21864805/55251547/2019-Vilnius-Cultural-Routes-Conference-Workshops.jpg/8b863de9-404b-deb1-0461-6682c3524f5a?t=1582585680000&width=942"
    },
    {
        name: "Luxembourg",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Flag_of_Luxembourg.svg/640px-Flag_of_Luxembourg.svg.png",
        capital: "Luxembourg",
        borders: ["Belgium", "France", "Germany"],
        currency: "Euro",
        language: ["Lexembourgish", "French", "German"],
        airports: ["Luxembourg Airport"],
        image: "https://assets.kpmg/content/dam/kpmg/xx/images/2019/04/city-with-many-lighted-houses.jpg/jcr:content/renditions/original"
    },
    {
        name: "Malta",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Flag_of_Malta.svg/640px-Flag_of_Malta.svg.png",
        capital: "Valletta",
        borders: [""],
        currency: "Euro",
        language: ["Maltese", "English"],
        airports: ["Malta Airport"],
        image: "https://www.civitatis.com/blog/wp-content/uploads/2019/01/malta.jpg"
    },
    {
        name: "Moldova",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Flag_of_Moldova.svg/640px-Flag_of_Moldova.svg.png",
        capital: "Chisinau",
        borders: ["Romania", "Ukraine"],
        currency: "Moldovan leu",
        language: ["Romanian"],
        airports: ["Chisinau Airport"],
        image: "https://www.coe.int/documents/16695/61254353/moldova.jpg/8879c762-bbb1-e876-697b-532d91e105ef"
    },
    {
        name: "Monaco",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Flag_of_Monaco.svg/600px-Flag_of_Monaco.svg.png",
        capital: "Monaco",
        borders: ["France"],
        currency: "Euro",
        language: ["French"],
        airports: [""],
        image: "https://cdn.getyourguide.com/img/location/5cb436bc90cc1.jpeg/88.jpg"
    },
    {
        name: "Montenegro",
        flag: "https://upload.wikimedia.org/wikipedia/commons/6/64/Flag_of_Montenegro.svg.png",
        capital: "Podgorica",
        borders: ["Albania", "Bosnia and Herzegovina", "Croatia", "Kosovo", "Serbia"],
        currency: "Euro",
        language: ["Montenegrin"],
        airports: ["Tivat Airport", "Podgorica Airport"],
        image: "https://borgenproject.org/wp-content/uploads/Healthcare-in-Montenegro-1.jpg"
    },
    {
        name: "Netherlands",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Flag_of_the_Netherlands.svg/640px-Flag_of_the_Netherlands.svg.png",
        capital: "Amsterdam",
        borders: ["Belgium", "Germany"],
        currency: "Euro",
        language: ["Dutch"],
        airports: ["Amsterdam Airport Schiphol", "Eindhoven Airport", "Rotterdam The Hague Airport", "Maastricht Aachen Airport", "Groningen Airport Eelde"],
        image: "https://www.expatica.com/app/uploads/sites/3/2014/05/permanent-residence-netherlands-1920x1080.jpg"
    },
    {
        name: "North Macedonia",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Flag_of_North_Macedonia.svg/640px-Flag_of_North_Macedonia.svg.png",
        capital: "Skopje",
        borders: ["Albania", "Bulgaria", "Greece", "Kosovo", "Serbia"],
        currency: "Macedonian denar",
        language: ["Macedonian", "Albanian"],
        airports: ["Skopje Airport"],
        image: "https://www.euractiv.com/wp-content/uploads/sites/2/2021/05/bg-5-800x450.jpg"
    },
    {
        name: "Norway",
        flag: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Norway.svg.png",
        capital: "Oslo",
        borders: ["Finland", "Sweden", "Russia"],
        currency: "Norwegian krone",
        language: ["Norwegian", "Sámi"],
        airports: ["Oslo Airport", "Bergen Airport", "Trondheim Airport", "Stavanger Airport", "Tromsø Airport", "Sandefjord Airport Torp", "Bodø Airport", "Ålesund Airport", "Kristiansand Airport", "Haugesund Airport"],
        image: "https://res.cloudinary.com/simpleview/image/upload/v1574085889/clients/norway/bryggen_wharf_bergen_hordaland_fjord_norway_photo_florian_olbrechts_34ad36ea-f7bc-4150-b48b-af2c2c14628f.jpg"
    },
    {
        name: "Poland",
        flag: "https://upload.wikimedia.org/wikipedia/en/thumb/1/12/Flag_of_Poland.svg/640px-Flag_of_Poland.svg.png",
        capital: "Warsaw",
        borders: ["Belarus", "Czechia", "Germany", "Lithuania", "Russia", "Slovakia", "Ukraine"],
        currency: "Zloty",
        language: ["Polish"],
        airports: ["Warsaw Airport", "Kraków Airport", "Gdansk Airport", "Katowice Airport", "Wroclaw Airport", "Warsaw Modlin Airport", "Poznan Airport", "Szczecin-Goleniów Airport"],
        image: "https://www.coe.int/documents/16695/27602693/Warsaw_shutterstock_1486805192.jpg/acd0c0fd-1731-1ff9-431c-2d91bd9c87cb?t=1608111599000"
    },
    {
        name: "Portugal",
        flag: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Portugal.svg.png",
        capital: "Lisbon",
        borders: ["Spain"],
        currency: "Euro",
        language: ["Portuguese"],
        airports: ["Lisbon Airport", "Porto Airport", "Faro Airport", "Madeira Airport", "Ponta Delgada Airport"],
        image: "https://viva-mundo.com/sites/default/files/images/posts/VivaMundo_Portugal_Porto.jpg"
    },
    {
        name: "Romania",
        flag: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Portugal.svg.png",
        capital: "Bucharest",
        borders: ["Bulgaria", "Hungary", "Moldova", "Serbia", "Ukraine"],
        currency: "Romanian leu",
        language: ["Romanian"],
        airports: ["Bucharest Henri Coanda Airport", "Cluj-Napoca Airport", "Timisoara Airport", "Iasi Airport", "Sibiu Airport"],
        image: "https://webhelp.com/wp-content/uploads/2020/03/Country-page-Romania-scaled.jpg"
    },
    {
        name: "Russia",
        flag: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Flag_of_Russia.svg/640px-Flag_of_Russia.svg.png",
        capital: "Moscow",
        borders: ["Azerbaijan", "Belarus", "China", "Estonia", "Finland", "Georgia", "Kazakhstan", "North Korea", "Latvia", "Lithuania", "Mongolia", "Norway", "Poland", "Ukraine"],
        currency: "Russian ruble",
        language: ["Russian"],
        airports: ["Moscow Sheremetyevo Airport", "Moscow Domodedovo Airport", "Moscow Vnukovo Airport", "Saint Petersburg Pulkovo Airport", "Sochi Airport", "Novosibirsk Tolmachevo Airport", "Yekaterinburg Koltsovo Airport", "Krasnodar Airport", "Moscow Zhukovsky Airport"],
        image: "https://montessori-ami.org/sites/default/files/images/countries/russia.jpg"
    },
    {
        name: "San Marino",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Flag_of_San_Marino.svg/640px-Flag_of_San_Marino.svg.png",
        capital: "San Marino",
        borders: ["Italy"],
        currency: "Euro",
        language: ["Italian"],
        airports: [""],
        image: "https://www.lavanguardia.com/files/image_948_465/uploads/2019/04/26/5fa51df63a2e8.jpeg"
    },
    {
        name: "Serbia",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Flag_of_Serbia.svg/640px-Flag_of_Serbia.svg.png",
        capital: "Belgrade",
        borders: ["Bosnia and Herzegovina", "Bulgaria", "Croatia", "Hungary", "Kosovo", "Macedonia", "Montenegro", "Romania"],
        currency: "Serbian dinar",
        language: ["Serbian"],
        airports: ["Belgrade Nikola Tesla Airport", "Niš Airport"],
        image: "https://www.globaltimes.cn/Portals/0/attachment/2021/2021-08-04/53bd9599-66fa-4add-a203-e44ade7eeeca.jpeg"
    },
    {
        name: "Slovakia",
        flag: "https://upload.wikimedia.org/wikipedia/commons/e/e6/Flag_of_Slovakia.svg.png",
        capital: "Bratislava",
        borders: ["Austria", "Czechia", "Hungary", "Poland", "Ukraine"],
        currency: "Euro",
        language: ["Slovak"],
        airports: ["Bratislava Airport", "Košice Airport"],
        image: "https://www.thediaryofanomad.com/wp-content/uploads/2021/02/best-places-to-visit-in-slovakia-social.jpg"
    },
    {
        name: "Slovenia",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Flag_of_Slovenia.svg/640px-Flag_of_Slovenia.svg.png",
        capital: "Ljubljana",
        borders: ["Austria", "Croatia", "Italy", "Hungary"],
        currency: "Euro",
        language: ["Slovene", "Italian", "Hungarian"],
        airports: ["Ljubljana Airport"],
        image: "https://www.schengenvisainfo.com/news/wp-content/uploads/2021/06/ljubljana-Slovenia.jpg"
    },
    {
        name: "Spain",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Bandera_de_España.svg/640px-Bandera_de_España.svg.png",
        capital: "Madrid",
        borders: ["Andorra", "France", "Gibraltar", "Portugal", "Morocco"],
        currency: "Euro",
        language: ["Spanish"],
        airports: ["Madrid Barajas Airport", "Barcelona Airport", "Palma de Mallorca Airport", "Malaga Airport", "Alicante Airport", "Gran Canaria Airport", "Tenerife South Airport", "Valencia Airport", "Ibiza Airport", "Seville Airport", "Lanzarote Airport", "Bilbao Airport", "Tenerife North Airport", "Fuerteventura Airport", "Menorca Airport", "Santiago de Compostela Airport", "Girona Airport", "La Palma Airport", "Asturias Airport", "Granada-Jaén Airport", "Santander Airport", "Jerez Airport", "Región de Murcia Airport", "Reus Airport", "Almeria Airport", "Zaragoza Airport"],
        image: "https://ychef.files.bbci.co.uk/976x549/p051y4n8.jpg"
    },
    {
        name: "Sweden",
        flag: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Flag_of_Sweden.svg/640px-Flag_of_Sweden.svg.png",
        capital: "Stockholm",
        borders: ["Finland", "Norway"],
        currency: "Swedish krona",
        language: ["Swedish"],
        airports: ["Stockholm Arlanda Airport", "Gothenburg Landvetter Airport", "Stockholm Bromma Airport", "Stockholm Skavsta Airport", "Malmö Airport", "Stockholm Västerås Airport"],
        image: "https://www.collinsdictionary.com/images/full/sweden_133005938_1000.jpg"
    },
    {
        name: "Switzerland",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Flag_of_Switzerland.svg/480px-Flag_of_Switzerland.svg.png",
        capital: "Bern",
        borders: ["Austria", "France", "Italy", "Liechtenstein", "Germany"],
        currency: "Swiss franc",
        language: ["German", "French", "Italian"],
        airports: ["Zurich Airport", "Geneva Airport", "Basel Mulhouse Freiburg Airport"],
        image: "https://www.collinsdictionary.com/images/full/switzerland_420747640_1000.jpg"
    },
    {
        name: "Turkey",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Flag_of_Turkey.svg/640px-Flag_of_Turkey.svg.png",
        capital: "Ankara",
        borders: ["Armenia", "Azerbaijan", "Bulgaria", "Georgia", "Greece", "Iran", "Iraq", "Syria"],
        currency: "Turkish lira",
        language: ["Turkish"],
        airports: ["Istanbul Airport", "Antalya Airport", "Istanbul Sabiha Gökcen Airport", "Ankara Esenboga Airport", "Izmir Adnan Menderes Airport", "Adana Airport", "Dalaman Airport", "Milas-Bodrum Airport", "Trabzon Airport"],
        image: "https://elviajerofeliz.com/wp-content/uploads/2020/11/ciudades-de-turquia.jpg"
    },
    {
        name: "Ukraine",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Ukraine.svg/640px-Flag_of_Ukraine.svg.png",
        capital: "Kyiv",
        borders: ["Belarus", "Hungary", "Moldova", "Poland", "Romania", "Russia", "Slovakia"],
        currency: "Hryvnia",
        language: ["Ukrainian"],
        airports: ["Kiev Boryspil Airport", "Kiev Zhuliany Airport", "Lviv Airport", "Odessa Airport", "Kharkiv Airport"],
        image: "https://www.bakermckenzie.com/-/media/images/locations/ukraine/ukraine-headline-module1440x788.ashx"
    },
    {
        name: "United Kingdom",
        flag: "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/640px-Flag_of_the_United_Kingdom.svg.png",
        capital: "London",
        borders: ["Ireland"],
        currency: "Pound sterling",
        language: ["English"],
        airports: ["London Heathrow Airport", "London Gatwick Airport", "Manchester Airport", "London Stansted Airport", "London Luton Airport", "Edinburgh Airport", "Birmingham Airport", "Bristol Airport", "Glasgow Airport", "Belfast International Airport", "Newcastle Airport", "London City Airport", "Liverpool Airport", "East Midlands Airport", "Leeds Bradford Airport", "Aberdeen Airport", "Belfast City Airport", "London Southend Airport", "Southampton Airport", "Jersey Airport", "Cardiff Airport", "Doncaster Sheffield Airport", "Exeter Airport", "Glasgow Prestwick Airport", "Humberside Airport"],
        image: "https://www.nationsonline.org/gallery/UK/Palace-of-Westminster-Parliament.jpg"
    },
    {
        name: "Vatican City",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Flag_of_the_Vatican_City.svg/480px-Flag_of_the_Vatican_City.svg.png",
        capital: "Vatican City",
        borders: ["Italy"],
        currency: "Euro",
        language: ["Italian"],
        airports: [""],
        image: "https://dailytravelpill.com/wp-content/uploads/2017/04/vatican-city-scams-7.jpg"
    }
]

const places = [
    {
        country: "Albania",
        name: "Bunk'Art 1",
        type: "Museum",
        schedule: "09:00 - 16:00",
        price: "4 Euros", 
        image: "https://media-cdn.tripadvisor.com/media/photo-s/0b/4e/75/5b/lo-spettacolare-ingreso.jpg",
        description: "An anti-nuclear bunker built by the communist government",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1397.2735814687207!2d19.860002675816673!3d41.349691760330145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13503401a8cfe759%3A0xfecdcde47641997b!2sBUNK&#39;ART!5e0!3m2!1ses!2smx!4v1639710710293!5m2!1ses!2smx"
    },
    {
        country: "Albania",
        name: "Mount Dajti",
        type: "Hiking",
        schedule: "09:00 - 15:00",
        price: "Free", 
        image: "https://media-cdn.tripadvisor.com/media/photo-s/1b/08/66/fe/view-of-bovilla-lake.jpg",
        description: "A mountain and national park on the edge of Tirana, Albania",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11977.21882879685!2d19.9138730278293!3d41.36746412202349!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x135035a3263ee679%3A0xc97d4e5064bc04cb!2sMonte%20Dajt!5e0!3m2!1ses!2smx!4v1639711406655!5m2!1ses!2smx"
    },
    {
        country: "Albania",
        name: "Mirror (Pasqyra) Beach",
        type: "Beach",
        schedule: "All day",
        price: "Free",
        image: "https://youimg1.tripcdn.com/target/100r1f000001gooxu392D.jpg", 
        description: "A beach called 'Plazhi Pasqyra', this means the beach of mirrors. ",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12260.489268750138!2d19.996285326953444!3d39.80424800569195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x135b6b05009bd0db%3A0xab42916868a38dde!2sPlazhi%20i%20Pasqyrave!5e0!3m2!1ses!2smx!4v1639712006145!5m2!1ses!2smx"
    },
    {
        country: "Andorra",
        name: "Casa de la Vall",
        type: "Historic Site",
        schedule: "10:00 - 18:00",
        price: "5 Euros",
        image: "https://upload.wikimedia.org/wikipedia/commons/e/e6/Casa_de_la_Vall_2015-10.JPG", 
        description: "A historical house in Andorra la Vella, Andorra. It is the headquarters of the General Council of Andorra.",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2941.2935704976685!2d1.5183841148627604!3d42.50656893383023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a58b731e9a18e1%3A0x2b2c1a949fdbffb9!2sCasa%20de%20la%20Vall!5e0!3m2!1ses!2smx!4v1639712334143!5m2!1ses!2smx"
    },
    {
        country: "Andorra",
        name: "Grandvalira",
        type: "Sky and Snowboard area",
        schedule: "09:00 - 17:00",
        price: "Variable",
        image: "https://www.lugaresdenieve.com/sites/default/files/grandvalira-navidades-dos.jpg", 
        description: "a ski resort located in the Pyrenees",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d94012.72396570658!2d1.5768017582031184!3d42.578695399999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a58adb817ec90d%3A0xa9c1962f7ddfd9e0!2sGrandvalira!5e0!3m2!1ses!2smx!4v1639713069396!5m2!1ses!2smx"
    },
    {
        country: "Andorra",
        name: "La Noblesse du Temps",
        type: "Monument",
        schedule: "All day",
        price: "Free",
        image: "https://media-cdn.tripadvisor.com/media/photo-s/11/a0/fc/0e/la-noblesse-du-temps.jpg", 
        description: "Sculpture made by the Catalan artist Salvador Dali",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2941.1906679886074!2d1.5272451148628352!3d42.508755933691766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a58ad08ae5e29b%3A0x6ff6d68ca445442!2sNobleza%20del%20tiempo%20de%20Salvador%20Dal%C3%AD!5e0!3m2!1ses!2smx!4v1639713497830!5m2!1ses!2smx"
    },
    {
        country: "Armenia",
        name: "Armenian Genocide Museum",
        type: "Museum",
        schedule: "10:00 - 17:00",
        price: "5000 AMD",
        image: "https://media.istockphoto.com/photos/eternal-flame-in-tsitsernakaberd-memorial-picture-id458066479?k=20&m=458066479&s=612x612&w=0&h=UiuOklqtHDtPz3GRNMRkhuKpilWEZW8R8fk5Cs0HU1Y=", 
        description: "A museum about the Armenian Genocide",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.052402860731!2d44.487255264780316!3d40.1856472275861!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406abd083fcd71f1%3A0x7abd40e1142a7606!2sThe%20Armenian%20Genocide%20Museum!5e0!3m2!1ses!2smx!4v1639714295953!5m2!1ses!2smx"
    },
    {
        country: "Armenia",
        name: "Cafesjian Center for the Arts",
        type: "Museum",
        schedule: "10:00 - 20:00",
        price: "Free",
        image: "https://cdn.theculturetrip.com/images/56-208999-the-cafesjian-center-for-the-arts.jpg", 
        description: "A museum dedicated to bringing the best of contemporary art to Armenia",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3047.8388036092015!2d44.51322191478044!3d40.19040067729823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406abd21f68b3141%3A0x19160e107697a0e0!2sCafesjian%20Center%20for%20the%20Arts!5e0!3m2!1ses!2smx!4v1639714536554!5m2!1ses!2smx" 
    },
    {
        country: "Armenia",
        name: "Matenadaran - The Museum of Ancient Manuscripts",
        type: "Museum",
        schedule: "10:00 - 17:00",
        price: "1500 AMD",
        image: "https://blog.dookinternational.com/wp-content/uploads/2017/10/Matenadaran-in-Yerevan.jpg", 
        description: "The Matenadaran's museum complex is located in the institute's old, original building. What was formerly a single exhibition hall now consists of fifteen halls in which thousands of temporary, changeable and exclusive exhibits are on display. ",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3047.7697150880226!2d44.5186679147804!3d40.191938077205165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406abd20f0977ad9%3A0x7f2158e0bb6e6dd7!2sMatenadaran!5e0!3m2!1ses!2smx!4v1639716134407!5m2!1ses!2smx" 
    },
    {
        country: "Austria",
        name: "Schönbrunn Palace",
        type: "Palace",
        schedule: "09:30 - 17:00",
        price: "44 Euros",
        image: "https://www.schoenbrunn.at/fileadmin/content_schoenbrunn/Startseiten_Sujet/hero-image.jpg", 
        description: "The Cultural World Heritage Site of Schönbrunn Palace is Austria's most frequently visited tourist attraction. In the palace the residential and state rooms with their original furnishings and decorations convey an authentic impression of the imperial lifestyle. ",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2660.186462512103!2d16.31200796508214!3d48.183758755923236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476da8091cc07cbf%3A0x4e69ba5de4ea8bc9!2sPalacio%20de%20Sch%C3%B6nbrunn!5e0!3m2!1ses!2smx!4v1639716613132!5m2!1ses!2smx" 
    },
    {
        country: "Austria",
        name: "Salzburger Altstadt",
        type: "Historic Site",
        schedule: "All day",
        price: "Free",
        image: "https://upload.wikimedia.org/wikipedia/commons/d/da/SalzburgerAltstadt02b.jpg", 
        description: "The Historic Centre of the City of Salzburg, also known as the Altstadt, is a district of Salzburg, Austria, recognised as UNESCO World Heritage Site since 1996. It corresponds with the historic city centre, situated on the left and right banks of the Salzach river.",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10720.5626812713!2d13.041365631753678!3d47.79810883131016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477690618e53a8f1%3A0x12ebd6545d6682d2!2sAltstadt%20Salzburg%2C%205020%20Salzburgo%2C%20Austria!5e0!3m2!1ses!2smx!4v1639716872893!5m2!1ses!2smx" 
    },
    {
        country: "Austria",
        name: "Fortress Hohensalzburg Castle",
        type: "Palace",
        schedule: "09:30 - 17:00",
        price: "12 Euros",
        image: "https://www.salzburg.info/deskline/infrastruktur/objekte/festung-hohensalzburg_7955/image-thumb__664164__slider-main/Die%20Festung%20mit%20verschneiten%20Bergen%20im%20Hintergrund_7967.jpg", 
        description: "This amazing 11th-century castle overlooks Salzburg from a hill on the outskirts of the city. ",
        map: "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2680.3035165770557!2d13.045469615066299!3d47.79495188294158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sFortress%20Hohensalzburg%20Castle!5e0!3m2!1ses!2smx!4v1639717135469!5m2!1ses!2smx" 
    },
    {
        country: "Azerbaijan",
        name: "Heydar Aliyev Cultural Center",
        type: "Museum",
        schedule: "11:00 - 19:00",
        price: "15 AZN",
        image: "https://images.adsttc.com/media/images/5285/2152/e8e4/4e8e/7200/015f/medium_jpg/HAC_Exterior_Photo_by_Hufton_Crow_(1).jpg?1384456417", 
        description: "Being one of the most recognized architectural landmarks worldwide, the Heydar Aliyev Center is in the meantime one of the signature architectural landmarks of modern Baku. The building was designed by Zaha Hadid, a worlwide recognized architect and Pritzker Prize winner.",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120468.81373010366!2d-99.16797412496652!3d19.340969552902454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d40a035a6bd%3A0xa8c2cbf267a83fbd!2sCentro%20Heydar%20Aliyev!5e0!3m2!1ses!2smx!4v1639717534551!5m2!1ses!2smx" 
    },
    {
        country: "Azerbaijan",
        name: "Baku Old City",
        type: "Historic Site",
        schedule: "12:00 - 23:59",
        price: "Free",
        image: "https://blog.dookinternational.com/wp-content/uploads/2015/07/Old-City-of-Baku-3-1024x655.jpg", 
        description: "historical core of Baku, the capital of Azerbaijan. The Old City is the most ancient part of Baku,[3] which is surrounded by walls which were easily defended. In 2007, the Old City had a population of about 3000 people.[4] In December 2000, the Old City of Baku, including the Palace of the Shirvanshahs and Maiden Tower, became the first location in Azerbaijan to be classified as a UNESCO World Heritage Site.",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6079.842813117049!2d49.83058703488769!3d40.36626700000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307dca0a08ddf5%3A0xddd20fe143a690b6!2sCiudad%20Vieja!5e0!3m2!1ses!2smx!4v1639717755386!5m2!1ses!2smx" 
    },
    {
        country: "Azerbaijan",
        name: "Flame Towers",
        type: "Observation Deck",
        schedule: "10:00 - 22:00",
        price: "Variable",
        image: "https://www.ahstatic.com/photos/a593_ho_00_p_1024x768.jpg", 
        description: "A trio of skyscrapers in Baku, Azerbaijan, the height of the tallest tower is 182 m (597 ft).[4] The three flame-shaped towers symbolize the element of fire - historically resonant in a region where natural gas flares shoot from the earth and Zoroastrian worshippers saw in fire a symbol of the divine",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3040.226620722186!2d49.824371314786326!3d40.359499167043204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307dd2a51bb717%3A0x206018b2765a243e!2sTorres%20Flame!5e0!3m2!1ses!2smx!4v1639718144870!5m2!1ses!2smx" 
    },
    {
        country: "Belarus",
        name: "Museum Strana Mini",
        type: "Museum",
        schedule: "13:00 - 20:00",
        price: "6 Euros",
        image: "https://belarusmini.by/upload/iblock/dcf/dcf6f7039b8b0a6d0c8ab88ab9e507c0.png", 
        description: "Museum of architectural miniatures",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9742154.35306726!2d9.810162111926571!3d53.40667674274855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbcfc0682927d5%3A0x48d52efef3a42eb9!2sMini%20Museum!5e0!3m2!1ses!2smx!4v1639719101457!5m2!1ses!2smx" 
    },
    {
        country: "Belarus",
        name: "Belarusian State Museum of the History of the Great Patriotic War",
        type: "Museum",
        schedule: "10:00 - 17:30",
        price: "9.00 P",
        image: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Minsk_Kriegsmuseum.JPG", 
        description: "The Belarusian State Museum of the History of the Great Patriotic War is the greatest national depository of material and spiritual monuments of the 1941-1945 war history. ",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2349.8652067869884!2d27.5356543153272!3d53.916371139562415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbcfc067b504b5%3A0x895c43b31379e187!2sMuseo%20estatal%20bielorruso%20de%20la%20Gran%20Guerra%20Patri%C3%B3tica!5e0!3m2!1ses!2smx!4v1639719377609!5m2!1ses!2smx" 
    },
    {
        country: "Belarus",
        name: "Memorial Complex Brest Hero-Fortress",
        type: "Historic Site",
        schedule: "All day",
        price: "Free",
        image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/f9/fa/28/2019-the-main-monument.jpg?w=1200&h=-1&s=1", 
        description: "one of the fortresses built in 1830-40s to strengthen the western borders of the Russian Empire.",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1871.070633595356!2d23.655902935396597!3d52.08266899256826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47210bbcf6a5f53d%3A0x52ea1d3043a405c3!2sGlavnyy%20Monument%20Memorial&#39;nogo%20Kompleksa%20%22Brestskaya%20Krepost&#39;%22!5e0!3m2!1ses!2smx!4v1639719629539!5m2!1ses!2smx" 
    },
    {
        country: "Belgium",
        name: "Grand Place",
        type: "Historic Site",
        schedule: "All day",
        price: "Free",
        image: "https://www.hola.com/imagenes/viajes/20200512167791/grand-place-bruselas-maravillas-desde-mi-pantalla/0-822-765/grand-place-bruselas-t.jpg", 
        description: "Considered one of the most beautiful medieval squares in Europe, the ornate Grand Place is the center of Brussels, where many historic buildings dating from the 17th century are located.",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2519.156180779012!2d4.35024691519313!3d50.84679206660875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3c47f4614f1f1%3A0xb03c355d8fe2cfb6!2sGrand%20Place!5e0!3m2!1ses!2smx!4v1639719979775!5m2!1ses!2smx" 
    },
    {
        country: "Belgium",
        name: "Historic Centre of Brugge",
        type: "Historic Site",
        schedule: "All day",
        price: "Free",
        image: "https://cdn.shortpixel.ai/spai/w_921+q_glossy+ret_img+to_webp/https://www.timetravelturtle.com/wp-content/uploads/2016/04/Belgium-2016-201_new.jpg", 
        description: "The historic center of Bruges has been designated a UNESCO World Heritage Site since 2000 thanks to its status as one of the commercial and cultural capitals of Europe and its enduring Gothic architecture.",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d868.5536972312276!2d3.226007373569064!3d51.20833983889536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c350cf9208d333%3A0xf7a5c6c2319e944!2sAyuntamiento%20de%20Brujas!5e0!3m2!1ses!2smx!4v1639720125255!5m2!1ses!2smx" 
    },
    {
        country: "Belgium",
        name: "Antwerpen-Centraal",
        type: "Architectural Buildings",
        schedule: "All day",
        price: "Free",
        image: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Antwerpen_Centraal_station_12-07-2010_14-04-17.JPG", 
        description: "Leopold II had this unusual rail station built as a neo-Baroque monument to the railway age in 1905.",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2499.0992473422557!2d4.418962415208976!3d51.21724733969804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3f703e7404c69%3A0x270b07bbe1f68aa6!2sAntwerpen-Centraal!5e0!3m2!1ses!2smx!4v1639720345325!5m2!1ses!2smx" 
    },
    {
        country: "Bosnia and Herzegovina",
        name: "Sarajevo War Tunnel",
        type: "Historic Site",
        schedule: "09:00 - 16:00",
        price: "10.00 BAM",
        image: "https://media.tacdn.com/media/attractions-splice-spp-674x446/07/9e/73/bc.jpg", 
        description: "Underground tunnel with a war museum",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2878.7383042583665!2d18.335103714911355!3d43.81978734966152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4758c9f175008655%3A0xcdacf780adc86791!2sT%C3%BAnel%20de%20Sarajevo!5e0!3m2!1ses!2smx!4v1639720594123!5m2!1ses!2smx" 
    },
    {
        country: "Bosnia and Herzegovina",
        name: "Bascarsija",
        type: "Market",
        schedule: "08:00 - 20:00",
        price: "Variable",
        image: "https://www.researchgate.net/profile/Aida-Bidzan-Gekic/publication/338719578/figure/fig3/AS:849871598792704@1579636587174/Bascarsija-the-old-core-of-Sarajevo-Photo-author.jpg", 
        description: "Bascarsija is Sarajevo's old bazaar and the historical and cultural center of the city. Bascarsija was built in the 15th century when Isa-Beg Isakovic founded the town. ",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2876.812240311499!2d18.428701714912844!3d43.85972019707069!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4758c8c8c322a109%3A0xe90aa1a39f58600b!2zQmHFocSNYXLFoWlqYS4!5e0!3m2!1ses!2smx!4v1639721274812!5m2!1ses!2smx" 
    },
    {
        country: "Bosnia and Herzegovina",
        name: "Old Bridge (Stari Most)",
        type: "Historic Site",
        schedule: "09:00 - 22:00",
        price: "Free",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Stari_Most22.jpg/1200px-Stari_Most22.jpg", 
        description: "The Old Bridge area, with its pre-Ottoman, eastern Ottoman, Mediterranean and western European architectural features, is an outstanding example of a multicultural urban settlement. ",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2901.9013956071517!2d17.81287026503808!3d43.33725237913334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x134b4306c2ffb261%3A0x1c6e123b0a2fc4c4!2sPuente%20de%20Mostar!5e0!3m2!1ses!2smx!4v1639721655709!5m2!1ses!2smx" 
    },
    {
        country: "Bulgaria",
        name: "St. Alexander Nevski Cathedral",
        type: "Church",
        schedule: "08:00 - 22:00",
        price: "Free",
        image: "https://aws-tiqets-cdn.imgix.net/images/content/ea23906efe1a496a8f1fe858a4938244.jpg?auto=format&fit=crop&h=800&ixlib=python-3.2.1&q=70&w=800&s=7ee6111acc7f7421058b3de481ffd95e", 
        description: "Completed in 1912, St. Alexander Nevsky Patriarchal Cathedral Stauropigial Memorial-Church is an impressive landmark in Sofia. The church was built as a memorial to the 200,000 Russian soldiers who died in the Russo-Turkish Liberation War (1877-1878).",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2932.370186758275!2d23.330684115012758!3d42.69588177916581!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa85712687e499%3A0x29370f3a6e85350!2sCatedral%20de%20Alejandro%20Nevski%20de%20Sof%C3%ADa!5e0!3m2!1ses!2smx!4v1639721748515!5m2!1ses!2smx" 
    },
    {
        country: "Bulgaria",
        name: "Action Aquapark",
        type: "Water Park",
        schedule: "10:00 - 18:30",
        price: "40.00 BGN",
        image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/06/8a/4b/action-aquapark.jpg?w=1200&h=-1&s=1", 
        description: "Action Aquapark is a water thematic park situated in the western part of Sunny Beach Resort. It is the first water park in Bulgaria and proudly bears the name “Action” because there is no way to get bored here.",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11729.414206348001!2d27.698156480887835!3d42.696234066649495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a69e48f361aa8f%3A0x2aeeb0792d64df72!2sAction%20Aquapark!5e0!3m2!1ses!2smx!4v1639721951683!5m2!1ses!2smx" 
    },
    {
        country: "Bulgaria",
        name: "Sea Garden",
        type: "Garden",
        schedule: "09:30 - 20:00",
        price: "3 BGN",
        image: "https://ak.jogurucdn.com/media/image/p25/place-2015-10-26-9-Seagarden862027d5fa030ae26bdcdfeeb1f28599.jpg", 
        description: "Scattered about the park are sculptures and busts of notable people in the city’s history, the most famous of which is that of Alexander Pushkin. ",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d750775.36929785!2d27.14543066064136!3d42.68855180330317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a694936f93c5d9%3A0xfae3adeaf90618a2!2sThe%20Sea%20Garden!5e0!3m2!1ses-419!2smx!4v1639722105801!5m2!1ses-419!2smx" 
    },
    {
        country: "Croatia",
        name: "Walls of Dubrovnik",
        type: "Historic Site",
        schedule: "08:00 - 19:30",
        price: "26.60 Euros",
        image: "https://hellojetlag.com/wp-content/uploads/2017/07/IMG_4664-1.jpg", 
        description: "Famous defensive wall around the city, offering spectacular views.",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2934.927416665532!2d18.105048915010645!3d42.641698679169004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x134c0b329cd54c57%3A0x96dd7d686f19e991!2sWalls%20of%20Dubrovnik!5e0!3m2!1ses-419!2smx!4v1639722401994!5m2!1ses-419!2smx" 
    },
    {
        country: "Croatia",
        name: "Palazzo di Diocleziano",
        type: "Historic Site",
        schedule: "All day",
        price: "Free",
        image: "https://www.camping-simuni.hr/wp-content/uploads/2020/02/shutterstock_1050541637.jpg", 
        description: "The ruins of the Roman Emperor Diocletian's palace date back to the late 3rd to early 4th century A.D.",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2893.715771023817!2d16.437986715044786!3d43.50826457912643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13355dfe535cfc4f%3A0x921ac62569576f32!2sPalacio%20de%20Diocleciano!5e0!3m2!1ses-419!2smx!4v1639722692621!5m2!1ses-419!2smx" 
    },
    {
        country: "Croatia",
        name: "Tkalčićeva",
        type: "Point of interest",
        schedule: "All day",
        price: "Free",
        image: "https://img.itinari.com/page/content/original/200c3acf-8b30-411e-bfe7-77af5cd2adfc-paulprescott72-istock-483924554.jpg?ch=DPR&dpr=1&w=994&s=6701646188ed5f9863e433bbbbc3eaee", 
        description: "The most beautiful vibrant street in Zagreb",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2780.6887983178626!2d15.974075615138638!3d45.817490579106774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4765d7031a3ffdad%3A0x86c38c43d244d416!2sUl.%20Ivana%20Tkal%C4%8Di%C4%87a%2C%2010000%2C%20Zagreb%2C%20Croacia!5e0!3m2!1ses-419!2smx!4v1639722778544!5m2!1ses-419!2smx" 
    },
    {
        country: "Cyprus",
        name: "Kato Paphos Archaeological Park",
        type: "Ancients Ruins",
        schedule: "12:00 - 23:59",
        price: "5 Euros",
        image: "https://www.visitpafos.org.cy/wp-content/uploads/2018/02/archaeological-park2.jpg", 
        description: "Large archaeological site with Roman mosaics and ruins of tombs, villas and a fortress.",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1638.9908838364652!2d32.4072204587219!3d34.756052099999984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14e706da34e0764b%3A0xc82ed15381237c42!2sArchaeological%20Site%20of%20Nea%20Paphos!5e0!3m2!1ses-419!2smx!4v1639722913236!5m2!1ses-419!2smx" 
    },
    {
        country: "Cyprus",
        name: "Konnos Bay",
        type: "Beach",
        schedule: "All day",
        price: "Free",
        image: "https://www.swedishnomad.com/wp-content/images/2019/08/Konnos-Bay.jpg", 
        description: "Konnos Bay is at the most Eastern edge of Ayia Napa and is the jewel in the Cape Greco national park. Situated midway between Ayia Napa and Protaras, ",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3268.90832807424!2d34.06701086473351!3d34.9839608803627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14dfc383f95d0f2b%3A0xc7ad1dc7d287341a!2sKonnos%20Beach!5e0!3m2!1ses-419!2smx!4v1639723086884!5m2!1ses-419!2smx" 
    },
    {
        country: "Cyprus",
        name: "Kourion",
        type: "Ancient Ruins",
        schedule: "08:00 - 18:00",
        price: "8.50 Euros",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Episkopi_01-2017_img03_Kourion.jpg/600px-Episkopi_01-2017_img03_Kourion.jpg", 
        description: "an important ancient Greek city-state on the southwestern coast of Cyprus. In the twelfth century BCE, after the collapse of the Mycenaean palaces, Greek settlers from Argos arrived on this site.",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13126.428040083854!2d32.87554672624068!3d34.66462648709771!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14e725439cc8a935%3A0x2929fd5ce8a48bd8!2sCurio%2C%20Episkopi%2C%20Chipre!5e0!3m2!1ses-419!2smx!4v1639723379434!5m2!1ses-419!2smx" 
    },
    {
        country: "Czech Republic",
        name: "Prague Zoo",
        type: "Zoo",
        schedule: "09:00 - 16:00",
        price: "250 CZK",
        image: "https://cdn-vsh.prague.eu/object/591/slon-indicky-img-0467-miroslav-bobek.jpg", 
        description: "Prague Zoological Garden is situated near the center of the Czech capital, in a unique rugged landscape on the bank of the Vltava River. ",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2558.320087636049!2d14.404012615323099!3d50.11773207943086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470bead4f9db039b%3A0x96d9543c02ebb5bd!2sJard%C3%ADn%20zool%C3%B3gico%20de%20Praga!5e0!3m2!1ses-419!2smx!4v1639723844346!5m2!1ses-419!2smx" 
    },
    {
        country: "Czech Republic",
        name: "Cathedral of St. Peter and St. Paul",
        type: "Church",
        schedule: "08:15 - 18:30",
        price: "Free",
        image: "https://upload.wikimedia.org/wikipedia/commons/b/be/Brno-Cathedral_of_St._Peter_and_Paul_2.jpg", 
        description: "This neo-Gothic cathedral is famous for the bells that always ring noon at 11 A.M., a tradition that dates back to a 1645 siege by the Swedes.",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1323005.6195449012!2d14.382848359844644!3d49.63554222675248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b945df4901b65%3A0xc9102929678ae931!2sSaints%20Peter%20and%20Paul%20Basilica!5e0!3m2!1ses-419!2smx!4v1639723911345!5m2!1ses-419!2smx" 
    },
    {
        country: "Czech Republic",
        name: "Staromestske namesti",
        type: "Historic Site",
        schedule: "All day",
        price: "Free",
        image: "https://media-cdn.tripadvisor.com/media/photo-s/0c/dd/74/b1/pohled-na-namesti.jpg", 
        description: "The most significant square of historical Prague, it was founded in the 12th century and has been witness to many historical events. ",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d327671.2330707785!2d14.141036132812493!3d50.08756919999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b94e93451fa21%3A0x97ef2407c21e72c4!2sPlaza%20de%20la%20Ciudad%20Vieja!5e0!3m2!1ses-419!2smx!4v1639724078818!5m2!1ses-419!2smx" 
    },
    {
        country: "Denmark",
        name: "Nyhavn",
        type: "Historic Site",
        schedule: "All day",
        price: "Free",
        image: "https://upload.wikimedia.org/wikipedia/commons/3/39/Nyhavn_MichaD.jpg", 
        description: "Copenhagen's Nyhaven, or 'New Harbor', is actually steeped in a long heritage. Colorful buildings line the canal and hint at a history of small-vessel traffic. ",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2249.53030161246!2d12.588609715579263!3d55.67976753053391!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46525322aa676daf%3A0x99c2a00928e5eaeb!2sNyhavn!5e0!3m2!1ses-419!2smx!4v1639724282461!5m2!1ses-419!2smx" 
    },
    {
        country: "Denmark",
        name: "Tivoli Gardens",
        type: "Amusement Park",
        schedule: "11:00 - 23:45",
        price: "135 KR",
        image: "https://upload.wikimedia.org/wikipedia/commons/c/cc/Tivoligardens2.jpg", 
        description: "From mid-April to mid-September, a world-class amusement park comes to life in the center of Copenhagen.",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2249.880159573909!2d12.565958415578963!3d55.67368408053225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4652531280f6eaf3%3A0xd9b50b0db50b27b0!2sJardines%20de%20Tivoli!5e0!3m2!1ses-419!2smx!4v1639724416546!5m2!1ses-419!2smx" 
    },
    {
        country: "Denmark",
        name: "Den Gamle By",
        type: "Museum",
        schedule: "10:00 - 17:00",
        price: "20.70 DKK",
        image: "https://viajeaescandinavia.com/wp-content/uploads/2011/04/Den-Gamle-By-en-Aarhus.jpg", 
        description: "Den Gamle By (The Old Town) is a national open-air museum of urban history and culture in Denmark through three centuries. The museum consists of more than 75 historic houses relocated from all over Denmark.",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2221.902950550455!2d10.18992651560216!3d56.15878258066385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464c3fe95ac46a89%3A0xb5564e6a17eef6c9!2sDen%20Gamle%20By!5e0!3m2!1ses-419!2smx!4v1639724585745!5m2!1ses-419!2smx" 
    },
    {
        country: "Estonia",
        name: "Tallinn Old Town",
        type: "Historic Site",
        schedule: "All day",
        price: "Free",
        image: "https://d2bgjx2gb489de.cloudfront.net/gbb-blogs/wp-content/uploads/2016/11/14105735/Aerial-view-old-town-Tallinn-Estonia_XL.jpg", 
        description: "This jumble of 14th- and 15th-century architecture with its medieval walls, needling spires and twisting, cobblestone streets is also the site of many of the city's important historic attractions and museums.",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16229.768392801258!2d24.725834532232415!3d59.43772682858861!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46929362679c3539%3A0x56e9b9445eb31dc5!2sVanalinn%2C%20Tallin%2C%20Estonia!5e0!3m2!1ses-419!2smx!4v1639724752795!5m2!1ses-419!2smx" 
    },
    {
        country: "Estonia",
        name: "AHHAA Science Centre",
        type: "Museum",
        schedule: "10:00 - 20:00",
        price: "11 Euros",
        image: "https://images.adsttc.com/media/images/5194/1e76/b3fc/4b37/4100/013d/newsletter/Ahhaa-1_6009.jpg?1368661619", 
        description: "New temporary exhibition 'Aha, gravity!' open from 11 June! A perfect place for a family holiday, AHHAA is the biggest science centre in Estonia and the Baltic states, located in Tartu. ",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2091.997662670181!2d26.732350715709874!3d58.37657628133559!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46eb36deb312c23b%3A0x9789026e196b238!2sAHHAA%20Science%20Centre!5e0!3m2!1ses-419!2smx!4v1639724840860!5m2!1ses-419!2smx" 
    },
    {
        country: "Estonia",
        name: "Parnu Beach Promenade",
        type: "Beach",
        schedule: "All day",
        price: "Free",
        image: "https://static.visitestonia.com/images/3685740/600_400_false_false_22fe624e2112eab53f2c17ab45b79f6a.jpg", 
        description: "Completed in 2006, the attractive Beach Promenade has the feeling of a real resort and makes the Summer Capital's beaches inviting even in bad weather!.",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4184.580877098901!2d24.500260277953615!3d58.371638575335886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46ecfd1ac583db5d%3A0xfdd6b79b1fe86560!2sP%C3%A4rnu%20Beach!5e0!3m2!1ses-419!2smx!4v1639724963904!5m2!1ses-419!2smx" 
    },
    {
        country: "Finland",
        name: "Sea Fortress Suomenlinna",
        type: "Museum",
        schedule: "12:00 - 23:59",
        price: "Free",
        image: "https://www.finlandlocalguide.com/picture0x0/suomenlinna-daily-tour-61.jpg", 
        description: "World Heritage Fortress accessible by ferry, with canyons, tunnels, shipyard, museums and bar.",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1986.1342426680094!2d24.985951415797818!3d60.14539998195179!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46920b8db8853885%3A0xc98ef166ae80717!2sSuomenlinna!5e0!3m2!1ses-419!2smx!4v1639725342083!5m2!1ses-419!2smx" 
    },
    {
        country: "Finland",
        name: "Arktikum",
        type: "Museum",
        schedule: "10:00 - 17:00",
        price: "32 Euros",
        image: "https://media-cdn.tripadvisor.com/media/photo-s/05/5d/bb/a7/arktikum.jpg", 
        description: "rktikum is a science centre and museum that lets you experience northern nature, culture, and history up close. ",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1590.4519181366156!2d25.724167116125976!3d66.50758548471713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x442b4b8bb73507b3%3A0x56f56aa8cab0c49!2sArktikum!5e0!3m2!1ses-419!2smx!4v1639725463910!5m2!1ses-419!2smx" 
    },
    {
        country: "Finland",
        name: "Santa Claus Village",
        type: "Point of Interest",
        schedule: "09:00 - 18:00",
        price: "Variable",
        image: "https://santaclausvillage.info/userassets/uploads/2018/02/slide5-1600x760.jpg", 
        description: "Santa Claus spends his time at Santa Claus Village every day of the year to take care of his mission in life; to enhance the well-being of children and the kindness of grown-ups, as well as spread the message of love and goodwill and the Christmas Spirit across the globe.",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1588.2095386037092!2d25.842651016127842!3d66.54269283473467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x442b4e7e543e9979%3A0xd7f9b9e4341d7ed3!2sSanta%20Claus%20Village!5e0!3m2!1ses-419!2smx!4v1639725642886!5m2!1ses-419!2smx" 
    },
    {
        country: "France",
        name: "Louvre Museum",
        type: "Museum",
        schedule: "9:00 - 21:45",
        price: "17 Euros",
        image: "https://api-www.louvre.fr/sites/default/files/2021-01/cour-napoleon-et-pyramide_1.jpg", 
        description: "Home to Leonardo da Vinci's Mona Lisa, the Louvre is considered the world's greatest art museum, with an unparalleled collection of items covering the full spectrum of art through the ages.",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.8741023651382!2d2.335455315267878!3d48.860611079287715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e671d877937b0f%3A0xb975fcfa192f84d4!2sMuseo%20del%20Louvre!5e0!3m2!1ses-419!2smx!4v1639726104670!5m2!1ses-419!2smx" 
    },
    {
        country: "France",
        name: "Eiffel Tower",
        type: "Point of Interest",
        schedule: "09:30 - 22.45",
        price: "26.10 Euros",
        image: "https://i.pinimg.com/originals/0a/ee/68/0aee68e5e233cad0c948e3789d08f085.jpg", 
        description: "Completed in 1889, this colossal landmark, although initially hated by many Parisians, is now a famous symbol of French civic pride.",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9916256937536!2d2.2922926152677947!3d48.85837007928757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sTorre%20Eiffel!5e0!3m2!1ses-419!2smx!4v1639726529627!5m2!1ses-419!2smx" 
    },
    {
        country: "France",
        name: "Cathédrale Notre-Dame de Paris",
        type: "Church",
        schedule: "Closed",
        price: "Free",
        image: "https://cdn.culturagenial.com/es/imagenes/a-catedral-fachada-bella-cke.jpg", 
        description: "This famous cathedral, a masterpiece of Gothic architecture on which construction began in the 12th century, stands on the Île de la Cité and is the symbolic heart of the city.",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2625.274897570969!2d2.347713415267566!3d48.85296817928686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e671e19ff53a01%3A0x36401da7abfa068d!2sCatedral%20de%20Notre%20Dame!5e0!3m2!1ses-419!2smx!4v1639726685095!5m2!1ses-419!2smx" 
    },
    {
        country: "Georgia",
        name: "Old Town (Altstadt) Tbilisi",
        type: "Historic Site",
        schedule: "All day",
        price: "Free",
        image: "https://media-cdn.tripadvisor.com/media/photo-s/08/ce/40/bc/old-town-altstadt-tbilisi.jpg", 
        description: " an administrative district (raioni) in Tbilisi, capital of Georgia, from 2007 to 2013.",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47664.59123341226!2d44.749089397482166!3d41.69813798445775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40440cc144daeeb1%3A0xfd22fa4e812fe5d1!2sVieja%20Tiflis%2C%20Tiflis%2C%20Georgia!5e0!3m2!1ses-419!2smx!4v1639726840683!5m2!1ses-419!2smx" 
    },
    {
        country: "Georgia",
        name: "Batumi Botanical Gardens",
        type: "Garden",
        schedule: "09:00 - 17:00",
        price: "15 GEL",
        image: "https://i.pinimg.com/originals/38/4d/e3/384de35532be0c433dd03f0d225f53b8.jpg", 
        description: "The lower, upper and seaside parks are located on the main route of the garden. Currently, the garden consists of nine floristic sectors, those of Caucasian humid subtropics, East Asia, New Zealand, South America, the Himalayas, Mexico, Australia, and of the Mediterranean. ",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5958.4160982908725!2d41.7031178348877!3d41.694444199999985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x405d7d685b666b09%3A0x3f7a5e91d16f9a8e!2sJard%C3%ADn%20Bot%C3%A1nico%20de%20Batumi!5e0!3m2!1ses-419!2smx!4v1639727158221!5m2!1ses-419!2smx" 
    },
    {
        country: "Georgia",
        name: "Kutaisi Market",
        type: "Market",
        schedule: "7:00 - 22:00",
        price: "Variable",
        image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/1f/88/df/the-colors-of-kutaisi.jpg?w=1200&h=-1&s=1", 
        description: "A market where you can find everything you need and at the same time get to know the Georgian atmosphere of the people of Kutaisi.",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2952.317483501616!2d42.69959541499619!3d42.271745779192855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x405c8d86027dabbb%3A0xb79f214dfe07e750!2sKutaisi%20market!5e0!3m2!1ses-419!2smx!4v1639727227908!5m2!1ses-419!2smx" 
    },
    {
        country: "Germany",
        name: "Reichstag Building",
        type: "Historic Site",
        schedule: "08:00 - 22:00",
        price: "Free",
        image: "https://i.ytimg.com/vi/W6Um6ddhGU8/maxresdefault.jpg", 
        description: "Situated just north of the Brandenburg Gate, this building houses the German Parliament and was the seat of the Weimar Republic government until it was seized by the Nazis in 1933.",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2427.8186922370833!2d13.373998515431374!3d52.51862017981403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a851c741ee506d%3A0x641b52d3abf17de5!2sEdificio%20del%20Reichstag!5e0!3m2!1ses-419!2smx!4v1639727564727!5m2!1ses-419!2smx" 
    },
    {
        country: "Germany",
        name: "Cologne Cathedral",
        type: "Church",
        schedule: "09:00 - 21:00",
        price: "Free",
        image: "https://9968c6ef49dc043599a5-e151928c3d69a5a4a2d07a8bf3efa90a.ssl.cf2.rackcdn.com/49994-1.jpg", 
        description: "This giant Gothic cathedral, which until its completion in 1880 had been under construction for over 500 years, is perhaps Germany's most famous religious structure and includes two huge towers that serve as the defining symbol of Cologne's skyline.",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2514.05053963747!2d6.956092715359823!3d50.94127837954611!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bf25a5369c3d2f%3A0x29ec913896e3a9c6!2sCatedral%20de%20Colonia!5e0!3m2!1ses-419!2smx!4v1639727651222!5m2!1ses-419!2smx" 
    },
    {
        country: "Germany",
        name: "Marienplatz",
        type: "Historic Site",
        schedule: "All day",
        price: "Free",
        image: "https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/ec/47/1e.jpg", 
        description: "This prominent public square, the largest in Munich, still stands as the center of social activity in the city, much as it has throughout history.",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10650.36755944258!2d11.566693769775389!3d48.1373932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84e248d37632d%3A0xdead51b35f0e0bb3!2sMarienplatz!5e0!3m2!1ses-419!2smx!4v1639727748876!5m2!1ses-419!2smx" 
    },
    {
        country: "Greece",
        name: "Acropolis",
        type: "Ancient Ruins",
        schedule: "08:00 - 20:00",
        price: "8 Euros",
        image: "https://vidalturismo.com/wp-content/uploads/2019/06/original-WEB.jpg", 
        description: "The most famous site in all of Athens, this large hill lies in the center of the city and contains a cluster of ancient ruins.",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12581.793222282655!2d23.724578528052607!3d37.966665875597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a1bd115926d4b3%3A0xc1b7afae2bd1b7ea!2sAcropolis!5e0!3m2!1ses-419!2smx!4v1639728018629!5m2!1ses-419!2smx" 
    },
    {
        country: "Greece",
        name: "Palace of the Grand Master of the Knights of Rhodes",
        type: "Castle",
        schedule: "08:00 - 15:00",
        price: "Free",
        image: "https://rhodos.gr/wp-content/uploads/grand-master-palace.jpg", 
        description: "Imposing castle rebuilt by the Italians in 1940, which houses museums of ancient and medieval Rhodes.",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3209.487703295209!2d28.221901714782856!3d36.44576848002317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x149561e985e8a895%3A0x68a2ba941a825037!2sPalacio%20del%20Gran%20maestre%20de%20los%20caballeros%20de%20Rodas!5e0!3m2!1ses-419!2smx!4v1639728147179!5m2!1ses-419!2smx" 
    },
    {
        country: "Greece",
        name: "Tsambika Beach",
        type: "Beach",
        schedule: "All day",
        price: "Free",
        image: "https://lh5.googleusercontent.com/p/AF1QipM0MFXHBSGITxaPvGJJRdFuBNXQoJgoUIATeB2a=s1600", 
        description: "Popular beach with restaurants and activity centers between rugged headlands.",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6436.944762267847!2d28.144479924213925!3d36.22801732028143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14956dcffba234cb%3A0x1d1a99c293467b40!2sTsambika%20Beach!5e0!3m2!1ses-419!2smx!4v1639728268669!5m2!1ses-419!2smx" 
    },
    {
        country: "Hungary",
        name: "Hungarian Parliament Building",
        type: "Architectural Buildings",
        schedule: "08:00 - 18:00",
        price: "6700 FT",
        image: "https://www.swedishnomad.com/wp-content/images/2020/03/Hungarian-Parliament.jpg", 
        description: "The domed neo-Gothic structre was inspired by the British House of Parliament and serves as both a vibrant government center and a proud city landmark on the banks of the Danube.",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2695.1165708647623!2d19.043480315209614!3d47.50712097917826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741dc1046d4a33d%3A0x342122b8ff8f0f6e!2sparlamento!5e0!3m2!1ses-419!2smx!4v1639728521237!5m2!1ses-419!2smx" 
    },
    {
        country: "Hungary",
        name: "Tisza River",
        type: "Body of water",
        schedule: "All day",
        price: "Free",
        image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/04/2d/ab/6b/tisza-river.jpg?w=1200&h=-1&s=1", 
        description: "one of the major rivers of Central and Eastern Europe. Once, it was called 'the most Hungarian river' because it flowed entirely within the Kingdom of Hungary. Today, it crosses several national borders.",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2798789.2568670837!2d19.866837969116446!3d46.76109932221461!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47383c00f6e38035%3A0xd296e970353f7255!2sTisza!5e0!3m2!1ses-419!2smx!4v1639728573267!5m2!1ses-419!2smx" 
    },
    {
        country: "Hungary",
        name: "Valley of the Beautiful Women",
        type: "Caverns and Caves",
        schedule: "Reservation",
        price: "17 Euros",
        image: "https://worldinbetween.files.wordpress.com/2015/04/eger-wine-huts.jpg?w=1032", 
        description: "Eger is rich in famous historical spectacles and cultural programmes, there is something for everyone that tickles their fancy. After a day spent pleasantly, visiting Szépasszony-völgy is the perfect closure involving the opportunity for wine tastings being held in the wineries for individuals and groups as well.",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2675.387901657789!2d20.356864315225963!3d47.89017697920443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47408d6d56dc1141%3A0x9ed1ce1f0197b697!2sValley%20of%20the%20Beautiful%20Woman!5e0!3m2!1ses-419!2smx!4v1639728808158!5m2!1ses-419!2smx" 
    },
    {
        country: "Iceland",
        name: "Perlan",
        type: "Museum",
        schedule: "09:00 - 21:00",
        price: "4490 KR",
        image: "https://media-cdn.tripadvisor.com/media/photo-s/13/f5/22/8f/perlan-stands-upon-reykjavik.jpg", 
        description: "Perlan is a Nature Exploratorium and among Reykjavik's main landmarks. You can learn all about Icelandic nature in fun and interactive ways at our exhibitions. Some highlights include a real indoors ice cave, hands-on exhibits, a life-size bird cliff full of life, and a show about volcanoes.",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1740.9296420392805!2d-21.921239383998802!3d64.12921258358736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48d60b4cb9a4739d%3A0x720effd6596f3f29!2sPerlan!5e0!3m2!1ses-419!2smx!4v1639729056989!5m2!1ses-419!2smx" 
    },
    {
        country: "Iceland",
        name: "Gunnuhver Hot Springs",
        type: "Gersey",
        schedule: "12:00 - 23:59",
        price: "Free",
        image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/65/a6/93/gunnuhver-geothermal.jpg?w=1200&h=-1&s=1", 
        description: " a field of steaming fumaroles and boiling mud pools. In the recent past here existed some geysers but some four centuries ago this area was… heavily haunted.",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1760.321657801013!2d-22.687304684014922!3d63.819307983448354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4929e443df9e8eaf%3A0x5aa726154eb9a07d!2sGunnuhver%20Hot%20Springs!5e0!3m2!1ses-419!2smx!4v1639729245454!5m2!1ses-419!2smx" 
    },
    {
        country: "Iceland",
        name: "Harpa Reykjavik Concert Hall and Conference Centre",
        type: "Theater",
        schedule: "12:00 - 16:00",
        price: "Variable",
        image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/8d/97/d5/harpa-reykjavik-concert.jpg?w=1200&h=-1&s=1", 
        description: "Harpa Concert Hall and Conference Centre at the heart of Reykjavik is an award-winning building situated at the old harbour. Harpa opened its doors in 2011 and boasts a wide variety of hosted events where all musical genres play a part. ",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1739.602349258524!2d-21.934648983997743!3d64.15039428359697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48d674d3023a19c7%3A0xdbbf050da40f5d28!2sHarpan%2C%20101%20Reykjav%C3%ADk%2C%20Islandia!5e0!3m2!1ses-419!2smx!4v1639729423866!5m2!1ses-419!2smx" 
    },
    {
        country: "Ireland",
        name: "Titanic Belfast",
        type: "Museum",
        schedule: "10:00 - 17:00",
        price: "19.50 Euros",
        image: "https://media.tacdn.com/media/attractions-splice-spp-674x446/06/71/de/86.jpg", 
        description: "The Titanic Belfast visitor attraction extends over nine galleries, with multiple dimensions to the exhibition. Drawing together special effects, dark rides, full-scale reconstructions and innovative interactive features you will explore the Titanic story in a fresh and insightful way from her conception in Belfast in the early 1900s, through her construction and launch, to her infamous maiden voyage and catastrophic demise.",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1155.3835423576504!2d-5.911018291756986!3d54.608095695065686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x486109b027638971%3A0x4c25729beb967212!2sTitanic%20Belfast!5e0!3m2!1ses-419!2smx!4v1639753924194!5m2!1ses-419!2smx" 
    },
    {
        country: "Ireland",
        name: "King John's Castle",
        type: "Castle",
        schedule: "09:30 - 18:00",
        price: "11.70 Euros",
        image: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/0b/e0/63/0f.jpg", 
        description: "This newly renovated 13th-century castle is open for tours.",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2455239.310195393!2d-7.036374197847535!3d53.061793971798345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4860d6cf8248813d%3A0xbf933352bec72d4f!2sKing%20John&#39;s%20Castle!5e0!3m2!1ses-419!2smx!4v1639754354752!5m2!1ses-419!2smx" 
    },
    {
        country: "Ireland",
        name: "Spike Island",
        type: "Island",
        schedule: "10:00 - 16:00",
        price: "23 Euros",
        image: "https://assets-eu-01.kc-usercontent.com/aa24ba70-9a12-01ae-259b-7ef588a0b2ef/f9a4d6bc-3329-41e2-abed-88a67308b3f8/Spike-Island-Cobh-Cork.jpg?h=615&q=66&fm=jpg", 
        description: "Discover Ireland's Captains & Convicts, Rebels and Rioters & Sinners and Saints at Spike Island Cork, Ireland's historic island. Voted Europe's Leading Tourist Attraction of 2017! The Island is located off the coast of Cobh in Cork harbour & has over 1300 years of Irish history. ",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2507100.4217578107!2d-7.091336618518786!3d52.14632157542193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x484483c7c68c9aad%3A0x7478aff0f3c1fd05!2sSpike%20Island!5e0!3m2!1ses-419!2smx!4v1639754558184!5m2!1ses-419!2smx" 
    },
    {
        country: "Italy",
        name: "Gallerie Degli Uffizi",
        type: "Museum",
        schedule: "Closed",
        price: "Variable",
        image: "https://www.discovertravelnews.com/wp-content/uploads/2020/05/Uffizi_Florencia.jpg", 
        description: "One of the great museums of the world, the Uffizi houses the premier collection of Italian Renaissance art, featuring works by such masters as Botticelli, Titian, Michelangelo and da Vinci.",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2881.2443871123414!2d11.253122115055186!3d43.76778557911753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132a54008dc59081%3A0xcddeb7c89bf0c4cd!2sGaleria%20degli%20Uffizi!5e0!3m2!1ses-419!2smx!4v1639754984066!5m2!1ses-419!2smx" 
    },
    {
        country: "Italy",
        name: "Duomo di Milano",
        type: "Churc",
        schedule: "Closed",
        price: "Free",
        image: "https://www.swedishnomad.com/wp-content/images/2020/03/Duomo-di-Milano.jpg", 
        description: "The Duomo, symbol of Milan in the world, is one of the largest cathedrals in Italy and Europe. Patrimony of Milanese people and humanity, over the centuries it has been expressing, with its magnificence, the devotion of humanity toward the Divine, involving future generations in an endless commitment.",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2798.27998787072!2d9.189372265124053!3d45.46416347910095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c6aec34636a1%3A0xab7f4e27101a2e13!2sCatedral%20de%20Mil%C3%A1n!5e0!3m2!1ses-419!2smx!4v1639755079866!5m2!1ses-419!2smx" 
    },
    {
        country: "Italy",
        name: "Colosseum",
        type: "Historic Site",
        schedule: "10:30 - 19:15",
        price: "18 Euros",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Colosseo_2020.jpg/1200px-Colosseo_2020.jpg", 
        description: "Perhaps the best-preserved of the monuments of ancient Rome, this huge marble structure was built to hold more than 50,000 spectators to witness bloody contests of might and the slaughter of wild beasts.",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2970.1230738089907!2d12.490042214981456!3d41.89021017922111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f61b6532013ad%3A0x28f1c82e908503c4!2sColiseo%20de%20Roma!5e0!3m2!1ses-419!2smx!4v1639755319854!5m2!1ses-419!2smx" 
    },
    {
        country: "Kazakhstan",
        name: "Big Almaty Lake",
        type: "Body of Water",
        schedule: "All day",
        price: "Free",
        image: "https://d2rdhxfof4qmbb.cloudfront.net/wp-content/uploads/20190913185019/Kazakhstan-Big-Almaty-Lake.jpg", 
        description: "Picturesque lake in the Ile-Alatau National Park, surrounded by mountain peaks.",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11662.265339692492!2d76.97624523111115!3d43.050555116342785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3883629f25a024ff%3A0xb55b4eb1c8de0866!2z0q7Qu9C60LXQvSDQkNC70LzQsNGC0Ysg0LrTqdC70ZY!5e0!3m2!1ses-419!2smx!4v1639755621719!5m2!1ses-419!2smx" 
    },
    {
        country: "Kazakhstan",
        name: "Hazret Sultan Mosque",
        type: "Church",
        schedule: "All day",
        price: "Free",
        image: "https://img.itinari.com/pages/images/original/f48469cf-555d-4d27-b03c-b2e42146618b-istock-986587570.jpg?ch=DPR&dpr=1&w=1600&s=fce6a607aacfb86e68c15be4aa4205af", 
        description: "Mosque with capacity for 10,000 people, one of the largest in Central Asia, the 40kg Koranic book. weight is found here, considered one of the oldest original sacred books in the world.",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2504.076964016983!2d71.46974641536809!3d51.125488379574215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x424583f0095099bd%3A0x21e013057f41169c!2sHazrat%20Sultan%20Mosque!5e0!3m2!1ses-419!2smx!4v1639755849381!5m2!1ses-419!2smx" 
    },
    {
        country: "Kazakhstan",
        name: "Bayterek Tower",
        type: "Monument",
        schedule: "All day",
        price: "Free",
        image: "https://live.staticflickr.com/8461/7964679276_c0b0ce48eb_b.jpg", 
        description: "Tower with a design similar to a trophy, built between 1996 and 2002, with a viewpoint 97 m above the street.",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2503.92453637224!2d71.42831131536826!3d51.128299979574585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4245841e0caadcf7%3A0x4f6ce0ff87111d39!2sBayterek!5e0!3m2!1ses-419!2smx!4v1639756000100!5m2!1ses-419!2smx" 
    },
    {
        country: "Latvia",
        name: "Old City Riga (Vecriga)",
        type: "Historic Site",
        schedule: "All day",
        price: "Free",
        image: "https://media-cdn.tripadvisor.com/media/photo-s/0e/4f/77/57/caption.jpg", 
        description: "This charming maze of narrow and crooked cobblestone streets is filled with a mixture of architectural styles including Nordic, Gothic, Renaissance, baroque and Jugendstil, plus such historic sites as the 13th-century Riga Castle, St. Peter's Church, the Swedish Gate and the Freedom Monument.",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8704.197753481038!2d24.096676690945756!3d56.947954244235824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46eecfd7054ee4c5%3A0xf38a7b5d7e78c30f!2sVecr%C4%ABga%2C%20Central%20District%2C%20Riga%2C%20LV-1050%2C%20Letonia!5e0!3m2!1ses-419!2smx!4v1639756244494!5m2!1ses-419!2smx" 
    },
    {
        country: "Latvia",
        name: "Jurmala Beach",
        type: "Beach",
        schedule: "All day",
        price: "Free",
        image: "https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_450,q_auto,w_450/itemimages/85/23/852311_v3.jpeg", 
        description: "An Immeasurably Long and Extraordinarily Picturesque Beach",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8697.956129424627!2d23.77698974096656!3d56.97468469436253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46eedd11b6f58b43%3A0xf9c0a765847d5c5c!2sJ%C5%ABrmalas%20pludmale!5e0!3m2!1ses-419!2smx!4v1639756375001!5m2!1ses-419!2smx" 
    },
    {
        country: "Latvia",
        name: "Dzintari Forest Park",
        type: "Park",
        schedule: "09:00 - 22:00",
        price: "Variable",
        image: "https://media-cdn.tripadvisor.com/media/photo-s/18/13/57/84/img-20190623-105127-largejpg.jpg", 
        description: "The park is suitable for both: admirers of active and calm recreation. There are children playgrounds for all age groups, road for roller skating and pedestrian roads, cafes, parking lot and toilets in the park. ",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2174.3551967199555!2d23.815565715641636!3d56.97697698089845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46eedce0ff57ddcd%3A0x3911857e63c9623b!2sDzintari%20Forest%20Park!5e0!3m2!1ses-419!2smx!4v1639756485823!5m2!1ses-419!2smx" 
    },
    {
        country: "Liechtenstein",
        name: "Liechtenstein Center",
        type: "Historic Site",
        schedule: "All day",
        price: "Free",
        image: "https://i.pinimg.com/originals/05/64/2d/05642dd3ec252068ccb5c2aedd49fa70.jpg", 
        description: "Discover Liechtenstein at a glance. The Liechtenstein Center gives you the unique and free opportunity to get a comprehensive picture of the diversity of this small state using state-of-the-art multimedia technology and fascinating film footage. ",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2713.9895503185594!2d9.520399015193947!3d47.13847077915636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479b315da0bf74e9%3A0xca02cc8bce5eeb83!2sCentro%20de%20informaci%C3%B3n%20tur%C3%ADstica%20de%20Liechtenstein!5e0!3m2!1ses-419!2smx!4v1639756780908!5m2!1ses-419!2smx" 
    },
    {
        country: "Liechtenstein",
        name: "Vaduz Castle",
        type: "Castle",
        schedule: "All day",
        price: "Closed",
        image: "https://i.pinimg.com/originals/e1/c2/db/e1c2db65dcfe46ed6460f0ba6a2c121c.jpg", 
        description: "Visible from far and wide yet so close you could almost touch it, the emblem of Liechtenstein towers over Vaduz on a rock terrace which can be reached along a romantic footpath. The castle was first built some 700 years ago. ",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2713.932524805794!2d9.522114815194007!3d47.139587979156495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479b315ce6423125%3A0xe00102f23d7d9036!2sCastillo%20de%20Vaduz!5e0!3m2!1ses-419!2smx!4v1639756972956!5m2!1ses-419!2smx" 
    },
    {
        country: "Liechtenstein",
        name: "Liechtenstein National Museum",
        type: "Museum",
        schedule: "10:00 - 17:00",
        price: "Free",
        image: "https://www.bodensee.eu/pois/bcp-ausflugsziele/liechtensteinisches-landesmuseum/image-thumb__865__lightbox/llm-aussen-hauptbild.jpeg", 
        description: "In the 42 exhibition rooms of the National Museum, Liechtenstein national treasures are open to detailed exploration. Whether cultural history, national history, or natural history.",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2714.0058737581894!2d9.520490315193934!3d47.13815097915636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479b31cfb611ee11%3A0xb24964428cf33fda!2sMuseo%20nacional%20de%20Liechtenstein!5e0!3m2!1ses-419!2smx!4v1639757106494!5m2!1ses-419!2smx" 
    },
    {
        country: "Lithuania",
        name: "Vilnius Old Town",
        type: "Historic Site",
        schedule: "All day",
        price: "Free",
        image: "https://www.smarttravel.ee/wp-content/uploads/2013/10/VNO-1.jpg",
        description: "Champagne Boutique in Old town, more than 100 Champagnes,Champagne testing and snacks.",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18452.51056915468!2d25.275979917426888!3d54.68210523794399!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dd9413b1f67c6b%3A0x2600d18d4c454541!2sCentro%20hist%C3%B3rico%20de%20Vilna%2C%20Vilna%2C%20Lituania!5e0!3m2!1ses-419!2smx!4v1639757463237!5m2!1ses-419!2smx" 
    },
    {
        country: "Lithuania",
        name: "Ninth Fort",
        type: "Historic Site",
        schedule: "10:00 - 17:00",
        price: "3 Euros",
        image: "https://images.squarespace-cdn.com/content/v1/592aac852e69cfe00463d908/1496204460326-072OWHKG0FF4EN3LI9KA/Elizabeth+LT.jpg?format=1500w",
        description: "On July 9, 1958, a Museum of Revolution History was established in the Ninth Fort in conformity to the Decree of the Soviet Ministers’ Council. In less than a year, on May 30, 1959, the museum was opened: the first exposition about Nazi crimes in Lithuania was presented to society in four former cells of the Fort. In 1960, research started in the field of mass massacre by the Ninth Fort in order to identify the boundaries of mass murder territory and to collect proof (i.e. exhibits) about the mass murder which took place here.",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2291.581453665339!2d23.868754515544367!3d54.945360980345114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46e71f17ae95d20d%3A0x24d91c0078cdd502!2sFuerte%20Noveno!5e0!3m2!1ses-419!2smx!4v1639757699479!5m2!1ses-419!2smx" 
    },
    {
        country: "Lithuania",
        name: "Curonian Spit / Kursiu Nerija National Park",
        type: "Park",
        schedule: "All day",
        price: "Free",
        image: "https://media-cdn.tripadvisor.com/media/photo-s/09/67/df/96/kursiu-nerija-national.jpg",
        description: "98 km long sandy coastline on the Baltic Sea, with beaches and tourist villages.",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9090.248731907328!2d20.959578539662605!3d55.27833248686429!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46e497eb3fefd383%3A0x392ee279a4016173!2sIstmo%20de%20Curlandia!5e0!3m2!1ses-419!2smx!4v1639757940601!5m2!1ses-419!2smx" 
    },
    {
        country: "Luxembourg",
        name: "Le Chemin de la Corniche",
        type: "Historic Site",
        schedule: "All day",
        price: "Free",
        image: "https://img.locationscout.net/images/2018-10/le-chemin-de-la-corniche-luxembourg_l.jpeg",
        description: "Wonderful views to the Altette Valley and the Grund; The Corniche is lined by remarkable houses, the 'Maison de Cassal' and some other noble picturesque houses from the 17 - 19 centuries; a wonderful walk for a sunny afternoon.",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2585.344762923494!2d6.132174915300695!3d49.61010467936825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479548d29133053b%3A0xb53973b05f566db2!2sChem.%20de%20la%20Corniche%2C%20Luxembourg%2C%20Luxemburgo!5e0!3m2!1ses-419!2smx!4v1639758291233!5m2!1ses-419!2smx" 
    },
    {
        country: "Luxembourg",
        name: "Grund",
        type: "Historic Site",
        schedule: "All day",
        price: "Free",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Grund%2C_Luxembourg_from_wall_above.jpg/1280px-Grund%2C_Luxembourg_from_wall_above.jpg",
        description: "Full of fantastic corners. It is a must in the city.",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10341.416615190976!2d6.132120235503496!3d49.609927619889895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479548cd49cf5617%3A0x2600d1d7cdbeba51!2sGrund%2C%20Luxemburgo!5e0!3m2!1ses-419!2smx!4v1639758420100!5m2!1ses-419!2smx" 
    },
    {
        country: "Luxembourg",
        name: "Luxembourg American Cemetery Memorial",
        type: "Cementery",
        schedule: "09:00 - 17:00",
        price: "Free",
        image: "https://mapio.net/images-p/88805029.jpg",
        description: "The Luxembourg American Cemetery and Memorial is the resting place of over 5,000 service members who died during World War II, including the gravesite of General George S. Patton Jr. ",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2585.203519847107!2d6.183446715300828!3d49.61276767936861!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479545e38f6bdd47%3A0xb7349397af145a20!2sCementerio%20y%20monumento%20estadounidense%20de%20Luxemburgo!5e0!3m2!1ses-419!2smx!4v1639758727613!5m2!1ses-419!2smx" 
    },
    {
        country: "Malta",
        name: "St. John's Co-Cathedral",
        type: "Church",
        schedule: "09:30 - 16:00",
        price: "Free",
        image: "https://upload.wikimedia.org/wikipedia/commons/0/08/St_Johns_Co-Cathedral.jpg",
        description: "Built between 1573 and 1577, this cathedral contains two masterpieces by Caravaggio. St John’s Co-Cathedral is a gem of Baroque art and architecture. It was built as the conventual church for the Knights of St John.",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3232.0081045283882!2d14.51021486476419!3d35.89781718014441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x130e452c6325cb39%3A0xf475586538f4fd0!2sSaint-John&#39;s%20Cathedral%20Museum!5e0!3m2!1ses-419!2smx!4v1639758959036!5m2!1ses-419!2smx" 
    },
    {
        country: "Malta",
        name: "Vittoriosa Waterfront - Birgu Waterfront",
        type: "Historic Site",
        schedule: "All day",
        price: "Free",
        image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/77/c3/48/dall-alto.jpg?w=1200&h=-1&s=1",
        description: "Visually striking with all the yachts moored in the harbour, and the light relfecting off the buildings from adjoining Isla. A very relaxing place to stroll along on your way to Fort St Angelo.",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3232.349467440118!2d14.517630814763846!3d35.88945578014628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x130e5b8249948155%3A0xf064e691a00e94ec!2sBirgu%20Waterfront!5e0!3m2!1ses-419!2smx!4v1639759067508!5m2!1ses-419!2smx" 
    },
    {
        country: "Malta",
        name: "Spinola Bay",
        type: "Body of water",
        schedule: "All day",
        price: "Free",
        image: "https://images.fineartamerica.com/images-medium-large-5/spinola-bay-in-st-julian-malta-sylvain-sonnet.jpg",
        description: "A must to visit and relax for a few hours, plenty of bars and restaurants over looking the bay, take a walk along the waters edge",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1615.57288901722!2d14.490466758052179!3d35.91893164503491!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x130e4541df3092b3%3A0xc8cdd6b3497aece5!2sSpinola%20Bay!5e0!3m2!1ses-419!2smx!4v1639759204339!5m2!1ses-419!2smx" 
    },
    {
        country: "Moldova",
        name: "Dendrarium Park",
        type: "Park",
        schedule: "12:00 - 23:59",
        price: "4 LEI",
        image: "https://media-cdn.tripadvisor.com/media/photo-s/09/42/bf/f7/photo2jpg.jpg",
        description: "A huge park. Excellent for picnics, and has playgrounds for children.",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2719.4172794500732!2d28.805744515189446!3d47.03204212915077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c97dc684a3ad1d%3A0xf86d4745b5f6def4!2sDendrarium%20Park!5e0!3m2!1ses-419!2smx!4v1639759454614!5m2!1ses-419!2smx" 
    },
    {
        country: "Moldova",
        name: "Stefan cel Mare Park",
        type: "Park",
        schedule: "12:00 - 23:59",
        price: "Free",
        image: "https://media-cdn.tripadvisor.com/media/photo-s/07/22/b9/ac/stefan-cel-mare-park.jpg",
        description: "Nice park to walk throw , There are two parts one near the cathedral and second across the road near the parliament house",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2719.7839815697125!2d28.826084215189187!3d47.02484507915046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c97c33536d3eb7%3A0xd3eccd0c320794d!2sStephen%20the%20Great%20Central%20Park!5e0!3m2!1ses-419!2smx!4v1639759665891!5m2!1ses-419!2smx" 
    },
    {
        country: "Moldova",
        name: "Valea Morilor",
        type: "Park",
        schedule: "12:00 - 23:59",
        price: "Free",
        image: "https://img.itinari.com/pages/images/original/0e805421-ed10-4d48-b98a-8144f703d49a-nort.jpg?ch=DPR&dpr=1&w=1200&h=800&s=d36da5c14531ee646cd37ed4fb69eeba",
        description: "A vast territory, waterfalls of lakes, elements of landscape design.",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5440.225214606083!2d28.808343675869118!3d47.018394616600126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c97dd411a15f39%3A0xf091f9ef0612ac3a!2zTGFjdWwg4oCeVmFsZWEgTW9yaWxvcuKAnQ!5e0!3m2!1ses-419!2smx!4v1639759752085!5m2!1ses-419!2smx" 
    },
    {
        country: "Monaco",
        name: "Oceanographic Museum of Monaco",
        type: "Museum",
        schedule: "10:00 - 18:00",
        price: "16 Euros",
        image: "https://www.yachtsinternational.com/.image/t_share/MTQ2NDM4NTc5OTIxNjkyMTQx/monacooceanographicmuseum.jpg",
        description: "Aquariums, exhibitions, games and relaxation…the Oceanographic Museum of Monaco lets you dive into the marine world. ",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2883.032592725554!2d7.42325566505371!3d43.730649779118714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12cdc29025a46553%3A0xc2f94168c24a686c!2sMuseo%20Oceanogr%C3%A1fico%20de%20M%C3%B3naco!5e0!3m2!1ses-419!2smx!4v1639760120363!5m2!1ses-419!2smx" 
    },
    {
        country: "Monaco",
        name: "Prince's Palace",
        type: "Castle",
        schedule: "10:00 - 18:00",
        price: "10 Euros",
        image: "https://frenchriviera.travel/wp-content/uploads/2018/04/prince-palace-monaco1.jpg",
        description: "Bask in the unabashed opulence of this palace, decked out in colored marbles and gold plating.",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2882.992865089933!2d7.417674015053703!3d43.73147507911867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12cdc29276abcc2b%3A0x4ff95fffc2fbc021!2sLe%20Palais%20Princier!5e0!3m2!1ses-419!2smx!4v1639760302785!5m2!1ses-419!2smx" 
    },
    {
        country: "Monaco",
        name: "Cathedrale Notre-Dame-Immaculee",
        type: "Church",
        schedule: "09:00 - 18:00",
        price: "Free",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Monaco_BW_2011-06-07_16-07-20.jpg/1200px-Monaco_BW_2011-06-07_16-07-20.jpg",
        description: "Magnificent cathedral, built from 1875 to 1901, is the last home of the ruling princes and the Princess Grace of Monaco several important 16th-century paintings are exhibited. Also relics the relics of St. Devote, Patron Saint of the Princely Family and Monegasques. ",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2883.0455511318714!2d7.42033291505366!3d43.73038057911871!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12cdc2921efe115f%3A0xd48cdb34ca9b9621!2sCatedral%20de%20San%20Nicol%C3%A1s!5e0!3m2!1ses-419!2smx!4v1639760463432!5m2!1ses-419!2smx" 
    },
    {
        country: "Montenegro",
        name: "Kotor Old City",
        type: "Historic City",
        schedule: "All day",
        price: "Free",
        image: "https://images.myguide-cdn.com/md/common/large/5ac38d170a7f8-475559.jpg",
        description: "The old town is wonderful and well cared for. Inside you will see different types of churches and other types of wonderful buildings. There are plenty of small shops as well as restaurants and cafes.",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2945.180289869345!2d18.768542515002146!3d42.42389717918261!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x134c33478a3ebc09%3A0xf31f31632ecb06ba!2z0JfQuNC00LjQvdC1INCh0YLQsNGA0L7QsyDQs9GA0LDQtNCwINGDINCa0L7RgtC-0YDRgw!5e0!3m2!1ses-419!2smx!4v1639760705115!5m2!1ses-419!2smx" 
    },
    {
        country: "Montenegro",
        name: "Altstadt (Old Town) Budva",
        type: "Historic Site",
        schedule: "All day",
        price: "Free",
        image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/86/a9/60/org-32eb38067b9cd7ad.jpg?w=1200&h=-1&s=1",
        description: "Very nice old city, with a variety of restaurants and shops with local souvenirs.",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2952.0174914604268!2d18.835453014996503!3d42.27814997919247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x134dd4938d9f3801%3A0x7e18c7d1215b81df!2sBudva%20Old%20Town!5e0!3m2!1ses-419!2smx!4v1639760814737!5m2!1ses-419!2smx" 
    },
    {
        country: "Montenegro",
        name: "Bay of Kotor",
        type: "Body of Water",
        schedule: "All day",
        price: "Free",
        image: "https://rccl-h.assetsadobe.com/is/image/content/dam/royal/data/ports/kotor-montenegro/overview/kotor-montenegro-boats-in-bay.jpg?$750x320$",
        description: "Iconic fjord-like bay with rugged cliffs and picturesque towns, such as the historic city of Kotor.",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d188400.56975563508!2d18.498801369024505!3d42.454145662006695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x134c24ea7304ad47%3A0x179c23bc9eff7238!2sBocas%20de%20Kotor!5e0!3m2!1ses-419!2smx!4v1639760970366!5m2!1ses-419!2smx" 
    },
    {
        country: "Netherlands",
        name: "Rijksmuseum",
        type: "Museum",
        schedule: "09:00 - 17:00",
        price: "20 Euros",
        image: "https://aws-tiqets-cdn.imgix.net/images/content/a1ad67f5ebf14a83a182395a6448b331.jpg?auto=format&fit=crop&h=800&ixlib=python-3.2.1&q=70&w=800&s=77935b171349a7b0f77cd2cccad8aa5d",
        description: "The Rijksmuseum is the museum of the Netherlands. The completely renovated Rijksmuseum tells the story of the Netherlands from the Middle Ages to the 20th century. ",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2436.5747513857004!2d4.883030115424095!3d52.359997579784284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c609eec1bb16e5%3A0xd54373ae6a408585!2sRijksmuseum!5e0!3m2!1ses-419!2smx!4v1639761411145!5m2!1ses-419!2smx" 
    },
    {
        country: "Netherlands",
        name: "Anne Frank House",
        type: "Museum",
        schedule: "09:00 - 22:00",
        price: "14 Euros",
        image: "https://cdn2.360stories.com/image/eyJidWNrZXQiOiJjZG4uMzYwc3Rvcmllcy5jb20iLCJrZXkiOiJ1cGxvYWRzXC9waWN0dXJlc1wvMTUzMjUyNjA4OWE4NGY0YzYzMWE1NzkyNWQ3MWY2Njk0NDIzNjhlOWM3LmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjEyMDAsImhlaWdodCI6NjMwLCJmaXQiOiJjb3ZlciJ9fX0=",
        description: "The Anne Frank House is a museum dedicated to Jewish wartime diarist Anne Frank. The building is located on a canal called the Prinsengracht, close to the Westerkerk, in central Amsterdam in the Netherlands.",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2435.735374422688!2d4.881787815424802!3d52.37521817978704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c609c5213e1149%3A0xd49a5d653e635b0a!2sCasa%20de%20Anne%20Frank!5e0!3m2!1ses-419!2smx!4v1639761909790!5m2!1ses-419!2smx" 
    },
    {
        country: "Netherlands",
        name: "Markthal",
        type: "Market",
        schedule: "10:00 - 21:00",
        price: "Variable",
        image: "http://1.bp.blogspot.com/-QeqL-v05wvc/VDAMjDzCq0I/AAAAAAAADqE/p723wso5ebE/s1600/MVRDV%2B-%2BMarkthal%2BRotterdam%2B-%2BDiedrica%2BBlog%2B01.jpg",
        description: "The Markthal (English: Market Hall) is a residential and office building with a market hall, located in Rotterdam. The building was opened on October 1, 2014, by Queen Máxima of the Netherlands.",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2460.751247821126!2d4.4851372154040545!3d51.920249379705155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c4335c7fe26e7f%3A0xc9a129e164c2f7c3!2sMarket%20Hall%2C%20Verlengde%20Nieuwstraat%2C%203011%20GM%20Rotterdam%2C%20Pa%C3%ADses%20Bajos!5e0!3m2!1ses-419!2smx!4v1639761944099!5m2!1ses-419!2smx" 
    },
    {
        country: "North Macedonia",
        name: "Lake Matka",
        type: "Body of Water",
        schedule: "All day",
        price: "Free",
        image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/da/32/19/lake-matka.jpg?w=1200&h=-1&s=1",
        description: "Wonderful nature reserve, there are several bars where you can have a drink next to the lake. There are also boats in which you can take a tour of the lake and see the cave that is small but has its charm.",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11868.949323912335!2d21.29002323042376!3d41.952237117459624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x135410306795e291%3A0x9c0e16d89d5122fc!2sLake%20Matka!5e0!3m2!1ses-419!2smx!4v1639762159336!5m2!1ses-419!2smx" 
    },
    {
        country: "North Macedonia",
        name: "Lake Ohrid",
        type: "Body of Water",
        schedule: "All day",
        price: "Free",
        image: "https://galloparoundtheglobe.com/wp-content/uploads/2019/07/Ohrid-featured-940x627.jpg",
        description: "Extenso lago con una profundidad máxima de 300 metros en la frontera entre Albania y Macedonia.",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d192605.19653096073!2d20.57882038556048!3d41.03715184175333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1350c20207e43fcb%3A0xc4d008c074af01c2!2sLago%20Ohrid!5e0!3m2!1ses-419!2smx!4v1639762294138!5m2!1ses-419!2smx" 
    },
    {
        country: "North Macedonia",
        name: "Old Bazaar, Skopje",
        type: "Market",
        schedule: "All day",
        price: "Variable",
        image: "https://visitskopje.mk/wp-content/uploads/2019/10/old-bazaar.jpg",
        description: "Antiguo bazar de estilo otomano con mezquitas, mercados, tiendas y cafeterías.",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2964.9680619013666!2d21.434965914985696!3d42.00096097921265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x135415afad379837%3A0xd19f732f5ede1e48!2sAntiguo%20Bazar%20de%20Skopie!5e0!3m2!1ses-419!2smx!4v1639762445922!5m2!1ses-419!2smx" 
    },
    {
        country: "Norway",
        name: "Fram Museum",
        type: "Museum",
        schedule: "10:00 - 18:00",
        price: "140 NOK",
        image: "https://mapasymochila.com/wp-content/uploads/2021/01/1610603767_25_Museo-de-Fram-en-Oslo-una-ventana-a-la-exploracion.jpg",
        description: "A number of new attractions were available for the visitors at the Fram Museum, the highlight being the continuous 270 degrees surround film shown from the deck of Fram. ",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2000.7330174050292!2d10.697540315785652!3d59.90338128186339!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46416c3ab370c031%3A0x807b0e0e5adea37a!2sMuseo%20del%20Fram!5e0!3m2!1ses-419!2smx!4v1639764921723!5m2!1ses-419!2smx" 
    },
    {
        country: "Norway",
        name: "Mount Floyen and the Funicular",
        type: "Mountain",
        schedule: "08:00 - 20:00",
        price: "Closed",
        image: "https://youimg1.tripcdn.com/target/100f1f000001gq9ztB06E.jpg?proc=source%2Ftrip",
        description: "Fløyen is a must do while in Bergen. Fløibanen, the funicular brings you up the hillside, from Bergen city centre to the top of the mountain in 6 minutes. At Mount Fløyen you will find beautiful views of Bergen, the nearby islands, fjords and mountains surrounding Bergen.",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15766.754442496615!2d5.327702335315516!3d60.398249350902766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x463cfebb723130f7%3A0x33ce3da8861f86e8!2zRmzDuHllbg!5e0!3m2!1ses-419!2smx!4v1639765319389!5m2!1ses-419!2smx" 
    },
    {
        country: "Norway",
        name: "Fjellheisen Tromso",
        type: "Tram",
        schedule: "10:00 - 23:00",
        price: "240 NOK",
        image: "https://media-cdn.tripadvisor.com/media/photo-s/14/9d/14/38/yellow-gondola-fjellheisen.jpg",
        description: "The Cable Car is Tromsø's most popular tourist destination. It runs from Solliveien in Tromsdalen up to the mountain ledge Storsteinen. The lower station is located on Tromsø's mainland, 50 m above sea level, while the upper station, Fjellstua, is situated at an altitude of 421 m above sea level. ",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5552.916497857215!2d18.982465901414955!3d69.63845223181669!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x45c4c503e5d36ef3%3A0xcc681857b8699425!2sTroms%C3%B8%20Cable%20Car!5e0!3m2!1ses-419!2smx!4v1639765620675!5m2!1ses-419!2smx" 
    },
    {
        country: "Poland",
        name: "Old town gdansk poland",
        type: "Historic site",
        schedule: "All day",
        price: "Free",
        image: "http://onebigphoto.com/uploads/2014/01/old-town-in-gdansk-poland.jpg",
        description: "The lively Main City district includes the pedestrianized Old Town of Gdansk, home to historical sites such as the Gothic St. Mary's Basilica, Artus Court which is a former home to merchants, the 13th century Golden Gate with statues on top , and Neptune's Fountain from the 17th century.",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9301.569487133918!2d18.64444488896038!3d54.35004713322401!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46fd739f931aa197%3A0x612ceb5f9d382717!2sMain%20City%2C%20Gdansk%2C%20Polonia!5e0!3m2!1ses-419!2smx!4v1639766110655!5m2!1ses-419!2smx" 
    },
    {
        country: "Poland",
        name: "Krakow's Rynek Glowny Central Square",
        type: "Historic Site",
        schedule: "All day",
        price: "Free",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Sukiennice_and_Main_Market_Square_Krakow_Poland.JPG/1200px-Sukiennice_and_Main_Market_Square_Krakow_Poland.JPG",
        description: "Huge 10-acre square, the largest in any of Europe's medieval cities, features the 16th-century Renaissance Cloth Hall and the splendid 14th-century Gothic Basilica of the Virgin Mary.",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2561.3213808792702!2d19.935162715320637!3d50.061542629423634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47165b120455da67%3A0xc3c7f5071b750d33!2zUnluZWsgR8WCw7N3bnk!5e0!3m2!1ses-419!2smx!4v1639767334670!5m2!1ses-419!2smx" 
    },
    {
        country: "Poland",
        name: "Łazienki Królewskie w Warszawie",
        type: "Castle",
        schedule: "10:00 - 18:00",
        price: "40 PLN",
        image: "https://warsawtour.pl/wp-content/uploads/2018/08/%C5%81azienki-Kr%C3%B3lewskie-Pa%C5%82ac-na-Wyspie_fot.-z-archiwum-Warszawskiej-Organizacji-Turystycznej.jpg",
        description: "The Royal Łazienki was King Stanisław August’s summer residence, in which a classicist architecture is harmoniously blended with its natural surroundings featuring fabulous gardens",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2444.5411012759423!2d21.03404601541752!3d52.21538637975767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecd1e8cf370a5%3A0x11f503162a1c3f18!2sRoyal%20%C5%81azienki%20Museum!5e0!3m2!1ses-419!2smx!4v1639767517625!5m2!1ses-419!2smx" 
    },
    {
        country: "Portugal",
        name: "Oceanário de Lisboa",
        type: "Aquarium",
        schedule: "10:00 - 19:00",
        price: "19 Euros",
        image: "https://cdn2.civitatis.com/portugal/lisboa/galeria/header/pez-luna-oceanario-lisboa.jpg",
        description: "Opened in 1998, the Oceanário was the centerpiece of the XXth Century's last World Fair, themed 'The Oceans, a Heritage for the Future', and eternally binds Lisbon to the Oceans.",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3111.028826841074!2d-9.095881235135472!3d38.76304282959167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd193183750e5809%3A0x983f2e673a62e130!2sOceanario%20de%20Lisboa!5e0!3m2!1ses-419!2smx!4v1639768029321!5m2!1ses-419!2smx" 
    },
    {
        country: "Portugal",
        name: "Ponte de Dom Luís I",
        type: "Historic Site",
        schedule: "All day",
        price: "Free",
        image: "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/ponte-dom-luis-i-fabrizio-troiani.jpg",
        description: "Built in 1886, this bridge links Porto and Gaia.",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1582290.0679481167!2d-9.791420768750008!3d39.233557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd18ee1a5a2cdd71%3A0x8eba9ecb3d7795bf!2sPonte%20Dom%20Lu%C3%ADs%20I!5e0!3m2!1ses-419!2smx!4v1639768135572!5m2!1ses-419!2smx" 
    },
    {
        country: "Portugal",
        name: "Praia Sao Rafael",
        type: "Beach",
        schedule: "All day",
        price: "Free",
        image: "https://media-cdn.tripadvisor.com/media/photo-m/1280/18/7b/c2/11/praia-sao-rafael.jpg",
        description: "Owing its name to the tourist complex located here, São Rafael Beach is embedded between the cliffs and its sand is dotted, here and there, by large isolated rocks, which also emerge in the sea and give it a very picturesque appearance.",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50931.34595228606!2d-8.321929639139904!3d37.07632590697467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1acd02cd5c70b3%3A0x15ce8763c83a851d!2sPraia%20Sao%20Rafael!5e0!3m2!1ses-419!2smx!4v1639768598328!5m2!1ses-419!2smx" 
    },
    {
        country: "Romania",
        name: "Herăstrau Park",
        type: "Park",
        schedule: "All day",
        price: "Free",
        image: "https://img.itinari.com/activity/images/original/aabd6d59-7c44-4465-8722-e94b2c8c380b-istock-528740384.jpg?ch=DPR&dpr=1&w=1200&h=800&s=91ecc5f63f17c0fd9b0b9825938b4d57",
        description: "Public park with cafes, restaurants and gardens around a large lake for water sports.",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22776.045131566418!2d26.066286838605293!3d44.474057112489476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b20213bb079091%3A0x57f60ea89ec15526!2zUGFycXVlIEhlcsSDc3RyxIN1!5e0!3m2!1ses-419!2smx!4v1639769051906!5m2!1ses-419!2smx" 
    },
    {
        country: "Romania",
        name: "Muzeul Naţional al Satului 'Dimitrie Gusti'",
        type: "Museum",
        schedule: "09.00 - 17:00",
        price: "20 LEI",
        image: "https://img2.oastatic.com/img2/45953005/600x300r/poarta-traditionala-expusa-la-muzeul-satului.jpg",
        description: "This outdoor museum includes more than 300 buildings representing the history of Romania's rural architecture.",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2847.0885042493205!2d26.074396515083514!3d44.4723585791017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b202037c613773%3A0x82df7091a7a741a3!2sMuseo%20Satului!5e0!3m2!1ses-419!2smx!4v1639769370337!5m2!1ses-419!2smx" 
    },
    {
        country: "Romania",
        name: "Brasov Historical Center",
        type: "Historic Site",
        schedule: "All day",
        price: "Free",
        image: "https://www.touringromania.com/userfiles/image/TRANSYLVANIA/BRASOV/HISTORICAL%20CENTER/Brasov-Historical-Center-Transylvania-Romania00003.jpg",
        description: "Nice old town with a central square with cafes surrounding it and shopping streets extending from the center.",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5578.893308598295!2d25.58648942694809!3d45.641851353165286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b35bbf0e6a146f%3A0x23d0795a20261d1!2sCentru%20Vechi!5e0!3m2!1ses-419!2smx!4v1639769644731!5m2!1ses-419!2smx" 
    },
    {
        country: "Russia",
        name: "Saint Basil's Cathedral",
        type: "Church",
        schedule: "10:00 - 19:00",
        price: "800 Rublos",
        image: "https://www.swedishnomad.com/wp-content/images/2019/10/Saint-Basils-Katedral.jpg",
        description: "Built by Ivan the Terrible in the 1550s, this intriguing cathedral bordering Red Square consists of nine separate chapels, each capped with its own individually shaped and colored dome.",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2245.3441922101506!2d37.62089811558273!3d55.7525228805533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54a5962e69605%3A0xa4cf168ae7cb3ae5!2sCatedral%20de%20San%20Basilio!5e0!3m2!1ses-419!2smx!4v1639769877430!5m2!1ses-419!2smx" 
    },
    {
        country: "Russia",
        name: "Kazan Kremlin",
        type: "Historic Site",
        schedule: "All day",
        price: "1000 Rublos",
        image: "https://78488-215931-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2018/12/Mezquita-Kul-Sharif-Vistas.jpg",
        description: "The historic fortress dating back to the 16th to 19th centuries.",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4605169.746313713!2d38.87978973058289!3d55.69562817103564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54a5a6e7cf4d7%3A0x336b2c2c3ee08ec6!2sCatedral%20de%20Kaz%C3%A1n%20de%20Mosc%C3%BA!5e0!3m2!1ses-419!2smx!4v1639770099419!5m2!1ses-419!2smx" 
    },
    {
        country: "Russia",
        name: "The State Hermitage Museum",
        type: "Museum",
        schedule: "11:00 - 18:00",
        price: "500 Rublos",
        image: "https://img.locationscout.net/images/2019-12/state-hermitage-museum-russian-federation_l.jpeg",
        description: "One of the most famous art museums in the world, this museum is housed in the Winter Palace, and contains over 2.7 million exhibits including some of the world's greatest works of art.",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1998.5365751008615!2d30.31237101578756!3d59.939831681876605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4696310b32cbe2e9%3A0x74e032aa0505dfc!2sMuseo%20Hermitage!5e0!3m2!1ses-419!2smx!4v1639770345078!5m2!1ses-419!2smx" 
    },
    {
        country: "San Marino",
        name: "Centro Storico Di San Marino",
        type: "Historic Site",
        schedule: "All day",
        price: "Free",
        image: "https://www.giovannicarrieri.com/photography/italy/repubblica-di-san-marino/san-marino-contrada-del-collegio.jpg",
        description: "The historic centre of san marino is a Unesco World Heritage Site. The city centre is medieval and well maintained. Meanwhile you are walking it is possible to enjoy different views.",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d91929.53208636583!2d12.390052976746137!3d43.94285655967433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132ceb5ff5e63f79%3A0xf39982342010!2sSan%20Marino!5e0!3m2!1ses-419!2smx!4v1639770575036!5m2!1ses-419!2smx" 
    },
    {
        country: "San Marino",
        name: "Guaita",
        type: "Castle",
        schedule: "09:30 - 17:00",
        price: "3 Euros",
        image: "https://upload.wikimedia.org/wikipedia/commons/a/ac/Fortress_of_Guaita_2013-09-19.jpg",
        description: "The wall ring of San Marino includes three towers. The first tower is the Guita",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2873.152117918333!2d12.447503015061924!3d43.935525379112654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132cecaff18cbd3d%3A0x6b6f66a161abb58f!2sGuaita!5e0!3m2!1ses-419!2smx!4v1639770667613!5m2!1ses-419!2smx" 
    },
    {
        country: "San Marino",
        name: "Piazza della Libertà",
        type: "Historic Site",
        schedule: "All day",
        price: "Free",
        image: "https://media-cdn.tripadvisor.com/media/photo-s/0c/8b/b9/01/nuova-prospettiva-della.jpg",
        description: "This is a beautiful square with amazing views in San Marino. It is certainly worth seeing. Lots of great pictures for the taming here",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2873.1013851516877!2d12.44453781506196!3d43.93657537911263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132cecae53904221%3A0x1204b2849acf606d!2sPiazza%20della%20Libert%C3%A0%2C%2047890%20Citt%C3%A0%20di%20San%20Marino%2C%20San%20Marino!5e0!3m2!1ses-419!2smx!4v1639770863219!5m2!1ses-419!2smx" 
    },
    {
        country: "Serbia",
        name: "The Belgrade Fortress",
        type: "Historic Site",
        schedule: "11:00 - 19:00",
        price: "120 Dinares",
        image: "https://upload.wikimedia.org/wikipedia/commons/5/5f/%D0%9A%D0%B0%D0%BB%D0%B5%D0%BC%D0%B5%D0%B3%D0%B4%D0%B0%D0%BD%2C_%D1%81%D0%BF%D0%BE%D0%BC%D0%B5%D0%BD%D0%B8%D0%BA_%D0%9F%D0%BE%D0%B1%D1%98%D0%B5%D0%B4%D0%BD%D0%B8%D0%BA%2C_%D0%91%D0%B8%D0%BE%D0%B3%D1%80%D0%B0%D0%B4.jpg",
        description: "Ancient fortress on top of a hill overlooking the river and lush park areas.",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11319.674981440356!2d20.441874882250424!3d44.82321996557514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a6549015c2c53%3A0x160b799f3d48d2b2!2sKalemegdan!5e0!3m2!1ses-419!2smx!4v1639771218433!5m2!1ses-419!2smx" 
    },
    {
        country: "Serbia",
        name: "Knez Mihailova",
        type: "Point of Interest",
        schedule: "All day",
        price: "Free",
        image: "https://media-cdn.tripadvisor.com/media/photo-s/12/cb/a3/78/smartselectimage-2018.jpg",
        description: "Great place for a stroll, shopping, people watching and a wide choice of cafes and restaurants.",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2830.187947503606!2d20.454800715097516!3d44.81773557909859!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a6e056c9bb357%3A0x58b1f0ecae30d7a1!2sKneza%20Mihaila%2C%20Beograd%2C%20Serbia!5e0!3m2!1ses-419!2smx!4v1639771334790!5m2!1ses-419!2smx" 
    },
    {
        country: "Serbia",
        name: "St. Sava Temple",
        type: "Church",
        schedule: "08:00 - 20:00",
        price: "Free",
        image: "https://assets.vogue.com/photos/59f909c9c4a3b8694eb1d201/master/w_2560%2Cc_limit/00-story-image-belgrade-saint-sava-temple.jpg",
        description: "20th century church with imposing Byzantine-style architecture and a 70-meter central dome.",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2831.151542178838!2d20.466931615096765!3d44.798100179098704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a700ca7258e8f%3A0xbe11391a6fc0344c!2sTemplo%20de%20San%20Sava!5e0!3m2!1ses-419!2smx!4v1639771543373!5m2!1ses-419!2smx" 
    },
    {
        country: "Slovakia",
        name: "Bratislava Old Town",
        type: "Historic Site",
        schedule: "All day",
        price: "Free",
        image: "https://upload.wikimedia.org/wikipedia/commons/e/e1/Hlavn%C3%A9_n%C3%A1mestie-The_napoleonic_soldier%2C_Old_Town_Hall_and_Roland_Fountain-Bratislava.JPG",
        description: "Historic neighborhood filled with charming narrow lanes, burgher's houses and nobles' palaces in addition to many of the city's important buildings such as the former Palace of the Hungarian Estates, the late-Gothic building of the Academia Istropolitana and the Leopold de Pauli Palace where Franz Liszt performed as a child.",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d42585.818631599985!2d17.067496565596677!3d48.15625293141943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476c895b04c53fd5%3A0x2600f7d2cfb8d0c2!2sCdad.%20Vieja%2C%20Eslovaquia!5e0!3m2!1ses-419!2smx!4v1639771685363!5m2!1ses-419!2smx" 
    },
    {
        country: "Slovakia",
        name: "Demanovska Cave of Liberty",
        type: "Caverns",
        schedule: "09:00 - 16:00",
        price: "10 Euros",
        image: "https://www.slovakia.com/wp-content/uploads/1358865012_demanovska-cave-of-liberty-02.jpg",
        description: "Stunning views of caves, stalactites and stalagmites",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2617.660230346997!2d19.58286716527388!3d48.99802302930137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47159e018c9ddd9f%3A0x20289fdc71620c64!2sDem%C3%A4novsk%C3%A1%20Cave%20of%20Liberty!5e0!3m2!1ses-419!2smx!4v1639771844367!5m2!1ses-419!2smx" 
    },
    {
        country: "Slovakia",
        name: "St Elizabeth's Cathedral (Dóm Svätej Alzbety)",
        type: "Church",
        schedule: "08:00 - 20:00",
        price: "Free",
        image: "https://m.smedata.sk/api-media/media/image/spectator/7/68/6850327/6850327_1200x.jpeg?rev=2",
        description: "Amazing medieval dome and the easternmost Gothic cathedral in Europe",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2632.2254690898158!2d21.255951215261785!3d48.72028327927417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473ee065694a37b5%3A0x1a6c8a2f5126db2b!2sCatedral%20de%20Santa%20Isabel!5e0!3m2!1ses-419!2smx!4v1639772122753!5m2!1ses-419!2smx" 
    },
    {
        country: "Slovenia",
        name: "Ljubljana Old Town",
        type: "Historic Site",
        schedule: "All day",
        price: "Free",
        image: "https://travelslovenia.org/wp-content/uploads/2021/03/ljubljana-old-town-1007x671.jpg",
        description: "Brillant vibrant town loads of bars and restaurants.",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5538.308606439569!2d14.499429227363626!3d46.04802039233164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47652d6373397d6d%3A0x9918c07c5da4a227!2sTown%20Hall!5e0!3m2!1ses-419!2smx!4v1639772360636!5m2!1ses-419!2smx" 
    },
    {
        country: "Slovenia",
        name: "Lake Bled",
        type: "Body of Water",
        schedule: "All day",
        price: "Free",
        image: "https://media.tacdn.com/media/attractions-splice-spp-674x446/0a/77/b3/3d.jpg",
        description: "Discover the magic of the lake that attracts travellers from near and far. The current unique shape of the year did not emerge coincidentally. A tectonic hole made by the Bohinj glacier through the years, was once at the location of the present lake.",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11013.104011440191!2d14.086506083270054!3d46.36391176594836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477a9139b9d9e421%3A0x83cd8331dd0107ac!2sLago%20Bled!5e0!3m2!1ses-419!2smx!4v1639772442394!5m2!1ses-419!2smx" 
    },
    {
        country: "Slovenia",
        name: "Julian Alps",
        type: "Mountain",
        schedule: "All day",
        price: "Free",
        image: "https://selfguidedlife.com/wp-content/uploads/2016/05/trekking_walking_slovenia_alps_self_guided_tour.jpg",
        description: "Great views on the way up the rouad and a fantastic shory hike to the saddle. The road can be really busy and a bit stressful",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11018.37802939823!2d13.741776233252555!3d46.337744115933575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477a60380828a19b%3A0x5415362912f4f82f!2sAlpes%20julianos!5e0!3m2!1ses-419!2smx!4v1639772585716!5m2!1ses-419!2smx" 
    },
    {
        country: "Spain",
        name: "Basílica de la Sagrada Familia",
        type: "Church",
        schedule: "08:00 - 18:00",
        price: "26 Euros",
        image: "https://images.ecestaticos.com/bITcGM8FnG_mQrGTlfiCXvrHuI4=/0x0:0x0/1600x900/filters:fill(white):format(JPG)/f.elconfidencial.com%2Foriginal%2F8e1%2F488%2F5a2%2F8e14885a2e6008e6648be1bcd87cc044.jpg",
        description: "The Basilica of the Sagrada Familia is a monumental church devoted to the Holy Family: Jesus, Mary and Joseph. Construction began in 1882, based on plans drawn up by the architect Francisco de Paula del Villar, and Antoni Gaudi was commissioned to continue the project in 1883. T",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2992.6397231988476!2d2.172167114962774!3d41.40362987926273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a2dcd83dfb93%3A0x9bd8aac21bc3c950!2sBas%C3%ADlica%20de%20la%20Sagrada%20Fam%C3%ADlia!5e0!3m2!1ses-419!2smx!4v1639772870736!5m2!1ses-419!2smx" 
    },
    {
        country: "Spain",
        name: "Prado National Museum",
        type: "Museum",
        schedule: "10:00 - 20:00",
        price: "15 Euros",
        image: "https://www.lavanguardia.com/files/og_thumbnail/uploads/2019/11/19/5fa53648e38b2.jpeg",
        description: "The Prado has one of the largest art collections in the world, and is best known for its diverse assortment of works by Velasquez, Goya and El Greco.",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.777402082394!2d-3.6943157850747026!3d40.41378177936552!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd42289d66d8a2ed%3A0x1094f07d93ad885a!2sMuseo%20Nacional%20del%20Prado!5e0!3m2!1ses-419!2smx!4v1639773064714!5m2!1ses-419!2smx" 
    },
    {
        country: "Spain",
        name: "Real Alcazar de Sevilla",
        type: "Historic Site",
        schedule: "09:30 - 17:00",
        price: "14.50 Euros",
        image: "https://media.timeout.com/images/105314978/630/472/image.jpg",
        description: "Beautiful medieval Islamic palace showcasing a unique fusion of Spanish Christian and Moorish architecture.",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3170.2866873288276!2d-5.9924143851846425!3d37.38305187983274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd126c198c41a24b%3A0xbaa976bfaec1fe87!2sReal%20Alc%C3%A1zar%20de%20Sevilla!5e0!3m2!1ses-419!2smx!4v1639773130227!5m2!1ses-419!2smx" 
    },
    {
        country: "Sweden",
        name: "Vasa Museum",
        type: "Museum",
        schedule: "10:00 - 17:00",
        price: "170 KR",
        image: "https://www.swedishnomad.com/wp-content/images/2019/11/Vasamuseet.jpg",
        description: "The Vasa ship capsized and sank in Stockholm 1628. After 333 years on the seabed the mighty warship was salvaged and the voyage could continue. Today Vasa is the world's only preserved 17th century ship.",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2035.2953156273961!2d18.089207715756977!3d59.32802328165842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f9d546d8329af%3A0xcff09af1b4c13241!2sMuseo%20Vasa!5e0!3m2!1ses-419!2smx!4v1639773405197!5m2!1ses-419!2smx" 
    },
    {
        country: "Sweden",
        name: "Southern Gothenburg Archipelago",
        type: "Island",
        schedule: "All day",
        price: "Free",
        image: "https://afar-production.imgix.net/uploads/images/post_images/images/veesRDv9Y9/original_gothenburg-archipelago.jpg?1519867876?ixlib=rails-0.3.0&auto=format%2Ccompress&crop=entropy&fit=crop&h=719&q=80&w=954",
        description: "The archipelago off Stockholm is the measure of all things. But the Gothenburg gardens are not to be despised either.",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d136792.033607741!2d11.624364465989114!3d57.608096186902074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464f92989d5ebc43%3A0x3a549dbb2b2de8c8!2sArchipi%C3%A9lago%20de%20Gotemburgo!5e0!3m2!1ses-419!2smx!4v1639773506607!5m2!1ses-419!2smx" 
    },
    {
        country: "Sweden",
        name: "Öresund Bridge",
        type: "Bridge",
        schedule: "All day",
        price: "24 Euros",
        image: "https://upload.wikimedia.org/wikipedia/commons/0/01/%C3%98resund_Bridge_from_the_air_in_September_2015.jpg",
        description: "This amazing bridge tunnel combination joins Denmark and Sweden.",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2255.8029971020565!2d12.846448415574104!3d55.5706286805051!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4653a7023a051afb%3A0xbc0e93c11c372873!2sPuente%20de%20%C3%98resund!5e0!3m2!1ses-419!2smx!4v1639773661098!5m2!1ses-419!2smx" 
    },
    {
        country: "Switzerland",
        name: "Old Town Zurich",
        type: "Historic Site",
        schedule: "All day",
        price: "Free",
        image: "https://media-cdn.sygictraveldata.com/media/800x600/612664395a40232133447d33247d383438323534333439",
        description: "Zürich's historic section features cobblestone streets, a variety of small stores and restaurants and many of the city's most significant religious landmarks.",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6073.076841582931!2d8.538607267631766!3d47.37263781407447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc909bdaf73519298!2sZ%C3%BCrich&#39;s%20Town%20Hall%20(Z%C3%BCrich%20Rathaus)!5e0!3m2!1ses-419!2smx!4v1639773947528!5m2!1ses-419!2smx" 
    },
    {
        country: "Switzerland",
        name: "Lake Zurich",
        type: "Body of Water",
        schedule: "All day",
        price: "Free",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Lake_Z%C3%BCrich_from_Grossm%C3%BCnster.jpg/700px-Lake_Z%C3%BCrich_from_Grossm%C3%BCnster.jpg",
        description: "Picturesque lake, where you can swim and sail, with a lot of tourism in summer and mountain views.",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d173420.57240612284!2d8.612635716406238!3d47.2225216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479aba90b8887a5f%3A0x6ac6428c5e8536ef!2sLago%20de%20Z%C3%BArich!5e0!3m2!1ses-419!2smx!4v1639774088951!5m2!1ses-419!2smx" 
    },
    {
        country: "Switzerland",
        name: "Lake Geneva",
        type: "Body of water",
        schedule: "All day",
        price: "Free",
        image: "https://mediaim.expedia.com/destination/1/1ef54a4973cfd325fe874330c397ca92.jpg",
        description: "A scenic mountain lake situated alongside the city of Geneva, it empties into the Rhone River.",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d352437.97832527605!2d6.259282257814137!3d46.36102064082734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478c3d06fcbe3e07%3A0x3282c0cb7f4bf243!2sLago%20Lem%C3%A1n!5e0!3m2!1ses-419!2smx!4v1639774200790!5m2!1ses-419!2smx" 
    },
    {
        country: "Turkey",
        name: "Dolmabahce Palace",
        type: "Castle",
        schedule: "09:00 - 16:00",
        price: "15 Euros",
        image: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Dolmabah%C3%A7e_Palace_2007.jpg",
        description: "This palace was built in the mid 1800s to replace an earlier structure that was made of wood. The new palace incorporated sixteen separate buildings with stables, a flour mill and a clock tower among them.",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3009.3641872187227!2d28.998270714948916!3d41.03916427929765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab7761a3b7de3%3A0xdcd33e38cf3b830b!2sPalacio%20de%20Dolmabah%C3%A7e!5e0!3m2!1ses-419!2smx!4v1639774467257!5m2!1ses-419!2smx" 
    },
    {
        country: "Turkey",
        name: "Kaleici",
        type: "Neighborhoods",
        schedule: "All day",
        price: "Free",
        image: "https://travelinglensphotography.com/wp-content/uploads/2018/08/Kaleici.jpg",
        description: "The old city of Antalya contains many of the city's historic sites.  Renovations to the marina and waterfront have added several hotels, restaurants and shops, making this a popular tourist destination.",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3225629.681306108!2d25.01664196249999!3d37.8596122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14bea92fa7fdcf05%3A0x4e538204198ffce5!2sOld%20Town%20Bazaar%20Kalei%C3%A7i!5e0!3m2!1ses-419!2smx!4v1639774620154!5m2!1ses-419!2smx" 
    },
    {
        country: "Turkey",
        name: "Anitkabir",
        type: "Museum",
        schedule: "09:00 - 17:00",
        price: "Free",
        image: "https://upload.wikimedia.org/wikipedia/commons/c/ce/An%C4%B1tkabir%2C_Ankara.jpg",
        description: "Mausoleum of Kemal Atatürk, former President of Turkey, with colonnades, a marble hall, towers and a museum.",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6119.460363377674!2d32.83256653488768!3d39.925053999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d34f190a9cea8f%3A0xd3862ea8248d08a0!2sAn%C4%B1tkabir!5e0!3m2!1ses-419!2smx!4v1639774921934!5m2!1ses-419!2smx" 
    },
    {
        country: "Ukraine",
        name: "The Holy Dormition Kyiv Caves Lavra",
        type: "Church",
        schedule: "08:00 - 20:00",
        price: "Free",
        image: "https://blog.obitel-minsk.com/wp-content/uploads/2020/12/1_5_1_2-DESKTOP-RVUJ5L0-2-DESKTOP-RVUJ5L0-12-775x517.jpg",
        description: "Built by Kiev monks back in 1051, this striking building is the most holy place in the Ukraine. The caves on the property serve as burial grounds for monks.",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1270.668047532874!2d30.55820980819523!3d50.43484009486833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cfa1cad139ef%3A0xde56a1790562124f!2sHoly%20Dormition%20Cathedral%20of%20Ukrainian%20Orthodox%20church!5e0!3m2!1ses-419!2smx!4v1639775285419!5m2!1ses-419!2smx" 
    },
    {
        country: "Ukraine",
        name: "Odessa National Academic Opera and Ballet Theater",
        type: "Theater",
        schedule: "11:00 - 19:30",
        price: "Variable",
        image: "https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/39/a6/18.jpg",
        description: "Music and dance theater with a rococo auditorium whose horseshoe shape gives it a unique acoustics.",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2747.143106582273!2d30.738990715166427!3d46.48547867912632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c631985b45cb0b%3A0x6e315e968e5b2a42!2sTeatro%20de%20%C3%93pera%20y%20Ballet%20de%20Odessa!5e0!3m2!1ses-419!2smx!4v1639775430883!5m2!1ses-419!2smx" 
    },
    {
        country: "Ukraine",
        name: "Deribasovskaya Street",
        type: "Historic Site",
        schedule: "All day",
        price: "Free",
        image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/a1/8e/10/caption.jpg?w=1200&h=-1&s=1",
        description: "A popular Odesa Street",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2747.2120075016774!2d30.736656215166434!3d46.48411427912624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c631981dfcbc61%3A0xee397e13e5dcd70!2sDerybasivska%20St%2C%20Odesa%2C%20Odes&#39;ka%20oblast%2C%20Ucrania%2C%2065000!5e0!3m2!1ses-419!2smx!4v1639775548813!5m2!1ses-419!2smx" 
    },
    {
        country: "United Kingdom",
        name: "Tower of London",
        type: "Historic Site",
        schedule: "09:00 - 16:00",
        price: "29.90 Pounds",
        image: "https://upload.wikimedia.org/wikipedia/commons/f/f0/Tower_of_London_White_Tower.jpg",
        description: "Discover London's castle - a secure fortress, royal palace and infamous prison where you can explore 1000 years of history. Prepare to be dazzled by the breathtaking, world famous Crown Jewels. ",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.27817438832!2d-0.07813798461462632!3d51.50811237963527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760349331f38dd%3A0xa8bf49dde1d56467!2sTorre%20de%20Londres!5e0!3m2!1ses-419!2smx!4v1639775780688!5m2!1ses-419!2smx" 
    },
    {
        country: "United Kingdom",
        name: "Tower Bridge",
        type: "Bridge",
        schedule: "09:30 - 18:00",
        price: "10.60 Pounds",
        image: "http://www.thelondres.com/wp-content/uploads/2018/08/tower-bridge.jpg",
        description: "An iconic London landmark and one of Britain's best loved historic sites, Tower Bridge is open to the public 363 days a year. Within the Bridge's iconic structure and magnificent Victorian Engine rooms, the Tower Bridge Exhibition is the best way of exploring the most famous bridge in the world! ",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.4229328064685!2d-0.07754518461474443!3d51.505456379634715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487603438b65db49%3A0x9e78421a085a6f2d!2sPuente%20de%20la%20Torre!5e0!3m2!1ses-419!2smx!4v1639775974566!5m2!1ses-419!2smx" 
    },
    {
        country: "United Kingdom",
        name: "Arthur's Seat",
        type: "Park",
        schedule: "All day",
        price: "Free",
        image: "https://upload.wikimedia.org/wikipedia/commons/f/f6/Salisbury_Crags_and_Arthur%27s_Seat_in_Edinburgh.jpg",
        description: "Arthur's Seat is one of four hill forts, dating from around 2,000 years ago. Situated within Holyrood Park, as well as it's rich cultural heritage, the park offers walks, solace, wildlife, volcanic geology and unparalleled vistas of the city from its many vantage points. ",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8937.220860954632!2d-3.1705871598286453!3d55.944081689677496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4887b884112f22b9%3A0x218a466c41934cf0!2sArthur&#39;s%20Seat!5e0!3m2!1ses-419!2smx!4v1639776169287!5m2!1ses-419!2smx" 
    },
    {
        country: "Vatican City",
        name: "St. Peter's Basilica",
        type: "Church",
        schedule: "07:00 - 18:30",
        price: "Free",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Basilica_di_San_Pietro_in_Vaticano_September_2015-1a.jpg/1200px-Basilica_di_San_Pietro_in_Vaticano_September_2015-1a.jpg",
        description: "Arguably one of the finest Cathedrals in the entire world, St. Peter's is the spiritual center of the Vatican and the product of many of Italy's great Renaissance's architects, among them Bramante, Raphael and Michelangelo.",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.567080020884!2d12.451748014981932!3d41.902166679220315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f6061b7149b59%3A0x724bf077cd875283!2sBas%C3%ADlica%20de%20San%20Pedro!5e0!3m2!1ses-419!2smx!4v1639776390009!5m2!1ses-419!2smx" 
    },
    {
        country: "Vatican City",
        name: "St. Peter's Square",
        type: "Historic Site",
        schedule: "All day",
        price: "Free",
        image: "https://cdn2.civitatis.com/italia/roma/guia/plaza-san-pedro.jpg",
        description: "This grand and magnificent square has retained its classical beauty and serves as the place from which the masses receive the Pope's weekly blessing.",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1484.782046779109!2d12.455692708106406!3d41.902230894805065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f6067b0ad3535%3A0xb0be9b5b5aad7258!2sPiazza%20San%20Pietro%2C%20Citt%C3%A0%20del%20Vaticano%2C%20Cdad.%20del%20Vaticano!5e0!3m2!1ses-419!2smx!4v1639776601568!5m2!1ses-419!2smx" 
    },
    {
        country: "Vatican City",
        name: "Sistine Chapel",
        type: "Museum",
        schedule: "09:00 - 16:00",
        price: "17 Euros",
        image: "https://upload.wikimedia.org/wikipedia/commons/8/82/Sistina-interno.jpg",
        description: "Probably the most famous chapel in the world because of its incredible artwork, notably 'The Last Judgment', Michelangelo's stunning fresco covering 10,000 square feet of the ceiling and wall",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.5307997977116!2d12.452294814981924!3d41.90294677922031!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f6065c523afdb%3A0xab16c8877fb53e22!2sCapilla%20Sixtina!5e0!3m2!1ses-419!2smx!4v1639776858606!5m2!1ses-419!2smx" 
    },

]