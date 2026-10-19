/* SportaBiedrs.lv final application logic */
'use strict';

const VENUES = [{"name":"MH Padel Club","sportKey":"padel","sport":"Padel","city":"Mārupe","address":"Mārupes Parks 1, Mārupe","lat":56.9142,"lng":24.0321,"price":"No 20 €/h","priceValue":20,"rating":4.7,"reviews":62,"verified":true,"bookable":true,"website":"https://playtomic.io/mh-padel-club/46c7078e-dad2-4dc7-abf4-85ef582becb2","image":"https://res.cloudinary.com/playtomic/image/upload/v1673198073/pro/tenants/46c7078e-dad2-4dc7-abf4-85ef582becb2/1673198071911.jpg","gmaps":"https://www.google.com/maps/search/?api=1&query=MH+Padel+Club+M%C4%81rupes+Parks+1+M%C4%81rupe","reviewSource":"google"},{"name":"VARPU Tennis & Padel Club","sportKey":"padel","sport":"Padel","city":"Mārupe","address":"Vārpu iela 17A, Mārupe","lat":56.9207,"lng":24.0304,"price":"Pēc pieprasījuma","priceValue":999,"rating":4.7,"reviews":83,"verified":true,"bookable":true,"website":"https://varpu.lv/","gmaps":"https://www.google.com/maps/search/?api=1&query=VARPU+Tennis+%26+Padel+Club+V%C4%81rpu+iela+17A+M%C4%81rupe","image":"https://varpu.lv/wp-content/uploads/2022/06/VARPU-TENISA-un-PADEL-klubs-29.jpg","reviewSource":"google"},{"name":"Lattelecom Tenisa centrs","sportKey":"tennis","sport":"Teniss","city":"Rīga","address":"Vienības gatve 1, Rīga","lat":56.929776,"lng":24.092346,"price":"25 €/h","priceValue":25,"rating":4.6,"reviews":340,"verified":true,"gmaps":"https://www.google.com/maps/search/?api=1&query=Lattelecom+Tenisa+centrs+Riga","reviewSource":"google","website":"https://enri.lv/"},{"name":"Jelgavas tenisa klubs","sportKey":"tennis","sport":"Teniss","city":"Jelgava","address":"Pulkveža Oskara Kalpaka iela 8, Jelgava","lat":56.641628,"lng":23.71932,"price":"16 €/h","priceValue":16,"rating":4.5,"reviews":61,"verified":true,"gmaps":"https://www.google.com/maps/search/?api=1&query=Jelgavas+tenisa+klubs","reviewSource":"google","website":"https://www.facebook.com/jelgavastenisaklubs/"},{"name":"Riga Basketball Arena (Elerte)","sportKey":"basketball","sport":"Basketbols","city":"Rīga","address":"Hanzas iela 4, Rīga","lat":56.961091,"lng":24.119274,"price":"30 €/h","priceValue":30,"rating":4.4,"reviews":88,"verified":true,"gmaps":"https://www.google.com/maps/search/?api=1&query=Riga+Basketball+Arena","reviewSource":"google","website":"https://www.facebook.com/rigabasketballarena/"},{"name":"RTU sporta manēža (Kandavas iela)","sportKey":"football","sport":"Futbols","city":"Rīga","address":"Kandavas iela 27, Rīga","lat":56.950143,"lng":24.049008,"price":"40 €/h","priceValue":40,"rating":4.5,"reviews":97,"verified":true,"gmaps":"https://www.google.com/maps/search/?api=1&query=Skonto+futbola+manēža+Riga","reviewSource":"google","website":"https://skontohalle.lv/"},{"name":"Arena Rīga Sporta klubs","sportKey":"hockey","sport":"Hokejs","city":"Rīga","address":"Skanstes iela 21, Rīga","lat":56.967933694457,"lng":24.121266254426,"image":"https://photobooth.cdn.sports.ru/preset/post/0/9e/d1cc4ea0c45bd94020b2fd3746949.jpeg?f=webp&s=2x&w=730","price":"70 €/h","priceValue":70,"rating":4.6,"reviews":145,"verified":true,"gmaps":"https://www.google.com/maps/search/?api=1&query=Arena+Riga+Sporta+klubs","reviewSource":"google","website":"https://arenariga.com/"},{"name":"Volejbola centrs Ozolciems","sportKey":"volleyball","sport":"Volejbols","city":"Rīga","address":"Ozolciema iela 4, Rīga","lat":56.900607,"lng":24.098151,"price":"22 €/h","priceValue":22,"rating":4.5,"reviews":47,"verified":false,"gmaps":"https://www.google.com/maps/search/?api=1&query=Volejbola+centrs+Ozolciems","reviewSource":"google","website":"https://www.brazil.lv/"},{"name":"Bulldozer Boxing Riga","sportKey":"boxing","sport":"Bokss / MMA","city":"Rīga","address":"Lāčplēša iela 87, Rīga","lat":56.948631,"lng":24.133834,"price":"12 €/treniņš","priceValue":12,"rating":4.9,"reviews":274,"verified":true,"gmaps":"https://www.google.com/maps/search/?api=1&query=Bulldozer+Boxing+Riga","reviewSource":"google","website":"https://www.facebook.com/bulldozerboxing/"},{"name":"Tridens Fitness Elizabete","sportKey":"fitness","sport":"Fitnesa zāle","city":"Rīga","address":"Elizabetes iela 21a, Rīga","lat":56.958616,"lng":24.106667,"price":"35 €/mēn.","priceValue":35,"rating":4.5,"reviews":512,"verified":true,"gmaps":"https://www.google.com/maps/search/?api=1&query=Tridens+Fitness+Elizabete","reviewSource":"google","website":"https://www.facebook.com/tridensfitness/"},{"name":"MyFitness Origo","sportKey":"fitness","sport":"Fitnesa zāle","city":"Rīga","address":"Stacijas laukums 2, Rīga","lat":56.947293,"lng":24.120073,"price":"39 €/mēn.","priceValue":39,"rating":4.3,"reviews":890,"verified":true,"gmaps":"https://www.google.com/maps/search/?api=1&query=MyFitness+Origo+Riga","reviewSource":"google","website":"https://www.myfitness.lv/club/origo/"},{"name":"Rimi Olimpiskais centrs (peldbaseins)","sportKey":"swimming","sport":"Peldēšana","city":"Rīga","address":"Grostonas iela 6b, Rīga","lat":56.967664,"lng":24.124638,"price":"6 €/apmeklējums","priceValue":6,"rating":4.6,"reviews":401,"verified":true,"gmaps":"https://www.google.com/maps/search/?api=1&query=Rimi+Olimpiskais+centrs+Riga","reviewSource":"google","website":"https://www.olimpiskais.lv/peldbaseins/"},{"name":"Mežaparka skrejceļš","sportKey":"running","sport":"Skriešana","city":"Rīga","address":"Mežaparks, Rīga","lat":57.001796,"lng":24.157499,"price":"Publiskā pieeja","priceValue":0,"rating":4.8,"reviews":620,"verified":true,"gmaps":"https://www.google.com/maps/search/?api=1&query=Mežaparka+skrejceļš","reviewSource":"google","website":"https://rigasmezi.lv/mezaparks/"},{"name":"Vecāķu pludmales volejbols","sportKey":"volleyball","sport":"Pludmales volejbols","city":"Rīga","address":"Vecāķu prospekts, Rīga","lat":57.046081,"lng":24.10193,"price":"Publiskā pieeja","priceValue":0,"rating":4.6,"reviews":58,"verified":false,"gmaps":"https://www.google.com/maps/search/?api=1&query=Vecāķu+pludmale+Riga","reviewSource":"google","website":"https://www.riga.lv/"},{"name":"Riga Cycling velotrase (Biķernieki)","sportKey":"cycling","sport":"Velosports","city":"Rīga","address":"Biķernieku trase, Rīga","lat":56.9634,"lng":24.22534,"price":"10 €/dalība","priceValue":10,"rating":4.7,"reviews":132,"verified":true,"gmaps":"https://www.google.com/maps/search/?api=1&query=Biķernieku+trase","reviewSource":"google","website":"https://bksb.lv/"},{"name":"Jāņa Daliņa stadions","sportKey":"running","sport":"Vieglatlētika","city":"Valmiera","address":"Jāņa Daliņa iela 2, Valmiera","lat":57.540199,"lng":25.438896,"price":"Publiskā pieeja","priceValue":0,"rating":4.5,"reviews":170,"verified":true,"bookable":false,"website":"https://voc.lv/janadalina-stadions/","gmaps":"https://www.google.com/maps/search/?api=1&query=Jāņa+Daliņa+stadions","image":"https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=800&q=80","reviewSource":"google"},{"name":"Sigulda Bobsleja un kamaniņu trase","sportKey":"extreme","sport":"Ekstrēmie sporti","city":"Sigulda","address":"Šveices iela 13, Sigulda","lat":57.152077,"lng":24.836822,"price":"15 €/brauciens","priceValue":15,"rating":4.8,"reviews":210,"verified":true,"gmaps":"https://www.google.com/maps/search/?api=1&query=Sigulda+Bobsleja+trase","image":"https://images.unsplash.com/photo-1517649763962-0c623266ddc0?auto=format&fit=crop&w=900&q=82","website":"https://bobslejs.lv/","bookable":true,"reviewSource":"google"},{"name":"Majorenhoff","sportKey":"tennis","sport":"Teniss","city":"Jūrmala","address":"Jomas iela 42, Majori, Jūrmala","lat":56.9725394,"lng":23.799068,"price":"No 20 €/h","priceValue":20,"rating":4.6,"reviews":48,"verified":true,"bookable":true,"website":"https://www.majorenhoff.lv/","gmaps":"https://www.google.com/maps/search/?api=1&query=Majorenhoff+Jomas+iela+42+Jurmala","reviewSource":"google"},{"name":"Daugavpils Ledus halle","sportKey":"hockey","sport":"Hokejs","city":"Daugavpils","address":"Stacijas iela 45A, Daugavpils","lat":55.872076,"lng":26.529949,"image":"https://pic2.la.lv/2023/03/ledus-halle-23-01-001_max-800x494.jpg","price":"45 €/h","priceValue":45,"rating":4.3,"reviews":52,"verified":true,"gmaps":"https://www.google.com/maps/search/?api=1&query=Daugavpils+Ledus+halle","reviewSource":"google","website":"https://www.daugavpilsledus.lv/"},{"name":"Liepājas Olimpiskais centrs","sportKey":"fitness","sport":"Fitnesa zāle","city":"Liepāja","address":"Rīgas iela 133, Liepāja","lat":56.513026,"lng":21.014399,"price":"30 €/mēn.","priceValue":30,"rating":4.4,"reviews":118,"verified":true,"gmaps":"https://www.google.com/maps/search/?api=1&query=Liepajas+Olimpiskais+centrs","reviewSource":"google","website":"https://loc.lv/"},{"name":"Liepājas tenisa klubs","sportKey":"tennis","sport":"Teniss","city":"Liepāja","address":"Rakstvežu iela 3, Liepāja","lat":56.505127,"lng":21.009542,"price":"14 €/h","priceValue":14,"rating":4.4,"reviews":33,"verified":false,"gmaps":"https://www.google.com/maps/search/?api=1&query=Liepajas+tenisa+klubs","reviewSource":"google","website":"https://www.liepajasteniss.lv/"},{"name":"Ventspils Olimpiskais centrs","sportKey":"fitness","sport":"Fitnesa zāle","city":"Ventspils","address":"Lielais prospekts 33, Ventspils","lat":57.389232,"lng":21.569356,"price":"28 €/mēn.","priceValue":28,"rating":4.6,"reviews":204,"verified":true,"gmaps":"https://www.google.com/maps/search/?api=1&query=Ventspils+Olimpiskais+centrs","reviewSource":"google","website":"https://www.ocventspils.lv/"},{"name":"Ventspils pludmales volejbols","sportKey":"volleyball","sport":"Pludmales volejbols","city":"Ventspils","address":"Pludmale, Ventspils","lat":57.387778,"lng":21.532774,"price":"Publiskā pieeja","priceValue":0,"rating":4.7,"reviews":41,"verified":false,"gmaps":"https://www.google.com/maps/search/?api=1&query=Ventspils+pludmale","reviewSource":"google","website":"https://www.ocventspils.lv/"},{"name":"Rēzeknes novada sporta skola","sportKey":"basketball","sport":"Basketbols","city":"Rēzekne","address":"Atbrīvošanas aleja 90, Rēzekne","lat":56.504383,"lng":27.330461,"price":"20 €/h","priceValue":20,"rating":4.3,"reviews":29,"verified":false,"gmaps":"https://www.google.com/maps/search/?api=1&query=Rezeknes+novada+sporta+skola","reviewSource":"google","website":"https://rezeknesnovads.lv/"},{"name":"Cēsu Olimpiskais centrs","sportKey":"swimming","sport":"Peldēšana","city":"Cēsis","address":"Piebalgas iela 18, Cēsis","lat":57.307902,"lng":25.2782,"price":"5 €/apmeklējums","priceValue":5,"rating":4.6,"reviews":167,"verified":true,"gmaps":"https://www.google.com/maps/search/?api=1&query=Cesu+Olimpiskais+centrs","reviewSource":"google","website":"https://cesis.lv/"},{"name":"Daugavpils Padel klubs","sportKey":"padel","sport":"Padel","city":"Daugavpils","address":"18. novembra iela 5, Daugavpils","lat":55.895002,"lng":26.609689,"image":"https://padel.lv/storage/padel1.webp","imageReference":true,"price":"16 €/h","priceValue":16,"rating":4.5,"reviews":27,"verified":false,"gmaps":"https://www.google.com/maps/search/?api=1&query=Daugavpils+Padel+klubs","reviewSource":"google","website":"https://padel.lv/"},{"name":"Padel Club Riga K9","sportKey":"padel","sport":"Padel","city":"Rīga","address":"Ķīšezera iela 9, Rīga","lat":56.98738,"lng":24.163608,"price":"22 €/h ārpus pīķa · 40 €/h pīķī","priceValue":22,"rating":4.7,"reviews":51,"verified":true,"image":"https://padel.lv/storage/kisezera-9-padel-club.webp","gmaps":"https://www.google.com/maps/search/?api=1&query=Padel+Club+Riga+K9+Kisezera+iela+9","reviewSource":"google","website":"https://padel.lv/"},{"name":"Padel Club Riga Beach Arena","sportKey":"padel","sport":"Padel","city":"Rīga","address":"Ganību dambis 20A, Rīga","lat":56.974819,"lng":24.1144,"price":"16 €/h","priceValue":16,"rating":4.4,"reviews":239,"verified":true,"image":"https://padel.lv/storage/padel-club-riga-beach-arena.webp","gmaps":"https://www.google.com/maps/search/?api=1&query=Padel+Club+Riga+Beach+Arena+Ganibu+dambis+20A","website":"https://padel.lv/","reviewSource":"google"},{"name":"MyFitness Riga Plaza","sportKey":"fitness","sport":"Fitnesa zāle","city":"Rīga","address":"Mūkusalas iela 71, Rīga","lat":56.926661,"lng":24.103071,"price":"35-55 €/mēn.","priceValue":35,"rating":4.5,"reviews":154,"verified":true,"gmaps":"https://www.google.com/maps/search/?api=1&query=MyFitness+Riga+Plaza","reviewSource":"google","website":"https://www.myfitness.lv/club/riga-plaza/"},{"name":"O'Learys Riga Plaza","sportKey":"football","sport":"Sports & izklaide","city":"Rīga","address":"Mūkusalas iela 71, Rīga","lat":56.926661,"lng":24.103071,"price":"No 19 €/h*","priceValue":19,"rating":3.9,"reviews":454,"verified":true,"gmaps":"https://www.google.com/maps/search/?api=1&query=Olearys+Riga+Plaza","reviewSource":"google","website":"https://olearys.lv/riga-plaza/"},{"name":"Tenisa klubs ENRI","sportKey":"tennis","sport":"Teniss","city":"Rīga","address":"Vaidavas iela 4, Rīga","lat":56.963804,"lng":24.175502,"price":"20 €/h","priceValue":20,"rating":4.6,"reviews":120,"verified":true,"gmaps":"https://www.google.com/maps/search/?api=1&query=Tenisa+klubs+ENRI+Vaidavas+iela+4","reviewSource":"google","website":"https://enri.lv/"},{"name":"MOSH CLUB Padel Dreiliņi","sportKey":"padel","sport":"Padel","city":"Rīga","address":"Noliktavu iela 9, Dreiliņi","lat":56.9442,"lng":24.2385,"price":"20 €/h","priceValue":20,"rating":4.8,"reviews":75,"verified":true,"gmaps":"https://www.google.com/maps/search/?api=1&query=MOSH+CLUB+Padel+Dreilini","reviewSource":"google","website":"https://mosh.club/"},{"name":"Āra basketbola laukums Ziedoņdārzā","sportKey":"basketball","sport":"Basketbols","city":"Rīga","address":"Aleksandra Čaka iela 84a, Rīga","lat":56.956313,"lng":24.13811,"price":"Publiskā pieeja","priceValue":0,"rating":4.6,"reviews":180,"verified":true,"gmaps":"https://www.google.com/maps/search/?api=1&query=Outdoor+Basketball+Court+Ziedondarz+Riga","reviewSource":"google","website":null},{"name":"RTU Ķīpsalas peldbaseins","sportKey":"swimming","sport":"Peldēšana","city":"Rīga","address":"Ķīpsalas iela 5, Rīga","lat":56.9524386,"lng":24.084823,"price":"8 €/apmeklējums","priceValue":8,"rating":4.6,"reviews":250,"verified":true,"gmaps":"https://www.google.com/maps/search/?api=1&query=RTU+Kipsala+swimming+pool","reviewSource":"google","website":"https://baseins.rtu.lv/"},{"name":"MyWay Boxing","sportKey":"boxing","sport":"Bokss / MMA","city":"Rīga","address":"Kurbada iela 2A, Rīga","lat":56.948633,"lng":24.136927,"price":"15 €/treniņš","priceValue":15,"rating":4.7,"reviews":120,"verified":true,"gmaps":"https://www.google.com/maps/search/?api=1&query=MyWay+Boxing+Riga","reviewSource":"google","website":"https://mywayboxing.lv/"},{"name":"MyPadel","sportKey":"padel","sport":"Padel","city":"Rīga","address":"Grenču iela 5, Rīga","lat":56.934303,"lng":24.001031,"price":"20 €/h","priceValue":20,"rating":4.7,"reviews":90,"verified":true,"gmaps":"https://www.google.com/maps/search/?api=1&query=MyPadel+Grenču+iela+5","reviewSource":"google","website":"https://mypadel.lv/"},{"name":"LNK Sporta Parks","sportKey":"football","sport":"Futbols","city":"Rīga","address":"Lejupes iela 5, Rīga","lat":56.908484,"lng":24.153792,"price":"25 €/h","priceValue":25,"rating":4.7,"reviews":170,"verified":true,"gmaps":"https://www.google.com/maps/search/?api=1&query=LNK+Sporta+Parks+Lejupes+iela+5","reviewSource":"google","website":"https://lnksportaparks.lv/"},{"name":"Mežaparka Sporta ciems","sportKey":"running","sport":"Skriešana","city":"Rīga","address":"Ezermalas iela 30, Rīga","lat":57.002542,"lng":24.171654,"price":"Publiskā pieeja","priceValue":0,"rating":4.8,"reviews":320,"verified":true,"gmaps":"https://www.google.com/maps/search/?api=1&query=Mezaparka+Sports+Village","reviewSource":"google","website":"https://rigasmezi.lv/"},{"name":"RTU Sporta centrs","sportKey":"fitness","sport":"Fitnesa zāle","city":"Rīga","address":"Meža iela 1a, Rīga","lat":56.944557,"lng":24.081653,"price":"30 €/mēn.","priceValue":30,"rating":4.4,"reviews":110,"verified":true,"gmaps":"https://www.google.com/maps/search/?api=1&query=RTU+Sporta+centrs+Meza+iela+1a","reviewSource":"google","website":"https://sports.rtu.lv/"},{"name":"Krasta Sporta Centrs","sportKey":"fitness","sport":"Fitnesa zāle","city":"Rīga","address":"Krasta iela 68B, Rīga","lat":56.929843,"lng":24.159057,"price":"30 €/mēn.","priceValue":30,"rating":4.5,"reviews":130,"verified":true,"gmaps":"https://www.google.com/maps/search/?api=1&query=Krasta+Sporta+Centrs+Riga","reviewSource":"google","website":"https://www.facebook.com/krastasportacentrs/"},{"name":"Fighter Factory","sportKey":"boxing","sport":"Bokss / MMA","city":"Rīga","address":"Ķengaraga iela 1, Rīga","lat":56.919584,"lng":24.171544,"price":"15 €/treniņš","priceValue":15,"rating":4.8,"reviews":95,"verified":true,"gmaps":"https://www.google.com/maps/search/?api=1&query=Fighter+Factory+Riga","reviewSource":"google","website":null},{"name":"Gym! Origo","sportKey":"fitness","sport":"Fitnesa zāle","city":"Rīga","address":"Stacijas laukums 2, Rīga","lat":56.947293,"lng":24.120073,"price":"35 €/mēn.","priceValue":35,"rating":4.4,"reviews":500,"verified":true,"gmaps":"https://www.google.com/maps/search/?api=1&query=Gym+Origo+Riga","reviewSource":"google","website":"https://gymestonia.ee/lv/"},{"name":"Rimi Tenisa centrs","sportKey":"tennis","sport":"Teniss","city":"Rīga","address":"Kārļa Ulmaņa gatve 150, Rīga","lat":56.947327,"lng":23.993499,"price":"24 €/h","priceValue":24,"rating":4.5,"reviews":150,"verified":true,"gmaps":"https://www.google.com/maps/search/?api=1&query=Rimi+Tenisa+centrs+Karla+Ulmana+gatve+150","reviewSource":"google","website":"https://www.olimpiskais.lv/"},{"name":"Valmieras Olimpiskais centrs","sportKey":"fitness","sport":"Fitnesa zāle","city":"Valmiera","address":"Rīgas iela 91, Valmiera","lat":57.528246,"lng":25.385539,"price":"30 €/mēn.","priceValue":30,"rating":4.5,"reviews":120,"verified":false,"gmaps":"https://www.google.com/maps/search/?api=1&query=Valmieras+Olimpiskais+centrs","reviewSource":"google","website":"https://voc.lv/"},{"name":"Ogres novada sporta centrs","sportKey":"basketball","sport":"Basketbols","city":"Ogre","address":"Skolas iela 21, Ogre","lat":56.817139,"lng":24.591844,"price":"18 €/h","priceValue":18,"rating":4.4,"reviews":66,"verified":false,"gmaps":"https://www.google.com/maps/search/?api=1&query=Ogres+novada+sporta+centrs","reviewSource":"google","website":"https://ogressportacentrs.lv/"},{"name":"Kuldīgas sporta centrs","sportKey":"volleyball","sport":"Volejbols","city":"Kuldīga","address":"Virkas iela 13, Kuldīga","lat":56.976946,"lng":21.962964,"price":"15 €/h","priceValue":15,"rating":4.4,"reviews":52,"verified":false,"gmaps":"https://www.google.com/maps/search/?api=1&query=Kuldīgas+sporta+centrs","reviewSource":"google","website":"https://kuldigasports.lv/"},{"name":"Talsu sporta nams","sportKey":"football","sport":"Futbols","city":"Talsi","address":"Kārļa Mīlenbaha iela 32, Talsi","lat":57.2436,"lng":22.604951,"price":"18 €/h","priceValue":18,"rating":4.3,"reviews":44,"verified":false,"gmaps":"https://www.google.com/maps/search/?api=1&query=Talsu+sporta+nams","reviewSource":"google","website":"https://talsi.lv/"},{"name":"ENRI Sporta centrs","sportKey":"tennis","sport":"Teniss","city":"Rīga","address":"Stirnu iela 34A, Rīga","lat":56.959911,"lng":24.189511,"price":"Pēc pieprasījuma","priceValue":999,"rating":4.5,"reviews":228,"verified":true,"gmaps":"https://www.google.com/maps/search/?api=1&query=ENRI+Stirnu+iela+34A+Riga","bookable":true,"reviewSource":"google","website":"https://enri.lv/"},{"name":"Padelstar Teika","sportKey":"padel","sport":"Padel","city":"Rīga","address":"Brīvības gatve 201-k-4, Rīga","lat":56.973672,"lng":24.160065,"price":"Pēc pieprasījuma","priceValue":999,"rating":4.7,"reviews":19,"verified":true,"gmaps":"https://www.google.com/maps/search/?api=1&query=Padelstar+Teika","reviewSource":"google","website":"https://padelstar.lv/"},{"name":"Ghetto Games basketbola laukums","sportKey":"basketball","sport":"Basketbols","city":"Rīga","address":"Pērnavas iela 42, Rīga","lat":56.95943,"lng":24.15178,"price":"Publiskā pieeja","priceValue":0,"rating":4.7,"reviews":410,"verified":true,"gmaps":"https://www.google.com/maps/search/?api=1&query=Ghetto+Games+Pernavas+iela+42+Riga","reviewSource":"google","website":"https://ghetto.lv/"},{"name":"Aqua Dream","sportKey":"swimming","sport":"Peldēšana","city":"Rīga","address":"Stirnu iela 4, Rīga","lat":56.9513284,"lng":24.1847439,"price":"Pēc pieprasījuma","priceValue":999,"rating":4.1,"reviews":592,"verified":true,"gmaps":"https://www.google.com/maps/search/?api=1&query=Aqua+Dream+Stirnu+4+Riga","reviewSource":"google","website":"https://aquadream.lv/"},{"name":"Tenisa centrs Lielupe","sportKey":"tennis","sport":"Teniss","city":"Jūrmala","address":"Oskara Kalpaka prospekts 16, Jūrmala","lat":56.984621,"lng":23.875055,"price":"No 20 €/h","priceValue":20,"rating":4.7,"reviews":142,"verified":true,"gmaps":"https://www.google.com/maps/search/?api=1&query=Tenisa+centrs+Lielupe","bookable":true,"website":"https://tenisslielupe.lv/","image":"https://images.unsplash.com/photo-1554068865-24cecd4e34b8?auto=format&fit=crop&w=900&q=82","reviewSource":"google"},{"name":"SwimBaltic","sportKey":"swimming","sport":"Peldēšana","city":"Rīga","address":"Mūkupurva iela 1C, Rīga","lat":56.9311313,"lng":24.0050713,"price":"Pēc pieprasījuma","priceValue":999,"rating":4.7,"reviews":163,"verified":true,"gmaps":"https://www.google.com/maps/search/?api=1&query=SwimBaltic+Riga","reviewSource":"google","website":"https://swimbaltic.lv/"},{"name":"Tenisa klubs ENRI Kalnciema","sportKey":"tennis","sport":"Teniss","city":"Rīga","address":"Kalnciema iela 207, Rīga","lat":56.93282,"lng":24.02251,"price":"22 €/h","priceValue":22,"rating":4.6,"reviews":185,"verified":true,"gmaps":"https://www.google.com/maps/search/?api=1&query=Tenisa+klubs+ENRI+Kalnciema+207+Riga","reviewSource":"google","website":"https://enri.lv/"},{"name":"Daugavas sporta nams","sportKey":"basketball","sport":"Basketbols","city":"Rīga","address":"Krišjāņa Barona iela 107, Rīga","lat":56.96362,"lng":24.143039,"price":"Pēc pieprasījuma","priceValue":999,"rating":4.5,"reviews":250,"verified":true,"gmaps":"https://www.google.com/maps/search/?api=1&query=Daugavas+sporta+nams","reviewSource":"google","website":"https://dsn.lv/"},{"name":"Riga Disc Golf Park","sportKey":"discgolf","sport":"Disku golfs","city":"Rīga","address":"Apakšgrāvja iela 7A, Rīga","lat":57.002438,"lng":24.015021,"price":"Publiskā pieeja","priceValue":0,"rating":4.7,"reviews":3,"verified":true,"bookable":false,"image":"https://www.visitventspils.com/app/uploads/2024/10/ab2a2882-1-1080x720.jpg","gmaps":"https://www.google.com/maps/search/?api=1&query=Riga+Disc+Golf+Park+Apakšgrāvja+iela+7A+Riga","reviewSource":"google","website":null},{"name":"airBaltic Disc Golf Park Mežaparks","sportKey":"discgolf","sport":"Disku golfs","city":"Rīga","address":"Atpūtas aleja, Rīga","lat":57.00877,"lng":24.156488,"price":"5 €/spēle","priceValue":5,"rating":4.4,"reviews":240,"verified":true,"bookable":false,"image":"https://d22ksth68ujgu2.cloudfront.net/8f12bfbb27c55f454a4e2b84a3f0947c_t_e7uzUZ4XzOsloSu29elG8JSCK0UD.jpg","gmaps":"https://www.google.com/maps/search/?api=1&query=airBaltic+Disc+Golf+Park+Mezaparks+Riga","reviewSource":"google","website":"https://discgolfpark.lv/"},{"name":"UFOGOLF Mežaparks iesācēju laukums","sportKey":"discgolf","sport":"Disku golfs","city":"Rīga","address":"Atpūtas aleja, Rīga","lat":57.00877,"lng":24.156488,"price":"7 €/spēle","priceValue":7,"rating":4.4,"reviews":240,"verified":true,"bookable":false,"image":"https://d22ksth68ujgu2.cloudfront.net/8f12bfbb27c55f454a4e2b84a3f0947c_t_e7uzUZ4XzOsloSu29elG8JSCK0UD.jpg","gmaps":"https://www.google.com/maps/search/?api=1&query=UFOGOLF+Mezaparks+Riga","reviewSource":"google","website":"https://ufogolf.lv/"},{"name":"Zaķusala Disc Golf Park","sportKey":"discgolf","sport":"Disku golfs","city":"Rīga","address":"Zaķusalas krastmala 11, Rīga","lat":56.9301,"lng":24.12695,"price":"5 €/spēle","priceValue":5,"rating":4.5,"reviews":15,"verified":true,"bookable":false,"image":"https://tv3cdn.lv/2024/10/7dc7-67163e21addc3.jpg","gmaps":"https://www.google.com/maps/search/?api=1&query=Zaķusala+Disc+Golf+Park+Riga","reviewSource":"google","website":"https://discgolfpark.lv/"},{"name":"Riekstukalna disku golfa parks","sportKey":"discgolf","sport":"Disku golfs","city":"Baldone","address":"Riekstukalns 3, Baldones pagasts, Ķekavas novads","lat":56.8089,"lng":24.3998,"price":"5 €/spēle","priceValue":5,"rating":4.7,"reviews":1769,"verified":true,"bookable":false,"image":"https://www.visitventspils.com/app/uploads/2024/10/ab2a2882-1-1080x720.jpg","gmaps":"https://www.google.com/maps/search/?api=1&query=Riekstukalna+disku+golfa+parks","reviewSource":"google","website":"https://riekstukalns.lv/"},{"name":"PROPARK Disku golfa parks Baložos","sportKey":"discgolf","sport":"Disku golfs","city":"Baloži","address":"Jaunatnes iela 6, Baloži","lat":56.877337,"lng":24.119274,"price":"Pēc pieprasījuma","priceValue":999,"rating":4.6,"reviews":47,"verified":true,"bookable":false,"image":"https://www.visitventspils.com/app/uploads/2024/10/ab2a2882-1-1080x720.jpg","gmaps":"https://www.google.com/maps/search/?api=1&query=PROPARK+Disku+golfa+parks+Baloži","reviewSource":"google","website":null},{"name":"Ikšķiles disku golfa parks","sportKey":"discgolf","sport":"Disku golfs","city":"Ikšķile","address":"Lībiešu iela 60, Ikšķile","lat":56.83009,"lng":24.50488,"price":"Publiskā pieeja","priceValue":0,"rating":4.9,"reviews":12,"verified":true,"bookable":false,"image":"https://visittukums.kartes.lv/files/img.php?f=1883_0d4b8-xl.jpg","gmaps":"https://www.google.com/maps/search/?api=1&query=Ikšķiles+Disku+Golfa+Parks","reviewSource":"google","website":null},{"name":"Mežavotu disku golfa parks","sportKey":"discgolf","sport":"Disku golfs","city":"Iecava","address":"Priežavotiņi, Iecavas pagasts, Bauskas novads","lat":56.6011,"lng":24.2056,"price":"Pēc pieprasījuma","priceValue":999,"rating":4.5,"reviews":12,"verified":true,"bookable":false,"gmaps":"https://www.google.com/maps/search/?api=1&query=Mežavoti+Disk+golf+park+Iecava","reviewSource":"google","website":null},{"name":"Disku golfa parks Zibeņi","sportKey":"discgolf","sport":"Disku golfs","city":"Ādaži","address":"Timotiņu iela 16, Carnikava, Ādažu novads","lat":57.11538,"lng":24.29299,"price":"Pēc pieprasījuma","priceValue":999,"rating":4.6,"reviews":47,"verified":true,"gmaps":"https://www.google.com/maps/search/?api=1&query=Disku+golfa+parks+Zibeņi","reviewSource":"google","website":null},{"name":"Lēdurgas disku golfa parks","sportKey":"discgolf","sport":"Disku golfs","city":"Lēdurga","address":"Lēdurgas Dendroparks, Lēdurga, Siguldas novads","lat":57.31565,"lng":24.76139,"price":"No iekļauts Dendroparka biļetē","priceValue":10,"rating":4.2,"reviews":41,"verified":true,"bookable":false,"gmaps":"https://www.google.com/maps/search/?api=1&query=Lēdurgas+disku+golfa+parks","reviewSource":"google","website":null},{"name":"LIMBO disku golfa parks","sportKey":"discgolf","sport":"Disku golfs","city":"Limbaži","address":"Lielezera iela 12, Limbaži","lat":57.50283,"lng":24.70465,"price":"Publiskā pieeja","priceValue":0,"rating":4.4,"reviews":217,"verified":true,"bookable":false,"gmaps":"https://www.google.com/maps/search/?api=1&query=LIMBO+disku+golfa+parks","reviewSource":"google","website":null},{"name":"Tukuma disku golfa parks","sportKey":"discgolf","sport":"Disku golfs","city":"Tukums","address":"Gotlandes iela 1, Tukums","lat":56.963629,"lng":23.13306,"price":"Publiskā pieeja","priceValue":0,"rating":5,"reviews":1,"verified":true,"bookable":false,"image":"https://visittukums.kartes.lv/files/img.php?f=1883_0d4b8-xl.jpg","gmaps":"https://www.google.com/maps/search/?api=1&query=Tukuma+Disku+Golfa+parks","reviewSource":"google","website":null},{"name":"Līgatnes disku golfa parks","sportKey":"discgolf","sport":"Disku golfs","city":"Līgatne","address":"Līgatne, Cēsu novads","lat":57.248891,"lng":25.017393,"price":"Publiskā pieeja","priceValue":0,"rating":4.6,"reviews":80,"verified":true,"gmaps":"https://www.google.com/maps/search/?api=1&query=Līgatnes+disku+golfa+parks","reviewSource":"google","website":null},{"name":"Pauku Priedes disku golfa parks","sportKey":"discgolf","sport":"Disku golfs","city":"Valmiera","address":"Ūdens iela 19, Valmiera","lat":57.524834,"lng":25.43961,"price":"Publiskā pieeja","priceValue":0,"rating":4.8,"reviews":51,"verified":true,"image":"https://visit.valmiera.lv/content/uploads/2022/06/diskugolfs-paukupriedes-4.jpg","gmaps":"https://www.google.com/maps/search/?api=1&query=Pauku+Priedes+Valmiera","reviewSource":"google","website":null},{"name":"Ventspils disku golfa parks","sportKey":"discgolf","sport":"Disku golfs","city":"Ventspils","address":"Ventspils","lat":57.388383,"lng":21.527198,"price":"Publiskā pieeja","priceValue":0,"rating":4.6,"reviews":125,"verified":true,"image":"https://www.visitventspils.com/app/uploads/2024/10/ab2a2933-1-1080x720.jpg","gmaps":"https://www.google.com/maps/search/?api=1&query=Ventspils+Disku+Golfa+Parks","reviewSource":"google","website":null},{"name":"Deviņkalnu disku golfa parks","sportKey":"discgolf","sport":"Disku golfs","city":"Talsi","address":"Talsu novads","lat":57.244,"lng":22.59,"price":"Pēc pieprasījuma","priceValue":999,"rating":4.8,"reviews":157,"verified":true,"gmaps":"https://www.google.com/maps/search/?api=1&query=Deviņkalnu+disku+golfa+parks","reviewSource":"google","website":null},{"name":"Lidl Arena","sportKey":"football","sport":"Futbols","city":"Rīga","address":"Kauguru iela 6, Rīga","lat":56.93525,"lng":24.05066,"price":"49-89 €/h","priceValue":49,"rating":4.7,"reviews":393,"verified":true,"bookable":true,"gmaps":"https://www.google.com/maps/search/?api=1&query=Lidl+Arena+Kauguru+iela+6+Riga","reviewSource":"google","website":"https://playtomic.io/"},{"name":"Ghetto Games parks","sportKey":"football","sport":"Futbols","city":"Rīga","address":"Pērnavas iela 42, Rīga","lat":56.95943,"lng":24.15178,"price":"No 20 €/komandai*","priceValue":20,"rating":4.6,"reviews":1322,"verified":true,"bookable":false,"gmaps":"https://www.google.com/maps/search/?api=1&query=Ghetto+Games+Pernavas+iela+42+Riga","reviewSource":"google","website":"https://ghetto.lv/"},{"name":"BTA Daugavas stadions","sportKey":"football","sport":"Futbols","city":"Rīga","address":"Augšiela 1, Rīga","lat":56.95512,"lng":24.15609,"price":"Pēc pieprasījuma","priceValue":999,"rating":4.4,"reviews":2538,"verified":true,"bookable":false,"gmaps":"https://www.google.com/maps/search/?api=1&query=BTA+Daugavas+stadions+Augšiela+1+Riga","reviewSource":"google","website":"https://daugavasstadions.lv/"},{"name":"Olimpiskā Skonto halle","sportKey":"football","sport":"Futbols","city":"Rīga","address":"Emiļa Melngaiļa iela 1A, Rīga","lat":56.96073,"lng":24.11506,"price":"Pēc pieprasījuma","priceValue":999,"rating":4.1,"reviews":565,"verified":true,"bookable":false,"gmaps":"https://www.google.com/maps/search/?api=1&query=Olimpiskā+Skonto+halle+Riga","reviewSource":"google","website":"https://skontohalle.lv/"},{"name":"Global Fitness","sportKey":"fitness","sport":"Fitnesa zāle","city":"Rīga","address":"Tērbatas iela 73, Rīga","lat":56.95945,"lng":24.13305,"price":"Pēc pieprasījuma","priceValue":999,"rating":4.4,"reviews":178,"verified":true,"bookable":false,"gmaps":"https://www.google.com/maps/search/?api=1&query=Global+Fitness+Tērbatas+73+Riga","reviewSource":"google","website":"https://globalfitness.lv/"},{"name":"Kaizen Gym","sportKey":"fitness","sport":"Fitnesa zāle","city":"Rīga","address":"Atlasa iela 8, Rīga","lat":56.98044,"lng":24.1566,"price":"Pēc pieprasījuma","priceValue":999,"rating":5,"reviews":57,"verified":true,"bookable":false,"gmaps":"https://www.google.com/maps/search/?api=1&query=Kaizen+Gym+Atlasa+iela+8+Riga","reviewSource":"google","website":"https://kaizengym.lv/"},{"name":"Ultra Fitness","sportKey":"fitness","sport":"Fitnesa zāle","city":"Rīga","address":"Aleksandra Čaka iela 145, Rīga","lat":56.96451,"lng":24.15178,"price":"Pēc pieprasījuma","priceValue":999,"rating":4.7,"reviews":97,"verified":true,"bookable":false,"gmaps":"https://www.google.com/maps/search/?api=1&query=Ultra+Fitness+Aleksandra+Caka+145+Riga","reviewSource":"google","website":null},{"name":"Gym! Imanta","sportKey":"fitness","sport":"Fitnesa zāle","city":"Rīga","address":"Kurzemes prospekts 3, Rīga","lat":56.956297,"lng":24.036772,"price":"Pēc pieprasījuma","priceValue":999,"rating":4.1,"reviews":258,"verified":true,"bookable":false,"gmaps":"https://www.google.com/maps/search/?api=1&query=Gym+Imanta+Kurzemes+prospekts+3+Riga","reviewSource":"google","website":"https://gymestonia.ee/lv/"},{"name":"Gym! Olimpia","sportKey":"fitness","sport":"Fitnesa zāle","city":"Rīga","address":"Āzenes iela 5, Rīga","lat":56.949767,"lng":24.082386,"price":"Pēc pieprasījuma","priceValue":999,"rating":3.9,"reviews":87,"verified":true,"bookable":false,"gmaps":"https://www.google.com/maps/search/?api=1&query=Gym+Olimpia+Azenes+iela+5+Riga","reviewSource":"google","website":"https://gymestonia.ee/lv/"},{"name":"Capital GYM 24/7 Fitness","sportKey":"fitness","sport":"Fitnesa zāle","city":"Rīga","address":"Spulgas iela 21, Rīga","lat":56.902529,"lng":24.091538,"price":"Pēc pieprasījuma","priceValue":999,"rating":4.4,"reviews":96,"verified":true,"bookable":false,"gmaps":"https://www.google.com/maps/search/?api=1&query=Capital+GYM+24%2F7+Spulgas+21+Riga","reviewSource":"google","website":null},{"name":"Apollons Gym","sportKey":"fitness","sport":"Fitnesa zāle","city":"Rīga","address":"Cēsu iela 20, Rīga","lat":56.965153,"lng":24.140437,"price":"Pēc pieprasījuma","priceValue":999,"rating":5,"reviews":2,"verified":true,"bookable":false,"gmaps":"https://www.google.com/maps/search/?api=1&query=Apollons+Gym+Cesu+iela+20+Riga","reviewSource":"google","website":null},{"name":"Gym! Barons","sportKey":"fitness","sport":"Fitnesa zāle","city":"Rīga","address":"Krišjāņa Barona iela 46, Rīga","lat":56.954092,"lng":24.127682,"price":"Pēc pieprasījuma","priceValue":999,"rating":4,"reviews":112,"verified":true,"bookable":false,"gmaps":"https://www.google.com/maps/search/?api=1&query=Gym+Barons+Riga","reviewSource":"google","website":"https://gymestonia.ee/lv/"},{"name":"Laumu Dabas Parks","sportKey":"discgolf","sport":"Disku golfs","city":"Talsi","address":"Laumas, Īves pagasts, Talsu novads","lat":57.370605,"lng":22.530231,"price":"5 €/pieaugušais","priceValue":5,"rating":4.7,"reviews":107,"verified":true,"bookable":false,"gmaps":"https://www.google.com/maps/search/?api=1&query=Laumu+Dabas+Parks+disku+golfs","reviewSource":"google","website":null},{"name":"Lūša Ķepa","sportKey":"discgolf","sport":"Disku golfs","city":"Jēkabpils","address":"Jēkabpils novads","lat":56.495864,"lng":25.868775,"price":"Publiskā pieeja","priceValue":0,"rating":4.3,"reviews":55,"verified":true,"bookable":false,"gmaps":"https://www.google.com/maps/search/?api=1&query=Lusa+Kepa+Jekabpils","reviewSource":"google","website":null},{"name":"Rezidence Kurzeme disku golfs","sportKey":"discgolf","sport":"Disku golfs","city":"Talsi","address":"Reņģes, Strazdes pagasts, Talsu novads","lat":57.161343,"lng":22.774992,"price":"Pēc pieprasījuma","priceValue":999,"rating":4.4,"reviews":151,"verified":true,"bookable":false,"gmaps":"https://www.google.com/maps/search/?api=1&query=Rezidence+Kurzeme+Strazde","reviewSource":"google","website":null},{"name":"Rīgas Hanzas vidusskolas futbola stadions","sportKey":"football","sport":"Futbols","city":"Rīga","address":"Grostonas iela 5, Rīga","lat":56.965622,"lng":24.120058,"price":"Pēc pieprasījuma","priceValue":999,"rating":4.7,"reviews":172,"verified":true,"bookable":false,"gmaps":"https://www.google.com/maps/search/?api=1&query=Rigas+Hanzas+vidusskolas+futbola+stadions","website":null,"reviewSource":"google"},{"name":"Stadions Daugava Liepāja","sportKey":"football","sport":"Futbols","city":"Liepāja","address":"Jūrmalas parks, Liepāja","lat":56.50697,"lng":20.994191,"price":"Pēc pieprasījuma","priceValue":999,"rating":4.5,"reviews":531,"verified":true,"bookable":false,"gmaps":"https://www.google.com/maps/search/?api=1&query=Stadions+Daugava+Liepaja","reviewSource":"google","website":null},{"name":"Daugavas rezerves stadions","sportKey":"football","sport":"Futbols","city":"Liepāja","address":"Jūrmalas parks 4, Liepāja","lat":56.500806,"lng":20.995693,"price":"Publiskā pieeja","priceValue":0,"rating":4.6,"reviews":133,"verified":true,"bookable":false,"gmaps":"https://www.google.com/maps/search/?api=1&query=Daugavas+rezerves+stadions+Liepaja","website":null,"reviewSource":"google"},{"name":"Daugavpils futbola halle","sportKey":"football","sport":"Futbols","city":"Daugavpils","address":"Draudzīgā aicinājuma vidusskolas stadions, Daugavpils","lat":55.8832,"lng":26.5236,"price":"Pēc pieprasījuma","priceValue":999,"rating":4.9,"reviews":108,"verified":true,"bookable":false,"gmaps":"https://www.google.com/maps/search/?api=1&query=Daugavpils+futbola+halle","website":null,"reviewSource":"google"},{"name":"FitSpot Gym Zemitāna","sportKey":"fitness","sport":"Fitnesa zāle","city":"Rīga","address":"Zemitāna iela 9k3, Rīga","lat":56.966059,"lng":24.154242,"price":"No 23,90 €/mēn.","priceValue":23.9,"rating":4.8,"reviews":45,"verified":true,"bookable":false,"gmaps":"https://www.google.com/maps/search/?api=1&query=FitSpot+Gym+Zemitana+Riga","website":null,"reviewSource":"google"},{"name":"FitSpot Wellness & Spa","sportKey":"fitness","sport":"Fitnesa zāle","city":"Rīga","address":"Elijas iela 17A, Rīga","lat":56.941189,"lng":24.127288,"price":"No 23,90 €/mēn.","priceValue":23.9,"rating":4.7,"reviews":96,"verified":true,"bookable":false,"gmaps":"https://www.google.com/maps/search/?api=1&query=FitSpot+Wellness+Spa+Elijas+17A","website":null,"reviewSource":"google"},{"name":"FitSpot Gym Vecmīlgrāvis","sportKey":"fitness","sport":"Fitnesa zāle","city":"Rīga","address":"Augusta Dombrovska iela 26, Rīga","lat":57.031574,"lng":24.111171,"price":"No 18,90 €/mēn.","priceValue":18.9,"rating":4.6,"reviews":147,"verified":true,"bookable":false,"gmaps":"https://www.google.com/maps/search/?api=1&query=FitSpot+Gym+Vecmilgravis","website":null,"reviewSource":"google"},{"name":"FitSpot Gym Jelgava","sportKey":"fitness","sport":"Fitnesa zāle","city":"Jelgava","address":"Krišjāņa Barona iela 40A, Jelgava","lat":56.651983,"lng":23.717894,"price":"No 23,90 €/mēn.","priceValue":23.9,"rating":4.6,"reviews":65,"verified":true,"bookable":false,"gmaps":"https://www.google.com/maps/search/?api=1&query=FitSpot+Gym+Jelgava+Krisjana+Barona+40A","website":null,"reviewSource":"google"},{"name":"LEMON GYM Ziepniekkalns","sportKey":"fitness","sport":"Fitnesa zāle","city":"Rīga","address":"Valdeķu iela 39, Rīga","lat":56.907558,"lng":24.094047,"price":"Pēc pieprasījuma","priceValue":999,"rating":4.9,"reviews":154,"verified":true,"bookable":false,"gmaps":"https://www.google.com/maps/search/?api=1&query=LEMON+GYM+Ziepniekkalns","website":"https://lemongym.lv/","reviewSource":"google"},{"name":"Zemgales Olimpiskais centrs","sportKey":"football","sport":"Futbols","city":"Jelgava","address":"Kronvalda iela 24, Jelgava","lat":56.661429,"lng":23.754304,"price":"Pēc pieprasījuma","priceValue":999,"rating":4.6,"reviews":243,"verified":true,"bookable":false,"website":"https://zoc.lv/","gmaps":"https://www.google.com/maps/search/?api=1&query=Zemgales+Olimpiskais+centrs+Kronvalda+24+Jelgava","image":"https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=800&q=80","reviewSource":"google"},{"name":"Jelgavas sporta halle","sportKey":"basketball","sport":"Basketbols","city":"Jelgava","address":"Mātera iela 44A, Jelgava","lat":56.64371,"lng":23.721915,"price":"Pēc pieprasījuma","priceValue":999,"rating":4.7,"reviews":142,"verified":true,"bookable":false,"website":"https://www.jelgava.lv/","gmaps":"https://www.google.com/maps/search/?api=1&query=Jelgavas+sporta+halle+Mātera+44A+Jelgava","image":"https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=800&q=80","reviewSource":"google"},{"name":"Jūrmalas pludmales sporta centrs","sportKey":"volleyball","sport":"Pludmales volejbols","city":"Jūrmala","address":"Emelīnas iela-Pūpolu iela, Majori, Jūrmala","lat":56.9755306,"lng":23.7914497,"price":"No 15 €/h","priceValue":15,"rating":4.7,"reviews":52,"verified":true,"bookable":true,"website":"https://www.visitjurmala.lv/","gmaps":"https://www.google.com/maps/search/?api=1&query=Jūrmalas+pludmales+sporta+centrs","reviewSource":"google"},{"name":"Jūrmalas peldbaseins","sportKey":"swimming","sport":"Peldēšana","city":"Jūrmala","address":"Rūpniecības iela 13, Kauguri, Jūrmala","lat":56.9571349,"lng":23.6225232,"price":"No 6 €/apmeklējums","priceValue":6,"rating":4.5,"reviews":88,"verified":true,"bookable":false,"website":"https://www.visitjurmala.lv/","gmaps":"https://www.google.com/maps/search/?api=1&query=Jūrmalas+peldbaseins+Rūpniecības+13","reviewSource":"google"},{"name":"Daugavpils Olimpiskais centrs","sportKey":"swimming","sport":"Peldēšana","city":"Daugavpils","address":"Stadiona iela 1, Daugavpils","lat":55.87876,"lng":26.51543,"price":"Pēc pieprasījuma","priceValue":999,"rating":4.8,"reviews":113,"verified":true,"bookable":false,"website":"https://www.daugavpils.lv/","gmaps":"https://www.google.com/maps/search/?api=1&query=Daugavpils+Olimpiskais+centrs+Stadiona+1","reviewSource":"google"},{"name":"LOC Baseins & SPA","sportKey":"swimming","sport":"Peldēšana","city":"Liepāja","address":"Brīvības iela 39, Liepāja","lat":56.51861,"lng":21.01726,"price":"Pēc pieprasījuma","priceValue":999,"rating":4.9,"reviews":118,"verified":true,"bookable":false,"website":"https://loc.lv/","gmaps":"https://www.google.com/maps/search/?api=1&query=LOC+Baseins+SPA+Brīvības+39+Liepāja","reviewSource":"google"},{"name":"Ventspils peldbaseins","sportKey":"swimming","sport":"Peldēšana","city":"Ventspils","address":"Lauku iela 5, Ventspils","lat":57.393509,"lng":21.570768,"price":"Pēc pieprasījuma","priceValue":999,"rating":4.6,"reviews":207,"verified":true,"bookable":false,"website":"https://www.ocventspils.lv/","gmaps":"https://www.google.com/maps/search/?api=1&query=Ventspils+peldbaseins+Lauku+5","reviewSource":"google"},{"name":"Valmieras peldbaseins","sportKey":"swimming","sport":"Peldēšana","city":"Valmiera","address":"Čempionu iela 4, Valmiera","lat":57.528069,"lng":25.388043,"price":"Pēc pieprasījuma","priceValue":999,"rating":4.7,"reviews":220,"verified":true,"bookable":false,"website":"https://voc.lv/","gmaps":"https://www.google.com/maps/search/?api=1&query=Valmieras+peldbaseins+Čempionu+4","image":"https://images.unsplash.com/photo-1519315901367-f34ff9154487?auto=format&fit=crop&w=800&q=80","reviewSource":"google"},{"name":"Olimpiskais centrs Rēzekne, hokeja halle","sportKey":"hockey","sport":"Hokejs","city":"Rēzekne","address":"Stacijas iela 30, Rēzekne","lat":56.51433,"lng":27.352,"price":"Pēc pieprasījuma","priceValue":999,"rating":4.7,"reviews":154,"verified":true,"bookable":false,"website":"https://ocr.lv/","gmaps":"https://www.google.com/maps/search/?api=1&query=Olimpiskais+centrs+Rēzekne+Stacijas+30","reviewSource":"google"},{"name":"Olimpiskais centrs Rēzekne, futbola laukums","sportKey":"football","sport":"Futbols","city":"Rēzekne","address":"Stacijas iela 30, Rēzekne","lat":56.51433,"lng":27.352,"price":"Pēc pieprasījuma","priceValue":999,"rating":4.5,"reviews":224,"verified":true,"bookable":false,"website":"https://ocr.lv/","gmaps":"https://www.google.com/maps/search/?api=1&query=Olimpiskais+centrs+Rēzekne+futbola+laukums","reviewSource":"google"},{"name":"Olimpiskais centrs Rēzekne, āra peldbaseins","sportKey":"swimming","sport":"Peldēšana","city":"Rēzekne","address":"Stacijas iela 30, Rēzekne","lat":56.51433,"lng":27.352,"price":"Pēc pieprasījuma","priceValue":999,"rating":4.6,"reviews":237,"verified":true,"bookable":false,"website":"https://ocr.lv/","gmaps":"https://www.google.com/maps/search/?api=1&query=Rēzeknes+āra+peldbaseins","reviewSource":"google"},{"name":"Jēkabpils Sporta halle","sportKey":"basketball","sport":"Basketbols","city":"Jēkabpils","address":"Brīvības iela 289B, Jēkabpils","lat":56.49865,"lng":25.84115,"price":"Pēc pieprasījuma","priceValue":999,"rating":4.4,"reviews":71,"verified":true,"bookable":false,"website":"https://www.jekabpilssc.lv/","gmaps":"https://www.google.com/maps/search/?api=1&query=Jēkabpils+Sporta+halle+Brīvības+289B","reviewSource":"google"},{"name":"Jēkabpils Ledus halle","sportKey":"hockey","sport":"Hokejs","city":"Jēkabpils","address":"Brīvības iela 289B, Jēkabpils","lat":56.49865,"lng":25.84115,"price":"Pēc pieprasījuma","priceValue":999,"rating":4.6,"reviews":65,"verified":true,"bookable":false,"website":"https://www.jekabpilssc.lv/","gmaps":"https://www.google.com/maps/search/?api=1&query=Jēkabpils+Ledus+halle","reviewSource":"google"},{"name":"Jēkabpils stadions","sportKey":"running","sport":"Vieglatlētika","city":"Jēkabpils","address":"Brīvības iela 289, Jēkabpils","lat":56.49865,"lng":25.84115,"price":"Pēc pieprasījuma","priceValue":999,"rating":4.4,"reviews":241,"verified":true,"bookable":false,"website":"https://www.jekabpilssc.lv/","gmaps":"https://www.google.com/maps/search/?api=1&query=Jēkabpils+stadions+Brīvības+289","reviewSource":"google"},{"name":"Ogres peldbaseins “Neptūns”","sportKey":"swimming","sport":"Peldēšana","city":"Ogre","address":"Meža prospekts 9, Ogre","lat":56.82192,"lng":24.60086,"price":"Pēc pieprasījuma","priceValue":999,"rating":4.8,"reviews":205,"verified":true,"bookable":false,"website":"https://ogressportacentrs.lv/","gmaps":"https://www.google.com/maps/search/?api=1&query=Ogres+peldbaseins+Neptūns+Meža+9","reviewSource":"google"},{"name":"ONSC stadions","sportKey":"football","sport":"Futbols","city":"Ogre","address":"Ogre, Ogres novads","lat":56.815768,"lng":24.602044,"price":"Pēc pieprasījuma","priceValue":999,"rating":4.5,"reviews":172,"verified":true,"bookable":false,"website":"https://ogressportacentrs.lv/","gmaps":"https://www.google.com/maps/search/?api=1&query=Ogres+novada+stadions","reviewSource":"google"},{"name":"Ogres Zilie kalni, sporta un aktīvās atpūtas zona","sportKey":"cycling","sport":"Velosports","city":"Ogre","address":"Ogres Zilie kalni, Ogre","lat":56.825168,"lng":24.598209,"price":"Publiskā pieeja","priceValue":0,"rating":4.6,"reviews":209,"verified":true,"bookable":false,"website":"https://www.visitogre.lv/lv/dodies-daba/70/ogres-zilie-kalni-dabas-parks","gmaps":"https://www.google.com/maps/search/?api=1&query=Ogres+Zilie+kalni","reviewSource":"google"},{"name":"Siguldas sporta centrs, peldbaseins","sportKey":"swimming","sport":"Peldēšana","city":"Sigulda","address":"Ata Kronvalda iela 7A, Sigulda","lat":57.1591628,"lng":24.8593775,"price":"Pēc pieprasījuma","priceValue":null,"rating":4.9,"reviews":176,"verified":true,"bookable":false,"website":"https://siguldassports.lv/","gmaps":"https://www.google.com/maps/search/?api=1&query=Siguldas+sporta+centrs+peldbaseins+Ata+Kronvalda+iela+7A,+Sigulda","reviewSource":"google"},{"name":"Siguldas pilsētas stadions","sportKey":"football","sport":"Futbols","city":"Sigulda","address":"Ata Kronvalda iela 7, Sigulda","lat":57.1589,"lng":24.8585,"price":"Publiskā pieeja","priceValue":null,"rating":4.7,"reviews":238,"verified":true,"bookable":false,"website":null,"gmaps":"https://www.google.com/maps/search/?api=1&query=Siguldas+pilsētas+stadions+Ata+Kronvalda+iela+7,+Sigulda","reviewSource":"google"},{"name":"Depo sporta laukums","sportKey":"volleyball","sport":"Volejbols","city":"Sigulda","address":"Depo iela 3, Sigulda","lat":57.149963,"lng":24.86249,"price":"Publiskā pieeja","priceValue":null,"rating":4.9,"reviews":118,"verified":true,"bookable":false,"website":null,"gmaps":"https://www.google.com/maps/search/?api=1&query=Depo+sporta+laukums+Depo+iela+3,+Sigulda","reviewSource":"google"},{"name":"Raiņa parka basketbola laukums un velotrase","sportKey":"basketball","sport":"Basketbols","city":"Sigulda","address":"Raiņa parks, Sigulda","lat":57.156689,"lng":24.855706,"price":"Publiskā pieeja","priceValue":null,"rating":4.4,"reviews":147,"verified":true,"bookable":false,"website":null,"gmaps":"https://www.google.com/maps/search/?api=1&query=Raiņa+parka+basketbola+laukums+un+velotrase+Raiņa+parks,+Sigulda","reviewSource":"google"},{"name":"Salaspils Sporta nams","sportKey":"basketball","sport":"Basketbols","city":"Salaspils","address":"Smilšu iela 1, Salaspils","lat":56.85902,"lng":24.33445,"price":"Pēc pieprasījuma","priceValue":null,"rating":4.9,"reviews":182,"verified":true,"bookable":false,"website":"https://salaspilssporto.lv/","gmaps":"https://www.google.com/maps/search/?api=1&query=Salaspils+Sporta+nams+Smilšu+iela+1,+Salaspils","reviewSource":"google"},{"name":"Salaspils stadions","sportKey":"running","sport":"Skriešana","city":"Salaspils","address":"Rudzu iela 2, Salaspils","lat":56.85795,"lng":24.33745,"price":"Publiskā pieeja","priceValue":null,"rating":4.7,"reviews":138,"verified":true,"bookable":false,"website":null,"gmaps":"https://www.google.com/maps/search/?api=1&query=Salaspils+stadions+Rudzu+iela+2,+Salaspils","reviewSource":"google"},{"name":"Salaspils peldbaseins","sportKey":"swimming","sport":"Peldēšana","city":"Salaspils","address":"Ceru iela 1, Salaspils","lat":56.8565,"lng":24.3358,"price":"Pēc pieprasījuma","priceValue":null,"rating":4.5,"reviews":208,"verified":true,"bookable":false,"website":"https://salaspilssporto.lv/","gmaps":"https://www.google.com/maps/search/?api=1&query=Salaspils+peldbaseins+Ceru+iela+1,+Salaspils","reviewSource":"google"},{"name":"Līvzemes ielas basketbola laukums","sportKey":"basketball","sport":"Basketbols","city":"Salaspils","address":"Līvzemes iela 26, Salaspils","lat":56.855356,"lng":24.35293,"price":"Publiskā pieeja","priceValue":null,"rating":4.6,"reviews":229,"verified":true,"bookable":false,"website":null,"gmaps":"https://www.google.com/maps/search/?api=1&query=Līvzemes+ielas+basketbola+laukums+Līvzemes+iela+26,+Salaspils","reviewSource":"google"},{"name":"Ādažu vidusskolas stadions","sportKey":"football","sport":"Futbols","city":"Ādaži","address":"Gaujas iela 30, Ādaži","lat":57.079092,"lng":24.339346,"price":"Publiskā pieeja","priceValue":null,"rating":4.8,"reviews":109,"verified":true,"bookable":false,"website":null,"gmaps":"https://www.google.com/maps/search/?api=1&query=Ādažu+vidusskolas+stadions+Gaujas+iela+30,+Ādaži","reviewSource":"google"},{"name":"Ādažu multifunkcionālais sporta laukums","sportKey":"basketball","sport":"Basketbols","city":"Ādaži","address":"Gaujas iela 25B, Ādaži","lat":57.080095,"lng":24.32707,"price":"Publiskā pieeja","priceValue":null,"rating":4.8,"reviews":149,"verified":true,"bookable":false,"website":null,"gmaps":"https://www.google.com/maps/search/?api=1&query=Ādažu+multifunkcionālais+sporta+laukums+Gaujas+iela+25B,+Ādaži","reviewSource":"google"},{"name":"Ādažu multifunkcionālā velotrase","sportKey":"cycling","sport":"Velobraukšana","city":"Ādaži","address":"Attekas iela 41, Ādaži","lat":57.078895,"lng":24.324565,"price":"Publiskā pieeja","priceValue":null,"rating":4.4,"reviews":249,"verified":true,"bookable":false,"website":null,"gmaps":"https://www.google.com/maps/search/?api=1&query=Ādažu+multifunkcionālā+velotrase+Attekas+iela+41,+Ādaži","reviewSource":"google"},{"name":"Tīraines sporta komplekss","sportKey":"volleyball","sport":"Volejbols","city":"Mārupe","address":"Viskalnu iela 7, Mārupe","lat":56.9036,"lng":24.0747,"price":"Pēc pieprasījuma","priceValue":null,"rating":4.6,"reviews":129,"verified":true,"bookable":false,"website":"https://www.marupe.lv/","gmaps":"https://www.google.com/maps/search/?api=1&query=Tīraines+sporta+komplekss+Viskalnu+iela+7,+Mārupe","reviewSource":"google"},{"name":"Gerberu ielas sporta laukums","sportKey":"fitness","sport":"Fitness","city":"Mārupe","address":"Gerberu iela 1, Mārupe","lat":56.89694,"lng":24.04465,"price":"Publiskā pieeja","priceValue":null,"rating":4.4,"reviews":199,"verified":true,"bookable":false,"website":null,"gmaps":"https://www.google.com/maps/search/?api=1&query=Gerberu+ielas+sporta+laukums+Gerberu+iela+1,+Mārupe","reviewSource":"google"},{"name":"Jaunmārupes stadions","sportKey":"football","sport":"Futbols","city":"Mārupe","address":"Īvju iela 5, Jaunmārupe","lat":56.87835,"lng":23.93702,"price":"Publiskā pieeja","priceValue":null,"rating":4.7,"reviews":60,"verified":true,"bookable":false,"website":null,"gmaps":"https://www.google.com/maps/search/?api=1&query=Jaunmārupes+stadions+Īvju+iela+5,+Jaunmārupe","reviewSource":"google"},{"name":"Dobeles sporta centrs","sportKey":"fitness","sport":"Fitness","city":"Dobele","address":"Tērvetes iela 10, Dobele","lat":56.620792,"lng":23.269999,"price":"Pēc pieprasījuma","priceValue":null,"rating":4.7,"reviews":92,"verified":true,"bookable":false,"website":"https://www.dobele.lv/","gmaps":"https://www.google.com/maps/search/?api=1&query=Dobeles+sporta+centrs+Tērvetes+iela+10,+Dobele","reviewSource":"google"},{"name":"Dobeles stadiona multifunkcionālais laukums","sportKey":"basketball","sport":"Basketbols","city":"Dobele","address":"Tērvetes iela 10, Dobele","lat":56.6213,"lng":23.271,"price":"Publiskā pieeja","priceValue":null,"rating":4.4,"reviews":83,"verified":true,"bookable":false,"website":null,"gmaps":"https://www.google.com/maps/search/?api=1&query=Dobeles+stadiona+multifunkcionālais+laukums+Tērvetes+iela+10,+Dobele","reviewSource":"google"},{"name":"Dobeles 1. vidusskolas peldbaseins","sportKey":"swimming","sport":"Peldēšana","city":"Dobele","address":"Brīvības iela 15, Dobele","lat":56.625697,"lng":23.280627,"price":"Pēc pieprasījuma","priceValue":null,"rating":4.8,"reviews":145,"verified":true,"bookable":false,"website":"https://www.dobele.lv/","gmaps":"https://www.google.com/maps/search/?api=1&query=Dobeles+1.+vidusskolas+peldbaseins+Brīvības+iela+15,+Dobele","reviewSource":"google"},{"name":"Dobeles stadionā, vieglatlētikas trase","sportKey":"running","sport":"Skriešana","city":"Dobele","address":"Tērvetes iela 1, Dobele","lat":56.620218,"lng":23.273146,"price":"Publiskā pieeja","priceValue":null,"rating":4.5,"reviews":234,"verified":true,"bookable":false,"website":null,"gmaps":"https://www.google.com/maps/search/?api=1&query=Dobeles+stadionā+vieglatlētikas+trase+Tērvetes+iela+1,+Dobele","reviewSource":"google"},{"name":"Gulbenes stadions","sportKey":"football","sport":"Futbols","city":"Gulbene","address":"Oskara Kalpaka iela 1A, Gulbene","lat":57.165875,"lng":26.763801,"price":"Pēc pieprasījuma","priceValue":null,"rating":4.9,"reviews":68,"verified":true,"bookable":false,"website":"https://www.gulbenesdome.lv/","gmaps":"https://www.google.com/maps/search/?api=1&query=Gulbenes+stadions+Oskara+Kalpaka+iela+1A,+Gulbene","reviewSource":"google"},{"name":"Gulbenes stadions, pludmales volejbola laukumi","sportKey":"volleyball","sport":"Volejbols","city":"Gulbene","address":"Oskara Kalpaka iela 1A, Gulbene","lat":57.165875,"lng":26.763801,"price":"Pēc pieprasījuma","priceValue":null,"rating":4.5,"reviews":192,"verified":true,"bookable":false,"website":null,"gmaps":"https://www.google.com/maps/search/?api=1&query=Gulbenes+stadions+pludmales+volejbola+laukumi+Oskara+Kalpaka+iela+1A,+Gulbene","reviewSource":"google"},{"name":"Gulbenes Sporta centrs","sportKey":"basketball","sport":"Basketbols","city":"Gulbene","address":"Skolas iela 12A, Gulbene","lat":57.172252,"lng":26.766979,"price":"Pēc pieprasījuma","priceValue":null,"rating":4.6,"reviews":189,"verified":true,"bookable":false,"website":"https://www.gulbenesdome.lv/","gmaps":"https://www.google.com/maps/search/?api=1&query=Gulbenes+Sporta+centrs+Skolas+iela+12A,+Gulbene","reviewSource":"google"},{"name":"Gulbenes Sporta centra stadions","sportKey":"running","sport":"Skriešana","city":"Gulbene","address":"Skolas iela 12A, Gulbene","lat":57.172252,"lng":26.766979,"price":"Publiskā pieeja","priceValue":null,"rating":4.4,"reviews":153,"verified":true,"bookable":false,"website":null,"gmaps":"https://www.google.com/maps/search/?api=1&query=Gulbenes+Sporta+centra+stadions+Skolas+iela+12A,+Gulbene","reviewSource":"google"},{"name":"Sporta un atpūtas komplekss “Teperis”, stadions","sportKey":"football","sport":"Futbols","city":"Smiltene","address":"Dakteru iela 2A, Smiltene","lat":57.429241,"lng":25.921121,"price":"Pēc pieprasījuma","priceValue":null,"rating":4.7,"reviews":250,"verified":true,"bookable":false,"website":"https://www.smiltene.lv/","gmaps":"https://www.google.com/maps/search/?api=1&query=Sporta+un+atpūtas+komplekss+“Teperis”+stadions+Dakteru+iela+2A,+Smiltene","reviewSource":"google"},{"name":"“Teperis” tenisa laukumi","sportKey":"tennis","sport":"Teniss","city":"Smiltene","address":"Dakteru iela 2A, Smiltene","lat":57.429241,"lng":25.921121,"price":"Pēc pieprasījuma","priceValue":null,"rating":4.7,"reviews":46,"verified":true,"bookable":false,"website":"https://www.smiltene.lv/","gmaps":"https://www.google.com/maps/search/?api=1&query=“Teperis”+tenisa+laukumi+Dakteru+iela+2A,+Smiltene","reviewSource":"google"},{"name":"“Teperis” pludmales volejbola laukumi","sportKey":"volleyball","sport":"Volejbols","city":"Smiltene","address":"Dakteru iela 2A, Smiltene","lat":57.429241,"lng":25.921121,"price":"Pēc pieprasījuma","priceValue":null,"rating":4.7,"reviews":86,"verified":true,"bookable":false,"website":null,"gmaps":"https://www.google.com/maps/search/?api=1&query=“Teperis”+pludmales+volejbola+laukumi+Dakteru+iela+2A,+Smiltene","reviewSource":"google"},{"name":"Diska golfa laukums “Abuls”","sportKey":"discgolf","sport":"Diska golfs","city":"Smiltene","address":"Jaunais parks, Smiltene","lat":57.428413,"lng":25.903209,"price":"Publiskā pieeja","priceValue":null,"rating":4.6,"reviews":129,"verified":true,"bookable":false,"website":null,"gmaps":"https://www.google.com/maps/search/?api=1&query=Diska+golfa+laukums+“Abuls”+Jaunais+parks,+Smiltene","reviewSource":"google"},{"name":"Alūksnes Sporta centrs","sportKey":"basketball","sport":"Basketbols","city":"Alūksne","address":"Jāņkalna iela 17A, Alūksne","lat":57.42318,"lng":27.04139,"price":"Pēc pieprasījuma","priceValue":null,"rating":4.6,"reviews":47,"verified":true,"bookable":false,"website":"https://www.aluksne.lv/","gmaps":"https://www.google.com/maps/search/?api=1&query=Alūksnes+Sporta+centrs+Jāņkalna+iela+17A,+Alūksne","reviewSource":"google"},{"name":"Pilssalas stadions","sportKey":"running","sport":"Skriešana","city":"Alūksne","address":"Pilssala, Alūksne","lat":57.42978,"lng":27.05383,"price":"Publiskā pieeja","priceValue":null,"rating":4.5,"reviews":204,"verified":true,"bookable":false,"website":null,"gmaps":"https://www.google.com/maps/search/?api=1&query=Pilssalas+stadions+Pilssala,+Alūksne","reviewSource":"google"},{"name":"Pilssalas pludmales volejbola laukumi","sportKey":"volleyball","sport":"Volejbols","city":"Alūksne","address":"Pilssala, Alūksne","lat":57.429224,"lng":27.054304,"price":"Publiskā pieeja","priceValue":null,"rating":4.5,"reviews":138,"verified":true,"bookable":false,"website":null,"gmaps":"https://www.google.com/maps/search/?api=1&query=Pilssalas+pludmales+volejbola+laukumi+Pilssala,+Alūksne","reviewSource":"google"},{"name":"Pilssalas futbola laukums","sportKey":"football","sport":"Futbols","city":"Alūksne","address":"Pilssala, Alūksne","lat":57.429224,"lng":27.054304,"price":"Publiskā pieeja","priceValue":null,"rating":4.6,"reviews":143,"verified":true,"bookable":false,"website":null,"gmaps":"https://www.google.com/maps/search/?api=1&query=Pilssalas+futbola+laukums+Pilssala,+Alūksne","reviewSource":"google"},{"name":"Valkas pilsētas stadions","sportKey":"football","sport":"Futbols","city":"Valka","address":"Rīgas iela 41, Valka","lat":57.768531,"lng":26.014323,"price":"Pēc pieprasījuma","priceValue":null,"rating":4.8,"reviews":137,"verified":true,"bookable":false,"website":"https://www.valka.lv/","gmaps":"https://www.google.com/maps/search/?api=1&query=Valkas+pilsētas+stadions+Rīgas+iela+41,+Valka","reviewSource":"google"},{"name":"Valkas Jāņa Cimzes ģimnāzijas sporta halle","sportKey":"basketball","sport":"Basketbols","city":"Valka","address":"Raiņa iela 28A, Valka","lat":57.77455,"lng":26.014685,"price":"Pēc pieprasījuma","priceValue":null,"rating":4.9,"reviews":52,"verified":true,"bookable":false,"website":"https://www.valka.lv/","gmaps":"https://www.google.com/maps/search/?api=1&query=Valkas+Jāņa+Cimzes+ģimnāzijas+sporta+halle+Raiņa+iela+28A,+Valka","reviewSource":"google"},{"name":"Valkas Meža parka disku golfa laukums","sportKey":"discgolf","sport":"Diska golfs","city":"Valka","address":"Meža parks, Valka","lat":57.787887,"lng":25.993806,"price":"Publiskā pieeja","priceValue":null,"rating":4.9,"reviews":190,"verified":true,"bookable":false,"website":null,"gmaps":"https://www.google.com/maps/search/?api=1&query=Valkas+Meža+parka+disku+golfa+laukums+Meža+parks,+Valka","reviewSource":"google"},{"name":"Valkas pilsētas stadions, vieglatlētikas trase","sportKey":"running","sport":"Skriešana","city":"Valka","address":"Rīgas iela 41, Valka","lat":57.768531,"lng":26.014323,"price":"Pēc pieprasījuma","priceValue":null,"rating":4.7,"reviews":154,"verified":true,"bookable":false,"website":null,"gmaps":"https://www.google.com/maps/search/?api=1&query=Valkas+pilsētas+stadions+vieglatlētikas+trase+Rīgas+iela+41,+Valka","reviewSource":"google"},{"name":"Saulkrastu sporta centrs","sportKey":"basketball","sport":"Basketbols","city":"Saulkrasti","address":"Smilšu iela 3, Saulkrasti","lat":57.261017,"lng":24.417532,"price":"Pēc pieprasījuma","priceValue":null,"rating":4.6,"reviews":189,"verified":true,"bookable":false,"website":"https://saulkrasti.lv/","gmaps":"https://www.google.com/maps/search/?api=1&query=Saulkrastu+sporta+centrs+Smilšu+iela+3,+Saulkrasti","reviewSource":"google"},{"name":"Saulkrastu Jūras parka pludmales volejbola laukumi","sportKey":"volleyball","sport":"Volejbols","city":"Saulkrasti","address":"Jūras parks, Saulkrasti","lat":57.266896,"lng":24.411964,"price":"Publiskā pieeja","priceValue":null,"rating":4.5,"reviews":36,"verified":true,"bookable":false,"website":null,"gmaps":"https://www.google.com/maps/search/?api=1&query=Saulkrastu+Jūras+parka+pludmales+volejbola+laukumi+Jūras+parks,+Saulkrasti","reviewSource":"google"},{"name":"Saulkrastu tenisa korti","sportKey":"tennis","sport":"Teniss","city":"Saulkrasti","address":"Skolas iela 10, Saulkrasti","lat":57.257536,"lng":24.419435,"price":"Pēc pieprasījuma","priceValue":null,"rating":4.9,"reviews":196,"verified":true,"bookable":false,"website":null,"gmaps":"https://www.google.com/maps/search/?api=1&query=Saulkrastu+tenisa+korti+Skolas+iela+10,+Saulkrasti","reviewSource":"google"},{"name":"Saulkrastu velotrase","sportKey":"cycling","sport":"Velobraukšana","city":"Saulkrasti","address":"Saulkrasti","lat":57.269405,"lng":24.426851,"price":"Publiskā pieeja","priceValue":null,"rating":4.7,"reviews":152,"verified":true,"bookable":false,"website":null,"gmaps":"https://www.google.com/maps/search/?api=1&query=Saulkrastu+velotrase+Saulkrasti","reviewSource":"google"},{"name":"Aizkraukles sporta centrs","sportKey":"fitness","sport":"Fitness","city":"Aizkraukle","address":"Draudzības krastmala 6, Aizkraukle","lat":56.598026,"lng":25.254979,"price":"Pēc pieprasījuma","priceValue":null,"rating":4.9,"reviews":40,"verified":true,"bookable":false,"website":"https://www.aizkraukle.lv/","gmaps":"https://www.google.com/maps/search/?api=1&query=Aizkraukles+sporta+centrs+Draudzības+krastmala+6,+Aizkraukle","reviewSource":"google"},{"name":"Aizkraukles pilsētas stadions","sportKey":"football","sport":"Futbols","city":"Aizkraukle","address":"Draudzības krastmala 6, Aizkraukle","lat":56.598026,"lng":25.254979,"price":"Publiskā pieeja","priceValue":null,"rating":4.6,"reviews":129,"verified":true,"bookable":false,"website":null,"gmaps":"https://www.google.com/maps/search/?api=1&query=Aizkraukles+pilsētas+stadions+Draudzības+krastmala+6,+Aizkraukle","reviewSource":"google"},{"name":"Aizkraukles pilsētas stadions, basketbola laukums","sportKey":"basketball","sport":"Basketbols","city":"Aizkraukle","address":"Draudzības krastmala 6, Aizkraukle","lat":56.598026,"lng":25.254979,"price":"Publiskā pieeja","priceValue":null,"rating":4.5,"reviews":82,"verified":true,"bookable":false,"website":null,"gmaps":"https://www.google.com/maps/search/?api=1&query=Aizkraukles+pilsētas+stadions+basketbola+laukums+Draudzības+krastmala+6,+Aizkraukle","reviewSource":"google"},{"name":"Aizkraukles pilsētas stadions, pludmales volejbola laukums","sportKey":"volleyball","sport":"Volejbols","city":"Aizkraukle","address":"Draudzības krastmala 6, Aizkraukle","lat":56.598026,"lng":25.254979,"price":"Publiskā pieeja","priceValue":null,"rating":4.9,"reviews":46,"verified":true,"bookable":false,"website":null,"gmaps":"https://www.google.com/maps/search/?api=1&query=Aizkraukles+pilsētas+stadions+pludmales+volejbola+laukums+Draudzības+krastmala+6,+Aizkraukle","reviewSource":"google"},{"name":"Bauskas pilsētas stadions","sportKey":"football","sport":"Futbols","city":"Bauska","address":"Pilskalna iela 26, Bauska","lat":56.40176,"lng":24.18666,"price":"Pēc pieprasījuma","priceValue":null,"rating":4.7,"reviews":92,"verified":true,"bookable":false,"website":"https://www.bauska.lv/","gmaps":"https://www.google.com/maps/search/?api=1&query=Bauskas+pilsētas+stadions+Pilskalna+iela+26,+Bauska","reviewSource":"google"},{"name":"Bauskas BJSS sporta halle","sportKey":"basketball","sport":"Basketbols","city":"Bauska","address":"Pilskalna iela 26, Bauska","lat":56.40176,"lng":24.18666,"price":"Pēc pieprasījuma","priceValue":null,"rating":4.8,"reviews":105,"verified":true,"bookable":false,"website":"https://www.bauska.lv/","gmaps":"https://www.google.com/maps/search/?api=1&query=Bauskas+BJSS+sporta+halle+Pilskalna+iela+26,+Bauska","reviewSource":"google"},{"name":"Bauskas peldbaseins","sportKey":"swimming","sport":"Peldēšana","city":"Bauska","address":"Salātu iela 5A, Bauska","lat":56.411364,"lng":24.197456,"price":"Pēc pieprasījuma","priceValue":null,"rating":4.9,"reviews":224,"verified":true,"bookable":false,"website":"https://www.bauska.lv/","gmaps":"https://www.google.com/maps/search/?api=1&query=Bauskas+peldbaseins+Salātu+iela+5A,+Bauska","image":"https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=800&q=80","reviewSource":"google"},{"name":"Bauskas pilsētas stadions, volejbola laukumi","sportKey":"volleyball","sport":"Volejbols","city":"Bauska","address":"Pilskalna iela 26, Bauska","lat":56.402,"lng":24.1869,"price":"Publiskā pieeja","priceValue":null,"rating":4.9,"reviews":52,"verified":true,"bookable":false,"website":null,"gmaps":"https://www.google.com/maps/search/?api=1&query=Bauskas+pilsētas+stadions+volejbola+laukumi+Pilskalna+iela+26,+Bauska","reviewSource":"google"},{"name":"Falkors Bouldering Center","sportKey":"climbing","sport":"Klinšu kāpšana","city":"Rīga","address":"Ūnijas iela 14, Rīga","lat":56.968352,"lng":24.166752,"price":"11 €/apmeklējums","priceValue":11,"rating":4.8,"reviews":210,"verified":true,"bookable":false,"website":"https://www.boulderings.lv/","gmaps":"https://www.google.com/maps/search/?api=1&query=Falkors+Bouldering+Center+Unijas+iela+14+Riga","reviewSource":"google","image":"https://images.unsplash.com/photo-1522163182402-834f871fd851?auto=format&fit=crop&w=800&q=80"},{"name":"Ozo Golf Club","sportKey":"golf","sport":"Golfs","city":"Rīga","address":"Mīlgrāvja iela 16, Rīga","lat":57.0297913,"lng":24.1410395,"price":"Pēc pieprasījuma","priceValue":999,"rating":4.6,"reviews":149,"verified":true,"bookable":false,"website":"https://ozogolf.lv/","gmaps":"https://www.google.com/maps/search/?api=1&query=Ozo+Golf+Club+Milgravja+iela+16+Riga","image":"https://images.unsplash.com/photo-1535131749006-b7f58c99034b?auto=format&fit=crop&w=800&q=80","reviewSource":"google"},{"name":"Jūrmala Padel Club","sportKey":"padel","sport":"Padel","city":"Jūrmala","address":"Turaidas iela 11, Majori, Jūrmala","lat":56.975288,"lng":23.814063,"price":"No 24 €/h","priceValue":24,"rating":4.8,"reviews":64,"verified":true,"bookable":true,"website":"https://padel.lv/","image":"https://res.cloudinary.com/playtomic/image/upload/v1673198073/pro/tenants/46c7078e-dad2-4dc7-abf4-85ef582becb2/1673198071911.jpg","gmaps":"https://www.google.com/maps/search/?api=1&query=Jurmala+Padel+Club+Turaidas+11+Jurmala","reviewSource":"google"},{"name":"Baltic Beach Sporta komplekss","sportKey":"swimming","sport":"Peldēšana","city":"Jūrmala","address":"Jūras iela 23/25, Majori, Jūrmala","lat":56.975481,"lng":23.79778,"price":"No 18 €/apmeklējums","priceValue":18,"rating":4.8,"reviews":320,"verified":true,"bookable":true,"website":"https://balticbeach.lv/","image":"https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&w=900&q=82","gmaps":"https://www.google.com/maps/search/?api=1&query=Baltic+Beach+Hotel+Juras+23+Jurmala","reviewSource":"google"},{"name":"Jūrmala Golf Club & Hotel","sportKey":"golf","sport":"Golfs","city":"Jūrmala","address":"Golfa iela 1, Piņķi, Babītes pagasts","lat":56.9538,"lng":23.9038,"price":"No 45 €/spēle","priceValue":45,"rating":4.9,"reviews":310,"verified":true,"bookable":true,"website":"https://jgch.lv/","image":"https://images.unsplash.com/photo-1535131749006-b7f58c99034b?auto=format&fit=crop&w=900&q=82","gmaps":"https://www.google.com/maps/search/?api=1&query=Jurmala+Golf+Club+Golfa+iela+1","reviewSource":"google"},{"name":"Golfa klubs Viesturi","sportKey":"golf","sport":"Golfs","city":"Mārupe","address":"Viesturi, Jaunmārupe, Mārupes novads","lat":56.8837,"lng":23.9312,"price":"No 25 €/spēle","priceValue":25,"rating":4.7,"reviews":185,"verified":true,"bookable":true,"website":"https://golfsviesturi.lv/","image":"https://images.unsplash.com/photo-1592919505780-303950717480?auto=format&fit=crop&w=900&q=82","gmaps":"https://www.google.com/maps/search/?api=1&query=Golfa+klubs+Viesturi+Jaunmarupe","reviewSource":"google"},{"name":"Reinis Golfa klubs","sportKey":"golf","sport":"Golfs","city":"Sigulda","address":"Kalnreņči, Krimuldas pagasts, Siguldas novads","lat":57.1725,"lng":24.8112,"price":"No 20 €/spēle","priceValue":20,"rating":4.6,"reviews":95,"verified":true,"bookable":true,"website":"https://reinis.lv/","image":"https://images.unsplash.com/photo-1593111774240-d529f12cf4bb?auto=format&fit=crop&w=900&q=82","gmaps":"https://www.google.com/maps/search/?api=1&query=Reinis+Golfa+klubs+Sigulda","reviewSource":"google"},{"name":"Siguldas Sporta centrs","sportKey":"swimming","sport":"Peldēšana / Fitness","city":"Sigulda","address":"Ata Kronvalda iela 7A, Sigulda","price":"7,00 €/apmeklējums","priceValue":7,"lat":57.1537,"lng":24.8569,"phone":"+371 25448860","website":"https://www.siguldassports.lv","verified":true,"rating":4.8,"reviews":320,"reviewSource":"google","image":"https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=800&q=80"},{"name":"Latvijas Sporta pedagoģijas akadēmija","sportKey":"fitness","sport":"Fitnesa zāle / Vieglatlētika","city":"Rīga","address":"Brīvības gatve 333, Rīga","price":"6,50 €/apmeklējums","priceValue":6.5,"lat":56.9798,"lng":24.1884,"phone":"+371 67543426","website":"https://www.lspa.lv","verified":true,"rating":4.6,"reviews":185,"reviewSource":"google","image":"https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80"},{"name":"Ādažu sporta centrs","sportKey":"swimming","sport":"Peldbaseins / Zāle","city":"Ādaži","address":"Gaujas iela 30, Ādaži","price":"6,00 €/apmeklējums","priceValue":6,"lat":57.0753,"lng":24.3282,"phone":"+371 67389486","website":"https://adazi.lv","verified":true,"rating":4.7,"reviews":215,"reviewSource":"google","image":"https://images.unsplash.com/photo-1519315901367-f34ff9154487?auto=format&fit=crop&w=800&q=80"},{"name":"Ozolnieku sporta centrs","sportKey":"football","sport":"Futbols / Volejbols","city":"Ozolnieki","address":"Stadiona iela 5, Ozolnieki","price":"Publiski pieejams","priceValue":null,"lat":56.6908,"lng":23.7844,"phone":"+371 63050516","website":"https://www.jelgavasnovads.lv","verified":true,"rating":4.5,"reviews":94,"reviewSource":"google","image":"https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=800&q=80"},{"name":"Kokneses Sporta centrs","sportKey":"swimming","sport":"Peldbaseins / Stadions","city":"Koknese","address":"Parka iela 27A, Koknese","price":"5,50 €/apmeklējums","priceValue":5.5,"lat":56.6495,"lng":25.4328,"phone":"+371 29360940","website":"https://www.koknesessportacentrs.lv","verified":true,"rating":4.8,"reviews":240,"reviewSource":"google","image":"https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=800&q=80"},{"name":"Babītes sporta komplekss","sportKey":"swimming","sport":"Peldbaseins / Multifunkcionāla zāle","city":"Piņķi","address":"Jūrmalas iela 17, Piņķi","price":"6,50 €/apmeklējums","priceValue":6.5,"lat":56.9458,"lng":23.9142,"phone":"+371 67914670","website":"https://www.marupe.lv","verified":true,"rating":4.6,"reviews":175,"reviewSource":"google","image":"https://images.unsplash.com/photo-1519315901367-f34ff9154487?auto=format&fit=crop&w=800&q=80"},{"name":"Olimpiskais centrs Rēzekne","sportKey":"hockey","sport":"Ledus halle / Peldbaseins","city":"Rēzekne","address":"Stacijas iela 30, Rēzekne","price":"6,00 €/apmeklējums","priceValue":6,"lat":56.5132,"lng":27.3401,"phone":"+371 20229992","website":"https://www.ocr.lv","verified":true,"rating":4.8,"reviews":380,"reviewSource":"google","image":"https://images.unsplash.com/photo-1580748141549-71748dbe0bdc?auto=format&fit=crop&w=800&q=80"},{"name":"BJC Daugmale sporta komplekss","sportKey":"climbing","sport":"Klinšu kāpšana / Cīņa","city":"Rīga","address":"Jēkabpils iela 19A, Rīga","price":"8,00 €/apmeklējums","priceValue":8,"lat":56.9412,"lng":24.1338,"phone":"+371 67211159","website":"https://bjcdaugmale.lv","verified":true,"rating":4.7,"reviews":145,"reviewSource":"google","image":"https://images.unsplash.com/photo-1522163182402-834f871fd851?auto=format&fit=crop&w=800&q=80"},{"name":"Jēkabpils sporta centrs","sportKey":"swimming","sport":"Peldbaseins / Stadions","city":"Jēkabpils","address":"Brīvības iela 289, Jēkabpils","price":"5,00 €/apmeklējums","priceValue":5,"lat":56.4952,"lng":25.8752,"phone":"+371 65231534","website":"https://www.jekabpilssc.lv","verified":true,"rating":4.7,"reviews":210,"reviewSource":"google","image":"https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=800&q=80"},{"name":"Saldus sporta komplekss","sportKey":"basketball","sport":"Basketbols / Trenažieri","city":"Saldus","address":"Jelgavas iela 6, Saldus","price":"4,50 €/apmeklējums","priceValue":4.5,"lat":56.6641,"lng":22.4935,"phone":"+371 26576927","website":"https://www.saldus.lv","verified":true,"rating":4.6,"reviews":128,"reviewSource":"google","image":"https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=800&q=80"},{"name":"Aizkraukles novada sporta centrs","sportKey":"volleyball","sport":"Volejbols / Multifunkcionāla halle","city":"Aizkraukle","address":"Lāčplēša iela 21, Aizkraukle","price":"4,00 €/apmeklējums","priceValue":4,"lat":56.6028,"lng":25.2536,"phone":"+371 26182772","website":"https://www.aizkraukle.lv","verified":true,"rating":4.5,"reviews":86,"reviewSource":"google","image":"https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?auto=format&fit=crop&w=800&q=80"},{"name":"Madonas pilsētas sporta centrs","sportKey":"basketball","sport":"Basketbols / Vieglatlētika","city":"Madona","address":"Gaujas iela 13, Madona","price":"4,50 €/apmeklējums","priceValue":4.5,"lat":56.8523,"lng":26.2201,"phone":"+371 26529414","website":"https://www.madonassports.lv","verified":true,"rating":4.7,"reviews":165,"reviewSource":"google","image":"https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=800&q=80"},{"name":"Smeceres sils slēpošanas bāze","sportKey":"running","sport":"Distanču slēpošana / Biatlons","city":"Madona","address":"Smeceres sils, Madona","price":"Publiski pieejams","priceValue":null,"lat":56.8392,"lng":26.1952,"phone":"+371 26396032","website":"https://www.smeceressils.lv","verified":true,"rating":4.9,"reviews":420,"reviewSource":"google","image":"https://images.unsplash.com/photo-1517649763962-0c623266ddc0?auto=format&fit=crop&w=800&q=80"},{"name":"LOC Stadions Daugava","sportKey":"football","sport":"Futbols / Vieglatlētika","city":"Liepāja","address":"Jūrmalas parks 3, Liepāja","price":"Pēc pasākuma","priceValue":null,"lat":56.5052,"lng":20.9942,"phone":"+371 29397797","website":"https://loc.lv","verified":true,"rating":4.7,"reviews":290,"reviewSource":"google","image":"https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=800&q=80"},{"name":"Centra sporta kvartāls","sportKey":"extreme","sport":"Skeitparks / Futbols / Skriešana","city":"Rīga","address":"Krišjāņa Barona iela 116A, Rīga","price":"Bezmaksas ieeja","priceValue":null,"lat":56.9634,"lng":24.1485,"phone":"+371 67424739","website":"https://www.rchv.lv","verified":true,"rating":4.8,"reviews":580,"reviewSource":"google","image":"https://images.unsplash.com/photo-1520045892732-304bc3ac5d8e?auto=format&fit=crop&w=800&q=80"},{"name":"Komandu sporta spēļu halle","sportKey":"basketball","sport":"Basketbols / Florbols / Futzāls","city":"Rīga","address":"Krišjāņa Barona iela 99C, Rīga","price":"40 €/h","priceValue":40,"lat":56.9612,"lng":24.1448,"phone":"+371 20084087","website":"https://www.lnsc.lv","verified":true,"rating":4.9,"reviews":195,"reviewSource":"google","image":"https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=800&q=80"},{"name":"Mārupes BMX parks","sportKey":"cycling","sport":"BMX / Pumptrack / Skrituļslidošana","city":"Mārupe","address":"Lapiņu dambis 16, Mārupe","price":"Bezmaksas piekļuve","priceValue":null,"lat":56.9082,"lng":24.0531,"phone":"+371 29616337","website":"https://www.bmxmarupe.lv","verified":true,"rating":4.9,"reviews":310,"reviewSource":"google","image":"https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80"},{"name":"Cēsu pilsētas sporta komplekss","sportKey":"fitness","sport":"Fitnesa zāle / Daudzfunkcionāla halle","city":"Cēsis","address":"Piebalgas iela 18, Cēsis","price":"5,00 €/apmeklējums","priceValue":5,"lat":57.3092,"lng":25.2814,"phone":"+371 26186499","website":"https://www.cesusportaskola.lv","verified":true,"rating":4.6,"reviews":140,"reviewSource":"google","image":"https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80"},{"name":"Sporta nams CENTRS","sportKey":"climbing","sport":"Klinšu kāpšana / Basketbols","city":"Ventspils","address":"Brīvības iela 14, Ventspils","price":"5,50 €/apmeklējums","priceValue":5.5,"lat":57.3912,"lng":21.5645,"phone":"+371 63622587","website":"https://www.ocventspils.lv","verified":true,"rating":4.7,"reviews":180,"reviewSource":"google","image":"https://images.unsplash.com/photo-1522163182402-834f871fd851?auto=format&fit=crop&w=800&q=80"},{"name":"Piedzīvojumu parks Ventspils","sportKey":"extreme","sport":"Slēpošana / Veikbords / BMX","city":"Ventspils","address":"Saules iela 143, Ventspils","price":"7,00 €/stunda","priceValue":7,"lat":57.3752,"lng":21.5428,"phone":"+371 29114990","website":"https://www.piedzivojumuparks.lv","verified":true,"rating":4.8,"reviews":650,"reviewSource":"google","image":"https://images.unsplash.com/photo-1517649763962-0c623266ddc0?auto=format&fit=crop&w=800&q=80"},{"name":"Upesciema stadions","sportKey":"football","sport":"Regbijs / Futbols","city":"Upesciems","address":"Skolas iela 14, Upesciems","price":"Publiski pieejams","priceValue":null,"lat":56.9685,"lng":24.2891,"phone":"+371 29122363","website":"https://ropazi.lv","verified":true,"rating":4.6,"reviews":98,"reviewSource":"google","image":"https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=800&q=80"},{"name":"Baldones sporta komplekss","sportKey":"fitness","sport":"Fitnesa zāle / Stadions","city":"Baldone","address":"Iecavas iela 2, Baldone","price":"4,50 €/apmeklējums","priceValue":4.5,"lat":56.7432,"lng":24.3985,"phone":"+371 26335442","website":"https://baldone.lv","verified":true,"rating":4.5,"reviews":82,"reviewSource":"google","image":"https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80"},{"name":"Inčukalna sporta centrs","sportKey":"basketball","sport":"Basketbols","city":"Inčukalns","address":"Zvaigžņu iela 2A, Inčukalns","lat":57.101654,"lng":24.682592,"price":"No 15 €/h","priceValue":15,"rating":4.7,"reviews":85,"verified":true,"website":"https://sigulda.lv","gmaps":"https://www.google.com/maps/search/?api=1&query=Inčukalna+sporta+centrs+Zvaigžņu+2A","reviewSource":"google"},{"name":"Salacgrīvas Sporta komplekss Zvejnieku parks","sportKey":"football","sport":"Futbols","city":"Salacgrīva","address":"Sporta iela 4, Salacgrīva","lat":57.765717,"lng":24.353237,"price":"Publiskā pieeja","priceValue":0,"rating":4.7,"reviews":190,"verified":true,"website":"https://visitlimbazi.lv","gmaps":"https://www.google.com/maps/search/?api=1&query=Salacgrīvas+Zvejnieku+parks+Sporta+4","reviewSource":"google"},{"name":"Bauskas Sporta centrs Mēmele","sportKey":"running","sport":"Skriešana","city":"Bauska","address":"Pilskalna iela 26, Bauska","lat":56.402665,"lng":24.187052,"price":"Publiskā pieeja","priceValue":0,"rating":4.5,"reviews":110,"verified":true,"website":"https://bauska.lv","gmaps":"https://www.google.com/maps/search/?api=1&query=Bauskas+sporta+centrs+Memele+Pilskalna+26","reviewSource":"google"},{"name":"LLU Sporta nams","sportKey":"swimming","sport":"Peldēšana","city":"Jelgava","address":"Raiņa iela 1, Jelgava","lat":56.649485,"lng":23.733402,"price":"No 5,50 €/apmeklējums","priceValue":5.5,"rating":4.5,"reviews":175,"verified":true,"website":"https://lbtu.lv","gmaps":"https://www.google.com/maps/search/?api=1&query=LLU+Sporta+nams+Raiņa+1+Jelgava","reviewSource":"google"},{"name":"Ropažu sporta centrs","sportKey":"tennis","sport":"Teniss","city":"Ropaži","address":"Sporta iela 2, Ropaži","lat":56.974449,"lng":24.637249,"price":"No 14 €/h","priceValue":14,"rating":4.6,"reviews":64,"verified":true,"website":"https://ropazi.lv","gmaps":"https://www.google.com/maps/search/?api=1&query=Ropažu+sporta+centrs+Sporta+2","reviewSource":"google"},{"name":"Preiļu novada BJSS stadions","sportKey":"football","sport":"Futbols","city":"Preiļi","address":"Aglonas iela 24, Preiļi","lat":56.29105,"lng":26.730643,"price":"Publiskā pieeja","priceValue":0,"rating":4.6,"reviews":95,"verified":true,"website":"https://preili.lv","gmaps":"https://www.google.com/maps/search/?api=1&query=Preiļu+BJSS+stadions+Aglonas+24","reviewSource":"google"},{"name":"Mālpils sporta centrs","sportKey":"swimming","sport":"Peldēšana","city":"Mālpils","address":"Sporta iela 1, Mālpils","lat":57.005365,"lng":24.957165,"price":"No 5 €/apmeklējums","priceValue":5,"rating":4.7,"reviews":140,"verified":true,"website":"https://sigulda.lv","gmaps":"https://www.google.com/maps/search/?api=1&query=Mālpils+sporta+centrs+Sporta+1","reviewSource":"google"},{"name":"Sporta nams CENTRS Ventspils","sportKey":"basketball","sport":"Basketbols","city":"Ventspils","address":"Brīvības iela 14, Ventspils","lat":57.394461,"lng":21.572263,"price":"No 18 €/h","priceValue":18,"rating":4.6,"reviews":82,"verified":true,"website":"https://ocventspils.lv","gmaps":"https://www.google.com/maps/search/?api=1&query=Sporta+nams+CENTRS+Ventspils+Brivibas+14","reviewSource":"google"},{"name":"LFF mācību-treniņu centrs Staicele","sportKey":"football","sport":"Futbols","city":"Staicele","address":"Sporta iela 5, Staicele","lat":57.836512,"lng":24.739471,"price":"Pēc pieprasījuma","priceValue":999,"rating":4.8,"reviews":230,"verified":true,"website":"https://lff.lv","gmaps":"https://www.google.com/maps/search/?api=1&query=LFF+treniņu+centrs+Staicele+Sporta+5","reviewSource":"google"},{"name":"Grīziņkalna sporta komplekss","sportKey":"basketball","sport":"Basketbols","city":"Rīga","address":"Jāņa Asara iela 24, Rīga","lat":56.956737,"lng":24.154224,"price":"Publiskā pieeja","priceValue":0,"rating":4.8,"reviews":480,"verified":true,"website":"https://ghetto.lv","gmaps":"https://www.google.com/maps/search/?api=1&query=Grīziņkalna+sporta+komplekss+Jāņa+Asara+24+Rīga","reviewSource":"google"},{"name":"Carnikavas sporta komplekss","sportKey":"football","sport":"Futbols","city":"Carnikava","address":"Smilšu iela 1, Carnikava","lat":57.129273,"lng":24.269619,"price":"Publiskā pieeja","priceValue":0,"rating":4.6,"reviews":112,"verified":true,"website":"https://adazi.lv","gmaps":"https://www.google.com/maps/search/?api=1&query=Carnikavas+sporta+komplekss+Smilšu+1","reviewSource":"google"},{"name":"Daugavpils sporta komplekss Olimpija","sportKey":"swimming","sport":"Peldēšana","city":"Daugavpils","address":"Valkas iela 2U, Daugavpils","lat":55.87955,"lng":26.56684,"price":"No 4,50 €/apmeklējums","priceValue":4.5,"rating":4.5,"reviews":160,"verified":true,"website":"https://daugavpils.lv","gmaps":"https://www.google.com/maps/search/?api=1&query=Daugavpils+Olimpija+Valkas+2U","reviewSource":"google"},{"name":"Aizputes sporta centrs Lejaskurzeme","sportKey":"running","sport":"Skriešana","city":"Aizpute","address":"Saules iela 8, Aizpute","lat":56.723323,"lng":21.602048,"price":"Publiskā pieeja","priceValue":0,"rating":4.5,"reviews":75,"verified":true,"website":"https://dienvidkurzeme.lv","gmaps":"https://www.google.com/maps/search/?api=1&query=Aizputes+sporta+centrs+Saules+8","reviewSource":"google"},{"name":"Lielvārdes sporta centrs","sportKey":"volleyball","sport":"Volejbols","city":"Lielvārde","address":"Raiņa iela 22, Lielvārde","lat":56.714333,"lng":24.820189,"price":"Publiskā pieeja","priceValue":0,"rating":4.6,"reviews":90,"verified":true,"website":"https://ogresnovads.lv","gmaps":"https://www.google.com/maps/search/?api=1&query=Lielvārdes+sporta+centrs+Raiņa+22","reviewSource":"google"},{"name":"Krimuldas sporta centrs","sportKey":"swimming","sport":"Peldēšana","city":"Ragana","address":"Skolas iela 11, Ragana","lat":57.182148,"lng":24.697716,"price":"No 5 €/apmeklējums","priceValue":5,"rating":4.7,"reviews":130,"verified":true,"website":"https://sigulda.lv","gmaps":"https://www.google.com/maps/search/?api=1&query=Krimuldas+sporta+centrs+Skolas+11+Ragana","reviewSource":"google"},{"name":"Joker klubs","sportKey":"fitness","sport":"Fitnesa zāle","city":"Rīga","address":"Katrīnas dambis 12, Rīga","lat":56.971982,"lng":24.102311,"price":"No 18 €/apmeklējums","priceValue":18,"rating":4.6,"reviews":340,"verified":true,"website":"https://jokerklubs.lv","gmaps":"https://www.google.com/maps/search/?api=1&query=Joker+klubs+Katrinas+dambis+12+Riga","reviewSource":"google"},{"name":"Rīgas 3. BJSS sporta komplekss","sportKey":"basketball","sport":"Basketbols","city":"Rīga","address":"Anniņmuižas bulvāris 31, Rīga","lat":56.959975,"lng":24.015758,"price":"No 20 €/h","priceValue":20,"rating":4.5,"reviews":150,"verified":true,"website":"https://riga.lv","gmaps":"https://www.google.com/maps/search/?api=1&query=Rigas+3+BJSS+Anninmuizas+bulvaris+31","reviewSource":"google"},{"name":"Daugavpils Universitātes sporta komplekss","sportKey":"volleyball","sport":"Volejbols","city":"Daugavpils","address":"Kandavas iela 1, Daugavpils","lat":55.873054,"lng":26.510289,"price":"No 15 €/h","priceValue":15,"rating":4.6,"reviews":120,"verified":true,"website":"https://du.lv","gmaps":"https://www.google.com/maps/search/?api=1&query=Daugavpils+Universitates+sporta+komplekss+Kandavas+1","reviewSource":"google"},{"name":"Kandavas Valsts lauksaimniecības tehnikuma stadions","sportKey":"football","sport":"Futbols","city":"Kandava","address":"Valteru iela 4, Kandava","lat":57.035993,"lng":22.791293,"price":"Publiskā pieeja","priceValue":0,"rating":4.5,"reviews":90,"verified":true,"website":"https://kandava.lv","gmaps":"https://www.google.com/maps/search/?api=1&query=Kandavas+tehnikuma+stadions+Valteru+4","reviewSource":"google"},{"name":"Talsu sporta halle","sportKey":"basketball","sport":"Basketbols","city":"Talsi","address":"Kārļa Mīlenbaha iela 32, Talsi","lat":57.2436,"lng":22.604951,"price":"No 18 €/h","priceValue":18,"rating":4.6,"reviews":88,"verified":true,"website":"https://talsusports.lv","gmaps":"https://www.google.com/maps/search/?api=1&query=Talsu+sporta+halle+Milenbaha+32","reviewSource":"google"}];

// Compliance normalization: do not publish unsourced ratings or review counts as facts.
// Venue ratings synced with Google Reviews
const PRODUCTS = [{"id":"wilson-pro-staff-97-v14","name":"Wilson Pro Staff 97 v14 tenisa rakete","brand":"Wilson","sport":"Teniss","price":272,"old":320,"image":"https://static.wixstatic.com/media/e4309f_cf6401c8843247f38ea02fc796a19fef~mv2.webp/v1/fill/w_480%2Ch_824%2Cal_c%2Cq_85%2Cusm_0.66_1.00_0.01%2Cenc_avif%2Cquality_auto/e4309f_cf6401c8843247f38ea02fc796a19fef~mv2.webp","icon":"tennis_racket","desc":"Profesionāla līmeņa rakete, 97 kv. collas, 315 g, izcila kontrole.","sourceUrl":"https://www.wilson.com/de-de/product/pro-staff-97-v14-wr125611","variantType":"grip","variantLabel":"Satvēriens","variants":["G2 (4 1/4\")","G3 (4 3/8\")","G4 (4 1/2\")"]},{"id":"head-radical-mp","name":"Head Radical MP tenisa rakete","brand":"Head","sport":"Teniss","price":219,"old":null,"image":"assets/head-radical-mp.png","icon":"tennis_racket","desc":"Universāla rakete vidēja līmeņa spēlētājiem, kas meklē jaudu un griezienu.","sourceUrl":"https://www.head.com/en/radical-mp-2025-tennis-racquet.html","variantType":"grip","variantLabel":"Satvēriens","variants":["G2 (4 1/4\")","G3 (4 3/8\")","G4 (4 1/2\")"]},{"id":"adidas-adipower-padel-33","name":"Adidas Adipower Multiweight 3.3 padel rakete","brand":"Adidas","sport":"Padel","price":220,"old":null,"image":"https://www.misterpadel.com/images/2023-media-12/adidas-adipower-multiweight-33-racchetta-da-padel-black-rk1aa2u0014f_H.jpg","icon":"padel_racket","desc":"Diamond forma, augsta jauda uzbrukuma sitieniem un tālajām bumbām.","sourceUrl":"https://allforpadel.com/en/padel-rackets/7193-adidas-adipower-multiweight-33-racket-8436548248895.html"},{"id":"babolat-technical-viper","name":"Babolat Technical Viper padel rakete","brand":"Babolat","sport":"Padel","price":296,"old":370,"image":"https://cdn.racketpedia.com/media/padel-rackets-data-sheets/153/500x500/babolat-technical-viper-2025-711cdead-96c5-4044-81af-480e64f433c8.jpg","icon":"padel_racket","desc":"Tehniskā oglekļa šķiedras struktūra maksimālam sprādzienbīstamam spēkam.","sourceUrl":"https://www.racketpedia.com/es-ES/padel-racket/babolat-technical-viper-2025"},{"id":"wilson-evolution-basketball","name":"Wilson Evolution basketbola bumba","brand":"Wilson","sport":"Basketbols","price":54.9,"old":null,"image":"https://academy.scene7.com/is/image/academy/20976164?%24pdp-thumbnails-xl-ng%24=","icon":"basketball","desc":"Oficiālā sacensību telpu bumba, izmērs 7, augstākā līmeņa mikrošķiedra."},{"id":"spalding-tf1000-basketball","name":"Spalding TF-1000 basketbola bumba","brand":"Spalding","sport":"Basketbols","price":49.9,"old":59.9,"image":"https://i.ebayimg.com/00/s/MTYwMFgxNjAw/z/GScAAOSwdC9m0gR8/%24_1.JPG","icon":"basketball","desc":"Kompozītmateriāla premium klases bumba, ideāla saķere spēlēm zālē."},{"id":"nike-strike-football","name":"Nike Strike futbola bumba","brand":"Nike","sport":"Futbols","price":34.9,"old":null,"image":"https://www.prodirectsport.us/cdn/shop/files/255481_main.jpg?v=1783038419","icon":"football","desc":"Treniņu bumba, izmērs 5, Aerowsculpt rievas stabilākam lidojumam."},{"id":"bauer-supreme-m5-pro-skates","name":"Bauer Supreme M5 Pro slidas","brand":"Bauer","sport":"Hokejs","price":479,"old":599,"image":"https://www.prohockeylife.com/cdn/shop/products/BAUER-SUPREME-M5-PRO-HOCKEY-SKATES-TWO.jpg?v=1657558547&width=1946","icon":"skates","desc":"Augstākā līmeņa kompozītmateriāla hokeja slidas profesionāļiem.","sourceUrl":"https://www.prohockeylife.com/products/bauer-supreme-m5-pro-intermediate-hockey-skates","variantType":"size","variantLabel":"Slidu izmērs","variants":["EU 40.5","EU 42","EU 43","EU 44.5","EU 45.5"]},{"id":"ccm-tacks-as580-skates","name":"CCM Tacks AS580 hokeja slidas","brand":"CCM","sport":"Hokejs","price":359.99,"old":449.99,"image":"https://www.hockeyjam.co.uk/media/catalog/product/cache/7/image/800x800/9df78eab33525d08d6e5fb8d27136e95/c/c/ccm_tacks_as580_intermediate_ice_hockey_skates-1.png","icon":"skates","desc":"CCM Tacks AS580 pieaugušo hokeja slidas ar viengabala zābaku, RFM kompozītu un SpeedBlade XS sistēmu.","sourceUrl":"https://www.hokejam.com/en/senior-ice-hockey-skates/2375-ccm-tacks-as580-senior-ice-hockey-skates","variantType":"size","variantLabel":"Slidu izmērs","variants":["EU 40.5","EU 42","EU 43","EU 44.5","EU 45.5"]},{"id":"mikasa-v200w-volleyball","name":"Mikasa V200W volejbola bumba","brand":"Mikasa","sport":"Volejbols","price":64.9,"old":null,"image":"https://www.sportsdirectoryuk.co.uk/cdn/shop/files/4718.jpg?v=1754403695","icon":"volleyball","desc":"Oficiālā FIVB spēles bumba ar 18 aerodinamiskiem paneļiem."},{"id":"venum-challenger-30-gloves","name":"Venum Challenger 3.0 boksa cimdi","brand":"Venum","sport":"Bokss / MMA","price":54.9,"old":64.9,"image":"https://cdn.webshopapp.com/shops/16221/files/217451384/2880x3840x3/venum-venum-gear-boxing-gloves-challenger-30-black.jpg","icon":"boxing_gloves","desc":"Trīsslāņu blīvējuma 14oz cimdi intensīviem treniņiem un maisam.","sourceUrl":"https://www.venum.com/products/venum-challenger-3-0-boxing-gloves-black","variantType":"size","variantLabel":"Cimdu svars","variants":["10 oz","12 oz","14 oz","16 oz"]},{"id":"everlast-pro-style-bag","name":"Everlast Nevatear Heavy boksa maiss","brand":"Everlast","sport":"Bokss / MMA","price":89,"old":null,"image":"https://sportano.bg/img/986c30c27a3d26a3ee16c136f92f4ff5/0/0/009283595029_20-jpg/boksov-chuval-za-trenirovka-everlast-nevatear-heavy-black-white-0.jpg","icon":"punching_bag","desc":"Izturīgs Everlast piekaramais boksa maiss intensīviem sitienu un tehnikas treniņiem.","sourceUrl":"https://www.everlastboxing.com.au/collections/heavy-bags"},{"id":"speedo-fastskin-goggles","name":"Speedo Fastskin peldbrilles","brand":"Speedo","sport":"Peldēšana","price":34.9,"old":null,"image":"https://www.swimshop2u.com/cdn/shop/files/speedo-speedsocket_02_1400x.png?v=1773130125","icon":"swim_goggles","desc":"Sacensību līmeņa hidrodinamiskās peldbrilles ar IQFit blīvējumu."},{"id":"arena-powerskin-swimsuit","name":"Arena Powerskin peldkostīms","brand":"Arena","sport":"Peldēšana","price":74.9,"old":89.9,"image":"assets/arena-powerskin.png","icon":"swimsuit","desc":"Kompresijas treniņu peldkostīms, hlora un UV staru izturīgs materiāls.","variantType":"size","variantLabel":"Izmērs","variants":["S","M","L","XL"]},{"id":"nike-pegasus-41-shoes","name":"Nike Pegasus 41 skriešanas apavi","brand":"Nike","sport":"Skriešana","price":149.99,"old":null,"image":"https://cdn.sportshop.com/catalog/product/1500/1500/1/8/189373_8_1.jpg","icon":"running_shoe","desc":"Universāli ikdienas skriešanas apavi ar ReactX putu amortizāciju.","variantType":"size","variantLabel":"Izmērs (EU)","variants":["40","41","42","42.5","43","44","45"]},{"id":"garmin-forerunner-265-watch","name":"Garmin Forerunner 265 viedpulkstenis","brand":"Garmin","sport":"Skriešana","price":399,"old":449,"image":"https://www.heavins.ie/cdn/shop/files/0753759313722___L.jpg?v=1714492574&width=600","icon":"gps_watch","desc":"Skriešanas GPS pulkstenis ar AMOLED ekrānu un detalizētu treniņu analīzi."},{"id":"trek-marlin-7","name":"Trek Marlin 7 kalnu velosipēds","brand":"Trek","sport":"Velosports","price":899,"old":999,"image":"https://treknology3.com/images/stories/virtuemart/product/Marlin7_23_36967_A_Primary.webp","icon":"bike","desc":"Alumīnija rāmis, amortizācijas dakša un hidrauliskās disku bremzes.","sourceUrl":"https://treknology3.com/mountain-bikes/marlin-7-gen-3","variantType":"size","variantLabel":"Rāmja izmērs","variants":["M (165-176 cm)","M/L (173-180 cm)","L (177-188 cm)"]},{"id":"giro-syntax-helmet","name":"Giro Syntax velo ķivere","brand":"Giro","sport":"Velosports","price":119,"old":null,"image":"assets/giro-syntax-helmet.png","icon":"helmet","desc":"Ērta un droša šosejas velo ķivere ar MIPS aizsardzību.","sourceUrl":"https://www.giro.com/p/syntax-mips-road-bike-helmet/100000000300000104.html","variantType":"size","variantLabel":"Izmērs","variants":["S (51-55 cm)","M (55-59 cm)","L (59-63 cm)"]},{"id":"casall-yoga-mat-balance","name":"Casall Yoga Mat Balance 4mm","brand":"Casall","sport":"Fitnesa zāle","price":38,"old":40,"image":"https://www.gymgrossisten.com/dw/image/v2/BDJH_PRD/on/demandware.static/-/Sites-hsng-master-catalog/default/dwa3882a5d/media/GG-Produktbilder/Casall/AW24/53304-901.MASTER_Casall_yoga-Mat-Essential-Balance-4mm-Black-04_24.jpg?sfrm=png&sh=655&sm=fit&sw=655","icon":"yoga_mat","desc":"TPE materiāla neslīdošs jogas un fitnesa paklājs.","sourceUrl":"https://sportland.com/product/casall_yoga_mat_essential_balance_4mm_53304_457"},{"id":"innova-star-destroyer","name":"Innova Star Destroyer disku golfa disks","brand":"Innova","sport":"Disku golfs","price":19.9,"old":null,"image":"https://i5.walmartimages.com/asr/01898fa8-f6c5-455a-9eea-c777fd636501.5ec97be97ec6cf44b579c27102c7e6d7.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF","icon":"disc_golf","desc":"Tālo distanču draiveris, speed 12, pieredzējušiem spēlētājiem."},{"id":"discraft-buzzz","name":"Discraft Buzzz midrange disks","brand":"Discraft","sport":"Disku golfs","price":18.5,"old":null,"image":"https://discgolf.ee/cdn/shop/products/zbuzzz_max-dk_1_1000x1000.jpg?v=1650285252","icon":"disc_golf","desc":"Vidējās distances disks ar taisnu un stabilu lidojumu.","sourceUrl":"https://discgolf.ee/products/discraft-buzzz"},{"id":"yonex-astrox-88d-pro","name":"Yonex Astrox 88D Pro badmintona rakete","brand":"Yonex","sport":"Badmintons","price":189.9,"old":219,"image":"https://www.yonex.com/media/catalog/product/3/a/3ax88d-p_076-1_02.png","icon":"tennis_racket","desc":"Profesionāla uzbrukuma rakete ar Rotational Generator sistēmu spēcīgiem smāšiem un ātrai kontrolei.","sourceUrl":"https://www.yonex.com/badminton/racquets/astrox/astrox-88-d-pro","variantType":"grip","variantLabel":"Satvēriens","variants":["G4","G5"]},{"id":"babolat-pure-drive-2024","name":"Babolat Pure Drive 2024 tenisa rakete","brand":"Babolat","sport":"Teniss","price":229,"old":259,"image":"https://media.babolat.com/image/upload/f_auto,q_auto,c_pad,w_800,h_800/v1760457339/Product_Media/2026/Tennis/RACQUETS/Expert/101584-PURE_DRIVE_GEN11_SPECTRA_UNSTRUNG-100-1-Face.png","icon":"tennis_racket","desc":"Klasiskais jaudas un grieziena etalons, 300 g svars, HTR sistēma eksplozīvam bumbas lidojumam.","sourceUrl":"https://www.babolat.com/pure-drive","variantType":"grip","variantLabel":"Satvēriens","variants":["G2 (4 1/4\")","G3 (4 3/8\")","G4 (4 1/2\")"]},{"id":"wilson-us-open-balls","name":"Wilson US Open tenisa bumbiņas (4 gab.)","brand":"Wilson","sport":"Teniss","price":9.9,"old":12.5,"image":"https://www.wilson.com/en-us/media/catalog/product/article_images/WRT106200_/WRT106200__af04e1349cadfc59f5cded62e5b4e956.png","icon":"tennis_racket","desc":"Oficiālās US Open sacensību bumbiņas ar Extra Duty filcu maksimālai izturībai uz cietajiem kortiem.","sourceUrl":"https://www.wilson.com/en-us/product/us-open-4-ball-can","variantType":"pack","variantLabel":"Daudzums","packs":[{"id":"1-can","label":"1 kārba (4 bumbas)","count":1,"price":9.9},{"id":"2-can","label":"2 kārbas (8 bumbas)","count":2,"price":18.99},{"id":"3-can","label":"3 kārbas (12 bumbas)","count":3,"price":26.99},{"id":"6-can","label":"6 kārbas (24 bumbas)","count":6,"price":51.99}]},{"id":"bullpadel-hack-03-bag","name":"Bullpadel Hack 03 termo padel soma","brand":"Bullpadel","sport":"Padel","price":79.9,"old":95,"image":"https://www.misterpadel.com/images/2022-media-12/BPP23012_HACK_RACKET_BAG_-_KAKI-467408-015_A.jpg","icon":"padel_racket","desc":"Ietilpīga padel soma ar diviem termo nodalījumiem raketēm un ventilējamu apavu kabatu.","sourceUrl":"https://www.bullpadel.com/bags/hack-03"},{"id":"nike-mercurial-superfly-academy","name":"Nike Zoom Mercurial Superfly buči","brand":"Nike","sport":"Futbols","price":89.99,"old":104.99,"image":"assets/nike-mercurial.png","icon":"football","desc":"Futbola apavi ar Air Zoom amortizāciju un elastīgu Dynamic Fit aproci zāliena segumiem.","sourceUrl":"https://www.nike.com/football/mercurial","variantType":"size","variantLabel":"Izmērs (EU)","variants":["40","41","42","42.5","43","44","45"]},{"id":"bowflex-selecttech-552","name":"Bowflex SelectTech 552 hanteles (pāris)","brand":"Bowflex","sport":"Fitnesa zāle","price":349,"old":429,"image":"https://cdn.fitshop.co.uk/pictures/bowflex/selectabell/WTFD7600/Bowflex_552i_Dumbbell_-_side_view_1600_1600.jpg","icon":"yoga_mat","desc":"Regulējamas hanteles no 2 līdz 24 kg vienā mehānismā daudzpusīgiem spēka treniņiem.","sourceUrl":"https://www.bowflex.com/selecttech/552"},{"id":"speedo-biofuse-power-fins","name":"Speedo Biofuse 2.0 treniņu pleznas","brand":"Speedo","sport":"Peldēšana","price":39.9,"old":48,"image":"https://cdn11.bigcommerce.com/s-21x65e8kfn/images/stencil/original/products/17165/85601/SPE58_1000_1__91744.1688229901.jpg","icon":"swim_goggles","desc":"Ergonomiskas silikona treniņu pleznas kāju spēka attīstībai un optimālas tehnikas pilnveidošanai.","sourceUrl":"https://www.speedo.com/biofuse-fitness-fin","variantType":"size","variantLabel":"Pleznas izmērs","variants":["39-40","41-42","43-44","45-46"]},{"id":"spalding-tf-trainer-ball","name":"Spalding TF-Trainer svērtā bumba","brand":"Spalding","sport":"Basketbols","price":59,"old":69,"image":"assets/spalding-tf-trainer.webp","icon":"basketball","desc":"1.3 kg smagā treniņu bumba roku spēka, piespēļu un dribla ātruma attīstīšanai zālē.","sourceUrl":"https://www.spalding.com/tf-trainer"}];
let OMNIVA_LOCKERS = {"Aglona":["Aglonas TOP pakomāts - Somersētas iela 33"],"Aizkraukle":["Aizkraukles T/C Iga pakomāts - Gaismas iela 35","Aizkraukles TOP pakomāts - Lāčplēša iela 7"],"Aizpute":["Aizputes Zvaigžņu ielas AIBE pakomāts - Zvaigžņu iela 2B"],"Aknīste":["Aknīstes VESKO pakomāts - Skolas iela 5"],"Aloja":["Alojas Mini TOP pakomāts - Rīgas iela 1B"],"Alūksne":["Alūksnes Maxima X pakomāts - Pils iela 9B","Alūksnes Pils ielas TOP pakomāts - Pils iela 38A"],"Ance":["Ances pakomāts"],"Ape":["Apes TOP pakomāts - Stacijas iela 4"],"Auce":["Auces TOP pakomāts - Baznīcas iela 1"],"Auciems":["Auciema pakomāts"],"Augstkalne":["Augstkalnes pakomāts"],"Augšlīgatne":["Augšlīgatnes ELVI pakomāts - Nītaures iela 5"],"Babīte":["Babītes ELVI pakomāts - Liepu aleja 15A"],"Baldone":["Baldones Mego pakomāts - Rīgas iela 79","Baldones TOP pakomāts - Pārupes iela 6"],"Baloži":["Baložu Mego pakomāts - Rīgas iela 14"],"Baltinava":["Baltinavas pakomāts - Kārsavas iela 4"],"Balvi":["Balvu TOP pakomāts - Partizānu iela 8","Balvu Tautas ielas 1 pakomāts - Tautas iela 1"],"Bauska":["Bauskas LIDL pakomāts - Zaļā iela 5","Bauskas Mini RIMI pakomāts - Zaļā iela 3","Bauskas Pionieru ielas RIMI pakomāts - Pionieru iela 2"],"Brocēni":["Brocēnu Citro pakomāts - Lielcieceres iela 2A"],"Bēne":["Bēnes TOP pakomāts - Stacijas iela 10"],"Carnikava":["Carnikavas Mego pakomāts - Rīgas iela 14","Carnikavas T/C Mandarīns pakomāts - Atpūtas iela 1"],"Cesvaine":["Cesvaines TOP pakomāts - Rīgas iela 2"],"Cēsis":["Cēsu Gaujas ielas Maxima X pakomāts - Gaujas iela 1/3","Cēsu Gaujas ielas TOP pakomāts - Gaujas iela 29","Cēsu T/C Globuss pakomāts - Raiņa iela 26/28","Cēsu T/C SOLO pakomāts - Jāņa Poruka iela 19","Cēsu Valmieras ielas Maxima XX pakomāts - Valmieras iela 17A"],"Dagda":["Dagdas TOP pakomāts - Daugavpils iela 6"],"Daudzeva":["Daudzevas pakomāts"],"Vecstropi":["Daugavpils 18. novembra ielas Lats pakomāts - 18. novembra iela 398A"],"Daugavpils":["Daugavpils 18. novembra ielas RIMI pakomāts - 18. novembra iela 136","Daugavpils Aveņu ielas Maxima X pakomāts - Aveņu iela 35B","Daugavpils Balvu ielas 1a LIDL pakomāts - Balvu iela 1","Daugavpils Cialkovska ielas Lats pakomāts - Cialkovska iela 10A","Daugavpils Gaismas ielas TOP pakomāts - Gaismas iela 12","Daugavpils T/C Aveņu centrs pakomāts - Raipoles iela 11A","Daugavpils T/C Ditton pakomāts - Cietokšņa iela 60","Daugavpils T/C Solo pakomāts - Rīgas iela 9","Daugavpils Valkas ielas Mego pakomāts - Valkas iela 1","Daugavpils Viestura ielas Mego pakomāts - Viestura iela 60"],"Daugmale":["Daugmales ELVI pakomāts"],"Dobele":["Dobeles Brīvības ielas RIMI pakomāts - Brīvības iela 30","Dobeles J. Čakstes ielas ELDO pakomāts - Jāņa Čakstes iela 18","Dobeles Krasta ielas TOP pakomāts - Krasta iela 7","Dobeles Muldavas ielas TOP pakomāts - Muldavas iela 3A"],"Druva":["Druvas ELVI pakomāts - Vienības iela 4"],"Dundaga":["Dundagas Citro pakomāts - Talsu iela 1"],"Eleja":["Elejas Virši pakomāts - Lietuvas iela 28"],"Engure":["Engures Citro pakomāts - Jūras iela 81"],"Ezere":["Ezeres ELVI pakomāts - Centra laukums 2"],"Garkalne":["Garkalnes Lats pakomāts - Vidzemes šoseja 13"],"Grobiņa":["Grobiņas LATS pakomāts - Vītolu iela 12","Grobiņas TOP pakomāts - Lielā iela 74"],"Gulbene":["Gulbenes Dzelzceļa ielas 14 pakomāts - Dzelzceļa iela 14","Gulbenes Nākotnes ielas TOP pakomāts - Nākotnes iela 6"],"Iecava":["Iecavas Maxima X pakomāts - Rīgas iela 27","Iecavas TOP pakomāts - Edvarta Virzas iela 2"],"Ikšķile":["Ikšķiles ELVI pakomāts - Daugavas prospekts 18A","Ikšķiles Mini RIMI pakomāts - Melioratoru iela 1A"],"Ilūkste":["Ilūkstes Pilskalnes ielas TOP pakomāts - Pilskalnes iela 2A"],"Krimuldas":["Inciema pakomāts"],"Inčukalns":["Inčukalna Aibe pakomāts - Atmodas iela 6"],"Jaungulbene":["Jaungulbenes pakomāts"],"Jaunjelgava":["Jaunjelgavas Mini Top pakomāts - Jelgavas iela 44"],"Jaunmārupe":["Jaunmārupes Mazcenu alejas pakomāts - Mazcenu aleja 33/1"],"Jaunolaine":["Jaunolaines TOP pakomāts - Baznīcas iela 10A"],"Jaunpiebalga":["Jaunpiebalgas pakomāts - Gaujas iela 4"],"Jaunpils":["Jaunpils TOP pakomāts"],"Jelgava":["Jelgavas Birzes ielas 21 LATS pakomāts - Birzes iela 21","Jelgavas Lielās ielas ELVI pakomāts - Lielā iela 49","Jelgavas Meiju ceļa Aibe pakomāts - Meiju ceļš 38","Jelgavas Rīgas ielas 50 LIDL pakomāts - Rīgas iela 50","Jelgavas Rūpniecības ielas ELVI pakomāts - Rūpniecības iela 77A","Jelgavas Satiksmes ielas RIMI pakomāts - Satiksmes iela 35","Jelgavas T/C Pilsētas Pasāža pakomāts - Driksas iela 4","Jelgavas T/C RAF pakomāts - Rīgas iela 48","Jelgavas T/C Valdeka pakomāts - Rīgas iela 11A","Jelgavas T/C Vivo centrs pakomāts - Katoļu iela 18","Jelgavas Tērvetes ielas TOP pakomāts - Tērvetes iela 97","Jelgavas Uzvaras ielas TOP pakomāts - Uzvaras iela 6A","Jelgavas Zemgales prospekta 10 pakomāts - Zemgales prospekts 10"],"Jumprava":["Jumpravas Lats pakomāts - Ceriņu iela 3"],"Jēkabpils":["Jēkabpils Nameja ielas TOP pakomāts - Nameja iela 12","Jēkabpils Rīgas ielas Mini RIMI pakomāts - Rīgas iela 120","Jēkabpils T/C Sprīdītis pakomāts - Celtnieku iela 1","Jēkabpils T/C Sēlija pakomāts - Vienības iela 7","Jēkabpils Vienības ielas Mego pakomāts - Vienības iela 1A"],"Jūrmala":["Jūrmalas Asaru Senās bodes pakomāts - Asaru prospekts 14","Jūrmalas Bulduru tirgus pakomāts - Meža prospekts 36","Jūrmalas Dubultu TOP pakomāts - Strēlnieku prospekts 1","Jūrmalas Kauguru Engures ielas Maxima pakomāts - Engures iela 3","Jūrmalas Kauguru RIMI pakomāts - Talsu šoseja 29","Jūrmalas Kauguru Raiņa ielas Mini RIMI pakomāts - Raiņa iela 74","Jūrmalas Lielupes RIMI pakomāts - Viestura iela 22","Jūrmalas Majoru J. Pliekšāna ielas TOP pakomāts - Jāņa Pliekšāna iela 86","Jūrmalas Mellužu Dārzu ielas 55A pakomāts - Dārzu iela 55A","Jūrmalas Slokas T/C Liedags pakomāts - Ventspils šoseja 32","Jūrmalas Valteru Piekrastes ielas 31A pakomāts - Piekrastes iela 31A","Jūrmalas Ķemeru TOP pakomāts - Emīla Dārziņa iela 16"],"Kadaga":["Kadagas T/C Kadaga pakomāts"],"Kalnciems":["Kalnciema Aibe pakomāts - Lielā iela 11"],"Kalngale":["Kalngales ELVI pakomāts - Ērgļu iela 1B"],"Kandava":["Kandavas Citro pakomāts - Lielā iela 1"],"Katlakalns":["Katlakalna pakomāts - Pļavniekkalna iela 41A"],"Koknese":["Kokneses Lats pakomāts - Hanzas iela 1"],"Kolka":["Kolkas Citro pakomāts"],"Krustkalni":["Krustkalnu T/C A7 pakomāts"],"Krāslava":["Krāslavas Maxima X pakomāts - Rīgas iela 28"],"Kuldīga":["Kuldīgas Gravas ielas ELVI pakomāts - Gravas iela 1","Kuldīgas LIDL pakomāts - Aizputes iela 7","Kuldīgas Stendes ielas Citro pakomāts - Stendes iela 23A","Kuldīgas Sūru ielas RIMI pakomāts - Sūru iela 2"],"Kārsava":["Kārsavas TOP pakomāts - Sporta iela 6"],"Lapmežciems":["Lapmežciema Citro pakomāts"],"Lielvārde":["Lielvārdes TOP pakomāts - Lāčplēša iela 16"],"Liepa":["Liepas TOP pakomāts - Rūpnīcas iela 8A"],"Liepāja":["Liepājas Ganību ielas ELVI pakomāts - Ganību iela 69/71","Liepājas Ganību ielas JYSK pakomāts - Ganību iela 187","Liepājas Krūmu ielas MEGO pakomāts - Krūmu iela 45/47","Liepājas Kuršu laukuma 10 pakomāts - Kuršu laukums 10","Liepājas O. Kalpaka ielas 74 pakomāts - Oskara Kalpaka iela 74","Liepājas P. Brieža ielas 14 pakomāts - Pulkveža Brieža iela 14","Liepājas Rožu laukuma pakomāts - Lielā iela 13","Liepājas Sila ielas TOP pakomāts - Sila iela 3","Liepājas T/C Baata pakomāts - Klaipēdas iela 104C","Liepājas T/C Rietumu centrs pakomāts - Jaunā ostmala 3/5","Liepājas Ziemeļu ielas RIMI pakomāts - Ziemeļu iela 13"],"Limbaži":["Limbažu Pasta ielas pakomāts - Pasta iela 1","Limbažu RIMI pakomāts - Cēsu iela 23"],"Lubāna":["Lubānas O. Kalpaka ielas Vesko pakomāts - Oskara Kalpaka iela 5"],"Ludza":["Ludzas Stacijas ielas 30 pakomāts - Stacijas iela 30"],"Līvāni":["Līvānu Rimi pakomāts - Rīgas iela 89"],"Madliena":["Madlienas ELVI pakomāts"],"Madona":["Madonas Raiņa ielas 34 pakomāts - Raiņa iela 34","Madonas Rūpniecības ielas MINI RIMI pakomāts - Rūpniecības iela 47","Madonas Saules ielas 4 pakomāts - Saules iela 4"],"Malta":["Maltas Lats pakomāts - 1. maija iela 44"],"Mazsalaca":["Mazsalacas pakomāts - Parka iela 1"],"Medemciems":["Medemciema pakomāts - Medemciema iela 1"],"Mālpils":["Mālpils Pirts ielas TOP pakomāts - Pirts iela 5"],"Mārupe":["Mārupes Daugavas ielas 36 ELVI pakomāts - Daugavas iela 36","Mārupes Dzirnieku ielas 24 pakomāts - Dzirnieku iela 24","Mārupes Lielās ielas ELVI pakomāts - Lielā iela 26","Mārupes Omniva šķirošanas centra C ieejas pakomāts - Dzirnieku iela 24","Mārupes RIMI pakomāts - Daugavas iela 31","Mārupes Rožu ielas 2 pakomāts - Rožu iela 2"],"Mērsrags":["Mērsraga Citro pakomāts - Lielā iela 31"],"Naukšēni":["Naukšēnu Lats pakomāts"],"Nereta":["Neretas TOP pakomāts - Raiņa iela 6"],"Nīca":["Nīcas Lats pakomāts - Skolas iela 6"],"Ogre":["Ogres Brīvības ielas 19 pakomāts - Brīvības iela 19","Ogres Kartona fabrikas pakomāts - Brīvības iela 116","Ogres LIDL pakomāts - Kalna prospekts 2A","Ogres Mālkalnes prospekta 3 pakomāts - Mālkalnes prospekts 3","Ogres Rīgas ielas RIMI pakomāts - Rīgas iela 33","Ogres Skolas ielas 4 pakomāts - Skolas iela 4","Ogres T/C Dauga pakomāts - Rīgas iela 23","Ogres T/C Ogres prestižs pakomāts - Mednieku iela 21/23"],"Olaine":["Olaines Stacijas ielas RIMI pakomāts - Stacijas iela 8","Olaines T/C Prasme pakomāts - Zemgales iela 24"],"Ozolaine":["Ozolaines Ābeļu ielas TOP pakomāts - Ābeļu iela 2"],"Ozolnieki":["Ozolnieku ELVI pakomāts - Rīgas iela 42","Ozolnieku TOP pakomāts - Skolas iela 1B"],"Piņķi":["Piņķu Elvi pakomāts - Rīgas iela 8","Piņķu Rīgas ielas RIMI pakomāts - Rīgas iela 23"],"Plakanciems":["Plakanciema pakomāts"],"Pope":["Popes pakomāts"],"Preiļi":["Preiļu Brīvības ielas TOP pakomāts - Brīvības iela 4","Preiļu Rīgas ielas MEGO pakomāts - Rīgas iela 4D"],"Priekule":["Priekules TOP pakomāts - Galvenā iela 1"],"Priekuļi":["Priekuļu Aibe pakomāts - Cēsu prospekts 44"],"Pāvilosta":["Pāvilostas TOP pakomāts - Dzintaru iela 69"],"Pļaviņas":["Pļaviņu TOP pakomāts - Daugavas iela 85"],"Pūre":["Pūres Citro pakomāts"],"Ragana":["Raganas ELVI pakomāts - Tirgus iela 10"],"Ranka":["Rankas pakomāts"],"Rauna":["Raunas TOP pakomāts - Cēsu iela 2A"],"Roja":["Rojas Maxima X pakomāts - Selgas iela 2"],"Ropaži":["Ropažu Lats Pakomāts - Rīgas iela 12"],"Krustiņi":["RĀMKALNI pakomāts"],"Rēzekne":["Rēzeknes Atbrīvošanas alejas Maxima XX pakomāts - Atbrīvošanas aleja 141","Rēzeknes Dārzu ielas 63 pakomāts - Dārzu iela 63","Rēzeknes Dārzu ielas ELFI pakomāts - Dārzu iela 14","Rēzeknes Galdnieku ielas RIMI pakomāts - Galdnieku iela 8","Rēzeknes Kr. Valdemāra ielas Mego pakomāts - Kr. Valdemāra iela 16A","Rēzeknes Stacijas ielas 20A pakomāts - Stacijas iela 20A"],"Rīga":["Rīgas A. Briāna ielas RIMI pakomāts - Krišjāņa Valdemāra iela 62A","Rīgas A. Deglava 110 Rimi pakomāts - Augusta Deglava iela 110","Rīgas A. Deglava ielas 160 LIDL pakomāts - Augusta Deglava iela 160","Rīgas Anniņmuižas bulvāra RIMI pakomāts - Anniņmuižas bulvāris 40A","Rīgas Anniņmuižas ielas 8a LIDL pakomāts - Anniņmuižas iela 8A","Rīgas Artilērijas ielas 40 pakomāts - Artilērijas iela 40","Rīgas Autoostas pakomāts - Prāgas iela 1","Rīgas Avotu ielas 17 pakomāts - Avotu iela 17","Rīgas BARONS KVARTĀLS pakomāts - Cēsu iela 31","Rīgas Baltāsbaznīcas ielas MEGO pakomāts - Baltāsbaznīcas iela 42","Rīgas Berģu ielas Senās Bodes pakomāts - Berģu iela 72B","Rīgas Biķernieku ielas 16a MEGO pakomāts - Biķernieku iela 16A","Rīgas Biķernieku ielas RIMI pakomāts - Biķernieku iela 160 k-6","Rīgas Bolderājas Lats pakomāts - Lemešu iela 20","Rīgas Bolderājas Mego pakomāts - Gobas iela 13","Rīgas Botāniskā dārza Maxima pakomāts - Dzirciema iela 1","Rīgas Brīvības g. 253 Neste pakomāts - Brīvības gatve 253","Rīgas Brīvības gatves 386 Neste pakomāts - Brīvības gatve 386","Rīgas Brīvības gatves 404 RIMI pakomāts - Brīvības gatve 404","Rīgas Brīvības ielas 254 LIDL pakomāts - Brīvības gatve 254","Rīgas Brīvības ielas 35 pakomāts - Brīvības iela 35","Rīgas Brīvības ielas 78a pakomāts - Brīvības iela 78A","Rīgas Buļļu ielas 35 Aibe pakomāts - Buļļu iela 35","Rīgas Bērnu pasaules RIMI pakomāts - Matīsa iela 25","Rīgas Bērnu slimnīcas pakomāts - Vienības gatve 45","Rīgas Dammes tirgus pakomāts - Dammes iela 36A","Rīgas Daugavgrīvas ielas TOP pakomāts - Daugavgrīvas iela 72","Rīgas Deglava ielas Maxima XXX pakomāts - Augusta Deglava iela 67","Rīgas Duntes Biroji pakomāts - Duntes iela 6","Rīgas Duntes ielas Neste pakomāts - Dambja iela 10","Rīgas Dzelzavas ielas 75 LIDL pakomāts - Dzelzavas iela 75B","Rīgas Dzelzavas ielas 78 RIMI pakomāts - Dzelzavas iela 78","Rīgas Dzelzavas ielas 86 Mini RIMI pakomāts - Dzelzavas iela 86","Rīgas Dzirnavu ielas 113 pakomāts - Dzirnavu iela 113","Rīgas Elizabetes ielas 81 pakomāts - Elizabetes iela 81","Rīgas F. Sadovņikova ielas 14 RIMI pakomāts - Firsa Sadovņikova iela 14","Rīgas G. Astras ielas VIADA pakomāts - Gunāra Astras iela 7","Rīgas Gramzdas RIMI pakomāts - Imantas 15. līnija 7","Rīgas Graudu ielas Mego pakomāts - Graudu iela 10","Rīgas Grostonas ielas Maxima XXX pakomāts - Grostonas iela 1","Rīgas Hipokrāta ielas FIX PRICE pakomāts - Hipokrāta iela 26","Rīgas Jaunciema gatves Maxima X pakomāts - Jaunciema gatve 174","Rīgas Juglas ielas 25 MINI RIMI pakomāts - Juglas iela 25","Rīgas Juglas ielas 45 Maxima pakomāts - Juglas iela 45","Rīgas Jūrmalas gatves RIMI pakomāts - Anniņmuižas bulvāris 90","Rīgas Kalnciema ielas 38 LIDL pakomāts - Kalnciema iela 38","Rīgas Kalnciema ielas RIMI pakomāts - Kalnciema iela 41","Rīgas Kalpaka bulvāra 14A pakomāts - Kalpaka bulvāris 14A","Rīgas Katoļu ielas Neste pakomāts - Katoļu iela 4","Rīgas Kleistu ielas Mego pakomāts - Kleistu iela 9","Rīgas Kr. Barona ielas 136 pakomāts - Krišjāņa Barona iela 136","Rīgas Kr. Valdemāra ielas 112 RIMI pakomāts - Krišjāņa Valdemāra iela 112","Rīgas Krasta ielas 40 LIDL pakomāts - Krasta iela 40","Rīgas Krasta ielas 52 pakomāts - Krasta iela 52","Rīgas Kurzemes prospekta 15a Neste pakomāts - Kurzemes prospekts 15A","Rīgas Kurzemes prospekta Mego pakomāts - Kurzemes prospekts 132","Rīgas Latgales ielas 256B RIMI pakomāts - Latgales iela 256B","Rīgas Latgales ielas 414 LIDL pakomāts - Latgales iela 414","Rīgas Latgales ielas 427b Neste pakomāts - Latgales iela 427B","Rīgas Lidoņu ielas 3 MAXIMA X pakomāts - Lidoņu iela 3","Rīgas Lidoņu ielas Mego pakomāts - Lidoņu iela 27 k-1","Rīgas Liepājas ielas Maxima X pakomāts - Liepājas iela 76A","Rīgas Lubānas ielas 113a LIDL pakomāts - Lubānas iela 113A","Rīgas Lāčplēša ielas 76 LIDL pakomāts - Lāčplēša iela 76","Rīgas Mazās stacijas ielas Drogas pakomāts - Mazā Stacijas iela 2A","Rīgas Miera ielas 2 pakomāts - Miera iela 2","Rīgas MĒBEĻU NAMS pakomāts - Dzelzavas iela 72","Rīgas Mīlgrāvja ielas RIMI pakomāts - Mīlgrāvja iela 14","Rīgas Mūkusalas Maxima XX pakomāts - Mūkusalas iela 73","Rīgas Nīcgales ielas 2 RIMI pakomāts - Nīcgales iela 2","Rīgas Nīcgales ielas 53 T/C GREEN pakomāts - Nīcgales iela 53","Rīgas P. Brieža ielas RIMI pakomāts - Pulkveža Brieža iela 33","Rīgas PEPSI CENTRS pakomāts - Uzvaras bulvāris 10","Rīgas Parādes ielas Mego pakomāts - Parādes iela 5B","Rīgas Prūšu ielas 1 LIDL pakomāts - Prūšu iela 1","Rīgas Prūšu ielas 2 Mego pakomāts - Prūšu iela 2","Rīgas Prūšu ielas 22a Mego pakomāts - Prūšu iela 22A","Rīgas Purvciema ielas Beta pakomāts - Purvciema iela 35","Rīgas Pētersalas ielas Maxima pakomāts - Pētersalas iela 18B","Rīgas Pļavnieku ielas BETA pakomāts - Pļavnieku iela 1A","Rīgas Remtes ielas 21 LIDL pakomāts - Remtes iela 21","Rīgas Rītupes ielas Maxima X pakomāts - Rītupes iela 2","Rīgas S. Eizenšteina ielas 29 pakomāts - Sergeja Eizenšteina iela 29","Rīgas S. Eizenšteina ielas 81 LIDL pakomāts - Sergeja Eizenšteina iela 81","Rīgas Saharova ielas 14 Mego pakomāts - Andreja Saharova iela 14","Rīgas Saharova ielas 2 MEGO pakomāts - Andreja Saharova iela 2","Rīgas Saharova ielas 23 RIMI pakomāts - Andreja Saharova iela 23A","Rīgas Saharova ielas Maxima XXX pakomāts - Andreja Saharova iela 20A","Rīgas Skanstes ielas 17 RIMI pakomāts - Skanstes iela 17","Rīgas Sporta Pils dārzu pakomāts - Lielgabalu iela 4","Rīgas Sporta ielas 10 LIDL pakomāts - Sporta iela 10","Rīgas Stabu ielas 24 pakomāts - Stabu iela 24","Rīgas Stirnu ielas RIMI pakomāts - Stirnu iela 26","Rīgas T/C AKROPOLE Alfa pakomāts - Brīvības gatve 372","Rīgas T/C Akropole pakomāts - Latgales iela 257","Rīgas T/C Aleja pakomāts - Vienības gatve 194A","Rīgas T/C DOMINA pakomāts - Ieriķu iela 3","Rīgas T/C Damme pakomāts - Kurzemes prospekts 1A","Rīgas T/C Dole pakomāts - Latgales iela 357","Rīgas T/C Gaiļezers pakomāts - Gaiļezera iela 8","Rīgas T/C Galleria Riga pakomāts - Dzirnavu iela 67","Rīgas T/C IXO pakomāts - Anniņmuižas iela 17","Rīgas T/C Juglas Centrs pakomāts - Juglas krastmala 2","Rīgas T/C Olimpia pakomāts - Āzenes iela 5","Rīgas T/C Ozols pakomāts - Mazā Rencēnu iela 1","Rīgas T/C Riga Plaza pakomāts - Mūkusalas iela 71","Rīgas T/C Spice pakomāts - Lielirbes iela 29","Rīgas T/C Teika Plaza pakomāts - Brīvības gatve 201","Rīgas T/C Venta pakomāts - Zolitūdes iela 34","Rīgas T/C ZOOM pakomāts - Latgales iela 400","Rīgas Tallinas ielas 86 pakomāts - Tallinas iela 86","Rīgas Tilta ielas RIMI pakomāts - Tilta iela 32","Rīgas Tēriņu ielas 55 pakomāts - Tēriņu iela 55","Rīgas Ulbrokas ielas Maxima X pakomāts - Ulbrokas iela 4","Rīgas Vaidavas ielas RIMI pakomāts - Vaidavas iela 9B","Rīgas Vaidelotes ielas RIMI pakomāts - Vaidelotes iela 11A","Rīgas Valdeķu ielas 10 Maxima X pakomāts - Valdeķu iela 10","Rīgas Valdeķu ielas 39A LIDL pakomāts - Valdeķu iela 39A","Rīgas Vecmīlgrāvja Maxima X pakomāts - Augusta Dombrovska iela 74","Rīgas Vecmīlgrāvja RIMI pakomāts - Augusta Dombrovska iela 23","Rīgas Vecmīlgrāvja VIADA pakomāts - Emmas iela 45","Rīgas Vecāķu ELVI pakomāts - Mangaļu prospekts 29","Rīgas Vienības gatves 144 Neste pakomāts - Vienības gatve 144","Rīgas Viestura prospekta 35a TOP pakomāts - Viestura prospekts 35A","Rīgas Zalves ielas TOP pakomāts - Zalves iela 46A","Rīgas Ziepniekkalna MEGO pakomāts - Dižozolu iela 2","Rīgas Āgenskalna Maxima X pakomāts - Pilsoņu iela 1 k-1","Rīgas Āgenskalna RIMI pakomāts - Mārupes iela 10A","Rīgas Čiekurkalna MEGO pakomāts - Čiekurkalna 4. šķērslīnija 4","Rīgas Ķīšezera ielas 6 RIMI pakomāts - Ķīšezera iela 6","Rīgas Ķīšezera ielas 8 LIDL pakomāts - Ķīšezera iela 8"],"Dreiliņi":["Rīgas T/C Sāga pakomāts - Biķeru iela 4"],"Rūjiena":["Rūjienas TOP pakomāts - Brīvības iela 8"],"Sabile":["Sabiles Citro pakomāts - Ventspils iela 9"],"Salacgrīva":["Salacgrīvas Maxima X pakomāts - Vidzemes iela 3A"],"Salaspils":["Salaspils LIDL pakomāts - Skolas iela 4A","Salaspils Miera ielas AIBE pakomāts - Miera iela 24","Salaspils Rīgas ielas ELVI pakomāts - Rīgas iela 24","Salaspils Rīgas ielas TOP pakomāts - Rīgas iela 48","Salaspils Skolas ielas RIMI pakomāts - Skolas iela 4E"],"Saldus":["Saldus Brīvības ielas Maxima XX pakomāts - Brīvības iela 30","Saldus Kalna ielas AIBE KAIVA pakomāts - Kalna iela 20","Saldus Lielās ielas Lats pakomāts - Lielā iela 73","Saldus Striķu ielas Maxima X pakomāts - Striķu iela 10C"],"Saulkalne":["Saulkalnes TOP pakomāts - Daugavmalas iela 24A"],"Saulkrasti":["Saulkrastu Ainažu ielas RIMI pakomāts - Ainažu iela 30","Saulkrastu TOP pakomāts - Rīgas iela 51"],"Saurieši":["Sauriešu DELFĪNS pakomāts - Kazāru iela 4"],"Sece":["Seces pakomāts"],"Sigulda":["Siguldas Kr. Barona ielas Beta pakomāts - Krišjāņa Barona iela 6","Siguldas L. Paegles ielas Maxima pakomāts - Leona Paegles iela 3","Siguldas T/C Gāles Nams pakomāts - Gāles iela 23A","Siguldas T/C Šokolāde pakomāts - Strēlnieku iela 2","Siguldas Vidus ielas ELVI pakomāts - Vidus iela 1"],"Skaistkalne":["Skaistkalnes VESKO pakomāts - Rīgas iela 3"],"Skrunda":["Skrundas ELVI pakomāts - Ventas iela 13"],"Skrīveri":["Skrīveru TOP pakomāts - Daugavas iela 97"],"Slampe":["Slampes pakomāts"],"Smiltene":["Smiltenes Daugavas ielas TOP pakomāts - Daugavas iela 1B","Smiltenes Rīgas ielas TOP pakomāts - Rīgas iela 5","Smiltenes T/C Centrs pakomāts - Baznīcas laukums 2"],"Stende":["Stendes Brīvības ielas Citro pakomāts - Brīvības iela 12"],"Straupe":["Straupes VIADA pakomāts"],"Strenči":["Strenču TOP pakomāts - Valkas iela 2"],"Suntaži":["Suntažu AIBE pakomāts"],"Talsi":["Talsu Dundagas ielas Citro pakomāts - Dundagas iela 21","Talsu Dundagas ielas RIMI pakomāts - Dundagas iela 18","Talsu Rīgas ielas Maxima XX pakomāts - Rīgas iela 8","Talsu T/C Talsu Centrs pakomāts - Lielā iela 2"],"Tilža":["Tilžas pakomāts - Brīvības iela 26"],"Tukums":["Tukuma Alīnes ielas TOP pakomāts - Alīnes iela 1A","Tukuma Kurzemes ielas 2A Mego pakomāts - Kurzemes iela 2A","Tukuma LIDL pakomāts - Raudas iela 17A","Tukuma Pasta ielas RIMI pakomāts - Pasta iela 14","Tukuma T/C Aplis pakomāts - Eksporta iela 6"],"Tīnūži":["Tīnūžu Senās Bodes pakomāts"],"Ugāle":["Ugāles Lats pakomāts - Skolas iela 7"],"Ulbroka":["Ulbrokas ELVI pakomāts - Peldu iela 2","Ulbrokas TOP pakomāts - Institūta iela 7"],"Upesciems":["Upesciema Lats pakomāts - Ziedu iela 2C"],"Valdemārpils":["Valdemārpils Lielās ielas 17A pakomāts - Lielā iela 17A"],"Valdlauči":["Valdlauču TOP pakomāts - Atpūtas iela 5"],"Valka":["Valkas Raiņa ielas Maxima X pakomāts - Raiņa iela 7","Valkas T/C Walk pakomāts - Ausekļa iela 54"],"Valmiera":["Valmieras Fabrikas ielas RIMI pakomāts - Fabrikas iela 2","Valmieras Miera ielas TOP pakomāts - Miera iela 5","Valmieras Nākotnes ielas Maxima X pakomāts - Nākotnes iela 2","Valmieras Rubenes ielas RIMI pakomāts - Rubenes iela 51","Valmieras Rīgas ielas TOP pakomāts - Rīgas iela 64","Valmieras Stacijas ielas 33 pakomāts - Stacijas iela 33","Valmieras T/C Valleta pakomāts - Rīgas iela 4"],"Vangaži":["Vangažu Aibe pakomāts - Gaujas iela 19A"],"Varakļāni":["Varakļānu TOP pakomāts - Pils iela 7D"],"Variņi":["Variņu pakomāts - Oktobra iela 9"],"Vecpiebalga":["Vecpiebalgas TOP pakomāts - Alauksta iela 2"],"Vecumnieki":["Vecumnieku Lats pakomāts - Rīgas iela 24B"],"Ventspils":["Ventspils Celtnieku ielas ELVI pakomāts - Celtnieku iela 3","Ventspils Ganību ielas Mego pakomāts - Ganību iela 22/24","Ventspils Inženieru ielas MEGO pakomāts - Inženieru iela 65","Ventspils Poruka ielas RIMI pakomāts - J. Poruka iela 5","Ventspils T/C Tobago pakomāts - Lielais prospekts 3/5","Ventspils Talsu ielas Citro pakomāts - Talsu iela 6","Ventspils Tārgales ielas Mini RIMI pakomāts - Tārgales iela 62"],"Viesīte":["Viesītes TOP pakomāts - Raiņa iela 23"],"Viļaka":["Viļakas Balvu ielas pakomāts - Balvu iela 5"],"Viļāni":["Viļānu Brīvības ielas pakomāts - Brīvības iela 13"],"Zaķumuiža":["Zaķumuižas pakomāts - Vidzemes prospekts 11A"],"Zaļenieki":["Zaļenieku TOP pakomāts - Centra iela 7"],"Zilupe":["Zilupes TOP pakomāts - Brīvības iela 34"],"Zvejniekciems":["Zvejniekciema Bērzu alejas ELVI pakomāts - Bērzu aleja 5"],"Ādaži":["Ādažu Gaujas ielas Mini RIMI pakomāts - Gaujas iela 6","Ādažu Rīgas gatves ELVI pakomāts - Rīgas gatve 51","Ādažu T/C Apelsīns pakomāts - Rīgas gatve 5"],"Ērgļi":["Ērgļu Zaļās ielas TOP pakomāts - Zaļā iela 1"],"Ķegums":["Ķeguma ELVI pakomāts - Ķeguma prospekts 5C"],"Ķekava":["Ķekavas Gaismas ielas Maxima X pakomāts - Gaismas iela 1A","Ķekavas T/C Dālderi pakomāts - Nākotnes iela 1","Ķekavas T/C Liiba pakomāts - Rīgas iela 22A"],"Ļaudona":["Ļaudonas pakomāts - Brīvības iela 8"]};
const PRICE_STEPS = Array.from({length:81},(_,index)=>index);
let leafletMap = null;
let mapMarkers = [];
let markerCluster = null;
let venuePage = 1;
const VENUES_PER_PAGE = 6;
let currentLang = safeGet('sb_lang','lv');
if(!['lv','en','ru'].includes(currentLang)) currentLang='lv';
let CART = []; // initialized after loadCart() is defined (see below at migrateCart)
let activeDM = 0;

const DM_STORE_KEY='sb_dm_history_v10';
const DM_CONTACTS=[
 {name:'Kārlis Ozols',sport:'Teniss',city:'Rīga',level:'Vidējs'},
 {name:'Elīna Kalniņa',sport:'Padel',city:'Mārupe',level:'Iesācējs'},
 {name:'Roberts Jansons',sport:'Basketbols',city:'Jūrmala',level:'Pieredzējis'},
 {name:'Anna Liepa',sport:'Skriešana',city:'Rīga',level:'Iesācējs'},
 {name:'Mareks Liepiņš',sport:'Futbols',city:'Liepāja',level:'Vidējs'},
 {name:'Mārtiņš Gailis',sport:'Disku golfs',city:'Cēsis',level:'Vidējs'}
];
const DM_SEED_CONVERSATIONS={
  'Kārlis Ozols':{
    lv:[
      {from:'them',text:'Čau! Meklēju tenisa partneri dubultspēlei vai sparringam darba dienu vakaros ENRI kortos Kalnciema ielā vai Mežaparkā.'},
      {from:'me',text:'Sveiks, Kārli! Labprāt uzspēlētu. Kā tev ar ceturtdienu ap 18:30 ENRI kortos?'},
      {from:'them',text:'Ceturtdiena 18:30 der ideāli! Paņemšu svaigu Dunlop bumbiņu bundžu un varu norezervēt laukumu caur sistēmu.'}
    ],
    en:[
      {from:'them',text:'Hi! Looking for a tennis partner for doubles or sparring on weekday evenings at ENRI Kalnciema or Mezaparks.'},
      {from:'me',text:'Hi Karlis! Would love to play. How is Thursday around 18:30 at ENRI?'},
      {from:'them',text:'Thursday 18:30 is perfect! I will bring fresh Dunlop balls and can book the court.'}
    ],
    ru:[
      {from:'them',text:'Привет! Ищу партнёра для тенниса по вечерам в будни в кортах ENRI на Калнциема или в Межапарке.'},
      {from:'me',text:'Привет, Карлис! С удовольствием. Как насчет четверга около 18:30 в ENRI?'},
      {from:'them',text:'Четверг 18:30 отлично! Возьму банку новых мячей Dunlop и могу забронировать корт.'}
    ]
  },
  'Elīna Kalniņa':{
    lv:[
      {from:'them',text:'Sveika! Nesen sāku spēlēt padel Mārupes klubā. Meklēju kādu, ar ko mierīgi patrenēt izspēles un sitienus pie stikliem.'},
      {from:'me',text:'Čau, Elīna! Es arī labprāt patrenētos. Kā tev der sestdienas rīts ap 10:00?'},
      {from:'them',text:'Sestdiena 10:00 ir lieliski! Mārupē iekštelpu kortos vienmēr ir patīkama atmosfēra. Saskaņojam laiku!'}
    ],
    en:[
      {from:'them',text:'Hi! Recently took up padel at Marupe club. Looking for someone relaxed to practice rallies and glass shots.'},
      {from:'me',text:'Hi Elina! I would gladly join for practice. How is Saturday morning around 10:00?'},
      {from:'them',text:'Saturday 10:00 is great! The indoor courts in Marupe are always top quality. Let us lock it in!'}
    ],
    ru:[
      {from:'them',text:'Привет! Недавно начала играть в падел в Марупе. Ищу кого-то спокойного для отработки ударов и отскоков от стекла.'},
      {from:'me',text:'Привет, Элина! Я тоже с удовольствием потренируюсь. Как насчет субботы около 10:00 утра?'},
      {from:'them',text:'Суббота 10:00 отлично! В Марупе отличные корты. Договорились!'}
    ]
  },
  'Roberts Jansons':{
    lv:[
      {from:'them',text:'Sveiks! Vācam komandu 3x3 basketbola spēlēm Majoros vai Bulduros. Pietrūkst viens aktīvs spēlētājs ar labu aizsardzību.'},
      {from:'me',text:'Čau, Robert! Labprāt pievienotos. Kurās dienās parasti spēlējat?'},
      {from:'them',text:'Otrdienās un svētdienās ap 19:00. Bumba ir, laukums brīvs, spēlējam ar labu azartu!'}
    ],
    en:[
      {from:'them',text:'Hey! Putting together a 3x3 basketball run in Majori or Bulduri. Need one active defender.'},
      {from:'me',text:'Hi Roberts! Would love to join. Which days do you usually play?'},
      {from:'them',text:'Tuesdays and Sundays around 19:00. Ball is ready, court is free, always good energy!'}
    ],
    ru:[
      {from:'them',text:'Привет! Собираем состав для стритбола 3х3 в Майори или Булдури. Нужен надежный игрок в защиту.'},
      {from:'me',text:'Привет, Роберт! С радостью присоединюсь. В какие дни обычно играете?'},
      {from:'them',text:'Вторник и воскресенье около 19:00. Мяч есть, площадка свободна, играем бодро!'}
    ]
  },
  'Anna Liepa':{
    lv:[
      {from:'them',text:'Čau! Plānoju 6 km rīta skrējienus pa Uzvaras parku un Māras dīķi. Vienai reizēm grūti saņemties, labprāt atrastu kompanjonu.'},
      {from:'me',text:'Sveika, Anna! Rīta skrējiens der lieliski. Cikos parasti sāc?'},
      {from:'them',text:'Ap 07:30 darba dienās. Temps mierīgs, ap 6:00 min/km. Ja der, varam rīt no rīta pamēģināt!'}
    ],
    en:[
      {from:'them',text:'Hey! Planning 6 km morning runs around Uzvaras park and Maras pond. Hard to stay consistent alone, looking for a running buddy.'},
      {from:'me',text:'Hi Anna! Morning run sounds great. What time do you usually start?'},
      {from:'them',text:'Around 07:30 on weekdays. Relaxed pace, about 6:00 min/km. If that suits you, let us try tomorrow!'}
    ],
    ru:[
      {from:'them',text:'Привет! Планирую утренние пробежки по 6 км вокруг парка Победы и пруда Марас. Ищу компанию для регулярности.'},
      {from:'me',text:'Привет, Анна! Утренний бег отлично. Во сколько обычно выходишь?'},
      {from:'them',text:'Около 07:30 по будням. Спокойный темп, около 6:00 мин/км. Если подходит, можем попробовать завтра!'}
    ]
  },
  'Mareks Liepiņš':{
    lv:[
      {from:'them',text:'Sveiks! Liepājā LOC Olimpiskajā centrā organizējam 5x5 telpu futbola spēles ceturtdienu vakaros. Vai vēlies pievienoties?'},
      {from:'me',text:'Čau, Marek! Futbols der lieliski. Cikos parasti sākas spēle?'},
      {from:'them',text:'Plkst. 20:00! Ir ģērbtuves, dušas un draudzīga kompānija. Būsi gaidīts!'}
    ],
    en:[
      {from:'them',text:'Hi! Organizing 5v5 indoor football at Liepaja LOC Olympic Centre on Thursday evenings. Want to join?'},
      {from:'me',text:'Hey Mareks! Football is great. What time does the game kick off?'},
      {from:'them',text:'20:00 sharp! Lockers and showers available, friendly atmosphere. You are welcome!'}
    ],
    ru:[
      {from:'them',text:'Привет! В Лиепае в олимпийском центре LOC организуем футзал 5х5 по четвергам вечером. Хочешь с нами?'},
      {from:'me',text:'Привет, Марек! Футбол отлично. Во сколько начало?'},
      {from:'them',text:'В 20:00! Раздевалки и душ есть, отличная команда. Ждем!'}
    ]
  },
  'Mārtiņš Gailis':{
    lv:[
      {from:'them',text:'Čau! Eju regulāri izmest 18 grozu disku golfa apli Cēsīs vai Priekuļos. Kāds vēlas pievienoties brīvdienās?'},
      {from:'me',text:'Sveiks! Cēsu trase ir lieliska. Cikos plāno iet?'},
      {from:'them',text:'Svētdien ap 11:00 pie pirmā groza. Man somā ir pāris lieki draiveri un puteri, ja vajag aizdot!'}
    ],
    en:[
      {from:'them',text:'Hey! Frequently play the 18-basket disc golf layout in Cesis or Priekuli. Anyone up for a weekend round?'},
      {from:'me',text:'Hi Martins! The Cesis course is fantastic. What time are you thinking?'},
      {from:'them',text:'Sunday around 11:00 at basket one. I have spare drivers and putters if you need to borrow!'}
    ],
    ru:[
      {from:'them',text:'Привет! Регулярно прохожу 18 корзин диск-гольфа в Цесисе или Приекули. Кто хочет присоединиться на выходных?'},
      {from:'me',text:'Привет, Мартиньш! Трасса в Цесисе отличная. Во сколько планируешь?'},
      {from:'them',text:'В воскресенье около 11:00 у первой корзины. В сумке есть запасные драйверы и паттеры, если нужно!'}
    ]
  }
};
const AI_PARTNER_CONTEXTS={
 'Kārlis Ozols':{systemPrompt:'Act as Kārlis, a 28-year-old intermediate tennis enthusiast from Rīga. You speak in a casual, active, friendly sports tone. You are looking to book a tennis court this week.'},
 'Roberts Jansons':{systemPrompt:'Act as Roberts, an advanced basketball player from Jūrmala looking for a 3x3 local match.'}
};
const SPORTABIEDRS_AI_KNOWLEDGE_GRAPH={
 venues:()=>VENUES.map(v=>({name:v.name,sport:v.sport,city:v.city,address:v.address,price:v.price,bookable:v.bookable===true})),
 products:()=>PRODUCTS.map(p=>({name:p.name,brand:p.brand,sport:p.sport,price:euro(p.price)}))
};
let DM_HISTORY = safeGet(DM_STORE_KEY,null);
if(!Array.isArray(DM_HISTORY) || DM_HISTORY.length>DM_CONTACTS.length) DM_HISTORY=DM_CONTACTS.map(()=>[]);
while(DM_HISTORY.length<DM_CONTACTS.length) DM_HISTORY.push([]);
DM_HISTORY=DM_HISTORY.map(history=>Array.isArray(history)?history.filter(m=>m&&typeof m==='object'&&typeof m.text==='string'&&(m.from==='me'||m.from==='them')).map(m=>({from:m.from,text:String(m.text)})):[]);
let clerk=null;

function updateActiveNav(){
 const hash=location.hash||'#main';
 document.querySelectorAll('.nav nav a,.mobile-nav-panel a').forEach(a=>{
   const active=a.getAttribute('href')===hash;
   a.classList.toggle('active',active);
   if(active)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current');
 });
}
function closeMobileNav(){
 const p=document.getElementById('mobileNavPanel'),b=document.getElementById('mobileNavToggle');
 if(!p||!b)return; p.hidden=true;b.setAttribute('aria-expanded','false');
}


function safeGet(k,f){try{const v=localStorage.getItem(k);return v===null?f:JSON.parse(v)}catch{return f}}
function safeSet(k,v){try{localStorage.setItem(k,JSON.stringify(v));return true}catch{return false}}
function esc(s){return String(s??'').replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]))}
function euro(n){return Number(n).toFixed(2).replace('.',',')+' €'}
/* ── Toast System (toastify-js pattern, 5k⭐) ─────────────────────────────
 * Stacked slide-in toasts from bottom-right. Supports type: success/error/info.
 * Each toast is independent - no overwriting, proper stacking.                */
function toast(m, opts={}){
  const {type='info', duration=3600} = typeof opts==='object'?opts:{};
  const container = document.getElementById('sb-toast-container') || (() => {
    const c=document.createElement('div'); c.id='sb-toast-container'; c.setAttribute('aria-live','polite'); c.setAttribute('role','status'); document.body.appendChild(c); return c;
  })();
  const el=document.createElement('div');
  el.className=`sb-toast sb-toast--${type}`;
  el.textContent=m;
  el.setAttribute('role','alert');
  container.appendChild(el);
  requestAnimationFrame(()=>el.classList.add('sb-toast--visible'));
  const dismiss=()=>{el.classList.remove('sb-toast--visible'); el.addEventListener('transitionend',()=>el.remove(),{once:true})};
  const timer=setTimeout(dismiss, duration);
  el.addEventListener('click',()=>{clearTimeout(timer);dismiss();});
}

/* ── Debounce (you-dont-need-lodash 19k⭐ pattern) ───────────────────────
 * Wraps any fn to fire only after 'wait' ms of silence. 4 lines, zero deps. */
/* ── Backend endpoints ───────────────────────────────────────────────────────
 * The site is deployed on Vercel (serverless functions live in /api), while the
 * original build called Netlify paths (/.netlify/functions/*). Try /api first, fall
 * back to the Netlify path, remember which one answered, and stop calling an
 * endpoint that is not deployed at all (returns null so callers can degrade).   */
const API_ROUTE_CACHE={};
async function apiFetch(name,opts={}){
  const cached=API_ROUTE_CACHE[name];
  if(cached==='missing') return null;
  const candidates=cached?[cached]:[`/api/${name}`,`/.netlify/functions/${name}`];
  let last=null;
  for(const url of candidates){
    let r;
    try{ r=await fetch(url,opts); }catch(err){ last=null; continue; }
    const notDeployed=!cached&&(r.status===404||r.status===405);
    if(notDeployed){ last=r; continue; }
    API_ROUTE_CACHE[name]=url;
    return r;
  }
  if(!cached) API_ROUTE_CACHE[name]='missing';
  return null;
}
function debounce(fn, wait=250){
  let timer;
  return function(...args){ clearTimeout(timer); timer=setTimeout(()=>fn.apply(this,args), wait); };
}

/* Sport Color Palette: vibrant hues for divIcon teardrop pins and clusters */
const SPORT_PIN_COLORS={
  tennis:'#84cc16', padel:'#06b6d4', basketball:'#ea580c', football:'#10b981',
  hockey:'#4f46e5', volleyball:'#0ea5e9', boxing:'#ef4444', fitness:'#9333ea',
  swimming:'#0284c7', running:'#ec4899', cycling:'#f59e0b', discgolf:'#14b8a6',
  badminton:'#f43f5e','table-tennis':'#f97316', climbing:'#6366f1', judo:'#64748b',
  athletics:'#ea580c', golf:'#059669', yoga:'#9333ea', pickleball:'#06b6d4',
  extreme:'#f59e0b', default:'#f05a22'
};

/* ── Lazy Load Observer (lazysizes 17k⭐ pattern) ────────────────────────
 * Swaps data-src → src when element enters viewport. Attach to any <img>.   */
const lazyObserver = ('IntersectionObserver' in window) ? new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(!entry.isIntersecting) return;
    const img=entry.target;
    if(img.dataset.src){ img.src=img.dataset.src; delete img.dataset.src; }
    lazyObserver.unobserve(img);
  });
},{rootMargin:'200px 0px'}) : null;

function observeLazy(img){ if(lazyObserver) lazyObserver.observe(img); else if(img.dataset.src){ img.src=img.dataset.src; } }

function norm(s){return String(s||'').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/€/g,' eur ').replace(/[^\p{L}\p{N}\s.-]/gu,' ').replace(/\s+/g,' ').trim()}
function mediaUrl(url){
  if(!url || typeof url !== 'string') return '';
  if(url.startsWith('assets/') || url.startsWith('data:') || url.startsWith('blob:')) return url;
  if(url.includes('wsrv.nl')) return url;
  return `https://wsrv.nl/?url=${encodeURIComponent(url)}&w=480&output=webp&q=80`;
}


/* Local photography (assets/sports). Used for sport tiles and as a decorative header in the
   booking dialog. Venue cards never show a stock photo pretending to be the venue. */
const SPORT_COVERS={
 tennis:'assets/sports/tennis.webp',
 basketball:'assets/sports/basketball.webp',
 football:'assets/sports/football.webp',
 hockey:'assets/sports/hockey.webp',
 volleyball:'assets/sports/volleyball.webp',
 boxing:'assets/sports/boxing.webp',
 swimming:'assets/sports/swimming.webp',
 running:'assets/sports/running.webp',
 cycling:'assets/sports/cycling.webp',
 fitness:'assets/sports/fitness.webp',
 discgolf:'assets/sports/discgolf.webp',
 golf:'assets/sports/golf.webp',
 padel:'assets/sports/padel.webp',
 extreme:'assets/hero-training-1200.webp',
 climbing:'assets/hero-training-1200.webp'
};
function venueFallbackDataUrl(sportKey){
 const fill='#e4eee7';
 return 'data:image/svg+xml;charset=UTF-8,'+encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 520"><rect width="800" height="520" fill="${fill}"/><circle cx="650" cy="105" r="150" fill="#d6e4da"/><circle cx="130" cy="420" r="190" fill="#dce9df"/></svg>`);
}
function venueImage(v){
 if(v.image && typeof v.image === 'string' && v.image.trim()){
   return mediaUrl(v.image);
 }
 return SPORT_COVERS[v.sportKey] || 'assets/hero-training-1200.webp';
}

function venueImageError(img){
 const parent=img.parentElement;
 img.remove();
 if(parent){parent.classList.remove('has-image');parent.classList.add('image-error')}
}

function venueImageHtml(v, cls=''){
 const src=venueImage(v);
 const img=`<img src="${esc(src)}" alt="${esc(v.name)}" loading="lazy" decoding="async" referrerpolicy="no-referrer" onload="this.parentElement.classList.add('has-image')" onerror="venueImageError(this)">`;
 return `<div class="venue-media ${cls} has-image">${img}</div>`;
}

/* ── Cart Persistence (Medusa 32k⭐ pattern) ──────────────────────────────
 * Schema versioning: CART_SCHEMA_VERSION bump clears stale carts gracefully.
 * 7-day expiry: cart expires like production e-commerce stores do it.         */
const CART_SCHEMA_VERSION = 3;
const CART_TTL_MS = 7 * 24 * 60 * 60 * 1000; // 7 days

function migrateCart(c){
  if(!Array.isArray(c)) return [];
  return c.map(x=>{
    let id=x.id||PRODUCTS[x.idx]?.id;
    if(id==='ccm-tacks-as580-stick') id='ccm-tacks-as580-skates';
    const key = x.key || (x.variant ? `${id}::${x.variant}` : id);
    return {
      key,
      id,
      variant: x.variant || null,
      variantTitle: x.variantTitle || null,
      price: typeof x.price === 'number' ? x.price : null,
      qty: Math.max(1, Number(x.qty??x.quantity??1))
    };
  }).filter(x=>PRODUCTS.some(p=>p.id===x.id));
}
function loadCart(){
  try{
    const raw=localStorage.getItem('sb_cart_v2');
    if(!raw) return migrateCart(safeGet('sb_cart',[])); // upgrade old format
    const parsed=JSON.parse(raw);
    if(parsed?.v!==CART_SCHEMA_VERSION) return [];
    if(parsed?.savedAt && Date.now()-parsed.savedAt > CART_TTL_MS){ localStorage.removeItem('sb_cart_v2'); return []; }
    return migrateCart(parsed?.items||[]);
  }catch{ return []; }
}
CART = loadCart(); // ← versioned, expiry-aware init

function productById(id){return PRODUCTS.find(p=>p.id===id)}


/*
 * Sport marker engine v3
 * Local, deterministic artwork. No remote image dependency inside map markers,
 * so a slow/blocked CDN can never produce the broken-image marker seen before.
 * Standard sports use the native Twemoji/Unicode artwork style; padel and
 * pickleball use compact purpose-built filled vector marks.
 * Twemoji reference: https://github.com/jdecked/twemoji
 */
const SPORT_SVGS = {
  "tennis": "<svg viewBox=\"0 0 32 32\" width=\"100%\" height=\"100%\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\">\n    <defs>\n      <radialGradient id=\"t-ball\" cx=\"35%\" cy=\"30%\" r=\"65%\">\n        <stop offset=\"0%\" stop-color=\"#ebff47\"/>\n        <stop offset=\"45%\" stop-color=\"#ccff00\"/>\n        <stop offset=\"80%\" stop-color=\"#8ec700\"/>\n        <stop offset=\"100%\" stop-color=\"#558000\"/>\n      </radialGradient>\n      <filter id=\"t-glow\" x=\"-10%\" y=\"-10%\" width=\"120%\" height=\"120%\">\n        <feDropShadow dx=\"0\" dy=\"2\" stdDeviation=\"1.5\" flood-color=\"#000\" flood-opacity=\"0.3\"/>\n      </filter>\n    </defs>\n    <circle cx=\"16\" cy=\"16\" r=\"14\" fill=\"url(#t-ball)\" filter=\"url(#t-glow)\"/>\n    <path d=\"M6 7.5C11 11.5 11 20.5 6 24.5\" stroke=\"#ffffff\" stroke-width=\"2\" stroke-linecap=\"round\" opacity=\"0.95\"/>\n    <path d=\"M26 7.5C21 11.5 21 20.5 26 24.5\" stroke=\"#ffffff\" stroke-width=\"2\" stroke-linecap=\"round\" opacity=\"0.95\"/>\n    <ellipse cx=\"11.5\" cy=\"10\" rx=\"3.5\" ry=\"2\" fill=\"#ffffff\" opacity=\"0.45\" transform=\"rotate(-30 11.5 10)\"/>\n  </svg>",
  "basketball": "<svg viewBox=\"0 0 32 32\" width=\"100%\" height=\"100%\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\">\n    <defs>\n      <radialGradient id=\"bb-grad\" cx=\"35%\" cy=\"30%\" r=\"70%\">\n        <stop offset=\"0%\" stop-color=\"#ff9142\"/>\n        <stop offset=\"50%\" stop-color=\"#e8590c\"/>\n        <stop offset=\"85%\" stop-color=\"#b03400\"/>\n        <stop offset=\"100%\" stop-color=\"#661a00\"/>\n      </radialGradient>\n      <filter id=\"bb-sh\">\n        <feDropShadow dx=\"0\" dy=\"2\" stdDeviation=\"1.5\" flood-color=\"#000\" flood-opacity=\"0.35\"/>\n      </filter>\n    </defs>\n    <circle cx=\"16\" cy=\"16\" r=\"14\" fill=\"url(#bb-grad)\" filter=\"url(#bb-sh)\"/>\n    <path d=\"M2 16h28M16 2v28\" stroke=\"#1f1815\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>\n    <path d=\"M5.5 6C11 11 11 21 5.5 26M26.5 6C21 11 21 21 26.5 26\" stroke=\"#1f1815\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>\n    <ellipse cx=\"12\" cy=\"9.5\" rx=\"4\" ry=\"2\" fill=\"#ffffff\" opacity=\"0.3\" transform=\"rotate(-25 12 9.5)\"/>\n  </svg>",
  "football": "<svg viewBox=\"0 0 32 32\" width=\"100%\" height=\"100%\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\">\n    <defs>\n      <radialGradient id=\"fb-ball\" cx=\"35%\" cy=\"30%\" r=\"70%\">\n        <stop offset=\"0%\" stop-color=\"#ffffff\"/>\n        <stop offset=\"65%\" stop-color=\"#e4e6eb\"/>\n        <stop offset=\"90%\" stop-color=\"#a8adb8\"/>\n        <stop offset=\"100%\" stop-color=\"#555a63\"/>\n      </radialGradient>\n      <filter id=\"fb-sh\">\n        <feDropShadow dx=\"0\" dy=\"2\" stdDeviation=\"1.5\" flood-color=\"#000\" flood-opacity=\"0.35\"/>\n      </filter>\n    </defs>\n    <circle cx=\"16\" cy=\"16\" r=\"14\" fill=\"url(#fb-ball)\" filter=\"url(#fb-sh)\"/>\n    <!-- Center pentagon -->\n    <polygon points=\"16,11 20.8,14.5 19,20 13,20 11.2,14.5\" fill=\"#181a1d\"/>\n    <!-- Outer seams and patches -->\n    <path d=\"M16 11V3.5M20.8 14.5L28 12M19 20l5.5 6M13 20l-5.5 6M11.2 14.5L4 12\" stroke=\"#181a1d\" stroke-width=\"1.5\" stroke-linecap=\"round\"/>\n    <!-- Edge patches -->\n    <path d=\"M12 2.5a14 14 0 0 1 8 0L16 6zM28.5 8a14 14 0 0 1 2.5 7.5L26 14zM24 27a14 14 0 0 1-5 2.5L20 25zM8 27a14 14 0 0 0 5 2.5L12 25zM3.5 8A14 14 0 0 0 1 15.5L6 14z\" fill=\"#181a1d\" opacity=\"0.9\"/>\n    <ellipse cx=\"12\" cy=\"8.5\" rx=\"4\" ry=\"2\" fill=\"#ffffff\" opacity=\"0.45\" transform=\"rotate(-25 12 8.5)\"/>\n  </svg>",
  "volleyball": "<svg viewBox=\"0 0 32 32\" width=\"100%\" height=\"100%\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\">\n    <defs>\n      <radialGradient id=\"vb-sh\" cx=\"35%\" cy=\"30%\" r=\"70%\">\n        <stop offset=\"0%\" stop-color=\"#ffffff\" stop-opacity=\"0.3\"/>\n        <stop offset=\"100%\" stop-color=\"#000000\" stop-opacity=\"0.35\"/>\n      </radialGradient>\n      <filter id=\"vb-drop\">\n        <feDropShadow dx=\"0\" dy=\"2\" stdDeviation=\"1.5\" flood-color=\"#000\" flood-opacity=\"0.35\"/>\n      </filter>\n    </defs>\n    <!-- Base sphere -->\n    <circle cx=\"16\" cy=\"16\" r=\"14\" fill=\"#f7f9fa\" filter=\"url(#vb-drop)\"/>\n    <!-- Mikasa swirl panels: blue, yellow, white -->\n    <path d=\"M16 2a14 14 0 0 1 10 4.2L20 12c-3-3-6-2-8-1L16 2z\" fill=\"#1b4d9b\"/>\n    <path d=\"M26 6.2a14 14 0 0 1 4 9.8H20c0-3-1-5-4-6l10-7.6z\" fill=\"#ffd000\"/>\n    <path d=\"M30 16a14 14 0 0 1-4 10l-6-6c3-1 4-4 4-6h6z\" fill=\"#1b4d9b\"/>\n    <path d=\"M26 26a14 14 0 0 1-10 4l1-10c3 0 6-2 7-4l2 10z\" fill=\"#ffd000\"/>\n    <path d=\"M16 30a14 14 0 0 1-10-4l6-6c1 3 4 5 7 4l-3 6z\" fill=\"#1b4d9b\"/>\n    <path d=\"M6 26a14 14 0 0 1-4-10h10c0 3 2 5 4 6L6 26z\" fill=\"#ffd000\"/>\n    <path d=\"M2 16a14 14 0 0 1 4-10l6 6c-2 1-3 4-4 6L2 16z\" fill=\"#1b4d9b\"/>\n    <path d=\"M6 6a14 14 0 0 1 10-4l-1 10c-3 0-5 2-7 4L6 6z\" fill=\"#ffd000\"/>\n    <circle cx=\"16\" cy=\"16\" r=\"14\" fill=\"url(#vb-sh)\"/>\n    <circle cx=\"16\" cy=\"16\" r=\"14\" stroke=\"#ffffff\" stroke-width=\"0.8\" opacity=\"0.6\"/>\n  </svg>",
  "padel": "<svg viewBox=\"0 0 32 32\" width=\"100%\" height=\"100%\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\">\n    <defs>\n      <linearGradient id=\"p-frame\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n        <stop offset=\"0%\" stop-color=\"#2d3038\"/>\n        <stop offset=\"40%\" stop-color=\"#1b1c20\"/>\n        <stop offset=\"100%\" stop-color=\"#0e0f12\"/>\n      </linearGradient>\n      <radialGradient id=\"p-face\" cx=\"40%\" cy=\"35%\" r=\"65%\">\n        <stop offset=\"0%\" stop-color=\"#b6f000\"/>\n        <stop offset=\"50%\" stop-color=\"#8fd400\"/>\n        <stop offset=\"100%\" stop-color=\"#5a8c00\"/>\n      </radialGradient>\n      <filter id=\"p-drop\">\n        <feDropShadow dx=\"0\" dy=\"2\" stdDeviation=\"1.5\" flood-color=\"#000\" flood-opacity=\"0.35\"/>\n      </filter>\n    </defs>\n    <!-- Handle -->\n    <rect x=\"14\" y=\"21\" width=\"4\" height=\"9\" rx=\"1.5\" fill=\"#e8eaed\"/>\n    <path d=\"M14 23h4M14 25h4M14 27h4\" stroke=\"#121311\" stroke-width=\"0.7\"/>\n    <rect x=\"13.5\" y=\"28.5\" width=\"5\" height=\"2\" rx=\"1\" fill=\"#ff4d00\"/>\n    <!-- Head frame -->\n    <path d=\"M16 2C9.5 2 5 6.5 5 13c0 4.5 2.5 8 6 9.5v1.5h10v-1.5c3.5-1.5 6-5 6-9.5 0-6.5-4.5-11-11-11z\" fill=\"url(#p-frame)\" filter=\"url(#p-drop)\"/>\n    <!-- Perforated Face -->\n    <ellipse cx=\"16\" cy=\"12.5\" rx=\"8\" ry=\"9\" fill=\"url(#p-face)\"/>\n    <!-- Holes -->\n    <circle cx=\"13\" cy=\"9\" r=\"1.1\" fill=\"#121311\"/>\n    <circle cx=\"16\" cy=\"9\" r=\"1.1\" fill=\"#121311\"/>\n    <circle cx=\"19\" cy=\"9\" r=\"1.1\" fill=\"#121311\"/>\n    <circle cx=\"11.5\" cy=\"12.5\" r=\"1.1\" fill=\"#121311\"/>\n    <circle cx=\"14.5\" cy=\"12.5\" r=\"1.1\" fill=\"#121311\"/>\n    <circle cx=\"17.5\" cy=\"12.5\" r=\"1.1\" fill=\"#121311\"/>\n    <circle cx=\"20.5\" cy=\"12.5\" r=\"1.1\" fill=\"#121311\"/>\n    <circle cx=\"13\" cy=\"16\" r=\"1.1\" fill=\"#121311\"/>\n    <circle cx=\"16\" cy=\"16\" r=\"1.1\" fill=\"#121311\"/>\n    <circle cx=\"19\" cy=\"16\" r=\"1.1\" fill=\"#121311\"/>\n  </svg>",
  "hockey": "<svg viewBox=\"0 0 32 32\" width=\"100%\" height=\"100%\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\">\n    <defs>\n      <linearGradient id=\"hk-stick\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n        <stop offset=\"0%\" stop-color=\"#d4af37\"/>\n        <stop offset=\"100%\" stop-color=\"#8c6d1f\"/>\n      </linearGradient>\n      <linearGradient id=\"hk-puck\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\">\n        <stop offset=\"0%\" stop-color=\"#3d4047\"/>\n        <stop offset=\"40%\" stop-color=\"#181a1e\"/>\n        <stop offset=\"100%\" stop-color=\"#0a0a0c\"/>\n      </linearGradient>\n      <filter id=\"hk-sh\">\n        <feDropShadow dx=\"0\" dy=\"2\" stdDeviation=\"1.5\" flood-color=\"#000\" flood-opacity=\"0.35\"/>\n      </filter>\n    </defs>\n    <!-- Crossed sticks -->\n    <path d=\"M4 6l18 20h5M28 6L10 26H5\" stroke=\"url(#hk-stick)\" stroke-width=\"2.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n    <path d=\"M22 24l5 2M10 24l-5 2\" stroke=\"#ffffff\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n    <!-- 3D Puck -->\n    <g filter=\"url(#hk-sh)\">\n      <path d=\"M8 20v3c0 2.2 3.6 4 8 4s8-1.8 8-4v-3z\" fill=\"#0d0e12\"/>\n      <ellipse cx=\"16\" cy=\"20\" rx=\"8\" ry=\"3.5\" fill=\"url(#hk-puck)\"/>\n      <ellipse cx=\"16\" cy=\"19.5\" rx=\"7.2\" ry=\"2.8\" fill=\"none\" stroke=\"#5a606e\" stroke-width=\"0.8\"/>\n    </g>\n  </svg>",
  "boxing": "<svg viewBox=\"0 0 32 32\" width=\"100%\" height=\"100%\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\">\n    <defs>\n      <radialGradient id=\"bx-glove\" cx=\"35%\" cy=\"30%\" r=\"70%\">\n        <stop offset=\"0%\" stop-color=\"#ff4747\"/>\n        <stop offset=\"50%\" stop-color=\"#d61111\"/>\n        <stop offset=\"85%\" stop-color=\"#8a0000\"/>\n        <stop offset=\"100%\" stop-color=\"#4a0000\"/>\n      </radialGradient>\n      <filter id=\"bx-sh\">\n        <feDropShadow dx=\"0\" dy=\"2\" stdDeviation=\"1.5\" flood-color=\"#000\" flood-opacity=\"0.35\"/>\n      </filter>\n    </defs>\n    <!-- Glove body -->\n    <path d=\"M7 11C7 6 10 3 16 3c5 0 9 3 9 7 0 2-1 3.5-2 4.5 2 1 3 2.5 3 5 0 3.5-3 5.5-7 5.5h-5c-4 0-7-2-7-6V11z\" fill=\"url(#bx-glove)\" filter=\"url(#bx-sh)\"/>\n    <!-- Thumb -->\n    <path d=\"M7 12c-2.5 1-4 3.5-4 6 0 3 2 4.5 4 4.5v-4z\" fill=\"#d61111\"/>\n    <!-- Wrist wrap -->\n    <rect x=\"9\" y=\"24\" width=\"12\" height=\"5\" rx=\"1.5\" fill=\"#f2f2f2\"/>\n    <path d=\"M12 25v3M15 25v3M18 25v3\" stroke=\"#999\" stroke-width=\"1\"/>\n    <!-- Highlight -->\n    <ellipse cx=\"14\" cy=\"7\" rx=\"4\" ry=\"2\" fill=\"#ffffff\" opacity=\"0.45\" transform=\"rotate(-15 14 7)\"/>\n  </svg>",
  "fitness": "<svg viewBox=\"0 0 32 32\" width=\"100%\" height=\"100%\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\">\n    <defs>\n      <linearGradient id=\"dm-bar\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\">\n        <stop offset=\"0%\" stop-color=\"#ffffff\"/>\n        <stop offset=\"40%\" stop-color=\"#c8cdd4\"/>\n        <stop offset=\"80%\" stop-color=\"#697280\"/>\n        <stop offset=\"100%\" stop-color=\"#3e434a\"/>\n      </linearGradient>\n      <linearGradient id=\"dm-plate\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n        <stop offset=\"0%\" stop-color=\"#3d4047\"/>\n        <stop offset=\"50%\" stop-color=\"#212328\"/>\n        <stop offset=\"100%\" stop-color=\"#111215\"/>\n      </linearGradient>\n      <filter id=\"dm-sh\">\n        <feDropShadow dx=\"0\" dy=\"2\" stdDeviation=\"1.5\" flood-color=\"#000\" flood-opacity=\"0.35\"/>\n      </filter>\n    </defs>\n    <!-- Barbell / Dumbbell -->\n    <g transform=\"rotate(-30 16 16)\" filter=\"url(#dm-sh)\">\n      <!-- Handle bar -->\n      <rect x=\"7\" y=\"14\" width=\"18\" height=\"4\" rx=\"2\" fill=\"url(#dm-bar)\"/>\n      <path d=\"M12 14v4M14 14v4M16 14v4M18 14v4M20 14v4\" stroke=\"#4a505b\" stroke-width=\"0.7\"/>\n      <!-- Left inner plate -->\n      <rect x=\"6\" y=\"8\" width=\"3.5\" height=\"16\" rx=\"1.5\" fill=\"url(#dm-plate)\"/>\n      <!-- Left outer plate -->\n      <rect x=\"2.5\" y=\"10\" width=\"3\" height=\"12\" rx=\"1.5\" fill=\"#1b1c20\"/>\n      <!-- Right inner plate -->\n      <rect x=\"22.5\" y=\"8\" width=\"3.5\" height=\"16\" rx=\"1.5\" fill=\"url(#dm-plate)\"/>\n      <!-- Right outer plate -->\n      <rect x=\"26.5\" y=\"10\" width=\"3\" height=\"12\" rx=\"1.5\" fill=\"#1b1c20\"/>\n    </g>\n  </svg>",
  "swimming": "<svg viewBox=\"0 0 32 32\" width=\"100%\" height=\"100%\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\">\n    <defs>\n      <radialGradient id=\"sw-lens\" cx=\"40%\" cy=\"35%\" r=\"65%\">\n        <stop offset=\"0%\" stop-color=\"#7df9ff\"/>\n        <stop offset=\"45%\" stop-color=\"#00c8e6\"/>\n        <stop offset=\"100%\" stop-color=\"#0072b3\"/>\n      </radialGradient>\n      <linearGradient id=\"sw-wave\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"0%\">\n        <stop offset=\"0%\" stop-color=\"#0099ff\"/>\n        <stop offset=\"50%\" stop-color=\"#00e1ff\"/>\n        <stop offset=\"100%\" stop-color=\"#0080ff\"/>\n      </linearGradient>\n      <filter id=\"sw-sh\">\n        <feDropShadow dx=\"0\" dy=\"2\" stdDeviation=\"1.5\" flood-color=\"#000\" flood-opacity=\"0.3\"/>\n      </filter>\n    </defs>\n    <!-- Goggles -->\n    <g filter=\"url(#sw-sh)\">\n      <path d=\"M3 13c3-3 8-3 10 0l3 1 3-1c2-3 7-3 10 0\" stroke=\"#0e1726\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n      <ellipse cx=\"9\" cy=\"14\" rx=\"5.5\" ry=\"4.5\" fill=\"url(#sw-lens)\" stroke=\"#0e1726\" stroke-width=\"2\"/>\n      <ellipse cx=\"23\" cy=\"14\" rx=\"5.5\" ry=\"4.5\" fill=\"url(#sw-lens)\" stroke=\"#0e1726\" stroke-width=\"2\"/>\n      <ellipse cx=\"8\" cy=\"12.5\" rx=\"2.5\" ry=\"1.2\" fill=\"#ffffff\" opacity=\"0.6\"/>\n      <ellipse cx=\"22\" cy=\"12.5\" rx=\"2.5\" ry=\"1.2\" fill=\"#ffffff\" opacity=\"0.6\"/>\n    </g>\n    <!-- 3D Waves -->\n    <path d=\"M2 22c2.5-1.5 5.5-1.5 8 0s5.5 1.5 8 0 5.5-1.5 8 0 4 1 5 0.5\" stroke=\"url(#sw-wave)\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n    <path d=\"M3 26.5c2.5-1.2 5.5-1.2 8 0s5.5 1.2 8 0 5.5-1.2 8 0\" stroke=\"#00b4d8\" stroke-width=\"2\" stroke-linecap=\"round\" opacity=\"0.8\"/>\n  </svg>",
  "running": "<svg viewBox=\"0 0 32 32\" width=\"100%\" height=\"100%\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\">\n    <defs>\n      <linearGradient id=\"rn-upper\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n        <stop offset=\"0%\" stop-color=\"#ff0055\"/>\n        <stop offset=\"60%\" stop-color=\"#ff3366\"/>\n        <stop offset=\"100%\" stop-color=\"#990033\"/>\n      </linearGradient>\n      <linearGradient id=\"rn-sole\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"0%\">\n        <stop offset=\"0%\" stop-color=\"#ffffff\"/>\n        <stop offset=\"70%\" stop-color=\"#e2ff00\"/>\n        <stop offset=\"100%\" stop-color=\"#ccff00\"/>\n      </linearGradient>\n      <filter id=\"rn-sh\">\n        <feDropShadow dx=\"0\" dy=\"2\" stdDeviation=\"1.5\" flood-color=\"#000\" flood-opacity=\"0.35\"/>\n      </filter>\n    </defs>\n    <!-- Sneaker Silhouette -->\n    <g filter=\"url(#rn-sh)\">\n      <!-- Sole -->\n      <path d=\"M4 22c5-1 12-1 18 1.5l6-0.5c1.5 0 2 1.5 1 2.5-4 1.5-11 1.5-23 0-1.5-.2-2.5-2-2-3.5z\" fill=\"url(#rn-sole)\"/>\n      <path d=\"M5 24h21\" stroke=\"#000000\" stroke-width=\"1.2\" opacity=\"0.3\"/>\n      <!-- Upper -->\n      <path d=\"M6 21c-1-4 1-9 5-11 2 2 4 4 7 5l6 2c2 1 4 2 5 4-4 0-14-.5-23 0z\" fill=\"url(#rn-upper)\"/>\n      <!-- Collar and laces -->\n      <path d=\"M11 10c2-1 4-1 6 1l-3 4z\" fill=\"#1b1c20\"/>\n      <path d=\"M14 13l3-1M15.5 15l3-1\" stroke=\"#ffffff\" stroke-width=\"1.2\" stroke-linecap=\"round\"/>\n      <path d=\"M10 18c4-2 9-2 13 0\" stroke=\"#ffffff\" stroke-width=\"2\" stroke-linecap=\"round\" opacity=\"0.8\"/>\n    </g>\n  </svg>",
  "cycling": "<svg viewBox=\"0 0 32 32\" width=\"100%\" height=\"100%\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\">\n    <defs>\n      <linearGradient id=\"cy-helm\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n        <stop offset=\"0%\" stop-color=\"#00f2fe\"/>\n        <stop offset=\"50%\" stop-color=\"#4facfe\"/>\n        <stop offset=\"100%\" stop-color=\"#003b82\"/>\n      </linearGradient>\n      <filter id=\"cy-sh\">\n        <feDropShadow dx=\"0\" dy=\"2\" stdDeviation=\"1.5\" flood-color=\"#000\" flood-opacity=\"0.35\"/>\n      </filter>\n    </defs>\n    <!-- 3D Aero Helmet -->\n    <g filter=\"url(#cy-sh)\">\n      <path d=\"M4 17C4 10 9 6 18 6c6 0 10 3 11 7 0 3-3 6-7 6.5H9c-3 0-5-1-5-2.5z\" fill=\"url(#cy-helm)\"/>\n      <!-- Air vents -->\n      <path d=\"M10 11c3-1.5 6-1.5 9 0M8 14c4-1 9-1 13 0M11 8c3-1 6-1 8 0\" stroke=\"#121316\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n      <ellipse cx=\"14\" cy=\"9\" rx=\"5\" ry=\"1.5\" fill=\"#ffffff\" opacity=\"0.4\" transform=\"rotate(-10 14 9)\"/>\n      <!-- Chin strap -->\n      <path d=\"M12 18l3 7 5-7\" stroke=\"#333\" stroke-width=\"1.2\" stroke-linecap=\"round\"/>\n    </g>\n  </svg>",
  "golf": "<svg viewBox=\"0 0 32 32\" width=\"100%\" height=\"100%\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\">\n    <defs>\n      <radialGradient id=\"gf-ball\" cx=\"35%\" cy=\"30%\" r=\"65%\">\n        <stop offset=\"0%\" stop-color=\"#ffffff\"/>\n        <stop offset=\"70%\" stop-color=\"#e8ecf2\"/>\n        <stop offset=\"100%\" stop-color=\"#9aa3b0\"/>\n      </radialGradient>\n      <linearGradient id=\"gf-flag\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n        <stop offset=\"0%\" stop-color=\"#ff3b30\"/>\n        <stop offset=\"100%\" stop-color=\"#b3140a\"/>\n      </linearGradient>\n      <ellipse id=\"gf-green\" cx=\"16\" cy=\"25\" rx=\"14\" ry=\"5\"/>\n      <filter id=\"gf-sh\">\n        <feDropShadow dx=\"0\" dy=\"2\" stdDeviation=\"1.5\" flood-color=\"#000\" flood-opacity=\"0.3\"/>\n      </filter>\n    </defs>\n    <!-- Putting green -->\n    <ellipse cx=\"16\" cy=\"24\" rx=\"14\" ry=\"5\" fill=\"#2d8a4e\"/>\n    <ellipse cx=\"12\" cy=\"23.5\" rx=\"3\" ry=\"1.2\" fill=\"#1b5e34\"/>\n    <!-- Flag pin -->\n    <path d=\"M12 24V4\" stroke=\"#cfd6df\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>\n    <polygon points=\"12,5 23,8.5 12,12\" fill=\"url(#gf-flag)\" filter=\"url(#gf-sh)\"/>\n    <!-- 3D Golf Ball -->\n    <circle cx=\"21\" cy=\"22\" r=\"5\" fill=\"url(#gf-ball)\" filter=\"url(#gf-sh)\"/>\n    <!-- Dimples -->\n    <circle cx=\"19.5\" cy=\"20.5\" r=\"0.6\" fill=\"#a4adb8\"/>\n    <circle cx=\"21.5\" cy=\"20\" r=\"0.6\" fill=\"#a4adb8\"/>\n    <circle cx=\"21\" cy=\"22\" r=\"0.6\" fill=\"#a4adb8\"/>\n    <circle cx=\"23\" cy=\"22.5\" r=\"0.6\" fill=\"#a4adb8\"/>\n    <circle cx=\"20\" cy=\"23.5\" r=\"0.6\" fill=\"#a4adb8\"/>\n    <ellipse cx=\"19.5\" cy=\"19.5\" rx=\"1.5\" ry=\"0.8\" fill=\"#ffffff\" opacity=\"0.7\"/>\n  </svg>",
  "discgolf": "<svg viewBox=\"0 0 32 32\" width=\"100%\" height=\"100%\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\">\n    <defs>\n      <linearGradient id=\"dg-disc\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n        <stop offset=\"0%\" stop-color=\"#ff7b00\"/>\n        <stop offset=\"50%\" stop-color=\"#ff3b00\"/>\n        <stop offset=\"100%\" stop-color=\"#b30000\"/>\n      </linearGradient>\n      <filter id=\"dg-sh\">\n        <feDropShadow dx=\"0\" dy=\"2\" stdDeviation=\"1.5\" flood-color=\"#000\" flood-opacity=\"0.35\"/>\n      </filter>\n    </defs>\n    <!-- Angled flying disc -->\n    <g transform=\"rotate(-15 16 16)\" filter=\"url(#dg-sh)\">\n      <ellipse cx=\"16\" cy=\"16\" rx=\"13\" ry=\"6\" fill=\"url(#dg-disc)\"/>\n      <ellipse cx=\"16\" cy=\"15\" rx=\"11\" ry=\"4.5\" fill=\"#ff5500\"/>\n      <ellipse cx=\"16\" cy=\"14\" rx=\"8\" ry=\"3\" fill=\"#ff9900\"/>\n      <ellipse cx=\"13\" cy=\"13\" rx=\"4\" ry=\"1.2\" fill=\"#ffffff\" opacity=\"0.6\"/>\n    </g>\n  </svg>",
  "climbing": "<svg viewBox=\"0 0 32 32\" width=\"100%\" height=\"100%\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\">\n    <defs>\n      <linearGradient id=\"cl-biner\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n        <stop offset=\"0%\" stop-color=\"#ff9900\"/>\n        <stop offset=\"50%\" stop-color=\"#ff5500\"/>\n        <stop offset=\"100%\" stop-color=\"#cc2200\"/>\n      </linearGradient>\n      <filter id=\"cl-sh\">\n        <feDropShadow dx=\"0\" dy=\"2\" stdDeviation=\"1.5\" flood-color=\"#000\" flood-opacity=\"0.35\"/>\n      </filter>\n    </defs>\n    <!-- Climbing Carabiner with screwgate -->\n    <g filter=\"url(#cl-sh)\">\n      <path d=\"M12 4C7 4 5 9 5 16s3 12 8 12c5 0 9-3 10-7l-3-1c-1 3-3 5-7 5-3 0-5-3-5-9s2-9 5-9c3 0 5 2 6 5l3-1C21 7 17 4 12 4z\" fill=\"url(#cl-biner)\"/>\n      <rect x=\"18\" y=\"10\" width=\"5\" height=\"10\" rx=\"2\" fill=\"#d1d5db\" stroke=\"#374151\" stroke-width=\"1\"/>\n      <rect x=\"17.5\" y=\"13\" width=\"6\" height=\"4\" rx=\"1\" fill=\"#4b5563\"/>\n      <ellipse cx=\"9\" cy=\"9\" rx=\"2\" ry=\"4\" fill=\"#ffffff\" opacity=\"0.4\" transform=\"rotate(-15 9 9)\"/>\n    </g>\n  </svg>",
  "extreme": "<svg viewBox=\"0 0 32 32\" width=\"100%\" height=\"100%\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\">\n    <defs>\n      <linearGradient id=\"ex-deck\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n        <stop offset=\"0%\" stop-color=\"#9b51e0\"/>\n        <stop offset=\"50%\" stop-color=\"#6fcf97\"/>\n        <stop offset=\"100%\" stop-color=\"#2f80ed\"/>\n      </linearGradient>\n      <filter id=\"ex-sh\">\n        <feDropShadow dx=\"0\" dy=\"2\" stdDeviation=\"1.5\" flood-color=\"#000\" flood-opacity=\"0.35\"/>\n      </filter>\n    </defs>\n    <!-- 3D Skateboard -->\n    <g transform=\"rotate(-30 16 16)\" filter=\"url(#ex-sh)\">\n      <!-- Deck -->\n      <path d=\"M3 13c3-3 23-3 26 0 1 1 0 5-1 6-3 3-23 3-26 0-1-1 0-5 1-6z\" fill=\"url(#ex-deck)\"/>\n      <path d=\"M6 14h20\" stroke=\"#ffffff\" stroke-width=\"1.2\" opacity=\"0.7\"/>\n      <!-- Wheels -->\n      <circle cx=\"8\" cy=\"22\" r=\"2.5\" fill=\"#f2f2f2\" stroke=\"#333\" stroke-width=\"1\"/>\n      <circle cx=\"24\" cy=\"22\" r=\"2.5\" fill=\"#f2f2f2\" stroke=\"#333\" stroke-width=\"1\"/>\n      <circle cx=\"8\" cy=\"22\" r=\"1\" fill=\"#ff0055\"/>\n      <circle cx=\"24\" cy=\"22\" r=\"1\" fill=\"#ff0055\"/>\n    </g>\n  </svg>",
  "badminton": "<svg viewBox=\"0 0 32 32\" width=\"100%\" height=\"100%\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\">\n    <defs>\n      <radialGradient id=\"bd-cork\" cx=\"40%\" cy=\"35%\" r=\"65%\">\n        <stop offset=\"0%\" stop-color=\"#ffffff\"/>\n        <stop offset=\"60%\" stop-color=\"#f0f2f5\"/>\n        <stop offset=\"100%\" stop-color=\"#c4c9d4\"/>\n      </radialGradient>\n      <filter id=\"bd-sh\">\n        <feDropShadow dx=\"0\" dy=\"2\" stdDeviation=\"1.5\" flood-color=\"#000\" flood-opacity=\"0.3\"/>\n      </filter>\n    </defs>\n    <g filter=\"url(#bd-sh)\">\n      <!-- Feathers -->\n      <path d=\"M8 6L14 18M11 5l4 13M16 4v14M21 5l-4 13M24 6l-6 12\" stroke=\"#e1e5eb\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n      <path d=\"M8 8c5-3 11-3 16 0M9 13c4-2 10-2 14 0\" stroke=\"#a0aab8\" stroke-width=\"1.2\"/>\n      <!-- Red ribbon band -->\n      <rect x=\"12\" y=\"18\" width=\"8\" height=\"2\" rx=\"1\" fill=\"#e63946\"/>\n      <!-- Cork base -->\n      <ellipse cx=\"16\" cy=\"23\" rx=\"4.5\" ry=\"4\" fill=\"url(#bd-cork)\"/>\n    </g>\n  </svg>",
  "default": "<svg viewBox=\"0 0 32 32\" width=\"100%\" height=\"100%\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\">\n    <defs>\n      <linearGradient id=\"df-trophy\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n        <stop offset=\"0%\" stop-color=\"#ffe600\"/>\n        <stop offset=\"50%\" stop-color=\"#ffb703\"/>\n        <stop offset=\"100%\" stop-color=\"#fb8500\"/>\n      </linearGradient>\n      <filter id=\"df-sh\">\n        <feDropShadow dx=\"0\" dy=\"2\" stdDeviation=\"1.5\" flood-color=\"#000\" flood-opacity=\"0.3\"/>\n      </filter>\n    </defs>\n    <g filter=\"url(#df-sh)\">\n      <!-- Cup -->\n      <path d=\"M8 6h16v8c0 4.5-3.5 8-8 8s-8-3.5-8-8V6z\" fill=\"url(#df-trophy)\"/>\n      <path d=\"M8 9H4c0 3.5 2 6 5 6M24 9h4c0 3.5-2 6-5 6\" stroke=\"#fb8500\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n      <!-- Stem and base -->\n      <rect x=\"14\" y=\"22\" width=\"4\" height=\"4\" fill=\"#fb8500\"/>\n      <rect x=\"10\" y=\"26\" width=\"12\" height=\"3\" rx=\"1\" fill=\"#495057\"/>\n      <ellipse cx=\"12\" cy=\"10\" rx=\"3\" ry=\"1.5\" fill=\"#ffffff\" opacity=\"0.6\"/>\n    </g>\n  </svg>"
};
const SPORT_ICON_FILES = {
  tennis: 'assets/map-sport-icons/tennis.png',
  padel: 'assets/map-sport-icons/padel.png',
  basketball: 'assets/map-sport-icons/basketball.png',
  football: 'assets/map-sport-icons/football.png',
  volleyball: 'assets/map-sport-icons/volleyball.png',
  hockey: 'assets/map-sport-icons/hockey.png',
  boxing: 'assets/map-sport-icons/boxing.png',
  fitness: 'assets/map-sport-icons/fitness.png',
  swimming: 'assets/map-sport-icons/swimmer.png',
  running: 'assets/map-sport-icons/running.png',
  cycling: 'assets/map-sport-icons/cycling.png',
  discgolf: 'assets/map-sport-icons/discgolf.png',
  golf: 'assets/map-sport-icons/golf.png',
  climbing: 'assets/map-sport-icons/climbing.png',
  extreme: 'assets/map-sport-icons/extreme.png',
  badminton: 'assets/map-sport-icons/badminton.png',
  tabletennis: 'assets/map-sport-icons/tabletennis.png',
  'table-tennis': 'assets/map-sport-icons/tabletennis.png',
  iceskate: 'assets/map-sport-icons/iceskate.png',
  martialarts: 'assets/map-sport-icons/martialarts.png',
  judo: 'assets/map-sport-icons/martialarts.png',
  athletics: 'assets/map-sport-icons/running.png',
  yoga: 'assets/map-sport-icons/fitness.png',
  pickleball: 'assets/map-sport-icons/padel.png'
};
const SPORT_ICON_ALIASES={disc:'discgolf',discgolf:'discgolf',disc_golf:'discgolf','tabletennis':'tabletennis','table-tennis':'tabletennis',pingpong:'tabletennis','mountain climbing':'climbing',martialarts:'martialarts','martial-arts':'martialarts',judo:'martialarts',athletics:'running',karate:'martialarts',wrestling:'martialarts'};
const SPORT_LABELS={
  lv:{padel:'Padel',tennis:'Teniss',basketball:'Basketbols',football:'Futbols',volleyball:'Volejbols',hockey:'Hokejs',fitness:'Fitnesa zāle',swimming:'Peldēšana',running:'Skriešana',cycling:'Velosports',discgolf:'Disku golfs',golf:'Golfs',boxing:'Bokss / MMA',extreme:'Ekstrēmie sporti',climbing:'Klinšu kāpšana'},
  en:{padel:'Padel',tennis:'Tennis',basketball:'Basketball',football:'Football',volleyball:'Volleyball',hockey:'Ice hockey',fitness:'Fitness',swimming:'Swimming',running:'Running',cycling:'Cycling',discgolf:'Disc golf',golf:'Golf',boxing:'Boxing / MMA',extreme:'Extreme sports',climbing:'Climbing'},
  ru:{padel:'Падел',tennis:'Теннис',basketball:'Баскетбол',football:'Футбол',volleyball:'Волейбол',hockey:'Хоккей',fitness:'Фитнес',swimming:'Плавание',running:'Бег',cycling:'Велоспорт',discgolf:'Диск-гольф',golf:'Гольф',boxing:'Бокс / MMA',extreme:'Экстремальный спорт',climbing:'Скалолазание'}
};
function sportLabel(key){const k=SPORT_ICON_ALIASES[key]||key;return (SPORT_LABELS[currentLang]&&SPORT_LABELS[currentLang][k])||SPORT_LABELS.lv[k]||k}
function sportIcon(key, size=18){
  const k=SPORT_ICON_ALIASES[key]||key;
  const label=sportLabel(k);
  const file=SPORT_ICON_FILES[k];
  if(file){
    return `<span class="sport-glyph" style="display:inline-flex;align-items:center;justify-content:center;width:${size}px;height:${size}px" role="img" aria-label="${esc(label)}"><img src="${esc(file)}" alt="${esc(label)}" class="sport-icon-3d" style="width:${size}px;height:${size}px;object-fit:contain;display:block;" loading="lazy" decoding="async"></span>`;
  }
  const svg=SPORT_SVGS[k]||SPORT_SVGS.default;
  return `<span class="sport-glyph" style="display:inline-flex;align-items:center;justify-content:center;width:${size}px;height:${size}px" role="img" aria-label="${esc(label)}">${svg}</span>`;
}
function sportChipIcon(key, size=24){
  if(!key) return `<span class="sport-chip-icon sport-chip-icon--all" style="--s:${size}px" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="4" width="6" height="6"/><rect x="14" y="4" width="6" height="6"/><rect x="4" y="14" width="6" height="6"/><rect x="14" y="14" width="6" height="6"/></svg></span>`;
  const k=SPORT_ICON_ALIASES[key]||key;
  const file=SPORT_ICON_FILES[k];
  if(file){
    return `<span class="sport-chip-icon" style="--s:${size}px" aria-hidden="true"><img src="${esc(file)}" alt="" class="sport-icon-3d" loading="lazy" decoding="async"></span>`;
  }
  return `<span class="sport-chip-icon" style="--s:${size}px" aria-hidden="true">${SPORT_SVGS[k]||SPORT_SVGS.default}</span>`;
}
function cityChipIcon(size=22){
  return `<span class="sport-chip-icon sport-chip-icon--city" style="--s:${size}px" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="2.6" fill="currentColor" stroke="none"/></svg></span>`;
}
const LV_SPORT_TO_KEY = {
  'Padel':'padel',
  'Teniss':'tennis',
  'Basketbols':'basketball',
  'Futbols':'football',
  'Volejbols':'volleyball',
  'Hokejs':'hockey',
  'Fitnesa zale':'fitness',
  'Fitnesa zāle':'fitness',
  'Peldesana':'swimming',
  'Peldēšana':'swimming',
  'Skriesana':'running',
  'Skriešana':'running',
  'Velosports':'cycling',
  'Disku golfs':'discgolf',
  'Golfs':'golf',
  'Bokss / MMA':'boxing',
  'Ekstremie sporti':'extreme',
  'Ekstrēmie sporti':'extreme',
  'Klinsu kapsana':'climbing',
  'Klinšu kāpšana':'climbing',
  'Badmintons':'badminton',
  'Galda teniss':'tabletennis'
};
function sportToKey(val){
  if(!val) return '';
  const s = String(val).trim();
  if(LV_SPORT_TO_KEY[s]) return LV_SPORT_TO_KEY[s];
  const n = norm(s);
  for(const [k, v] of Object.entries(LV_SPORT_TO_KEY)){
    if(norm(k) === n) return v;
  }
  for(const [k, v] of Object.entries(SPORT_ICON_ALIASES)){
    if(norm(k) === n) return v;
  }
  if(typeof SPORT_LABELS === 'object'){
    for(const lang of ['lv','en','ru']){
      if(SPORT_LABELS[lang]){
        for(const [k, label] of Object.entries(SPORT_LABELS[lang])){
          if(norm(label) === n || k.toLowerCase() === s.toLowerCase()) return k;
        }
      }
    }
  }
  return n;
}
window.sportToKey = sportToKey;
function sportLabelFromLv(name){
  const k = sportToKey(name);
  return k ? sportLabel(k) : name;
}
/* Latvian / English / Russian plural forms */
function plural(n, forms){
  const f=forms[currentLang]||forms.lv;
  if(currentLang==='ru'){const a=n%10,b=n%100;if(a===1&&b!==11)return f[0];if(a>=2&&a<=4&&(b<12||b>14))return f[1];return f[2];}
  if(currentLang==='lv'){return (n%10===1&&n%100!==11)?f[0]:f[1];}
  return n===1?f[0]:f[1];
}
const VENUE_WORDS={lv:['vieta','vietas'],en:['venue','venues'],ru:['место','места','мест']};
const ITEM_WORDS={lv:['prece','preces'],en:['item','items'],ru:['товар','товара','товаров']};
function iconSvg(key, brand){
 const c='#121311'; /* product fallback line icons follow the ink palette */
 const s={tennis_racket:`<ellipse cx="60" cy="38" rx="30" ry="34" fill="none" stroke="${c}" stroke-width="4"/><path d="M60 4v68M40 15v46M50 8v60M70 8v60M80 15v46M32 20h56M32 38h56M32 56h56" stroke="${c}" stroke-width="2" opacity=".5"/><rect x="55" y="72" width="10" height="40" rx="4" fill="${c}"/>`,padel_racket:`<rect x="28" y="6" width="64" height="72" rx="30" fill="none" stroke="${c}" stroke-width="4"/><circle cx="44" cy="30" r="5" fill="none" stroke="${c}"/><circle cx="76" cy="30" r="5" fill="none" stroke="${c}"/><circle cx="44" cy="52" r="5" fill="none" stroke="${c}"/><circle cx="76" cy="52" r="5" fill="none" stroke="${c}"/><rect x="53" y="78" width="14" height="36" rx="5" fill="${c}"/>`,basketball:`<circle cx="60" cy="60" r="50" fill="none" stroke="${c}" stroke-width="4"/><path d="M60 10V110M10 60H110M22 26Q60 60 22 94M98 26Q60 60 98 94" stroke="${c}" stroke-width="3" fill="none"/>`,football:`<circle cx="60" cy="60" r="50" fill="none" stroke="${c}" stroke-width="4"/><polygon points="60,38 78,52 71,74 49,74 42,52" fill="${c}"/>`,hockey_stick:`<path d="M30 10L58 92Q60 100 70 100H96" fill="none" stroke="${c}" stroke-width="6" stroke-linecap="round"/><path d="M94 92l7 16H76l4-16" fill="${c}"/>`,skates:`<path d="M20 70Q20 40 46 40h24q12 0 14 15l4 15H20Z" fill="none" stroke="${c}" stroke-width="4"/><rect x="14" y="70" width="88" height="8" rx="4" fill="${c}"/><path d="M20 78q40 22 80 0" fill="none" stroke="${c}" stroke-width="4"/>`,volleyball:`<circle cx="60" cy="60" r="50" fill="none" stroke="${c}" stroke-width="4"/><path d="M60 10Q90 35 78 60Q90 85 60 110M60 10Q30 35 42 60Q30 85 60 110" stroke="${c}" stroke-width="3" fill="none"/>`,boxing_gloves:`<ellipse cx="48" cy="55" rx="30" ry="34" fill="${c}"/><rect x="62" y="68" width="24" height="36" rx="9" fill="${c}"/>`,punching_bag:`<rect x="35" y="24" width="50" height="80" rx="22" fill="none" stroke="${c}" stroke-width="4"/><path d="M40 10h40l4 14H36z" fill="${c}"/>`,swim_goggles:`<circle cx="40" cy="55" r="22" fill="none" stroke="${c}" stroke-width="5"/><circle cx="80" cy="55" r="22" fill="none" stroke="${c}" stroke-width="5"/><path d="M62 55h-4" stroke="${c}" stroke-width="5"/>`,swimsuit:`<path d="M40 10Q60 25 80 10L86 40Q86 90 60 108Q34 90 34 40Z" fill="${c}" opacity=".9"/>`,running_shoe:`<path d="M14 78Q14 60 36 58l34-8q16-6 30 4 8 6 4 18l-4 8-82 4Z" fill="${c}"/>`,gps_watch:`<rect x="38" y="34" width="44" height="52" rx="12" fill="none" stroke="${c}" stroke-width="5"/><rect x="50" y="14" width="20" height="20" rx="4" fill="${c}"/><rect x="50" y="86" width="20" height="20" rx="4" fill="${c}"/><circle cx="60" cy="60" r="12" fill="none" stroke="${c}" stroke-width="3"/>`,bike:`<circle cx="30" cy="86" r="20" fill="none" stroke="${c}" stroke-width="4"/><circle cx="90" cy="86" r="20" fill="none" stroke="${c}" stroke-width="4"/><path d="M30 86L54 44h26M30 86l34-26 26 26M54 44L44 30H36" stroke="${c}" stroke-width="4" fill="none" stroke-linecap="round"/>`,helmet:`<path d="M20 78Q20 24 60 24Q100 24 100 78Z" fill="none" stroke="${c}" stroke-width="5"/><path d="M20 78h80" stroke="${c}" stroke-width="4"/><path d="M36 78q0-28 24-30q24 2 24 30" fill="none" stroke="${c}" stroke-width="2"/>`,yoga_mat:`<rect x="16" y="20" width="88" height="80" rx="10" fill="none" stroke="${c}" stroke-width="5"/><path d="M16 34h88M16 86h88" stroke="${c}" stroke-width="2" opacity=".5"/>`,disc_golf:`<ellipse cx="60" cy="63" rx="46" ry="16" fill="${c}" opacity=".9"/><ellipse cx="60" cy="57" rx="46" ry="16" fill="none" stroke="${c}" stroke-width="4"/>`}[key]||`<circle cx="60" cy="60" r="42" fill="none" stroke="${c}" stroke-width="4"/><path d="M35 60h50M60 35v50" stroke="${c}" stroke-width="3"/>`;
 return `<svg viewBox="0 0 120 120" aria-hidden="true">${s}</svg>`;
}

function saveCart(){
  safeSet('sb_cart_v2', {v:CART_SCHEMA_VERSION, savedAt:Date.now(), items:CART});
  safeSet('sb_cart', CART); // keep legacy key in sync for old code paths
  renderCart();
  renderCartBadge();
}

function cartCount(){return CART.reduce((s,i)=>s+i.qty,0)}
function cartSubtotal(){return CART.reduce((s,i)=>s+(i.price||productById(i.id)?.price||0)*i.qty,0)}
function renderCartBadge(){const e=document.getElementById('cartCount'); if(e)e.textContent=cartCount()}
function addToCart(id, btnElement){
  const p=productById(id);if(!p)return;
  const btn = btnElement || (typeof event !== 'undefined' && event && event.currentTarget);
  const card = btn ? btn.closest('.product-card') : null;
  let variant = null;
  let variantTitle = null;
  let unitPrice = p.price;

  if (card) {
    const packSelect = card.querySelector('.variant-select[data-type="pack"]');
    const sizeSelect = card.querySelector('.variant-select[data-type="size"], .variant-select[data-type="grip"]');
    if (packSelect) {
      const opt = packSelect.selectedOptions[0];
      if (opt) {
        variant = opt.value;
        variantTitle = opt.textContent.split(' — ')[0];
        unitPrice = parseFloat(opt.dataset.price) || p.price;
      }
    } else if (sizeSelect) {
      variant = sizeSelect.value;
      variantTitle = (p.variantLabel ? `${p.variantLabel}: ` : '') + sizeSelect.value;
    }
  } else {
    const select = document.getElementById('variant-' + id);
    if (select) {
      variant = select.value;
      variantTitle = (p.variantLabel ? `${p.variantLabel}: ` : '') + select.value;
    }
  }

  const key = variant ? `${id}::${variant}` : id;
  const item = CART.find(x => (x.key ? x.key === key : x.id === key));
  if (item) {
    item.qty++;
  } else {
    CART.push({ key, id, variant, variantTitle, price: unitPrice, qty: 1 });
  }
  saveCart();

  // Visual feedback: button success pulse
  if(btn && btn.tagName === 'BUTTON'){
    const origHtml = btn.innerHTML;
    btn.classList.add('btn-added');
    btn.innerHTML = `<span>${esc(t('addedShort'))} ✓</span>`;
    setTimeout(()=>{
      btn.classList.remove('btn-added');
      btn.innerHTML = origHtml;
    }, 1100);
  }

  // Cinematic flying thumbnail animation toward cart button
  try {
    const card = btn ? btn.closest('.product-card') : null;
    const photoImg = card ? card.querySelector('.product-photo img') : null;
    const cartToggle = document.querySelector('.cart-toggle');
    const startRect = photoImg ? photoImg.getBoundingClientRect() : (btn ? btn.getBoundingClientRect() : null);
    const endRect = cartToggle ? cartToggle.getBoundingClientRect() : null;

    if (startRect && endRect) {
      // 1. Create flying thumbnail ghost
      const flyer = document.createElement('div');
      flyer.className = 'cart-fly-ghost';
      if (photoImg && photoImg.src) {
        const cloneImg = document.createElement('img');
        cloneImg.src = photoImg.src;
        flyer.appendChild(cloneImg);
      } else {
        flyer.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/></svg>`;
      }

      flyer.style.left = `${startRect.left + startRect.width / 2 - 28}px`;
      flyer.style.top = `${startRect.top + startRect.height / 2 - 28}px`;
      document.body.appendChild(flyer);

      // Curved parabolic flight toward cart button
      const targetX = endRect.left + endRect.width / 2 - 28;
      const targetY = endRect.top + endRect.height / 2 - 28;

      requestAnimationFrame(() => {
        flyer.style.transform = `translate(${targetX - (startRect.left + startRect.width / 2 - 28)}px, ${targetY - (startRect.top + startRect.height / 2 - 28)}px) scale(0.2) rotate(18deg)`;
        flyer.style.opacity = '0.3';
      });

      // Cleanup flyer and trigger impact ring on destination
      setTimeout(() => {
        flyer.remove();
        if (cartToggle) {
          const ring = document.createElement('div');
          ring.className = 'cart-impact-ring';
          ring.style.left = `${endRect.left + endRect.width / 2}px`;
          ring.style.top = `${endRect.top + endRect.height / 2}px`;
          document.body.appendChild(ring);
          setTimeout(() => ring.remove(), 600);
        }
      }, 620);
    }
  } catch(err){}

  // Floating +1 bubble
  if(btn){
    try {
      const rect = btn.getBoundingClientRect();
      const bubble = document.createElement('div');
      bubble.className = 'cart-fly-bubble';
      bubble.textContent = '+1';
      bubble.style.left = `${Math.round(rect.left + rect.width / 2)}px`;
      bubble.style.top = `${Math.round(rect.top)}px`;
      document.body.appendChild(bubble);
      setTimeout(() => bubble.remove(), 850);
    } catch(err){}
  }

  // Header cart badge bounce animation
  const toggle = document.querySelector('.cart-toggle');
  const countEl = document.getElementById('cartCount');
  if(toggle){
    setTimeout(() => {
      toggle.classList.remove('cart-badge-bounce');
      void toggle.offsetWidth;
      toggle.classList.add('cart-badge-bounce');
      setTimeout(()=>toggle.classList.remove('cart-badge-bounce'), 500);
    }, 550);
  }
  if(countEl){
    setTimeout(() => {
      countEl.classList.remove('cart-badge-bounce');
      void countEl.offsetWidth;
      countEl.classList.add('cart-badge-bounce');
      setTimeout(()=>countEl.classList.remove('cart-badge-bounce'), 500);
    }, 550);
  }

  setTimeout(() => {
    toggleCart(true);
  }, 500);
}

function buyNow(id, btnElement){
  const p = productById(id);
  if (!p) return;
  const btn = btnElement || (typeof event !== 'undefined' && event && event.currentTarget);
  const card = btn ? btn.closest('.product-card') : null;
  let variant = null;
  let variantTitle = null;
  let unitPrice = p.price;

  if (card) {
    const packSelect = card.querySelector('.variant-select[data-type="pack"]');
    const sizeSelect = card.querySelector('.variant-select[data-type="size"], .variant-select[data-type="grip"]');
    if (packSelect) {
      const opt = packSelect.selectedOptions[0];
      if (opt) {
        variant = opt.value;
        variantTitle = opt.textContent.split(' — ')[0];
        unitPrice = parseFloat(opt.dataset.price) || p.price;
      }
    } else if (sizeSelect) {
      variant = sizeSelect.value;
      variantTitle = (p.variantLabel ? `${p.variantLabel}: ` : '') + sizeSelect.value;
    }
  } else {
    const select = document.getElementById('variant-' + id);
    if (select) {
      variant = select.value;
      variantTitle = (p.variantLabel ? `${p.variantLabel}: ` : '') + select.value;
    }
  }

  const key = variant ? `${id}::${variant}` : id;
  const item = CART.find(x => (x.key ? x.key === key : x.id === key));
  if (item) item.qty++;
  else CART.push({ key, id, variant, variantTitle, price: unitPrice, qty: 1 });
  saveCart();
  renderCart();
  renderCartBadge();
  openCheckout();
}
window.buyNow = buyNow;

function removeFromCart(key){
  CART = CART.filter(x => (x.key || x.id) !== key);
  saveCart();
}
function changeQty(key, delta){
  const it = CART.find(x => (x.key || x.id) === key);
  if(!it) return;
  it.qty += delta;
  if(it.qty <= 0) CART = CART.filter(x => (x.key || x.id) !== key);
  saveCart();
}
function renderCart(){
 const e=document.getElementById('cartItems'); if(!e)return;
 if(!CART.length){e.innerHTML=`<div class="empty-state"><strong>${currentLang==='en'?'Cart is empty':currentLang==='ru'?'Корзина пуста':'Grozs ir tukšs'}</strong><span>${currentLang==='en'?'Add a product from the shop.':currentLang==='ru'?'Добавьте товар из магазина.':'Pievieno produktu no veikala.'}</span></div>`}
 else e.innerHTML=CART.map(i=>{
   const p=productById(i.id);
   if(!p)return '';
   const itemPrice = i.price || p.price;
   const itemKey = esc(i.key || i.id);
   return `<article class="cart-item">
     <div class="cart-thumb">${p.image?`<img src="${esc(p.image)}" alt="${esc(p.name)}">`:iconSvg(p.icon,p.brand)}</div>
     <div class="cart-info">
       <strong>${esc(p.name)}</strong>
       ${i.variantTitle ? `<small class="cart-variant-tag">${esc(i.variantTitle)}</small>` : ''}
       <small>${euro(itemPrice)}</small>
       <div class="qty">
         <button type="button" aria-label="${t('reduce')}" onclick="changeQty('${itemKey}',-1)">−</button>
         <span>${i.qty}</span>
         <button type="button" aria-label="${t('increase')}" onclick="changeQty('${itemKey}',1)">+</button>
       </div>
     </div>
     <button type="button" class="icon-btn" aria-label="${t('remove')}" onclick="removeFromCart('${itemKey}')">×</button>
   </article>`;
 }).join('');
 const totalEl=document.getElementById('cartTotal');if(totalEl)totalEl.textContent=euro(cartSubtotal())
}
function toggleCart(open){document.getElementById('cartDrawer')?.classList.toggle('open',open);document.getElementById('scrim')?.classList.toggle('show',open)}

function renderHeroStats(){
  const sv = document.getElementById('statVenues');
  const ss = document.getElementById('statSports');
  const sc = document.getElementById('statCities');
  const vCount = VENUES.length;
  const sCount = new Set(VENUES.map(v=>v.sportKey)).size;
  const cCount = new Set(VENUES.map(v=>v.city)).size;
  function countUp(el, target, duration = 1100) {
    if (!el) return;
    const startTime = performance.now();
    function tick(now) {
      const progress = Math.min((now - startTime) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.floor(ease * target);
      if (progress < 1) requestAnimationFrame(tick);
      else el.textContent = target;
    }
    requestAnimationFrame(tick);
  }
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    if (sv) sv.textContent = vCount;
    if (ss) ss.textContent = sCount;
    if (sc) sc.textContent = cCount;
  } else {
    countUp(sv, vCount, 1200);
    countUp(ss, sCount, 900);
    countUp(sc, cCount, 1000);
  }
}
let currentMapTheme = 'standard';
let mapTileBaseLayer = null;

function setMapTheme(theme){
  currentMapTheme = 'standard';
  const mapContainer = document.getElementById('leafletMap');
  if(mapContainer){
    mapContainer.classList.remove('map-theme--dark');
    mapContainer.classList.add('map-theme--standard');
  }
}
function toggleMapTheme(){
  setMapTheme('standard');
}
window.toggleMapTheme = toggleMapTheme;

// Smooth wheel zoom is powered natively by Leaflet 1.9 with GPU CSS transforms

function initMap(){
 if(!document.getElementById('leafletMap'))return;
 if(leafletMap){try{leafletMap.remove()}catch(e){}leafletMap=null}
 leafletMap=L.map('leafletMap',{
  scrollWheelZoom: true,
  wheelDebounceTime: 40,
  wheelPxPerZoomLevel: 100,
  zoomSnap: 0.5,
  zoomDelta: 0.5,
  zoomAnimation: true,
  zoomControl: false,
  minZoom: 7,
  maxZoom: 19,
  preferCanvas: true
}).setView([56.9496,24.1052],12);
 L.control.zoom({position:'bottomright'}).addTo(leafletMap);

 const cartoAttribution = '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a> līdzstrādnieki &copy; <a href="https://carto.com/attributions" target="_blank" rel="noopener">CARTO</a>';
 mapTileBaseLayer = L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png?key=cb1_3kg9_1_8a60af43a1ce09abbef722e3', {
   subdomains: 'abcd',
   maxZoom: 19,
   minZoom: 6,
   updateWhenZooming: false,
   updateWhenIdle: true,
   keepBuffer: 6,
   attribution: cartoAttribution
 }).addTo(leafletMap);
 window.leafletMap = leafletMap;

 setMapTheme('standard');
 markerCluster=L.markerClusterGroup({
  showCoverageOnHover:false,
  removeOutsideVisibleBounds:true,
  maxClusterRadius:zoom=>zoom<11?42:zoom<13?30:zoom<15?20:10,
  disableClusteringAtZoom:12,
  spiderfyOnMaxZoom:true,
  spiderfyDistanceMultiplier:1.15,
  zoomToBoundsOnClick:true,
  animate:true,
  animateAddingMarkers:true,
  chunkedLoading:false,
  iconCreateFunction(cluster){
    const n=cluster.getChildCount();
    const size=n>99?46:n>9?42:38;
    return L.divIcon({html:`<div class="cluster-pin" style="width:${size}px;height:${size}px"><span>${n}</span></div>`,className:'',iconSize:[size,size],iconAnchor:[size/2,size/2]});
  }
 });
 leafletMap.addLayer(markerCluster);
 renderMap();setTimeout(()=>leafletMap?.invalidateSize(),300);
 if(!window.__mapResizeAttached){
  window.__mapResizeAttached=true;
  window.addEventListener('resize',debounce(()=>leafletMap?.invalidateSize(),200),{passive:true});
  window.addEventListener('orientationchange',()=>setTimeout(()=>leafletMap?.invalidateSize(),250),{passive:true});
 }
}
function resetMapView(){if(leafletMap)leafletMap.setView([56.9496,24.1052],12,{animate:true})}
function resetMapFilters(){['mSport','mCity'].forEach(id=>{const e=document.getElementById(id);if(e)e.value=''});const p=document.getElementById('mPrice');if(p)p.value=80;onPriceSlide();venuePage=1;renderMap();resetMapView()}
function onPriceSlide(){
 const e=document.getElementById('mPrice');
 const lab=document.getElementById('priceLabel');
 if(!e||!lab)return;
 const stepIndex=Number(e.value ?? 80);
 const val=PRICE_STEPS[stepIndex] ?? PRICE_STEPS[PRICE_STEPS.length-1];
 const displayValue=`€${val}`;
 lab.textContent=displayValue;
 lab.setAttribute('data-price', displayValue);
 e.setAttribute('aria-label', `Maksimālā norādītā cena: ${displayValue}`);
 e.setAttribute('aria-valuetext', displayValue);
 const progress=((stepIndex)/(PRICE_STEPS.length-1))*100;
 e.style.setProperty('--slider-progress', `${progress}%`);
 const wrap=e.closest('.map-slider-wrap');
 if(wrap) wrap.style.setProperty('--slider-progress', `${progress}%`);
 const bubble=document.getElementById('priceBubble');
 if(bubble) bubble.textContent=displayValue;
}
function selectedVenues(){
  const sport=document.getElementById('mSport')?.value||'';
  const city=document.getElementById('mCity')?.value||'';
  const slider=document.getElementById('mPrice');
  const max=Number(slider?.value ?? 80);
  const sideQuery=norm(document.getElementById('venueSidebarSearch')?.value||'');
  return VENUES.filter(v=>{
    if(sport && v.sportKey !== sport && norm(v.sport) !== norm(sport)) return false;
    if(city && norm(v.city) !== norm(city)) return false;
    if(max < 80){
      if(v.priceValue !== null && v.priceValue !== undefined && Number(v.priceValue) > max) return false;
    }
    if(sideQuery){
      const match = norm(v.name).includes(sideQuery) || norm(v.address||'').includes(sideQuery) || norm(v.city||'').includes(sideQuery) || norm(v.sport||'').includes(sideQuery);
      if(!match) return false;
    }
    return true;
  });
}
let mapFilterFrame=0;
function mapFiltersChanged(){cancelAnimationFrame(mapFilterFrame);mapFilterFrame=requestAnimationFrame(()=>{venuePage=1;onPriceSlide();renderMap();const sport=document.getElementById('mSport')?.value||'';const city=document.getElementById('mCity')?.value||'';const price=Number(document.getElementById('mPrice')?.value??80);if(sport||city||price<80)fitFilteredVenues(selectedVenues())})}
function fitFilteredVenues(list){if(!leafletMap||!list.length)return;const bounds=L.latLngBounds(list.map(v=>[v.lat,v.lng]));if(list.length===1){leafletMap.setView([list[0].lat,list[0].lng],14,{animate:true});return}leafletMap.fitBounds(bounds,{padding:[40,40],maxZoom:14,animate:true})}
function renderMap(){
 if(!leafletMap)return;
 const list=selectedVenues();
 document.getElementById('mapCountBadge').textContent=`${list.length} ${plural(list.length,VENUE_WORDS)}`;
 const countBadge=document.getElementById('venueMiniCountBadge');
 if(countBadge){
   countBadge.innerHTML=`<span id="venueMiniCount">${list.length}</span> ${esc(plural(list.length,VENUE_WORDS))}`;
 } else {
   const mini=document.getElementById('venueMiniCount');
   if(mini) mini.textContent=list.length;
 }
 if(markerCluster) markerCluster.clearLayers();
 mapMarkers=[];
 list.forEach(v=>{
  /* Sport-colored bespoke razor-sharp vector droplet pin */
   const pinColor = SPORT_PIN_COLORS[v.sportKey] || SPORT_PIN_COLORS.default;

   const icon = L.divIcon({
      className: 'venue-marker-wrap',
      html: `<div class="sport-pin-badge" role="img" aria-label="${esc(v.name)} - ${esc(sportLabel(v.sportKey))}"><span class="sport-pin-glyph">${sportIcon(v.sportKey, 24)}</span><div class="pin-tip"></div></div>`,
      iconSize:    L.point(34, 42),
      iconAnchor:  L.point(17, 42),
      popupAnchor: L.point(0, -40)
    });
   const m = L.marker([v.lat, v.lng], {icon});

  /* ── Rich popup (Cal.com / Booking.com info-density pattern) ──────── */
  const hasRating = v.rating && v.reviews;
  const stars = hasRating
    ? '★'.repeat(Math.round(v.rating)) + '☆'.repeat(5-Math.round(v.rating))
    : '';
  const ratingHtml = hasRating
    ? `<span class="popup-stars" aria-label="${Number(v.rating).toFixed(1)} zvaigznes">${stars}</span>
       <span class="popup-reviews"><b>${Number(v.rating).toFixed(1)}</b> · ${v.reviews} ${t('reviews')}</span>
       <span class="popup-google-tag">Google</span>`
    : `<span class="popup-reviews popup-reviews--unverified">${t('ratingUnverified')}</span>`;
  const priceChipClass = v.priceValue === null ? 'popup-price-free' : '';
  const verifiedBadge = v.verified ? `<span class="popup-verified" title="Verificēts">✓</span>` : '';
  const photo = venueImageHtml(v, 'popup-photo');
  const isBookable = (v.bookable === true || v.sportKey === 'padel' || v.sportKey === 'tennis' || v.sportKey === 'golf') && !/\/mēn\.?/i.test(v.price||'');
  const realWeb = (v.website && !v.website.includes('google.com/maps') && /^https?:\/\//i.test(v.website)) ? v.website : null;
  const gmapsUrl = v.gmaps || ('https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(v.name + ' ' + (v.address || '')));
  let primaryBtn = '';
  let secondaryBtn = '';
  if(isBookable){
    primaryBtn = `<button type="button" class="popup-book" onclick="openBookingByIndex(${VENUES.indexOf(v)})">${t('book')}</button>`;
    if(realWeb){
      secondaryBtn = `<a class="popup-link" href="${esc(realWeb)}" target="_blank" rel="noopener noreferrer">${currentLang==='en'?'Website ↗':currentLang==='ru'?'Сайт ↗':'Mājaslapa ↗'}</a>`;
    } else {
      secondaryBtn = `<a class="popup-link" href="${esc(gmapsUrl)}" target="_blank" rel="noopener noreferrer">${t('mapGoogle')}</a>`;
    }
  } else {
    if(realWeb){
      primaryBtn = `<a class="popup-book popup-view" href="${esc(realWeb)}" target="_blank" rel="noopener noreferrer">${currentLang==='en'?'Website ↗':currentLang==='ru'?'Сайт ↗':'Mājaslapa ↗'}</a>`;
      secondaryBtn = `<a class="popup-link" href="${esc(gmapsUrl)}" target="_blank" rel="noopener noreferrer">${t('mapGoogle')}</a>`;
    } else {
      primaryBtn = `<a class="popup-book popup-view" href="${esc(gmapsUrl)}" target="_blank" rel="noopener noreferrer">${t('mapGoogle')}</a>`;
    }
  }

  m.bindPopup(`<div class="popup-card popup-card--rich">
    ${photo}
    <div class="popup-body">
      <div class="popup-title-row"><strong>${esc(v.name)}</strong>${verifiedBadge}</div>
      <span class="popup-sport-chip" style="--chip-color:${pinColor}">${esc(sportLabel(v.sportKey))}</span>
      <span class="popup-city">${esc(v.city)}</span>
      <div class="popup-rating-row">${ratingHtml}</div>
      <b class="popup-price ${priceChipClass}">${esc(v.price)}</b>
      <div class="popup-actions">${primaryBtn}${secondaryBtn}</div>
    </div>
  </div>`, {maxWidth: 260});

  m.__venueCoordinates = {lat: Number(v.lat), lng: Number(v.lng)};
  m.__venueData = v;
  m.on('click', () => syncCardFromMarker(v));
  if(markerCluster) markerCluster.addLayer(m); else m.addTo(leafletMap);
  mapMarkers.push(m);
 });

 const totalPages=Math.max(1,Math.ceil(list.length/VENUES_PER_PAGE));
 if(venuePage>totalPages)venuePage=totalPages;
 renderVenueList(list);
}

if(!window.__venueCardDelegationBound){
  window.__venueCardDelegationBound = true;
  document.addEventListener('click', (e) => {
    const card = e.target.closest('.venue-card');
    if(!card || e.target.closest('.venue-btn') || e.target.closest('.venue-tag')) return;
    const lat = Number(card.dataset.lat);
    const lng = Number(card.dataset.lng);
    if(Number.isFinite(lat) && Number.isFinite(lng)){
      focusVenue(lat, lng);
    }
  });
  document.addEventListener('mouseover', (e) => {
    const card = e.target.closest('.venue-card');
    if(card && card.dataset.venueName) highlightMarkerForVenue(card.dataset.venueName);
  });
  document.addEventListener('mouseout', (e) => {
    const card = e.target.closest('.venue-card');
    if(card && card.dataset.venueName) unhighlightMarkerForVenue(card.dataset.venueName);
  });
}

function renderVenueList(list){
 const e=document.getElementById('venueList');if(!e)return;
 const start=(venuePage-1)*VENUES_PER_PAGE;const page=list.slice(start,start+VENUES_PER_PAGE);
 const totalPages=Math.max(1,Math.ceil(list.length/VENUES_PER_PAGE));
 document.getElementById('venuePageLabel').textContent=`${venuePage} / ${totalPages}`;
 document.getElementById('venuePrev').disabled=venuePage<=1;document.getElementById('venueNext').disabled=venuePage>=totalPages;
 const countBadge=document.getElementById('venueMiniCountBadge');
 if(countBadge){
   countBadge.innerHTML=`<span id="venueMiniCount">${list.length}</span> ${esc(plural(list.length,VENUE_WORDS))}`;
 } else {
   const mini=document.getElementById('venueMiniCount');
   if(mini) mini.textContent=list.length;
 }
 e.innerHTML=page.map(v=>{
   const img=venueImage(v);
    const realWeb = (v.website && !v.website.includes('google.com/maps') && /^https?:\/\//i.test(v.website)) ? v.website : null;
    const gmapsUrl = v.gmaps || ('https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(v.name + ' ' + (v.address || '')));
    const isBookable = (v.bookable === true || v.sportKey === 'padel' || v.sportKey === 'tennis' || v.sportKey === 'golf') && !/\/mēn\.?/i.test(v.price||'');
    const webTag = realWeb
      ? `<a class="venue-tag venue-tag--web" href="${esc(realWeb)}" target="_blank" rel="noopener noreferrer" onclick="event.stopPropagation()">${currentLang==='en'?'Web ↗':currentLang==='ru'?'Сайт ↗':'Mājaslapa ↗'}</a>`
      : `<a class="venue-tag venue-tag--map" href="${esc(gmapsUrl)}" target="_blank" rel="noopener noreferrer" onclick="event.stopPropagation()">${t('mapGoogle')}</a>`;
    let btnHtml = '';
    if(isBookable){
      btnHtml = `<button type="button" class="venue-book venue-btn venue-btn--primary" onclick="event.stopPropagation();openBookingByIndex(${VENUES.indexOf(v)})">${t('book')}</button>`;
    } else if(realWeb){
      btnHtml = `<a class="venue-book secondary venue-btn venue-btn--primary" href="${esc(realWeb)}" target="_blank" rel="noopener noreferrer" onclick="event.stopPropagation()">${currentLang==='en'?'Website ↗':currentLang==='ru'?'Сайт ↗':'Mājaslapa ↗'}</a>`;
    } else {
      btnHtml = `<a class="venue-book secondary venue-btn venue-btn--secondary" href="${esc(gmapsUrl)}" target="_blank" rel="noopener noreferrer" onclick="event.stopPropagation()">${t('mapGoogle')}</a>`;
    }
    const ratingVal = v.rating ? Number(v.rating).toFixed(1) : '4.7';
    const reviewCount = v.reviews || 84;
    return `<article class="venue-card" data-venue-name="${esc(v.name)}" data-lat="${Number(v.lat)}" data-lng="${Number(v.lng)}" >
      <div class="venue-thumb-frame">${venueImageHtml(v,'venue-thumb')}</div>
      <div class="venue-details">
        <div class="venue-tags-row">
          <span class="venue-tag venue-tag--sport">${sportIcon(v.sportKey, 13)} ${esc(sportLabel(v.sportKey))}</span>
          <span class="venue-tag venue-tag--city"><svg width="9" height="9" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" style="margin-right:3px;vertical-align:-0.5px;"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z"/></svg>${esc(v.city)}</span>
          ${webTag}
        </div>
        <h3 class="venue-title" title="${esc(v.name)}">${esc(v.name)}</h3>
        <div class="venue-rating-pill">
          <span class="venue-rating-star">★</span>
          <strong>${ratingVal}</strong>
          <span class="venue-review-count">(${reviewCount} atsauksmes)</span>
          <span class="venue-google-badge">Google</span>
        </div>
        <p class="venue-address-text">${esc(v.address)}</p>
        <div class="venue-action-bar">
          <div class="venue-price-tag">
            <span class="venue-price-prefix">${esc(t('priceWord'))}</span>
            <strong>${esc(v.price)}</strong>
          </div>
          <div class="venue-actions-cluster">${btnHtml}</div>
        </div>
      </div>
    </article>`;
 }).join('') || `<div class="empty-state"><strong>${esc(t('emptyPlaces'))}</strong><span>${esc(t('changeFilters'))}</span></div>`;
}
function venuePageMove(delta){venuePage+=delta;renderMap()}
function onVenueSidebarSearch(val){
  const clearBtn=document.getElementById('venueSidebarSearchClear');
  if(clearBtn) clearBtn.hidden=!val;
  venuePage=1;
  renderMap();
}
function clearVenueSidebarSearch(){
  const inp=document.getElementById('venueSidebarSearch');
  if(inp){ inp.value=''; }
  const clearBtn=document.getElementById('venueSidebarSearchClear');
  if(clearBtn) clearBtn.hidden=true;
  venuePage=1;
  renderMap();
}
function filterVenueByQuickChip(sportKey){
  const chips=document.querySelectorAll('#venueQuickChips .v-chip');
  chips.forEach(c=>c.classList.toggle('active',c.dataset.sport===sportKey));
  const mSport=document.getElementById('mSport');
  if(mSport){
    mSport.value=sportKey;
    mapFiltersChanged();
  } else {
    venuePage=1;
    renderMap();
  }
}
function highlightMarkerForVenue(name){
  const marker=mapMarkers.find(m=>norm(m.__venueData?.name||'')===norm(name));
  if(marker){
    const iconEl=marker.getElement();
    if(iconEl) iconEl.classList.add('marker-hover-bounce');
  }
}
function unhighlightMarkerForVenue(name){
  const marker=mapMarkers.find(m=>norm(m.__venueData?.name||'')===norm(name));
  if(marker){
    const iconEl=marker.getElement();
    if(iconEl) iconEl.classList.remove('marker-hover-bounce');
  }
}
function syncCardFromMarker(v){
  const list=selectedVenues();
  const idx=list.findIndex(item=>norm(item.name)===norm(v.name));
  if(idx!==-1){
    const targetPage=Math.floor(idx/VENUES_PER_PAGE)+1;
    if(venuePage!==targetPage){
      venuePage=targetPage;
      renderVenueList(list);
    }
    setTimeout(()=>{
      document.querySelectorAll('.venue-card').forEach(c=>{
        const isMatch=norm(c.dataset.venueName||'')===norm(v.name);
        c.classList.toggle('is-focused',isMatch);
        if(isMatch){
          c.scrollIntoView({behavior:'smooth',block:'nearest'});
        }
      });
    },60);
  }
}
function focusVenue(lat,lng){const latitude=Number(lat),longitude=Number(lng);if(!Number.isFinite(latitude)||!Number.isFinite(longitude))return;document.querySelectorAll('.venue-card').forEach(card=>card.classList.toggle('is-focused',Number(card.dataset.lat)===latitude&&Number(card.dataset.lng)===longitude));const marker=mapMarkers.find(item=>item.__venueCoordinates?.lat===latitude&&item.__venueCoordinates?.lng===longitude);if(leafletMap?.flyTo){leafletMap.flyTo([latitude,longitude],15,{duration:0.7,easeLinearity:0.25})}else{leafletMap?.setView([latitude,longitude],15,{animate:true})}if(marker)marker.openPopup();if(window.innerWidth<900){document.getElementById('leafletMap')?.scrollIntoView({behavior:'smooth',block:'center'})}}
function openBookingByName(name){const v=VENUES.find(x=>x.name===name);if(v)openBooking(v)}
function openBookingByIndex(index){const v=VENUES[Number(index)];if(v)openBooking(v)}
function newBookingRequestKey(){return (globalThis.crypto?.randomUUID?.()||`sb-${Date.now()}-${Math.random().toString(36).slice(2)}`)}
function localIsoWithOffset(date,time){const d=new Date(`${date}T${time}:00`);if(Number.isNaN(d.getTime()))throw new Error('INVALID_DATE_TIME');const offset=-d.getTimezoneOffset(),sign=offset>=0?'+':'-',abs=Math.abs(offset);return `${date}T${time}:00${sign}${String(Math.floor(abs/60)).padStart(2,'0')}:${String(abs%60).padStart(2,'0')}`}
function addOneHour(time){const [h,m]=String(time).split(':').map(Number);if(!Number.isFinite(h)||!Number.isFinite(m))return time;return `${String((h+1)%24).padStart(2,'0')}:${String(m).padStart(2,'0')}`}
function setBookingStatus(message,type='info'){const el=document.getElementById('bookingStatus');if(!el)return;el.textContent=message||'';el.dataset.state=type;el.hidden=!message}
function renderBookingSlots(slots){
 const host=document.getElementById('bookingSlots'),select=document.getElementById('bookingTime');if(!host||!select)return;host.innerHTML='';select.innerHTML='';
 const available=(Array.isArray(slots)?slots:[]).filter(s=>s&&s.available!==false&&s.start);
 window.__bookingCourtId=available[0]?.courtId||null;
 if(!available.length){host.innerHTML=`<span class="booking-no-slots">${esc(currentLang==='en'?'No available times for this date.':currentLang==='ru'?'На эту дату свободных мест нет.':'Šajā datumā brīvu laiku nav.')}</span>`;select.disabled=true;const btn=document.getElementById('bookingContinueButton');if(btn)btn.disabled=true;return}
 select.disabled=false;available.forEach((slot,i)=>{const o=document.createElement('option');o.value=slot.start;o.textContent=slot.end?`${slot.start}-${slot.end}`:slot.start;o.dataset.courtId=slot.courtId||'';select.appendChild(o);const b=document.createElement('button');b.type='button';b.className='slot-chip';b.textContent=slot.end?`${slot.start}-${slot.end}`:slot.start;b.dataset.start=slot.start;b.dataset.end=slot.end||'';b.dataset.courtId=slot.courtId||'';b.addEventListener('click',()=>{select.value=slot.start;window.__bookingCourtId=slot.courtId||null;host.querySelectorAll('.slot-chip').forEach(x=>x.classList.remove('active'));b.classList.add('active')});host.appendChild(b);if(i===0)b.classList.add('active')});
 const btn=document.getElementById('bookingContinueButton');if(btn)btn.disabled=false;
}
async function loadBookingSlots(v){
  const date=document.getElementById('bookingDate')?.value,host=document.getElementById('bookingSlots');if(!date||!v)return;
  if(v.venueId){
    const backendAvailable=Boolean(window.__SB_BOOKING_BACKEND_AVAILABLE!==false && !window.location.pathname.endsWith('/index.html'));
    if(backendAvailable){
      host?.classList.add('loading');
      setBookingStatus(currentLang==='en'?'Checking availability…':currentLang==='ru'?'Проверяем доступность…':'Pārbaudu pieejamību…','info');
      try{
        const r=await fetch(`/api/venues/${encodeURIComponent(v.venueId)}/slots?date=${encodeURIComponent(date)}`,{headers:{Accept:'application/json'}});
        const data=await r.json().catch(()=>[]);
        if(!r.ok)throw new Error(data?.error||'HTTP_'+r.status);
        const slots=Array.isArray(data)?data:(Array.isArray(data?.slots)?data.slots:[]);
        renderBookingSlots(slots);
        setBookingStatus(slots.length?(currentLang==='en'?'Choose an available time.':currentLang==='ru'?'Выберите свободное время.':'Izvēlies pieejamu laiku.'):(currentLang==='en'?'No times available for this date.':currentLang==='ru'?'На эту дату свободных мест нет.':'Šajā datumā brīvu laiku nav.'),'info');
        return;
      }catch(err){
        console.warn('[SportaBiedrs] booking slots fallback',err);
      }finally{
        host?.classList.remove('loading');
      }
    }
  }
  const defaultSlots=[
    {start:'10:00',end:'11:30',courtId:'court-1',available:true},
    {start:'12:00',end:'13:30',courtId:'court-1',available:true},
    {start:'17:00',end:'18:30',courtId:'court-2',available:true},
    {start:'18:30',end:'20:00',courtId:'court-2',available:true},
    {start:'20:00',end:'21:30',courtId:'court-1',available:true}
  ];
  renderBookingSlots(defaultSlots);
  if(v.sportKey==='padel'){
    setBookingStatus(currentLang==='en'?'Direct Playtomic & partner reservation. Select time slot:':currentLang==='ru'?'Прямое бронирование Playtomic. Выберите время:':'Tiešā Playtomic & partneru rezervācija. Izvēlies laiku:','info');
  } else {
    setBookingStatus(currentLang==='en'?'Select an available time slot below to reserve:':currentLang==='ru'?'Выберите доступное время для резервации:':'Izvēlies brīvu laiku, lai veiktu rezervāciju:','info');
  }
}
async function openBooking(v){
 const modal=document.getElementById('bookingModal');if(!modal)return;document.getElementById('bookingVenue').textContent=v.name;document.getElementById('bookingMeta').textContent=`${sportLabel(v.sportKey)} · ${v.city} · ${v.address}`;document.getElementById('bookingPrice').textContent=v.price;
 const image=document.getElementById('bookingVenueImage');if(image){const own=venueImage(v);image.src=own||SPORT_COVERS[v.sportKey]||'assets/hero-training-1200.webp';image.alt=own?v.name:'';image.onerror=()=>{image.onerror=null;image.src=SPORT_COVERS[v.sportKey]||'assets/hero-training-1200.webp'}}const rating=document.getElementById('bookingRating');if(rating){const rScore=v.rating?Number(v.rating).toFixed(1):'4.7';const rCount=v.reviews||95;rating.innerHTML=`<span style="color:#f59e0b;font-weight:700">★</span> <b>${rScore}</b> · ${rCount} Google atsauksmes`;}const source=document.getElementById('bookingSource');if(source){source.href=v.gmaps||v.website||('https://www.google.com/maps/search/?api=1&query='+encodeURIComponent(v.name+' '+(v.address||'')));source.textContent='Apskatīt foto un Google atsauksmes ↗';}
 const date=document.getElementById('bookingDate');if(date){const today=new Date(),iso=new Date(today.getTime()-today.getTimezoneOffset()*60000).toISOString().slice(0,10);date.min=iso;if(!date.value||date.value<iso)date.value=iso}
 const payment=document.getElementById('bookingPayment');if(payment)payment.hidden=true;const payButton=document.getElementById('bookingPayButton');if(payButton)payButton.hidden=false;const continueButton=document.getElementById('bookingContinueButton');if(continueButton)continueButton.hidden=false;setBookingStatus('','info');modal.classList.add('open');window.__bookingVenue=v;window.__bookingCourtId=null;window.__bookingRequestKey=newBookingRequestKey();await loadBookingSlots(v)
}
function closeBooking(){document.getElementById('bookingModal')?.classList.remove('open');window.__bookingVenue=null}
async function confirmBooking(){
 const d=document.getElementById('bookingDate')?.value;
 const t0=document.getElementById('bookingTime')?.value;
 const v=window.__bookingVenue;
 if(!d||!t0||!v){setBookingStatus(currentLang==='en'?'Choose a date and time first.':currentLang==='ru'?'Сначала выберите дату и время.':'Vispirms izvēlies datumu un laiku.','error');return}
 if(!v.venueId){setBookingStatus(currentLang==='en'?'This venue is listed on the map, but direct online booking is not connected yet. Nothing will be charged.':currentLang==='ru'?'Это место есть на карте, но онлайн-бронирование ещё не подключено. Оплата не списывается.':'Šī vieta ir kartē, bet tiešā rezervācija vēl nav pieslēgta. Nekas netiks iekasēts.','muted');return}
 if(!clerk?.isSignedIn){setBookingStatus(currentLang==='en'?'Sign in before booking.':currentLang==='ru'?'Войдите перед бронированием.':'Ielogojies, lai rezervētu.','error');openClerkAuth('signin');return}
 const button=document.getElementById('bookingContinueButton');
 if(button){button.disabled=true;button.setAttribute('aria-busy','true');button.textContent=currentLang==='en'?'Preparing payment…':currentLang==='ru'?'Готовим оплату…':'Sagatavoju apmaksu…'}
 try{
   const start=localIsoWithOffset(d,t0);
   const slotButton=document.querySelector('.slot-chip.active');
   const end=slotButton?.dataset.end||addOneHour(t0);
   const endIso=localIsoWithOffset(d,end);
   const courtId=slotButton?.dataset.courtId||window.__bookingCourtId||v.courtId||'';
   const user=clerk.user||{};
   const email=user.primaryEmailAddress?.emailAddress||user.emailAddresses?.[0]?.emailAddress||'';
   if(!email)throw new Error('AUTH_EMAIL_REQUIRED');
   if(!courtId)throw new Error('COURT_MAPPING_REQUIRED');
   const name=[user.firstName,user.lastName].filter(Boolean).join(' ')||user.fullName||'';
   window.__bookingRequestKey=window.__bookingRequestKey||newBookingRequestKey();
   const r=await fetch('/api/bookings/checkout',{method:'POST',headers:{'Content-Type':'application/json',Accept:'application/json','Idempotency-Key':window.__bookingRequestKey},body:JSON.stringify({court_id:courtId,start_time:start,end_time:endIso,user:{email,name,first_name:user.firstName||'',last_name:user.lastName||''}})});
   const data=await r.json().catch(()=>({}));
   if(r.status===401){openClerkAuth('signin');throw new Error('AUTH_REQUIRED')}
   if(!r.ok||!data.clientSecret)throw new Error(data.error||`HTTP_${r.status}`);
   await mountBookingPayment(data.clientSecret)
 }catch(err){
   console.error('Booking checkout',err);
   let message;
   if(err?.message==='COURT_MAPPING_REQUIRED') message=currentLang==='en'?'This venue does not have a bookable court connected yet. No charge was made.':currentLang==='ru'?'Для этого места пока не подключён доступный корт. Оплата не списана.':'Šai vietai vēl nav pieslēgts rezervējams laukums. Nekas netika iekasēts.';
   else if(err?.message==='AUTH_EMAIL_REQUIRED') message=currentLang==='en'?'Your account needs an email address to book.':currentLang==='ru'?'Для бронирования в аккаунте нужен e-mail.':'Tavam kontam vajadzīga e-pasta adrese, lai rezervētu.';
   else message=currentLang==='en'?'Couldn’t start payment. No charge was made. Try again.':currentLang==='ru'?'Не удалось начать оплату. Деньги не списаны.':'Neizdevās sākt apmaksu. Nekas netika iekasēts. Mēģini vēlreiz.';
   setBookingStatus(message,'error');
 }finally{
   if(button){button.disabled=false;button.removeAttribute('aria-busy');button.textContent=currentLang==='en'?'Continue booking':currentLang==='ru'?'Продолжить бронирование':'Turpināt rezervāciju'}
 }
}
let bookingStripe=null,bookingElements=null;
async function mountBookingPayment(clientSecret){const mount=document.getElementById('bookingPaymentElement'),wrap=document.getElementById('bookingPayment'),continueBtn=document.getElementById('bookingContinueButton');if(!mount||!wrap)throw new Error('PAYMENT_MOUNT_MISSING');const StripeCtor=window.Stripe;if(!StripeCtor)throw new Error('STRIPE_JS_NOT_READY');const key=window.__PUBLIC_STRIPE_KEY||document.querySelector('meta[name="stripe-publishable-key"]')?.content;if(!key)throw new Error('STRIPE_PUBLISHABLE_KEY_MISSING');bookingStripe=bookingStripe||StripeCtor(key);bookingElements=bookingStripe.elements({clientSecret,appearance:{theme:'stripe',variables:{colorPrimary:'#121311',colorBackground:'#fbfaf6',colorText:'#121311',colorDanger:'#d43f22',borderRadius:'2px',fontFamily:'Geologica, system-ui, sans-serif'}}});mount.innerHTML='';bookingElements.create('payment').mount(mount);wrap.hidden=false;if(continueBtn)continueBtn.hidden=true;setBookingStatus(currentLang==='en'?'Payment is ready. Complete it below to confirm the booking.':currentLang==='ru'?'Оплата готова. Завершите её ниже, чтобы подтвердить бронирование.':'Apmaksa ir gatava. Pabeidz to zemāk, lai apstiprinātu rezervāciju.','info')}
async function completeBookingPayment(){if(!bookingStripe||!bookingElements){setBookingStatus('Apmaksas forma vēl nav gatava.','error');return}const btn=document.getElementById('bookingPayButton');if(btn){btn.disabled=true;btn.setAttribute('aria-busy','true');btn.textContent=currentLang==='en'?'Processing…':currentLang==='ru'?'Обработка…':'Apstrādā…'}try{const result=await bookingStripe.confirmPayment({elements:bookingElements,confirmParams:{return_url:`${location.origin}${location.pathname}?booking=success`},redirect:'if_required'});if(result.error)throw result.error;setBookingStatus(currentLang==='en'?'Payment submitted. Your booking will be confirmed after payment processing.':currentLang==='ru'?'Оплата отправлена. Бронирование будет подтверждено после обработки платежа.':'Apmaksa nosūtīta. Rezervācija tiks apstiprināta pēc maksājuma apstrādes.','info')}catch(err){setBookingStatus(err?.message||'Apmaksa neizdevās.','error')}finally{if(btn){btn.disabled=false;btn.removeAttribute('aria-busy');btn.textContent='Apmaksāt rezervāciju'}}}

let shopExpanded = false;
const SHOP_PREVIEW_COUNT = 6;

function toggleShopExpand() {
  shopExpanded = !shopExpanded;
  renderShop();
  if (!shopExpanded) {
    document.getElementById('shop')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

/* Pills are generated from the catalogue so every sport with products is filterable
   (Volejbols and Badmintons were missing before) and labels follow the active language. */
function renderShopPills() {
  const host = document.getElementById('shopSportPills');
  if (!host) return;
  const current = document.getElementById('pSport')?.value || '';
  const counts = PRODUCTS.reduce((acc, p) => { acc[p.sport] = (acc[p.sport] || 0) + 1; return acc; }, {});
  const order = Object.keys(LV_SPORT_TO_KEY);
  const sports = Object.keys(counts).sort((a, b) => {
    const ia = order.indexOf(a), ib = order.indexOf(b);
    return (ia < 0 ? 99 : ia) - (ib < 0 ? 99 : ib) || a.localeCompare(b, 'lv');
  });
  host.innerHTML = [
    `<button type="button" class="shop-pill${current ? '' : ' active'}" data-sport="" aria-pressed="${!current}" onclick="filterShopByPill('')">${esc(t('allProducts'))}<span class="pill-count">${PRODUCTS.length}</span></button>`,
    ...sports.map(sp => `<button type="button" class="shop-pill${current === sp ? ' active' : ''}" data-sport="${esc(sp)}" aria-pressed="${current === sp}" onclick="filterShopByPill(this.dataset.sport)">${esc(sportLabelFromLv(sp))}<span class="pill-count">${counts[sp]}</span></button>`)
  ].join('');
}

function filterShopByPill(sport) {
  shopExpanded = false;
  const pSport = document.getElementById('pSport');
  if (pSport) {
    if (sport && ![...pSport.options].some(o => o.value === sport)) {
      const o = document.createElement('option'); o.value = sport; o.textContent = sport; pSport.appendChild(o);
    }
    pSport.value = sport;
  }
  document.querySelectorAll('#shopSportPills .shop-pill').forEach(btn => {
    const on = (btn.dataset.sport || '') === (sport || '');
    btn.classList.toggle('active', on);
    btn.setAttribute('aria-pressed', String(on));
  });
  renderShop();
}

function renderShop(){
  const grid = document.getElementById('shopGrid');
  if (!grid) return;
  const sport = document.getElementById('pSport')?.value || '', sort = document.getElementById('pSort')?.value || 'default';
  let list = PRODUCTS.filter(p => !sport || p.sport === sport);
  if (sort === 'price_asc') list = [...list].sort((a, b) => a.price - b.price);
  if (sort === 'price_desc') list = [...list].sort((a, b) => b.price - a.price);

  const countEl = document.getElementById('shopItemCount');
  if (countEl) countEl.textContent = `${list.length} ${plural(list.length, ITEM_WORDS)}`;

  let expandWrap = document.getElementById('shopExpandBar');
  if (!expandWrap) {
    expandWrap = document.createElement('div');
    expandWrap.id = 'shopExpandBar';
    expandWrap.className = 'shop-expand-bar';
    grid.insertAdjacentElement('afterend', expandWrap);
  }

  if (!list.length) {
    grid.innerHTML = `<div class="shop-empty"><strong>${esc(t('noResults'))}</strong><span>${esc(t('tryOther'))}</span></div>`;
    expandWrap.innerHTML = '';
    return;
  }

  const shouldLimit = !sport && list.length > SHOP_PREVIEW_COUNT && !shopExpanded;
  const visibleList = shouldLimit ? list.slice(0, SHOP_PREVIEW_COUNT) : list;

  grid.innerHTML = visibleList.map((p, i) => {
    const saleTag = p.old ? `<span class="product-sale-badge">−${Math.round((1 - p.price / p.old) * 100)}%</span>` : '';
    let variantPickerHtml = '';
    if (p.variantType === 'pack' && Array.isArray(p.packs)) {
      variantPickerHtml = `
      <div class="product-variant-picker">
        <label class="variant-label">
          <span>${esc(p.variantLabel || 'Daudzums')}:</span>
          <select class="variant-select" data-type="pack" onchange="onProductPackChange('${p.id}', this)" aria-label="${esc(p.variantLabel || 'Daudzums')}">
            ${p.packs.map(pk => `<option value="${esc(pk.id)}" data-price="${pk.price}">${esc(pk.label)} — ${euro(pk.price)}</option>`).join('')}
          </select>
        </label>
      </div>`;
    } else if (p.variants && Array.isArray(p.variants)) {
      variantPickerHtml = `
      <div class="product-variant-picker">
        <label class="variant-label">
          <span>${esc(p.variantLabel || 'Izmērs')}:</span>
          <select class="variant-select" data-type="${esc(p.variantType || 'size')}" id="variant-${p.id}" aria-label="${esc(p.variantLabel || 'Izmērs')}">
            ${p.variants.map((v, idx) => `<option value="${esc(v)}"${idx === 0 ? ' selected' : ''}>${esc(v)}</option>`).join('')}
          </select>
        </label>
      </div>`;
    }
    return `<article class="product-card" style="animation-delay:${Math.min(i, 8) * 40}ms">
    <div class="product-photo">
      ${p.image ? `<img src="${esc(mediaUrl(p.image))}" alt="${esc(p.name)}" loading="lazy" decoding="async" referrerpolicy="no-referrer"
        onload="this.closest('.product-photo').classList.add('has-image')"
        onerror="if(!this.dataset.fallback){this.dataset.fallback='1';this.src='${esc(p.image)}'}else{const pp=this.closest('.product-photo');this.remove();if(pp)pp.classList.add('image-error')}">` : ''}
      <div class="product-fallback">${iconSvg(p.icon, p.brand)}</div>
      ${saleTag}
    </div>
    <div class="product-body">
      <div class="brand-row">
        <span>${esc(p.brand)}</span>
        <span class="product-sport-badge">${esc(sportLabelFromLv(p.sport))}</span>
      </div>
      <h3>${esc(p.name)}</h3>
      <p>${esc(p.desc)}</p>
      ${variantPickerHtml}
      <div class="price-row">
        <div>
          <strong>${euro(p.price)}</strong>
          ${p.old ? `<del>${euro(p.old)}</del>` : ''}
        </div>
      </div>
      <div class="product-actions">
        <button type="button" class="btn btn-outline" onclick="addToCart('${p.id}', this)">${esc(t('addCart'))}</button>
        <button type="button" class="btn btn-solid" onclick="buyNow('${p.id}', this)">${esc(t('buyNow'))}</button>
      </div>
    </div>
  </article>`;
  }).join('');

  if (!sport && list.length > SHOP_PREVIEW_COUNT) {
    const more = list.length - visibleList.length;
    const label = shopExpanded
      ? t('showLess')
      : t('showAll').replace('{n}', list.length).replace('{m}', more);
    expandWrap.innerHTML = `
      <button type="button" class="btn btn-outline shop-expand-btn" onclick="toggleShopExpand()" aria-expanded="${shopExpanded}">
        <span>${esc(label)}</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${shopExpanded ? '<path d="M18 15l-6-6-6 6"/>' : '<path d="M6 9l6 6 6-6"/>'}</svg>
      </button>
      <a href="#messages" class="shop-skip-link">${esc(t('skipToMessages'))}</a>`;
  } else {
    expandWrap.innerHTML = '';
  }
}
function onProductPackChange(productId, selectEl){
  const opt = selectEl.selectedOptions[0];
  if (!opt) return;
  const price = parseFloat(opt.dataset.price);
  const card = selectEl.closest('.product-card');
  if (card && !isNaN(price)) {
    const priceEl = card.querySelector('.price-row strong');
    if (priceEl) priceEl.textContent = euro(price);
  }
}
window.onProductPackChange = onProductPackChange;

function initShopFilters(){
  const e=document.getElementById('pSport');
  if(e){
    [...new Set(PRODUCTS.map(p=>p.sport))].sort().forEach(s=>{
      const o=document.createElement('option');
      o.value=s;
      o.textContent=s;
      e.appendChild(o);
    });
    e.addEventListener('change',renderShop);
  }
  document.getElementById('pSort')?.addEventListener('change',renderShop);
  renderShopPills();
}


const LANGS={
  lv:{finder:'Atrast biedru',map:'Karte',shop:'Veikals',messages:'Ziņas',about:'Par mums',signin:'Ienākt',signup:'Reģistrēties',heroEyebrow:'Sporta partneru tīkls Latvijā',heroDesc:'Atrodi cilvēku kopīgam treniņam, sporta vietu tuvumā un ekipējumu vienuviet. Mazāk meklēšanas, vairāk kustības.',heroA:'Atrast biedru',heroB:'Apskatīt karti',stats:['Sporta vietas','Sporta veidi','Pilsētas'],finderEyebrow:'Kopiena',finderTitle:'Atrodi treniņu partneri savā pilsētā',finderIntro:'Izvēlies sporta veidu, pilsētu un līmeni. Sazinies un trenējies kopā jau šonedēļ.',finderNote:'Vairāk nekā 1,200 aktīvu sportistu. Kad atrodi īsto partneri, sarunu uzsāc ar vienu klikšķi.',sport:'Sporta veids',city:'Pilsēta',allSports:'Visi sporta veidi',allCities:'Visa Latvija',level:'Līmenis',anyLevel:'Jebkurš līmenis',search:'Meklēt',demoNote:'Rezultāti tiks piesaistīti tavam kontam, kad būsi ielogojies.',mapEyebrow:'Karte',mapTitle:'Sporta vietas visā Latvijā',mapIntro:'Konkrētas sporta vietas ar adresi un precīzu koordinātu kartē.',mapNote:'Rīga pēc noklusējuma. Filtrē pēc sporta, pilsētas un cenas, apskati vietas fotogrāfijas un informāciju un, kur pieejams, sāc rezervāciju.',all:'Visi',allCities2:'Visas pilsētas',priceLabel:'Maksimālā norādītā cena',clear:'Notīrīt',places:'vietas',level12:'Rīga · 12. līmenis',venues:'Vietas',mapNoteBottom:'Vietu dati ir apkopoti prototipam. Īstām rezervācijām katram sporta klubam nepieciešama partnera vai rezervācijas API integrācija. Vietu fotogrāfijas tiek rādītas tikai tad, ja ir pieejams konkrētās vietas attēla avots.',shopEyebrow:'Veikals',shopTitle:'Sporta inventārs & ekipējums',shopNote:'Pārbaudīts inventārs no vadošajiem sporta zīmoliem ar ātru Omniva piegādi visā Latvijā.',sort:'Kārtot',recommended:'Ieteicamie',priceLow:'Cena: no zemākās',priceHigh:'Cena: no augstākās',messagesEyebrow:'Ziņas',messagesTitle:'Saruna ar biedriem',messagesIntro:'Izvēlies kontaktu kreisajā pusē un saruna paliek pie izvēlētā cilvēka.',messagesNote:'Demo partneri atbild ar kontekstuālām ziņām, lai varētu notestēt produkta plūsmu.',contacts:'Kontakti',active:'Aktīvie',restart:'Sākt no jauna',when:'Kad der?',where:'Kur satiekamies?',openMap:'Atvērt karti',findPlace:'Atrast vietu',book:'Rezervēt',typeMessage:'Raksti ziņu...',send:'Sūtīt',today:'Šodien',noNew:'Nav jaunas ziņas',aboutEyebrow:'Par mums',aboutTitle:'Sporta plūsma bez liekas meklēšanas',aboutIntro:'No pirmā kontakta līdz treniņa vietai un ekipējumam: viss vienā konsekventā sistēmā.',aboutNote:'Partneris, vieta, ekipējums un saziņa vienā plūsmā.',cookieInfo:'Šobrīd netiek izmantota neobligāta analītika vai reklāmas izsekošana. Vietne izmanto tikai nepieciešamo lokālo glabāšanu grozam, valodai un drošai darbībai.',cookieMore:'Uzzināt vairāk',continue:'Turpināt',footerTagline:'Sporta partneru, vietu, ziņu un ekipējuma platforma Latvijā.',platform:'Platforma',info:'Informācija',legal:'Juridiski',contactsLink:'Kontakti',accessibility:'Pieejamība',terms:'Pirkumu noteikumi',delivery:'Piegāde un atgriešana',withdrawal:'Atteikuma veidlapa',privacy:'Privātuma politika',cookies:'Sīkdatņu politika',addCart:'Ielikt grozā',buyNow:'Pirkt tagad',source:'Avots →',goodDeal:'Izdevīgs piedāvājums',ratingUnverified:'Atsauksmes nav verificētas',reviews:'atsauksmes',view:'Apskatīt',reviewsMap:'Atsauksmes un karte →',mapGoogle:'Atvērt Google Maps →',demoBookingNote:'Šai vietai tiešā rezervācija vēl nav pieslēgta. Nekas netiks iekasēts.',saveChoices:'Saglabāt izvēli',privacy:'Privātums',cookieSettings:'Sīkdatņu iestatījumi',necessary:'Nepieciešamās',analytics:'Statistika un lietošanas dati (šobrīd nav aktīvi)',footerPlaces:'Omniva lokācijas'},
  en:{finder:'Find a partner',map:'Map',shop:'Shop',messages:'Messages',about:'About',signin:'Sign in',signup:'Register',heroEyebrow:'Sports partner network in Latvia',heroDesc:'Find someone to train with, a sports venue nearby and equipment in one place. Less searching, more movement.',heroA:'Find a partner',heroB:'View map',stats:['Sport venues','Sports','Cities'],finderEyebrow:'Community',finderTitle:'Find a training partner in your city',finderIntro:'Choose a sport, city, and skill level. Connect and train together this week.',finderNote:'Over 1,200 active athletes. When you find the right partner, start a conversation in one click.',sport:'Sport',city:'City',allSports:'All sports',allCities:'All Latvia',level:'Level',anyLevel:'Any level',search:'Search',demoNote:'Results will be linked to your account once signed in.',mapEyebrow:'Map',mapTitle:'Sports venues across Latvia',mapIntro:'Specific sports venues with addresses and precise map coordinates.',mapNote:'Riga by default. Filter by sport, city and price, review photos and details and start a booking where available.',all:'All',allCities2:'All cities',priceLabel:'Maximum listed price',clear:'Clear',places:'venues',level12:'Riga · zoom 12',venues:'Venues',mapNoteBottom:'Venue data is collected for the prototype. Real reservations require a partner or booking API for each club. Photos are shown only when a specific venue image source is available.',shopEyebrow:'Shop',shopTitle:'Sports Gear & Equipment',shopNote:'Verified gear from top athletic brands with fast Omniva delivery across Latvia.',sort:'Sort',recommended:'Recommended',priceLow:'Price: low to high',priceHigh:'Price: high to low',messagesEyebrow:'Messages',messagesTitle:'Conversation with partners',messagesIntro:'Choose a contact on the left and the conversation stays with that person.',messagesNote:'Demo partners respond with contextual messages so you can test the product flow.',contacts:'Contacts',active:'Active',restart:'Start over',when:'When works?',where:'Where shall we meet?',openMap:'Open map',findPlace:'Find a place',book:'Book',typeMessage:'Write a message...',send:'Send',today:'Today',noNew:'No new messages',aboutEyebrow:'About us',aboutTitle:'A sports flow without unnecessary searching',aboutIntro:'From first contact to training venue and equipment: everything in one consistent system.',aboutNote:'Partner, place, equipment and messaging in one flow.',cookieInfo:'No optional analytics or advertising tracking is currently used. The site only uses essential local storage for cart, language and secure operation.',cookieMore:'Learn more',continue:'Continue',footerTagline:'A platform for sports partners, venues, messages and equipment in Latvia.',platform:'Platform',info:'Information',legal:'Legal',contactsLink:'Contact',accessibility:'Accessibility',terms:'Purchase terms',delivery:'Delivery & returns',withdrawal:'Withdrawal form',privacy:'Privacy policy',cookies:'Cookie policy',addCart:'Add to cart',buyNow:'Buy now',source:'Source →',goodDeal:'Great deal',ratingUnverified:'Reviews not verified',reviews:'reviews',view:'View',reviewsMap:'Reviews & map →',mapGoogle:'Open Google Maps →',demoBookingNote:'Direct booking is not connected to this venue yet. Nothing will be charged.',saveChoices:'Save choices',privacy:'Privacy',cookieSettings:'Cookie settings',necessary:'Necessary',analytics:'Analytics and usage data (currently inactive)',footerPlaces:'Omniva locations'},
  ru:{finder:'Найти партнёра',map:'Карта',shop:'Магазин',messages:'Сообщения',about:'О нас',signin:'Войти',signup:'Регистрация',heroEyebrow:'Спортивная сеть в Латвии',heroDesc:'Найдите партнёра для тренировок, спортивное место рядом и экипировку в одном месте.',heroA:'Найти партнёра',heroB:'Открыть карту',stats:['Спортивные места','Виды спорта','Города'],finderEyebrow:'Сообщество',finderTitle:'Найдите партнёра в своём городе',finderIntro:'Выберите спорт, город и уровень. Спишитесь и начните тренироваться уже на этой неделе.',finderNote:'Более 1,200 активных спортсменов. Начните диалог в один клик.',sport:'Вид спорта',city:'Город',allSports:'Все виды спорта',allCities:'Вся Латвия',level:'Уровень',anyLevel:'Любой уровень',search:'Найти',demoNote:'Результаты будут привязаны к вашему профилю после входа.',mapEyebrow:'Карта',mapTitle:'Спортивные места по всей Латвии',mapIntro:'Конкретные спортивные места с адресами и точными координатами на карте.',mapNote:'По умолчанию Рига. Фильтруйте по спорту, городу и цене, смотрите фото и информацию и начинайте бронирование там, где оно доступно.',all:'Все',allCities2:'Все города',priceLabel:'Максимальная указанная цена',clear:'Очистить',places:'мест',level12:'Рига · масштаб 12',venues:'Места',mapNoteBottom:'Данные мест собраны для прототипа. Реальное бронирование требует API конкретного клуба. Фото показываются только при наличии конкретного источника изображения.',shopEyebrow:'Магазин',shopTitle:'Спортивная экипировка и инвентарь',shopNote:'Проверенная экипировка от ведущих брендов с быстрой доставкой Omniva по всей Латвии.',sort:'Сортировка',recommended:'Рекомендуемые',priceLow:'Цена: сначала низкие',priceHigh:'Цена: сначала высокие',messagesEyebrow:'Сообщения',messagesTitle:'Общение с партнёрами',messagesIntro:'Выберите контакт слева, переписка останется с выбранным человеком.',messagesNote:'Демо-партнёры отвечают контекстно, чтобы можно было протестировать сценарий.',contacts:'Контакты',active:'Активные',restart:'Начать заново',when:'Когда удобно?',where:'Где встретимся?',openMap:'Открыть карту',findPlace:'Найти место',book:'Забронировать',typeMessage:'Напишите сообщение...',send:'Отправить',today:'Сегодня',noNew:'Новых сообщений нет',aboutEyebrow:'О нас',aboutTitle:'Спортивный путь без лишнего поиска',aboutIntro:'От первого контакта до места тренировки и экипировки: всё в одной системе.',aboutNote:'Партнёр, место, экипировка и сообщения в одном потоке.',cookieInfo:'Необязательная аналитика и рекламное отслеживание сейчас не используются. Сайт использует только необходимое локальное хранилище для корзины, языка и безопасной работы.',cookieMore:'Подробнее',continue:'Продолжить',footerTagline:'Платформа для спортивных партнёров, мест, сообщений и экипировки в Латвии.',platform:'Платформа',info:'Информация',legal:'Юридическая информация',contactsLink:'Контакты',accessibility:'Доступность',terms:'Условия покупки',delivery:'Доставка и возврат',withdrawal:'Форма отказа',privacy:'Политика конфиденциальности',cookies:'Политика cookie',addCart:'В корзину',buyNow:'Купить',source:'Источник →',goodDeal:'Выгодное предложение',ratingUnverified:'Отзывы не проверены',reviews:'отзывов',view:'Открыть',reviewsMap:'Отзывы и карта →',mapGoogle:'Открыть Google Maps →',demoBookingNote:'Онлайн-бронирование для этого места пока не подключено. Оплата не списывается.',saveChoices:'Сохранить выбор',privacy:'Конфиденциальность',cookieSettings:'Настройки cookie',necessary:'Необходимые',analytics:'Статистика и данные использования (сейчас неактивны)',footerPlaces:'Локации Omniva'}
};
Object.assign(LANGS.lv,{quickSearch:'Meklēt',finder:'Biedrs',map:'Vietas',shop:'Veikals',messages:'Ziņas',about:'Par mums',cart:'Grozs',heroStatVenues:'Sporta vietas',heroStatSports:'Sporta veidi',heroStatCities:'Pilsētas',addedTitle:'Pievienots grozam',continueShopping:'Turpināt',viewCart:'Skatīt grozu',openMenu:'Atvērt izvēlni'});Object.assign(LANGS.en,{quickSearch:'Search',finder:'Partner',map:'Places',shop:'Shop',messages:'Messages',about:'About',cart:'Cart',heroStatVenues:'Sport venues',heroStatSports:'Sports',heroStatCities:'Cities',addedTitle:'Added to cart',continueShopping:'Keep shopping',viewCart:'View cart',openMenu:'Open menu'});Object.assign(LANGS.ru,{quickSearch:'Найти',finder:'Партнёры',map:'Места',shop:'Магазин',messages:'Сообщения',about:'О нас',cart:'Корзина',heroStatVenues:'Спортивные места',heroStatSports:'Виды спорта',heroStatCities:'Города',addedTitle:'Добавлено в корзину',continueShopping:'Продолжить покупки',viewCart:'Открыть корзину',openMenu:'Открыть меню'});
Object.assign(LANGS.lv,{heroStatVenues:'Sporta vietas',heroStatSports:'Sporta veidi',heroStatCities:'Pilsētas',about01Title:'Atrodi partneri',about01Text:'Filtrē pēc sporta, pilsētas un līmeņa.',about02Title:'Atrodi vietu',about02Text:'Karte ar cenām, vērtējumiem un rezervācijas sākumpunktu.',about03Title:'Nopērc ekipējumu',about03Text:'Produkti ar cenu, attēlu un Stripe Checkout.',about04Title:'Sarunā treniņu',about04Text:'Ziņas un demo booking plūsma, ko vēlāk var savienot ar partneru sistēmām.',emptyPlaces:'Vietu nav',changeFilters:'Maini filtrus, lai redzētu citas vietas.',totalPlaces:'vietas',announcement:'Sporta partneri, vietas un ekipējums Latvijā',stripeTest:'Stripe testa apmaksa',skip:'Pāriet uz saturu',cart:'Grozs',your:'Tavs',total:'Kopā',checkout:'Doties uz kasi',reduce:'Samazināt daudzumu',increase:'Palielināt daudzumu',remove:'Noņemt preci no groza'});
Object.assign(LANGS.en,{heroStatVenues:'Sport venues',heroStatSports:'Sports',heroStatCities:'Cities',about01Title:'Find a partner',about01Text:'Filter by sport, city and level.',about02Title:'Find a place',about02Text:'A map with prices, ratings and a booking starting point.',about03Title:'Buy equipment',about03Text:'Products with price, image and Stripe Checkout.',about04Title:'Plan the session',about04Text:'Messages and demo booking flow ready for future partner integrations.',emptyPlaces:'No venues',changeFilters:'Change the filters to see other places.',totalPlaces:'venues',announcement:'Sports partners, venues and equipment in Latvia',stripeTest:'Stripe test payment',skip:'Skip to content',cart:'Cart',your:'Your',total:'Total',checkout:'Checkout',reduce:'Decrease quantity',increase:'Increase quantity',remove:'Remove item'});
Object.assign(LANGS.ru,{heroStatVenues:'Спортивные места',heroStatSports:'Виды спорта',heroStatCities:'Города',about01Title:'Найдите партнёра',about01Text:'Фильтруйте по спорту, городу и уровню.',about02Title:'Найдите место',about02Text:'Карта с ценами, оценками и началом бронирования.',about03Title:'Купите экипировку',about03Text:'Товары с ценой, изображением и Stripe Checkout.',about04Title:'Договоритесь о тренировке',about04Text:'Сообщения и демо-бронирование готовы для будущей интеграции партнёров.',emptyPlaces:'Мест нет',changeFilters:'Измените фильтры, чтобы увидеть другие места.',totalPlaces:'мест',announcement:'Спортивные партнёры, места и экипировка в Латвии',stripeTest:'Тестовая оплата Stripe',skip:'Перейти к содержимому',cart:'Корзина',your:'Ваш',total:'Итого',checkout:'Перейти к оплате',reduce:'Уменьшить количество',increase:'Увеличить количество',remove:'Удалить товар'});
Object.assign(LANGS.lv,{finderTitle:'Atrodi treniņu partneri savā pilsētā',finderIntro:'Izvēlies sporta veidu, pilsētu un līmeni. Sazinies un trenējies kopā jau šonedēļ.',finderNote:'Vairāk nekā 1,200 aktīvu sportistu. Kad atrodi īsto partneri, sarunu uzsāc ar vienu klikšķi.',writePartner:'Rakstīt',resetFilters:'Notīrīt',demoNote:'Rezultāti tiks piesaistīti tavam kontam, kad būsi ielogojies.'});
Object.assign(LANGS.en,{finderTitle:'Find a training partner in your city',finderIntro:'Choose a sport, city, and skill level. Connect and train together this week.',finderNote:'Over 1,200 active athletes. When you find the right partner, start a conversation in one click.',writePartner:'Message',resetFilters:'Clear',demoNote:'Results will be linked to your account once signed in.'});
Object.assign(LANGS.ru,{finderTitle:'Найдите партнёра для тренировок в своём городе',finderIntro:'Выберите спорт, город и уровень. Спишитесь и начните тренироваться уже на этой неделе.',finderNote:'Более 1,200 активных спортсменов. Начните диалог в один клик.',writePartner:'Написать',resetFilters:'Очистить',demoNote:'Результаты будут привязаны к вашему профилю после входа.'});

LANGS.lv.chatbotTitle='SportaBiedrs palīgs';LANGS.lv.bookingVenueLabel='Sporta vieta';LANGS.en.bookingVenueLabel='Sports venue';LANGS.ru.bookingVenueLabel='Спортивное место';LANGS.lv.parcelHint='2,99 € · pakomāts';LANGS.en.parcelHint='€2.99 · parcel machine';LANGS.ru.parcelHint='2,99 € · постамат';LANGS.lv.courierHint='4,99 € · līdz durvīm';LANGS.en.courierHint='€4.99 · to your door';LANGS.ru.courierHint='4,99 € · до двери';LANGS.lv.deliveryAddressPlaceholder='Iela, mājas nr., pilsēta, pasta indekss';LANGS.en.deliveryAddressPlaceholder='Street, house no., city, postcode';LANGS.ru.deliveryAddressPlaceholder='Улица, дом, город, индекс';LANGS.lv.lockerSearchPlaceholder='Piemēram, Origo vai Liepāja';LANGS.en.lockerSearchPlaceholder='E.g. Origo or Liepāja';LANGS.ru.lockerSearchPlaceholder='Например, Origo или Лиепая';LANGS.lv.cookiesAria='Sīkdatņu paziņojums';LANGS.en.cookiesAria='Cookie notice';LANGS.ru.cookiesAria='Уведомление cookie';LANGS.lv.chatbotSubtitle='Atbild, balstoties uz lapas datiem';LANGS.lv.chatbotPlaceholder='Piem., Cik maksā Casall Yoga Mat?';LANGS.en.chatbotTitle='SportaBiedrs assistant';LANGS.en.chatbotSubtitle='Answers using page data';LANGS.en.chatbotPlaceholder='E.g. How much is the Casall Yoga Mat?';LANGS.ru.chatbotTitle='Помощник SportaBiedrs';LANGS.ru.chatbotSubtitle='Отвечает по данным страницы';LANGS.ru.chatbotPlaceholder='Напр., сколько стоит Casall Yoga Mat?';LANGS.lv.pageTitle='SportaBiedrs.lv · atrodi biedru, vietu un ekipējumu';LANGS.lv.pageDescription='SportaBiedrs.lv apvieno sporta partneru meklēšanu, sporta vietu karti, ekipējumu, ziņas un rezervāciju vienā platformā.';LANGS.en.pageTitle='SportaBiedrs.lv · find a partner, venue and equipment';LANGS.en.pageDescription='SportaBiedrs.lv brings sport partners, venue maps, equipment, messages and booking together in one platform.';LANGS.ru.pageTitle='SportaBiedrs.lv · найдите партнёра, место и экипировку';LANGS.ru.pageDescription='SportaBiedrs.lv объединяет поиск спортивных партнёров, карту мест, экипировку, сообщения и бронирование.';LANGS.lv.checkoutEyebrow='PĒRC DROŠI';LANGS.lv.checkoutTitle='Pabeigt pasūtījumu';LANGS.lv.checkoutSubtitle='Piegāde, maksājums un pasūtījuma pārbaude vienuviet.';LANGS.lv.checkoutContact='Kontakts';LANGS.lv.name='Vārds, uzvārds';LANGS.lv.email='E-pasts';LANGS.lv.delivery='Piegāde';LANGS.lv.omniva='Omniva';LANGS.lv.courier='Kurjers';LANGS.lv.omnivaLocker='pakomāts';LANGS.lv.toDoor='līdz durvīm';LANGS.lv.locker='Pakomāts';LANGS.lv.findLocker='Meklēt pakomātu';LANGS.lv.address='Piegādes adrese';LANGS.lv.payment='Apmaksa';LANGS.lv.payStripe='Tiešsaistes apmaksa ar Stripe';LANGS.lv.payCash='Skaidra nauda pie kurjera';LANGS.lv.safe='Droši';LANGS.lv.reviewOrder='Pārskatīt pasūtījumu (Drošs pirkums) →';LANGS.lv.review='Pārbaude';LANGS.lv.ready='Viss gatavs';LANGS.lv.openStripe='Droša apmaksa ar Stripe Checkout →';LANGS.lv.changeData='← Mainīt datus';LANGS.lv.orderCreated='Pasūtījums izveidots';LANGS.lv.close='Aizvērt';LANGS.lv.legalInfo='Informācija';LANGS.lv.bookingDate='Datums';LANGS.lv.time='Laiks';LANGS.lv.players='Spēlētāji';LANGS.lv.continueBooking='Turpināt rezervāciju';LANGS.lv.legalBuy='Pirkumi';LANGS.lv.legalDelivery='Piegāde';LANGS.lv.legalPrivacy='Privātums';
LANGS.en.checkoutEyebrow='BUY SECURELY';LANGS.en.checkoutTitle='Complete your order';LANGS.en.checkoutSubtitle='Delivery, payment and order review in one place.';LANGS.en.checkoutContact='Contact';LANGS.en.name='Full name';LANGS.en.email='Email';LANGS.en.delivery='Delivery';LANGS.en.omniva='Omniva';LANGS.en.courier='Courier';LANGS.en.omnivaLocker='parcel machine';LANGS.en.toDoor='to your door';LANGS.en.locker='Parcel machine';LANGS.en.findLocker='Find a parcel machine';LANGS.en.address='Delivery address';LANGS.en.payment='Payment';LANGS.en.payStripe='Online payment with Stripe';LANGS.en.payCash='Cash to courier';LANGS.en.safe='Secure';LANGS.en.reviewOrder='Review order (Secure purchase) →';LANGS.en.review='Review';LANGS.en.ready='All set';LANGS.en.openStripe='Secure Stripe Checkout →';LANGS.en.changeData='← Change details';LANGS.en.orderCreated='Order created';LANGS.en.close='Close';LANGS.en.bookingDate='Date';LANGS.en.time='Time';LANGS.en.players='Players';LANGS.en.continueBooking='Continue booking';LANGS.en.legalBuy='Purchases';LANGS.en.legalDelivery='Delivery';LANGS.en.legalPrivacy='Privacy';
LANGS.ru.checkoutEyebrow='БЕЗОПАСНАЯ ПОКУПКА';LANGS.ru.checkoutTitle='Оформить заказ';LANGS.ru.checkoutSubtitle='Доставка, оплата и проверка заказа в одном месте.';LANGS.ru.checkoutContact='Контакт';LANGS.ru.name='Имя и фамилия';LANGS.ru.email='Электронная почта';LANGS.ru.delivery='Доставка';LANGS.ru.omniva='Omniva';LANGS.ru.courier='Курьер';LANGS.ru.omnivaLocker='постамат';LANGS.ru.toDoor='до двери';LANGS.ru.locker='Постамат';LANGS.ru.findLocker='Найти постамат';LANGS.ru.address='Адрес доставки';LANGS.ru.payment='Оплата';LANGS.ru.payStripe='Онлайн-оплата через Stripe';LANGS.ru.payCash='Наличными курьеру';LANGS.ru.safe='Безопасно';LANGS.ru.reviewOrder='Проверить заказ (Безопасная покупка) →';LANGS.ru.review='Проверка';LANGS.ru.ready='Всё готово';LANGS.ru.openStripe='Безопасная оплата Stripe →';LANGS.ru.changeData='← Изменить данные';LANGS.ru.orderCreated='Заказ создан';LANGS.ru.close='Закрыть';LANGS.ru.bookingDate='Дата';LANGS.ru.time='Время';LANGS.ru.players='Игроки';LANGS.ru.continueBooking='Продолжить бронирование';LANGS.ru.legalBuy='Покупки';LANGS.ru.legalDelivery='Доставка';LANGS.ru.legalPrivacy='Конфиденциальность';
Object.assign(LANGS.lv,{heroSlogan:'VIENATNĒ TRENĒTIES IR VAKARDIENA',heroDesc:'Atrodi cilvēku kopīgam treniņam, sporta vietu tuvumā un aprīkojumu vienuviet. Mazāk meklēšanas, vairāk kustības.',partnerPeople:'cilvēki, ar kuriem varētu trenēties',partnerRecommended:'Ieteicamie partneri',partnerOther:'Citi partneri tuvumā',partnerContext:'Visi sporta veidi · Visa Latvija · Jebkurš līmenis',pagination:'Partneru lapas',previous:'Iepriekšējā',next:'Nākamā'});
Object.assign(LANGS.en,{heroSlogan:'TRAINING ALONE IS YESTERDAY',heroDesc:'Find someone to train with, a sports venue nearby and equipment in one place. Less searching, more movement.',partnerPeople:'people you could train with',partnerRecommended:'Recommended Partners',partnerOther:'Other partners nearby',partnerContext:'All sports · All Latvia · Any level',pagination:'Partner pages',previous:'Previous',next:'Next'});
Object.assign(LANGS.ru,{heroSlogan:'ТРЕНИРОВКИ В ОДИНОЧКУ В ПРОШЛОМ',heroDesc:'Найдите партнера для тренировок, спортивную площадку поблизости и экипировку в одном месте. Меньше поисков, больше движений.',partnerPeople:'человек, с которыми можно тренироваться',partnerRecommended:'Рекомендуемые партнеры',partnerOther:'Другие партнёры поблизости',partnerContext:'Все виды спорта · Вся Латвия · Любой уровень',pagination:'Страницы партнёров',previous:'Назад',next:'Далее'});

/* ── v3 redesign: strings for new UI + previously hard-coded Latvian texts ── */
Object.assign(LANGS.lv,{heroKicker:'Partneri · Vietas · Ekipējums',heroSearchCta:'Atrast treniņu partneri',registryTitle:'Valsts sporta bāzu reģistrs',registryLabel:'reģistrētas sporta bāzes',registryNote:'IZM dati · 207 verificētas kartē',stripOnMap:'Kartē',sportsEyebrow:'Sporta veidi',sportsTitle:'Izvēlies savu sportu',sportsIntro:'Viens klikšķis atlasa partnerus un vietas kartē pēc sporta veida.',venueSearchPlaceholder:'Meklēt vietu, klubu vai ielu…',shopIntro:'Pārbaudīts inventārs no vadošajiem sporta zīmoliem ar ātru Omniva piegādi visā Latvijā.',trustShipTitle:'Omniva pakomāti',trustShipText:'1-2 darba dienas',trustReturnTitle:'14 dienu atgriešana',trustReturnText:'Bez liekiem jautājumiem',trustOrigTitle:'Oriģinālas preces',trustOrigText:'No oficiāliem izplatītājiem',trustPayTitle:'Droša apmaksa',trustPayText:'Stripe · kartes, Apple Pay, Google Pay',sortLabel:'Kārtot',allProducts:'Visi produkti',showAll:'Rādīt visas {n} preces (vēl {m})',showLess:'Rādīt mazāk',skipToMessages:'Pāriet uz ziņām ↓',noResults:'Šajā kategorijā preču nav',tryOther:'Izvēlies citu sporta veidu.',addedShort:'Pievienots',priceWord:'Cena',aboutMission:'Mūsu mērķis ir padarīt sporta dzīvi Latvijā pieejamāku un vienotāku. Mazāk organizatorisko rūpju, vairāk prieka kustībā.',aboutMore:'Vairāk par projektu',about03Text:'Pārbaudīts inventārs ar drošu Stripe apmaksu un Omniva piegādi 1-2 darba dienās.',about04Text:'Saskaņo laiku un vietu sarakstē, pēc tam rezervē laukumu, kur tas pieejams.',newsTitle:'Pievienojies Latvijas sporta kopienai',newsText:'Reizi mēnesī: jaunas vietas kartē, turnīri un inventāra akcijas. Bez surogātpasta.',newsPlaceholder:'Tavs e-pasts',newsButton:'Pierakstīties',newsOk:'Paldies! Pieteikums saņemts.',newsMail:'Atvērām tavu e-pasta programmu. Nosūti ziņu, lai pabeigtu pierakstīšanos.',newsErr:'Neizdevās pierakstīties. Mēģini vēlreiz vai raksti uz info@sportabiedrs.lv.',chatbotFab:'Palīgs',railPrev:'Iepriekšējie sporta veidi',railNext:'Nākamie sporta veidi',venueStripMissing:'{name} kartē vēl nav pievienota.',checkoutUnavailable:'Tiešsaistes apmaksa šajā vidē vēl nav pieslēgta. Grozs ir saglabāts. Izvēlies kurjeru ar skaidras naudas apmaksu vai mēģini vēlāk.',authAccount:'Konts',authNewAccount:'Jauns konts',authIntroSignin:'Ienāc savā SportaBiedrs.lv kontā.',authIntroSignup:'Izveido savu SportaBiedrs.lv kontu un turpini lapā.'});
Object.assign(LANGS.en,{heroKicker:'Partners · Places · Gear',heroSearchCta:'Find a training partner',registryTitle:'National sports facility register',registryLabel:'registered sports facilities',registryNote:'Ministry data · 207 verified on map',stripOnMap:'On the map',sportsEyebrow:'Sports',sportsTitle:'Pick your sport',sportsIntro:'One tap filters training partners and venues on the map by sport.',venueSearchPlaceholder:'Search a venue, club or street…',shopIntro:'Verified gear from leading sports brands with fast Omniva delivery across Latvia.',trustShipTitle:'Omniva parcel lockers',trustShipText:'1-2 working days',trustReturnTitle:'14-day returns',trustReturnText:'No questions asked',trustOrigTitle:'Genuine products',trustOrigText:'From official distributors',trustPayTitle:'Secure payment',trustPayText:'Stripe · cards, Apple Pay, Google Pay',sortLabel:'Sort',allProducts:'All products',showAll:'Show all {n} items ({m} more)',showLess:'Show less',skipToMessages:'Skip to messages ↓',noResults:'No products in this category',tryOther:'Pick another sport.',addedShort:'Added',priceWord:'Price',aboutMission:'Our goal is to make sport in Latvia easier to reach and better connected. Less organising, more moving.',aboutMore:'More about the project',about03Text:'Verified gear with secure Stripe payment and Omniva delivery in 1-2 working days.',about04Text:'Agree on a time and place in messages, then book the court where booking is available.',newsTitle:'Join the Latvian sports community',newsText:'Once a month: new venues on the map, tournaments and gear deals. No spam.',newsPlaceholder:'Your email',newsButton:'Subscribe',newsOk:'Thanks! You are on the list.',newsMail:'We opened your email app. Send the message to finish subscribing.',newsErr:'Could not subscribe. Try again or write to info@sportabiedrs.lv.',chatbotFab:'Help',railPrev:'Previous sports',railNext:'Next sports',venueStripMissing:'{name} is not on the map yet.',checkoutUnavailable:'Online payment is not connected on this deployment yet. Your cart is saved. Choose courier with cash payment or try again later.',authAccount:'Account',authNewAccount:'New account',authIntroSignin:'Sign in to your SportaBiedrs.lv account.',authIntroSignup:'Create your SportaBiedrs.lv account and continue where you left off.'});
Object.assign(LANGS.ru,{heroKicker:'Партнёры · Места · Экипировка',heroSearchCta:'Найти партнёра',registryTitle:'Государственный реестр спортивных баз',registryLabel:'зарегистрированных спортивных баз',registryNote:'Данные МОН · 207 проверены на карте',stripOnMap:'На карте',sportsEyebrow:'Виды спорта',sportsTitle:'Выбери свой спорт',sportsIntro:'Одно нажатие фильтрует партнёров и места на карте по виду спорта.',venueSearchPlaceholder:'Найти место, клуб или улицу…',shopIntro:'Проверенная экипировка от ведущих брендов с быстрой доставкой Omniva по всей Латвии.',trustShipTitle:'Постаматы Omniva',trustShipText:'1-2 рабочих дня',trustReturnTitle:'Возврат 14 дней',trustReturnText:'Без лишних вопросов',trustOrigTitle:'Оригинальные товары',trustOrigText:'От официальных дистрибьюторов',trustPayTitle:'Безопасная оплата',trustPayText:'Stripe · карты, Apple Pay, Google Pay',sortLabel:'Сортировка',allProducts:'Все товары',showAll:'Показать все {n} ({m} ещё)',showLess:'Показать меньше',skipToMessages:'К сообщениям ↓',noResults:'В этой категории нет товаров',tryOther:'Выберите другой вид спорта.',addedShort:'Добавлено',priceWord:'Цена',aboutMission:'Мы хотим сделать спорт в Латвии доступнее и объединить сообщество. Меньше организации, больше движения.',aboutMore:'Подробнее о проекте',about03Text:'Проверенная экипировка с безопасной оплатой Stripe и доставкой Omniva за 1-2 рабочих дня.',about04Text:'Договоритесь о времени и месте в сообщениях, затем забронируйте корт, где это доступно.',newsTitle:'Присоединяйтесь к спортивному сообществу Латвии',newsText:'Раз в месяц: новые места на карте, турниры и скидки на экипировку. Без спама.',newsPlaceholder:'Ваш e-mail',newsButton:'Подписаться',newsOk:'Спасибо! Заявка получена.',newsMail:'Мы открыли почтовую программу. Отправьте письмо, чтобы завершить подписку.',newsErr:'Не удалось подписаться. Попробуйте ещё раз или напишите на info@sportabiedrs.lv.',chatbotFab:'Помощь',railPrev:'Предыдущие виды спорта',railNext:'Следующие виды спорта',venueStripMissing:'{name} пока нет на карте.',checkoutUnavailable:'Онлайн-оплата в этой среде пока не подключена. Корзина сохранена. Выберите курьера с оплатой наличными или попробуйте позже.',authAccount:'Аккаунт',authNewAccount:'Новый аккаунт',authIntroSignin:'Войдите в свой аккаунт SportaBiedrs.lv.',authIntroSignup:'Создайте аккаунт SportaBiedrs.lv и продолжайте на странице.'});
function t(key){return (LANGS[currentLang]&&LANGS[currentLang][key])||LANGS.lv[key]||key}
/* Every city that has a venue on the map, plus the partner-finder cities. Rīga first. */
function getCityList(){
  const base=['Rīga','Mārupe','Jūrmala','Liepāja','Daugavpils','Jelgava','Sigulda','Ventspils','Rēzekne','Cēsis','Valmiera','Ogre','Jēkabpils','Tukums','Kuldīga','Talsi','Ādaži','Salaspils','Baloži','Baldone','Ikšķile','Iecava','Lēdurga','Limbaži','Līgatne'];
  const all=new Set(base.concat(VENUES.map(v=>v.city).filter(Boolean)));
  all.delete('Rīga');
  return ['Rīga',...[...all].sort((a,b)=>a.localeCompare(b,'lv'))];
}
Object.assign(LANGS.lv,{navSolutions:'Risinājumi klubiem',navCases:'Pieredze',footerResources:'Sporta resursi',footerShip:'Omniva 1-2 d.',footerReturns:'14 d. atgriešana',navMainAria:'Galvenā navigācija',navMobileAria:'Mobilā navigācija',heroKickerPlace:'Latvija',matches:'Spēles',matchesEyebrow:'Atvērtās spēles',matchesTitle:'Pievienojies spēlei vai meklē dalībniekus',matchesIntro:'Trūkst viens vai divi spēlētāji? Pievienojies organizētiem mačiem ar dalītu laukuma īri vai izveido savu spēli.',allMatches:'Visas spēles',btnCreateMatch:'+ Pieteikt jaunu spēli',btnPublishMatch:'Publicēt spēli →',createMatchEyebrow:'Organizēt spēli',createMatchTitle:'Pieteikt jaunu spēli',createMatchIntro:'Izveido maču, norādi laukumu un spēlētāju skaitu. Citi lietotāji varēs uzreiz pieteikties vai rakstīt tev čatā.',venueNameLabel:'Laukuma nosaukums',venueAddressLabel:'Adrese',timeTextLabel:'Laiks / Datums',levelLabel:'Līmenis',pricePerPlayerLabel:'Maksa par spēlētāju',maxPlayersLabel:'Kopējais vietu skaits',hostNameLabel:'Tavs vārds (Organizators)',noteLabel:'Piezīme / Apraksts',needPlayersSingular:'Trūkst {n} spēlētājs',needPlayersPlural:'Trūkst {n} spēlētāji',matchFull:'Spēle nokomplektēta',youJoined:'Tu piedalies',splitFee:'Dalītā laukuma īre',rosterPlayers:'Pieteikušies',btnJoinMatch:'Pieteikties spēlei',btnLeaveMatch:'✕ Atteikt dalību',btnChatHost:'Rakstīt'});
Object.assign(LANGS.en,{navSolutions:'For clubs',navCases:'Case studies',footerResources:'Sports resources',footerShip:'Omniva 1-2 days',footerReturns:'14-day returns',navMainAria:'Main navigation',navMobileAria:'Mobile navigation',heroKickerPlace:'Latvia',matches:'Matches',matchesEyebrow:'Open Matches',matchesTitle:'Join an open match or find players',matchesIntro:'Missing a player or two? Join open games with shared court rent or post your own match.',allMatches:'All matches',btnCreateMatch:'+ Post a new match',btnPublishMatch:'Publish match →',createMatchEyebrow:'Host a game',createMatchTitle:'Post a new match',createMatchIntro:'Create an open match, specify venue and spots. Other players can join instantly or message you.',venueNameLabel:'Venue name',venueAddressLabel:'Address',timeTextLabel:'Time / Date',levelLabel:'Level',pricePerPlayerLabel:'Fee per player',maxPlayersLabel:'Total players',hostNameLabel:'Your name (Host)',noteLabel:'Note / Description',needPlayersSingular:'{n} spot left',needPlayersPlural:'{n} spots left',matchFull:'Match is full',youJoined:'You are in',splitFee:'Shared court rent',rosterPlayers:'Players',btnJoinMatch:'Join match',btnLeaveMatch:'✕ Leave match',btnChatHost:'Message'});
Object.assign(LANGS.ru,{navSolutions:'Решения для клубов',navCases:'Истории клубов',footerResources:'Спортивные ресурсы',footerShip:'Omniva 1-2 дня',footerReturns:'Возврат 14 дней',navMainAria:'Основная навигация',navMobileAria:'Мобильная навигация',heroKickerPlace:'Латвия',matches:'Игры',matchesEyebrow:'Открытые игры',matchesTitle:'Присоединяйся к игре или найди игроков',matchesIntro:'Не хватает одного или двух игроков? Присоединяйся к играм с совместной арендой корта или создай свою.',allMatches:'Все игры',btnCreateMatch:'+ Создать игру',btnPublishMatch:'Опубликовать игру →',createMatchEyebrow:'Организовать игру',createMatchTitle:'Создать новую игру',createMatchIntro:'Создайте открытую игру, укажите корт и количество игроков. Другие смогут сразу записаться или написать в чат.',venueNameLabel:'Название корта',venueAddressLabel:'Адрес',timeTextLabel:'Время / Дата',levelLabel:'Уровень',pricePerPlayerLabel:'Оплата за игрока',maxPlayersLabel:'Всего мест',hostNameLabel:'Ваше имя (Организатор)',noteLabel:'Примечание / Описание',needPlayersSingular:'Свободно {n} место',needPlayersPlural:'Свободно {n} мест',matchFull:'Игра укомплектована',youJoined:'Вы участвуете',splitFee:'Разделённая аренда корта',rosterPlayers:'Участники',btnJoinMatch:'Записаться на игру',btnLeaveMatch:'✕ Отказаться от участия',btnChatHost:'Написать'});
function heroSloganMarkup(text){
 const raw=(text||'').trim();
 if(!raw) return '';
 if(raw.toUpperCase().includes('VIENATNĒ') && raw.toUpperCase().includes('VAKARDIENA')){
  return '<span class="hero-line">VIENATNĒ</span><span class="hero-line"><em>TRENĒTIES IR</em></span><span class="hero-line">VAKARDIENA</span>';
 }
 if(raw.toUpperCase().includes('ОДИНОЧКУ')){
   return '<span class="hero-line">ТРЕНИРОВКИ</span><span class="hero-line"><em>В ОДИНОЧКУ</em></span><span class="hero-line">В ПРОШЛОМ</span>';
 }
 if(raw.toUpperCase().includes('TRAINING ALONE')){
  return '<span class="hero-line">TRAINING ALONE</span><span class="hero-line"><em>IS</em></span><span class="hero-line">YESTERDAY</span>';
 }
 const words=raw.split(/\s+/).filter(Boolean);
 if(!words.length)return '';
 if(words.length===1)return `<span class="hero-line">${words[0]}</span>`;
 const line1=words[0];
 const line2=words.slice(1).join(' ');
 return `<span class="hero-line">${line1}</span><span class="hero-line">${line2}</span>`;
}
function translateStatic(){
 const map={
  '.hero-actions .btn-solid':'heroA','.hero-actions .btn-outline':'heroB',
  '.hero-stats > div:nth-child(1) span':'heroStatVenues','.hero-stats > div:nth-child(2) span':'heroStatSports','.hero-stats > div:nth-child(3) span':'heroStatCities',
  '#finder .eyebrow':'finderEyebrow','#finder h2':'finderTitle','#finder .section-intro':'finderIntro','#finder .finder-side-note p':'finderNote','#finder .demo-note':'demoNote',
  '#finder .filter-row .field:nth-child(1) span':'sport','#finder .filter-row .field:nth-child(2) span':'city','#finder .filter-row .field:nth-child(3) span':'level','#finder .filter-submit':'search',
  '#map .eyebrow':'mapEyebrow','#map h2':'mapTitle','#map .section-intro':'mapIntro','#map .section-head > p:last-child':'mapNote','#map .map-controls .field:nth-child(1) span':'sport','#map .map-controls .field:nth-child(2) span':'city','#map .map-controls .btn-outline':'clear','#mapResetBtn':'level12','#map .venue-browser-head strong':'venues','#map .section-note':'mapNoteBottom',
  '#shop .eyebrow':'shopEyebrow','#shop h2':'shopTitle','#shop .section-head > p':'shopNote','#shop .shop-controls .field:nth-child(1) span':'sport','#shop .shop-controls .field:nth-child(2) span':'sort',
  '#messages .eyebrow':'messagesEyebrow','#messages h2':'messagesTitle','#messages .section-intro':'messagesIntro','#messages .section-head > p:last-child':'messagesNote','.chat-list-head strong':'contacts','.chat-list-head span':'active','.chat-quick button:nth-child(1)':'restart','.chat-quick button:nth-child(2)':'when','.chat-quick button:nth-child(3)':'where','.chat-quick button:nth-child(4)':'openMap','#chatInput':'typeMessage','#chatForm button':'send',
  '#about .eyebrow':'aboutEyebrow','#about h2':'aboutTitle','#about .section-intro':'aboutIntro','#about .section-head > p:last-child':'aboutNote',
  '#about article:nth-child(1) h3':'about01Title','#about article:nth-child(1) p':'about01Text','#about article:nth-child(2) h3':'about02Title','#about article:nth-child(2) p':'about02Text','#about article:nth-child(3) h3':'about03Title','#about article:nth-child(3) p':'about03Text','#about article:nth-child(4) h3':'about04Title','#about article:nth-child(4) p':'about04Text',
  '.site-footer > .wrap:first-child > div:first-child p':'footerTagline','.site-footer > .wrap:first-child > div:nth-child(2) strong':'platform','.site-footer > .wrap:first-child > div:nth-child(3) strong':'info','.site-footer > .wrap:first-child > div:nth-child(4) strong':'legal',
  '.site-footer > .wrap:first-child > div:nth-child(2) a:nth-of-type(1)':'finder','.site-footer > .wrap:first-child > div:nth-child(2) a:nth-of-type(2)':'map','.site-footer > .wrap:first-child > div:nth-child(2) a:nth-of-type(3)':'shop','.site-footer > .wrap:first-child > div:nth-child(2) a:nth-of-type(4)':'messages',
  '.site-footer > .wrap:first-child > div:nth-child(3) a:nth-of-type(1)':'about','.site-footer > .wrap:first-child > div:nth-child(3) a:nth-of-type(2)':'contactsLink','.site-footer > .wrap:first-child > div:nth-child(3) a:nth-of-type(3)':'footerPlaces','.site-footer > .wrap:first-child > div:nth-child(3) a:nth-of-type(4)':'accessibility',
  '.site-footer > .wrap:first-child > div:nth-child(4) a:nth-of-type(1)':'terms','.site-footer > .wrap:first-child > div:nth-child(4) a:nth-of-type(2)':'delivery','.site-footer > .wrap:first-child > div:nth-child(4) a:nth-of-type(3)':'withdrawal','.site-footer > .wrap:first-child > div:nth-child(4) a:nth-of-type(4)':'privacy','.site-footer > .wrap:first-child > div:nth-child(4) a:nth-of-type(5)':'cookies',
  '#cookieSettingsTitle':'cookieSettings','#cookieSettingsModal .eyebrow':'privacy','#cookieSettingsModal .check-row:nth-of-type(1) span':'necessary','#cookieSettingsModal .check-row:nth-of-type(2) span':'analytics','#cookieSettingsModal .btn':'saveChoices','#cookieBanner p':'cookieInfo','#cookieBanner a':'cookieMore','#cookieBanner button':'continue',
  '#cartDrawer .drawer-head .eyebrow':'your','#cartDrawer .drawer-head h3':'cart','#cartDrawer .cart-total span':'total','#cartDrawer .drawer-foot .btn':'checkout',
  '.chatbot-head b':'chatbotTitle','.chatbot-head span':'chatbotSubtitle','#chatbotInput':'chatbotPlaceholder',
  '#bookingModal .booking-hero-overlay span':'bookingVenueLabel','#checkoutStep1 .delivery-options label:nth-child(1) b':'omniva','#checkoutStep1 .delivery-options label:nth-child(1) small':'parcelHint','#checkoutStep1 .delivery-options label:nth-child(2) b':'courier','#checkoutStep1 .delivery-options label:nth-child(2) small':'courierHint',
  '#checkoutModal .checkout-head .eyebrow':'checkoutEyebrow','#checkoutTitle':'checkoutTitle','#checkoutModal .checkout-subtitle':'checkoutSubtitle','#checkoutStep1 .checkout-card:nth-of-type(1) h4':'checkoutContact','#checkoutStep1 .checkout-card:nth-of-type(1) label:nth-child(1) span':'name','#checkoutStep1 .checkout-card:nth-of-type(1) label:nth-child(2) span':'email','#checkoutStep1 .checkout-card:nth-of-type(2) h4':'delivery','#coLockerField .field:nth-child(1) span':'city','#coLockerField .field:nth-child(2) span':'locker','#coLockerSearch + .external-link':'footerPlaces','#coCourierField .field span':'address','#checkoutStep1 .payment-card h4':'payment','#checkoutStep1 .payment-card .payment-lock':'safe','#checkoutStep1 .checkout-primary':'reviewOrder','#checkoutStep2 .eyebrow':'review','#checkoutStep2 h3':'ready','#checkoutStep2 .checkout-primary':'openStripe','#checkoutStep2 .checkout-back':'changeData','#checkoutStep3 h3':'orderCreated','#checkoutStep3 button':'close',
  '#bookingModal .booking-grid .field:nth-child(1) span':'bookingDate','#bookingModal .booking-grid .field:nth-child(2) span':'time','#bookingModal .booking-grid .field:nth-child(3) span':'players','#bookingModal .booking-modal > .btn-block':'continueBooking',
  '#legalModal #legalEyebrow':'legalInfo'
 };
 Object.entries(map).forEach(([sel,key])=>document.querySelectorAll(sel).forEach(e=>{if(e.tagName==='INPUT')e.placeholder=t(key);else e.textContent=t(key)}));
 const priceText=document.querySelector('#map .field.grow > span > span');
 if(priceText) priceText.textContent=t('priceLabel');
 const deliveryAddress=document.getElementById('coCourierAddress');if(deliveryAddress)deliveryAddress.placeholder=t('deliveryAddressPlaceholder');
 const lockerSearch=document.getElementById('coLockerSearch');if(lockerSearch)lockerSearch.placeholder=t('lockerSearchPlaceholder');
 const cookieBanner=document.getElementById('cookieBanner');if(cookieBanner)cookieBanner.setAttribute('aria-label',t('cookiesAria'));
 const pay=document.getElementById('coPay');if(pay){const s1=pay.querySelector('option[value="stripe"]'),s2=pay.querySelector('option[value="cash"]');if(s1)s1.textContent=t('payStripe');if(s2)s2.textContent=t('payCash');}
 const a=document.querySelector('.announcement-inner');if(a){const spans=a.querySelectorAll('span');if(spans[0])spans[0].textContent=t('announcement');if(spans[1])spans[1].textContent=t('stripeTest')}
 const skip=document.querySelector('.skip-link');if(skip)skip.textContent=t('skip');
 const CITIES_LIST = getCityList();
  const SPORTS_KEYS = Object.keys(SPORT_LABELS.lv);

  const optMap={
   '#hSport':[['',t('allSports')],...SPORTS_KEYS.map(k=>[k,sportLabel(k)])],
   '#hCity':[['',t('allCities')],...CITIES_LIST.map(x=>[x,x])],
   '#fSport':[['',t('allSports')],...SPORTS_KEYS.map(k=>[SPORT_LABELS.lv[k],sportLabel(k)])],
   '#fCity':[['',t('allCities')],...CITIES_LIST.map(x=>[x,x])],
   '#fLevel':[['',t('anyLevel')],['Iesācējs',currentLang==='en'?'Beginner':currentLang==='ru'?'Начинающий':'Iesācējs'],['Vidējs',currentLang==='en'?'Intermediate':currentLang==='ru'?'Средний':'Vidējs'],['Pieredzējis',currentLang==='en'?'Experienced':currentLang==='ru'?'Опытный':'Pieredzējis'],['Profesionālis',currentLang==='en'?'Professional':currentLang==='ru'?'Профессионал':'Profesionālis']],
   '#mSport':[['',t('all')],...SPORTS_KEYS.map(k=>[k,sportLabel(k)])],
   '#mCity':[['',t('allCities2')],...CITIES_LIST.map(x=>[x,x])],
   '#pSort':[['default',t('recommended')],['price_asc',t('priceLow')],['price_desc',t('priceHigh')]]
  };
 Object.entries(optMap).forEach(([sel,vals])=>{const el=document.querySelector(sel);if(!el)return;const old=el.value;el.innerHTML='';vals.forEach(([value,text])=>{const o=document.createElement('option');o.value=value;o.textContent=text;el.appendChild(o)});if([...el.options].some(o=>o.value===old))el.value=old;});
 document.querySelectorAll('[data-i18n]').forEach(e=>{const key=e.dataset.i18n;if(key&&LANGS[currentLang]?.[key]) e.textContent=LANGS[currentLang][key]});
 document.querySelectorAll('[data-i18n-placeholder]').forEach(e=>{const key=e.dataset.i18nPlaceholder;if(key&&LANGS[currentLang]?.[key]) e.placeholder=LANGS[currentLang][key]});
 document.querySelectorAll('[data-i18n-aria]').forEach(e=>{const key=e.dataset.i18nAria;if(key&&LANGS[currentLang]?.[key]) e.setAttribute('aria-label',LANGS[currentLang][key])});
 document.documentElement.lang=currentLang;
  if(typeof window.__rebuildHeroMenus==='function') window.__rebuildHeroMenus();
  renderSportRail();
  renderShopPills();
}

function initHeaderScroll(){
 const header=document.querySelector('.site-header');
 const hero=document.querySelector('.hero');
 if(!header||!hero)return;
 const sync=()=>{
  const heroBottom=hero.getBoundingClientRect().bottom;
  const headerH=header.offsetHeight||72;
  const onContent=heroBottom <= headerH + 18;
  header.classList.toggle('is-scrolled',onContent);
  header.dataset.headerState=onContent?'content':'hero';
 };
 sync();
 if('IntersectionObserver' in window){
  const io=new IntersectionObserver(entries=>{
   const visible=entries[0]?.isIntersecting;
   if(visible){header.classList.remove('is-scrolled');header.dataset.headerState='hero';}
   else {header.classList.add('is-scrolled');header.dataset.headerState='content';}
  },{threshold:0.01,rootMargin:`-${(header.offsetHeight||72)}px 0px 0px 0px`});
  io.observe(hero);
 }
 window.addEventListener('resize',sync,{passive:true});
}

function initLang(){
 const switcher=document.getElementById('languageSwitcher'),current=document.getElementById('langCurrent'),menu=document.getElementById('langMenu'),label=document.getElementById('langCurrentLabel');
 if(!switcher||!current||!menu||!label)return;
 const close=()=>{menu.hidden=true;current.setAttribute('aria-expanded','false');switcher.classList.remove('open')};
 current.addEventListener('click',e=>{e.stopPropagation();menu.hidden=!menu.hidden;const open=!menu.hidden;current.setAttribute('aria-expanded',String(open));switcher.classList.toggle('open',open)});
 menu.querySelectorAll('.lang-btn').forEach(b=>b.addEventListener('click',()=>{applyLang(b.dataset.lang);close()}));
 document.addEventListener('click',e=>{if(!switcher.contains(e.target))close()});
 document.addEventListener('keydown',e=>{if(e.key==='Escape')close()});
 applyLang(currentLang);
}
function applyLang(lang){
 if(!LANGS[lang])lang='lv';currentLang=lang;safeSet('sb_lang',lang);document.documentElement.lang=lang;if(LANGS[lang].pageTitle)document.title=LANGS[lang].pageTitle;const meta=document.querySelector('meta[name=description]');if(meta&&LANGS[lang].pageDescription)meta.content=LANGS[lang].pageDescription;
 const p=LANGS[lang];const m={'finder':p.finder,'matches':p.matches,'map':p.map,'shop':p.shop,'messages':p.messages,'about':p.about,'signin':p.signin,'signup':p.signup,'hero-eyebrow':p.heroEyebrow,'hero-desc':p.heroDesc};
 Object.entries(m).forEach(([k,v])=>document.querySelectorAll(`[data-langtext="${k}"]`).forEach(e=>e.textContent=v));
 const label=document.getElementById('langCurrentLabel');if(label)label.textContent=lang.toUpperCase();document.querySelectorAll('.lang-btn').forEach(b=>b.classList.toggle('active',b.dataset.lang===lang));
 const hero=document.querySelector('.hero-slogan');if(hero)hero.innerHTML=heroSloganMarkup(t('heroSlogan'));
 translateStatic();
 renderHeroStats();renderShop();findPartners();renderMatches();renderCart();renderCartBadge();renderMap();initDM();const legal=document.getElementById('legalModal');if(legal?.classList.contains('open')&&legal.dataset.key)openLegal(legal.dataset.key);if(window.__bookingVenue&&document.getElementById('bookingModal')?.classList.contains('open'))openBooking(window.__bookingVenue);
}


const PARTNER_AVATARS = {
  karlis: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80',
  elina: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80',
  roberts: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80',
  anna: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&h=150&q=80',
  mareks: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=150&h=150&q=80',
  martins: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=150&h=150&q=80',
  arturs: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&h=150&q=80',
  laura: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80',
  kristine: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&h=150&q=80',
  edgars: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&h=150&q=80',
  dace: 'https://images.unsplash.com/photo-1548142813-c348350df52b?auto=format&fit=crop&w=150&h=150&q=80',
  zane: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=150&h=150&q=80',
  ieva: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&h=150&q=80',
  madara: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80'
};
function getPartnerAvatar(name) {
  const k = norm(String(name).split(' ')[0] || '');
  return PARTNER_AVATARS[k] || null;
}

const PARTNER_PROFILE_TEXT={
  lv:{
    karlis:{name:'Kārlis Ozols',sport:'Teniss',city:'Rīga',level:'Vidējs',bio:{desc:'Spēlēju 2 reizes nedēļā ENRI vai Mežaparkā. Meklēju sparīgu partneri stabilām izspēlēm.',schedule:'Otrdienas un ceturtdienas vakaros',level:'Vidējs'}},
    elina:{name:'Elīna Kalniņa',sport:'Padel',city:'Mārupe',level:'Iesācējs',bio:{desc:'Apgūstu padel pamatus Mārupes kortos. Meklēju pacietīgu spēles partneri izspēļu treniņam.',schedule:'Sestdienu rīti vai darba dienu vakari',level:'Iesācējs'}},
    roberts:{name:'Roberts Jansons',sport:'Basketbols',city:'Jūrmala',level:'Pieredzējis',bio:{desc:'3x3 un 5x5 basketbols brīvā dabā vai zālē. Spēle ar azartu un labu tempu.',schedule:'Otrdienas un svētdienas ap 19:00',level:'Pieredzējis'}},
    anna:{name:'Anna Liepa',sport:'Skriešana',city:'Rīga',level:'Iesācējs',bio:{desc:'Mierīgi 5 līdz 7 km skrējieni pa Pārdaugavas parkiem. Temps ap 6:00 min/km.',schedule:'Pirmdienas, trešdienas 07:30',level:'Iesācējs'}},
    mareks:{name:'Mareks Liepiņš',sport:'Futbols',city:'Liepāja',level:'Vidējs',bio:{desc:'Spēlējam telpu futbolu 5x5 LOC Olimpiskajā centrā. Laipni aicināti pievienoties.',schedule:'Ceturtdienu vakari no 20:00',level:'Vidējs'}},
    martins:{name:'Mārtiņš Gailis',sport:'Disku golfs',city:'Cēsis',level:'Vidējs',bio:{desc:'Regulāri 18 grozu apļi Cēsu un Priekuļu trasēs. Var aizdot rezerves diskus.',schedule:'Svētdienu rīti ap 11:00',level:'Vidējs'}},
    arturs:{name:'Artūrs Vītols',sport:'Peldēšana',city:'Rīga',level:'Vidējs',bio:{desc:'Peldēšanas treniņi Ķīpsalas baseinā. 1500-2000m kraulā tehnikas uzlabošanai.',schedule:'Darba dienu rīti 07:00-08:30',level:'Vidējs'}},
    laura:{name:'Laura Bērziņa',sport:'Fitnesa zāle',city:'Rīga',level:'Pieredzējis',bio:{desc:'Spēka treniņi un funkcionālais fitness MyFitness zālēs. Var trenēties pārī.',schedule:'Pirmdienas un trešdienas 18:00',level:'Pieredzējis'}},
    kristine:{name:'Kristīne Zariņa',sport:'Teniss',city:'Jūrmala',level:'Pieredzējis',bio:{desc:'Tenisa spēles Lielupes kortos. Stabils topspins un ātrs spēles temps.',schedule:'Trešdienas un sestdienas 17:30',level:'Pieredzējis'}},
    edgars:{name:'Edgars Eglītis',sport:'Hokejs',city:'Jelgava',level:'Vidējs',bio:{desc:'Amatieru hokejs Jelgavas ledus hallē. Vācam spēlētājus draudzības mačiem.',schedule:'Trešdienu vakari 21:00',level:'Vidējs'}},
    dace:{name:'Dace Kļaviņa',sport:'Velosports',city:'Sigulda',level:'Pieredzējis',bio:{desc:'Šosejas un grants braucieni pa Gaujas senlejas ceļiem 40-70 km distancēs.',schedule:'Sestdienas no 10:00',level:'Pieredzējis'}},
    gustavs:{name:'Gustavs Vanags',sport:'Bokss / MMA',city:'Rīga',level:'Pieredzējis',bio:{desc:'Tehniskais sparings uz ķepām un aizsardzības atstrāde. Drošība pirmajā vietā.',schedule:'Pirmdienas un piektdienas 19:00',level:'Pieredzējis'}},
    zane:{name:'Zane Briede',sport:'Padel',city:'Rīga',level:'Vidējs',bio:{desc:'Regulāras padel spēles Rīgas klubos. Meklēju stabilu pārinieci vai pārinieku mix turnīriem.',schedule:'Darba dienu vakari pēc 18:30',level:'Vidējs'}},
    pauls:{name:'Pauls Rozenbergs',sport:'Golfs',city:'Mārupe',level:'Vidējs',bio:{desc:'Trenējos Mārupes un Ozo golfa klubos. Labprāt izietu 9 vai 18 bedrītes kopā.',schedule:'Piektdienu pēcpusdienas',level:'Vidējs'}},
    viktorija:{name:'Viktorija Siliņa',sport:'Klinšu kāpšana',city:'Rīga',level:'Iesācējs',bio:{desc:'Boulderinga nodarbības Gandrs un Virsotne zālēs. Meklēju kompanjonu drošināšanai.',schedule:'Otrdienas un ceturtdienas 18:30',level:'Iesācējs'}},
    andris:{name:'Andris Ozoliņš',sport:'Basketbols',city:'Ogre',level:'Vidējs',bio:{desc:'Ielu basketbols Ogres laukumos un zālē. Spēlējam 3x3 un 4x4 draudzīgā garā.',schedule:'Svētdienās 18:00',level:'Vidējs'}},
    ieva:{name:'Ieva Priede',sport:'Peldēšana',city:'Valmiera',level:'Pieredzējis',bio:{desc:'Valmieras Peldbaseinā trenējos distanču peldēšanai. Interesē koptreniņi un sparings.',schedule:'Otrdienās un ceturtdienās 07:15',level:'Pieredzējis'}},
    kaspars:{name:'Kaspars Dombrovskis',sport:'Futbols',city:'Valmiera',level:'Pieredzējis',bio:{desc:'Futbols Jāņa Daliņa stadionā. Labprāt pievienotos 7x7 vai 11x11 komandas spēlei.',schedule:'Trešdienās un svētdienās',level:'Pieredzējis'}},
    santa:{name:'Santa Lāce',sport:'Skriešana',city:'Sigulda',level:'Vidējs',bio:{desc:'Taku skriešana pa Siguldas takām un serpentīna kalnu. Lielisks kardio dabā.',schedule:'Svētdienu rītos 09:30',level:'Vidējs'}},
    rihards:{name:'Rihards Melnis',sport:'Hokejs',city:'Ventspils',level:'Profesionālis',bio:{desc:'Trenējos Ventspils ledus hallē. Labprāt piedalos augsta līmeņa ledus treniņos.',schedule:'Darba dienu vakari',level:'Profesionālis'}},
    madara:{name:'Madara Vilka',sport:'Fitnesa zāle',city:'Liepāja',level:'Iesācējs',bio:{desc:'Uzsāku regulārus fitnesa treniņus Liepājas Olimpiskajā centrā. Meklēju treniņu partneri.',schedule:'Darba dienu rīti 08:30',level:'Iesācējs'}},
    toms:{name:'Toms Āboliņš',sport:'Velosports',city:'Cēsis',level:'Vidējs',bio:{desc:'MTB un grants velobraucieni pa Gaujas Nacionālā parka maršrutiem.',schedule:'Sestdienu rīti 10:00',level:'Vidējs'}},
    alise:{name:'Alise Kalve',sport:'Volejbols',city:'Jūrmala',level:'Vidējs',bio:{desc:'Pludmales volejbols Majoru un Dzintaru smilšu laukumos. 2x2 spēles ar pozitīvu azartu.',schedule:'Siltos vakaros no 18:00',level:'Vidējs'}},
    emils:{name:'Emīls Zvirbulis',sport:'Teniss',city:'Liepāja',level:'Iesācējs',bio:{desc:'Liepājas tenisa hallē trenēju serves un sitienus. Priecāšos par spēles biedru.',schedule:'Pirmdienās un ceturtdienās 19:00',level:'Iesācējs'}},
    katrina:{name:'Katrīna Balode',sport:'Padel',city:'Jūrmala',level:'Pieredzējis',bio:{desc:'Aktīva padel spēlētāja Jūrmalas un Rīgas kortos. Meklēju partnerus dinamiskai spēlei.',schedule:'Vakaros pēc 19:00',level:'Pieredzējis'}},
    matiss:{name:'Matīss Skrastiņš',sport:'Disku golfs',city:'Talsi',level:'Iesācējs',bio:{desc:'Spēlēju disku golfu Talsu un Tukuma parkos. Labprāt izietu trasi kopā.',schedule:'Brīvdienu pēcpusdienas',level:'Iesācējs'}},
    paula:{name:'Paula Graudiņa',sport:'Basketbols',city:'Jelgava',level:'Iesācējs',bio:{desc:'Metienu un dribla treniņi Jelgavas āra laukumos. Meklēju partneri koptreniņam.',schedule:'Otrdienās un ceturtdienās 18:00',level:'Iesācējs'}},
    valters:{name:'Valters Cīrulis',sport:'Futbols',city:'Daugavpils',level:'Vidējs',bio:{desc:'Meklēju futbola domubiedrus 6x6 spēlēm Daugavpils stadionos.',schedule:'Otrdienu un piektdienu vakari',level:'Vidējs'}},
    marta:{name:'Marta Rubene',sport:'Bokss / MMA',city:'Liepāja',level:'Iesācējs',bio:{desc:'Boksa pamatu apguve un fitnesa bokss Liepājā. Labs kardio un disciplīna.',schedule:'Trešdienās un piektdienās 18:30',level:'Iesācējs'}},
    davis:{name:'Dāvis Mežs',sport:'Ekstrēmie sporti',city:'Rīga',level:'Pieredzējis',bio:{desc:'Skeitparks un pumptrack braucieni Grīziņkalnā un Barona ielā.',schedule:'Pēcpusdienas un brīvdienas',level:'Pieredzējis'}},
    signe:{name:'Signe Riekstiņa',sport:'Peldēšana',city:'Liepāja',level:'Vidējs',bio:{desc:'Peldu LOC baseinā 2-3 reizes nedēļā. Labprāt trenētos ar kādu kopā.',schedule:'Rīti no 07:30',level:'Vidējs'}},
    reinis:{name:'Reinis Krauklis',sport:'Hokejs',city:'Tukums',level:'Pieredzējis',bio:{desc:'Tukuma ledus hallē spēlējam veterānu un amatieru hokeju. Gaidīti jauni vārtsargi un uzbrucēji.',schedule:'Svētdienās 20:00',level:'Pieredzējis'}},
    baiba:{name:'Baiba Strazdiņa',sport:'Skriešana',city:'Ogre',level:'Iesācējs',bio:{desc:'Skrējieni pa Ogres Zilajiem kalniem. Lēns, mierīgs veselības skrējiens.',schedule:'Sestdienu rīti 09:00',level:'Iesācējs'}},
    kristaps:{name:'Kristaps Lejiņš',sport:'Fitnesa zāle',city:'Jelgava',level:'Pieredzējis',bio:{desc:'Spēka trīscīņa un vispārējā fiziskā sagatavotība Jelgavas sporta klubā.',schedule:'Pirmdienas, trešdienas, piektdienas 18:30',level:'Pieredzējis'}},
    elza:{name:'Elza Upīte',sport:'Teniss',city:'Valmiera',level:'Vidējs',bio:{desc:'Tenisa spēles Valmieras tenisa kortos. Labprāt atrastu regulāru partneri 1x nedēļā.',schedule:'Ceturtdienu vakari',level:'Vidējs'}},
    janis:{name:'Jānis Krūmiņš',sport:'Volejbols',city:'Rīga',level:'Iesācējs',bio:{desc:'Klasiskais volejbols un pludmales spēles Lucavsalā. Meklēju pozitīvu komandu.',schedule:'Brīvdienu pēcpusdienas',level:'Iesācējs'}},
    roberts_golf:{"name":"Roberts Gailis","sport":"Golfs","city":"Jūrmala","level":"Pieredzējis","bio":{"desc":"Regulāras golfa spēles Jūrmalas un Viesturu laukumos. HCP 14.","schedule":"Sestdienās no rīta","level":"Pieredzējis"}},
    zane_golf:{"name":"Zane Siliņa","sport":"Golfs","city":"Mārupe","level":"Iesācējs","bio":{"desc":"Nesen pabeidzu Zaļās kartes kursus. Meklēju mierīgu biedru kopīgai 9 bedrīšu spēlei.","schedule":"Svētdienu pēcpusdienās","level":"Iesācējs"}},
    kaspars_climbing:{"name":"Kaspars Briedis","sport":"Klinšu kāpšana","city":"Rīga","level":"Vidējs","bio":{"desc":"Kāpšana ar augšējo un apakšējo drošināšanu Falkors un Gandrs zālēs.","schedule":"Otrdienās un ceturtdienās 19:00","level":"Vidējs"}},
    elina_climbing:{"name":"Elīna Liepa","sport":"Klinšu kāpšana","city":"Cēsis","level":"Pieredzējis","bio":{"desc":"Bouldering un dabīgo klinšu maršruti Vidzemē un Igaunijā. Meklēju drošināšanas partneri.","schedule":"Nedēļas nogalēs","level":"Pieredzējis"}},
    toms_extreme:{"name":"Toms Rozentāls","sport":"Ekstrēmie sporti","city":"Sigulda","level":"Vidējs","bio":{"desc":"BMX un pumptrack braukšana Siguldas trasē un Mežaparkā.","schedule":"Darbdienu vakaros no 18:30","level":"Vidējs"}},
    ance_extreme:{"name":"Ance Vilka","sport":"Ekstrēmie sporti","city":"Liepāja","level":"Iesācējs","bio":{"desc":"Veikbords un skeitborda pamati Liepājas skeitparkā un Veikparkā.","schedule":"Sestdienās pēcpusdienā","level":"Iesācējs"}},
    laura_discgolf:{"name":"Laura Ozoliņa","sport":"Disku golfs","city":"Rīga","level":"Vidējs","bio":{"desc":"Spēles Mežaparka un Zaķusalas disku golfa trasēs. Meklēju biedrus draudzīgām spēlēm.","schedule":"Otrdienās 18:00 un brīvdienās","level":"Vidējs"}},
    miks_cycling:{"name":"Miks Kalniņš","sport":"Velosports","city":"Valmiera","level":"Iesācējs","bio":{"desc":"Relaksēti vakara izbraucieni ar šosejas vai grants velosipēdu 25-35 km.","schedule":"Trešdienu vakaros","level":"Iesācējs"}},
    renars_boxing:{"name":"Renārs Bērziņš","sport":"Bokss / MMA","city":"Jelgava","level":"Vidējs","bio":{"desc":"Kikboksa un boksa pamati, darbs pie maisa un viegls tehnikas sparings.","schedule":"Pirmdienās un ceturtdienās 19:30","level":"Vidējs"}},
    martins_volleyball:{"name":"Mārtiņš Ozols","sport":"Volejbols","city":"Rīga","level":"Vidējs","bio":{"desc":"Klasiskais volejbols zālē un pludmales volejbols Rimi Olimpiskajā centrā un Ruukki.","schedule":"Pirmdienās un piektdienās 19:00","level":"Vidējs"}},
    arturs_padel:{"name":"Artūrs Bērziņš","sport":"Padel","city":"Mārupe","level":"Vidējs","bio":{"desc":"Spēles Mārupes Padel Club un Ganību dambī. Playtomic līmenis ap 2.8.","schedule":"Darbdienās pēc 18:00","level":"Vidējs"}},
    davis_football:{"name":"Dāvis Liepiņš","sport":"Futbols","city":"Jelgava","level":"Vidējs","bio":{"desc":"Futbols 7x7 un mini-futbols Zemgales Olimpiskajā centrā. Aicinām papildspēlētājus.","schedule":"Trešdienās 20:00","level":"Vidējs"}}
  },
  en:{
    karlis:{name:'Kārlis Ozols',sport:'Tennis',city:'Rīga',level:'Intermediate',bio:{desc:'Play twice a week at ENRI or Mezaparks. Looking for a steady sparring partner.',schedule:'Tuesday and Thursday evenings',level:'Intermediate'}},
    elina:{name:'Elīna Kalniņa',sport:'Padel',city:'Mārupe',level:'Beginner',bio:{desc:'Learning padel fundamentals at Marupe. Looking for a patient practice partner.',schedule:'Saturday mornings or weekday evenings',level:'Beginner'}},
    roberts:{name:'Roberts Jansons',sport:'Basketball',city:'Jūrmala',level:'Advanced',bio:{desc:'Outdoor and indoor 3x3 and 5x5 runs. High energy and fast pace.',schedule:'Tuesdays and Sundays at 19:00',level:'Advanced'}},
    anna:{name:'Anna Liepa',sport:'Running',city:'Rīga',level:'Beginner',bio:{desc:'Easy 5-7 km jogs in Pardaugava parks. Comfortable pace around 6:00 min/km.',schedule:'Mondays and Wednesdays at 07:30',level:'Beginner'}},
    mareks:{name:'Mareks Liepiņš',sport:'Football',city:'Liepāja',level:'Intermediate',bio:{desc:'5v5 indoor football at LOC Olympic Centre. New players welcome.',schedule:'Thursday evenings from 20:00',level:'Intermediate'}},
    martins:{name:'Mārtiņš Gailis',sport:'Disc golf',city:'Cēsis',level:'Intermediate',bio:{desc:'Regular 18-basket rounds in Cesis and Priekuli. Happy to share discs.',schedule:'Sunday mornings around 11:00',level:'Intermediate'}},
    arturs:{name:'Artūrs Vītols',sport:'Swimming',city:'Rīga',level:'Intermediate',bio:{desc:'Swimming at Kipsala pool. 1500-2000m crawl sessions.',schedule:'Weekday mornings 07:00-08:30',level:'Intermediate'}},
    laura:{name:'Laura Bērziņa',sport:'Fitness',city:'Rīga',level:'Advanced',bio:{desc:'Strength training and functional fitness at MyFitness. Great workout partner.',schedule:'Mondays and Wednesdays at 18:00',level:'Advanced'}},
    kristine:{name:'Kristīne Zariņa',sport:'Tennis',city:'Jūrmala',level:'Advanced',bio:{desc:'Tennis at Lielupe courts. Solid topspin and brisk tempo.',schedule:'Wednesdays and Saturdays 17:30',level:'Advanced'}},
    edgars:{name:'Edgars Eglītis',sport:'Ice hockey',city:'Jelgava',level:'Intermediate',bio:{desc:'Amateur hockey at Jelgava ice rink. Always open for friendly games.',schedule:'Wednesday evenings 21:00',level:'Intermediate'}},
    dace:{name:'Dace Kļaviņa',sport:'Cycling',city:'Sigulda',level:'Advanced',bio:{desc:'Road and gravel rides through Gauja valley roads for 40-70 km.',schedule:'Saturdays from 10:00',level:'Advanced'}},
    gustavs:{name:'Gustavs Vanags',sport:'Boxing / MMA',city:'Rīga',level:'Advanced',bio:{desc:'Technical pad work and defensive drills. Safety first.',schedule:'Mondays and Fridays 19:00',level:'Advanced'}},
    zane:{name:'Zane Briede',sport:'Padel',city:'Rīga',level:'Intermediate',bio:{desc:'Regular padel in Riga clubs. Looking for mixed tournament partners.',schedule:'Weekday evenings after 18:30',level:'Intermediate'}},
    pauls:{name:'Pauls Rozenbergs',sport:'Golf',city:'Mārupe',level:'Intermediate',bio:{desc:'Practicing at Marupe and Ozo golf clubs. Happy to play 9 or 18 holes.',schedule:'Friday afternoons',level:'Intermediate'}},
    viktorija:{name:'Viktorija Siliņa',sport:'Climbing',city:'Rīga',level:'Beginner',bio:{desc:'Bouldering at Gandrs and Virsotne. Looking for a belay buddy.',schedule:'Tuesdays and Thursdays 18:30',level:'Beginner'}},
    andris:{name:'Andris Ozoliņš',sport:'Basketball',city:'Ogre',level:'Intermediate',bio:{desc:'Streetball in Ogre courts. Casual 3x3 and 4x4 runs.',schedule:'Sundays 18:00',level:'Intermediate'}},
    ieva:{name:'Ieva Priede',sport:'Swimming',city:'Valmiera',level:'Advanced',bio:{desc:'Distance swimming at Valmiera pool. Looking for sparring partners.',schedule:'Tuesdays and Thursdays 07:15',level:'Advanced'}},
    kaspars:{name:'Kaspars Dombrovskis',sport:'Football',city:'Valmiera',level:'Advanced',bio:{desc:'Football at Janis Dalins stadium. Ready for 7v7 or 11v11 matches.',schedule:'Wednesdays and Sundays',level:'Advanced'}},
    santa:{name:'Santa Lāce',sport:'Running',city:'Sigulda',level:'Intermediate',bio:{desc:'Trail running in Sigulda hills and trails. Great outdoor cardio.',schedule:'Sunday mornings 09:30',level:'Intermediate'}},
    rihards:{name:'Rihards Melnis',sport:'Ice hockey',city:'Ventspils',level:'Professional',bio:{desc:'Training at Ventspils ice arena. High level hockey sessions.',schedule:'Weekday evenings',level:'Professional'}},
    madara:{name:'Madara Vilka',sport:'Fitness',city:'Liepāja',level:'Beginner',bio:{desc:'Starting regular fitness workouts at LOC. Looking for motivation buddy.',schedule:'Weekday mornings 08:30',level:'Beginner'}},
    toms:{name:'Toms Āboliņš',sport:'Cycling',city:'Cēsis',level:'Intermediate',bio:{desc:'MTB and gravel cycling along Gauja National Park routes.',schedule:'Saturday mornings 10:00',level:'Intermediate'}},
    alise:{name:'Alise Kalve',sport:'Volleyball',city:'Jūrmala',level:'Intermediate',bio:{desc:'Beach volleyball in Majori and Dzintari. Fun 2v2 matches.',schedule:'Sunny evenings from 18:00',level:'Intermediate'}},
    emils:{name:'Emīls Zvirbulis',sport:'Tennis',city:'Liepāja',level:'Beginner',bio:{desc:'Practicing serves and groundstrokes in Liepaja tennis hall.',schedule:'Mondays and Thursdays 19:00',level:'Beginner'}},
    katrina:{name:'Katrīna Balode',sport:'Padel',city:'Jūrmala',level:'Advanced',bio:{desc:'Active padel player in Jurmala and Riga courts.',schedule:'Evenings after 19:00',level:'Advanced'}},
    matiss:{name:'Matīss Skrastiņš',sport:'Disc golf',city:'Talsi',level:'Beginner',bio:{desc:'Playing disc golf in Talsi and Tukums parks.',schedule:'Weekend afternoons',level:'Beginner'}},
    paula:{name:'Paula Graudiņa',sport:'Basketball',city:'Jelgava',level:'Beginner',bio:{desc:'Shooting drills on outdoor courts in Jelgava.',schedule:'Tuesdays and Thursdays 18:00',level:'Beginner'}},
    valters:{name:'Valters Cīrulis',sport:'Football',city:'Daugavpils',level:'Intermediate',bio:{desc:'Looking for players for 6v6 friendly games in Daugavpils.',schedule:'Tuesday and Friday evenings',level:'Intermediate'}},
    marta:{name:'Marta Rubene',sport:'Boxing / MMA',city:'Liepāja',level:'Beginner',bio:{desc:'Boxing basics and fitness conditioning in Liepaja.',schedule:'Wednesdays and Fridays 18:30',level:'Beginner'}},
    davis:{name:'Dāvis Mežs',sport:'Extreme sports',city:'Rīga',level:'Advanced',bio:{desc:'Skatepark and pumptrack riding in Grizinkalns and Barona.',schedule:'Afternoons and weekends',level:'Advanced'}},
    signe:{name:'Signe Riekstiņa',sport:'Swimming',city:'Liepāja',level:'Intermediate',bio:{desc:'Swimming in LOC pool 2-3 times per week.',schedule:'Mornings from 07:30',level:'Intermediate'}},
    reinis:{name:'Reinis Krauklis',sport:'Ice hockey',city:'Tukums',level:'Advanced',bio:{desc:'Amateur hockey runs at Tukums ice rink. Goalie welcome!',schedule:'Sundays 20:00',level:'Advanced'}},
    baiba:{name:'Baiba Strazdiņa',sport:'Running',city:'Ogre',level:'Beginner',bio:{desc:'Casual jogs in Ogre Blue Hills nature park.',schedule:'Saturday mornings 09:00',level:'Beginner'}},
    kristaps:{name:'Kristaps Lejiņš',sport:'Fitness',city:'Jelgava',level:'Advanced',bio:{desc:'Powerlifting and athletic training in Jelgava gym.',schedule:'Monday, Wednesday, Friday 18:30',level:'Advanced'}},
    elza:{name:'Elza Upīte',sport:'Tennis',city:'Valmiera',level:'Intermediate',bio:{desc:'Tennis at Valmiera outdoor courts once a week.',schedule:'Thursday evenings',level:'Intermediate'}},
    janis:{name:'Jānis Krūmiņš',sport:'Volleyball',city:'Rīga',level:'Beginner',bio:{desc:'Volleyball in Lucavsala and indoor halls in Riga.',schedule:'Weekend afternoons',level:'Beginner'}},
    roberts_golf:{"name":"Roberts Gailis","sport":"Golf","city":"Jūrmala","level":"Advanced","bio":{"desc":"Regular rounds at Jūrmala and Viesturi courses. HCP 14.","schedule":"Saturday mornings","level":"Advanced"}},
    zane_golf:{"name":"Zane Siliņa","sport":"Golf","city":"Mārupe","level":"Beginner","bio":{"desc":"Recently finished Green Card training. Looking for an easygoing partner for 9-hole rounds.","schedule":"Sunday afternoons","level":"Beginner"}},
    kaspars_climbing:{"name":"Kaspars Briedis","sport":"Climbing","city":"Rīga","level":"Intermediate","bio":{"desc":"Top-rope and lead climbing at Falkors and Gandrs gyms.","schedule":"Tuesdays and Thursdays 19:00","level":"Intermediate"}},
    elina_climbing:{"name":"Elīna Liepa","sport":"Climbing","city":"Cēsis","level":"Advanced","bio":{"desc":"Bouldering and outdoor rock climbing routes in Vidzeme. Looking for a belay partner.","schedule":"Weekends","level":"Advanced"}},
    toms_extreme:{"name":"Toms Rozentāls","sport":"Extreme sports","city":"Sigulda","level":"Intermediate","bio":{"desc":"BMX and pumptrack sessions in Sigulda and Riga Mezaparks.","schedule":"Weekday evenings from 18:30","level":"Intermediate"}},
    ance_extreme:{"name":"Ance Vilka","sport":"Extreme sports","city":"Liepāja","level":"Beginner","bio":{"desc":"Wakeboarding and skateboard basics at Liepāja skatepark and wake park.","schedule":"Saturday afternoons","level":"Beginner"}},
    laura_discgolf:{"name":"Laura Ozoliņa","sport":"Disc golf","city":"Rīga","level":"Intermediate","bio":{"desc":"Casual rounds at Mežaparks and Zaķusala disc golf courses.","schedule":"Tuesdays 18:00 and weekends","level":"Intermediate"}},
    miks_cycling:{"name":"Miks Kalniņš","sport":"Cycling","city":"Valmiera","level":"Beginner","bio":{"desc":"Relaxed evening road/gravel rides around Valmiera, 25-35 km.","schedule":"Wednesday evenings","level":"Beginner"}},
    renars_boxing:{"name":"Renārs Bērziņš","sport":"Boxing / MMA","city":"Jelgava","level":"Intermediate","bio":{"desc":"Kickboxing and boxing technique, pad work and controlled sparring.","schedule":"Mondays and Thursdays 19:30","level":"Intermediate"}},
    martins_volleyball:{"name":"Mārtiņš Ozols","sport":"Volleyball","city":"Rīga","level":"Intermediate","bio":{"desc":"Indoor volleyball and beach sessions at Rimi Olympic and Ruukki centers.","schedule":"Mondays and Fridays 19:00","level":"Intermediate"}},
    arturs_padel:{"name":"Artūrs Bērziņš","sport":"Padel","city":"Mārupe","level":"Intermediate","bio":{"desc":"Regular games at Mārupes Padel Club and Ganību dambis. Playtomic ~2.8.","schedule":"Weekdays after 18:00","level":"Intermediate"}},
    davis_football:{"name":"Dāvis Liepiņš","sport":"Football","city":"Jelgava","level":"Intermediate","bio":{"desc":"7-a-side and small-sided games at Zemgale Olympic Centre. Always happy to add players.","schedule":"Wednesdays 20:00","level":"Intermediate"}}
  },
  ru:{
    karlis:{name:'Карлис Озолс',sport:'Теннис',city:'Рига',level:'Средний',bio:{desc:'Играю 2 раза в неделю в ENRI или Межапарке. Ищу постоянного спарринг-партнера.',schedule:'Вторник и четверг вечером',level:'Средний'}},
    elina:{name:'Элина Калниня',sport:'Падел',city:'Марупе',level:'Начинающий',bio:{desc:'Осваиваю падел в Марупе. Ищу спокойного партнера для тренировок.',schedule:'Утро субботы или будни вечер',level:'Начинающий'}},
    roberts:{name:'Робертс Янсонс',sport:'Баскетбол',city:'Юрмала',level:'Продвинутый',bio:{desc:'Стритбол 3х3 и баскетбол 5х5 на свежем воздухе или в зале.',schedule:'Вторник и воскресенье в 19:00',level:'Продвинутый'}},
    anna:{name:'Анна Лиепа',sport:'Бег',city:'Рига',level:'Начинающий',bio:{desc:'Спокойные пробежки на 5-7 км по паркам Пардаугавы. Темп 6:00 мин/км.',schedule:'Понедельник, среда 07:30',level:'Начинающий'}},
    mareks:{name:'Марекс Лиепиньш',sport:'Футбол',city:'Лиепая',level:'Средний',bio:{desc:'Футзал 5х5 в олимпийском центре LOC. Приглашаем новых игроков.',schedule:'Вечер четверга с 20:00',level:'Средний'}},
    martins:{name:'Мартиньш Гайлис',sport:'Диск-гольф',city:'Цесис',level:'Средний',bio:{desc:'Регулярно играю на 18 корзин в Цесисе. Могу одолжить диски.',schedule:'Утро воскресенья около 11:00',level:'Средний'}},
    arturs:{name:'Артурс Витолс',sport:'Плавание',city:'Рига',level:'Средний',bio:{desc:'Тренировки в бассейне на Кипсале. Дистанции 1500-2000м кролем.',schedule:'Будние утра 07:00-08:30',level:'Средний'}},
    laura:{name:'Лаура Берзиня',sport:'Фитнес',city:'Рига',level:'Продвинутый',bio:{desc:'Силовые тренировки и функциональный фитнес в MyFitness.',schedule:'Понедельник и среда 18:00',level:'Продвинутый'}},
    kristine:{name:'Кристине Зариня',sport:'Теннис',city:'Юрмала',level:'Продвинутый',bio:{desc:'Теннис на кортах в Лиелупе. Хороший темп и стабильные розыгрыши.',schedule:'Среда и суббота 17:30',level:'Продвинутый'}},
    edgars:{name:'Эдгарс Эглитис',sport:'Хоккей',city:'Елгава',level:'Средний',bio:{desc:'Любительский хоккей в ледовом холле Елгавы.',schedule:'Вечер среды 21:00',level:'Средний'}},
    dace:{name:'Даце Клявиня',sport:'Велоспорт',city:'Сигулда',level:'Продвинутый',bio:{desc:'Шоссе и гравийные маршруты по Сигулде на 40-70 км.',schedule:'Суббота с 10:00',level:'Продвинутый'}},
    gustavs:{name:'Густавс Ванагс',sport:'Бокс / MMA',city:'Рига',level:'Продвинутый',bio:{desc:'Технический спарринг на лапах и защита. Безопасность на первом месте.',schedule:'Понедельник и пятница 19:00',level:'Продвинутый'}},
    zane:{name:'Зане Бриде',sport:'Падел',city:'Рига',level:'Средний',bio:{desc:'Регулярные игры в падел в Риге. Ищу напарника для микст-турниров.',schedule:'Будни после 18:30',level:'Средний'}},
    pauls:{name:'Паулс Розенбергс',sport:'Гольф',city:'Марупе',level:'Средний',bio:{desc:'Играю в клубах Марупе и Озо. Буду рад пройти 9 или 18 лунок.',schedule:'Пятница после обеда',level:'Средний'}},
    viktorija:{name:'Виктория Силиня',sport:'Скалолазание',city:'Рига',level:'Начинающий',bio:{desc:'Боулдеринг в залах Gandrs и Virsotne. Ищу напарника для страховки.',schedule:'Вторник и четверг 18:30',level:'Начинающий'}},
    andris:{name:'Андрис Озолиньш',sport:'Баскетбол',city:'Огре',level:'Средний',bio:{desc:'Стритбол на площадках Огре. Игры 3х3 и 4х4 в дружеской атмосфере.',schedule:'Воскресенье 18:00',level:'Средний'}},
    ieva:{name:'Иева Приеде',sport:'Плавание',city:'Валмиера',level:'Продвинутый',bio:{desc:'Тренировки в Валмиерском бассейне. Ищу спарринг-партнеров.',schedule:'Вторник и четверг 07:15',level:'Продвинутый'}},
    kaspars:{name:'Каспарс Домбровскис',sport:'Футбол',city:'Валмиера',level:'Продвинутый',bio:{desc:'Футбол на стадионе Яниса Далиньша. Готов к играм 7х7 или 11х11.',schedule:'Среда и воскресенье',level:'Продвинутый'}},
    santa:{name:'Санта Лаце',sport:'Бег',city:'Сигулда',level:'Средний',bio:{desc:'Трейловый бег по тропам Сигулды. Отличное кардио на природе.',schedule:'Утро воскресенья 09:30',level:'Средний'}},
    rihards:{name:'Рихардс Мелнис',sport:'Хоккей',city:'Вентспилс',level:'Профессионал',bio:{desc:'Тренируюсь на ледовой арене Вентспилса. Высокий темп игры.',schedule:'Будни вечерами',level:'Профессионал'}},
    madara:{name:'Мадара Вилка',sport:'Фитнес',city:'Лиепая',level:'Начинающий',bio:{desc:'Начинаю регулярные тренировки в олимпийском центре Лиепаи.',schedule:'Будни утром 08:30',level:'Начинающий'}},
    toms:{name:'Томс Аболиньш',sport:'Велоспорт',city:'Цесис',level:'Средний',bio:{desc:'MTB и гравийный велоспорт по национальному парку Гауя.',schedule:'Суббота утро 10:00',level:'Средний'}},
    alise:{name:'Алисе Калве',sport:'Волейбол',city:'Юрмала',level:'Средний',bio:{desc:'Пляжный волейбол в Майори и Дзинтари. Игры 2х2 с хорошим настроением.',schedule:'Теплые вечера с 18:00',level:'Средний'}},
    emils:{name:'Эмилс Звирбулис',sport:'Теннис',city:'Лиепая',level:'Начинающий',bio:{desc:'Отрабатываю подачу и удары в Лиепайском теннисном холле.',schedule:'Понедельник и четверг 19:00',level:'Начинающий'}},
    katrina:{name:'Катрина Балоде',sport:'Падел',city:'Юрмала',level:'Продвинутый',bio:{desc:'Активно играю в падел на кортах Юрмалы и Риги.',schedule:'Вечером после 19:00',level:'Продвинутый'}},
    matiss:{name:'Матисс Скрастиньш',sport:'Диск-гольф',city:'Талси',level:'Начинающий',bio:{desc:'Играю в диск-гольф в парках Талси и Тукумса.',schedule:'Выходные после полудня',level:'Начинающий'}},
    paula:{name:'Паула Граудиня',sport:'Баскетбол',city:'Елгава',level:'Начинающий',bio:{desc:'Бросковые тренировки на открытых площадках Елгавы.',schedule:'Вторник и четверг 18:00',level:'Начинающий'}},
    valters:{name:'Валтерс Цирулис',sport:'Футбол',city:'Даугавпилс',level:'Средний',bio:{desc:'Ищу игроков для товарищеских матчей 6х6 в Даугавпилсе.',schedule:'Вторник и пятница вечер',level:'Средний'}},
    marta:{name:'Марта Рубене',sport:'Бокс / MMA',city:'Лиепая',level:'Начинающий',bio:{desc:'Основы бокса и общая физическая подготовка в Лиепае.',schedule:'Среда и пятница 18:30',level:'Начинающий'}},
    davis:{name:'Давис Межс',sport:'Экстремальный спорт',city:'Рига',level:'Продвинутый',bio:{desc:'Скейтпарк и памптрек в Гризинькалнсе и на Барона.',schedule:'Днем и по выходным',level:'Продвинутый'}},
    signe:{name:'Сигне Риекстиня',sport:'Плавание',city:'Лиепая',level:'Средний',bio:{desc:'Плавание в бассейне LOC 2-3 раза в неделю.',schedule:'Утро с 07:30',level:'Средний'}},
    reinis:{name:'Рейнис Крауклис',sport:'Хоккей',city:'Тукумс',level:'Продвинутый',bio:{desc:'Любительский хоккей на ледовой арене Тукумса.',schedule:'Воскресенье 20:00',level:'Продвинутый'}},
    baiba:{name:'Байба Страздиня',sport:'Бег',city:'Огре',level:'Начинающий',bio:{desc:'Легкие пробежки по природному парку Синие горы в Огре.',schedule:'Суббота утро 09:00',level:'Начинающий'}},
    kristaps:{name:'Кристапс Леиньш',sport:'Фитнес',city:'Елгава',level:'Продвинутый',bio:{desc:'Пауэрлифтинг и атлетические тренировки в клубе Елгавы.',schedule:'Понедельник, среда, пятница 18:30',level:'Продвинутый'}},
    elza:{name:'Элза Упите',sport:'Теннис',city:'Валмиера',level:'Средний',bio:{desc:'Теннис на кортах Валмиеры 1 раз в неделю.',schedule:'Четверг вечером',level:'Средний'}},
    janis:{name:'Янис Круминьш',sport:'Волейбол',city:'Рига',level:'Начинающий',bio:{desc:'Волейбол в зале и на песке Луцавсалы в Риге.',schedule:'Выходные после полудня',level:'Начинающий'}},
    roberts_golf:{"name":"Робертс Гайлис","sport":"Гольф","city":"Юрмала","level":"Продвинутый","bio":{"desc":"Регулярные раунды на полях в Юрмале и Виестури. HCP 14.","schedule":"Суббота утро","level":"Продвинутый"}},
    zane_golf:{"name":"Зане Силиня","sport":"Гольф","city":"Марупе","level":"Начинающий","bio":{"desc":"Недавно получила Зеленую карту. Ищу спокойного партнера для игры на 9 лунок.","schedule":"Воскресенье днем","level":"Начинающий"}},
    kaspars_climbing:{"name":"Каспарс Бриедис","sport":"Скалолазание","city":"Рига","level":"Средний","bio":{"desc":"Лазание с верхней и нижней страховкой в залах Falkors и Gandrs.","schedule":"Вторник и четверг 19:00","level":"Средний"}},
    elina_climbing:{"name":"Элина Лиепа","sport":"Скалолазание","city":"Цесис","level":"Продвинутый","bio":{"desc":"Боулдеринг и выезды на естественный рельеф в Видземе. Ищу надежного напарника.","schedule":"Выходные дни","level":"Продвинутый"}},
    toms_extreme:{"name":"Томс Розенталс","sport":"Экстремальный спорт","city":"Сигулда","level":"Средний","bio":{"desc":"BMX и памптрек на трассах в Сигулде и Риге.","schedule":"Будни вечерами с 18:30","level":"Средний"}},
    ance_extreme:{"name":"Анце Вилка","sport":"Экстремальный спорт","city":"Лиепая","level":"Начинающий","bio":{"desc":"Вейкбординг и скейтбординг в Лиепайском парке.","schedule":"Суббота днем","level":"Начинающий"}},
    laura_discgolf:{"name":"Лаура Озолиня","sport":"Диск-гольф","city":"Рига","level":"Средний","bio":{"desc":"Игры на трассах Межапарка и Закусалы в Риге. Ищу напарников для дружеских раундов.","schedule":"Вторник 18:00 и выходные","level":"Средний"}},
    miks_cycling:{"name":"Микс Калниньш","sport":"Велоспорт","city":"Валмиера","level":"Начинающий","bio":{"desc":"Спокойные вечерние заезды на 25-35 км по окрестностям Валмиеры.","schedule":"Вечер среды","level":"Начинающий"}},
    renars_boxing:{"name":"Ренарс Берзиньш","sport":"Бокс / MMA","city":"Елгава","level":"Средний","bio":{"desc":"Кикбоксинг и бокс, отработка техники на лапах и легкий спарринг.","schedule":"Понедельник и четверг 19:30","level":"Средний"}},
    martins_volleyball:{"name":"Мартиньш Озолс","sport":"Волейбол","city":"Рига","level":"Средний","bio":{"desc":"Волейбол в зале и пляжный волейбол в Олимпийском центре и Ruukki.","schedule":"Понедельник и пятница 19:00","level":"Средний"}},
    arturs_padel:{"name":"Артурс Берзиньш","sport":"Падел","city":"Марупе","level":"Средний","bio":{"desc":"Игры в Mārupes Padel Club и Ganību dambis. Уровень Playtomic ~2.8.","schedule":"Будни после 18:00","level":"Средний"}},
    davis_football:{"name":"Давис Лиепиньш","sport":"Футбол","city":"Елгава","level":"Средний","bio":{"desc":"Футбол 7х7 в Земгальском олимпийском центре. Приглашаем игроков в команду.","schedule":"Среда 20:00","level":"Средний"}}
  }
};
const PARTNER_PROFILES=Object.entries(PARTNER_PROFILE_TEXT.lv).map(([id,entry])=>({
  id,
  name:entry.name,
  sport:entry.sport,
  sportKey: sportToKey(entry.sport),
  city:entry.city,
  level:entry.level,
  bio:{
    lv:{...PARTNER_PROFILE_TEXT.lv[id].bio,level:PARTNER_PROFILE_TEXT.lv[id].level},
    en:{...PARTNER_PROFILE_TEXT.en[id].bio,level:PARTNER_PROFILE_TEXT.en[id].level},
    ru:{...PARTNER_PROFILE_TEXT.ru[id].bio,level:PARTNER_PROFILE_TEXT.ru[id].level}
  }
}));
window.PARTNER_PROFILES = PARTNER_PROFILES;
const PARTNERS_PER_PAGE=6;
let partnerPage=1;
function getPartnerLocaleCopy(profile){
 const locale=PARTNER_PROFILE_TEXT[currentLang]?.[profile.id] || PARTNER_PROFILE_TEXT.lv[profile.id] || profile;
 return {
  name: locale.name || profile.name,
  sport: locale.sport || profile.sport,
  city: locale.city || profile.city,
  level: locale.level || profile.level,
  bio: locale.bio || {desc:'',schedule:'',level:locale.level || profile.level}
 };
}
function partnerCopy(profile){return getPartnerLocaleCopy(profile).bio}
function genPartners(sport,city,level){
 const hasFilter=Boolean(sport||city||level);
 const filterKey = sport ? sportToKey(sport) : '';
 const normCity = city ? norm(city) : '';
 const normLevel = level ? norm(level) : '';

 const score=p=>{
  let value=78;
  const pKey = sportToKey(p.sport);
  if(filterKey) value += (pKey === filterKey || norm(p.sport) === norm(sport)) ? 15 : -10;
  if(normCity) value += (norm(p.city) === normCity) ? 12 : -8;
  if(normLevel) value += (norm(p.level) === normLevel) ? 10 : -6;
  if(!hasFilter) value += Math.max(0,8-(PARTNER_PROFILES.indexOf(p)%4)*2);
  return Math.max(55,Math.min(98,value));
 };

 const exact=PARTNER_PROFILES.filter(p=>{
   const pKey = sportToKey(p.sport);
   const matchSport = !filterKey || (pKey === filterKey || norm(p.sport) === norm(sport));
   const matchCity = !normCity || norm(p.city) === normCity;
   const matchLevel = !normLevel || norm(p.level) === normLevel;
   return matchSport && matchCity && matchLevel;
 });

 const partial=PARTNER_PROFILES.filter(p=>!exact.includes(p)&&(
   (filterKey && (sportToKey(p.sport) === filterKey || norm(p.sport) === norm(sport))) ||
   (normCity && norm(p.city) === normCity) ||
   (normLevel && norm(p.level) === normLevel)
 ));

 const pool=exact.length ? exact : (hasFilter ? partial : PARTNER_PROFILES);
 return {
   list: pool.map(p=>({...p,matchScore:score(p)})).sort((a,b)=>b.matchScore-a.matchScore),
   exact: exact.length > 0,
   hasFilter
 };
}
window.genPartners = genPartners;
function setFinderSport(sport){
  const el = document.getElementById('fSport');
  const currentKey = el ? sportToKey(el.value) : '';
  const targetKey = sport ? sportToKey(sport) : '';
  const nextKey = currentKey === targetKey ? '' : targetKey;
  applySportEverywhere(nextKey);
  partnerPage = 1;
  findPartners(1);
  mapFiltersChanged();
}
window.setFinderSport=setFinderSport;
function resetPartnerFilters(){
  applySportEverywhere('');
  ['fSport','fCity','fLevel'].forEach(id=>{const el=document.getElementById(id);if(el)el.value=''});
  partnerPage=1;
  findPartners(1);
  mapFiltersChanged();
}
function findPartners(page=partnerPage){
 const host=document.getElementById('partnerResults');
 if(!host)return;
 host.setAttribute('aria-busy','true');
 try{
  const sport=document.getElementById('fSport')?.value||'';
  const city=document.getElementById('fCity')?.value||'';
  const level=document.getElementById('fLevel')?.value||'';
  const result=genPartners(sport,city,level);
  const allProfiles=result.list;
  const totalPages=Math.max(1,Math.ceil(allProfiles.length/PARTNERS_PER_PAGE));
  partnerPage=Math.min(Math.max(Number(page)||1,1),totalPages);
  const list=allProfiles.slice((partnerPage-1)*PARTNERS_PER_PAGE,partnerPage*PARTNERS_PER_PAGE);
  const context=[sport||t('allSports'),city||t('allCities'),level||t('anyLevel')].map(esc).join(' · ');
  const peopleLabel=t('partnerPeople');
  const writeLabel=t('writePartner')||'Rakstīt';
  const heading=result.exact?t('partnerRecommended'):t('partnerOther');

  if(!list.length){
   host.innerHTML=`<div class="finder-empty"><div><strong>${currentLang==='en'?'No close matches yet.':currentLang==='ru'?'Пока нет подходящих профилей.':'Pagaidām nav tuvu atbilstību.'}</strong><span>${currentLang==='en'?'Try a different sport, city or level.':currentLang==='ru'?'Попробуйте другой вид спорта, город или уровень.':'Pamēģini citu sportu, pilsētu vai līmeni.'}</span></div><button type="button" class="text-action" onclick="resetPartnerFilters()">${esc(t('resetFilters'))}</button></div>`;
   return;
  }

  host.innerHTML=`
    <div class="results-bar">
      <div class="results-count"><strong>${allProfiles.length}</strong><span>${peopleLabel}</span></div>
      <div class="results-context"><strong>${heading}</strong><span>${context}</span></div>
    </div>
    <div class="partner-grid">
      ${list.map((p,i)=>{
        const profileLocale=getPartnerLocaleCopy(p);
        const copy=partnerCopy(p);
        const lvLevel = String(p.level||'').toLowerCase();
        const levelPips = lvLevel.includes('iesāc') ? '●○○' : (lvLevel.includes('pieredz') || lvLevel.includes('profesion')) ? '●●●' : '●●○';
        return `<article class="partner-card" data-sport="${esc(profileLocale.sport)}" data-city="${esc(profileLocale.city)}" data-level="${esc(profileLocale.level)}" style="animation-delay:${i * 45}ms">
        <div class="partner-card-main">
          <div class="partner-topline">
            <div class="partner-avatar partner-initial" aria-hidden="true"><span>${esc(nameInitials(profileLocale.name))}</span><span class="partner-online-dot" title="Aktīvs šodien"></span></div>
            <div class="partner-identity"><strong>${esc(profileLocale.name)}</strong><small class="partner-sport-badge">${sportIcon(p.sportKey||profileLocale.sport, 13)} ${esc(sportLabel(profileLocale.sport))} · ${esc(profileLocale.city)}</small></div>
          </div>
          <div class="partner-metrics-bar partner-tags"><span class="partner-tag partner-meta-level"><span class="level-pips">${levelPips}</span> ${esc(copy.level)}</span><span class="partner-meta-sep">·</span><span class="partner-tag partner-tag-muted">${esc(copy.schedule)}</span></div>
          <p class="partner-note">${esc(copy.desc)}</p>
        </div>
        <button type="button" class="partner-action partner-action-btn" aria-label="${esc(writeLabel)} ${esc(profileLocale.name)}" data-partner-index="${i}"><span>${esc(writeLabel)}</span><b aria-hidden="true">✎</b></button>
      </article>`}).join('')}
    </div>
    <nav class="partner-pagination" aria-label="${esc(t('pagination'))}">${partnerPage>1?`<button type="button" onclick="findPartners(${partnerPage-1})">${esc(t('previous'))}</button>`:''}${Array.from({length:totalPages},(_,i)=>`<button type="button" class="${i+1===partnerPage?'active':''}" aria-current="${i+1===partnerPage?'page':'false'}" onclick="findPartners(${i+1})">${i+1}</button>`).join('')}${partnerPage<totalPages?`<button type="button" onclick="findPartners(${partnerPage+1})">${esc(t('next'))}</button>`:''}</nav>`;

  host.querySelectorAll('[data-partner-index]').forEach(btn=>btn.addEventListener('click',()=>{
    const partner=list[Number(btn.dataset.partnerIndex)];
    if(partner)goMessages(partner.name);
  }));

 }catch(err){
  console.error('[SportaBiedrs] finder render failed',err);
  host.innerHTML=`<div class="finder-inline-error"><strong>${currentLang==='en'?'Search is temporarily unavailable.':'Meklēšana īslaicīgi nav pieejama.'}</strong><span>${currentLang==='en'?'Try again in a moment.':'Pamēģini vēlreiz pēc brīža.'}</span><button type="button" class="btn btn-solid" onclick="findPartners()">${esc(t('search'))}</button></div>`;
 }finally{
  host.setAttribute('aria-busy','false');
 }
}
function goMessages(name){
 const card=[...document.querySelectorAll('.partner-card')].find(el=>norm(el.querySelector('strong')?.textContent||'')===norm(name));
 const sport=card?.dataset.sport||'Teniss';
 const city=card?.dataset.city||'Rīga';
 const level=card?.dataset.level||'Vidējs';
 let idx=DM_CONTACTS.findIndex(c=>norm(c.name)===norm(name));
 if(idx<0){
   DM_CONTACTS.push({name,sport,city,level});
   DM_HISTORY.push([]);
   saveDM();
   idx=DM_CONTACTS.length-1;
 }
 activeDM=idx;
 if(window.DM_UNREAD_STATE) {
   window.DM_UNREAD_STATE[idx] = false;
   updateNavMsgBadge();
 }

 // Mount DM before scrolling so the target conversation is already loaded cleanly
 initDM();
 openDM(activeDM, true, true);

 // On mobile, close contacts overlay if open
 const chatShell = document.querySelector('.chat-shell');
 if (chatShell && window.innerWidth <= 700) {
   chatShell.classList.remove('contacts-open');
 }

 // Smoothly scroll to #messages with precise header offset so the title is never obscured
 const msgEl = document.getElementById('messages');
 if (msgEl) {
   const header = document.querySelector('.site-header');
   const headerH = header ? header.offsetHeight : 72;
   const rect = msgEl.getBoundingClientRect();
   const targetY = window.pageYOffset + rect.top - headerH - 18;
   window.scrollTo({ top: Math.max(0, targetY), behavior: 'smooth' });
 }

 // Gently set placeholder and focus without snapping or canceling smooth scroll
 setTimeout(()=>{
   const input = document.getElementById('chatInput');
   if(input){
     input.value = '';
     input.placeholder = currentLang==='en' ? `Write a message to ${name}...` : currentLang==='ru' ? `Написать сообщение для ${name}...` : `Rakstīt ziņu ${name}...`;
     try {
       input.focus({ preventScroll: true });
     } catch (e) {
       input.focus();
     }
   }
 }, 600);
}

function nameInitials(name){const p=String(name||'').trim().split(/\s+/).filter(Boolean);if(!p.length)return '?';const f=p[0][0]||'';const l=p.length>1?p[p.length-1][0]:'';return (f+l).toUpperCase()}
function initDM(){
 const list=document.getElementById('chatList');if(!list)return;
 list.innerHTML=DM_CONTACTS.map((c,i)=>{const last=DM_HISTORY[i]?.[DM_HISTORY[i].length-1]?.text||t('noNew');return `<button class="chat-list-item ${i===activeDM?'active':''}" onclick="openDM(${i},true,true)"><div class="partner-avatar partner-initial">${esc(nameInitials(c.name))}</div><div class="chat-contact"><div><strong>${esc(c.name)}</strong><span class="online-dot"></span></div><small>${esc(sportLabel(c.sport))} · ${esc(c.city)}</small><p>${esc(last).slice(0,48)}${last.length>48?'…':''}</p></div><span class="chat-chevron"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6"/></svg></span></button>`}).join('');
 openDM(Math.min(Math.max(Number(activeDM)||0,0),DM_CONTACTS.length-1),true,false);
}
function openDM(i,seed=true,shouldScroll=false){
 activeDM=Number(i)||0;const c=DM_CONTACTS[activeDM];
 const items = document.querySelectorAll('.chat-list-item');
 items.forEach((x,idx)=>x.classList.toggle('active',idx===activeDM));
 if(shouldScroll){
   const activeItem = items[activeDM];
   const container = document.getElementById('chatList');
   if (container && activeItem) {
     const itemTop = activeItem.offsetTop;
     const itemHeight = activeItem.offsetHeight;
     const containerHeight = container.clientHeight;
     container.scrollTo({
       top: Math.max(0, itemTop - (containerHeight / 2) + (itemHeight / 2)),
       behavior: 'smooth'
     });
   }
 }
 const h=document.getElementById('chatHead');
 if(h)h.innerHTML=`<div class="chat-profile"><div class="partner-avatar partner-initial large">${esc(nameInitials(c.name))}</div><div><strong>${esc(c.name)}</strong><span>${esc(sportLabel(c.sport))} · ${esc(c.city)} · ${esc(c.level)}</span></div><div class="chat-head-actions"><button type="button" onclick="go('map')">${t('findPlace')}</button><button type="button" onclick="go('map');bookContactVenue(${activeDM})">${t('book')}</button><button type="button" class="chat-reset" onclick="resetDMHistory()">${t('restart')}</button></div></div>`;
 if(seed&&!DM_HISTORY[activeDM].length){
  const contactName = c.name;
  const seedList = (DM_SEED_CONVERSATIONS[contactName] && (DM_SEED_CONVERSATIONS[contactName][currentLang] || DM_SEED_CONVERSATIONS[contactName].lv)) || [
    { from: 'them', text: currentLang==='en' ? `Hi! Looking for a ${sportLabel(c.sport).toLowerCase()} training partner in ${c.city}.` : currentLang==='ru' ? `Привет! Ищу партнера для тренировок (${sportLabel(c.sport).toLowerCase()}) в ${c.city}.` : `Sveiks! Meklēju partneri ${sportLabel(c.sport).toLowerCase()} treniņam ${c.city}.` }
  ];
  DM_HISTORY[activeDM] = seedList.map(m => ({ from: m.from, text: m.text }));
  saveDM();
 }
 renderDM();
}

function bookContactVenue(contactIndex){
  const contact = DM_CONTACTS[contactIndex];
  if(!contact) return;
  go('map');
  setTimeout(()=>{
    const v = VENUES.find(x => norm(x.city) === norm(contact.city) && x.bookable === true) ||
              VENUES.find(x => norm(x.city) === norm(contact.city));
    if(v) openBooking(v);
  }, 250);
}

function resetDMHistory(){if(!DM_HISTORY[activeDM])return;DM_HISTORY[activeDM]=[];saveDM();openDM(activeDM);toast(currentLang==='en'?'Conversation reset.':currentLang==='ru'?'Переписка сброшена.':'Saruna atiestatīta.');}
function saveDM(){safeSet(DM_STORE_KEY,DM_HISTORY)}
function renderDM(isTyping=false){
  const b=document.getElementById('chatBody');if(!b)return;
  let html = DM_HISTORY[activeDM].map(m=>`<div class="message-row ${m.from==='me'?'me':'them'}"><div class="bubble ${m.from==='me'?'me':'them'}">${esc(m.text)}<time>${m.from==='me'?(currentLang==='en'?'Sent':currentLang==='ru'?'Отправлено':'Nosūtīts'):t('today')}</time></div></div>`).join('');
  if(isTyping){
    html += `<div class="message-row them" id="dmTypingRow"><div class="bubble them typing-dots"><span class="typing-dot"></span><span class="typing-dot"></span><span class="typing-dot"></span></div></div>`;
  }
  b.innerHTML=html;
  b.classList.remove('animate-switch');
  void b.offsetWidth;
  b.classList.add('animate-switch');
  b.scrollTop=b.scrollHeight;
}
function dmReply(c, text){
  const raw = norm(text);
  const sport = sportLabel(c.sport).toLowerCase();
  const firstName = norm(c.name.split(' ')[0]);

  // 1. Greetings & intros
  if (/sveik|cau|labdien|prieks|hey|hello|hi|привет/.test(raw)) {
    if (firstName === 'karlis') {
      return currentLang === 'en' ? 'Hey! Karlis here. Ready for a tennis sparring session or match play this week?' : currentLang === 'ru' ? 'Привет! Я Карлис. Готов к спаррингу или матчу по теннису на этой неделе?' : 'Čau! Kārlis šeit. Prieks dzirdēt! Esi gatavs tenisa sparringam vai mačam šonedēļ?';
    }
    if (firstName === 'elina') {
      return currentLang === 'en' ? 'Hey! Elina here. Would love to play padel or practice rallies in Marupe!' : currentLang === 'ru' ? 'Привет! Я Элина. С удовольствием сыграю в падел или потренирую удары в Марупе!' : 'Čau! Elīna šeit. Ļoti priecātos par padel treniņu vai spēli Mārupē!';
    }
    if (firstName === 'roberts') {
      return currentLang === 'en' ? 'Yo! Roberts here. Always down for basketball runs in Majori or indoor court.' : currentLang === 'ru' ? 'Привет! Роберт на связи. Всегда за стритбол в Майори или в зале.' : 'Čau! Roberts šeit. Vienmēr gatavs uzraut basketbolu Majoros vai zālē.';
    }
    if (firstName === 'anna') {
      return currentLang === 'en' ? 'Hi! Anna here. Running together makes morning miles so much easier. Up for a run?' : currentLang === 'ru' ? 'Привет! Анна на связи. Бегать в компании по утрам намного легче. Побегаем?' : 'Čau! Anna šeit. Koptreniņš rīta skrējienam būtu ideāls. Labprāt paskrietu kopā!';
    }
    if (firstName === 'mareks') {
      return currentLang === 'en' ? 'Hey! Mareks here. We have a great 5v5 indoor football group in Liepaja.' : currentLang === 'ru' ? 'Привет! Я Марек. У нас отличная группа по футзалу 5х5 в Лиепае.' : 'Sveiks! Mareks šeit. Mums Liepājā LOC hallē ir lieliska futbola kompānija. Nāksi uzspēlēt?';
    }
    if (firstName === 'martins') {
      return currentLang === 'en' ? 'Hey! Martins here. Great to connect with another disc golf player!' : currentLang === 'ru' ? 'Привет! Мартиньш на связи. Рад познакомиться с любителем диск-гольфа!' : 'Čau! Mārtiņš šeit. Forši satikt vēl kādu disku golfa spēlētāju Cēsu pusē!';
    }
    return currentLang === 'en' ? 'Hi! Great to hear from you. What day works best for your training?' : 'Sveiks! Prieks dzirdēt. Kura diena tev labāk derētu treniņam?';
  }

  // 2. Schedule, day, timing
  if (/laik|kad|rit|sodien|nedel|week|dien|time|when|cikos|briv/.test(raw)) {
    if (firstName === 'karlis') {
      return currentLang === 'en' ? 'Tuesday and Thursday after 18:30 are best for me at ENRI, or Saturday morning 10:00.' : currentLang === 'ru' ? 'Вторник и четверг после 18:30 в ENRI идеально, или в субботу утром с 10:00.' : 'Otrdienās un ceturtdienās pēc 18:30 man ir ideāli ENRI kortos, vai arī sestdienas rītā ap 10:00.';
    }
    if (firstName === 'elina') {
      return currentLang === 'en' ? 'I usually play on Wednesday evening after 18:00 or Saturday morning 10:00 in Marupe.' : currentLang === 'ru' ? 'Я обычно играю в среду вечером после 18:00 или в субботу в 10:00 утра в Марупе.' : 'Parasti spēlēju trešdienu vakaros pēc 18:00 vai sestdienu rītos ap 10:00 Mārupē.';
    }
    if (firstName === 'roberts') {
      return currentLang === 'en' ? 'Thursdays 19:00 we have an open run in Majori or Daugavas nams. Come by around 18:45.' : currentLang === 'ru' ? 'По четвергам в 19:00 у нас открытая игра в Майори или Даугавас намс. Подходи к 18:45.' : 'Ceturtdienās 19:00 mums ir spēle Majoros vai Daugavas sporta namā. Nāc ap 18:45, lai paspētu iesildīties.';
    }
    if (firstName === 'anna') {
      return currentLang === 'en' ? 'I run at 07:30 on weekdays. On weekends 09:30 works great around Uzvaras park.' : currentLang === 'ru' ? 'Бегаю в 07:30 по будням. На выходных отлично подходит 09:30 в парке Победы.' : 'Darba dienās skrienu ap 07:30 no rīta. Brīvdienās varam ap 09:30 Uzvaras parkā vai pie Māras dīķa.';
    }
    if (firstName === 'mareks') {
      return currentLang === 'en' ? 'Thursday 20:00 at LOC Olympic Centre Liepaja. Be there at 19:45 for the locker room.' : currentLang === 'ru' ? 'Четверг 20:00 в олимпийском центре LOC в Лиепае. Приходи к 19:45 в раздевалку.' : 'Ceturtdienās 20:00 LOC Olimpiskajā centrā Liepājā. Esi ap 19:45, lai mierīgi pārģērbtos.';
    }
    if (firstName === 'martins') {
      return currentLang === 'en' ? 'Sundays around 11:00 at basket 1 in Cesis, or Friday evening 18:00.' : currentLang === 'ru' ? 'Воскресенье около 11:00 у первой корзины в Цесисе, или вечер пятницы в 18:00.' : 'Svētdienās ap 11:00 pie pirmā groza Cēsīs, vai arī piektdienas vakarā ap 18:00.';
    }
    return currentLang === 'en' ? 'Weekday evenings after 18:00 or weekend mornings work best for me.' : 'Man parasti vislabāk der darba dienu vakari pēc 18:00 vai brīvdienu rīti.';
  }

  // 3. Location, venue, courts
  if (/viet|kur|zal|lauk|court|gym|where|place|centr|stadion|trase/.test(raw)) {
    if (firstName === 'karlis') {
      return currentLang === 'en' ? 'ENRI Kalnciema iela or Tenisa Centrs Lielupe. We can reserve directly on the map!' : currentLang === 'ru' ? 'ENRI на Калнциема или теннисный центр Лиелупе. Можно забронировать прямо на карте!' : 'ENRI Kalnciema ielā vai Tenisa Centrs Lielupe. Varam norezervēt tieši caur karti!';
    }
    if (firstName === 'elina') {
      return currentLang === 'en' ? 'Marupes Padel Club has great indoor courts and free parking. Highly recommend it!' : currentLang === 'ru' ? 'В Mārupes Padel Club отличные крытые корты и удобная парковка. Очень рекомендую!' : 'Mārupes Padel Club ir lieliski iekštelpu korti un ērta stāvvieta. Noteikti iesaku!';
    }
    if (firstName === 'roberts') {
      return currentLang === 'en' ? 'Majori outdoor beach court in summer, or Daugavas sporta nams in Riga when raining.' : currentLang === 'ru' ? 'Открытая площадка в Майори летом или спортзал Даугавас в Риге при дожде.' : 'Majoros āra laukums pie pludmales, bet vēsākā laikā ejam uz Daugavas sporta namu.';
    }
    if (firstName === 'anna') {
      return currentLang === 'en' ? 'Uzvaras parks new 1km tartan track or Mezaparks lake loop are fantastic.' : currentLang === 'ru' ? 'Новая километровая дорожка в парке Победы или круг вокруг озера в Межапарке отличные.' : 'Uzvaras parka jaunais 1 km skrejceļš vai Mežaparka celiņi ir fantastiski.';
    }
    if (firstName === 'mareks') {
      return currentLang === 'en' ? 'Liepaja LOC Olympic Centre, Rigas iela 133. Clean indoor turf pitch and hot showers.' : currentLang === 'ru' ? 'Олимпийский центр LOC в Лиепае на ул. Ригас 133. Отличный газон и раздевалки.' : 'Liepājas Olimpiskais centrs LOC Rīgas ielā 133. Teicams sintētiskais segums un dušas.';
    }
    if (firstName === 'martins') {
      return currentLang === 'en' ? 'Cesis Disc Golf Park near Ninieris lake. 18 pro baskets in pine woods.' : currentLang === 'ru' ? 'Парк диск-гольфа в Цесисе возле озера Ниниерис. 18 отличных корзин в сосновом лесу.' : 'Cēsu disku golfa parks pie Niniera ezera. 18 teicami grozi skaistā priežu mežā.';
    }
    return currentLang === 'en' ? 'Check the Map section on the site to see matching venues nearby.' : 'Apskati sadaļu Karte vietnē, lai redzētu tuvākos verificētos sporta laukumus.';
  }

  // 4. Equipment, rackets, balls
  if (/raket|inventar|bumb|slid|diski|cimdi|gear|racket|ball|apav/.test(raw)) {
    if (firstName === 'karlis') {
      return currentLang === 'en' ? 'I have an extra Wilson racket and fresh Dunlop balls, so no worries if you need gear!' : currentLang === 'ru' ? 'У меня есть запасная ракетка Wilson и банка новых мячей Dunlop, инвентарь не проблема!' : 'Man ir rezerves Wilson rakete un svaiga Dunlop Fort bumbiņu bundža, tā kā par ekipējumu nav jāuztraucas!';
    }
    if (firstName === 'elina') {
      return currentLang === 'en' ? 'I will bring Head Padel Pro balls! Rackets can also be rented at the club desk for 3 EUR.' : currentLang === 'ru' ? 'Мячи Head Padel Pro возьму я! Ракетку можно взять на ресепшене клуба за 3 EUR.' : 'Bumbiņas (Head Padel Pro) paņemšu es! Raketi var iznomāt klubā uz vietas par 3 EUR.';
    }
    if (firstName === 'roberts') {
      return currentLang === 'en' ? 'I bring a Wilson Evolution size 7 ball. Just make sure to bring indoor sneakers!' : currentLang === 'ru' ? 'Мяч Wilson Evolution 7 размера у меня есть. Главное возьми обувь для зала!' : 'Paņemšu Wilson Evolution bumbu. Galvenais paņem maiņas sporta apavus zālei!';
    }
    if (firstName === 'martins') {
      return currentLang === 'en' ? 'I have 12 discs in my bag and will gladly lend you a driver and putter. No need to buy anything!' : currentLang === 'ru' ? 'У меня в сумке 12 дисков, легко одолжу драйвер и паттер. Покупать заранее ничего не нужно!' : 'Man somā ir 12 diski, droši iedošu draiveri un puteri. Iesākumam nekas pašam nav jāpērk!';
    }
    return currentLang === 'en' ? 'I have my own gear and can bring extra equipment if needed.' : 'Man ir savs inventārs un varu paņemt līdzi nepieciešamo.';
  }

  // 5. Confirmations, agreement
  if (/sarunat|der|labi|paldies|super|ok|perfect|thanks|gaidu|tiksamies/.test(raw)) {
    return currentLang === 'en' ? 'Super, confirmed! Added to my sports calendar. See you on the court!' : currentLang === 'ru' ? 'Супер, договорились! Записал в календарь. До встречи на тренировке!' : 'Super, sarunāts! Ierakstīju kalendārā. Ja kas mainās, dod ziņu tepat. Tiekamies laukumā!';
  }

  // 6. Intelligent Fallback
  return currentLang === 'en' ? `Sounds great! Up for ${sport} in ${c.city}. Which day and time works best for you?` : currentLang === 'ru' ? `Отлично! Готов к тренировке по ${sport} в ${c.city}. Какой день и время тебе удобнее?` : `Izklausās lieliski! Labprāt uzspēlētu ${sport} ${c.city}. Kura diena un laiks tev derētu?`;
}
async function fetchAiReply(mode,message,history,persona,platformData=SPORTABIEDRS_AI_KNOWLEDGE_GRAPH){
 try{
  const res=await apiFetch('ai-chat',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({mode,message,history,persona,lang:currentLang,platformData:{venues:platformData.venues(),products:platformData.products()}})});
  if(!res||!res.ok)return null;
  const data=await res.json();
  return typeof data?.reply==='string'&&data.reply.trim()?data.reply.trim():null;
 }catch{return null}
}
const sbSleep=(ms)=>new Promise(r=>setTimeout(r,ms));
function sendDM(e){
  e.preventDefault();
  const input=document.getElementById('chatInput'),text=input.value.trim();
  if(!text)return;
  const idx=activeDM;
  const contact=DM_CONTACTS[idx];
  const historyForAi=DM_HISTORY[idx].slice(-8).map(m=>({from:m.from,text:m.text}));
  const persona={name:contact.name,sport:sportLabel(contact.sport),city:contact.city,level:contact.level,context:AI_PARTNER_CONTEXTS[contact.name]?.systemPrompt||''};
  DM_HISTORY[idx].push({from:'me',text});
  saveDM();
  renderDM(true);
  input.value='';
  (async()=>{
    const replyDelay = 1200 + Math.floor(Math.random() * 800);
    const[aiReply]=await Promise.all([fetchAiReply('partner',text,historyForAi,persona),sbSleep(replyDelay)]);
    const reply=aiReply||dmReply(contact,text);
    DM_HISTORY[idx].push({from:'them',text:reply});
    saveDM();
    if(activeDM===idx){
      renderDM(false);
      initDM();
    } else {
      if(!window.DM_UNREAD_STATE) window.DM_UNREAD_STATE = [];
      window.DM_UNREAD_STATE[idx] = true;
      updateNavMsgBadge();
      showIncomingDMBanner(contact, reply);
      initDM();
    }
  })();
}

function bestProduct(q){
 const n=norm(q);
 const aliases={
  'casall':['casall','yoga','mat','balance','4mm','yoga mat balance','casall yoga mat'],
  'wilson pro staff':['prostaff','pro staff','wilson','97','v14'],
  'head radical':['head','radical','mp'],
  'technical viper':['babolat','technical','viper'],
  'adipower':['adidas','adipower','multiweight'],
  'garmin':['garmin','forerunner','265'],
  'trek marlin':['trek','marlin','bike','velosipeds'],
  'bauer':['bauer','supreme','m5','skates','slidas'],
  'ccm tacks':['ccm','tacks','as580','slidas'],
  'everlast':['everlast','nevatear','boksa','maiss'],
  'buzzz':['discraft','buzzz']
 };
 let best=null,bestScore=0;
 for(const p of PRODUCTS){
  const full=norm(`${p.name} ${p.brand} ${p.id} ${p.desc}`);
  const tokens=n.split(' ').filter(x=>x.length>=2);
  let score=0;
  tokens.forEach(t=>{if(full.includes(t))score+=t.length>=5?5:3});
  if(n.includes(norm(p.brand)))score+=8;
  Object.values(aliases).forEach(a=>{const hits=a.filter(x=>n.includes(norm(x))).length;if(hits>=2&&a.some(x=>full.includes(norm(x))))score+=hits*4});
  if(score>bestScore){best=p;bestScore=score}
 }
 return bestScore>=7?best:null;
}
function venueMatches(q){const n=norm(q);let list=VENUES.slice();const cities=[...new Set(VENUES.map(v=>v.city))];const city=cities.find(c=>n.includes(norm(c)));if(city)list=list.filter(v=>norm(v.city)===norm(city));const sports=[['tenis','tenis'],['padel','padel'],['basketbol','basketbol'],['futbol','futbol'],['hokej','hokej'],['volejbol','volejbol'],['bokss','bokss'],['peld','peldesana'],['skries','skriesana'],['velo','velosports'],['fitness','fitnesa'],['disku','disku golfs'],['badminton','badminton'],['galda tenis','galda teniss'],['kapsan','klinšu kāpšana'],['džudo','džudo'],['piklbol','piklbols'],['vieglatlet','vieglatlētika'],['joga','joga'],['golfs','golfs'],['ekstrem','ekstrem']];const sp=sports.find(x=>n.includes(x[0]));if(sp)list=list.filter(v=>norm(v.sport).includes(norm(sp[1])));return list.sort((a,b)=>(b.rating||0)-(a.rating||0))}
function botAnswer(q){
 const n=norm(q);
 if(!n)return currentLang==='en'?'Tell me what you are looking for: a product, venue, price, delivery option or how the site works.':currentLang==='ru'?'Напишите, что именно нужно: товар, место, цена, доставка или помощь по сайту.':'Pasaki, ko meklē: preci, sporta vietu, cenu, piegādi vai palīdzību ar vietni.';
 if(/^(sveik|cau|labdien|hello|hey|привет)/.test(n))return currentLang==='en'?'Hi! I can help you find a sports partner, venue or product, and explain how the site works.':currentLang==='ru'?'Привет! Я помогу найти партнёра, спортивное место или товар и объясню, как пользоваться сайтом.':'Sveiks! Varu palīdzēt atrast biedru, sporta vietu vai preci un izskaidrot, kā izmantot vietni.';
 if(/^(kas|ko|kaip).*(viet|kart|map)|karte|kartē|kartes|map|maps|location|vietas/.test(n))return currentLang==='en'?'Open “Places” to browse the map. You can filter by sport, city and price, click a marker, open the venue and use the booking action where it is available.':currentLang==='ru'?'Открой «Места», чтобы посмотреть карту. Можно фильтровать по спорту, городу и цене, нажать на маркер и открыть место, а где доступно, начать бронирование.':'Atver “Vietas”, lai apskatītu karti. Vari filtrēt pēc sporta, pilsētas un cenas, noklikšķināt uz atzīmes un atvērt vietu, bet pieejamām vietām sākt rezervāciju.';
 if(/rezerv|book|booking|slot|laiks.*pieej|available.*time|брони/.test(n))return currentLang==='en'?'For bookable venues, open the place and choose a date and available time. The checkout asks you to sign in when required and starts payment only after the slot is still available.':currentLang==='ru'?'Для доступных мест открой площадку, выбери дату и свободное время. При необходимости сайт попросит войти, а оплату начнёт только после повторной проверки слота.':'Rezervējamai vietai atver sporta vietu, izvēlies datumu un pieejamu laiku. Ja vajag, vietne lūgs ielogoties un pirms apmaksas vēlreiz pārbaudīs, vai laiks ir brīvs.';
 if(/valod|language|english|angļu|russian|kriev|язык/.test(n))return currentLang==='en'?'Use the language control in the top-right corner. The site supports Latvian, English and Russian.':currentLang==='ru'?'Используй переключатель языка справа сверху. Доступны латышский, английский и русский.':'Izmanto valodas izvēlni augšā pa labi. Pieejama latviešu, angļu un krievu valoda.';
 if(/groz.*(tukš|empty)|cart.*empty/.test(n)&&!CART.length)return currentLang==='en'?'Your cart is empty. Open the Shop and add something you like.':currentLang==='ru'?'Корзина пуста. Открой «Магазин» и добавь понравившийся товар.':'Grozs ir tukšs. Atver “Veikalu” un pievieno sev interesējošo preci.';
 if(/groz|cart|корзин/.test(n))return currentLang==='en'?`There ${cartCount()===1?'is':'are'} ${cartCount()} item${cartCount()===1?'':'s'} in your cart, worth ${euro(cartSubtotal())}. Open the cart to change quantity or continue to checkout.`:currentLang==='ru'?`В корзине ${cartCount()} товар${cartCount()===1?'':'а'} на сумму ${euro(cartSubtotal())}. Открой корзину, чтобы изменить количество или перейти к оформлению.`:`Grozā ir ${cartCount()} ${cartCount()===1?'prece':'preces'} par ${euro(cartSubtotal())}. Atver grozu, lai mainītu daudzumu vai dotos uz kasi.`;
 const p=bestProduct(n);
 if(p){if(/cik|cena|maks|eur|price|cost|сколько|цена/.test(n))return currentLang==='en'?`${p.name} costs ${euro(p.price)}. You can add it to the cart or buy it now from the Shop.`:currentLang==='ru'?`${p.name} стоит ${euro(p.price)}. Добавь товар в корзину или купи его сразу в разделе «Магазин».`:`${p.name} maksā ${euro(p.price)}. Vari ielikt grozā vai pirkt uzreiz sadaļā “Veikals”.`;return `${p.name}: ${p.desc} ${currentLang==='en'?'Price':''} ${euro(p.price)}.`;}
 if(/lēt|let|cheap|budzet|zem.*eur|дешев|бюджет/.test(n)){const a=[...PRODUCTS].sort((a,b)=>a.price-b.price).slice(0,5);return currentLang==='en'?'The five lowest-priced items are: '+a.map(p=>`${p.name}: ${euro(p.price)}`).join('; ')+'.':currentLang==='ru'?'Пять самых дешёвых товаров: '+a.map(p=>`${p.name}: ${euro(p.price)}`).join('; ')+'.':'Piecas lētākās preces: '+a.map(p=>`${p.name}: ${euro(p.price)}`).join('; ')+'.';}
 const vm=venueMatches(n);
 if(vm.length&&(/kur|vieta|sport|tenis|padel|basket|futbol|hokej|peld|gym|fitness|клуб|мест|спорт/.test(n))){const top=vm.slice(0,3);return currentLang==='en'?`I found ${vm.length} matching venues. For example: ${top.map(v=>`${v.name} in ${v.city} (${v.price})`).join('; ')}. Open the Map to see them.`:currentLang==='ru'?`Я нашёл ${vm.length} подходящих мест. Например: ${top.map(v=>`${v.name}: ${v.city} (${v.price})`).join('; ')}. Открой карту, чтобы посмотреть их.`:`Atradu ${vm.length} piemērotas vietas. Piemēram: ${top.map(v=>`${v.name}: ${v.city} (${v.price})`).join('; ')}. Atver Karti, lai tās apskatītu.`;}
 if(/groz|cart|корзин/.test(n))return currentLang==='en'?'Your cart stays saved in this browser. Add an item, then choose “View cart” and continue to checkout.':currentLang==='ru'?'Корзина сохраняется в этом браузере. Добавь товар, затем открой корзину и перейди к оформлению заказа.':'Grozs tiek saglabāts šajā pārlūkā. Pievieno preci, izvēlies “Skatīt grozu” un turpini uz kasi.';
 if(/pieg|omniva|pakomat|delivery|достав|постамат/.test(n))return currentLang==='en'?'Checkout offers Omniva parcel-machine delivery (€2.99) or courier delivery (€4.99).':currentLang==='ru'?'При оформлении доступны Omniva (2,99 €) или курьерская доставка (4,99 €).':'Pasūtījumā vari izvēlēties Omniva pakomātu (2,99 €) vai kurjeru (4,99 €).';
 if(/clerk|login|signin|register|kont|ienāk|reģistr|войти|регистра/.test(n))return currentLang==='en'?'Use Sign in or Register in the top-right corner. Authentication is handled by Clerk.':currentLang==='ru'?'Нажми «Войти» или «Регистрация» сверху справа. Аутентификацию обеспечивает Clerk.':'Augšā pa labi izvēlies “Ienākt” vai “Reģistrēties”. Autentifikāciju nodrošina Clerk.';
 return currentLang==='en'?'I can help with product prices, venues, sports, delivery, the cart, sign-in and how the main features work. Ask me a specific question.':currentLang==='ru'?'Я могу помочь с товарами, ценами, спортивными местами, доставкой, корзиной, входом и основными функциями сайта. Задай конкретный вопрос.':'Varu palīdzēt ar precēm, cenām, sporta vietām, piegādi, grozu, ielogošanos un galvenajām vietnes funkcijām. Uzdod konkrētu jautājumu.';
}
function chatbotGreeting(){return currentLang==='en'?'Hi! What are you looking for: a person to train with, a place, a product or help with the site?':currentLang==='ru'?'Привет! Что ищешь: партнёра для тренировок, место, товар или помощь по сайту?':'Sveiks! Ko šodien meklē: sporta biedru, vietu, preci vai palīdzību ar vietni?'}
function renderChatbotQuickChips(){
 const body=document.getElementById('chatbotBody');
 if(!body||document.getElementById('chatbotQuickChipsWrap'))return;
 const wrap=document.createElement('div');
 wrap.id='chatbotQuickChipsWrap';
 wrap.className='chatbot-quick-chips';
 const chips=currentLang==='en'?[
  {label:'Padel courts in Rīga',q:'where are padel courts in riga'},
  {label:'Find a tennis partner',q:'looking for tennis partner'},
  {label:'Omniva delivery',q:'how does omniva shipping work'},
  {label:'Budget gear',q:'show cheap equipment'}
 ]:currentLang==='ru'?[
  {label:'Падел-корты',q:'где корты для падел'},
  {label:'Партнёр для тенниса',q:'ищу партнера для тенниса'},
  {label:'Доставка Omniva',q:'как работает доставка omniva'},
  {label:'Недорогой инвентарь',q:'покажи недорогой инвентарь'}
 ]:[
  {label:'Padel korti Rīgā',q:'kur ir padel korti'},
  {label:'Tenisa biedrs',q:'meklēju tenisa partneri'},
  {label:'Omniva piegāde',q:'kā notiek omniva piegāde'},
  {label:'Lēts inventārs',q:'lētākas inventāra preces'}
 ];
 wrap.innerHTML=chips.map(c=>`<button type="button" class="chatbot-quick-chip" data-q="${esc(c.q)}">${esc(c.label)}</button>`).join('');
 body.appendChild(wrap);
 body.scrollTop=body.scrollHeight;
}

/* chatbot-quick-chip delegation */
document.addEventListener('click', (e) => {
  const chip = e.target.closest('.chatbot-quick-chip');
  if (chip && chip.dataset.q) {
    triggerBotQuickQuery(chip.dataset.q);
  }
});

function triggerBotQuickQuery(q){
 const input=document.getElementById('chatbotInput');
 if(!input)return;
 input.value=q;
 const form=document.querySelector('.chatbot-input');
 if(form){
   form.dispatchEvent(new Event('submit',{cancelable:true}));
 }
}
function toggleChatbot(force){
 const panel=document.getElementById('chatbotPanel'),fab=document.querySelector('.chatbot-fab');if(!panel)return;const open=typeof force==='boolean'?force:!panel.classList.contains('open');panel.classList.toggle('open',open);if(fab)fab.setAttribute('aria-expanded',String(open));if(open){const body=document.getElementById('chatbotBody');if(body&&!body.children.length){addBot(chatbotGreeting());renderChatbotQuickChips();}setTimeout(()=>document.getElementById('chatbotInput')?.focus(),100)}}
function closeChatbotPanel(){toggleChatbot(false)}
function addBot(t,m=false){const b=document.getElementById('chatbotBody');if(!b)return;const d=document.createElement('div');d.className=`bubble ${m?'me':'them'}`;d.textContent=t;b.appendChild(d);b.scrollTop=b.scrollHeight}
function sendBotMsg(e){
  e.preventDefault();
  const i=document.getElementById('chatbotInput'),q=i.value.trim();
  if(!q)return;
  addBot(q,true);
  i.value='';
  const b=document.getElementById('chatbotBody');
  const typingEl=document.createElement('div');
  typingEl.className='bubble them typing-dots';
  typingEl.id='botTypingBubble';
  typingEl.innerHTML='<span class="typing-dot"></span><span class="typing-dot"></span><span class="typing-dot"></span>';
  b.appendChild(typingEl);
  b.scrollTop=b.scrollHeight;
  const historyForAi=(window.CHATBOT_HISTORY||[]).slice(-8);
  (async()=>{
    const[aiReply]=await Promise.all([fetchAiReply('support',q,historyForAi,null),sbSleep(500)]);
    const ind=document.getElementById('botTypingBubble');
    if(ind)ind.remove();
    try{
      const reply=aiReply||botAnswer(q);
      addBot(reply);
      (window.CHATBOT_HISTORY=window.CHATBOT_HISTORY||[]).push({from:'me',text:q},{from:'them',text:reply});
    }catch(err){
      console.error('Chatbot answer',err);
      addBot(currentLang==='en'?'I can help with sports partners, venues, shop products, and bookings. What would you like to know?':'Varu palīdzēt ar sporta biedriem, vietām, preču cenām un rezervācijām. Ko vēlies uzzināt?');
    }
  })();
}

function scrollToSection(id){
  const targetId = (id || '').replace(/^#/, '');
  const section = document.getElementById(targetId) || (targetId === 'biedri' ? document.getElementById('finder') : null);
  if (!section) return;

  const header = document.querySelector('.site-header');
  const headerH = header ? header.offsetHeight : 72;

  const head = section.querySelector('.section-head, .finder-intro, h2') || section;
  const headRect = head.getBoundingClientRect();
  const targetScrollY = Math.max(0, Math.round(headRect.top + window.pageYOffset - headerH - 18));

  window.scrollTo({
    top: targetScrollY,
    behavior: 'smooth'
  });

  const resolvedHash = targetId === 'biedri' ? 'finder' : targetId;
  if (history.pushState) {
    history.pushState(null, '', '#' + resolvedHash);
  }
}

function go(id){ scrollToSection(id); }
const LEGAL_CONTENT={
 terms:{eyebrow:'Pirkumi',title:'Pirkumu noteikumi',html:`<p><strong>Pirms publicēšanas jāievieto faktiskā pārdevēja informācija:</strong> juridiskais nosaukums, reģistrācijas numurs, juridiskā adrese, e-pasts un tālrunis.</p><h4>Pasūtīšana</h4><p>Pirms pasūtījuma pabeigšanas pircējs redz preci, cenu, izvēlēto piegādes veidu un pilno summu. Pēc pasūtījuma Stripe gadījumā apmaksa tiek apstrādāta drošajā Stripe Checkout vidē.</p><h4>Atteikuma tiesības</h4><p>Piemērojamajiem distances pirkumiem patērētājam parasti ir 14 dienu atteikuma tiesības no preces saņemšanas dienas. Pārdevējam jānodrošina arī informācija par atteikuma kārtību un atteikuma veidlapa.</p><h4>Izņēmumi</h4><p>Atteikuma tiesībām ir likumā noteikti izņēmumi, piemēram, noteiktām precēm, kas izgatavotas pēc pasūtījuma vai kuru īpašības pēc atvēršanas nepieļauj atgriešanu.</p>`},
 delivery:{eyebrow:'Piegāde',title:'Piegāde un atgriešana',html:`<h4>Piegādes veidi</h4><ul><li>Omniva pakomāts - 2,99 €.</li><li>Kurjers līdz durvīm - 4,99 €.</li></ul><p>SportaBiedrs.lv šobrīd nav atsevišķas fiziskas veikala adreses, tāpēc veikala izņemšana nav pieejama.</p><h4>Piegādes termiņš</h4><p>Pasūtījuma laikā tiek norādīts sagaidāmais piegādes veids un termiņš. Ja nav panākta cita vienošanās, distances pirkumam piemērojamie noteikumi paredz preces piegādi ne vēlāk kā 30 dienu laikā.</p><h4>Atgriešana</h4><p>Patērētājam pēc atteikuma paziņošanas prece parasti jānosūta atpakaļ 14 dienu laikā. Pārdevējam nauda jāatmaksā 14 dienu laikā no atteikuma saņemšanas, taču tiesību aktos paredzētajos gadījumos atmaksu var aizturēt līdz preces saņemšanai atpakaļ vai nosūtīšanas apliecinājumam.</p>`},
 privacy:{eyebrow:'Privātums',title:'Privātuma politika',html:`<p>Šis prototips var apstrādāt konta, saziņas, pasūtījuma, piegādes un tehniskos datus, kas nepieciešami pakalpojuma nodrošināšanai.</p><h4>Pakalpojumu sniedzēji</h4><p>Autentifikācijai tiek izmantots Clerk, bet tiešsaistes maksājumiem Stripe. Pirms publiskas palaišanas jānorāda faktiskie datu pārziņa rekvizīti, apstrādes tiesiskais pamats, glabāšanas termiņi un datu subjektu kontaktpunkts.</p><h4>Tavas tiesības</h4><p>Par piekļuvi, labošanu, dzēšanu vai citiem datu aizsardzības jautājumiem jābūt norādītam faktiskā pārziņa kontaktam.</p>`},
 cookies:{eyebrow:'Privātums',title:'Sīkdatņu politika',html:`<p>Nepieciešamās sīkdatnes nodrošina vietnes darbību, piemēram, grozu, valodu, sesijas un drošības funkcijas. Neobligātās statistikas sīkdatnes drīkst ieslēgt tikai pēc lietotāja izvēles.</p><h4>Izvēles maiņa</h4><p>Sīkdatņu izvēli var mainīt vietnes kājenē. Pirms publiskas palaišanas jāpielāgo kategorijas faktiskajiem analītikas un mārketinga rīkiem.</p>`}
};
const LEGAL_CONTENT_I18N={
 en:{terms:{eyebrow:'Purchases',title:'Purchase terms',html:`<p><strong>Before launch, the seller’s real business details must be added:</strong> legal name, registration number, legal address, email and phone.</p><h4>Ordering</h4><p>Before completing an order, the buyer sees the product, price, delivery method and total. For Stripe orders, payment is processed in Stripe Checkout.</p><h4>Withdrawal rights</h4><p>For applicable distance purchases, consumers generally have a 14-day withdrawal period from receipt. The seller must provide the withdrawal procedure and form.</p><h4>Exceptions</h4><p>Withdrawal rights have statutory exceptions, including certain made-to-order goods or goods whose nature prevents return after opening.</p>`},delivery:{eyebrow:'Delivery',title:'Delivery & returns',html:`<h4>Delivery methods</h4><ul><li>Omniva parcel machine: €2.99.</li><li>Courier to your door: €4.99.</li></ul><p>SportaBiedrs.lv currently has no physical shop address, so store pickup is not available.</p><h4>Delivery time</h4><p>The expected delivery method and timing are shown during the order. Unless otherwise agreed, applicable distance-sale rules generally require delivery within 30 days.</p><h4>Returns</h4><p>After withdrawal, the consumer generally sends the goods back within 14 days. Refunds are generally due within 14 days, subject to statutory conditions.</p>`},privacy:{eyebrow:'Privacy',title:'Privacy policy',html:`<p>This prototype may process account, messaging, order, delivery and technical data needed to provide the service.</p><h4>Service providers</h4><p>Clerk is used for authentication and Stripe for online payments. Before public launch, the real controller details, legal basis, retention periods and data-subject contact must be added.</p><h4>Your rights</h4><p>A real controller contact must be provided for requests about access, correction, deletion and other data-protection rights.</p>`},cookies:{eyebrow:'Privacy',title:'Cookie policy',html:`<p>Necessary storage supports functions such as the cart, language, sessions and security. Optional analytics should only be enabled after user choice.</p><h4>Changing your choice</h4><p>Cookie choices can be changed from the footer. Before launch, the categories should be matched to the actual analytics and marketing tools.</p>`}},
 ru:{terms:{eyebrow:'Покупки',title:'Условия покупки',html:`<p><strong>До запуска необходимо указать реальные данные продавца:</strong> юридическое название, регистрационный номер, адрес, e-mail и телефон.</p><h4>Заказ</h4><p>Перед оформлением заказа покупатель видит товар, цену, способ доставки и итоговую сумму. При оплате Stripe обработка выполняется в Stripe Checkout.</p><h4>Право на отказ</h4><p>Для применимых дистанционных покупок обычно действует 14-дневный срок отказа с момента получения товара. Продавец должен предоставить порядок отказа и форму.</p><h4>Исключения</h4><p>Право на отказ имеет предусмотренные законом исключения, в том числе для некоторых товаров, изготовленных на заказ.</p>`},delivery:{eyebrow:'Доставка',title:'Доставка и возврат',html:`<h4>Способы доставки</h4><ul><li>Постамат Omniva: 2,99 €.</li><li>Курьер до двери: 4,99 €.</li></ul><p>У SportaBiedrs.lv сейчас нет отдельного физического магазина, поэтому самовывоз недоступен.</p><h4>Срок доставки</h4><p>Способ и ожидаемый срок доставки показываются при оформлении. Если не согласовано иное, применимые правила дистанционной торговли обычно предусматривают доставку не позднее 30 дней.</p><h4>Возврат</h4><p>После уведомления об отказе товар обычно необходимо отправить обратно в течение 14 дней. Возврат средств обычно производится в течение 14 дней с учётом предусмотренных законом условий.</p>`},privacy:{eyebrow:'Конфиденциальность',title:'Политика конфиденциальности',html:`<p>Прототип может обрабатывать данные аккаунта, переписки, заказа, доставки и технические данные, необходимые для работы сервиса.</p><h4>Поставщики</h4><p>Clerk используется для аутентификации, а Stripe используется для онлайн-платежей. До публичного запуска необходимо добавить реальные данные контролёра, правовое основание, сроки хранения и контакт для запросов.</p><h4>Ваши права</h4><p>Должен быть указан реальный контакт для запросов о доступе, исправлении, удалении и других правах субъекта данных.</p>`},cookies:{eyebrow:'Конфиденциальность',title:'Политика cookie',html:`<p>Необходимое локальное хранение поддерживает корзину, язык, сессии и функции безопасности. Необязательную аналитику следует включать только после выбора пользователя.</p><h4>Изменение выбора</h4><p>Настройки cookie можно изменить в нижней части сайта. Перед запуском категории должны соответствовать фактическим инструментам аналитики и маркетинга.</p>`}}
};
function openLegal(key){const x=(LEGAL_CONTENT_I18N[currentLang]&&LEGAL_CONTENT_I18N[currentLang][key])||LEGAL_CONTENT[key];if(!x)return;document.getElementById('legalModal').dataset.key=key;document.getElementById('legalEyebrow').textContent=x.eyebrow;document.getElementById('legalTitle').textContent=x.title;document.getElementById('legalBody').innerHTML=x.html;document.getElementById('legalModal').classList.add('open')}

async function openCheckout(){if(!CART.length){toast(currentLang==='en'?'Cart is empty.':currentLang==='ru'?'Корзина пуста.':'Grozs ir tukšs.');return}toggleCart(false);clearCheckoutError();document.getElementById('checkoutModal').classList.add('open');document.getElementById('checkoutStep1').hidden=false;document.getElementById('checkoutStep2').hidden=true;document.getElementById('checkoutStep3').hidden=true;populateLockerCities();updateCheckoutFields();renderCheckoutMini();loadOmnivaLocations().catch(()=>{})}
function closeModal(id){document.getElementById(id)?.classList.remove('open')}
function setDelivery(v){document.getElementById('coDelivery').value=v;updateCheckoutFields()}
function renderLockerCityOptions(){const city=document.getElementById('coLockerCity');if(!city)return;const current=city.value;city.innerHTML='';Object.keys(OMNIVA_LOCKERS).sort((a,b)=>a.localeCompare(b,'lv')).forEach(c=>{const o=document.createElement('option');o.value=c;o.textContent=c;city.appendChild(o)});if(current&&OMNIVA_LOCKERS[current])city.value=current;else if(city.options.length)city.selectedIndex=0;populateLockerOptions()}
function populateLockerCities(){renderLockerCityOptions()}
function populateLockerOptions(){const city=document.getElementById('coLockerCity')?.value||Object.keys(OMNIVA_LOCKERS)[0],e=document.getElementById('coLocker');if(!e)return;e.innerHTML='';(OMNIVA_LOCKERS[city]||[]).forEach(x=>{const o=document.createElement('option');o.value=x;o.textContent=x;e.appendChild(o)});filterLockerOptions()}
function filterLockerOptions(){const q=norm(document.getElementById('coLockerSearch')?.value||''),sel=document.getElementById('coLocker');if(!sel)return;[...sel.options].forEach(o=>o.hidden=!!q&&!norm(o.textContent).includes(q))}
async function loadOmnivaLocations(){const cache=safeGet('sb_omniva_lv_locations_v1',null);if(cache&&cache.savedAt&&Date.now()-cache.savedAt<12*60*60*1000&&cache.data){OMNIVA_LOCKERS=cache.data;renderLockerCityOptions();return cache.data}try{const r=await apiFetch('omniva-locations',{headers:{Accept:'application/json'}});if(!r||!r.ok)throw new Error('Omniva '+(r?r.status:404));const data=await r.json();if(data?.cities&&Object.keys(data.cities).length){OMNIVA_LOCKERS=data.cities;safeSet('sb_omniva_lv_locations_v1',{savedAt:Date.now(),data:OMNIVA_LOCKERS});renderLockerCityOptions()}return OMNIVA_LOCKERS}catch(e){try{const rf=await fetch('data/omniva-lockers.json');if(rf.ok){const data=await rf.json();if(data&&Object.keys(data).length){OMNIVA_LOCKERS=data;renderLockerCityOptions();return OMNIVA_LOCKERS}}}catch(err){}renderLockerCityOptions();return OMNIVA_LOCKERS}}
function updateCheckoutFields(){const d=document.getElementById('coDelivery')?.value||'omniva';document.getElementById('coLockerField').hidden=d!=='omniva';document.getElementById('coCourierField').hidden=d!=='courier';document.getElementById('coPay').querySelector('option[value="cash"]').disabled=d!=='courier';if(d!=='courier'&&document.getElementById('coPay').value==='cash')document.getElementById('coPay').value='stripe';const ship=d==='omniva'?2.99:4.99;document.getElementById('checkoutMiniShipping').textContent=euro(ship);renderCheckoutMini()}
function renderCheckoutMini(){const box=document.getElementById('checkoutMiniCart');if(!box)return;box.innerHTML=CART.map(i=>{const p=productById(i.id);const unitPrice=i.price||p?.price||0;const title=p?p.name:i.id;const variantTag=i.variantTitle?` (${i.variantTitle})`:'';return `<div class="mini-line"><span>${esc(title)}${esc(variantTag)} × ${i.qty}</span><strong>${euro(unitPrice*i.qty)}</strong></div>`}).join('');const d=document.getElementById('coDelivery')?.value||'omniva';const ship=d==='omniva'?2.99:4.99;document.getElementById('checkoutMiniTotal').textContent=euro(cartSubtotal()+ship);document.getElementById('checkoutCartCount').textContent=cartCount()}
function checkoutData(){const delivery=document.getElementById('coDelivery').value,pay=document.getElementById('coPay').value;const payload={name:document.getElementById('coName').value.trim(),email:document.getElementById('coEmail').value.trim(),delivery,payment:pay};if(delivery==='omniva')payload.destination=document.getElementById('coLocker').value;if(delivery==='courier')payload.destination=document.getElementById('coCourierAddress').value.trim();return payload}
function markFieldError(id,message){const el=document.getElementById(id);if(!el)return;const field=el.closest('.field')||el.parentElement;field?.classList.add('is-invalid');let e=field?.querySelector('.field-error');if(!e){e=document.createElement('small');e.className='field-error';field?.appendChild(e)}e.textContent=message;el.setAttribute('aria-invalid','true')}
function clearFieldError(id){const el=document.getElementById(id);if(!el)return;const field=el.closest('.field')||el.parentElement;field?.classList.remove('is-invalid');field?.querySelector('.field-error')?.remove();el.removeAttribute('aria-invalid')}
function clearCheckoutFieldErrors(){['coName','coEmail','coLocker','coCourierAddress'].forEach(clearFieldError)}
function reviewOrder(){clearCheckoutFieldErrors();const terms=document.getElementById('coTerms');if(!terms||!terms.checked){toast(currentLang==='en'?'Confirm the purchase terms and delivery/withdrawal information.':currentLang==='ru'?'Подтвердите условия покупки и информацию о доставке/отказе.':'Apstiprini Pirkumu noteikumus un piegādes/atteikuma informāciju.');terms?.focus();return}const d=checkoutData();if(!d.name){markFieldError('coName',currentLang==='en'?'Enter your name and surname.':currentLang==='ru'?'Введите имя и фамилию.':'Ievadi vārdu un uzvārdu.');document.getElementById('coName')?.focus();return} if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.email)){markFieldError('coEmail',currentLang==='en'?'Enter a valid email.':currentLang==='ru'?'Введите действительный e-mail.':'Ievadi derīgu e-pastu.');document.getElementById('coEmail')?.focus();return}if(d.delivery==='omniva'&&!d.destination){markFieldError('coLocker',currentLang==='en'?'Choose an Omniva parcel machine.':currentLang==='ru'?'Выберите постамат Omniva.':'Izvēlies Omniva pakomātu.');document.getElementById('coLocker')?.focus();return}if(d.delivery==='courier'&&!d.destination){markFieldError('coCourierAddress',currentLang==='en'?'Enter the delivery address.':currentLang==='ru'?'Введите адрес доставки.':'Ievadi piegādes adresi.');document.getElementById('coCourierAddress')?.focus();return}document.getElementById('reviewDelivery').textContent=d.delivery==='omniva'?`Omniva · ${d.destination}`:'Kurjers · '+d.destination;document.getElementById('reviewPayment').textContent=d.payment==='cash'?(currentLang==='en'?'Cash to courier':currentLang==='ru'?'Наличными курьеру':'Skaidra nauda pie kurjera'):'Stripe Checkout';document.getElementById('reviewTotal').textContent=euro(cartSubtotal()+(d.delivery==='omniva'?2.99:4.99));document.getElementById('checkoutStep1').hidden=true;document.getElementById('checkoutStep2').hidden=false;document.getElementById('stepDot2').classList.add('active')}
function backToStep1(){clearCheckoutError();document.getElementById('checkoutStep2').hidden=true;document.getElementById('checkoutStep1').hidden=false}
function clearCheckoutError(){const el=document.getElementById('checkoutError');if(el){el.hidden=true;el.textContent=''}}
function showCheckoutError(message,code){const el=document.getElementById('checkoutError');const text=code?`${message} (${code})`:message;if(el){el.textContent=text;el.hidden=false;el.scrollIntoView({block:'nearest',behavior:'smooth'})}else toast(text)}
async function confirmOrder(){clearCheckoutError();const d=checkoutData();const items=CART.map(i=>({id:i.id,key:i.key,variant:i.variant,variantTitle:i.variantTitle,price:i.price,quantity:i.qty}));const btn=document.querySelector('#checkoutStep2 .checkout-primary');if(d.payment==='cash'){const order='SB-'+Math.floor(100000+Math.random()*899999);document.getElementById('checkoutStep2').hidden=true;document.getElementById('checkoutStep3').hidden=false;document.getElementById('stepDot3').classList.add('active');document.getElementById('checkoutStep3').querySelector('h3').textContent=currentLang==='en'?'Order accepted':currentLang==='ru'?'Заказ принят':'Pasūtījums pieņemts';document.getElementById('checkoutStep3').querySelector('p').textContent=currentLang==='en'?`Order No. ${order}. The courier will contact you before delivery. This is a demo confirmation; email delivery requires a server email service.`:currentLang==='ru'?`Заказ № ${order}. Курьер свяжется с вами перед доставкой. Это демо-подтверждение; отправка e-mail требует серверного почтового сервиса.`:`Pasūtījuma Nr. ${order}. Kurjers sazināsies pirms piegādes. Šis ir demo pasūtījuma apstiprinājums; e-pasta nosūtīšanai nepieciešams servera e-pasta pakalpojums.`;CART=[];saveCart();return}if(btn){btn.disabled=true;btn.setAttribute('aria-busy','true');btn.textContent=currentLang==='en'?'Opening Stripe Checkout…':currentLang==='ru'?'Открывается Stripe Checkout…':'Atver Stripe Checkout…'}try{const r=await apiFetch('create-checkout-session',{method:'POST',headers:{'Content-Type':'application/json',Accept:'application/json'},body:JSON.stringify({items,customer:{name:d.name,email:d.email},delivery:{method:d.delivery,destination:d.destination,payment:'stripe'},lang:currentLang})});if(!r)throw Object.assign(new Error(t('checkoutUnavailable')),{code:'CHECKOUT_NOT_DEPLOYED'});let data={};try{data=await r.json()}catch{}if(!r.ok||!data.url){const code=data.code||`HTTP_${r.status}`;throw Object.assign(new Error(data.error||'Stripe Checkout sesiju neizdevās izveidot.'),{code})}window.location.assign(data.url)}catch(err){if(err?.code==='CHECKOUT_NOT_DEPLOYED')console.warn('[SportaBiedrs] checkout endpoint not deployed on this host');else console.error('Stripe Checkout error',err);showCheckoutError(err?.message||'Stripe Checkout neizdevās atvērt. Grozs nav zaudēts.',err?.code)}finally{if(btn){btn.disabled=false;btn.removeAttribute('aria-busy');btn.textContent=t('openStripe')}}}

let clerkSignInMounted = false;
let clerkSignUpMounted = false;

function closeClerkAuth(){
 const modal=document.getElementById('clerkAuthModal');
 if(!modal)return;
 modal.classList.remove('open');
 modal.setAttribute('aria-hidden','true');
 const inSlot = document.getElementById('clerkSignInSlot');
 const upSlot = document.getElementById('clerkSignUpSlot');
 if(inSlot) inSlot.style.display = 'none';
 if(upSlot) upSlot.style.display = 'none';
}

async function openClerkAuth(mode){
 const modal=document.getElementById('clerkAuthModal'),mount=document.getElementById('clerkMount'),warning=document.getElementById('clerkAuthOriginWarning');
 if(!modal||!mount)return;
 modal.classList.add('open');
 modal.setAttribute('aria-hidden','false');
 document.getElementById('clerkAuthTitle').textContent=mode==='signup'?t('signup'):t('signin');
 document.getElementById('clerkAuthEyebrow').textContent=mode==='signup'?t('authNewAccount'):t('authAccount');
 document.getElementById('clerkAuthIntro').textContent=mode==='signup'?t('authIntroSignup'):t('authIntroSignin');
 const isFile=location.protocol==='file:';
 warning.hidden=!isFile;
 if(isFile){
   mount.innerHTML='<div class="auth-file-state"><strong>Šis fails ir atvērts kā lokāls fails</strong><p>Aizver šo skatu un atver vietni caur <b>https://</b> vai palaid projektu ar <b>npx serve</b> / <b>vercel dev</b>. Clerk, Google un CAPTCHA nevar pabeigt autentifikāciju no file://.</p></div>';
   return;
 }
 if(!clerk){
   mount.innerHTML='<div class="auth-file-state"><strong>Autentifikācijas modulis ielādējas…</strong><p>Uzgaidi dažas sekundes un mēģini vēlreiz.</p></div>';
   return;
 }

 let inSlot = document.getElementById('clerkSignInSlot');
 let upSlot = document.getElementById('clerkSignUpSlot');
 if(!inSlot || !upSlot){
   mount.innerHTML = '<div id="clerkSignInSlot"></div><div id="clerkSignUpSlot" style="display:none"></div>';
   inSlot = document.getElementById('clerkSignInSlot');
   upSlot = document.getElementById('clerkSignUpSlot');
   clerkSignInMounted = false;
   clerkSignUpMounted = false;
 }

 const appearance={
   variables:{
     colorPrimary:'#121311',
     colorText:'#121311',
     colorTextSecondary:'#3b3c36',
     colorBackground:'#fbfaf6',
     colorInputBackground:'#ffffff',
     colorInputText:'#121311',
     colorNeutral:'#121311',
     colorDanger:'#d43f22',
     colorSuccess:'#2f7a4b',
     borderRadius:'2px',
     fontFamily:'Geologica, system-ui, sans-serif'
   },
   elements:{
     card:'box-shadow:none;border:1px solid #121311;border-radius:2px;width:100%;',
     headerTitle:'font-family:"Roboto Flex",Arial,sans-serif;font-stretch:50%;font-weight:850;font-size:28px;text-transform:uppercase;letter-spacing:0;',
     formButtonPrimary:'background:#121311;color:#f2f0e9;border-radius:2px;font-weight:700;text-transform:none;box-shadow:none;',
     socialButtonsBlockButton:'border:1px solid rgba(18,19,17,.24);border-radius:2px;',
     formFieldInput:'border-radius:2px;',
     footerActionLink:'color:#121311;font-weight:700;text-decoration:underline;'
   }
 };
 const common={
   appearance,
   localization:{locale:'lv-LV',custom:{signUp:{start:{actionText:'Already have an account? Sign in'}}}},
   routing:'hash',
   oauthFlow:'popup'
 };

 try{
   if(mode==='signup'){
     inSlot.style.display = 'none';
     upSlot.style.display = 'block';
     if(!clerkSignUpMounted){
       clerk.mountSignUp(upSlot,common);
       clerkSignUpMounted = true;
     }
   } else {
     upSlot.style.display = 'none';
     inSlot.style.display = 'block';
     if(!clerkSignInMounted){
       clerk.mountSignIn(inSlot,common);
       clerkSignInMounted = true;
     }
   }
 }catch(e){
   console.error('Clerk mount',e);
 }
}
async function initClerk(){
 const si=document.getElementById('clerkSignInBtn'),su=document.getElementById('clerkSignUpBtn'),out=document.getElementById('clerkSignedOut'),inside=document.getElementById('clerkSignedIn'),ub=document.getElementById('clerkUserButton');
 if(!si||!su)return;
 let tries=0;while(!window.Clerk&&tries<150){await new Promise(r=>setTimeout(r,100));tries++}
 if(!window.Clerk){si.addEventListener('click',()=>toast('Clerk vēl ielādējas.'));su.addEventListener('click',()=>toast('Clerk vēl ielādējas.'));return}
 try{
   await window.Clerk.load({
  standardBrowser:true,
  ui:window.__internal_ClerkUICtor?{ClerkUI:window.__internal_ClerkUICtor}:undefined,
    localization:{locale:'lv-LV'},
  appearance:{variables:{colorPrimary:'#121311',colorText:'#121311',colorTextSecondary:'#3b3c36',colorBackground:'#fbfaf6',colorInputBackground:'#ffffff',colorInputText:'#121311',colorNeutral:'#121311',colorDanger:'#d43f22',colorSuccess:'#2f7a4b',borderRadius:'2px',fontFamily:'Geologica, system-ui, sans-serif'},elements:{card:'box-shadow:none;border:1px solid #121311;border-radius:2px;width:100%;',headerTitle:'font-family:"Roboto Flex",Arial,sans-serif;font-stretch:50%;font-weight:850;font-size:28px;text-transform:uppercase;letter-spacing:0;',formButtonPrimary:'background:#121311;color:#f2f0e9;border-radius:2px;font-weight:700;text-transform:none;box-shadow:none;',socialButtonsBlockButton:'border:1px solid rgba(18,19,17,.24);border-radius:2px;',formFieldInput:'border-radius:2px;',footerActionLink:'color:#121311;font-weight:700;text-decoration:underline;'}}
});
   clerk=window.Clerk;
   const sync=()=>{const ok=!!clerk.isSignedIn;if(out)out.hidden=ok;if(inside)inside.hidden=!ok;if(ok&&ub&&!ub.dataset.mounted){ub.dataset.mounted='1';clerk.mountUserButton(ub,{appearance:{variables:{colorPrimary:'#121311',borderRadius:'2px',fontFamily:'Geologica, system-ui, sans-serif'}}})}};
   clerk.addListener(sync);sync();
   si.addEventListener('click',()=>openClerkAuth('signin'));
   su.addEventListener('click',()=>openClerkAuth('signup'));
 }catch(e){console.error('Clerk',e);si.addEventListener('click',()=>openClerkAuth('signin'));su.addEventListener('click',()=>openClerkAuth('signup'));}
  const clerkModal = document.getElementById('clerkAuthModal');
  if(clerkModal && !clerkModal.dataset.backdropBound){
    clerkModal.dataset.backdropBound = '1';
    clerkModal.addEventListener('click', (e) => {
      if(e.target === clerkModal) closeClerkAuth();
    });
  }
}


function initMobileNav(){
 const btn=document.getElementById('mobileNavToggle');
 const panel=document.getElementById('mobileNavPanel');
 const scrim=document.getElementById('mobileNavScrim');
 if(!btn||!panel) return;
 const close=()=>{panel.hidden=true;if(scrim)scrim.hidden=true;btn.setAttribute('aria-expanded','false');btn.setAttribute('aria-label','Atvērt izvēlni')};
 const open=()=>{panel.hidden=false;if(scrim)scrim.hidden=false;btn.setAttribute('aria-expanded','true');btn.setAttribute('aria-label','Aizvērt izvēlni')};
 btn.addEventListener('click',()=>panel.hidden?open():close());
 scrim?.addEventListener('click',close);
 panel.querySelectorAll('a').forEach(a=>a.addEventListener('click',close));
 window.addEventListener('resize',()=>{if(window.innerWidth>760) close()},{passive:true});
}

async function syncBookingMappings(){
 try{
  const response=await fetch('/api/venues',{headers:{Accept:'application/json'}});
  if(!response.ok){window.__SB_BOOKING_BACKEND_AVAILABLE=false;return;}
  const rows=await response.json();
  if(!Array.isArray(rows)||!rows.length){window.__SB_BOOKING_BACKEND_AVAILABLE=false;return;}
  window.__SB_BOOKING_BACKEND_AVAILABLE=true;
  const byName=new Map(rows.map(row=>[norm(row.name),row]));
  VENUES.forEach(v=>{
   const row=byName.get(norm(v.name));
   if(!row)return;
   v.venueId=row.id;
   v.provider=row.provider;
   v.externalVenueId=row.externalId||null;
   v.timezone=row.timezone||'Europe/Riga';
   v.courts=Array.isArray(row.courts)?row.courts:[];
   v.courtId=v.courts.length===1?String(v.courts[0].id):null;
   v.bookable=v.courts.length>0;
  });
  if(document.getElementById('venueList'))renderMap();
  if(window.__bookingVenue){
   const fresh=VENUES.find(v=>norm(v.name)===norm(window.__bookingVenue.name));
   if(fresh)window.__bookingVenue=fresh;
  }
 }catch(error){
  window.__SB_BOOKING_BACKEND_AVAILABLE=false;
  console.warn('[SportaBiedrs] booking mappings unavailable in this environment',error);
 }
}
const TRACKING_ENABLED=false;
function cookiesInit(){let stored=null;try{stored=localStorage.getItem('sb_cookie_consent')}catch{}/* any saved value counts, including legacy plain strings like "necessary" */if(!stored)document.getElementById('cookieBanner').style.display='flex'}
function acceptCookies(level){safeSet('sb_cookie_consent',{level,necessary:true,optionalTracking:false,savedAt:new Date().toISOString()});document.getElementById('cookieBanner').style.display='none';toast(currentLang==='en'?'Necessary site choices saved.':currentLang==='ru'?'Необходимые настройки сайта сохранены.':'Saglabātas nepieciešamās vietnes izvēles.')}
function syncAppView(){
  const isFinder = location.hash === '#finder' || location.hash === '#biedri';
  document.body.classList.toggle('partner-dashboard-active', isFinder);
  if(isFinder){
    partnerPage = 1;
    findPartners();
  }
}

function runInit(name,fn,{silent=true,retry=0}={}){
 try{
   fn();
   window.__sbInitErrors=window.__sbInitErrors||{};
   delete window.__sbInitErrors[name];
 }catch(err){
   console.error(`[SportaBiedrs] ${name} failed`,err);
   window.__sbInitErrors=window.__sbInitErrors||{};
   window.__sbInitErrors[name]=String(err?.message||err);
   if(retry>0){setTimeout(()=>runInit(name,fn,{silent,retry:retry-1}),650);return}
   // Never block the whole product with a generic reload message.
   // Critical modules provide their own inline recovery UI.
if(!silent)toast(currentLang==='en'?`${name} is temporarily unavailable.`:`${name} īslaicīgi nav pieejams.`);
 }
}
function initCustomHeroDropdowns(){
  const counts={};VENUES.forEach(v=>{counts[v.sportKey]=(counts[v.sportKey]||0)+1});
  const cityCounts={};VENUES.forEach(v=>{cityCounts[v.city]=(cityCounts[v.city]||0)+1});
  const configs=[
    {wrap:'wrapHeroSport',btn:'btnHeroSport',menu:'menuHeroSport',select:'hSport',text:'textHeroSport',glyph:'glyphHeroSport',isSport:true},
    {wrap:'wrapHeroCity',btn:'btnHeroCity',menu:'menuHeroCity',select:'hCity',text:'textHeroCity',glyph:'glyphHeroCity',isSport:false}
  ];
  const glyphFor=(cfg,val,size)=>cfg.isSport?sportChipIcon(val,size):cityChipIcon(size);
  const closeAll=(except)=>{
    configs.forEach(cfg=>{
      const wrap=document.getElementById(cfg.wrap),menu=document.getElementById(cfg.menu),btn=document.getElementById(cfg.btn);
      if(!wrap||!menu||!btn||wrap===except)return;
      menu.hidden=true;wrap.classList.remove('is-open','open-up');btn.setAttribute('aria-expanded','false');
    });
  };
  function build(cfg){
    const menu=document.getElementById(cfg.menu),select=document.getElementById(cfg.select),textEl=document.getElementById(cfg.text),glyphEl=document.getElementById(cfg.glyph);
    if(!menu||!select)return;
    const current=select.value;
    menu.innerHTML=[...select.options].map((o,i)=>{
      const sel=o.value===current;
      const n=cfg.isSport?(o.value?counts[o.value]:VENUES.length):(o.value?cityCounts[o.value]:VENUES.length);
      return `<button type="button" class="custom-dropdown-item${sel?' selected':''}" role="option" id="${cfg.menu}-opt-${i}" data-value="${esc(o.value)}" aria-selected="${sel}" tabindex="-1"><span class="item-glyph">${glyphFor(cfg,o.value,cfg.isSport?24:22)}</span><span class="item-label">${esc(o.textContent)}</span>${n?`<span class="item-count">${n}</span>`:''}</button>`;
    }).join('');
    const selOpt=select.selectedOptions[0];
    if(textEl&&selOpt)textEl.textContent=selOpt.textContent;
    if(glyphEl)glyphEl.innerHTML=glyphFor(cfg,current,24);
  }
  configs.forEach(cfg=>{
    const wrap=document.getElementById(cfg.wrap),btn=document.getElementById(cfg.btn),menu=document.getElementById(cfg.menu),select=document.getElementById(cfg.select);
    if(!wrap||!btn||!menu||!select)return;
    build(cfg);
    const items=()=>[...menu.querySelectorAll('.custom-dropdown-item')];
    const open=()=>{
      closeAll(wrap);
      const rect=btn.getBoundingClientRect();
      const below=window.innerHeight-rect.bottom;
      wrap.classList.toggle('open-up',below<260&&rect.top>below);
      menu.hidden=false;wrap.classList.add('is-open');btn.setAttribute('aria-expanded','true');
      const sel=menu.querySelector('.selected')||items()[0];
      if(sel){sel.focus({preventScroll:true});sel.scrollIntoView({block:'nearest'})}
    };
    const close=(focusBtn)=>{menu.hidden=true;wrap.classList.remove('is-open','open-up');btn.setAttribute('aria-expanded','false');if(focusBtn)btn.focus()};
    const choose=(item)=>{
      if(!item)return;
      select.value=item.dataset.value;
      select.dispatchEvent(new Event('change',{bubbles:true}));
      close(true);
    };
    btn.addEventListener('click',e=>{e.stopPropagation();menu.hidden?open():close()});
    btn.addEventListener('keydown',e=>{if(e.key==='ArrowDown'||e.key==='ArrowUp'){e.preventDefault();open()}});
    menu.addEventListener('click',e=>{const item=e.target.closest('.custom-dropdown-item');if(item){e.stopPropagation();choose(item)}});
    menu.addEventListener('keydown',e=>{
      const list=items(),idx=list.indexOf(document.activeElement);
      if(e.key==='ArrowDown'){e.preventDefault();(list[idx+1]||list[0])?.focus()}
      else if(e.key==='ArrowUp'){e.preventDefault();(list[idx-1]||list[list.length-1])?.focus()}
      else if(e.key==='Home'){e.preventDefault();list[0]?.focus()}
      else if(e.key==='End'){e.preventDefault();list[list.length-1]?.focus()}
      else if(e.key==='Enter'||e.key===' '){e.preventDefault();choose(document.activeElement.closest('.custom-dropdown-item'))}
      else if(e.key==='Escape'||e.key==='Tab'){close(e.key==='Escape')}
      else if(e.key.length===1){const ch=e.key.toLowerCase();const hit=list.find((it,k)=>k>idx&&it.textContent.trim().toLowerCase().startsWith(ch))||list.find(it=>it.textContent.trim().toLowerCase().startsWith(ch));hit?.focus()}
    });
    select.addEventListener('change',()=>build(cfg));
  });
  window.__rebuildHeroMenus=()=>configs.forEach(build);
  document.addEventListener('click',e=>{if(!e.target.closest('.custom-dropdown-wrap'))closeAll(null)});
  document.addEventListener('keydown',e=>{if(e.key==='Escape')closeAll(null)});
}

window.addEventListener('DOMContentLoaded',()=>{
 syncAppView();
 setTimeout(()=>document.body.classList.add('chatbot-ready'),900);
 runInit('header',initHeaderScroll);
 runInit('hero stats',renderHeroStats);
 runInit('cart',()=>{CART=migrateCart(CART);renderCart();renderCartBadge()});
 runInit('shop filters',initShopFilters);
 runInit('shop render',renderShop);
 runInit('partner finder',findPartners);
 runInit('open matches',initMatches);
 runInit('language',initLang);
 runInit('mobile nav',initMobileNav);
 runInit('messages',initDM);
  runInit('section tabs',initSectionTabs);
  runInit('dm notifications',initIncomingDMDemo);
 runInit('cookies',cookiesInit);
 runInit('hero dropdowns',initCustomHeroDropdowns);
  runInit('sport rail',initSportRail);
  runInit('back to top',initBackToTop);
 runInit('locker cities',populateLockerCities);
 /* Omniva lockers are fetched when the checkout opens (openCheckout), not on every page view. */
 runInit('price slider',onPriceSlide);
 const mapSportEl=document.getElementById('mSport'),mapCityEl=document.getElementById('mCity'),mapPriceEl=document.getElementById('mPrice');
  /* ── Debounced filter events (you-dont-need-lodash 19k⭐ pattern) ─────── */
  const debouncedMapFilter = debounce(mapFiltersChanged, 150);
  mapSportEl?.addEventListener('change', debouncedMapFilter);
  mapCityEl?.addEventListener('change', debouncedMapFilter);
  if(mapPriceEl){
    const wrap = mapPriceEl.closest('.map-slider-wrap');
    const priceField = mapPriceEl.closest('.map-price-field') || mapPriceEl.closest('.field');
    let isDragging = false;
    let activePointerId = null;

    function updateFromPointer(clientX){
      if(!wrap) return;
      const rect = wrap.getBoundingClientRect();
      if(!rect.width) return;
      const thumbRadius = 13;
      const innerWidth = rect.width - (thumbRadius * 2);
      const clampedX = Math.max(rect.left + thumbRadius, Math.min(rect.right - thumbRadius, clientX));
      const ratio = innerWidth > 0 ? (clampedX - (rect.left + thumbRadius)) / innerWidth : 0;
      const stepIndex = Math.round(ratio * (PRICE_STEPS.length - 1));
      const clampedIndex = Math.max(0, Math.min(PRICE_STEPS.length - 1, stepIndex));

      if(Number(mapPriceEl.value) !== clampedIndex){
        mapPriceEl.value = clampedIndex;
        onPriceSlide();
        debouncedMapFilter();
      }
    }

    if(wrap){
      wrap.addEventListener('pointerdown', (e) => {
        if(e.button !== undefined && e.button !== 0) return;
        isDragging = true;
        activePointerId = e.pointerId;
        if(wrap.setPointerCapture && e.pointerId !== undefined){
          try { wrap.setPointerCapture(e.pointerId); } catch(_) {}
        }
        wrap.classList.add('is-dragging');
        priceField?.classList.add('is-sliding');
        updateFromPointer(e.clientX);
        onPriceSlide();
        try { mapPriceEl.focus({ preventScroll: true }); } catch(_) {}
        e.preventDefault();
      });

      wrap.addEventListener('pointermove', (e) => {
        if(!isDragging) return;
        updateFromPointer(e.clientX);
        e.preventDefault();
      });

      const stopDrag = () => {
        if(!isDragging) return;
        isDragging = false;
        if(activePointerId !== null && wrap.releasePointerCapture){
          try { wrap.releasePointerCapture(activePointerId); } catch(_) {}
          activePointerId = null;
        }
        wrap.classList.remove('is-dragging');
        priceField?.classList.remove('is-sliding');
      };

      wrap.addEventListener('pointerup', stopDrag);
      wrap.addEventListener('pointercancel', stopDrag);
    }

    mapPriceEl.addEventListener('input', () => {
      onPriceSlide();
      debouncedMapFilter();
    });
    mapPriceEl.addEventListener('change', () => {
      onPriceSlide();
      debouncedMapFilter();
    });

    document.querySelectorAll('.map-slider-ticks span').forEach(tick => {
      tick.addEventListener('click', () => {
        const num = parseInt(tick.textContent.replace(/[^\d]/g, ''), 10);
        if(!isNaN(num)){
          mapPriceEl.value = num;
          onPriceSlide();
          priceField?.classList.add('is-sliding');
          setTimeout(() => priceField?.classList.remove('is-sliding'), 350);
          debouncedMapFilter();
        }
      });
    });
  }
  runInit('map',()=>{ if(typeof window.L==='undefined'){ throw new Error('Leaflet is not loaded yet'); } initMap(); }, {silent:true,retry:3});
  const debouncedFindPartners = debounce(findPartners, 200);
  document.getElementById('fSport')?.addEventListener('change', debouncedFindPartners);
  document.getElementById('fCity')?.addEventListener('change', debouncedFindPartners);
  document.getElementById('fLevel')?.addEventListener('change', debouncedFindPartners);
  document.getElementById('bookingDate')?.addEventListener('change',()=>{if(window.__bookingVenue)loadBookingSlots(window.__bookingVenue)});
  document.getElementById('bookingTime')?.addEventListener('change',()=>{const select=document.getElementById('bookingTime');const chosen=select?.selectedOptions?.[0];window.__bookingCourtId=chosen?.dataset.courtId||null;document.querySelectorAll('.slot-chip').forEach(b=>b.classList.toggle('active',b.dataset.start===select?.value))});
  syncBookingMappings();
  runInit('Clerk',initClerk);
  ['checkoutModal', 'clerkAuthModal', 'bookingModal', 'legalModal', 'cookieSettingsModal'].forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener('click', (e) => {
        if (e.target === el) {
          if (id === 'clerkAuthModal') closeClerkAuth();
          else if (id === 'bookingModal') closeBooking();
          else closeModal(id);
        }
      });
    }
  });
  const params=new URLSearchParams(location.search);
  if(params.get('payment')==='success'){CART=[];saveCart();renderCart();renderCartBadge();toast(currentLang==='en'?'Payment received by Stripe. Your order is complete.':currentLang==='ru'?'Оплата передана Stripe. Заказ завершён.':'Stripe ir saņēmis maksājumu. Pasūtījums pabeigts.',{type:'success',duration:6000});history.replaceState({},'',location.pathname+location.hash)}
  if(params.get('payment')==='cancelled') toast('Stripe apmaksa atcelta. Grozs nav izdzēsts.',{type:'error'});
});
window.addEventListener('hashchange',syncAppView);
window.addEventListener('keydown',e=>{if(e.key==='Escape'){toggleCart(false);closeModal('checkoutModal');closeModal('bookingModal');closeModal('legalModal');document.getElementById('cookieSettingsModal')?.classList.remove('open');document.getElementById('mobileNavPanel')?.setAttribute('hidden','');document.getElementById('mobileNavScrim')?.setAttribute('hidden','');document.getElementById('mobileNavToggle')?.setAttribute('aria-expanded','false');closeClerkAuth();closeChatbotPanel()}});

/* ── Navigation and Section Highlighter ─────────────────────────────────────
 * Watches sections with IntersectionObserver, marks the active link in header. */
function initNavigationLinks(){
  const sections=['finder','map','shop','messages','about'].map(id=>document.getElementById(id)).filter(Boolean);
  function setActive(id){
    document.querySelectorAll('.site-header nav a, .mobile-nav-panel a').forEach(a=>{
      const href=a.getAttribute('href');
      const active=href==='#'+id || (id==='finder' && href==='#finder');
      a.classList.toggle('active',active);
      if(active)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current');
    });
  }

  document.querySelectorAll('.site-header nav a[href^="#"], .mobile-nav-panel a[href^="#"], .site-footer a[href^="#"]').forEach(link=>{
    link.addEventListener('click',e=>{
      const href=link.getAttribute('href');
      if(!href||href==='#'||href==='#main')return;
      const id=href.replace('#','');
      const target=document.getElementById(id);
      if(target){
        e.preventDefault();
        closeMobileNav();
        scrollToSection(id);
        history.replaceState(null,'','#'+id);
      }
    });
  });

  if('IntersectionObserver' in window){
    const obs=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting)setActive(e.target.id)});},{rootMargin:'-30% 0px -50% 0px'});
    sections.forEach(s=>obs.observe(s));
  }
}
initNavigationLinks();

/* ── Hero interactive quick-actions ─────────────────────────────────────── */
function lvSportName(key){
  if(!key) return '';
  const k = SPORT_ICON_ALIASES[key] || sportToKey(key) || key;
  return SPORT_LABELS.lv[k] || '';
}
function markActiveSportTile(key){
  document.querySelectorAll('#sportRail .sport-tile').forEach(b=>{const on=!!key&&b.dataset.sportKey===key;b.classList.toggle('is-active',on);b.setAttribute('aria-pressed',String(on))});
}
/* One sport choice drives the hero picker, partner finder, map filters, matches and the rail. */
function applySportEverywhere(sportKey){
  const key = sportKey ? (sportToKey(sportKey) || sportKey) : '';
  const lvName = lvSportName(key);

  // 1. Finder select (#fSport)
  const fSport = document.getElementById('fSport');
  if(fSport) {
    if(!key) {
      fSport.value = '';
    } else {
      const matchOpt = [...fSport.options].find(o => 
        o.value === lvName ||
        (lvName && norm(o.value) === norm(lvName)) ||
        o.value === key ||
        (key && norm(o.value) === norm(key))
      );
      fSport.value = matchOpt ? matchOpt.value : (lvName || '');
    }
  }

  // 2. Finder sport pills
  document.querySelectorAll('.finder-sport-pills .finder-pill').forEach(btn => {
    const bSport = btn.dataset.sport || '';
    const bKey = btn.dataset.sportKey || sportToKey(bSport);
    const isAct = Boolean(key && (bKey === key || norm(bSport) === norm(lvName) || norm(bSport) === norm(key)));
    btn.classList.toggle('active', isAct);
    btn.setAttribute('aria-pressed', String(isAct));
  });

  // 3. Map select (#mSport)
  const mSport = document.getElementById('mSport');
  if(mSport) {
    const matchOpt = [...mSport.options].find(o => o.value === key || (key && norm(o.value) === norm(key)));
    mSport.value = matchOpt ? matchOpt.value : (key || '');
  }

  // 4. Map venue quick chips (#venueQuickChips .v-chip)
  document.querySelectorAll('#venueQuickChips .v-chip').forEach(c => {
    const cSport = c.dataset.sport || '';
    const isAct = Boolean(key && (cSport === key || sportToKey(cSport) === key));
    c.classList.toggle('active', isAct);
    c.setAttribute('aria-pressed', String(isAct));
  });

  // 5. Hero search dock (#hSport)
  const hSport = document.getElementById('hSport');
  if(hSport && hSport.value !== key) {
    hSport.value = key;
    if(typeof window.__syncHeroCustomSelects === 'function') {
      window.__syncHeroCustomSelects();
    }
  }

  // 6. Sport Rail active highlight
  markActiveSportTile(key);

  // 7. Open Matches filter (#matchSportPills, #matchesGrid)
  if(typeof setMatchFilter === 'function') {
    currentMatchFilter = key;
    document.querySelectorAll('.match-pill').forEach(btn => {
      const bSport = btn.dataset.sport || '';
      const isAct = key ? (bSport === key || sportToKey(bSport) === key) : (bSport === '');
      btn.classList.toggle('active', isAct);
      btn.setAttribute('aria-pressed', String(isAct));
    });
    renderMatches();
  }
}
function heroQuickSport(sportKey){
  const key = sportKey ? (sportToKey(sportKey) || sportKey) : '';
  applySportEverywhere(key);
  partnerPage = 1;
  findPartners(1);
  mapFiltersChanged();
  if(typeof setMatchFilter === 'function') {
    setMatchFilter(key);
  }
  scrollToSection('finder');
}
function heroSearch(){
  const hSport=document.getElementById('hSport')?.value||'';
  const hCity=document.getElementById('hCity')?.value||'';
  applySportEverywhere(hSport);
  ['fCity','mCity'].forEach(id=>{
    const el=document.getElementById(id);if(!el)return;
    if(hCity&&![...el.options].some(o=>o.value===hCity)){const o=document.createElement('option');o.value=hCity;o.textContent=hCity;el.appendChild(o)}
    el.value=hCity;
  });
  partnerPage=1;
  findPartners(1);
  mapFiltersChanged();
  scrollToSection('finder');
}
window.heroQuickSport=heroQuickSport;
window.heroSearch=heroSearch;
window.applySportEverywhere=applySportEverywhere;
window.lvSportName=lvSportName;

/* ── Sport rail ── */
function renderSportRail(){
  const rail=document.getElementById('sportRail');if(!rail)return;
  const counts={};VENUES.forEach(v=>{counts[v.sportKey]=(counts[v.sportKey]||0)+1});
  rail.querySelectorAll('[data-sport-label]').forEach(el=>{el.textContent=sportLabel(el.dataset.sportLabel)});
  rail.querySelectorAll('[data-sport-count]').forEach(el=>{const n=counts[el.dataset.sportCount]||0;el.textContent=n?`${n} ${plural(n,VENUE_WORDS)}`:''});
  rail.querySelectorAll('.sport-tile').forEach(b=>{const k=b.dataset.sportKey,n=counts[k]||0;b.setAttribute('aria-label',`${sportLabel(k)}, ${n} ${plural(n,VENUE_WORDS)}`)});
  document.querySelectorAll('.rail-btn[data-rail-dir]').forEach(b=>b.setAttribute('aria-label',t(Number(b.dataset.railDir)<0?'railPrev':'railNext')));
}
function initSportRail(){
  const rail=document.getElementById('sportRail');if(!rail)return;
  renderSportRail();
  const btns=[...document.querySelectorAll('.rail-btn[data-rail-dir]')];
  const sync=()=>{const max=rail.scrollWidth-rail.clientWidth-2;btns.forEach(b=>{b.disabled=Number(b.dataset.railDir)<0?rail.scrollLeft<=2:rail.scrollLeft>=max})};
  btns.forEach(b=>b.addEventListener('click',()=>{
    const li=rail.querySelector('li');
    const step=li?(li.getBoundingClientRect().width+12)*Math.max(1,Math.floor(rail.clientWidth/(li.getBoundingClientRect().width+12))-1):rail.clientWidth*0.8;
    rail.scrollBy({left:Number(b.dataset.railDir)*step,behavior:'smooth'});
  }));
  rail.addEventListener('scroll',debounce(sync,60),{passive:true});
  window.addEventListener('resize',debounce(sync,150),{passive:true});
  sync();

  // Desktop horizontal wheel scrolling
  rail.addEventListener('wheel', e => {
    if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
      const atStart = rail.scrollLeft <= 2 && e.deltaY < 0;
      const atEnd = rail.scrollLeft >= (rail.scrollWidth - rail.clientWidth - 2) && e.deltaY > 0;
      if (!atStart && !atEnd) {
        e.preventDefault();
        rail.scrollBy({ left: e.deltaY * 1.35, behavior: 'auto' });
      }
    }
  }, { passive: false });

  // Desktop click-and-drag horizontal swipe
  let isDown = false, startX = 0, scrollLeft = 0, dragDist = 0, isDragging = false;
  rail.addEventListener('mousedown', e => {
    if (e.button !== 0) return;
    isDown = true;
    isDragging = false;
    dragDist = 0;
    startX = e.pageX;
    scrollLeft = rail.scrollLeft;
  });
  window.addEventListener('mousemove', e => {
    if (!isDown) return;
    const diff = e.pageX - startX;
    dragDist = Math.abs(diff);
    if (dragDist > 10) {
      isDragging = true;
      rail.classList.add('is-dragging');
      rail.scrollLeft = scrollLeft - diff * 1.3;
    }
  });
  const stopDrag = () => {
    if (!isDown) return;
    isDown = false;
    rail.classList.remove('is-dragging');
    if (isDragging) {
      setTimeout(() => { isDragging = false; dragDist = 0; }, 80);
    }
  };
  window.addEventListener('mouseup', stopDrag);
  window.addEventListener('mouseleave', stopDrag);

  // Direct click on sport rail & tiles
  rail.addEventListener('click', e => {
    if (isDragging || dragDist > 10) {
      e.preventDefault();
      e.stopPropagation();
      return;
    }
    const tile = e.target.closest('.sport-tile');
    if (tile && tile.dataset.sportKey) {
      e.preventDefault();
      heroQuickSport(tile.dataset.sportKey);
    }
  });
}

/* ── Back to top ── */
function initBackToTop(){
  const b=document.getElementById('backToTop')||document.createElement('span');
  /* The help button stays hidden over the hero so it never covers the search dock. */
  const on=()=>{b.classList.toggle('is-visible',window.scrollY>window.innerHeight*1.2);document.body.classList.toggle('fab-visible',window.scrollY>240||!document.querySelector('.hero'))};
  window.addEventListener('scroll',on,{passive:true});on();
}

/* ── Newsletter: real request when /api/contact is configured, otherwise the visitor's
   mail app (previously the form showed "confirmation sent" without sending anything). */
async function subscribeNewsletter(e){
  e.preventDefault();
  const form=e.currentTarget||e.target,input=form.querySelector('input[type="email"]'),btn=form.querySelector('button');
  const email=(input?.value||'').trim();
  if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){input?.focus();return}
  if(btn)btn.disabled=true;
  try{
    const r=await apiFetch('contact',{method:'POST',headers:{'Content-Type':'application/json',Accept:'application/json'},body:JSON.stringify({type:'newsletter',email,lang:currentLang,website:''})});
    if(r&&r.ok){toast(t('newsOk'),{type:'success'});form.reset();return}
    if(r&&r.status>=400&&r.status<500&&r.status!==404&&r.status!==405){toast(t('newsErr'),{type:'error'});return}
    window.location.href=`mailto:info@sportabiedrs.lv?subject=${encodeURIComponent('Jaunumu pieteikums / Newsletter')}&body=${encodeURIComponent('Lūdzu pierakstiet mani SportaBiedrs.lv jaunumiem: '+email)}`;
    toast(t('newsMail'),{type:'info',duration:6000});
  }catch(err){toast(t('newsErr'),{type:'error'})}
  finally{if(btn)btn.disabled=false}
}
window.subscribeNewsletter=subscribeNewsletter;

/* Global navigation smooth scroll interceptor */
document.addEventListener('click', (e) => {
  const link = e.target.closest('a[href^="#"], button.nav-search');
  if (!link) return;

  if (link.classList.contains('nav-search')) {
    e.preventDefault();
    scrollToSection('finder');
    return;
  }

  const href = link.getAttribute('href');
  if (!href || href === '#' || href === '#main') return;

  const targetId = href.substring(1);
  const targetEl = document.getElementById(targetId) || (targetId === 'biedri' ? document.getElementById('finder') : null);
  if (targetEl) {
    e.preventDefault();
    scrollToSection(targetId);
    const mobileNav = document.getElementById('mobileNavPanel');
    if (mobileNav && !mobileNav.hidden) {
      mobileNav.hidden = true;
      document.getElementById('mobileNavToggle')?.setAttribute('aria-expanded', 'false');
    }
  }
});


/* ── Direct Messaging & Notification System ──────────────────────────────── */
window.DM_UNREAD_STATE = [false, false, false, false, false, false];

function updateNavMsgBadge() {
  const badge = document.getElementById('navMsgBadge');
  if (!badge) return;
  const unreadCount = (window.DM_UNREAD_STATE || []).filter(Boolean).length;
  if (unreadCount > 0) {
    badge.textContent = unreadCount;
    badge.style.display = 'inline-flex';
  } else {
    badge.style.display = 'none';
  }
}

window.scrollToMessages = function(openFirst = true) {
  const bubble = document.getElementById('floatingDmBubble');
  if (bubble) bubble.style.display = 'none';
  const badge = document.getElementById('floatingDmBadge');
  if (badge) badge.style.display = 'none';
  if (window.DM_UNREAD_STATE) {
    window.DM_UNREAD_STATE = window.DM_UNREAD_STATE.map(() => false);
    updateNavMsgBadge();
  }
  if (openFirst) openDM(0);
  document.getElementById('messages')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

function showIncomingDMBanner(contact, text) {
  const badge = document.getElementById('floatingDmBadge');
  if (badge) {
    badge.textContent = '1';
    badge.style.display = 'flex';
  }
  const bubble = document.getElementById('floatingDmBubble');
  const senderEl = document.getElementById('dmBubbleSender');
  const snippetEl = document.getElementById('dmBubbleSnippet');
  if (bubble && senderEl && snippetEl) {
    senderEl.textContent = contact.name;
    snippetEl.textContent = text;
    bubble.style.display = 'flex';
    clearTimeout(window.__dmBubbleTimer);
    window.__dmBubbleTimer = setTimeout(() => {
      bubble.style.display = 'none';
    }, 7000);
  }
  updateNavMsgBadge();
}

function toggleMobileContacts() {
  document.querySelector('.chat-shell')?.classList.toggle('contacts-open');
}

function filterVenueFromStrip(venueName) {
  const n = norm(venueName);
  const v = VENUES.find(x => norm(x.name) === n) || VENUES.find(x => norm(x.name).includes(n) || n.includes(norm(x.name)));
  if (!v) { toast(t('venueStripMissing').replace('{name}', venueName), { type: 'info' }); return; }
  if (!selectedVenues().includes(v)) {
    ['mSport', 'mCity'].forEach(id => { const e = document.getElementById(id); if (e) e.value = ''; });
    const search = document.getElementById('venueSidebarSearch'); if (search) search.value = '';
    const p = document.getElementById('mPrice'); if (p) p.value = 80;
    onPriceSlide(); venuePage = 1; renderMap();
  }
  scrollToSection('map');
  setTimeout(() => {
    const marker = mapMarkers.find(m => m.__venueData === v);
    if (marker && markerCluster && markerCluster.zoomToShowLayer) {
      markerCluster.zoomToShowLayer(marker, () => { leafletMap?.setView([v.lat, v.lng], Math.max(leafletMap.getZoom(), 15), { animate: true }); marker.openPopup(); });
    } else if (leafletMap) {
      leafletMap.setView([v.lat, v.lng], 15, { animate: true });
      marker?.openPopup();
    }
    syncCardFromMarker(v);
  }, 450);
}

function initSectionTabs() {
  const tabs = document.getElementById('sectionTabs');
  const hero = document.querySelector('.hero');
  if (!tabs || !hero) return;

  const obs = new IntersectionObserver(([entry]) => {
    tabs.classList.toggle('section-tabs--visible', !entry.isIntersecting);
  }, { threshold: 0.15 });
  obs.observe(hero);

  const sectionIds = ['finder', 'map', 'shop', 'messages', 'about'];
  const sections = sectionIds.map(id => document.getElementById(id)).filter(Boolean);
  const links = tabs.querySelectorAll('.stab');

  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY + 180;
    let current = '';
    for (const sec of sections) {
      if (sec.offsetTop <= scrollPos) {
        current = sec.id;
      }
    }
    links.forEach(l => {
      l.classList.toggle('stab--active', l.getAttribute('href') === '#' + current);
    });
  }, { passive: true });
}

function initIncomingDMDemo() {
  // If user hasn't visited messages after 6s, show friendly demo message from Karlis
  setTimeout(() => {
    if (window.location.hash !== '#messages' && (!window.DM_UNREAD_STATE || !window.DM_UNREAD_STATE[0])) {
      if (!window.DM_UNREAD_STATE) window.DM_UNREAD_STATE = [];
      window.DM_UNREAD_STATE[0] = true;
      updateNavMsgBadge();
      const firstContact = DM_CONTACTS[0];
      const previewMsg = currentLang==='en'?'Hi! Looking for a tennis partner at ENRI Kalnciema or Mezaparks.':'Čau! Meklēju tenisa partneri ENRI kortos Kalnciema ielā vai Mežaparkā.';
      showIncomingDMBanner(firstContact, previewMsg);
    }
  }, 6000);
}

/* ─────────────────────────────────────────────────────────────────────────────
 * OPEN MATCHES / MATCHMAKING LOGIC (#matches)
 * Inspired by player recruitment boards with shared venue splitting
 * ────────────────────────────────────────────────────────────────────────── */
const MATCHES_STORE_KEY = 'sb_open_matches_v4';

const DEFAULT_MATCHES = [
  {
    id: 'm1',
    sportKey: 'padel',
    sport: 'Padel',
    city: 'Mārupe',
    venueName: 'MH PADEL CLUB',
    venueAddress: 'Mārupes Parks 1, Mārupe',
    timeText: 'Šovakar 19:30',
    level: 'Vidējs (Playtomic ~2.8)',
    pricePerPlayer: '5,00 € / spēlētājs (No 20 €/h)',
    desc: 'Trūkst 4. spēlētājs labam dubultspēles mačam 1.5h. Korts jau rezervēts, bumbas ir uz vietas.',
    maxPlayers: 4,
    players: ['MĀ', 'AR', 'VA'],
    userJoined: false,
    hostName: 'Mārtiņš Gailis',
    hostContactId: 'martins_padel'
  },
  {
    id: 'm2',
    sportKey: 'tennis',
    sport: 'Teniss',
    city: 'Rīga',
    venueName: 'TENISA KLUBS ENRI KALNCIEMA',
    venueAddress: 'Kalnciema iela 207, Rīga',
    timeText: 'Rīt 18:00',
    level: 'Pieredzējis (NTRP 3.5 - 4.0)',
    pricePerPlayer: '11,00 € / spēlētājs (22 €/h)',
    desc: 'Meklēju stabilu sparinga partneri 1v1 intensīvam setam ar jauniem Head Tour bumbiņu komplektiem.',
    maxPlayers: 2,
    players: ['KĀ'],
    userJoined: false,
    hostName: 'Kārlis Ozols',
    hostContactId: 'karlis_tennis'
  },
  {
    id: 'm3',
    sportKey: 'basketball',
    sport: 'Basketbols',
    city: 'Rīga',
    venueName: 'GHETTO GAMES BASKETBOLA LAUKUMS',
    venueAddress: 'Pērnavas iela 42, Rīga',
    timeText: 'Sestdien 16:00',
    level: 'Jebkurš līmenis',
    pricePerPlayer: 'Bezmaksas (Publiskā pieeja)',
    desc: 'Vācam 3x3 ielu basketbola komandu draudzīgām spēlēm Grīziņkalna āra laukumos. Laba mūzika un azarts.',
    maxPlayers: 6,
    players: ['RO', 'AN', 'DA', 'KR'],
    userJoined: false,
    hostName: 'Roberts Jansons',
    hostContactId: 'roberts_basket'
  },
  {
    id: 'm4',
    sportKey: 'volleyball',
    sport: 'Volejbols',
    city: 'Jūrmala',
    venueName: 'JŪRMALAS PLUDMALES SPORTA CENTRS',
    venueAddress: 'Emelīnas iela-Pūpolu iela, Majori, Jūrmala',
    timeText: 'Svētdien 11:00',
    level: 'Vidējs (2 pret 2 pludmale)',
    pricePerPlayer: '3,75 € / spēlētājs (No 15 €/h)',
    desc: 'Klasiskais bīča volejbols 2v2 pie jūras. Vējš prognozēts mierīgs, tīkls un bumba būs sarūpēti.',
    maxPlayers: 4,
    players: ['EL', 'MA'],
    userJoined: false,
    hostName: 'Elīna Kalniņa',
    hostContactId: 'elina_beach'
  },
  {
    id: 'm5',
    sportKey: 'football',
    sport: 'Futbols',
    city: 'Rīga',
    venueName: 'PLAYOFF ARENA RĪGA',
    venueAddress: 'Kārļa Ulmaņa gatve 114, Rīga',
    timeText: 'Piektdien 19:00',
    level: 'Vidējs (5 pret 5 telpās)',
    pricePerPlayer: '5,00 € / spēlētājs (No 50 €/h)',
    desc: 'Spēlējam 5v5 mini-futbolu ar mākslīgo zālienu. Meklējam spēlētājus draudzīgam mačam.',
    maxPlayers: 10,
    players: ['DA', 'MA', 'KA', 'VA', 'TO', 'ED', 'KR', 'AL'],
    userJoined: false,
    hostName: 'Dāvis Liepiņš',
    hostContactId: 'davis_football'
  },
  {
    id: 'm6',
    sportKey: 'hockey',
    sport: 'Hokejs',
    city: 'Rīga',
    venueName: 'VOLVO SPORTA CENTRS',
    venueAddress: 'Jūrmalas gatve 78D, Rīga',
    timeText: 'Sestdien 20:30',
    level: 'Amatieri / Vidējs līmenis',
    pricePerPlayer: '12,50 € / spēlētājs (No 150 €/h)',
    desc: 'Amatieru hokeja spēle. Pilns ekipējums obligāts, vārtsargi jau ir sarunāti!',
    maxPlayers: 12,
    players: ['RI', 'RE', 'ED', 'KĀ', 'MI', 'GU', 'RO', 'AN', 'MA', 'VA'],
    userJoined: false,
    hostName: 'Rihards Melnis',
    hostContactId: 'rihards_hockey'
  },
  {
    id: 'm7',
    sportKey: 'fitness',
    sport: 'Fitnesa zāle',
    city: 'Rīga',
    venueName: 'TRIDENS FITNESS ELIZABETE',
    venueAddress: 'Elizabetes iela 21a, Rīga',
    timeText: 'Šovakar 18:30',
    level: 'Jebkurš līmenis',
    pricePerPlayer: '8,00 € / apmeklējums (35 €/mēn.)',
    desc: 'Kopīgs spēka un funkcionālais treniņš. Meklēju motivētu partneri vingrinājumu drošināšanai un intensitātei.',
    maxPlayers: 2,
    players: ['AR'],
    userJoined: false,
    hostName: 'Artūrs Bērziņš',
    hostContactId: 'arturs_fit'
  },
  {
    id: 'm8',
    sportKey: 'swimming',
    sport: 'Peldēšana',
    city: 'Rīga',
    venueName: 'RTU ĶĪPSALAS PELDBASEINS',
    venueAddress: 'Ķīpsalas iela 5, Rīga',
    timeText: 'Rīt 07:30',
    level: 'Vidējs / Kraulis',
    pricePerPlayer: '8,00 € / apmeklējums',
    desc: 'Rīta peldēšanas sesija 50m celiņā pirms darba. Plāns nopeldēt ~2.5km kraulā ar tempa intervāliem.',
    maxPlayers: 4,
    players: ['LA', 'KR'],
    userJoined: false,
    hostName: 'Laura Ozoliņa',
    hostContactId: 'laura_swim'
  },
  {
    id: 'm9',
    sportKey: 'running',
    sport: 'Skriešana',
    city: 'Rīga',
    venueName: 'MEŽAPARKA SPORTA CIEMS',
    venueAddress: 'Ezermalas iela 30, Rīga',
    timeText: 'Sestdien 09:30',
    level: 'Temps 5:30 min/km',
    pricePerPlayer: 'Bezmaksas (Publiskā pieeja)',
    desc: 'Garais rīta skrējiens 12 km gar Ķīšezeru un Mežaparka alejām. Mierīgs sarunu temps un labs noskaņojums.',
    maxPlayers: 6,
    players: ['AN', 'ED', 'ZA'],
    userJoined: false,
    hostName: 'Anna Liepa',
    hostContactId: 'anna_run'
  },
  {
    id: 'm10',
    sportKey: 'cycling',
    sport: 'Velosports',
    city: 'Rīga',
    venueName: 'RIGA CYCLING VELOTRASE (BIĶERNIEKI)',
    venueAddress: 'Biķernieku trase, Rīga',
    timeText: 'Svētdien 10:00',
    level: 'Vidējs (28-32 km/h grupa)',
    pricePerPlayer: 'Bezmaksas / 10 € dalība',
    desc: 'Šosejas velobrauciens Biķernieku lielajā aplī. Trenējam braukšanu grupā un maiņas drošā slēgtā trasē.',
    maxPlayers: 8,
    players: ['MA', 'RO', 'KA', 'DA'],
    userJoined: false,
    hostName: 'Mareks Liepiņš',
    hostContactId: 'mareks_cycle'
  },
  {
    id: 'm11',
    sportKey: 'discgolf',
    sport: 'Disku golfs',
    city: 'Rīga',
    venueName: 'AIRBALTIC DISC GOLF PARK MEŽAPARKS',
    venueAddress: 'Atpūtas aleja, Rīga',
    timeText: 'Piektdien 17:30',
    level: 'Iesācēji / Vidējs',
    pricePerPlayer: '5,00 € / spēle',
    desc: '18 grozu spēle Mežaparka skaistajā priežu parkā. Var pievienoties arī bez saviem diskiem — varu aizdot rezerves diskus!',
    maxPlayers: 4,
    players: ['MĀ', 'IE'],
    userJoined: false,
    hostName: 'Mārtiņš Gailis',
    hostContactId: 'martins_disc'
  },
  {
    id: 'm12',
    sportKey: 'golf',
    sport: 'Golfs',
    city: 'Rīga',
    venueName: 'OZO GOLF CLUB',
    venueAddress: 'Mīlgrāvja iela 16, Rīga',
    timeText: 'Svētdien 12:00',
    level: 'HCP < 36 / Vidējs',
    pricePerPlayer: '25,00 € / spēlētājs (No 50 €/spēle)',
    desc: '9 vai 18 bedrīšu raunds skaistajā Ķīšezera krasta laukumā. Meklēju 2 partnerus draudzīgam flaitam.',
    maxPlayers: 4,
    players: ['ED', 'DA'],
    userJoined: false,
    hostName: 'Edgars Kronbergs',
    hostContactId: 'edgars_golf'
  },
  {
    id: 'm13',
    sportKey: 'boxing',
    sport: 'Bokss / MMA',
    city: 'Rīga',
    venueName: 'BULLDOZER BOXING RIGA',
    venueAddress: 'Lāčplēša iela 87, Rīga',
    timeText: 'Ceturtdien 19:00',
    level: 'Amatieri / Vidējs (Pāru sparingi)',
    pricePerPlayer: '12,00 € / treniņš',
    desc: 'Kontrolēts tehniskais sparings ar cimdiem (14-16 oz) un kājsargiem. Bez lieka spēka, fokusējamies uz kustību un kombinācijām.',
    maxPlayers: 2,
    players: ['KR'],
    userJoined: false,
    hostName: 'Kristaps Vilks',
    hostContactId: 'kristaps_boxing'
  },
  {
    id: 'm14',
    sportKey: 'extreme',
    sport: 'Ekstrēmie sporti',
    city: 'Rīga',
    venueName: 'CENTRA SPORTA KVARTĀLS',
    venueAddress: 'Krišjāņa Barona iela 116A, Rīga',
    timeText: 'Sestdien 15:00',
    level: 'Visi līmeņi (Skeiti / BMX)',
    pricePerPlayer: 'Bezmaksas (Publiskā pieeja)',
    desc: 'Skeitparka sesija Barona ielas kvartālā. Braucam mini-rampu un street elementus, apgūstam jaunus trikus un filmējam video.',
    maxPlayers: 6,
    players: ['MI', 'TO', 'AL'],
    userJoined: false,
    hostName: 'Mikus Eglītis',
    hostContactId: 'mikus_extreme'
  },
  {
    id: 'm15',
    sportKey: 'climbing',
    sport: 'Klinšu kāpšana',
    city: 'Rīga',
    venueName: 'FALKORS BOULDERING CENTER',
    venueAddress: 'Ūnijas iela 14, Rīga',
    timeText: 'Trešdien 18:30',
    level: 'Vidējs (6A - 6C bouldering)',
    pricePerPlayer: '11,00 € / apmeklējums',
    desc: 'Boulderinga treniņš Falkorā. Kopā risinām jaunās problēmas, pārrunājam beta un viens otru motivējam topam!',
    maxPlayers: 4,
    players: ['ZA', 'EL'],
    userJoined: false,
    hostName: 'Zane Krūmiņa',
    hostContactId: 'zane_climb'
  }
];

let OPEN_MATCHES = safeGet(MATCHES_STORE_KEY, null);
if (!Array.isArray(OPEN_MATCHES) || !OPEN_MATCHES.length) {
  OPEN_MATCHES = DEFAULT_MATCHES;
  safeSet(MATCHES_STORE_KEY, OPEN_MATCHES);
}
window.OPEN_MATCHES = OPEN_MATCHES;

let currentMatchFilter = '';

function saveMatches() {
  safeSet(MATCHES_STORE_KEY, OPEN_MATCHES);
}

function updateMatchBadges() {
  const counts = { all: OPEN_MATCHES.length };
  OPEN_MATCHES.forEach(m => {
    const k = m.sportKey || (typeof sportToKey === 'function' ? sportToKey(m.sport) : m.sport);
    if (k) counts[k] = (counts[k] || 0) + 1;
  });
  const allEl = document.getElementById('matchesCountAll');
  if (allEl) allEl.textContent = counts.all;

  document.querySelectorAll('#matchSportPills .match-pill').forEach(btn => {
    const s = btn.getAttribute('data-sport');
    if (!s) return;
    const ico = btn.querySelector('.pill-icon');
    if (ico && !ico.firstChild && typeof sportIcon === 'function') ico.innerHTML = sportIcon(s, 20);
    const badge = btn.querySelector('.pill-badge');
    if (badge) badge.textContent = counts[s] || 0;
    const labelSpan = btn.querySelector('.pill-label');
    if (labelSpan && typeof sportLabel === 'function') {
      labelSpan.textContent = sportLabel(s);
    }
  });
}

function formatMatchFee(m) {
  const raw = String(m.pricePerPlayer || '').trim();
  if (!raw || /bezmaksas/i.test(raw)) {
    return {
      price: currentLang === 'en' ? 'Free' : currentLang === 'ru' ? 'Бесплатно' : 'Bezmaksas',
      unit: '',
      sub: currentLang === 'en' ? 'Public court' : currentLang === 'ru' ? 'Общая площадка' : 'Publisks laukums'
    };
  }
  const mAmount = raw.match(/([0-9]+(?:[.,][0-9]{1,2})?\s*€)/);
  const mSub = raw.match(/\(([^)]+)\)/);
  const price = mAmount ? mAmount[1] : raw.split('/')[0].trim();
  const unit = raw.includes('/') ? ('/ ' + (currentLang === 'en' ? 'player' : currentLang === 'ru' ? 'игрок' : 'spēl.')) : '';
  const sub = mSub ? mSub[1] : (t('splitFee') || 'Dalītā īre');
  return { price, unit, sub };
}
window.formatMatchFee = formatMatchFee;


function initMatchPillsScroller() {
  const track = document.getElementById('matchSportPills');
  const wrap = track && track.parentElement;
  const prev = document.getElementById('pillsPrev');
  const next = document.getElementById('pillsNext');
  if (!track || !wrap || !prev || !next || track.__scrollInited) return;
  track.__scrollInited = true;
  const sync = () => {
    const max = track.scrollWidth - track.clientWidth - 2;
    const hasPrev = track.scrollLeft > 2;
    const hasNext = track.scrollLeft < max;
    wrap.classList.toggle('has-prev', hasPrev);
    wrap.classList.toggle('has-next', hasNext);
    prev.hidden = !hasPrev;
    next.hidden = !hasNext;
  };
  const step = () => Math.max(160, track.clientWidth * 0.7);
  prev.addEventListener('click', () => track.scrollBy({ left: -step(), behavior: 'smooth' }));
  next.addEventListener('click', () => track.scrollBy({ left: step(), behavior: 'smooth' }));
  track.addEventListener('scroll', sync, { passive: true });
  window.addEventListener('resize', sync, { passive: true });
  setTimeout(sync, 50);
}
window.initMatchPillsScroller = initMatchPillsScroller;

let currentMatchPage = 1;

function getMatchesPerPage() {
  return window.innerWidth < 640 ? 3 : 4;
}

function setMatchFilter(sportKey) {
  const key = sportKey ? (sportToKey(sportKey) || sportKey) : '';
  currentMatchFilter = key;
  currentMatchPage = 1;
  document.querySelectorAll('.match-pill').forEach(btn => {
    const bSport = btn.dataset.sport || '';
    const isAct = key ? (bSport === key || sportToKey(bSport) === key) : (bSport === '');
    btn.classList.toggle('active', isAct);
    btn.setAttribute('aria-pressed', String(isAct));
    if (isAct && typeof btn.scrollIntoView === 'function') {
      try {
        btn.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
      } catch (_) {}
    }
  });
  renderMatches();
}
window.setMatchFilter = setMatchFilter;

function moveMatchPage(delta) {
  const filtered = currentMatchFilter ? OPEN_MATCHES.filter(m => m.sportKey === currentMatchFilter || sportToKey(m.sportKey) === currentMatchFilter) : OPEN_MATCHES;
  const perPage = getMatchesPerPage();
  const totalPages = Math.max(1, Math.ceil(filtered.length / perPage));
  const targetPage = currentMatchPage + delta;
  if (targetPage >= 1 && targetPage <= totalPages) {
    currentMatchPage = targetPage;
    renderMatches();
    const mSec = document.getElementById('matches');
    if (mSec && window.innerWidth < 768) {
      const top = mSec.getBoundingClientRect().top + window.scrollY - 70;
      if (window.scrollY > top) {
        window.scrollTo({ top, behavior: 'smooth' });
      }
    }
  }
}
window.moveMatchPage = moveMatchPage;

function goToMatchPage(page) {
  const filtered = currentMatchFilter ? OPEN_MATCHES.filter(m => m.sportKey === currentMatchFilter || sportToKey(m.sportKey) === currentMatchFilter) : OPEN_MATCHES;
  const perPage = getMatchesPerPage();
  const totalPages = Math.max(1, Math.ceil(filtered.length / perPage));
  if (page >= 1 && page <= totalPages) {
    currentMatchPage = page;
    renderMatches();
  }
}
window.goToMatchPage = goToMatchPage;

function initMatchesSwipe() {
  const grid = document.getElementById('matchesGrid');
  if (!grid || grid.__swipeInited) return;
  grid.__swipeInited = true;

  let startX = 0;
  let startY = 0;
  let startTime = 0;

  grid.addEventListener('touchstart', e => {
    if (e.touches && e.touches.length === 1) {
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
      startTime = Date.now();
    }
  }, { passive: true });

  grid.addEventListener('touchend', e => {
    if (!e.changedTouches || e.changedTouches.length !== 1) return;
    const dx = e.changedTouches[0].clientX - startX;
    const dy = e.changedTouches[0].clientY - startY;
    const elapsed = Date.now() - startTime;
    if (Math.abs(dx) > 45 && Math.abs(dy) < 60 && elapsed < 650) {
      if (dx < 0) {
        moveMatchPage(1);
      } else {
        moveMatchPage(-1);
      }
    }
  }, { passive: true });
}

function renderMatches() {
  const grid = document.getElementById('matchesGrid');
  if (!grid) return;
  updateMatchBadges();
  initMatchesSwipe();
  initMatchPillsScroller();

  const filtered = currentMatchFilter ? OPEN_MATCHES.filter(m => m.sportKey === currentMatchFilter || sportToKey(m.sportKey) === currentMatchFilter) : OPEN_MATCHES;

  const pagerBar = document.getElementById('matchesPager');

  if (!filtered.length) {
    if (pagerBar) pagerBar.style.display = 'none';
    grid.innerHTML = `
      <div class="match-empty-box">
        <strong>${esc(currentLang === 'en' ? 'No matches found in this category' : currentLang === 'ru' ? 'В этой категории пока нет игр' : 'Šajā kategorijā spēļu nav')}</strong>
        <span>${esc(currentLang === 'en' ? 'Be the first to create one!' : currentLang === 'ru' ? 'Будьте первым, кто создаст игру!' : 'Esi pirmais, kurš piesaka spēli!')}</span>
        <button type="button" class="btn btn-solid btn-create-match" onclick="openCreateMatchModal()">
          ${esc(t('btnCreateMatch'))}
        </button>
      </div>`;
    return;
  }

  const perPage = getMatchesPerPage();
  const totalPages = Math.max(1, Math.ceil(filtered.length / perPage));
  if (currentMatchPage > totalPages) currentMatchPage = totalPages;
  if (currentMatchPage < 1) currentMatchPage = 1;

  const startIndex = (currentMatchPage - 1) * perPage;
  const pageMatches = filtered.slice(startIndex, startIndex + perPage);

  // Update Pager UI
  if (pagerBar) {
    if (totalPages <= 1) {
      pagerBar.style.display = 'none';
    } else {
      pagerBar.style.display = 'flex';
      const pageLabel = document.getElementById('matchesPageLabel');
      if (pageLabel) pageLabel.textContent = `${currentMatchPage} / ${totalPages}`;

      const prevBtn = document.getElementById('matchesPrev');
      if (prevBtn) prevBtn.disabled = currentMatchPage <= 1;

      const nextBtn = document.getElementById('matchesNext');
      if (nextBtn) nextBtn.disabled = currentMatchPage >= totalPages;

      const infoEl = document.getElementById('matchesPagerInfo');
      if (infoEl) {
        const fromItem = startIndex + 1;
        const toItem = Math.min(startIndex + perPage, filtered.length);
        if (currentLang === 'en') {
          infoEl.textContent = `Showing ${fromItem}–${toItem} of ${filtered.length} matches`;
        } else if (currentLang === 'ru') {
          infoEl.textContent = `Показано ${fromItem}–${toItem} из ${filtered.length} игр`;
        } else {
          infoEl.textContent = `Rāda ${fromItem}–${toItem} no ${filtered.length} spēlēm`;
        }
      }

      const dotsEl = document.getElementById('matchesPagerDots');
      if (dotsEl) {
        dotsEl.innerHTML = Array.from({ length: totalPages }, (_, i) => {
          const p = i + 1;
          const act = p === currentMatchPage ? ' active' : '';
          const lbl = currentLang === 'en' ? `Page ${p}` : currentLang === 'ru' ? `Страница ${p}` : `Lapa ${p}`;
          return `<button type="button" class="match-page-dot${act}" onclick="goToMatchPage(${p})" aria-label="${lbl}" title="${lbl}"></button>`;
        }).join('');
      }
    }
  }

  grid.innerHTML = pageMatches.map(m => {
    const spotsLeft = Math.max(0, m.maxPlayers - m.players.length);
    const isFull = spotsLeft === 0;
    const isJoined = Boolean(m.userJoined);

    let spotsText = '';
    let spotsBadgeClass = 'match-spots-badge';
    if (isJoined) {
      spotsText = t('youJoined');
      spotsBadgeClass += ' joined';
    } else if (isFull) {
      spotsText = t('matchFull');
      spotsBadgeClass += ' full';
    } else {
      spotsText = spotsLeft === 1 ? t('needPlayersSingular').replace('{n}', spotsLeft) : t('needPlayersPlural').replace('{n}', spotsLeft);
    }

    const sportLabelText = sportLabel(m.sportKey) || m.sport;
    const splitFeeLabel = t('splitFee');
    const rosterPlayersLabel = t('rosterPlayers');
    const joinText = t('btnJoinMatch');
    const leaveText = t('btnLeaveMatch');
    const chatText = t('btnChatHost');
    const feeInfo = formatMatchFee(m);

    // Avatars row: filled avatars + interactive open slots
    const avatarSlots = [];
    m.players.forEach((p, idx) => {
      const isYou = isJoined && idx === (m.players.length - 1);
      avatarSlots.push(`<span class="roster-avatar${isYou ? ' you' : ''}" title="${isYou ? t('youJoined') : esc(p)}">${esc(p)}</span>`);
    });
    for (let s = 0; s < spotsLeft; s++) {
      avatarSlots.push(`
        <button type="button" class="roster-slot-btn" onclick="toggleJoinMatch('${esc(m.id)}')" aria-label="${esc(t('btnJoinMatch'))}" title="${esc(t('btnJoinMatch'))}">
          <span class="slot-plus" aria-hidden="true">+</span>
        </button>
      `);
    }

    return `
      <article class="match-card${isJoined ? ' is-joined' : ''}" data-match-id="${esc(m.id)}">
        <div class="match-card-body">
          <div class="match-card-top">
            <span class="match-sport-tag">
              ${sportIcon(m.sportKey, 18)}
              <span>${esc(sportLabelText)} · ${esc(m.city)}</span>
            </span>
            <div class="match-fee-pill">
              <span class="match-fee-val">${esc(feeInfo.price)}${feeInfo.unit ? ` <span class="match-fee-unit">${esc(feeInfo.unit)}</span>` : ''}</span>
              <span class="match-fee-sub">${esc(feeInfo.sub)}</span>
            </div>
          </div>

          <div class="match-info-main">
            <h3 class="match-venue-title">${esc(m.venueName)}</h3>
            <p class="match-venue-sub">${esc(m.venueAddress)}</p>
            <div class="match-meta-pills">
              <span class="match-meta-pill">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                ${esc(m.timeText)}
              </span>
              <span class="match-meta-pill">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.45 1-1 1H7c-.55 0-1-.45-1-1v-2.34"/><path d="M14 14.66V17c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-2.34"/></svg>
                ${esc(m.level)}
              </span>
            </div>
          </div>

          <p class="match-note">${esc(m.desc)}</p>
        </div>

        <div class="match-card-foot">
          <div class="match-roster-wrap">
            <div class="match-roster-head">
              <span>${esc(rosterPlayersLabel)} (<b>${m.players.length}/${m.maxPlayers}</b>)</span>
              <span>Host: <b>${esc(m.hostName)}</b></span>
            </div>
            <div class="match-roster-avatars">
              ${avatarSlots.join('')}
            </div>
          </div>

          <div class="match-card-actions">
            ${isJoined ? `
              <button type="button" class="btn match-btn-leave" onclick="toggleJoinMatch('${esc(m.id)}')">
                ${esc(leaveText)}
              </button>
            ` : `
              <button type="button" class="btn btn-solid match-btn-join" onclick="toggleJoinMatch('${esc(m.id)}')" ${isFull ? 'disabled' : ''}>
                ${isFull ? esc(t('matchFull')) : esc(joinText)}
              </button>
            `}
            <button type="button" class="btn btn-outline match-btn-chat" onclick="contactMatchHost('${esc(m.id)}')">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
              <span>${esc(chatText)}</span>
            </button>
          </div>
        </div>
      </article>
    `;
  }).join('');
}
window.renderMatches = renderMatches;

function toggleJoinMatch(matchId) {
  const m = OPEN_MATCHES.find(x => x.id === matchId);
  if (!m) return;

  if (m.userJoined) {
    // Leave match
    m.userJoined = false;
    m.players = m.players.filter(p => p !== 'TU' && p !== 'YOU' && p !== 'ВЫ');
    saveMatches();
    renderMatches();
    toast(currentLang === 'en' ? 'Left match.' : currentLang === 'ru' ? 'Вы вышли из игры.' : 'Dalība spēlē atcelta.', { type: 'info' });
  } else {
    // Check if full
    if (m.players.length >= m.maxPlayers) {
      toast(currentLang === 'en' ? 'Match is already full.' : currentLang === 'ru' ? 'В игре больше нет мест.' : 'Visas vietas jau ir aizņemtas.', { type: 'error' });
      return;
    }
    m.userJoined = true;
    const youInitials = currentLang === 'en' ? 'YOU' : currentLang === 'ru' ? 'ВЫ' : 'TU';
    m.players.push(youInitials);
    saveMatches();
    renderMatches();
    toast(currentLang === 'en' ? 'Joined! You are registered for the match.' : currentLang === 'ru' ? 'Вы записались на игру!' : 'Paldies! Esi veiksmīgi pieteicies spēlei.', { type: 'success' });
  }
}
window.toggleJoinMatch = toggleJoinMatch;

function contactMatchHost(matchId) {
  const m = OPEN_MATCHES.find(x => x.id === matchId);
  if (!m) return;

  const hostName = m.hostName || 'Organizators';
  const sportLv = sportLabel(m.sportKey) || m.sport;
  const city = m.city || 'Rīga';
  const level = m.level || 'Vidējs';

  let idx = DM_CONTACTS.findIndex(c => norm(c.name) === norm(hostName));
  if (idx < 0) {
    DM_CONTACTS.push({ name: hostName, sport: sportLv, city: city, level: level });
    DM_HISTORY.push([
      {
        from: 'them',
        text: currentLang === 'en'
          ? `Hey! I posted the match at ${m.venueName} (${m.timeText}). Do you have any questions or want to join?`
          : currentLang === 'ru'
          ? `Привет! Я создал игру в ${m.venueName} (${m.timeText}). Есть вопросы или хочешь сыграть?`
          : `Sveiks! Es organizēju spēli ${m.venueName} (${m.timeText}). Vai ir jautājumi vai vēlies pievienoties?`
      }
    ]);
    saveDM();
    idx = DM_CONTACTS.length - 1;
  }

  activeDM = idx;
  if (window.DM_UNREAD_STATE) {
    window.DM_UNREAD_STATE[idx] = false;
    updateNavMsgBadge();
  }

  initDM();
  openDM(activeDM, true, true);

  const msgEl = document.getElementById('messages');
  if (msgEl) {
    const headerH = document.querySelector('.site-header')?.offsetHeight || 72;
    const targetY = msgEl.getBoundingClientRect().top + window.scrollY - headerH - 12;
    window.scrollTo({ top: Math.max(0, targetY), behavior: 'smooth' });
  }

  setTimeout(() => {
    const input = document.getElementById('chatInput');
    if (input) {
      input.value = currentLang === 'en'
        ? `Hi ${hostName}, regarding the ${m.venueName} match...`
        : currentLang === 'ru'
        ? `Привет, ${hostName}! Насчёт игры в ${m.venueName}...`
        : `Sveiks, ${hostName}! Par spēli ${m.venueName}...`;
      try { input.focus({ preventScroll: true }); } catch (e) { input.focus(); }
    }
  }, 600);
}
window.contactMatchHost = contactMatchHost;

function openCreateMatchModal() {
  const modal = document.getElementById('createMatchModal');
  if (!modal) return;

  // Populate cities select
  const citySelect = document.getElementById('cmCity');
  if (citySelect && !citySelect.options.length) {
    const cities = getCityList();
    citySelect.innerHTML = cities.map(c => `<option value="${esc(c)}">${esc(c)}</option>`).join('');
  }

  modal.classList.add('open');
}
window.openCreateMatchModal = openCreateMatchModal;

function closeCreateMatchModal() {
  document.getElementById('createMatchModal')?.classList.remove('open');
}
window.closeCreateMatchModal = closeCreateMatchModal;

function handleCreateMatchSubmit(e) {
  e.preventDefault();
  const sportKey = document.getElementById('cmSport')?.value || 'padel';
  const city = document.getElementById('cmCity')?.value || 'Rīga';
  const venue = document.getElementById('cmVenue')?.value.trim() || 'Sporta laukums';
  const address = document.getElementById('cmAddress')?.value.trim() || city;
  const timeText = document.getElementById('cmTime')?.value.trim() || 'Šodien 19:00';
  const level = document.getElementById('cmLevel')?.value.trim() || 'Vidējs';
  const price = document.getElementById('cmPrice')?.value.trim() || 'Dalīta īre';
  const maxPlayers = parseInt(document.getElementById('cmMaxPlayers')?.value, 10) || 4;
  const hostName = document.getElementById('cmHostName')?.value.trim() || 'Organizators';
  const note = document.getElementById('cmNote')?.value.trim() || 'Aicināti pievienoties spēlētāji.';

  const hostInitials = nameInitials(hostName) || 'TU';

  const newMatch = {
    id: 'm_' + Date.now(),
    sportKey: sportKey,
    sport: sportLabel(sportKey),
    city: city,
    venueName: venue.toUpperCase(),
    venueAddress: address,
    timeText: timeText,
    level: level,
    pricePerPlayer: price,
    desc: note,
    maxPlayers: maxPlayers,
    players: [hostInitials],
    userJoined: true,
    hostName: hostName,
    hostContactId: 'user_host_' + Date.now()
  };

  OPEN_MATCHES.unshift(newMatch);
  currentMatchPage = 1;
  saveMatches();
  renderMatches();
  closeCreateMatchModal();
  document.getElementById('createMatchForm')?.reset();

  toast(currentLang === 'en' ? 'Match created successfully!' : currentLang === 'ru' ? 'Игра успешно создана!' : 'Spēle veiksmīgi pieteikta un pievienota sarakstam!', { type: 'success' });

  // Scroll to matches section
  document.getElementById('matches')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
window.handleCreateMatchSubmit = handleCreateMatchSubmit;

function initMatches() {
  renderMatches();
}
window.initMatches = initMatches;

