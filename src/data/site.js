// Central content store. Meta/Instagram CDN URLs are kept fully intact
// (all signing query params preserved, raw ampersands) — never modify them.

export const brand = {
  name: 'Fabuela',
  full: 'Fabuela Cafe & Brunch',
  kurdish: 'فابوێلا کافێ',
  handle: 'fabuela.iq',
  igUrl: 'https://www.instagram.com/fabuela.iq/',
  followers: 37044,
  logo: 'https://scontent-ams2-1.cdninstagram.com/v/t51.2885-19/472606846_572910068875664_7740883200850795873_n.jpg?stp=dst-jpg_s150x150_tt6&_nc_cat=107&ccb=7-5&_nc_sid=f7ccc5&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLnd3dy4xMDgwLkMzIn0%3D&_nc_ohc=oUoAHu51TioQ7kNvwE_feMr&_nc_oc=Adq4aPQEM9FObWWLGxLoyTM4aMjVNqpI8Jq0NQgt8N_uSxViqbox1ICaMhOkout_8gc&_nc_zt=24&_nc_ht=scontent-ams2-1.cdninstagram.com&_nc_ss=79a8c&oh=00_AQIZSP7YAS0dllML3QF8VTMgz8kLGMQqyWIGxpeCO_6L7Q&oe=6ABF3B6B',
  tagline: 'BRUNCH FOR RIGHT NOW. MADE FOR YOUR DAY.',
};

export const contact = {
  phone: '+964 751 624 4424',
  tel: 'tel:+9647516244424',
  address: '5XX8+X8, Erbil, Erbil Governorate, 44001, Iraq',
  plus: '5XX8+X8',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Fabuela%20Cafe%20%26%20Brunch%20Erbil',
  embed: 'https://www.google.com/maps?q=Fabuela%20Cafe%20%26%20Brunch%2C%205XX8%2BX8%20Erbil&output=embed',
};

export const rating = { value: 4.8, total: 887 };

export const nav = [
  { label: 'Menu', href: '#menu' },
  { label: 'Our Story', href: '#story' },
  { label: 'Locations', href: '#locations' },
  { label: 'Reviews', href: '#reviews' },
];

// De-duplicated authentic Google reviews
export const reviews = [
  {
    author_name: 'Wandering_woman',
    rating: 5,
    text: 'I have ordered the French toast and the Korean toast through delivery apps and was so impressed I decided to face the midday Erbil heat and come for breakfast. After a joyous eggs benedict and GreenX juice, Fabuela is going straight to the top of my list…',
  },
  {
    author_name: 'Amina A',
    rating: 5,
    text: 'This place looks like any other cafe but once you enter you’ll feel the difference. The atmosphere is nice and calm and the staff are very welcoming. The food was on point and dessert were fresh and delicious. It was well worth it!',
  },
  {
    author_name: 'Scalpel and Spoon',
    rating: 4,
    text: 'Delicious overall! The portion-to-price ratio isn’t exactly proportional, but the great taste makes up for it. The menu feels more like a brunch menu than a full main meal. Also, the bread they use is absolutely delicious.',
  },
];

const rawPosts = [
  { caption: 'A little art therapy, the Fabuela way. 🎨✨', image: 'https://scontent-ams2-1.cdninstagram.com/v/t51.82787-15/825276768_17946977154319753_4472395564808782037_n.jpg?stp=dst-jpg_e35_s640x640_tt6&_nc_cat=100&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiRkVFRC5iZXN0X2ltYWdlX3VybGdlbi5DMyJ9&_nc_ohc=OIT48y907I8Q7kNvwFnQJ2-&_nc_oc=AdrNZBLkzR4dM_4CmsS_WBQSY2qi984VHAdEQIWNPu4pwx9Bot4NBBwRPtQQcOa5cNQ&_nc_zt=23&_nc_ht=scontent-ams2-1.cdninstagram.com&_nc_gid=894QDhTe_WSwFhcRmKJ6Dw&_nc_ss=79a8c&oh=00_AQK1RGS7M3RYurSlUKJs1zwWXh_VOeZ5yXrC2aZ_Kh5hUg&oe=6ABF3C7A', likes: 0 },
  { caption: 'Your sign to make today a brunch day. 🫰🏻', image: 'https://scontent-ams2-1.cdninstagram.com/v/t51.82787-15/819021610_17946220923319753_4683366529875807962_n.jpg?stp=dst-jpg_e35_s640x640_tt6&_nc_cat=101&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiRkVFRC5iZXN0X2ltYWdlX3VybGdlbi5DMyJ9&_nc_ohc=auJkTd8GQEwQ7kNvwGBaCrT&_nc_oc=Adrb0TXAfBIDP4MZmUDwebBI1D6QL127YKmJGpfoR2fAlF2vzJnbWLsyEOwRVE-41No&_nc_zt=23&_nc_ht=scontent-ams2-1.cdninstagram.com&_nc_gid=894QDhTe_WSwFhcRmKJ6Dw&_nc_ss=79a8c&oh=00_AQLiNc81uh1iBL-y8qm0EfMPrAmEFf-U74hlYPg6WGoenQ&oe=6ABF4A46', likes: 0 },
  { caption: 'Brunch looks better when it’s Fabuela. 🫰🏻', image: 'https://scontent-ams2-1.cdninstagram.com/v/t51.82787-15/818553715_17946039444319753_3913109193070269135_n.jpg?stp=dst-jpg_e35_s640x640_tt6&_nc_cat=102&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiRkVFRC5iZXN0X2ltYWdlX3VybGdlbi5DMyJ9&_nc_ohc=r5rcvdI3skkQ7kNvwFKEGAK&_nc_oc=AdqmKaN67SixbB6hNt8zGtrssMti4OnoAhzoqCeFsAFSfUu99rbrfmxOzv9TV2_R_6g&_nc_zt=23&_nc_ht=scontent-ams2-1.cdninstagram.com&_nc_gid=894QDhTe_WSwFhcRmKJ6Dw&_nc_ss=79a8c&oh=00_AQLM_2qAhz4YF5AVr6JgM2-V8v22lRHMiooDrP0XiJd1FA&oe=6ABF3029', likes: 0 },
  { caption: 'HOT DAYS. COLD DRINKS. GOOD MOOD.', image: 'https://scontent-ams2-1.cdninstagram.com/v/t51.82787-15/814768822_17945634477319753_8327829479757198532_n.jpg?stp=dst-jpg_e35_s640x640_tt6&_nc_cat=104&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0xJUFMuYmVzdF9pbWFnZV91cmxnZW4uQzMifQ%3D%3D&_nc_ohc=qgvjn_5DZq8Q7kNvwHcz16z&_nc_oc=Ado1LmBZvGsaAqCpQaKDhyVa5gUGAUfk_ZAUtNBGAmZGYebttjm80dJ61eUYMjbEp-M&_nc_zt=23&_nc_ht=scontent-ams2-1.cdninstagram.com&_nc_gid=894QDhTe_WSwFhcRmKJ6Dw&_nc_ss=79a8c&oh=00_AQIJrkrTDWjG2WxtwlEeC8Jdmfs0stzv-0xlLYofce2zUA&oe=6ABF28C9', likes: 0 },
  { caption: 'The secret behind every Fabuela bite. 🫰🏻 Our special sauces.', image: 'https://scontent-ams2-1.cdninstagram.com/v/t51.82787-15/812781992_17945431161319753_7996202556433592933_n.jpg?stp=dst-jpg_e35_s640x640_tt6&_nc_cat=108&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiRkVFRC5iZXN0X2ltYWdlX3VybGdlbi5DMyJ9&_nc_ohc=uNfH6zkCYiwQ7kNvwHPbYL8&_nc_oc=AdpXJs1PHjQptCe0bLq3hWsLQnCfoSDJ5Q3FgbB3Hm3S_SiFEDcYlYM37r6l4QhwO70&_nc_zt=23&_nc_ht=scontent-ams2-1.cdninstagram.com&_nc_gid=894QDhTe_WSwFhcRmKJ6Dw&_nc_ss=79a8c&oh=00_AQJorfHjO1tYs_PwlcslIh5W7sDoXCYmoMftBQFJgbM1NA&oe=6ABF2EDD', likes: 0 },
  { caption: 'Art Therapy Workshop at Fabuela 🎨 Clay mug, bowl and tote bag painting with natural colors. ✨', image: 'https://scontent-ams2-1.cdninstagram.com/v/t51.82787-15/808786533_17945002155319753_3508747377421669468_n.jpg?stp=dst-jpg_e35_s640x640_tt6&_nc_cat=106&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiRkVFRC5iZXN0X2ltYWdlX3VybGdlbi5DMyJ9&_nc_ohc=HzP1Cb9HZRUQ7kNvwE06W4E&_nc_oc=Adr4N6RUbxqmx8-RLJ9MMFmt2X05MGhopiXw1VCLFwAHqltb0u-GptNwegHBfXvlI7o&_nc_zt=23&_nc_ht=scontent-ams2-1.cdninstagram.com&_nc_gid=894QDhTe_WSwFhcRmKJ6Dw&_nc_ss=79a8c&oh=00_AQIxtY1KuPi2KvBgtBPwTlrocj_oTr4ktKV1Sxk6CkwxZg&oe=6ABF42FC', likes: 0 },
  { caption: 'Your Fabuela kind of morning. 🫰🏻', image: 'https://scontent-ams2-1.cdninstagram.com/v/t51.82787-15/801304995_17944352034319753_3473979918832957175_n.jpg?stp=dst-jpg_e35_s640x640_tt6&_nc_cat=110&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiRkVFRC5iZXN0X2ltYWdlX3VybGdlbi5DMyJ9&_nc_ohc=lOCgKyVIN_MQ7kNvwFq-P21&_nc_oc=AdrisQGRnp7CBRQXT2C1baXch8QVAcss5DhPiUUD20xgLxV-etUVFqJFbJTqe0P37cw&_nc_zt=23&_nc_ht=scontent-ams2-1.cdninstagram.com&_nc_gid=894QDhTe_WSwFhcRmKJ6Dw&_nc_ss=79a8c&oh=00_AQK_umYYuAyr8qVmc3ZLEkMMLwaqxIc6zrOoJB_D8gdjVw&oe=6ABF2A0B', likes: 0 },
  { caption: 'Your new brunch spot is opening soon in Mansour Al-Dawoodi, Baghdad. 🫰🏻', image: 'https://scontent-ams2-1.cdninstagram.com/v/t51.82787-15/798245967_17943914457319753_7109378063927399236_n.jpg?stp=dst-jpg_e35_s640x640_tt6&_nc_cat=103&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0xJUFMuYmVzdF9pbWFnZV91cmxnZW4uQzMifQ%3D%3D&_nc_ohc=pdIt4F87wKEQ7kNvwFNMXxm&_nc_oc=AdqaNRB4pmwyC4MPqvvdekfCWSt86heRIV8FDHp7Q0AUQewNLERaUTWWFDFyzJbKeTg&_nc_zt=23&_nc_ht=scontent-ams2-1.cdninstagram.com&_nc_gid=894QDhTe_WSwFhcRmKJ6Dw&_nc_ss=79a8c&oh=00_AQIJZC7zI_vFyJ7E46yGDLgAS_1qj-sopeDZRtFHJrukvA&oe=6ABF46E5', likes: 0 },
  { caption: 'Start with something fresh. 🫰🏻', image: 'https://scontent-ams2-1.cdninstagram.com/v/t51.82787-15/790865871_17943056589319753_7367084566394908980_n.jpg?stp=dst-jpg_e35_s640x640_tt6&_nc_cat=104&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiRkVFRC5iZXN0X2ltYWdlX3VybGdlbi5DMyJ9&_nc_ohc=yVq_AFy2oiEQ7kNvwF0XsgV&_nc_oc=Adoa4AnC0tRKOTiSqppoJ4KKKmTjWP8R4lktN75BRpe4KP3U3wxQ1AstIlvXujgUNn0&_nc_zt=23&_nc_ht=scontent-ams2-1.cdninstagram.com&_nc_gid=894QDhTe_WSwFhcRmKJ6Dw&_nc_ss=79a8c&oh=00_AQKB0IgnL0UBlEsTu_rV3ymPpppa_JdkFs1I4NMAPHvw7Q&oe=6ABF4215', likes: 0 },
  { caption: 'Bacon is back at Fabuela 🥓 Crispy, smoky, and ready to make your favorite toast even better.', image: 'https://scontent-ams2-1.cdninstagram.com/v/t51.82787-15/774994028_17941209108319753_6902484061997786673_n.jpg?stp=dst-jpg_e35_s640x640_tt6&_nc_cat=111&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0FST1VTRUxfSVRFTS5iZXN0X2ltYWdlX3VybGdlbi5DMyJ9&_nc_ohc=ulemrsDxUxsQ7kNvwGWtsCm&_nc_oc=AdrSOpKkTrgnjGdP5tINj2n2knRcLPytsgCpQ_tA8MJRjW36fEQF34kxRNPCiBi1xnk&_nc_zt=23&_nc_ht=scontent-ams2-1.cdninstagram.com&_nc_gid=894QDhTe_WSwFhcRmKJ6Dw&_nc_ss=79a8c&oh=00_AQJluwV1rGlXalmczYlltMtFzATSHrLGuQQ30emr6fhlfA&oe=6ABF21E5', likes: 0 },
];

export const posts = rawPosts.map((p) => ({ ...p, title: p.caption }));

export const photos = [
  'https://lh3.googleusercontent.com/grass-cs/AABkmLfGfYHr6ZDWXMy7lVq0q1lJuZaxEIm2-pX6JjQekl6O9CaaZyFbH1gUddhanW1QFKBdERPVsm3j1DxpI3Hbbgi0wIG0xtkzAgU4Ci7ZsWFS6-7NAkdUdcf6Mzq3f8GML84DKJB-reWG5MY=w408-h544-k-no',
  'https://lh3.googleusercontent.com/grass-cs/AABkmLeA2zQiuj8Z9XIXaw6O7RwT5Zf1C7OiOsFTlGbWs70pCbYzpFzVVMjvPKYvcq24vjckYUHNkkECEZxn5R48-bloJxXMW8RktHFLytfX4eIVbU80BoNY_tMUL6wS_Go1mMOHCI6FciNMmvxS=w360-h202-k-no',
  'https://lh3.googleusercontent.com/grass-cs/ACvplmPxCl2wbcTiOt1EU9p7unHlaXdn2UI9c-5Ed1APTiIxqW6fGybrldrh1mg74UIFk13te9KPmTdx19AV_4HGn3fdvsUQ2MTAAD3Uf6On-e1WWio_vO5Td5HE31Vz34B76YYTvQGYxYYP8gM3=w300-h225-p-k-no',
];

export const menu = [
  { index: '01', name: 'EGGS BENEDICT', kind: 'BRUNCH', tag: 'GUEST FAVORITE', image: posts[2].image, alt: 'Fabuela brunch plate' },
  { index: '02', name: 'FRENCH TOAST', kind: 'SWEET', tag: 'MORNING PICK', image: posts[6].image, alt: 'Fabuela morning plate with toast' },
  { index: '03', name: 'GREENX JUICE', kind: 'COLD', tag: 'HOT DAYS', image: posts[3].image, alt: 'Fabuela iced drinks', tall: true },
  { index: '04', name: 'BACON TOAST', kind: 'SAVORY', tag: 'BACK AGAIN', image: posts[9].image, alt: 'Crispy bacon toast at Fabuela' },
];

export const locations = [
  { city: 'Erbil', status: 'Open now', open: true, lines: ['Empire Pearl P7', '5XX8+X8 · Erbil, Iraq'] },
  { city: 'Sulaymaniyah', status: 'Coming soon', open: false, lines: ['Grand Boulevard', 'Sulaymaniyah, Iraq'] },
  { city: 'Baghdad', status: 'Coming soon', open: false, lines: ['Mansour Al-Dawoodi', 'Baghdad, Iraq'] },
];

export const footerCols = [
  { heading: 'Menu', links: [{ label: 'Brunch', href: '#menu' }, { label: 'Cold drinks', href: '#menu' }, { label: 'Special sauces', href: '#menu' }] },
  { heading: 'Fabuela', links: [{ label: 'Our story', href: '#story' }, { label: 'Workshops', href: '#instagram' }, { label: 'Reviews', href: '#reviews' }] },
  { heading: 'Visit', links: [{ label: 'Locations', href: '#locations' }, { label: 'Order ahead', href: '#order' }, { label: 'Google Maps', href: contact.mapsUrl }] },
  { heading: 'Contact', links: [{ label: '+964 751 624 4424', href: contact.tel }, { label: 'Instagram DM', href: brand.igUrl }] },
];