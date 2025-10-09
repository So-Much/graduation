'use client';

import { motion } from 'framer-motion';
import { GraduationCap, User, Calendar, MapPin, BookOpen } from 'lucide-react';

const IntroPage = () => {
  return (
    <div className="w-full h-full flex items-center justify-center p-8">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="max-w-4xl mx-auto text-center"
      >
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-indigo-200 to-purple-200 rounded-full opacity-20"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-blue-200 to-indigo-200 rounded-full opacity-20"
          />
        </div>

        {/* Main content */}
        <div className="relative z-10">
          {/* Avatar */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-2xl"
          >
            <User className="w-16 h-16 text-white" />
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-5xl md:text-6xl font-bold text-slate-800 mb-4 font-playfair"
          >
            Lưu Minh Nhiều
          </motion.h1>

          {/* Student ID */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-xl text-slate-600 mb-8 font-poppins"
          >
            Mã số sinh viên: 52100456
          </motion.div>

          {/* University info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl mb-8"
          >
            <div className="flex items-center justify-center mb-4">
              <GraduationCap className="w-8 h-8 text-blue-800 mr-3" />
              <h2 className="text-2xl font-semibold text-slate-800 font-poppins">Đại học Tôn Đức Thắng</h2>
            </div>
            <div className="flex items-center justify-center text-slate-600 font-poppins">
              <Calendar className="w-5 h-5 mr-2" />
              <span>Khóa học: 2021 - 2025</span>
            </div>
          </motion.div>

          {/* Welcome message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="text-lg text-slate-700 leading-relaxed max-w-2xl mx-auto font-poppins"
          >
            <p className="mb-4">
              Chào mừng bạn đến với hành trình học tập của tôi tại Đại học Tôn Đức Thắng!
            </p>
            <p>
              Đây là nơi tôi chia sẻ về quá trình phát triển, những thành tích đạt được và mời bạn tham dự lễ tốt nghiệp của tôi.
            </p>
          </motion.div>

          {/* Floating elements */}
          <motion.div
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 left-20 text-indigo-300"
          >
            <BookOpen className="w-8 h-8" />
          </motion.div>
          <motion.div
            animate={{ y: [10, -10, 10] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-32 right-32 text-purple-300"
          >
            <GraduationCap className="w-6 h-6" />
          </motion.div>
          <motion.div
            animate={{ y: [-5, 15, -5] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-32 left-32 text-blue-300"
          >
            <MapPin className="w-7 h-7" />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default IntroPage;
