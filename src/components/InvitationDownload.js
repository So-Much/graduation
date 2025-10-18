'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, Check, X } from 'lucide-react';

const InvitationDownload = ({ onClose }) => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [isDownloaded, setIsDownloaded] = useState(false);

  const generateInvitationImage = async () => {
    setIsGenerating(true);
    
    // Tạo canvas để vẽ thiệp mời
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    // Kích thước thiệp (A4 ratio)
    canvas.width = 800;
    canvas.height = 600;
    
    // Background gradient
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, '#f8fafc');
    gradient.addColorStop(0.5, '#fef3c7');
    gradient.addColorStop(1, '#fde68a');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Border
    ctx.strokeStyle = '#f59e0b';
    ctx.lineWidth = 4;
    ctx.strokeRect(20, 20, canvas.width - 40, canvas.height - 40);
    
    // Header background
    ctx.fillStyle = '#1e293b';
    ctx.fillRect(0, 0, canvas.width, 120);
    
    // Title
    ctx.fillStyle = '#fbbf24';
    ctx.font = 'bold 36px serif';
    ctx.textAlign = 'center';
    ctx.fillText('THÂN MỜI', canvas.width / 2, 50);
    
    ctx.fillStyle = '#ffffff';
    ctx.font = '24px sans-serif';
    ctx.fillText('Tham dự buổi lễ tốt nghiệp của SoMuch!', canvas.width / 2, 80);
    
    // Content
    ctx.fillStyle = '#1e293b';
    ctx.font = 'bold 28px serif';
    ctx.textAlign = 'center';
    ctx.fillText('Lưu Minh Nhiều', canvas.width / 2, 180);
    
    ctx.font = '18px sans-serif';
    ctx.fillStyle = '#64748b';
    ctx.fillText('Full-Stack Developer', canvas.width / 2, 210);
    
    // Event details
    ctx.fillStyle = '#1e293b';
    ctx.font = 'bold 20px sans-serif';
    ctx.fillText('Thông tin buổi lễ', canvas.width / 2, 260);
    
    // Date
    ctx.font = '16px sans-serif';
    ctx.fillStyle = '#374151';
    ctx.fillText('📅 Ngày: 31 tháng 10, 2025', canvas.width / 2, 290);
    ctx.fillText('🕐 Giờ: Buổi chiều', canvas.width / 2, 315);
    ctx.fillText('📍 Địa điểm: Trường Đại học Tôn Đức Thắng', canvas.width / 2, 340);
    
    // Message
    ctx.fillStyle = '#1e293b';
    ctx.font = 'italic 16px sans-serif';
    ctx.fillText('"Sau 4 năm học tập và kinh nghiệm làm việc thực tế,', canvas.width / 2, 380);
    ctx.fillText('mình rất vui được mời bạn đến chung vui cùng mình', canvas.width / 2, 405);
    ctx.fillText('trong ngày đặc biệt này! 💝"', canvas.width / 2, 430);
    
    // Footer
    ctx.fillStyle = '#1e293b';
    ctx.font = '14px sans-serif';
    ctx.fillText('Lưu Minh Nhiều • Full-Stack Developer • Thân mời bạn', canvas.width / 2, 480);
    ctx.fillText('Java • JavaScript • C# • Python • ReactJS • VueJS • NextJS • NodeJS', canvas.width / 2, 500);
    
    // Decorative elements
    ctx.fillStyle = '#fbbf24';
    ctx.font = '20px serif';
    ctx.fillText('🎓', 50, 50);
    ctx.fillText('🎓', canvas.width - 50, 50);
    ctx.fillText('✨', 50, canvas.height - 50);
    ctx.fillText('✨', canvas.width - 50, canvas.height - 50);
    
    // Convert to blob and download
    canvas.toBlob((blob) => {
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'Thiep_Moi_Tot_Nghiep_Luu_Minh_Nhieu.png';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
      
      setIsGenerating(false);
      setIsDownloaded(true);
      
      // Auto close after 2 seconds
      setTimeout(() => {
        onClose();
      }, 2000);
    }, 'image/png');
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4 mobile-safe-area"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl"
      >
        <div className="text-center">
          <motion.div
            animate={{ rotate: isGenerating ? 360 : 0 }}
            transition={{ duration: 1, repeat: isGenerating ? Infinity : 0 }}
            className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full flex items-center justify-center"
          >
            {isDownloaded ? (
              <Check className="w-8 h-8 text-white" />
            ) : (
              <Download className="w-8 h-8 text-white" />
            )}
          </motion.div>
          
          <h3 className="text-2xl font-bold text-slate-800 mb-4 font-dancing">
            {isDownloaded ? 'Đã tải thiệp!' : 'Tải thiệp mời'}
          </h3>
          
          <p className="text-slate-600 mb-6 font-be-vietnam">
            {isDownloaded 
              ? 'Thiệp mời đã được tải về máy của bạn! 🎉'
              : 'Bạn có muốn tải về thiệp mời đẹp này không?'
            }
          </p>
          
          {!isDownloaded && (
            <div className="flex gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={generateInvitationImage}
                disabled={isGenerating}
                className="bg-gradient-to-r from-amber-500 to-yellow-500 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 font-be-vietnam flex items-center gap-2"
              >
                {isGenerating ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                    />
                    Đang tạo...
                  </>
                ) : (
                  <>
                    <Download className="w-4 h-4" />
                    Tải thiệp
                  </>
                )}
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onClose}
                className="bg-gray-200 text-gray-700 px-6 py-3 rounded-full font-semibold hover:bg-gray-300 transition-all duration-300 font-be-vietnam flex items-center gap-2"
              >
                <X className="w-4 h-4" />
                Hủy
              </motion.button>
            </div>
          )}
          
          {isDownloaded && (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onClose}
              className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 font-be-vietnam"
            >
              Hoàn thành
            </motion.button>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default InvitationDownload;
