// 📁 src/data/templeData.js

export const templeData = {

  // ================================
  // ✅ ABOUT SECTION (UNCHANGED + CLEANED)
  // ================================
  about: {
    title: "SRI HARIHARA SAHITA VANCHITA GANAPATHI DEVALAYAM",
    subtitle: "శ్రీ హరిహర సహిత వాంఛిత గణపతి దేవాలయము",
    blessings: ["శ్రీరస్తు", "శుభమస్తు", "అవిఘ్నమస్తు"],

    description: `
Sri Harihara Sahita Vanchita Ganapathi Devalayam is a sacred temple dedicated to Lord Ganesha, the remover of obstacles and the giver of wisdom, prosperity, and success.

Lord Ganapathi here is worshipped along with Lord Shiva (Harihara) and is believed to fulfill the sincere wishes (Vanchita) of devotees. The temple is a spiritual center where devotees come seeking peace, success, and divine blessings in all aspects of life.
  `,

    history: `
The temple has been a place of devotion for many years and is regarded as a powerful spiritual center. Devotees believe that prayers offered to Lord Ganapathi here remove obstacles and bring success, harmony, and prosperity.

The name "Vanchita Ganapathi" signifies the deity who fulfills the wishes of devotees with true faith and devotion.
  `,

    festivals: `
- Vinayaka Chavithi
- Sankatahara Chaturthi
- Maha Shivaratri
- Ganesh Navaratri
  `,

    templeInfo: `
The temple includes sub-shrines for Lord Shiva, Lord Hanuman, and Subramanya Swamy. Daily poojas such as  Archana, and Abhishekam are performed following traditional rituals.

Special poojas are conducted on Chaturthi days, attracting a large number of devotees.
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
        "🏛️ Sri Harihara Sahita Vanchita Ganapathi Devalayam is a sacred temple dedicated to Lord Ganesha, the remover of obstacles and the bestower of wisdom and success.",

        "🐘 Lord Ganapathi is worshipped as the **first deity (Adi Devata)** before starting any auspicious work, symbolizing success, intelligence, and prosperity.",

        "📖 The name 'Vanchita Ganapathi' signifies the divine form who **fulfills the wishes and desires of devotees** with true devotion.",

        "🕉️ 'Harihara Sahita' represents the presence and blessings of **Lord Shiva and Lord Vishnu**, making the temple spiritually powerful and unique.",

        "📍 The temple has grown into a strong devotional center, attracting devotees from nearby areas seeking blessings for success and obstacle removal.",

        "📅 Special crowds gather during **Vinayaka Chavithi, Sankatahara Chaturthi, and Ganesh Navaratri**.",

        "🙏 Devotees believe prayers here **remove obstacles (Vighnas), bring peace, and bless families with prosperity and happiness**.",

        "🛕 The temple includes sub-shrines of **Lord Shiva, Hanuman, and Subramanya Swamy**.",

        "🧘 The temple promotes **spiritual growth, discipline, and devotion** in a peaceful and divine environment."
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
          morning: "6:15 AM - 11:30 AM",
          evening: "6:00 PM - 8:30 PM",
        },
        {
          day: "Tuesday",
          morning: "6:15 AM - 11:30 AM",
          evening: "6:00 PM - 8:30 PM",
        },
        {
          day: "Wednesday",
          morning: "6:15 AM - 11:30 AM",
          evening: "6:00 PM - 8:30 PM",
        },
        {
          day: "Thursday",
          morning: "6:15 AM - 11:30 AM",
          evening: "6:00 PM - 8:30 PM",
        },
        {
          day: "Friday",
          morning: "6:15 AM - 11:30 AM",
          evening: "6:00 PM - 8:30 PM",
        },
        {
          day: "Saturday",
          morning: "6:15 AM - 11:30 AM",
          evening: "6:00 PM - 8:30 PM",
        },
        {
          day: "Sunday",
          morning: "6:15 AM - 11:30 AM",
          evening: "6:00 PM - 8:30 PM",
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
      name: "Ganesha Archana",
      image: "/images/sevas/ganesh.jpg",
      description: "Offering prayers with sacred names for blessings.",
    },
    {
      name: " Shiva Abhishekam",
      image: "/images/sevas/abhishekam.jpg",
      description: "Sacred bath to the deity with milk, water, and other items.",
    },

    {
      name: "Hanuman Seva",
      image: "/images/sevas/hanuman.jpg",
      description: "Special pooja for strength, courage, and protection.",
    },
    {
      name: "subramanya swamy seva",
      image: "/images/sevas/subramanya.jpg",
      description: "Pooja to balance planetary influences.",
    },
  ],

  //gallery
  gallery: [
    {
      image: "/gallery/image1.jpg",
    },


    {
      image: "/gallery/image2.jpg",
    },
    {
      image: "/gallery/image3.jpg",
    },
    {
      image: "/gallery/image4.jpg",
    },
    {
      image: "/gallery/image5.jpg",
    },
    {
      image: "/gallery/image6.jpg",
    },


  ],

  //contact
  contact: {
    phone: "9876543210",
    email: "temple@email.com",
    location: "Plot no 18&19, Vediri Twp, Ameenpur, Miyapur, Hyderabad, Telangana 502033"
  }


  
};