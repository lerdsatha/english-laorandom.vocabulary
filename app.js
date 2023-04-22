
const words = [
    {
        word:'small',
        wordlao:'ຂະໜາດນ້ອຍ',
        description :' of a mount that is less than normal',
        senten:'rabbit is a smal animal',

    },
    {
        word:'garden',
        wordlao:'ສວນ',
        description:' a piece of ground for growing flower',
        senten:'my sister grows flowers in her garden', 
    },
    {
        word:'final',
        wordlao:'ຄັ້ງສຸດທ້າຍ',
        description:' last, ultimate',
        senten:"my father's answer is final",
    },
    {
        word:'care',
        wordlao:'ດູແລ',
        description:'maintenance, nursing',
        senten:"i don't care for her",
    },
    {
        word:'everybody',
        wordlao:'ທຸກຄົນ',
        description:'every person',
        senten:'everybody saw it',
    },
    {
        word:'drive',
        wordlao:'ຂັບລົດ',
        description:'operate the direction',
        senten:'i drive for an hour',
    },
    {
        word:'appear',
        wordlao:'ປະກົດ',
        description:'come out',
        senten:'He suddenly appeared in the doorway',
    },
    {
        word:'but',
        wordlao:'ແຕ່ວ່າ',
        description:'it is used to jion two ideas that are opposite',
        senten:' i am very hungry, but the fridge is empty',
    },
    {
        word:'house',
        wordlao:'ເຮືອນ',
        description:'a building for human habitation',
        senten:' three families live in the same house',
    },
    {
        word:'hospital',
        wordlao:'ໂຮງໝໍ',
        description:'an institution for providing medical treament',
        senten:'We are going to take you to the hospital',
    },
    {
        word:'people',
        wordlao:'ຄົນ',
        description:'human being',
        senten:"i think the people who that live on the island are very friendly",
    },
    {
        word:'private',
        wordlao:'ສ່ວນຕົວ',
        description:'special, exclusive',
        senten:' all bedrooms have private facilities ',
    },
    {
        word:'region',
        wordlao:'ພາກພື້ນ, ເຂດ',
        description:'an area or division',
        senten:'it is the biggest sports shop in the region',
    },
    {
        word:'student',
        wordlao:'ນັກຮຽນ',
        description:'a person that is studying at a school or colleg',
        senten:' she was a good student and a good footballer',
    },
    {
        word:'wear',
        wordlao:'ສວມໃສ່',
        description:'draw on',
        senten:' she is wearing a blue jacket',
    },
    {
        word:'write',
        wordlao:'ຂຽນ',
        description:'mark on paper',
        senten:'i could write you a note if it would help',
    },
    {
        word:'under',
        wordlao:'ຂ້າງລຸ່ມ,ພາຍໃຕ້',
        description:'below, beneath,lower than',
        senten:"You're living under the same roof",
    },
    {
        word:'think',
        wordlao:'ຄິດ',
        description:'cosider, contemplate',
        senten:'i think, this is impossible',
    },
    {
        word:'support',
        wordlao:'ສະໜັບສະໜູນ',
        description:'to assistance',
        senten:'you know i always support you',
    },
    {
        word:'soulmate',
        wordlao:'ເນື້ອຄູ່',
        description:'a person ideally suited to another as a close friend or romantic partner.',
        senten:' Love is your true soulmate, fear is your great soul enemy. ',
    },
    {
        word:'size',
        wordlao:'ຂະໜາດ',
        description:'dimensions',
        senten:' we usually take size seven shoes',
    },
    {
        word:'reduce',
        wordlao:'ຫຼຸດຜ່ອນ',
        description:'decrease, abate',
        senten:'football is good for reducing stress',
    },
    {
        word:'price',
        wordlao:'ລາຄາ',
        description:'cost, terms',
        senten:'what is the price',
    },
    {
        word:'out',
        wordlao:'ອອກ',
        description:'abroad, exit',
        senten:'he walked out into the street',
    },
    {
        word:'movie',
        wordlao:'ໜັງ',
        description:'a film shown in a theater or on television and often telling a story',
        senten:'I thought we might get something to eat and then go to see a movie',
    },
    {
        word:'lawyer',
        wordlao:'ທະນາຍຄວາມ',
        description:'attorney or counselor',
        senten:'please, talk to my lawyer',
    },
    {
        word:'inside',
        wordlao:'ຂ້າງໃນ, ພາຍໃນ',
        description:'in, within',
        senten:'my mother went inside ',
    },
    {
        word:'general',
        wordlao:'ທົ່ວໄປ',
        description:'public, not special',
        senten:'the general manager is the meeting room',
    },
    {
        word:'futile',
        wordlao:'ບໍ່ມີປະໂຫຍດ',
        description:'vain, useless',
        senten:'he sighed at the futile thoughts',
    },
    {
        word:'family',
        wordlao:'ຄອບຄົວ',
        description:'parents and children living together in a household',
        senten:' my sister gets up earliest in my family ',
    },
    {
        word:'enjoy',
        wordlao:'ມ່ວນ,ເພີດເພີນ',
        description:'delight',
        senten:'i enjoy movies',
    },
    {
        word:'discover',
        wordlao:'ຄົນພົບ',
        description:'work out, explore',
        senten:'i am not able to discover it',
    },
    {
        word:'common',
        wordlao:'ທຳມະດາ, ທົ່ວໄປ',
        description:'mutual, agrees',
        senten:' she has a common name',
    },
    {
        word:'buy',
        wordlao:'ຊື້',
        description:'purchase',
        senten:'wine is rarely a good buy in duty-free shops',
    },
    {
        word:'born',
        wordlao:'ກຳເນີດ',
        description:'existing as a result of birth',
        senten:' she was born in laos',
    },
    {
        word:'ask',
        wordlao:'ຖາມ',
        description:'inquire',
        senten:'we will ask my teacher',
    },
    {
        word:'again',
        wordlao:'ອີກຄັ້ງ',
        description:'another time',
        senten:' please repeat again',
    },
    {
        word:'break',
        wordlao:'ທຳລາຍ, ຫຍຸດພັກ',
        description:'separate or cause to separate into pieces as a result of a blow, shock, or strain',
        senten:' windows in the street were broken by the blast',
    },
    {
        word:'continue',
        wordlao:'ດຳເນີນການຕໍ່',
        description:'proceed, keep going',
        senten:' we will continue later',
    },
    {
        word:'later',
        wordlao:'ພາຍຫຼັງ',
        description:'at a time in the near future',
        senten:"i'll see you later",
    },
    {
        word:'direction',
        wordlao:'ທິດທາງ',
        description:'a course along which someone or something moves',
        senten:'she set off in the opposite direction',
    },
    {
        word:'example',
        wordlao:'ຕົວຢ່າງ',
        description:'sample, instance',
        senten:'they have to set a good example',
    },
    {
        word:'financial',
        wordlao:'ການເງິນ',
        description:'fiscal',
        senten:'everybody need some financial advice',
    },
    {
        word:'government',
        wordlao:'ລັດຖະບານ',
        description:'administrator',
        senten:'public opinion can force the government into action',
    },
    {
        word:'hundred',
        wordlao:'ໜຶ່ງຮ້ອຍ',
        description:'100',
        senten:'we have a hundred kip in cash',
    },
    {
        word:'improve',
        wordlao:'ພັດທະນາ',
        description:'achieve or produce something better than',
        senten:'they are trying to improve on the tired old style',
    },
    {
        word:'leave',
        wordlao:'ອອກໄປ, ປະຈາກ',
        description:'release, quit',
        senten:'i am sorry but i must leave',
    },
    {
        word:'quit',
        wordlao:'ເຊົາ, ລົ້ມເລີກ',
        description:'to stop doing something or leave a job or a place',
        senten:'Many smokers have used willpower to try to quit',
    },
    {
        word:'love',
        wordlao:'ຮັກ',
        description:'affection, passion',
        senten:' i love you',
    },
    {
        word:'move',
        wordlao:'ເຄື່ອນໄຫວ',
        description:'change position',
        senten:"nobady's moving",
    },
    {
        word:'learn',
        wordlao:'ຮຽນຮູ້',
        description:'find out information',
        senten:' i have to learn english',
    },
    {
        word:'nationalL',
        wordlao:'ແຫ່ງຊາດມ ລະດັບຊາດ',
        description:'a citizen of a particular country',
        senten:'germany national team logo gains the first star',
    },
    {
        word:'offer',
        wordlao:'ສະເໜີ',
        description:'an expression of readiness to do something if desired',
        senten:'i accepted the offer',
    },
    {
        word:'only',
        wordlao:'ເທົ່ານັ້ນ',
        description:'no one or nothing more besides',
        senten:'there are only a limited number of tickets available',
    },
    {
        word:'own',
        wordlao:'ເປັນເຈົ້າຂອງ',
        description:'possess oneself of',
        senten:'she has her own room',
    },
    {
        word:'payment',
        wordlao:'ການຈ່າຍເງິນ,ການໃຊ້ຈ່າຍ',
        description:'the action or process of paying someone or something or of being paid',
        senten:'if you get behind in your car payment, the car may be repossessed',
    },
    {
        word:'point',
        wordlao:'ຈຸດ, ປະເດັນ',
        description:'a particular spot, place, or position in an area or on a map',
        senten:'turn left at the point where you see a sign to Appleford',
    },
    {
        word:'project',
        wordlao:'ໂຄງການ',
        description:'design, plan',
        senten:'a project to build a new power station',
    },
    {
        word:'research',
        wordlao:'ວິໄຈ, ຄົ້ນຄ້ວາ',
        description:'investigate',
        senten:'the group carries out research in geochemistry',
    },
    {
        word:'say',
        wordlao:'ການເວົ້າ',
        description:'utter words so as to convey information, an opinion',
        senten:'my son says hello',
    },
    {
        word:'sell',
        wordlao:'ການຂາຍ',
        description:'give in exchange for money',
        senten:' they had sold the car',
    },
    {
        word:'show',
        wordlao:'ການເຜີຍແຜ່',
        description:'allow or cause (something) to be visible',
        senten:'Will you show me how to do that',
    },
    {
        word:'suffer',
        wordlao:'ທຸກທໍລະມານ',
        description:'experience or be subjected to (something bad or unpleasant',
        senten:'they are suffering from hunger',
    },
    {
        word:'town',
        wordlao:'ເມືອງ',
        description:'the central part of a neighbourhood',
        senten:'was your university in town',
    },
    {
        word:'water',
        wordlao:'ນຳ້',
        description:'a stretch or area of water, such as a river, sea, or lake',
        senten:'can I have a drink of water',
    },
    {
        word:'world',
        wordlao:'ໂລກ',
        description:'together with all of its people, and natural features etc..',
        senten:'we want to change the world ',
    },
    {
        word:'story',
        wordlao:'ເລື່ອງລາວ',
        description:'an account of imaginary or real people and events told for entertainment',
        senten:'the movie was based on a true story',
    },
    {
        word:'skill',
        wordlao:'ທັກສະ',
        description:'the ability to do something well',
        senten:'difficult work, taking great skill',
    },
    {
        word:'ability',
        wordlao:'ຄວາມສາມາດ',
        description:'possession of the means or skill to do something',
        senten:'the manager had lost his ability to motivate the players',
    },
    {
        word:'rest',
        wordlao:'ພັກຜ່ອນ',
        description:'cease work or movement in order to relax, sleep, or recover strength',
        senten :"I'm going to rest up before travelling to champasak",
    },
    {
        word:'exhausted',
        wordlao:'ເມື່ອຍລ້າ',
        description:'extremely tired:',
        senten:'By the time they reached the summit they were exhausted.',
    },
    {
        word:'product',
        wordlao:'ຜະລິດຕະພັນ',
        description:'an article or substance that is manufactured or refined for sale',
        senten:'the tax on these product is very high',
    },
    {
        word:'produce',
        wordlao:'ຜະລິດ',
        description:'make or manufacture from components or raw materials',
        senten:'the company have just produced a luxury version of the aircraft',
    },
    {
        word:'perfrorm',
        wordlao:'ດຳເນີນການ, ສະແດງ',
        description:'carry out, accomplish, or fulfil (an action, task, or function)',
        senten:' I have my duties to perform"',
    },
    {
        word:'mean',
        wordlao:'ຄວາມໝາຍ, ໝາຍເຖິງ',
        description:'intend to convey or refer to (a particular thing); signify',
        senten:'he was asked to clarify what his remarks meant',
    },
    {
        word:'level',
        wordlao:'ລະດັບ',
        description:'a position on a scale of amount',
        senten:' a high level of unemployment',
    },
    {
        word:'friendly',
        wordlao:'ເປັນມິດ',
        description:'kind and pleasan',
        senten:'the horse which she was riding is very friendly and beautiful',
    },
    {
        word:'force',
        wordlao:'ບັງຄັບ,ຝືນ',
        description:'coercion or compulsion, especially with the use or threat of violence',
        senten:'they ruled by law and not by force',
    },
    {
        word:'enough',
        wordlao:'ພໍ, ພຽງພໍ',
        description:'as much or as many as required',
        senten:"there's too much work and not enough people to do it",
    },
    {
        word:'identify',
        wordlao:'ແຍກແຍະ,ລະບຸ, ບົ່ງຕົວ',
        description:'establish or indicate who or what (someone or something) is',
        senten:'the judge ordered that the girl should not be identified',
    },
    {
        word:'hour',
        wordlao:'ຊົ່ວໂມງ',
        description:'clock',
        senten:'the clock in the sitting room struck the hour',
    },
    {
        word:'pray',
        wordlao:'ອະທິຖານ',
        description:'address a prayer to God or another deity',
        senten:' the whole family are praying for john',
    },
    {
        word:'reach',
        wordlao:'ຮອດ, ບັນລຸ',
        description:'arrive at; get as far as',
        senten:' the show is due to reach our screens early next year',
    },
    {
        word:'get',
        wordlao:'ໄດຮັບ',
        description:'come to have (something); receive',
        senten:' I got a letter from him the other day',
    },
    {
        word:'determine',
        wordlao:'ກຳນົດ,ຕັດສິນໃຈ',
        description:'to control or influence something directly, or to decide what will happen',
        senten:' People should be allowed to determine their own future.',
    },
    {
        word:'agree',
        wordlao:'ເຫັນດີ',
        description:'have the same opinion about something ',
        senten:'I completely agree with your recent editorial',
    },
    {
        word:'influence',
        wordlao:'ອິດທິພົນ',
        description:'the power to have an effect on people or things, or a person or thing that is able to do this ',
        senten:'He has a huge amount of influence over the city council',
    },
    {
        word:'arrive',
        wordlao:'ມາຮອດ,ຮອດ',
        description:'is to get to or reach some place',
        senten:'the bus always arrives at the corner of my street at 6:00',
    },
    {
        word:'attack',
        wordlao:'ໂຈມຕີ',
        description:' is to try to fight or to hurt',
        senten:'the man with the sword attacked the other man first',
    },
    {
        word:'bottom',
        wordlao:'ຢູ່ຂ້າງລຸ່ມ,',
        description:'the lowest part',
        senten:'the bottom of my shose has a hole in it',
    },
    {
        word:'clever',
        wordlao:'ສະຫຼາດ',
        description:'when someone is clever, they can solve a hard puzzle or problem',
        senten:'the clever boy thought of good idea',
    },
    {
        word:'CRUEL',
        wordlao:'ໂຫດຮ້າຍ',
        description:'to do bad things to hurt others',
        senten:' the cruel man yelled at his sister',
    },
    {
        word:'HIDE',
        wordlao:'ຫຼົບ, ລີ້',
        description:'try not to let others see you',
        senten:'the other chidren will hide while you count to 10',
    },
    {
        word:'HUNT',
        wordlao:'ລ່າ',
        description:'look for or search for something to kill',
        senten:'long ago, people hunted with bows and arrows',
    },
    {
        word:'middle',
        wordlao:'ກາງ',
        description:'the center or halfway point',
        senten:'the canadian flag has a maple leaf in the middle of it',
    },
    {
        word:'pleased',
        wordlao:'ເພິ່ງພໍໃຈ',
        description:'when someone is pleased, they are happy',
        senten:'she was pleased with the phone call she received',
    },
    {
        word:'promise',
        wordlao:'ສັນຍາ',
        description:'do something for sure',
        senten:'he promised to return my key by tomorrow',
    },
    {
        word:'return',
        wordlao:'ສົ່ງຄືນ, ກັບຄືນ',
        description:'give, put, or send (something) back to a place or person',
        senten:'She left South Africa at the age of 15 and has never returned.',
    },
    {
        word:'reply',
        wordlao:'ຕອບກັບ',
        description:'say back to someone',
        senten:' she asked him what time his meeting was. he replied,"at three" ',
    },
    {
        word:'safe',
        wordlao:'ປອດໄພ',
        description:'when a person is safe, they are not in danger',
        senten:'put on your seat belt in the car to be safe',
    },
    {
        word:'trick',
        wordlao:'ເຫຼ້ຫຼຽ່ມ',
        description:'something you do to fool another person',
        senten:'his card trick really surprised us',
    },
    {
        word:'adventure',
        wordlao:'ຜະຈົນໄພ',
        description:'a fun or exciting thing that you do',
        senten:'riding in the rough water was an adventure',
    },
    {
        word:'approach',
        wordlao:'ເຂົ້າໃກ້',
        description:'move close to it',
        senten:'the boy approached his school',
    },
    {
        word:'create',
        wordlao:'ສ້າງ',
        description:'make somthing new',
        senten:'she created an igloo from blocks of snow',
    },
    {
        word:'experiment',
        wordlao:'ການທົດລອງ',
        description:'test that you do to see what will hapen',
        senten:'the student did an experiment in science class',
    },
    {
        word:'laugh',
        wordlao:'ການຫົວ',
        description:'when somone is happy or a funny thing occurs',
        senten:'the sound of their laugh filled the room',
    },
    {
        word:'loud',
        wordlao:'ສຽງດັງ',
        description:' it is strong and very easy th hear',
        senten:"the man's voice was so loud the we all could hear him",
    },
    {
        word:'hear',
        wordlao:'ໄດ້ຍິນ',
        description:'perceive with the ear the sound made by (someone or something)',
        senten:"behind her she could hear men's voices",
    },
    {
        word:'nervous',
        wordlao:'ກັງວົນ',
        description:'when someone os nervous, they think something bad will happen',
        senten:'the boy become nervous when he heard the news',
    },
    {
        word:'excited',
        wordlao:'ຄວາມຮູ້ສຶກຕື່ນເຕັ້ນ',
        description:'very enthusiastic and eager',
        senten:'they were excited about the prospect',
    },
    {
        word:'reckless',
        wordlao:'ປະໝາດ',
        description:"heedless of danger or the consequences of one's actions",
        senten:"you mustn't be so reckless",
    },
    {
        word:'paranoid',
        wordlao:'ວິຕົກກັງວົນ, ລະແວງ',
        description:'unreasonably or obsessively anxious, suspicious, or mistrustful',
        senten:' he has always been paranoid about his personal security',
    },
    {
        word:'noise',
        wordlao:'ສຽງລົບກວນ',
        description:'a sound, especially one that is loud or unpleasant or that causes disturbance',
        senten:'the crying baby made a loud noise',
    },
    {
        word:'fear',
        wordlao:'ຄວາມຍ້ານ',
        description:'be afraid of (someone or something) as likely to be dangerous',
        senten:'farmers fear that they will lose business',
    },
    {
        word:'secret',
        wordlao:'ຄວາມລັບ',
        description:'something that is kept or meant to be kept unknown or unseen by others',
        senten:'the two boys were sharing a secret',
    },
    {
        word:'shout',
        wordlao:'ຮ້ອງໄສ່, ຕະຄອກ',
        description:'say something loudy',
        senten:'my boss shouted at me because i was late for work',
    },
    {
        word:'smell',
        wordlao:'ດົມກິ່ນ, ກິ່ນ',
        description:'use your nose to sense it',
        senten:'the two friends smelled the flower',
    },
    {
        word:'among',
        wordlao:'ໃນລະຫວ່າງ',
        description:'if you are among certain things, they are all around you',
        senten:'there was a red apple among green ones',
    },
    {
        word:'cloud',
        wordlao:'ເມກ',
        description:'group of water drops in the sky',
        senten:'the sky was filled with white clouds',
    },
    {
        word:'fill',
        wordlao:'ຕື່ມ',
        description:'cause (a space or container) to become full or almost full',
        senten:'I filled the bottle with water"',
    },
    {
        word:'comprehend',
        wordlao:'ທຳຄວາມເຂົ້າໃຈ',
        description:'to understand it',
        senten:'john could not comprehend the message',
    },
    {
        word:'describe',
        wordlao:'ອະທິບາຍ',
        description:'give a detailed account in words of',
        senten:'he described his experiences in a letter to his parents',
    },
    {
        word:'fail',
        wordlao:'ຫຼົ້ມເຫຼວ',
        description:'do not succeed in what you try to do',
        senten:'since he failed to get the job, he was sad',
    },
    {
        word:'instead',
        wordlao:'ແທນ, ແທນທີ່',
        description:'in place of',
        senten:'he ate the carrot instead of the ice cream',
    },
    {
        word:'library',
        wordlao:'ຫ້ອງສະໝຸດ',
        description:'place where you go to read books',
        senten:'the library at school is full of books',
    },
    {
        word:'place',
        wordlao:'ສະຖານທີ່',
        description:'a particular position, point, or area in space; a location',
        senten:"I can't be in two places at once",
    },
    {
        word:'planet',
        wordlao:'ດາວເຄາະ',
        description:'a large round thing in space',
        senten:'saturn is the planet with the ring around it',
    },
    {
        word:'report',
        wordlao:'ລາຍງານ',
        description:'give a spoken or written account of something that one has observed, heard, done',
        senten:'We called the insurance company to report the theft. ',
    },
    {
        word:'solve',
        wordlao:'ແກ້,ແກ້ໄຂ',
        description:'to find an answer to it',
        senten:' all the students could easily solve the math problem ',
    },
    {
        word:'answer',
        wordlao:'ຄຳຕອບ',
        description:'a thing that is said, written, or done as a reaction to a question',
        senten:'he knocked and entered without waiting for an answer',
    },
    {
        word:'appropriate',
        wordlao:'ສົມຄວນ, ເໝາະສົມ',
        description:'it is right or normal',
        senten:"it's appropriate to wear a suit when you go to the office",
    },
    {
        word:'avoid',
        wordlao:'ຫຼີກ, ຫຼົບ',
        description:'to stay away from it',
        senten:' avoid the brokenbottle on the floor',
    },
    {
        word:'concern',
        wordlao:'ກັງວົນ',
        description:'feeling of worry',
        senten:'i was filled with concern after reading the newpaper',
    },
    {
        word:'expect',
        wordlao:'ຄາດຫວັງ',
        description:'believe it will happen',
        senten:'i expect the bus to br here very soon',
    },
    {
        word:'frequently',
        wordlao:'ເປັນປະຈຳ',
        description:'it happen often',
        senten:'we meet frequently, either at rhe  beginning or ending of the week',
    },
    {
        word:'habit',
        wordlao:'ນິໃສ',
        description:'thing that you do often',
        senten:'smoking is a bad habit that can kill you',
    },
    {
        word:'obsessed',
        wordlao:'ໝົກມຸ້ນ,ຕິດ',
        description:'unable to stop thinking about something; too interested in or worried about something',
        senten:'Why are people so obsessed with money?',
    },
    {
        word:'issue',
        wordlao:'ບັນຫາ,ປະເດັນ',
        description:'an important topic or problem for debate or discussion',
        senten:"Don't worry about who will do it - that's just a side issue (= not the main problem)",
    },
    {
        word:'patience',
        wordlao:'ຄວາມອົດທົນ',
        description:"don't become angry or upset easily  ",
        senten:"You have to have a lot of patience when you're dealing with kids.",
    },
    {
        word:'positive',
        wordlao:'ດີ, ໄປໃນທາງດີ',
        description:'it is good',
        senten:'she has a positive future ahead of her after finishing college',
    },
    {
        word:'punish',
        wordlao:'ລົງໂທດ',
        description:'make someone suffer for breaking the ruls or laws',
        senten:'to punish me, my teacher had me stand in the corner',
    },
    {
        word:'law',
        wordlao:'ກົດໝາຍ',
        description:'a rule defining correct procedure or behaviour',
        senten:'shooting the birds is against the law',
    },
    {
        word:'illegal',
        wordlao:'ຜິດກົດໝາຍ',
        description:'contrary to or forbidden by law, especially criminal law:',
        senten:' It is illegal to drive a car that is not registered and insured',
    },
    {
        word:'Act',
        wordlao:'ການກະທຳ',
        description:'take action; do something',
        senten:'we must act to reduce pollution',
    },
    {
        word:'represent',
        wordlao:'ຕົວແທນ',
        description:'to speak or act for a person or group',
        senten:'my lawyer will represent me in court',
    },
    {
        word:'priority',
        wordlao:'ລຳດັບຄວາມສຳຄັນ',
        description:'the fact or condition of being regarded or treated as more important than others',
        senten:'the safety of the country takes priority over any other matter',
    },
    {
        word:'approve',
        wordlao:'ອະນຸມັດ',
        description:'officially agree to or accept as satisfactory',
        senten:'the budget was approved by parliament',
    },
    {
        word:'sacrifice',
        wordlao:'ເສຍສະຫຼະ',
        description:'an act of giving up something valued for the sake of something else regarded as more important or worthy',
        senten:'we must all be prepared to make sacrifices',
    },
    {
        word:'satisfy',
        wordlao:'ພໍໃຈ',
        description:'contented, pleased',
        senten:' she was very satisfied with the results',
    },
    {
        word:'sarcastic',
        wordlao:'ປະຊົດປະຊັນ',
        description:'marked by or given to using irony in order to mock or convey contempt',
        senten:"I think they're being sarcastic",
    },
    {
        word:'privilege',
        wordlao:'ສິດທິພິເສດ',
        description:'a special right, advantage, or immunity granted or available only to a particular person or group',
        senten:'he has been accustomed all his life to wealth and privilege"',
    },
    {
        word:'accurate',
        wordlao:'ແມ໋ນຍຳ, ຖືກຕ້ອງ',
        description:'(especially of information, measurements, or predictions) correct in all details; exact',
        senten:' accurate information about the illness is essential',
    },
    {
        word:'permanent',
        wordlao:'ຖາວອນ',
        description:'lasting or intended to last or remain unchanged indefinitely',
        senten:'Are you looking for a temporary or a permanent job?',
    },
    {
        word:'temporary',
        wordlao:'ຊົ່ວຄາວ',
        description:'lasting for only a limited period of time; not permanent',
        senten:' a temporary job',
    },
    {
        word:'ignore',
        wordlao:'ບໍ່ສົນໃຈ',
        description:'refuse to take notice of or acknowledge; disregard intentionally',
        senten:"I smiled at her but she just ignored met",
    },
    {
        word:'refuse',
        wordlao:'ປະຕິເສດ',
        description:'indicate or show that one is not willing to do something',
        senten:' I refused to answer',
    },
    {
        word:'help',
        wordlao:'ຊ່ວຍເຫຼືອ',
        description:"make it easier or possible for (someone) to do something by offering one's services or resources",
        senten:' she helped him find a buyer',
    },
    {
        word:'desire',
        wordlao:'ຄວາມຕ້ອງການ',
        description:'to desire is to want something',
        senten:' my sister desires a big house and lots of money',
    },
    {
        word:'household',
        wordlao:'ຄົວເຮືອນ',
        description:'people who live in one house',
        senten:'ours houshole is made up of my father, my mother and me',
    },
    {
        word:'intent',
        wordlao:'ຕັ້ງໃຈ',
        description:'a plan to do something',
        senten:'her intent is to visit Italy next summer',
    },
    {
        word:'landscape',
        wordlao:'ພູມສັນຖານ',
        description:'an area of land looks',
        senten:'the lanscape of the country is very green',
    },
    {
        word:'absent',
        wordlao:'ການຂາດ',
        description:'not present in a place, at an occasion, or as part of something',
        senten:'john has been absent from school for three days now.',
    },
    {
        word:'lift',
        wordlao:'ຍົກ',
        description:'to move it higher',
        senten:' the man treed to lift the box',
    },
    {
        word:'try',
        wordlao:'ລອງ, ພະຍາຍາມ',
        description:'make an attempt or effort to do something',
        senten:'  started to try and untangle the mystery',
    },
    {
        word:'decide',
        wordlao:'ຕັດສິນໃຈ',
        description:'make a choice from a number of alternatives',
        senten:' she had decided on her plan of action',
    },
    {
        word:'load',
        wordlao:'ເພີ່ມເຂົ້າ',
        description:'to put object into something',
        senten:' the man loaded the boxes into a truck',
    },
    {
        word:'polite',
        wordlao:'ສຸພາບ',
        description:'when someone is polite, they are acting in thoughtful way',
        senten:' the boy was very polite, he behaved very thoughtfully',
    },
    {
        word:'behave',
        wordlao:'ການກະທຳ',
        description:'act or conduct oneself in a specified way, especially towards others',
        senten:'he always behaved like a gentleman',
    },
    {
    word:'crash',
    wordlao:'ຂັດຂ້ອງ, ປະທະ',
    description:' (of a vehicle) collide violently with an obstacle or another vehicle',
    senten:"a racing car had crashed, wrecking a safety barrier",
    },
    {
        word:'obstacle',
        wordlao:'ອຸປະສັກ',
        description:"a thing that blocks one's way or prevents or hinders progress",
        senten:'the major obstacle to achieving that goal is money',
     },
     {
        word:'possess',
        wordlao:'ຄອບຄອງ',
        description:'to have it or own it',
        senten:'my uncle possesses three sheeps, a chicken, a cow and a dog',
    },
    {
        word:'observe',
        wordlao:'ສັງເກດການ',
        description:'notice or perceive (something) and register it as being significant',
        senten:'she observed that all the chairs were already occupied',
    },
    {
        word:'seek',
        wordlao:'ຫາ, ສະແຫ່ວງຫາ',
        description:'to look for something',
        senten:"if i have a problem, i seek my sister's advice",
    },
    {
        word:'advice',
        wordlao:'ຄຳແນະນຳ',
        description:'guidance or recommendations offered with regard to prudent future action',
        senten:'my advice is to see your doctor',

    },
    {
        word:'bring',
        wordlao:'ນຳມາ,ພາໄປ',
        description:'to take someone or somthing to person or place',
        senten:"wake up—I've brought you some coffee",

    },
    {
        word:'command',
        wordlao:'ສັ່ງການ',
        description:'to tell someone to do something',
        senten:'He hated being in the army because he had to obey commands',

    },
    {
        word:'consultant',
        wordlao:'ທີ່ປຶກສາ',
        description:'a person who provides expert advice professionally',
        senten:'she is currently a self-employed business consultant',

    },
    {
        word:'surreal',
        wordlao:'ເກີນຈິງ, ບໍ່ເໝືອນຈິງ',
        description:'strange; not seeming real; like a dream',
        senten:'Driving through the total darkness was a slightly surreal experience.',

    },
    {
        word:'explosion',
        wordlao:'ການລະເບີດ',
        description:'ັa violent burst, usually with a loud sound',
        senten:'a nuclear explosion can cause great damage',

    },
    {
        word:'burden',
        wordlao:'ພາລະ',
        description:'a heavy load that you carry',
        senten:'Buying a house often places a large financial burden on young couples',

    },
    {
        word:'stubborn',
        wordlao:'ດື້, ປາກແຂງ',
        description:"having or showing dogged determination not to change one's attitude or position on something",
        senten:'two stubborn young people intent on doing their own thing',

    },
    {
        word:'environment',
        wordlao:'ສິ່ງແວດລ້ອມ',
        description:'the surroundings or conditions in which a person, animal, or plant lives or operates',
        senten:"We're not doing enough to protect the environment from pollution.",

    },
    {
        word:'convince',
        wordlao:'ໂນ້ມນ້າວ,ເຮັດໃຫ້ເຊື່ອ',
        description:'cause (someone) to believe firmly in the truth of something',
        senten:' we had to convince politicians that they needed to do something"',

    },
    {
        word:'participate',
        wordlao:'ມີສ່ວນຮ່ວມ, ເຂົ້າຮ່ວມ',
        description:'take part in an action or endeavour',
        senten:'the art fair was held in 1967, with twenty galleries participating"',

    },
    {
        word:'complicate',
        wordlao:'ສັບຊ້ອນ, ສັບສົນ',
        description:'consisting of many interconnecting parts or elements; intricate',
        senten:'a complicated stereo system',

    },
    {
        word:'system',
        wordlao:'ລະບົບ',
        description:'a set of things working together as parts of a mechanism or an interconnecting network; a complex whole',
        senten:'the state railway system"',

    },
    {
        word:'meteor',
        wordlao:'ດາວຕົກ',
        description:'a rock from ouyer space that falls to earth',
        senten:'we saw a meteor in the sky lasst night',

    },
    {
        word:'remote',
        wordlao:'ໄລຍະໄກ, ຫ່າງໄກ ',
        description:'it is very far away and difficult to get to',
        senten:'it took many days to get to the remote island',

    },
    {
        word:'island',
        wordlao:'ເກາະ',
        description:'a piece of land surrounded by water',
        senten:'a Pacific island',

    },
    {
        word:'statue',
        wordlao:'ຮູບປັ້ນ',
        description:'an image of person or animal made of stone or metal',
        senten:'i saw a beautiful statue of lion today',

    },
    {
        word:'submit',
        wordlao:'ສົ່ງ,  ຍອມ',
        description:'to agree to do what thry tell you to do',
        senten:"she submitted to her mother's whishes and did her homework",

    },
    {
        word:'assignment',
        wordlao:'ສິ່ງທີ່ມອບໝາຍ',
        description:'a task or piece of work allocated to someone as part of a job or course of study',
        senten:'a homework assignment',

    },
    {
        word:'expression',
        wordlao:'ການສະແດງອອກ',
        description:" the action of making known one's thoughts or feelings",
        senten:"By the expression on his face, he wasn't exactly enjoying the conversation",

    },
    {
        word:'conflict',
        wordlao:'ຂັດແຍ່ງ',
        description:'a serious disagreement or argument, typically a protracted one',
        senten:"parents' and children's interests sometimes conflict",

    },
    {
        word:'interest',
        wordlao:'ຄວາມສົນໃຈ',
        description:'the feeling of wanting to know or learn about something or someone',
        senten:'Unfortunately, I lost interest half way through the film',

    },
    {
        word:'increase',
        wordlao:'ເພີ່ມຂຶ້ນ',
        description:'become or make greater in size, amount, or degree',
        senten:'we are aiming to increase awareness of social issues',

    },
    {
        word:'combine',
        wordlao:'ລວມເຂົ້າກັນ',
        description:'join or merge to form a single unit or substance',
        senten:'combine the flour with the margarine and salt',

    },
    {
        word:'equal',
        wordlao:'ເທົ່າກັນ, ສົມດຸນ',
        description:'being the same in quantity, size, degree, or value',
        senten:'add equal amounts of water and flour',

    },
    {
        word:'equality',
        wordlao:'ຄວາມເທົ່າທຽມກັນ',
        description:'the state of being equal, especially in status, rights, or opportunities',
        senten:'an organization aiming to promote racial equality',

    },
    {
        word:'quality',
        wordlao:' ຄຸນນະພາບ',
        description:'he standard of something as measured against other things of a similar kind; the degree of excellence of something',
        senten:'hese colleges provide a better quality of education',

    },
    {
        word:'quantity',
        wordlao:'ປະລິມານ',
        description:'the amount or number of a material or abstract thing not usually estimated by spatial measurement',
        senten:'the quantity and quality of the fruit can be controlled',

    },
    {
        word:'reflect',
        wordlao:'ສະທ້ອນ',
        description:'(of a surface or body) throw back (heat, light, or sound) without absorbing it',
        senten:"when the sun's rays hit the Earth a lot of the heat is reflected back into space",

    },
    {
        word:'process',
        wordlao:'ຂະບວນການ, ຂັ້ນຕອນ',
        description:' a series of actions or steps taken in order to achieve a particular end',
        senten:"It's all part of the learning process",

    },
    {
        word:'ingredient',
        wordlao:'ສ່ວນປະກອບ,ວັດຖຸດິບ',
        description:'any of the foods or substances that are combined to make a particular dish',
        senten:'pork is an important ingredient in many stir-fried dishes',

    },
    {
        word:'abandon',
        wordlao:' ຈາກໄປ, ລະຖິ້ມ',
        description:'cease to support or look after (someone); desert',
        senten:'her natural mother had abandoned her at an early age',

    },
    {
        word:'burp',
        wordlao:'ເອື້ອມ',
        description:'noisily release air from the stomach through the mouth; belch',
        senten:'If you swallow a burp does it turn into a fart?',

    },
    {
        word:'announce',
        wordlao:'ປະກາດ',
        description:'make a formal public statement about a fact, occurrence, or intention',
        senten:'he announced his retirement from international football',

    },
    {
        word:'retire',
        wordlao:'ກະສຽນ',
        description:"leave one's job and cease to work, typically on reaching the normal age for leaving service",
        senten:'Since retiring from the company, she has done voluntary work for a charity.',

    },
    {
        word:'withdrew',
        wordlao:'ການຖອນຕົວ, ນຳອອກ',
        description:'to take or move out or back, or to remove',
        senten:'This credit card allows you to withdraw up to £200 a day from ATMs',

    },
    {
        word:'remove',
        wordlao:'ລົບ, ເອົາອອກ',
        description:'atake (something) away or off from the position occupied',
        senten:'she sat down to remove her make-up',

    },
    {
        word:'opportunity',
        wordlao:'ໂອກາດ',
        description:'a time or set of circumstances that makes it possible to do something:',
        senten:'the night drive gave us the opportunity of spotting rhinos',

    },
    {
        word:'costomer',
        wordlao:'ລູກຄ້າ',
        description:'a person who buys goods or services from a shop or business',
        senten:'Mr Harrison was a regular customer at the Golden Lion"',

    },
    {
        word:'employee',
        wordlao:'ລູກຈ້າງ',
        description:'a person employed for wages or salary, especially at non-executive level',
        senten:'Every employee of this company will be subject to annual cognitive tests',

    },
    {
        word:'concentrate',
        wordlao:'ມີສະມາທິ',
        description:"focus all one's attention on a particular object or activity",
        senten:"she couldn't concentrate on the film",

    },
    {
        word:'fee',
        wordlao:'ຄ່າທຳນຽມ',
        description:'a payment made to a professional person or to a professional or public body in exchange for advice or services',
        senten:'they were faced with legal fees of £3000',

    },
    {
        word:'built',
        wordlao:'ສ້າງ, ກໍ່ສ້າງ',
        description:'construct (something) by putting parts or material together',
        senten:'the ironworks were built in 1736',

    },
    {
        word:'invest',
        wordlao:'ລົງທຶນ',
        description:'put (money) into financial schemes, shares, property, ',
        senten:'getting workers to invest in private pension funds',

    },
    {
        word:'flavour',
        wordlao:'ລົດຊາດ',
        description:'the distinctive taste of a food or drink',
        senten:'adding sun-dried tomatoes gives the sauce extra flavour',

    },
    {
        word:'temple',
        wordlao:'ວັດວາອາຣາມ',
        description:'a building that is uesde for religious purposes',
        senten:'the people visited the temple to pray',

    },
    {
        word:'measure',
        wordlao:'ຕວງ, ວັັດແທກ',
        description:'ascertain the size, amount',
        senten:'e measured the flour into the bowl',

    },
    {
        word:'knowledge',
        wordlao:'ຄວາມຮູ້',
        description:'facts, information, and skills acquired through experience or education; ',
        senten:'Good work in language presupposes and depends on a real knowledge of things',

    },
    {
        word:'wing',
        wordlao:'ປີກ',
        description:'the part an animal that lets it fly',
        senten:'the bird used its wings to fly across the water',

    },
    {
        word:'across',
        wordlao:'ຂ້າມ',
        description:'from one side to the other of (a place, area, etc.)',
        senten:'I ran across the street',

    },
    {
        word:'fly',
        wordlao:'ບິນ',
        description:'(of a bird, bat, or insect) move through the air using wings',
        senten:'the birds fly away',

    },
    {
        word:'disturb',
        wordlao:'ລົບກວນ',
        description:'interrupt the sleep, relaxation, or privacy of',
        senten:"Please don't disturb your sister - she's trying to do her homework.",

    },
    {
        word:'interrupt',
        wordlao:'ຂັດຈາກການເຮັດຫຍັງສັກຢ່າງ',
        description:'stop the continuous progress of (an activity or process)',
        senten:'She rudely interrupted my speech.',

    },
    {
        word:'arrow',
        wordlao:'ລູກທະນູ',
        description:'straight stick shot from a bow',
        senten:'the arrow flew through the air and hit the target',

    },
    {
        word:'bow',
        wordlao:'ທະນູ',
        description:'a weapon made of curved wood and string that shoots arrows',
        senten:'he went hunting with a bow and arrow',

    },
    {
        word:'weapon',
        wordlao:'ອາວຸດ',
        description:'a thing designed or used for inflicting bodily harm or physical damage',
        senten:'The second put his weapon away and darted off down another hallway',

    },
    {
        word:'willing',
        wordlao:'ເຕັມໃຈ',
        description:'ready, eager, or prepared to do something',
        senten:'"he was quite willing to compromise',

    },
    {
        word:'compromise',
        wordlao:'ປະນີປະນອມ',
        description:'an agreement or settlement of a dispute that is reached by each side making concessions',
        senten:'the secret of a happy marriage is compromise',

    },
    {
        word:'prepare',
        wordlao:'ຕຽມການ',
        description:'make (something) ready for use or consideration',
        senten:'she was busy preparing lunch',

    },
    {
        word:'wood',
        wordlao:'ໄມ້',
        description:'the hard fibrous material that forms the main substance of the trunk or branches of a tree or shrub,',
        senten:'best quality woods were used for joinery',

    },
    {
        word:'brave',
        wordlao:'ກ້າຫານ',
        description:'not afraid to face pain or danger',
        senten:'the brave friefighter saved the girl from the burning building',

    },
    {
        word:'building',
        wordlao:'ຕຶກ',
        description:'a structure with a roof and walls, such as a house or factory',
        senten:'The three-story building looked big enough to cover a city block',

    },
    {
        word:'escape',
        wordlao:'ຫຼົບໜີ',
        description:'break free from confinement or control',
        senten:'two burglars have just escaped from prison',

    },
    {
        word:'freedom',
        wordlao:'ອິດສະຫຼະ',
        description:'the power or right to act, speak, or think as one wants',
        senten:'we do have some freedom of choice',

    },
    {
        word:'disadvantage',
        wordlao:'ຂໍ້ເສຍປຽບ',
        description:'an unfavourable circumstance or condition that reduces the chances of success or effectiveness',
        senten:'a major disadvantage is the limited nature of the data"',

    },
    {
        word:'enemy',
        wordlao:'ສັດຕູ',
        description:'a person who is actively opposed or hostile to someone or something',
        senten:'this man was her sworn enemy"',

    },
    {
        word:'opposite',
        wordlao:'ກົງກັນຂ້າມ',
        description:'situated on the other or further side when seen from a specified or implicit viewpoint; facing',
        senten:'a crowd gathered on the opposite side of the street',

    },
    {
        word:'roundabout',
        wordlao:'ວົງວຽນ',
        description:'a place where three or more roads join and traffic must go around a circular area in the middle',
        senten:'Take the first left at the roundabout',

    },
    {
        word:'refund',
        wordlao:'ເອົາເງິນຄືນຈາກການຊື້ຂອງ',
        description:'return of money',
        senten:"if you're not delighted with your purchase, we guarantee to refund your money in full",

    },
    {
        word:'obey',
        wordlao:'ເຊື່ອຟັງ',
        description:'to follow what a lae or person says you must do',
        senten:'my little sister did not obey my mother. now she is in trouble',

    },
    {
        word:'trust',
        wordlao:'ເຊື່ອໃຈ',
        description:'to believe that someone is honest and will do what is right',
        senten:'i trust my friends, they do not tell my secrets to other people',

    },
    {
        word:'except',
        wordlao:'ນອກຈາກ',
        description:'not including; other than',
        senten:'they work every day except Sunday',

    },
    {
        word:'confident',
        wordlao:'ຄວາມໝັ້ນໃຈ',
        description:'the quality of being certain of your abilities or of having trust in people, plans, or the future',
        senten:"He has the confidence to walk into a room of strangers and immediately start a conversation.",

    },
    {
        word:'profit',
        wordlao:'ກຳົໄລ',
        description:'a financial gain, especially the difference between the amount earned and the amount spent in buying',
        senten:'It had finally been in the black and she was actually making a profit',

    },
    {
        word:'outcome',
        wordlao:'ຜົນໄດ້ຮັບ',
        description:'the way a thing turns out; a consequence',
        senten:'it is the outcome of the vote that counts',

    },
    {
        word:'benefit',
        wordlao:'ຜົນປະໂຫຍດ',
        description:'an advantage or profit gained from something:',
        senten:'enjoy the benefits of being a member',

    },
    {
        word:'consider',
        wordlao:'ພິຈາລະນາ, ຄຳນຶງເຖິງ',
        description:'think carefully about (something), typically before making a decision',
        senten:'If computers are so popular, perhaps we should consider buying one for the use of our guests',

    },
    {
        word:'dust',
        wordlao:'ຝຸ່ນ',
        description:'fine, dry powder consisting of tiny particles of earth or waste matter lying on the ground or on surfaces or carried in the air:',
        senten:'The car sent up clouds of dust',

    },
    {
        word:'disaster',
        wordlao:'ຫາຍະນາ',
        description:'a really bad thing that happens',
        senten:'when the car crashed, it was a disaster',

    },
    {
        word:'consume',
        wordlao:'ບໍລິໂພກ',
        description:'eat, drink, or ingest (food or drink)',
        senten:'people consume a good deal of sugar in drinks',

    },
    {
        word:'pollution',
        wordlao:'ມົນລະພິດ',
        description:'the presence in or introduction into the environment of a substance which has harmful or poisonous effects',
        senten:'the level of pollution in the air is rising',

    },
    {
        word:'risk',
        wordlao:'ຄວາມສຽ່ງ',
        description:'a situation involving exposure to danger',
        senten:'he risked his life to save his dog',

    },
    {
        word:'congest',
        wordlao:'ແອອັດ',
        description:'(of a road or place) so crowded with traffic or people as to hinder or prevent freedom of movement',
        senten:'he streets are often heavily congested with traffic',

    },{
        word:'rescue',
        wordlao:'ຊ່ວຍເຫຼືອ',
        description:'save (someone) from a dangerous or difficult situation',
        senten:'firemen rescued a man trapped in the river',

    },
    {
        word:'trap',
        wordlao:'ກັບດັກ',
        description:'a device or enclosure designed to catch and retain animals, ',
        senten:'the squirrels ravaged the saplings, despite the baited traps',

    },
    {
        word:'disappear',
        wordlao:'ຫາຍໄປ, ສູນຫາຍ',
        description:'cease to be visible',
        senten:'the sun had disappeared',

    },
    {
        word:'disappoint',
        wordlao:'ຜິດຫັວງ',
        description:'fail to fulfil the hopes or expectations of:',
        senten:'"I have no wish to disappoint everyone by postponing the visit',

    },
    {
        word:'postpone',
        wordlao:'ເລື່ອນນັດ, ເລື່ອນເວລາ',
        description:'cause or arrange for (something) to take place at a time later than that first scheduled',
        senten:'the visit had to be postponed for some time',

    },
    {
        word:'vomit',
        wordlao:'ອາຈຽນ',
        description:'eject matter from the stomach through the mouth',
        senten:'the sickly stench made him want to vomit',

    },
    {
        word:'adult',
        wordlao:'ຜູ້ໃຫ່ຍ, ຜ່ານການເປັນໄວລຸ້ນມາ',
        description:'having finish growing',
        senten:'children should be accompanied by an adult',

    },
    {
        word:'teenager',
        wordlao:'ໄວຮຸ້ນ',
        description:'a person aged between 13 and 19 years',
        senten:'As a teenager, your body needs nutrients because you are still growing',

    },
    {
        word:'afford',
        wordlao:'ຈ່າຍໄດ້, ສາມາດຊື້ໄດ້',
        description:'have enough money to pay for',
        senten:'the best that I could afford was a first-floor room',

    },
    {
        word:'against',
        wordlao:'ຕໍ່ຕ້ານ,ຕິດຂັດ',
        description:'to have a reason not to like someone or something',
        senten:'if you have nothing against taking public trasport, i suggest taking a bus',

    },
    {
        word:'agenda',
        wordlao:'ກຳນົດການ, ວາລະ',
        description:'a list of subjects that people will discuss at a meeting',
        senten:"your memo was one of the points on the agenda for last week's meeting",

    },
    {
        word:'behave',
        wordlao:'ການກະທຳ',
        description:'act or conduct oneself in a specified way, especially towards others',
        senten:'he always behaved like a gentleman',

    },
    {
        word:'purpose',
        wordlao:'ຈຸດປະສົງ',
        description:'the reason for which something is done or created or for which something exists',
        senten:'the building is no longer needed for its original purpose"',

    },
    {
        word:'appoint',
        wordlao:'ແຕ່ງຕັ້ງ',
        description:'assign a job or role to (someone)',
        senten:'they appointed her as personnel manager',

    },
    {
        word:'allow',
        wordlao:'ອະນຸຍາດ',
        description:'let (someone) have or do something',
        senten:'the dissident was allowed to leave the country',

    },
    {
        word:'public',
        wordlao:'ສາທະລະນະ',
        description:'of or concerning the people as a whole',
        senten:' public concern \ public shcool',

    },
    {
        word:'alongside',
        wordlao:'ທາງຂ້າງ, ຄຽງຂ້າງ',
        description:'next to someone or something',
        senten:'a car pulled up alongside ours',

    },
    {
        word:'alteration',
        wordlao:'ການປຽ່ນແປງ',
        description:'a change, or the process of changing something',
        senten:'we made a few alteration to the kitchen',

    },
    {
        word:'alternative',
        wordlao:'ທາງເລືອກ, ຕົວເລືອກ',
        description:'(of one or more things) available as another possibility or choice',
        senten:'he various alternative methods for resolving disputes',

    },
    {
        word:'explain',
        wordlao:'ອະທິບາຍ',
        description:'make (an idea or situation) clear to someone by describing it in more detail or revealing relevant facts',
        senten:'he explained the situation',

    },
    {
        word:'situation',
        wordlao:'ສະຖານະການ',
        description:'a set of circumstances in which one finds oneself; a state of affairs',
        senten:'the situation between her and Jake had come to a head',

    },
    {
        word:'responsibility',
        wordlao:'ຄວາມຮັບຜິດຊອບ',
        description:"the state or fact of having a duty to deal with something or of having control over someone",
        senten:'a true leader takes responsibility for their team and helps them achieve goals',

    },
    {
        word:'respect',
        wordlao:'ການເຄົາລົບ',
        description:'a feeling of deep admiration for someone or something elicited by their abilities, qualities, or achievements',
        senten:'the director had a lot of respect for Douglas as an actor',

    },
    {
        word:'published',
        wordlao:'ເຜີຍແຜ່,ອອກຕີພິມ',
        description:'(of a book, journal, piece of music, etc.) prepared and issued for public sale or readership',
        senten:'there is very little published data on the subject',

    },
    {
        word:'absorb',
        wordlao:'ດູດຊຶມ, ດູດຊັບ',
        description:'take in or soak up (energy or a liquid or other substance) by chemical or physical action',
        senten:'buildings can be designed to absorb and retain heat',

    },
    {
        word:'discuss',
        wordlao:'ເຈລະຈາ, ຫາລື',
        description:'talk about (something) with a person or people',
        senten:'they were discussing where to go for a drink',

    },
    {
        word:'arrest',
        wordlao:'ຈັບກຸມ, ວິນິດໄສ',
        description:'seize (someone) by legal authority and take them into custody',
        senten:'two youths aged 16 were arrested"',

    },
    {
        word:'associate',
        wordlao:'ສົມທົບ, ມີສ່ວນຮ່ວມ',
        description:"connect (someone or something) with something else in one's mind",
        senten:'I associated wealth with freedom',

    },
    {
        word:'institute',
        wordlao:'ສະຖາບັນ',
        description:'an organization having a particular purpose',
        senten:'a research institute',

    },
    {
        word:'access',
        wordlao:'ການເຂົ້າເຖິງ',
        description:'the means or opportunity to approach or enter a place',
        senten:" You’ll need a password to access the database",

    },
    {
        word:'account',
        wordlao:'ບັນຊີ',
        description:'a report or description of an event or experience',
        senten:'a detailed account of what has been achieved',

    },
    {
        word:'economy',
        wordlao:'ເສດຖະກິດ',
        description:'the state of a country or region in terms of the production and consumption of goods and services and the supply of money',
        senten:'he favours tax cuts to stimulate the economy',

    },
    {
        word:'community',
        wordlao:'ຊຸມຊົນ',
        description:'a group of people living in the same place or having a particular characteristic in common',
        senten:'the scientific community',

    },
    {
        word:'unity',
        wordlao:'ສາມັກຄີ,ເອກະພາບ',
        description:'the state of being joined together or in agreement',
        senten:'You know they believe in national unity and rights for the poor',

    },
    {
        word:'communication',
        wordlao:'ການສື່ສານ',
        description:'the imparting or exchanging of information by speaking, writing, or using some other medium',
        senten:'"television is an effective means of communication"',

    },
    {
        word:'company',
        wordlao:'ບໍລິສັດ',
        description:'a commercial business',
        senten:'a shipping company',

    },
    {
        word:'pageant',
        wordlao:'ການປະກວດ',
        description:'something regarded as a series of interesting and varied events',
        senten:'By the time she was 17, Linda won the Miss New York State beauty pageant',

    },
    {
        word:'pregnant',
        wordlao:'ການຕັ້ງທ້ອງ, ຖືພາ',
        description:'(of a woman or female animal) having a child or young developing in the uterus',
        senten:'she was six months pregnant',

    },
    {
        word:'kidnap',
        wordlao:'ລັກພາຕົວ',
        description:'abduct (someone) and hold them captive, typically to obtain a ransom',
        senten:'militants kidnapped the daughter of a minister',

    },
    {
        word:'ransom',
        wordlao:'ຄ່າໄຖ່',
        description:'a sum of money demanded or paid for the release of a captive',
        senten:'the kidnappers demanded a ransom',

    },
    {
        word:'demand',
        wordlao:'ຮຽກຮ້ອງຕ້ອງການ, ອຸປະສົງ',
        description:'an insistent and peremptory request, made as of right',
        senten:'Books were in demand and were multiplied',

    },
    {
        word:'vow',
        wordlao:'ຄຳໝັ້ນສັນຍາ',
        description:'solemnly promise to do a specified thing',
        senten:'I vowed that my family would never go hungry',

    },
    {
        word:'via',
        wordlao:'ຜ່ານ, ຜ່ານຊ່ອງທາງ',
        description:'travelling through (a place) en route to a destination',
        senten:'most people buy a home with a mortgage via a building society',

    },
    {
        word:'innovate',
        wordlao:'ປະດິດສ້າງ',
        description:'introduce (something new, especially a product)',
        senten:'we continue to innovate new products',

    },
    {
        word:'evolution',
        wordlao:'ວິວັດທະນາການ',
        description:'the gradual development of something',
        senten:'we have developed a new theory of Evolution',

    },
    {
        word:'revolution',
        wordlao:'ການປະຕິວັດ ',
        description:'a forcible overthrow of a government or social order, in favour of a new system',
        senten:'the country has had a socialist revolution',

    },
    {
        word:'gratitude',
        wordlao:'ຄວາມຮູ້ສຶກຂອບໃຈ,ຄວາມກະຕັນຍູ',
        description:'the quality of being thankful; readiness to show appreciation for and to return kindness',
        senten:'she expressed her gratitude to the committee for their support',

    },
    {
        word:'attitude',
        wordlao:'ທັດສະນະຄະຕິ,ທ່າທາງ ',
        description:'a settled way of thinking or feeling about somethin',
        senten:'the boy was standing in an attitude of despair',

    },
    {
        word:'sustainable',
        wordlao:'ຄວາມຍືນຍົງ',
        description:'able to be maintained at a certain rate or level',
        senten:'sustainable economic growth"',

    },
    {
        word:'consistent',
        wordlao:'ສະໝ່ຳສະເໝີ, ',
        description:'acting or done in the same way over time, especially so as to be fair or accurate',
        senten:'the parents are being consistent and firm in their reactions',

    },
    {
        word:'stable',
        wordlao:'ໝັ້ນຄົງ',
        description:'(of an object or structure) not likely to give way or overturn; firmly fixed',
        senten:'a stable relationship',

    },
    {
        word:'edible',
        wordlao:'ສາມາດກິນໄດ້',
        description:'n insistent and peremptory request, made as of right',
        senten:'Do you know how many edible plants grow naturally in our own front yards ?',

    },
    {
        word:'review',
        wordlao:'ທົບທວນ, ຍ້ຳຄືນ',
        description:'a formal assessment of something with the intention of instituting change if necessary',
        senten:"Shall we review what you've learned ?",

    },
    {
        word:'progress',
        wordlao:'ຄວາມຄືບໜ້າ, ຄວາມກ້າວໜ້າ',
        description:'forward or onward movement towards a destinationt',
        senten:'Just about time I think the two of you are making progress, something like this comes up',

    },
    {
        word:'specific',
        wordlao:'ສະເພາະເຈາະຈົງ, ເປັນພິເສດ',
        description:'clearly defined or identified',
        senten:'Is there anything specific you want from the shops?',

    },
    {
        word:'after',
        wordlao:'ຫຼັງຈາກ',
        description:'in the time following (an event or another period of time)',
        senten:"there's only one thing to do after an experience like that",

    },
    {
        word:'incident',
        wordlao:'ເຫດການ',
        description:'an instance of something happening; an event or occurrence',
        senten:"He'd changed since their incident",

    },
    {
        word:'argue',
        wordlao:'ໂຕ້ຖຽງ, ມີປາກສຽງກັນ',
        description:'exchange or express diverging or opposite views, typically in a heated or angry way',
        senten:'the two men started arguing in a local pub',

    },
    {
        word:'passenger',
        wordlao:' ຜູ້ໂດຍສານ',
        description:'a traveller on a public or private conveyance other than the driver, pilot, or crew',
        senten:'He opened the passenger door with a hopeful smile',

    },
    {
        word:'vehicle',
        wordlao:'ຍານພາຫະນະ',
        description:'a thing used for transporting people or goods, especially on land, such as a car, lorry, or cart',
        senten:'the vehicle was sent skidding across the road',

    },
    {
        word:'divorce',
        wordlao:'ການຢ່າຮ້າງ',
        description:'the legal dissolution of a marriage by a court or other competent body',
        senten:'her divorce from her first husband',

    },
    {
        word:'perception',
        wordlao:'ການຮັບຮູ້',
        description:'the ability to see, hear, or become aware of something through the senses',
        senten:'the perception of pain',

    },
    {
        word:'perspective',
        wordlao:'ທັດສະນະຄະຕິ, ມຸມມອງ',
        description:'the appearance of viewed ',
        senten:'It was the perspective of the learners',

    },
    {
        word:'debt',
        wordlao:'ໜີ້ສິນ',
        description:'something, especially money, that is owed to someone else, or the state of owing something',
        senten:'They are in debt to  the bank.',

    },
    {
        word:'criticism',
        wordlao:'ຄຳວິຈານ, ຄຳຕິ',
        description:'the act of saying that something or someone is bad',
        senten:'I have a few criticisms to make about your speech.',

    },
    {
        word:'interest(noun)',
        wordlao:'ດອກເບ້ຍ',
        description:'money that you earn from keeping your money in an account in a bank or other financial organization',
        senten:'You should put the money in a savings account where it will earn interest',

    },
    {
        word:'inspection',
        wordlao:'ການຕວດສອບ',
        description:'careful examination or scrutiny',
        senten:'please have your tickets ready for inspection',

    },
    {
        word:'security',
        wordlao:'ຄວາມປອດໄພ',
        description:'the state of being free from danger or threat',
        senten:'the system is designed to provide maximum security against toxic spills',

    },
    {
        word:'inspire',
        wordlao:'ແຮງບັນດານໃຈ',
        description:'fill (someone) with the urge or ability to do or feel something, especially to do something creative',
        senten:'his passion for literature inspired him to begin writing"',

    },
    {
        word:'motivate',
        wordlao:'ຈຸງໃຈ, ກະຕຸ້ນ',
        description:'provide (someone) with a reason for doing something',
        senten:"I'm going to motivate kids to study civics",

    },
    {
        word:'contact',
        wordlao:'ຕິດຕໍ່',
        description:'the state of physical touching',
        senten:'she had little contact with family members',

    },
    {
        word:'insult',
        wordlao:'ດູຖູກ',
        description:'speak to or treat with disrespect or scornful abuse',
        senten:"you're insulting the woman I love",

    },
    {
        word:'install',
        wordlao:'ຕິດຕັ້ງ',
        description:'place or fix (equipment or machinery) in position ready for use',
        senten:"we're planning to install a new shower",

    },
    {
        word:'structure',
        wordlao:'ໂຄງສ້າງ',
        description:'the arrangement of and relations between the parts or elements of something comple',
        senten:"the company's weakness is the inflexibility of its management structure",

    },
    {
        word:'outline',
        wordlao:'ໂຄງຮ່າງ',
        description:'a general description or plan showing the essential features of something but not the detail',
        senten:'She carefully drew the outline of a truck around the words on the top',

    },
    {
        word:'category',
        wordlao:'ໝວດໝູ່, ປະເພດ',
        description:'a class or division of people or things regarded as having particular shared characteristics',
        senten:'the various categories of research',

    },
    {
        word:'various',
        wordlao:'ຫຼາກຫຼາຍມ ຫຼາຍຢ່າງ',
        description:'more than one; several',
        senten:'or various reasons they had never considered having children',

    },
    {
        word:'dream',
        wordlao:'ຄວາມຝັນ',
        description:"a series of thoughts, images, and sensations occurring in a person's mind during sleep",
        senten:'I had a recurrent dream about falling from great heights',

    },
    {
        word:'without',
        wordlao:'ປະສາຈາກ, ໂດຍບໍໍ່ມີ',
        description:'in the absence of',
        senten:'He walked in without knocking',

    },
    {
        word:'wait',
        wordlao:'ລໍຖ້າ',
        description:'stay where one is or delay action until a particular time or event',
        senten:'I was told to wait outside until the office was open',

    },
    {
        word:'until',
        wordlao:'ຈົນກວ່າ',
        description:'up to (the point in time or the event mentioned',
        senten:"you don't know what you can achieve until you try",

    },
    {
        word:'temperature',
        wordlao:'ອຸນຫະພູມ',
        description:'the degree or intensity of heat present in a substance or objec',
        senten:'at a temperature of 2°C',

    },
    {
        word:'forbidden',
        wordlao:'ຂໍ້ຫ້າມ, ສິ່ງຫວງຫ້າມ',
        description:'not allowed; banned',
        senten:'a list of forbidden books',

    },
    {
        word:'addiction',
        wordlao:'ເສດຕິດ',
        description:'the fact or condition of being addicted to a particular substance or activity',
        senten:'Drinking a cup of coffee each morning can lead to an insidious addiction',

    },
    {
        word:'seperate',
        wordlao:'ແຍກ, ຈັດແບ່ງ',
        description:'forming or viewed as a unit apart or by itself',
        senten:'Each of us could find separate areas to be alone but remain close to each other',

    },
    {
        word:'attention',
        wordlao:'ຄວາມສົນໃຈ',
        description:'notice taken of someone or something; the regarding of someone or something as interesting or important',
        senten:'But he paid no attention to her warning',

    },
    {
        word:'expire',
        wordlao:'ໝົດອາຍຸ',
        description:'(of a document, authorization, or agreement) come to the end of the period of validity',
        senten:'My passport expires next month',

    },
    {
        word:'sholarship',
        wordlao:'ທຶນການສຶກສາ',
        description:'academic study or achievement; learning at a high level',
        senten:'He won a scholarship at the age of sixteen, and was teaching literature at eighteen',

    },
    {
        word:'exchange',
        wordlao:'ແລກປຽ່ນ',
        description:'an act of giving one thing and receiving another (especially of the same kind) in return',
        senten:'They were given food and shelter in exchange for work.',

    },
    {
        word:'fiction',
        wordlao:'ນິຍາຍ, ບໍ່ເປັນເລື່ອງຈິງ',
        description:'something that is invented or untrue',
        senten:"Just because it's fiction doesn't mean you can't learn from it",

    },
    {
        word:'friendship',
        wordlao:'ມິດຕະພາບ',
        description:'the emotions or conduct of friends; the state of being friends',
        senten:'I value her friendship above anything else.',

    },
    {
        word:'value',
        wordlao:'ມູນຄ່າ, ຄຸນຄ່າ',
        description:'the regard that something is held to deserve; the importance, worth, or usefulness of something',
        senten:'The value of the painting has been put at £1 million',

    },
    {
        word:'betray',
        wordlao:'ທໍລະຍົດ, ຫັກຫຼັງ',
        description:'be gravely disloyal to',
        senten:"He was accused of betraying his country during the war.",

    },
    {
        word:'accuse',
        wordlao:'ກ່າວຫາ,ກ່າວໂທດ',
        description:'to say that someone has done something morally wrong, illegal, or unkind',
        senten:"He's been accused of robbery/murder.",

    },

    {
        word:'local',
        wordlao:'ທ້ອງຖິ່ນ, ພື້ນບ້ານ',
        description:"relating or restricted to a particular area or one's neighbourhood",
        senten:'the local post office',

    },
    {
        word:'countryside',
        wordlao:'ຊົນນະບົດ',
        description:'the land and scenery of a rural area',
        senten:'Do you ever miss the countryside? she asked',

    },
    {
        word:'up-country',
        wordlao:'ຕ່າງແຂວງ',
        description:'in or towards the interior of a country',
        senten:"We'll travel up-country by horse tomorrow.",

    },
    {
        word:'subtract',
        wordlao:'ຕັດອອກ, ລົບອອກ',
        description:'take away (a number or amount) from another to calculate the difference',
        senten:'subtract 43 from 60"',

    },
    {
        word:'advertise',
        wordlao:'ໂຄສະນາ',
        description:'publicize information about (a vacancy)',
        senten:'for every job we advertise we get a hundred applicants"',

    },
    {
        word:'cadidate',
        wordlao:'ຜູ້ສະໝັກ',
        description:'a person who applies for a job or is nominated for election',
        senten:'Each candidate was known, not by his name, but by a number',

    },
    {
        word:'each',
        wordlao:'ແຕ່ລະ',
        description:'every one of two or more people or things, regarded and identified separately',
        senten:'they each have their own personality',

    },
    {
        word:'personality',
        wordlao:'ບຸກຄະລິກ',
        description:"the combination of characteristics or qualities that form an individual's distinctive character",
        senten:'she had a sunny personality that was very engaging',

    },
    {
        word:'commission',
        wordlao:'ຄ່ານາຍໜ້າ',
        description:'an instruction, command, or role given to a person or group',
        senten:'he received a commission to act as an informer"',

    },
    {
        word:'adopt',
        wordlao:'ຮັບລຽ້ງ, ອຸປະຖຳ',
        description:"legally take (another's child) and bring it up as one's own",
        senten:'there are many people eager to adopt a baby',

    },
    {
        word:'concession',
        wordlao:'ສຳປະທານ',
        description:'a thing that is granted, especially in response to demands',
        senten:'An extension of the British concession backwards was granted in 1898',

    },
    {
        word:'apply',
        wordlao:'ສະໝັກ,ນຳມາປັບໃຊ້',
        description:'be applicable or relevant',
        senten:'By the time I saw the job advertised it was already too late to apply.',

    },
    {
        word:'application',
        wordlao:'ໃບສະໝັກ, ຄຳຮ້ອງຂໍ',
        description:'a formal request to be considered for a position or to be allowed to do or have something',
        senten:"I've sent off applications for four different jobs.",

    },
    {
        word:'license',
        wordlao:'ໃບອະນູຍາດ, ໃບຂັບຂີ່',
        description:' grant a licence to:',
        senten:'a pub has to be licensed by the local justices"',

    },
    {
        word:'grant',
        wordlao:'ຍິນຍອມ, ອະນຸຍາດ',
        description:'agree to give or allow (something requested) to',
        senten:'they were granted a meeting',

    },
    {
        word:'self-awareness',
        wordlao:'ການຮູ້ຈັກຕົນເອງ',
        description:"conscious knowledge of one's own character and feelings",
        senten:'the process can be painful but it leads to greater self-awareness',

    },
    {
        word:'dedicate',
        wordlao:'ອຸທິດຕົນ',
        description:'devote (time or effort) to a particular task or purpose',
        senten:'Joan has dedicated her life to animals',

    },
    {
        word:'excuse',
        wordlao:'ຂໍ້ອ້າງ, ຂໍ້ແກ້ຕົວ',
        description:'seek to lessen the blame attaching to (a fault or offence); try to justify',
        senten:'I have no excuse for my rudeness',

    },
    {
        word:'embarrassed',
        wordlao:'ຄວາມຮູ້ສຶກອາຍ, ຂາຍໜ້າ',
        description:'feeling or showing embarrassment',
        senten:"There's nothing to be embarrassed about",

    },
    {
        word:'encourage',
        wordlao:'ສົ່ງເສີມ, ຈູງໃຈ',
        description:'give support, confidence, or hope to (someone)',
        senten:'We were encouraged to learn foreign languages at school.',

    },
    {
        word:'encounter',
        wordlao:'ຜະເຊີນໜ້າກັບ',
        description:'unexpectedly be faced with or experience (something hostile or difficult)',
        senten:'we have encountered one small problem',

    },
      {
        word:'blame',
        wordlao:'ໂທດ,',
        description:'to say or think that someone or something did something wrong or is responsible for something bad happening',
        senten:"Don't blame me (= it is not my fault) if you miss the bus!",

    },
    {
        word:'fault',
        wordlao:'ຄວາມຜິດພາດ,ຄວາມຜິດ',
        description:'a mistake, especially something for which you are to blame:',
        senten:"She believes it was the doctor's fault that john died!",

    },
    {
        word:'miss',
        wordlao:'ບໍ່ໄດ້ໄປ,ຂາດ',
        description:'to not go to something',
        senten:"I'm trying to find an excuse for missing the office party.",

    },
    {
        word:'miss',
        wordlao:'ພາດ,ໄປບໍ່ທັນ',
        description:'to arrive too late to get on a bus, train, or aircraft:',
        senten:"You'll miss your flight if you don't hurry up.",

    },
    {
        word:'evidence',
        wordlao:'ຫຼັກຖານ',
        description:'the available body of facts or information indicating whether a belief or proposition is true or valid',
        senten:'the study finds little evidence of overt discrimination',

    },
    {
        word:'experience',
        wordlao:'ປະສົບການ',
        description:'practical contact with and observation of facts or events',
        senten:'he had learned his lesson by painful experience',

    },
    {
        word:'export',
        wordlao:'ສົ່ງອອກ',
        description:'send (goods or services) to another country for sale',
        senten:'nearly all the bananas produced were exported to Britain"',

    },
    {
        word:'expert',
        wordlao:' ຊຽ້ວຊານ',
        description:'a person who is very knowledgeable about or skilful in a particular area:',
        senten:'He loved riding and walking, was an expert swimmer and enjoyed a game at tennisk',

    },
    {
        word:'prove',
        wordlao:'ພິສູດ',
        description:'demonstrate the truth or existence of (something) by evidence or argument',
        senten:"I'm not asking you to prove anything",

    },
    {
        word:'possibility',
        wordlao:'ຄວາມເປັນໄປໄດ້',
        description:'a thing that may happen or be the case',
        senten:'there was the possibility that he might be turned down',

    },
    {
        word:'import',
        wordlao:'ນຳເຂົ້າ',
        description:'nbring (goods or services) into a country from abroad for sale',
        senten:'supermarkets may no longer import cheap jeans from Bulgaria',

    },
    {
        word:'fact',
        wordlao:'ຄວາມຈິງ',
        description:'a thing that is known or proved to be true',
        senten:'he ignores some historical and economic facts',

    },
    {
        word:'important',
        wordlao:'ຄວາມສຳຄັນ',
        description:'of great significance or value',
        senten:'More important, what had they been doing?',

    },
    {
        word:'flexible',
        wordlao:'ຍືດຫຍຸ່ນ, ປັບຕົົວໄດ້ງ່າຍ',
        description:'capable of bending easily without breaking:',
        senten:'flexible rubber seals',

    }, {
        word:'flood',
        wordlao:'ນຳ້ຖ່ວມ, ລົ້ນ',
        description:'an overflow of a large amount of water beyond its normal limits, especially over what is normally dry land',
        senten:'Another flood occurred in 1645',

    },
    {
        word:'foundation',
        wordlao:'ພື້ນຖານ, ຮາກຖານ',
        description:'the lowest load-bearing part of a building, typically below ground level',
        senten:'build the arch resting on top of this solid foundation',

    },
    {
        word:'budget',
        wordlao:'ງົບປະມານ',
        description:'an estimate of income and expenditure for a set period of time',
        senten:'The budget for 1906 balanced at £120,400 ',

    },
    {
        word:'guest',
        wordlao:'ແຂກ',
        description:"a person who is invited to visit someone's home or attend a particular social occasion",
        senten:'I have two guests coming to dinner tonight',

    },
    {
        word:'effect',
        wordlao:'ຜົນກະທົບ',
        description:'a change which is a result or consequence of an action or other cause',
        senten:'Did his speech have any effect on you?',

    },
    {
        word:'affect',
        wordlao:'ສົ່ງຜົນກະທົບ',
        description:'have an effect on; make a difference to',
        senten:'your attitude will affect how successful you are',

    },
    {
        word:'impose',
        wordlao:'ບັງຄັບ, ກຳນົດໂທດ',
        description:'force (an unwelcome decision or ruling) on someone',
        senten:'the decision was theirs and was not imposed on them by others',

    },
    {
        word:'predict',
        wordlao:'ທຳນາຍ',
        description:'say or estimate that (a specified thing) will happen in the future or will be a consequence of something',
        senten:'I cannot predict what will happen next year.',

    },
    {
        word:'result',
        wordlao:'ຜົນໄດ້ຮັບ',
        description:'a thing that is caused or produced by something else; a consequence or outcome',
        senten:'We used different methods of calculation, but we both got the same result.',

    },
    {
        word:'price',
        wordlao:'ລາຄາ',
        description:'the amount of money expected, required, or given in payment for something',
        senten:'The price of petrol will rise by 5p a gallon from tomorrow.',

    },
    {
        word:'petrol',
        wordlao:'ນຳ້ມັນ(ລົດ)',
        description:'the amount of money expected, required, or given in payment for something',
        senten:'A big old car like that eats up petrol.',

    },
    {
        word:'despite',
        wordlao:'ເຖິງແມ່ນວ່າ,ໂດຍບໍ່ສົນໃຈ',
        description:'without being affected by; in spite of',
        senten:'I still enjoyed the week despite the weather',

    },
    {
        word:'deserve',
        wordlao:'ສົມຄວນໄດ້ຮັບ',
        description:'n insistent and peremptory request, made as of right',
        senten:"They certainly deserved to win that game.",
    },
        {
            word:'ruin',
            wordlao:'ທຳລາຍ',
            description:'the physical destruction or disintegration of something or the state of disintegrating or being destroyed',
            senten:'Some one is trying to ruin me',
    
        },
        {
            word:'gender',
            wordlao:'ເພດ',
            description:'either of the two sexes (male and female),',
            senten:'someone of the opposite gender',
    
        },
        {
            word:'comtemplate',
            wordlao:'ຮຳ່ເພິງຄິດ, ໄຕ່ຣຕອງ',
            description:'look thoughtfully for a long time at',
            senten:'he contemplated his image in the mirrors',
    
        },

        {
            word:'depression',
            wordlao:'ຊຶມເສົ້າ',
            description:'feelings of severe despondency and dejection',
            senten:'elf-doubt creeps in and that swiftly turns to depression',
    
        },

        {
            word:'deposit',
            wordlao:'ເງິນຝາກ,ຝາກ',
            description:'a sum of money paid into a bank or building society account',
            senten:'I deposited 100.000kip in my account this morning.',
    
        },

        {
            word:'depend',
            wordlao:'ຂຶ້ນຢູ່ກັບ,ເຊື່ອໃຈ',
            description:'be able to trust; rely on',
            senten:'we can depend on her to deliver a quality product',
    
        },

        {
            word:'dapartment',
            wordlao:'ພະແນກ, ພາກວິຊາ',
            description:'a division of a large organization  dealing with a specific area of activity',
            senten:"the council's finance department",
    
        },

        {
            word:'factory',
            wordlao:'ໂຮງງານ',
            description:'a building or group of buildings where goods are manufactured or assembled chiefly by machine',
            senten:'factory workers',
    
        },

        {
            word:'faculty',
            wordlao:'ຄະນະ',
            description:'a group of university departments concerned with a major division of knowledge',
            senten:'he law faculty',
    
        },

        {
            word:'insomnia',
            wordlao:'ໂລກນອນບໍ່ຫຼັບ',
            description:'habitual sleeplessness; inability to sleep',
            senten:'Anxiety can cause insomnia, making jet lag worse',
    
        },

        {
            word:'accept',
            wordlao:'ໄດ້ຮັບ',
            description:'consent to receive or undertake (something offered)',
            senten:'he accepted a pen as a present"',
    
        },

        {
            word:'gender',
            wordlao:'ເພດ',
            description:'either of the two sexes (male and female),',
            senten:'someone of the opposite gender',
    
        },

        {
            word:'admit',
            wordlao:'ຍອມຮັບ',
            description:'confess to be true or to be the case',
            senten:'the Home Office finally admitted that several prisoners had been injured"',
    
        },

        {
            word:'confess',
            wordlao:'ສາລະພາບ',
            description:'admit that one has committed a crime or done something wrong',
            senten:'he confessed that he had attacked the old man',
    
        },

        {
            word:'administer',
            wordlao:'ຈັດການ, ບໍລິຫາານ',
            description:'manage and be responsible for the running of (a business, organization, etc.)',
            senten:'each school was administered separately',
    
        },

        {
            word:'admire',
            wordlao:'ນັບຖື, ຊົມເຊີຍ',
            description:'regard with respect or warm approval',
            senten:'I admire your courage',
    
        },

        {
            word:'courage',
            wordlao:' ຄວາມກ້າຫານ',
            description:'the ability to do something that frightens one; bravery',
            senten:'she called on all her courage to face the ordeal',
    
        },

        {
            word:'illustration',
            wordlao:'ພາບປະກອບ',
            description:'a picture illustrating a book, newspaper, etc.',
            senten:'an illustration of a yacht',
    
        },

        {
            word:'deal',
            wordlao:'ຈັດການ, ຂໍ້ຕົກລົງ',
            description:'take measures concerning (someone or something), ',
            senten:'"they seem incapable of dealing with the problem',
    
        },

        {
            word:'contract',
            wordlao:'ເງື່ອນໄຂ,ໜັງສືສັນຍາ',
            description:'a written or spoken agreement, especially one concerning employment, sales, or tenancy, ',
            senten:'much of the produce is grown under contract"',
    
        },

        {
            word:'education',
            wordlao:'ການສຶກສາ',
            description:'the process of receiving or giving systematic instruction, especially at a school or university',
            senten:'a course of education',
    
        },

        {
            word:'graduate',
            wordlao:'ຈົບການສຶກສາ',
            description:'a person who has successfully completed a course of study or training',
            senten:'he graduated in the summer with a 2:2 degree',
    
        },

        {
            word:'illness',
            wordlao:'ຄວາມເຈັບປ່ວຍ, ໂລກພະຍາດ',
            description:'a disease or period of sickness affecting the body or mind',
            senten:'"he died after a long illness',
    
        },

        {
            word:'future',
            wordlao:'ອະນາຄົດ',
            description:'a period of time following the moment of speaking or writing; ',
            senten:'we plan on getting married in the near future',
    
        },

        {
            word:'gift',
            wordlao:'ຂອງຂັວນ',
            description:'a thing given willingly to someone without payment; a present',
            senten:'"wedding gifts',
    
        },

        {
            word:'culture',
            wordlao:'ວັດທະນາທຳ',
            description:'the ideas, customs, and social behaviour of a particular people or society:',
            senten:'people from many different cultures',
    
        },

        {
            word:'theatre',
            wordlao:' ໂຮງລະຄອນ',
            description:'a building or outdoor area in which plays and other dramatic performances are given',
            senten:'"what made you want to go into the theatre',
    
        },

        {
            word:'competitor',
            wordlao:'ຄູ່ແຂ່ງ',
            description:'a person who takes part in a sporting contest',
            senten:'two competitors were banned for taking drugs',
    
        },

        {
            word:'drug',
            wordlao:'ສານເສບຕິດ',
            description:'a natural or artificially made substance, especially one that is illegal,',
            senten:"a banned/illegal drug",
    
        },

        {
            word:'disease',
            wordlao:'ພະຍາດ',
            description:'a disorder of structure or function in a human, animal, or plant,',
            senten:'"bacterial meningitis is quite a rare disease',
    
        },

        {
            word:'rare',
            wordlao:'ຫາຍາກ, ເປັນໄປໄດ້ຍາກ',
            description:'(of an event, situation, or condition) not occurring very often',
            senten:"it's rare to see a house so little altered",
    
        },

        {
            word:'reason',
            wordlao:'ເຫດຜົນ',
            description:'a cause, explanation, or justification for an action or event',
            senten:"she asked him to return, but didn't give a reason",
    
        },

        {
            word:'release',
            wordlao:'ປ່ອຍ',
            description:'allow or enable to escape from confinement; set free',
            senten:'an official confirmed the prisoners would be released',
    
        },

        {
            word:'relative',
            wordlao:' ພີ່ນ້ອງ',
            description:'a person connected by blood or marriage:',
            senten:'much of my time is spent visiting relatives',
    
        },

        {
            word:'distance',
            wordlao:'ໄລຍະທາງ',
            description:'the length of the space between two points',
            senten:'you may have to walk long distances',
    
        },

        {
            word:'sibling',
            wordlao:'ອ້າຍນ້ອງ',
            description:'each of two or more children or offspring having one or both parents in common',
            senten:"I haven't even had any sibling practice",
    
        },

        {
            word:'in common',
            wordlao:'ສິ່ງທີ່ມີຄືກັນ',
            description:'in joint use or possession; shared:',
            senten:'We have a lot in common, you know?',
    
        },

        {
            word:'productive',
            wordlao:'ມີປະສິດຕິພາບ',
            description:'producing or able to produce large amounts of goods, crops, or other commodities',
            senten:'the most productive employees',
    
        },

        {
            word:'procrastination',
            wordlao:'ຜັດມື້ພັດວັນ',
            description:'the action of delaying or postponing something',
           senten:'your first tip is to avoid procrastination'
        },
            {
                word:'perfect',
                wordlao:'ສົມບູນແບບ',
                description:'having all the required or desirable elements, qualities,  ',
                senten:"a perfect summer's day",
        
            },
    
            {
                word:'flaw',
                wordlao:'ຂໍ້ບົກພ່ອງ, ຕຳນິ',
                description:'a mark, blemish, or other imperfection which mars a substance or object:',
                senten:'a flaw in the glass',
        
            },
    
            {
                word:'misunderstood',
                wordlao:'ເຂົ້າໃຈຜິດ',
                description:'eincorrectly interpreted or understood',
                senten:'They proved that he misread events and misunderstood his own position',
        
            }, {
                word:'recover',
                wordlao:'ຟື້ນຕົວ',
                description:'return to a normal state of health, mind, or strength',
                senten:'the economy has begun to recover',
        
            },
    
            {
                word:'mention',
                wordlao:'ກ່າວເຖິງ, ຕະນຶກເຖິງ',
                description:'a reference to someone or something',
                senten:'their eyes light up at a mention of Sartre',
        
            },
    
            {
                word:'complaint',
                wordlao:'ຮ້ອງຟ້ອງ',
                description:'a statement that something is unsatisfactory or unacceptable',
                senten:'"I intend to make an official complaint',
        
            },
    
            {
                word:'complain',
                wordlao:'ຈົ່ມ, ຮ້ອງທຸກ',
                description:'express dissatisfaction or annoyance about something:',
                senten:'we all complained bitterly about the food"',
        
            },
    
            {
                word:'compile',
                wordlao:'ລວບລວມ',
                description:'collect (information) in order to produce a list or book',
                senten:'the figures were compiled from a survey of 2,000 schoolchildren"',
        
            },
    
            {
                word:'almost',
                wordlao:'ເກືອບ',
                description:'not quite; very nearly:',
                senten:'the place was almost empty',
        
            },
    
            {
                word:'regulate',
                wordlao:'ຄວບຄຸມ',
                description:'ontrol or maintain the rate or speed of (a machine or process) so that it operates properly',
                senten:'the Code regulates the takeovers of all public companies',
        
            },
    
            {
                word:'relationship',
                wordlao:'ຄວາມສຳພັນ',
                description:'the way in which two or more people or things are connected, or the state of being connected',
                senten:'the study will assess the relationship between unemployment and political attitudes',
        
            },
    
            {
                word:'unemployment',
                wordlao:'ການວ່າງງານ',
                description:'the state of being unemployed',
                senten:'the serious level of unemployment among school-leavers',
        
            },
    
            {
                word:'gravity',
                wordlao:'ແຮງດຶງດູດ',
                description:'the force that attracts a body towards the centre of the earth',
                senten:'Gravity is what keeps everything from floating around',
        
            },
    
            {
                word:'theory',
                wordlao:'ທິດສະດີ',
                description:'a supposition or a system of ideas intended to explain something',
                senten:"Darwin's theory of evolution",
        
            },
    
            {
                word:'citizen',
                wordlao:'ພົນລະເມືອງ',
                description:'a legally recognized subject or national of a state or commonwealth',
                senten:"I'm not a citizen of the county, so I can't vote for you",
        
            },
    
            {
                word:'lazy',
                wordlao:'ຂີ້ຄ້ານ',
                description:'unwilling to work or use energy',
                senten:'he was too lazy to cook',
        
            },
    
            {
                word:'busy',
                wordlao:'ຄາວຽກ',
                description:'having a great deal to do',
                senten:'he had been too busy to enjoy himself',
        
            },
    
            {
                word:'eletion',
                wordlao:'ການເລືອກຕັ້ງ',
                description:'a formal and organized choice by vote of a person for a political office or other position',
                senten:'the 1860 presidential election',
        
            },
    
            {
                word:'volunteer',
                wordlao:'ອາສາສະໝັກ',
                description:'a person who freely offers to take part in an enterprise or undertake a task',
                senten:'At the start of the training, the instructor asked for a volunteer',
        
            },
    
            {
                word:'device',
                wordlao:'ອຸປະກອນ',
                description:'a thing made or adapted for a particular purpose', 
                senten:'a measuring device',
        
            },
    
            {
                word:'especially',
                wordlao:'ໂດຍສະເພາະ',
                description:'used to single out one person or thing over all others',
                senten:'a new song, written especially for Jonathan',
        
            },

        {
            word:'destiny',
            wordlao:'ໂຊກຊະຕາ',
            description:'the events that will necessarily happen to a particular person or thing in the future',
            senten:'she was unable to control her own destiny',
    
        },

        {
            word:'target',
            wordlao:'ເປົ້າໝາຍ, ຈຸດມຸ້ງໝາຍ',
            description:'a person, object, or place selected as the aim of an attack',
            senten:'You must focus on controlling your breathing and keep your eye on the target',
    
        },
        {
            word:'received',
            wordlao:'ໄດ້ຮັບ',
            description:'widely accepted as authoritative or true', 
            senten:'That evening he received a call in his office',
    
        },
        {
            word:'office',
            wordlao:'ຫ້ອງການ',
            description:'a room, set of rooms, or building used as a place for commercial', 
            senten:"I've repaired the computers in your office, too",
    
        },
        {
            word:'athlete',
            wordlao:'ນັກກິລາ',
            description:'a person who is proficient in sports and other forms of physical exercise', 
            senten:'The athlete took medication so that he would not wheeze',
    
        },
        {
            word:'repair',
            wordlao:'ການສ້ອມແປງ',
            description:'restore (something damaged, faulty, or worn) to a good condition', 
            senten:'the truck was beyond repair',
    
        },
        {
            word:'abroad',
            wordlao:'ຕ່າງປະເທດ',
            description:'in or to a foreign country or countries', 
            senten:'we usually go abroad for a week in May',
    
        },
        {
            word:'foreigner',
            wordlao:'ຄົນຕ່າງປະເທດ',
            description:'a person not belonging to a particular place or group', 
            senten:"I can't speak a word of French so everyone can tell I'm a foreigner as soon as I arrive in France",
    
        },
        {
            word:'abuse',
            wordlao:'ການລ່ວງລະເມີດ',
            description:'use (something) to bad effect or for a bad purpose; misuse', 
            senten:'the judge abused his power by imposing the finese',
    
        },
        {
            word:'judge(verb)',
            wordlao:'ຕັດສິນ,ຕີລາຄາ',
            description:'form an opinion or conclusion about', 
            senten:'You have no right to judge other people because of what they look like or what they believe',
    
        },
        {
            word:'judge(NOUN)',
            wordlao:'ຜູ້ພິພາກສາ',
            description:'a person who is in charge of a trial in a court ', 
            senten:'In Britain, judges wear white wigs in court.',
    
        },
        {
            word:'academic',
            wordlao:'ທາງວິຊາການ',
            description:'not of practical relevance; of only theoretical interest', 
            senten:'the debate has been largely academic',
    
        },
        {
            word:'debate',
            wordlao:'ການໂຕ້ວາທີ',
            description:'a formal discussion on a particular matter in a public meeting or legislative assembly', 
            senten:"Over the year we have had several debates about future policy",
    
        },
        {
            word:'proceed',
            wordlao:'ດຳເນີນການຕໍ່',
            description:'to continue as planned:', 
            senten:'His lawyers have decided not to proceed with the case',
    
        },
        {
            word:'case',
            wordlao:'ກໍລະນີ',
            description:'a particular situation or example of something', 
            senten:"i wouldn't normally agree but I'll make an exception in this case",
    
        },
        {
            word:'accident',
            wordlao:'ອຸບັດຕິເຫດ',
            description:'something bad that happens that is not expected', 
            senten:'have an accident Josh had an accident and spilled water all over his work.',
    
        },
        {
            word:'activity',
            wordlao:'ກິດຈະກຳ, ການເຄື່ອນໄຫວ',
            description:"the situation in which a lot of things are happening or people are moving around", 
            senten:"There was a lot of activity in preparation for the Queen's visit",
    
        },
        {
            word:'adapt',
            wordlao:'ປັບຕົວ, ດັດແປງ',
            description:'to change, or to change something, to suit different conditions or uses', 
            senten:'The play had been adapted for (= changed to make it suitable for) children.',
    
        },
        {
            word:'add',
            wordlao:'ເພີ່ມ',
            description:'to put two or more numbers or amounts together to get a total', 
            senten:"add on Don't forget to add on your travelling expenses",
    
        },
        {
            word:'expenses',
            wordlao:'ຄ່າໃຊ້ຈ່າຍ',
            description:'money that you spend when you are doing your job, that your employer will pay back to you', 
            senten:'I need to get my expenses approved',
    
        },
        {
            word:'fire',
            wordlao:'ໄລ່ອອກ',
            description:'to make someone leave their job,', 
            senten:' He was told that he was being fired for revealing confidential information',
    
        },
        {
            word:'cost',
            wordlao:'ລາຄາທີ່ຕ້ອງຈ່າຍ',
            description:'the amount of money needed to buy, do, or make something', 
            senten:"It's difficult for most people to deal with the rising cost of (= increasing price of) healthcare",
    
        },
        {
            word:'reveal',
            wordlao:'ເປີດເຜີຍ',
            description:'to make known or show something that is surprising or that was previously secret', 
            senten:'He would not reveal where he had hidden her chocolate eggs',
    
        },
        {
            word:'confidential',
            wordlao:'ເປັນຄວາມລັບ',
            description:'secret or private, often in a formal, business, or military situation', 
            senten:'All information will be treated as strictly confidential',
    
        },
        {
            word:'hire',
            wordlao:'ຈ້າງ',
            description:'to employ someone or pay someone to do a particular job', 
            senten:'I was hired by the first company I applied to',
    
        },
        {
            word:'effort',
            wordlao:'ຄວາມພະຍາຍາມ',
            description:'physical or mental activity needed to achieve something', 
            senten:"You can't expect to have any friends if you don't make the effort with people",
    
        },
        {
            word:'age',
            wordlao:'ອາຍຸ',
            description:'the period of time someone has been alive or something has existed', 
            senten:'Do you know the age of that building',
    
        },
        {
            word:'alphabet',
            wordlao:'ຕົວອັກສອນ',
            description:'a set of letters arranged in a fixed order, used for writing a language:', 
            senten:'Z comes after Y in the alphabet',
    
        },
        {
            word:'alway',
            wordlao:'ສະເໝີ',
            description:'every time or all the time', 
            senten:'ฆhe always spells my name wrong',
    
        },
        {
            word:'spell',
            wordlao:'ສະກົດ',
            description:'to form a word or words with the letters in the correct order', 
            senten:'How do you spell receive?',
    
        },
        {
            word:'assume',
            wordlao:'ສົມມຸດຕິຖານ, ຕວງ',
            description:'to accept something to be true without question or proof:', 
            senten:'I assumed (that) you knew each other because you went to the same school',
    
        },
        {
            word:'suspect',
            wordlao:'ສົງໃສ',
            description:'to think or believe something to be true or probable', 
            senten:'I suspect he cheats the taxman',
    
        },
        {
            word:'analysis',
            wordlao:'ການວິເຄາະ',
            description:'the act of studying or examining something in detail', 
            senten:'Some of these arguments need further analysis',
    
        },
        {
            word:'mad',
            wordlao:'ບໍ່ພໍໃຈ, ຄຽດ',
            description:'very angry or annoyed', 
            senten:'Are you still mad at me?',
    
        },
        {
            word:'poverty',
            wordlao:'ຄວາມທຸກຍາກ',
            description:'the condition of being extremely poor', 
            senten:'Helping to alleviate poverty in developing countries also helps to reduce environmental destruction.',
    
        },
        {
            word:'poor',
            wordlao:'ທຸກຍາກ',
            description:"having little money and/or few possessions", 
            senten:"Most of the world's poorest countries are in Africa",
    
        },
        {
            word:'angry',
            wordlao:'ຢາກຮ້າຍ',
            description:'having a strong feeling against someone who has behaved badly', 
            senten:"I don't understand what he's angry about",
    
        },
        {
            word:'annoyed',
            wordlao:'ຮູ້ສຶກລຳຄານ, ຢາກຮ້າຍ',
            description:'angry', 
            senten:'She was annoyed to discover that her husband had taken her car keys',
    
        },
        {
            word:'whole',
            wordlao:'ທັງໝົດ',
            description:'complete or not divided', 
            senten:'I spent the whole day cleaning',
    
        },
        {
            word:'appear',
            wordlao:'ປະກົດ',
            description:'to start to be seen or to be present', 
            senten:'He suddenly appeared in the doorway',
    
        },
        {
            word:'copyright',
            wordlao:'ລິຂະສົດ',
            description:'the legal right to control the production and selling of a book, play, film, photograph, or piece of music', 
            senten:'His work is no longer protected by copyright',
    
        },
        {
            word:'artist',
            wordlao:'ຈິດຕະກອນ',
            description:'someone who paints, draws, or makes sculptures', 
            senten:'The artist painted this picture using tiny brushstrokes',
    
        },
        {
            word:'aspect',
            wordlao:'ດ້ານ,ມຸມ',
            description:'one part of a situation, problem, subject, etc', 
            senten:'Which aspects of the job do you most enjoy',
    
        },
        {
            word:'atmosphere',
            wordlao:'ບັນຍາກາດ',
            description:'the character, feeling, or mood of a place or situation', 
            senten:"There's a very relaxed atmosphere in our office",
    
        },
        {
            word:'pressure',
            wordlao:'ຄວາມກົດດັນ',
            description:'a difficult situation that makes you feel worried or unhappy', 
            senten:"She's got a lot of pressure on her at work just now",
    
        },
        {
            word:'background',
            wordlao:'ພື້ນຫຼັງ',
            description:'the things that can be seen behind the main things or people in a picture', 
            senten:"The book's cover has white lettering on a blue background",
    
        },
        {
            word:'behind',
            wordlao:'ດ້ານຫຼັງ,ເບື້ອງຫຼັງ',
            description:'at the back (of)', 
            senten:'Look behind you!',
    
        },
        {
            word:'borrow',
            wordlao:'ຍືມ',
            description:'to get or receive something from someone with the intention of giving it back after a period of time', 
            senten:'She used to borrow money and not bother to pay it back',
    
        },
        {
            word:'pay',
            wordlao:'ຈ່າຍ',
            description:'to give money to someone for something you want to buy or for services provided', 
            senten:'How much did you pay for the tickets?',
    
        },
        {
            word:'ticket',
            wordlao:'ປີ້',
            description:'a small piece of paper or card given to someone', 
            senten:'a train/bus/plane ticket',
    
        },
        {
            word:'boring',
            wordlao:'ໜ້າເບື່ອ',
            description:'not interesting or exciting', 
            senten:"It's boring to sit on the plane with nothing to read",
    
        },
        {
            word:'border',
            wordlao:'ຊາຍແດນ',
            description:'a line that has been agreed to divide one country from another', 
            senten:'The train crosses the border between France and Spain',
    
        },
        {
            word:'divide',
            wordlao:'ແບ່ງ,ປັນສ່ວນ ',
            description:'to (cause to) separate into parts or groups', 
            senten:"At the end of the lecture, I'd like all the students to divide into small discussion groups",
    
        },
        {
            word:'breathe',
            wordlao:'ຫາຍໃຈ',
            description:'to move air into and out of the lungs', 
            senten:'When you breathe out, you expel air from your lungs',
    
        },
        {
            word:'church',
            wordlao:'ໂບດ',
            description:'a building for Christian religious activities', 
            senten:'they built the church on the edge of the village',
    
        },
        {
            word:'edge',
            wordlao:'ຂອບ, ແຄມ',
            description:'the outer or furthest point of something', 
            senten:"A man was standing at the water's edge with a small boy",
    
        },
        {
            word:'lime',
            wordlao:'ໝາກນາວ',
            description:'a round fruit containing a lot of juice that is sour ', 
            senten:'I love the sour taste of limes',
    
        },
        {
            word:'sour',
            wordlao:'ລົດຊາດສົ້ມ',
            description:'aving a sharp, sometimes unpleasant, taste or smell, like a lemon, and not sweet', 
            senten:'These plums are a bit sour',
    
        },
        {
            word:'taste',
            wordlao:'ລົດຊາດ',
            description:'athe flavour of something, or the ability of a person or animal to recognize different flavours', 
            senten:'When you have a cold you often lose your sense of taste',
    
        },
        {
            word:'estimate',
            wordlao:'ຄາດຄະເນ,ຄາດການ',
            description:'to guess or calculate the cost, size, value, etc. of something', 
            senten:'It was difficult to estimate how many trees had been destroyed.',
    
        },
        {
            word:'destory',
            wordlao:'ທຳລາຍ',
            description:'to damage something so badly that it cannot be used', 
            senten:'Most of the old part of the city was destroyed by bombs during the war.',
    
        },
        {
            word:'war',
            wordlao:'ສົງຄາມ',
            description:'armed fighting between two or more countries or groups, or a particular example of this', 
            senten:"They've been at war for the last five years",
    
        },
        {
            word:'salty',
            wordlao:'ເຄັມ',
            description:'tasting of salt or containing a lot of salt', 
            senten:'This bacon is too salty for me',
    
        },
        {
            word:'eliminate',
            wordlao:'ກຳຈັດ',
            description:'to remove or take away someone or something', 
            senten:'We eliminated the possibility that it could have been an accident',
    
        },
        {
            word:'surrender',
            wordlao:'ຍອມຈຳນົນ, ຍອມແພ້',
            description:'to stop fighting and admit defeat', 
            senten:'After their defeat in battle, the soldiers surrendered',
    
        },
        {
            word:'allergic',
            wordlao:'ແພ້,ພູມແພ້',
            description:'having an allergy', 
            senten:"I'm allergic to seafood",
    
        },
        {
            word:'expensive',
            wordlao:'ມີລາຄາແພງ',
            description:'costing a lot of money', 
            senten:'She has expensive tastes (= she likes things that cost a lot of money)',
    
        },
        {
            word:'banknote',
            wordlao:'ທະນະບັດ',
            description:'a piece of printed paper that has a particular value as money', 
            senten:'and banknote from all over the place',

        },
        {
            word:'compare',
            wordlao:'ປຽບທຽບ',
            description:'to examine or look for the difference between two or more things', 
            senten:'That seems expensive - have you compared prices in other shops?',
    
        },
        {
            word:'examine',
            wordlao:'ທົດສອບ, ພິຈາລະນາ',
            description:'a small piece of paper or card given to someone', 
            senten:'The research examined the effects of alcohol on long-term memory',
    
        },
        {
            word:'remain',
            wordlao:'ຍັງຄົງ,ຢູ່ຕໍ່',
            description:'to stay in the same place or in the same condition', 
            senten:'The doctor ordered him to remain in bed for a few days.',
    
        },
        {
            word:'closet',
            wordlao:'ຕູ້ເສື້ອຜ້າ',
            description:'used for storing things, especially clothes:', 
            senten:'a bedroom/linen/storage closet',
    
        },
        {
            word:'lend',
            wordlao:'ໃຫ້ຍືມ',
            description:'to give something to someone for a short period of time', 
            senten:"She doesn't like lending her books",
    
        },
        {
            word:'information',
            wordlao:'ຂໍ້ມູນ',
            description:'facts or details about a person, company, product', 
            senten:'It was a very interesting piece of information.',
    
        },
        {
            word:'visit',
            wordlao:'ຢຽ້ມຢາມ, ເຂົ້າພົບ',
            description:'to go to a place in order to look at it, or to a person in order to spend time with them', 
            senten:"Will you visit me when I'm in hospital?",
    
        },
        {
            word:'pretend',
            wordlao:'ທຳທ່າ, ຕິເຮັດ',
            description:'to behave as if something is true when you know that it is not', 
            senten:" He pretended (that) he didn't mind, but I knew that he did",
    
        },
        {
            word:'mind(verb)',
            wordlao:'ຖືກສາ',
            description:'(used in questions and negatives) to be annoyed or worried by something', 
            senten:" I don't mind having a dog in the house so long as it's clean",
    
        },
        {
            word:'discipline',
            wordlao:'ລະບຽບວິໄນ',
            description:'training that makes people more willing to obey or more able to control themselves', 
            senten:"I don't have enough (self) discipline to save money",
    
        },
        {
            word:'contian',
            wordlao:'ບັນຈຸ',
            description:'to have something inside or include something as a part', 
            senten:'How much liquid do you think this bottle contains?',
    
        },
        {
            word:'object',
            wordlao:'ວັດຖຸ',
            description:'a thing that you can see or touch but that is not usually a living animal, plant, or person:', 
            senten:'Several people reported seeing a strange object in the sky',
    
        },
        {
            word:'strange',
            wordlao:'ແປກປະຫຼາດ',
            description:'not familiar, or difficult to understand; different', 
            senten:'We kept hearing strange noises coming from the attic',
    
        },
        {
            word:'stranger',
            wordlao:'ຄ້ນແປກໜ້າ',
            description:'someone you do not know', 
            senten:'My mother always warned me not to talk to strangers',
    
        },
        {
            word:'warn',
            wordlao:'ເຕືອນ',
            description:'to make someone realize a possible danger or problem', 
            senten:"I'm warning you, don't mess about with those tools",
    
        },
        {
            word:'subject',
            wordlao:'ປະເດັນ',
            description:'the thing that is being discussed, considered, or studied:', 
            senten:'Our subject for discussion is homelessness.',
    
        },
        {
            word:'loss',
            wordlao:'ການສູນເສຍ',
            description:'the fact that you no longer have something or have less of something', 
            senten:'He suffered a gradual loss of memory',
    
        },
        {
            word:'funeral',
            wordlao:'ງານສົບ',
            description:'a (usually religious) ceremony for burying or burning the body of a dead person', 
            senten:'The funeral will be held next Friday',
    
        },
        {
            word:'instruction',
            wordlao:'ຄຳແນະນຳ',
            description:'advice and information about how to do or use something', 
            senten:'The cooking instructions say to bake it for half an hour',
    
        },
        {
            word:'cook(verb)',
            wordlao:'ຕົ້ມສຸກ,ເຮັດອາຫານ',
            description:'When you cook food, you prepare it to be eaten by heating it in a particular way', 
            senten:"Don't cook vegetables for too long - they'll lose all their goodness.",
    
        },
        {
            word:'symbol',
            wordlao:'ເຄື່ອງໝາຍ,ສັນຍາລັກ',
            description:'a sign, shape, or object that is used to represent something else', 
            senten:'A heart shape is the symbol of love',
    
        },
        {
            word:'heat',
            wordlao:'ຄວາມຮ້ອນ',
            description:'the quality of being hot or warm, or the temperature of something', 
            senten:'How do you manage to work in this heat without air conditioning?',
    
        },
        {
            word:'tough',
            wordlao:'ຍາກ, ທົນທານ',
            description:'strong; not easily broken or made weaker', 
            senten:'These toys are made from tough plastic',
    
        },
        {
            word:'choose',
            wordlao:'ເລືອກ',
            description:'to decide what you want from two or more things or possibilities', 
            senten:'She had to choose between the two men in her life.',
    
        },
        {
            word:'discount',
            wordlao:'ສ່ວນຫຼຸດ',
            description:'a reduction in the usual price', 
            senten:'They offer a ten percent discount on travel for students',
    
        },
        {
            word:'spare',
            wordlao:'ສຳຮອງ',
            description:'If something is spare, it is available to use because it is extra', 
            senten:'We have a spare room if you want to stay overnight with us.',
    
        },
        {
            word:'early',
            wordlao:'ກ່ອນ, ເຊົ້າ',
            description:'near the beginning of a period of time, or before the usual, expected', 
            senten:'If you finish early you can go home',
    
        },
        {
            word:'challenge(verb)',
            wordlao:'ທ້າ',
            description:'o invite someone to compete or take part, especially in a game or argument', 
            senten:'They challenged us to a game of football',
    
        },
        {
            word:'challenge(noun)',
            wordlao:'ທ້າທາຍ',
            description:'the situation of being faced with', 
            senten:"It's going to be a difficult job but I'm sure she'll rise to the challenge",
    
        },
       {
                word:'option',
                wordlao:'ຕົວເລືອກ',
                description:'one thing that can be chosen from a set of possibilities, or the freedom to make a choice', 
                senten:'There are various options open to someone who is willing to work hard',
        
            },
            {
                word:'pursue',
                wordlao:'ໄລ່ຕາມ, ຕິດຕາມ',
                description:'to follow someone or something', 
                senten:'The car was pursued by helicopters.',
        
            },
            {
                word:'opinion',
                wordlao:'ຄວາມຄິດເຫັນ',
                description:'a thought or belief about something or someone', 
                senten:"What's your opinion about/on the matter?",
        
            },
            {
                word:'impress',
                wordlao:'ເຮັດໃຫ້ປະທັບໃຈ',
                description:'to cause someone to admire or respect you', 
                senten:'He tried to impress his teachers by using big words in all his essays.',
        
            },
            {
                word:'scar',
                wordlao:'ແຜເປັນ',
                description:'a mark left on part of the body after an injury,', 
                senten:'That burn will leave a bad scar',
        
            },
            {
                word:'injury',
                wordlao:'ບາດເຈັບ',
                description:"physical harm or damage to someone's body caused by an accident or an attack", 
                senten:'They were lucky to escape (without) injury',
        
            },
            {
                word:'scare',
                wordlao:'ເຮັດໃຫ້ຍ້ານ,ຕົກໃຈ',
                description:'to (make a person or animal) feel frightened', 
                senten:'Sudden noises scare her',
        
            },
            {
                word:'stressed',
                wordlao:'ຮູ້ສຶກກົດດັນ,ຄຽດ',
                description:'worried and nervous', 
                senten:'The kids are sick, I just lost my baby-sitter, and our toilet doesn’t work – no wonder I feel stressed-out',
        
            },
            {
                word:'survive',
                wordlao:'ຢູ່ລອດ',
                description:'to continue to live or exist', 
                senten:'These plants cannot survive in very cold conditions.',
        
            },
            {
                word:'extinct',
                wordlao:'ສູນພັນ',
                description:'not now existing', 
                senten:'There is concern that the giant panda will soon become extinct',
        
            },
            {
                word:'exist',
                wordlao:'ມີຕົວຕົນ,ມີຢູ່',
                description:'to be, or to be real', 
                senten:'Poverty still exists in this country.',
        
            },
            {
                word:'rumor',
                wordlao:'ຂ່າວລື',
                description:'an unofficial interesting story or piece of news that might be true or invented', 
                senten:"I heard a rumor that she'd been seeing with someone",
        
            },
            {
                word:'confused',
                wordlao:'ຄວາມຮູ້ສຶກສັບສົນ',
                description:'unable to think clearly or to understand something:', 
                senten:"Grandpa gets pretty confused sometimes, and doesn't even know what day it is",
        
            },
            {
                word:'heavy',
                wordlao:'ຄວາມໜັກ',
                description:'weighing a lot, and needing effort to move or lift', 
                senten:'How heavy is that box?',
        
            },
            {
                word:'repository',
                wordlao:'ບ່ອນເກັບ',
                description:'a place where things are stored and can be found', 
                senten:'a deep repository for nuclear waste',
        
            },
            {
                word:'pronounce',
                wordlao:'ອອກສຽງ,ເວົ້າ',
                description:'to say a word or a letter in a particular way:', 
                senten:'How do you pronounce your surname?',
        
            },
            {
                word:'pratice',
                wordlao:'ເຝິກ,ເຝິກຝົນ',
                description:'action rather than thought or ideas', 
                senten:'Everything gets better with practice ',
        
            },
            {
                word:'tolerate',
                wordlao:'ອົດທົນ',
                description:'to deal with something unpleasant or annoying', 
                senten:'They don’t have the best service, but I tolerate it because I love their food. ',
        
            }, 
              {
                word:'welcome',
                wordlao:'ຕ້ອນຮັບ',
                description:'to be pleased about and encourage or support something', 
                senten:'you will receive a warm welcome ',
        
            },
            {
                word:'transport',
                wordlao:'ການຂົນສົ່ງ',
                description:'the movement of people or goods from one place to another', 
                senten:'The company will arrange transport from the airport. ',
        
            },
            {
                word:'arrange',
                wordlao:'ຈັດ,ຈັດແຈງ',
                description:'to plan, prepare for, or organize something', 
                senten:"I'm trying to arrange my work so that I can have a couple of days off next week.",
        
            },
            {
                word:'weekday',
                wordlao:'ວັນທຳມະດາ,ຈັນ-ສຸກ',
                description:'any day of the week except Sunday and Saturday', 
                senten:"On weekdays I'm usually in bed by ten o'clock.",
        
            },

            {
                word:'goods',
                wordlao:'ສິນຄ້າ',
                description:'things for sale, or the things that you own', 
                senten:"There is a 25 percent discount on all electrical goods until the end of the week",
        
            },
            {
                word:'rely',
                wordlao:'ເພິ່ງພາ',
                description:'to need a particular thing or the help and support of someone or something in order to continue,', 
                senten:"the success of this project relies on everyone making an effort",
        
            },
            {
                word:'revenge',
                wordlao:'ແກ້ແຄ້ນ',
                description:'harm done to someone as a punishment for harm that they have done to someone else', 
                senten:"He needed to satisfy his desire for revenge",
        
            },
            {
                word:'water',
                wordlao:'ຫົດນຳ້',
                description:'to pour water on to plants or the soil that they are growing in', 
                senten:"I've asked my neighbour to water the plants while I'm away",
        
            },
            
            {
                word:'bandage',
                wordlao:'ຜ້າພັນແຜ',
                description:'a long, narrow piece of cloth that is tied around an injury', 
                senten:"Ensure the wound is free from dirt before applying the bandage.",
        
            },
            {
                word:'spend',
                wordlao:'ໃຊ້(ເງິນ,ເວລາ)',
                description:'to give money as a payment for something:', 
                senten:"We've just spent $1.9 million on improving our computer network..",
        
            },
            {
                word:'countdown',
                wordlao:'ນັບຖອຍຫຼັງ',
                description:'the act of counting backwards to zero:', 
                senten:"The countdown to the rocket launch will begin at 9.00 a.m.",
        
            },
            {
                word:'change(noun)',
                wordlao:'ເງິນທອນ',
                description:'the money that is returned to someone who has paid for something that costs less than the amount that they gave', 
                senten:"I think you've given me the wrong change.",
        
            },
            {
                word:'delay',
                wordlao:'ຊັກຊ້າ,ລ່າຊ້າ',
                description:'to make something happen at a later time than originally planned or expected', 
                senten:"My plane was delayed by an hour",
        
            },
           

          



           






    


        
]
 