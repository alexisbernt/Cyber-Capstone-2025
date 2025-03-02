// import Link from "next/link"; // Uncomment if using Next.js
import { Link } from "react-router-dom"; // if using React Router

import { motion } from "framer-motion";
import { Card } from "react-bootstrap";
import { CalendarDays, User, ArrowRight } from "lucide-react";
import GridPattern from "../components/patterns";
import Header from "../components/Header";
// import BlogPage1 from "./parts/BlogPage1";

const posts = [
  {
    title: "WHY YOU SHOULD LEARN CYBERSECURITY",
    excerpt: "Explore the emerging trends shaping the technology landscape",
    author: "Alexis Bernthal",
    date: "Feb 27, 2025",
    category: "Cybersecurity 101",
    link: "/blog/why-cybersecurity", // BlogPage1 link 
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
    excerpt: "Learn how to optimize your team's workflow with our platform",
    author: "Michael Chen",
    date: "Jan 28, 2025",
    category: "Best Practices",
    link: "/blog/team-productivity",
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
    <div className="bg-black min-h-screen">
      <Header />
      <div className="relative pt-20">
        <GridPattern />

        <div className="container mx-auto px-6 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h1 className="text-4xl font-bold text-white mb-6">Latest Updates</h1>
            <p className="text-gray-400 text-lg">
              Insights, news, and expert perspectives
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {posts.map((post, index) => (
              <motion.div
                key={post.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-6 bg-gray-900/50 backdrop-blur-lg border border-gray-800 hover:bg-gray-900/70 transition-all duration-300 cursor-pointer group">
                  <div className="inline-flex items-center px-2 py-1 rounded-full bg-gray-800 text-sm text-gray-400 mb-4">
                    {post.category}
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-gray-200 transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-gray-400 mb-4">{post.excerpt}</p>

                  <div className="flex items-center justify-between text-sm text-gray-400">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        {post.author}
                      </div>
                      <div className="flex items-center">
                        <CalendarDays className="w-4 h-4 mr-1" />
                        {post.date}
                      </div>
                    </div>

                    <Link to={post.link} className="group">
                    <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform cursor-pointer" />
                  </Link>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
