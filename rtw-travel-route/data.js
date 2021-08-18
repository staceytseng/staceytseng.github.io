const coords = [[-33.8674869,151.2069902,"Sydney"],
[1.352083,103.819836,"Singapore"],
[25.0329636,121.5654268,"Taipei"],
[22.396428,114.109497,"Hong Kong"],
[34.341575,108.93977,"Xi An"],
[34.477861,110.084789,"Huashan Mountain"],
[36.061089,103.834304,"Lanzhou"],
[39.77313,98.2891520000001,"Jiayuguan"],
[40.142128,94.661967,"Dunhuang"],
[41.104621,95.504202,"Liuyuan"],
[42.951384,89.189655,"Turpan"],
[43.825592,87.616848,"Ürümqi"],
[39.4704,75.9897550000001,"Kashgar"],
[38.441716,75.063491,"Kala Kule Lake"],
[40.5505556,75.4072222,"Turugart Pass"],
[41.4273946,75.9840587,"Naryn"],
[41.8339152,75.1311874,"Song-Kul"],
[42.2130964,75.7574989,"Kochkor"],
[42.1519049476854,77.5463835150003,"Tamga"],
[41.9547669,77.6026154,"Burkan Valley"],
[42.4782102,78.3955986,"Karakol"],
[42.5725513,78.3093452,"Pristan"],
[42.3343113,78.2407236,"Jeti-Ögüz"],
[42.3717347,78.61413,"Altyn-Arashan"],
[42.6503176,77.0852258,"Cholpon Ata"],
[42.8746212,74.5697617000001,"Bishkek"],
[42.8004389,79.1812134,"Karkara Valley Pass"],
[43.0166383,79.2251948000001,"Kegen"],
[42.990649,78.3257278,"Lower Kolsay Lake"],
[43.2220146,76.8512485,"Almaty"],
[51.1605227,71.4703558,"Astana"],
[50.2839339,57.166978,"Aktobe"],
[46.803197,61.6639055000001,"Aralsk"],
[43.3050854,68.2346884,"Turkistan"],
[42.3416847,69.590101,"Shymkent"],
[42.8983715,71.3979891,"Taraz"],
[42.7908658,71.5031433,"Taraz (Kazakhstan) - Talas (Kyrgyzstan) Border"],
[42.5317628,72.2304571,"Talas"],
[40.5139985,72.8160975999999,"Osh"],
[39.6758447,72.8840395,"Sary Mogul"],
[39.5074806,72.9364598,"Tulpar Lake"],
[39.3847331,73.3227539,"Kyzylart Pass Kyrgyzstan/Tajikistan Border"],
[39.016667,73.45,"Karakul"],
[38.1869138,73.9976945999999,"Murghab"],
[37.75,73.55,"Alichur"],
[37.719444,72.955556,"Bulunkul"],
[37.7554336,72.9165266,"Yashikul"],
[37.0614786,72.6889801,"Langar"],
[36.7212739,71.619873,"Ishkashim"],
[37.4882943,71.5901986,"Khorog"],
[37.9149509,71.8354797,"Jisev"],
[38.4607456,70.7806848,"Kalaikhum"],
[38.5597722,68.7870384,"Dushanbe"],
[38.5051914,68.1076813,"Tursunzoda (Tajikistan) - Denau (Uzbekistan) border"],
[39.627012,66.9749730999999,"Samarkand"],
[39.7680827,64.4555769,"Bukhara"],
[41.3895075,60.3414529,"Khiva"],
[42.461891,59.6166312,"Nukus"],
[44.898687,55.9973145,"Uzbekistan (Karakalpakiya) - Kazakhstan (Beyneu) border"],
[45.3222362,55.1818479999999,"Beyneu"],
[43.6410973,51.1985113000001,"Aktau"],
[40.4092617,49.8670924,"Baku"],
[41.1974753,47.1571241,"Sheki"],
[41.7917927,46.3101196,"Azerbaijan (Balankan) - Georgia (Lagodekhi) border"],
[41.6111031,45.9271436,"Sighnaghi"],
[41.5083941,45.3764507,"Udabno"],
[41.4472281,45.37658,"David Gareji Monasteri St. David Lavra"],
[41.7151377,44.827096,"Tbilisi"],
[42.660268,44.6411430000001,"Kazbegi (Stepantsminda)"],
[42.2662428,42.7180019,"Kutaisi"],
[43.0334614,42.6894803,"Mestia"],
[42.9175324,43.0157988999999,"Ushguli"],
[42.9590608,43.0887222,"Shkhara Glacier"],
[42.5091391,41.866992,"Zugdidi"],
[41.6167547,41.6367455,"Batumi"],
[41.6434293,42.9934449,"Akhaltsikhe"],
[41.1389121,43.793993,"Ninotsminda - Bavra border"],
[40.1791857,44.4991029,"Yerevan"],
[39.8783533,44.5762498,"Khor Virap"],
[40.5638509,45.0110718999999,"Սևանավանք / Sevanavank"],
[39.7632738,45.3307882,"Yeghegnadzor"],
[39.6848892,45.2331104,"Noravank Monastery"],
[39.508988,46.3438889,"Goris"],
[38.9016976,46.2467317000001,"Meghri"],
[38.8519074,46.2017155,"Agarak (Armenia) - Norduz (Iran) border"],
[38.096239,46.2738013000001,"Tabriz"],
[37.7948175,46.2487510000001,"Kandovan"],
[35.6891975,51.3889736,"Tehran"],
[33.9850358,51.4099625,"Kashan"],
[32.6546275,51.6679826,"Isfahan"],
[33.5282289,55.0396912,"Garmeh"],
[31.8974232,54.3568562,"Yazd"],
[29.5917677,52.5836982000001,"Shiraz"],
[29.8354441,52.3294109999999,"Ghalat"],
[29.9355235,52.8915658,"Persepolis"],
[27.1832216,56.2666455,"Bandar Abbas"],
[27.05927,56.4607919,"Hormuz Island"],
[25.3462553,55.4209317,"Sharjah"],
[25.2048493,55.2707828,"Dubai"],
[-1.2920659,36.8219462,"Nairobi"],
[-2.6520157,37.2607672,"Amboseli National Park"],
[-0.7171778,36.4310250999999,"Naivasha"],
[-0.9210039,36.4472577,"Mount Longonot"],
[-0.3030988,36.080026,"Nakuru"],
[0.4694721,35.9832742999999,"Marigat"],
[0.6320551,36.0567202,"Lake Baringo"],
[0.2648456,36.1002111,"Lake Bogoria"],
[1.019089,35.0023048,"Kitale"],
[3.1155165,35.6040785,"Lodwar"],
[3.2595935,36.0183056999999,"Eliye Springs Beach"],
[3.4958943,36.0384292,"Central Island National Park"],
[1.216667,34.716667,"Suam"],
[1.3382282,34.379965,"SIPI FALLS"],
[0.4478566,33.2026122,"Jinja"],
[0.3475964,32.5825197,"Kampala"],
[0.0511839,32.463708,"Entebbe"],
[-0.3208374,32.2937428,"Kalangala"],
[-0.3267383,31.7537404,"Masaka"],
[-1.2952537,29.9133356,"Lake Bunyonyi"],
[-1.2834307,29.6904746,"Kisoro"],
[-1.3640669,29.638326,"Mgahinga Gorilla National Park"],
[-1.5034616,29.6325305,"Ruhengeri"],
[-1.3411108,29.7404194,"Uganda/Rwanda Cyanika border"],
[-1.9705786,30.1044288000001,"Kigali"],
[-2.3823379,30.7832596000001,"Rusumo Falls"],
[-2.49897,30.85331,"Benaco"],
[-3.837556,32.593828,"Kahama"],
[-3.3869254,36.6829927,"Arusha"],
[-3.3439474,37.3292861,"Moshi"],
[-3.1738857,37.2392964000001,"Machame Gate"],
[-3.0950515,37.2668639999999,"Machame Hut"],
[-3.0672117,37.2765416,"Shira Camp"],
[-3.0677796,37.327407,"Lava Tower Camp"],
[-3.0955538,37.3279166,"Barranco Camp"],
[-3.112202,37.3542559,"Karanga Camp"],
[-3.0993088,37.3780096,"Barafu Camp"],
[-3.0781809,37.3626982000001,"Stella Point"],
[-3.0666386,37.3506618,"Uhuru Peak"],
[-3.1563405,37.367388,"Lower Mweka Hut"],
[-3.2196158,37.3413813,"Mweka Gate"],
[-6.792354,39.2083284,"Dar es Salaam"],
[-6.162222,39.1920735,"Stone Town"],
[-6.3158921,39.5446313,"Jambiani"],
[-7.7806456,35.6958675,"Iringa"],
[-8.9094014,33.4607744,"Mbeya"],
[-9.3155599,32.7634192,"Tunduma - Nakonde border"],
[-11.8280231,31.4513314000001,"Mpika"],
[-15.3875259,28.3228165,"Lusaka"],
[-17.8519791,25.8285152999999,"Livingstone"],
[-17.9318052,25.8255575000001,"Victoria Falls"],
[-17.9283847,25.8572446000001,"Victoria Falls Bridge"],
[-17.8143161,25.2639198,"Zimbabwe - Botswana Kazungula Border"],
[-17.7973594,25.2180862,"Kazungula"],
[-20.2105223,26.1772994,"Nata"],
[-21.1661005,27.5143603,"Francistown"],
[-19.9952622,23.4180769,"Maun"],
[-19.7272813,23.3332443,"Okavango Dalta"],
[-21.6960991,21.6481861,"Ghanzi"],
[-22.2789264,20.0747438999999,"Charles Hill"],
[-22.28083,20.00519,"Botswana/Namibia Mamuno Border"],
[-22.3990179,18.9739954,"Gobabis"],
[-22.5608807,17.0657549,"Windhoek"],
[-23.6608773,16.1787274000001,"Spreetshoogte Pass"],
[-24.486698,15.8011445,"Sesriem"],
[-24.7350069,15.3248269000001,"Sossusvlei"],
[-23.8933454,16.0045091,"Solitaire"],
[-22.9389587,14.5247463000001,"Walvis Bay"],
[-22.6785299,14.5252132,"Swakopmund"],
[-22.1134964,14.2832038,"Hentiesbaai"],
[-21.7716993,13.9524077,"Cape Cross Seal Reserve"],
[-26.6420382,15.1639082,"Luderitz"],
[-26.55905,18.1164551,"Keetmanshoop"],
[-28.7660039,17.6260185,"Noordoewer (Namibia) / Vioolsdrif (South Africa) Border"],
[-33.9248685,18.4240553,"Cape Town"],
[-33.9321045,18.860152,"Stellenbosch"],
[-33.8974833,19.1523291999999,"Franschhoek"],
[-23.9883848,31.5547402,"Kruger National Park"],
[-26.2041028,28.0473051,"Johannesburg"],
[-34.6036844,-58.3815591,"Buenos Aires"],
[-34.4607189,-57.8339099,"Colonia del Sacramento"],
[-34.9011127,-56.1645314,"Montevideo"],
[-31.2747363,-57.9382896,"Salto - Concordia border"],
[-25.5971635,-54.578599,"Puerto Iguazú"],
[-25.695176,-54.4367624,"Iguazu National Park"],
[-24.7821269,-65.4231976,"Salta"],
[-32.8894587,-68.8458386,"Mendoza"],
[-41.1334722,-71.3102778,"San Carlos de Bariloche"],
[-50.337969,-72.2647981,"El Calafate"],
[-50.4705075,-73.0347919,"Glacier Perito Moreno"],
[-49.3314941,-72.886325,"El Chaltén"],
[-49.2799,-72.9858,"Laguna de los Tres"],
[-49.3271892,-72.9942272,"Laguna Torre"],
[-51.5861898,-72.3482323,"Dorotea Border (Argentina - Chile)"],
[-51.7308935,-72.4977407,"Puerto Natales"],
[-51.0483011,-73.0132484,"Torres del Paine National Park"],
[-53.1638329,-70.9170683,"Punta Arenas"],
[-52.4759845,-69.5334148,"Magellan Strait"],
[-53.7860374,-67.7002243,"Rio Grande"],
[-54.8019121,-68.3029511,"Ushuaia"],
[-54.8433094,-68.5540865,"Tierra del Fuego National Park"],
[-54.820427,-68.1505151,"Estancia Tunel"],
[-49.1282168,-74.4073381,"Puerto Edén"],
[-47.8015353,-73.5358494,"Tortel"],
[-47.2535728,-72.5729823,"Cochrane"],
[-45.5712254,-72.068265,"Coyhaique"],
[-43.1833,-71.8667,"Futaleufú"],
[-42.9167,-72.7167,"Chaitén"],
[-43.1169327,-73.6138821,"Quellón"],
[-42.4801402,-73.7624137,"Castro"],
[-33.4378305,-70.6504492,"Santiago"],
[-33.047238,-71.6126885,"Valparaíso"],
[-22.4543923,-68.9293819,"Calama"],
[-22.9087073,-68.1997156,"San Pedro de Atacama"],
[-22.9257639,-68.2879926,"Valle de la Luna"],
[-22.3398005,-68.0157172,"Tatio Geyser"],
[-21.2125798,-68.2295609,"Ollagüe border (Chile - Bolivia)"],
[-20.4603534,-66.8260649,"Uyuni"],
[-21.4382195,-65.7193442,"Tupiza"],
[-22.1920833,-67.3399093,"Quetena Chico"],
[-22.7953395,-67.8361137,"Laguna Verde"],
[-22.2082719,-67.7735206,"Laguna Colorada"],
[-20.6599318,-67.6066017,"Salt Hotel"],
[-20.1595348,-67.4054025,"Salar de Uyuni"],
[-19.5722805,-65.7550063,"Potosi"],
[-19.0195852,-65.2619615,"Sucre"],
[-16.489689,-68.1192936,"La Paz"],
[-16.1662935,-69.0861568,"Copacabana"],
[-16.035737,-69.1484334,"Comunidad Yumani"],
[-16.2254503,-69.0956998,"Kasani Border (Bolivia - Peru)"],
[-15.8402218,-70.0218805,"Puno"],
[-15.8041876,-69.9719238,"Uros Floating Islands"],
[-15.770283,-69.683189,"Isla Taquile"],
[-13.53195,-71.9674626,"Cusco"],
[-13.2583689,-72.2642679,"Ollantaytambo"],
[-13.005154,-72.633596,"Santa Maria"],
[-13.1300117,-72.5940835,"Santa Teresa, Peru"],
[-13.1759697,-72.558732,"Hidroelectrica"],
[-13.1547062,-72.5254412,"Aguas Calientes"],
[-13.1631412,-72.5449629,"Machu Picchu"],
[-13.1744716,-72.5425042,"Mountain Machu Picchu"],
[-13.3298569,-72.1971438,"Moray"],
[-13.3003324,-72.156048,"Inca salt pans of Maras"],
[-13.3057641,-72.1156281,"Urubamba"],
[-13.4216848,-71.8482388,"Pisac"],
[-13.8703718,-71.3029004,"Vinicunca Rainbow Mountain"],
[-16.4090474,-71.537451,"Arequipa"],
[-14.8358687,-74.9327583,"Nazca"],
[-13.9379378,-75.8007093,"Ica"],
[-13.8409149,-76.2508304,"Paracas"],
[-13.7134562,-76.1841701,"Pisco"],
[-12.0463731,-77.042754,"Lima"],
[-6.2301547,-77.8708478,"Chachapoyas"],
[-6.4175389,-77.9243202,"Kuelap"],
[-6.1625982,-78.0213853,"Sarcofagos de Karajia"],
[-6.0580775,-77.8942467,"Cocachimba"],
[-6.023004,-77.8870689,"Gocta Cataracts"],
[-5.7094412,-78.7986181,"Jaén"],
[-5.1465764,-79.002342,"San Ignacio"],
[-4.977219,-79.1156387,"La Balza Border"],
[-4.8636128,-79.1336857,"Zumba"],
[-4.2623285,-79.2253776,"Vilcabamba"],
[-3.6217479,-79.2380664,"Saraguro"],
[-2.9001285,-79.0058965,"Cuenca"],
[-2.1709979,-79.9223592,"Guayaquil"],
[-0.459667,-90.2713944,"Baltra Island"],
[-0.7432918,-90.3156893,"Puerto Ayora"],
[-0.9544574,-90.9641467,"Puerto Villamil"],
[-0.9012468,-89.6112148,"Puerto Baquerizo Moreno"],
[-0.1806532,-78.4678382,"Quito"],
[0.2343005,-78.2610672,"Otavalo"],
[0.8140552,-77.6640701,"Tulcan - Ipiales border"],
[0.825542,-77.639504,"Ipiales"],
[2.4448143,-76.6147395,"Popayán"],
[3.4516467,-76.5319854,"Cali"],
[4.5350004,-75.6756888,"Armenia"],
[4.637376,-75.570777,"Salento"],
[4.7109886,-74.072092,"Bogotá"],
[-4.2171177,-69.9397694,"Leticia"],
[-4.2316306,-69.936928,"Tabatinga (Brazil)"],
[-4.2241021,-69.9575043,"Santa Rosa (Peru)"],
[-3.7826613,-70.3659046,"Puerto Nariño"],
[-3.8020381,-70.4193592,"Lago Tarapoto"],
[6.2530408,-75.5645737,"Medellín"],
[8.9823792,-79.5198696,"Panama City"],
[8.5340216,-82.8386521,"Paso Canoas Border"],
[9.9280694,-84.0907246,"San José"],
[10.471294,-84.6452984,"La Fortuna"],
[10.4563619,-84.9713512,"Tilaran"],
[10.4274414,-85.0934624,"Cañas"],
[10.6345964,-85.4406747,"Liberia"],
[11.2154485,-85.6123352,"Penas Blancas (Costa Rica) - Sapoa (Nicaragua) Border"],
[11.4392282,-85.8289474,"Rivas"],
[11.4601086,-85.7905504,"San Jorge"],
[11.5399857,-85.6986957,"Moyogalpa"],
[11.4890151,-85.539055,"Santa Cruz"],
[11.9344073,-85.9560005,"Granada"],
[12.1149926,-86.2361744,"Managua"],
[12.4315534,-86.8722146,"León"],
[13.0622553,-86.9536543,"Nicaragua - Honduras border (Guasuale)"],
[13.597501,-87.7669215,"Honduras - El Salvador Border (El Amatillo)"],
[13.1743089,-88.1108325,"El Cuco"],
[13.6996114,-89.19845,"San Salvador"],
[13.8694082,-89.8493309,"Concepción de Ataco"],
[14.0176069,-89.9068737,"Las Chinamas - Valle Nuevo Border"],
[14.6349149,-90.5068824,"Guatemala City"],
[14.5585707,-90.729523,"Antigua"],
[14.7409079,-91.1582763,"Panajachel"],
[14.8520705,-91.5305465,"Quetzaltenango"],
[15.406794,-91.1472974,"Nebaj"],
[15.4650586,-90.3842527,"Cobán"],
[16.929703,-89.8916624,"Flores"],
[17.221,-89.6258436,"Tikal"],
[15.6595174,-89.0041086,"Rio Dulce town"],
[15.8258628,-88.7494885,"Livingston"],
[16.5168809,-88.3679751,"Placencia"],
[16.8534596,-88.2813944,"Hopkins"],
[16.8983329,-88.0616731,"Tobacco Caye"],
[17.496012,-88.1838537,"Belize City"],
[18.4951974,-88.4001589,"Santa Elena (Belize - Mexico) Border"],
[18.6782919,-88.3923946,"Bacalar"],
[20.2114185,-87.4653502,"Tulum"],
[21.161908,-86.8515279,"Cancún"],
[23.1135925,-82.3665956,"Havana"],
[22.6188131,-83.7066289,"Vinales"],
[22.1599753,-80.4437781,"Cienfuegos"],
[21.7960343,-79.9808143,"Trinidad"],
[21.3926035,-77.9053182,"Camaguey"],
[20.3719163,-76.6297189,"Bayamo"],
[20.01693,-75.8301537,"Santiago de Cuba"],
[21.161908,-86.8515279,"Cancún"],
[20.68964,-88.2022488,"Valladolid"],
[20.6842849,-88.5677826,"Chichén Itzá"],
[20.9673702,-89.5925857,"Mérida"],
[17.5109792,-91.9930466,"Palenque"],
[16.7370359,-92.6376186,"San Cristobal de las Casas"],
[17.0675409,-96.7164261,"Oaxaca City"],
[19.0414398,-98.2062727,"Puebla City"],
[19.4326077,-99.133208,"Mexico City"],
[43.653226,-79.3831843,"Toronto"],
[43.0895577,-79.0849436,"Niagara Falls"],
[52.2296756,21.0122287,"Warsaw"],
[51.1078852,17.0385376,"Wrocław"],
[50.0646501,19.9449799,"Kraków"],
[50.0274106,19.2019829,"Memorial and Museum Auschwitz-Birkenau"],
[50.0345976,19.1758411000001,"Auschwitz II-Birkenau"],
[49.0752393,19.3066002,"Ružomberok"],
[48.7163857,21.2610746,"Košice"],
[48.1034775,20.7784384,"Miskolc"],
[47.5316049,21.6273123999999,"Debrecen"],
[47.3216529,21.1185953,"Püspökladány"],
[47.1247169,21.7918216,"Biharkeresztesi Határátkelőhely"],
[47.0465005,21.9189438,"Oradea"],
[45.7983273,24.1255826,"Sibiu"],
[45.6579755,25.6011977000001,"Brașov"],
[45.5191918,25.3696831,"Bran"],
[45.3523985,25.5498189,"Sinaia"],
[44.4267674,26.1025384,"Bucharest"],
[43.9037076,25.9699264999999,"Giurgiu"],
[43.8355713,25.9656554000001,"Ruse"],
[43.8872476,26.007865,"Giurgiu-Rousse Friendship Bridge"],
[43.0756739,25.6171514,"Veliko Tarnovo"],
[42.1354079,24.7452903999999,"Plovdiv"],
[42.6977082,23.3218675000001,"Sofia"],
[42.9977423,22.8335381,"Kalotina - Gradina Border Crossing"],
[43.3209022,21.8957589,"Niš"],
[44.786568,20.4489215999999,"Belgrade"],
[45.2671352,19.8335496,"Novi Sad"],
[46.1005467,19.6650592999999,"Subotica"],
[46.1758232,19.9788171,"Horgos - Roszke Border"],
[46.2530102,20.1414253,"Szeged"],
[47.497912,19.0402349999999,"Budapest"],
[48.2081743,16.3738189000001,"Vienna"],
[48.1485965,17.1077478,"Bratislava"],
[50.0755381,14.4378005,"Prague"],
[52.5200066,13.404954,"Berlin"],
[48.856614,2.35222190000002,"Paris"],
[55.604981,13.003822,"Malmö"],
[55.6760968,12.5683372,"Copenhagen"],
[67.0094782,-50.7211501,"Kangerlussuaq"],
[69.2198118,-51.0986031,"Ilulissat"],
[72.7862882,-56.1375527,"Upernavik"],
[77.4670434,-69.2284827,"Qaanaaq"],
[68.7069766,-52.8591222,"Aasiaat"],
[68.8573544,-53.1207049,"Kitsissuarsuit"],
[69.2469901,-53.5463399,"Qeqertarsuaq"],
[53.5510846,9.99368189999996,"Hamburg"],
[52.3679843,4.90356139999994,"Amsterdam"],
[51.0258761,4.47753620000003,"Mechelen"],
[50.8481178,4.3510237,"Brussels"],
[51.209348,3.22469950000004,"Bruges"],
[51.0212494,1.48288890000003,"Euro Tunnel"],
[51.5073509,-0.127758299999982,"London"],
[51.7520209,-1.25772630000006,"Oxford"],
[51.894955,-1.16014500000006,"Bicester Village"],
[52.205337,0.121816999999965,"Cambridge"],
[51.5073509,-0.127758299999982,"London"]];