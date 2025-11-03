// === DONNÉES DE TOUS LES PAYS (195) ===
const countryData = {
  "AFG": { name: "Afghanistan", capital: "Kaboul", area: 652230, pop: 38928000, continent: "Asie", lang: "Pachto, Dari", currency: "Afghani (AFN)", flag: "Afghanistan" },
  "ALB": { name: "Albanie", capital: "Tirana", area: 28748, pop: 2878000, continent: "Europe", lang: "Albanais", currency: "Lek (ALL)", flag: "Albania" },
  "DZA": { name: "Algérie", capital: "Alger", area: 2381741, pop: 43851000, continent: "Afrique", lang: "Arabe", currency: "Dinar (DZD)", flag: "Algeria" },
  "AND": { name: "Andorre", capital: "Andorre-la-Vieille", area: 468, pop: 77265, continent: "Europe", lang: "Catalan", currency: "Euro (€)", flag: "Andorra" },
  "AGO": { name: "Angola", capital: "Luanda", area: 1246700, pop: 32866000, continent: "Afrique", lang: "Portugais", currency: "Kwanza (AOA)", flag: "Angola" },
  "ARG": { name: "Argentine", capital: "Buenos Aires", area: 2780400, pop: 45196000, continent: "Amérique du Sud", lang: "Espagnol", currency: "Peso (ARS)", flag: "Argentina" },
  "ARM": { name: "Arménie", capital: "Erevan", area: 29743, pop: 2963000, continent: "Asie", lang: "Arménien", currency: "Dram (AMD)", flag: "Armenia" },
  "AUS": { name: "Australie", capital: "Canberra", area: 7692024, pop: 25600000, continent: "Océanie", lang: "Anglais", currency: "Dollar AUD ($)", flag: "Australia" },
  "AUT": { name: "Autriche", capital: "Vienne", area: 83879, pop: 9006000, continent: "Europe", lang: "Allemand", currency: "Euro (€)", flag: "Austria" },
  "AZE": { name: "Azerbaïdjan", capital: "Bakou", area: 86600, pop: 10140000, continent: "Asie", lang: "Azéri", currency: "Manat (AZN)", flag: "Azerbaijan" },
  "BHR": { name: "Bahreïn", capital: "Manama", area: 765, pop: 1702000, continent: "Asie", lang: "Arabe", currency: "Dinar (BHD)", flag: "Bahrain" },
  "BGD": { name: "Bangladesh", capital: "Dhaka", area: 147570, pop: 164700000, continent: "Asie", lang: "Bengali", currency: "Taka (BDT)", flag: "Bangladesh" },
  "BRB": { name: "Barbade", capital: "Bridgetown", area: 430, pop: 287000, continent: "Amérique", lang: "Anglais", currency: "Dollar BBD ($)", flag: "Barbados" },
  "BEL": { name: "Belgique", capital: "Bruxelles", area: 30528, pop: 11590000, continent: "Europe", lang: "Néerlandais, Français, Allemand", currency: "Euro (€)", flag: "Belgium" },
  "BLZ": { name: "Belize", capital: "Belmopan", area: 22966, pop: 397000, continent: "Amérique", lang: "Anglais", currency: "Dollar BZD ($)", flag: "Belize" },
  "BEN": { name: "Bénin", capital: "Porto-Novo", area: 114763, pop: 12120000, continent: "Afrique", lang: "Français", currency: "Franc CFA (XOF)", flag: "Benin" },
  "BTN": { name: "Bhoutan", capital: "Thimphou", area: 38394, pop: 772000, continent: "Asie", lang: "Dzongkha", currency: "Ngultrum (BTN)", flag: "Bhutan" },
  "BOL": { name: "Bolivie", capital: "Sucre", area: 1098581, pop: 11670000, continent: "Amérique du Sud", lang: "Espagnol", currency: "Boliviano (BOB)", flag: "Bolivia" },
  "BIH": { name: "Bosnie-Herzégovine", capital: "Sarajevo", area: 51209, pop: 3281000, continent: "Europe", lang: "Bosniaque, Croate, Serbe", currency: "Mark (BAM)", flag: "Bosnia and Herzegovina" },
  "BWA": { name: "Botswana", capital: "Gaborone", area: 581730, pop: 2352000, continent: "Afrique", lang: "Anglais, Tswana", currency: "Pula (BWP)", flag: "Botswana" },
  "BRA": { name: "Brésil", capital: "Brasília", area: 8515767, pop: 213000000, continent: "Amérique du Sud", lang: "Portugais", currency: "Real (BRL)", flag: "Brazil" },
  "BRN": { name: "Brunéi", capital: "Bandar Seri Begawan", area: 5765, pop: 437000, continent: "Asie", lang: "Malais", currency: "Dollar BND ($)", flag: "Brunei" },
  "BGR": { name: "Bulgarie", capital: "Sofia", area: 110994, pop: 6951000, continent: "Europe", lang: "Bulgare", currency: "Lev (BGN)", flag: "Bulgaria" },
  "BFA": { name: "Burkina Faso", capital: "Ouagadougou", area: 274200, pop: 20930000, continent: "Afrique", lang: "Français", currency: "Franc CFA (XOF)", flag: "Burkina Faso" },
  "BDI": { name: "Burundi", capital: "Gitega", area: 27834, pop: 11890000, continent: "Afrique", lang: "Kirundi, Français", currency: "Franc BIF (BIF)", flag: "Burundi" },
  "KHM": { name: "Cambodge", capital: "Phnom Penh", area: 181035, pop: 16720000, continent: "Asie", lang: "Khmer", currency: "Riel (KHR)", flag: "Cambodia" },
  "CMR": { name: "Cameroun", capital: "Yaoundé", area: 475442, pop: 26550000, continent: "Afrique", lang: "Français, Anglais", currency: "Franc CFA (XAF)", flag: "Cameroon" },
  "CAN": { name: "Canada", capital: "Ottawa", area: 9984670, pop: 38000000, continent: "Amérique du Nord", lang: "Anglais, Français", currency: "Dollar CAD ($)", flag: "Canada" },
  "CPV": { name: "Cap-Vert", capital: "Praia", area: 4033, pop: 556000, continent: "Afrique", lang: "Portugais", currency: "Escudo (CVE)", flag: "Cape Verde" },
  "CAF": { name: "République centrafricaine", capital: "Bangui", area: 622984, pop: 4830000, continent: "Afrique", lang: "Français, Sango", currency: "Franc CFA (XAF)", flag: "Central African Republic" },
  "TCD": { name: "Tchad", capital: "N'Djaména", area: 1284000, pop: 16430000, continent: "Afrique", lang: "Français, Arabe", currency: "Franc CFA (XAF)", flag: "Chad" },
  "CHL": { name: "Chili", capital: "Santiago", area: 756102, pop: 19120000, continent: "Amérique du Sud", lang: "Espagnol", currency: "Peso (CLP)", flag: "Chile" },
  "CHN": { name: "Chine", capital: "Pékin", area: 9596961, pop: 1444000000, continent: "Asie", lang: "Mandarin", currency: "Yuan (CNY)", flag: "China" },
  "COL": { name: "Colombie", capital: "Bogotá", area: 1141748, pop: 50880000, continent: "Amérique du Sud", lang: "Espagnol", currency: "Peso (COP)", flag: "Colombia" },
  "COM": { name: "Comores", capital: "Moroni", area: 1862, pop: 870000, continent: "Afrique", lang: "Comorien, Arabe, Français", currency: "Franc KMF (KMF)", flag: "Comoros" },
  "COG": { name: "Congo", capital: "Brazzaville", area: 342000, pop: 5518000, continent: "Afrique", lang: "Français", currency: "Franc CFA (XAF)", flag: "Congo" },
  "COD": { name: "RDC", capital: "Kinshasa", area: 2344858, pop: 89560000, continent: "Afrique", lang: "Français", currency: "Franc CDF (CDF)", flag: "Democratic Republic of the Congo" },
  "CRI": { name: "Costa Rica", capital: "San José", area: 51100, pop: 5094000, continent: "Amérique", lang: "Espagnol", currency: "Colón (CRC)", flag: "Costa Rica" },
  "HRV": { name: "Croatie", capital: "Zagreb", area: 56594, pop: 4105000, continent: "Europe", lang: "Croate", currency: "Euro (€)", flag: "Croatia" },
  "CUB": { name: "Cuba", capital: "La Havane", area: 109884, pop: 11330000, continent: "Amérique", lang: "Espagnol", currency: "Peso CUP (CUP)", flag: "Cuba" },
  "CYP": { name: "Chypre", capital: "Nicosie", area: 9251, pop: 1207000, continent: "Europe", lang: "Grec, Turc", currency: "Euro (€)", flag: "Cyprus" },
  "CZE": { name: "Tchéquie", capital: "Prague", area: 78867, pop: 10710000, continent: "Europe", lang: "Tchèque", currency: "Couronne (CZK)", flag: "Czech Republic" },
  "DNK": { name: "Danemark", capital: "Copenhague", area: 43094, pop: 5823000, continent: "Europe", lang: "Danois", currency: "Couronne (DKK)", flag: "Denmark" },
  "DJI": { name: "Djibouti", capital: "Djibouti", area: 23200, pop: 988000, continent: "Afrique", lang: "Français, Arabe", currency: "Franc DJF (DJF)", flag: "Djibouti" },
  "DMA": { name: "Dominique", capital: "Roseau", area: 751, pop: 72000, continent: "Amérique", lang: "Anglais", currency: "Dollar XCD ($)", flag: "Dominica" },
  "DOM": { name: "République dominicaine", capital: "Saint-Domingue", area: 48671, pop: 10850000, continent: "Amérique", lang: "Espagnol", currency: "Peso DOP (DOP)", flag: "Dominican Republic" },
  "ECU": { name: "Équateur", capital: "Quito", area: 283561, pop: 17640000, continent: "Amérique du Sud", lang: "Espagnol", currency: "Dollar US ($)", flag: "Ecuador" },
  "EGY": { name: "Égypte", capital: "Le Caire", area: 1002450, pop: 104200000, continent: "Afrique", lang: "Arabe", currency: "Livre EGP (EGP)", flag: "Egypt" },
  "SLV": { name: "Salvador", capital: "San Salvador", area: 21041, pop: 6486000, continent: "Amérique", lang: "Espagnol", currency: "Dollar US ($)", flag: "El Salvador" },
  "GNQ": { name: "Guinée équatoriale", capital: "Malabo", area: 28051, pop: 1403000, continent: "Afrique", lang: "Espagnol, Français", currency: "Franc CFA (XAF)", flag: "Equatorial Guinea" },
  "ERI": { name: "Érythrée", capital: "Asmara", area: 117600, pop: 3546000, continent: "Afrique", lang: "Tigrinya, Arabe", currency: "Nakfa (ERN)", flag: "Eritrea" },
  "EST": { name: "Estonie", capital: "Tallinn", area: 45339, pop: 1329000, continent: "Europe", lang: "Estonien", currency: "Euro (€)", flag: "Estonia" },
  "SWZ": { name: "Eswatini", capital: "Mbabane", area: 17364, pop: 1160000, continent: "Afrique", lang: "Swati, Anglais", currency: "Lilangeni (SZL)", flag: "Eswatini" },
  "ETH": { name: "Éthiopie", capital: "Addis-Abeba", area: 1104300, pop: 115000000, continent: "Afrique", lang: "Amharique", currency: "Birr (ETB)", flag: "Ethiopia" },
  "FJI": { name: "Fidji", capital: "Suva", area: 18272, pop: 896000, continent: "Océanie", lang: "Anglais, Fidjien", currency: "Dollar FJD ($)", flag: "Fiji" },
  "FIN": { name: "Finlande", capital: "Helsinki", area: 338424, pop: 5541000, continent: "Europe", lang: "Finnois, Suédois", currency: "Euro (€)", flag: "Finland" },
  "FRA": { name: "France", capital: "Paris", area: 543965, pop: 67000000, continent: "Europe", lang: "Français", currency: "Euro (€)", flag: "France" },
  "GAB": { name: "Gabon", capital: "Libreville", area: 267667, pop: 2226000, continent: "Afrique", lang: "Français", currency: "Franc CFA (XAF)", flag: "Gabon" },
  "GMB": { name: "Gambie", capital: "Banjul", area: 10689, pop: 2417000, continent: "Afrique", lang: "Anglais", currency: "Dalasi (GMD)", flag: "Gambia" },
  "GEO": { name: "Géorgie", capital: "Tbilissi", area: 69700, pop: 3989000, continent: "Asie", lang: "Géorgien", currency: "Lari (GEL)", flag: "Georgia" },
  "DEU": { name: "Allemagne", capital: "Berlin", area: 357022, pop: 83200000, continent: "Europe", lang: "Allemand", currency: "Euro (€)", flag: "Germany" },
  "GHA": { name: "Ghana", capital: "Accra", area: 238533, pop: 31070000, continent: "Afrique", lang: "Anglais", currency: "Cedi (GHS)", flag: "Ghana" },
  "GRC": { name: "Grèce", capital: "Athènes", area: 131957, pop: 10420000, continent: "Europe", lang: "Grec", currency: "Euro (€)", flag: "Greece" },
  "GRD": { name: "Grenade", capital: "Saint-Georges", area: 344, pop: 112000, continent: "Amérique", lang: "Anglais", currency: "Dollar XCD ($)", flag: "Grenada" },
  "GTM": { name: "Guatemala", capital: "Guatemala", area: 108889, pop: 17920000, continent: "Amérique", lang: "Espagnol", currency: "Quetzal (GTQ)", flag: "Guatemala" },
  "GIN": { name: "Guinée", capital: "Conakry", area: 245857, pop: 13130000, continent: "Afrique", lang: "Français", currency: "Franc GNF (GNF)", flag: "Guinea" },
  "GNB": { name: "Guinée-Bissau", capital: "Bissau", area: 36125, pop: 1968000, continent: "Afrique", lang: "Portugais", currency: "Franc CFA (XOF)", flag: "Guinea-Bissau" },
  "GUY": { name: "Guyana", capital: "Georgetown", area: 214969, pop: 786000, continent: "Amérique du Sud", lang: "Anglais", currency: "Dollar GYD ($)", flag: "Guyana" },
  "HTI": { name: "Haïti", capital: "Port-au-Prince", area: 27750, pop: 11400000, continent: "Amérique", lang: "Français, Créole", currency: "Gourde (HTG)", flag: "Haiti" },
  "HND": { name: "Honduras", capital: "Tegucigalpa", area: 112492, pop: 9905000, continent: "Amérique", lang: "Espagnol", "Lempira (HNL)", flag: "Honduras" },
  "HUN": { name: "Hongrie", capital: "Budapest", area: 93028, pop: 9660000, continent: "Europe", lang: "Hongrois", currency: "Forint (HUF)", flag: "Hungary" },
  "ISL": { name: "Islande", capital: "Reykjavik", area: 103000, pop: 366000, continent: "Europe", lang: "Islandais", currency: "Couronne ISK (ISK)", flag: "Iceland" },
  "IND": { name: "Inde", capital: "New Delhi", area: 3287590, pop: 1380000000, continent: "Asie", lang: "Hindi, Anglais", currency: "Roupie (INR)", flag: "India" },
  "IDN": { name: "Indonésie", capital: "Jakarta", area: 1904569, pop: 273500000, continent: "Asie", lang: "Indonésien", currency: "Rupiah (IDR)", flag: "Indonesia" },
  "IRN": { name: "Iran", capital: "Téhéran", area: 1648195, pop: 83990000, continent: "Asie", lang: "Persan", currency: "Rial (IRR)", flag: "Iran" },
  "IRQ": { name: "Irak", capital: "Bagdad", area: 438317, pop: 40220000, continent: "Asie", lang: "Arabe, Kurde", currency: "Dinar IQD (IQD)", flag: "Iraq" },
  "IRL": { name: "Irlande", capital: "Dublin", area: 70273, pop: 4938000, continent: "Europe", lang: "Irlandais, Anglais", currency: "Euro (€)", flag: "Ireland" },
  "ISR": { name: "Israël", capital: "Jérusalem", area: 20770, pop: 9210000, continent: "Asie", lang: "Hébreu, Arabe", currency: "Shekel (ILS)", flag: "Israel" },
  "ITA": { name: "Italie", capital: "Rome", area: 301340, pop: 60000000, continent: "Europe", lang: "Italien", currency: "Euro (€)", flag: "Italy" },
  "JAM": { name: "Jamaïque", capital: "Kingston", area: 10991, pop: 2961000, continent: "Amérique", lang: "Anglais", currency: "Dollar JMD ($)", flag: "Jamaica" },
  "JPN": { name: "Japon", capital: "Tokyo", area: 377975, pop: 125800000, continent: "Asie", lang: "Japonais", currency: "Yen (JPY)", flag: "Japan" },
  "JOR": { name: "Jordanie", capital: "Amman", area: 89342, pop: 10200000, continent: "Asie", lang: "Arabe", currency: "Dinar JOD (JOD)", flag: "Jordan" },
  "KAZ": { name: "Kazakhstan", capital: "Noursoultan", area: 2724900, pop: 18780000, continent: "Asie", lang: "Kazakh, Russe", currency: "Tenge (KZT)", flag: "Kazakhstan" },
  "KEN": { name: "Kenya", capital: "Nairobi", area: 580367, pop: 53770000, continent: "Afrique", lang: "Swahili, Anglais", currency: "Shilling KES (KES)", flag: "Kenya" },
  "KIR": { name: "Kiribati", capital: "Tarawa", area: 811, pop: 119000, continent: "Océanie", lang: "Anglais, Gilbertais", currency: "Dollar AUD ($)", flag: "Kiribati" },
  "PRK": { name: "Corée du Nord", capital: "Pyongyang", area: 120538, pop: 25780000, continent: "Asie", lang: "Coréen", currency: "Won KPW (KPW)", flag: "North Korea" },
  "KOR": { name: "Corée du Sud", capital: "Séoul", area: 100210, pop: 51780000, continent: "Asie", lang: "Coréen", currency: "Won KRW (KRW)", flag: "South Korea" },
  "KWT": { name: "Koweït", capital: "Koweït", area: 17818, pop: 4270000, continent: "Asie", lang: "Arabe", currency: "Dinar KWD (KWD)", flag: "Kuwait" },
  "KGZ": { name: "Kirghizistan", capital: "Bichkek", area: 199951, pop: 6525000, continent: "Asie", lang: "Kirghiz, Russe", currency: "Som (KGS)", flag: "Kyrgyzstan" },
  "LAO": { name: "Laos", capital: "Vientiane", area: 236800, pop: 7276000, continent: "Asie", lang: "Lao", currency: "Kip (LAK)", flag: "Laos" },
  "LVA": { name: "Lettonie", capital: "Riga", area: 64589, pop: 1886000, continent: "Europe", lang: "Letton", currency: "Euro (€)", flag: "Latvia" },
  "LBN": { name: "Liban", capital: "Beyrouth", area: 10452, pop: 6825000, continent: "Asie", lang: "Arabe", currency: "Livre LBP (LBP)", flag: "Lebanon" },
  "LSO": { name: "Lesotho", capital: "Maseru", area: 30355, pop: 2142000, continent: "Afrique", lang: "Sotho, Anglais", currency: "Loti (LSL)", flag: "Lesotho" },
  "LBR": { name: "Liberia", capital: "Monrovia", area: 111369, pop: 5058000, continent: "Afrique", lang: "Anglais", currency: "Dollar LRD ($)", flag: "Liberia" },
  "LBY": { name: "Libye", capital: "Tripoli", area: 1759540, pop: 6871000, continent: "Afrique", lang: "Arabe", currency: "Dinar LYD (LYD)", flag: "Libya" },
  "LIE": { name: "Liechtenstein", capital: "Vaduz", area: 160, pop: 38100, continent: "Europe", lang: "Allemand", currency: "Franc CHF (CHF)", flag: "Liechtenstein" },
  "LTU": { name: "Lituanie", capital: "Vilnius", area: 65300, pop: 2722000, continent: "Europe", lang: "Lituanien", currency: "Euro (€)", flag: "Lithuania" },
  "LUX": { name: "Luxembourg", capital: "Luxembourg", area: 2586, pop: 626000, continent: "Europe", lang: "Luxembourgeois, Français, Allemand", currency: "Euro (€)", flag: "Luxembourg" },
  "MDG": { name: "Madagascar", capital: "Antananarivo", area: 587041, pop: 27690000, continent: "Afrique", lang: "Malgache, Français", currency: "Ariary (MGA)", flag: "Madagascar" },
  "MWI": { name: "Malawi", capital: "Lilongwe", area: 118484, pop: 19130000, continent: "Afrique", lang: "Anglais, Chichewa", currency: "Kwacha (MWK)", flag: "Malawi" },
  "MYS": { name: "Malaisie", capital: "Kuala Lumpur", area: 330803, pop: 32360000, continent: "Asie", lang: "Malais", currency: "Ringgit (MYR)", flag: "Malaysia" },
  "MDV": { name: "Maldives", capital: "Malé", area: 298, pop: 540000, continent: "Asie", lang: "Dhivehi", currency: "Rufiyaa (MVR)", flag: "Maldives" },
  "MLI": { name: "Mali", capital: "Bamako", area: 1240192, pop: 20250000, continent: "Afrique", lang: "Français", currency: "Franc CFA (XOF)", flag: "Mali" },
  "MLT": { name: "Malte", capital: "La Valette", area: 316, pop: 441000, continent: "Europe", lang: "Maltais, Anglais", currency: "Euro (€)", flag: "Malta" },
  "MHL": { name: "Îles Marshall", capital: "Majuro", area: 181, pop: 59000, continent: "Océanie", lang: "Anglais, Marshallais", currency: "Dollar US ($)", flag: "Marshall Islands" },
  "MRT": { name: "Mauritanie", capital: "Nouakchott", area: 1030700, pop: 4649000, continent: "Afrique", lang: "Arabe", currency: "Ouguiya (MRU)", flag: "Mauritania" },
  "MUS": { name: "Maurice", capital: "Port-Louis", area: 2040, pop: 1272000, continent: "Afrique", lang: "Anglais, Français", currency: "Roupie MUR (MUR)", flag: "Mauritius" },
  "MEX": { name: "Mexique", capital: "Mexico", area: 1964375, pop: 126200000, continent: "Amérique du Nord", lang: "Espagnol", currency: "Peso MXN (MXN)", flag: "Mexico" },
  "FSM": { name: "Micronésie", capital: "Palikir", area: 702, pop: 115000, continent: "Océanie", lang: "Anglais", currency: "Dollar US ($)", flag: "Micronesia" },
  "MDA": { name: "Moldavie", capital: "Chișinău", area: 33846, pop: 4034000, continent: "Europe", lang: "Roumain", currency: "Leu (MDL)", flag: "Moldova" },
  "MCO": { name: "Monaco", capital: "Monaco", area: 2, pop: 39000, continent: "Europe", lang: "Français", currency: "Euro (€)", flag: "Monaco" },
  "MNG": { name: "Mongolie", capital: "Oulan-Bator", area: 1564116, pop: 3278000, continent: "Asie", lang: "Mongol", currency: "Tögrög (MNT)", flag: "Mongolia" },
  "MNE": { name: "Monténégro", capital: "Podgorica", area: 13812, pop: 628000, continent: "Europe", lang: "Monténégrin", currency: "Euro (€)", flag: "Montenegro" },
  "MAR": { name: "Maroc", capital: "Rabat", area: 446550, pop: 36910000, continent: "Afrique", lang: "Arabe, Berbère", currency: "Dirham (MAD)", flag: "Morocco" },
  "MOZ": { name: "Mozambique", capital: "Maputo", area: 801590, pop: 31260000, continent: "Afrique", lang: "Portugais", currency: "Metical (MZN)", flag: "Mozambique" },
  "MMR": { name: "Myanmar", capital: "Naypyidaw", area: 676578, pop: 54410000, continent: "Asie", lang: "Birman", currency: "Kyat (MMK)", flag: "Myanmar" },
  "NAM": { name: "Namibie", capital: "Windhoek", area: 824292, pop: 2541000, continent: "Afrique", lang: "Anglais", currency: "Dollar NAD ($)", flag: "Namibia" },
  "NRU": { name: "Nauru", capital: "Yaren", area: 21, pop: 11000, continent: "Océanie", lang: "Anglais, Nauruan", currency: "Dollar AUD ($)", flag: "Nauru" },
  "NPL": { name: "Népal", capital: "Katmandou", area: 147516, pop: 29130000, continent: "Asie", lang: "Népali", currency: "Roupie NPR (NPR)", flag: "Nepal" },
  "NLD": { name: "Pays-Bas", capital: "Amsterdam", area: 41543, pop: 17440000, continent: "Europe", lang: "Néerlandais", currency: "Euro (€)", flag: "Netherlands" },
  "NZL": { name: "Nouvelle-Zélande", capital: "Wellington", area: 270467, pop: 5090000, continent: "Océanie", lang: "Anglais, Maori", currency: "Dollar NZD ($)", flag: "New Zealand" },
  "NIC": { name: "Nicaragua", capital: "Managua", area: 130373, pop: 6625000, continent: "Amérique", lang: "Espagnol", currency: "Córdoba (NIO)", flag: "Nicaragua" },
  "NER": { name: "Niger", capital: "Niamey", area: 1267000, pop: 24210000, continent: "Afrique", lang: "Français", currency: "Franc CFA (XOF)", flag: "Niger" },
  "NGA": { name: "Nigeria", capital: "Abuja", area: 923768, pop: 206100000, continent: "Afrique", lang: "Anglais", currency: "Naira (NGN)", flag: "Nigeria" },
  "NOR": { name: "Norvège", capital: "Oslo", area: 323802, pop: 5421000, continent: "Europe", lang: "Norvégien", currency: "Couronne NOK (NOK)", flag: "Norway" },
  "OMN": { name: "Oman", capital: "Mascate", area: 309500, pop: 5107000, continent: "Asie", lang: "Arabe", currency: "Rial OMR (OMR)", flag: "Oman" },
  "PAK": { name: "Pakistan", capital: "Islamabad", area: 881912, pop: 220900000, continent: "Asie", lang: "Ourdou, Anglais", currency: "Roupie PKR (PKR)", flag: "Pakistan" },
  "PLW": { name: "Palaos", capital: "Ngerulmud", area: 459, pop: 18000, continent: "Océanie", lang: "Anglais, Paluan", currency: "Dollar US ($)", flag: "Palau" },
  "PAN": { name: "Panama", capital: "Panama", area: 75417, pop: 4315000, continent: "Amérique", lang: "Espagnol", currency: "Balboa (PAB)", flag: "Panama" },
  "PNG": { name: "Papouasie-Nouvelle-Guinée", capital: "Port Moresby", area: 462840, pop: 8947000, continent: "Océanie", lang: "Anglais, Tok Pisin", currency: "Kina (PGK)", flag: "Papua New Guinea" },
  "PRY": { name: "Paraguay", capital: "Asunción", area: 406752, pop: 7133000, continent: "Amérique du Sud", lang: "Espagnol, Guarani", currency: "Guarani (PYG)", flag: "Paraguay" },
  "PER": { name: "Pérou", capital: "Lima", area: 1285216, pop: 32970000, continent: "Amérique du Sud", lang: "Espagnol", currency: "Sol (PEN)", flag: "Peru" },
  "PHL": { name: "Philippines", capital: "Manille", area: 300000, pop: 109600000, continent: "Asie", lang: "Filipino, Anglais", currency: "Peso PHP (PHP)", flag: "Philippines" },
  "POL": { name: "Pologne", capital: "Varsovie", area: 312685, pop: 37850000, continent: "Europe", lang: "Polonais", currency: "Zloty (PLN)", flag: "Poland" },
  "PRT": { name: "Portugal", capital: "Lisbonne", area: 92090, pop: 10190000, continent: "Europe", lang: "Portugais", currency: "Euro (€)", flag: "Portugal" },
  "QAT": { name: "Qatar", capital: "Doha", area: 11586, pop: 2886000, continent: "Asie", lang: "Arabe", currency: "Rial QAR (QAR)", flag: "Qatar" },
  "ROU": { name: "Roumanie", capital: "Bucarest", area: 238391, pop: 19240000, continent: "Europe", lang: "Roumain", currency: "Leu (RON)", flag: "Romania" },
  "RUS": { name: "Russie", capital: "Moscou", area: 17098242, pop: 144100000, continent: "Europe/Asie", lang: "Russe", currency: "Rouble (RUB)", flag: "Russia" },
  "RWA": { name: "Rwanda", capital: "Kigali", area: 26338, pop: 12950000, continent: "Afrique", lang: "Kinyarwanda, Anglais, Français", currency: "Franc RWF (RWF)", flag: "Rwanda" },
  "KNA": { name: "Saint-Kitts-et-Nevis", capital: "Basseterre", area: 261, pop: 53000, continent: "Amérique", lang: "Anglais", currency: "Dollar XCD ($)", flag: "Saint Kitts and Nevis" },
  "LCA": { name: "Sainte-Lucie", capital: "Castries", area: 616, pop: 183000, continent: "Amérique", lang: "Anglais", currency: "Dollar XCD ($)", flag: "Saint Lucia" },
  "VCT": { name: "Saint-Vincent-et-les-Grenadines", capital: "Kingstown", area: 389, pop: 111000, continent: "Amérique", lang: "Anglais", currency: "Dollar XCD ($)", flag: "Saint Vincent and the Grenadines" },
  "WSM": { name: "Samoa", capital: "Apia", area: 2842, pop: 198000, continent: "Océanie", lang: "Samoan, Anglais", currency: "Tala (WST)", flag: "Samoa" },
  "SMR": { name: "Saint-Marin", capital: "Saint-Marin", area: 61, pop: 34000, continent: "Europe", lang: "Italien", currency: "Euro (€)", flag: "San Marino" },
  "STP": { name: "Sao Tomé-et-Principe", capital: "São Tomé", area: 964, pop: 219000, continent: "Afrique", lang: "Portugais", currency: "Dobra (STN)", flag: "Sao Tome and Principe" },
  "SAU": { name: "Arabie saoudite", capital: "Riyad", area: 2149690, pop: 34810000, continent: "Asie", lang: "Arabe", currency: "Riyal (SAR)", flag: "Saudi Arabia" },
  "SEN": { name: "Sénégal", capital: "Dakar", area: 196722, pop: 16740000, continent: "Afrique", lang: "Français", currency: "Franc CFA (XOF)", flag: "Senegal" },
  "SRB": { name: "Serbie", capital: "Belgrade", area: 88361, pop: 8739000, continent: "Europe", lang: "Serbe", currency: "Dinar RSD (RSD)", flag: "Serbia" },
  "SYC": { name: "Seychelles", capital: "Victoria", area: 452, pop: 98000, continent: "Afrique", lang: "Créole, Anglais, Français", currency: "Roupie SCR (SCR)", flag: "Seychelles" },
  "SLE": { name: "Sierra Leone", capital: "Freetown", area: 71740, pop: 7977000, continent: "Afrique", lang: "Anglais", currency: "Leone (SLE)", flag: "Sierra Leone" },
  "SGP": { name: "Singapour", capital: "Singapour", area: 728, pop: 5850000, continent: "Asie", lang: "Anglais, Malais, Mandarin, Tamoul", currency: "Dollar SGD ($)", flag: "Singapore" },
  "SVK": { name: "Slovaquie", capital: "Bratislava", area: 49035, pop: 5460000, continent: "Europe", lang: "Slovaque", currency: "Euro (€)", flag: "Slovakia" },
  "SVN": { name: "Slovénie", capital: "Ljubljana", area: 20273, pop: 2079000, continent: "Europe", lang: "Slovène", currency: "Euro (€)", flag: "Slovenia" },
  "SLB": { name: "Îles Salomon", capital: "Honiara", area: 28896, pop: 686000, continent: "Océanie", lang: "Anglais", currency: "Dollar SBD ($)", flag: "Solomon Islands" },
  "SOM": { name: "Somalie", capital: "Mogadiscio", area: 637657, pop: 15890000, continent: "Afrique", lang: "Somali, Arabe", currency: "Shilling SOS (SOS)", flag: "Somalia" },
  "ZAF": { name: "Afrique du Sud", capital: "Pretoria", area: 1219090, pop: 60000000, continent: "Afrique", lang: "Afrikaans, Anglais", currency: "Rand (ZAR)", flag: "South Africa" },
  "SSD": { name: "Soudan du Sud", capital: "Djouba", area: 619745, pop: 11190000, continent: "Afrique", lang: "Anglais", currency: "Livre SSP (SSP)", flag: "South Sudan" },
  "ESP": { name: "Espagne", capital: "Madrid", area: 505990, pop: 46750000, continent: "Europe", lang: "Espagnol", currency: "Euro (€)", flag: "Spain" },
  "LKA": { name: "Sri Lanka", capital: "Sri Jayawardenepura", area: 65610, pop: 21410000, continent: "Asie", lang: "Cingalais, Tamoul", currency: "Roupie LKR (LKR)", flag: "Sri Lanka" },
  "SDN": { name: "Soudan", capital: "Khartoum", area: 1886068, pop: 43850000, continent: "Afrique", lang: "Arabe, Anglais", currency: "Livre SDG (SDG)", flag: "Sudan" },
  "SUR": { name: "Suriname", capital: "Paramaribo", area: 163820, pop: 587000, continent: "Amérique du Sud", lang: "Néerlandais", currency: "Dollar SRD ($)", flag: "Suriname" },
  "SWE": { name: "Suède", capital: "Stockholm", area: 450295, pop: 10090000, continent: "Europe", lang: "Suédois", currency: "Couronne SEK (SEK)", flag: "Sweden" },
  "CHE": { name: "Suisse", capital: "Berne", area: 41284, pop: 8655000, continent: "Europe", lang: "Allemand, Français, Italien, Romanche", currency: "Franc CHF (CHF)", flag: "Switzerland" },
  "SYR": { name: "Syrie", capital: "Damas", area: 185180, pop: 17500000, continent: "Asie", lang: "Arabe", currency: "Livre SYP (SYP)", flag: "Syria" },
  "TWN": { name: "Taïwan", capital: "Taipei", area: 36193, pop: 23570000, continent: "Asie", lang: "Mandarin", currency: "Dollar TWD ($)", flag: "Taiwan" },
  "TJK": { name: "Tadjikistan", capital: "Douchanbé", area: 143100, pop: 9538000, continent: "Asie", lang: "Tadjik", currency: "Somoni (TJS)", flag: "Tajikistan" },
  "TZA": { name: "Tanzanie", capital: "Dodoma", area: 945087, pop: 59730000, continent: "Afrique", lang: "Swahili, Anglais", currency: "Shilling TZS (TZS)", flag: "Tanzania" },
  "THA": { name: "Thaïlande", capital: "Bangkok", area: 513120, pop: 69790000, continent: "Asie", lang: "Thaï", currency: "Baht (THB)", flag: "Thailand" },
  "TLS": { name: "Timor oriental", capital: "Dili", area: 14874, pop: 1318000, continent: "Asie", lang: "Tétum, Portugais", currency: "Dollar US ($)", flag: "Timor-Leste" },
  "TGO": { name: "Togo", capital: "Lomé", area: 56785, pop: 8279000, continent: "Afrique", lang: "Français", currency: "Franc CFA (XOF)", flag: "Togo" },
  "TON": { name: "Tonga", capital: "Nuku'alofa", area: 747, pop: 105000, continent: "Océanie", lang: "Tongien, Anglais", currency: "Pa'anga (TOP)", flag: "Tonga" },
  "TTO": { name: "Trinité-et-Tobago", capital: "Port-d'Espagne", area: 5128, pop: 1399000, continent: "Amérique", lang: "Anglais", currency: "Dollar TTD ($)", flag: "Trinidad and Tobago" },
  "TUN": { name: "Tunisie", capital: "Tunis", area: 163610, pop: 11820000, continent: "Afrique", lang: "Arabe", currency: "Dinar TND (TND)", flag: "Tunisia" },
  "TUR": { name: "Turquie", capital: "Ankara", area: 783562, pop: 84340000, continent: "Asie", lang: "Turc", currency: "Livre TRY (TRY)", flag: "Turkey" },
  "TKM": { name: "Turkménistan", capital: "Achgabat", area: 488100, pop: 6031000, continent: "Asie", lang: "Turkmène", currency: "Manat TMT (TMT)", flag: "Turkmenistan" },
  "TUV": { name: "Tuvalu", capital: "Funafuti", area: 26, pop: 12000, continent: "Océanie", lang: "Anglais, Tuvaluan", currency: "Dollar AUD ($)", flag: "Tuvalu" },
  "UGA": { name: "Ouganda", capital: "Kampala", area: 241550, pop: 45740000, continent: "Afrique", lang: "Anglais, Swahili", currency: "Shilling UGX (UGX)", flag: "Uganda" },
  "UKR": { name: "Ukraine", capital: "Kiev", area: 603550, pop: 43730000, continent: "Europe", lang: "Ukrainien", currency: "Hryvnia (UAH)", flag: "Ukraine" },
  "ARE": { name: "Émirats arabes unis", capital: "Abou Dabi", area: 83600, pop: 9890000, continent: "Asie", lang: "Arabe", currency: "Dirham AED (AED)", flag: "United Arab Emirates" },
  "GBR": { name: "Royaume-Uni", capital: "Londres", area: 243610, pop: 67200000, continent: "Europe", lang: "Anglais", currency: "Livre GBP (£)", flag: "United Kingdom" },
  "USA": { name: "États-Unis", capital: "Washington, D.C.", area: 9833517, pop: 331900000, continent: "Amérique du Nord", lang: "Anglais", currency: "Dollar US ($)", flag: "United States" },
  "URY": { name: "Uruguay", capital: "Montevideo", area: 176215, pop: 3474000, continent: "Amérique du Sud", lang: "Espagnol", currency: "Peso UYU (UYU)", flag: "Uruguay" },
  "UZB": { name: "Ouzbékistan", capital: "Tachkent", area: 448978, pop: 33470000, continent: "Asie", lang: "Ouzbek", currency: "Som (UZS)", flag: "Uzbekistan" },
  "VUT": { name: "Vanuatu", capital: "Port-Vila", area: 12189, pop: 307000, continent: "Océanie", lang: "Bichlamar, Anglais, Français", currency: "Vatu (VUV)", flag: "Vanuatu" },
  "VAT": { name: "Vatican", capital: "Vatican", area: 0.44, pop: 800, continent: "Europe", lang: "Italien, Latin", currency: "Euro (€)", flag: "Vatican City" },
  "VEN": { name: "Venezuela", capital: "Caracas", area: 912050, pop: 28440000, continent: "Amérique du Sud", lang: "Espagnol", currency: "Bolívar (VES)", flag: "Venezuela" },
  "VNM": { name: "Vietnam", capital: "Hanoï", area: 331212, pop: 97340000, continent: "Asie", lang: "Vietnamien", currency: "Dong (VND)", flag: "Vietnam" },
  "YEM": { name: "Yémen", capital: "Sanaa", area: 527968, pop: 29830000, continent: "Asie", lang: "Arabe", currency: "Rial YER (YER)", flag: "Yemen" },
  "ZMB": { name: "Zambie", capital: "Lusaka", area: 752612, pop: 18380000, continent: "Afrique", lang: "Anglais", currency: "Kwacha (ZMW)", flag: "Zambia" },
  "ZWE": { name: "Zimbabwe", capital: "Harare", area: 390757, pop: 14860000, continent: "Afrique", lang: "Anglais, Shona", currency: "Dollar ZWL ($)", flag: "Zimbabwe" }
};

// === CARTE ===
const map = L.map('map').setView([20, 0], 2);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

let geojsonLayer;

// === CHARGEMENT GEOJSON ===
fetch('https://raw.githubusercontent.com/johan/world.geo.json/master/countries.geo.json')
  .then(r => r.json())
  .then(data => {
    geojsonLayer = L.geoJSON(data, {
      style: { fillColor: '#26a69a', weight: 1, color: '#004d40', fillOpacity: 0.7 },
      onEachFeature: function (feature, layer) {
        const iso = feature.properties.ISO_A3;
        const info = countryData[iso] || {
          name: feature.properties.NAME || "Inconnu",
          capital: "Inconnue", area: "Inconnue", pop: "Inconnue",
          continent: "Inconnu", lang: "Inconnue", currency: "Inconnue", flag: "World"
        };

        layer.bindTooltip(info.name, { direction: 'top' });
        layer.on('click', () => selectCountry(layer, info, iso));
      }
    }).addTo(map);
  });

// === SÉLECTION PAYS ===
function selectCountry(layer, info, iso) {
  if (geojsonLayer) geojsonLayer.eachLayer(l => geojsonLayer.resetStyle(l));
  layer.setStyle({ fillColor: '#d32f2f', weight: 3, color: '#b71c1c', fillOpacity: 0.9 });

  document.getElementById('flag').textContent = info.flag;
  document.getElementById('country-name').textContent = info.name;
  document.getElementById('capital').textContent = info.capital;
  document.getElementById('area').textContent = formatNumber(info.area) + (info.area !== "Inconnue" ? " km²" : "");
  document.getElementById('population').textContent = formatNumber(info.pop);
  document.getElementById('continent').textContent = info.continent;
  document.getElementById('language').textContent = info.lang;
  document.getElementById('currency').textContent = info.currency;

  map.fitBounds(layer.getBounds(), { padding: [50, 50] });
}

// === RECHERCHE ===
const searchInput = document.getElementById('search-input');
const suggestionsDiv = document.getElementById('suggestions');

searchInput.addEventListener('input', () => {
  const query = searchInput.value.toLowerCase().trim();
  suggestionsDiv.innerHTML = '';
  suggestionsDiv.style.display = 'none';

  if (!query) return;

  const matches = Object.entries(countryData)
    .filter(([_, c]) => c.name.toLowerCase().includes(query))
    .slice(0, 8);

  if (matches.length === 0) {
    suggestionsDiv.innerHTML = '<div class="suggestion-item">Aucun pays trouvé</div>';
    suggestionsDiv.style.display = 'block';
    return;
  }

  matches.forEach(([iso, country]) => {
    const item = document.createElement('div');
    item.className = 'suggestion-item';
    item.innerHTML = `<span class="flag">${country.flag}</span> ${country.name}`;
    item.onclick = () => {
      searchInput.value = country.name;
      suggestionsDiv.style.display = 'none';
      geojsonLayer.eachLayer(layer => {
        if (layer.feature.properties.ISO_A3 === iso) {
          selectCountry(layer, country, iso);
        }
      });
    };
    suggestionsDiv.appendChild(item);
  });

  suggestionsDiv.style.display = 'block';
});

document.addEventListener('click', (e) => {
  if (!searchInput.contains(e.target) && !suggestionsDiv.contains(e.target)) {
    suggestionsDiv.style.display = 'none';
  }
});

// === FORMAT NOMBRE ===
function formatNumber(num) {
  if (num === "Inconnue" || !num) return "Inconnue";
  return parseInt(num).toLocaleString('fr-FR');
}