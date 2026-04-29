// 📁 src/data/templeData.js

export const templeData = {

  // ================================
  // ✅ ABOUT SECTION (UNCHANGED + CLEANED)
  // ================================
  about: {
    title: " SRI HARIHARA SAHITA VANCHITA GANAPATHI DEVALAYAM",
    subtitle: "శ్రీ హరిహర సహిత వాంఛిత గణపతి దేవాలయము",
    blessings: ["శ్రీరస్తు", "శుభమస్తు", "అవిఘ్నమస్తు"],

    description: `
  Sri Harihara Sahita Vanchita Ganapathi Devalayam is a sacred temple dedicated to Lord Rama, an incarnation of Lord Vishnu, along with Goddess Sita and Lord Lakshmana.

The temple is a spiritual center for devotees seeking peace, prosperity, and divine blessings. It attracts devotees during Sri Rama Navami, Ekadasi, and other festivals.
    `,

    history: `
The temple has been a place of devotion for many years and is an important spiritual landmark. Devotees believe prayers here bring harmony and remove obstacles.
    `,

    festivals: `
- Sri Rama Navami
- Hanuman Jayanthi
- Vaikunta Ekadasi
    `,

    templeInfo: `
The temple includes sub-shrines for Hanuman, Shiva, and Navagrahas. Daily poojas and rituals are performed in a traditional manner.
    `,
  },

  // ================================
  // ✅ SUB TEMPLES (UNCHANGED)
  // ================================
  subTemples: [
    {
      id: 1,
      title: "Sri Sita Rama Swamy",
      image: "/images/sriram.jpg",
      description:
        "Lord Rama is an incarnation of Lord Vishnu, symbolizing righteousness, truth, and virtue.",
      significance:
        "Devotees believe prayers to Lord Rama bring peace, harmony, and protection.",
      location: "Main Sanctum",
      days: "Sri Rama Navami, Ekadasi",
      prasadam: "Pulihora, Laddu",
    },
    {
      id: 2,
      title: "Ganesha",
      image: "/images/ganesh.jpg",
      description:
        "Lord Ganesha is the remover of obstacles and the god of new beginnings.",
      significance:
        "Worship brings prosperity, family welfare, and spiritual growth.",
      location: "Inner Temple",
      days: "Wednesday, Navaratri",
      prasadam: "Modak, Coconut",
    },
    {
      id: 3,
      title: "Lord Shiva",
      image: "/images/shiva.jpg",
      description:
        "Lord Shiva is the destroyer of evil and transformer within the Trimurti.",
      significance:
        "Worshipping Shiva removes negative energy and grants inner peace.",
      location: "Side Shrine",
      days: "Monday, Maha Shivaratri",
      prasadam: "Bilva Leaves, Milk",
    },
    {
      id: 4,
      title: "Sri Hanuman",
      image: "/images/hanuman.jpg",
      description:
        "Lord Hanuman is the symbol of strength, devotion, and courage.",
      significance:
        "Removes fear, gives confidence, and protects from evil.",
      location: "Temple Entrance",
      days: "Tuesday, Saturday",
      prasadam: "Vadamala, Butter",
    },
    {
      id: 5,
      title: "Subramanya Swamy",
      image: "/images/subramanya.jpg",
      description:
        "The nine planetary deities influence human life and destiny.",
      significance:
        "Subramanya Swamy pooja reduces doshas and improves life balance.",
      location: "Outer Prakaram",
      days: "Tuesday",
      prasadam: "Sesame Oil, Flowers",
    },

  ],

  // ================================
  // ✅ NAVBAR (🔧 FIXED DROPDOWN STRUCTURE)
  // ================================
  navbar: {
    menu: [
      { name: "Home", path: "/" },
      { name: "About", path: "/about" },

      {
        name: "Temple Info",
        dropdown: [
          // 🔧 FIX: merged history + significance into ONE page
          { name: "History & Significance", path: "/info/history" },

          { name: "Do's & Don'ts", path: "/info/dos-donts" },
          { name: "Temple Timings", path: "/info/timings" },
        ],
      },

      { name: "Sevas", path: "/sevas" },
       {
      name: "Donors",
      dropdown: [
        { name: "All Donors", path: "/donors" }
      ]
    },
      { name: "Gallery", path: "/gallery" },
      { name: "Contact", path: "/contact" },
    ],
  },

  // ================================
  // ✅ TEMPLE INFO (🔧 IMPROVED + STRUCTURED)
  // ================================
  info: {

    // 🔥 MERGED HISTORY + SIGNIFICANCE (IMPORTANT CHANGE)
    history: {
      title: "History & Significance",
      subtitle: "శ్రీ హరిహర సహిత వాంఛిత గణపతి దేవాలయము",
      blessings: ["శ్రీరస్తు", "శుభమస్తు", "అవిఘ్నమస్తు"],

      content: [
        "🏛️ Sri Sita Rama Chandra Swamy Devalayam is a sacred temple dedicated to Lord Rama, Goddess Sita, and Lord Lakshmana.",

        "📖 Lord Rama represents **dharma (righteousness), truth, and ideal living**, making this temple spiritually significant.",

        "📍 The temple has grown as a strong devotional center attracting devotees from nearby areas.",

        "📅 Special crowds gather during **Sri Rama Navami, Ekadasi**, and other auspicious days.",

        "🙏 Devotees believe prayers here **bring peace, remove obstacles, and bless families with prosperity**.",

        "🛕 The temple includes sub-shrines of **Hanuman, Shiva, Navagrahas, and Raja Rajeshwari**.",

        "🧘 It promotes **spiritual growth, discipline, and devotion** in a peaceful environment."
      ],
    },

    // ================================
    // ✅ DO'S & DON'TS (FIXED FORMAT)
    // ================================
    dosDonts: {
      title: "Do's & Don'ts",
      subtitle: "శ్రీ హరిహర సహిత వాంఛిత గణపతి దేవాలయము",
      blessings: ["శ్రీరస్తు", "శుభమస్తు", "అవిఘ్నమస్తు"],

      dos: [
        "✔ Keep your mind calm and free from stress",
        "✔ Maintain silence inside the temple",
        "✔ Respect temple traditions and customs",
        "✔ Deposit offerings only in the Hundi",
        "✔ Keep the temple premises clean",
        "✔ Follow queue system for darshan",
        "✔ Be mindful of your valuables",
      ],

      donts: [
        "❌ Do not carry excess cash or jewellery",
        "❌ Do not wear footwear inside temple",
        "❌ Do not approach brokers for darshan",
        "❌ Do not litter or throw prasadam",
        "❌ Do not smoke or carry weapons",
        "❌ Do not create disturbance or quarrel",
        "❌ Do not bring large luggage inside",
      ],
    },

    // ================================
    // ✅ TIMINGS (UNCHANGED)
    // ================================
    timings: {
      title: "Temple Timings",
      subtitle: "శ్రీ హరిహర సహిత వాంఛిత గణపతి దేవాలయము",
      blessings: ["శ్రీరస్తు", "శుభమస్తు", "అవిఘ్నమస్తు"],

      schedule: [
        {
          day: "Monday",
          morning: "6:00 AM - 11:30 AM",
          evening: "5:00 PM - 8:30 PM",
        },
        {
          day: "Tuesday",
          morning: "6:00 AM - 11:30 AM",
          evening: "5:00 PM - 8:30 PM",
        },
        {
          day: "Wednesday",
          morning: "6:00 AM - 11:30 AM",
          evening: "5:00 PM - 8:30 PM",
        },
        {
          day: "Thursday",
          morning: "6:00 AM - 11:30 AM",
          evening: "5:00 PM - 8:30 PM",
        },
        {
          day: "Friday",
          morning: "6:00 AM - 11:30 AM",
          evening: "5:00 PM - 8:30 PM",
        },
        {
          day: "Saturday",
          morning: "6:00 AM - 11:30 AM",
          evening: "5:00 PM - 8:30 PM",
        },
        {
          day: "Sunday",
          morning: "6:00 AM - 11:30 AM",
          evening: "5:00 PM - 8:30 PM",
        },
      ],
    },
  },

  //sevas
  sevas: [
    {
      name: "Sri Rama Archana",
      image: "/images/sevas/sriram.jpg",
      description: "Special archana performed to Lord Sri Rama for peace, prosperity, and divine blessings.",
    },
    {
      name: "Archana",
      image: "/images/sevas/archana.jpg",
      description: "Offering prayers with sacred names for blessings.",
    },
    {
      name: "Abhishekam",
      image: "/images/sevas/abhishekam.jpg",
      description: "Sacred bath to the deity with milk, water, and other items.",
    },

    {
      name: "Hanuman Seva",
      image: "/images/sevas/hanuman.jpg",
      description: "Special pooja for strength, courage, and protection.",
    },
    {
      name: "Navagraha Pooja",
      image: "/images/sevas/navagraha.jpg",
      description: "Pooja to balance planetary influences.",
    },
  ],

  //gallery
  gallery: [
  {
    image: "/gallery/image1.png",
  },
  
 
  {
    image: "/gallery/image3.png",
  },
   {
    image: "/gallery/image4.png",
  },
   {
    image: "/gallery/image5.png",
  },
   {
    image: "/gallery/image6.png",
  },
  
  {
    image: "/gallery/image8.png",
  },
  
],

//contact
contact: {
  phone: "9876543210",
  email: "temple@email.com",
  location: "Policemen Housing Society, Prasanth Nagar, Miyapur, Hyderabad, Telangana 500049,"
}
};