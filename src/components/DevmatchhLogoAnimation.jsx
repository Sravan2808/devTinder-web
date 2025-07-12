import { motion } from "motion/react";
import { Code, Users, Zap, GitBranch, Terminal, Cpu } from "lucide-react";

export default function DevmatchhLogoAnimation() {
  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 3,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      },
    },
  };

  const pulseVariants = {
    animate: {
      scale: [1, 1.1, 1],
      opacity: [0.7, 1, 0.7],
      transition: {
        duration: 2,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      },
    },
  };

  const rotateVariants = {
    animate: {
      rotate: 360,
      transition: {
        duration: 8,
        repeat: Number.POSITIVE_INFINITY,
        ease: "linear",
      },
    },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <div className="flex flex-col items-center justify-center h-full space-y-8 text-white p-8">
      {/* Main Logo Animation */}
      <motion.div
        className="relative"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Outer rotating ring */}
        <motion.div
          className="absolute inset-0 w-40 h-40 rounded-full border-2 border-[#5754E8]/30"
          variants={rotateVariants}
          animate="animate"
        />

        {/* Middle pulsing ring */}
        <motion.div
          className="absolute inset-4 w-32 h-32 rounded-full bg-gradient-to-r from-[#5754E8]/20 to-purple-500/20"
          variants={pulseVariants}
          animate="animate"
        />

        {/* Inner core */}
        <motion.div
          className="absolute inset-8 w-24 h-24 rounded-full bg-[#0E1013] flex items-center justify-center border border-[#5754E8]/50"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          >
            <Code className="w-10 h-10 text-[#5754E8]" />
          </motion.div>
        </motion.div>

        {/* Floating particles */}
        <motion.div
          className="absolute -top-2 -right-2 w-4 h-4 bg-[#5754E8] rounded-full"
          variants={floatingVariants}
          animate="animate"
        />
        <motion.div
          className="absolute -bottom-2 -left-2 w-3 h-3 bg-purple-500 rounded-full"
          variants={floatingVariants}
          animate="animate"
          style={{ animationDelay: "1s" }}
        />
        <motion.div
          className="absolute top-1/2 -left-4 w-2 h-2 bg-blue-400 rounded-full"
          variants={floatingVariants}
          animate="animate"
          style={{ animationDelay: "2s" }}
        />
      </motion.div>

      {/* Brand Name */}
      <motion.div
        className="text-center space-y-4"
        variants={fadeInUp}
        initial="initial"
        animate="animate"
      >
        <motion.h1
          className="text-6xl font-bold bg-gradient-to-r from-[#5754E8] to-purple-400 bg-clip-text text-transparent"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          DevMatch 
        </motion.h1>
        <motion.p
          className="text-xl text-slate-300 max-w-md leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Connect with talented developers and build amazing projects together
        </motion.p>
      </motion.div>

      {/* Feature Icons Grid */}
      <motion.div
        className="grid grid-cols-3 gap-6 mt-12"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        {[
          { icon: Code, label: "Code", color: "from-[#5754E8] to-blue-500" },
          {
            icon: Users,
            label: "Connect",
            color: "from-purple-500 to-pink-500",
          },
          {
            icon: Zap,
            label: "Create",
            color: "from-yellow-500 to-orange-500",
          },
          {
            icon: GitBranch,
            label: "Collaborate",
            color: "from-green-500 to-teal-500",
          },
          { icon: Terminal, label: "Build", color: "from-red-500 to-pink-500" },
          { icon: Cpu, label: "Deploy", color: "from-cyan-500 to-blue-500" },
        ].map((item, index) => (
          <motion.div
            key={item.label}
            className="flex flex-col items-center space-y-3 group cursor-pointer"
            variants={fadeInUp}
            whileHover={{ scale: 1.1, y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.div
              className={`w-16 h-16 rounded-xl bg-gradient-to-r ${item.color} p-0.5 group-hover:shadow-lg group-hover:shadow-[#5754E8]/25`}
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-full h-full bg-[#0E1013] rounded-xl flex items-center justify-center">
                <item.icon className="w-7 h-7 text-white" />
              </div>
            </motion.div>
            <motion.span
              className="text-sm text-slate-400 group-hover:text-white transition-colors"
              initial={{ opacity: 0.7 }}
              whileHover={{ opacity: 1 }}
            >
              {item.label}
            </motion.span>
          </motion.div>
        ))}
      </motion.div>

      {/* Animated Code Snippets */}
      <motion.div
        className="mt-12 space-y-4 w-full max-w-sm"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        {[
          "const developer = 'amazing';",
          "function connect() { return 'success'; }",
          "git commit -m 'building the future'",
        ].map((code, index) => (
          <motion.div
            key={index}
            className="bg-[#0E1013]/50 border border-[#5754E8]/20 rounded-lg p-3 font-mono text-sm text-slate-300"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2 + index * 0.2, duration: 0.5 }}
            whileHover={{
              borderColor: "#5754E8",
              boxShadow: "0 0 20px rgba(87, 84, 232, 0.1)",
            }}
          >
            <motion.span
              className="text-[#5754E8]"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                delay: index * 0.5,
              }}
            >
              {"> "}
            </motion.span>
            {code}
          </motion.div>
        ))}
      </motion.div>

      {/* Bottom decorative elements */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <motion.div
          className="flex space-x-2"
          animate={{ y: [0, -5, 0] }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-2 h-2 bg-[#5754E8] rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{
                duration: 1.5,
                repeat: Number.POSITIVE_INFINITY,
                delay: i * 0.2,
                ease: "easeInOut",
              }}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
