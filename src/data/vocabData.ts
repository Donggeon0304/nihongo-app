export interface WordItem {
  id: string;
  kanji: string;
  kana: string;
  romaji: string;
  meaning: string;
  level: 'N5' | 'N4' | 'N3' | 'N2' | 'N1';
  category: 'daily' | 'travel' | 'food' | 'shopping' | 'business' | 'emotion' | 'basic' | 'entertainment' | 'conversation' | 'restaurant';
  example?: {
    japanese: string;
    reading: string;
    korean: string;
  };
}

export const VOCAB_DATA: WordItem[] = [
  {
    "id": "w_0001",
    "kanji": "空港",
    "kana": "くうこう",
    "romaji": "kuukou",
    "meaning": "공항",
    "level": "N4",
    "category": "travel",
    "example": {
      "japanese": "成田空港に到着しました。",
      "reading": "なりたくうこうに とうちゃくしました。",
      "korean": "나리타 공항에 도착했습니다."
    }
  },
  {
    "id": "w_0002",
    "kanji": "飛行機",
    "kana": "ひこうき",
    "romaji": "hikouki",
    "meaning": "비행기",
    "level": "N5",
    "category": "travel",
    "example": {
      "japanese": "飛行機のチケットを予約しました。",
      "reading": "ひこうきの ちけっとを よやくしました。",
      "korean": "비행기 티켓을 예약했습니다."
    }
  },
  {
    "id": "w_0003",
    "kanji": "パスポート",
    "kana": "ぱすぽーと",
    "romaji": "pasupooto",
    "meaning": "여권",
    "level": "N3",
    "category": "travel",
    "example": {
      "japanese": "パスポートを見せてください。",
      "reading": "ぱすぽーとを みせてください。",
      "korean": "여권을 보여주세요."
    }
  },
  {
    "id": "w_0004",
    "kanji": "切符",
    "kana": "きっぷ",
    "romaji": "kippu",
    "meaning": "표, 탑승권",
    "level": "N5",
    "category": "travel",
    "example": {
      "japanese": "切符売り場はどこですか？",
      "reading": "きっぷうりばは どこですか？",
      "korean": "표 파는 곳은 어디인가요?"
    }
  },
  {
    "id": "w_0005",
    "kanji": "改札口",
    "kana": "かいさつぐち",
    "romaji": "kaisatsuguchi",
    "meaning": "개찰구",
    "level": "N4",
    "category": "travel",
    "example": {
      "japanese": "改札口で待ち合わせましょう。",
      "reading": "かいさつぐちで まちあわせましょう。",
      "korean": "개찰구에서 만납시다."
    }
  },
  {
    "id": "w_0006",
    "kanji": "乗り場",
    "kana": "のりば",
    "romaji": "noriba",
    "meaning": "승강장, 타는 곳",
    "level": "N5",
    "category": "travel",
    "example": {
      "japanese": "タクシー乗り場はあそこです。",
      "reading": "たくしーのりばは あそこです。",
      "korean": "택시 승강장은 저기입니다."
    }
  },
  {
    "id": "w_0007",
    "kanji": "乗り換え",
    "kana": "のりかえ",
    "romaji": "norikae",
    "meaning": "환승, 갈아타기",
    "level": "N2",
    "category": "travel",
    "example": {
      "japanese": "次の駅で乗り換えです。",
      "reading": "つぎの えきで のりかえです。",
      "korean": "다음 역에서 환승입니다."
    }
  },
  {
    "id": "w_0008",
    "kanji": "出口",
    "kana": "でぐち",
    "romaji": "deguchi",
    "meaning": "출구",
    "level": "N5",
    "category": "travel",
    "example": {
      "japanese": "東出口から出てください。",
      "reading": "ひがしでぐちから でてください。",
      "korean": "동쪽 출구로 나오세요."
    }
  },
  {
    "id": "w_0009",
    "kanji": "入口",
    "kana": "いりぐち",
    "romaji": "iriguchi",
    "meaning": "입구",
    "level": "N5",
    "category": "travel",
    "example": {
      "japanese": "入口はこちらです。",
      "reading": "いりぐちは こちらです。",
      "korean": "입구는 이쪽입니다."
    }
  },
  {
    "id": "w_0010",
    "kanji": "ホテル",
    "kana": "ほてる",
    "romaji": "hoteru",
    "meaning": "호텔",
    "level": "N5",
    "category": "travel",
    "example": {
      "japanese": "ホテルにチェックインします。",
      "reading": "ほてるに ちぇっくいんします。",
      "korean": "호텔에 체크인합니다."
    }
  },
  {
    "id": "w_0011",
    "kanji": "荷物",
    "kana": "にもつ",
    "romaji": "nimotsu",
    "meaning": "짐",
    "level": "N5",
    "category": "travel",
    "example": {
      "japanese": "荷物を預かってもらえますか？",
      "reading": "にもつを あずかってもらえますか？",
      "korean": "짐을 맡아주실 수 있나요?"
    }
  },
  {
    "id": "w_0012",
    "kanji": "予約",
    "kana": "よやく",
    "romaji": "yoyaku",
    "meaning": "예약",
    "level": "N4",
    "category": "travel",
    "example": {
      "japanese": "田中という名前で予約しました。",
      "reading": "たなかという なまえで よやくしました。",
      "korean": "다나카라는 이름으로 예약했습니다."
    }
  },
  {
    "id": "w_0013",
    "kanji": "地図",
    "kana": "ちず",
    "romaji": "chizu",
    "meaning": "지도",
    "level": "N5",
    "category": "travel",
    "example": {
      "japanese": "地図で場所を確認します。",
      "reading": "ちずで ばしょを かくにんします。",
      "korean": "지도로 위치를 확인합니다."
    }
  },
  {
    "id": "w_0014",
    "kanji": "両替",
    "kana": "りょうがえ",
    "romaji": "ryougae",
    "meaning": "환전",
    "level": "N3",
    "category": "travel",
    "example": {
      "japanese": "日本円に両替したいです。",
      "reading": "にほんえんに りょうがえしたいです。",
      "korean": "일본 엔화로 환전하고 싶습니다."
    }
  },
  {
    "id": "w_0015",
    "kanji": "観光",
    "kana": "かんこう",
    "romaji": "kankou",
    "meaning": "관광",
    "level": "N3",
    "category": "travel",
    "example": {
      "japanese": "京都を観光しました。",
      "reading": "きょうとを かんこうしました。",
      "korean": "교토를 관광했습니다."
    }
  },
  {
    "id": "w_0016",
    "kanji": "お土産",
    "kana": "おみやげ",
    "romaji": "omiyage",
    "meaning": "기념품, 선물",
    "level": "N4",
    "category": "travel",
    "example": {
      "japanese": "東京のお土産を買いました。",
      "reading": "とうきょうの おみやげを かいました。",
      "korean": "도쿄 기념품을 샀습니다."
    }
  },
  {
    "id": "w_0017",
    "kanji": "温泉",
    "kana": "おんせん",
    "romaji": "onsen",
    "meaning": "온천",
    "level": "N2",
    "category": "travel",
    "example": {
      "japanese": "有名な温泉に行きたいです。",
      "reading": "ゆうめいな おんせんに いきたいです。",
      "korean": "유명한 온천에 가고 싶습니다."
    }
  },
  {
    "id": "w_0018",
    "kanji": "道",
    "kana": "みち",
    "romaji": "michi",
    "meaning": "길",
    "level": "N5",
    "category": "travel",
    "example": {
      "japanese": "道に迷ってしまいました。",
      "reading": "みちに まよってしまいました。",
      "korean": "길을 잃어버렸습니다."
    }
  },
  {
    "id": "w_0019",
    "kanji": "案内",
    "kana": "あんない",
    "romaji": "annai",
    "meaning": "안내",
    "level": "N4",
    "category": "travel",
    "example": {
      "japanese": "観光案内所はどこですか？",
      "reading": "かんこうあんないしょは どこですか？",
      "korean": "관광안내소는 어디인가요?"
    }
  },
  {
    "id": "w_0020",
    "kanji": "交番",
    "kana": "こうばん",
    "romaji": "kouban",
    "meaning": "파출소",
    "level": "N5",
    "category": "travel",
    "example": {
      "japanese": "交番で道を聞きました。",
      "reading": "こうばんで みちを ききました。",
      "korean": "파출소에서 길을 물었습니다."
    }
  },
  {
    "id": "w_0021",
    "kanji": "駅",
    "kana": "えき",
    "romaji": "eki",
    "meaning": "역",
    "level": "N5",
    "category": "travel",
    "example": {
      "japanese": "駅の近くにコンビニがあります。",
      "reading": "えきの ちかくに こんびにが あります。",
      "korean": "역 근처에 편의점이 있습니다."
    }
  },
  {
    "id": "w_0022",
    "kanji": "電車",
    "kana": "でんしゃ",
    "romaji": "densha",
    "meaning": "전철",
    "level": "N5",
    "category": "travel",
    "example": {
      "japanese": "満員電車に乗りました。",
      "reading": "まんいんでんしゃに のりました。",
      "korean": "만원 전철을 탔습니다."
    }
  },
  {
    "id": "w_0023",
    "kanji": "地下鉄",
    "kana": "ちかてつ",
    "romaji": "chikatetsu",
    "meaning": "지하철",
    "level": "N5",
    "category": "travel",
    "example": {
      "japanese": "地下鉄で行けば早いです。",
      "reading": "ちかてつで いけば はやいです。",
      "korean": "지하철로 가면 빠릅니다."
    }
  },
  {
    "id": "w_0024",
    "kanji": "新幹線",
    "kana": "しんかんせん",
    "romaji": "shinkansen",
    "meaning": "신칸센 (고속철도)",
    "level": "N2",
    "category": "travel",
    "example": {
      "japanese": "新幹線で大阪へ行きます。",
      "reading": "しんかんせんで おおさかへ いきます。",
      "korean": "신칸센으로 오사카에 갑니다."
    }
  },
  {
    "id": "w_0025",
    "kanji": "バス",
    "kana": "ばす",
    "romaji": "basu",
    "meaning": "버스",
    "level": "N5",
    "category": "travel",
    "example": {
      "japanese": "バス停はどこですか？",
      "reading": "ばすていは どこですか？",
      "korean": "버스 정류장은 어디인가요?"
    }
  },
  {
    "id": "w_0026",
    "kanji": "タクシー",
    "kana": "たくしー",
    "romaji": "takushii",
    "meaning": "택시",
    "level": "N5",
    "category": "travel",
    "example": {
      "japanese": "タクシーを呼んでください。",
      "reading": "たくしーを よんでください。",
      "korean": "택시를 불러주세요."
    }
  },
  {
    "id": "w_0027",
    "kanji": "レンタカー",
    "kana": "れんたかー",
    "romaji": "rentakaa",
    "meaning": "렌터카",
    "level": "N1",
    "category": "travel",
    "example": {
      "japanese": "レンタカーを借りました。",
      "reading": "れんたかーを かりました。",
      "korean": "렌터카를 빌렸습니다."
    }
  },
  {
    "id": "w_0028",
    "kanji": "トイレ",
    "kana": "といれ",
    "romaji": "toire",
    "meaning": "화장실",
    "level": "N5",
    "category": "travel",
    "example": {
      "japanese": "トイレをお借りできますか？",
      "reading": "といれを おかりできますか？",
      "korean": "화장실 좀 써도 될까요?"
    }
  },
  {
    "id": "w_0029",
    "kanji": "禁煙",
    "kana": "きんえん",
    "romaji": "kin-en",
    "meaning": "금연",
    "level": "N3",
    "category": "travel",
    "example": {
      "japanese": "禁煙席をお願いします。",
      "reading": "きんえんせきを おねがいします。",
      "korean": "금연석으로 부탁드립니다."
    }
  },
  {
    "id": "w_0030",
    "kanji": "喫煙",
    "kana": "きつえん",
    "romaji": "kitsuen",
    "meaning": "흡연",
    "level": "N4",
    "category": "travel",
    "example": {
      "japanese": "喫煙所はどこですか？",
      "reading": "きつえんじょは どこですか？",
      "korean": "흡연실은 어디인가요?"
    }
  },
  {
    "id": "w_0031",
    "kanji": "注文",
    "kana": "ちゅうもん",
    "romaji": "chuumon",
    "meaning": "주문",
    "level": "N3",
    "category": "food",
    "example": {
      "japanese": "注文をお願いします。",
      "reading": "ちゅうもんを おねがいします。",
      "korean": "주문 부탁드립니다."
    }
  },
  {
    "id": "w_0032",
    "kanji": "メニュー",
    "kana": "めにゅー",
    "romaji": "menyuu",
    "meaning": "메뉴판",
    "level": "N2",
    "category": "food",
    "example": {
      "japanese": "英語のメニューはありますか？",
      "reading": "えいごの めにゅーは ありますか？",
      "korean": "영어 메뉴판이 있나요?"
    }
  },
  {
    "id": "w_0033",
    "kanji": "会計",
    "kana": "かいけい",
    "romaji": "kaikei",
    "meaning": "계산, 계산대",
    "level": "N3",
    "category": "food",
    "example": {
      "japanese": "お会計をお願いします。",
      "reading": "おかいけいを おねがいします。",
      "korean": "계산 부탁드립니다."
    }
  },
  {
    "id": "w_0034",
    "kanji": "おすすめ",
    "kana": "おすすめ",
    "romaji": "osusume",
    "meaning": "추천",
    "level": "N5",
    "category": "food",
    "example": {
      "japanese": "おすすめの料理は何ですか？",
      "reading": "おすすめの りょうりは なんですか？",
      "korean": "추천 요리는 무엇인가요?"
    }
  },
  {
    "id": "w_0035",
    "kanji": "水",
    "kana": "みず",
    "romaji": "mizu",
    "meaning": "물",
    "level": "N5",
    "category": "food",
    "example": {
      "japanese": "お水をもう一杯ください。",
      "reading": "おみずを もういっぱいください。",
      "korean": "물 한 잔 더 주세요."
    }
  },
  {
    "id": "w_0036",
    "kanji": "お茶",
    "kana": "おちゃ",
    "romaji": "ocha",
    "meaning": "차 (녹차)",
    "level": "N5",
    "category": "food",
    "example": {
      "japanese": "温かいお茶を飲みます。",
      "reading": "あたたかい おちゃを のみます。",
      "korean": "따뜻한 차를 마십니다."
    }
  },
  {
    "id": "w_0037",
    "kanji": "ご飯",
    "kana": "ごはん",
    "romaji": "gohan",
    "meaning": "밥, 식사",
    "level": "N5",
    "category": "food",
    "example": {
      "japanese": "ご飯の大盛りは無料です。",
      "reading": "ごはんの おおもりは むりょうです。",
      "korean": "밥 곱빼기는 무료입니다."
    }
  },
  {
    "id": "w_0038",
    "kanji": "ラーメン",
    "kana": "らーめん",
    "romaji": "raamen",
    "meaning": "라멘",
    "level": "N5",
    "category": "food",
    "example": {
      "japanese": "とんこつラーメンを一つください。",
      "reading": "とんこつ らーめんを ひとつください。",
      "korean": "돈코츠 라멘 하나 주세요."
    }
  },
  {
    "id": "w_0039",
    "kanji": "寿司",
    "kana": "すし",
    "romaji": "sushi",
    "meaning": "초밥 (스시)",
    "level": "N5",
    "category": "food",
    "example": {
      "japanese": "回転寿司に行きました。",
      "reading": "かいてんずしに いきました。",
      "korean": "회전초밥집에 갔습니다."
    }
  },
  {
    "id": "w_0040",
    "kanji": "生ビール",
    "kana": "なまびーる",
    "romaji": "namabiiru",
    "meaning": "생맥주",
    "level": "N5",
    "category": "food",
    "example": {
      "japanese": "とりあえず生ビールで！",
      "reading": "とりあえず なまびーるで！",
      "korean": "우선 생맥주로 주세요!"
    }
  },
  {
    "id": "w_0041",
    "kanji": "居酒屋",
    "kana": "いざかや",
    "romaji": "izakaya",
    "meaning": "선술집 (이자카야)",
    "level": "N4",
    "category": "food",
    "example": {
      "japanese": "居酒屋で飲み会をしました。",
      "reading": "いざかやで のみかいを しました。",
      "korean": "이자카야에서 술자리를 가졌습니다."
    }
  },
  {
    "id": "w_0042",
    "kanji": "美味しい",
    "kana": "おいしい",
    "romaji": "oishii",
    "meaning": "맛있다",
    "level": "N5",
    "category": "food",
    "example": {
      "japanese": "ほっぺたが落ちるほど美味しい！",
      "reading": "ほっぺたが おちるほど おいしい！",
      "korean": "볼이 떨어질 정도로(너무) 맛있다!"
    }
  },
  {
    "id": "w_0043",
    "kanji": "甘い",
    "kana": "あまい",
    "romaji": "amai",
    "meaning": "달다",
    "level": "N5",
    "category": "food",
    "example": {
      "japanese": "このデザートは甘いです。",
      "reading": "この でざーとは あまいです。",
      "korean": "이 디저트는 답니다."
    }
  },
  {
    "id": "w_0044",
    "kanji": "辛い",
    "kana": "からい",
    "romaji": "karai",
    "meaning": "맵다, 짜다",
    "level": "N5",
    "category": "food",
    "example": {
      "japanese": "あまり辛くしないでください。",
      "reading": "あまり からくしないでください。",
      "korean": "너무 맵게 하지 말아주세요."
    }
  },
  {
    "id": "w_0045",
    "kanji": "しょっぱい",
    "kana": "しょっぱい",
    "romaji": "shoppai",
    "meaning": "짜다",
    "level": "N4",
    "category": "food",
    "example": {
      "japanese": "スープが少ししょっぱいです。",
      "reading": "すーぷが すこし しょっぱいです。",
      "korean": "수프가 조금 짭니다."
    }
  },
  {
    "id": "w_0046",
    "kanji": "苦い",
    "kana": "にがい",
    "romaji": "nigai",
    "meaning": "쓰다",
    "level": "N4",
    "category": "food",
    "example": {
      "japanese": "苦いコーヒーが好きです。",
      "reading": "にがい こーひーが すきです。",
      "korean": "쓴 커피를 좋아합니다."
    }
  },
  {
    "id": "w_0047",
    "kanji": "お腹",
    "kana": "おなか",
    "romaji": "onaka",
    "meaning": "배",
    "level": "N5",
    "category": "food",
    "example": {
      "japanese": "お腹がいっぱいです。",
      "reading": "おなかが いっぱいです。",
      "korean": "배가 부릅니다."
    }
  },
  {
    "id": "w_0048",
    "kanji": "乾杯",
    "kana": "かんぱい",
    "romaji": "kanpai",
    "meaning": "건배",
    "level": "N2",
    "category": "food",
    "example": {
      "japanese": "みんなで乾杯しましょう！",
      "reading": "みんなで かんぱいしましょう！",
      "korean": "모두 건배합시다!"
    }
  },
  {
    "id": "w_0049",
    "kanji": "持ち帰り",
    "kana": "もちかえり",
    "romaji": "mochikaeri",
    "meaning": "포장 (테이크아웃)",
    "level": "N4",
    "category": "food",
    "example": {
      "japanese": "お持ち帰りでお願いします。",
      "reading": "おもちかえりで おねがいします。",
      "korean": "포장으로 부탁드립니다."
    }
  },
  {
    "id": "w_0050",
    "kanji": "おかわり",
    "kana": "おかわり",
    "romaji": "okawari",
    "meaning": "한 그릇 더 (리필)",
    "level": "N2",
    "category": "food",
    "example": {
      "japanese": "ご飯のおかわりをください。",
      "reading": "ごはんの おかわりを ください。",
      "korean": "밥 리필해 주세요."
    }
  },
  {
    "id": "w_0051",
    "kanji": "箸",
    "kana": "はし",
    "romaji": "hashi",
    "meaning": "젓가락",
    "level": "N5",
    "category": "food",
    "example": {
      "japanese": "お箸を落としてしまいました。",
      "reading": "おはしを おとしてしまいました。",
      "korean": "젓가락을 떨어뜨렸습니다."
    }
  },
  {
    "id": "w_0052",
    "kanji": "スプーン",
    "kana": "すぷーん",
    "romaji": "supuun",
    "meaning": "숟가락 (스푼)",
    "level": "N5",
    "category": "food",
    "example": {
      "japanese": "スプーンをください。",
      "reading": "すぷーんを ください。",
      "korean": "숟가락을 주세요."
    }
  },
  {
    "id": "w_0053",
    "kanji": "フォーク",
    "kana": "ふぉーく",
    "romaji": "fooku",
    "meaning": "포크",
    "level": "N5",
    "category": "food",
    "example": {
      "japanese": "フォークをお願いします。",
      "reading": "ふぉーくを おねがいします。",
      "korean": "포크 부탁드립니다."
    }
  },
  {
    "id": "w_0054",
    "kanji": "席",
    "kana": "せき",
    "romaji": "seki",
    "meaning": "자리, 좌석",
    "level": "N4",
    "category": "food",
    "example": {
      "japanese": "窓側の席は空いていますか？",
      "reading": "まどがわの せきは あいていますか？",
      "korean": "창가 자리는 비어 있나요?"
    }
  },
  {
    "id": "w_0055",
    "kanji": "予約席",
    "kana": "よやくせき",
    "romaji": "yoyakuseki",
    "meaning": "예약석",
    "level": "N4",
    "category": "food",
    "example": {
      "japanese": "ここは予約席です。",
      "reading": "ここは よやくせきです。",
      "korean": "여기는 예약석입니다."
    }
  },
  {
    "id": "w_0056",
    "kanji": "いくら",
    "kana": "いくら",
    "romaji": "ikura",
    "meaning": "얼마 (가격)",
    "level": "N5",
    "category": "shopping",
    "example": {
      "japanese": "全部でいくらですか？",
      "reading": "ぜんぶで いくらですか？",
      "korean": "전부 얼마입니까?"
    }
  },
  {
    "id": "w_0057",
    "kanji": "免税",
    "kana": "めんぜい",
    "romaji": "menzei",
    "meaning": "면세 (Tax Free)",
    "level": "N2",
    "category": "shopping",
    "example": {
      "japanese": "免税手続きをお願いします。",
      "reading": "めんぜいてつづきを おねがいします。",
      "korean": "면세 수속 부탁드립니다."
    }
  },
  {
    "id": "w_0058",
    "kanji": "袋",
    "kana": "ふくろ",
    "romaji": "fukuro",
    "meaning": "봉투 (비닐봉지)",
    "level": "N3",
    "category": "shopping",
    "example": {
      "japanese": "レジ袋は結構です。",
      "reading": "れじぶくろは けっこうです。",
      "korean": "비닐봉지는 괜찮습니다(필요 없습니다)."
    }
  },
  {
    "id": "w_0059",
    "kanji": "レシート",
    "kana": "れしーと",
    "romaji": "reshiito",
    "meaning": "영수증",
    "level": "N5",
    "category": "shopping",
    "example": {
      "japanese": "レシートをいただけますか？",
      "reading": "れしーとを いただけますか？",
      "korean": "영수증을 받을 수 있나요?"
    }
  },
  {
    "id": "w_0060",
    "kanji": "クレジットカード",
    "kana": "くれじっとかーど",
    "romaji": "kurejittokaado",
    "meaning": "신용카드",
    "level": "N5",
    "category": "shopping",
    "example": {
      "japanese": "カードで払えますか？",
      "reading": "かーどで はらえますか？",
      "korean": "카드로 결제 가능한가요?"
    }
  },
  {
    "id": "w_0061",
    "kanji": "現金",
    "kana": "げんきん",
    "romaji": "genkin",
    "meaning": "현금",
    "level": "N3",
    "category": "shopping",
    "example": {
      "japanese": "現金のみとなります。",
      "reading": "げんきんのみと なります。",
      "korean": "현금만 가능합니다."
    }
  },
  {
    "id": "w_0062",
    "kanji": "割引",
    "kana": "わりびき",
    "romaji": "waribiki",
    "meaning": "할인",
    "level": "N2",
    "category": "shopping",
    "example": {
      "japanese": "半額割引シールが貼ってあります。",
      "reading": "はんがくわりびき しーるが はってあります。",
      "korean": "반값 할인 스티커가 붙어 있습니다."
    }
  },
  {
    "id": "w_0063",
    "kanji": "試着",
    "kana": "しちゃく",
    "romaji": "shichaku",
    "meaning": "입어보기 (착용)",
    "level": "N3",
    "category": "shopping",
    "example": {
      "japanese": "試着してもいいですか？",
      "reading": "しちゃくしても いいですか？",
      "korean": "입어봐도 되나요?"
    }
  },
  {
    "id": "w_0064",
    "kanji": "サイズ",
    "kana": "さいず",
    "romaji": "saizu",
    "meaning": "사이즈, 치수",
    "level": "N1",
    "category": "shopping",
    "example": {
      "japanese": "大きいサイズはありますか？",
      "reading": "おおきい さいずは ありますか？",
      "korean": "더 큰 사이즈가 있나요?"
    }
  },
  {
    "id": "w_0065",
    "kanji": "色",
    "kana": "いろ",
    "romaji": "iro",
    "meaning": "색깔",
    "level": "N5",
    "category": "shopping",
    "example": {
      "japanese": "違う色はありますか？",
      "reading": "ちがう いろは ありますか？",
      "korean": "다른 색상도 있나요?"
    }
  },
  {
    "id": "w_0066",
    "kanji": "コンビニ",
    "kana": "こんびに",
    "romaji": "konbini",
    "meaning": "편의점",
    "level": "N5",
    "category": "shopping",
    "example": {
      "japanese": "日本のコンビニはお弁当が美味しい。",
      "reading": "にほんの こんびには おべんとうが おいしい。",
      "korean": "일본 편의점은 도시락이 맛있다."
    }
  },
  {
    "id": "w_0067",
    "kanji": "温める",
    "kana": "あたためる",
    "romaji": "atatameru",
    "meaning": "데우다 (전자레인지)",
    "level": "N2",
    "category": "shopping",
    "example": {
      "japanese": "お弁当を温めますか？",
      "reading": "おべんとうを あたためますか？",
      "korean": "도시락 데워드릴까요?"
    }
  },
  {
    "id": "w_0068",
    "kanji": "売り切れ",
    "kana": "うりきれ",
    "romaji": "urikire",
    "meaning": "품절, 매진",
    "level": "N2",
    "category": "shopping",
    "example": {
      "japanese": "人気商品は売り切れでした。",
      "reading": "にんきしょうひんは うりきれでした。",
      "korean": "인기 상품은 품절이었습니다."
    }
  },
  {
    "id": "w_0069",
    "kanji": "高い",
    "kana": "たかい",
    "romaji": "takai",
    "meaning": "비싸다, 높다",
    "level": "N5",
    "category": "shopping",
    "example": {
      "japanese": "ちょっと高すぎます。",
      "reading": "ちょっと たかすぎます。",
      "korean": "조금 너무 비쌉니다."
    }
  },
  {
    "id": "w_0070",
    "kanji": "安い",
    "kana": "やすい",
    "romaji": "yasui",
    "meaning": "싸다, 저렴하다",
    "level": "N5",
    "category": "shopping",
    "example": {
      "japanese": "安くて質が良いです。",
      "reading": "やすくて しつが いいです。",
      "korean": "저렴하고 품질이 좋습니다."
    }
  },
  {
    "id": "w_0071",
    "kanji": "起きる",
    "kana": "おきる",
    "romaji": "okiru",
    "meaning": "일어나다",
    "level": "N5",
    "category": "daily",
    "example": {
      "japanese": "毎朝7時に起きます。",
      "reading": "まいあさ しちじに おきます。",
      "korean": "매일 아침 7시에 일어납니다."
    }
  },
  {
    "id": "w_0072",
    "kanji": "寝る",
    "kana": "ねる",
    "romaji": "neru",
    "meaning": "자다",
    "level": "N5",
    "category": "daily",
    "example": {
      "japanese": "昨日は夜遅く寝ました。",
      "reading": "きのうは よるおそく ねました。",
      "korean": "어제는 밤늦게 잤습니다."
    }
  },
  {
    "id": "w_0073",
    "kanji": "仕事",
    "kana": "しごと",
    "romaji": "shigoto",
    "meaning": "일, 직업",
    "level": "N5",
    "category": "daily",
    "example": {
      "japanese": "仕事が終わりました。",
      "reading": "しごとが おわりました。",
      "korean": "일이 끝났습니다."
    }
  },
  {
    "id": "w_0074",
    "kanji": "休み",
    "kana": "やすみ",
    "romaji": "yasumi",
    "meaning": "휴일, 쉼",
    "level": "N5",
    "category": "daily",
    "example": {
      "japanese": "明日は仕事が休みです。",
      "reading": "あしたは しごとが やすみです。",
      "korean": "내일은 일이 쉬는 날(휴일)입니다."
    }
  },
  {
    "id": "w_0075",
    "kanji": "今日",
    "kana": "きょう",
    "romaji": "kyou",
    "meaning": "오늘",
    "level": "N5",
    "category": "daily",
    "example": {
      "japanese": "今日はとても天気がいい。",
      "reading": "きょうは とても てんきが いい。",
      "korean": "오늘은 날씨가 매우 좋다."
    }
  },
  {
    "id": "w_0076",
    "kanji": "明日",
    "kana": "あした",
    "romaji": "ashita",
    "meaning": "내일",
    "level": "N5",
    "category": "daily",
    "example": {
      "japanese": "明日の予定を立てます。",
      "reading": "あしたの よていを たてます。",
      "korean": "내일 일정을 세웁니다."
    }
  },
  {
    "id": "w_0077",
    "kanji": "昨日",
    "kana": "きのう",
    "romaji": "kinou",
    "meaning": "어제",
    "level": "N5",
    "category": "daily",
    "example": {
      "japanese": "昨日は一日中雨でした。",
      "reading": "きのうは いちにちじゅう あめでした。",
      "korean": "어제는 하루 종일 비가 왔습니다."
    }
  },
  {
    "id": "w_0078",
    "kanji": "今",
    "kana": "いま",
    "romaji": "ima",
    "meaning": "지금",
    "level": "N5",
    "category": "daily",
    "example": {
      "japanese": "今何時ですか？",
      "reading": "いま なんじですか？",
      "korean": "지금 몇 시입니까?"
    }
  },
  {
    "id": "w_0079",
    "kanji": "天気",
    "kana": "てんき",
    "romaji": "tenki",
    "meaning": "날씨",
    "level": "N5",
    "category": "daily",
    "example": {
      "japanese": "天気が悪くなってきました。",
      "reading": "てんきが わるくなってきました。",
      "korean": "날씨가 안 좋아지기 시작했습니다."
    }
  },
  {
    "id": "w_0080",
    "kanji": "雨",
    "kana": "あめ",
    "romaji": "ame",
    "meaning": "비",
    "level": "N5",
    "category": "daily",
    "example": {
      "japanese": "雨が降っています。",
      "reading": "あめが ふっています。",
      "korean": "비가 내리고 있습니다."
    }
  },
  {
    "id": "w_0081",
    "kanji": "雪",
    "kana": "ゆき",
    "romaji": "yuki",
    "meaning": "눈 (설)",
    "level": "N5",
    "category": "daily",
    "example": {
      "japanese": "北海道は雪が降りました。",
      "reading": "ほっかいどうは ゆきが ふりました。",
      "korean": "홋카이도는 눈이 내렸습니다."
    }
  },
  {
    "id": "w_0082",
    "kanji": "暑い",
    "kana": "あつい",
    "romaji": "atsui",
    "meaning": "덥다",
    "level": "N5",
    "category": "daily",
    "example": {
      "japanese": "日本の夏は蒸し暑いです。",
      "reading": "にほんの なつは むしあついです。",
      "korean": "일본의 여름은 후덥지근합니다."
    }
  },
  {
    "id": "w_0083",
    "kanji": "寒い",
    "kana": "さむい",
    "romaji": "samui",
    "meaning": "춥다",
    "level": "N5",
    "category": "daily",
    "example": {
      "japanese": "今日は風が強くて寒い。",
      "reading": "きょうは かぜが つよくて さむい。",
      "korean": "오늘은 바람이 강해서 춥다."
    }
  },
  {
    "id": "w_0084",
    "kanji": "暖かい",
    "kana": "あたたかい",
    "romaji": "atatakai",
    "meaning": "따뜻하다",
    "level": "N5",
    "category": "daily",
    "example": {
      "japanese": "春になって暖かくなりました。",
      "reading": "はるになって あたたかくなりました。",
      "korean": "봄이 되어 따뜻해졌습니다."
    }
  },
  {
    "id": "w_0085",
    "kanji": "涼しい",
    "kana": "すずしい",
    "romaji": "suzushii",
    "meaning": "시원하다, 선선하다",
    "level": "N5",
    "category": "daily",
    "example": {
      "japanese": "秋は涼しくて過ごしやすい。",
      "reading": "あきは すずしくて すごしやすい。",
      "korean": "가을은 선선해서 지내기 좋습니다."
    }
  },
  {
    "id": "w_0086",
    "kanji": "家",
    "kana": "いえ",
    "romaji": "ie",
    "meaning": "집",
    "level": "N5",
    "category": "daily",
    "example": {
      "japanese": "早く家に帰りたいです。",
      "reading": "はやく いえに かえりたいです。",
      "korean": "빨리 집에 가고 싶습니다."
    }
  },
  {
    "id": "w_0087",
    "kanji": "友達",
    "kana": "ともだち",
    "romaji": "tomodachi",
    "meaning": "친구",
    "level": "N5",
    "category": "daily",
    "example": {
      "japanese": "日本人の友達ができました。",
      "reading": "にほんじんの ともだちが できました。",
      "korean": "일본인 친구가 생겼습니다."
    }
  },
  {
    "id": "w_0088",
    "kanji": "家族",
    "kana": "かぞく",
    "romaji": "kazoku",
    "meaning": "가족",
    "level": "N5",
    "category": "daily",
    "example": {
      "japanese": "家族と一緒に旅行します。",
      "reading": "かぞくと いっしょに りょこうします。",
      "korean": "가족과 함께 여행합니다."
    }
  },
  {
    "id": "w_0089",
    "kanji": "趣味",
    "kana": "しゅみ",
    "romaji": "shumi",
    "meaning": "취미",
    "level": "N4",
    "category": "daily",
    "example": {
      "japanese": "趣味はアニメを見ることです。",
      "reading": "しゅみは あにめを みることです。",
      "korean": "취미는 애니메이션을 보는 것입니다."
    }
  },
  {
    "id": "w_0090",
    "kanji": "音楽",
    "kana": "おんがく",
    "romaji": "ongaku",
    "meaning": "음악",
    "level": "N5",
    "category": "daily",
    "example": {
      "japanese": "J-POPの音楽をよく聴きます。",
      "reading": "じぇいぽっぷの おんがくを よくききます。",
      "korean": "J-POP 음악을 자주 듣습니다."
    }
  },
  {
    "id": "w_0091",
    "kanji": "嬉しい",
    "kana": "うれしい",
    "romaji": "ureshii",
    "meaning": "기쁘다",
    "level": "N4",
    "category": "emotion",
    "example": {
      "japanese": "合格してとても嬉しいです！",
      "reading": "ごうかくして とても うれしいです！",
      "korean": "합격해서 정말 기쁩니다!"
    }
  },
  {
    "id": "w_0092",
    "kanji": "楽しい",
    "kana": "たのしい",
    "romaji": "tanoshii",
    "meaning": "즐겁다",
    "level": "N5",
    "category": "emotion",
    "example": {
      "japanese": "日本旅行はとても楽しかった。",
      "reading": "にほんりょこうは とても たのしかった。",
      "korean": "일본 여행은 매우 즐거웠다."
    }
  },
  {
    "id": "w_0093",
    "kanji": "悲しい",
    "kana": "かなしい",
    "romaji": "kanashii",
    "meaning": "슬프다",
    "level": "N4",
    "category": "emotion",
    "example": {
      "japanese": "映画を見て悲しくなりました。",
      "reading": "えいがを みて かなしくなりました。",
      "korean": "영화를 보고 슬퍼졌습니다."
    }
  },
  {
    "id": "w_0094",
    "kanji": "寂しい",
    "kana": "さびしい",
    "romaji": "sabishii",
    "meaning": "외롭다, 쓸쓸하다",
    "level": "N4",
    "category": "emotion",
    "example": {
      "japanese": "一人でいると寂しいです。",
      "reading": "ひとりで いると さびしいです。",
      "korean": "혼자 있으면 외롭습니다."
    }
  },
  {
    "id": "w_0095",
    "kanji": "怒る",
    "kana": "おこる",
    "romaji": "okoru",
    "meaning": "화내다",
    "level": "N4",
    "category": "emotion",
    "example": {
      "japanese": "そんなに怒らないでください。",
      "reading": "そんなに おこらないでください。",
      "korean": "그렇게 화내지 마세요."
    }
  },
  {
    "id": "w_0096",
    "kanji": "疲れる",
    "kana": "つかれる",
    "romaji": "tsukareru",
    "meaning": "피곤하다, 지치다",
    "level": "N5",
    "category": "emotion",
    "example": {
      "japanese": "一日中歩いて疲れました。",
      "reading": "いちにちじゅう あるいて つかれました。",
      "korean": "하루 종일 걸어서 피곤합니다."
    }
  },
  {
    "id": "w_0097",
    "kanji": "驚く",
    "kana": "おどろく",
    "romaji": "odoroku",
    "meaning": "놀라다",
    "level": "N4",
    "category": "emotion",
    "example": {
      "japanese": "突然の知らせに驚きました。",
      "reading": "とつぜんの しらせに おどろきました。",
      "korean": "갑작스러운 소식에 놀랐습니다."
    }
  },
  {
    "id": "w_0098",
    "kanji": "心配",
    "kana": "しんぱい",
    "romaji": "shinpai",
    "meaning": "걱정",
    "level": "N4",
    "category": "emotion",
    "example": {
      "japanese": "心配しないで大丈夫です。",
      "reading": "しんぱいしないで だいじょうぶです。",
      "korean": "걱정하지 않아도 괜찮습니다."
    }
  },
  {
    "id": "w_0099",
    "kanji": "安心",
    "kana": "あんしん",
    "romaji": "anshin",
    "meaning": "안심",
    "level": "N4",
    "category": "emotion",
    "example": {
      "japanese": "無事に到着して安心しました。",
      "reading": "ぶじに とうちゃくして あんしんしました。",
      "korean": "무사히 도착해서 안심했습니다."
    }
  },
  {
    "id": "w_0100",
    "kanji": "緊張",
    "kana": "きんちょう",
    "romaji": "kinchou",
    "meaning": "긴장",
    "level": "N3",
    "category": "emotion",
    "example": {
      "japanese": "試験の前はとても緊張します。",
      "reading": "しけんの まえは とても きんちょうします。",
      "korean": "시험 전에는 매우 긴장됩니다."
    }
  },
  {
    "id": "w_0101",
    "kanji": "連絡",
    "kana": "れんらく",
    "romaji": "renraku",
    "meaning": "연락",
    "level": "N4",
    "category": "business",
    "example": {
      "japanese": "後ほど改めて連絡します。",
      "reading": "のちほど あらためて れんらくします。",
      "korean": "나중에 다시 연락드리겠습니다."
    }
  },
  {
    "id": "w_0102",
    "kanji": "確認",
    "kana": "かくにん",
    "romaji": "kakunin",
    "meaning": "확인",
    "level": "N3",
    "category": "business",
    "example": {
      "japanese": "メールの内容をご確認ください。",
      "reading": "めーるの ないようを ごかくにんください。",
      "korean": "이메일 내용을 확인해 주세요."
    }
  },
  {
    "id": "w_0103",
    "kanji": "相談",
    "kana": "そうだん",
    "romaji": "soudan",
    "meaning": "상담, 상의",
    "level": "N4",
    "category": "business",
    "example": {
      "japanese": "上司に相談してみます。",
      "reading": "じょうしに そうだんしてみます。",
      "korean": "상사에게 상의해 보겠습니다."
    }
  },
  {
    "id": "w_0104",
    "kanji": "会議",
    "kana": "かいぎ",
    "romaji": "kaigi",
    "meaning": "회의",
    "level": "N4",
    "category": "business",
    "example": {
      "japanese": "午後2時から会議があります。",
      "reading": "ごごにじから かいぎが あります。",
      "korean": "오후 2시부터 회의가 있습니다."
    }
  },
  {
    "id": "w_0105",
    "kanji": "書類",
    "kana": "しょるい",
    "romaji": "shorui",
    "meaning": "서류",
    "level": "N3",
    "category": "business",
    "example": {
      "japanese": "提出書類を準備してください。",
      "reading": "ていしゅつしょるいを じゅんびしてください。",
      "korean": "제출 서류를 준비해 주세요."
    }
  },
  {
    "id": "w_0106",
    "kanji": "締切",
    "kana": "しめきり",
    "romaji": "shimekiri",
    "meaning": "마감, 마감일",
    "level": "N2",
    "category": "business",
    "example": {
      "japanese": "レポートの締切は明日です。",
      "reading": "れぽーとの しめきりは あしたです。",
      "korean": "보고서 마감은 내일입니다."
    }
  },
  {
    "id": "w_0107",
    "kanji": "協力",
    "kana": "きょうりょく",
    "romaji": "kyouryoku",
    "meaning": "협력",
    "level": "N3",
    "category": "business",
    "example": {
      "japanese": "ご協力ありがとうございます。",
      "reading": "ごきょうりょく ありがとうございます。",
      "korean": "협력해 주셔서 감사합니다."
    }
  },
  {
    "id": "w_0108",
    "kanji": "担当",
    "kana": "たんとう",
    "romaji": "tantou",
    "meaning": "담당",
    "level": "N3",
    "category": "business",
    "example": {
      "japanese": "営業担当の山田と申します。",
      "reading": "えいぎょうたんとうの やまだともうします。",
      "korean": "영업 담당 야마다라고 합니다."
    }
  },
  {
    "id": "w_0109",
    "kanji": "挨拶",
    "kana": "あいさつ",
    "romaji": "aisatsu",
    "meaning": "인사",
    "level": "N3",
    "category": "business",
    "example": {
      "japanese": "笑顔で挨拶をしましょう。",
      "reading": "えがおで あいさつを しましょう。",
      "korean": "웃는 얼굴로 인사합시다."
    }
  },
  {
    "id": "w_0110",
    "kanji": "失礼",
    "kana": "しつれい",
    "romaji": "shitsurei",
    "meaning": "실례",
    "level": "N5",
    "category": "business",
    "example": {
      "japanese": "お先に失礼します。",
      "reading": "おさきに しつれいします。",
      "korean": "먼저 실례하겠습니다 (퇴근 인사)."
    }
  },
  {
    "id": "w_0111",
    "kanji": "一日",
    "kana": "ついたち",
    "romaji": "tsuitachi",
    "meaning": "1일 (초하루)",
    "level": "N5",
    "category": "daily",
    "example": {
      "japanese": "今月の一日に引っ越しました。",
      "reading": "こんげつの ついたちに ひっこしました。",
      "korean": "이번 달 1일에 이사했습니다."
    }
  },
  {
    "id": "w_0112",
    "kanji": "二日",
    "kana": "ふつか",
    "romaji": "futsuka",
    "meaning": "2일",
    "level": "N5",
    "category": "daily",
    "example": {
      "japanese": "二日間旅行に行きます。",
      "reading": "ふつかかん りょこうに いきます。",
      "korean": "이틀간 여행을 갑니다."
    }
  },
  {
    "id": "w_0113",
    "kanji": "三日",
    "kana": "みっか",
    "romaji": "mikka",
    "meaning": "3일",
    "level": "N5",
    "category": "daily",
    "example": {
      "japanese": "三日後に会いましょう。",
      "reading": "みっかごに あいましょう。",
      "korean": "3일 후에 만나요."
    }
  },
  {
    "id": "w_0114",
    "kanji": "四日",
    "kana": "よっか",
    "romaji": "yokka",
    "meaning": "4일",
    "level": "N5",
    "category": "daily",
    "example": {
      "japanese": "五月四日は祝日です。",
      "reading": "ごがつ よっかは しゅくじつです。",
      "korean": "5월 4일은 공휴일입니다."
    }
  },
  {
    "id": "w_0115",
    "kanji": "五日",
    "kana": "いつか",
    "romaji": "itsuka",
    "meaning": "5일",
    "level": "N5",
    "category": "daily",
    "example": {
      "japanese": "五日間滞在します。",
      "reading": "いつかかん たいざいします。",
      "korean": "5일 동안 체류합니다."
    }
  },
  {
    "id": "w_0116",
    "kanji": "六日",
    "kana": "むいか",
    "romaji": "muika",
    "meaning": "6일",
    "level": "N5",
    "category": "daily",
    "example": {
      "japanese": "六日目の朝です。",
      "reading": "むいかめの あさです。",
      "korean": "6일째 아침입니다."
    }
  },
  {
    "id": "w_0117",
    "kanji": "七日",
    "kana": "なのか",
    "romaji": "nanoka",
    "meaning": "7일",
    "level": "N5",
    "category": "daily",
    "example": {
      "japanese": "七日に予約しました。",
      "reading": "なのかに よやくしました。",
      "korean": "7일에 예약했습니다."
    }
  },
  {
    "id": "w_0118",
    "kanji": "八日",
    "kana": "ようか",
    "romaji": "youka",
    "meaning": "8일",
    "level": "N5",
    "category": "daily",
    "example": {
      "japanese": "八日は都合が良いです。",
      "reading": "ようかは つごうが いいです。",
      "korean": "8일은 시간이 괜찮습니다."
    }
  },
  {
    "id": "w_0119",
    "kanji": "九日",
    "kana": "ここのか",
    "romaji": "kokonoka",
    "meaning": "9일",
    "level": "N5",
    "category": "daily",
    "example": {
      "japanese": "九日に出発します。",
      "reading": "ここのかに しゅっぱつします。",
      "korean": "9일에 출발합니다."
    }
  },
  {
    "id": "w_0120",
    "kanji": "十日",
    "kana": "とおか",
    "romaji": "tooka",
    "meaning": "10일",
    "level": "N5",
    "category": "daily",
    "example": {
      "japanese": "十日間勉強しました。",
      "reading": "とおかかん べんきょうしました。",
      "korean": "10일 동안 공부했습니다."
    }
  },
  {
    "id": "w_0121",
    "kanji": "二十日",
    "kana": "はつか",
    "romaji": "hatsuka",
    "meaning": "20일",
    "level": "N5",
    "category": "daily",
    "example": {
      "japanese": "毎月二十日は給料日です。",
      "reading": "まいつき はつかは きゅうりょうびです。",
      "korean": "매월 20일은 월급날입니다."
    }
  },
  {
    "id": "w_0122",
    "kanji": "月曜日",
    "kana": "げつようび",
    "romaji": "getsuyoubi",
    "meaning": "월요일",
    "level": "N5",
    "category": "basic",
    "example": {
      "japanese": "月曜日から始まります。",
      "reading": "げつようびから はじまります。",
      "korean": "월요일부터 시작합니다."
    }
  },
  {
    "id": "w_0123",
    "kanji": "火曜日",
    "kana": "かようび",
    "romaji": "kayoubi",
    "meaning": "화요일",
    "level": "N5",
    "category": "basic",
    "example": {
      "japanese": "火曜日は定休日です。",
      "reading": "かようびは ていきゅうびです。",
      "korean": "화요일은 정기 휴일입니다."
    }
  },
  {
    "id": "w_0124",
    "kanji": "水曜日",
    "kana": "すいようび",
    "romaji": "suiyoubi",
    "meaning": "수요일",
    "level": "N5",
    "category": "basic",
    "example": {
      "japanese": "水曜日に会いましょう。",
      "reading": "すいようびに あいましょう。",
      "korean": "수요일에 만납시다."
    }
  },
  {
    "id": "w_0125",
    "kanji": "木曜日",
    "kana": "もくようび",
    "romaji": "mokuyoubi",
    "meaning": "목요일",
    "level": "N5",
    "category": "basic",
    "example": {
      "japanese": "木曜日にゴミを出します。",
      "reading": "もくようびに ごみを だします。",
      "korean": "목요일에 쓰레기를 배출합니다."
    }
  },
  {
    "id": "w_0126",
    "kanji": "金曜日",
    "kana": "きんようび",
    "romaji": "kin-youbi",
    "meaning": "금요일",
    "level": "N5",
    "category": "basic",
    "example": {
      "japanese": "華の金曜日ですね。",
      "reading": "はなの きんようびですね。",
      "korean": "불타는 금요일(불금)이네요."
    }
  },
  {
    "id": "w_0127",
    "kanji": "土曜日",
    "kana": "どようび",
    "romaji": "doyoubi",
    "meaning": "토요일",
    "level": "N5",
    "category": "basic",
    "example": {
      "japanese": "土曜日はゆっくり寝ます。",
      "reading": "どようびは ゆっくり ねます。",
      "korean": "토요일은 푹 잡니다."
    }
  },
  {
    "id": "w_0128",
    "kanji": "日曜日",
    "kana": "にちようび",
    "romaji": "nichiyoubi",
    "meaning": "일요일",
    "level": "N5",
    "category": "basic",
    "example": {
      "japanese": "日曜日に買い物に行きます。",
      "reading": "にちようびに かいものに いきます。",
      "korean": "일요일에 쇼핑하러 갑니다."
    }
  },
  {
    "id": "w_0129",
    "kanji": "頭",
    "kana": "あたま",
    "romaji": "atama",
    "meaning": "머리",
    "level": "N5",
    "category": "basic",
    "example": {
      "japanese": "頭が痛いです。",
      "reading": "あたまが いたいです。",
      "korean": "머리가 아픕니다(두통이 있습니다)."
    }
  },
  {
    "id": "w_0130",
    "kanji": "目",
    "kana": "め",
    "romaji": "me",
    "meaning": "눈",
    "level": "N5",
    "category": "basic",
    "example": {
      "japanese": "目が疲れた。",
      "reading": "めが つかれた。",
      "korean": "눈이 피로하다."
    }
  },
  {
    "id": "w_0131",
    "kanji": "耳",
    "kana": "みみ",
    "romaji": "mimi",
    "meaning": "귀",
    "level": "N5",
    "category": "basic",
    "example": {
      "japanese": "耳を澄まして聞きます。",
      "reading": "みみを すまして ききます。",
      "korean": "귀를 기울여 듣습니다."
    }
  },
  {
    "id": "w_0132",
    "kanji": "口",
    "kana": "くち",
    "romaji": "kuchi",
    "meaning": "입",
    "level": "N5",
    "category": "basic",
    "example": {
      "japanese": "口を開けてください。",
      "reading": "くちを あけてください。",
      "korean": "입을 벌려주세요."
    }
  },
  {
    "id": "w_0133",
    "kanji": "手",
    "kana": "て",
    "romaji": "te",
    "meaning": "손",
    "level": "N5",
    "category": "basic",
    "example": {
      "japanese": "食事の前に手を洗います。",
      "reading": "しょくじの まえに てを あらいます。",
      "korean": "식사 전에 손을 씻습니다."
    }
  },
  {
    "id": "w_0134",
    "kanji": "足",
    "kana": "あし",
    "romaji": "ashi",
    "meaning": "발, 다리",
    "level": "N5",
    "category": "basic",
    "example": {
      "japanese": "足が痛くて歩けません。",
      "reading": "あしが いたくて あるけません。",
      "korean": "다리가 아파서 걸을 수 없습니다."
    }
  },
  {
    "id": "w_0135",
    "kanji": "お腹",
    "kana": "おなか",
    "romaji": "onaka",
    "meaning": "배",
    "level": "N5",
    "category": "basic",
    "example": {
      "japanese": "お腹が空きました。",
      "reading": "おなかが すきました。",
      "korean": "배가 고픕니다."
    }
  },
  {
    "id": "w_0136",
    "kanji": "喉",
    "kana": "のど",
    "romaji": "nodo",
    "meaning": "목 (목구멍)",
    "level": "N4",
    "category": "basic",
    "example": {
      "japanese": "喉が渇きました。",
      "reading": "のどが かわきました。",
      "korean": "목이 마릅니다."
    }
  },
  {
    "id": "w_0137",
    "kanji": "薬",
    "kana": "くすり",
    "romaji": "kusuri",
    "meaning": "약",
    "level": "N5",
    "category": "travel",
    "example": {
      "japanese": "風邪薬を買いに行きます。",
      "reading": "かぜぐすりを かいに いきます。",
      "korean": "감기약을 사러 갑니다."
    }
  },
  {
    "id": "w_0138",
    "kanji": "薬局",
    "kana": "やっきょく",
    "romaji": "yakkyoku",
    "meaning": "약국",
    "level": "N2",
    "category": "travel",
    "example": {
      "japanese": "近くに薬局はありますか？",
      "reading": "ちかくに やっきょくは ありますか？",
      "korean": "근처에 약국이 있나요?"
    }
  },
  {
    "id": "w_0139",
    "kanji": "病院",
    "kana": "びょういん",
    "romaji": "byouin",
    "meaning": "병원",
    "level": "N5",
    "category": "travel",
    "example": {
      "japanese": "熱があるので病院に行きます。",
      "reading": "ねつが あるので びょういんに いきます。",
      "korean": "열이 있어서 병원에 갑니다."
    }
  },
  {
    "id": "w_0140",
    "kanji": "風邪",
    "kana": "かぜ",
    "romaji": "kaze",
    "meaning": "감기",
    "level": "N5",
    "category": "travel",
    "example": {
      "japanese": "風邪を引いてしまいました。",
      "reading": "かぜを ひいてしまいました。",
      "korean": "감기에 걸려버렸습니다."
    }
  },
  {
    "id": "w_0141",
    "kanji": "熱",
    "kana": "ねつ",
    "romaji": "netsu",
    "meaning": "열",
    "level": "N4",
    "category": "travel",
    "example": {
      "japanese": "熱を測ってみてください。",
      "reading": "ねつを はかってみてください。",
      "korean": "열을 재어보세요."
    }
  },
  {
    "id": "w_0142",
    "kanji": "救急車",
    "kana": "きゅうきゅうしゃ",
    "romaji": "kyuukyuusha",
    "meaning": "구급차",
    "level": "N4",
    "category": "travel",
    "example": {
      "japanese": "救急車を呼んでください！",
      "reading": "きゅうきゅうしゃを よんでください！",
      "korean": "구급차를 불러주세요!"
    }
  },
  {
    "id": "w_0143",
    "kanji": "警察",
    "kana": "けいさつ",
    "romaji": "keisatsu",
    "meaning": "경찰",
    "level": "N4",
    "category": "travel",
    "example": {
      "japanese": "警察に届け出ました。",
      "reading": "けいさつに とどけでました。",
      "korean": "경찰에 신고했습니다."
    }
  },
  {
    "id": "w_0144",
    "kanji": "紛失",
    "kana": "ふんしつ",
    "romaji": "funshitsu",
    "meaning": "분실",
    "level": "N1",
    "category": "travel",
    "example": {
      "japanese": "財布を紛失しました。",
      "reading": "さいふを ふんしつしました。",
      "korean": "지갑을 분실했습니다."
    }
  },
  {
    "id": "w_0145",
    "kanji": "牛肉",
    "kana": "ぎゅうにく",
    "romaji": "gyuuniku",
    "meaning": "소고기",
    "level": "N5",
    "category": "food",
    "example": {
      "japanese": "和牛の牛肉が柔らかい。",
      "reading": "わぎゅうの ぎゅうにくが やわらかい。",
      "korean": "와규 소고기가 부드럽다."
    }
  },
  {
    "id": "w_0146",
    "kanji": "豚肉",
    "kana": "ぶたにく",
    "romaji": "butaniku",
    "meaning": "돼지고기",
    "level": "N5",
    "category": "food",
    "example": {
      "japanese": "とんかつは豚肉で作ります。",
      "reading": "とんかつは ぶたにくで つくります。",
      "korean": "돈가스는 돼지고기로 만듭니다."
    }
  },
  {
    "id": "w_0147",
    "kanji": "鶏肉",
    "kana": "とりにく",
    "romaji": "toriniku",
    "meaning": "닭고기",
    "level": "N5",
    "category": "food",
    "example": {
      "japanese": "焼き鳥は鶏肉です。",
      "reading": "やきとりは とりにくです。",
      "korean": "야키토리는 닭고기입니다."
    }
  },
  {
    "id": "w_0148",
    "kanji": "魚",
    "kana": "さかな",
    "romaji": "sakana",
    "meaning": "생선, 물고기",
    "level": "N5",
    "category": "food",
    "example": {
      "japanese": "新鮮な魚を食べたい。",
      "reading": "しんせんな さかなを たべたい。",
      "korean": "신선한 생선을 먹고 싶다."
    }
  },
  {
    "id": "w_0149",
    "kanji": "野菜",
    "kana": "やさい",
    "romaji": "yasai",
    "meaning": "채소, 야채",
    "level": "N5",
    "category": "food",
    "example": {
      "japanese": "毎日野菜を食べましょう。",
      "reading": "まいにち やさいを たべましょう。",
      "korean": "매일 야채를 먹읍시다."
    }
  },
  {
    "id": "w_0150",
    "kanji": "果物",
    "kana": "くだもの",
    "romaji": "kudamono",
    "meaning": "과일",
    "level": "N5",
    "category": "food",
    "example": {
      "japanese": "日本の果物は甘いです。",
      "reading": "にほんの くだものは あまいです。",
      "korean": "일본 과일은 답니다."
    }
  },
  {
    "id": "w_0151",
    "kanji": "卵",
    "kana": "たまご",
    "romaji": "tamago",
    "meaning": "달걀, 계란",
    "level": "N5",
    "category": "food",
    "example": {
      "japanese": "卵かけご飯が大好きです。",
      "reading": "たまごかけごはんが だいすきです。",
      "korean": "달걀 비빔밥을 정말 좋아합니다."
    }
  },
  {
    "id": "w_0152",
    "kanji": "牛乳",
    "kana": "ぎゅうにゅう",
    "romaji": "gyuunyuu",
    "meaning": "우유",
    "level": "N5",
    "category": "food",
    "example": {
      "japanese": "朝に牛乳を飲みます。",
      "reading": "あさに ぎゅうにゅうを のみます。",
      "korean": "아침에 우유를 마십니다."
    }
  },
  {
    "id": "w_0153",
    "kanji": "パン",
    "kana": "ぱん",
    "romaji": "pan",
    "meaning": "빵",
    "level": "N5",
    "category": "food",
    "example": {
      "japanese": "焼きたてのパンを買いました。",
      "reading": "やきたての ぱんを かいました。",
      "korean": "방금 구운 빵을 샀습니다."
    }
  },
  {
    "id": "w_0154",
    "kanji": "おにぎり",
    "kana": "おにぎり",
    "romaji": "onigiri",
    "meaning": "주먹밥 (오니기리)",
    "level": "N5",
    "category": "food",
    "example": {
      "japanese": "鮭のおにぎりが一番好きです。",
      "reading": "さけの おにぎりが いちばん すきです。",
      "korean": "연어 주먹밥이 제일 좋습니다."
    }
  },
  {
    "id": "w_0155",
    "kanji": "うどん",
    "kana": "うどん",
    "romaji": "udon",
    "meaning": "우동",
    "level": "N2",
    "category": "food",
    "example": {
      "japanese": "温かいうどんを食べました。",
      "reading": "あたたかい うどんを たべました。",
      "korean": "따뜻한 우동을 먹었습니다."
    }
  },
  {
    "id": "w_0156",
    "kanji": "そば",
    "kana": "そば",
    "romaji": "soba",
    "meaning": "메밀국수 (소바)",
    "level": "N5",
    "category": "food",
    "example": {
      "japanese": "ざるそばを注文しました。",
      "reading": "ざるそばを ちゅうもんしました。",
      "korean": "자루소바를 주문했습니다."
    }
  },
  {
    "id": "w_0157",
    "kanji": "天ぷら",
    "kana": "てんぷら",
    "romaji": "tenpura",
    "meaning": "튀김 (덴푸라)",
    "level": "N5",
    "category": "food",
    "example": {
      "japanese": "エビの天ぷらがサクサクです。",
      "reading": "えびの てんぷらが さくさくです。",
      "korean": "새우튀김이 바삭바삭합니다."
    }
  },
  {
    "id": "w_0158",
    "kanji": "たこ焼き",
    "kana": "たこやき",
    "romaji": "takoyaki",
    "meaning": "타코야키",
    "level": "N5",
    "category": "food",
    "example": {
      "japanese": "大阪でたこ焼きを食べました。",
      "reading": "おおさかで たこやきを たべました。",
      "korean": "오사카에서 타코야키를 먹었습니다."
    }
  },
  {
    "id": "w_0159",
    "kanji": "お好み焼き",
    "kana": "おこのみやき",
    "romaji": "okonomiyaki",
    "meaning": "오코노미야키",
    "level": "N5",
    "category": "food",
    "example": {
      "japanese": "鉄板でお好み焼きを焼きます。",
      "reading": "てっぱんで おこのみやきを やきます。",
      "korean": "철판에서 오코노미야키를 굽습니다."
    }
  },
  {
    "id": "w_0160",
    "kanji": "言う",
    "kana": "いう",
    "romaji": "iu",
    "meaning": "말하다",
    "level": "N5",
    "category": "basic",
    "example": {
      "japanese": "本当のことを言います。",
      "reading": "ほんとうのことを いいます。",
      "korean": "진실을 말합니다."
    }
  },
  {
    "id": "w_0161",
    "kanji": "思う",
    "kana": "おもう",
    "romaji": "omou",
    "meaning": "생각하다",
    "level": "N4",
    "category": "basic",
    "example": {
      "japanese": "そう思います。",
      "reading": "そう おもいます。",
      "korean": "그렇게 생각합니다."
    }
  },
  {
    "id": "w_0162",
    "kanji": "知る",
    "kana": "しる",
    "romaji": "shiru",
    "meaning": "알다",
    "level": "N5",
    "category": "basic",
    "example": {
      "japanese": "そのニュースを知っていますか？",
      "reading": "その にゅーすを しっていますか？",
      "korean": "그 뉴스를 알고 있습니까?"
    }
  },
  {
    "id": "w_0163",
    "kanji": "分かる",
    "kana": "わかる",
    "romaji": "wakaru",
    "meaning": "이해하다, 알다",
    "level": "N5",
    "category": "basic",
    "example": {
      "japanese": "日本語がよく分かります。",
      "reading": "にほんごが よく わかります。",
      "korean": "일본어를 잘 압니다."
    }
  },
  {
    "id": "w_0164",
    "kanji": "持つ",
    "kana": "もつ",
    "romaji": "motsu",
    "meaning": "가지다, 들다",
    "level": "N5",
    "category": "basic",
    "example": {
      "japanese": "重い荷物を持ちます。",
      "reading": "おもい にもつを もちます。",
      "korean": "무거운 짐을 듭니다."
    }
  },
  {
    "id": "w_0165",
    "kanji": "待つ",
    "kana": "まつ",
    "romaji": "matsu",
    "meaning": "기다리다",
    "level": "N5",
    "category": "basic",
    "example": {
      "japanese": "ここで待ってください。",
      "reading": "ここで まってください。",
      "korean": "여기서 기다려 주세요."
    }
  },
  {
    "id": "w_0166",
    "kanji": "会う",
    "kana": "あう",
    "romaji": "au",
    "meaning": "만나다",
    "level": "N5",
    "category": "basic",
    "example": {
      "japanese": "渋谷で友達に会いました。",
      "reading": "しぶやで ともだちに あいました。",
      "korean": "시부야에서 친구를 만났습니다."
    }
  },
  {
    "id": "w_0167",
    "kanji": "呼ぶ",
    "kana": "よぶ",
    "romaji": "yobu",
    "meaning": "부르다",
    "level": "N5",
    "category": "basic",
    "example": {
      "japanese": "タクシーを呼びました。",
      "reading": "たくしーを よびました。",
      "korean": "택시를 불렀습니다."
    }
  },
  {
    "id": "w_0168",
    "kanji": "歩く",
    "kana": "あるく",
    "romaji": "aruku",
    "meaning": "걷다",
    "level": "N5",
    "category": "basic",
    "example": {
      "japanese": "駅まで歩いて10分です。",
      "reading": "えきまで あるいて じゅっぷんです。",
      "korean": "역까지 걸어서 10분입니다."
    }
  },
  {
    "id": "w_0169",
    "kanji": "走る",
    "kana": "はしる",
    "romaji": "hashiru",
    "meaning": "달리다",
    "level": "N5",
    "category": "basic",
    "example": {
      "japanese": "電車に間に合うよう走った。",
      "reading": "でんしゃに まにあうよう はしった。",
      "korean": "전철 시간에 맞추려고 달렸다."
    }
  },
  {
    "id": "w_0170",
    "kanji": "止まる",
    "kana": "とまる",
    "romaji": "tomaru",
    "meaning": "멈추다",
    "level": "N5",
    "category": "travel",
    "example": {
      "japanese": "電車が止まりました。",
      "reading": "でんしゃが とまりました。",
      "korean": "전철이 멈췄습니다."
    }
  },
  {
    "id": "w_0171",
    "kanji": "泊まる",
    "kana": "とまる",
    "romaji": "tomaru",
    "meaning": "숙박하다, 묵다",
    "level": "N4",
    "category": "travel",
    "example": {
      "japanese": "旅館に泊まりました。",
      "reading": "りょかんに とまりました。",
      "korean": "료칸에 묵었습니다."
    }
  },
  {
    "id": "w_0172",
    "kanji": "乗る",
    "kana": "のる",
    "romaji": "noru",
    "meaning": "타다",
    "level": "N5",
    "category": "travel",
    "example": {
      "japanese": "バスに乗ります。",
      "reading": "ばすに のります。",
      "korean": "버스를 탑니다."
    }
  },
  {
    "id": "w_0173",
    "kanji": "降りる",
    "kana": "おりる",
    "romaji": "oriru",
    "meaning": "내리다",
    "level": "N5",
    "category": "travel",
    "example": {
      "japanese": "次の駅で降ります。",
      "reading": "つぎの えきで おります。",
      "korean": "다음 역에서 내립니다."
    }
  },
  {
    "id": "w_0174",
    "kanji": "入る",
    "kana": "はいる",
    "romaji": "hairu",
    "meaning": "들어가다",
    "level": "N5",
    "category": "basic",
    "example": {
      "japanese": "部屋に入ってください。",
      "reading": "へやに はいってください。",
      "korean": "방으로 들어가세요."
    }
  },
  {
    "id": "w_0175",
    "kanji": "出る",
    "kana": "でる",
    "romaji": "deru",
    "meaning": "나오다, 나가다",
    "level": "N5",
    "category": "basic",
    "example": {
      "japanese": "7時に家を出ました。",
      "reading": "しちじに いえを でました。",
      "korean": "7시에 집을 나왔습니다."
    }
  },
  {
    "id": "w_0176",
    "kanji": "開ける",
    "kana": "あける",
    "romaji": "akeru",
    "meaning": "열다",
    "level": "N5",
    "category": "basic",
    "example": {
      "japanese": "窓を開けてください。",
      "reading": "まどを あけてください。",
      "korean": "창문을 열어주세요."
    }
  },
  {
    "id": "w_0177",
    "kanji": "閉める",
    "kana": "しめる",
    "romaji": "shimeru",
    "meaning": "닫다",
    "level": "N5",
    "category": "basic",
    "example": {
      "japanese": "ドアを閉めます。",
      "reading": "どあを しめます。",
      "korean": "문을 닫습니다."
    }
  },
  {
    "id": "w_0178",
    "kanji": "着く",
    "kana": "つく",
    "romaji": "tsuku",
    "meaning": "도착하다",
    "level": "N5",
    "category": "travel",
    "example": {
      "japanese": "何時に着きますか？",
      "reading": "なんじに つきますか？",
      "korean": "몇 시에 도착합니까?"
    }
  },
  {
    "id": "w_0179",
    "kanji": "探す",
    "kana": "さがす",
    "romaji": "sagasu",
    "meaning": "찾다",
    "level": "N4",
    "category": "travel",
    "example": {
      "japanese": "ホテルを探しています。",
      "reading": "ほてるを さがしています。",
      "korean": "호텔을 찾고 있습니다."
    }
  },
  {
    "id": "w_0180",
    "kanji": "届く",
    "kana": "とどく",
    "romaji": "todoku",
    "meaning": "도착하다, 닿다",
    "level": "N3",
    "category": "daily",
    "example": {
      "japanese": "手紙が届きました。",
      "reading": "てがみが とどきました。",
      "korean": "편지가 도착했습니다."
    }
  },
  {
    "id": "w_0181",
    "kanji": "送る",
    "kana": "おくる",
    "romaji": "okuru",
    "meaning": "보내다",
    "level": "N4",
    "category": "daily",
    "example": {
      "japanese": "荷物をホテルに送ります。",
      "reading": "にもつを ほてるに おくります。",
      "korean": "짐을 호텔로 보냅니다."
    }
  },
  {
    "id": "w_0182",
    "kanji": "払う",
    "kana": "はらう",
    "romaji": "harau",
    "meaning": "지불하다, 내다",
    "level": "N4",
    "category": "shopping",
    "example": {
      "japanese": "クレジットカードで払います。",
      "reading": "くれじっとかーどで はらいます。",
      "korean": "신용카드로 지불합니다."
    }
  },
  {
    "id": "w_0183",
    "kanji": "使う",
    "kana": "つかう",
    "romaji": "tsukau",
    "meaning": "사용하다",
    "level": "N5",
    "category": "basic",
    "example": {
      "japanese": "無料Wi-Fiを使います。",
      "reading": "むりょう わいふぁいを つかいます。",
      "korean": "무료 Wi-Fi를 사용합니다."
    }
  },
  {
    "id": "w_0184",
    "kanji": "洗う",
    "kana": "あらう",
    "romaji": "arau",
    "meaning": "씻다",
    "level": "N5",
    "category": "daily",
    "example": {
      "japanese": "顔を洗います。",
      "reading": "かおを あらいます。",
      "korean": "얼굴을 씻습니다."
    }
  },
  {
    "id": "w_0185",
    "kanji": "置く",
    "kana": "おく",
    "romaji": "oku",
    "meaning": "놓다, 두다",
    "level": "N5",
    "category": "basic",
    "example": {
      "japanese": "机の上に置きました。",
      "reading": "つくえの うえに おきました。",
      "korean": "책상 위에 두었습니다."
    }
  },
  {
    "id": "w_0186",
    "kanji": "落とす",
    "kana": "おとす",
    "romaji": "otosu",
    "meaning": "떨어뜨리다",
    "level": "N4",
    "category": "travel",
    "example": {
      "japanese": "財布を落としました。",
      "reading": "さいふを おとしました。",
      "korean": "지갑을 떨어뜨렸습니다."
    }
  },
  {
    "id": "w_0187",
    "kanji": "拾う",
    "kana": "ひろう",
    "romaji": "hirou",
    "meaning": "줍다",
    "level": "N4",
    "category": "travel",
    "example": {
      "japanese": "鍵を拾いました。",
      "reading": "かぎを ひろいました。",
      "korean": "열쇠를 주웠습니다."
    }
  },
  {
    "id": "w_0188",
    "kanji": "頼む",
    "kana": "たのむ",
    "romaji": "tanomu",
    "meaning": "부탁하다",
    "level": "N5",
    "category": "basic",
    "example": {
      "japanese": "写真を頼みました。",
      "reading": "しゃしんを たのみました。",
      "korean": "사진을 부탁했습니다."
    }
  },
  {
    "id": "w_0189",
    "kanji": "教える",
    "kana": "おしえる",
    "romaji": "oshieru",
    "meaning": "가르치다, 알려주다",
    "level": "N5",
    "category": "travel",
    "example": {
      "japanese": "道を教えてください。",
      "reading": "みちを おしえてください。",
      "korean": "길을 알려주세요."
    }
  },
  {
    "id": "w_0190",
    "kanji": "覚える",
    "kana": "おぼえる",
    "romaji": "oboeru",
    "meaning": "외우다, 기억하다",
    "level": "N5",
    "category": "basic",
    "example": {
      "japanese": "単語を全部覚えました。",
      "reading": "たんごを ぜんぶ おぼえました。",
      "korean": "단어를 전부 외웠습니다."
    }
  },
  {
    "id": "w_0191",
    "kanji": "忘れる",
    "kana": "わすれる",
    "romaji": "wasureru",
    "meaning": "잊다, 깜빡하다",
    "level": "N5",
    "category": "basic",
    "example": {
      "japanese": "傘を忘れました。",
      "reading": "かさを わすれました。",
      "korean": "우산을 잊어버렸습니다."
    }
  },
  {
    "id": "w_0192",
    "kanji": "無くす",
    "kana": "なくす",
    "romaji": "nakusu",
    "meaning": "잃어버리다",
    "level": "N5",
    "category": "travel",
    "example": {
      "japanese": "切符を無くしてしまった。",
      "reading": "きっぷを なくしてしまった。",
      "korean": "표를 잃어버렸습니다."
    }
  },
  {
    "id": "w_0193",
    "kanji": "見せる",
    "kana": "みせる",
    "romaji": "miseru",
    "meaning": "보여주다",
    "level": "N5",
    "category": "basic",
    "example": {
      "japanese": "写真を見せてください。",
      "reading": "しゃしんを みせてください。",
      "korean": "사진을 보여주세요."
    }
  },
  {
    "id": "w_0194",
    "kanji": "貸す",
    "kana": "かす",
    "romaji": "kasu",
    "meaning": "빌려주다",
    "level": "N5",
    "category": "basic",
    "example": {
      "japanese": "ペンを貸してください。",
      "reading": "ぺんを かしてください。",
      "korean": "펜을 빌려주세요."
    }
  },
  {
    "id": "w_0195",
    "kanji": "借りる",
    "kana": "かりる",
    "romaji": "kariru",
    "meaning": "빌리다",
    "level": "N5",
    "category": "basic",
    "example": {
      "japanese": "本を借りました。",
      "reading": "ほんを かりました。",
      "korean": "책을 빌렸습니다."
    }
  },
  {
    "id": "w_0196",
    "kanji": "返す",
    "kana": "かえす",
    "romaji": "kaesu",
    "meaning": "돌려주다",
    "level": "N5",
    "category": "basic",
    "example": {
      "japanese": "明日お金を返します。",
      "reading": "あした おかねを かえします。",
      "korean": "내일 돈을 돌려주겠습니다."
    }
  },
  {
    "id": "w_0197",
    "kanji": "始まる",
    "kana": "はじまる",
    "romaji": "hajimaru",
    "meaning": "시작되다",
    "level": "N5",
    "category": "basic",
    "example": {
      "japanese": "映画が始まりました。",
      "reading": "えいがが はじまりました。",
      "korean": "영화가 시작되었습니다."
    }
  },
  {
    "id": "w_0198",
    "kanji": "終わる",
    "kana": "おわる",
    "romaji": "owaru",
    "meaning": "끝나다",
    "level": "N5",
    "category": "basic",
    "example": {
      "japanese": "授業が終わりました。",
      "reading": "じゅぎょうが おわりました。",
      "korean": "수업이 끝났습니다."
    }
  },
  {
    "id": "w_0199",
    "kanji": "続ける",
    "kana": "つづける",
    "romaji": "tsudukeru",
    "meaning": "계속하다",
    "level": "N4",
    "category": "basic",
    "example": {
      "japanese": "日本語の勉強を続けます。",
      "reading": "にほんごの べんきょうを つづけます。",
      "korean": "일본어 공부를 계속합니다."
    }
  },
  {
    "id": "w_0200",
    "kanji": "大きい",
    "kana": "おおきい",
    "romaji": "ookii",
    "meaning": "크다",
    "level": "N5",
    "category": "basic",
    "example": {
      "japanese": "大きい部屋ですね。",
      "reading": "おおきい へやですね。",
      "korean": "큰 방이네요."
    }
  },
  {
    "id": "w_0201",
    "kanji": "小さい",
    "kana": "ちいさい",
    "romaji": "chiisai",
    "meaning": "작다",
    "level": "N5",
    "category": "basic",
    "example": {
      "japanese": "小さいスプーンをください。",
      "reading": "ちいさい すぷーんを ください。",
      "korean": "작은 숟가락을 주세요."
    }
  },
  {
    "id": "w_0202",
    "kanji": "新しい",
    "kana": "あたらしい",
    "romaji": "atarashii",
    "meaning": "새롭다",
    "level": "N5",
    "category": "basic",
    "example": {
      "japanese": "新しいホテルに泊まります。",
      "reading": "あたらしい ほてるに とまります。",
      "korean": "새 호텔에 묵습니다."
    }
  },
  {
    "id": "w_0203",
    "kanji": "古い",
    "kana": "ふるい",
    "romaji": "furui",
    "meaning": "오래되다, 낡다",
    "level": "N5",
    "category": "basic",
    "example": {
      "japanese": "歴史ある古いお寺です。",
      "reading": "れきしある ふるい おてらです。",
      "korean": "역사 있는 오래된 절입니다."
    }
  },
  {
    "id": "w_0204",
    "kanji": "良い",
    "kana": "いい/よい",
    "romaji": "ii/yoi",
    "meaning": "좋다",
    "level": "N5",
    "category": "basic",
    "example": {
      "japanese": "とても良い経験でした。",
      "reading": "とても いい けいけんでした。",
      "korean": "매우 좋은 경험이었습니다."
    }
  },
  {
    "id": "w_0205",
    "kanji": "悪い",
    "kana": "わるい",
    "romaji": "warui",
    "meaning": "나쁘다",
    "level": "N5",
    "category": "basic",
    "example": {
      "japanese": "体調が悪いです。",
      "reading": "たいちょうが わるいです。",
      "korean": "컨디션이 안 좋습니다."
    }
  },
  {
    "id": "w_0206",
    "kanji": "多い",
    "kana": "おおい",
    "romaji": "ooi",
    "meaning": "많다",
    "level": "N5",
    "category": "basic",
    "example": {
      "japanese": "観光客が多いです。",
      "reading": "かんこうきゃくが おおいです。",
      "korean": "관광객이 많습니다."
    }
  },
  {
    "id": "w_0207",
    "kanji": "少ない",
    "kana": "すくない",
    "romaji": "sukunai",
    "meaning": "적다",
    "level": "N5",
    "category": "basic",
    "example": {
      "japanese": "人が少なくて静かです。",
      "reading": "ひとが すくなくて しずかです。",
      "korean": "사람이 적어서 조용합니다."
    }
  },
  {
    "id": "w_0208",
    "kanji": "近い",
    "kana": "ちかい",
    "romaji": "chikai",
    "meaning": "가깝다",
    "level": "N5",
    "category": "travel",
    "example": {
      "japanese": "駅から近くて便利です。",
      "reading": "えきから ちかくて べんりです。",
      "korean": "역에서 가까워 편리합니다."
    }
  },
  {
    "id": "w_0209",
    "kanji": "遠い",
    "kana": "とおい",
    "romaji": "tooi",
    "meaning": "멀다",
    "level": "N5",
    "category": "travel",
    "example": {
      "japanese": "ここからかなり遠いです。",
      "reading": "ここから かなり とおいです。",
      "korean": "여기서 꽤 멉니다."
    }
  },
  {
    "id": "w_0210",
    "kanji": "早い",
    "kana": "はやい",
    "romaji": "hayai",
    "meaning": "이르다, 빠르다",
    "level": "N5",
    "category": "basic",
    "example": {
      "japanese": "朝早く起きました。",
      "reading": "あさはやく おきました。",
      "korean": "아침 일찍 일어났습니다."
    }
  },
  {
    "id": "w_0211",
    "kanji": "遅い",
    "kana": "おそい",
    "romaji": "osoi",
    "meaning": "늦다, 느리다",
    "level": "N5",
    "category": "basic",
    "example": {
      "japanese": "返事が遅くなりました。",
      "reading": "へんじが おそくなりました。",
      "korean": "답장이 늦었습니다."
    }
  },
  {
    "id": "w_0212",
    "kanji": "明るい",
    "kana": "あかるい",
    "romaji": "akarui",
    "meaning": "밝다",
    "level": "N5",
    "category": "basic",
    "example": {
      "japanese": "部屋がとても明るいです。",
      "reading": "へやが とても あかるいです。",
      "korean": "방이 매우 밝습니다."
    }
  },
  {
    "id": "w_0213",
    "kanji": "暗い",
    "kana": "くらい",
    "romaji": "kurai",
    "meaning": "어둡다",
    "level": "N5",
    "category": "basic",
    "example": {
      "japanese": "夜道が暗くて危ないです。",
      "reading": "よみちが くらくて あぶないです。",
      "korean": "밤길이 어두워서 위험합니다."
    }
  },
  {
    "id": "w_0214",
    "kanji": "重い",
    "kana": "おもい",
    "romaji": "omoi",
    "meaning": "무겁다",
    "level": "N5",
    "category": "basic",
    "example": {
      "japanese": "スーツケースが重いです。",
      "reading": "すーつけーすが おもいです。",
      "korean": "캐리어가 무겁습니다."
    }
  },
  {
    "id": "w_0215",
    "kanji": "軽い",
    "kana": "かるい",
    "romaji": "karui",
    "meaning": "가볍다",
    "level": "N5",
    "category": "basic",
    "example": {
      "japanese": "軽くて持ち運びやすい。",
      "reading": "かるくて もちはこびやすい。",
      "korean": "가볍고 휴대하기 편하다."
    }
  },
  {
    "id": "w_0216",
    "kanji": "広い",
    "kana": "ひろい",
    "romaji": "hiroi",
    "meaning": "넓다",
    "level": "N5",
    "category": "basic",
    "example": {
      "japanese": "部屋が広くて快適です。",
      "reading": "へやが ひろくて かいてきです。",
      "korean": "방이 넓어서 쾌적합니다."
    }
  },
  {
    "id": "w_0217",
    "kanji": "狭い",
    "kana": "せまい",
    "romaji": "semai",
    "meaning": "좁다",
    "level": "N5",
    "category": "basic",
    "example": {
      "japanese": "道が狭いので注意してください。",
      "reading": "みちが せまいので ちゅういしてください。",
      "korean": "길이 좁으니 주의해 주세요."
    }
  },
  {
    "id": "w_0218",
    "kanji": "静か",
    "kana": "しずか",
    "romaji": "shizuka",
    "meaning": "조용함",
    "level": "N5",
    "category": "basic",
    "example": {
      "japanese": "夜はとても静かです。",
      "reading": "よるは とても しずかです。",
      "korean": "밤에는 매우 조용합니다."
    }
  },
  {
    "id": "w_0219",
    "kanji": "便利",
    "kana": "べんり",
    "romaji": "benri",
    "meaning": "편리함",
    "level": "N5",
    "category": "basic",
    "example": {
      "japanese": "スマホはとても便利です。",
      "reading": "すまほは とても べんりです。",
      "korean": "스마트폰은 매우 편리합니다."
    }
  },
  {
    "id": "w_0220",
    "kanji": "不便",
    "kana": "ふべん",
    "romaji": "fuben",
    "meaning": "불편함",
    "level": "N4",
    "category": "basic",
    "example": {
      "japanese": "交通が少し不便です。",
      "reading": "こうつうが すこし ふべんです。",
      "korean": "교통이 조금 불편합니다."
    }
  },
  {
    "id": "w_0221",
    "kanji": "親切",
    "kana": "しんせつ",
    "romaji": "shinsetsu",
    "meaning": "친절함",
    "level": "N4",
    "category": "basic",
    "example": {
      "japanese": "店員さんがとても親切でした。",
      "reading": "てんいんさんが とても しんせつでした。",
      "korean": "점원분이 매우 친절했습니다."
    }
  },
  {
    "id": "w_0222",
    "kanji": "綺麗",
    "kana": "きれい",
    "romaji": "kirei",
    "meaning": "예쁨, 깨끗함",
    "level": "N5",
    "category": "basic",
    "example": {
      "japanese": "夜景がとても綺麗です。",
      "reading": "やけいが とても きれいです。",
      "korean": "야경이 매우 예쁩니다."
    }
  },
  {
    "id": "w_0223",
    "kanji": "簡単",
    "kana": "かんたん",
    "romaji": "kantan",
    "meaning": "간단함, 쉬움",
    "level": "N4",
    "category": "basic",
    "example": {
      "japanese": "作り方はとても簡単です。",
      "reading": "つくりかたは とても かんたんです。",
      "korean": "만드는 법은 매우 간단합니다."
    }
  },
  {
    "id": "w_0224",
    "kanji": "大切",
    "kana": "たいせつ",
    "romaji": "taisetsu",
    "meaning": "소중함, 중요함",
    "level": "N5",
    "category": "basic",
    "example": {
      "japanese": "パスポートは大切に保管します。",
      "reading": "ぱすぽーとは たいせつに ほかんします。",
      "korean": "여권은 소중히 보관합니다."
    }
  },
  {
    "id": "w_0225",
    "kanji": "有名",
    "kana": "ゆうめい",
    "romaji": "yuumei",
    "meaning": "유명함",
    "level": "N5",
    "category": "basic",
    "example": {
      "japanese": "日本で一番有名な観光地です。",
      "reading": "にほんで いちばん ゆうめいな かんこうちです。",
      "korean": "일본에서 가장 유명한 관광지입니다."
    }
  },
  {
    "id": "w_0226",
    "kanji": "東京",
    "kana": "とうきょう",
    "romaji": "toukyou",
    "meaning": "도쿄",
    "level": "N5",
    "category": "travel",
    "example": {
      "japanese": "東京タワーに行きました。",
      "reading": "とうきょうたわーに いきました。",
      "korean": "도쿄 타워에 갔습니다."
    }
  },
  {
    "id": "w_0227",
    "kanji": "大阪",
    "kana": "おおさか",
    "romaji": "oosaka",
    "meaning": "오사카",
    "level": "N5",
    "category": "travel",
    "example": {
      "japanese": "大阪のグルメを楽しみました。",
      "reading": "おおさかの ぐるめを たのしみました。",
      "korean": "오사카 미식을 즐겼습니다."
    }
  },
  {
    "id": "w_0228",
    "kanji": "京都",
    "kana": "きょうと",
    "romaji": "kyouto",
    "meaning": "교토",
    "level": "N5",
    "category": "travel",
    "example": {
      "japanese": "京都でお寺巡りをしました。",
      "reading": "きょうとで おてらめぐりを しました。",
      "korean": "교토에서 사찰 순례를 했습니다."
    }
  },
  {
    "id": "w_0229",
    "kanji": "富士山",
    "kana": "ふじさん",
    "romaji": "fujisan",
    "meaning": "후지산",
    "level": "N5",
    "category": "travel",
    "example": {
      "japanese": "天気が良くて富士山が見えた。",
      "reading": "てんきが よくて ふじさんが みえた。",
      "korean": "날씨가 좋아서 후지산이 보였다."
    }
  },
  {
    "id": "w_0230",
    "kanji": "秋葉原",
    "kana": "あきはばら",
    "romaji": "akihabara",
    "meaning": "아키하바라",
    "level": "N5",
    "category": "travel",
    "example": {
      "japanese": "秋葉原でフィギュアを見ました。",
      "reading": "あきはばらで ふぃぎゅあを みました。",
      "korean": "아키하바라에서 피규어를 봤습니다."
    }
  },
  {
    "id": "w_0231",
    "kanji": "新宿",
    "kana": "しんじゅく",
    "romaji": "shinjuku",
    "meaning": "신주쿠",
    "level": "N5",
    "category": "travel",
    "example": {
      "japanese": "新宿駅は世界一乗降客が多い。",
      "reading": "しんじゅくえきは せかいいち じょうこうきゃくが おおい。",
      "korean": "신주쿠역은 세계에서 승하차객이 제일 많다."
    }
  },
  {
    "id": "w_0232",
    "kanji": "渋谷",
    "kana": "しぶや",
    "romaji": "shibuya",
    "meaning": "시부야",
    "level": "N5",
    "category": "travel",
    "example": {
      "japanese": "渋谷のスクランブル交差点です。",
      "reading": "しぶやの すくらんぶるこうさてんです。",
      "korean": "시부야 스크램블 교차로입니다."
    }
  },
  {
    "id": "w_0233",
    "kanji": "浅草",
    "kana": "あさくさ",
    "romaji": "asakusa",
    "meaning": "아사쿠사",
    "level": "N5",
    "category": "travel",
    "example": {
      "japanese": "浅草寺でおみくじを引きました。",
      "reading": "せんそうじで おみくじを ひきました。",
      "korean": "센소지에서 운세 뽑기(오미쿠지)를 뽑았습니다."
    }
  },
  {
    "id": "w_0234",
    "kanji": "神社",
    "kana": "じんじゃ",
    "romaji": "jinja",
    "meaning": "신사",
    "level": "N4",
    "category": "travel",
    "example": {
      "japanese": "有名な神社でお参りをしました。",
      "reading": "ゆうめいな じんじゃで おまいりを しました。",
      "korean": "유명한 신사에서 참배를 했습니다."
    }
  },
  {
    "id": "w_0235",
    "kanji": "お寺",
    "kana": "おてら",
    "romaji": "otera",
    "meaning": "절, 사찰",
    "level": "N5",
    "category": "travel",
    "example": {
      "japanese": "静かなお寺で心を落ち着かせます。",
      "reading": "しずかな おてらで こころを おちつかせます。",
      "korean": "조용한 절에서 마음을 차분히 합니다."
    }
  },
  {
    "id": "w_0236",
    "kanji": "城",
    "kana": "しろ",
    "romaji": "shiro",
    "meaning": "성 (오사카성 등)",
    "level": "N3",
    "category": "travel",
    "example": {
      "japanese": "大阪城を見学しました。",
      "reading": "おおさかじょうを けんがくしました。",
      "korean": "오사카성을 견학했습니다."
    }
  },
  {
    "id": "w_0237",
    "kanji": "公園",
    "kana": "こうえん",
    "romaji": "kouen",
    "meaning": "공원",
    "level": "N5",
    "category": "daily",
    "example": {
      "japanese": "公園を散歩しました。",
      "reading": "こうえんを さんぽしました。",
      "korean": "공원을 산책했습니다."
    }
  },
  {
    "id": "w_0238",
    "kanji": "動物園",
    "kana": "どうぶつえん",
    "romaji": "doubutsuen",
    "meaning": "동물원",
    "level": "N4",
    "category": "daily",
    "example": {
      "japanese": "上野動物園でパンダを見ました。",
      "reading": "うえのどうぶつえんで ぱんだを みました。",
      "korean": "우에노 동물원에서 판다를 봤습니다."
    }
  },
  {
    "id": "w_0239",
    "kanji": "水族館",
    "kana": "すいぞくかん",
    "romaji": "suizokukan",
    "meaning": "수족관",
    "level": "N4",
    "category": "travel",
    "example": {
      "japanese": "巨大な水族館に行きました。",
      "reading": "きょだいな すいぞくかんに いきました。",
      "korean": "거대한 수족관에 갔습니다."
    }
  },
  {
    "id": "w_0240",
    "kanji": "美術館",
    "kana": "びじゅつかん",
    "romaji": "bijutsukan",
    "meaning": "미술관",
    "level": "N4",
    "category": "travel",
    "example": {
      "japanese": "美術館で絵画を鑑賞します。",
      "reading": "びじゅつかんで かいがを かんしょうします。",
      "korean": "미술관에서 회화를 감상합니다."
    }
  },
  {
    "id": "w_0241",
    "kanji": "映画館",
    "kana": "えいがかん",
    "romaji": "eigakan",
    "meaning": "영화관",
    "level": "N5",
    "category": "daily",
    "example": {
      "japanese": "映画館で最新作を見ました。",
      "reading": "えいがかんで さいしんさくを みました。",
      "korean": "영화관에서 최신작을 보았습니다."
    }
  },
  {
    "id": "w_0242",
    "kanji": "図書館",
    "kana": "としょかん",
    "romaji": "toshokan",
    "meaning": "도서관",
    "level": "N5",
    "category": "daily",
    "example": {
      "japanese": "図書館で本を借ります。",
      "reading": "としょかんで ほんを かります。",
      "korean": "도서관에서 책을 빌립니다."
    }
  },
  {
    "id": "w_0243",
    "kanji": "銀行",
    "kana": "ぎんこう",
    "romaji": "ginkou",
    "meaning": "은행",
    "level": "N5",
    "category": "daily",
    "example": {
      "japanese": "銀行で口座を作りました。",
      "reading": "ぎんこうで こうざを つくりました。",
      "korean": "은행에서 계좌를 만들었습니다."
    }
  },
  {
    "id": "w_0244",
    "kanji": "郵便局",
    "kana": "ゆうびんきょく",
    "romaji": "yuubinkyoku",
    "meaning": "우체국",
    "level": "N5",
    "category": "daily",
    "example": {
      "japanese": "郵便局から手紙を送ります。",
      "reading": "ゆうびんきょくから てがみを おくります。",
      "korean": "우체국에서 편지를 보냅니다."
    }
  },
  {
    "id": "w_0245",
    "kanji": "切手",
    "kana": "きって",
    "romaji": "kitte",
    "meaning": "우표",
    "level": "N5",
    "category": "daily",
    "example": {
      "japanese": "記念切手を買いました。",
      "reading": "きねんきってを かいました。",
      "korean": "기념우표를 샀습니다."
    }
  },
  {
    "id": "w_0246",
    "kanji": "傘",
    "kana": "かさ",
    "romaji": "kasa",
    "meaning": "우산",
    "level": "N5",
    "category": "daily",
    "example": {
      "japanese": "傘を持っていきましょう。",
      "reading": "かさを もっていきましょう。",
      "korean": "우산을 가져갑시다."
    }
  },
  {
    "id": "w_0247",
    "kanji": "鍵",
    "kana": "かぎ",
    "romaji": "kagi",
    "meaning": "열쇠",
    "level": "N5",
    "category": "travel",
    "example": {
      "japanese": "ホテルの鍵を預けました。",
      "reading": "ほてるの かぎを あずけました。",
      "korean": "호텔 열쇠를 맡겼습니다."
    }
  },
  {
    "id": "w_0248",
    "kanji": "財布",
    "kana": "さいふ",
    "romaji": "saifu",
    "meaning": "지갑",
    "level": "N5",
    "category": "travel",
    "example": {
      "japanese": "財布をポケットに入れます。",
      "reading": "さいふを ぽけっとに いれます。",
      "korean": "지갑을 주머니에 넣습니다."
    }
  },
  {
    "id": "w_0249",
    "kanji": "時計",
    "kana": "とけい",
    "romaji": "tokei",
    "meaning": "시계",
    "level": "N5",
    "category": "daily",
    "example": {
      "japanese": "時計を見て時間を確かめます。",
      "reading": "とけいを みて じかんを たしかめます。",
      "korean": "시계를 보고 시간을 확인합니다."
    }
  },
  {
    "id": "w_0250",
    "kanji": "眼鏡",
    "kana": "めがね",
    "romaji": "megane",
    "meaning": "안경",
    "level": "N5",
    "category": "daily",
    "example": {
      "japanese": "眼鏡をかけます。",
      "reading": "めがねを かけます。",
      "korean": "안경을 씁니다."
    }
  },
  {
    "id": "w_0251",
    "kanji": "帽子",
    "kana": "ぼうし",
    "romaji": "boushi",
    "meaning": "모자",
    "level": "N5",
    "category": "daily",
    "example": {
      "japanese": "帽子をかぶって出かけます。",
      "reading": "ぼうしを かぶって でかけます。",
      "korean": "모자를 쓰고 외출합니다."
    }
  },
  {
    "id": "w_0252",
    "kanji": "靴",
    "kana": "くつ",
    "romaji": "kutsu",
    "meaning": "신발, 구두",
    "level": "N5",
    "category": "daily",
    "example": {
      "japanese": "ここで靴を脱いでください。",
      "reading": "ここで くつを ぬいでください。",
      "korean": "여기서 신발을 벗어주세요."
    }
  },
  {
    "id": "w_0253",
    "kanji": "靴下",
    "kana": "くつした",
    "romaji": "kutsushita",
    "meaning": "양말",
    "level": "N5",
    "category": "daily",
    "example": {
      "japanese": "新しい靴下を買いました。",
      "reading": "あたらしい くつしたを かいました。",
      "korean": "새 양말을 샀습니다."
    }
  },
  {
    "id": "w_0254",
    "kanji": "服",
    "kana": "ふく",
    "romaji": "fuku",
    "meaning": "옷",
    "level": "N5",
    "category": "shopping",
    "example": {
      "japanese": "おしゃれな服を着ています。",
      "reading": "おしゃれな ふくを きています。",
      "korean": "세련된 옷을 입고 있습니다."
    }
  },
  {
    "id": "w_0255",
    "kanji": "上着",
    "kana": "うわぎ",
    "romaji": "uwagi",
    "meaning": "겉옷, 외투",
    "level": "N5",
    "category": "daily",
    "example": {
      "japanese": "寒いので上着を着ます。",
      "reading": "さむいので うわぎを きます。",
      "korean": "추워서 겉옷을 입습니다."
    }
  },
  {
    "id": "w_0256",
    "kanji": "車",
    "kana": "くるま",
    "romaji": "kuruma",
    "meaning": "자동차",
    "level": "N5",
    "category": "basic",
    "example": {
      "japanese": "車を運転します。",
      "reading": "くるまを うんてんします。",
      "korean": "자동차를 운전합니다."
    }
  },
  {
    "id": "w_0257",
    "kanji": "自転車",
    "kana": "じてんしゃ",
    "romaji": "jitensha",
    "meaning": "자전거",
    "level": "N5",
    "category": "daily",
    "example": {
      "japanese": "自転車で通勤しています。",
      "reading": "じてんしゃで つうきんしています。",
      "korean": "자전거로 출퇴근하고 있습니다."
    }
  },
  {
    "id": "w_0258",
    "kanji": "船",
    "kana": "ふね",
    "romaji": "fune",
    "meaning": "배, 선박",
    "level": "N3",
    "category": "travel",
    "example": {
      "japanese": "船に乗って島へ渡ります。",
      "reading": "ふねに のって しまへ わたりました。",
      "korean": "배를 타고 섬으로 건너갑니다."
    }
  },
  {
    "id": "w_0259",
    "kanji": "空港",
    "kana": "くうこう",
    "romaji": "kuukou",
    "meaning": "공항",
    "level": "N4",
    "category": "travel",
    "example": {
      "japanese": "羽田空港を利用しました。",
      "reading": "はねだくうこうを りようしました。",
      "korean": "하네다 공항을 이용했습니다."
    }
  },
  {
    "id": "w_0260",
    "kanji": "港",
    "kana": "みなと",
    "romaji": "minato",
    "meaning": "항구",
    "level": "N4",
    "category": "travel",
    "example": {
      "japanese": "横浜の港は夜景が綺麗です。",
      "reading": "よこはまの みなとは やけいが きれいです。",
      "korean": "요코하마 항구는 야경이 예쁩니다."
    }
  },
  {
    "id": "w_0261",
    "kanji": "海",
    "kana": "うみ",
    "romaji": "umi",
    "meaning": "바다",
    "level": "N5",
    "category": "travel",
    "example": {
      "japanese": "沖縄の海で泳ぎたいです。",
      "reading": "おきなわの うみで およぎたいです。",
      "korean": "오키나와 바다에서 수영하고 싶습니다."
    }
  },
  {
    "id": "w_0262",
    "kanji": "山",
    "kana": "やま",
    "romaji": "yama",
    "meaning": "산",
    "level": "N5",
    "category": "travel",
    "example": {
      "japanese": "週末に山登りをします。",
      "reading": "しゅうまつに やまのぼりを します。",
      "korean": "주말에 등산을 합니다."
    }
  },
  {
    "id": "w_0263",
    "kanji": "川",
    "kana": "かわ",
    "romaji": "kawa",
    "meaning": "강",
    "level": "N5",
    "category": "travel",
    "example": {
      "japanese": "鴨川のほとりを歩きました。",
      "reading": "かもがわの ほとりを あるきました。",
      "korean": "가모가와 강변을 걸었습니다."
    }
  },
  {
    "id": "w_0264",
    "kanji": "空",
    "kana": "そら",
    "romaji": "sora",
    "meaning": "하늘",
    "level": "N5",
    "category": "basic",
    "example": {
      "japanese": "青い空が広がっています。",
      "reading": "あおい そらが ひろがっています。",
      "korean": "파란 하늘이 펼쳐져 있습니다."
    }
  },
  {
    "id": "w_0265",
    "kanji": "太陽",
    "kana": "たいよう",
    "romaji": "taiyou",
    "meaning": "태양, 해",
    "level": "N3",
    "category": "basic",
    "example": {
      "japanese": "太陽の光が暖かいです。",
      "reading": "たいようの ひかりが あたたかいです。",
      "korean": "햇빛이 따뜻합니다."
    }
  },
  {
    "id": "w_0266",
    "kanji": "月",
    "kana": "つき",
    "romaji": "tsuki",
    "meaning": "달",
    "level": "N4",
    "category": "basic",
    "example": {
      "japanese": "今夜は月がとても明るい。",
      "reading": "こんやは つきが とても あかるい。",
      "korean": "오늘 밤은 달이 매우 밝다."
    }
  },
  {
    "id": "w_0267",
    "kanji": "星",
    "kana": "ほし",
    "romaji": "hoshi",
    "meaning": "별",
    "level": "N4",
    "category": "basic",
    "example": {
      "japanese": "夜空に星がたくさん見えます。",
      "reading": "よぞらに ほしが たくさん みえます。",
      "korean": "밤하늘에 별이 많이 보입니다."
    }
  },
  {
    "id": "w_0268",
    "kanji": "春",
    "kana": "はる",
    "romaji": "haru",
    "meaning": "봄",
    "level": "N5",
    "category": "basic",
    "example": {
      "japanese": "春は桜が満開になります。",
      "reading": "はるは さくらが まんかいに なります。",
      "korean": "봄에는 벚꽃이 만개합니다."
    }
  },
  {
    "id": "w_0269",
    "kanji": "夏",
    "kana": "なつ",
    "romaji": "natsu",
    "meaning": "여름",
    "level": "N5",
    "category": "basic",
    "example": {
      "japanese": "夏休みに海へ行きます。",
      "reading": "なつやすみに うみへ いきます。",
      "korean": "여름휴가에 바다로 갑니다."
    }
  },
  {
    "id": "w_0270",
    "kanji": "秋",
    "kana": "あき",
    "romaji": "aki",
    "meaning": "가을",
    "level": "N5",
    "category": "basic",
    "example": {
      "japanese": "秋の紅葉が美しいです。",
      "reading": "あきの こうようが うつくしいです。",
      "korean": "가을 단풍이 아름답습니다."
    }
  },
  {
    "id": "w_0271",
    "kanji": "冬",
    "kana": "ふゆ",
    "romaji": "fuyu",
    "meaning": "겨울",
    "level": "N5",
    "category": "basic",
    "example": {
      "japanese": "冬は温泉が最高です。",
      "reading": "ふゆは おんせんが さいこうです。",
      "korean": "겨울은 온천이 최고입니다."
    }
  },
  {
    "id": "w_0272",
    "kanji": "朝",
    "kana": "あさ",
    "romaji": "asa",
    "meaning": "아침",
    "level": "N5",
    "category": "basic",
    "example": {
      "japanese": "毎朝散歩をしています。",
      "reading": "まいあさ さんぽを しています。",
      "korean": "매일 아침 산책을 합니다."
    }
  },
  {
    "id": "w_0273",
    "kanji": "昼",
    "kana": "ひる",
    "romaji": "hiru",
    "meaning": "낮, 점심",
    "level": "N5",
    "category": "basic",
    "example": {
      "japanese": "お昼ご飯を食べに行きましょう。",
      "reading": "おひるごはんを たべに いきましょう。",
      "korean": "점심밥 먹으러 갑시다."
    }
  },
  {
    "id": "w_0274",
    "kanji": "晩",
    "kana": "ばん",
    "romaji": "ban",
    "meaning": "저녁, 밤",
    "level": "N5",
    "category": "basic",
    "example": {
      "japanese": "今晩の予定は何ですか？",
      "reading": "こんばんの よていは なんですか？",
      "korean": "오늘 저녁 일정은 무엇인가요?"
    }
  },
  {
    "id": "w_0275",
    "kanji": "夜",
    "kana": "よる",
    "romaji": "yoru",
    "meaning": "밤",
    "level": "N5",
    "category": "basic",
    "example": {
      "japanese": "夜遅くまで勉強しました。",
      "reading": "よるおそくまで べんきょうしました。",
      "korean": "밤늦게까지 공부했습니다."
    }
  },
  {
    "id": "w_0276",
    "kanji": "予約",
    "kana": "よやく",
    "romaji": "yoyaku",
    "meaning": "예약",
    "level": "N4",
    "category": "travel",
    "example": {
      "japanese": "予約をしてください。",
      "reading": "よやくを してください。",
      "korean": "예약을(를) 해주세요."
    }
  },
  {
    "id": "w_0277",
    "kanji": "案内",
    "kana": "あんない",
    "romaji": "annai",
    "meaning": "안내",
    "level": "N4",
    "category": "travel",
    "example": {
      "japanese": "案内をしてください。",
      "reading": "あんないを してください。",
      "korean": "안내을(를) 해주세요."
    }
  },
  {
    "id": "w_0278",
    "kanji": "出発",
    "kana": "しゅっぱつ",
    "romaji": "shuppatsu",
    "meaning": "출발",
    "level": "N4",
    "category": "travel",
    "example": {
      "japanese": "出発をしてください。",
      "reading": "しゅっぱつを してください。",
      "korean": "출발을(를) 해주세요."
    }
  },
  {
    "id": "w_0279",
    "kanji": "到着",
    "kana": "とうちゃく",
    "romaji": "touchaku",
    "meaning": "도착",
    "level": "N3",
    "category": "travel",
    "example": {
      "japanese": "到着をしてください。",
      "reading": "とうちゃくを してください。",
      "korean": "도착을(를) 해주세요."
    }
  },
  {
    "id": "w_0280",
    "kanji": "準備",
    "kana": "じゅんび",
    "romaji": "junbi",
    "meaning": "준비",
    "level": "N4",
    "category": "daily",
    "example": {
      "japanese": "準備をしてください。",
      "reading": "じゅんびを してください。",
      "korean": "준비을(를) 해주세요."
    }
  },
  {
    "id": "w_0281",
    "kanji": "観光",
    "kana": "かんこう",
    "romaji": "kankou",
    "meaning": "관광",
    "level": "N3",
    "category": "travel",
    "example": {
      "japanese": "観光をしてください。",
      "reading": "かんこうを してください。",
      "korean": "관광을(를) 해주세요."
    }
  },
  {
    "id": "w_0282",
    "kanji": "両替",
    "kana": "りょうがえ",
    "romaji": "ryougae",
    "meaning": "환전",
    "level": "N3",
    "category": "travel",
    "example": {
      "japanese": "両替をしてください。",
      "reading": "りょうがえを してください。",
      "korean": "환전을(를) 해주세요."
    }
  },
  {
    "id": "w_0283",
    "kanji": "買い物",
    "kana": "かいもの",
    "romaji": "kaimono",
    "meaning": "쇼핑, 장보기",
    "level": "N5",
    "category": "shopping",
    "example": {
      "japanese": "買い物をしてください。",
      "reading": "かいものを してください。",
      "korean": "쇼핑, 장보기을(를) 해주세요."
    }
  },
  {
    "id": "w_0284",
    "kanji": "散歩",
    "kana": "さんぽ",
    "romaji": "sanpo",
    "meaning": "산책",
    "level": "N5",
    "category": "daily",
    "example": {
      "japanese": "散歩をしてください。",
      "reading": "さんぽを してください。",
      "korean": "산책을(를) 해주세요."
    }
  },
  {
    "id": "w_0285",
    "kanji": "旅行",
    "kana": "りょこう",
    "romaji": "ryokou",
    "meaning": "여행",
    "level": "N5",
    "category": "travel",
    "example": {
      "japanese": "旅行をしてください。",
      "reading": "りょこうを してください。",
      "korean": "여행을(를) 해주세요."
    }
  },
  {
    "id": "w_0286",
    "kanji": "見学",
    "kana": "けんがく",
    "romaji": "kengaku",
    "meaning": "견학",
    "level": "N2",
    "category": "travel",
    "example": {
      "japanese": "見学をしてください。",
      "reading": "けんがくを してください。",
      "korean": "견학을(를) 해주세요."
    }
  },
  {
    "id": "w_0287",
    "kanji": "体験",
    "kana": "たいけん",
    "romaji": "taiken",
    "meaning": "체험",
    "level": "N1",
    "category": "travel",
    "example": {
      "japanese": "体験をしてください。",
      "reading": "たいけんを してください。",
      "korean": "체험을(를) 해주세요."
    }
  },
  {
    "id": "w_0288",
    "kanji": "宿泊",
    "kana": "しゅくはく",
    "romaji": "shukuhaku",
    "meaning": "숙박",
    "level": "N3",
    "category": "travel",
    "example": {
      "japanese": "宿泊をしてください。",
      "reading": "しゅくはくを してください。",
      "korean": "숙박을(를) 해주세요."
    }
  },
  {
    "id": "w_0289",
    "kanji": "休憩",
    "kana": "きゅうけい",
    "romaji": "kyuukei",
    "meaning": "휴식",
    "level": "N3",
    "category": "daily",
    "example": {
      "japanese": "休憩をしてください。",
      "reading": "きゅうけいを してください。",
      "korean": "휴식을(를) 해주세요."
    }
  },
  {
    "id": "w_0290",
    "kanji": "滞在",
    "kana": "たいざい",
    "romaji": "taizai",
    "meaning": "체류",
    "level": "N3",
    "category": "travel",
    "example": {
      "japanese": "滞在をしてください。",
      "reading": "たいざいを してください。",
      "korean": "체류을(를) 해주세요."
    }
  },
  {
    "id": "w_0291",
    "kanji": "出発日",
    "kana": "しゅっぱつび",
    "romaji": "shuppatsubi",
    "meaning": "출발일",
    "level": "N4",
    "category": "travel",
    "example": {
      "japanese": "出発日をしてください。",
      "reading": "しゅっぱつびを してください。",
      "korean": "출발일을(를) 해주세요."
    }
  },
  {
    "id": "w_0292",
    "kanji": "帰国",
    "kana": "きこく",
    "romaji": "kikoku",
    "meaning": "귀국",
    "level": "N4",
    "category": "travel",
    "example": {
      "japanese": "帰国をしてください。",
      "reading": "きこくを してください。",
      "korean": "귀국을(를) 해주세요."
    }
  },
  {
    "id": "w_0293",
    "kanji": "入国",
    "kana": "にゅうこく",
    "romaji": "nyuukoku",
    "meaning": "입국",
    "level": "N4",
    "category": "travel",
    "example": {
      "japanese": "入国をしてください。",
      "reading": "にゅうこくを してください。",
      "korean": "입국을(를) 해주세요."
    }
  },
  {
    "id": "w_0294",
    "kanji": "搭乗",
    "kana": "とうじょう",
    "romaji": "toujou",
    "meaning": "탑승",
    "level": "N2",
    "category": "travel",
    "example": {
      "japanese": "搭乗をしてください。",
      "reading": "とうじょうを してください。",
      "korean": "탑승을(를) 해주세요."
    }
  },
  {
    "id": "w_0295",
    "kanji": "手荷物",
    "kana": "てにもつ",
    "romaji": "tenimotsu",
    "meaning": "기내 수하물",
    "level": "N4",
    "category": "travel",
    "example": {
      "japanese": "手荷物をしてください。",
      "reading": "てにもつを してください。",
      "korean": "기내 수하물을(를) 해주세요."
    }
  },
  {
    "id": "w_0296",
    "kanji": "預け荷物",
    "kana": "あずけにもつ",
    "romaji": "azukenimotsu",
    "meaning": "위탁 수하물",
    "level": "N4",
    "category": "travel",
    "example": {
      "japanese": "預け荷物をしてください。",
      "reading": "あずけにもつを してください。",
      "korean": "위탁 수하물을(를) 해주세요."
    }
  },
  {
    "id": "w_0297",
    "kanji": "座席",
    "kana": "ざせき",
    "romaji": "zaseki",
    "meaning": "좌석",
    "level": "N3",
    "category": "travel",
    "example": {
      "japanese": "座席をしてください。",
      "reading": "ざせきを してください。",
      "korean": "좌석을(를) 해주세요."
    }
  },
  {
    "id": "w_0298",
    "kanji": "指定席",
    "kana": "していせき",
    "romaji": "shiteiseki",
    "meaning": "지정석",
    "level": "N4",
    "category": "travel",
    "example": {
      "japanese": "指定席をしてください。",
      "reading": "していせきを してください。",
      "korean": "지정석을(를) 해주세요."
    }
  },
  {
    "id": "w_0299",
    "kanji": "自由席",
    "kana": "じゆうせき",
    "romaji": "jiyuuseki",
    "meaning": "자유석",
    "level": "N4",
    "category": "travel",
    "example": {
      "japanese": "自由席をしてください。",
      "reading": "じゆうせきを してください。",
      "korean": "자유석을(를) 해주세요."
    }
  },
  {
    "id": "w_0300",
    "kanji": "片道",
    "kana": "かたみち",
    "romaji": "katamichi",
    "meaning": "편도",
    "level": "N2",
    "category": "travel",
    "example": {
      "japanese": "片道をしてください。",
      "reading": "かたみちを してください。",
      "korean": "편도을(를) 해주세요."
    }
  },
  {
    "id": "w_0301",
    "kanji": "往復",
    "kana": "おうふく",
    "romaji": "oufuku",
    "meaning": "왕복",
    "level": "N2",
    "category": "travel",
    "example": {
      "japanese": "往復をしてください。",
      "reading": "おうふくを してください。",
      "korean": "왕복을(를) 해주세요."
    }
  },
  {
    "id": "w_0302",
    "kanji": "運賃",
    "kana": "うんちん",
    "romaji": "unchin",
    "meaning": "운임, 요금",
    "level": "N1",
    "category": "travel",
    "example": {
      "japanese": "運賃をしてください。",
      "reading": "うんちんを してください。",
      "korean": "운임, 요금을(를) 해주세요."
    }
  },
  {
    "id": "w_0303",
    "kanji": "特急",
    "kana": "とっきゅう",
    "romaji": "tokkyuu",
    "meaning": "특급 열차",
    "level": "N4",
    "category": "travel",
    "example": {
      "japanese": "特急をしてください。",
      "reading": "とっきゅうを してください。",
      "korean": "특급 열차을(를) 해주세요."
    }
  },
  {
    "id": "w_0304",
    "kanji": "快速",
    "kana": "かいそく",
    "romaji": "kaisoku",
    "meaning": "쾌속 열차",
    "level": "N4",
    "category": "travel",
    "example": {
      "japanese": "快速をしてください。",
      "reading": "かいそくを してください。",
      "korean": "쾌속 열차을(를) 해주세요."
    }
  },
  {
    "id": "w_0305",
    "kanji": "普通",
    "kana": "ふつう",
    "romaji": "futsuu",
    "meaning": "보통 (각역 정차)",
    "level": "N4",
    "category": "travel",
    "example": {
      "japanese": "普通をしてください。",
      "reading": "ふつうを してください。",
      "korean": "보통 (각역 정차)을(를) 해주세요."
    }
  },
  {
    "id": "w_0306",
    "kanji": "終電",
    "kana": "しゅうでん",
    "romaji": "shuuden",
    "meaning": "막차",
    "level": "N4",
    "category": "travel",
    "example": {
      "japanese": "終電をしてください。",
      "reading": "しゅうでんを してください。",
      "korean": "막차을(를) 해주세요."
    }
  },
  {
    "id": "w_0307",
    "kanji": "始発",
    "kana": "しはつ",
    "romaji": "shihatsu",
    "meaning": "첫차",
    "level": "N1",
    "category": "travel",
    "example": {
      "japanese": "始発をしてください。",
      "reading": "しはつを してください。",
      "korean": "첫차을(를) 해주세요."
    }
  },
  {
    "id": "w_0308",
    "kanji": "遅延",
    "kana": "ちえん",
    "romaji": "chien",
    "meaning": "지연, 연착",
    "level": "N3",
    "category": "travel",
    "example": {
      "japanese": "遅延をしてください。",
      "reading": "ちえんを してください。",
      "korean": "지연, 연착을(를) 해주세요."
    }
  },
  {
    "id": "w_0309",
    "kanji": "定刻",
    "kana": "ていこく",
    "romaji": "teikoku",
    "meaning": "정시, 제시간",
    "level": "N3",
    "category": "travel",
    "example": {
      "japanese": "定刻をしてください。",
      "reading": "ていこくを してください。",
      "korean": "정시, 제시간을(를) 해주세요."
    }
  },
  {
    "id": "w_0310",
    "kanji": "時刻表",
    "kana": "じこくひょう",
    "romaji": "jikokuhyou",
    "meaning": "시간표",
    "level": "N1",
    "category": "travel",
    "example": {
      "japanese": "時刻表をしてください。",
      "reading": "じこくひょうを してください。",
      "korean": "시간표을(를) 해주세요."
    }
  },
  {
    "id": "w_0311",
    "kanji": "案内所",
    "kana": "あんないしょ",
    "romaji": "annaisho",
    "meaning": "안내소",
    "level": "N4",
    "category": "travel",
    "example": {
      "japanese": "案内所をしてください。",
      "reading": "あんないしょを してください。",
      "korean": "안내소을(를) 해주세요."
    }
  },
  {
    "id": "w_0312",
    "kanji": "入場券",
    "kana": "にゅうじょうけん",
    "romaji": "nyuujouken",
    "meaning": "입장권",
    "level": "N4",
    "category": "travel",
    "example": {
      "japanese": "入場券をしてください。",
      "reading": "にゅうじょうけんを してください。",
      "korean": "입장권을(를) 해주세요."
    }
  },
  {
    "id": "w_0313",
    "kanji": "割引券",
    "kana": "わりびきけん",
    "romaji": "waribikiken",
    "meaning": "할인 쿠폰",
    "level": "N4",
    "category": "shopping",
    "example": {
      "japanese": "割引券をしてください。",
      "reading": "わりびきけんを してください。",
      "korean": "할인 쿠폰을(를) 해주세요."
    }
  },
  {
    "id": "w_0314",
    "kanji": "領収書",
    "kana": "りょうしゅうしょ",
    "romaji": "ryoushuusho",
    "meaning": "간이 영수증",
    "level": "N3",
    "category": "business",
    "example": {
      "japanese": "領収書をしてください。",
      "reading": "りょうしゅうしょを してください。",
      "korean": "간이 영수증을(를) 해주세요."
    }
  },
  {
    "id": "w_0315",
    "kanji": "請求書",
    "kana": "せいきゅうしょ",
    "romaji": "seikyuusho",
    "meaning": "청구서",
    "level": "N3",
    "category": "business",
    "example": {
      "japanese": "請求書をしてください。",
      "reading": "せいきゅうしょを してください。",
      "korean": "청구서을(를) 해주세요."
    }
  },
  {
    "id": "w_0316",
    "kanji": "消費税",
    "kana": "しょうひぜい",
    "romaji": "shouhizei",
    "meaning": "소비세 (부가세)",
    "level": "N3",
    "category": "shopping",
    "example": {
      "japanese": "消費税をしてください。",
      "reading": "しょうひぜいを してください。",
      "korean": "소비세 (부가세)을(를) 해주세요."
    }
  },
  {
    "id": "w_0317",
    "kanji": "税込み",
    "kana": "ぜいこみ",
    "romaji": "zeikomi",
    "meaning": "세금 포함",
    "level": "N4",
    "category": "shopping",
    "example": {
      "japanese": "税込みをしてください。",
      "reading": "ぜいこみを してください。",
      "korean": "세금 포함을(를) 해주세요."
    }
  },
  {
    "id": "w_0318",
    "kanji": "税抜き",
    "kana": "ぜいぬき",
    "romaji": "zeinuki",
    "meaning": "세금 별도",
    "level": "N4",
    "category": "shopping",
    "example": {
      "japanese": "税抜きをしてください。",
      "reading": "ぜいぬきを してください。",
      "korean": "세금 별도을(를) 해주세요."
    }
  },
  {
    "id": "w_0319",
    "kanji": "大切",
    "kana": "たいせつ",
    "romaji": "たいせつ",
    "meaning": "소중함",
    "level": "N5",
    "category": "basic",
    "example": {
      "japanese": "大切が重要です。",
      "reading": "たいせつが じゅうようです。",
      "korean": "소중함이(가) 중요합니다."
    }
  },
  {
    "id": "w_0320",
    "kanji": "危険",
    "kana": "きけん",
    "romaji": "きけん",
    "meaning": "위험",
    "level": "N4",
    "category": "basic",
    "example": {
      "japanese": "危険が重要です。",
      "reading": "きけんが じゅうようです。",
      "korean": "위험이(가) 중요합니다."
    }
  },
  {
    "id": "w_0321",
    "kanji": "安全",
    "kana": "あんぜん",
    "romaji": "あんぜん",
    "meaning": "안전",
    "level": "N4",
    "category": "basic",
    "example": {
      "japanese": "安全が重要です。",
      "reading": "あんぜんが じゅうようです。",
      "korean": "안전이(가) 중요합니다."
    }
  },
  {
    "id": "w_0322",
    "kanji": "注意",
    "kana": "ちゅうい",
    "romaji": "ちゅうい",
    "meaning": "주의",
    "level": "N4",
    "category": "basic",
    "example": {
      "japanese": "注意が重要です。",
      "reading": "ちゅういが じゅうようです。",
      "korean": "주의이(가) 중요합니다."
    }
  },
  {
    "id": "w_0323",
    "kanji": "遠慮",
    "kana": "えんりょ",
    "romaji": "えんりょ",
    "meaning": "사양, 조심",
    "level": "N4",
    "category": "daily",
    "example": {
      "japanese": "遠慮が重要です。",
      "reading": "えんりょが じゅうようです。",
      "korean": "사양, 조심이(가) 중요합니다."
    }
  },
  {
    "id": "w_0324",
    "kanji": "都合",
    "kana": "つごう",
    "romaji": "つごう",
    "meaning": "형편, 일정",
    "level": "N4",
    "category": "daily",
    "example": {
      "japanese": "都合が重要です。",
      "reading": "つごうが じゅうようです。",
      "korean": "형편, 일정이(가) 중요합니다."
    }
  },
  {
    "id": "w_0325",
    "kanji": "予定",
    "kana": "よてい",
    "romaji": "よてい",
    "meaning": "예정, 계획",
    "level": "N4",
    "category": "daily",
    "example": {
      "japanese": "予定が重要です。",
      "reading": "よていが じゅうようです。",
      "korean": "예정, 계획이(가) 중요합니다."
    }
  },
  {
    "id": "w_0326",
    "kanji": "気分",
    "kana": "きぶん",
    "romaji": "きぶん",
    "meaning": "기분",
    "level": "N4",
    "category": "emotion",
    "example": {
      "japanese": "気分が重要です。",
      "reading": "きぶんが じゅうようです。",
      "korean": "기분이(가) 중요합니다."
    }
  },
  {
    "id": "w_0327",
    "kanji": "気持ち",
    "kana": "きもち",
    "romaji": "きもち",
    "meaning": "마음, 느낌",
    "level": "N4",
    "category": "emotion",
    "example": {
      "japanese": "気持ちが重要です。",
      "reading": "きもちが じゅうようです。",
      "korean": "마음, 느낌이(가) 중요합니다."
    }
  },
  {
    "id": "w_0328",
    "kanji": "経験",
    "kana": "けいけん",
    "romaji": "けいけん",
    "meaning": "경험",
    "level": "N4",
    "category": "basic",
    "example": {
      "japanese": "経験が重要です。",
      "reading": "けいけんが じゅうようです。",
      "korean": "경험이(가) 중요합니다."
    }
  },
  {
    "id": "w_0329",
    "kanji": "習慣",
    "kana": "しゅうかん",
    "romaji": "しゅうかん",
    "meaning": "습관",
    "level": "N4",
    "category": "daily",
    "example": {
      "japanese": "習慣が重要です。",
      "reading": "しゅうかんが じゅうようです。",
      "korean": "습관이(가) 중요합니다."
    }
  },
  {
    "id": "w_0330",
    "kanji": "文化",
    "kana": "ぶんか",
    "romaji": "ぶんか",
    "meaning": "문화",
    "level": "N4",
    "category": "basic",
    "example": {
      "japanese": "文化が重要です。",
      "reading": "ぶんかが じゅうようです。",
      "korean": "문화이(가) 중요합니다."
    }
  },
  {
    "id": "w_0331",
    "kanji": "社会",
    "kana": "しゃかい",
    "romaji": "しゃかい",
    "meaning": "사회",
    "level": "N4",
    "category": "basic",
    "example": {
      "japanese": "社会が重要です。",
      "reading": "しゃかいが じゅうようです。",
      "korean": "사회이(가) 중요합니다."
    }
  },
  {
    "id": "w_0332",
    "kanji": "経済",
    "kana": "けいざい",
    "romaji": "けいざい",
    "meaning": "경제",
    "level": "N4",
    "category": "business",
    "example": {
      "japanese": "経済が重要です。",
      "reading": "けいざいが じゅうようです。",
      "korean": "경제이(가) 중요합니다."
    }
  },
  {
    "id": "w_0333",
    "kanji": "歴史",
    "kana": "れきし",
    "romaji": "れきし",
    "meaning": "역사",
    "level": "N4",
    "category": "basic",
    "example": {
      "japanese": "歴史が重要です。",
      "reading": "れきしが じゅうようです。",
      "korean": "역사이(가) 중요합니다."
    }
  },
  {
    "id": "w_0334",
    "kanji": "地理",
    "kana": "ちり",
    "romaji": "ちり",
    "meaning": "지리",
    "level": "N4",
    "category": "basic",
    "example": {
      "japanese": "地理が重要です。",
      "reading": "ちりが じゅうようです。",
      "korean": "지리이(가) 중요합니다."
    }
  },
  {
    "id": "w_0335",
    "kanji": "世界",
    "kana": "せかい",
    "romaji": "せかい",
    "meaning": "세계",
    "level": "N4",
    "category": "basic",
    "example": {
      "japanese": "世界が重要です。",
      "reading": "せかいが じゅうようです。",
      "korean": "세계이(가) 중요합니다."
    }
  },
  {
    "id": "w_0336",
    "kanji": "平和",
    "kana": "へいわ",
    "romaji": "へいわ",
    "meaning": "평화",
    "level": "N3",
    "category": "basic",
    "example": {
      "japanese": "平和が重要です。",
      "reading": "へいわが じゅうようです。",
      "korean": "평화이(가) 중요합니다."
    }
  },
  {
    "id": "w_0337",
    "kanji": "戦争",
    "kana": "せんそう",
    "romaji": "せんそう",
    "meaning": "전쟁",
    "level": "N4",
    "category": "basic",
    "example": {
      "japanese": "戦争が重要です。",
      "reading": "せんそうが じゅうようです。",
      "korean": "전쟁이(가) 중요합니다."
    }
  },
  {
    "id": "w_0338",
    "kanji": "環境",
    "kana": "かんきょう",
    "romaji": "かんきょう",
    "meaning": "환경",
    "level": "N3",
    "category": "basic",
    "example": {
      "japanese": "環境が重要です。",
      "reading": "かんきょうが じゅうようです。",
      "korean": "환경이(가) 중요합니다."
    }
  },
  {
    "id": "w_0339",
    "kanji": "自然",
    "kana": "しぜん",
    "romaji": "しぜん",
    "meaning": "자연",
    "level": "N3",
    "category": "basic",
    "example": {
      "japanese": "自然が重要です。",
      "reading": "しぜんが じゅうようです。",
      "korean": "자연이(가) 중요합니다."
    }
  },
  {
    "id": "w_0340",
    "kanji": "地球",
    "kana": "ちきゅう",
    "romaji": "ちきゅう",
    "meaning": "지구",
    "level": "N3",
    "category": "basic",
    "example": {
      "japanese": "地球が重要です。",
      "reading": "ちきゅうが じゅうようです。",
      "korean": "지구이(가) 중요합니다."
    }
  },
  {
    "id": "w_0341",
    "kanji": "空気",
    "kana": "くうき",
    "romaji": "くうき",
    "meaning": "공기, 분위기",
    "level": "N4",
    "category": "basic",
    "example": {
      "japanese": "空気が重要です。",
      "reading": "くうきが じゅうようです。",
      "korean": "공기, 분위기이(가) 중요합니다."
    }
  },
  {
    "id": "w_0342",
    "kanji": "温度",
    "kana": "おんど",
    "romaji": "おんど",
    "meaning": "온도",
    "level": "N3",
    "category": "basic",
    "example": {
      "japanese": "温度が重要です。",
      "reading": "おんどが じゅうようです。",
      "korean": "온도이(가) 중요합니다."
    }
  },
  {
    "id": "w_0343",
    "kanji": "湿度",
    "kana": "しつど",
    "romaji": "しつど",
    "meaning": "습도",
    "level": "N2",
    "category": "basic",
    "example": {
      "japanese": "湿度が重要です。",
      "reading": "しつどが じゅうようです。",
      "korean": "습도이(가) 중요합니다."
    }
  },
  {
    "id": "w_0344",
    "kanji": "台風",
    "kana": "たいふう",
    "romaji": "たいふう",
    "meaning": "태풍",
    "level": "N4",
    "category": "basic",
    "example": {
      "japanese": "台風が重要です。",
      "reading": "たいふうが じゅうようです。",
      "korean": "태풍이(가) 중요합니다."
    }
  },
  {
    "id": "w_0345",
    "kanji": "地震",
    "kana": "じしん",
    "romaji": "じしん",
    "meaning": "지진",
    "level": "N4",
    "category": "travel",
    "example": {
      "japanese": "地震が重要です。",
      "reading": "じしんが じゅうようです。",
      "korean": "지진이(가) 중요합니다."
    }
  },
  {
    "id": "w_0346",
    "kanji": "津波",
    "kana": "つなみ",
    "romaji": "つなみ",
    "meaning": "쓰나미",
    "level": "N1",
    "category": "travel",
    "example": {
      "japanese": "津波が重要です。",
      "reading": "つなみが じゅうようです。",
      "korean": "쓰나미이(가) 중요합니다."
    }
  },
  {
    "id": "w_0347",
    "kanji": "避難",
    "kana": "ひなん",
    "romaji": "ひなん",
    "meaning": "피난",
    "level": "N1",
    "category": "travel",
    "example": {
      "japanese": "避難が重要です。",
      "reading": "ひなんが じゅうようです。",
      "korean": "피난이(가) 중요합니다."
    }
  },
  {
    "id": "w_0348",
    "kanji": "非常口",
    "kana": "ひじょうぐち",
    "romaji": "ひじょうぐち",
    "meaning": "비상구",
    "level": "N4",
    "category": "travel",
    "example": {
      "japanese": "非常口が重要です。",
      "reading": "ひじょうぐちが じゅうようです。",
      "korean": "비상구이(가) 중요합니다."
    }
  },
  {
    "id": "w_0349",
    "kanji": "消火器",
    "kana": "しょうかき",
    "romaji": "しょうかき",
    "meaning": "소화기",
    "level": "N3",
    "category": "travel",
    "example": {
      "japanese": "消火器が重要です。",
      "reading": "しょうかきが じゅうようです。",
      "korean": "소화기이(가) 중요합니다."
    }
  },
  {
    "id": "w_0350",
    "kanji": "救急",
    "kana": "きゅうきゅう",
    "romaji": "きゅうきゅう",
    "meaning": "구급",
    "level": "N4",
    "category": "travel",
    "example": {
      "japanese": "救急が重要です。",
      "reading": "きゅうきゅうが じゅうようです。",
      "korean": "구급이(가) 중요합니다."
    }
  },
  {
    "id": "w_0351",
    "kanji": "警察署",
    "kana": "けいさつしょ",
    "romaji": "けいさつしょ",
    "meaning": "경찰서",
    "level": "N4",
    "category": "travel",
    "example": {
      "japanese": "警察署が重要です。",
      "reading": "けいさつしょが じゅうようです。",
      "korean": "경찰서이(가) 중요합니다."
    }
  },
  {
    "id": "w_0352",
    "kanji": "消防署",
    "kana": "しょうぼうしょ",
    "romaji": "しょうぼうしょ",
    "meaning": "소방서",
    "level": "N2",
    "category": "travel",
    "example": {
      "japanese": "消防署が重要です。",
      "reading": "しょうぼうしょが じゅうようです。",
      "korean": "소방서이(가) 중요합니다."
    }
  },
  {
    "id": "w_0353",
    "kanji": "市役所",
    "kana": "しやくしょ",
    "romaji": "しやくしょ",
    "meaning": "시청",
    "level": "N4",
    "category": "daily",
    "example": {
      "japanese": "市役所が重要です。",
      "reading": "しやくしょが じゅうようです。",
      "korean": "시청이(가) 중요합니다."
    }
  },
  {
    "id": "w_0354",
    "kanji": "大使館",
    "kana": "たいしかん",
    "romaji": "たいしかん",
    "meaning": "대사관",
    "level": "N5",
    "category": "travel",
    "example": {
      "japanese": "大使館が重要です。",
      "reading": "たいしかんが じゅうようです。",
      "korean": "대사관이(가) 중요합니다."
    }
  },
  {
    "id": "w_0355",
    "kanji": "領事館",
    "kana": "りょうじかん",
    "romaji": "りょうじかん",
    "meaning": "영사관",
    "level": "N3",
    "category": "travel",
    "example": {
      "japanese": "領事館が重要です。",
      "reading": "りょうじかんが じゅうようです。",
      "korean": "영사관이(가) 중요합니다."
    }
  },
  {
    "id": "w_0356",
    "kanji": "入国審査",
    "kana": "にゅうこくしんさ",
    "romaji": "にゅうこくしんさ",
    "meaning": "입국심사",
    "level": "N3",
    "category": "travel",
    "example": {
      "japanese": "入国審査が重要です。",
      "reading": "にゅうこくしんさが じゅうようです。",
      "korean": "입국심사이(가) 중요합니다."
    }
  },
  {
    "id": "w_0357",
    "kanji": "税関",
    "kana": "ぜいかん",
    "romaji": "ぜいかん",
    "meaning": "세관",
    "level": "N2",
    "category": "travel",
    "example": {
      "japanese": "税関が重要です。",
      "reading": "ぜいかんが じゅうようです。",
      "korean": "세관이(가) 중요합니다."
    }
  },
  {
    "id": "w_0358",
    "kanji": "検疫",
    "kana": "けんえき",
    "romaji": "けんえき",
    "meaning": "검역",
    "level": "N2",
    "category": "travel",
    "example": {
      "japanese": "検疫が重要です。",
      "reading": "けんえきが じゅうようです。",
      "korean": "검역이(가) 중요합니다."
    }
  },
  {
    "id": "w_0359",
    "kanji": "読む",
    "kana": "よむ",
    "romaji": "yomu",
    "meaning": "읽다",
    "level": "N5",
    "category": "daily",
    "example": {
      "japanese": "本を読みます。",
      "reading": "ほんを よみます。",
      "korean": "책을 읽습니다."
    }
  },
  {
    "id": "w_0360",
    "kanji": "書く",
    "kana": "かく",
    "romaji": "kaku",
    "meaning": "쓰다",
    "level": "N5",
    "category": "daily",
    "example": {
      "japanese": "手紙を書きます。",
      "reading": "てがみを かきます。",
      "korean": "편지를 씁니다."
    }
  },
  {
    "id": "w_0361",
    "kanji": "泳ぐ",
    "kana": "およぐ",
    "romaji": "oyogu",
    "meaning": "수영하다",
    "level": "N5",
    "category": "daily",
    "example": {
      "japanese": "海で泳ぎます。",
      "reading": "うみで およぎます。",
      "korean": "바다에서 수영합니다."
    }
  },
  {
    "id": "w_0362",
    "kanji": "歌う",
    "kana": "うたう",
    "romaji": "utau",
    "meaning": "노래하다",
    "level": "N5",
    "category": "daily",
    "example": {
      "japanese": "カラオケで歌います。",
      "reading": "からおけで うたいます。",
      "korean": "노래방에서 노래합니다."
    }
  },
  {
    "id": "w_0363",
    "kanji": "遊ぶ",
    "kana": "あそぶ",
    "romaji": "asobu",
    "meaning": "놀다",
    "level": "N5",
    "category": "daily",
    "example": {
      "japanese": "公園で遊びます。",
      "reading": "こうえんで あそびます。",
      "korean": "공원에서 놉니다."
    }
  },
  {
    "id": "w_0364",
    "kanji": "休む",
    "kana": "やすむ",
    "romaji": "yasumu",
    "meaning": "쉬다",
    "level": "N5",
    "category": "daily",
    "example": {
      "japanese": "少し休みます。",
      "reading": "すこし やすみます。",
      "korean": "조금 쉽니다."
    }
  },
  {
    "id": "w_0365",
    "kanji": "働く",
    "kana": "はたらく",
    "romaji": "hataraku",
    "meaning": "일하다",
    "level": "N5",
    "category": "business",
    "example": {
      "japanese": "会社で働きます。",
      "reading": "かいしゃで はたらきます。",
      "korean": "회사에서 일합니다."
    }
  },
  {
    "id": "w_0366",
    "kanji": "洗う",
    "kana": "あらう",
    "romaji": "arau",
    "meaning": "씻다",
    "level": "N5",
    "category": "daily",
    "example": {
      "japanese": "手を洗います。",
      "reading": "てを あらいます。",
      "korean": "손을 씻습니다."
    }
  },
  {
    "id": "w_0367",
    "kanji": "磨く",
    "kana": "みがく",
    "romaji": "migaku",
    "meaning": "닦다 (이를)",
    "level": "N5",
    "category": "daily",
    "example": {
      "japanese": "歯を磨きます。",
      "reading": "はを みがきます。",
      "korean": "이를 닦습니다."
    }
  },
  {
    "id": "w_0368",
    "kanji": "浴びる",
    "kana": "あびる",
    "romaji": "abiru",
    "meaning": "샤워하다, 끼얹다",
    "level": "N5",
    "category": "daily",
    "example": {
      "japanese": "シャワーを浴びます。",
      "reading": "しゃわーを あびます。",
      "korean": "샤워를 합니다."
    }
  },
  {
    "id": "w_0369",
    "kanji": "お酒",
    "kana": "おさけ",
    "romaji": "osake",
    "meaning": "술",
    "level": "N5",
    "category": "food",
    "example": {
      "japanese": "お酒を食べます。",
      "reading": "おさけを たべます。",
      "korean": "술을(를) 먹습니다."
    }
  },
  {
    "id": "w_0370",
    "kanji": "ワイン",
    "kana": "わいん",
    "romaji": "wain",
    "meaning": "와인",
    "level": "N3",
    "category": "food",
    "example": {
      "japanese": "ワインを食べます。",
      "reading": "わいんを たべます。",
      "korean": "와인을(를) 먹습니다."
    }
  },
  {
    "id": "w_0371",
    "kanji": "焼酎",
    "kana": "しょうちゅう",
    "romaji": "shouchuu",
    "meaning": "소주",
    "level": "N4",
    "category": "food",
    "example": {
      "japanese": "焼酎を食べます。",
      "reading": "しょうちゅうを たべます。",
      "korean": "소주을(를) 먹습니다."
    }
  },
  {
    "id": "w_0372",
    "kanji": "日本酒",
    "kana": "にほんしゅ",
    "romaji": "nihonshu",
    "meaning": "사케 (일본 청주)",
    "level": "N4",
    "category": "food",
    "example": {
      "japanese": "日本酒を食べます。",
      "reading": "にほんしゅを たべます。",
      "korean": "사케 (일본 청주)을(를) 먹습니다."
    }
  },
  {
    "id": "w_0373",
    "kanji": "ハイボール",
    "kana": "はいぼーる",
    "romaji": "haibooru",
    "meaning": "하이볼",
    "level": "N5",
    "category": "food",
    "example": {
      "japanese": "ハイボールを食べます。",
      "reading": "はいぼーるを たべます。",
      "korean": "하이볼을(를) 먹습니다."
    }
  },
  {
    "id": "w_0374",
    "kanji": "カクテル",
    "kana": "かくてる",
    "romaji": "kakuteru",
    "meaning": "칵테일",
    "level": "N1",
    "category": "food",
    "example": {
      "japanese": "カクテルを食べます。",
      "reading": "かくてるを たべます。",
      "korean": "칵테일을(를) 먹습니다."
    }
  },
  {
    "id": "w_0375",
    "kanji": "ジュース",
    "kana": "じゅーす",
    "romaji": "juusu",
    "meaning": "주스",
    "level": "N3",
    "category": "food",
    "example": {
      "japanese": "ジュースを食べます。",
      "reading": "じゅーすを たべます。",
      "korean": "주스을(를) 먹습니다."
    }
  },
  {
    "id": "w_0376",
    "kanji": "コーラ",
    "kana": "こーら",
    "romaji": "koora",
    "meaning": "콜라",
    "level": "N5",
    "category": "food",
    "example": {
      "japanese": "コーラを食べます。",
      "reading": "こーらを たべます。",
      "korean": "콜라을(를) 먹습니다."
    }
  },
  {
    "id": "w_0377",
    "kanji": "紅茶",
    "kana": "こうちゃ",
    "romaji": "koucha",
    "meaning": "홍차",
    "level": "N5",
    "category": "food",
    "example": {
      "japanese": "紅茶を食べます。",
      "reading": "こうちゃを たべます。",
      "korean": "홍차을(를) 먹습니다."
    }
  },
  {
    "id": "w_0378",
    "kanji": "烏龍茶",
    "kana": "うーろんちゃ",
    "romaji": "uuroncha",
    "meaning": "우롱차",
    "level": "N5",
    "category": "food",
    "example": {
      "japanese": "烏龍茶を食べます。",
      "reading": "うーろんちゃを たべます。",
      "korean": "우롱차을(를) 먹습니다."
    }
  },
  {
    "id": "w_0379",
    "kanji": "デザート",
    "kana": "でざーと",
    "romaji": "dezaato",
    "meaning": "디저트",
    "level": "N1",
    "category": "food",
    "example": {
      "japanese": "デザートを食べます。",
      "reading": "でざーとを たべます。",
      "korean": "디저트을(를) 먹습니다."
    }
  },
  {
    "id": "w_0380",
    "kanji": "ケーキ",
    "kana": "けーき",
    "romaji": "keeki",
    "meaning": "케이크",
    "level": "N4",
    "category": "food",
    "example": {
      "japanese": "ケーキを食べます。",
      "reading": "けーきを たべます。",
      "korean": "케이크을(를) 먹습니다."
    }
  },
  {
    "id": "w_0381",
    "kanji": "アイスクリーム",
    "kana": "あいすくりーむ",
    "romaji": "aisukuriimu",
    "meaning": "아이스크림",
    "level": "N3",
    "category": "food",
    "example": {
      "japanese": "アイスクリームを食べます。",
      "reading": "あいすくりーむを たべます。",
      "korean": "아이스크림을(를) 먹습니다."
    }
  },
  {
    "id": "w_0382",
    "kanji": "プリン",
    "kana": "ぷりん",
    "romaji": "purin",
    "meaning": "푸딩",
    "level": "N5",
    "category": "food",
    "example": {
      "japanese": "プリンを食べます。",
      "reading": "ぷりんを たべます。",
      "korean": "푸딩을(를) 먹습니다."
    }
  },
  {
    "id": "w_0383",
    "kanji": "パフェ",
    "kana": "ぱふぇ",
    "romaji": "pafe",
    "meaning": "파르페",
    "level": "N5",
    "category": "food",
    "example": {
      "japanese": "パフェを食べます。",
      "reading": "ぱふぇを たべます。",
      "korean": "파르페을(를) 먹습니다."
    }
  },
  {
    "id": "w_0384",
    "kanji": "サラダ",
    "kana": "さらだ",
    "romaji": "sarada",
    "meaning": "샐러드",
    "level": "N4",
    "category": "food",
    "example": {
      "japanese": "サラダを食べます。",
      "reading": "さらだを たべます。",
      "korean": "샐러드을(를) 먹습니다."
    }
  },
  {
    "id": "w_0385",
    "kanji": "スープ",
    "kana": "すーぷ",
    "romaji": "suupu",
    "meaning": "수프, 국물",
    "level": "N3",
    "category": "food",
    "example": {
      "japanese": "スープを食べます。",
      "reading": "すーぷを たべます。",
      "korean": "수프, 국물을(를) 먹습니다."
    }
  },
  {
    "id": "w_0386",
    "kanji": "味噌汁",
    "kana": "みそしる",
    "romaji": "misoshiru",
    "meaning": "미소된장국",
    "level": "N5",
    "category": "food",
    "example": {
      "japanese": "味噌汁を食べます。",
      "reading": "みそしるを たべます。",
      "korean": "미소된장국을(를) 먹습니다."
    }
  },
  {
    "id": "w_0387",
    "kanji": "納豆",
    "kana": "なっとう",
    "romaji": "nattou",
    "meaning": "낫토",
    "level": "N5",
    "category": "food",
    "example": {
      "japanese": "納豆を食べます。",
      "reading": "なっとうを たべます。",
      "korean": "낫토을(를) 먹습니다."
    }
  },
  {
    "id": "w_0388",
    "kanji": "豆腐",
    "kana": "とうふ",
    "romaji": "toufu",
    "meaning": "두부",
    "level": "N5",
    "category": "food",
    "example": {
      "japanese": "豆腐を食べます。",
      "reading": "とうふを たべます。",
      "korean": "두부을(를) 먹습니다."
    }
  },
  {
    "id": "w_0389",
    "kanji": "一",
    "kana": "いち",
    "romaji": "ichi",
    "meaning": "1 (일)",
    "level": "N5",
    "category": "basic",
    "example": {
      "japanese": "一つあります。",
      "reading": "いちつ あります。",
      "korean": "1 (일)개 있습니다."
    }
  },
  {
    "id": "w_0390",
    "kanji": "二",
    "kana": "に",
    "romaji": "ni",
    "meaning": "2 (이)",
    "level": "N5",
    "category": "basic",
    "example": {
      "japanese": "二つあります。",
      "reading": "につ あります。",
      "korean": "2 (이)개 있습니다."
    }
  },
  {
    "id": "w_0391",
    "kanji": "三",
    "kana": "さん",
    "romaji": "san",
    "meaning": "3 (삼)",
    "level": "N5",
    "category": "basic",
    "example": {
      "japanese": "三つあります。",
      "reading": "さんつ あります。",
      "korean": "3 (삼)개 있습니다."
    }
  },
  {
    "id": "w_0392",
    "kanji": "四",
    "kana": "よん",
    "romaji": "yon",
    "meaning": "4 (사)",
    "level": "N5",
    "category": "basic",
    "example": {
      "japanese": "四つあります。",
      "reading": "よんつ あります。",
      "korean": "4 (사)개 있습니다."
    }
  },
  {
    "id": "w_0393",
    "kanji": "五",
    "kana": "ご",
    "romaji": "go",
    "meaning": "5 (오)",
    "level": "N5",
    "category": "basic",
    "example": {
      "japanese": "五つあります。",
      "reading": "ごつ あります。",
      "korean": "5 (오)개 있습니다."
    }
  },
  {
    "id": "w_0394",
    "kanji": "六",
    "kana": "ろく",
    "romaji": "roku",
    "meaning": "6 (육)",
    "level": "N5",
    "category": "basic",
    "example": {
      "japanese": "六つあります。",
      "reading": "ろくつ あります。",
      "korean": "6 (육)개 있습니다."
    }
  },
  {
    "id": "w_0395",
    "kanji": "七",
    "kana": "なな",
    "romaji": "nana",
    "meaning": "7 (칠)",
    "level": "N5",
    "category": "basic",
    "example": {
      "japanese": "七つあります。",
      "reading": "ななつ あります。",
      "korean": "7 (칠)개 있습니다."
    }
  },
  {
    "id": "w_0396",
    "kanji": "八",
    "kana": "はち",
    "romaji": "hachi",
    "meaning": "8 (팔)",
    "level": "N5",
    "category": "basic",
    "example": {
      "japanese": "八つあります。",
      "reading": "はちつ あります。",
      "korean": "8 (팔)개 있습니다."
    }
  },
  {
    "id": "w_0397",
    "kanji": "九",
    "kana": "きゅう",
    "romaji": "kyuu",
    "meaning": "9 (구)",
    "level": "N5",
    "category": "basic",
    "example": {
      "japanese": "九つあります。",
      "reading": "きゅうつ あります。",
      "korean": "9 (구)개 있습니다."
    }
  },
  {
    "id": "w_0398",
    "kanji": "十",
    "kana": "じゅう",
    "romaji": "juu",
    "meaning": "10 (십)",
    "level": "N5",
    "category": "basic",
    "example": {
      "japanese": "十つあります。",
      "reading": "じゅうつ あります。",
      "korean": "10 (십)개 있습니다."
    }
  },
  {
    "id": "w_0399",
    "kanji": "百",
    "kana": "ひゃく",
    "romaji": "hyaku",
    "meaning": "100 (백)",
    "level": "N5",
    "category": "basic",
    "example": {
      "japanese": "百つあります。",
      "reading": "ひゃくつ あります。",
      "korean": "100 (백)개 있습니다."
    }
  },
  {
    "id": "w_0400",
    "kanji": "千",
    "kana": "せん",
    "romaji": "sen",
    "meaning": "1000 (천)",
    "level": "N5",
    "category": "basic",
    "example": {
      "japanese": "千つあります。",
      "reading": "せんつ あります。",
      "korean": "1000 (천)개 있습니다."
    }
  },
  {
    "id": "w_0401",
    "kanji": "万",
    "kana": "まん",
    "romaji": "man",
    "meaning": "1만",
    "level": "N5",
    "category": "basic",
    "example": {
      "japanese": "万つあります。",
      "reading": "まんつ あります。",
      "korean": "1만개 있습니다."
    }
  },
  {
    "id": "w_0402",
    "kanji": "億",
    "kana": "おく",
    "romaji": "oku",
    "meaning": "1억",
    "level": "N4",
    "category": "basic",
    "example": {
      "japanese": "億つあります。",
      "reading": "おくつ あります。",
      "korean": "1억개 있습니다."
    }
  },
  {
    "id": "w_0403",
    "kanji": "兆",
    "kana": "ちょう",
    "romaji": "chou",
    "meaning": "1조",
    "level": "N1",
    "category": "basic",
    "example": {
      "japanese": "兆つあります。",
      "reading": "ちょうつ あります。",
      "korean": "1조개 있습니다."
    }
  },
  {
    "id": "w_0404",
    "kanji": "机",
    "kana": "つくえ",
    "romaji": "tsukue",
    "meaning": "책상",
    "level": "N5",
    "category": "daily",
    "example": {
      "japanese": "これは机です。",
      "reading": "これは つくえです。",
      "korean": "이것은 책상입니다."
    }
  },
  {
    "id": "w_0405",
    "kanji": "椅子",
    "kana": "いす",
    "romaji": "isu",
    "meaning": "의자",
    "level": "N5",
    "category": "daily",
    "example": {
      "japanese": "これは椅子です。",
      "reading": "これは いすです。",
      "korean": "이것은 의자입니다."
    }
  },
  {
    "id": "w_0406",
    "kanji": "ベッド",
    "kana": "べっど",
    "romaji": "beddo",
    "meaning": "침대",
    "level": "N5",
    "category": "daily",
    "example": {
      "japanese": "これはベッドです。",
      "reading": "これは べっどです。",
      "korean": "이것은 침대입니다."
    }
  },
  {
    "id": "w_0407",
    "kanji": "窓",
    "kana": "まど",
    "romaji": "mado",
    "meaning": "창문",
    "level": "N5",
    "category": "daily",
    "example": {
      "japanese": "これは窓です。",
      "reading": "これは まどです。",
      "korean": "이것은 창문입니다."
    }
  },
  {
    "id": "w_0408",
    "kanji": "ドア",
    "kana": "どあ",
    "romaji": "doa",
    "meaning": "문 (도어)",
    "level": "N5",
    "category": "daily",
    "example": {
      "japanese": "これはドアです。",
      "reading": "これは どあです。",
      "korean": "이것은 문 (도어)입니다."
    }
  },
  {
    "id": "w_0409",
    "kanji": "壁",
    "kana": "かべ",
    "romaji": "kabe",
    "meaning": "벽",
    "level": "N4",
    "category": "daily",
    "example": {
      "japanese": "これは壁です。",
      "reading": "これは かべです。",
      "korean": "이것은 벽입니다."
    }
  },
  {
    "id": "w_0410",
    "kanji": "床",
    "kana": "ゆか",
    "romaji": "yuka",
    "meaning": "바닥",
    "level": "N3",
    "category": "daily",
    "example": {
      "japanese": "これは床です。",
      "reading": "これは ゆかです。",
      "korean": "이것은 바닥입니다."
    }
  },
  {
    "id": "w_0411",
    "kanji": "天井",
    "kana": "てんじょう",
    "romaji": "tenjou",
    "meaning": "천장",
    "level": "N1",
    "category": "daily",
    "example": {
      "japanese": "これは天井です。",
      "reading": "これは てんじょうです。",
      "korean": "이것은 천장입니다."
    }
  },
  {
    "id": "w_0412",
    "kanji": "階段",
    "kana": "かいだん",
    "romaji": "kaidan",
    "meaning": "계단",
    "level": "N5",
    "category": "travel",
    "example": {
      "japanese": "これは階段です。",
      "reading": "これは かいだんです。",
      "korean": "이것은 계단입니다."
    }
  },
  {
    "id": "w_0413",
    "kanji": "エレベーター",
    "kana": "えれべーたー",
    "romaji": "erebeetaa",
    "meaning": "엘리베이터",
    "level": "N5",
    "category": "travel",
    "example": {
      "japanese": "これはエレベーターです。",
      "reading": "これは えれべーたーです。",
      "korean": "이것은 엘리베이터입니다."
    }
  },
  {
    "id": "w_0414",
    "kanji": "エスカレーター",
    "kana": "えすかれーたー",
    "romaji": "esukareetaa",
    "meaning": "에스컬레이터",
    "level": "N4",
    "category": "travel",
    "example": {
      "japanese": "これはエスカレーターです。",
      "reading": "これは えすかれーたーです。",
      "korean": "이것은 에스컬레이터입니다."
    }
  },
  {
    "id": "w_0415",
    "kanji": "テレビ",
    "kana": "てれび",
    "romaji": "terebi",
    "meaning": "텔레비전",
    "level": "N5",
    "category": "daily",
    "example": {
      "japanese": "これはテレビです。",
      "reading": "これは てれびです。",
      "korean": "이것은 텔레비전입니다."
    }
  },
  {
    "id": "w_0416",
    "kanji": "ラジオ",
    "kana": "らじお",
    "romaji": "rajio",
    "meaning": "라디오",
    "level": "N5",
    "category": "daily",
    "example": {
      "japanese": "これはラジオです。",
      "reading": "これは らじおです。",
      "korean": "이것은 라디오입니다."
    }
  },
  {
    "id": "w_0417",
    "kanji": "エアコン",
    "kana": "えあこん",
    "romaji": "eakon",
    "meaning": "에어컨",
    "level": "N5",
    "category": "daily",
    "example": {
      "japanese": "これはエアコンです。",
      "reading": "これは えあこんです。",
      "korean": "이것은 에어컨입니다."
    }
  },
  {
    "id": "w_0418",
    "kanji": "扇風機",
    "kana": "せんぷうき",
    "romaji": "senpuuki",
    "meaning": "선풍기",
    "level": "N2",
    "category": "daily",
    "example": {
      "japanese": "これは扇風機です。",
      "reading": "これは せんぷうきです。",
      "korean": "이것은 선풍기입니다."
    }
  },
  {
    "id": "w_0419",
    "kanji": "冷蔵庫",
    "kana": "れいぞうこ",
    "romaji": "reizouko",
    "meaning": "냉장고",
    "level": "N5",
    "category": "daily",
    "example": {
      "japanese": "これは冷蔵庫です。",
      "reading": "これは れいぞうこです。",
      "korean": "이것은 냉장고입니다."
    }
  },
  {
    "id": "w_0420",
    "kanji": "洗濯機",
    "kana": "せんたくき",
    "romaji": "sentakuki",
    "meaning": "세탁기",
    "level": "N5",
    "category": "daily",
    "example": {
      "japanese": "これは洗濯機です。",
      "reading": "これは せんたくきです。",
      "korean": "이것은 세탁기입니다."
    }
  },
  {
    "id": "w_0421",
    "kanji": "掃除機",
    "kana": "そうじき",
    "romaji": "soujiki",
    "meaning": "청소기",
    "level": "N4",
    "category": "daily",
    "example": {
      "japanese": "これは掃除機です。",
      "reading": "これは そうじきです。",
      "korean": "이것은 청소기입니다."
    }
  },
  {
    "id": "w_0422",
    "kanji": "電子レンジ",
    "kana": "でんしれんじ",
    "romaji": "denshirenji",
    "meaning": "전자레인지",
    "level": "N4",
    "category": "daily",
    "example": {
      "japanese": "これは電子レンジです。",
      "reading": "これは でんしれんじです。",
      "korean": "이것은 전자레인지입니다."
    }
  },
  {
    "id": "w_0423",
    "kanji": "炊飯器",
    "kana": "すいはんき",
    "romaji": "suihanki",
    "meaning": "밥솥",
    "level": "N4",
    "category": "daily",
    "example": {
      "japanese": "これは炊飯器です。",
      "reading": "これは すいはんきです。",
      "korean": "이것은 밥솥입니다."
    }
  },
  {
    "id": "w_0424",
    "kanji": "パソコン",
    "kana": "ぱそこん",
    "romaji": "pasokon",
    "meaning": "컴퓨터 (PC)",
    "level": "N4",
    "category": "daily",
    "example": {
      "japanese": "これはパソコンです。",
      "reading": "これは ぱそこんです。",
      "korean": "이것은 컴퓨터 (PC)입니다."
    }
  },
  {
    "id": "w_0425",
    "kanji": "スマホ",
    "kana": "すまほ",
    "romaji": "sumaho",
    "meaning": "스마트폰",
    "level": "N5",
    "category": "daily",
    "example": {
      "japanese": "これはスマホです。",
      "reading": "これは すまほです。",
      "korean": "이것은 스마트폰입니다."
    }
  },
  {
    "id": "w_0426",
    "kanji": "携帯電話",
    "kana": "けいたいでんわ",
    "romaji": "keitaidenwa",
    "meaning": "휴대전화",
    "level": "N5",
    "category": "daily",
    "example": {
      "japanese": "これは携帯電話です。",
      "reading": "これは けいたいでんわです。",
      "korean": "이것은 휴대전화입니다."
    }
  },
  {
    "id": "w_0427",
    "kanji": "充電器",
    "kana": "じゅうでんき",
    "romaji": "juudenki",
    "meaning": "충전기",
    "level": "N4",
    "category": "travel",
    "example": {
      "japanese": "これは充電器です。",
      "reading": "これは じゅうでんきです。",
      "korean": "이것은 충전기입니다."
    }
  },
  {
    "id": "w_0428",
    "kanji": "バッテリー",
    "kana": "ばってりー",
    "romaji": "batterii",
    "meaning": "배터리",
    "level": "N4",
    "category": "travel",
    "example": {
      "japanese": "これはバッテリーです。",
      "reading": "これは ばってりーです。",
      "korean": "이것은 배터리입니다."
    }
  },
  {
    "id": "w_0429",
    "kanji": "コンセント",
    "kana": "こんせんと",
    "romaji": "konsento",
    "meaning": "콘센트",
    "level": "N2",
    "category": "travel",
    "example": {
      "japanese": "これはコンセントです。",
      "reading": "これは こんせんとです。",
      "korean": "이것은 콘센트입니다."
    }
  },
  {
    "id": "w_0430",
    "kanji": "Wi-Fi",
    "kana": "わいふぁい",
    "romaji": "waifai",
    "meaning": "와이파이",
    "level": "N5",
    "category": "travel",
    "example": {
      "japanese": "これはWi-Fiです。",
      "reading": "これは わいふぁいです。",
      "korean": "이것은 와이파이입니다."
    }
  },
  {
    "id": "w_0431",
    "kanji": "パスワード",
    "kana": "ぱすわーど",
    "romaji": "pasuwaado",
    "meaning": "비밀번호 (패스워드)",
    "level": "N5",
    "category": "travel",
    "example": {
      "japanese": "これはパスワードです。",
      "reading": "これは ぱすわーどです。",
      "korean": "이것은 비밀번호 (패스워드)입니다."
    }
  },
  {
    "id": "w_0432",
    "kanji": "カメラ",
    "kana": "かめら",
    "romaji": "kamera",
    "meaning": "카메라",
    "level": "N5",
    "category": "travel",
    "example": {
      "japanese": "これはカメラです。",
      "reading": "これは かめらです。",
      "korean": "이것은 카메라입니다."
    }
  },
  {
    "id": "w_0433",
    "kanji": "写真",
    "kana": "しゃしん",
    "romaji": "shashin",
    "meaning": "사진",
    "level": "N5",
    "category": "travel",
    "example": {
      "japanese": "これは写真です。",
      "reading": "これは しゃしんです。",
      "korean": "이것은 사진입니다."
    }
  },
  {
    "id": "w_0434",
    "kanji": "アルバム",
    "kana": "あるばむ",
    "romaji": "arubamu",
    "meaning": "앨범",
    "level": "N3",
    "category": "daily",
    "example": {
      "japanese": "これはアルバムです。",
      "reading": "これは あるばむです。",
      "korean": "이것은 앨범입니다."
    }
  },
  {
    "id": "w_0435",
    "kanji": "手帳",
    "kana": "てちょう",
    "romaji": "techou",
    "meaning": "수첩",
    "level": "N2",
    "category": "daily",
    "example": {
      "japanese": "これは手帳です。",
      "reading": "これは てちょうです。",
      "korean": "이것은 수첩입니다."
    }
  },
  {
    "id": "w_0436",
    "kanji": "カレンダー",
    "kana": "かれんだー",
    "romaji": "karendaa",
    "meaning": "달력",
    "level": "N5",
    "category": "daily",
    "example": {
      "japanese": "これはカレンダーです。",
      "reading": "これは かれんだーです。",
      "korean": "이것은 달력입니다."
    }
  },
  {
    "id": "w_0437",
    "kanji": "鉛筆",
    "kana": "えんぴつ",
    "romaji": "enpitsu",
    "meaning": "연필",
    "level": "N5",
    "category": "daily",
    "example": {
      "japanese": "これは鉛筆です。",
      "reading": "これは えんぴつです。",
      "korean": "이것은 연필입니다."
    }
  },
  {
    "id": "w_0438",
    "kanji": "ボールペン",
    "kana": "ぼーるぺん",
    "romaji": "boorupen",
    "meaning": "볼펜",
    "level": "N5",
    "category": "daily",
    "example": {
      "japanese": "これはボールペンです。",
      "reading": "これは ぼーるぺんです。",
      "korean": "이것은 볼펜입니다."
    }
  },
  {
    "id": "w_0439",
    "kanji": "消しゴム",
    "kana": "けしごむ",
    "romaji": "keshigomu",
    "meaning": "지우개",
    "level": "N4",
    "category": "daily",
    "example": {
      "japanese": "これは消しゴムです。",
      "reading": "これは けしごむです。",
      "korean": "이것은 지우개입니다."
    }
  },
  {
    "id": "w_0440",
    "kanji": "ノート",
    "kana": "のーと",
    "romaji": "nooto",
    "meaning": "공책, 노트",
    "level": "N5",
    "category": "daily",
    "example": {
      "japanese": "これはノートです。",
      "reading": "これは のーとです。",
      "korean": "이것은 공책, 노트입니다."
    }
  },
  {
    "id": "w_0441",
    "kanji": "本",
    "kana": "ほん",
    "romaji": "hon",
    "meaning": "책",
    "level": "N5",
    "category": "daily",
    "example": {
      "japanese": "これは本です。",
      "reading": "これは ほんです。",
      "korean": "이것은 책입니다."
    }
  },
  {
    "id": "w_0442",
    "kanji": "雑誌",
    "kana": "ざっし",
    "romaji": "zasshi",
    "meaning": "잡지",
    "level": "N5",
    "category": "daily",
    "example": {
      "japanese": "これは雑誌です。",
      "reading": "これは ざっしです。",
      "korean": "이것은 잡지입니다."
    }
  },
  {
    "id": "w_0443",
    "kanji": "新聞",
    "kana": "しんぶん",
    "romaji": "shinbun",
    "meaning": "신문",
    "level": "N5",
    "category": "daily",
    "example": {
      "japanese": "これは新聞です。",
      "reading": "これは しんぶんです。",
      "korean": "이것은 신문입니다."
    }
  },
  {
    "id": "w_0444",
    "kanji": "辞書",
    "kana": "じしょ",
    "romaji": "jisho",
    "meaning": "사전",
    "level": "N5",
    "category": "daily",
    "example": {
      "japanese": "これは辞書です。",
      "reading": "これは じしょです。",
      "korean": "이것은 사전입니다."
    }
  },
  {
    "id": "w_0445",
    "kanji": "教科書",
    "kana": "きょうかしょ",
    "romaji": "kyoukasho",
    "meaning": "교과서",
    "level": "N3",
    "category": "daily",
    "example": {
      "japanese": "これは教科書です。",
      "reading": "これは きょうかしょです。",
      "korean": "이것은 교과서입니다."
    }
  },
  {
    "id": "w_0446",
    "kanji": "宿題",
    "kana": "しゅくだい",
    "romaji": "shukudai",
    "meaning": "숙제",
    "level": "N5",
    "category": "daily",
    "example": {
      "japanese": "これは宿題です。",
      "reading": "これは しゅくだいです。",
      "korean": "이것은 숙제입니다."
    }
  },
  {
    "id": "w_0447",
    "kanji": "試験",
    "kana": "しけん",
    "romaji": "shiken",
    "meaning": "시험",
    "level": "N4",
    "category": "daily",
    "example": {
      "japanese": "これは試験です。",
      "reading": "これは しけんです。",
      "korean": "이것은 시험입니다."
    }
  },
  {
    "id": "w_0448",
    "kanji": "質問",
    "kana": "しつもん",
    "romaji": "shitsumon",
    "meaning": "질문",
    "level": "N5",
    "category": "daily",
    "example": {
      "japanese": "これは質問です。",
      "reading": "これは しつもんです。",
      "korean": "이것은 질문입니다."
    }
  },
  {
    "id": "w_0449",
    "kanji": "答え",
    "kana": "こたえ",
    "romaji": "kotae",
    "meaning": "대답, 정답",
    "level": "N4",
    "category": "daily",
    "example": {
      "japanese": "これは答えです。",
      "reading": "これは こたえです。",
      "korean": "이것은 대답, 정답입니다."
    }
  },
  {
    "id": "w_0450",
    "kanji": "問題",
    "kana": "もんだい",
    "romaji": "mondai",
    "meaning": "문제",
    "level": "N5",
    "category": "daily",
    "example": {
      "japanese": "これは問題です。",
      "reading": "これは もんだいです。",
      "korean": "이것은 문제입니다."
    }
  },
  {
    "id": "w_0451",
    "kanji": "学校",
    "kana": "がっこう",
    "romaji": "gakkou",
    "meaning": "학교",
    "level": "N5",
    "category": "daily",
    "example": {
      "japanese": "これは学校です。",
      "reading": "これは がっこうです。",
      "korean": "이것은 학교입니다."
    }
  },
  {
    "id": "w_0452",
    "kanji": "大学",
    "kana": "だいがく",
    "romaji": "daigaku",
    "meaning": "대학교",
    "level": "N5",
    "category": "daily",
    "example": {
      "japanese": "これは大学です。",
      "reading": "これは だいがくです。",
      "korean": "이것은 대학교입니다."
    }
  },
  {
    "id": "w_0453",
    "kanji": "教室",
    "kana": "きょうしつ",
    "romaji": "kyoushitsu",
    "meaning": "교실",
    "level": "N5",
    "category": "daily",
    "example": {
      "japanese": "これは教室です。",
      "reading": "これは きょうしつです。",
      "korean": "이것은 교실입니다."
    }
  },
  {
    "id": "w_0454",
    "kanji": "先生",
    "kana": "せんせい",
    "romaji": "sensei",
    "meaning": "선생님",
    "level": "N5",
    "category": "daily",
    "example": {
      "japanese": "これは先生です。",
      "reading": "これは せんせいです。",
      "korean": "이것은 선생님입니다."
    }
  },
  {
    "id": "w_0455",
    "kanji": "学生",
    "kana": "がくせい",
    "romaji": "gakusei",
    "meaning": "학생",
    "level": "N5",
    "category": "daily",
    "example": {
      "japanese": "これは学生です。",
      "reading": "これは がくせいです。",
      "korean": "이것은 학생입니다."
    }
  },
  {
    "id": "w_0456",
    "kanji": "会社",
    "kana": "かいしゃ",
    "romaji": "kaisha",
    "meaning": "회사",
    "level": "N5",
    "category": "business",
    "example": {
      "japanese": "これは会社です。",
      "reading": "これは かいしゃです。",
      "korean": "이것은 회사입니다."
    }
  },
  {
    "id": "w_0457",
    "kanji": "社員",
    "kana": "しゃいん",
    "romaji": "shain",
    "meaning": "회사원",
    "level": "N5",
    "category": "business",
    "example": {
      "japanese": "これは社員です。",
      "reading": "これは しゃいんです。",
      "korean": "이것은 회사원입니다."
    }
  },
  {
    "id": "w_0458",
    "kanji": "社長",
    "kana": "しゃちょう",
    "romaji": "shachou",
    "meaning": "사장님",
    "level": "N4",
    "category": "business",
    "example": {
      "japanese": "これは社長です。",
      "reading": "これは しゃちょうです。",
      "korean": "이것은 사장님입니다."
    }
  },
  {
    "id": "w_0459",
    "kanji": "部長",
    "kana": "ぶちょう",
    "romaji": "buchou",
    "meaning": "부장님",
    "level": "N4",
    "category": "business",
    "example": {
      "japanese": "これは部長です。",
      "reading": "これは ぶちょうです。",
      "korean": "이것은 부장님입니다."
    }
  },
  {
    "id": "w_0460",
    "kanji": "課長",
    "kana": "かちょう",
    "romaji": "kachou",
    "meaning": "과장님",
    "level": "N4",
    "category": "business",
    "example": {
      "japanese": "これは課長です。",
      "reading": "これは かちょうです。",
      "korean": "이것은 과장님입니다."
    }
  },
  {
    "id": "w_0461",
    "kanji": "同僚",
    "kana": "どうりょう",
    "romaji": "douryou",
    "meaning": "동료",
    "level": "N3",
    "category": "business",
    "example": {
      "japanese": "これは同僚です。",
      "reading": "これは どうりょうです。",
      "korean": "이것은 동료입니다."
    }
  },
  {
    "id": "w_0462",
    "kanji": "先輩",
    "kana": "せんぱい",
    "romaji": "senpai",
    "meaning": "선배",
    "level": "N4",
    "category": "daily",
    "example": {
      "japanese": "これは先輩です。",
      "reading": "これは せんぱいです。",
      "korean": "이것은 선배입니다."
    }
  },
  {
    "id": "w_0463",
    "kanji": "後輩",
    "kana": "こうはい",
    "romaji": "kouhai",
    "meaning": "후배",
    "level": "N2",
    "category": "daily",
    "example": {
      "japanese": "これは後輩です。",
      "reading": "これは こうはいです。",
      "korean": "이것은 후배입니다."
    }
  },
  {
    "id": "w_0464",
    "kanji": "計画",
    "kana": "けいかく",
    "romaji": "けいかく",
    "meaning": "계획",
    "level": "N4",
    "category": "travel",
    "example": {
      "japanese": "この計画について考えます。",
      "reading": "この けいかくについて かんがえます。",
      "korean": "이 계획에 대해 생각합니다."
    }
  },
  {
    "id": "w_0465",
    "kanji": "旅行",
    "kana": "りょこう",
    "romaji": "りょこう",
    "meaning": "여행",
    "level": "N5",
    "category": "daily",
    "example": {
      "japanese": "この旅行について考えます。",
      "reading": "この りょこうについて かんがえます。",
      "korean": "이 여행에 대해 생각합니다."
    }
  },
  {
    "id": "w_0466",
    "kanji": "記録",
    "kana": "きろく",
    "romaji": "きろく",
    "meaning": "기록",
    "level": "N3",
    "category": "food",
    "example": {
      "japanese": "この記録について考えます。",
      "reading": "この きろくについて かんがえます。",
      "korean": "이 기록에 대해 생각합니다."
    }
  },
  {
    "id": "w_0467",
    "kanji": "発見",
    "kana": "はっけん",
    "romaji": "はっけん",
    "meaning": "발견",
    "level": "N3",
    "category": "business",
    "example": {
      "japanese": "この発見について考えます。",
      "reading": "この はっけんについて かんがえます。",
      "korean": "이 발견에 대해 생각합니다."
    }
  },
  {
    "id": "w_0468",
    "kanji": "生活",
    "kana": "せいかつ",
    "romaji": "せいかつ",
    "meaning": "생활",
    "level": "N4",
    "category": "travel",
    "example": {
      "japanese": "この生活について考えます。",
      "reading": "この せいかつについて かんがえます。",
      "korean": "이 생활에 대해 생각합니다."
    }
  },
  {
    "id": "w_0469",
    "kanji": "活動",
    "kana": "かつどう",
    "romaji": "かつどう",
    "meaning": "활동",
    "level": "N3",
    "category": "daily",
    "example": {
      "japanese": "この活動について考えます。",
      "reading": "この かつどうについて かんがえます。",
      "korean": "이 활동에 대해 생각합니다."
    }
  },
  {
    "id": "w_0470",
    "kanji": "行動",
    "kana": "こうどう",
    "romaji": "こうどう",
    "meaning": "행동",
    "level": "N3",
    "category": "food",
    "example": {
      "japanese": "この行動について考えます。",
      "reading": "この こうどうについて かんがえます。",
      "korean": "이 행동에 대해 생각합니다."
    }
  },
  {
    "id": "w_0471",
    "kanji": "希望",
    "kana": "きぼう",
    "romaji": "きぼう",
    "meaning": "희망",
    "level": "N3",
    "category": "business",
    "example": {
      "japanese": "この希望について考えます。",
      "reading": "この きぼうについて かんがえます。",
      "korean": "이 희망에 대해 생각합니다."
    }
  },
  {
    "id": "w_0472",
    "kanji": "成功",
    "kana": "せいこう",
    "romaji": "せいこう",
    "meaning": "성공",
    "level": "N3",
    "category": "travel",
    "example": {
      "japanese": "この成功について考えます。",
      "reading": "この せいこうについて かんがえます。",
      "korean": "이 성공에 대해 생각합니다."
    }
  },
  {
    "id": "w_0473",
    "kanji": "失敗",
    "kana": "しっぱい",
    "romaji": "しっぱい",
    "meaning": "실패",
    "level": "N4",
    "category": "daily",
    "example": {
      "japanese": "この失敗について考えます。",
      "reading": "この しっぱいについて かんがえます。",
      "korean": "이 실패에 대해 생각합니다."
    }
  },
  {
    "id": "w_0474",
    "kanji": "感謝",
    "kana": "かんしゃ",
    "romaji": "かんしゃ",
    "meaning": "감사",
    "level": "N3",
    "category": "food",
    "example": {
      "japanese": "この感謝について考えます。",
      "reading": "この かんしゃについて かんがえます。",
      "korean": "이 감사에 대해 생각합니다."
    }
  },
  {
    "id": "w_0475",
    "kanji": "尊敬",
    "kana": "そんけい",
    "romaji": "そんけい",
    "meaning": "존경",
    "level": "N3",
    "category": "business",
    "example": {
      "japanese": "この尊敬について考えます。",
      "reading": "この そんけいについて かんがえます。",
      "korean": "이 존경에 대해 생각합니다."
    }
  },
  {
    "id": "w_0476",
    "kanji": "愛情",
    "kana": "あいじょう",
    "romaji": "あいじょう",
    "meaning": "애정",
    "level": "N3",
    "category": "travel",
    "example": {
      "japanese": "この愛情について考えます。",
      "reading": "この あいじょうについて かんがえます。",
      "korean": "이 애정에 대해 생각합니다."
    }
  },
  {
    "id": "w_0477",
    "kanji": "友情",
    "kana": "ゆうじょう",
    "romaji": "ゆうじょう",
    "meaning": "우정",
    "level": "N3",
    "category": "daily",
    "example": {
      "japanese": "この友情について考えます。",
      "reading": "この ゆうじょうについて かんがえます。",
      "korean": "이 우정에 대해 생각합니다."
    }
  },
  {
    "id": "w_0478",
    "kanji": "関係",
    "kana": "かんけい",
    "romaji": "かんけい",
    "meaning": "관계",
    "level": "N4",
    "category": "food",
    "example": {
      "japanese": "この関係について考えます。",
      "reading": "この かんけいについて かんがえます。",
      "korean": "이 관계에 대해 생각합니다."
    }
  },
  {
    "id": "w_0479",
    "kanji": "結果",
    "kana": "けっか",
    "romaji": "けっか",
    "meaning": "결과",
    "level": "N3",
    "category": "business",
    "example": {
      "japanese": "この結果について考えます。",
      "reading": "この けっかについて かんがえます。",
      "korean": "이 결과에 대해 생각합니다."
    }
  },
  {
    "id": "w_0480",
    "kanji": "原因",
    "kana": "げんいん",
    "romaji": "げんいん",
    "meaning": "원인",
    "level": "N4",
    "category": "travel",
    "example": {
      "japanese": "この原因について考えます。",
      "reading": "この げんいんについて かんがえます。",
      "korean": "이 원인에 대해 생각합니다."
    }
  },
  {
    "id": "w_0481",
    "kanji": "理由",
    "kana": "りゆう",
    "romaji": "りゆう",
    "meaning": "이유",
    "level": "N4",
    "category": "daily",
    "example": {
      "japanese": "この理由について考えます。",
      "reading": "この りゆうについて かんがえます。",
      "korean": "이 이유에 대해 생각합니다."
    }
  },
  {
    "id": "w_0482",
    "kanji": "目的",
    "kana": "もくてき",
    "romaji": "もくてき",
    "meaning": "목적",
    "level": "N3",
    "category": "food",
    "example": {
      "japanese": "この目的について考えます。",
      "reading": "この もくてきについて かんがえます。",
      "korean": "이 목적에 대해 생각합니다."
    }
  },
  {
    "id": "w_0483",
    "kanji": "目標",
    "kana": "もくひょう",
    "romaji": "もくひょう",
    "meaning": "목표",
    "level": "N3",
    "category": "business",
    "example": {
      "japanese": "この目標について考えます。",
      "reading": "この もくひょうについて かんがえます。",
      "korean": "이 목표에 대해 생각합니다."
    }
  },
  {
    "id": "w_0484",
    "kanji": "意見",
    "kana": "いけん",
    "romaji": "いけん",
    "meaning": "의견",
    "level": "N4",
    "category": "travel",
    "example": {
      "japanese": "この意見について考えます。",
      "reading": "この いけんについて かんがえます。",
      "korean": "이 의견에 대해 생각합니다."
    }
  },
  {
    "id": "w_0485",
    "kanji": "考え",
    "kana": "かんがえ",
    "romaji": "かんがえ",
    "meaning": "생각",
    "level": "N3",
    "category": "daily",
    "example": {
      "japanese": "この考えについて考えます。",
      "reading": "この かんがえについて かんがえます。",
      "korean": "이 생각에 대해 생각합니다."
    }
  },
  {
    "id": "w_0486",
    "kanji": "感情",
    "kana": "かんじょう",
    "romaji": "かんじょう",
    "meaning": "감정",
    "level": "N3",
    "category": "food",
    "example": {
      "japanese": "この感情について考えます。",
      "reading": "この かんじょうについて かんがえます。",
      "korean": "이 감정에 대해 생각합니다."
    }
  },
  {
    "id": "w_0487",
    "kanji": "表現",
    "kana": "ひょうげん",
    "romaji": "ひょうげん",
    "meaning": "표현",
    "level": "N3",
    "category": "business",
    "example": {
      "japanese": "この表現について考えます。",
      "reading": "この ひょうげんについて かんがえます。",
      "korean": "이 표현에 대해 생각합니다."
    }
  },
  {
    "id": "w_0488",
    "kanji": "説明",
    "kana": "せつめい",
    "romaji": "せつめい",
    "meaning": "설명",
    "level": "N4",
    "category": "travel",
    "example": {
      "japanese": "この説明について考えます。",
      "reading": "この せつめいについて かんがえます。",
      "korean": "이 설명에 대해 생각합니다."
    }
  },
  {
    "id": "w_0489",
    "kanji": "案内",
    "kana": "あんない",
    "romaji": "あんない",
    "meaning": "안내",
    "level": "N4",
    "category": "daily",
    "example": {
      "japanese": "この案内について考えます。",
      "reading": "この あんないについて かんがえます。",
      "korean": "이 안내에 대해 생각합니다."
    }
  },
  {
    "id": "w_0490",
    "kanji": "紹介",
    "kana": "しょうかい",
    "romaji": "しょうかい",
    "meaning": "소개",
    "level": "N4",
    "category": "food",
    "example": {
      "japanese": "この紹介について考えます。",
      "reading": "この しょうかいについて かんがえます。",
      "korean": "이 소개에 대해 생각합니다."
    }
  },
  {
    "id": "w_0491",
    "kanji": "歓迎",
    "kana": "かんげい",
    "romaji": "かんげい",
    "meaning": "환영",
    "level": "N3",
    "category": "business",
    "example": {
      "japanese": "この歓迎について考えます。",
      "reading": "この かんげいについて かんがえます。",
      "korean": "이 환영에 대해 생각합니다."
    }
  },
  {
    "id": "w_0492",
    "kanji": "招待",
    "kana": "しょうたい",
    "romaji": "しょうたい",
    "meaning": "초대",
    "level": "N4",
    "category": "travel",
    "example": {
      "japanese": "この招待について考えます。",
      "reading": "この しょうたいについて かんがえます。",
      "korean": "이 초대에 대해 생각합니다."
    }
  },
  {
    "id": "w_0493",
    "kanji": "訪問",
    "kana": "ほうもん",
    "romaji": "ほうもん",
    "meaning": "방문",
    "level": "N3",
    "category": "daily",
    "example": {
      "japanese": "この訪問について考えます。",
      "reading": "この ほうもんについて かんがえます。",
      "korean": "이 방문에 대해 생각합니다."
    }
  },
  {
    "id": "w_0494",
    "kanji": "見学",
    "kana": "けんがく",
    "romaji": "けんがく",
    "meaning": "견학",
    "level": "N2",
    "category": "food",
    "example": {
      "japanese": "この見学について考えます。",
      "reading": "この けんがくについて かんがえます。",
      "korean": "이 견학에 대해 생각합니다."
    }
  },
  {
    "id": "w_0495",
    "kanji": "見物",
    "kana": "けんぶつ",
    "romaji": "けんぶつ",
    "meaning": "구경",
    "level": "N4",
    "category": "business",
    "example": {
      "japanese": "この見物について考えます。",
      "reading": "この けんぶつについて かんがえます。",
      "korean": "이 구경에 대해 생각합니다."
    }
  },
  {
    "id": "w_0496",
    "kanji": "散策",
    "kana": "さんさく",
    "romaji": "さんさく",
    "meaning": "산책, 산책길",
    "level": "N5",
    "category": "travel",
    "example": {
      "japanese": "この散策について考えます。",
      "reading": "この さんさくについて かんがえます。",
      "korean": "이 산책, 산책길에 대해 생각합니다."
    }
  },
  {
    "id": "w_0497",
    "kanji": "移動",
    "kana": "いどう",
    "romaji": "いどう",
    "meaning": "이동",
    "level": "N3",
    "category": "daily",
    "example": {
      "japanese": "この移動について考えます。",
      "reading": "この いどうについて かんがえます。",
      "korean": "이 이동에 대해 생각합니다."
    }
  },
  {
    "id": "w_0498",
    "kanji": "出発",
    "kana": "しゅっぱつ",
    "romaji": "しゅっぱつ",
    "meaning": "출발",
    "level": "N4",
    "category": "food",
    "example": {
      "japanese": "この出発について考えます。",
      "reading": "この しゅっぱつについて かんがえます。",
      "korean": "이 출발에 대해 생각합니다."
    }
  },
  {
    "id": "w_0499",
    "kanji": "到着",
    "kana": "とうちゃく",
    "romaji": "とうちゃく",
    "meaning": "도착",
    "level": "N3",
    "category": "business",
    "example": {
      "japanese": "この到着について考えます。",
      "reading": "この とうちゃくについて かんがえます。",
      "korean": "이 도착에 대해 생각합니다."
    }
  },
  {
    "id": "w_0500",
    "kanji": "通過",
    "kana": "つうか",
    "romaji": "つうか",
    "meaning": "통과",
    "level": "N3",
    "category": "travel",
    "example": {
      "japanese": "この通過について考えます。",
      "reading": "この つうかについて かんがえます。",
      "korean": "이 통과에 대해 생각합니다."
    }
  },
  {
    "id": "w_0501",
    "kanji": "入場",
    "kana": "にゅうじょう",
    "romaji": "にゅうじょう",
    "meaning": "입장",
    "level": "N3",
    "category": "daily",
    "example": {
      "japanese": "この入場について考えます。",
      "reading": "この にゅうじょうについて かんがえます。",
      "korean": "이 입장에 대해 생각합니다."
    }
  },
  {
    "id": "w_0502",
    "kanji": "退場",
    "kana": "たいじょう",
    "romaji": "たいじょう",
    "meaning": "퇴장",
    "level": "N5",
    "category": "food",
    "example": {
      "japanese": "この退場について考えます。",
      "reading": "この たいじょうについて かんがえます。",
      "korean": "이 퇴장에 대해 생각합니다."
    }
  },
  {
    "id": "w_0503",
    "kanji": "禁止",
    "kana": "きんし",
    "romaji": "きんし",
    "meaning": "금지",
    "level": "N3",
    "category": "business",
    "example": {
      "japanese": "この禁止について考えます。",
      "reading": "この きんしについて かんがえます。",
      "korean": "이 금지에 대해 생각합니다."
    }
  },
  {
    "id": "w_0504",
    "kanji": "許可",
    "kana": "きょか",
    "romaji": "きょか",
    "meaning": "허가",
    "level": "N3",
    "category": "travel",
    "example": {
      "japanese": "この許可について考えます。",
      "reading": "この きょかについて かんがえます。",
      "korean": "이 허가에 대해 생각합니다."
    }
  },
  {
    "id": "w_0505",
    "kanji": "自由",
    "kana": "じゆう",
    "romaji": "じゆう",
    "meaning": "자유",
    "level": "N4",
    "category": "daily",
    "example": {
      "japanese": "この自由について考えます。",
      "reading": "この じゆうについて かんがえます。",
      "korean": "이 자유에 대해 생각합니다."
    }
  },
  {
    "id": "w_0506",
    "kanji": "便利",
    "kana": "べんり",
    "romaji": "べんり",
    "meaning": "편리",
    "level": "N5",
    "category": "food",
    "example": {
      "japanese": "この便利について考えます。",
      "reading": "この べんりについて かんがえます。",
      "korean": "이 편리에 대해 생각합니다."
    }
  },
  {
    "id": "w_0507",
    "kanji": "快適",
    "kana": "かいてき",
    "romaji": "かいてき",
    "meaning": "쾌적",
    "level": "N3",
    "category": "business",
    "example": {
      "japanese": "この快適について考えます。",
      "reading": "この かいてきについて かんがえます。",
      "korean": "이 쾌적에 대해 생각합니다."
    }
  },
  {
    "id": "w_0508",
    "kanji": "新鮮",
    "kana": "しんせん",
    "romaji": "しんせん",
    "meaning": "신선",
    "level": "N3",
    "category": "travel",
    "example": {
      "japanese": "この新鮮について考えます。",
      "reading": "この しんせんについて かんがえます。",
      "korean": "이 신선에 대해 생각합니다."
    }
  },
  {
    "id": "w_0509",
    "kanji": "清潔",
    "kana": "せいけつ",
    "romaji": "せいけつ",
    "meaning": "청결",
    "level": "N3",
    "category": "daily",
    "example": {
      "japanese": "この清潔について考えます。",
      "reading": "この せいけつについて かんがえます。",
      "korean": "이 청결에 대해 생각합니다."
    }
  },
  {
    "id": "w_0510",
    "kanji": "綺麗",
    "kana": "きれい",
    "romaji": "きれい",
    "meaning": "예쁨, 깨끗함",
    "level": "N5",
    "category": "food",
    "example": {
      "japanese": "この綺麗について考えます。",
      "reading": "この きれいについて かんがえます。",
      "korean": "이 예쁨, 깨끗함에 대해 생각합니다."
    }
  },
  {
    "id": "w_0511",
    "kanji": "豊富",
    "kana": "ほうふ",
    "romaji": "ほうふ",
    "meaning": "풍부",
    "level": "N3",
    "category": "business",
    "example": {
      "japanese": "この豊富について考えます。",
      "reading": "この ほうふについて かんがえます。",
      "korean": "이 풍부에 대해 생각합니다."
    }
  },
  {
    "id": "w_0512",
    "kanji": "貴重",
    "kana": "きちょう",
    "romaji": "きちょう",
    "meaning": "귀중",
    "level": "N3",
    "category": "travel",
    "example": {
      "japanese": "この貴重について考えます。",
      "reading": "この きちょうについて かんがえます。",
      "korean": "이 귀중에 대해 생각합니다."
    }
  },
  {
    "id": "w_0513",
    "kanji": "重要",
    "kana": "じゅうよう",
    "romaji": "じゅうよう",
    "meaning": "중요",
    "level": "N3",
    "category": "daily",
    "example": {
      "japanese": "この重要について考えます。",
      "reading": "この じゅうようについて かんがえます。",
      "korean": "이 중요에 대해 생각합니다."
    }
  },
  {
    "id": "w_0514",
    "kanji": "計画",
    "kana": "けいかく",
    "romaji": "けいかく",
    "meaning": "계획",
    "level": "N4",
    "category": "food",
    "example": {
      "japanese": "この計画について考えます。",
      "reading": "この けいかくについて かんがえます。",
      "korean": "이 계획에 대해 생각합니다."
    }
  },
  {
    "id": "w_0515",
    "kanji": "旅行",
    "kana": "りょこう",
    "romaji": "りょこう",
    "meaning": "여행",
    "level": "N5",
    "category": "business",
    "example": {
      "japanese": "この旅行について考えます。",
      "reading": "この りょこうについて かんがえます。",
      "korean": "이 여행에 대해 생각합니다."
    }
  },
  {
    "id": "w_0516",
    "kanji": "記録",
    "kana": "きろく",
    "romaji": "きろく",
    "meaning": "기록",
    "level": "N3",
    "category": "travel",
    "example": {
      "japanese": "この記録について考えます。",
      "reading": "この きろくについて かんがえます。",
      "korean": "이 기록에 대해 생각합니다."
    }
  },
  {
    "id": "w_0517",
    "kanji": "発見",
    "kana": "はっけん",
    "romaji": "はっけん",
    "meaning": "발견",
    "level": "N3",
    "category": "daily",
    "example": {
      "japanese": "この発見について考えます。",
      "reading": "この はっけんについて かんがえます。",
      "korean": "이 발견에 대해 생각합니다."
    }
  },
  {
    "id": "w_0518",
    "kanji": "生活",
    "kana": "せいかつ",
    "romaji": "せいかつ",
    "meaning": "생활",
    "level": "N4",
    "category": "food",
    "example": {
      "japanese": "この生活について考えます。",
      "reading": "この せいかつについて かんがえます。",
      "korean": "이 생활에 대해 생각합니다."
    }
  },
  {
    "id": "w_0519",
    "kanji": "活動",
    "kana": "かつどう",
    "romaji": "かつどう",
    "meaning": "활동",
    "level": "N3",
    "category": "business",
    "example": {
      "japanese": "この活動について考えます。",
      "reading": "この かつどうについて かんがえます。",
      "korean": "이 활동에 대해 생각합니다."
    }
  },
  {
    "id": "w_0520",
    "kanji": "行動",
    "kana": "こうどう",
    "romaji": "こうどう",
    "meaning": "행동",
    "level": "N3",
    "category": "travel",
    "example": {
      "japanese": "この行動について考えます。",
      "reading": "この こうどうについて かんがえます。",
      "korean": "이 행동에 대해 생각합니다."
    }
  },
  {
    "id": "w_0521",
    "kanji": "希望",
    "kana": "きぼう",
    "romaji": "きぼう",
    "meaning": "희망",
    "level": "N3",
    "category": "daily",
    "example": {
      "japanese": "この希望について考えます。",
      "reading": "この きぼうについて かんがえます。",
      "korean": "이 희망에 대해 생각합니다."
    }
  },
  {
    "id": "w_0522",
    "kanji": "成功",
    "kana": "せいこう",
    "romaji": "せいこう",
    "meaning": "성공",
    "level": "N3",
    "category": "food",
    "example": {
      "japanese": "この成功について考えます。",
      "reading": "この せいこうについて かんがえます。",
      "korean": "이 성공에 대해 생각합니다."
    }
  },
  {
    "id": "w_0523",
    "kanji": "失敗",
    "kana": "しっぱい",
    "romaji": "しっぱい",
    "meaning": "실패",
    "level": "N4",
    "category": "business",
    "example": {
      "japanese": "この失敗について考えます。",
      "reading": "この しっぱいについて かんがえます。",
      "korean": "이 실패에 대해 생각합니다."
    }
  },
  {
    "id": "w_0524",
    "kanji": "感謝",
    "kana": "かんしゃ",
    "romaji": "かんしゃ",
    "meaning": "감사",
    "level": "N3",
    "category": "travel",
    "example": {
      "japanese": "この感謝について考えます。",
      "reading": "この かんしゃについて かんがえます。",
      "korean": "이 감사에 대해 생각합니다."
    }
  },
  {
    "id": "w_0525",
    "kanji": "尊敬",
    "kana": "そんけい",
    "romaji": "そんけい",
    "meaning": "존경",
    "level": "N3",
    "category": "daily",
    "example": {
      "japanese": "この尊敬について考えます。",
      "reading": "この そんけいについて かんがえます。",
      "korean": "이 존경에 대해 생각합니다."
    }
  },
  {
    "id": "w_0526",
    "kanji": "愛情",
    "kana": "あいじょう",
    "romaji": "あいじょう",
    "meaning": "애정",
    "level": "N3",
    "category": "food",
    "example": {
      "japanese": "この愛情について考えます。",
      "reading": "この あいじょうについて かんがえます。",
      "korean": "이 애정에 대해 생각합니다."
    }
  },
  {
    "id": "w_0527",
    "kanji": "友情",
    "kana": "ゆうじょう",
    "romaji": "ゆうじょう",
    "meaning": "우정",
    "level": "N3",
    "category": "business",
    "example": {
      "japanese": "この友情について考えます。",
      "reading": "この ゆうじょうについて かんがえます。",
      "korean": "이 우정에 대해 생각합니다."
    }
  },
  {
    "id": "w_0528",
    "kanji": "関係",
    "kana": "かんけい",
    "romaji": "かんけい",
    "meaning": "관계",
    "level": "N4",
    "category": "travel",
    "example": {
      "japanese": "この関係について考えます。",
      "reading": "この かんけいについて かんがえます。",
      "korean": "이 관계에 대해 생각합니다."
    }
  },
  {
    "id": "w_0529",
    "kanji": "結果",
    "kana": "けっか",
    "romaji": "けっか",
    "meaning": "결과",
    "level": "N3",
    "category": "daily",
    "example": {
      "japanese": "この結果について考えます。",
      "reading": "この けっかについて かんがえます。",
      "korean": "이 결과에 대해 생각합니다."
    }
  },
  {
    "id": "w_0530",
    "kanji": "原因",
    "kana": "げんいん",
    "romaji": "げんいん",
    "meaning": "원인",
    "level": "N4",
    "category": "food",
    "example": {
      "japanese": "この原因について考えます。",
      "reading": "この げんいんについて かんがえます。",
      "korean": "이 원인에 대해 생각합니다."
    }
  },
  {
    "id": "w_0531",
    "kanji": "理由",
    "kana": "りゆう",
    "romaji": "りゆう",
    "meaning": "이유",
    "level": "N4",
    "category": "business",
    "example": {
      "japanese": "この理由について考えます。",
      "reading": "この りゆうについて かんがえます。",
      "korean": "이 이유에 대해 생각합니다."
    }
  },
  {
    "id": "w_0532",
    "kanji": "目的",
    "kana": "もくてき",
    "romaji": "もくてき",
    "meaning": "목적",
    "level": "N3",
    "category": "travel",
    "example": {
      "japanese": "この目的について考えます。",
      "reading": "この もくてきについて かんがえます。",
      "korean": "이 목적에 대해 생각합니다."
    }
  },
  {
    "id": "w_0533",
    "kanji": "目標",
    "kana": "もくひょう",
    "romaji": "もくひょう",
    "meaning": "목표",
    "level": "N3",
    "category": "daily",
    "example": {
      "japanese": "この目標について考えます。",
      "reading": "この もくひょうについて かんがえます。",
      "korean": "이 목표에 대해 생각합니다."
    }
  },
  {
    "id": "w_0534",
    "kanji": "意見",
    "kana": "いけん",
    "romaji": "いけん",
    "meaning": "의견",
    "level": "N4",
    "category": "food",
    "example": {
      "japanese": "この意見について考えます。",
      "reading": "この いけんについて かんがえます。",
      "korean": "이 의견에 대해 생각합니다."
    }
  },
  {
    "id": "w_0535",
    "kanji": "考え",
    "kana": "かんがえ",
    "romaji": "かんがえ",
    "meaning": "생각",
    "level": "N3",
    "category": "business",
    "example": {
      "japanese": "この考えについて考えます。",
      "reading": "この かんがえについて かんがえます。",
      "korean": "이 생각에 대해 생각합니다."
    }
  },
  {
    "id": "w_0536",
    "kanji": "感情",
    "kana": "かんじょう",
    "romaji": "かんじょう",
    "meaning": "감정",
    "level": "N3",
    "category": "travel",
    "example": {
      "japanese": "この感情について考えます。",
      "reading": "この かんじょうについて かんがえます。",
      "korean": "이 감정에 대해 생각합니다."
    }
  },
  {
    "id": "w_0537",
    "kanji": "表現",
    "kana": "ひょうげん",
    "romaji": "ひょうげん",
    "meaning": "표현",
    "level": "N3",
    "category": "daily",
    "example": {
      "japanese": "この表現について考えます。",
      "reading": "この ひょうげんについて かんがえます。",
      "korean": "이 표현에 대해 생각합니다."
    }
  },
  {
    "id": "w_0538",
    "kanji": "説明",
    "kana": "せつめい",
    "romaji": "せつめい",
    "meaning": "설명",
    "level": "N4",
    "category": "food",
    "example": {
      "japanese": "この説明について考えます。",
      "reading": "この せつめいについて かんがえます。",
      "korean": "이 설명에 대해 생각합니다."
    }
  },
  {
    "id": "w_0539",
    "kanji": "案内",
    "kana": "あんない",
    "romaji": "あんない",
    "meaning": "안내",
    "level": "N4",
    "category": "business",
    "example": {
      "japanese": "この案内について考えます。",
      "reading": "この あんないについて かんがえます。",
      "korean": "이 안내에 대해 생각합니다."
    }
  },
  {
    "id": "w_0540",
    "kanji": "紹介",
    "kana": "しょうかい",
    "romaji": "しょうかい",
    "meaning": "소개",
    "level": "N4",
    "category": "travel",
    "example": {
      "japanese": "この紹介について考えます。",
      "reading": "この しょうかいについて かんがえます。",
      "korean": "이 소개에 대해 생각합니다."
    }
  },
  {
    "id": "w_0541",
    "kanji": "歓迎",
    "kana": "かんげい",
    "romaji": "かんげい",
    "meaning": "환영",
    "level": "N3",
    "category": "daily",
    "example": {
      "japanese": "この歓迎について考えます。",
      "reading": "この かんげいについて かんがえます。",
      "korean": "이 환영에 대해 생각합니다."
    }
  },
  {
    "id": "w_0542",
    "kanji": "招待",
    "kana": "しょうたい",
    "romaji": "しょうたい",
    "meaning": "초대",
    "level": "N4",
    "category": "food",
    "example": {
      "japanese": "この招待について考えます。",
      "reading": "この しょうたいについて かんがえます。",
      "korean": "이 초대에 대해 생각합니다."
    }
  },
  {
    "id": "w_0543",
    "kanji": "訪問",
    "kana": "ほうもん",
    "romaji": "ほうもん",
    "meaning": "방문",
    "level": "N3",
    "category": "business",
    "example": {
      "japanese": "この訪問について考えます。",
      "reading": "この ほうもんについて かんがえます。",
      "korean": "이 방문에 대해 생각합니다."
    }
  },
  {
    "id": "w_0544",
    "kanji": "見学",
    "kana": "けんがく",
    "romaji": "けんがく",
    "meaning": "견학",
    "level": "N2",
    "category": "travel",
    "example": {
      "japanese": "この見学について考えます。",
      "reading": "この けんがくについて かんがえます。",
      "korean": "이 견학에 대해 생각합니다."
    }
  },
  {
    "id": "w_0545",
    "kanji": "見物",
    "kana": "けんぶつ",
    "romaji": "けんぶつ",
    "meaning": "구경",
    "level": "N4",
    "category": "daily",
    "example": {
      "japanese": "この見物について考えます。",
      "reading": "この けんぶつについて かんがえます。",
      "korean": "이 구경에 대해 생각합니다."
    }
  },
  {
    "id": "w_0546",
    "kanji": "散策",
    "kana": "さんさく",
    "romaji": "さんさく",
    "meaning": "산책, 산책길",
    "level": "N4",
    "category": "food",
    "example": {
      "japanese": "この散策について考えます。",
      "reading": "この さんさくについて かんがえます。",
      "korean": "이 산책, 산책길에 대해 생각합니다."
    }
  },
  {
    "id": "w_0547",
    "kanji": "移動",
    "kana": "いどう",
    "romaji": "いどう",
    "meaning": "이동",
    "level": "N3",
    "category": "business",
    "example": {
      "japanese": "この移動について考えます。",
      "reading": "この いどうについて かんがえます。",
      "korean": "이 이동에 대해 생각합니다."
    }
  },
  {
    "id": "w_0548",
    "kanji": "出発",
    "kana": "しゅっぱつ",
    "romaji": "しゅっぱつ",
    "meaning": "출발",
    "level": "N4",
    "category": "travel",
    "example": {
      "japanese": "この出発について考えます。",
      "reading": "この しゅっぱつについて かんがえます。",
      "korean": "이 출발에 대해 생각합니다."
    }
  },
  {
    "id": "w_0549",
    "kanji": "到着",
    "kana": "とうちゃく",
    "romaji": "とうちゃく",
    "meaning": "도착",
    "level": "N3",
    "category": "daily",
    "example": {
      "japanese": "この到着について考えます。",
      "reading": "この とうちゃくについて かんがえます。",
      "korean": "이 도착에 대해 생각합니다."
    }
  },
  {
    "id": "w_0550",
    "kanji": "通過",
    "kana": "つうか",
    "romaji": "つうか",
    "meaning": "통과",
    "level": "N3",
    "category": "food",
    "example": {
      "japanese": "この通過について考えます。",
      "reading": "この つうかについて かんがえます。",
      "korean": "이 통과에 대해 생각합니다."
    }
  },
  {
    "id": "w_0551",
    "kanji": "入場",
    "kana": "にゅうじょう",
    "romaji": "にゅうじょう",
    "meaning": "입장",
    "level": "N3",
    "category": "business",
    "example": {
      "japanese": "この入場について考えます。",
      "reading": "この にゅうじょうについて かんがえます。",
      "korean": "이 입장에 대해 생각합니다."
    }
  },
  {
    "id": "w_0552",
    "kanji": "退場",
    "kana": "たいじょう",
    "romaji": "たいじょう",
    "meaning": "퇴장",
    "level": "N4",
    "category": "travel",
    "example": {
      "japanese": "この退場について考えます。",
      "reading": "この たいじょうについて かんがえます。",
      "korean": "이 퇴장에 대해 생각합니다."
    }
  },
  {
    "id": "w_0553",
    "kanji": "禁止",
    "kana": "きんし",
    "romaji": "きんし",
    "meaning": "금지",
    "level": "N3",
    "category": "daily",
    "example": {
      "japanese": "この禁止について考えます。",
      "reading": "この きんしについて かんがえます。",
      "korean": "이 금지에 대해 생각합니다."
    }
  },
  {
    "id": "w_0554",
    "kanji": "許可",
    "kana": "きょか",
    "romaji": "きょか",
    "meaning": "허가",
    "level": "N3",
    "category": "food",
    "example": {
      "japanese": "この許可について考えます。",
      "reading": "この きょかについて かんがえます。",
      "korean": "이 허가에 대해 생각합니다."
    }
  },
  {
    "id": "w_0555",
    "kanji": "自由",
    "kana": "じゆう",
    "romaji": "じゆう",
    "meaning": "자유",
    "level": "N4",
    "category": "business",
    "example": {
      "japanese": "この自由について考えます。",
      "reading": "この じゆうについて かんがえます。",
      "korean": "이 자유에 대해 생각합니다."
    }
  },
  {
    "id": "w_0556",
    "kanji": "便利",
    "kana": "べんり",
    "romaji": "べんり",
    "meaning": "편리",
    "level": "N5",
    "category": "travel",
    "example": {
      "japanese": "この便利について考えます。",
      "reading": "この べんりについて かんがえます。",
      "korean": "이 편리에 대해 생각합니다."
    }
  },
  {
    "id": "w_0557",
    "kanji": "快適",
    "kana": "かいてき",
    "romaji": "かいてき",
    "meaning": "쾌적",
    "level": "N3",
    "category": "daily",
    "example": {
      "japanese": "この快適について考えます。",
      "reading": "この かいてきについて かんがえます。",
      "korean": "이 쾌적에 대해 생각합니다."
    }
  },
  {
    "id": "w_0558",
    "kanji": "新鮮",
    "kana": "しんせん",
    "romaji": "しんせん",
    "meaning": "신선",
    "level": "N3",
    "category": "food",
    "example": {
      "japanese": "この新鮮について考えます。",
      "reading": "この しんせんについて かんがえます。",
      "korean": "이 신선에 대해 생각합니다."
    }
  },
  {
    "id": "w_0559",
    "kanji": "清潔",
    "kana": "せいけつ",
    "romaji": "せいけつ",
    "meaning": "청결",
    "level": "N3",
    "category": "business",
    "example": {
      "japanese": "この清潔について考えます。",
      "reading": "この せいけつについて かんがえます。",
      "korean": "이 청결에 대해 생각합니다."
    }
  },
  {
    "id": "w_0560",
    "kanji": "綺麗",
    "kana": "きれい",
    "romaji": "きれい",
    "meaning": "예쁨, 깨끗함",
    "level": "N5",
    "category": "travel",
    "example": {
      "japanese": "この綺麗について考えます。",
      "reading": "この きれいについて かんがえます。",
      "korean": "이 예쁨, 깨끗함에 대해 생각합니다."
    }
  },
  {
    "id": "w_0561",
    "kanji": "豊富",
    "kana": "ほうふ",
    "romaji": "ほうふ",
    "meaning": "풍부",
    "level": "N3",
    "category": "daily",
    "example": {
      "japanese": "この豊富について考えます。",
      "reading": "この ほうふについて かんがえます。",
      "korean": "이 풍부에 대해 생각합니다."
    }
  },
  {
    "id": "w_0562",
    "kanji": "貴重",
    "kana": "きちょう",
    "romaji": "きちょう",
    "meaning": "귀중",
    "level": "N3",
    "category": "food",
    "example": {
      "japanese": "この貴重について考えます。",
      "reading": "この きちょうについて かんがえます。",
      "korean": "이 귀중에 대해 생각합니다."
    }
  },
  {
    "id": "w_0563",
    "kanji": "重要",
    "kana": "じゅうよう",
    "romaji": "じゅうよう",
    "meaning": "중요",
    "level": "N3",
    "category": "business",
    "example": {
      "japanese": "この重要について考えます。",
      "reading": "この じゅうようについて かんがえます。",
      "korean": "이 중요에 대해 생각합니다."
    }
  },
  {
    "id": "w_0564",
    "kanji": "計画",
    "kana": "けいかく",
    "romaji": "けいかく",
    "meaning": "계획",
    "level": "N4",
    "category": "travel",
    "example": {
      "japanese": "この計画について考えます。",
      "reading": "この けいかくについて かんがえます。",
      "korean": "이 계획에 대해 생각합니다."
    }
  },
  {
    "id": "w_0565",
    "kanji": "旅行",
    "kana": "りょこう",
    "romaji": "りょこう",
    "meaning": "여행",
    "level": "N5",
    "category": "daily",
    "example": {
      "japanese": "この旅行について考えます。",
      "reading": "この りょこうについて かんがえます。",
      "korean": "이 여행에 대해 생각합니다."
    }
  },
  {
    "id": "w_0566",
    "kanji": "記録",
    "kana": "きろく",
    "romaji": "きろく",
    "meaning": "기록",
    "level": "N3",
    "category": "food",
    "example": {
      "japanese": "この記録について考えます。",
      "reading": "この きろくについて かんがえます。",
      "korean": "이 기록에 대해 생각합니다."
    }
  },
  {
    "id": "w_0567",
    "kanji": "発見",
    "kana": "はっけん",
    "romaji": "はっけん",
    "meaning": "발견",
    "level": "N3",
    "category": "business",
    "example": {
      "japanese": "この発見について考えます。",
      "reading": "この はっけんについて かんがえます。",
      "korean": "이 발견에 대해 생각합니다."
    }
  },
  {
    "id": "w_0568",
    "kanji": "生活",
    "kana": "せいかつ",
    "romaji": "せいかつ",
    "meaning": "생활",
    "level": "N4",
    "category": "travel",
    "example": {
      "japanese": "この生活について考えます。",
      "reading": "この せいかつについて かんがえます。",
      "korean": "이 생활에 대해 생각합니다."
    }
  },
  {
    "id": "w_0569",
    "kanji": "活動",
    "kana": "かつどう",
    "romaji": "かつどう",
    "meaning": "활동",
    "level": "N3",
    "category": "daily",
    "example": {
      "japanese": "この活動について考えます。",
      "reading": "この かつどうについて かんがえます。",
      "korean": "이 활동에 대해 생각합니다."
    }
  },
  {
    "id": "w_0570",
    "kanji": "行動",
    "kana": "こうどう",
    "romaji": "こうどう",
    "meaning": "행동",
    "level": "N3",
    "category": "food",
    "example": {
      "japanese": "この行動について考えます。",
      "reading": "この こうどうについて かんがえます。",
      "korean": "이 행동에 대해 생각합니다."
    }
  },
  {
    "id": "w_0571",
    "kanji": "希望",
    "kana": "きぼう",
    "romaji": "きぼう",
    "meaning": "희망",
    "level": "N3",
    "category": "business",
    "example": {
      "japanese": "この希望について考えます。",
      "reading": "この きぼうについて かんがえます。",
      "korean": "이 희망에 대해 생각합니다."
    }
  },
  {
    "id": "w_0572",
    "kanji": "成功",
    "kana": "せいこう",
    "romaji": "せいこう",
    "meaning": "성공",
    "level": "N3",
    "category": "travel",
    "example": {
      "japanese": "この成功について考えます。",
      "reading": "この せいこうについて かんがえます。",
      "korean": "이 성공에 대해 생각합니다."
    }
  },
  {
    "id": "w_0573",
    "kanji": "失敗",
    "kana": "しっぱい",
    "romaji": "しっぱい",
    "meaning": "실패",
    "level": "N4",
    "category": "daily",
    "example": {
      "japanese": "この失敗について考えます。",
      "reading": "この しっぱいについて かんがえます。",
      "korean": "이 실패에 대해 생각합니다."
    }
  },
  {
    "id": "w_0574",
    "kanji": "感謝",
    "kana": "かんしゃ",
    "romaji": "かんしゃ",
    "meaning": "감사",
    "level": "N3",
    "category": "food",
    "example": {
      "japanese": "この感謝について考えます。",
      "reading": "この かんしゃについて かんがえます。",
      "korean": "이 감사에 대해 생각합니다."
    }
  },
  {
    "id": "w_0575",
    "kanji": "尊敬",
    "kana": "そんけい",
    "romaji": "そんけい",
    "meaning": "존경",
    "level": "N3",
    "category": "business",
    "example": {
      "japanese": "この尊敬について考えます。",
      "reading": "この そんけいについて かんがえます。",
      "korean": "이 존경에 대해 생각합니다."
    }
  },
  {
    "id": "w_0576",
    "kanji": "愛情",
    "kana": "あいじょう",
    "romaji": "あいじょう",
    "meaning": "애정",
    "level": "N3",
    "category": "travel",
    "example": {
      "japanese": "この愛情について考えます。",
      "reading": "この あいじょうについて かんがえます。",
      "korean": "이 애정에 대해 생각합니다."
    }
  },
  {
    "id": "w_0577",
    "kanji": "友情",
    "kana": "ゆうじょう",
    "romaji": "ゆうじょう",
    "meaning": "우정",
    "level": "N3",
    "category": "daily",
    "example": {
      "japanese": "この友情について考えます。",
      "reading": "この ゆうじょうについて かんがえます。",
      "korean": "이 우정에 대해 생각합니다."
    }
  },
  {
    "id": "w_0578",
    "kanji": "関係",
    "kana": "かんけい",
    "romaji": "かんけい",
    "meaning": "관계",
    "level": "N4",
    "category": "food",
    "example": {
      "japanese": "この関係について考えます。",
      "reading": "この かんけいについて かんがえます。",
      "korean": "이 관계에 대해 생각합니다."
    }
  },
  {
    "id": "w_0579",
    "kanji": "結果",
    "kana": "けっか",
    "romaji": "けっか",
    "meaning": "결과",
    "level": "N3",
    "category": "business",
    "example": {
      "japanese": "この結果について考えます。",
      "reading": "この けっかについて かんがえます。",
      "korean": "이 결과에 대해 생각합니다."
    }
  },
  {
    "id": "w_0580",
    "kanji": "原因",
    "kana": "げんいん",
    "romaji": "げんいん",
    "meaning": "원인",
    "level": "N4",
    "category": "travel",
    "example": {
      "japanese": "この原因について考えます。",
      "reading": "この げんいんについて かんがえます。",
      "korean": "이 원인에 대해 생각합니다."
    }
  },
  {
    "id": "w_0581",
    "kanji": "理由",
    "kana": "りゆう",
    "romaji": "りゆう",
    "meaning": "이유",
    "level": "N4",
    "category": "daily",
    "example": {
      "japanese": "この理由について考えます。",
      "reading": "この りゆうについて かんがえます。",
      "korean": "이 이유에 대해 생각합니다."
    }
  },
  {
    "id": "w_0582",
    "kanji": "目的",
    "kana": "もくてき",
    "romaji": "もくてき",
    "meaning": "목적",
    "level": "N3",
    "category": "food",
    "example": {
      "japanese": "この目的について考えます。",
      "reading": "この もくてきについて かんがえます。",
      "korean": "이 목적에 대해 생각합니다."
    }
  },
  {
    "id": "w_0583",
    "kanji": "目標",
    "kana": "もくひょう",
    "romaji": "もくひょう",
    "meaning": "목표",
    "level": "N3",
    "category": "business",
    "example": {
      "japanese": "この目標について考えます。",
      "reading": "この もくひょうについて かんがえます。",
      "korean": "이 목표에 대해 생각합니다."
    }
  },
  {
    "id": "w_0584",
    "kanji": "意見",
    "kana": "いけん",
    "romaji": "いけん",
    "meaning": "의견",
    "level": "N4",
    "category": "travel",
    "example": {
      "japanese": "この意見について考えます。",
      "reading": "この いけんについて かんがえます。",
      "korean": "이 의견에 대해 생각합니다."
    }
  },
  {
    "id": "w_0585",
    "kanji": "考え",
    "kana": "かんがえ",
    "romaji": "かんがえ",
    "meaning": "생각",
    "level": "N3",
    "category": "daily",
    "example": {
      "japanese": "この考えについて考えます。",
      "reading": "この かんがえについて かんがえます。",
      "korean": "이 생각에 대해 생각합니다."
    }
  },
  {
    "id": "w_0586",
    "kanji": "感情",
    "kana": "かんじょう",
    "romaji": "かんじょう",
    "meaning": "감정",
    "level": "N3",
    "category": "food",
    "example": {
      "japanese": "この感情について考えます。",
      "reading": "この かんじょうについて かんがえます。",
      "korean": "이 감정에 대해 생각합니다."
    }
  },
  {
    "id": "w_0587",
    "kanji": "表現",
    "kana": "ひょうげん",
    "romaji": "ひょうげん",
    "meaning": "표현",
    "level": "N3",
    "category": "business",
    "example": {
      "japanese": "この表現について考えます。",
      "reading": "この ひょうげんについて かんがえます。",
      "korean": "이 표현에 대해 생각합니다."
    }
  },
  {
    "id": "w_0588",
    "kanji": "説明",
    "kana": "せつめい",
    "romaji": "せつめい",
    "meaning": "설명",
    "level": "N4",
    "category": "travel",
    "example": {
      "japanese": "この説明について考えます。",
      "reading": "この せつめいについて かんがえます。",
      "korean": "이 설명에 대해 생각합니다."
    }
  },
  {
    "id": "w_0589",
    "kanji": "案内",
    "kana": "あんない",
    "romaji": "あんない",
    "meaning": "안내",
    "level": "N4",
    "category": "daily",
    "example": {
      "japanese": "この案内について考えます。",
      "reading": "この あんないについて かんがえます。",
      "korean": "이 안내에 대해 생각합니다."
    }
  },
  {
    "id": "w_0590",
    "kanji": "紹介",
    "kana": "しょうかい",
    "romaji": "しょうかい",
    "meaning": "소개",
    "level": "N4",
    "category": "food",
    "example": {
      "japanese": "この紹介について考えます。",
      "reading": "この しょうかいについて かんがえます。",
      "korean": "이 소개에 대해 생각합니다."
    }
  },
  {
    "id": "w_0591",
    "kanji": "歓迎",
    "kana": "かんげい",
    "romaji": "かんげい",
    "meaning": "환영",
    "level": "N3",
    "category": "business",
    "example": {
      "japanese": "この歓迎について考えます。",
      "reading": "この かんげいについて かんがえます。",
      "korean": "이 환영에 대해 생각합니다."
    }
  },
  {
    "id": "w_0592",
    "kanji": "招待",
    "kana": "しょうたい",
    "romaji": "しょうたい",
    "meaning": "초대",
    "level": "N4",
    "category": "travel",
    "example": {
      "japanese": "この招待について考えます。",
      "reading": "この しょうたいについて かんがえます。",
      "korean": "이 초대에 대해 생각합니다."
    }
  },
  {
    "id": "w_0593",
    "kanji": "訪問",
    "kana": "ほうもん",
    "romaji": "ほうもん",
    "meaning": "방문",
    "level": "N3",
    "category": "daily",
    "example": {
      "japanese": "この訪問について考えます。",
      "reading": "この ほうもんについて かんがえます。",
      "korean": "이 방문에 대해 생각합니다."
    }
  },
  {
    "id": "w_0594",
    "kanji": "見学",
    "kana": "けんがく",
    "romaji": "けんがく",
    "meaning": "견학",
    "level": "N2",
    "category": "food",
    "example": {
      "japanese": "この見学について考えます。",
      "reading": "この けんがくについて かんがえます。",
      "korean": "이 견학에 대해 생각합니다."
    }
  },
  {
    "id": "w_0595",
    "kanji": "見物",
    "kana": "けんぶつ",
    "romaji": "けんぶつ",
    "meaning": "구경",
    "level": "N4",
    "category": "business",
    "example": {
      "japanese": "この見物について考えます。",
      "reading": "この けんぶつについて かんがえます。",
      "korean": "이 구경에 대해 생각합니다."
    }
  },
  {
    "id": "w_0596",
    "kanji": "散策",
    "kana": "さんさく",
    "romaji": "さんさく",
    "meaning": "산책, 산책길",
    "level": "N3",
    "category": "travel",
    "example": {
      "japanese": "この散策について考えます。",
      "reading": "この さんさくについて かんがえます。",
      "korean": "이 산책, 산책길에 대해 생각합니다."
    }
  },
  {
    "id": "w_0597",
    "kanji": "移動",
    "kana": "いどう",
    "romaji": "いどう",
    "meaning": "이동",
    "level": "N3",
    "category": "daily",
    "example": {
      "japanese": "この移動について考えます。",
      "reading": "この いどうについて かんがえます。",
      "korean": "이 이동에 대해 생각합니다."
    }
  },
  {
    "id": "w_0598",
    "kanji": "出発",
    "kana": "しゅっぱつ",
    "romaji": "しゅっぱつ",
    "meaning": "출발",
    "level": "N4",
    "category": "food",
    "example": {
      "japanese": "この出発について考えます。",
      "reading": "この しゅっぱつについて かんがえます。",
      "korean": "이 출발에 대해 생각합니다."
    }
  },
  {
    "id": "w_0599",
    "kanji": "到着",
    "kana": "とうちゃく",
    "romaji": "とうちゃく",
    "meaning": "도착",
    "level": "N3",
    "category": "business",
    "example": {
      "japanese": "この到着について考えます。",
      "reading": "この とうちゃくについて かんがえます。",
      "korean": "이 도착에 대해 생각합니다."
    }
  },
  {
    "id": "w_0600",
    "kanji": "通過",
    "kana": "つうか",
    "romaji": "つうか",
    "meaning": "통과",
    "level": "N3",
    "category": "travel",
    "example": {
      "japanese": "この通過について考えます。",
      "reading": "この つうかについて かんがえます。",
      "korean": "이 통과에 대해 생각합니다."
    }
  },
  {
    "id": "w_0601",
    "kanji": "入場",
    "kana": "にゅうじょう",
    "romaji": "にゅうじょう",
    "meaning": "입장",
    "level": "N3",
    "category": "daily",
    "example": {
      "japanese": "この入場について考えます。",
      "reading": "この にゅうじょうについて かんがえます。",
      "korean": "이 입장에 대해 생각합니다."
    }
  },
  {
    "id": "w_0602",
    "kanji": "退場",
    "kana": "たいじょう",
    "romaji": "たいじょう",
    "meaning": "퇴장",
    "level": "N3",
    "category": "food",
    "example": {
      "japanese": "この退場について考えます。",
      "reading": "この たいじょうについて かんがえます。",
      "korean": "이 퇴장에 대해 생각합니다."
    }
  },
  {
    "id": "w_0603",
    "kanji": "禁止",
    "kana": "きんし",
    "romaji": "きんし",
    "meaning": "금지",
    "level": "N3",
    "category": "business",
    "example": {
      "japanese": "この禁止について考えます。",
      "reading": "この きんしについて かんがえます。",
      "korean": "이 금지에 대해 생각합니다."
    }
  },
  {
    "id": "w_0604",
    "kanji": "許可",
    "kana": "きょか",
    "romaji": "きょか",
    "meaning": "허가",
    "level": "N3",
    "category": "travel",
    "example": {
      "japanese": "この許可について考えます。",
      "reading": "この きょかについて かんがえます。",
      "korean": "이 허가에 대해 생각합니다."
    }
  },
  {
    "id": "w_0605",
    "kanji": "自由",
    "kana": "じゆう",
    "romaji": "じゆう",
    "meaning": "자유",
    "level": "N4",
    "category": "daily",
    "example": {
      "japanese": "この自由について考えます。",
      "reading": "この じゆうについて かんがえます。",
      "korean": "이 자유에 대해 생각합니다."
    }
  },
  {
    "id": "w_0606",
    "kanji": "便利",
    "kana": "べんり",
    "romaji": "べんり",
    "meaning": "편리",
    "level": "N5",
    "category": "food",
    "example": {
      "japanese": "この便利について考えます。",
      "reading": "この べんりについて かんがえます。",
      "korean": "이 편리에 대해 생각합니다."
    }
  },
  {
    "id": "w_0607",
    "kanji": "快適",
    "kana": "かいてき",
    "romaji": "かいてき",
    "meaning": "쾌적",
    "level": "N3",
    "category": "business",
    "example": {
      "japanese": "この快適について考えます。",
      "reading": "この かいてきについて かんがえます。",
      "korean": "이 쾌적에 대해 생각합니다."
    }
  },
  {
    "id": "w_0608",
    "kanji": "新鮮",
    "kana": "しんせん",
    "romaji": "しんせん",
    "meaning": "신선",
    "level": "N3",
    "category": "travel",
    "example": {
      "japanese": "この新鮮について考えます。",
      "reading": "この しんせんについて かんがえます。",
      "korean": "이 신선에 대해 생각합니다."
    }
  },
  {
    "id": "w_0609",
    "kanji": "清潔",
    "kana": "せいけつ",
    "romaji": "せいけつ",
    "meaning": "청결",
    "level": "N3",
    "category": "daily",
    "example": {
      "japanese": "この清潔について考えます。",
      "reading": "この せいけつについて かんがえます。",
      "korean": "이 청결에 대해 생각합니다."
    }
  },
  {
    "id": "w_0610",
    "kanji": "綺麗",
    "kana": "きれい",
    "romaji": "きれい",
    "meaning": "예쁨, 깨끗함",
    "level": "N5",
    "category": "food",
    "example": {
      "japanese": "この綺麗について考えます。",
      "reading": "この きれいについて かんがえます。",
      "korean": "이 예쁨, 깨끗함에 대해 생각합니다."
    }
  },
  {
    "id": "w_0611",
    "kanji": "豊富",
    "kana": "ほうふ",
    "romaji": "ほうふ",
    "meaning": "풍부",
    "level": "N3",
    "category": "business",
    "example": {
      "japanese": "この豊富について考えます。",
      "reading": "この ほうふについて かんがえます。",
      "korean": "이 풍부에 대해 생각합니다."
    }
  },
  {
    "id": "w_0612",
    "kanji": "貴重",
    "kana": "きちょう",
    "romaji": "きちょう",
    "meaning": "귀중",
    "level": "N3",
    "category": "travel",
    "example": {
      "japanese": "この貴重について考えます。",
      "reading": "この きちょうについて かんがえます。",
      "korean": "이 귀중에 대해 생각합니다."
    }
  },
  {
    "id": "w_0613",
    "kanji": "重要",
    "kana": "じゅうよう",
    "romaji": "じゅうよう",
    "meaning": "중요",
    "level": "N3",
    "category": "daily",
    "example": {
      "japanese": "この重要について考えます。",
      "reading": "この じゅうようについて かんがえます。",
      "korean": "이 중요에 대해 생각합니다."
    }
  },
  {
    "id": "w_0614",
    "kanji": "計画",
    "kana": "けいかく",
    "romaji": "けいかく",
    "meaning": "계획",
    "level": "N4",
    "category": "food",
    "example": {
      "japanese": "この計画について考えます。",
      "reading": "この けいかくについて かんがえます。",
      "korean": "이 계획에 대해 생각합니다."
    }
  },
  {
    "id": "w_0615",
    "kanji": "旅行",
    "kana": "りょこう",
    "romaji": "りょこう",
    "meaning": "여행",
    "level": "N5",
    "category": "business",
    "example": {
      "japanese": "この旅行について考えます。",
      "reading": "この りょこうについて かんがえます。",
      "korean": "이 여행에 대해 생각합니다."
    }
  },
  {
    "id": "w_0616",
    "kanji": "記録",
    "kana": "きろく",
    "romaji": "きろく",
    "meaning": "기록",
    "level": "N3",
    "category": "travel",
    "example": {
      "japanese": "この記録について考えます。",
      "reading": "この きろくについて かんがえます。",
      "korean": "이 기록에 대해 생각합니다."
    }
  },
  {
    "id": "w_0617",
    "kanji": "発見",
    "kana": "はっけん",
    "romaji": "はっけん",
    "meaning": "발견",
    "level": "N3",
    "category": "daily",
    "example": {
      "japanese": "この発見について考えます。",
      "reading": "この はっけんについて かんがえます。",
      "korean": "이 발견에 대해 생각합니다."
    }
  },
  {
    "id": "w_0618",
    "kanji": "生活",
    "kana": "せいかつ",
    "romaji": "せいかつ",
    "meaning": "생활",
    "level": "N4",
    "category": "food",
    "example": {
      "japanese": "この生活について考えます。",
      "reading": "この せいかつについて かんがえます。",
      "korean": "이 생활에 대해 생각합니다."
    }
  },
  {
    "id": "w_0619",
    "kanji": "活動",
    "kana": "かつどう",
    "romaji": "かつどう",
    "meaning": "활동",
    "level": "N3",
    "category": "business",
    "example": {
      "japanese": "この活動について考えます。",
      "reading": "この かつどうについて かんがえます。",
      "korean": "이 활동에 대해 생각합니다."
    }
  },
  {
    "id": "w_0620",
    "kanji": "行動",
    "kana": "こうどう",
    "romaji": "こうどう",
    "meaning": "행동",
    "level": "N3",
    "category": "travel",
    "example": {
      "japanese": "この行動について考えます。",
      "reading": "この こうどうについて かんがえます。",
      "korean": "이 행동에 대해 생각합니다."
    }
  },
  {
    "id": "w_0621",
    "kanji": "希望",
    "kana": "きぼう",
    "romaji": "きぼう",
    "meaning": "희망",
    "level": "N3",
    "category": "daily",
    "example": {
      "japanese": "この希望について考えます。",
      "reading": "この きぼうについて かんがえます。",
      "korean": "이 희망에 대해 생각합니다."
    }
  },
  {
    "id": "w_0622",
    "kanji": "成功",
    "kana": "せいこう",
    "romaji": "せいこう",
    "meaning": "성공",
    "level": "N3",
    "category": "food",
    "example": {
      "japanese": "この成功について考えます。",
      "reading": "この せいこうについて かんがえます。",
      "korean": "이 성공에 대해 생각합니다."
    }
  },
  {
    "id": "w_0623",
    "kanji": "失敗",
    "kana": "しっぱい",
    "romaji": "しっぱい",
    "meaning": "실패",
    "level": "N4",
    "category": "business",
    "example": {
      "japanese": "この失敗について考えます。",
      "reading": "この しっぱいについて かんがえます。",
      "korean": "이 실패에 대해 생각합니다."
    }
  },
  {
    "id": "w_0624",
    "kanji": "感謝",
    "kana": "かんしゃ",
    "romaji": "かんしゃ",
    "meaning": "감사",
    "level": "N3",
    "category": "travel",
    "example": {
      "japanese": "この感謝について考えます。",
      "reading": "この かんしゃについて かんがえます。",
      "korean": "이 감사에 대해 생각합니다."
    }
  },
  {
    "id": "w_0625",
    "kanji": "尊敬",
    "kana": "そんけい",
    "romaji": "そんけい",
    "meaning": "존경",
    "level": "N3",
    "category": "daily",
    "example": {
      "japanese": "この尊敬について考えます。",
      "reading": "この そんけいについて かんがえます。",
      "korean": "이 존경에 대해 생각합니다."
    }
  },
  {
    "id": "w_0626",
    "kanji": "愛情",
    "kana": "あいじょう",
    "romaji": "あいじょう",
    "meaning": "애정",
    "level": "N3",
    "category": "food",
    "example": {
      "japanese": "この愛情について考えます。",
      "reading": "この あいじょうについて かんがえます。",
      "korean": "이 애정에 대해 생각합니다."
    }
  },
  {
    "id": "w_0627",
    "kanji": "友情",
    "kana": "ゆうじょう",
    "romaji": "ゆうじょう",
    "meaning": "우정",
    "level": "N3",
    "category": "business",
    "example": {
      "japanese": "この友情について考えます。",
      "reading": "この ゆうじょうについて かんがえます。",
      "korean": "이 우정에 대해 생각합니다."
    }
  },
  {
    "id": "w_0628",
    "kanji": "関係",
    "kana": "かんけい",
    "romaji": "かんけい",
    "meaning": "관계",
    "level": "N4",
    "category": "travel",
    "example": {
      "japanese": "この関係について考えます。",
      "reading": "この かんけいについて かんがえます。",
      "korean": "이 관계에 대해 생각합니다."
    }
  },
  {
    "id": "w_0629",
    "kanji": "結果",
    "kana": "けっか",
    "romaji": "けっか",
    "meaning": "결과",
    "level": "N3",
    "category": "daily",
    "example": {
      "japanese": "この結果について考えます。",
      "reading": "この けっかについて かんがえます。",
      "korean": "이 결과에 대해 생각합니다."
    }
  },
  {
    "id": "w_0630",
    "kanji": "原因",
    "kana": "げんいん",
    "romaji": "げんいん",
    "meaning": "원인",
    "level": "N4",
    "category": "food",
    "example": {
      "japanese": "この原因について考えます。",
      "reading": "この げんいんについて かんがえます。",
      "korean": "이 원인에 대해 생각합니다."
    }
  },
  {
    "id": "w_0631",
    "kanji": "理由",
    "kana": "りゆう",
    "romaji": "りゆう",
    "meaning": "이유",
    "level": "N4",
    "category": "business",
    "example": {
      "japanese": "この理由について考えます。",
      "reading": "この りゆうについて かんがえます。",
      "korean": "이 이유에 대해 생각합니다."
    }
  },
  {
    "id": "w_0632",
    "kanji": "目的",
    "kana": "もくてき",
    "romaji": "もくてき",
    "meaning": "목적",
    "level": "N3",
    "category": "travel",
    "example": {
      "japanese": "この目的について考えます。",
      "reading": "この もくてきについて かんがえます。",
      "korean": "이 목적에 대해 생각합니다."
    }
  },
  {
    "id": "w_0633",
    "kanji": "目標",
    "kana": "もくひょう",
    "romaji": "もくひょう",
    "meaning": "목표",
    "level": "N3",
    "category": "daily",
    "example": {
      "japanese": "この目標について考えます。",
      "reading": "この もくひょうについて かんがえます。",
      "korean": "이 목표에 대해 생각합니다."
    }
  },
  {
    "id": "w_0634",
    "kanji": "意見",
    "kana": "いけん",
    "romaji": "いけん",
    "meaning": "의견",
    "level": "N4",
    "category": "food",
    "example": {
      "japanese": "この意見について考えます。",
      "reading": "この いけんについて かんがえます。",
      "korean": "이 의견에 대해 생각합니다."
    }
  },
  {
    "id": "w_0635",
    "kanji": "考え",
    "kana": "かんがえ",
    "romaji": "かんがえ",
    "meaning": "생각",
    "level": "N3",
    "category": "business",
    "example": {
      "japanese": "この考えについて考えます。",
      "reading": "この かんがえについて かんがえます。",
      "korean": "이 생각에 대해 생각합니다."
    }
  },
  {
    "id": "w_0636",
    "kanji": "感情",
    "kana": "かんじょう",
    "romaji": "かんじょう",
    "meaning": "감정",
    "level": "N3",
    "category": "travel",
    "example": {
      "japanese": "この感情について考えます。",
      "reading": "この かんじょうについて かんがえます。",
      "korean": "이 감정에 대해 생각합니다."
    }
  },
  {
    "id": "w_0637",
    "kanji": "表現",
    "kana": "ひょうげん",
    "romaji": "ひょうげん",
    "meaning": "표현",
    "level": "N3",
    "category": "daily",
    "example": {
      "japanese": "この表現について考えます。",
      "reading": "この ひょうげんについて かんがえます。",
      "korean": "이 표현에 대해 생각합니다."
    }
  },
  {
    "id": "w_0638",
    "kanji": "説明",
    "kana": "せつめい",
    "romaji": "せつめい",
    "meaning": "설명",
    "level": "N4",
    "category": "food",
    "example": {
      "japanese": "この説明について考えます。",
      "reading": "この せつめいについて かんがえます。",
      "korean": "이 설명에 대해 생각합니다."
    }
  },
  {
    "id": "w_0639",
    "kanji": "案内",
    "kana": "あんない",
    "romaji": "あんない",
    "meaning": "안내",
    "level": "N4",
    "category": "business",
    "example": {
      "japanese": "この案内について考えます。",
      "reading": "この あんないについて かんがえます。",
      "korean": "이 안내에 대해 생각합니다."
    }
  },
  {
    "id": "w_0640",
    "kanji": "紹介",
    "kana": "しょうかい",
    "romaji": "しょうかい",
    "meaning": "소개",
    "level": "N4",
    "category": "travel",
    "example": {
      "japanese": "この紹介について考えます。",
      "reading": "この しょうかいについて かんがえます。",
      "korean": "이 소개에 대해 생각합니다."
    }
  },
  {
    "id": "w_0641",
    "kanji": "歓迎",
    "kana": "かんげい",
    "romaji": "かんげい",
    "meaning": "환영",
    "level": "N3",
    "category": "daily",
    "example": {
      "japanese": "この歓迎について考えます。",
      "reading": "この かんげいについて かんがえます。",
      "korean": "이 환영에 대해 생각합니다."
    }
  },
  {
    "id": "w_0642",
    "kanji": "招待",
    "kana": "しょうたい",
    "romaji": "しょうたい",
    "meaning": "초대",
    "level": "N4",
    "category": "food",
    "example": {
      "japanese": "この招待について考えます。",
      "reading": "この しょうたいについて かんがえます。",
      "korean": "이 초대에 대해 생각합니다."
    }
  },
  {
    "id": "w_0643",
    "kanji": "訪問",
    "kana": "ほうもん",
    "romaji": "ほうもん",
    "meaning": "방문",
    "level": "N3",
    "category": "business",
    "example": {
      "japanese": "この訪問について考えます。",
      "reading": "この ほうもんについて かんがえます。",
      "korean": "이 방문에 대해 생각합니다."
    }
  },
  {
    "id": "w_0644",
    "kanji": "見学",
    "kana": "けんがく",
    "romaji": "けんがく",
    "meaning": "견학",
    "level": "N2",
    "category": "travel",
    "example": {
      "japanese": "この見学について考えます。",
      "reading": "この けんがくについて かんがえます。",
      "korean": "이 견학에 대해 생각합니다."
    }
  },
  {
    "id": "w_0645",
    "kanji": "見物",
    "kana": "けんぶつ",
    "romaji": "けんぶつ",
    "meaning": "구경",
    "level": "N4",
    "category": "daily",
    "example": {
      "japanese": "この見物について考えます。",
      "reading": "この けんぶつについて かんがえます。",
      "korean": "이 구경에 대해 생각합니다."
    }
  },
  {
    "id": "w_0646",
    "kanji": "散策",
    "kana": "さんさく",
    "romaji": "さんさく",
    "meaning": "산책, 산책길",
    "level": "N5",
    "category": "food",
    "example": {
      "japanese": "この散策について考えます。",
      "reading": "この さんさくについて かんがえます。",
      "korean": "이 산책, 산책길에 대해 생각합니다."
    }
  },
  {
    "id": "w_0647",
    "kanji": "移動",
    "kana": "いどう",
    "romaji": "いどう",
    "meaning": "이동",
    "level": "N3",
    "category": "business",
    "example": {
      "japanese": "この移動について考えます。",
      "reading": "この いどうについて かんがえます。",
      "korean": "이 이동에 대해 생각합니다."
    }
  },
  {
    "id": "w_0648",
    "kanji": "出発",
    "kana": "しゅっぱつ",
    "romaji": "しゅっぱつ",
    "meaning": "출발",
    "level": "N4",
    "category": "travel",
    "example": {
      "japanese": "この出発について考えます。",
      "reading": "この しゅっぱつについて かんがえます。",
      "korean": "이 출발에 대해 생각합니다."
    }
  },
  {
    "id": "w_0649",
    "kanji": "到着",
    "kana": "とうちゃく",
    "romaji": "とうちゃく",
    "meaning": "도착",
    "level": "N3",
    "category": "daily",
    "example": {
      "japanese": "この到着について考えます。",
      "reading": "この とうちゃくについて かんがえます。",
      "korean": "이 도착에 대해 생각합니다."
    }
  },
  {
    "id": "w_0650",
    "kanji": "通過",
    "kana": "つうか",
    "romaji": "つうか",
    "meaning": "통과",
    "level": "N3",
    "category": "food",
    "example": {
      "japanese": "この通過について考えます。",
      "reading": "この つうかについて かんがえます。",
      "korean": "이 통과에 대해 생각합니다."
    }
  },
  {
    "id": "w_0651",
    "kanji": "入場",
    "kana": "にゅうじょう",
    "romaji": "にゅうじょう",
    "meaning": "입장",
    "level": "N3",
    "category": "business",
    "example": {
      "japanese": "この入場について考えます。",
      "reading": "この にゅうじょうについて かんがえます。",
      "korean": "이 입장에 대해 생각합니다."
    }
  },
  {
    "id": "w_0652",
    "kanji": "退場",
    "kana": "たいじょう",
    "romaji": "たいじょう",
    "meaning": "퇴장",
    "level": "N5",
    "category": "travel",
    "example": {
      "japanese": "この退場について考えます。",
      "reading": "この たいじょうについて かんがえます。",
      "korean": "이 퇴장에 대해 생각합니다."
    }
  },
  {
    "id": "w_0653",
    "kanji": "禁止",
    "kana": "きんし",
    "romaji": "きんし",
    "meaning": "금지",
    "level": "N3",
    "category": "daily",
    "example": {
      "japanese": "この禁止について考えます。",
      "reading": "この きんしについて かんがえます。",
      "korean": "이 금지에 대해 생각합니다."
    }
  },
  {
    "id": "w_0654",
    "kanji": "許可",
    "kana": "きょか",
    "romaji": "きょか",
    "meaning": "허가",
    "level": "N3",
    "category": "food",
    "example": {
      "japanese": "この許可について考えます。",
      "reading": "この きょかについて かんがえます。",
      "korean": "이 허가에 대해 생각합니다."
    }
  },
  {
    "id": "w_0655",
    "kanji": "自由",
    "kana": "じゆう",
    "romaji": "じゆう",
    "meaning": "자유",
    "level": "N4",
    "category": "business",
    "example": {
      "japanese": "この自由について考えます。",
      "reading": "この じゆうについて かんがえます。",
      "korean": "이 자유에 대해 생각합니다."
    }
  },
  {
    "id": "w_0656",
    "kanji": "便利",
    "kana": "べんり",
    "romaji": "べんり",
    "meaning": "편리",
    "level": "N5",
    "category": "travel",
    "example": {
      "japanese": "この便利について考えます。",
      "reading": "この べんりについて かんがえます。",
      "korean": "이 편리에 대해 생각합니다."
    }
  },
  {
    "id": "w_0657",
    "kanji": "快適",
    "kana": "かいてき",
    "romaji": "かいてき",
    "meaning": "쾌적",
    "level": "N3",
    "category": "daily",
    "example": {
      "japanese": "この快適について考えます。",
      "reading": "この かいてきについて かんがえます。",
      "korean": "이 쾌적에 대해 생각합니다."
    }
  },
  {
    "id": "w_0658",
    "kanji": "新鮮",
    "kana": "しんせん",
    "romaji": "しんせん",
    "meaning": "신선",
    "level": "N3",
    "category": "food",
    "example": {
      "japanese": "この新鮮について考えます。",
      "reading": "この しんせんについて かんがえます。",
      "korean": "이 신선에 대해 생각합니다."
    }
  },
  {
    "id": "w_0659",
    "kanji": "清潔",
    "kana": "せいけつ",
    "romaji": "せいけつ",
    "meaning": "청결",
    "level": "N3",
    "category": "business",
    "example": {
      "japanese": "この清潔について考えます。",
      "reading": "この せいけつについて かんがえます。",
      "korean": "이 청결에 대해 생각합니다."
    }
  },
  {
    "id": "w_0660",
    "kanji": "綺麗",
    "kana": "きれい",
    "romaji": "きれい",
    "meaning": "예쁨, 깨끗함",
    "level": "N5",
    "category": "travel",
    "example": {
      "japanese": "この綺麗について考えます。",
      "reading": "この きれいについて かんがえます。",
      "korean": "이 예쁨, 깨끗함에 대해 생각합니다."
    }
  },
  {
    "id": "w_0661",
    "kanji": "豊富",
    "kana": "ほうふ",
    "romaji": "ほうふ",
    "meaning": "풍부",
    "level": "N3",
    "category": "daily",
    "example": {
      "japanese": "この豊富について考えます。",
      "reading": "この ほうふについて かんがえます。",
      "korean": "이 풍부에 대해 생각합니다."
    }
  },
  {
    "id": "w_0662",
    "kanji": "貴重",
    "kana": "きちょう",
    "romaji": "きちょう",
    "meaning": "귀중",
    "level": "N3",
    "category": "food",
    "example": {
      "japanese": "この貴重について考えます。",
      "reading": "この きちょうについて かんがえます。",
      "korean": "이 귀중에 대해 생각합니다."
    }
  },
  {
    "id": "w_0663",
    "kanji": "重要",
    "kana": "じゅうよう",
    "romaji": "じゅうよう",
    "meaning": "중요",
    "level": "N3",
    "category": "business",
    "example": {
      "japanese": "この重要について考えます。",
      "reading": "この じゅうようについて かんがえます。",
      "korean": "이 중요에 대해 생각합니다."
    }
  },
  {
    "id": "w_0664",
    "kanji": "計画",
    "kana": "けいかく",
    "romaji": "けいかく",
    "meaning": "계획",
    "level": "N4",
    "category": "travel",
    "example": {
      "japanese": "この計画について考えます。",
      "reading": "この けいかくについて かんがえます。",
      "korean": "이 계획에 대해 생각합니다."
    }
  },
  {
    "id": "w_0665",
    "kanji": "旅行",
    "kana": "りょこう",
    "romaji": "りょこう",
    "meaning": "여행",
    "level": "N5",
    "category": "daily",
    "example": {
      "japanese": "この旅行について考えます。",
      "reading": "この りょこうについて かんがえます。",
      "korean": "이 여행에 대해 생각합니다."
    }
  },
  {
    "id": "w_0666",
    "kanji": "記録",
    "kana": "きろく",
    "romaji": "きろく",
    "meaning": "기록",
    "level": "N3",
    "category": "food",
    "example": {
      "japanese": "この記録について考えます。",
      "reading": "この きろくについて かんがえます。",
      "korean": "이 기록에 대해 생각합니다."
    }
  },
  {
    "id": "w_0667",
    "kanji": "発見",
    "kana": "はっけん",
    "romaji": "はっけん",
    "meaning": "발견",
    "level": "N3",
    "category": "business",
    "example": {
      "japanese": "この発見について考えます。",
      "reading": "この はっけんについて かんがえます。",
      "korean": "이 발견에 대해 생각합니다."
    }
  },
  {
    "id": "w_0668",
    "kanji": "生活",
    "kana": "せいかつ",
    "romaji": "せいかつ",
    "meaning": "생활",
    "level": "N4",
    "category": "travel",
    "example": {
      "japanese": "この生活について考えます。",
      "reading": "この せいかつについて かんがえます。",
      "korean": "이 생활에 대해 생각합니다."
    }
  },
  {
    "id": "w_0669",
    "kanji": "活動",
    "kana": "かつどう",
    "romaji": "かつどう",
    "meaning": "활동",
    "level": "N3",
    "category": "daily",
    "example": {
      "japanese": "この活動について考えます。",
      "reading": "この かつどうについて かんがえます。",
      "korean": "이 활동에 대해 생각합니다."
    }
  },
  {
    "id": "w_0670",
    "kanji": "行動",
    "kana": "こうどう",
    "romaji": "こうどう",
    "meaning": "행동",
    "level": "N3",
    "category": "food",
    "example": {
      "japanese": "この行動について考えます。",
      "reading": "この こうどうについて かんがえます。",
      "korean": "이 행동에 대해 생각합니다."
    }
  },
  {
    "id": "w_0671",
    "kanji": "希望",
    "kana": "きぼう",
    "romaji": "きぼう",
    "meaning": "희망",
    "level": "N3",
    "category": "business",
    "example": {
      "japanese": "この希望について考えます。",
      "reading": "この きぼうについて かんがえます。",
      "korean": "이 희망에 대해 생각합니다."
    }
  },
  {
    "id": "w_0672",
    "kanji": "成功",
    "kana": "せいこう",
    "romaji": "せいこう",
    "meaning": "성공",
    "level": "N3",
    "category": "travel",
    "example": {
      "japanese": "この成功について考えます。",
      "reading": "この せいこうについて かんがえます。",
      "korean": "이 성공에 대해 생각합니다."
    }
  },
  {
    "id": "w_0673",
    "kanji": "失敗",
    "kana": "しっぱい",
    "romaji": "しっぱい",
    "meaning": "실패",
    "level": "N4",
    "category": "daily",
    "example": {
      "japanese": "この失敗について考えます。",
      "reading": "この しっぱいについて かんがえます。",
      "korean": "이 실패에 대해 생각합니다."
    }
  },
  {
    "id": "w_0674",
    "kanji": "感謝",
    "kana": "かんしゃ",
    "romaji": "かんしゃ",
    "meaning": "감사",
    "level": "N3",
    "category": "food",
    "example": {
      "japanese": "この感謝について考えます。",
      "reading": "この かんしゃについて かんがえます。",
      "korean": "이 감사에 대해 생각합니다."
    }
  },
  {
    "id": "w_0675",
    "kanji": "尊敬",
    "kana": "そんけい",
    "romaji": "そんけい",
    "meaning": "존경",
    "level": "N3",
    "category": "business",
    "example": {
      "japanese": "この尊敬について考えます。",
      "reading": "この そんけいについて かんがえます。",
      "korean": "이 존경에 대해 생각합니다."
    }
  },
  {
    "id": "w_0676",
    "kanji": "愛情",
    "kana": "あいじょう",
    "romaji": "あいじょう",
    "meaning": "애정",
    "level": "N3",
    "category": "travel",
    "example": {
      "japanese": "この愛情について考えます。",
      "reading": "この あいじょうについて かんがえます。",
      "korean": "이 애정에 대해 생각합니다."
    }
  },
  {
    "id": "w_0677",
    "kanji": "友情",
    "kana": "ゆうじょう",
    "romaji": "ゆうじょう",
    "meaning": "우정",
    "level": "N3",
    "category": "daily",
    "example": {
      "japanese": "この友情について考えます。",
      "reading": "この ゆうじょうについて かんがえます。",
      "korean": "이 우정에 대해 생각합니다."
    }
  },
  {
    "id": "w_0678",
    "kanji": "関係",
    "kana": "かんけい",
    "romaji": "かんけい",
    "meaning": "관계",
    "level": "N4",
    "category": "food",
    "example": {
      "japanese": "この関係について考えます。",
      "reading": "この かんけいについて かんがえます。",
      "korean": "이 관계에 대해 생각합니다."
    }
  },
  {
    "id": "w_0679",
    "kanji": "結果",
    "kana": "けっか",
    "romaji": "けっか",
    "meaning": "결과",
    "level": "N3",
    "category": "business",
    "example": {
      "japanese": "この結果について考えます。",
      "reading": "この けっかについて かんがえます。",
      "korean": "이 결과에 대해 생각합니다."
    }
  },
  {
    "id": "w_0680",
    "kanji": "原因",
    "kana": "げんいん",
    "romaji": "げんいん",
    "meaning": "원인",
    "level": "N4",
    "category": "travel",
    "example": {
      "japanese": "この原因について考えます。",
      "reading": "この げんいんについて かんがえます。",
      "korean": "이 원인에 대해 생각합니다."
    }
  },
  {
    "id": "w_0681",
    "kanji": "理由",
    "kana": "りゆう",
    "romaji": "りゆう",
    "meaning": "이유",
    "level": "N4",
    "category": "daily",
    "example": {
      "japanese": "この理由について考えます。",
      "reading": "この りゆうについて かんがえます。",
      "korean": "이 이유에 대해 생각합니다."
    }
  },
  {
    "id": "w_0682",
    "kanji": "目的",
    "kana": "もくてき",
    "romaji": "もくてき",
    "meaning": "목적",
    "level": "N3",
    "category": "food",
    "example": {
      "japanese": "この目的について考えます。",
      "reading": "この もくてきについて かんがえます。",
      "korean": "이 목적에 대해 생각합니다."
    }
  },
  {
    "id": "w_0683",
    "kanji": "目標",
    "kana": "もくひょう",
    "romaji": "もくひょう",
    "meaning": "목표",
    "level": "N3",
    "category": "business",
    "example": {
      "japanese": "この目標について考えます。",
      "reading": "この もくひょうについて かんがえます。",
      "korean": "이 목표에 대해 생각합니다."
    }
  },
  {
    "id": "w_0684",
    "kanji": "意見",
    "kana": "いけん",
    "romaji": "いけん",
    "meaning": "의견",
    "level": "N4",
    "category": "travel",
    "example": {
      "japanese": "この意見について考えます。",
      "reading": "この いけんについて かんがえます。",
      "korean": "이 의견에 대해 생각합니다."
    }
  },
  {
    "id": "w_0685",
    "kanji": "考え",
    "kana": "かんがえ",
    "romaji": "かんがえ",
    "meaning": "생각",
    "level": "N3",
    "category": "daily",
    "example": {
      "japanese": "この考えについて考えます。",
      "reading": "この かんがえについて かんがえます。",
      "korean": "이 생각에 대해 생각합니다."
    }
  },
  {
    "id": "w_0686",
    "kanji": "感情",
    "kana": "かんじょう",
    "romaji": "かんじょう",
    "meaning": "감정",
    "level": "N3",
    "category": "food",
    "example": {
      "japanese": "この感情について考えます。",
      "reading": "この かんじょうについて かんがえます。",
      "korean": "이 감정에 대해 생각합니다."
    }
  },
  {
    "id": "w_0687",
    "kanji": "表現",
    "kana": "ひょうげん",
    "romaji": "ひょうげん",
    "meaning": "표현",
    "level": "N3",
    "category": "business",
    "example": {
      "japanese": "この表現について考えます。",
      "reading": "この ひょうげんについて かんがえます。",
      "korean": "이 표현에 대해 생각합니다."
    }
  },
  {
    "id": "w_0688",
    "kanji": "説明",
    "kana": "せつめい",
    "romaji": "せつめい",
    "meaning": "설명",
    "level": "N4",
    "category": "travel",
    "example": {
      "japanese": "この説明について考えます。",
      "reading": "この せつめいについて かんがえます。",
      "korean": "이 설명에 대해 생각합니다."
    }
  },
  {
    "id": "w_0689",
    "kanji": "案内",
    "kana": "あんない",
    "romaji": "あんない",
    "meaning": "안내",
    "level": "N4",
    "category": "daily",
    "example": {
      "japanese": "この案内について考えます。",
      "reading": "この あんないについて かんがえます。",
      "korean": "이 안내에 대해 생각합니다."
    }
  },
  {
    "id": "w_0690",
    "kanji": "紹介",
    "kana": "しょうかい",
    "romaji": "しょうかい",
    "meaning": "소개",
    "level": "N4",
    "category": "food",
    "example": {
      "japanese": "この紹介について考えます。",
      "reading": "この しょうかいについて かんがえます。",
      "korean": "이 소개에 대해 생각합니다."
    }
  },
  {
    "id": "w_0691",
    "kanji": "歓迎",
    "kana": "かんげい",
    "romaji": "かんげい",
    "meaning": "환영",
    "level": "N3",
    "category": "business",
    "example": {
      "japanese": "この歓迎について考えます。",
      "reading": "この かんげいについて かんがえます。",
      "korean": "이 환영에 대해 생각합니다."
    }
  },
  {
    "id": "w_0692",
    "kanji": "招待",
    "kana": "しょうたい",
    "romaji": "しょうたい",
    "meaning": "초대",
    "level": "N4",
    "category": "travel",
    "example": {
      "japanese": "この招待について考えます。",
      "reading": "この しょうたいについて かんがえます。",
      "korean": "이 초대에 대해 생각합니다."
    }
  },
  {
    "id": "w_0693",
    "kanji": "訪問",
    "kana": "ほうもん",
    "romaji": "ほうもん",
    "meaning": "방문",
    "level": "N3",
    "category": "daily",
    "example": {
      "japanese": "この訪問について考えます。",
      "reading": "この ほうもんについて かんがえます。",
      "korean": "이 방문에 대해 생각합니다."
    }
  },
  {
    "id": "w_0694",
    "kanji": "見学",
    "kana": "けんがく",
    "romaji": "けんがく",
    "meaning": "견학",
    "level": "N2",
    "category": "food",
    "example": {
      "japanese": "この見学について考えます。",
      "reading": "この けんがくについて かんがえます。",
      "korean": "이 견학에 대해 생각합니다."
    }
  },
  {
    "id": "w_0695",
    "kanji": "見物",
    "kana": "けんぶつ",
    "romaji": "けんぶつ",
    "meaning": "구경",
    "level": "N4",
    "category": "business",
    "example": {
      "japanese": "この見物について考えます。",
      "reading": "この けんぶつについて かんがえます。",
      "korean": "이 구경에 대해 생각합니다."
    }
  },
  {
    "id": "w_0696",
    "kanji": "散策",
    "kana": "さんさく",
    "romaji": "さんさく",
    "meaning": "산책, 산책길",
    "level": "N4",
    "category": "travel",
    "example": {
      "japanese": "この散策について考えます。",
      "reading": "この さんさくについて かんがえます。",
      "korean": "이 산책, 산책길에 대해 생각합니다."
    }
  },
  {
    "id": "w_0697",
    "kanji": "移動",
    "kana": "いどう",
    "romaji": "いどう",
    "meaning": "이동",
    "level": "N3",
    "category": "daily",
    "example": {
      "japanese": "この移動について考えます。",
      "reading": "この いどうについて かんがえます。",
      "korean": "이 이동에 대해 생각합니다."
    }
  },
  {
    "id": "w_0698",
    "kanji": "出発",
    "kana": "しゅっぱつ",
    "romaji": "しゅっぱつ",
    "meaning": "출발",
    "level": "N4",
    "category": "food",
    "example": {
      "japanese": "この出発について考えます。",
      "reading": "この しゅっぱつについて かんがえます。",
      "korean": "이 출발에 대해 생각합니다."
    }
  },
  {
    "id": "w_0699",
    "kanji": "到着",
    "kana": "とうちゃく",
    "romaji": "とうちゃく",
    "meaning": "도착",
    "level": "N3",
    "category": "business",
    "example": {
      "japanese": "この到着について考えます。",
      "reading": "この とうちゃくについて かんがえます。",
      "korean": "이 도착에 대해 생각합니다."
    }
  },
  {
    "id": "w_0700",
    "kanji": "通過",
    "kana": "つうか",
    "romaji": "つうか",
    "meaning": "통과",
    "level": "N3",
    "category": "travel",
    "example": {
      "japanese": "この通過について考えます。",
      "reading": "この つうかについて かんがえます。",
      "korean": "이 통과에 대해 생각합니다."
    }
  },
  {
    "id": "w_0701",
    "kanji": "入場",
    "kana": "にゅうじょう",
    "romaji": "にゅうじょう",
    "meaning": "입장",
    "level": "N3",
    "category": "daily",
    "example": {
      "japanese": "この入場について考えます。",
      "reading": "この にゅうじょうについて かんがえます。",
      "korean": "이 입장에 대해 생각합니다."
    }
  },
  {
    "id": "w_0702",
    "kanji": "退場",
    "kana": "たいじょう",
    "romaji": "たいじょう",
    "meaning": "퇴장",
    "level": "N4",
    "category": "food",
    "example": {
      "japanese": "この退場について考えます。",
      "reading": "この たいじょうについて かんがえます。",
      "korean": "이 퇴장에 대해 생각합니다."
    }
  },
  {
    "id": "w_0703",
    "kanji": "禁止",
    "kana": "きんし",
    "romaji": "きんし",
    "meaning": "금지",
    "level": "N3",
    "category": "business",
    "example": {
      "japanese": "この禁止について考えます。",
      "reading": "この きんしについて かんがえます。",
      "korean": "이 금지에 대해 생각합니다."
    }
  },
  {
    "id": "w_0704",
    "kanji": "許可",
    "kana": "きょか",
    "romaji": "きょか",
    "meaning": "허가",
    "level": "N3",
    "category": "travel",
    "example": {
      "japanese": "この許可について考えます。",
      "reading": "この きょかについて かんがえます。",
      "korean": "이 허가에 대해 생각합니다."
    }
  },
  {
    "id": "w_0705",
    "kanji": "自由",
    "kana": "じゆう",
    "romaji": "じゆう",
    "meaning": "자유",
    "level": "N4",
    "category": "daily",
    "example": {
      "japanese": "この自由について考えます。",
      "reading": "この じゆうについて かんがえます。",
      "korean": "이 자유에 대해 생각합니다."
    }
  },
  {
    "id": "w_0706",
    "kanji": "便利",
    "kana": "べんり",
    "romaji": "べんり",
    "meaning": "편리",
    "level": "N5",
    "category": "food",
    "example": {
      "japanese": "この便利について考えます。",
      "reading": "この べんりについて かんがえます。",
      "korean": "이 편리에 대해 생각합니다."
    }
  },
  {
    "id": "w_0707",
    "kanji": "快適",
    "kana": "かいてき",
    "romaji": "かいてき",
    "meaning": "쾌적",
    "level": "N3",
    "category": "business",
    "example": {
      "japanese": "この快適について考えます。",
      "reading": "この かいてきについて かんがえます。",
      "korean": "이 쾌적에 대해 생각합니다."
    }
  },
  {
    "id": "w_0708",
    "kanji": "新鮮",
    "kana": "しんせん",
    "romaji": "しんせん",
    "meaning": "신선",
    "level": "N3",
    "category": "travel",
    "example": {
      "japanese": "この新鮮について考えます。",
      "reading": "この しんせんについて かんがえます。",
      "korean": "이 신선에 대해 생각합니다."
    }
  },
  {
    "id": "w_0709",
    "kanji": "清潔",
    "kana": "せいけつ",
    "romaji": "せいけつ",
    "meaning": "청결",
    "level": "N3",
    "category": "daily",
    "example": {
      "japanese": "この清潔について考えます。",
      "reading": "この せいけつについて かんがえます。",
      "korean": "이 청결에 대해 생각합니다."
    }
  },
  {
    "id": "w_0710",
    "kanji": "綺麗",
    "kana": "きれい",
    "romaji": "きれい",
    "meaning": "예쁨, 깨끗함",
    "level": "N5",
    "category": "food",
    "example": {
      "japanese": "この綺麗について考えます。",
      "reading": "この きれいについて かんがえます。",
      "korean": "이 예쁨, 깨끗함에 대해 생각합니다."
    }
  },
  {
    "id": "w_0711",
    "kanji": "豊富",
    "kana": "ほうふ",
    "romaji": "ほうふ",
    "meaning": "풍부",
    "level": "N3",
    "category": "business",
    "example": {
      "japanese": "この豊富について考えます。",
      "reading": "この ほうふについて かんがえます。",
      "korean": "이 풍부에 대해 생각합니다."
    }
  },
  {
    "id": "w_0712",
    "kanji": "貴重",
    "kana": "きちょう",
    "romaji": "きちょう",
    "meaning": "귀중",
    "level": "N3",
    "category": "travel",
    "example": {
      "japanese": "この貴重について考えます。",
      "reading": "この きちょうについて かんがえます。",
      "korean": "이 귀중에 대해 생각합니다."
    }
  },
  {
    "id": "w_0713",
    "kanji": "重要",
    "kana": "じゅうよう",
    "romaji": "じゅうよう",
    "meaning": "중요",
    "level": "N3",
    "category": "daily",
    "example": {
      "japanese": "この重要について考えます。",
      "reading": "この じゅうようについて かんがえます。",
      "korean": "이 중요에 대해 생각합니다."
    }
  },
  {
    "id": "w_0714",
    "kanji": "計画",
    "kana": "けいかく",
    "romaji": "けいかく",
    "meaning": "계획",
    "level": "N4",
    "category": "food",
    "example": {
      "japanese": "この計画について考えます。",
      "reading": "この けいかくについて かんがえます。",
      "korean": "이 계획에 대해 생각합니다."
    }
  },
  {
    "id": "w_0715",
    "kanji": "旅行",
    "kana": "りょこう",
    "romaji": "りょこう",
    "meaning": "여행",
    "level": "N5",
    "category": "business",
    "example": {
      "japanese": "この旅行について考えます。",
      "reading": "この りょこうについて かんがえます。",
      "korean": "이 여행에 대해 생각합니다."
    }
  },
  {
    "id": "w_0716",
    "kanji": "記録",
    "kana": "きろく",
    "romaji": "きろく",
    "meaning": "기록",
    "level": "N3",
    "category": "travel",
    "example": {
      "japanese": "この記録について考えます。",
      "reading": "この きろくについて かんがえます。",
      "korean": "이 기록에 대해 생각합니다."
    }
  },
  {
    "id": "w_0717",
    "kanji": "発見",
    "kana": "はっけん",
    "romaji": "はっけん",
    "meaning": "발견",
    "level": "N3",
    "category": "daily",
    "example": {
      "japanese": "この発見について考えます。",
      "reading": "この はっけんについて かんがえます。",
      "korean": "이 발견에 대해 생각합니다."
    }
  },
  {
    "id": "w_0718",
    "kanji": "生活",
    "kana": "せいかつ",
    "romaji": "せいかつ",
    "meaning": "생활",
    "level": "N4",
    "category": "food",
    "example": {
      "japanese": "この生活について考えます。",
      "reading": "この せいかつについて かんがえます。",
      "korean": "이 생활에 대해 생각합니다."
    }
  },
  {
    "id": "w_0719",
    "kanji": "活動",
    "kana": "かつどう",
    "romaji": "かつどう",
    "meaning": "활동",
    "level": "N3",
    "category": "business",
    "example": {
      "japanese": "この活動について考えます。",
      "reading": "この かつどうについて かんがえます。",
      "korean": "이 활동에 대해 생각합니다."
    }
  },
  {
    "id": "w_0720",
    "kanji": "行動",
    "kana": "こうどう",
    "romaji": "こうどう",
    "meaning": "행동",
    "level": "N3",
    "category": "travel",
    "example": {
      "japanese": "この行動について考えます。",
      "reading": "この こうどうについて かんがえます。",
      "korean": "이 행동에 대해 생각합니다."
    }
  },
  {
    "id": "w_0721",
    "kanji": "希望",
    "kana": "きぼう",
    "romaji": "きぼう",
    "meaning": "희망",
    "level": "N3",
    "category": "daily",
    "example": {
      "japanese": "この希望について考えます。",
      "reading": "この きぼうについて かんがえます。",
      "korean": "이 희망에 대해 생각합니다."
    }
  },
  {
    "id": "w_0722",
    "kanji": "成功",
    "kana": "せいこう",
    "romaji": "せいこう",
    "meaning": "성공",
    "level": "N3",
    "category": "food",
    "example": {
      "japanese": "この成功について考えます。",
      "reading": "この せいこうについて かんがえます。",
      "korean": "이 성공에 대해 생각합니다."
    }
  },
  {
    "id": "w_0723",
    "kanji": "失敗",
    "kana": "しっぱい",
    "romaji": "しっぱい",
    "meaning": "실패",
    "level": "N4",
    "category": "business",
    "example": {
      "japanese": "この失敗について考えます。",
      "reading": "この しっぱいについて かんがえます。",
      "korean": "이 실패에 대해 생각합니다."
    }
  },
  {
    "id": "w_0724",
    "kanji": "感謝",
    "kana": "かんしゃ",
    "romaji": "かんしゃ",
    "meaning": "감사",
    "level": "N3",
    "category": "travel",
    "example": {
      "japanese": "この感謝について考えます。",
      "reading": "この かんしゃについて かんがえます。",
      "korean": "이 감사에 대해 생각합니다."
    }
  },
  {
    "id": "w_0725",
    "kanji": "尊敬",
    "kana": "そんけい",
    "romaji": "そんけい",
    "meaning": "존경",
    "level": "N3",
    "category": "daily",
    "example": {
      "japanese": "この尊敬について考えます。",
      "reading": "この そんけいについて かんがえます。",
      "korean": "이 존경에 대해 생각합니다."
    }
  },
  {
    "id": "w_0726",
    "kanji": "愛情",
    "kana": "あいじょう",
    "romaji": "あいじょう",
    "meaning": "애정",
    "level": "N3",
    "category": "food",
    "example": {
      "japanese": "この愛情について考えます。",
      "reading": "この あいじょうについて かんがえます。",
      "korean": "이 애정에 대해 생각합니다."
    }
  },
  {
    "id": "w_0727",
    "kanji": "友情",
    "kana": "ゆうじょう",
    "romaji": "ゆうじょう",
    "meaning": "우정",
    "level": "N3",
    "category": "business",
    "example": {
      "japanese": "この友情について考えます。",
      "reading": "この ゆうじょうについて かんがえます。",
      "korean": "이 우정에 대해 생각합니다."
    }
  },
  {
    "id": "w_0728",
    "kanji": "関係",
    "kana": "かんけい",
    "romaji": "かんけい",
    "meaning": "관계",
    "level": "N4",
    "category": "travel",
    "example": {
      "japanese": "この関係について考えます。",
      "reading": "この かんけいについて かんがえます。",
      "korean": "이 관계에 대해 생각합니다."
    }
  },
  {
    "id": "w_0729",
    "kanji": "結果",
    "kana": "けっか",
    "romaji": "けっか",
    "meaning": "결과",
    "level": "N3",
    "category": "daily",
    "example": {
      "japanese": "この結果について考えます。",
      "reading": "この けっかについて かんがえます。",
      "korean": "이 결과에 대해 생각합니다."
    }
  },
  {
    "id": "w_0730",
    "kanji": "原因",
    "kana": "げんいん",
    "romaji": "げんいん",
    "meaning": "원인",
    "level": "N4",
    "category": "food",
    "example": {
      "japanese": "この原因について考えます。",
      "reading": "この げんいんについて かんがえます。",
      "korean": "이 원인에 대해 생각합니다."
    }
  },
  {
    "id": "w_0731",
    "kanji": "理由",
    "kana": "りゆう",
    "romaji": "りゆう",
    "meaning": "이유",
    "level": "N4",
    "category": "business",
    "example": {
      "japanese": "この理由について考えます。",
      "reading": "この りゆうについて かんがえます。",
      "korean": "이 이유에 대해 생각합니다."
    }
  },
  {
    "id": "w_0732",
    "kanji": "目的",
    "kana": "もくてき",
    "romaji": "もくてき",
    "meaning": "목적",
    "level": "N3",
    "category": "travel",
    "example": {
      "japanese": "この目的について考えます。",
      "reading": "この もくてきについて かんがえます。",
      "korean": "이 목적에 대해 생각합니다."
    }
  },
  {
    "id": "w_0733",
    "kanji": "目標",
    "kana": "もくひょう",
    "romaji": "もくひょう",
    "meaning": "목표",
    "level": "N3",
    "category": "daily",
    "example": {
      "japanese": "この目標について考えます。",
      "reading": "この もくひょうについて かんがえます。",
      "korean": "이 목표에 대해 생각합니다."
    }
  },
  {
    "id": "w_0734",
    "kanji": "意見",
    "kana": "いけん",
    "romaji": "いけん",
    "meaning": "의견",
    "level": "N4",
    "category": "food",
    "example": {
      "japanese": "この意見について考えます。",
      "reading": "この いけんについて かんがえます。",
      "korean": "이 의견에 대해 생각합니다."
    }
  },
  {
    "id": "w_0735",
    "kanji": "考え",
    "kana": "かんがえ",
    "romaji": "かんがえ",
    "meaning": "생각",
    "level": "N3",
    "category": "business",
    "example": {
      "japanese": "この考えについて考えます。",
      "reading": "この かんがえについて かんがえます。",
      "korean": "이 생각에 대해 생각합니다."
    }
  },
  {
    "id": "w_0736",
    "kanji": "感情",
    "kana": "かんじょう",
    "romaji": "かんじょう",
    "meaning": "감정",
    "level": "N3",
    "category": "travel",
    "example": {
      "japanese": "この感情について考えます。",
      "reading": "この かんじょうについて かんがえます。",
      "korean": "이 감정에 대해 생각합니다."
    }
  },
  {
    "id": "w_0737",
    "kanji": "表現",
    "kana": "ひょうげん",
    "romaji": "ひょうげん",
    "meaning": "표현",
    "level": "N3",
    "category": "daily",
    "example": {
      "japanese": "この表現について考えます。",
      "reading": "この ひょうげんについて かんがえます。",
      "korean": "이 표현에 대해 생각합니다."
    }
  },
  {
    "id": "w_0738",
    "kanji": "説明",
    "kana": "せつめい",
    "romaji": "せつめい",
    "meaning": "설명",
    "level": "N4",
    "category": "food",
    "example": {
      "japanese": "この説明について考えます。",
      "reading": "この せつめいについて かんがえます。",
      "korean": "이 설명에 대해 생각합니다."
    }
  },
  {
    "id": "w_0739",
    "kanji": "案内",
    "kana": "あんない",
    "romaji": "あんない",
    "meaning": "안내",
    "level": "N4",
    "category": "business",
    "example": {
      "japanese": "この案内について考えます。",
      "reading": "この あんないについて かんがえます。",
      "korean": "이 안내에 대해 생각합니다."
    }
  },
  {
    "id": "w_0740",
    "kanji": "紹介",
    "kana": "しょうかい",
    "romaji": "しょうかい",
    "meaning": "소개",
    "level": "N4",
    "category": "travel",
    "example": {
      "japanese": "この紹介について考えます。",
      "reading": "この しょうかいについて かんがえます。",
      "korean": "이 소개에 대해 생각합니다."
    }
  },
  {
    "id": "w_0741",
    "kanji": "歓迎",
    "kana": "かんげい",
    "romaji": "かんげい",
    "meaning": "환영",
    "level": "N3",
    "category": "daily",
    "example": {
      "japanese": "この歓迎について考えます。",
      "reading": "この かんげいについて かんがえます。",
      "korean": "이 환영에 대해 생각합니다."
    }
  },
  {
    "id": "w_0742",
    "kanji": "招待",
    "kana": "しょうたい",
    "romaji": "しょうたい",
    "meaning": "초대",
    "level": "N4",
    "category": "food",
    "example": {
      "japanese": "この招待について考えます。",
      "reading": "この しょうたいについて かんがえます。",
      "korean": "이 초대에 대해 생각합니다."
    }
  },
  {
    "id": "w_0743",
    "kanji": "訪問",
    "kana": "ほうもん",
    "romaji": "ほうもん",
    "meaning": "방문",
    "level": "N3",
    "category": "business",
    "example": {
      "japanese": "この訪問について考えます。",
      "reading": "この ほうもんについて かんがえます。",
      "korean": "이 방문에 대해 생각합니다."
    }
  },
  {
    "id": "w_0744",
    "kanji": "見学",
    "kana": "けんがく",
    "romaji": "けんがく",
    "meaning": "견학",
    "level": "N2",
    "category": "travel",
    "example": {
      "japanese": "この見学について考えます。",
      "reading": "この けんがくについて かんがえます。",
      "korean": "이 견학에 대해 생각합니다."
    }
  },
  {
    "id": "w_0745",
    "kanji": "見物",
    "kana": "けんぶつ",
    "romaji": "けんぶつ",
    "meaning": "구경",
    "level": "N4",
    "category": "daily",
    "example": {
      "japanese": "この見物について考えます。",
      "reading": "この けんぶつについて かんがえます。",
      "korean": "이 구경에 대해 생각합니다."
    }
  },
  {
    "id": "w_0746",
    "kanji": "散策",
    "kana": "さんさく",
    "romaji": "さんさく",
    "meaning": "산책, 산책길",
    "level": "N3",
    "category": "food",
    "example": {
      "japanese": "この散策について考えます。",
      "reading": "この さんさくについて かんがえます。",
      "korean": "이 산책, 산책길에 대해 생각합니다."
    }
  },
  {
    "id": "w_0747",
    "kanji": "移動",
    "kana": "いどう",
    "romaji": "いどう",
    "meaning": "이동",
    "level": "N3",
    "category": "business",
    "example": {
      "japanese": "この移動について考えます。",
      "reading": "この いどうについて かんがえます。",
      "korean": "이 이동에 대해 생각합니다."
    }
  },
  {
    "id": "w_0748",
    "kanji": "出発",
    "kana": "しゅっぱつ",
    "romaji": "しゅっぱつ",
    "meaning": "출발",
    "level": "N4",
    "category": "travel",
    "example": {
      "japanese": "この出発について考えます。",
      "reading": "この しゅっぱつについて かんがえます。",
      "korean": "이 출발에 대해 생각합니다."
    }
  },
  {
    "id": "w_0749",
    "kanji": "到着",
    "kana": "とうちゃく",
    "romaji": "とうちゃく",
    "meaning": "도착",
    "level": "N3",
    "category": "daily",
    "example": {
      "japanese": "この到着について考えます。",
      "reading": "この とうちゃくについて かんがえます。",
      "korean": "이 도착에 대해 생각합니다."
    }
  },
  {
    "id": "w_0750",
    "kanji": "通過",
    "kana": "つうか",
    "romaji": "つうか",
    "meaning": "통과",
    "level": "N3",
    "category": "food",
    "example": {
      "japanese": "この通過について考えます。",
      "reading": "この つうかについて かんがえます。",
      "korean": "이 통과에 대해 생각합니다."
    }
  },
  {
    "id": "w_0751",
    "kanji": "入場",
    "kana": "にゅうじょう",
    "romaji": "にゅうじょう",
    "meaning": "입장",
    "level": "N3",
    "category": "business",
    "example": {
      "japanese": "この入場について考えます。",
      "reading": "この にゅうじょうについて かんがえます。",
      "korean": "이 입장에 대해 생각합니다."
    }
  },
  {
    "id": "w_0752",
    "kanji": "退場",
    "kana": "たいじょう",
    "romaji": "たいじょう",
    "meaning": "퇴장",
    "level": "N3",
    "category": "travel",
    "example": {
      "japanese": "この退場について考えます。",
      "reading": "この たいじょうについて かんがえます。",
      "korean": "이 퇴장에 대해 생각합니다."
    }
  },
  {
    "id": "w_0753",
    "kanji": "禁止",
    "kana": "きんし",
    "romaji": "きんし",
    "meaning": "금지",
    "level": "N3",
    "category": "daily",
    "example": {
      "japanese": "この禁止について考えます。",
      "reading": "この きんしについて かんがえます。",
      "korean": "이 금지에 대해 생각합니다."
    }
  },
  {
    "id": "w_0754",
    "kanji": "許可",
    "kana": "きょか",
    "romaji": "きょか",
    "meaning": "허가",
    "level": "N3",
    "category": "food",
    "example": {
      "japanese": "この許可について考えます。",
      "reading": "この きょかについて かんがえます。",
      "korean": "이 허가에 대해 생각합니다."
    }
  },
  {
    "id": "w_0755",
    "kanji": "自由",
    "kana": "じゆう",
    "romaji": "じゆう",
    "meaning": "자유",
    "level": "N4",
    "category": "business",
    "example": {
      "japanese": "この自由について考えます。",
      "reading": "この じゆうについて かんがえます。",
      "korean": "이 자유에 대해 생각합니다."
    }
  },
  {
    "id": "w_0756",
    "kanji": "便利",
    "kana": "べんり",
    "romaji": "べんり",
    "meaning": "편리",
    "level": "N5",
    "category": "travel",
    "example": {
      "japanese": "この便利について考えます。",
      "reading": "この べんりについて かんがえます。",
      "korean": "이 편리에 대해 생각합니다."
    }
  },
  {
    "id": "w_0757",
    "kanji": "快適",
    "kana": "かいてき",
    "romaji": "かいてき",
    "meaning": "쾌적",
    "level": "N3",
    "category": "daily",
    "example": {
      "japanese": "この快適について考えます。",
      "reading": "この かいてきについて かんがえます。",
      "korean": "이 쾌적에 대해 생각합니다."
    }
  },
  {
    "id": "w_0758",
    "kanji": "新鮮",
    "kana": "しんせん",
    "romaji": "しんせん",
    "meaning": "신선",
    "level": "N3",
    "category": "food",
    "example": {
      "japanese": "この新鮮について考えます。",
      "reading": "この しんせんについて かんがえます。",
      "korean": "이 신선에 대해 생각합니다."
    }
  },
  {
    "id": "w_0759",
    "kanji": "清潔",
    "kana": "せいけつ",
    "romaji": "せいけつ",
    "meaning": "청결",
    "level": "N3",
    "category": "business",
    "example": {
      "japanese": "この清潔について考えます。",
      "reading": "この せいけつについて かんがえます。",
      "korean": "이 청결에 대해 생각합니다."
    }
  },
  {
    "id": "w_0760",
    "kanji": "綺麗",
    "kana": "きれい",
    "romaji": "きれい",
    "meaning": "예쁨, 깨끗함",
    "level": "N5",
    "category": "travel",
    "example": {
      "japanese": "この綺麗について考えます。",
      "reading": "この きれいについて かんがえます。",
      "korean": "이 예쁨, 깨끗함에 대해 생각합니다."
    }
  },
  {
    "id": "w_0761",
    "kanji": "豊富",
    "kana": "ほうふ",
    "romaji": "ほうふ",
    "meaning": "풍부",
    "level": "N3",
    "category": "daily",
    "example": {
      "japanese": "この豊富について考えます。",
      "reading": "この ほうふについて かんがえます。",
      "korean": "이 풍부에 대해 생각합니다."
    }
  },
  {
    "id": "w_0762",
    "kanji": "貴重",
    "kana": "きちょう",
    "romaji": "きちょう",
    "meaning": "귀중",
    "level": "N3",
    "category": "food",
    "example": {
      "japanese": "この貴重について考えます。",
      "reading": "この きちょうについて かんがえます。",
      "korean": "이 귀중에 대해 생각합니다."
    }
  },
  {
    "id": "w_0763",
    "kanji": "重要",
    "kana": "じゅうよう",
    "romaji": "じゅうよう",
    "meaning": "중요",
    "level": "N3",
    "category": "business",
    "example": {
      "japanese": "この重要について考えます。",
      "reading": "この じゅうようについて かんがえます。",
      "korean": "이 중요에 대해 생각합니다."
    }
  },
  {
    "id": "w_0764",
    "kanji": "計画",
    "kana": "けいかく",
    "romaji": "けいかく",
    "meaning": "계획",
    "level": "N4",
    "category": "travel",
    "example": {
      "japanese": "この計画について考えます。",
      "reading": "この けいかくについて かんがえます。",
      "korean": "이 계획에 대해 생각합니다."
    }
  },
  {
    "id": "w_0765",
    "kanji": "旅行",
    "kana": "りょこう",
    "romaji": "りょこう",
    "meaning": "여행",
    "level": "N5",
    "category": "daily",
    "example": {
      "japanese": "この旅行について考えます。",
      "reading": "この りょこうについて かんがえます。",
      "korean": "이 여행에 대해 생각합니다."
    }
  },
  {
    "id": "w_0766",
    "kanji": "記録",
    "kana": "きろく",
    "romaji": "きろく",
    "meaning": "기록",
    "level": "N3",
    "category": "food",
    "example": {
      "japanese": "この記録について考えます。",
      "reading": "この きろくについて かんがえます。",
      "korean": "이 기록에 대해 생각합니다."
    }
  },
  {
    "id": "w_0767",
    "kanji": "発見",
    "kana": "はっけん",
    "romaji": "はっけん",
    "meaning": "발견",
    "level": "N3",
    "category": "business",
    "example": {
      "japanese": "この発見について考えます。",
      "reading": "この はっけんについて かんがえます。",
      "korean": "이 발견에 대해 생각합니다."
    }
  },
  {
    "id": "w_0768",
    "kanji": "生活",
    "kana": "せいかつ",
    "romaji": "せいかつ",
    "meaning": "생활",
    "level": "N4",
    "category": "travel",
    "example": {
      "japanese": "この生活について考えます。",
      "reading": "この せいかつについて かんがえます。",
      "korean": "이 생활에 대해 생각합니다."
    }
  },
  {
    "id": "w_0769",
    "kanji": "活動",
    "kana": "かつどう",
    "romaji": "かつどう",
    "meaning": "활동",
    "level": "N3",
    "category": "daily",
    "example": {
      "japanese": "この活動について考えます。",
      "reading": "この かつどうについて かんがえます。",
      "korean": "이 활동에 대해 생각합니다."
    }
  },
  {
    "id": "w_0770",
    "kanji": "行動",
    "kana": "こうどう",
    "romaji": "こうどう",
    "meaning": "행동",
    "level": "N3",
    "category": "food",
    "example": {
      "japanese": "この行動について考えます。",
      "reading": "この こうどうについて かんがえます。",
      "korean": "이 행동에 대해 생각합니다."
    }
  },
  {
    "id": "w_0771",
    "kanji": "希望",
    "kana": "きぼう",
    "romaji": "きぼう",
    "meaning": "희망",
    "level": "N3",
    "category": "business",
    "example": {
      "japanese": "この希望について考えます。",
      "reading": "この きぼうについて かんがえます。",
      "korean": "이 희망에 대해 생각합니다."
    }
  },
  {
    "id": "w_0772",
    "kanji": "成功",
    "kana": "せいこう",
    "romaji": "せいこう",
    "meaning": "성공",
    "level": "N3",
    "category": "travel",
    "example": {
      "japanese": "この成功について考えます。",
      "reading": "この せいこうについて かんがえます。",
      "korean": "이 성공에 대해 생각합니다."
    }
  },
  {
    "id": "w_0773",
    "kanji": "失敗",
    "kana": "しっぱい",
    "romaji": "しっぱい",
    "meaning": "실패",
    "level": "N4",
    "category": "daily",
    "example": {
      "japanese": "この失敗について考えます。",
      "reading": "この しっぱいについて かんがえます。",
      "korean": "이 실패에 대해 생각합니다."
    }
  },
  {
    "id": "w_0774",
    "kanji": "感謝",
    "kana": "かんしゃ",
    "romaji": "かんしゃ",
    "meaning": "감사",
    "level": "N3",
    "category": "food",
    "example": {
      "japanese": "この感謝について考えます。",
      "reading": "この かんしゃについて かんがえます。",
      "korean": "이 감사에 대해 생각합니다."
    }
  },
  {
    "id": "w_0775",
    "kanji": "尊敬",
    "kana": "そんけい",
    "romaji": "そんけい",
    "meaning": "존경",
    "level": "N3",
    "category": "business",
    "example": {
      "japanese": "この尊敬について考えます。",
      "reading": "この そんけいについて かんがえます。",
      "korean": "이 존경에 대해 생각합니다."
    }
  },
  {
    "id": "w_0776",
    "kanji": "愛情",
    "kana": "あいじょう",
    "romaji": "あいじょう",
    "meaning": "애정",
    "level": "N3",
    "category": "travel",
    "example": {
      "japanese": "この愛情について考えます。",
      "reading": "この あいじょうについて かんがえます。",
      "korean": "이 애정에 대해 생각합니다."
    }
  },
  {
    "id": "w_0777",
    "kanji": "友情",
    "kana": "ゆうじょう",
    "romaji": "ゆうじょう",
    "meaning": "우정",
    "level": "N3",
    "category": "daily",
    "example": {
      "japanese": "この友情について考えます。",
      "reading": "この ゆうじょうについて かんがえます。",
      "korean": "이 우정에 대해 생각합니다."
    }
  },
  {
    "id": "w_0778",
    "kanji": "関係",
    "kana": "かんけい",
    "romaji": "かんけい",
    "meaning": "관계",
    "level": "N4",
    "category": "food",
    "example": {
      "japanese": "この関係について考えます。",
      "reading": "この かんけいについて かんがえます。",
      "korean": "이 관계에 대해 생각합니다."
    }
  },
  {
    "id": "w_0779",
    "kanji": "結果",
    "kana": "けっか",
    "romaji": "けっか",
    "meaning": "결과",
    "level": "N3",
    "category": "business",
    "example": {
      "japanese": "この結果について考えます。",
      "reading": "この けっかについて かんがえます。",
      "korean": "이 결과에 대해 생각합니다."
    }
  },
  {
    "id": "w_0780",
    "kanji": "原因",
    "kana": "げんいん",
    "romaji": "げんいん",
    "meaning": "원인",
    "level": "N4",
    "category": "travel",
    "example": {
      "japanese": "この原因について考えます。",
      "reading": "この げんいんについて かんがえます。",
      "korean": "이 원인에 대해 생각합니다."
    }
  },
  {
    "id": "w_0781",
    "kanji": "理由",
    "kana": "りゆう",
    "romaji": "りゆう",
    "meaning": "이유",
    "level": "N4",
    "category": "daily",
    "example": {
      "japanese": "この理由について考えます。",
      "reading": "この りゆうについて かんがえます。",
      "korean": "이 이유에 대해 생각합니다."
    }
  },
  {
    "id": "w_0782",
    "kanji": "目的",
    "kana": "もくてき",
    "romaji": "もくてき",
    "meaning": "목적",
    "level": "N3",
    "category": "food",
    "example": {
      "japanese": "この目的について考えます。",
      "reading": "この もくてきについて かんがえます。",
      "korean": "이 목적에 대해 생각합니다."
    }
  },
  {
    "id": "w_0783",
    "kanji": "目標",
    "kana": "もくひょう",
    "romaji": "もくひょう",
    "meaning": "목표",
    "level": "N3",
    "category": "business",
    "example": {
      "japanese": "この目標について考えます。",
      "reading": "この もくひょうについて かんがえます。",
      "korean": "이 목표에 대해 생각합니다."
    }
  },
  {
    "id": "w_0784",
    "kanji": "意見",
    "kana": "いけん",
    "romaji": "いけん",
    "meaning": "의견",
    "level": "N4",
    "category": "travel",
    "example": {
      "japanese": "この意見について考えます。",
      "reading": "この いけんについて かんがえます。",
      "korean": "이 의견에 대해 생각합니다."
    }
  },
  {
    "id": "w_0785",
    "kanji": "考え",
    "kana": "かんがえ",
    "romaji": "かんがえ",
    "meaning": "생각",
    "level": "N3",
    "category": "daily",
    "example": {
      "japanese": "この考えについて考えます。",
      "reading": "この かんがえについて かんがえます。",
      "korean": "이 생각에 대해 생각합니다."
    }
  },
  {
    "id": "w_0786",
    "kanji": "感情",
    "kana": "かんじょう",
    "romaji": "かんじょう",
    "meaning": "감정",
    "level": "N3",
    "category": "food",
    "example": {
      "japanese": "この感情について考えます。",
      "reading": "この かんじょうについて かんがえます。",
      "korean": "이 감정에 대해 생각합니다."
    }
  },
  {
    "id": "w_0787",
    "kanji": "表現",
    "kana": "ひょうげん",
    "romaji": "ひょうげん",
    "meaning": "표현",
    "level": "N3",
    "category": "business",
    "example": {
      "japanese": "この表現について考えます。",
      "reading": "この ひょうげんについて かんがえます。",
      "korean": "이 표현에 대해 생각합니다."
    }
  },
  {
    "id": "w_0788",
    "kanji": "説明",
    "kana": "せつめい",
    "romaji": "せつめい",
    "meaning": "설명",
    "level": "N4",
    "category": "travel",
    "example": {
      "japanese": "この説明について考えます。",
      "reading": "この せつめいについて かんがえます。",
      "korean": "이 설명에 대해 생각합니다."
    }
  },
  {
    "id": "w_0789",
    "kanji": "案内",
    "kana": "あんない",
    "romaji": "あんない",
    "meaning": "안내",
    "level": "N4",
    "category": "daily",
    "example": {
      "japanese": "この案内について考えます。",
      "reading": "この あんないについて かんがえます。",
      "korean": "이 안내에 대해 생각합니다."
    }
  },
  {
    "id": "w_0790",
    "kanji": "紹介",
    "kana": "しょうかい",
    "romaji": "しょうかい",
    "meaning": "소개",
    "level": "N4",
    "category": "food",
    "example": {
      "japanese": "この紹介について考えます。",
      "reading": "この しょうかいについて かんがえます。",
      "korean": "이 소개에 대해 생각합니다."
    }
  },
  {
    "id": "w_0791",
    "kanji": "歓迎",
    "kana": "かんげい",
    "romaji": "かんげい",
    "meaning": "환영",
    "level": "N3",
    "category": "business",
    "example": {
      "japanese": "この歓迎について考えます。",
      "reading": "この かんげいについて かんがえます。",
      "korean": "이 환영에 대해 생각합니다."
    }
  },
  {
    "id": "w_0792",
    "kanji": "招待",
    "kana": "しょうたい",
    "romaji": "しょうたい",
    "meaning": "초대",
    "level": "N4",
    "category": "travel",
    "example": {
      "japanese": "この招待について考えます。",
      "reading": "この しょうたいについて かんがえます。",
      "korean": "이 초대에 대해 생각합니다."
    }
  },
  {
    "id": "w_0793",
    "kanji": "訪問",
    "kana": "ほうもん",
    "romaji": "ほうもん",
    "meaning": "방문",
    "level": "N3",
    "category": "daily",
    "example": {
      "japanese": "この訪問について考えます。",
      "reading": "この ほうもんについて かんがえます。",
      "korean": "이 방문에 대해 생각합니다."
    }
  },
  {
    "id": "w_0794",
    "kanji": "見学",
    "kana": "けんがく",
    "romaji": "けんがく",
    "meaning": "견학",
    "level": "N2",
    "category": "food",
    "example": {
      "japanese": "この見学について考えます。",
      "reading": "この けんがくについて かんがえます。",
      "korean": "이 견학에 대해 생각합니다."
    }
  },
  {
    "id": "w_0795",
    "kanji": "見物",
    "kana": "けんぶつ",
    "romaji": "けんぶつ",
    "meaning": "구경",
    "level": "N4",
    "category": "business",
    "example": {
      "japanese": "この見物について考えます。",
      "reading": "この けんぶつについて かんがえます。",
      "korean": "이 구경에 대해 생각합니다."
    }
  },
  {
    "id": "w_0796",
    "kanji": "散策",
    "kana": "さんさく",
    "romaji": "さんさく",
    "meaning": "산책, 산책길",
    "level": "N5",
    "category": "travel",
    "example": {
      "japanese": "この散策について考えます。",
      "reading": "この さんさくについて かんがえます。",
      "korean": "이 산책, 산책길에 대해 생각합니다."
    }
  },
  {
    "id": "w_0797",
    "kanji": "移動",
    "kana": "いどう",
    "romaji": "いどう",
    "meaning": "이동",
    "level": "N3",
    "category": "daily",
    "example": {
      "japanese": "この移動について考えます。",
      "reading": "この いどうについて かんがえます。",
      "korean": "이 이동에 대해 생각합니다."
    }
  },
  {
    "id": "w_0798",
    "kanji": "出発",
    "kana": "しゅっぱつ",
    "romaji": "しゅっぱつ",
    "meaning": "출발",
    "level": "N4",
    "category": "food",
    "example": {
      "japanese": "この出発について考えます。",
      "reading": "この しゅっぱつについて かんがえます。",
      "korean": "이 출발에 대해 생각합니다."
    }
  },
  {
    "id": "w_0799",
    "kanji": "到着",
    "kana": "とうちゃく",
    "romaji": "とうちゃく",
    "meaning": "도착",
    "level": "N3",
    "category": "business",
    "example": {
      "japanese": "この到着について考えます。",
      "reading": "この とうちゃくについて かんがえます。",
      "korean": "이 도착에 대해 생각합니다."
    }
  },
  {
    "id": "w_0800",
    "kanji": "通過",
    "kana": "つうか",
    "romaji": "つうか",
    "meaning": "통과",
    "level": "N3",
    "category": "travel",
    "example": {
      "japanese": "この通過について考えます。",
      "reading": "この つうかについて かんがえます。",
      "korean": "이 통과에 대해 생각합니다."
    }
  },
  {
    "id": "w_0801",
    "kanji": "入場",
    "kana": "にゅうじょう",
    "romaji": "にゅうじょう",
    "meaning": "입장",
    "level": "N3",
    "category": "daily",
    "example": {
      "japanese": "この入場について考えます。",
      "reading": "この にゅうじょうについて かんがえます。",
      "korean": "이 입장에 대해 생각합니다."
    }
  },
  {
    "id": "w_0802",
    "kanji": "退場",
    "kana": "たいじょう",
    "romaji": "たいじょう",
    "meaning": "퇴장",
    "level": "N5",
    "category": "food",
    "example": {
      "japanese": "この退場について考えます。",
      "reading": "この たいじょうについて かんがえます。",
      "korean": "이 퇴장에 대해 생각합니다."
    }
  },
  {
    "id": "w_0803",
    "kanji": "禁止",
    "kana": "きんし",
    "romaji": "きんし",
    "meaning": "금지",
    "level": "N3",
    "category": "business",
    "example": {
      "japanese": "この禁止について考えます。",
      "reading": "この きんしについて かんがえます。",
      "korean": "이 금지에 대해 생각합니다."
    }
  },
  {
    "id": "w_0804",
    "kanji": "許可",
    "kana": "きょか",
    "romaji": "きょか",
    "meaning": "허가",
    "level": "N3",
    "category": "travel",
    "example": {
      "japanese": "この許可について考えます。",
      "reading": "この きょかについて かんがえます。",
      "korean": "이 허가에 대해 생각합니다."
    }
  },
  {
    "id": "w_0805",
    "kanji": "自由",
    "kana": "じゆう",
    "romaji": "じゆう",
    "meaning": "자유",
    "level": "N4",
    "category": "daily",
    "example": {
      "japanese": "この自由について考えます。",
      "reading": "この じゆうについて かんがえます。",
      "korean": "이 자유에 대해 생각합니다."
    }
  },
  {
    "id": "w_0806",
    "kanji": "便利",
    "kana": "べんり",
    "romaji": "べんり",
    "meaning": "편리",
    "level": "N5",
    "category": "food",
    "example": {
      "japanese": "この便利について考えます。",
      "reading": "この べんりについて かんがえます。",
      "korean": "이 편리에 대해 생각합니다."
    }
  },
  {
    "id": "w_0807",
    "kanji": "快適",
    "kana": "かいてき",
    "romaji": "かいてき",
    "meaning": "쾌적",
    "level": "N3",
    "category": "business",
    "example": {
      "japanese": "この快適について考えます。",
      "reading": "この かいてきについて かんがえます。",
      "korean": "이 쾌적에 대해 생각합니다."
    }
  },
  {
    "id": "w_0808",
    "kanji": "新鮮",
    "kana": "しんせん",
    "romaji": "しんせん",
    "meaning": "신선",
    "level": "N3",
    "category": "travel",
    "example": {
      "japanese": "この新鮮について考えます。",
      "reading": "この しんせんについて かんがえます。",
      "korean": "이 신선에 대해 생각합니다."
    }
  },
  {
    "id": "w_0809",
    "kanji": "清潔",
    "kana": "せいけつ",
    "romaji": "せいけつ",
    "meaning": "청결",
    "level": "N3",
    "category": "daily",
    "example": {
      "japanese": "この清潔について考えます。",
      "reading": "この せいけつについて かんがえます。",
      "korean": "이 청결에 대해 생각합니다."
    }
  },
  {
    "id": "w_0810",
    "kanji": "綺麗",
    "kana": "きれい",
    "romaji": "きれい",
    "meaning": "예쁨, 깨끗함",
    "level": "N5",
    "category": "food",
    "example": {
      "japanese": "この綺麗について考えます。",
      "reading": "この きれいについて かんがえます。",
      "korean": "이 예쁨, 깨끗함에 대해 생각합니다."
    }
  },
  {
    "id": "w_0811",
    "kanji": "豊富",
    "kana": "ほうふ",
    "romaji": "ほうふ",
    "meaning": "풍부",
    "level": "N3",
    "category": "business",
    "example": {
      "japanese": "この豊富について考えます。",
      "reading": "この ほうふについて かんがえます。",
      "korean": "이 풍부에 대해 생각합니다."
    }
  },
  {
    "id": "w_0812",
    "kanji": "貴重",
    "kana": "きちょう",
    "romaji": "きちょう",
    "meaning": "귀중",
    "level": "N3",
    "category": "travel",
    "example": {
      "japanese": "この貴重について考えます。",
      "reading": "この きちょうについて かんがえます。",
      "korean": "이 귀중에 대해 생각합니다."
    }
  },
  {
    "id": "w_0813",
    "kanji": "重要",
    "kana": "じゅうよう",
    "romaji": "じゅうよう",
    "meaning": "중요",
    "level": "N3",
    "category": "daily",
    "example": {
      "japanese": "この重要について考えます。",
      "reading": "この じゅうようについて かんがえます。",
      "korean": "이 중요에 대해 생각합니다."
    }
  },
  {
    "id": "w_0814",
    "kanji": "計画",
    "kana": "けいかく",
    "romaji": "けいかく",
    "meaning": "계획",
    "level": "N4",
    "category": "food",
    "example": {
      "japanese": "この計画について考えます。",
      "reading": "この けいかくについて かんがえます。",
      "korean": "이 계획에 대해 생각합니다."
    }
  },
  {
    "id": "w_0815",
    "kanji": "旅行",
    "kana": "りょこう",
    "romaji": "りょこう",
    "meaning": "여행",
    "level": "N5",
    "category": "business",
    "example": {
      "japanese": "この旅行について考えます。",
      "reading": "この りょこうについて かんがえます。",
      "korean": "이 여행에 대해 생각합니다."
    }
  },
  {
    "id": "w_0816",
    "kanji": "記録",
    "kana": "きろく",
    "romaji": "きろく",
    "meaning": "기록",
    "level": "N3",
    "category": "travel",
    "example": {
      "japanese": "この記録について考えます。",
      "reading": "この きろくについて かんがえます。",
      "korean": "이 기록에 대해 생각합니다."
    }
  },
  {
    "id": "w_0817",
    "kanji": "発見",
    "kana": "はっけん",
    "romaji": "はっけん",
    "meaning": "발견",
    "level": "N3",
    "category": "daily",
    "example": {
      "japanese": "この発見について考えます。",
      "reading": "この はっけんについて かんがえます。",
      "korean": "이 발견에 대해 생각합니다."
    }
  },
  {
    "id": "w_0818",
    "kanji": "生活",
    "kana": "せいかつ",
    "romaji": "せいかつ",
    "meaning": "생활",
    "level": "N4",
    "category": "food",
    "example": {
      "japanese": "この生活について考えます。",
      "reading": "この せいかつについて かんがえます。",
      "korean": "이 생활에 대해 생각합니다."
    }
  },
  {
    "id": "w_0819",
    "kanji": "活動",
    "kana": "かつどう",
    "romaji": "かつどう",
    "meaning": "활동",
    "level": "N3",
    "category": "business",
    "example": {
      "japanese": "この活動について考えます。",
      "reading": "この かつどうについて かんがえます。",
      "korean": "이 활동에 대해 생각합니다."
    }
  },
  {
    "id": "w_0820",
    "kanji": "行動",
    "kana": "こうどう",
    "romaji": "こうどう",
    "meaning": "행동",
    "level": "N3",
    "category": "travel",
    "example": {
      "japanese": "この行動について考えます。",
      "reading": "この こうどうについて かんがえます。",
      "korean": "이 행동에 대해 생각합니다."
    }
  },
  {
    "id": "w_0821",
    "kanji": "希望",
    "kana": "きぼう",
    "romaji": "きぼう",
    "meaning": "희망",
    "level": "N3",
    "category": "daily",
    "example": {
      "japanese": "この希望について考えます。",
      "reading": "この きぼうについて かんがえます。",
      "korean": "이 희망에 대해 생각합니다."
    }
  },
  {
    "id": "w_0822",
    "kanji": "成功",
    "kana": "せいこう",
    "romaji": "せいこう",
    "meaning": "성공",
    "level": "N3",
    "category": "food",
    "example": {
      "japanese": "この成功について考えます。",
      "reading": "この せいこうについて かんがえます。",
      "korean": "이 성공에 대해 생각합니다."
    }
  },
  {
    "id": "w_0823",
    "kanji": "失敗",
    "kana": "しっぱい",
    "romaji": "しっぱい",
    "meaning": "실패",
    "level": "N4",
    "category": "business",
    "example": {
      "japanese": "この失敗について考えます。",
      "reading": "この しっぱいについて かんがえます。",
      "korean": "이 실패에 대해 생각합니다."
    }
  },
  {
    "id": "w_0824",
    "kanji": "感謝",
    "kana": "かんしゃ",
    "romaji": "かんしゃ",
    "meaning": "감사",
    "level": "N3",
    "category": "travel",
    "example": {
      "japanese": "この感謝について考えます。",
      "reading": "この かんしゃについて かんがえます。",
      "korean": "이 감사에 대해 생각합니다."
    }
  },
  {
    "id": "w_0825",
    "kanji": "尊敬",
    "kana": "そんけい",
    "romaji": "そんけい",
    "meaning": "존경",
    "level": "N3",
    "category": "daily",
    "example": {
      "japanese": "この尊敬について考えます。",
      "reading": "この そんけいについて かんがえます。",
      "korean": "이 존경에 대해 생각합니다."
    }
  },
  {
    "id": "w_0826",
    "kanji": "愛情",
    "kana": "あいじょう",
    "romaji": "あいじょう",
    "meaning": "애정",
    "level": "N3",
    "category": "food",
    "example": {
      "japanese": "この愛情について考えます。",
      "reading": "この あいじょうについて かんがえます。",
      "korean": "이 애정에 대해 생각합니다."
    }
  },
  {
    "id": "w_0827",
    "kanji": "友情",
    "kana": "ゆうじょう",
    "romaji": "ゆうじょう",
    "meaning": "우정",
    "level": "N3",
    "category": "business",
    "example": {
      "japanese": "この友情について考えます。",
      "reading": "この ゆうじょうについて かんがえます。",
      "korean": "이 우정에 대해 생각합니다."
    }
  },
  {
    "id": "w_0828",
    "kanji": "関係",
    "kana": "かんけい",
    "romaji": "かんけい",
    "meaning": "관계",
    "level": "N4",
    "category": "travel",
    "example": {
      "japanese": "この関係について考えます。",
      "reading": "この かんけいについて かんがえます。",
      "korean": "이 관계에 대해 생각합니다."
    }
  },
  {
    "id": "w_0829",
    "kanji": "結果",
    "kana": "けっか",
    "romaji": "けっか",
    "meaning": "결과",
    "level": "N3",
    "category": "daily",
    "example": {
      "japanese": "この結果について考えます。",
      "reading": "この けっかについて かんがえます。",
      "korean": "이 결과에 대해 생각합니다."
    }
  },
  {
    "id": "w_0830",
    "kanji": "原因",
    "kana": "げんいん",
    "romaji": "げんいん",
    "meaning": "원인",
    "level": "N4",
    "category": "food",
    "example": {
      "japanese": "この原因について考えます。",
      "reading": "この げんいんについて かんがえます。",
      "korean": "이 원인에 대해 생각합니다."
    }
  },
  {
    "id": "w_0831",
    "kanji": "理由",
    "kana": "りゆう",
    "romaji": "りゆう",
    "meaning": "이유",
    "level": "N4",
    "category": "business",
    "example": {
      "japanese": "この理由について考えます。",
      "reading": "この りゆうについて かんがえます。",
      "korean": "이 이유에 대해 생각합니다."
    }
  },
  {
    "id": "w_0832",
    "kanji": "目的",
    "kana": "もくてき",
    "romaji": "もくてき",
    "meaning": "목적",
    "level": "N3",
    "category": "travel",
    "example": {
      "japanese": "この目的について考えます。",
      "reading": "この もくてきについて かんがえます。",
      "korean": "이 목적에 대해 생각합니다."
    }
  },
  {
    "id": "w_0833",
    "kanji": "目標",
    "kana": "もくひょう",
    "romaji": "もくひょう",
    "meaning": "목표",
    "level": "N3",
    "category": "daily",
    "example": {
      "japanese": "この目標について考えます。",
      "reading": "この もくひょうについて かんがえます。",
      "korean": "이 목표에 대해 생각합니다."
    }
  },
  {
    "id": "w_0834",
    "kanji": "意見",
    "kana": "いけん",
    "romaji": "いけん",
    "meaning": "의견",
    "level": "N4",
    "category": "food",
    "example": {
      "japanese": "この意見について考えます。",
      "reading": "この いけんについて かんがえます。",
      "korean": "이 의견에 대해 생각합니다."
    }
  },
  {
    "id": "w_0835",
    "kanji": "考え",
    "kana": "かんがえ",
    "romaji": "かんがえ",
    "meaning": "생각",
    "level": "N3",
    "category": "business",
    "example": {
      "japanese": "この考えについて考えます。",
      "reading": "この かんがえについて かんがえます。",
      "korean": "이 생각에 대해 생각합니다."
    }
  },
  {
    "id": "w_0836",
    "kanji": "感情",
    "kana": "かんじょう",
    "romaji": "かんじょう",
    "meaning": "감정",
    "level": "N3",
    "category": "travel",
    "example": {
      "japanese": "この感情について考えます。",
      "reading": "この かんじょうについて かんがえます。",
      "korean": "이 감정에 대해 생각합니다."
    }
  },
  {
    "id": "w_0837",
    "kanji": "表現",
    "kana": "ひょうげん",
    "romaji": "ひょうげん",
    "meaning": "표현",
    "level": "N3",
    "category": "daily",
    "example": {
      "japanese": "この表現について考えます。",
      "reading": "この ひょうげんについて かんがえます。",
      "korean": "이 표현에 대해 생각합니다."
    }
  },
  {
    "id": "w_0838",
    "kanji": "説明",
    "kana": "せつめい",
    "romaji": "せつめい",
    "meaning": "설명",
    "level": "N4",
    "category": "food",
    "example": {
      "japanese": "この説明について考えます。",
      "reading": "この せつめいについて かんがえます。",
      "korean": "이 설명에 대해 생각합니다."
    }
  },
  {
    "id": "w_0839",
    "kanji": "案内",
    "kana": "あんない",
    "romaji": "あんない",
    "meaning": "안내",
    "level": "N4",
    "category": "business",
    "example": {
      "japanese": "この案内について考えます。",
      "reading": "この あんないについて かんがえます。",
      "korean": "이 안내에 대해 생각합니다."
    }
  },
  {
    "id": "w_0840",
    "kanji": "紹介",
    "kana": "しょうかい",
    "romaji": "しょうかい",
    "meaning": "소개",
    "level": "N4",
    "category": "travel",
    "example": {
      "japanese": "この紹介について考えます。",
      "reading": "この しょうかいについて かんがえます。",
      "korean": "이 소개에 대해 생각합니다."
    }
  },
  {
    "id": "w_0841",
    "kanji": "歓迎",
    "kana": "かんげい",
    "romaji": "かんげい",
    "meaning": "환영",
    "level": "N3",
    "category": "daily",
    "example": {
      "japanese": "この歓迎について考えます。",
      "reading": "この かんげいについて かんがえます。",
      "korean": "이 환영에 대해 생각합니다."
    }
  },
  {
    "id": "w_0842",
    "kanji": "招待",
    "kana": "しょうたい",
    "romaji": "しょうたい",
    "meaning": "초대",
    "level": "N4",
    "category": "food",
    "example": {
      "japanese": "この招待について考えます。",
      "reading": "この しょうたいについて かんがえます。",
      "korean": "이 초대에 대해 생각합니다."
    }
  },
  {
    "id": "w_0843",
    "kanji": "訪問",
    "kana": "ほうもん",
    "romaji": "ほうもん",
    "meaning": "방문",
    "level": "N3",
    "category": "business",
    "example": {
      "japanese": "この訪問について考えます。",
      "reading": "この ほうもんについて かんがえます。",
      "korean": "이 방문에 대해 생각합니다."
    }
  },
  {
    "id": "w_0844",
    "kanji": "見学",
    "kana": "けんがく",
    "romaji": "けんがく",
    "meaning": "견학",
    "level": "N2",
    "category": "travel",
    "example": {
      "japanese": "この見学について考えます。",
      "reading": "この けんがくについて かんがえます。",
      "korean": "이 견학에 대해 생각합니다."
    }
  },
  {
    "id": "w_0845",
    "kanji": "見物",
    "kana": "けんぶつ",
    "romaji": "けんぶつ",
    "meaning": "구경",
    "level": "N4",
    "category": "daily",
    "example": {
      "japanese": "この見物について考えます。",
      "reading": "この けんぶつについて かんがえます。",
      "korean": "이 구경에 대해 생각합니다."
    }
  },
  {
    "id": "w_0846",
    "kanji": "散策",
    "kana": "さんさく",
    "romaji": "さんさく",
    "meaning": "산책, 산책길",
    "level": "N4",
    "category": "food",
    "example": {
      "japanese": "この散策について考えます。",
      "reading": "この さんさくについて かんがえます。",
      "korean": "이 산책, 산책길에 대해 생각합니다."
    }
  },
  {
    "id": "w_0847",
    "kanji": "移動",
    "kana": "いどう",
    "romaji": "いどう",
    "meaning": "이동",
    "level": "N3",
    "category": "business",
    "example": {
      "japanese": "この移動について考えます。",
      "reading": "この いどうについて かんがえます。",
      "korean": "이 이동에 대해 생각합니다."
    }
  },
  {
    "id": "w_0848",
    "kanji": "出発",
    "kana": "しゅっぱつ",
    "romaji": "しゅっぱつ",
    "meaning": "출발",
    "level": "N4",
    "category": "travel",
    "example": {
      "japanese": "この出発について考えます。",
      "reading": "この しゅっぱつについて かんがえます。",
      "korean": "이 출발에 대해 생각합니다."
    }
  },
  {
    "id": "w_0849",
    "kanji": "到着",
    "kana": "とうちゃく",
    "romaji": "とうちゃく",
    "meaning": "도착",
    "level": "N3",
    "category": "daily",
    "example": {
      "japanese": "この到着について考えます。",
      "reading": "この とうちゃくについて かんがえます。",
      "korean": "이 도착에 대해 생각합니다."
    }
  },
  {
    "id": "w_0850",
    "kanji": "通過",
    "kana": "つうか",
    "romaji": "つうか",
    "meaning": "통과",
    "level": "N3",
    "category": "food",
    "example": {
      "japanese": "この通過について考えます。",
      "reading": "この つうかについて かんがえます。",
      "korean": "이 통과에 대해 생각합니다."
    }
  },
  {
    "id": "w_0851",
    "kanji": "入場",
    "kana": "にゅうじょう",
    "romaji": "にゅうじょう",
    "meaning": "입장",
    "level": "N3",
    "category": "business",
    "example": {
      "japanese": "この入場について考えます。",
      "reading": "この にゅうじょうについて かんがえます。",
      "korean": "이 입장에 대해 생각합니다."
    }
  },
  {
    "id": "w_0852",
    "kanji": "退場",
    "kana": "たいじょう",
    "romaji": "たいじょう",
    "meaning": "퇴장",
    "level": "N4",
    "category": "travel",
    "example": {
      "japanese": "この退場について考えます。",
      "reading": "この たいじょうについて かんがえます。",
      "korean": "이 퇴장에 대해 생각합니다."
    }
  },
  {
    "id": "w_0853",
    "kanji": "禁止",
    "kana": "きんし",
    "romaji": "きんし",
    "meaning": "금지",
    "level": "N3",
    "category": "daily",
    "example": {
      "japanese": "この禁止について考えます。",
      "reading": "この きんしについて かんがえます。",
      "korean": "이 금지에 대해 생각합니다."
    }
  },
  {
    "id": "w_0854",
    "kanji": "許可",
    "kana": "きょか",
    "romaji": "きょか",
    "meaning": "허가",
    "level": "N3",
    "category": "food",
    "example": {
      "japanese": "この許可について考えます。",
      "reading": "この きょかについて かんがえます。",
      "korean": "이 허가에 대해 생각합니다."
    }
  },
  {
    "id": "w_0855",
    "kanji": "自由",
    "kana": "じゆう",
    "romaji": "じゆう",
    "meaning": "자유",
    "level": "N4",
    "category": "business",
    "example": {
      "japanese": "この自由について考えます。",
      "reading": "この じゆうについて かんがえます。",
      "korean": "이 자유에 대해 생각합니다."
    }
  },
  {
    "id": "w_0856",
    "kanji": "便利",
    "kana": "べんり",
    "romaji": "べんり",
    "meaning": "편리",
    "level": "N5",
    "category": "travel",
    "example": {
      "japanese": "この便利について考えます。",
      "reading": "この べんりについて かんがえます。",
      "korean": "이 편리에 대해 생각합니다."
    }
  },
  {
    "id": "w_0857",
    "kanji": "快適",
    "kana": "かいてき",
    "romaji": "かいてき",
    "meaning": "쾌적",
    "level": "N3",
    "category": "daily",
    "example": {
      "japanese": "この快適について考えます。",
      "reading": "この かいてきについて かんがえます。",
      "korean": "이 쾌적에 대해 생각합니다."
    }
  },
  {
    "id": "w_0858",
    "kanji": "新鮮",
    "kana": "しんせん",
    "romaji": "しんせん",
    "meaning": "신선",
    "level": "N3",
    "category": "food",
    "example": {
      "japanese": "この新鮮について考えます。",
      "reading": "この しんせんについて かんがえます。",
      "korean": "이 신선에 대해 생각합니다."
    }
  },
  {
    "id": "w_0859",
    "kanji": "清潔",
    "kana": "せいけつ",
    "romaji": "せいけつ",
    "meaning": "청결",
    "level": "N3",
    "category": "business",
    "example": {
      "japanese": "この清潔について考えます。",
      "reading": "この せいけつについて かんがえます。",
      "korean": "이 청결에 대해 생각합니다."
    }
  },
  {
    "id": "w_0860",
    "kanji": "綺麗",
    "kana": "きれい",
    "romaji": "きれい",
    "meaning": "예쁨, 깨끗함",
    "level": "N5",
    "category": "travel",
    "example": {
      "japanese": "この綺麗について考えます。",
      "reading": "この きれいについて かんがえます。",
      "korean": "이 예쁨, 깨끗함에 대해 생각합니다."
    }
  },
  {
    "id": "w_0861",
    "kanji": "豊富",
    "kana": "ほうふ",
    "romaji": "ほうふ",
    "meaning": "풍부",
    "level": "N3",
    "category": "daily",
    "example": {
      "japanese": "この豊富について考えます。",
      "reading": "この ほうふについて かんがえます。",
      "korean": "이 풍부에 대해 생각합니다."
    }
  },
  {
    "id": "w_0862",
    "kanji": "貴重",
    "kana": "きちょう",
    "romaji": "きちょう",
    "meaning": "귀중",
    "level": "N3",
    "category": "food",
    "example": {
      "japanese": "この貴重について考えます。",
      "reading": "この きちょうについて かんがえます。",
      "korean": "이 귀중에 대해 생각합니다."
    }
  },
  {
    "id": "w_0863",
    "kanji": "重要",
    "kana": "じゅうよう",
    "romaji": "じゅうよう",
    "meaning": "중요",
    "level": "N3",
    "category": "business",
    "example": {
      "japanese": "この重要について考えます。",
      "reading": "この じゅうようについて かんがえます。",
      "korean": "이 중요에 대해 생각합니다."
    }
  },
  {
    "id": "w_0864",
    "kanji": "計画",
    "kana": "けいかく",
    "romaji": "けいかく",
    "meaning": "계획",
    "level": "N4",
    "category": "travel",
    "example": {
      "japanese": "この計画について考えます。",
      "reading": "この けいかくについて かんがえます。",
      "korean": "이 계획에 대해 생각합니다."
    }
  },
  {
    "id": "w_0865",
    "kanji": "旅行",
    "kana": "りょこう",
    "romaji": "りょこう",
    "meaning": "여행",
    "level": "N5",
    "category": "daily",
    "example": {
      "japanese": "この旅行について考えます。",
      "reading": "この りょこうについて かんがえます。",
      "korean": "이 여행에 대해 생각합니다."
    }
  },
  {
    "id": "w_0866",
    "kanji": "記録",
    "kana": "きろく",
    "romaji": "きろく",
    "meaning": "기록",
    "level": "N3",
    "category": "food",
    "example": {
      "japanese": "この記録について考えます。",
      "reading": "この きろくについて かんがえます。",
      "korean": "이 기록에 대해 생각합니다."
    }
  },
  {
    "id": "w_0867",
    "kanji": "発見",
    "kana": "はっけん",
    "romaji": "はっけん",
    "meaning": "발견",
    "level": "N3",
    "category": "business",
    "example": {
      "japanese": "この発見について考えます。",
      "reading": "この はっけんについて かんがえます。",
      "korean": "이 발견에 대해 생각합니다."
    }
  },
  {
    "id": "w_0868",
    "kanji": "生活",
    "kana": "せいかつ",
    "romaji": "せいかつ",
    "meaning": "생활",
    "level": "N4",
    "category": "travel",
    "example": {
      "japanese": "この生活について考えます。",
      "reading": "この せいかつについて かんがえます。",
      "korean": "이 생활에 대해 생각합니다."
    }
  },
  {
    "id": "w_0869",
    "kanji": "活動",
    "kana": "かつどう",
    "romaji": "かつどう",
    "meaning": "활동",
    "level": "N3",
    "category": "daily",
    "example": {
      "japanese": "この活動について考えます。",
      "reading": "この かつどうについて かんがえます。",
      "korean": "이 활동에 대해 생각합니다."
    }
  },
  {
    "id": "w_0870",
    "kanji": "行動",
    "kana": "こうどう",
    "romaji": "こうどう",
    "meaning": "행동",
    "level": "N3",
    "category": "food",
    "example": {
      "japanese": "この行動について考えます。",
      "reading": "この こうどうについて かんがえます。",
      "korean": "이 행동에 대해 생각합니다."
    }
  },
  {
    "id": "w_0871",
    "kanji": "希望",
    "kana": "きぼう",
    "romaji": "きぼう",
    "meaning": "희망",
    "level": "N3",
    "category": "business",
    "example": {
      "japanese": "この希望について考えます。",
      "reading": "この きぼうについて かんがえます。",
      "korean": "이 희망에 대해 생각합니다."
    }
  },
  {
    "id": "w_0872",
    "kanji": "成功",
    "kana": "せいこう",
    "romaji": "せいこう",
    "meaning": "성공",
    "level": "N3",
    "category": "travel",
    "example": {
      "japanese": "この成功について考えます。",
      "reading": "この せいこうについて かんがえます。",
      "korean": "이 성공에 대해 생각합니다."
    }
  },
  {
    "id": "w_0873",
    "kanji": "失敗",
    "kana": "しっぱい",
    "romaji": "しっぱい",
    "meaning": "실패",
    "level": "N4",
    "category": "daily",
    "example": {
      "japanese": "この失敗について考えます。",
      "reading": "この しっぱいについて かんがえます。",
      "korean": "이 실패에 대해 생각합니다."
    }
  },
  {
    "id": "w_0874",
    "kanji": "感謝",
    "kana": "かんしゃ",
    "romaji": "かんしゃ",
    "meaning": "감사",
    "level": "N3",
    "category": "food",
    "example": {
      "japanese": "この感謝について考えます。",
      "reading": "この かんしゃについて かんがえます。",
      "korean": "이 감사에 대해 생각합니다."
    }
  },
  {
    "id": "w_0875",
    "kanji": "尊敬",
    "kana": "そんけい",
    "romaji": "そんけい",
    "meaning": "존경",
    "level": "N3",
    "category": "business",
    "example": {
      "japanese": "この尊敬について考えます。",
      "reading": "この そんけいについて かんがえます。",
      "korean": "이 존경에 대해 생각합니다."
    }
  },
  {
    "id": "w_0876",
    "kanji": "愛情",
    "kana": "あいじょう",
    "romaji": "あいじょう",
    "meaning": "애정",
    "level": "N3",
    "category": "travel",
    "example": {
      "japanese": "この愛情について考えます。",
      "reading": "この あいじょうについて かんがえます。",
      "korean": "이 애정에 대해 생각합니다."
    }
  },
  {
    "id": "w_0877",
    "kanji": "友情",
    "kana": "ゆうじょう",
    "romaji": "ゆうじょう",
    "meaning": "우정",
    "level": "N3",
    "category": "daily",
    "example": {
      "japanese": "この友情について考えます。",
      "reading": "この ゆうじょうについて かんがえます。",
      "korean": "이 우정에 대해 생각합니다."
    }
  },
  {
    "id": "w_0878",
    "kanji": "関係",
    "kana": "かんけい",
    "romaji": "かんけい",
    "meaning": "관계",
    "level": "N4",
    "category": "food",
    "example": {
      "japanese": "この関係について考えます。",
      "reading": "この かんけいについて かんがえます。",
      "korean": "이 관계에 대해 생각합니다."
    }
  },
  {
    "id": "w_0879",
    "kanji": "結果",
    "kana": "けっか",
    "romaji": "けっか",
    "meaning": "결과",
    "level": "N3",
    "category": "business",
    "example": {
      "japanese": "この結果について考えます。",
      "reading": "この けっかについて かんがえます。",
      "korean": "이 결과에 대해 생각합니다."
    }
  },
  {
    "id": "w_0880",
    "kanji": "原因",
    "kana": "げんいん",
    "romaji": "げんいん",
    "meaning": "원인",
    "level": "N4",
    "category": "travel",
    "example": {
      "japanese": "この原因について考えます。",
      "reading": "この げんいんについて かんがえます。",
      "korean": "이 원인에 대해 생각합니다."
    }
  },
  {
    "id": "w_0881",
    "kanji": "理由",
    "kana": "りゆう",
    "romaji": "りゆう",
    "meaning": "이유",
    "level": "N4",
    "category": "daily",
    "example": {
      "japanese": "この理由について考えます。",
      "reading": "この りゆうについて かんがえます。",
      "korean": "이 이유에 대해 생각합니다."
    }
  },
  {
    "id": "w_0882",
    "kanji": "目的",
    "kana": "もくてき",
    "romaji": "もくてき",
    "meaning": "목적",
    "level": "N3",
    "category": "food",
    "example": {
      "japanese": "この目的について考えます。",
      "reading": "この もくてきについて かんがえます。",
      "korean": "이 목적에 대해 생각합니다."
    }
  },
  {
    "id": "w_0883",
    "kanji": "目標",
    "kana": "もくひょう",
    "romaji": "もくひょう",
    "meaning": "목표",
    "level": "N3",
    "category": "business",
    "example": {
      "japanese": "この目標について考えます。",
      "reading": "この もくひょうについて かんがえます。",
      "korean": "이 목표에 대해 생각합니다."
    }
  },
  {
    "id": "w_0884",
    "kanji": "意見",
    "kana": "いけん",
    "romaji": "いけん",
    "meaning": "의견",
    "level": "N4",
    "category": "travel",
    "example": {
      "japanese": "この意見について考えます。",
      "reading": "この いけんについて かんがえます。",
      "korean": "이 의견에 대해 생각합니다."
    }
  },
  {
    "id": "w_0885",
    "kanji": "考え",
    "kana": "かんがえ",
    "romaji": "かんがえ",
    "meaning": "생각",
    "level": "N3",
    "category": "daily",
    "example": {
      "japanese": "この考えについて考えます。",
      "reading": "この かんがえについて かんがえます。",
      "korean": "이 생각에 대해 생각합니다."
    }
  },
  {
    "id": "w_0886",
    "kanji": "感情",
    "kana": "かんじょう",
    "romaji": "かんじょう",
    "meaning": "감정",
    "level": "N3",
    "category": "food",
    "example": {
      "japanese": "この感情について考えます。",
      "reading": "この かんじょうについて かんがえます。",
      "korean": "이 감정에 대해 생각합니다."
    }
  },
  {
    "id": "w_0887",
    "kanji": "表現",
    "kana": "ひょうげん",
    "romaji": "ひょうげん",
    "meaning": "표현",
    "level": "N3",
    "category": "business",
    "example": {
      "japanese": "この表現について考えます。",
      "reading": "この ひょうげんについて かんがえます。",
      "korean": "이 표현에 대해 생각합니다."
    }
  },
  {
    "id": "w_0888",
    "kanji": "説明",
    "kana": "せつめい",
    "romaji": "せつめい",
    "meaning": "설명",
    "level": "N4",
    "category": "travel",
    "example": {
      "japanese": "この説明について考えます。",
      "reading": "この せつめいについて かんがえます。",
      "korean": "이 설명에 대해 생각합니다."
    }
  },
  {
    "id": "w_0889",
    "kanji": "案内",
    "kana": "あんない",
    "romaji": "あんない",
    "meaning": "안내",
    "level": "N4",
    "category": "daily",
    "example": {
      "japanese": "この案内について考えます。",
      "reading": "この あんないについて かんがえます。",
      "korean": "이 안내에 대해 생각합니다."
    }
  },
  {
    "id": "w_0890",
    "kanji": "紹介",
    "kana": "しょうかい",
    "romaji": "しょうかい",
    "meaning": "소개",
    "level": "N4",
    "category": "food",
    "example": {
      "japanese": "この紹介について考えます。",
      "reading": "この しょうかいについて かんがえます。",
      "korean": "이 소개에 대해 생각합니다."
    }
  },
  {
    "id": "w_0891",
    "kanji": "歓迎",
    "kana": "かんげい",
    "romaji": "かんげい",
    "meaning": "환영",
    "level": "N3",
    "category": "business",
    "example": {
      "japanese": "この歓迎について考えます。",
      "reading": "この かんげいについて かんがえます。",
      "korean": "이 환영에 대해 생각합니다."
    }
  },
  {
    "id": "w_0892",
    "kanji": "招待",
    "kana": "しょうたい",
    "romaji": "しょうたい",
    "meaning": "초대",
    "level": "N4",
    "category": "travel",
    "example": {
      "japanese": "この招待について考えます。",
      "reading": "この しょうたいについて かんがえます。",
      "korean": "이 초대에 대해 생각합니다."
    }
  },
  {
    "id": "w_0893",
    "kanji": "訪問",
    "kana": "ほうもん",
    "romaji": "ほうもん",
    "meaning": "방문",
    "level": "N3",
    "category": "daily",
    "example": {
      "japanese": "この訪問について考えます。",
      "reading": "この ほうもんについて かんがえます。",
      "korean": "이 방문에 대해 생각합니다."
    }
  },
  {
    "id": "w_0894",
    "kanji": "見学",
    "kana": "けんがく",
    "romaji": "けんがく",
    "meaning": "견학",
    "level": "N2",
    "category": "food",
    "example": {
      "japanese": "この見学について考えます。",
      "reading": "この けんがくについて かんがえます。",
      "korean": "이 견학에 대해 생각합니다."
    }
  },
  {
    "id": "w_0895",
    "kanji": "見物",
    "kana": "けんぶつ",
    "romaji": "けんぶつ",
    "meaning": "구경",
    "level": "N4",
    "category": "business",
    "example": {
      "japanese": "この見物について考えます。",
      "reading": "この けんぶつについて かんがえます。",
      "korean": "이 구경에 대해 생각합니다."
    }
  },
  {
    "id": "w_0896",
    "kanji": "散策",
    "kana": "さんさく",
    "romaji": "さんさく",
    "meaning": "산책, 산책길",
    "level": "N3",
    "category": "travel",
    "example": {
      "japanese": "この散策について考えます。",
      "reading": "この さんさくについて かんがえます。",
      "korean": "이 산책, 산책길에 대해 생각합니다."
    }
  },
  {
    "id": "w_0897",
    "kanji": "移動",
    "kana": "いどう",
    "romaji": "いどう",
    "meaning": "이동",
    "level": "N3",
    "category": "daily",
    "example": {
      "japanese": "この移動について考えます。",
      "reading": "この いどうについて かんがえます。",
      "korean": "이 이동에 대해 생각합니다."
    }
  },
  {
    "id": "w_0898",
    "kanji": "出発",
    "kana": "しゅっぱつ",
    "romaji": "しゅっぱつ",
    "meaning": "출발",
    "level": "N4",
    "category": "food",
    "example": {
      "japanese": "この出発について考えます。",
      "reading": "この しゅっぱつについて かんがえます。",
      "korean": "이 출발에 대해 생각합니다."
    }
  },
  {
    "id": "w_0899",
    "kanji": "到着",
    "kana": "とうちゃく",
    "romaji": "とうちゃく",
    "meaning": "도착",
    "level": "N3",
    "category": "business",
    "example": {
      "japanese": "この到着について考えます。",
      "reading": "この とうちゃくについて かんがえます。",
      "korean": "이 도착에 대해 생각합니다."
    }
  },
  {
    "id": "w_0900",
    "kanji": "通過",
    "kana": "つうか",
    "romaji": "つうか",
    "meaning": "통과",
    "level": "N3",
    "category": "travel",
    "example": {
      "japanese": "この通過について考えます。",
      "reading": "この つうかについて かんがえます。",
      "korean": "이 통과에 대해 생각합니다."
    }
  },
  {
    "id": "w_0901",
    "kanji": "入場",
    "kana": "にゅうじょう",
    "romaji": "にゅうじょう",
    "meaning": "입장",
    "level": "N3",
    "category": "daily",
    "example": {
      "japanese": "この入場について考えます。",
      "reading": "この にゅうじょうについて かんがえます。",
      "korean": "이 입장에 대해 생각합니다."
    }
  },
  {
    "id": "w_0902",
    "kanji": "退場",
    "kana": "たいじょう",
    "romaji": "たいじょう",
    "meaning": "퇴장",
    "level": "N3",
    "category": "food",
    "example": {
      "japanese": "この退場について考えます。",
      "reading": "この たいじょうについて かんがえます。",
      "korean": "이 퇴장에 대해 생각합니다."
    }
  },
  {
    "id": "w_0903",
    "kanji": "禁止",
    "kana": "きんし",
    "romaji": "きんし",
    "meaning": "금지",
    "level": "N3",
    "category": "business",
    "example": {
      "japanese": "この禁止について考えます。",
      "reading": "この きんしについて かんがえます。",
      "korean": "이 금지에 대해 생각합니다."
    }
  },
  {
    "id": "w_0904",
    "kanji": "許可",
    "kana": "きょか",
    "romaji": "きょか",
    "meaning": "허가",
    "level": "N3",
    "category": "travel",
    "example": {
      "japanese": "この許可について考えます。",
      "reading": "この きょかについて かんがえます。",
      "korean": "이 허가에 대해 생각합니다."
    }
  },
  {
    "id": "w_0905",
    "kanji": "自由",
    "kana": "じゆう",
    "romaji": "じゆう",
    "meaning": "자유",
    "level": "N4",
    "category": "daily",
    "example": {
      "japanese": "この自由について考えます。",
      "reading": "この じゆうについて かんがえます。",
      "korean": "이 자유에 대해 생각합니다."
    }
  },
  {
    "id": "w_0906",
    "kanji": "便利",
    "kana": "べんり",
    "romaji": "べんり",
    "meaning": "편리",
    "level": "N5",
    "category": "food",
    "example": {
      "japanese": "この便利について考えます。",
      "reading": "この べんりについて かんがえます。",
      "korean": "이 편리에 대해 생각합니다."
    }
  },
  {
    "id": "w_0907",
    "kanji": "快適",
    "kana": "かいてき",
    "romaji": "かいてき",
    "meaning": "쾌적",
    "level": "N3",
    "category": "business",
    "example": {
      "japanese": "この快適について考えます。",
      "reading": "この かいてきについて かんがえます。",
      "korean": "이 쾌적에 대해 생각합니다."
    }
  },
  {
    "id": "w_0908",
    "kanji": "新鮮",
    "kana": "しんせん",
    "romaji": "しんせん",
    "meaning": "신선",
    "level": "N3",
    "category": "travel",
    "example": {
      "japanese": "この新鮮について考えます。",
      "reading": "この しんせんについて かんがえます。",
      "korean": "이 신선에 대해 생각합니다."
    }
  },
  {
    "id": "w_0909",
    "kanji": "清潔",
    "kana": "せいけつ",
    "romaji": "せいけつ",
    "meaning": "청결",
    "level": "N3",
    "category": "daily",
    "example": {
      "japanese": "この清潔について考えます。",
      "reading": "この せいけつについて かんがえます。",
      "korean": "이 청결에 대해 생각합니다."
    }
  },
  {
    "id": "w_0910",
    "kanji": "綺麗",
    "kana": "きれい",
    "romaji": "きれい",
    "meaning": "예쁨, 깨끗함",
    "level": "N5",
    "category": "food",
    "example": {
      "japanese": "この綺麗について考えます。",
      "reading": "この きれいについて かんがえます。",
      "korean": "이 예쁨, 깨끗함에 대해 생각합니다."
    }
  },
  {
    "id": "w_0911",
    "kanji": "豊富",
    "kana": "ほうふ",
    "romaji": "ほうふ",
    "meaning": "풍부",
    "level": "N3",
    "category": "business",
    "example": {
      "japanese": "この豊富について考えます。",
      "reading": "この ほうふについて かんがえます。",
      "korean": "이 풍부에 대해 생각합니다."
    }
  },
  {
    "id": "w_0912",
    "kanji": "貴重",
    "kana": "きちょう",
    "romaji": "きちょう",
    "meaning": "귀중",
    "level": "N3",
    "category": "travel",
    "example": {
      "japanese": "この貴重について考えます。",
      "reading": "この きちょうについて かんがえます。",
      "korean": "이 귀중에 대해 생각합니다."
    }
  },
  {
    "id": "w_0913",
    "kanji": "重要",
    "kana": "じゅうよう",
    "romaji": "じゅうよう",
    "meaning": "중요",
    "level": "N3",
    "category": "daily",
    "example": {
      "japanese": "この重要について考えます。",
      "reading": "この じゅうようについて かんがえます。",
      "korean": "이 중요에 대해 생각합니다."
    }
  },
  {
    "id": "w_0914",
    "kanji": "計画",
    "kana": "けいかく",
    "romaji": "けいかく",
    "meaning": "계획",
    "level": "N4",
    "category": "food",
    "example": {
      "japanese": "この計画について考えます。",
      "reading": "この けいかくについて かんがえます。",
      "korean": "이 계획에 대해 생각합니다."
    }
  },
  {
    "id": "w_0915",
    "kanji": "旅行",
    "kana": "りょこう",
    "romaji": "りょこう",
    "meaning": "여행",
    "level": "N5",
    "category": "business",
    "example": {
      "japanese": "この旅行について考えます。",
      "reading": "この りょこうについて かんがえます。",
      "korean": "이 여행에 대해 생각합니다."
    }
  },
  {
    "id": "w_0916",
    "kanji": "記録",
    "kana": "きろく",
    "romaji": "きろく",
    "meaning": "기록",
    "level": "N3",
    "category": "travel",
    "example": {
      "japanese": "この記録について考えます。",
      "reading": "この きろくについて かんがえます。",
      "korean": "이 기록에 대해 생각합니다."
    }
  },
  {
    "id": "w_0917",
    "kanji": "発見",
    "kana": "はっけん",
    "romaji": "はっけん",
    "meaning": "발견",
    "level": "N3",
    "category": "daily",
    "example": {
      "japanese": "この発見について考えます。",
      "reading": "この はっけんについて かんがえます。",
      "korean": "이 발견에 대해 생각합니다."
    }
  },
  {
    "id": "w_0918",
    "kanji": "生活",
    "kana": "せいかつ",
    "romaji": "せいかつ",
    "meaning": "생활",
    "level": "N4",
    "category": "food",
    "example": {
      "japanese": "この生活について考えます。",
      "reading": "この せいかつについて かんがえます。",
      "korean": "이 생활에 대해 생각합니다."
    }
  },
  {
    "id": "w_0919",
    "kanji": "活動",
    "kana": "かつどう",
    "romaji": "かつどう",
    "meaning": "활동",
    "level": "N3",
    "category": "business",
    "example": {
      "japanese": "この活動について考えます。",
      "reading": "この かつどうについて かんがえます。",
      "korean": "이 활동에 대해 생각합니다."
    }
  },
  {
    "id": "w_0920",
    "kanji": "行動",
    "kana": "こうどう",
    "romaji": "こうどう",
    "meaning": "행동",
    "level": "N3",
    "category": "travel",
    "example": {
      "japanese": "この行動について考えます。",
      "reading": "この こうどうについて かんがえます。",
      "korean": "이 행동에 대해 생각합니다."
    }
  },
  {
    "id": "w_0921",
    "kanji": "希望",
    "kana": "きぼう",
    "romaji": "きぼう",
    "meaning": "희망",
    "level": "N3",
    "category": "daily",
    "example": {
      "japanese": "この希望について考えます。",
      "reading": "この きぼうについて かんがえます。",
      "korean": "이 희망에 대해 생각합니다."
    }
  },
  {
    "id": "w_0922",
    "kanji": "成功",
    "kana": "せいこう",
    "romaji": "せいこう",
    "meaning": "성공",
    "level": "N3",
    "category": "food",
    "example": {
      "japanese": "この成功について考えます。",
      "reading": "この せいこうについて かんがえます。",
      "korean": "이 성공에 대해 생각합니다."
    }
  },
  {
    "id": "w_0923",
    "kanji": "失敗",
    "kana": "しっぱい",
    "romaji": "しっぱい",
    "meaning": "실패",
    "level": "N4",
    "category": "business",
    "example": {
      "japanese": "この失敗について考えます。",
      "reading": "この しっぱいについて かんがえます。",
      "korean": "이 실패에 대해 생각합니다."
    }
  },
  {
    "id": "w_0924",
    "kanji": "感謝",
    "kana": "かんしゃ",
    "romaji": "かんしゃ",
    "meaning": "감사",
    "level": "N3",
    "category": "travel",
    "example": {
      "japanese": "この感謝について考えます。",
      "reading": "この かんしゃについて かんがえます。",
      "korean": "이 감사에 대해 생각합니다."
    }
  },
  {
    "id": "w_0925",
    "kanji": "尊敬",
    "kana": "そんけい",
    "romaji": "そんけい",
    "meaning": "존경",
    "level": "N3",
    "category": "daily",
    "example": {
      "japanese": "この尊敬について考えます。",
      "reading": "この そんけいについて かんがえます。",
      "korean": "이 존경에 대해 생각합니다."
    }
  },
  {
    "id": "w_0926",
    "kanji": "愛情",
    "kana": "あいじょう",
    "romaji": "あいじょう",
    "meaning": "애정",
    "level": "N3",
    "category": "food",
    "example": {
      "japanese": "この愛情について考えます。",
      "reading": "この あいじょうについて かんがえます。",
      "korean": "이 애정에 대해 생각합니다."
    }
  },
  {
    "id": "w_0927",
    "kanji": "友情",
    "kana": "ゆうじょう",
    "romaji": "ゆうじょう",
    "meaning": "우정",
    "level": "N3",
    "category": "business",
    "example": {
      "japanese": "この友情について考えます。",
      "reading": "この ゆうじょうについて かんがえます。",
      "korean": "이 우정에 대해 생각합니다."
    }
  },
  {
    "id": "w_0928",
    "kanji": "関係",
    "kana": "かんけい",
    "romaji": "かんけい",
    "meaning": "관계",
    "level": "N4",
    "category": "travel",
    "example": {
      "japanese": "この関係について考えます。",
      "reading": "この かんけいについて かんがえます。",
      "korean": "이 관계에 대해 생각합니다."
    }
  },
  {
    "id": "w_0929",
    "kanji": "結果",
    "kana": "けっか",
    "romaji": "けっか",
    "meaning": "결과",
    "level": "N3",
    "category": "daily",
    "example": {
      "japanese": "この結果について考えます。",
      "reading": "この けっかについて かんがえます。",
      "korean": "이 결과에 대해 생각합니다."
    }
  },
  {
    "id": "w_0930",
    "kanji": "原因",
    "kana": "げんいん",
    "romaji": "げんいん",
    "meaning": "원인",
    "level": "N4",
    "category": "food",
    "example": {
      "japanese": "この原因について考えます。",
      "reading": "この げんいんについて かんがえます。",
      "korean": "이 원인에 대해 생각합니다."
    }
  },
  {
    "id": "w_0931",
    "kanji": "理由",
    "kana": "りゆう",
    "romaji": "りゆう",
    "meaning": "이유",
    "level": "N4",
    "category": "business",
    "example": {
      "japanese": "この理由について考えます。",
      "reading": "この りゆうについて かんがえます。",
      "korean": "이 이유에 대해 생각합니다."
    }
  },
  {
    "id": "w_0932",
    "kanji": "目的",
    "kana": "もくてき",
    "romaji": "もくてき",
    "meaning": "목적",
    "level": "N3",
    "category": "travel",
    "example": {
      "japanese": "この目的について考えます。",
      "reading": "この もくてきについて かんがえます。",
      "korean": "이 목적에 대해 생각합니다."
    }
  },
  {
    "id": "w_0933",
    "kanji": "目標",
    "kana": "もくひょう",
    "romaji": "もくひょう",
    "meaning": "목표",
    "level": "N3",
    "category": "daily",
    "example": {
      "japanese": "この目標について考えます。",
      "reading": "この もくひょうについて かんがえます。",
      "korean": "이 목표에 대해 생각합니다."
    }
  },
  {
    "id": "w_0934",
    "kanji": "意見",
    "kana": "いけん",
    "romaji": "いけん",
    "meaning": "의견",
    "level": "N4",
    "category": "food",
    "example": {
      "japanese": "この意見について考えます。",
      "reading": "この いけんについて かんがえます。",
      "korean": "이 의견에 대해 생각합니다."
    }
  },
  {
    "id": "w_0935",
    "kanji": "考え",
    "kana": "かんがえ",
    "romaji": "かんがえ",
    "meaning": "생각",
    "level": "N3",
    "category": "business",
    "example": {
      "japanese": "この考えについて考えます。",
      "reading": "この かんがえについて かんがえます。",
      "korean": "이 생각에 대해 생각합니다."
    }
  },
  {
    "id": "w_0936",
    "kanji": "感情",
    "kana": "かんじょう",
    "romaji": "かんじょう",
    "meaning": "감정",
    "level": "N3",
    "category": "travel",
    "example": {
      "japanese": "この感情について考えます。",
      "reading": "この かんじょうについて かんがえます。",
      "korean": "이 감정에 대해 생각합니다."
    }
  },
  {
    "id": "w_0937",
    "kanji": "表現",
    "kana": "ひょうげん",
    "romaji": "ひょうげん",
    "meaning": "표현",
    "level": "N3",
    "category": "daily",
    "example": {
      "japanese": "この表現について考えます。",
      "reading": "この ひょうげんについて かんがえます。",
      "korean": "이 표현에 대해 생각합니다."
    }
  },
  {
    "id": "w_0938",
    "kanji": "説明",
    "kana": "せつめい",
    "romaji": "せつめい",
    "meaning": "설명",
    "level": "N4",
    "category": "food",
    "example": {
      "japanese": "この説明について考えます。",
      "reading": "この せつめいについて かんがえます。",
      "korean": "이 설명에 대해 생각합니다."
    }
  },
  {
    "id": "w_0939",
    "kanji": "案内",
    "kana": "あんない",
    "romaji": "あんない",
    "meaning": "안내",
    "level": "N4",
    "category": "business",
    "example": {
      "japanese": "この案内について考えます。",
      "reading": "この あんないについて かんがえます。",
      "korean": "이 안내에 대해 생각합니다."
    }
  },
  {
    "id": "w_0940",
    "kanji": "紹介",
    "kana": "しょうかい",
    "romaji": "しょうかい",
    "meaning": "소개",
    "level": "N4",
    "category": "travel",
    "example": {
      "japanese": "この紹介について考えます。",
      "reading": "この しょうかいについて かんがえます。",
      "korean": "이 소개에 대해 생각합니다."
    }
  },
  {
    "id": "w_0941",
    "kanji": "歓迎",
    "kana": "かんげい",
    "romaji": "かんげい",
    "meaning": "환영",
    "level": "N3",
    "category": "daily",
    "example": {
      "japanese": "この歓迎について考えます。",
      "reading": "この かんげいについて かんがえます。",
      "korean": "이 환영에 대해 생각합니다."
    }
  },
  {
    "id": "w_0942",
    "kanji": "招待",
    "kana": "しょうたい",
    "romaji": "しょうたい",
    "meaning": "초대",
    "level": "N4",
    "category": "food",
    "example": {
      "japanese": "この招待について考えます。",
      "reading": "この しょうたいについて かんがえます。",
      "korean": "이 초대에 대해 생각합니다."
    }
  },
  {
    "id": "w_0943",
    "kanji": "訪問",
    "kana": "ほうもん",
    "romaji": "ほうもん",
    "meaning": "방문",
    "level": "N3",
    "category": "business",
    "example": {
      "japanese": "この訪問について考えます。",
      "reading": "この ほうもんについて かんがえます。",
      "korean": "이 방문에 대해 생각합니다."
    }
  },
  {
    "id": "w_0944",
    "kanji": "見学",
    "kana": "けんがく",
    "romaji": "けんがく",
    "meaning": "견학",
    "level": "N2",
    "category": "travel",
    "example": {
      "japanese": "この見学について考えます。",
      "reading": "この けんがくについて かんがえます。",
      "korean": "이 견학에 대해 생각합니다."
    }
  },
  {
    "id": "w_0945",
    "kanji": "見物",
    "kana": "けんぶつ",
    "romaji": "けんぶつ",
    "meaning": "구경",
    "level": "N4",
    "category": "daily",
    "example": {
      "japanese": "この見物について考えます。",
      "reading": "この けんぶつについて かんがえます。",
      "korean": "이 구경에 대해 생각합니다."
    }
  },
  {
    "id": "w_0946",
    "kanji": "散策",
    "kana": "さんさく",
    "romaji": "さんさく",
    "meaning": "산책, 산책길",
    "level": "N5",
    "category": "food",
    "example": {
      "japanese": "この散策について考えます。",
      "reading": "この さんさくについて かんがえます。",
      "korean": "이 산책, 산책길에 대해 생각합니다."
    }
  },
  {
    "id": "w_0947",
    "kanji": "移動",
    "kana": "いどう",
    "romaji": "いどう",
    "meaning": "이동",
    "level": "N3",
    "category": "business",
    "example": {
      "japanese": "この移動について考えます。",
      "reading": "この いどうについて かんがえます。",
      "korean": "이 이동에 대해 생각합니다."
    }
  },
  {
    "id": "w_0948",
    "kanji": "出発",
    "kana": "しゅっぱつ",
    "romaji": "しゅっぱつ",
    "meaning": "출발",
    "level": "N4",
    "category": "travel",
    "example": {
      "japanese": "この出発について考えます。",
      "reading": "この しゅっぱつについて かんがえます。",
      "korean": "이 출발에 대해 생각합니다."
    }
  },
  {
    "id": "w_0949",
    "kanji": "到着",
    "kana": "とうちゃく",
    "romaji": "とうちゃく",
    "meaning": "도착",
    "level": "N3",
    "category": "daily",
    "example": {
      "japanese": "この到着について考えます。",
      "reading": "この とうちゃくについて かんがえます。",
      "korean": "이 도착에 대해 생각합니다."
    }
  },
  {
    "id": "w_0950",
    "kanji": "通過",
    "kana": "つうか",
    "romaji": "つうか",
    "meaning": "통과",
    "level": "N3",
    "category": "food",
    "example": {
      "japanese": "この通過について考えます。",
      "reading": "この つうかについて かんがえます。",
      "korean": "이 통과에 대해 생각합니다."
    }
  },
  {
    "id": "w_0951",
    "kanji": "入場",
    "kana": "にゅうじょう",
    "romaji": "にゅうじょう",
    "meaning": "입장",
    "level": "N3",
    "category": "business",
    "example": {
      "japanese": "この入場について考えます。",
      "reading": "この にゅうじょうについて かんがえます。",
      "korean": "이 입장에 대해 생각합니다."
    }
  },
  {
    "id": "w_0952",
    "kanji": "退場",
    "kana": "たいじょう",
    "romaji": "たいじょう",
    "meaning": "퇴장",
    "level": "N5",
    "category": "travel",
    "example": {
      "japanese": "この退場について考えます。",
      "reading": "この たいじょうについて かんがえます。",
      "korean": "이 퇴장에 대해 생각합니다."
    }
  },
  {
    "id": "w_0953",
    "kanji": "禁止",
    "kana": "きんし",
    "romaji": "きんし",
    "meaning": "금지",
    "level": "N3",
    "category": "daily",
    "example": {
      "japanese": "この禁止について考えます。",
      "reading": "この きんしについて かんがえます。",
      "korean": "이 금지에 대해 생각합니다."
    }
  },
  {
    "id": "w_0954",
    "kanji": "許可",
    "kana": "きょか",
    "romaji": "きょか",
    "meaning": "허가",
    "level": "N3",
    "category": "food",
    "example": {
      "japanese": "この許可について考えます。",
      "reading": "この きょかについて かんがえます。",
      "korean": "이 허가에 대해 생각합니다."
    }
  },
  {
    "id": "w_0955",
    "kanji": "自由",
    "kana": "じゆう",
    "romaji": "じゆう",
    "meaning": "자유",
    "level": "N4",
    "category": "business",
    "example": {
      "japanese": "この自由について考えます。",
      "reading": "この じゆうについて かんがえます。",
      "korean": "이 자유에 대해 생각합니다."
    }
  },
  {
    "id": "w_0956",
    "kanji": "便利",
    "kana": "べんり",
    "romaji": "べんり",
    "meaning": "편리",
    "level": "N5",
    "category": "travel",
    "example": {
      "japanese": "この便利について考えます。",
      "reading": "この べんりについて かんがえます。",
      "korean": "이 편리에 대해 생각합니다."
    }
  },
  {
    "id": "w_0957",
    "kanji": "快適",
    "kana": "かいてき",
    "romaji": "かいてき",
    "meaning": "쾌적",
    "level": "N3",
    "category": "daily",
    "example": {
      "japanese": "この快適について考えます。",
      "reading": "この かいてきについて かんがえます。",
      "korean": "이 쾌적에 대해 생각합니다."
    }
  },
  {
    "id": "w_0958",
    "kanji": "新鮮",
    "kana": "しんせん",
    "romaji": "しんせん",
    "meaning": "신선",
    "level": "N3",
    "category": "food",
    "example": {
      "japanese": "この新鮮について考えます。",
      "reading": "この しんせんについて かんがえます。",
      "korean": "이 신선에 대해 생각합니다."
    }
  },
  {
    "id": "w_0959",
    "kanji": "清潔",
    "kana": "せいけつ",
    "romaji": "せいけつ",
    "meaning": "청결",
    "level": "N3",
    "category": "business",
    "example": {
      "japanese": "この清潔について考えます。",
      "reading": "この せいけつについて かんがえます。",
      "korean": "이 청결에 대해 생각합니다."
    }
  },
  {
    "id": "w_0960",
    "kanji": "綺麗",
    "kana": "きれい",
    "romaji": "きれい",
    "meaning": "예쁨, 깨끗함",
    "level": "N5",
    "category": "travel",
    "example": {
      "japanese": "この綺麗について考えます。",
      "reading": "この きれいについて かんがえます。",
      "korean": "이 예쁨, 깨끗함에 대해 생각합니다."
    }
  },
  {
    "id": "w_0961",
    "kanji": "豊富",
    "kana": "ほうふ",
    "romaji": "ほうふ",
    "meaning": "풍부",
    "level": "N3",
    "category": "daily",
    "example": {
      "japanese": "この豊富について考えます。",
      "reading": "この ほうふについて かんがえます。",
      "korean": "이 풍부에 대해 생각합니다."
    }
  },
  {
    "id": "w_0962",
    "kanji": "貴重",
    "kana": "きちょう",
    "romaji": "きちょう",
    "meaning": "귀중",
    "level": "N3",
    "category": "food",
    "example": {
      "japanese": "この貴重について考えます。",
      "reading": "この きちょうについて かんがえます。",
      "korean": "이 귀중에 대해 생각합니다."
    }
  },
  {
    "id": "w_0963",
    "kanji": "重要",
    "kana": "じゅうよう",
    "romaji": "じゅうよう",
    "meaning": "중요",
    "level": "N3",
    "category": "business",
    "example": {
      "japanese": "この重要について考えます。",
      "reading": "この じゅうようについて かんがえます。",
      "korean": "이 중요에 대해 생각합니다."
    }
  },
  {
    "id": "w_0964",
    "kanji": "計画",
    "kana": "けいかく",
    "romaji": "けいかく",
    "meaning": "계획",
    "level": "N4",
    "category": "travel",
    "example": {
      "japanese": "この計画について考えます。",
      "reading": "この けいかくについて かんがえます。",
      "korean": "이 계획에 대해 생각합니다."
    }
  },
  {
    "id": "w_0965",
    "kanji": "旅行",
    "kana": "りょこう",
    "romaji": "りょこう",
    "meaning": "여행",
    "level": "N5",
    "category": "daily",
    "example": {
      "japanese": "この旅行について考えます。",
      "reading": "この りょこうについて かんがえます。",
      "korean": "이 여행에 대해 생각합니다."
    }
  },
  {
    "id": "w_0966",
    "kanji": "記録",
    "kana": "きろく",
    "romaji": "きろく",
    "meaning": "기록",
    "level": "N3",
    "category": "food",
    "example": {
      "japanese": "この記録について考えます。",
      "reading": "この きろくについて かんがえます。",
      "korean": "이 기록에 대해 생각합니다."
    }
  },
  {
    "id": "w_0967",
    "kanji": "発見",
    "kana": "はっけん",
    "romaji": "はっけん",
    "meaning": "발견",
    "level": "N3",
    "category": "business",
    "example": {
      "japanese": "この発見について考えます。",
      "reading": "この はっけんについて かんがえます。",
      "korean": "이 발견에 대해 생각합니다."
    }
  },
  {
    "id": "w_0968",
    "kanji": "生活",
    "kana": "せいかつ",
    "romaji": "せいかつ",
    "meaning": "생활",
    "level": "N4",
    "category": "travel",
    "example": {
      "japanese": "この生活について考えます。",
      "reading": "この せいかつについて かんがえます。",
      "korean": "이 생활에 대해 생각합니다."
    }
  },
  {
    "id": "w_0969",
    "kanji": "活動",
    "kana": "かつどう",
    "romaji": "かつどう",
    "meaning": "활동",
    "level": "N3",
    "category": "daily",
    "example": {
      "japanese": "この活動について考えます。",
      "reading": "この かつどうについて かんがえます。",
      "korean": "이 활동에 대해 생각합니다."
    }
  },
  {
    "id": "w_0970",
    "kanji": "行動",
    "kana": "こうどう",
    "romaji": "こうどう",
    "meaning": "행동",
    "level": "N3",
    "category": "food",
    "example": {
      "japanese": "この行動について考えます。",
      "reading": "この こうどうについて かんがえます。",
      "korean": "이 행동에 대해 생각합니다."
    }
  },
  {
    "id": "w_0971",
    "kanji": "希望",
    "kana": "きぼう",
    "romaji": "きぼう",
    "meaning": "희망",
    "level": "N3",
    "category": "business",
    "example": {
      "japanese": "この希望について考えます。",
      "reading": "この きぼうについて かんがえます。",
      "korean": "이 희망에 대해 생각합니다."
    }
  },
  {
    "id": "w_0972",
    "kanji": "成功",
    "kana": "せいこう",
    "romaji": "せいこう",
    "meaning": "성공",
    "level": "N3",
    "category": "travel",
    "example": {
      "japanese": "この成功について考えます。",
      "reading": "この せいこうについて かんがえます。",
      "korean": "이 성공에 대해 생각합니다."
    }
  },
  {
    "id": "w_0973",
    "kanji": "失敗",
    "kana": "しっぱい",
    "romaji": "しっぱい",
    "meaning": "실패",
    "level": "N4",
    "category": "daily",
    "example": {
      "japanese": "この失敗について考えます。",
      "reading": "この しっぱいについて かんがえます。",
      "korean": "이 실패에 대해 생각합니다."
    }
  },
  {
    "id": "w_0974",
    "kanji": "感謝",
    "kana": "かんしゃ",
    "romaji": "かんしゃ",
    "meaning": "감사",
    "level": "N3",
    "category": "food",
    "example": {
      "japanese": "この感謝について考えます。",
      "reading": "この かんしゃについて かんがえます。",
      "korean": "이 감사에 대해 생각합니다."
    }
  },
  {
    "id": "w_0975",
    "kanji": "尊敬",
    "kana": "そんけい",
    "romaji": "そんけい",
    "meaning": "존경",
    "level": "N3",
    "category": "business",
    "example": {
      "japanese": "この尊敬について考えます。",
      "reading": "この そんけいについて かんがえます。",
      "korean": "이 존경에 대해 생각합니다."
    }
  },
  {
    "id": "w_0976",
    "kanji": "愛情",
    "kana": "あいじょう",
    "romaji": "あいじょう",
    "meaning": "애정",
    "level": "N3",
    "category": "travel",
    "example": {
      "japanese": "この愛情について考えます。",
      "reading": "この あいじょうについて かんがえます。",
      "korean": "이 애정에 대해 생각합니다."
    }
  },
  {
    "id": "w_0977",
    "kanji": "友情",
    "kana": "ゆうじょう",
    "romaji": "ゆうじょう",
    "meaning": "우정",
    "level": "N3",
    "category": "daily",
    "example": {
      "japanese": "この友情について考えます。",
      "reading": "この ゆうじょうについて かんがえます。",
      "korean": "이 우정에 대해 생각합니다."
    }
  },
  {
    "id": "w_0978",
    "kanji": "関係",
    "kana": "かんけい",
    "romaji": "かんけい",
    "meaning": "관계",
    "level": "N4",
    "category": "food",
    "example": {
      "japanese": "この関係について考えます。",
      "reading": "この かんけいについて かんがえます。",
      "korean": "이 관계에 대해 생각합니다."
    }
  },
  {
    "id": "w_0979",
    "kanji": "結果",
    "kana": "けっか",
    "romaji": "けっか",
    "meaning": "결과",
    "level": "N3",
    "category": "business",
    "example": {
      "japanese": "この結果について考えます。",
      "reading": "この けっかについて かんがえます。",
      "korean": "이 결과에 대해 생각합니다."
    }
  },
  {
    "id": "w_0980",
    "kanji": "原因",
    "kana": "げんいん",
    "romaji": "げんいん",
    "meaning": "원인",
    "level": "N4",
    "category": "travel",
    "example": {
      "japanese": "この原因について考えます。",
      "reading": "この げんいんについて かんがえます。",
      "korean": "이 원인에 대해 생각합니다."
    }
  },
  {
    "id": "w_0981",
    "kanji": "理由",
    "kana": "りゆう",
    "romaji": "りゆう",
    "meaning": "이유",
    "level": "N4",
    "category": "daily",
    "example": {
      "japanese": "この理由について考えます。",
      "reading": "この りゆうについて かんがえます。",
      "korean": "이 이유에 대해 생각합니다."
    }
  },
  {
    "id": "w_0982",
    "kanji": "目的",
    "kana": "もくてき",
    "romaji": "もくてき",
    "meaning": "목적",
    "level": "N3",
    "category": "food",
    "example": {
      "japanese": "この目的について考えます。",
      "reading": "この もくてきについて かんがえます。",
      "korean": "이 목적에 대해 생각합니다."
    }
  },
  {
    "id": "w_0983",
    "kanji": "目標",
    "kana": "もくひょう",
    "romaji": "もくひょう",
    "meaning": "목표",
    "level": "N3",
    "category": "business",
    "example": {
      "japanese": "この目標について考えます。",
      "reading": "この もくひょうについて かんがえます。",
      "korean": "이 목표에 대해 생각합니다."
    }
  },
  {
    "id": "w_0984",
    "kanji": "意見",
    "kana": "いけん",
    "romaji": "いけん",
    "meaning": "의견",
    "level": "N4",
    "category": "travel",
    "example": {
      "japanese": "この意見について考えます。",
      "reading": "この いけんについて かんがえます。",
      "korean": "이 의견에 대해 생각합니다."
    }
  },
  {
    "id": "w_0985",
    "kanji": "考え",
    "kana": "かんがえ",
    "romaji": "かんがえ",
    "meaning": "생각",
    "level": "N3",
    "category": "daily",
    "example": {
      "japanese": "この考えについて考えます。",
      "reading": "この かんがえについて かんがえます。",
      "korean": "이 생각에 대해 생각합니다."
    }
  },
  {
    "id": "w_0986",
    "kanji": "感情",
    "kana": "かんじょう",
    "romaji": "かんじょう",
    "meaning": "감정",
    "level": "N3",
    "category": "food",
    "example": {
      "japanese": "この感情について考えます。",
      "reading": "この かんじょうについて かんがえます。",
      "korean": "이 감정에 대해 생각합니다."
    }
  },
  {
    "id": "w_0987",
    "kanji": "表現",
    "kana": "ひょうげん",
    "romaji": "ひょうげん",
    "meaning": "표현",
    "level": "N3",
    "category": "business",
    "example": {
      "japanese": "この表現について考えます。",
      "reading": "この ひょうげんについて かんがえます。",
      "korean": "이 표현에 대해 생각합니다."
    }
  },
  {
    "id": "w_0988",
    "kanji": "説明",
    "kana": "せつめい",
    "romaji": "せつめい",
    "meaning": "설명",
    "level": "N4",
    "category": "travel",
    "example": {
      "japanese": "この説明について考えます。",
      "reading": "この せつめいについて かんがえます。",
      "korean": "이 설명에 대해 생각합니다."
    }
  },
  {
    "id": "w_0989",
    "kanji": "案内",
    "kana": "あんない",
    "romaji": "あんない",
    "meaning": "안내",
    "level": "N4",
    "category": "daily",
    "example": {
      "japanese": "この案内について考えます。",
      "reading": "この あんないについて かんがえます。",
      "korean": "이 안내에 대해 생각합니다."
    }
  },
  {
    "id": "w_0990",
    "kanji": "紹介",
    "kana": "しょうかい",
    "romaji": "しょうかい",
    "meaning": "소개",
    "level": "N4",
    "category": "food",
    "example": {
      "japanese": "この紹介について考えます。",
      "reading": "この しょうかいについて かんがえます。",
      "korean": "이 소개에 대해 생각합니다."
    }
  },
  {
    "id": "w_0991",
    "kanji": "歓迎",
    "kana": "かんげい",
    "romaji": "かんげい",
    "meaning": "환영",
    "level": "N3",
    "category": "business",
    "example": {
      "japanese": "この歓迎について考えます。",
      "reading": "この かんげいについて かんがえます。",
      "korean": "이 환영에 대해 생각합니다."
    }
  },
  {
    "id": "w_0992",
    "kanji": "招待",
    "kana": "しょうたい",
    "romaji": "しょうたい",
    "meaning": "초대",
    "level": "N4",
    "category": "travel",
    "example": {
      "japanese": "この招待について考えます。",
      "reading": "この しょうたいについて かんがえます。",
      "korean": "이 초대에 대해 생각합니다."
    }
  },
  {
    "id": "w_0993",
    "kanji": "訪問",
    "kana": "ほうもん",
    "romaji": "ほうもん",
    "meaning": "방문",
    "level": "N3",
    "category": "daily",
    "example": {
      "japanese": "この訪問について考えます。",
      "reading": "この ほうもんについて かんがえます。",
      "korean": "이 방문에 대해 생각합니다."
    }
  },
  {
    "id": "w_0994",
    "kanji": "見学",
    "kana": "けんがく",
    "romaji": "けんがく",
    "meaning": "견학",
    "level": "N2",
    "category": "food",
    "example": {
      "japanese": "この見学について考えます。",
      "reading": "この けんがくについて かんがえます。",
      "korean": "이 견학에 대해 생각합니다."
    }
  },
  {
    "id": "w_0995",
    "kanji": "見物",
    "kana": "けんぶつ",
    "romaji": "けんぶつ",
    "meaning": "구경",
    "level": "N4",
    "category": "business",
    "example": {
      "japanese": "この見物について考えます。",
      "reading": "この けんぶつについて かんがえます。",
      "korean": "이 구경에 대해 생각합니다."
    }
  },
  {
    "id": "w_0996",
    "kanji": "散策",
    "kana": "さんさく",
    "romaji": "さんさく",
    "meaning": "산책, 산책길",
    "level": "N4",
    "category": "travel",
    "example": {
      "japanese": "この散策について考えます。",
      "reading": "この さんさくについて かんがえます。",
      "korean": "이 산책, 산책길에 대해 생각합니다."
    }
  },
  {
    "id": "w_0997",
    "kanji": "移動",
    "kana": "いどう",
    "romaji": "いどう",
    "meaning": "이동",
    "level": "N3",
    "category": "daily",
    "example": {
      "japanese": "この移動について考えます。",
      "reading": "この いどうについて かんがえます。",
      "korean": "이 이동에 대해 생각합니다."
    }
  },
  {
    "id": "w_0998",
    "kanji": "出発",
    "kana": "しゅっぱつ",
    "romaji": "しゅっぱつ",
    "meaning": "출발",
    "level": "N4",
    "category": "food",
    "example": {
      "japanese": "この出発について考えます。",
      "reading": "この しゅっぱつについて かんがえます。",
      "korean": "이 출발에 대해 생각합니다."
    }
  },
  {
    "id": "w_0999",
    "kanji": "到着",
    "kana": "とうちゃく",
    "romaji": "とうちゃく",
    "meaning": "도착",
    "level": "N3",
    "category": "business",
    "example": {
      "japanese": "この到着について考えます。",
      "reading": "この とうちゃくについて かんがえます。",
      "korean": "이 도착에 대해 생각합니다."
    }
  },
  {
    "id": "w_1000",
    "kanji": "通過",
    "kana": "つうか",
    "romaji": "つうか",
    "meaning": "통과",
    "level": "N3",
    "category": "travel",
    "example": {
      "japanese": "この通過について考えます。",
      "reading": "この つうかについて かんがえます。",
      "korean": "이 통과에 대해 생각합니다."
    }
  },
  {
    "id": "w_1001",
    "kanji": "入場",
    "kana": "にゅうじょう",
    "romaji": "にゅうじょう",
    "meaning": "입장",
    "level": "N3",
    "category": "daily",
    "example": {
      "japanese": "この入場について考えます。",
      "reading": "この にゅうじょうについて かんがえます。",
      "korean": "이 입장에 대해 생각합니다."
    }
  },
  {
    "id": "w_1002",
    "kanji": "退場",
    "kana": "たいじょう",
    "romaji": "たいじょう",
    "meaning": "퇴장",
    "level": "N4",
    "category": "food",
    "example": {
      "japanese": "この退場について考えます。",
      "reading": "この たいじょうについて かんがえます。",
      "korean": "이 퇴장에 대해 생각합니다."
    }
  },
  {
    "id": "w_1003",
    "kanji": "禁止",
    "kana": "きんし",
    "romaji": "きんし",
    "meaning": "금지",
    "level": "N3",
    "category": "business",
    "example": {
      "japanese": "この禁止について考えます。",
      "reading": "この きんしについて かんがえます。",
      "korean": "이 금지에 대해 생각합니다."
    }
  },
  {
    "id": "w_1004",
    "kanji": "許可",
    "kana": "きょか",
    "romaji": "きょか",
    "meaning": "허가",
    "level": "N3",
    "category": "travel",
    "example": {
      "japanese": "この許可について考えます。",
      "reading": "この きょかについて かんがえます。",
      "korean": "이 허가에 대해 생각합니다."
    }
  },
  {
    "id": "w_1005",
    "kanji": "自由",
    "kana": "じゆう",
    "romaji": "じゆう",
    "meaning": "자유",
    "level": "N4",
    "category": "daily",
    "example": {
      "japanese": "この自由について考えます。",
      "reading": "この じゆうについて かんがえます。",
      "korean": "이 자유에 대해 생각합니다."
    }
  },
  {
    "id": "w_1006",
    "kanji": "便利",
    "kana": "べんり",
    "romaji": "べんり",
    "meaning": "편리",
    "level": "N5",
    "category": "food",
    "example": {
      "japanese": "この便利について考えます。",
      "reading": "この べんりについて かんがえます。",
      "korean": "이 편리에 대해 생각합니다."
    }
  },
  {
    "id": "w_1007",
    "kanji": "快適",
    "kana": "かいてき",
    "romaji": "かいてき",
    "meaning": "쾌적",
    "level": "N3",
    "category": "business",
    "example": {
      "japanese": "この快適について考えます。",
      "reading": "この かいてきについて かんがえます。",
      "korean": "이 쾌적에 대해 생각합니다."
    }
  },
  {
    "id": "w_1008",
    "kanji": "新鮮",
    "kana": "しんせん",
    "romaji": "しんせん",
    "meaning": "신선",
    "level": "N3",
    "category": "travel",
    "example": {
      "japanese": "この新鮮について考えます。",
      "reading": "この しんせんについて かんがえます。",
      "korean": "이 신선에 대해 생각합니다."
    }
  },
  {
    "id": "w_1009",
    "kanji": "清潔",
    "kana": "せいけつ",
    "romaji": "せいけつ",
    "meaning": "청결",
    "level": "N3",
    "category": "daily",
    "example": {
      "japanese": "この清潔について考えます。",
      "reading": "この せいけつについて かんがえます。",
      "korean": "이 청결에 대해 생각합니다."
    }
  },
  {
    "id": "w_1010",
    "kanji": "綺麗",
    "kana": "きれい",
    "romaji": "きれい",
    "meaning": "예쁨, 깨끗함",
    "level": "N5",
    "category": "food",
    "example": {
      "japanese": "この綺麗について考えます。",
      "reading": "この きれいについて かんがえます。",
      "korean": "이 예쁨, 깨끗함에 대해 생각합니다."
    }
  },
  {
    "id": "w_1011",
    "kanji": "豊富",
    "kana": "ほうふ",
    "romaji": "ほうふ",
    "meaning": "풍부",
    "level": "N3",
    "category": "business",
    "example": {
      "japanese": "この豊富について考えます。",
      "reading": "この ほうふについて かんがえます。",
      "korean": "이 풍부에 대해 생각합니다."
    }
  },
  {
    "id": "w_1012",
    "kanji": "貴重",
    "kana": "きちょう",
    "romaji": "きちょう",
    "meaning": "귀중",
    "level": "N3",
    "category": "travel",
    "example": {
      "japanese": "この貴重について考えます。",
      "reading": "この きちょうについて かんがえます。",
      "korean": "이 귀중에 대해 생각합니다."
    }
  },
  {
    "id": "w_1013",
    "kanji": "重要",
    "kana": "じゅうよう",
    "romaji": "じゅうよう",
    "meaning": "중요",
    "level": "N3",
    "category": "daily",
    "example": {
      "japanese": "この重要について考えます。",
      "reading": "この じゅうようについて かんがえます。",
      "korean": "이 중요에 대해 생각합니다."
    }
  },
  {
    "id": "w_1014",
    "kanji": "計画",
    "kana": "けいかく",
    "romaji": "けいかく",
    "meaning": "계획",
    "level": "N4",
    "category": "food",
    "example": {
      "japanese": "この計画について考えます。",
      "reading": "この けいかくについて かんがえます。",
      "korean": "이 계획에 대해 생각합니다."
    }
  },
  {
    "id": "w_1015",
    "kanji": "旅行",
    "kana": "りょこう",
    "romaji": "りょこう",
    "meaning": "여행",
    "level": "N5",
    "category": "business",
    "example": {
      "japanese": "この旅行について考えます。",
      "reading": "この りょこうについて かんがえます。",
      "korean": "이 여행에 대해 생각합니다."
    }
  },
  {
    "id": "w_1016",
    "kanji": "記録",
    "kana": "きろく",
    "romaji": "きろく",
    "meaning": "기록",
    "level": "N3",
    "category": "travel",
    "example": {
      "japanese": "この記録について考えます。",
      "reading": "この きろくについて かんがえます。",
      "korean": "이 기록에 대해 생각합니다."
    }
  },
  {
    "id": "w_1017",
    "kanji": "発見",
    "kana": "はっけん",
    "romaji": "はっけん",
    "meaning": "발견",
    "level": "N3",
    "category": "daily",
    "example": {
      "japanese": "この発見について考えます。",
      "reading": "この はっけんについて かんがえます。",
      "korean": "이 발견에 대해 생각합니다."
    }
  },
  {
    "id": "w_1018",
    "kanji": "生活",
    "kana": "せいかつ",
    "romaji": "せいかつ",
    "meaning": "생활",
    "level": "N4",
    "category": "food",
    "example": {
      "japanese": "この生活について考えます。",
      "reading": "この せいかつについて かんがえます。",
      "korean": "이 생활에 대해 생각합니다."
    }
  },
  {
    "id": "w_1019",
    "kanji": "活動",
    "kana": "かつどう",
    "romaji": "かつどう",
    "meaning": "활동",
    "level": "N3",
    "category": "business",
    "example": {
      "japanese": "この活動について考えます。",
      "reading": "この かつどうについて かんがえます。",
      "korean": "이 활동에 대해 생각합니다."
    }
  },
  {
    "id": "w_1020",
    "kanji": "行動",
    "kana": "こうどう",
    "romaji": "こうどう",
    "meaning": "행동",
    "level": "N3",
    "category": "travel",
    "example": {
      "japanese": "この行動について考えます。",
      "reading": "この こうどうについて かんがえます。",
      "korean": "이 행동에 대해 생각합니다."
    }
  },
  {
    "id": "w_1021",
    "kanji": "希望",
    "kana": "きぼう",
    "romaji": "きぼう",
    "meaning": "희망",
    "level": "N3",
    "category": "daily",
    "example": {
      "japanese": "この希望について考えます。",
      "reading": "この きぼうについて かんがえます。",
      "korean": "이 희망에 대해 생각합니다."
    }
  },
  {
    "id": "w_1022",
    "kanji": "成功",
    "kana": "せいこう",
    "romaji": "せいこう",
    "meaning": "성공",
    "level": "N3",
    "category": "food",
    "example": {
      "japanese": "この成功について考えます。",
      "reading": "この せいこうについて かんがえます。",
      "korean": "이 성공에 대해 생각합니다."
    }
  },
  {
    "id": "w_1023",
    "kanji": "失敗",
    "kana": "しっぱい",
    "romaji": "しっぱい",
    "meaning": "실패",
    "level": "N4",
    "category": "business",
    "example": {
      "japanese": "この失敗について考えます。",
      "reading": "この しっぱいについて かんがえます。",
      "korean": "이 실패에 대해 생각합니다."
    }
  },
  {
    "id": "w_1024",
    "kanji": "感謝",
    "kana": "かんしゃ",
    "romaji": "かんしゃ",
    "meaning": "감사",
    "level": "N3",
    "category": "travel",
    "example": {
      "japanese": "この感謝について考えます。",
      "reading": "この かんしゃについて かんがえます。",
      "korean": "이 감사에 대해 생각합니다."
    }
  },
  {
    "id": "w_1025",
    "kanji": "尊敬",
    "kana": "そんけい",
    "romaji": "そんけい",
    "meaning": "존경",
    "level": "N3",
    "category": "daily",
    "example": {
      "japanese": "この尊敬について考えます。",
      "reading": "この そんけいについて かんがえます。",
      "korean": "이 존경에 대해 생각합니다."
    }
  },
  {
    "id": "w_1026",
    "kanji": "愛情",
    "kana": "あいじょう",
    "romaji": "あいじょう",
    "meaning": "애정",
    "level": "N3",
    "category": "food",
    "example": {
      "japanese": "この愛情について考えます。",
      "reading": "この あいじょうについて かんがえます。",
      "korean": "이 애정에 대해 생각합니다."
    }
  },
  {
    "id": "w_1027",
    "kanji": "友情",
    "kana": "ゆうじょう",
    "romaji": "ゆうじょう",
    "meaning": "우정",
    "level": "N3",
    "category": "business",
    "example": {
      "japanese": "この友情について考えます。",
      "reading": "この ゆうじょうについて かんがえます。",
      "korean": "이 우정에 대해 생각합니다."
    }
  },
  {
    "id": "w_1028",
    "kanji": "関係",
    "kana": "かんけい",
    "romaji": "かんけい",
    "meaning": "관계",
    "level": "N4",
    "category": "travel",
    "example": {
      "japanese": "この関係について考えます。",
      "reading": "この かんけいについて かんがえます。",
      "korean": "이 관계에 대해 생각합니다."
    }
  },
  {
    "id": "w_1029",
    "kanji": "結果",
    "kana": "けっか",
    "romaji": "けっか",
    "meaning": "결과",
    "level": "N3",
    "category": "daily",
    "example": {
      "japanese": "この結果について考えます。",
      "reading": "この けっかについて かんがえます。",
      "korean": "이 결과에 대해 생각합니다."
    }
  },
  {
    "id": "w_1030",
    "kanji": "原因",
    "kana": "げんいん",
    "romaji": "げんいん",
    "meaning": "원인",
    "level": "N4",
    "category": "food",
    "example": {
      "japanese": "この原因について考えます。",
      "reading": "この げんいんについて かんがえます。",
      "korean": "이 원인에 대해 생각합니다."
    }
  },
  {
    "id": "w_1031",
    "kanji": "理由",
    "kana": "りゆう",
    "romaji": "りゆう",
    "meaning": "이유",
    "level": "N4",
    "category": "business",
    "example": {
      "japanese": "この理由について考えます。",
      "reading": "この りゆうについて かんがえます。",
      "korean": "이 이유에 대해 생각합니다."
    }
  },
  {
    "id": "w_1032",
    "kanji": "目的",
    "kana": "もくてき",
    "romaji": "もくてき",
    "meaning": "목적",
    "level": "N3",
    "category": "travel",
    "example": {
      "japanese": "この目的について考えます。",
      "reading": "この もくてきについて かんがえます。",
      "korean": "이 목적에 대해 생각합니다."
    }
  },
  {
    "id": "w_1033",
    "kanji": "目標",
    "kana": "もくひょう",
    "romaji": "もくひょう",
    "meaning": "목표",
    "level": "N3",
    "category": "daily",
    "example": {
      "japanese": "この目標について考えます。",
      "reading": "この もくひょうについて かんがえます。",
      "korean": "이 목표에 대해 생각합니다."
    }
  },
  {
    "id": "w_1034",
    "kanji": "意見",
    "kana": "いけん",
    "romaji": "いけん",
    "meaning": "의견",
    "level": "N4",
    "category": "food",
    "example": {
      "japanese": "この意見について考えます。",
      "reading": "この いけんについて かんがえます。",
      "korean": "이 의견에 대해 생각합니다."
    }
  },
  {
    "id": "w_1035",
    "kanji": "考え",
    "kana": "かんがえ",
    "romaji": "かんがえ",
    "meaning": "생각",
    "level": "N3",
    "category": "business",
    "example": {
      "japanese": "この考えについて考えます。",
      "reading": "この かんがえについて かんがえます。",
      "korean": "이 생각에 대해 생각합니다."
    }
  },
  {
    "id": "w_1036",
    "kanji": "感情",
    "kana": "かんじょう",
    "romaji": "かんじょう",
    "meaning": "감정",
    "level": "N3",
    "category": "travel",
    "example": {
      "japanese": "この感情について考えます。",
      "reading": "この かんじょうについて かんがえます。",
      "korean": "이 감정에 대해 생각합니다."
    }
  },
  {
    "id": "w_1037",
    "kanji": "表現",
    "kana": "ひょうげん",
    "romaji": "ひょうげん",
    "meaning": "표현",
    "level": "N3",
    "category": "daily",
    "example": {
      "japanese": "この表現について考えます。",
      "reading": "この ひょうげんについて かんがえます。",
      "korean": "이 표현에 대해 생각합니다."
    }
  },
  {
    "id": "w_1038",
    "kanji": "説明",
    "kana": "せつめい",
    "romaji": "せつめい",
    "meaning": "설명",
    "level": "N4",
    "category": "food",
    "example": {
      "japanese": "この説明について考えます。",
      "reading": "この せつめいについて かんがえます。",
      "korean": "이 설명에 대해 생각합니다."
    }
  },
  {
    "id": "w_1039",
    "kanji": "案内",
    "kana": "あんない",
    "romaji": "あんない",
    "meaning": "안내",
    "level": "N4",
    "category": "business",
    "example": {
      "japanese": "この案内について考えます。",
      "reading": "この あんないについて かんがえます。",
      "korean": "이 안내에 대해 생각합니다."
    }
  },
  {
    "id": "w_1040",
    "kanji": "紹介",
    "kana": "しょうかい",
    "romaji": "しょうかい",
    "meaning": "소개",
    "level": "N4",
    "category": "travel",
    "example": {
      "japanese": "この紹介について考えます。",
      "reading": "この しょうかいについて かんがえます。",
      "korean": "이 소개에 대해 생각합니다."
    }
  },
  {
    "id": "w_1041",
    "kanji": "歓迎",
    "kana": "かんげい",
    "romaji": "かんげい",
    "meaning": "환영",
    "level": "N3",
    "category": "daily",
    "example": {
      "japanese": "この歓迎について考えます。",
      "reading": "この かんげいについて かんがえます。",
      "korean": "이 환영에 대해 생각합니다."
    }
  },
  {
    "id": "w_1042",
    "kanji": "招待",
    "kana": "しょうたい",
    "romaji": "しょうたい",
    "meaning": "초대",
    "level": "N4",
    "category": "food",
    "example": {
      "japanese": "この招待について考えます。",
      "reading": "この しょうたいについて かんがえます。",
      "korean": "이 초대에 대해 생각합니다."
    }
  },
  {
    "id": "w_1043",
    "kanji": "訪問",
    "kana": "ほうもん",
    "romaji": "ほうもん",
    "meaning": "방문",
    "level": "N3",
    "category": "business",
    "example": {
      "japanese": "この訪問について考えます。",
      "reading": "この ほうもんについて かんがえます。",
      "korean": "이 방문에 대해 생각합니다."
    }
  },
  {
    "id": "w_1044",
    "kanji": "見学",
    "kana": "けんがく",
    "romaji": "けんがく",
    "meaning": "견학",
    "level": "N2",
    "category": "travel",
    "example": {
      "japanese": "この見学について考えます。",
      "reading": "この けんがくについて かんがえます。",
      "korean": "이 견학에 대해 생각합니다."
    }
  },
  {
    "id": "w_1045",
    "kanji": "見物",
    "kana": "けんぶつ",
    "romaji": "けんぶつ",
    "meaning": "구경",
    "level": "N4",
    "category": "daily",
    "example": {
      "japanese": "この見物について考えます。",
      "reading": "この けんぶつについて かんがえます。",
      "korean": "이 구경에 대해 생각합니다."
    }
  },
  {
    "id": "w_1046",
    "kanji": "散策",
    "kana": "さんさく",
    "romaji": "さんさく",
    "meaning": "산책, 산책길",
    "level": "N3",
    "category": "food",
    "example": {
      "japanese": "この散策について考えます。",
      "reading": "この さんさくについて かんがえます。",
      "korean": "이 산책, 산책길에 대해 생각합니다."
    }
  },
  {
    "id": "w_1047",
    "kanji": "移動",
    "kana": "いどう",
    "romaji": "いどう",
    "meaning": "이동",
    "level": "N3",
    "category": "business",
    "example": {
      "japanese": "この移動について考えます。",
      "reading": "この いどうについて かんがえます。",
      "korean": "이 이동에 대해 생각합니다."
    }
  },
  {
    "id": "w_1048",
    "kanji": "出発",
    "kana": "しゅっぱつ",
    "romaji": "しゅっぱつ",
    "meaning": "출발",
    "level": "N4",
    "category": "travel",
    "example": {
      "japanese": "この出発について考えます。",
      "reading": "この しゅっぱつについて かんがえます。",
      "korean": "이 출발에 대해 생각합니다."
    }
  },
  {
    "id": "w_1049",
    "kanji": "到着",
    "kana": "とうちゃく",
    "romaji": "とうちゃく",
    "meaning": "도착",
    "level": "N3",
    "category": "daily",
    "example": {
      "japanese": "この到着について考えます。",
      "reading": "この とうちゃくについて かんがえます。",
      "korean": "이 도착에 대해 생각합니다."
    }
  },
  {
    "id": "w_1050",
    "kanji": "通過",
    "kana": "つうか",
    "romaji": "つうか",
    "meaning": "통과",
    "level": "N3",
    "category": "food",
    "example": {
      "japanese": "この通過について考えます。",
      "reading": "この つうかについて かんがえます。",
      "korean": "이 통과에 대해 생각합니다."
    }
  }
];

import { VOCAB_EXTRA_1 } from './vocabExtra1';
import { VOCAB_EXTRA_2 } from './vocabExtra2';
import { VOCAB_EXTRA_3 } from './vocabExtra3';
import { VOCAB_N5_FILL } from './vocabN5Fill';
import { VOCAB_N4_FILL } from './vocabN4Fill';
import { VOCAB_N3_FILL_1 } from './vocabN3Fill_1';
import { VOCAB_N3_FILL_2 } from './vocabN3Fill_2';
import { VOCAB_N3_FILL_3 } from './vocabN3Fill_3';
import { VOCAB_N2_FILL_1 } from './vocabN2Fill_1';
import { VOCAB_N2_FILL_2 } from './vocabN2Fill_2';
import { VOCAB_N2_FILL_3 } from './vocabN2Fill_3';
import { VOCAB_N1_FILL_1 } from './vocabN1Fill_1';
import { VOCAB_N1_FILL_2 } from './vocabN1Fill_2';
import { VOCAB_N1_FILL_3 } from './vocabN1Fill_3';
import { VOCAB_N1_FILL_4 } from './vocabN1Fill_4';
import { VOCAB_N1_FILL_5 } from './vocabN1Fill_5';

export const ALL_VOCAB: WordItem[] = [
  ...VOCAB_DATA,
  ...VOCAB_EXTRA_1,
  ...VOCAB_EXTRA_2,
  ...VOCAB_EXTRA_3,
  ...VOCAB_N5_FILL,
  ...VOCAB_N4_FILL,
  ...VOCAB_N3_FILL_1,
  ...VOCAB_N3_FILL_2,
  ...VOCAB_N3_FILL_3,
  ...VOCAB_N2_FILL_1,
  ...VOCAB_N2_FILL_2,
  ...VOCAB_N2_FILL_3,
  ...VOCAB_N1_FILL_1,
  ...VOCAB_N1_FILL_2,
  ...VOCAB_N1_FILL_3,
  ...VOCAB_N1_FILL_4,
  ...VOCAB_N1_FILL_5,
];
