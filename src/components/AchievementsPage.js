'use client';

import { motion } from 'framer-motion';
import { Award, Trophy, Users, BookOpen, Star, Target, Zap, Heart } from 'lucide-react';

const AchievementsPage = () => {
  const academicAchievements = [
    {
      title: "Học bổng Xuất sắc",
      year: "2023-2024",
      description: "Nhận học bổng toàn phần cho thành tích học tập xuất sắc",
      icon: Award,
      color: "from-yellow-400 to-orange-500"
    },
    {
      title: "Giải Nhất Cuộc thi Lập trình",
      year: "2023",
      description: "Đạt giải nhất cuộc thi lập trình cấp trường",
      icon: Trophy,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Nghiên cứu khoa học",
      year: "2024",
      description: "Tham gia 3 dự án nghiên cứu khoa học với giảng viên",
      icon: BookOpen,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "GPA Xuất sắc",
      year: "2021-2025",
      description: "Duy trì GPA 3.8/4.0 trong suốt 4 năm học",
      icon: Star,
      color: "from-purple-500 to-pink-500"
    }
  ];

  const extracurricularActivities = [
    {
      title: "Chủ tịch CLB Lập trình",
      period: "2022-2024",
      description: "Lãnh đạo và tổ chức các hoạt động cho 200+ thành viên",
      icon: Users,
      color: "from-indigo-500 to-blue-500"
    },
    {
      title: "Tình nguyện viên",
      period: "2021-2025",
      description: "Tham gia các hoạt động tình nguyện, giúp đỡ cộng đồng",
      icon: Heart,
      color: "from-red-500 to-pink-500"
    },
    {
      title: "Mentor cho sinh viên năm 1",
      period: "2023-2024",
      description: "Hướng dẫn và hỗ trợ các sinh viên mới",
      icon: Target,
      color: "from-green-500 to-teal-500"
    },
    {
      title: "Tham gia Hackathon",
      period: "2022-2024",
      description: "Tham gia 5+ cuộc thi hackathon và đạt nhiều giải thưởng",
      icon: Zap,
      color: "from-yellow-500 to-orange-500"
    }
  ];

  const projects = [
    {
      title: "Hệ thống quản lý thư viện",
      description: "Phát triển ứng dụng web quản lý thư viện với React và Node.js",
      tech: ["React", "Node.js", "MongoDB"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Phân tích dữ liệu sinh viên",
      description: "Sử dụng Python và Machine Learning để phân tích dữ liệu học tập",
      tech: ["Python", "Pandas", "Scikit-learn"],
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Ứng dụng di động học tập",
      description: "Phát triển app mobile hỗ trợ học tập với Flutter",
      tech: ["Flutter", "Firebase", "Dart"],
      color: "from-purple-500 to-pink-500"
    }
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
            Thành Tích & Hoạt Động
          </h1>
          <p className="text-xl text-gray-600">
            Những dấu ấn đáng nhớ trong suốt 4 năm đại học
          </p>
        </motion.div>

        {/* Academic Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Thành Tích Học Tập</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {academicAchievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${achievement.color} rounded-xl flex items-center justify-center mr-4`}>
                    <achievement.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">{achievement.title}</h3>
                    <p className="text-sm text-gray-600">{achievement.year}</p>
                  </div>
                </div>
                <p className="text-gray-600">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Extracurricular Activities */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Hoạt Động Ngoại Khóa</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {extracurricularActivities.map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${activity.color} rounded-xl flex items-center justify-center mr-4`}>
                    <activity.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">{activity.title}</h3>
                    <p className="text-sm text-gray-600">{activity.period}</p>
                  </div>
                </div>
                <p className="text-gray-600">{activity.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Dự Án Nổi Bật</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className={`w-full h-2 bg-gradient-to-r ${project.color} rounded-full mb-4`}></div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl p-8 text-white"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Tổng Kết</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: "Năm học", value: "4" },
              { label: "GPA", value: "3.8" },
              { label: "Dự án", value: "15+" },
              { label: "Hoạt động", value: "20+" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.6 + index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                <div className="text-sm opacity-90">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AchievementsPage;
