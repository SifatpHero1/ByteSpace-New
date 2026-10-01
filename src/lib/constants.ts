export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "#courses" },
  { label: "Creators", href: "#creators" },
];

export const CHIP_ROWS = [
  ["Featured", "Music", "Drawing & Painting", "Marketing", "Animation", "Social Media", "UI/UX Design", "Creative Marketing"],
  ["Digital Illustration", "Film & Video", "Crafts", "Freelance & Entrepreneurship", "Graphic Design", "Photography"],
  ["Productivity", "Web Development", "Data Science", "Cooking"],
];

export const COURSES = [
  "Learn Figma from Basic", "Build Digital Asset", "the Power of Big Data",
  "Balancing Productivity and Self-Care", "Mastering Money Management", "From Idea to Startup Success",
].map((title, i) => ({
  title, image: `/images/course-${i + 1}.jpg`, author: "purepearl studio", level: "Beginner",
  price: "$25", lessons: "17 Lessons", duration: "2 hours 16 mins", comments: "59 Comments", rating: "4.5",
}));

export const STATS = [
  { value: "12K", label: "Students" },
  { value: "70+", label: "Courses" },
  { value: "16", label: "Creators" },
];

export const CREATOR_FEATURES = ["Share Your Expertise", "Monetize Your Passion", "Flexibility and Autonomy", "Build a Community"];

export const TESTIMONIALS = [
  { name: "Sarah M.", role: "Enthusiastic Learner", quote: "\"ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning.\"" },
  { name: "James L.", role: "Lifelong Learner", quote: "\"I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development.\"" },
  { name: "Alex B.", role: "Inspired Creator", quote: "\"As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally.\"" },
];

export const FOOTER_COLUMNS = [
  ["Featured Courses", "Featured Categories", "Business", "IT", "Design"],
  ["Development", "Marketing", "Photography", "Finance", "Sport"],
  ["Become a Creator", "Affiliate Program", "Contact", "Help", "About"],
];
