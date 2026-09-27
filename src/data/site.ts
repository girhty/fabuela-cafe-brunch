export const BRAND = {
  name: 'Fabuela Cafe & Brunch',
  nameKu: 'فابوێلا کافێ',
  tagline: 'BRUNCH FOR RIGHT NOW. MADE FOR YOUR DAY.',
  instagramHandle: '@fabuela.iq',
  instagramUrl: 'https://instagram.com/fabuela.iq',
  profilePic:
    'https://scontent-ams2-1.cdninstagram.com/v/t51.2885-19/472606846_572910068875664_7740883200850795873_n.jpg?stp=dst-jpg_s150x150_tt6&_nc_cat=107&ccb=7-5&_nc_sid=f7ccc5&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLnd3dy4xMDgwLkMzIn0%3D&_nc_ohc=oUoAHu51TioQ7kNvwE_feMr&_nc_oc=Adq4aPQEM9FObWWLGxLoyTM4aMjVNqpI8Jq0NQgt8N_uSxViqbox1ICaMhOkout_8gc&_nc_zt=24&_nc_ht=scontent-ams2-1.cdninstagram.com&_nc_ss=79a8c&oh=00_AQIZSP7YAS0dllML3QF8VTMgz8kLGMQqyWIGxpeCO_6L7Q&oe=6ABF3B6B',
  followers: 37044,
  rating: 4.8,
  reviewCount: 887,
  phone: '+964 751 624 4424',
  phoneHref: 'tel:+9647516244424',
  email: 'hello@fabuela.iq',
  address: '5XX8+X8, Erbil, Erbil Governorate, 44001, Iraq',
  hours: ['OPEN DAILY', '07:00 – 23:00'],
};

export type MenuItem = {
  index: string;
  name: string;
  kuName: string;
  price: string;
  image: string;
  tag: string;
  rotate: string;
};

export const MENU_ITEMS: MenuItem[] = [
  {
    index: '01',
    name: 'EGGS BENEDICT',
    kuName: 'ئێگس بێنێدیکت',
    price: 'IQD 12,500',
    tag: 'SIGNATURE',
    image:
      'https://scontent-ams2-1.cdninstagram.com/v/t51.82787-15/819021610_17946220923319753_4683366529875807962_n.jpg?stp=dst-jpg_e35_s640x640_tt6&_nc_cat=101&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiRkVFRC5iZXN0X2ltYWdlX3VybGdlbi5DMyJ9&_nc_ohc=auJkTd8GQEwQ7kNvwGBaCrT&_nc_oc=Adrb0TXAfBIDP4MZmUDwebBI1D6QL127YKmJGpfoR2fAlF2vzJnbWLsyEOwRVE-41No&_nc_zt=23&_nc_ht=scontent-ams2-1.cdninstagram.com&_nc_gid=894QDhTe_WSwFhcRmKJ6Dw&_nc_ss=79a8c&oh=00_AQLiNc81uh1iBL-y8qm0EfMPrAmEFf-U74hlYPg6WGoenQ&oe=6ABF4A46',
    rotate: '-2deg',
  },
  {
    index: '02',
    name: 'FRENCH TOAST',
    kuName: 'فرێنچ تۆست',
    price: 'IQD 10,000',
    tag: 'GUEST FAV',
    image:
      'https://scontent-ams2-1.cdninstagram.com/v/t51.82787-15/790865871_17943056589319753_7367084566394908980_n.jpg?stp=dst-jpg_e35_s640x640_tt6&_nc_cat=104&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiRkVFRC5iZXN0X2ltYWdlX3VybGdlbi5DMyJ9&_nc_ohc=yVq_AFy2oiEQ7kNvwF0XsgV&_nc_oc=Adoa4AnC0tRKOTiSqppoJ4KKKmTjWP8R4lktN75BRpe4KP3U3wxQ1AstIlvXujgUNn0&_nc_zt=23&_nc_ht=scontent-ams2-1.cdninstagram.com&_nc_gid=894QDhTe_WSwFhcRmKJ6Dw&_nc_ss=79a8c&oh=00_AQKB0IgnL0UBlEsTu_rV3ymPpppa_JdkFs1I4NMAPHvw7Q&oe=6ABF4215',
    rotate: '1.5deg',
  },
  {
    index: '03',
    name: 'KOREAN TOAST',
    kuName: 'کۆریەن تۆست',
    price: 'IQD 11,500',
    tag: 'NEW',
    image:
      'https://scontent-ams2-1.cdninstagram.com/v/t51.82787-15/818553715_17946039444319753_3913109193070269135_n.jpg?stp=dst-jpg_e35_s640x640_tt6&_nc_cat=102&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiRkVFRC5iZXN0X2ltYWdlX3VybGdlbi5DMyJ9&_nc_ohc=r5rcvdI3skkQ7kNvwFKEGAK&_nc_oc=AdqmKaN67SixbB6hNt8zGtrssMti4OnoAhzoqCeFsAFSfUu99rbrfmxOzv9TV2_R_6g&_nc_zt=23&_nc_ht=scontent-ams2-1.cdninstagram.com&_nc_gid=894QDhTe_WSwFhcRmKJ6Dw&_nc_ss=79a8c&oh=00_AQLM_2qAhz4YF5AVr6JgM2-V8v22lRHMiooDrP0XiJd1FA&oe=6ABF3029',
    rotate: '-1deg',
  },
  {
    index: '04',
    name: 'GREENX JUICE',
    kuName: 'گرین ئێکس جوس',
    price: 'IQD 7,500',
    tag: 'FRESH',
    image:
      'https://scontent-ams2-1.cdninstagram.com/v/t51.82787-15/814768822_17945634477319753_8327829479757198532_n.jpg?stp=dst-jpg_e35_s640x640_tt6&_nc_cat=104&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0xJUFMuYmVzdF9pbWFnZV91cmxnZW4uQzMifQ%3D%3D&_nc_ohc=qgvjn_5DZq8Q7kNvwHcz16z&_nc_oc=Ado1LmBZvGsaAqCpQaKDhyVa5gUGAUfk_ZAUtNBGAmZGYebttjm80dJ61eUYMjbEp-M&_nc_zt=23&_nc_ht=scontent-ams2-1.cdninstagram.com&_nc_gid=894QDhTe_WSwFhcRmKJ6Dw&_nc_ss=79a8c&oh=00_AQIJrkrTDWjG2WxtwlEeC8Jdmfs0stzv-0xlLYofce2zUA&oe=6ABF28C9',
    rotate: '2deg',
  },
];

export type IgPost = {
  image: string;
  caption: string;
  likes: string;
  comments: string;
};

export const IG_POSTS: IgPost[] = [
  {
    image:
      'https://scontent-ams2-1.cdninstagram.com/v/t51.82787-15/825276768_17946977154319753_4472395564808782037_n.jpg?stp=dst-jpg_e35_s640x640_tt6&_nc_cat=100&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiRkVFRC5iZXN0X2ltYWdlX3VybGdlbi5DMyJ9&_nc_ohc=OIT48y907I8Q7kNvwFnQJ2-&_nc_oc=AdrNZBLkzR4dM_4CmsS_WBQSY2qi984VHAdEQIWNPu4pwx9Bot4NBBwRPtQQcOa5cNQ&_nc_zt=23&_nc_ht=scontent-ams2-1.cdninstagram.com&_nc_gid=894QDhTe_WSwFhcRmKJ6Dw&_nc_ss=79a8c&oh=00_AQK1RGS7M3RYurSlUKJs1zwWXh_VOeZ5yXrC2aZ_Kh5hUg&oe=6ABF3C7A',
    caption: 'A little art therapy, the Fabuela way. 🎨✨',
    likes: '1.4K',
    comments: '86',
  },
  {
    image:
      'https://scontent-ams2-1.cdninstagram.com/v/t51.82787-15/819021610_17946220923319753_4683366529875807962_n.jpg?stp=dst-jpg_e35_s640x640_tt6&_nc_cat=101&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiRkVFRC5iZXN0X2ltYWdlX3VybGdlbi5DMyJ9&_nc_ohc=auJkTd8GQEwQ7kNvwGBaCrT&_nc_oc=Adrb0TXAfBIDP4MZmUDwebBI1D6QL127YKmJGpfoR2fAlF2vzJnbWLsyEOwRVE-41No&_nc_zt=23&_nc_ht=scontent-ams2-1.cdninstagram.com&_nc_gid=894QDhTe_WSwFhcRmKJ6Dw&_nc_ss=79a8c&oh=00_AQLiNc81uh1iBL-y8qm0EfMPrAmEFf-U74hlYPg6WGoenQ&oe=6ABF4A46',
    caption: 'Your sign to make today a brunch day. 🫰🏻',
    likes: '2.1K',
    comments: '142',
  },
  {
    image:
      'https://scontent-ams2-1.cdninstagram.com/v/t51.82787-15/818553715_17946039444319753_3913109193070269135_n.jpg?stp=dst-jpg_e35_s640x640_tt6&_nc_cat=102&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiRkVFRC5iZXN0X2ltYWdlX3VybGdlbi5DMyJ9&_nc_ohc=r5rcvdI3skkQ7kNvwFKEGAK&_nc_oc=AdqmKaN67SixbB6hNt8zGtrssMti4OnoAhzoqCeFsAFSfUu99rbrfmxOzv9TV2_R_6g&_nc_zt=23&_nc_ht=scontent-ams2-1.cdninstagram.com&_nc_gid=894QDhTe_WSwFhcRmKJ6Dw&_nc_ss=79a8c&oh=00_AQLM_2qAhz4YF5AVr6JgM2-V8v22lRHMiooDrP0XiJd1FA&oe=6ABF3029',
    caption: 'Brunch looks better when it’s Fabuela. 🫰🏻',
    likes: '1.8K',
    comments: '97',
  },
  {
    image:
      'https://scontent-ams2-1.cdninstagram.com/v/t51.82787-15/814768822_17945634477319753_8327829479757198532_n.jpg?stp=dst-jpg_e35_s640x640_tt6&_nc_cat=104&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0xJUFMuYmVzdF9pbWFnZV91cmxnZW4uQzMifQ%3D%3D&_nc_ohc=qgvjn_5DZq8Q7kNvwHcz16z&_nc_oc=Ado1LmBZvGsaAqCpQaKDhyVa5gUGAUfk_ZAUtNBGAmZGYebttjm80dJ61eUYMjbEp-M&_nc_zt=23&_nc_ht=scontent-ams2-1.cdninstagram.com&_nc_gid=894QDhTe_WSwFhcRmKJ6Dw&_nc_ss=79a8c&oh=00_AQIJrkrTDWjG2WxtwlEeC8Jdmfs0stzv-0xlLYofce2zUA&oe=6ABF28C9',
    caption: 'HOT DAYS. COLD DRINKS. GOOD MOOD.',
    likes: '3.2K',
    comments: '201',
  },
  {
    image:
      'https://scontent-ams2-1.cdninstagram.com/v/t51.82787-15/812781992_17945431161319753_7996202556433592933_n.jpg?stp=dst-jpg_e35_s640x640_tt6&_nc_cat=108&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiRkVFRC5iZXN0X2ltYWdlX3VybGdlbi5DMyJ9&_nc_ohc=uNfH6zkCYiwQ7kNvwHPbYL8&_nc_oc=AdpXJs1PHjQptCe0bLq3hWsLQnCfoSDJ5Q3FgbB3Hm3S_SiFEDcYlYM37r6l4QhwO70&_nc_zt=23&_nc_ht=scontent-ams2-1.cdninstagram.com&_nc_gid=894QDhTe_WSwFhcRmKJ6Dw&_nc_ss=79a8c&oh=00_AQJorfHjO1tYs_PwlcslIh5W7sDoXCYmoMftBQFJgbM1NA&oe=6ABF2EDD',
    caption: 'The secret behind every Fabuela bite — our special sauces.',
    likes: '962',
    comments: '54',
  },
  {
    image:
      'https://scontent-ams2-1.cdninstagram.com/v/t51.82787-15/808786533_17945002155319753_3508747377421669468_n.jpg?stp=dst-jpg_e35_s640x640_tt6&_nc_cat=106&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiRkVFRC5iZXN0X2ltYWdlX3VybGdlbi5DMyJ9&_nc_ohc=HzP1Cb9HZRUQ7kNvwE06W4E&_nc_oc=Adr4N6RUbxqmx8-RLJ9MMFmt2X05MGhopiXw1VCLFwAHqltb0u-GptNwegHBfXvlI7o&_nc_zt=23&_nc_ht=scontent-ams2-1.cdninstagram.com&_nc_gid=894QDhTe_WSwFhcRmKJ6Dw&_nc_ss=79a8c&oh=00_AQIxtY1KuPi2KvBgtBPwTlrocj_oTr4ktKV1Sxk6CkwxZg&oe=6ABF42FC',
    caption: 'Art Therapy Workshop at Fabuela 🎨',
    likes: '1.1K',
    comments: '73',
  },
  {
    image:
      'https://scontent-ams2-1.cdninstagram.com/v/t51.82787-15/801304995_17944352034319753_3473979918832957175_n.jpg?stp=dst-jpg_e35_s640x640_tt6&_nc_cat=110&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiRkVFRC5iZXN0X2ltYWdlX3VybGdlbi5DMyJ9&_nc_ohc=lOCgKyVIN_MQ7kNvwFq-P21&_nc_oc=AdrisQGRnp7CBRQXT2C1baXch8QVAcss5DhPiUUD20xgLxV-etUVFqJFbJTqe0P37cw&_nc_zt=23&_nc_ht=scontent-ams2-1.cdninstagram.com&_nc_gid=894QDhTe_WSwFhcRmKJ6Dw&_nc_ss=79a8c&oh=00_AQK_umYYuAyr8qVmc3ZLEkMMLwaqxIc6zrOoJB_D8gdjVw&oe=6ABF2A0B',
    caption: 'Your Fabuela kind of morning. 🫰🏻',
    likes: '1.5K',
    comments: '68',
  },
  {
    image:
      'https://scontent-ams2-1.cdninstagram.com/v/t51.82787-15/774994028_17941209108319753_6902484061997786673_n.jpg?stp=dst-jpg_e35_s640x640_tt6&_nc_cat=111&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0FST1VTRUxfSVRFTS5iZXN0X2ltYWdlX3VybGdlbi5DMyJ9&_nc_ohc=ulemrsDxUxsQ7kNvwGWtsCm&_nc_oc=AdrSOpKkTrgnjGdP5tINj2n2knRcLPytsgCpQ_tA8MJRjW36fEQF34kxRNPCiBi1xnk&_nc_zt=23&_nc_ht=scontent-ams2-1.cdninstagram.com&_nc_gid=894QDhTe_WSwFhcRmKJ6Dw&_nc_ss=79a8c&oh=00_AQJluwV1rGlXalmczYlltMtFzATSHrLGuQQ30emr6fhlfA&oe=6ABF21E5',
    caption: 'Bacon is back at Fabuela 🥓',
    likes: '1.9K',
    comments: '112',
  },
];

export type Review = {
  author: string;
  rating: number;
  text: string;
  role: string;
};

export const REVIEWS: Review[] = [
  {
    author: 'Wandering_woman',
    rating: 5,
    text:
      'I ordered the French toast and the Korean toast through delivery apps and was so impressed I decided to face the midday Erbil heat and come for breakfast. After a joyous eggs benedict and GreenX juice, Fabuela is going straight to the top of my list.',
    role: 'GOOGLE REVIEW',
  },
  {
    author: 'Amina A',
    rating: 5,
    text:
      'This place looks like any other cafe but once you enter you’ll feel the difference. The atmosphere is nice and calm and the staff are very welcoming. The food was on point and desserts were fresh and delicious. Well worth it!',
    role: 'GOOGLE REVIEW',
  },
  {
    author: 'Scalpel and Spoon',
    rating: 4,
    text:
      'Delicious overall! The menu feels more like a brunch menu than something meant for a full main meal. And the bread they use is absolutely delicious.',
    role: 'GOOGLE REVIEW',
  },
];

export const LOCATIONS = [
  { city: 'ERBIL', lines: ['Empire Pearl P7', 'Erbil, Iraq'] },
  { city: 'SULAYMANIYAH', lines: ['Grand Boulevard', 'Sulaymaniyah, Iraq'] },
  { city: 'BAGHDAD', lines: ['Al Mansour — Al Dawoodi', 'Baghdad, Iraq'] },
];