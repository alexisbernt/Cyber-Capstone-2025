import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Card } from "react-bootstrap";
import { CalendarDays, User, ArrowRight } from "lucide-react";

const posts = [
  {
    title: "WHY YOU SHOULD LEARN CYBERSECURITY",
    excerpt: "Explore the emerging trends shaping the technology landscape",
    author: "Alexis Bernthal",
    date: "Feb 27, 2025",
    category: "Cybersecurity 101",
    link: "/blog/why-cybersecurity",
  },
  {
    title: "LONG LIVE PASSWORDS",
    excerpt: "Learn how to optimize your team's workflow with our platform",
    author: "Michael Chen",
    date: "Jan 28, 2025",
    category: "Best Practices",
    link: "/blog/team-productivity",
  },
  {
    title: "CYBERSECURITY ATTACKS: GONE PHISHING",
    excerpt: "Learn how to protect yourself from threats",
    author: "Alexis Bernthal",
    date: "Mar 21, 2025",
    category: "Best Practices",
    link: "/blog/phishing",
  },
  {
    title: "LinkedIn & Venmo Security Essentials",
    excerpt: "Key security features every enterprise solution needs",
    author: "Alex Rodriguez",
    date: "Jan 25, 2025",
    category: "Security",
    link: "/blog/security-essentials",
  },
  {
    title: "LinkedIn & Enterprise Security Essentials",
    excerpt: "Key security features every enterprise solution needs",
    author: "Alex Rodriguez",
    date: "Jan 25, 2025",
    category: "Security",
    link: "/blog/security-essentials",
  },
  {
    title: "Scaling Your SaaS Business",
    excerpt: "Strategic insights for growing your SaaS company",
    author: "Emma Williams",
    date: "Jan 22, 2025",
    category: "Growth",
    link: "/blog/scaling-saas",
  },
];

export default function Blog() {
  return (
    <div className="blog-page">

      <div className="blog-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="blog-header"
        >
          <h1 className="blog-title">Latest Updates</h1>
          <p className="blog-subtitle">Insights, news, and expert perspectives</p>
        </motion.div>

        <div className="blog-grid">
          {posts.map((post, index) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="blog-card">
                <div className="blog-category">{post.category}</div>

                <h3 className="blog-post-title">{post.title}</h3>
                <p className="blog-excerpt">{post.excerpt}</p>

                <div className="blog-meta">
                  <div className="blog-author-info">
                    <span><User size={16} /> {post.author}</span>
                    <span><CalendarDays size={16} /> {post.date}</span>
                  </div>

                  <Link to={post.link} className="blog-link">
                    <ArrowRight size={20} />
                  </Link>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
