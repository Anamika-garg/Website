import React from 'react';
import { motion } from 'framer-motion';
import {
  Code2,
  Users,
  GraduationCap,
  Lightbulb,
  Rocket,
  BookOpen,
  Briefcase,
  Heart,
  TrendingUp,
  Compass,
  MessageCircle,
  Share2,
  ArrowRight,
  Cpu,
  GitBranch,
  Layers,
  UserCheck,
  Sparkles,
  Zap,
} from 'lucide-react';
import './EventsCSS.css';

const Web3Community = () => {
  const ParticleBackground = () => {
    const particles = Array.from({ length: 20 });
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-amber-500/20 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: Math.random() * 0.5 + 0.2,
            }}
            animate={{
              y: [null, Math.random() * -100 - 50],
              opacity: [Math.random() * 0.3, Math.random() * 0.6, Math.random() * 0.2],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              left: `${(i % 10) * 10}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>
    );
  };

  // Hero section
  const Hero = () => (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticleBackground />
      <div className="absolute inset-0 bg-gradient-to-b from-amber-900/10 via-black/50 to-black"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-amber-400 to-orange-500">
              Web3 Community
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed">
            A student-led space for learning, building, collaborating, and innovating in Web3
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-lg font-bold text-lg text-black hover:from-yellow-300 hover:to-amber-400 transition-all duration-300 shadow-lg shadow-yellow-500/30"
          >
            Join the Community
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 border-2 border-yellow-400 rounded-lg font-bold text-lg text-yellow-400 hover:bg-yellow-400 hover:text-black transition-all duration-300"
          >
            Explore Opportunities
          </motion.button>
        </motion.div>
      </div>
    </div>
  );

  // Community Overview section
  const Overview = () => {
    const features = [
      { icon: BookOpen, title: 'Learning', desc: 'Structured resources and hands-on workshops' },
      { icon: Users, title: 'Collaboration', desc: 'Work together on exciting projects' },
      { icon: GraduationCap, title: 'Mentorship', desc: 'Learn from experienced contributors' },
      { icon: Rocket, title: 'Project Building', desc: 'Build real-world Web3 applications' },
      { icon: GitBranch, title: 'Open Source', desc: 'Contribute to meaningful initiatives' },
    ];

    return (
      <section className="py-20 relative">
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-amber-500">
                Our Community
              </span>
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              The AssetMerkle Web3 Community is a student-led initiative dedicated to exploring blockchain, decentralized technologies, and the broader Web3 ecosystem.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {features.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group bg-black rounded-2xl p-6 border border-yellow-500/30 shadow-[0_0_15px_rgba(245,166,35,0.2)] hover:shadow-[0_0_25px_rgba(245,166,35,0.4)] hover:border-yellow-400 transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-yellow-500/20 to-amber-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-7 h-7 text-yellow-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-sm text-slate-400">{feature.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    );
  };

  // What Members Gain section
  const MemberBenefits = () => {
    const benefits = [
      { icon: Cpu, title: 'Technical Learning', desc: 'Master blockchain and Web3 development' },
      { icon: Users, title: 'Peer Network', desc: 'Connect with like-minded students' },
      { icon: UserCheck, title: 'Mentorship', desc: 'Guidance from experienced builders' },
      { icon: Briefcase, title: 'Hands-On Experience', desc: 'Work on real projects' },
      { icon: Heart, title: 'Community Support', desc: 'A supportive learning environment' },
      { icon: TrendingUp, title: 'Industry Exposure', desc: 'Stay updated with the latest trends' },
    ];

    return (
      <section className="py-20 relative">
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-amber-500">
                What Members Gain
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, i) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  whileHover={{ scale: 1.03 }}
                  className="group bg-black rounded-2xl p-8 border border-yellow-500/30 shadow-[0_0_15px_rgba(245,166,35,0.2)] hover:shadow-[0_0_25px_rgba(245,166,35,0.4)] hover:border-yellow-400 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-yellow-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                      <p className="text-slate-400">{benefit.desc}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    );
  };

  // Learning Journey section
  const LearningJourney = () => {
    const steps = [
      { icon: Compass, title: 'Explore', desc: 'Discover the world of Web3' },
      { icon: BookOpen, title: 'Learn', desc: 'Build strong foundations' },
      { icon: Code2, title: 'Build', desc: 'Create real applications' },
      { icon: Share2, title: 'Contribute', desc: 'Give back to the community' },
    ];

    return (
      <section className="py-20 relative">
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-amber-500">
                Learning & Growth Journey
              </span>
            </h2>
          </motion.div>

          <div className="relative">
            <div className="hidden md:block absolute top-8 left-1/2 right-0 h-1 bg-gradient-to-r from-yellow-500 via-amber-400 to-yellow-500 z-0" style={{ left: 'calc(12.5% + 2rem)', right: 'calc(12.5% + 2rem)' }}></div>
            
            <div className="grid md:grid-cols-4 gap-8 relative z-10">
              {steps.map((step, i) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.15 }}
                    whileHover={{ y: -8, scale: 1.05 }}
                    className="relative group"
                  >
                    <div className="hidden md:flex w-16 h-16 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full items-center justify-center mx-auto mb-6 shadow-[0_0_25px_rgba(245,166,35,0.6)] relative z-20">
                      <Icon className="w-8 h-8 text-black" />
                    </div>
                    
                    <div className="md:hidden w-14 h-14 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full items-center justify-center mx-auto mb-4 shadow-[0_0_20px_rgba(245,166,35,0.5)] flex">
                      <Icon className="w-7 h-7 text-black" />
                    </div>
                    
                    <div className="bg-black rounded-2xl p-6 border border-yellow-500/30 shadow-[0_0_15px_rgba(245,166,35,0.2)] hover:shadow-[0_0_25px_rgba(245,166,35,0.4)] hover:border-yellow-400 transition-all duration-300 text-center">
                      <h3 className="text-2xl font-bold text-white mb-2">{step.title}</h3>
                      <p className="text-slate-400">{step.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    );
  };

  // Mentorship section
  const Mentorship = () => (
    <section className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-amber-500">
                Mentorship-Driven
              </span>
            </h2>
            <p className="text-lg text-slate-300 mb-6">
              The community is organized around collaboration and peer learning. Experienced mentors and contributors help guide members, answer questions, share insights, and support students as they explore different areas of Web3.
            </p>
            <div className="space-y-4">
              {[
                { icon: Compass, text: 'Personalized guidance' },
                { icon: MessageCircle, text: 'Regular check-ins' },
                { icon: Share2, text: 'Knowledge sharing' },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="flex items-center gap-4 text-slate-300">
                    <Icon className="w-6 h-6 text-yellow-400 flex-shrink-0" />
                    <span>{item.text}</span>
                  </div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center"
          >
            <motion.div
              animate={{
                rotate: [0, 10, -10, 0],
                scale: [1, 1.05, 1]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative"
            >
              <div className="w-64 h-64 bg-gradient-to-br from-yellow-500/20 to-amber-500/5 rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(245,166,35,0.3)]">
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 360]
                  }}
                  transition={{
                    scale: { duration: 3, repeat: Infinity },
                    rotate: { duration: 20, repeat: Infinity, ease: "linear" }
                  }}
                  className="w-48 h-48 bg-gradient-to-br from-yellow-500/30 to-amber-500/10 rounded-full flex items-center justify-center"
                >
                  <Sparkles className="w-20 h-20 text-yellow-400" />
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );

  // Open Source & Building section
  const OpenSource = () => (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-amber-500">
              Open Source & Building
            </span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            In addition to learning, the community encourages active participation in open-source development, project building, and technical exploration.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: Code2, title: 'Real-World Projects', desc: 'Work on meaningful initiatives' },
            { icon: GitBranch, title: 'Collaborative Development', desc: 'Learn version control and teamwork' },
            { icon: Layers, title: 'Hands-On Experience', desc: 'Gain practical skills that last' },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                whileHover={{ y: -10 }}
                className="group bg-black rounded-2xl p-8 border border-yellow-500/30 shadow-[0_0_15px_rgba(245,166,35,0.2)] hover:shadow-[0_0_25px_rgba(245,166,35,0.4)] hover:border-yellow-400 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-500/20 to-amber-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform duration-300">
                  <Icon className="w-8 h-8 text-yellow-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-slate-400">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );

  // CTA section
  const CTA = () => (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 relative z-10"></div>

      <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-amber-400 to-orange-500">
              Ready to Join?
            </span>
          </h2>
          <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
            Become part of the Web3 ecosystem and start your journey today
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-5 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-lg font-bold text-xl text-black hover:from-yellow-300 hover:to-amber-400 transition-all duration-300 shadow-lg shadow-yellow-500/40"
          >
            Join Now <ArrowRight className="inline-block ml-2 w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );

  return (
    <div className="black-star-bg text-white font-sans antialiased overflow-x-hidden">
      <main className="relative z-10">
        <Hero />
        <Overview />
        <MemberBenefits />
        <LearningJourney />
        <Mentorship />
        <OpenSource />
        <CTA />
      </main>
    </div>
  );
};

export default Web3Community;
