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

export type BlogPost = {
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  imageAlt: string;
  excerpt: string;
  paragraphs: string[];
};

export const siteConfig = {
  name: "Coding Buds",
  shortName: "Coding Buds",
  description:
    "Fun and personalized coding classes for kids and teens aged 6-16.",
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
    description:
      "Build games and animations with visual programming blocks and drag and drop components.",
    badge: "Beginner Level",
    accent: "from-[#46c47d] to-[#1f8b57]",
    image: "/assets/images/category-1.svg",
    imageAlt: "Scratch programming icon",
  },
  {
    title: "Python Programming for Teens (Ages 8-16)",
    description:
      "Code real apps, mini-games, and AI basics with a professional programming language.",
    badge: "Intermediate",
    accent: "from-[#ff6a7b] to-[#d93464]",
    image: "/assets/images/category-2.svg",
    imageAlt: "Python programming icon",
  },
  {
    title: "Web Development Course",
    description:
      "Learn HTML, CSS, and JavaScript to build personal websites, portfolios, and interactive web apps.",
    badge: "All Ages",
    accent: "from-[#4c7cff] to-[#1f4ad7]",
    image: "/assets/images/category-3.svg",
    imageAlt: "Web development icon",
  },
  {
    title: "Java Programming Course",
    description:
      "Object-oriented programming, logic building, and computer science fundamentals for students.",
    badge: "Intermediate",
    accent: "from-[#f5c64e] to-[#f28b1d]",
    image: "/assets/images/category-4.svg",
    imageAlt: "Java programming icon",
  },
];

export const courses: CourseItem[] = [
  {
    title: "Scratch Programming & Game Development for Kids",
    description:
      "Build games, animations, and interactive stories while learning visual coding foundations.",
    badge: "Beginner",
    sessions: "48 Sessions Total",
    rating: "4.9 Rating",
    image: "/assets/images/scratch-game.webp",
    imageAlt: "Scratch programming course for kids",
    highlights: ["AI basics", "IoT projects", "STEM activities"],
  },
  {
    title: "Python Programming for Teens - Apps, Games & AI Basics",
    description:
      "Move from block coding to text-based programming with apps, mini-games, and practical AI concepts.",
    badge: "Intermediate",
    sessions: "48 Sessions Total",
    rating: "5.0 Rating",
    image: "/assets/images/python-class.webp",
    imageAlt: "Python programming course for teens",
    highlights: ["Data science", "Algorithms", "Mathematical computing"],
  },
  {
    title: "Web Development Course - HTML, CSS, JavaScript for Kids",
    description:
      "Create responsive websites and digital portfolio projects with a clean modern frontend workflow.",
    badge: "Intermediate",
    sessions: "48 Sessions Total",
    rating: "4.8 Rating",
    image: "/assets/images/web-development.webp",
    imageAlt: "Web development course for kids",
    highlights: ["Responsive design", "API integration", "Portfolio projects"],
  },
  {
    title: "Java Coding Adventures for Kids & Teens",
    description:
      "Strengthen logic building and object-oriented thinking with a language used widely in computer science.",
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
    quote:
      "My child loves Coding Buds. The classes are engaging, well-structured, and perfectly paced for young learners.",
    avatar: "M",
  },
  {
    name: "Mr. Baani",
    role: "Parent of 8-year-old",
    quote:
      "Best classes for children in Panchkula. Our child is completely different with good knowledge of coding.",
    avatar: "S",
  },
  {
    name: "Mrs. Mangla",
    role: "Parent of 12-year-old",
    quote:
      "The 1:1 sessions are just great and I have come a long way in this field. Joining Coding Buds was the best decision.",
    avatar: "I",
  },
  {
    name: "Mrs. Sharma",
    role: "Parent of 9-year-old",
    quote:
      "My daughter looks forward to every class. The teacher explains concepts patiently, and the projects keep her excited to learn more.",
    avatar: "S",
  },
  {
    name: "Mr. Verma",
    role: "Parent of 11-year-old",
    quote:
      "We noticed a huge boost in logical thinking and confidence. The structured curriculum and personal attention make a real difference.",
    avatar: "V",
  },
  {
    name: "Mrs. Iyer",
    role: "Parent of 13-year-old",
    quote:
      "Coding Buds made programming easy to understand for my son. He now builds mini projects on his own and enjoys problem solving.",
    avatar: "I",
  },
];

export const faqs: FaqItem[] = [
  {
    question: "What age groups do you teach?",
    answer:
      "We teach kids and teens aged 6-16. We have age-appropriate courses: Scratch for kids 6-10, Python for teens 11-16, and Web Development for all ages.",
  },
  {
    question: "Do you offer both 1:1 and group classes?",
    answer:
      "Yes. We offer both 1:1 personalized classes and small group sessions based on your preference. Both options are designed for quality learning.",
  },
  {
    question: "What equipment does my child need?",
    answer:
      "Your child needs a computer or laptop with an internet connection. We guide you through all free software setup steps.",
  },
  {
    question: "How long is each class and course?",
    answer:
      "Each class is 60 minutes long. Course duration varies: Scratch, Python, Web Development, and Java all follow structured session plans with flexible scheduling.",
  },
  {
    question: "What will my child learn and create?",
    answer:
      "Students create real projects: games in Scratch, apps and mini-games in Python, and websites with HTML, CSS, and JavaScript.",
  },
  {
    question: "Can I try a free trial class?",
    answer:
      "Absolutely. We offer a free trial class so you can experience our teaching methodology before committing to the full course.",
  },
];

export const blogPosts: BlogPost[] = [
  {
    slug: "scratch-programming-for-kids",
    title: "Getting Started with Scratch Programming for Kids",
    category: "Scratch Programming",
    date: "2025-01-15",
    readTime: "5 min read",
    image: "/assets/images/scratch-game.webp",
    imageAlt: "Getting started with Scratch programming",
    excerpt:
      "Scratch is the perfect introduction to coding for children. This visual programming language uses colorful blocks instead of complex text.",
    paragraphs: [
      "Scratch helps children develop logical thinking, problem-solving skills, and creativity while building games, animations, and interactive stories.",
      "It is especially useful for ages 6-12 because the interface keeps the focus on ideas rather than syntax.",
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
    excerpt:
      "Python's simple syntax and powerful capabilities make it an ideal first text-based programming language for kids and teens.",
    paragraphs: [
      "Discover why Python is used by companies like Google, Netflix, and Instagram, and how your child can start building applications, games, and AI projects with it.",
      "Python is a strong bridge from visual coding into real-world software development.",
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
    excerpt:
      "Web development opens doors to endless possibilities. Learn how teenagers can create their own websites using HTML, CSS, and JavaScript.",
    paragraphs: [
      "From personal portfolios to interactive games, web development lets students bring ideas to life on the web.",
      "It is a practical path for kids who want to showcase creativity and build transferable digital skills.",
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
    excerpt:
      "Java is one of the most popular programming languages in the world and a strong choice for students who want to pursue computer science.",
    paragraphs: [
      "Explore Java's object-oriented principles, platform independence, and real-world applications.",
      "The course builds a structured foundation that prepares students for advanced programming concepts.",
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
    excerpt:
      "Early coding education develops critical thinking, problem-solving abilities, creativity, and logical reasoning.",
    paragraphs: [
      "Research shows that children who learn coding early often perform better in math, science, and language arts.",
      "Coding education can give your child a strong competitive advantage while keeping learning playful and engaging.",
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
    excerpt:
      "With so many coding classes available, choosing the right one for your child can be overwhelming.",
    paragraphs: [
      "Consider age-appropriateness, learning style, class size, instructor qualifications, and curriculum depth.",
      "A strong fit usually combines clear structure, hands-on projects, and a pace that matches your child's confidence level.",
    ],
  },
];