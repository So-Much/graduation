'use client';

import { motion } from 'framer-motion';
import { Calendar, MapPin, Clock, GraduationCap, Heart, Sparkles, Star, Download } from 'lucide-react';

const GraduationInvitationPage = () => {
  return (
    <div className="w-full h-full flex items-center justify-center p-8 relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Confetti elements */}
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.1, 1],
            y: [-10, 10, -10]
          }}
          transition={{ 
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
            y: { duration: 6, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-amber-200 to-yellow-300 rounded-full opacity-20"
        />
        <motion.div
          animate={{ 
            rotate: -360,
            scale: [1, 1.2, 1],
            y: [10, -10, 10]
          }}
          transition={{ 
            rotate: { duration: 25, repeat: Infinity, ease: "linear" },
            scale: { duration: 6, repeat: Infinity, ease: "easeInOut" },
            y: { duration: 8, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute -bottom-20 -left-20 w-48 h-48 bg-gradient-to-br from-blue-200 to-indigo-300 rounded-full opacity-20"
        />
        
        {/* Floating confetti */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ 
              y: [-20, 20, -20],
              x: [-10, 10, -10],
              rotate: [0, 180, 360]
            }}
            transition={{ 
              duration: 8 + i, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: i * 0.5
            }}
            className={`absolute w-4 h-4 rounded-full opacity-60 ${
              i % 3 === 0 ? 'bg-amber-400' : 
              i % 3 === 1 ? 'bg-blue-400' : 'bg-slate-400'
            }`}
            style={{
              top: `${20 + i * 15}%`,
              left: `${10 + i * 12}%`
            }}
          />
        ))}
      </div>

      {/* Main invitation card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
        animate={{ opacity: 1, scale: 1, rotateY: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 max-w-4xl w-full"
      >
        {/* Card container */}
        <div className="bg-gradient-to-br from-white via-slate-50 to-blue-50 rounded-3xl shadow-2xl overflow-hidden border-2 border-amber-200/30">
          {/* Header with decorative elements */}
          <div className="relative bg-gradient-to-r from-blue-800 via-blue-900 to-slate-900 p-8 text-white">
            {/* Ribbon decorations */}
            <div className="absolute top-0 left-0 w-20 h-20 bg-amber-400 transform -rotate-45 -translate-x-8 -translate-y-8"></div>
            <div className="absolute top-0 right-0 w-20 h-20 bg-amber-400 transform rotate-45 translate-x-8 -translate-y-8"></div>
            
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="absolute top-4 right-4 text-amber-400"
            >
              <Sparkles className="w-8 h-8" />
            </motion.div>
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="absolute top-6 left-6 text-amber-400"
            >
              <Star className="w-6 h-6" />
            </motion.div>
            
            <div className="text-center relative z-10">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mb-6"
              >
                <GraduationCap className="w-16 h-16 mx-auto mb-4 text-amber-400" />
                <h1 className="text-4xl md:text-5xl font-bold mb-2 font-playfair">THÂN MỜI</h1>
                <h2 className="text-2xl md:text-3xl font-light font-poppins">LỄ TỐT NGHIỆP</h2>
              </motion.div>
            </div>
          </div>

          {/* Main content */}
          <div className="p-8 md:p-12">
            {/* Student info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center mb-8"
            >
              <h3 className="text-3xl md:text-4xl font-bold text-slate-800 mb-2 font-playfair">
                Lưu Minh Nhiều
              </h3>
              <p className="text-lg text-slate-600 mb-4 font-poppins">Mã số sinh viên: 52100456</p>
              <div className="inline-flex items-center bg-blue-100 text-blue-800 px-6 py-3 rounded-full text-sm font-medium border border-blue-200">
                <GraduationCap className="w-4 h-4 mr-2" />
                Đại học Tôn Đức Thắng
              </div>
            </motion.div>

            {/* Invitation message */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-center mb-8"
            >
              <p className="text-lg text-slate-700 leading-relaxed mb-4 font-poppins">
                Sau 4 năm học tập và rèn luyện tại Đại học Tôn Đức Thắng, 
                tôi rất vinh dự được mời bạn tham dự lễ tốt nghiệp của tôi.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed font-poppins">
                Sự có mặt của bạn sẽ là niềm vui và động lực lớn nhất cho tôi trong ngày trọng đại này.
              </p>
            </motion.div>

            {/* Event details */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="grid md:grid-cols-3 gap-6 mb-8"
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300">
                <Calendar className="w-8 h-8 text-blue-800 mx-auto mb-3" />
                <h4 className="font-semibold text-slate-800 mb-2 font-poppins">Ngày</h4>
                <p className="text-slate-600 font-poppins">15 tháng 6, 2025</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg border border-amber-100 hover:shadow-xl transition-all duration-300">
                <Clock className="w-8 h-8 text-amber-600 mx-auto mb-3" />
                <h4 className="font-semibold text-slate-800 mb-2 font-poppins">Giờ</h4>
                <p className="text-slate-600 font-poppins">8:00 - 12:00</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-300">
                <MapPin className="w-8 h-8 text-slate-600 mx-auto mb-3" />
                <h4 className="font-semibold text-slate-800 mb-2 font-poppins">Địa điểm</h4>
                <p className="text-slate-600 font-poppins">Hội trường A - TDTU</p>
              </div>
            </motion.div>

            {/* Special message */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="bg-gradient-to-r from-amber-50 to-yellow-50 rounded-2xl p-6 text-center border-2 border-amber-200 shadow-lg"
            >
              <Heart className="w-8 h-8 text-amber-600 mx-auto mb-3" />
              <p className="text-lg font-medium text-slate-800 font-poppins italic">
                "Cảm ơn bạn đã đồng hành cùng tôi trong suốt chặng đường học tập. 
                Hãy cùng tôi chào đón một chương mới trong cuộc đời!"
              </p>
            </motion.div>

            {/* RSVP section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="text-center mt-8"
            >
              <p className="text-slate-600 mb-4 font-poppins">Vui lòng xác nhận tham dự trước ngày 10/6/2025</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-blue-800 to-slate-800 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 font-poppins"
                >
                  Xác nhận tham dự
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white border-2 border-blue-800 text-blue-800 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 font-poppins"
                >
                  Liên hệ
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-amber-500 to-yellow-500 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 font-poppins flex items-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  Tải ảnh
                </motion.button>
              </div>
            </motion.div>
          </div>

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="bg-gradient-to-r from-slate-800 to-blue-900 text-white p-6 text-center"
          >
            <p className="text-sm opacity-90 font-poppins">
              Trân trọng kính mời • Lưu Minh Nhiều • Class of 2025
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default GraduationInvitationPage;
