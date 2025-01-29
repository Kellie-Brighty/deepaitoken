"use client";

import type React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Twitter,
  MessageSquare,
  ClipboardCopy,
  Zap,
  Shield,
  Sparkles,
  Rocket,
  Users,
  Globe,
  Calendar,
  Book,
  TrendingUp,
  Database,
  Layers,
  Brain,
  Building,
  Scale,
  ChevronDown,
  ChevronUp,
  Link,
  Menu,
  X,
} from "lucide-react";
import ChatGPTWidget from "./ChatGPTWidget";
// import Logo from "../public/logo2.jpg";

const AITokenWebsite = () => {
  const [copiedAddress, setCopiedAddress] = useState(false);
  const [expandedPhases, setExpandedPhases] = useState<{
    [key: number]: boolean;
  }>({});
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [tokenStats] = useState({
    price: 0.075,
    marketCap: 25000000,
    totalSupply: 100000000,
    circulatingSupply: 50000000,
    holders: 12500,
  });

  const handleCopy = () => {
    navigator.clipboard.writeText("000000000000000000");
    setCopiedAddress(true);
    setTimeout(() => setCopiedAddress(false), 2000);
  };
  const togglePhaseExpansion = (phaseIndex: number) => {
    setExpandedPhases((prev) => ({
      ...prev,
      [phaseIndex]: !prev[phaseIndex],
    }));
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  //  roadmap data structure
  const roadmap = [
    {
      phase: "Phase 1: Foundation & Conceptualization",
      period: "Q1 2025",
      icon: Calendar,
      milestones: [
        {
          title: "Research & Feasibility Analysis",
          details: [
            "Conduct market research on AI token demand, utility, and competitive landscape",
            "Identify core utilities of the token (governance, access to AI services, staking rewards)",
          ],
        },
        {
          title: "Tokenomics Design",
          details: [
            "Develop a sustainable tokenomics model focusing on incentivizing participation and usage",
            "Define the initial supply, distribution strategy, and staking rewards",
          ],
        },
        {
          title: "Team Formation",
          details: [
            "Onboard experts in blockchain, AI, and marketing",
            "Establish partnerships with AI and Web3 projects",
          ],
        },
        {
          title: "Smart Contract Development",
          details: [
            "Begin coding the ERC-20 token smart contract with features like staking and governance",
            "Integrate security measures to prevent vulnerabilities",
          ],
        },
      ],
    },
    {
      phase: "Phase 2: Development & Initial Launch",
      period: "Q2 2025",
      icon: Rocket,
      milestones: [
        {
          title: "Token Launch",
          details: [
            "Deploy the token on XRP blockchain (or layer-2 scaling solutions if needed)",
            "Conduct an audit of the smart contracts with a trusted third-party firm",
          ],
        },
        {
          title: "Initial Decentralized Exchange (DEX) Listing",
          details: [
            "List the token on major DEXs like Uniswap",
            "Establish liquidity pools to support trading",
          ],
        },
        {
          title: "Build AI Utility Platform (MVP)",
          details: [
            "Launch a Minimum Viable Product (MVP) of the AI platform",
            "Features: Access to basic AI tools/services using the token, staking functionality",
          ],
        },
        {
          title: "Community Building",
          details: [
            "Launch community initiatives: AMAs, community grants, and social media campaigns",
            "Reward early adopters with token incentives (e.g, airdrops)",
          ],
        },
      ],
    },
    {
      phase: "Phase 3: Ecosystem Expansion",
      period: "Q3-Q4 2025",
      icon: Layers,
      milestones: [
        {
          title: "Partnerships",
          details: [
            "Collaborate with AI-focused projects, startups, and research labs",
            "Work with blockchain platforms for interoperability solutions",
          ],
        },
        {
          title: "Governance Implementation",
          details: [
            "Deploy a DAO structure where token holders can propose and vote on key decisions",
            "Allow community governance over staking parameters, platform upgrades, and treasury usage",
          ],
        },
        {
          title: "Platform Expansion",
          details: [
            "Introduce advanced AI tools like predictive analytics, generative AI, and conversational AI",
            "Build APIs for third-party developers to integrate the token into their applications",
          ],
        },
      ],
    },
    {
      phase: "Phase 4: Mass Adoption & Scalability",
      period: "2026",
      icon: Brain,
      milestones: [
        {
          title: "AI Marketplace Development",
          details: [
            "Launch a decentralized AI marketplace for buying/selling AI models and datasets",
            "Enable creators to monetize their AI innovations",
          ],
        },
        {
          title: "Layer 2 or Multichain Integration",
          details: [
            "Migrate or bridge to a layer-2 solution for faster transactions and reduced gas fees",
            "Expand compatibility with blockchains like BNB Chain, Polygon, or Solana",
          ],
        },
        {
          title: "Enhanced Token Utility",
          details: [
            "Enable token staking for access to premium AI features or earning additional rewards",
            "Introduce gamified staking mechanisms to drive engagement",
          ],
        },
        {
          title: "AI-Powered Tools for Web3",
          details: [
            "Offer AI-driven analytics for DeFi, NFT projects, and blockchain data",
            "Provide AI agents to assist Web3 developers and community managers",
          ],
        },
      ],
    },
    {
      phase: "Phase 5: Sustainability & Global Impact",
      period: "2027",
      icon: Building,
      milestones: [
        {
          title: "Enterprise Integration",
          details: [
            "Partner with traditional enterprises to provide token-based AI services",
            "Target industries like healthcare, finance, and logistics",
          ],
        },
        {
          title: "Regulatory Compliance",
          details: [
            "Work with legal experts to ensure compliance with global crypto and AI regulations",
          ],
        },
        {
          title: "Education & Awareness",
          details: [
            "Offer free or token-rewarded educational courses on AI, blockchain, and decentralized systems",
            "Build a global community of developers, researchers, and enthusiasts",
          ],
        },
        {
          title: "AI-Driven Decentralized Autonomous Organization (AI-DAO)",
          details: [
            "Incorporate AI into the governance model for more efficient decision-making",
            "AI tools to analyze DAO proposals and suggest optimizations",
          ],
        },
      ],
    },
  ];

  const features = [
    {
      icon: Zap,
      title: "AI-Powered Insights",
      description:
        "Next-level blockchain intelligence powered by cutting-edge AI algorithms",
      color: "text-purple-600",
    },
    {
      icon: Shield,
      title: "Secure & Transparent",
      description:
        "Military-grade security meets blockchain transparency Trust guaranteed",
      color: "text-green-600",
    },
    {
      icon: Sparkles,
      title: "Decentralized AI Modules",
      description:
        "Build, deploy, and monetize AI models directly on the blockchain",
      color: "text-pink-600",
    },
    {
      icon: Link,
      title: "Seamless Integration",
      description:
        "Designed for effortless interoperability with XRP protocols",
      color: "text-blue-600",
    },
    {
      icon: Users,
      title: "Community Governance",
      description:
        "Your voice matters Shape the future through decentralized voting",
      color: "text-orange-600",
    },
  ];

  const teamMembers = [
    {
      name: "Funded by High Flyers",
      role: "CEO & Founder",
      image: "/high.jpg",
    },
    {
      name: "Supported by MyShellAI",
      role: "CTO",
      image: "/share.jpg",
    },
    {
      name: "Endorsed by TechNode",
      role: "Head of AI",
      image: "/technode.jpg",
    },
  ];

  const faqs = [
    {
      question: "What is AI Token?",
      answer:
        "AI Token is an XRP-based cryptocurrency designed to integrate AI capabilities into blockchain technology.",
    },
    {
      question: "How can I purchase AI Token?",
      answer:
        "AI Token can be purchased through major cryptocurrency exchanges such as Uniswap Stay tuned for official announcements",
    },
    {
      question: "What are the use cases?",
      answer:
        "Use cases include AI-driven analytics, decentralized AI modules, and community governance",
    },
    {
      question: "Is AI Token secure?",
      answer:
        "Yes, AI Token is built with security and transparency in mind, ensuring trustless and secure interactions",
    },
  ];

  const RoadmapSection = () => (
    <section id="roadmap" className="py-16">
      <h2 className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
        Project Roadmap
      </h2>
      <div className="grid grid-cols-1 gap-6">
        {roadmap.map((phase, phaseIndex) => (
          <motion.div
            key={phaseIndex}
            initial="hidden"
            whileInView="visible"
            variants={sectionVariants}
            className="bg-gray-800 border border-gray-700 rounded-lg p-6"
          >
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() => togglePhaseExpansion(phaseIndex)}
            >
              <div className="flex items-center">
                <phase.icon className="mr-4 w-10 h-10 text-purple-400" />
                <div>
                  <h3 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                    {phase.phase}
                  </h3>
                  <p className="text-gray-400">{phase.period}</p>
                </div>
              </div>
              {expandedPhases[phaseIndex] ? (
                <ChevronUp className="w-6 h-6 text-purple-400" />
              ) : (
                <ChevronDown className="w-6 h-6 text-purple-400" />
              )}
            </div>

            {expandedPhases[phaseIndex] && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-4 space-y-6"
              >
                {phase.milestones.map((milestone, idx) => (
                  <div key={idx} className="pl-14">
                    <h4 className="text-lg font-semibold text-purple-400 mb-2">
                      {milestone.title}
                    </h4>
                    <ul className="space-y-2">
                      {milestone.details.map((detail, detailIdx) => (
                        <li
                          key={detailIdx}
                          className="flex items-start space-x-2 text-gray-300"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 flex-shrink-0" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );

  const handleImageError = (
    e: React.SyntheticEvent<HTMLImageElement, Event>
  ) => {
    e.currentTarget.src = "/placeholder.svg";
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-transparent to-blue-400 text-white">
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="sticky top-0 z-50 bg-gray-800/70 backdrop-blur-md py-4 shadow-lg"
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <motion.div
            whileTap={{ scale: 0.95 }}
            onTap={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center space-x-2 cursor-pointer"
          >
            <Image src="/deep.jpg" alt="AI Logo" width={30} height={30} />
            <motion.h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Deepseek AI
            </motion.h1>
          </motion.div>
          <nav className="hidden md:flex items-center space-x-6">
            {["About", "Features", "Partners", "Roadmap"].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                whileHover={{ scale: 1.1 }}
                className="text-gray-300 hover:text-white transition-colors"
              >
                {item}
              </motion.a>
            ))}
            <div className="flex space-x-4">
              <motion.p
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="text-blue-400 hover:text-white"
              >
                <a
                  href="http://x.com/deepseekAIXRP"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    fill="currentColor"
                    className="bi bi-twitter-x"
                    viewBox="0 0 16 16"
                    // color="black"
                  >
                    <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                  </svg>
                </a>
              </motion.p>
              <motion.p
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="text-blue-400 hover:text-white"
              >
                <a
                  href="http://t.me/deepseekIAIXRP"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    fill="currentColor"
                    className="bi bi-telegram"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.287 5.906q-1.168.486-4.666 2.01-.567.225-.595.442c-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294q.39.01.868-.32 3.269-2.206 3.374-2.23c.05-.012.12-.026.166.016s.042.12.037.141c-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8 8 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629q.14.092.27.187c.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.4 1.4 0 0 0-.013-.315.34.34 0 0 0-.114-.217.53.53 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09" />
                  </svg>
                </a>
              </motion.p>
            </div>
          </nav>
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white focus:outline-none"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-gray-800 py-4"
          >
            {["About", "Features", "Partners", "Roadmap"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block text-center py-2 text-gray-300 hover:text-white transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <div className="flex justify-center space-x-4 mt-4">
              <a
                href="https://twitter.com"
                className="text-blue-400 hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  className="bi bi-twitter-x"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                </svg>
              </a>
              <a
                href="https://telegram.org"
                className="text-blue-400 hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  className="bi bi-telegram"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.287 5.906q-1.168.486-4.666 2.01-.567.225-.595.442c-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294q.39.01.868-.32 3.269-2.206 3.374-2.23c.05-.012.12-.026.166.016s.042.12.037.141c-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8 8 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629q.14.092.27.187c.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.4 1.4 0 0 0-.013-.315.34.34 0 0 0-.114-.217.53.53 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09" />
                </svg>
              </a>
            </div>
          </motion.div>
        )}
      </motion.header>

      <main className="container mx-auto px-4">
        {/* About Section */}
        <motion.section
          id="about"
          initial="hidden"
          whileInView="visible"
          variants={sectionVariants}
          className="text-center py-20"
        >
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            Blockchain Meets AI Revolution
          </h2>
          <p className="text-xl max-w-2xl mx-auto mb-8 text-gray-300">
            Deepseek AI Token is an innovative XRP-based token that integrates
            advanced AI capabilities into the blockchain ecosystem.
          </p>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gray-800 border border-gray-700 rounded-lg p-4 max-w-md mx-auto flex items-center justify-between"
          >
            <span className="truncate">
              Contract: 00000000000000000000
            </span>
            <motion.button
              onClick={handleCopy}
              whileTap={{ scale: 0.95 }}
              className="ml-2 text-purple-400 hover:text-purple-600"
            >
              <ClipboardCopy className="w-5 h-5" />
            </motion.button>
          </motion.div>
          {copiedAddress && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-green-500 mt-2"
            >
              Address Copied! 🚀
            </motion.div>
          )}

          <p className="text-gray-300 text-lg text-center max-w-3xl mx-auto mt-8">
            Our AI-powered token aims to revolutionize the crypto landscape by
            integrating cutting-edge AI tools with decentralized finance. Stake,
            govern, and use tokens to access premium AI services and tools.
          </p>
          <ChatGPTWidget />
        </motion.section>

        {/* Features Section */}
        <section
          id="features"
          className="py-16 bg-blue-300/10 backdrop-blur-sm rounded-lg"
        >
          <h2 className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Why AI Token?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{
                  scale: 1.05,
                  rotate: Math.random() > 0.5 ? 2 : -2,
                }}
                className="bg-gray-800 border border-gray-700 rounded-lg p-6 text-center"
              >
                <feature.icon
                  className={`mx-auto mb-4 w-12 h-12 ${feature.color}`}
                />
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section id="team" className="py-16 bg-blue-400/20 backdrop-blur-sm">
          <h2 className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Partners & Press
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-800 border border-gray-700 rounded-lg p-6 text-center"
              >
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  width={96}
                  height={96}
                  className="rounded-full mx-auto mb-4 object-cover"
                  priority
                  onError={handleImageError}
                />
                <h3 className="text-xl font-bold">{member.name}</h3>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Token Stats Section */}
        <section id="stats" className="py-16 bg-blue-300/20 backdrop-blur-sm">
          <h2 className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Token Statistics
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {[
              { label: "Price", value: `$${tokenStats.price}`, icon: Database },
              {
                label: "Market Cap",
                value: `$${tokenStats.marketCap.toLocaleString()}`,
                icon: TrendingUp,
              },
              {
                label: "Total Supply",
                value: tokenStats.totalSupply.toLocaleString(),
                icon: Book,
              },
              {
                label: "Circulating Supply",
                value: tokenStats.circulatingSupply.toLocaleString(),
                icon: Globe,
              },
              {
                label: "Holders",
                value: tokenStats.holders.toLocaleString(),
                icon: Users,
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-800 border border-gray-700 rounded-lg p-4 text-center"
              >
                <stat.icon className="mx-auto mb-2 w-8 h-8 text-purple-400" />
                <h3 className="text-lg font-bold">{stat.label}</h3>
                <p className="text-gray-300">{stat.value}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <RoadmapSection />

        {/* FAQ Section */}
        <section
          id="faq"
          className="py-16 bg-blue-300/10 backdrop-blur-sm rounded-lg"
        >
          <h2 className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="bg-gray-800 border border-gray-700 rounded-lg p-6"
              >
                <h3 className="text-xl font-bold mb-2 text-purple-400">
                  {faq.question}
                </h3>
                <p className="text-gray-300">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </main>

      <footer className="sticky top-0 z-50 bg-gray-800/70 backdrop-blur-md py-4 shadow-lg text-center">
        <p className="text-gray-400 mb-4">
          &copy; 2025 AI Token Building the Future, Democratically
        </p>
        <div className="flex justify-center space-x-4">
          <motion.p
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
            className="text-blue-400 hover:text-white"
          >
            <a
              href="http://x.com/deepseekAIXRP"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="currentColor"
                className="bi bi-twitter-x"
                viewBox="0 0 16 16"
                // color="black"
              >
                <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
              </svg>
            </a>
          </motion.p>
          <motion.p
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
            className="text-blue-400 hover:text-white"
          >
            <a
              href="http://t.me/deepseekIAIXRP"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="currentColor"
                className="bi bi-telegram"
                viewBox="0 0 16 16"
              >
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.287 5.906q-1.168.486-4.666 2.01-.567.225-.595.442c-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294q.39.01.868-.32 3.269-2.206 3.374-2.23c.05-.012.12-.026.166.016s.042.12.037.141c-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8 8 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629q.14.092.27.187c.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.4 1.4 0 0 0-.013-.315.34.34 0 0 0-.114-.217.53.53 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09" />
              </svg>
            </a>
          </motion.p>
        </div>
      </footer>
    </div>
  );
};

export default AITokenWebsite;
