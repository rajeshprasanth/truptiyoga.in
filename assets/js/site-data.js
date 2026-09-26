/*
  TRUPTI YOGA STUDIO — site content configuration
  -------------------------------------------------
  Edit the values below to update the website content.
  No code knowledge is needed: change text between quotes.
  Some fields are left editable but unanswered on purpose,
  so you can fill in your studio's actual details.
*/
window.TRUPTI_DATA = {
  site: {
    name: "Trupti Yoga Studio",
    tagline: "Practice. Awareness. Balance.",
    phoneDisplay: "+91 90258 12951",
    phoneTel: "+919025812951",
    whatsappLink: "https://wa.me/+919025812951",
    email: "truptiyoga.in@gmail.com",
    social: {
      facebook: "https://www.facebook.com/Truptiyogain-1676093939148452/",
      instagram: "https://www.instagram.com/truptiyoga.in/profilecard/?igsh=MXFwMzd0Mjl0b3k1cw==",
      youtube: "https://youtube.com/channel/UCzvp51ODq6W5MI6fbsEOo-w",
      whatsapp: "https://wa.me/+919025812951"
    }
  },

  locations: [
    {
      name: "Studio 1",
      note: "Thiruninravur",
      addressLines: ["No. 48B, 6th Street, Sriram Nagar,", "Thiruninravur, Chennai – 602024"],
      landmark: "",
      mapsUrl: "https://maps.google.com/?q=Trupti+Yoga+Thiruninravur",
      mapsEmbed: "https://www.google.com/maps?q=Trupti%20Yoga%20Thiruninravur&output=embed"
    }
  ],

  classes: [
    {
      name: "Beginners Yoga",
      description: "A gentle introduction to yoga postures, breathing, and mindful movement for those starting their practice.",
      suitable: ["New to yoga", "All adults"],
      duration: "",
      schedule: ""
    },
    {
      name: "General Yoga",
      description: "A balanced practice for students with some experience, helping to build strength, flexibility, and awareness.",
      suitable: ["Continuing students"],
      duration: "",
      schedule: ""
    },
    {
      name: "Pranayama",
      description: "Guided breathing practices to calm the mind and develop awareness of the breath.",
      suitable: ["All levels", "With guidance"],
      duration: "",
      schedule: ""
    },
    {
      name: "Meditation",
      description: "Simple, guided meditation sessions to support concentration and a settled mind.",
      suitable: ["All levels"],
      duration: "",
      schedule: ""
    },
    {
      name: "Flexibility & Mobility",
      description: "Focused practice for improving flexibility, joint mobility, and ease of movement.",
      suitable: ["All levels"],
      duration: "",
      schedule: ""
    },
    {
      name: "Personal / One-to-One Sessions",
      description: "Individual guidance tailored to your body, needs, and goals, at your own pace.",
      suitable: [],
      duration: "",
      schedule: ""
    }
  ],

  audience: [
    { name: "Beginners", text: "You do not need previous experience or flexibility to begin your yoga journey.", icon: "i-user" },
    { name: "Adults", text: "A supportive practice for people at different stages of life and fitness.", icon: "i-users" },
    { name: "Seniors", text: "Gentle practice guided with care, respecting each body's needs.", icon: "i-senior" },
    { name: "Children", text: "A playful, mindful introduction to yoga for younger students.", icon: "i-child" },
    { name: "Experienced Practitioners", text: "Opportunities to deepen and refine an existing practice.", icon: "i-experienced" }
  ],

  schedule: {
    note: "Timings are updated regularly by the studio. Please contact us to confirm the current class schedule.",
    columns: ["Day", "Studio", "Class", "Level", "Time"],
    rows: [
      { day: "To be confirmed", studio: "Studio 1", className: "To be confirmed", level: "All levels", time: "—" }
    ]
  },

  faqs: [
    {
      q: "I have never practiced yoga before. Can I join?",
      a: "Yes. Beginners are welcome, subject to the suitability of the particular class."
    },
    {
      q: "Do I need to be flexible to practice yoga?",
      a: "No. Flexibility is not a requirement for beginning yoga. We encourage students to practice at their own pace."
    },
    {
      q: "What should I wear?",
      a: "Wear comfortable clothing that allows you to move freely."
    },
    {
      q: "Should I bring a yoga mat?",
      a: "Please confirm the studio's current policy when you visit or call — we will be happy to guide you."
    },
    {
      q: "How often should I practice?",
      a: "Consistency is generally more useful than trying to do too much at once. Your teacher can guide you according to your level and goals."
    },
    {
      q: "How long is each class?",
      a: "Please contact the studio to confirm the current class duration."
    },
    {
      q: "Can children or senior citizens join?",
      a: "Students of different ages are welcomed and guided according to their needs. Please confirm the suitable class when you contact the studio."
    },
    {
      q: "Do I need to book before attending?",
      a: "Please check with the studio about the current booking arrangement before attending a class."
    },
    {
      q: "Can I attend a trial class?",
      a: "Please contact the studio to learn about the current arrangement for trial classes."
    }
  ],

  gallery: {
    filters: [
      { id: "*", label: "All" },
      { id: "poses", label: "Yoga Poses" },
      { id: "press", label: "Press & Media" },
      { id: "achievement", label: "Achievements" }
    ],
    items: [
      { src: "assets/img-gen/gallery/pose-full-01.jpg", thumb: "assets/img-gen/gallery/gal-pose-01.jpg", cat: "poses", alt: "Yoga pose at Trupti Yoga Studio", caption: "Yoga pose · 01" },
      { src: "assets/img-gen/gallery/pose-full-02.jpg", thumb: "assets/img-gen/gallery/gal-pose-02.jpg", cat: "poses", alt: "Yoga pose at Trupti Yoga Studio", caption: "Yoga pose · 02" },
      { src: "assets/img-gen/gallery/pose-full-03.jpg", thumb: "assets/img-gen/gallery/gal-pose-03.jpg", cat: "poses", alt: "Yoga pose at Trupti Yoga Studio", caption: "Yoga pose · 03" },
      { src: "assets/img-gen/gallery/pose-full-04.jpg", thumb: "assets/img-gen/gallery/gal-pose-04.jpg", cat: "poses", alt: "Yoga pose at Trupti Yoga Studio", caption: "Yoga pose · 04" },
      { src: "assets/img-gen/gallery/pose-full-05.jpg", thumb: "assets/img-gen/gallery/gal-pose-05.jpg", cat: "poses", alt: "Yoga pose at Trupti Yoga Studio", caption: "Yoga pose · 05" },
      { src: "assets/img-gen/gallery/pose-full-06.jpg", thumb: "assets/img-gen/gallery/gal-pose-06.jpg", cat: "poses", alt: "Yoga pose at Trupti Yoga Studio", caption: "Yoga pose · 06" },
      { src: "assets/img-gen/gallery/pose-full-07.jpg", thumb: "assets/img-gen/gallery/gal-pose-07.jpg", cat: "poses", alt: "Yoga pose at Trupti Yoga Studio", caption: "Yoga pose · 07" },
      { src: "assets/img-gen/gallery/pose-full-08.jpg", thumb: "assets/img-gen/gallery/gal-pose-08.jpg", cat: "poses", alt: "Yoga pose at Trupti Yoga Studio", caption: "Yoga pose · 08" },
      { src: "assets/img-gen/gallery/pose-full-09.jpg", thumb: "assets/img-gen/gallery/gal-pose-09.jpg", cat: "poses", alt: "Yoga pose at Trupti Yoga Studio", caption: "Yoga pose · 09" },
      { src: "assets/img-gen/gallery/pose-full-10.jpg", thumb: "assets/img-gen/gallery/gal-pose-10.jpg", cat: "poses", alt: "Yoga pose at Trupti Yoga Studio", caption: "Yoga pose · 10" },
      { src: "assets/img-gen/gallery/pose-full-11.jpg", thumb: "assets/img-gen/gallery/gal-pose-11.jpg", cat: "poses", alt: "Yoga pose at Trupti Yoga Studio", caption: "Yoga pose · 11" },
      { src: "assets/img-gen/gallery/pose-full-12.jpg", thumb: "assets/img-gen/gallery/gal-pose-12.jpg", cat: "poses", alt: "Yoga pose at Trupti Yoga Studio", caption: "Yoga pose · 12" },
      { src: "assets/img-gen/gallery/pose-full-13.jpg", thumb: "assets/img-gen/gallery/gal-pose-13.jpg", cat: "poses", alt: "Yoga pose at Trupti Yoga Studio", caption: "Yoga pose · 13" },
      { src: "assets/img-gen/gallery/pose-full-14.jpg", thumb: "assets/img-gen/gallery/gal-pose-14.jpg", cat: "poses", alt: "Yoga pose at Trupti Yoga Studio", caption: "Yoga pose · 14" },
      { src: "assets/img-gen/gallery/pose-full-15.jpg", thumb: "assets/img-gen/gallery/gal-pose-15.jpg", cat: "poses", alt: "Yoga pose at Trupti Yoga Studio", caption: "Yoga pose · 15" },
      { src: "assets/img/media/media-1.jpg", thumb: "assets/img-gen/gallery/gal-media-01.jpg", cat: "press", alt: "Press and media coverage of Trupti Yoga Studio", caption: "Press & media coverage" },
      { src: "assets/img/media/media-2.jpg", thumb: "assets/img-gen/gallery/gal-media-02.jpg", cat: "press", alt: "Press and media coverage of Trupti Yoga Studio", caption: "Press & media coverage" },
      { src: "assets/img/media/media-3.jpg", thumb: "assets/img-gen/gallery/gal-media-03.jpg", cat: "press", alt: "Press and media coverage of Trupti Yoga Studio", caption: "Press & media coverage" },
      { src: "assets/img/media/media-4.jpg", thumb: "assets/img-gen/gallery/gal-media-04.jpg", cat: "press", alt: "Press and media coverage of Trupti Yoga Studio", caption: "Press & media coverage" },
      { src: "assets/img/media/media-5.jpg", thumb: "assets/img-gen/gallery/gal-media-05.jpg", cat: "press", alt: "Press and media coverage of Trupti Yoga Studio", caption: "Press & media coverage" },
      { src: "assets/img/media/media-6.jpg", thumb: "assets/img-gen/gallery/gal-media-06.jpg", cat: "press", alt: "Press and media coverage of Trupti Yoga Studio", caption: "Press & media coverage" },
      { src: "assets/img/media/media-7.jpg", thumb: "assets/img-gen/gallery/gal-media-07.jpg", cat: "press", alt: "Press and media coverage of Trupti Yoga Studio", caption: "Press & media coverage" },
      { src: "assets/img/awards/award-photo.jpg", thumb: "assets/img-gen/gallery/gal-award.jpg", cat: "achievement", alt: "Award photograph of Trupti Yoga Studio", caption: "Award & recognition" }
    ]
  },

  testimonials: [
    { src: "assets/img-gen/testimonials/testimonial-1000495769.jpg", alt: "Student feedback shared with Trupti Yoga Studio" },
    { src: "assets/img-gen/testimonials/testimonial-1000495765.jpg", alt: "Student feedback shared with Trupti Yoga Studio" },
    { src: "assets/img-gen/testimonials/testimonial-1000495771.jpg", alt: "Student feedback shared with Trupti Yoga Studio" },
    { src: "assets/img-gen/testimonials/testimonial-1000495767.jpg", alt: "Student feedback shared with Trupti Yoga Studio" },
    { src: "assets/img-gen/testimonials/testimonial-1000495775.jpg", alt: "Student feedback shared with Trupti Yoga Studio" }
  ],

  achievements: [
    { title: "Noble World Record", text: "Director (Yoga). A record of sincere and dedicated practice.", icon: "i-award" },
    { title: "Yoga Ratna Award", text: "Recognition received along the journey of teaching yoga.", icon: "i-award" },
    { title: "Best Teacher Award", text: "Recognition for teaching and guiding students with care.", icon: "i-award" },
    { title: "Best Yoga Center Award", text: "Recognition for the work of the studio and its community.", icon: "i-award" },
    { title: "Thirumoolar Award", text: "Honour received for contribution to the practice of yoga.", icon: "i-award" },
    { title: "State, National & International Competitions", text: "Participations and achievements at state, national, and international-level yoga competitions.", icon: "i-target" }
  ],

  events: {
    upcoming: [
      /*
        Add an upcoming workshop or event here, for example:
        { title: "New Workshop", date: "2026-01-15", text: "Short description...", }
      */
    ],
    emptyText: "New workshops and events will be announced here."
  }
};