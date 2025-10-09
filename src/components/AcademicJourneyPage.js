'use client';

import { motion } from 'framer-motion';
import { BookOpen, Trophy, Users, Lightbulb, Target, TrendingUp } from 'lucide-react';

const AcademicJourneyPage = () => {
  const timeline = [
    {
      year: "2021",
      title: "Khởi đầu hành trình",
      description: "Bắt đầu học tập tại Đại học Tôn Đức Thắng với niềm đam mê và quyết tâm cao",
      icon: BookOpen,
      color: "from-blue-500 to-cyan-500"
    },
    {
      year: "2022",
      title: "Phát triển kỹ năng",
      description: "Tham gia các hoạt động ngoại khóa, phát triển kỹ năng mềm và kết nối bạn bè",
      icon: Users,
      color: "from-green-500 to-emerald-500"
    },
    {
      year: "2023",
      title: "Đạt thành tích cao",
      description: "GPA 3.8/4.0, tham gia nghiên cứu khoa học và các cuộc thi chuyên ngành",
      icon: Trophy,
      color: "from-yellow-500 to-orange-500"
    },
    {
      year: "2024",
      title: "Thực tập chuyên nghiệp",
      description: "Thực tập tại các công ty hàng đầu, áp dụng kiến thức vào thực tế",
      icon: Lightbulb,
      color: "from-purple-500 to-pink-500"
    },
    {
      year: "2025",
      title: "Tốt nghiệp",
      description: "Hoàn thành chương trình học với thành tích xuất sắc, sẵn sàng cho tương lai",
      icon: Target,
      color: "from-indigo-500 to-purple-500"
    }
  ];

  const achievements = [
    { title: "GPA Xuất sắc", value: "3.8/4.0", icon: TrendingUp },
    { title: "Dự án nghiên cứu", value: "5+", icon: Lightbulb },
    { title: "Hoạt động ngoại khóa", value: "15+", icon: Users },
    { title: "Chứng chỉ chuyên môn", value: "8+", icon: Trophy }
  ];

  return (
    <div className="w-full h-full overflow-y-auto p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Hành Trình Học Tập
          </h1>
          <p className="text-xl text-gray-600">
            Những dấu mốc quan trọng trong 4 năm đại học
          </p>
        </motion.div>

        {/* Achievements Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <achievement.icon className="w-8 h-8 text-indigo-600 mx-auto mb-3" />
              <div className="text-2xl font-bold text-gray-800 mb-1">{achievement.value}</div>
              <div className="text-sm text-gray-600">{achievement.title}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-500 to-purple-500 rounded-full"></div>
          
          {timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 + index * 0.2 }}
              className="relative flex items-center mb-12"
            >
              {/* Timeline dot */}
              <div className={`absolute left-6 w-4 h-4 bg-gradient-to-r ${item.color} rounded-full shadow-lg z-10`}></div>
              
              {/* Content */}
              <div className="ml-20 bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 flex-1">
                <div className="flex items-center mb-3">
                  <item.icon className={`w-6 h-6 text-transparent bg-gradient-to-r ${item.color} bg-clip-text mr-3`} />
                  <span className="text-2xl font-bold text-gray-800">{item.year}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skills section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="mt-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl p-8 text-white"
        >
          <h2 className="text-3xl font-bold mb-6 text-center">Kỹ Năng Được Phát Triển</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              "Lập trình Web",
              "Phân tích dữ liệu", 
              "Làm việc nhóm",
              "Thuyết trình",
              "Nghiên cứu khoa học",
              "Quản lý dự án",
              "Giao tiếp",
              "Tư duy phản biện"
            ].map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.8 + index * 0.1 }}
                className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center hover:bg-white/30 transition-all duration-300"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AcademicJourneyPage;
