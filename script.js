const characterGroups = [
  {
    id: "main",
    team: "偵探與夥伴",
    characters: [
      ["江戶川柯南", "工藤新一", "本作主角。遭琴酒灌下 APTX-4869 後身體縮小，化名寄住毛利家並追查黑衣組織；推理能力出眾，有「平成的夏洛克・福爾摩斯」之稱。與毛利蘭是青梅竹馬，兩人已正式交往。"],
      ["毛利蘭", "", "帝丹高中二年 B 班學生、空手道社主將，曾獲關東地區大賽冠軍。與工藤新一是青梅竹馬，兩人已正式交往。"],
      ["毛利小五郎", "", "小蘭的父親與私家偵探。柯南常用麻醉槍和變聲器以他的名義破案，因此有「沉睡的小五郎」之稱；精通柔道，警校時期曾創下 20 槍全中的射擊紀錄。與妃英理是青梅竹馬夫妻，目前分居。"],
      ["小嶋元太", "", "少年偵探團團長，非常貪吃，最喜歡鰻魚飯，常以「可以讓我吃幾晚鰻魚飯」衡量事件價值；喜歡吉田步美。"],
      ["園谷光彥", "", "少年偵探團團員，熱衷科學，在柯南的薰陶下提升推理能力，也曾獨自解決較單純的案件；似乎欣賞步美和灰原哀。"],
      ["吉田步美", "", "少年偵探團團員，活潑、有正義感，經常幫助他人；喜歡柯南。"],
      ["灰原哀", "宮野志保／雪莉", "曾是黑衣組織成員，代號雪莉。姊姊遇害後服下 APTX-4869 逃離組織，縮小並化名灰原哀，由阿笠博士收留，持續研究解藥；也是比護隆佑的球迷。", ["organization"]],
      ["鈴木園子", "", "帝丹高中二年 B 班學生、鈴木財團次女，與小蘭和新一自幼相識，雖出身名門卻沒有架子，也常運用家中資源幫助朋友；崇拜怪盜基德，與京極真交往。"],
      ["世良真純", "赤井真純", "帝丹高中二年 B 班學生，自稱女高中生偵探，擅長截拳道，是赤井家的么女。"],
      ["服部平次", "", "關西知名高中生偵探，與工藤新一齊名，有「關東的工藤、關西的服部」之稱；擅長推理、劍道與越野摩托車。自己發現柯南的真實身分；與遠山和葉是青梅竹馬，兩人已正式交往。"],
      ["遠山和葉", "", "來自大阪，合氣道二段，常以此制伏犯人。與服部平次是青梅竹馬，兩人已正式交往；也與小蘭、園子成為好友。"],
      ["大岡紅葉", "", "京都泉心高中學生，出身富裕的大岡家。幼時在歌牌大賽與服部平次相識，誤以為他曾向自己告白，因此稱他為未婚夫。"],
      ["沖田總司", "", "京都泉心高中學生與劍道高手，常在劍道大賽與服部平次交手，實力更勝一籌。"],
      ["京極真", "", "杯戶高中空手道社主將、日本空手道黑帶冠軍，有「蹴擊貴公子」等稱號；與鈴木園子交往，也將怪盜基德視為情敵。"]
    ]
  },
  {
    id: "family",
    team: "家族・學校・相關人士",
    characters: [
      ["小林澄子", "", "帝丹小學一年 B 班導師兼少年偵探團顧問，與佐藤美和子長相相似，是江戶川亂步的粉絲，並與白鳥任三郎交往中。"],
      ["若狹留美", "瑞秋・淺香", "帝丹小學一年 B 班副班導師，右眼失明。曾任資本家阿曼達・休斯的保鑣，為追查阿曼達與羽田浩司遇害案的真相而進入帝丹小學任教。"],
      ["工藤優作", "", "工藤新一的父親、世界知名推理小說家，推理能力更勝新一與服部平次。曾教導新一多項技能；與初代怪盜基德黑羽盜一是雙胞胎兄弟，「基德」之名也由他命名。"],
      ["工藤有希子", "", "工藤新一的母親，舊姓藤峰，曾是知名銀幕巨星，婚後退出影壇。與妃英理是帝丹高中校友，曾向初代怪盜基德黑羽盜一學習易容，並與苦艾酒是好友。"],
      ["阿笠博士", "", "本名即阿笠博士，是工藤家的鄰居與發明家，也是優作的老朋友、最早知道柯南真實身分的人。提供道具協助柯南辦案，並收留逃離黑衣組織的灰原哀；初戀情人是芙莎繪・坎貝爾・木之下。"],
      ["鈴木次郎吉", "", "鈴木園子的伯父、鈴木財團顧問，愛犬名叫魯邦。熱衷讓自己的事蹟登上報紙頭版，常以大型珠寶展出挑戰怪盜基德；器重足智多謀、屢次挫敗基德的柯南，視他為「基德剋星」。"],
      ["鈴木史郎", "", "鈴木園子的父親、鈴木財團董事長，性格典型妻管嚴。"],
      ["鈴木朋子", "", "鈴木園子的母親、鈴木財團董事長夫人，性格好強自信，也常與怪盜基德交鋒。原打算讓長女綾子與富澤雄三結婚，因此希望園子招贅；曾以守住寶石不被基德奪走為條件考驗京極真，最後認可兩人的戀情。"],
      ["鈴木綾子", "", "鈴木園子的姊姊、鈴木財團長女，與富澤財團三公子富澤雄三有婚約。"],
      ["妃英理", "毛利英理", "知名律師、毛利蘭的母親，與毛利小五郎是青梅竹馬夫妻，目前分居，經營妃律師事務所。曾與工藤有希子同為帝丹高中校友。"],
      ["宮野厚司", "", "宮野志保與宮野明美的父親，曾任黑衣組織科學家，參與藥物研究。據悉，他與艾蓮娜在志保出生不久後離奇身亡，組織成員聲稱兩人死於「意外事故」。", ["organization"]],
      ["宮野艾蓮娜", "", "宮野志保與宮野明美的母親，曾任黑衣組織科學家，參與藥物研究。據悉，她與厚司在志保出生不久後離奇身亡，組織成員聲稱兩人死於「意外事故」。", ["organization"]],
      ["宮野明美", "", "宮野志保的姊姊，曾試圖帶妹妹逃離黑衣組織，但計畫失敗，遭琴酒殺害。", ["organization"]],
      ["赤井務武", "", "赤井家的父親，行蹤與過去一直是家族的重要謎團。"],
      ["赤井瑪麗", "瑪麗・世良", "赤井家的母親、MI6 成員，縮小後以世良真純的母親身分行動。"],
      ["羽田秀吉", "赤井秀吉／世良秀吉", "赤井家的次子、職業將棋棋士。"],
      ["服部平藏", "", "服部平次的父親、大阪府警本部長（警視監），擅長劍道，推理能力出眾，與工藤優作不相上下。與遠山銀司郎是好友兼左右手；為人嚴格，在家時卻有向妻子撒嬌的一面。"],
      ["服部靜華", "", "舊姓池波，服部平次的母親，是深藏不露的劍道高手，也曾是歌牌女王。"],
      ["遠山銀司郎", "", "遠山和葉的父親、大阪府警刑事部長（警視長），相當欣賞服部平次，希望能撮合平次與和葉。與服部平藏是好友兼左右手。"],
      ["遠山櫻", "", "遠山和葉的母親，曾任大阪府警槍械對策部隊成員，學生時代與服部靜華是同學。"],
      ["大岡紅葉的祖父", "", "日本前首相，疑似為黑衣組織的線人，同時也是組織的幹部之一。"],
      ["伊織無我", "", "大岡紅葉的管家，也曾以其他身分從事公安相關工作，是《名偵探柯南》漫畫與動畫史上第一位以「????（?）」形式名牌登場的角色。"],
      ["伊森・本堂", "", "已故 CIA 情報員，本堂瑛海與本堂瑛祐的父親。調查黑衣組織期間，為保護身分即將曝光的瑛海而自殺，並製造遭殺害的假象。", ["organization"]],
      ["本堂瑛海", "水無怜奈／基爾", "CIA 情報員，本名本堂瑛海，以水無怜奈身分活動並潛入黑衣組織，代號基爾，負責情報工作與暗殺。曾在暗殺行動期間遭遇車禍昏迷，受 FBI 保護後返回組織，並假裝槍殺赤井秀一以取得組織信任。", ["organization"]],
      ["本堂瑛祐", "", "本堂瑛海的弟弟，曾轉入帝丹高中二年 B 班尋找姊姊，後前往美國。他得知瑛海的真實身分後，立志追隨父親與姊姊加入 CIA；也曾向柯南表示對毛利蘭一見鍾情。"],
      ["目暮綠", "", "目暮十三的妻子，暱稱小綠。高中時是女中豪傑；年輕時曾為替朋友報仇自願擔任誘餌，在連續駕車撞人逃逸案中受重傷，額頭留下與目暮相似的疤痕。"],
      ["栗山綠", "", "妃英理律師事務所的秘書。"],
      ["榎本梓", "", "波洛咖啡廳女服務生，與安室透共事，也是怪盜基德的忠實粉絲，自稱「月下的侍者」。"],
      ["沖野洋子", "", "日本當紅人氣歌手與女演員，曾是地球淑女隊成員，也是毛利小五郎的偶像；曾請小五郎協助調查，也常送演唱會門票給毛利一家。"],
      ["比護隆佑", "", "BIG大阪職業足球隊前鋒，背號 9，是灰原哀喜愛的球星。曾與沖野洋子傳出熱戀緋聞，後由柯南查明兩人清白。"],
      ["芙莎繪・坎貝爾・木之下", "", "國際知名時尚設計師、阿笠博士的初戀情人，一直保持單身。兩人兒時約定每年在銀杏樹下相見；第 40 年赴約時，她以為博士已有家庭，博士的一句「我現在也最喜歡銀杏喔」讓她重新燃起希望。"],
      ["阿曼達・休斯", "", "十七年前遇害的美國資本家，也是若狹留美（淺香）的養母，與美國政府及調查機關有廣泛人脈。她是羽田浩司的崇拜者，為保護淺香而服下 APTX-4869，遭蘭姆殺害。"],
      ["九條玲子", "", "東京地方檢察廳檢察官，有「司法界瑪丹娜」之稱，是妃英理的勁敵，經常與她在法庭上交鋒。"]
    ]
  },
  {
    id: "police",
    team: "警察・情報機構",
    characters: [
      ["降谷零", "安室透／波本", "警察廳警備局警備企畫課（通稱「零」）所屬公安警察、警部及高級國家公務員，奉命潛入黑衣組織，代號波本。情報蒐集、觀察與車技皆出色；與諸伏景光是兒時好友及同事，也是警校五人組的同期。", ["organization"]],
      ["黑田兵衛", "", "警視廳刑事部搜查一課管理官（警視），曾任警察廳幹部。"],
      ["目暮十三", "", "警視廳刑事部搜查一課強行犯搜查三系系長（警部），是工藤優作的老朋友。常與柯南及毛利偵探事務所合作，因常在案發現場遇見毛利小五郎，私下曾吐槽他是「瘟神」。"],
      ["白鳥任三郎", "", "警視廳刑事部搜查一課強行犯搜查三系刑警（警部），推理能力不錯，與京都府警警部綾小路文麿同期，兩人常被同袍視為死對頭。曾喜歡佐藤美和子，現與小林澄子相戀。"],
      ["佐藤美和子", "", "警視廳刑事部搜查一課強行犯搜查三系警部補，有「警視廳之花」之稱，擅長柔道且槍法精準。曾暗戀松田陣平，現與高木涉交往。"],
      ["高木涉", "", "警視廳刑事部搜查一課強行犯搜查三系刑警（巡查部長），關鍵時刻可靠，與佐藤美和子交往。曾與已故前輩伊達航合稱「WATARU兄弟」。"],
      ["千葉和伸", "", "警視廳刑事部搜查一課強行犯搜查三系鑑識刑警（巡查部長），熱愛動漫。與小學同班同學三池苗子互為初戀，歷經波折後重逢並交往。"],
      ["中森銀三", "", "警視廳搜查二課警部、中森青子的父親。自黑羽盜一時期便開始追捕怪盜基德，至今已追捕二十多年。"],
      ["宮本由美", "", "警視廳交通部交通執行課女警（警部補），是佐藤美和子的好友，男友為職業將棋棋士羽田秀吉。秀吉曾決定取得將棋七冠王後才向她坦白心意。"],
      ["三池苗子", "", "警視廳交通部交通執行課女警（巡查部長），是千葉和伸的小學同班同學與初戀情人；兩人歷經波折後重逢並交往。"],
      ["風見裕也", "", "警視廳公安部警部補，是降谷零的部下，也是少數能直接與降谷接觸的公安警察；私下是沖野洋子的粉絲。"],
      ["萩原研二", "", "萩原千速的弟弟、警校五人組成員，曾任警視廳警備部機動隊拆彈組警察，是爆炸物處理專家；處理大樓炸彈時遭犯人引爆炸彈而殉職。"],
      ["松田陣平", "", "警校五人組成員，曾任警視廳拆彈組警察，後調入搜查一課。與萩原研二是好友，也和降谷零、諸伏景光、伊達航交好，曾教降谷拆彈；先後對萩原千速與佐藤美和子有好感，最後在摩天輪爆炸事件中殉職。"],
      ["伊達航", "", "警校五人組成員，曾任警視廳搜查一課刑警，女友是英語教師娜塔莉・來間。與高木涉出勤後遭遇車禍身亡，臨終前託付高木將裝有戒指的筆記本交給娜塔莉。"],
      ["諸伏景光", "蘇格蘭威士忌", "諸伏高明的弟弟、警校五人組成員，曾任警視廳公安警察，與降谷零是兒時好友及同事。臥底黑衣組織時代號蘇格蘭威士忌，身分曝光後為避免落入組織手中而自盡；赤井秀一開槍是為了破壞手機中的情報，並曾在降谷面前假稱自己殺了景光。", ["organization"]],
      ["大瀧悟郎", "", "大阪府警總部刑事部警部，與服部父子及遠山銀司郎交情深厚，深受他們信賴。"],
      ["大和敢助", "", "長野縣警搜查一課警部，與上原由衣是青梅竹馬及同事，與諸伏高明是好友兼競爭對手。追捕犯人時曾遭臥底公安射傷左眼，後遇雪崩而左腿受傷，一度失蹤並被認為殉職，康復後回到長野縣警任職。"],
      ["上原由衣", "", "長野縣警搜查一課刑警，與大和敢助是青梅竹馬及同事。"],
      ["諸伏高明", "", "長野縣警搜查一課警部、諸伏景光的哥哥。景光幼年時被東京親戚收養，高明後來得知弟弟在警視廳任職，並在得知景光殉職後深感痛心。"],
      ["山村操", "", "群馬縣警搜查一課警部，自稱「阿山先生」。因崇拜工藤有希子主演的電影而立志當警察，也仰慕毛利小五郎；推理能力不佳，卻曾意外升任警部。幼年時曾是諸伏景光的玩伴。"],
      ["橫溝參悟", "", "靜岡縣警搜查一課警部，曾任埼玉縣警，是橫溝重悟的雙胞胎哥哥；十分崇拜毛利小五郎，自稱是他的頭號弟子。"],
      ["橫溝重悟", "", "神奈川縣警搜查一課警部，是橫溝參悟的雙胞胎弟弟。"],
      ["萩原千速", "", "神奈川縣警交通部第三交通機動隊小隊長（警部補），是萩原研二的姊姊。"],
      ["綾小路文麿", "", "京都府警搜查一課警部，出身官宦家庭，有「貴族警部」的稱號，與白鳥任三郎同期。隨身帶著花栗鼠寵物，稱牠是自己最好的朋友。"],
      ["赤井秀一", "諸星大／黑麥威士忌／沖矢昴", "FBI 頂尖搜查官，擅長截拳道與狙擊，與柯南同被苦艾酒稱為能擊穿組織心臟的「銀色子彈」。曾化名諸星大、以黑麥威士忌代號臥底組織，後假死並化名沖矢昴繼續調查；曾與宮野明美及茱蒂交往。", ["organization"]],
      ["茱蒂・史坦林", "茱蒂・聖提米利翁", "FBI 搜查官。父親也是 FBI 成員，二十年前遭苦艾酒殺害；她為調查黑衣組織曾到帝丹高中任教，教過毛利蘭與鈴木園子。曾與赤井秀一交往。"],
      ["詹姆斯・布拉克", "", "FBI 高級搜查官，赤井秀一、茱蒂與安德烈的上司。曾遭記者誤認為馬戲團負責人而被綁架，留下「P&A」暗號協助柯南救出，並稱柯南為「Cool Guy」。"],
      ["安德烈・卡邁爾", "", "FBI 搜查官、茱蒂的工作夥伴，駕駛技術出色。曾被茱蒂誤認為組織臥底，兩年前也曾因任務失誤導致行動失敗，暴露赤井秀一的臥底身分。"]
    ]
  },
  {
    id: "organization",
    team: "黑衣組織",
    characters: [
      ["烏丸蓮耶", "那位大人", "黑衣組織首腦，也是本作故事的幕後黑手之一。工藤優作推理出「那位先生」就是半世紀前以 99 歲高齡宣告死亡的大富豪烏丸蓮耶；其財力凌駕鈴木財團與大岡家族，灰原哀稱他是極度危險的「潘朵拉的盒子」。"],
      ["蘭姆", "脇田兼則", "黑衣組織二號人物，以壽司店廚師脇田兼則的身分在伊呂波壽司店工作，自稱左眼長了不得了的東西而戴眼罩，並接近毛利偵探事務所。曾有過目不忘的能力，但十七年前與現今都因不明原因失去；左眼也疑似失明。"],
      ["琴酒", "黑澤陣", "黑衣組織高級幹部，負責重要交易、處置不合格成員與間諜，是少數能直接與「那位先生」見面的人物。性格冷酷殘忍且行事冷靜，最初使工藤新一服下 APTX-4869。"],
      ["苦艾酒", "莎朗・溫亞德／莉絲・溫亞德", "黑衣組織高級幹部，獲准直接聯絡「那位先生」並獨自行動，負責情報蒐集與暗殺。公開身分曾是美國演員莎朗・溫亞德，對外宣稱莎朗死亡後以其女兒克莉絲・溫亞德身分活動；外貌多年未變，原因疑與某種藥物有關。"],
      ["伏特加", "魚塚三郎", "黑衣組織幹部與琴酒的搭檔，完全服從琴酒並稱他「大哥」或「老大」。以魁梧身形和墨鏡為特徵，負責重要交易買賣。"],
      ["香堤", "", "黑衣組織少數女性幹部之一，也是優秀狙擊手。與柯倫及蘋果白蘭地私交甚篤，對苦艾酒拋下蘋果白蘭地一事十分不滿。"],
      ["柯倫", "", "黑衣組織幹部與優秀狙擊手，是香堤的搭檔。與香堤及蘋果白蘭地交好，對苦艾酒利用並棄置蘋果白蘭地一事不滿。"],
      ["匹斯可", "枡山憲三", "已故的黑衣組織幹部與元老，真實身分是成功企業家、汽車公司董事長枡山憲三。因記得志保幼年時的模樣，從組織資料庫認出灰原哀；暗殺吞口重彥時身分曝光，奉「那位先生」之命遭琴酒處決。"],
      ["蘋果白蘭地", "", "曾任黑衣組織幹部，是組織的日本籍海外狙擊手，與柯倫、香堤交好並迷戀苦艾酒。受苦艾酒之託在港口埋伏，狙擊茱蒂後被赤井秀一打斷雙腿並奪走武器；遭苦艾酒拋下後，以藏起的手槍自盡。"],
      ["龍舌蘭", "", "已故的黑衣組織幹部，曾與電腦工程師板倉卓接觸。與滿天堂職員交易時拿錯箱子，意外遭炸死，組織線索也因此被銷毀。"],
      ["楠田陸道", "", "黑衣組織底層成員。為尋找失蹤的基爾，假裝病患入住杯戶中央醫院調查；身分曝光、逃亡途中自殺，遺體後被赤井秀一用於假死計畫。"],
      ["沼淵己一郎", "", "黑衣組織末端成員，曾被培養成殺手，後被組織當作實驗品交給雪莉。逃離組織後因強盜殺人被捕，曾以尋找螢火蟲為由逃脫；遇見迷路的光彥後將他平安送回，最終再次被捕並判刑。"],
      ["邦尼", "", "CIA 派入黑衣組織的臥底，真名及組織內地位不明，是伊森・本堂與本堂瑛海的同事。原被派去接替水無怜奈、擔任伊森在組織的聯絡人；伊森自盡保護瑛海後，邦尼也因琴酒與伏特加察覺其存在而自盡，以保護瑛海。"],
      ["愛爾蘭", "", "劇場版《漆黑的追跡者》登場的黑衣組織成員。因琴酒殺害自己敬如父親、效命多年的匹斯可而憎恨琴酒，並故意隱瞞柯南就是工藤新一的事實。"],
      ["庫拉索", "", "劇場版《純黑的惡夢》登場，曾是蘭姆的首任親信，擁有異色瞳與特殊記憶能力，看過五色薄膜片後能迅速記憶大量資訊。為拯救感化自己的少年偵探團與灰原哀，犧牲自己阻止失控的摩天輪造成災難。"],
      ["阿夸維特", "", "劇場版《純黑的惡夢》登場的黑衣組織成員，因身分暴露，在多倫多加拿大國家電視塔遭香堤狙殺。"],
      ["雷司令", "", "劇場版《純黑的惡夢》登場的臥底，隸屬德國聯邦情報局（BND），本名利昂・布赫茲；身分暴露後在柏林遭琴酒射殺。"],
      ["賓加", "", "劇場版《黑鐵的魚影》登場的組織成員，庫拉索身亡後接替她成為蘭姆的第二任親信；最後因言語挑釁琴酒，遭琴酒引爆潛艇處置。"],
      ["XYZ雞尾酒", "", "特別篇《變小的名偵探》登場，組織內地位與真名不明。表面上是黑衣組織成員，實際上是某個未知國家情報機構派入組織的臥底，被琴酒與伏特加稱為「老鼠」。"]
    ]
  },
  {
    id: "other",
    team: "其他登場角色",
    characters: [
      ["怪盜基德", "黑羽快斗", "以華麗易容與魔術聞名的怪盜，與柯南多次交手。"]
    ]
  }
];

const categorySections = [
  {
    title: "主要角色",
    categories: [
      { id: "mori-office", label: "毛利偵探事務所", members: ["江戶川柯南", "毛利蘭", "毛利小五郎"] },
      { id: "detective-boys", label: "少年偵探團", members: ["江戶川柯南", "小嶋元太", "園谷光彥", "吉田步美", "灰原哀"] },
      { id: "teitan-high", label: "帝丹高中", members: ["毛利蘭", "鈴木園子", "世良真純"] },
      { id: "teitan-elementary", label: "帝丹小學", members: ["小林澄子", "若狹留美", "江戶川柯南", "小嶋元太", "園谷光彥", "吉田步美", "灰原哀"] },
      { id: "kaifang-high", label: "改方學園高中", members: ["服部平次", "遠山和葉"] },
      { id: "haido-high", label: "杯戶高中", members: ["京極真"] }
    ]
  },
  {
    title: "家族與事務所",
    categories: [
      { id: "kudo-family", label: "工藤家", members: ["江戶川柯南", "工藤優作", "工藤有希子"] },
      { id: "mori-family", label: "毛利家", members: ["毛利小五郎", "妃英理", "毛利蘭"] },
      { id: "agasa-family", label: "阿笠家", members: ["阿笠博士"] },
      { id: "suzuki-family", label: "鈴木財團", members: ["鈴木次郎吉", "鈴木史郎", "鈴木朋子", "鈴木綾子", "鈴木園子"] },
      { id: "miyano-family", label: "宮野家", members: ["宮野厚司", "宮野艾蓮娜", "宮野明美", "灰原哀"] },
      { id: "akai-family", label: "赤井家", members: ["赤井務武", "赤井瑪麗", "赤井秀一", "羽田秀吉", "世良真純"] },
      { id: "hattori-family", label: "服部家", members: ["服部平藏", "服部靜華", "服部平次"] },
      { id: "toyama-family", label: "遠山家", members: ["遠山銀司郎", "遠山櫻", "遠山和葉"] },
      { id: "ooka-family", label: "大岡財團", members: ["大岡紅葉的祖父", "大岡紅葉", "伊織無我"] },
      { id: "hondo-family", label: "本堂家", members: ["伊森・本堂", "本堂瑛海", "本堂瑛祐"] },
      { id: "megure-family", label: "目暮家", members: ["目暮綠", "目暮十三"] },
      { id: "eri-office", label: "妃律師事務所", members: ["妃英理", "栗山綠"] },
      { id: "poi-rot", label: "白羅", members: ["榎本梓", "降谷零"] },
      { id: "iroha-sushi", label: "伊呂波壽司店", members: ["蘭姆"] }
    ]
  },
  {
    title: "其他登場角色",
    categories: [
      { id: "notable-people", label: "知名人士", members: ["沖野洋子", "比護隆佑", "芙莎繪・坎貝爾・木之下", "阿曼達・休斯"] },
      { id: "kyoto-sen", label: "京都泉心高中", members: ["大岡紅葉", "沖田總司"] },
      { id: "crossover", label: "跨界作品・神偷怪盜", members: ["怪盜基德"] }
    ]
  },
  {
    title: "警察機關",
    categories: [
      { id: "police-agency", label: "警察廳", members: ["降谷零", "伊織無我"] },
      { id: "prosecutors", label: "檢察廳", members: ["九條玲子"] },
      { id: "police-first", label: "警視廳・搜查一課", members: ["黑田兵衛", "目暮十三", "白鳥任三郎", "佐藤美和子", "高木涉", "千葉和伸"] },
      { id: "police-second", label: "警視廳・搜查二課", members: ["中森銀三"] },
      { id: "police-traffic", label: "警視廳・交通部", members: ["宮本由美", "三池苗子"] },
      { id: "police-security", label: "警視廳・公安部", members: ["風見裕也"] },
      { id: "police-academy", label: "警校五人組", members: ["降谷零", "萩原研二", "松田陣平", "伊達航", "諸伏景光"] },
      { id: "osaka-police", label: "大阪府警", members: ["服部平藏", "遠山銀司郎", "大瀧悟郎"] },
      { id: "nagano-police", label: "長野縣警", members: ["大和敢助", "上原由衣", "諸伏高明"] },
      { id: "gunma-police", label: "群馬縣警", members: ["山村操"] },
      { id: "shizuoka-police", label: "靜岡縣警", members: ["橫溝參悟"] },
      { id: "kanagawa-police", label: "神奈川縣警", members: ["橫溝重悟", "萩原千速"] },
      { id: "kyoto-police", label: "京都府警", members: ["綾小路文麿"] }
    ]
  },
  {
    title: "情報機構",
    categories: [
      { id: "fbi", label: "FBI", members: ["赤井秀一", "茱蒂・史坦林", "詹姆斯・布拉克", "安德烈・卡邁爾"] },
      { id: "cia", label: "CIA", members: ["本堂瑛海", "伊森・本堂"] },
      { id: "mi6", label: "MI6", members: ["赤井瑪麗", "赤井務武"] }
    ]
  },
  {
    title: "黑衣組織",
    categories: [
      { id: "org-boss", label: "Boss", members: ["烏丸蓮耶"] },
      { id: "org-senior", label: "高級幹部", members: ["蘭姆", "琴酒", "苦艾酒"] },
      { id: "org-officers", label: "幹部", members: ["伏特加", "香堤", "柯倫", "匹斯可", "蘋果白蘭地", "龍舌蘭"] },
      { id: "org-scientists", label: "科學家", members: ["宮野艾蓮娜", "宮野厚司"] },
      { id: "org-members", label: "其他成員", members: ["宮野明美", "楠田陸道"] },
      { id: "org-former", label: "脫離組織者", members: ["灰原哀", "沼淵己一郎"] },
      { id: "org-undercover", label: "臥底搜查官", members: ["本堂瑛海", "降谷零", "赤井秀一", "諸伏景光", "伊森・本堂", "邦尼"] },
      { id: "org-movies", label: "劇場版成員", members: ["愛爾蘭", "庫拉索", "阿夸維特", "雷司令", "賓加", "XYZ雞尾酒"] }
    ]
  }
];

const categories = categorySections.flatMap((section) => section.categories);
const categoryLabels = Object.fromEntries(categories.map(({ id, label }) => [id, label]));
const characterImagePositions = {
  "灰原哀": "50% 17%",
  "萩原千速": "50% 0%",
  "大岡紅葉": "50% 5%",
  "沖田總司": "50% 5%",
  "吉田步美": "50% 8%",
  "工藤有希子": "50% 28%",
  "宮野厚司": "50% 5%",
  "羽田秀吉": "50% 5%",
  "中森銀三": "50% 5%",
  "千葉和伸": "50% 5%",
  "賓加": "50% 12%",
  "佐藤美和子": "50% 0%",
  "高木涉": "50% 0%"
};
const characterImages = {
  "江戶川柯南": "柯南.jpg",
  "毛利蘭": "小蘭.jpg",
  "毛利小五郎": "毛利小五郎.jpg",
  "小嶋元太": "小岛元太.jpg",
  "園谷光彥": "光彥.png",
  "吉田步美": "步美.jpg",
  "灰原哀": "小哀.jpg",
  "鈴木園子": "園子.jpg",
  "世良真純": "世良.png",
  "服部平次": "平次.png",
  "遠山和葉": "和葉.jpg",
  "大岡紅葉": "紅葉.png",
  "沖田總司": "沖田總司.jpg",
  "京極真": "京極真.jpeg",
  "小林澄子": "小林.jpg",
  "若狹留美": "若狭留美.png",
  "工藤優作": "工藤优作.png",
  "工藤有希子": "有希子.jpg",
  "阿笠博士": "阿笠博士.jpg",
  "鈴木次郎吉": "鈴木次郎吉.jpg",
  "鈴木史郎": "鈴木史郎.jpg",
  "鈴木朋子": "朋子.jpg",
  "鈴木綾子": "綾子.jpg",
  "妃英理": "妃英理.jpg",
  "宮野厚司": "宮野厚司.png",
  "宮野艾蓮娜": "宮野艾蓮娜.png",
  "宮野明美": "明美.png",
  "赤井務武": "赤井務武.jpg",
  "赤井瑪麗": "瑪莉.png",
  "羽田秀吉": "羽田秀吉.jpg",
  "大岡紅葉的祖父": "大岡紅葉祖父.jpg",
  "服部平藏": "服部平藏.jpg",
  "服部靜華": "服部靜華.jpg",
  "遠山銀司郎": "遠山銀次郎.jpg",
  "遠山櫻": "遠山櫻.jpg",
  "伊織無我": "伊織.jpeg",
  "伊森・本堂": "伊森・本堂.jpg",
  "本堂瑛海": "本堂瑛海.png",
  "本堂瑛祐": "本堂瑛祐.png",
  "目暮綠": "目暮綠.jpg",
  "栗山綠": "栗山綠.jpg",
  "榎本梓": "榎本梓.jpg",
  "沖野洋子": "沖野洋子.jpg",
  "比護隆佑": "比護隆佑.jpg",
  "芙莎繪・坎貝爾・木之下": "芙莎繪・坎貝爾・木之下.jpg",
  "阿曼達・休斯": "阿曼達・休斯.jpg",
  "九條玲子": "九條玲子.jpg",
  "降谷零": "降谷零.jpg",
  "黑田兵衛": "黑田兵衛.png",
  "目暮十三": "目暮十三.jpg",
  "白鳥任三郎": "白鳥任三郎.png",
  "佐藤美和子": "佐藤美和子.jpg",
  "高木涉": "高木涉.jpg",
  "千葉和伸": "千葉和伸.png",
  "中森銀三": "中森銀三.png",
  "宮本由美": "宮本由美.jpg",
  "三池苗子": "三池苗子.jpg",
  "風見裕也": "風見裕也.png",
  "萩原研二": "萩原研二.jpg",
  "松田陣平": "松田陣平.jpg",
  "伊達航": "伊達航.jpg",
  "諸伏景光": "諸伏景光.jpg",
  "大瀧悟郎": "大瀧悟郎.png",
  "大和敢助": "大和敢助.jpg",
  "上原由衣": "上原由衣.jpg",
  "諸伏高明": "諸伏高明.jpg",
  "山村操": "山村操.jpg",
  "橫溝參悟": "橫溝參悟.jpg",
  "橫溝重悟": "橫溝重悟.jpg",
  "萩原千速": "萩原千速.jpg",
  "綾小路文麿": "綾小路文麿.jpg",
  "赤井秀一": "赤井秀一.jpg",
  "茱蒂・史坦林": "茱蒂・史坦林.jpg",
  "詹姆斯・布拉克": "詹姆斯・布拉克.png",
  "安德烈・卡邁爾": "安德烈・卡邁爾.jpg",
  "烏丸蓮耶": "烏丸蓮耶.jpg",
  "蘭姆": "朗姆.png",
  "琴酒": "琴酒.jpg",
  "苦艾酒": "苦艾酒.jpg",
  "伏特加": "伏特加.jpg",
  "香堤": "香緹.jpg",
  "柯倫": "柯倫.jpg",
  "匹斯可": "匹斯可.jpg",
  "蘋果白蘭地": "蘋果白蘭地.jpg",
  "龍舌蘭": "龍舌蘭.jpg",
  "楠田陸道": "楠田陸道.jpg",
  "沼淵己一郎": "沼淵己一郎.jpg",
  "邦尼": "邦尼.jpg",
  "愛爾蘭": "愛爾蘭.jpg",
  "庫拉索": "庫拉索.jpg",
  "阿夸維特": "阿夸維特.jpg",
  "雷司令": "雷司令.jpg",
  "賓加": "賓加.jpg",
  "XYZ雞尾酒": "XYZ雞尾酒.jpg",
  "怪盜基德": "怪盜基德.jpg"
};
const identityImages = {
  "工藤新一": "工藤新一.png",
  "雪莉": "雪莉.png",
  "瑪麗・世良": "玛丽.png",
  "沖矢昴": "沖矢昂.jpg"
};
const identityImagePositions = {
  "雪莉": "50% 0%"
};
const identityImageScales = {
  "雪莉": 1.4
};
const characters = characterGroups.flatMap(({ team, characters: entries }) =>
  entries.map(([name, aliases, description]) => ({
    name,
    aliases,
    identities: [name, ...aliases.split(/[／/]/).map((identity) => identity.trim()).filter(Boolean)],
    description,
    team,
    image: characterImages[name],
    imagePosition: characterImagePositions[name],
    categories: categories.filter(({ members }) => members.includes(name)).map(({ id }) => id)
  }))
);
const characterGrid = document.querySelector(".character-grid");
const categoryGroups = document.querySelector("#category-groups");
const visibleCount = document.querySelector("#visible-count");
const navLinks = [...document.querySelectorAll(".site-nav a")];
const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");
let activeFilter = "all";

function createFilterButton(id, label) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "filter-button category-filter-button";
  button.dataset.filter = id;
  button.setAttribute("aria-pressed", "false");
  const name = document.createElement("span");
  name.className = "category-filter-name";
  name.textContent = label;
  const count = document.createElement("span");
  count.className = "category-filter-count";
  count.dataset.filterCount = id;
  button.append(name, count);
  button.addEventListener("click", () => selectCategory(id, button));
  return button;
}

function createCharacterCard(character, index, selectedCategory = "all") {
  const card = document.createElement("article");
  card.className = "character-card";

  const artwork = document.createElement("div");
  artwork.className = "card-art";
  const fileNumber = document.createElement("span");
  fileNumber.className = "card-index";
  fileNumber.textContent = `FILE ${String(index + 1).padStart(3, "0")}`;
  const glyph = document.createElement("span");
  glyph.className = "card-glyph";
  glyph.textContent = character.name.slice(0, 1);
  glyph.setAttribute("aria-hidden", "true");
  let portraitImage;
  if (character.image) {
    portraitImage = document.createElement("img");
    portraitImage.className = "card-image";
    portraitImage.src = encodeURI(character.image);
    portraitImage.alt = `角色肖像：${character.name}`;
    portraitImage.loading = "lazy";
    portraitImage.decoding = "async";
    if (character.imagePosition) portraitImage.style.objectPosition = character.imagePosition;
    artwork.classList.add("has-image");
    glyph.hidden = true;
    artwork.append(portraitImage);
  }
  const role = document.createElement("span");
  role.className = "card-role";
  role.textContent = categoryLabels[selectedCategory] || categoryLabels[character.categories[0]] || character.team;
  const stamp = document.createElement("span");
  stamp.className = "card-stamp";
  stamp.textContent = `FILE\n${String(index + 1).padStart(3, "0")}`;
  artwork.append(fileNumber, glyph, role, stamp);

  const copy = document.createElement("div");
  copy.className = "card-copy";
  const team = document.createElement("div");
  team.className = "card-team";
  const affiliation = document.createElement("span");
  affiliation.textContent = selectedCategory === "all"
    ? character.categories.slice(0, 2).map((id) => categoryLabels[id]).join("・") || character.team
    : categoryLabels[selectedCategory];
  const status = document.createElement("i");
  status.setAttribute("aria-hidden", "true");
  team.append(affiliation, status);

  const name = document.createElement("h3");
  name.className = "card-identities";
  const switchableImages = new Map();
  character.identities.forEach((identity) => {
    const image = identityImages[identity] || characterImages[identity];
    if (image && image !== character.image) switchableImages.set(identity, image);
  });
  character.identities.forEach((identity, identityIndex) => {
    if (identityIndex > 0) {
      const separator = document.createElement("span");
      separator.className = "identity-separator";
      separator.setAttribute("aria-hidden", "true");
      separator.textContent = "/";
      name.append(separator);
    }

    const image = identity === character.name
      ? character.image
      : switchableImages.get(identity);
    if (portraitImage && image) {
      const identityButton = document.createElement("button");
      identityButton.type = "button";
      identityButton.className = "identity-image-button";
      identityButton.textContent = identity;
      identityButton.setAttribute("aria-label", `顯示${identity}的圖片`);
      identityButton.setAttribute("aria-pressed", String(identity === character.name));
      identityButton.addEventListener("click", () => {
        portraitImage.src = encodeURI(image);
        portraitImage.alt = `角色肖像：${identity}`;
        portraitImage.style.objectPosition = identity === character.name
          ? character.imagePosition || ""
          : identityImagePositions[identity] || "";
        const imageScale = identityImageScales[identity];
        portraitImage.style.transform = imageScale ? `scale(${imageScale})` : "";
        portraitImage.style.transformOrigin = imageScale ? "center top" : "";
        name.querySelectorAll(".identity-image-button").forEach((button) => {
          button.setAttribute("aria-pressed", String(button === identityButton));
        });
      });
      name.append(identityButton);
    } else {
      const identityLabel = document.createElement("span");
      identityLabel.textContent = identity;
      name.append(identityLabel);
    }
  });
  const description = document.createElement("p");
  description.textContent = character.description;
  const tags = document.createElement("div");
  tags.className = "card-tags";
  character.categories.slice(0, 3).forEach((id) => {
    const tag = document.createElement("span");
    tag.textContent = categoryLabels[id];
    tags.append(tag);
  });
  copy.append(team, name, description, tags);
  card.append(artwork, copy);
  return card;
}

function selectCategory(filter, selectedButton) {
  activeFilter = filter;
  document.querySelectorAll(".filter-button").forEach((button) => {
    const isActive = button === selectedButton;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
  const visibleCharacters = filter === "all"
    ? characters
    : characters.filter((character) => character.categories.includes(filter));
  characterGrid.replaceChildren(...visibleCharacters.map((character) =>
    createCharacterCard(character, characters.indexOf(character), filter)
  ));
  visibleCount.textContent = String(visibleCharacters.length);
}

for (const section of categorySections) {
  const group = document.createElement("section");
  group.className = "category-group";
  const heading = document.createElement("h3");
  heading.className = "category-group-title";
  heading.textContent = section.title;
  const buttons = document.createElement("div");
  buttons.className = "category-group-buttons";
  section.categories.forEach(({ id, label }) => buttons.append(createFilterButton(id, label)));
  group.append(heading, buttons);
  categoryGroups.append(group);
}

const allButton = document.querySelector('[data-filter="all"]');
allButton.addEventListener("click", () => selectCategory("all", allButton));
categories.forEach(({ id }) => {
  const count = characters.filter((character) => character.categories.includes(id)).length;
  document.querySelector(`[data-filter-count="${id}"]`).textContent = String(count);
});
document.querySelector('[data-filter-count="all"]').textContent = String(characters.length);
selectCategory(activeFilter, allButton);

function closeMenu() {
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "開啟導覽選單");
  siteNav.classList.remove("is-open");
}

menuToggle.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "開啟導覽選單" : "關閉導覽選單");
  siteNav.classList.toggle("is-open", !isOpen);
});

navLinks.forEach((link) => link.addEventListener("click", closeMenu));
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeMenu();
});

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      navLinks.forEach((link) => {
        link.classList.toggle("active", link.hash === `#${entry.target.id}`);
      });
    }
  });
}, { rootMargin: "-30% 0px -60% 0px" });

document.querySelectorAll("main > section[id]").forEach((section) => sectionObserver.observe(section));
