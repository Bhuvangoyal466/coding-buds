export type NavItem = {
  label: string;
  href: string;
};

export type CategoryItem = {
  title: string;
  description: string;
  badge: string;
  accent: string;
  image: string;
  imageAlt: string;
};

export type CourseItem = {
  title: string;
  description: string;
  badge: string;
  sessions: string;
  rating: string;
  image: string;
  imageAlt: string;
  highlights: string[];
};

export type StatItem = {
  label: string;
  end: number;
  suffix: string;
  tone: string;
};

export type TestimonialItem = {
  name: string;
  role: string;
  quote: string;
  avatar: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type BodyBlock =
  | { type: "heading"; text: string }
  | { type: "subheading"; text: string }
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] }
  | { type: "callout"; text: string };

export type BlogPost = {
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  imageAlt: string;
  teaser: string;
  excerpt: string;
  paragraphs: string[]; // kept for backward compat
  body: BodyBlock[];
};

export const siteConfig = {
  name: "Coding Buds",
  shortName: "Coding Buds",
  description: "Fun and personalized coding classes for kids and teens aged 6-16.",
  phone: "+91 77175 22189",
  phoneHref: "tel:+917717522189",
  whatsappHref: "https://wa.me/917717522189",
  email: "codingbuds7@gmail.com",
  emailHref: "mailto:codingbuds7@gmail.com",
  instagram: "https://instagram.com/coding_buds",
  facebook: "https://www.facebook.com/profile.php?id=61571017679574",
  linkedin: "https://www.linkedin.com/company/codingbuds/",
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Courses", href: "/#courses" },
  { label: "Testimonials", href: "/#testimonials" },
  { label: "FAQ", href: "/#faq" },
  { label: "Blogs", href: "/blogs" },
  { label: "Contact", href: "/#contact" },
];

export const categories: CategoryItem[] = [
  {
    title: "Scratch Programming for Kids (Ages 6-10)",
    description: "Build games and animations with visual programming blocks and drag and drop components.",
    badge: "Beginner Level",
    accent: "from-[#46c47d] to-[#1f8b57]",
    image: "/assets/images/category-1.svg",
    imageAlt: "Scratch programming icon",
  },
  {
    title: "Python Programming for Teens (Ages 8-16)",
    description: "Code real apps, mini-games, and AI basics with a professional programming language.",
    badge: "Intermediate",
    accent: "from-[#ff6a7b] to-[#d93464]",
    image: "/assets/images/category-2.svg",
    imageAlt: "Python programming icon",
  },
  {
    title: "Web Development Course",
    description: "Learn HTML, CSS, and JavaScript to build personal websites, portfolios, and interactive web apps.",
    badge: "All Ages",
    accent: "from-[#4c7cff] to-[#1f4ad7]",
    image: "/assets/images/category-3.svg",
    imageAlt: "Web development icon",
  },
  {
    title: "Java Programming Course",
    description: "Object-oriented programming, logic building, and computer science fundamentals for students.",
    badge: "Intermediate",
    accent: "from-[#f5c64e] to-[#f28b1d]",
    image: "/assets/images/category-4.svg",
    imageAlt: "Java programming icon",
  },
];

export const courses: CourseItem[] = [
  {
    title: "Scratch Programming & Game Development for Kids",
    description: "Build games, animations, and interactive stories while learning visual coding foundations.",
    badge: "Beginner",
    sessions: "48 Sessions Total",
    rating: "4.9 Rating",
    image: "/assets/images/scratch-game.webp",
    imageAlt: "Scratch programming course for kids",
    highlights: ["AI basics", "IoT projects", "STEM activities"],
  },
  {
    title: "Python Programming for Teens - Apps, Games & AI Basics",
    description: "Move from block coding to text-based programming with apps, mini-games, and practical AI concepts.",
    badge: "Intermediate",
    sessions: "48 Sessions Total",
    rating: "5.0 Rating",
    image: "/assets/images/python-class.webp",
    imageAlt: "Python programming course for teens",
    highlights: ["Data science", "Algorithms", "Mathematical computing"],
  },
  {
    title: "Web Development Course - HTML, CSS, JavaScript for Kids",
    description: "Create responsive websites and digital portfolio projects with a clean modern frontend workflow.",
    badge: "Intermediate",
    sessions: "48 Sessions Total",
    rating: "4.8 Rating",
    image: "/assets/images/web-development.webp",
    imageAlt: "Web development course for kids",
    highlights: ["Responsive design", "API integration", "Portfolio projects"],
  },
  {
    title: "Java Coding Adventures for Kids & Teens",
    description: "Strengthen logic building and object-oriented thinking with a language used widely in computer science.",
    badge: "Intermediate",
    sessions: "48 Sessions Total",
    rating: "4.8 Rating",
    image: "/assets/images/java.webp",
    imageAlt: "Java programming course for students",
    highlights: ["OOP design", "Problem solving", "CS fundamentals"],
  },
];

export const stats: StatItem[] = [
  { label: "Students", end: 600, suffix: "+", tone: "from-[#46c47d] to-[#1f8b57]" },
  { label: "Projects Completed", end: 200, suffix: "+", tone: "from-[#ff6a7b] to-[#d93464]" },
  { label: "Parent Satisfaction", end: 100, suffix: "%", tone: "from-[#9278ff] to-[#5640dd]" },
  { label: "Years of Experience", end: 10, suffix: "+", tone: "from-[#f5c64e] to-[#f28b1d]" },
];

export const testimonials: TestimonialItem[] = [
  {
    name: "Mrs. Mittal",
    role: "Parent of 6-year-old",
    quote: "My child loves Coding Buds. The classes are engaging, well-structured, and perfectly paced for young learners.",
    avatar: "M",
  },
  {
    name: "Mr. Baani",
    role: "Parent of 8-year-old",
    quote: "Best classes for children in Panchkula. Our child is completely different with good knowledge of coding.",
    avatar: "S",
  },
  {
    name: "Mrs. Mangla",
    role: "Parent of 12-year-old",
    quote: "The 1:1 sessions are just great and I have come a long way in this field. Joining Coding Buds was the best decision.",
    avatar: "I",
  },
  {
    name: "Mrs. Sharma",
    role: "Parent of 9-year-old",
    quote: "My daughter looks forward to every class. The teacher explains concepts patiently, and the projects keep her excited to learn more.",
    avatar: "S",
  },
  {
    name: "Mr. Verma",
    role: "Parent of 11-year-old",
    quote: "We noticed a huge boost in logical thinking and confidence. The structured curriculum and personal attention make a real difference.",
    avatar: "V",
  },
  {
    name: "Mrs. Iyer",
    role: "Parent of 13-year-old",
    quote: "Coding Buds made programming easy to understand for my son. He now builds mini projects on his own and enjoys problem solving.",
    avatar: "I",
  },
];

export const faqs: FaqItem[] = [
  {
    question: "What age groups do you teach?",
    answer: "We teach kids and teens aged 6-16. We have age-appropriate courses: Scratch for kids 6-10, Python for teens 11-16, and Web Development for all ages.",
  },
  {
    question: "Do you offer both 1:1 and group classes?",
    answer: "Yes. We offer both 1:1 personalized classes and small group sessions based on your preference. Both options are designed for quality learning.",
  },
  {
    question: "What equipment does my child need?",
    answer: "Your child needs a computer or laptop with an internet connection. We guide you through all free software setup steps.",
  },
  {
    question: "How long is each class and course?",
    answer: "Each class is 60 minutes long. Course duration varies: Scratch, Python, Web Development, and Java all follow structured session plans with flexible scheduling.",
  },
  {
    question: "What will my child learn and create?",
    answer: "Students create real projects: games in Scratch, apps and mini-games in Python, and websites with HTML, CSS, and JavaScript.",
  },
  {
    question: "Can I try a free trial class?",
    answer: "Absolutely. We offer a free trial class so you can experience our teaching methodology before committing to the full course.",
  },
];

export const blogPosts: BlogPost[] = [
  {
  slug: "put-your-webpage-on-the-internet",
  title: "Put Your Webpage on the Internet!",
  category: "Web Development",
  date: "2025-07-01",
  readTime: "10 min read",
  image: "/assets/images/web-development.webp",
  imageAlt: "Kids publishing their first webpage live on the internet",
  teaser:
    "You already wrote the code. Now it's time to share it with the world! Follow five wizard steps to publish your project live on the internet using GitHub Pages — for free.",
  excerpt:
    "A step-by-step wizard tutorial for kids and teens to convert their Python code into a live webpage using GitHub Pages. No experience needed — just follow the magic!",
  paragraphs: [
    "Turn your Python code into a real live webpage that anyone in the world can visit.",
    "Using GitHub Pages, publishing your first website is completely free and takes less than 20 minutes.",
  ],
  body: [
    {
      type: "paragraph",
      text: "You have already written real Python code — that is amazing! Now it is time to do something even cooler: put your creation on the internet so anyone in the world can visit it.",
    },
    {
      type: "heading",
      text: "What You Will Need",
    },
    {
      type: "list",
      items: [
        "A computer or laptop with internet",
        "Your Python code from class",
        "A parent's email address (for GitHub sign-up)",
        "About 15–20 minutes of wizard time",
      ],
    },
    {
      type: "heading",
      text: "Step 1: Create Your GitHub Account",
    },
    {
      type: "paragraph",
      text: "Think of GitHub as a giant library in the clouds. Your code is a book, and GitHub gives it a special shelf with your name on it. Go to github.com, click Sign up, and create your free account. Your username will become part of your webpage address — make it something you love!",
    },
    {
      type: "heading",
      text: "Step 2: Turn Your Code into a Webpage",
    },
    {
      type: "paragraph",
      text: "Visit code-webpage.vercel.app and paste your Python code into the dark box. Click Convert to HTML and copy all the HTML code that appears. The tool handles the hard work — you just need to copy the result.",
    },
    {
      type: "heading",
      text: "Step 3: Create Your Repository",
    },
    {
      type: "paragraph",
      text: "A repository is like a magical backpack just for your project. Back on GitHub, click Create repository, give it a name like my-project, make sure Public is selected, and click the green button to create it.",
    },
    {
      type: "heading",
      text: "Step 4: Add Your HTML Code",
    },
    {
      type: "paragraph",
      text: "Click creating a new file, name it exactly index.html, paste your HTML code into the editor, and click Commit changes. The file name must be spelled exactly right — index.html is the front door of your webpage.",
    },
    {
      type: "heading",
      text: "Step 5: Go Live on the Internet!",
    },
    {
      type: "paragraph",
      text: "Click Settings, scroll to Pages in the left menu, set the branch to main, and click Save. Wait one to two minutes, refresh the page, and you will see your live link. Click Visit site to see your project on the real internet!",
    },
    {
      type: "callout",
      text: "Your webpage address will look like yourusername.github.io/your-repo-name — share it with anyone and they can visit it from anywhere in the world!",
    },
  ],
},
  {
    slug: "scratch-programming-for-kids",
    title: "Getting Started with Scratch Programming for Kids",
    category: "Scratch Programming",
    date: "2025-01-15",
    readTime: "5 min read",
    image: "/assets/images/scratch-game.webp",
    imageAlt: "Getting started with Scratch programming",
    teaser: "Is 6 really old enough to start coding? Spoiler: yes — and Scratch is exactly why. Here's what your child can build in their very first session.",
    excerpt: "Scratch is the perfect introduction to coding for children. This visual programming language uses colourful blocks instead of complex text — making it ideal for ages 6 to 12.",
    paragraphs: [
      "Scratch helps children develop logical thinking, problem-solving skills, and creativity while building games, animations, and interactive stories.",
      "It is especially useful for ages 6-12 because the interface keeps the focus on ideas rather than syntax.",
    ],
    body: [
      { type: "paragraph", text: "Every child who learns to code starts somewhere. For most kids aged 6 to 12, Scratch is that starting point — and for good reason. Created by MIT, Scratch replaces intimidating lines of text with colourful, drag-and-drop blocks that snap together like puzzle pieces. Your child is essentially coding before they even realise it." },
      { type: "heading", text: "Why Scratch is the Perfect First Step" },
      { type: "paragraph", text: "Traditional programming languages like Python or JavaScript require children to remember exact spelling, punctuation, and structure. One missing semicolon and nothing works. For a 7-year-old, that frustration can kill the love of coding before it even begins." },
      { type: "paragraph", text: "Scratch removes that barrier entirely. Children see instant results: a sprite dances, a sound plays, a story unfolds. This immediate feedback loop is incredibly motivating and builds genuine confidence." },
      { type: "list", items: [
        "No typing errors — blocks simply snap or don't snap",
        "Instant visual feedback keeps children engaged",
        "Introduces core concepts: loops, conditionals, variables, and events",
        "Shareable projects build pride and social motivation",
        "Free to use at scratch.mit.edu — no downloads needed",
      ]},
      { type: "heading", text: "What Children Actually Build in Scratch" },
      { type: "paragraph", text: "Parents are often surprised by how quickly children go from complete beginner to creating real, playable games. In a well-structured course, children typically build their first interactive project within the first two sessions." },
      { type: "subheading", text: "Games" },
      { type: "paragraph", text: "From simple catch games to multi-level platformers, Scratch handles game logic beautifully. Children learn about scoring systems, collision detection, and game loops — concepts that transfer directly to professional game development later." },
      { type: "subheading", text: "Animations and Stories" },
      { type: "paragraph", text: "Kids who love art and storytelling find Scratch immediately appealing. They create animated characters, voiced stories, and even short films — all coded by themselves." },
      { type: "subheading", text: "Quizzes and Interactive Apps" },
      { type: "paragraph", text: "Older children in the Scratch age range often build quiz games, math challenges, or simple music apps. These projects involve variables and user input — solid programming foundations." },
      { type: "heading", text: "The Skills Scratch Secretly Teaches" },
      { type: "paragraph", text: "Beyond coding, Scratch builds cognitive skills that benefit children across every subject in school." },
      { type: "list", items: [
        "Logical sequencing — understanding that order matters",
        "Decomposition — breaking big problems into smaller steps",
        "Debugging — finding and fixing mistakes calmly",
        "Creative thinking — designing something from nothing",
        "Persistence — trying again when something doesn't work",
      ]},
      { type: "callout", text: "Research from MIT found that children who learn Scratch show measurable improvements in mathematical reasoning and systematic thinking — skills that benefit them far beyond coding class." },
      { type: "heading", text: "When Should My Child Start Scratch?" },
      { type: "paragraph", text: "Most children are ready for Scratch around age 6, though some confident readers start as young as 5. The key indicators are basic reading ability (to understand block labels) and the ability to use a mouse or trackpad with reasonable control." },
      { type: "paragraph", text: "At Coding Buds, we assess each child individually during a free trial class. Some 6-year-olds are ready to zoom ahead; some 9-year-olds benefit from starting with the absolute basics. There is no wrong pace — only the pace that works for your child." },
      { type: "heading", text: "What Comes After Scratch?" },
      { type: "paragraph", text: "Scratch is a beginning, not a destination. Once children are comfortable with its concepts — typically after a structured course — they are well prepared to move into Python, where the same logical thinking applies but with real text-based code." },
      { type: "paragraph", text: "Many of our students make this transition between ages 9 and 12, and the Scratch foundation makes Python feel familiar rather than daunting. The jump is smaller than parents expect." },
      { type: "callout", text: "At Coding Buds, our Scratch course is 48 sessions long and designed to genuinely challenge children at every stage — not just keep them entertained. By the end, they have a portfolio of projects they built themselves." },
    ],
  },
  {
    slug: "python-for-young-programmers",
    title: "Why Python is Perfect for Young Programmers",
    category: "Python",
    date: "2025-07-22",
    readTime: "7 min read",
    image: "/assets/images/python-class.webp",
    imageAlt: "Python programming for young minds",
    teaser: "Google, NASA, and Instagram all run on Python. So why aren't more kids learning it? We break down why it's the smartest second step after Scratch.",
    excerpt: "Python's simple syntax and powerful capabilities make it an ideal first text-based programming language for kids and teens aged 8 and above.",
    paragraphs: [
      "Discover why Python is used by companies like Google, Netflix, and Instagram, and how your child can start building applications, games, and AI projects with it.",
      "Python is a strong bridge from visual coding into real-world software development.",
    ],
    body: [
      { type: "paragraph", text: "When children are ready to move beyond visual coding, Python is the language that almost every expert recommends first. It reads almost like plain English, runs on any computer, and is used by some of the world's most successful companies. For a young programmer, it is the perfect bridge from playground to profession." },
      { type: "heading", text: "Why Python and Not Another Language?" },
      { type: "paragraph", text: "There are hundreds of programming languages. Parents often ask why we recommend Python specifically for young learners. The answer comes down to three things: readability, power, and opportunity." },
      { type: "subheading", text: "Readability" },
      { type: "paragraph", text: "Python code looks remarkably close to plain English. Compare Python to Java, for example — Python needs a fraction of the code to do the same thing, and it reads naturally from top to bottom. A child can write a working program in Python on day one." },
      { type: "subheading", text: "Power" },
      { type: "paragraph", text: "Despite being beginner-friendly, Python is a fully professional language. Google, Netflix, Instagram, NASA, and thousands of other organisations use Python in production. Children are not learning a toy language — they are learning the real thing." },
      { type: "subheading", text: "Opportunity" },
      { type: "paragraph", text: "Python is the number one language in data science, artificial intelligence, and machine learning. Children learning Python today are building skills that are genuinely in demand and will remain so for decades." },
      { type: "heading", text: "What Children Build in Python" },
      { type: "paragraph", text: "The best way to learn Python is to build things. At Coding Buds, our Python course is entirely project-based. Children do not sit through lectures — they build." },
      { type: "list", items: [
        "Calculator and number games — variables, operators, and logic",
        "Quiz apps — conditionals and user input",
        "Number guessing games — loops and randomisation",
        "Simple chatbots — string manipulation and functions",
        "Mini data projects — lists, dictionaries, and file handling",
        "Basic AI concepts — pattern recognition and simple machine learning ideas",
      ]},
      { type: "heading", text: "The Confidence Shift Parents Notice" },
      { type: "paragraph", text: "Something interesting happens when a child writes their first Python program that actually runs. It is not just satisfaction — it is a shift in how they see themselves. They are no longer a child who uses technology. They are a child who creates with technology." },
      { type: "paragraph", text: "Parents frequently tell us their child started approaching school problems differently after a few months of Python. The habit of breaking a problem into steps, testing solutions, and debugging calmly transfers directly into maths, science, and even writing assignments." },
      { type: "callout", text: "One of our parents told us: 'My son used to give up the moment something was hard. After six months of Python, he debugs his homework the way he debugs his code — methodically, without panic.' That is the real value of learning to code." },
      { type: "heading", text: "The Right Age to Start Python" },
      { type: "paragraph", text: "We generally recommend Python from age 8 onwards, though children who have completed a Scratch course are often ready earlier. The key is comfort with reading and basic arithmetic — Python involves both." },
      { type: "paragraph", text: "There is no upper limit. We teach Python to teenagers preparing for school computer science exams, to students building college application projects, and to children who simply want to see what they can create." },
      { type: "heading", text: "How Our Python Course Works" },
      { type: "paragraph", text: "Our Python course runs across 48 structured sessions. We start with the absolute basics and gradually build to more complex projects. Children are never thrown in the deep end — each concept is introduced when they are genuinely ready for it." },
      { type: "paragraph", text: "Every student gets personalised attention. In our 1:1 sessions, the pace adapts completely to your child. In our group sessions, we keep groups small enough that nobody gets left behind." },
      { type: "callout", text: "Book a free trial Python class today. Your child will write their first real program in the very first session — we guarantee it." },
    ],
  },
  {
    slug: "building-your-first-website",
    title: "Building Your First Website: A Teen's Guide",
    category: "Web Development",
    date: "2025-01-05",
    readTime: "6 min read",
    image: "/assets/images/web-development.webp",
    imageAlt: "Web development for teenagers",
    teaser: "Your teenager could have a real, live website online by the end of this course. Here's what that actually looks like — and why universities are paying attention.",
    excerpt: "Web development opens doors to endless possibilities. Learn how teenagers can create their own websites using HTML, CSS, and JavaScript — and why every parent should consider this course for their child.",
    paragraphs: [
      "From personal portfolios to interactive games, web development lets students bring ideas to life on the web.",
      "It is a practical path for kids who want to showcase creativity and build transferable digital skills.",
    ],
    body: [
      { type: "paragraph", text: "Every website your child visits — from YouTube to their school's homework portal — was built by someone who learned exactly what we teach in our Web Development course. HTML, CSS, and JavaScript are the three languages that power the entire web, and they are entirely learnable by motivated teenagers." },
      { type: "heading", text: "The Three Languages of the Web" },
      { type: "subheading", text: "HTML — The Structure" },
      { type: "paragraph", text: "HTML is the skeleton of every webpage. It defines headings, paragraphs, images, links, and buttons. It is the most beginner-friendly of the three and produces visible results immediately — a big motivator for young learners." },
      { type: "subheading", text: "CSS — The Style" },
      { type: "paragraph", text: "CSS is what makes websites beautiful. Colours, fonts, layouts, animations — all controlled by CSS. Children who enjoy design and art particularly love this stage, as it is essentially digital art with rules." },
      { type: "subheading", text: "JavaScript — The Interactivity" },
      { type: "paragraph", text: "JavaScript makes websites come alive. Buttons that do things, menus that open, forms that validate — all JavaScript. It is also a full programming language, so children are building real logic skills alongside their web skills." },
      { type: "heading", text: "What Students Actually Create" },
      { type: "paragraph", text: "Our web development students do not just learn theory. They build real projects that they can show to friends, family, and eventually — universities and employers." },
      { type: "list", items: [
        "Personal portfolio website — showcasing their projects and interests",
        "Interactive quiz game — built entirely with JavaScript",
        "Responsive blog — looks great on phone and desktop",
        "Product landing page — professional-grade design",
        "To-do app — full interactivity with JavaScript",
        "Weather app — connecting to real live data via APIs",
      ]},
      { type: "heading", text: "Why Web Development is a Smart Choice for Teens" },
      { type: "paragraph", text: "Beyond the technical skills, web development teaches teenagers something invaluable: how to present themselves online. A personal portfolio website is increasingly expected in university applications and internship interviews." },
      { type: "paragraph", text: "Teenagers who can build their own website have a genuine edge. They can create a portfolio that actually works, rather than relying on generic templates. They can update it themselves. They understand how the internet actually functions." },
      { type: "callout", text: "Several of our students have used websites they built during our course as part of their school and university applications. A working website speaks far louder than a grade on a report card." },
      { type: "heading", text: "Web Development and Future Careers" },
      { type: "paragraph", text: "Web development is one of the most in-demand skills in the world. According to global hiring data, web developers are consistently among the highest-paid and most sought-after technology professionals. Even students who do not pursue technology careers find web skills useful — marketing, design, journalism, and business all benefit from people who understand how the web works." },
      { type: "heading", text: "Our Web Development Course" },
      { type: "paragraph", text: "Our 48-session Web Development course takes students from their very first HTML tag to building and deploying a complete, live website. We cover HTML, CSS, JavaScript, responsive design, and basic API integration." },
      { type: "paragraph", text: "By the end of the course, students have a portfolio of projects hosted online — real, working websites they built themselves. That is not just a learning outcome. That is something to be genuinely proud of." },
    ],
  },
  {
    slug: "java-programming-foundations",
    title: "Java Programming: Building Strong Foundations",
    category: "Java",
    date: "2025-06-28",
    readTime: "8 min read",
    image: "/assets/images/java.webp",
    imageAlt: "Java programming fundamentals",
    teaser: "Most school computer science syllabuses test Java. Most kids arrive underprepared. Here's how to change that before exam season starts.",
    excerpt: "Java is one of the most popular programming languages in the world and a strong choice for students who want to build rigorous computer science foundations — particularly those aiming for competitive exams or technology careers.",
    paragraphs: [
      "Explore Java's object-oriented principles, platform independence, and real-world applications.",
      "The course builds a structured foundation that prepares students for advanced programming concepts.",
    ],
    body: [
      { type: "paragraph", text: "Java has been one of the world's most widely used programming languages for over 25 years. Android apps, banking systems, enterprise software, and computer science university curricula all rely on Java. For students who want to build serious programming foundations — especially those with an eye on competitive exams or technology careers — Java is a powerful choice." },
      { type: "heading", text: "What Makes Java Different" },
      { type: "paragraph", text: "Java is an object-oriented programming language. This means it organises code around objects — self-contained units that combine data and behaviour. Learning to think in objects is a significant mental shift from procedural languages like Python, but it is one of the most important skills in professional software development." },
      { type: "paragraph", text: "Once a student understands object-oriented programming in Java, they can transfer that thinking to C++, C#, Python classes, and most modern languages. It is a foundation that multiplies every other skill." },
      { type: "heading", text: "Who is Java For?" },
      { type: "list", items: [
        "Students preparing for school computer science boards and competitive exams",
        "Teenagers aiming for engineering or computer science at university",
        "Students who have learned Python and want to go deeper into programming theory",
        "Children who enjoy logic puzzles and structured problem-solving",
        "Anyone wanting to understand how professional enterprise software is built",
      ]},
      { type: "heading", text: "Core Concepts We Cover" },
      { type: "subheading", text: "Object-Oriented Programming" },
      { type: "paragraph", text: "Classes, objects, inheritance, polymorphism, and encapsulation — the pillars of OOP. Students learn not just how to use these concepts, but why they exist and what problems they solve." },
      { type: "subheading", text: "Data Structures and Algorithms" },
      { type: "paragraph", text: "Arrays, ArrayLists, sorting algorithms, and basic search algorithms. These are the building blocks of efficient programming and are tested in virtually every competitive coding challenge." },
      { type: "subheading", text: "Problem Solving" },
      { type: "paragraph", text: "Java lends itself beautifully to structured problem solving. Students learn to approach unfamiliar problems systematically — a skill with value far beyond programming." },
      { type: "callout", text: "Java is the language used in most Indian school computer science syllabuses and in many international competitive programming competitions. A strong Java foundation is a genuine academic advantage." },
      { type: "heading", text: "What Students Build in Java" },
      { type: "paragraph", text: "Despite being a more structured language than Python or Scratch, Java still produces exciting projects." },
      { type: "list", items: [
        "Console-based games — number games, hangman, tic-tac-toe",
        "Student grade management systems — real data structure practice",
        "Simple banking applications — OOP in action",
        "Sorting visualisers — understanding algorithms hands-on",
        "Mini search engines — applying data structure theory",
      ]},
      { type: "heading", text: "Java and Academic Success" },
      { type: "paragraph", text: "Students who learn Java with genuine understanding — not just memorising syntax — consistently perform better in school computer science classes. The rigour of Java teaches habits: writing clean code, thinking before typing, and testing thoroughly. These habits improve performance across all technical subjects." },
      { type: "paragraph", text: "At Coding Buds, we teach Java with the same project-based, personalised approach as all our courses. Students never just watch lectures — they write, run, debug, and build from the very first session." },
    ],
  },
  {
    slug: "benefits-of-learning-to-code-early",
    title: "The Benefits of Learning to Code at an Early Age",
    category: "Education",
    date: "2025-05-14",
    readTime: "5 min read",
    image: "/assets/images/kids-coding-1.webp",
    imageAlt: "Benefits of learning to code early",
    teaser: "A teacher told one parent: 'Your daughter is the most systematic thinker in her class.' She'd been coding for two years. Here's what early coding actually does to a child's brain.",
    excerpt: "Early coding education develops critical thinking, problem-solving abilities, creativity, and logical reasoning. Here is what the research shows — and what parents who have made the decision early have seen in their own children.",
    paragraphs: [
      "Research shows that children who learn coding early often perform better in math, science, and language arts.",
      "Coding education can give your child a strong competitive advantage while keeping learning playful and engaging.",
    ],
    body: [
      { type: "paragraph", text: "The question is no longer whether children should learn to code. Researchers, educators, and technology leaders increasingly agree that coding is a fundamental literacy for the 21st century — as important as reading and mathematics. The real question is: when is the right time to start?" },
      { type: "heading", text: "What Happens in a Child's Brain When They Learn to Code" },
      { type: "paragraph", text: "Coding is not just a technical skill. It is a way of thinking. When children learn to code, they practice breaking large problems into smaller steps (decomposition), identifying patterns, creating generalisable rules (abstraction), and following logical sequences." },
      { type: "paragraph", text: "These are the same cognitive processes used in mathematics, science, reading comprehension, and even creative writing. Children who develop them early have a genuine advantage across every academic subject." },
      { type: "heading", text: "What Research Shows" },
      { type: "list", items: [
        "A study published in the Journal of Educational Psychology found that early coding education improves mathematical performance in primary school children",
        "MIT research shows Scratch learners demonstrate stronger sequential reasoning than non-coders of the same age",
        "Children who code show higher scores on tests measuring creativity and flexible thinking",
        "Early coders show greater persistence when faced with difficult tasks — they are used to debugging",
        "Coding education correlates with improved reading comprehension, as both require following complex logical sequences",
      ]},
      { type: "heading", text: "The Skills That Transfer Into Real Life" },
      { type: "subheading", text: "Resilience and Persistence" },
      { type: "paragraph", text: "Every programmer encounters bugs — moments where something does not work. Learning to respond to failure with curiosity rather than frustration is one of the most valuable things coding teaches. Parents regularly tell us this mindset shift is visible in how their children approach homework, sports setbacks, and social challenges." },
      { type: "subheading", text: "Creativity and Self-Expression" },
      { type: "paragraph", text: "Coding is fundamentally creative. Children who code do not just consume technology — they create with it. Games, animations, websites, and apps are all forms of self-expression. Many children find coding unlocks a creative outlet they did not know they had." },
      { type: "subheading", text: "Logical Communication" },
      { type: "paragraph", text: "Programming requires extreme precision in communication — the computer does exactly what you tell it, nothing more. Children who code develop the habit of thinking carefully before acting and expressing ideas with clarity. Teachers frequently notice this improvement in written work." },
      { type: "callout", text: "A parent told us: 'We started our daughter in Scratch at age 7 just to keep her busy. Two years later, her school teacher told us she is now the most systematic thinker in her class. She approaches every problem by asking: what are the steps? That is pure coding thinking.'" },
      { type: "heading", text: "The Competitive Advantage" },
      { type: "paragraph", text: "Beyond academic skills, early coding education gives children a concrete advantage as they get older. University admissions committees, scholarship panels, and employers all value demonstrated technical ability. A child who has been coding for 5 years by the time they apply to university has something most applicants simply do not have." },
      { type: "paragraph", text: "But this advantage is most powerful when it begins early, when the learning is playful, and when the child genuinely enjoys it. That is exactly what we design every Coding Buds course to deliver." },
      { type: "heading", text: "The Right Time to Start" },
      { type: "paragraph", text: "Most children are ready for structured coding education from age 6. The earlier they begin, the more natural the thinking becomes — just like learning a language. A child who starts coding at 6 will find programming intuitive in a way that someone starting at 16 has to consciously work towards." },
      { type: "paragraph", text: "Book a free trial class and let us show you what your child can create in the very first session. You might be surprised." },
    ],
  },
  {
    slug: "choosing-the-right-coding-class",
    title: "How to Choose the Right Coding Class for Your Child",
    category: "Tips",
    date: "2025-04-02",
    readTime: "6 min read",
    image: "/assets/images/kids-coding-2.webp",
    imageAlt: "Choosing the right coding class",
    teaser: "Not all coding classes are equal — and the wrong one can put your child off coding for good. Here are 6 questions every parent should ask before signing up.",
    excerpt: "With so many coding classes available for children, choosing the right one can feel overwhelming. Here is a practical guide to help parents make the right decision — and the questions you should always ask before enrolling.",
    paragraphs: [
      "Consider age-appropriateness, learning style, class size, instructor qualifications, and curriculum depth.",
      "A strong fit usually combines clear structure, hands-on projects, and a pace that matches your child's confidence level.",
    ],
    body: [
      { type: "paragraph", text: "A quick search for 'coding classes for kids' returns hundreds of options. Apps, YouTube channels, online platforms, local tutors, and structured courses all compete for your attention. How do you choose? And how do you avoid wasting money on something your child disengages from after three sessions?" },
      { type: "paragraph", text: "Here is what actually matters — based on what we have observed in 600+ students over a decade of teaching children to code." },
      { type: "heading", text: "1. Age-Appropriate Curriculum" },
      { type: "paragraph", text: "The single most common mistake parents make is choosing a course that is pitched at the wrong level. A 7-year-old attempting JavaScript will struggle and lose confidence. A 14-year-old doing basic Scratch will be bored within two sessions." },
      { type: "paragraph", text: "Look for a course that has been specifically designed for your child's age and prior experience. The best providers will assess your child before recommending a starting point — not just assign them to a cohort based on age alone." },
      { type: "heading", text: "2. Project-Based Learning" },
      { type: "paragraph", text: "Children do not learn coding by watching someone else code or by filling in exercises. They learn by building things they care about. Ask any provider: what will my child create during this course?" },
      { type: "paragraph", text: "If the answer is vague, that is a warning sign. A strong coding course should be able to tell you, session by session, what projects the child will complete and what concepts those projects teach." },
      { type: "list", items: [
        "Does the course produce tangible projects the child can keep and show?",
        "Are the projects genuinely chosen by the child, or are they all identical?",
        "Does the curriculum build from project to project, increasing complexity?",
        "Can the child take what they learn and apply it independently?",
      ]},
      { type: "heading", text: "3. Class Size and Personalisation" },
      { type: "paragraph", text: "There is a significant difference between a 1:1 class, a small group of 3-5, and a class of 20. Larger classes are cheaper, but children receive far less individual feedback and are more likely to fall behind without anyone noticing." },
      { type: "paragraph", text: "For children who are just starting out, or who have specific learning needs, 1:1 instruction is almost always worth the investment. The pace, content, and projects can all be tailored to exactly what your child needs." },
      { type: "callout", text: "At Coding Buds, we offer both 1:1 and small group sessions. We find that children who start 1:1 build confidence faster, while group learners benefit from the social motivation of coding alongside peers. Both work — it depends on your child's personality." },
      { type: "heading", text: "4. Instructor Quality" },
      { type: "paragraph", text: "This matters more than almost any other factor. An experienced teacher who understands how children think, where they typically get stuck, and how to explain a concept five different ways if needed is worth far more than a technically brilliant programmer who has never taught a child." },
      { type: "paragraph", text: "Ask about the instructor's background. Do they have teaching experience specifically with children? Do they have a computer science or engineering background? At Coding Buds, our founder Anjali Singla brings both — a computer science engineering degree and 5+ years of teaching children coding worldwide." },
      { type: "heading", text: "5. Flexibility and Scheduling" },
      { type: "paragraph", text: "Children's schedules are complicated. Homework, sports, music lessons, and family commitments all compete for time. A good coding provider will offer flexible scheduling, make-up classes for missed sessions, and not lock you into rigid contracts." },
      { type: "heading", text: "6. The Free Trial" },
      { type: "paragraph", text: "Any provider confident in their teaching should offer a free trial class. This gives your child the chance to experience the teaching style, the platform, and the curriculum before you commit to anything." },
      { type: "paragraph", text: "Pay attention to how your child feels after the trial, not just during it. Are they excited to come back? Did they talk about what they built? That enthusiasm is the most reliable signal that the fit is right." },
      { type: "callout", text: "We offer a completely free trial class with no commitment required. Book one today and let your child experience our teaching before you decide anything." },
    ],
  },
];