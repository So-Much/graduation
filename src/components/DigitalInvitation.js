'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Download, Heart, Sparkles, Star, GraduationCap, Calendar, MapPin, Clock, X } from 'lucide-react';
import InvitationDownload from './InvitationDownload';

const DigitalInvitation = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isOpening, setIsOpening] = useState(false);
  const [showDownload, setShowDownload] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isVideoMinimized, setIsVideoMinimized] = useState(false);
  const [isVideoMuted, setIsVideoMuted] = useState(false);
  const [videoPosition, setVideoPosition] = useState({ x: 0, y: 0 });
  const [isResizing, setIsResizing] = useState(false);
  const [videoSize, setVideoSize] = useState({ width: 200, height: 150 });
  const [resizeStart, setResizeStart] = useState({ x: 0, y: 0, width: 0, height: 0 });
  const [resizeDirection, setResizeDirection] = useState('');
  const [isResizingActive, setIsResizingActive] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const pages = [
    {
      id: 'greeting',
      title: 'Chào mừng',
      content: 'greeting'
    },
    {
      id: 'details', 
      title: 'Chi tiết',
      content: 'details'
    },
    {
      id: 'memories',
      title: 'Kỷ niệm',
      content: 'memories'
    },
    {
      id: 'thankyou',
      title: 'Cảm ơn',
      content: 'thankyou'
    }
  ];

  const nextPage = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const openInvitation = () => {
    setIsOpening(true);
    // Add a small delay for opening animation
    setTimeout(() => {
      setIsOpen(true);
      setIsOpening(false);
    }, 500);
  };

  const closeInvitation = () => {
    setIsOpen(false);
    setCurrentPage(0);
    setShowThankYou(false);
  };

  const handleConfirmAttendance = () => {
    setShowThankYou(true);
  };

  const handleDownloadInvitation = () => {
    setShowDownload(true);
  };

  const handleVideoPlay = () => {
    setIsVideoPlaying(true);
  };

  const handleVideoPause = () => {
    setIsVideoPlaying(false);
  };

  const handleVideoMute = () => {
    setIsVideoMuted(!isVideoMuted);
  };

  const handleVideoMinimize = () => {
    setIsVideoMinimized(!isVideoMinimized);
  };

  const handleMouseMove = useCallback((e) => {
    if (isResizing) {
      let newWidth = resizeStart.width;
      let newHeight = resizeStart.height;
      
      if (resizeDirection.includes('e')) {
        newWidth = Math.max(150, Math.min(600, resizeStart.width + (e.clientX - resizeStart.x)));
      }
      if (resizeDirection.includes('w')) {
        newWidth = Math.max(150, Math.min(600, resizeStart.width - (e.clientX - resizeStart.x)));
      }
      if (resizeDirection.includes('s')) {
        newHeight = Math.max(100, Math.min(450, resizeStart.height + (e.clientY - resizeStart.y)));
      }
      if (resizeDirection.includes('n')) {
        newHeight = Math.max(100, Math.min(450, resizeStart.height - (e.clientY - resizeStart.y)));
      }
      
      setVideoSize({ width: newWidth, height: newHeight });
    }
  }, [isResizing, resizeStart, resizeDirection]);

  const handleMouseUp = useCallback(() => {
    setIsResizing(false);
    setIsResizingActive(false);
  }, []);

  const handleResizeStart = useCallback((e, direction) => {
    e.stopPropagation();
    setIsResizing(true);
    setIsResizingActive(true);
    setResizeDirection(direction);
    setResizeStart({
      x: e.clientX,
      y: e.clientY,
      width: videoSize.width,
      height: videoSize.height
    });
  }, [videoSize.width, videoSize.height]);

  // Touch events for mobile
  const handleTouchMove = useCallback((e) => {
    if (isResizing) {
      const touch = e.touches[0];
      let newWidth = resizeStart.width;
      let newHeight = resizeStart.height;
      
      if (resizeDirection.includes('e')) {
        newWidth = Math.max(150, Math.min(600, resizeStart.width + (touch.clientX - resizeStart.x)));
      }
      if (resizeDirection.includes('w')) {
        newWidth = Math.max(150, Math.min(600, resizeStart.width - (touch.clientX - resizeStart.x)));
      }
      if (resizeDirection.includes('s')) {
        newHeight = Math.max(100, Math.min(450, resizeStart.height + (touch.clientY - resizeStart.y)));
      }
      if (resizeDirection.includes('n')) {
        newHeight = Math.max(100, Math.min(450, resizeStart.height - (touch.clientY - resizeStart.y)));
      }
      
      setVideoSize({ width: newWidth, height: newHeight });
    }
  }, [isResizing, resizeStart, resizeDirection]);

  const handleTouchEnd = useCallback(() => {
    setIsResizing(false);
    setIsResizingActive(false);
  }, []);

  const handleResizeTouchStart = useCallback((e, direction) => {
    e.stopPropagation();
    const touch = e.touches[0];
    setIsResizing(true);
    setIsResizingActive(true);
    setResizeDirection(direction);
    setResizeStart({
      x: touch.clientX,
      y: touch.clientY,
      width: videoSize.width,
      height: videoSize.height
    });
  }, [videoSize.width, videoSize.height]);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const closeImageOverlay = () => {
    setSelectedImage(null);
  };

  // Optimized drag handler
  const handleDrag = useCallback((event, info) => {
    setVideoPosition({
      x: info.point.x - videoSize.width / 2,
      y: info.point.y - videoSize.height / 2
    });
  }, [videoSize.width, videoSize.height]);

  // Add event listeners for resizing
  useEffect(() => {
    if (isResizing) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      document.addEventListener('touchmove', handleTouchMove);
      document.addEventListener('touchend', handleTouchEnd);
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
        document.removeEventListener('touchmove', handleTouchMove);
        document.removeEventListener('touchend', handleTouchEnd);
      };
    }
  }, [isResizing, resizeStart]);

  // Handle mounting only
  useEffect(() => {
    setIsMounted(true);
    // Set initial position for video (bottom right)
    if (typeof window !== 'undefined') {
      setVideoPosition({ 
        x: window.innerWidth - 250, 
        y: window.innerHeight - 200 
      });
    }
  }, []);

  // Handle keyboard events for image overlay
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape' && selectedImage) {
        closeImageOverlay();
      }
    };

    if (selectedImage) {
      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [selectedImage]);

  // Handle window resize for video constraints
  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== 'undefined') {
        // Keep video within bounds when window resizes
        const newX = Math.min(videoPosition.x, window.innerWidth - videoSize.width);
        const newY = Math.min(videoPosition.y, window.innerHeight - videoSize.height - 24);
        setVideoPosition({ x: Math.max(0, newX), y: Math.max(0, newY) });
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, [videoPosition, videoSize]);

  // Show loading state during hydration
  if (!isMounted) {
    return (
      <div className="w-full h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-amber-900 flex items-center justify-center">
        <div className="text-white text-xl font-be-vietnam">Đang tải...</div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen mobile-vh-100 bg-gradient-to-br from-slate-900 via-blue-900 to-amber-900 relative overflow-x-hidden overflow-y-auto">
      {/* Background decorations */}
      {isMounted && (
        <div className="absolute inset-0">
          {/* Floating particles */}
          {[...Array(20)].map((_, i) => {
            // Use deterministic positioning to avoid hydration mismatch
            const positions = [
              { left: '10%', top: '20%' },
              { left: '30%', top: '10%' },
              { left: '50%', top: '30%' },
              { left: '70%', top: '15%' },
              { left: '90%', top: '25%' },
              { left: '15%', top: '60%' },
              { left: '35%', top: '70%' },
              { left: '55%', top: '80%' },
              { left: '75%', top: '65%' },
              { left: '95%', top: '75%' },
              { left: '20%', top: '40%' },
              { left: '40%', top: '50%' },
              { left: '60%', top: '45%' },
              { left: '80%', top: '35%' },
              { left: '25%', top: '85%' },
              { left: '45%', top: '90%' },
              { left: '65%', top: '95%' },
              { left: '85%', top: '85%' },
              { left: '5%', top: '50%' },
              { left: '95%', top: '50%' }
            ];
            
            return (
              <motion.div
                key={i}
                animate={{
                  y: [0, -20, 0],
                  x: [0, (i % 3) * 10 - 10, 0],
                  rotate: [0, 180, 360],
                  opacity: [0.3, 0.8, 0.3]
                }}
                transition={{
                  duration: 4 + (i % 4),
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: (i % 2) * 0.5
                }}
                className="absolute w-2 h-2 bg-amber-400 rounded-full"
                style={positions[i] || { left: '50%', top: '50%' }}
              />
            );
          })}
        </div>
      )}

      {/* Floating video - Draggable, resizable and minimizable */}
      <motion.div 
        className={`fixed z-30 hidden sm:block video-drag-container ${
          isResizing ? 'cursor-default' : 'cursor-move'
        }`}
        data-resizing={isResizing}
        style={{
          left: videoPosition.x,
          top: videoPosition.y
        }}
        drag={!isResizing}
        dragMomentum={false}
        dragElastic={0.1}
        dragPropagation={false}
        dragConstraints={{
          left: 0,
          right: typeof window !== 'undefined' ? window.innerWidth - videoSize.width : 0,
          top: 0,
          bottom: typeof window !== 'undefined' ? window.innerHeight - videoSize.height - 24 : 0
        }}
        onDrag={handleDrag}
        whileHover={!isResizing ? { scale: 1.02 } : {}}
        whileDrag={!isResizing ? { scale: 1.05, rotate: 2 } : {}}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        {isVideoMinimized ? (
          // Minimized state - horizontal bar
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-full p-2 border-2 border-purple-200 shadow-lg flex items-center gap-2">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={isVideoPlaying ? handleVideoPause : handleVideoPlay}
              className="bg-white/90 text-purple-600 rounded-full p-1 shadow-sm"
            >
              {isVideoPlaying ? (
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
                </svg>
              ) : (
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              )}
            </motion.button>
            
            <span className="text-xs font-be-vietnam text-purple-700">15s</span>
            
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleVideoMute}
              className="bg-white/90 text-purple-600 rounded-full p-1 shadow-sm"
            >
              {isVideoMuted ? (
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/>
                </svg>
              ) : (
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
                </svg>
              )}
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleVideoMinimize}
              className="bg-white/90 text-purple-600 rounded-full p-1 shadow-sm"
            >
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 13H5v-2h14v2z"/>
              </svg>
            </motion.button>
          </div>
        ) : (
          // Full video player
           <motion.div 
             className={`bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-3 border-2 shadow-lg relative video-resize-container ${
               isResizingActive ? 'border-purple-400 shadow-2xl' : 'border-purple-200'
             }`}
             style={{ width: videoSize.width, height: videoSize.height + 24 }}
             animate={isResizingActive ? { scale: 1.02 } : { scale: 1 }}
             transition={{ duration: 0.2 }}
           >
            <div className="relative rounded-lg overflow-hidden w-full h-full">
              <video 
                ref={(video) => {
                  if (video) {
                    video.muted = isVideoMuted;
                    if (isVideoPlaying) {
                      video.play();
                    } else {
                      video.pause();
                    }
                  }
                }}
                loop 
                playsInline
                className="w-full h-full object-cover"
                poster="/53A53D3D-7F69-4C3D-BFE8-98BAE4BD8F85.jpg"
              >
                <source src="/53A53D3D-7F69-4C3D-BFE8-98BAE4BD8F85.mov" type="video/quicktime" />
                <source src="/53A53D3D-7F69-4C3D-BFE8-98BAE4BD8F85.mov" type="video/mp4" />
              </video>
              
              {/* Video controls overlay */}
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={isVideoPlaying ? handleVideoPause : handleVideoPlay}
                  className="bg-white/90 text-purple-600 rounded-full p-3 shadow-lg hover:bg-white transition-colors duration-300"
                >
                  {isVideoPlaying ? (
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
                    </svg>
                  ) : (
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  )}
                </motion.button>
              </div>
              
              {/* Control buttons */}
              <div className="absolute top-2 right-2 flex gap-1">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={handleVideoMute}
                  className="bg-black/50 text-white rounded-full p-1 shadow-sm"
                >
                  {isVideoMuted ? (
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/>
                    </svg>
                  ) : (
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
                    </svg>
                  )}
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={handleVideoMinimize}
                  className="bg-black/50 text-white rounded-full p-1 shadow-sm"
                >
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 13H5v-2h14v2z"/>
                  </svg>
                </motion.button>
              </div>
              
               <div className="absolute bottom-2 left-2 bg-black/50 text-white px-2 py-1 rounded text-xs font-be-vietnam">
                 15s {isVideoMuted ? '🔇' : '🔊'}
               </div>
               
               {/* Size indicator when resizing */}
               {isResizingActive && (
                 <motion.div
                   initial={{ opacity: 0, scale: 0.8 }}
                   animate={{ opacity: 1, scale: 1 }}
                   exit={{ opacity: 0, scale: 0.8 }}
                   className="absolute top-2 left-2 bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-be-vietnam shadow-lg"
                 >
                   {Math.round(videoSize.width)} × {Math.round(videoSize.height)}
                 </motion.div>
               )}
            </div>
            
             {/* Resize handles - 4 corners with Framer Motion */}
            {/* Top-left */}
             <motion.div 
               className="absolute top-0 left-0 w-4 h-4 cursor-nw-resize resize-handle"
               onMouseDown={(e) => {
                 e.stopPropagation();
                 handleResizeStart(e, 'nw');
               }}
               onTouchStart={(e) => {
                 e.stopPropagation();
                 handleResizeTouchStart(e, 'nw');
               }}
               whileHover={{ scale: 1.2 }}
               whileTap={{ scale: 0.9 }}
              style={{
                background: 'linear-gradient(135deg, transparent 30%, #8b5cf6 30%, #8b5cf6 40%, transparent 40%, transparent 60%, #8b5cf6 60%, #8b5cf6 70%, transparent 70%)',
                borderRadius: '8px 0 0 0'
              }}
            >
              <div className="w-full h-full flex items-start justify-start">
                 <motion.div 
                   className="w-2 h-2 bg-purple-400 rounded-full opacity-60"
                   animate={{ opacity: [0.6, 1, 0.6] }}
                   transition={{ duration: 2, repeat: Infinity }}
                 ></motion.div>
              </div>
             </motion.div>

            {/* Top-right */}
             <motion.div 
               className="absolute top-0 right-0 w-4 h-4 cursor-ne-resize resize-handle"
               onMouseDown={(e) => {
                 e.stopPropagation();
                 handleResizeStart(e, 'ne');
               }}
               onTouchStart={(e) => {
                 e.stopPropagation();
                 handleResizeTouchStart(e, 'ne');
               }}
               whileHover={{ scale: 1.2 }}
               whileTap={{ scale: 0.9 }}
              style={{
                background: 'linear-gradient(-135deg, transparent 30%, #8b5cf6 30%, #8b5cf6 40%, transparent 40%, transparent 60%, #8b5cf6 60%, #8b5cf6 70%, transparent 70%)',
                borderRadius: '0 8px 0 0'
              }}
            >
              <div className="w-full h-full flex items-start justify-end">
                 <motion.div 
                   className="w-2 h-2 bg-purple-400 rounded-full opacity-60"
                   animate={{ opacity: [0.6, 1, 0.6] }}
                   transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                 ></motion.div>
              </div>
             </motion.div>

            {/* Bottom-left */}
             <motion.div 
               className="absolute bottom-0 left-0 w-4 h-4 cursor-sw-resize resize-handle"
               onMouseDown={(e) => {
                 e.stopPropagation();
                 handleResizeStart(e, 'sw');
               }}
               onTouchStart={(e) => {
                 e.stopPropagation();
                 handleResizeTouchStart(e, 'sw');
               }}
               whileHover={{ scale: 1.2 }}
               whileTap={{ scale: 0.9 }}
              style={{
                background: 'linear-gradient(45deg, transparent 30%, #8b5cf6 30%, #8b5cf6 40%, transparent 40%, transparent 60%, #8b5cf6 60%, #8b5cf6 70%, transparent 70%)',
                borderRadius: '0 0 0 8px'
              }}
            >
              <div className="w-full h-full flex items-end justify-start">
                 <motion.div 
                   className="w-2 h-2 bg-purple-400 rounded-full opacity-60"
                   animate={{ opacity: [0.6, 1, 0.6] }}
                   transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                 ></motion.div>
              </div>
             </motion.div>

            {/* Bottom-right */}
             <motion.div 
               className="absolute bottom-0 right-0 w-4 h-4 cursor-se-resize resize-handle"
               onMouseDown={(e) => {
                 e.stopPropagation();
                 handleResizeStart(e, 'se');
               }}
               onTouchStart={(e) => {
                 e.stopPropagation();
                 handleResizeTouchStart(e, 'se');
               }}
               whileHover={{ scale: 1.2 }}
               whileTap={{ scale: 0.9 }}
              style={{
                background: 'linear-gradient(-45deg, transparent 30%, #8b5cf6 30%, #8b5cf6 40%, transparent 40%, transparent 60%, #8b5cf6 60%, #8b5cf6 70%, transparent 70%)',
                borderRadius: '0 0 8px 0'
              }}
            >
              <div className="w-full h-full flex items-end justify-end">
                 <motion.div 
                   className="w-2 h-2 bg-purple-400 rounded-full opacity-60"
                   animate={{ opacity: [0.6, 1, 0.6] }}
                   transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
                 ></motion.div>
              </div>
             </motion.div>
           </motion.div>
        )}
      </motion.div>

      {/* Closed invitation card */}
      <AnimatePresence>
        {!isOpen && !isOpening && (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute inset-0 flex items-center justify-center p-8"
          >
            <motion.div
              whileHover={{ scale: 1.05, rotateY: 5 }}
              whileTap={{ scale: 0.95 }}
              onClick={openInvitation}
              className="relative cursor-pointer group"
            >
              {/* Card shadow */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
              
              {/* Main card */}
              <div className="relative bg-gradient-to-br from-white via-amber-50 to-yellow-50 rounded-3xl p-6 sm:p-8 md:p-12 card-shadow golden-border luxury-glow paper-texture max-w-md w-full mobile-safe-area">
                {/* Ribbon decoration */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-amber-400 to-yellow-500 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                    Lễ Tốt Nghiệp
                  </div>
                </div>

                {/* Card content */}
                <div className="text-center pt-4">
                  <motion.div
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="mb-6"
                  >
                    <GraduationCap className="w-16 h-16 text-amber-600 mx-auto" />
                  </motion.div>
                  
                  <h1 className="text-3xl font-bold text-slate-800 mb-2 font-dancing handwritten-shadow">
                    Lưu Minh Nhiều
                  </h1>
                  
                  <p className="text-slate-600 mb-6 font-be-vietnam">
                    Thân mời bạn đến chung vui cùng mình
                  </p>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    animate={{ 
                      scale: [1, 1.05, 1],
                      boxShadow: [
                        "0 10px 25px rgba(251, 191, 36, 0.3)",
                        "0 15px 35px rgba(251, 191, 36, 0.5)",
                        "0 10px 25px rgba(251, 191, 36, 0.3)"
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                    onClick={openInvitation}
                    className="inline-flex items-center bg-gradient-to-r from-amber-500 to-yellow-500 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer relative overflow-hidden"
                  >
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      className="mr-2"
                    >
                      <Sparkles className="w-5 h-5" />
                    </motion.div>
                    Nhấn để xem thiệp
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Opening animation */}
      {isOpening && (
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1.1, opacity: 1 }}
          exit={{ scale: 1, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 flex items-center justify-center p-8"
        >
          <div className="text-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              className="w-16 h-16 mx-auto mb-4"
            >
              <Sparkles className="w-16 h-16 text-amber-400" />
            </motion.div>
            <p className="text-white text-xl font-be-vietnam">Đang mở thiệp...</p>
          </div>
        </motion.div>
      )}

      {/* Opened invitation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ scale: 0.8, opacity: 0, rotateY: -15 }}
            animate={{ scale: 1, opacity: 1, rotateY: 0 }}
            exit={{ scale: 0.8, opacity: 0, rotateY: 15 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="absolute inset-0 flex items-center justify-center p-2 sm:p-4 md:p-8 mobile-safe-area"
          >
            <div className="relative max-w-4xl w-full h-full flex flex-col">
              {/* Card shadow */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-3xl blur-2xl opacity-20"></div>
              
              {/* Main invitation card */}
              <div className="relative bg-gradient-to-br from-white via-amber-50 to-yellow-50 rounded-3xl card-shadow golden-border luxury-glow paper-texture overflow-hidden flex flex-col h-full">
                {/* Close button */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={closeInvitation}
                  className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/90 hover:bg-white shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <X className="w-5 h-5 text-slate-600" />
                </motion.button>
                {/* Header */}
                <div className="bg-gradient-to-r from-slate-800 via-blue-900 to-slate-900 text-white p-4 sm:p-6 md:p-8 relative flex-shrink-0">
                  {/* Confetti animation */}
                  <div className="absolute inset-0 overflow-hidden">
                    {[...Array(8)].map((_, i) => (
                      <motion.div
                        key={i}
                        animate={{
                          y: [-20, -100],
                          x: [0, (i % 3) * 20 - 20],
                          rotate: [0, 360],
                          opacity: [1, 0]
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          delay: i * 0.5,
                          ease: "easeOut"
                        }}
                        className="absolute w-3 h-3 bg-amber-400 rounded-full"
                        style={{
                          left: `${20 + i * 10}%`,
                          top: '100%'
                        }}
                      />
                    ))}
                  </div>

                  <div className="relative z-10 text-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      className="mb-6"
                    >
                      <GraduationCap className="w-20 h-20 text-amber-400 mx-auto mb-4" />
                      <h1 className="text-4xl md:text-5xl font-bold mb-2 font-dancing handwritten-shadow">
                        THÂN MỜI
                      </h1>
                      <h2 className="text-2xl md:text-3xl font-light font-be-vietnam">
                        Tham dự buổi lễ tốt nghiệp của SoMuch!
                      </h2>
                    </motion.div>
                  </div>
                </div>

                 {/* Content based on current page */}
                 <div className="p-4 sm:p-6 md:p-8 flex-1 overflow-y-auto invitation-scroll pb-20 sm:pb-8">
                  <AnimatePresence mode="wait">
                    {currentPage === 0 && (
                      <motion.div
                        key="greeting"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -30 }}
                        transition={{ duration: 0.5 }}
                        className="text-center"
                      >
                        <h3 className="text-4xl font-bold text-slate-800 mb-4 font-dancing handwritten-shadow">
                          Lưu Minh Nhiều
                        </h3>
                        <p className="text-lg text-slate-600 mb-6 font-be-vietnam">
                          Full-Stack Developer 💻✨
                        </p>
                        <div className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 px-6 py-3 rounded-full inline-block mb-8 font-be-vietnam">
                          <GraduationCap className="w-5 h-5 inline mr-2" />
                          Junior → Senior Developer (Đang phát triển)
                        </div>
                        <p className="text-xl text-slate-700 leading-relaxed font-be-vietnam">
                          Xin chào bạn! Mình là một Full-Stack Developer đang làm việc tại một công ty outsource. 
                          Sau 4 năm học tập và kinh nghiệm thực tế, mình rất vui được mời bạn đến chung vui cùng mình trong ngày trọng đại này! 🎉
                        </p>
                        <div className="mt-6">
                          <h4 className="text-lg font-semibold text-slate-800 mb-3 font-be-vietnam">Tech Stack hiện tại:</h4>
                          <div className="flex flex-wrap justify-center gap-2">
                            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-be-vietnam">Java</span>
                            <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-be-vietnam">JavaScript</span>
                            <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-be-vietnam">C#</span>
                            <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-be-vietnam">Python</span>
                            <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm font-be-vietnam">ReactJS</span>
                            <span className="px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-sm font-be-vietnam">VueJS</span>
                            <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm font-be-vietnam">NextJS</span>
                            <span className="px-3 py-1 bg-cyan-100 text-cyan-800 rounded-full text-sm font-be-vietnam">NodeJS</span>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {currentPage === 1 && (
                      <motion.div
                        key="details"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -30 }}
                        transition={{ duration: 0.5 }}
                        className="text-center"
                      >
                        <h3 className="text-2xl font-bold text-slate-800 mb-6 font-dancing handwritten-shadow">
                          Thông tin buổi lễ
                        </h3>
                        
                        <div className="grid md:grid-cols-3 gap-4 mb-6">
                          <div className="bg-white/80 rounded-xl p-4 shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300">
                            <Calendar className="w-6 h-6 text-blue-800 mx-auto mb-2" />
                            <h4 className="font-semibold text-slate-800 mb-1 font-be-vietnam text-sm">Ngày</h4>
                            <p className="text-slate-600 font-be-vietnam text-sm">31 tháng 10, 2025</p>
                          </div>
                          <div className="bg-white/80 rounded-xl p-4 shadow-lg border border-amber-100 hover:shadow-xl transition-all duration-300">
                            <Clock className="w-6 h-6 text-amber-600 mx-auto mb-2" />
                            <h4 className="font-semibold text-slate-800 mb-1 font-be-vietnam text-sm">Giờ</h4>
                            <p className="text-slate-600 font-be-vietnam text-sm">Buổi chiều</p>
                          </div>
                          <div className="bg-white/80 rounded-xl p-4 shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-300">
                            <MapPin className="w-6 h-6 text-slate-600 mx-auto mb-2" />
                            <h4 className="font-semibold text-slate-800 mb-1 font-be-vietnam text-sm">Địa điểm</h4>
                            <p className="text-slate-600 font-be-vietnam text-sm">Trường Đại học Tôn Đức Thắng</p>
                          </div>
                        </div>

                        <div className="bg-gradient-to-r from-amber-50 to-yellow-50 rounded-xl p-4 border-2 border-amber-200">
                          <Heart className="w-6 h-6 text-amber-600 mx-auto mb-2" />
                          <p className="text-sm font-medium text-slate-800 font-be-vietnam italic">
                            "Sau 4 năm học tập và kinh nghiệm làm việc thực tế, mình rất vui được mời bạn đến chung vui cùng mình trong ngày đặc biệt này! 💝"
                          </p>
                        </div>

                        {/* Work experience showcase */}
                        <div className="mt-6">
                          <h4 className="text-lg font-semibold text-slate-800 mb-3 font-dancing handwritten-shadow">
                            Kinh nghiệm làm việc 💼
                          </h4>
                          <div className="grid grid-cols-2 gap-3">
                            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-3 border border-blue-200">
                              <h5 className="font-semibold text-slate-800 mb-1 font-be-vietnam text-sm">Full-Stack</h5>
                              <p className="text-xs text-slate-600 font-be-vietnam">ReactJS, VueJS, NextJS</p>
                            </div>
                            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-3 border border-green-200">
                              <h5 className="font-semibold text-slate-800 mb-1 font-be-vietnam text-sm">Mobile</h5>
                              <p className="text-xs text-slate-600 font-be-vietnam">Java Mobile App</p>
                            </div>
                            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-3 border border-purple-200">
                              <h5 className="font-semibold text-slate-800 mb-1 font-be-vietnam text-sm">Database</h5>
                              <p className="text-xs text-slate-600 font-be-vietnam">MongoDB, MySQL</p>
                            </div>
                            <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-lg p-3 border border-orange-200">
                              <h5 className="font-semibold text-slate-800 mb-1 font-be-vietnam text-sm">Goal</h5>
                              <p className="text-xs text-slate-600 font-be-vietnam">Junior → Senior 🚀</p>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {currentPage === 2 && (
                      <motion.div
                        key="memories"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -30 }}
                        transition={{ duration: 0.5 }}
                        className="text-center"
                      >
                        <h3 className="text-2xl font-bold text-slate-800 mb-6 font-dancing handwritten-shadow">
                          Những kỷ niệm đáng nhớ 📸
                        </h3>
                        
                        <p className="text-slate-600 mb-6 font-be-vietnam">
                          Hành trình 4 năm đại học với những khoảnh khắc không thể quên
                        </p>


                         {/* Photo grid - All 18 memories */}
                         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-3 mb-6">
                          {[
                            { src: '/2AC239C5-E7BE-4515-92AB-B3243ADF1C15.jpg', label: '"Em bé ngây thơ"' },
                            { src: '/63F1D7FE-0673-4391-84D8-38E7664E51CC.jpg', label: 'Thằng ku điệu' },
                            { src: '/4492832B-D956-4B7A-B4E3-94C8473BDE8E.jpg', label: 'Năm nhất' },
                            { src: '/774ADDBF-AAB6-42CA-B939-3C1E7A22993C.jpg', label: 'Ayounghaseyo' },
                            { src: '/1D80D4D1-3BEA-4867-A4F2-BFAFA991C5CE.jpg', label: 'Coffe time' },
                            { src: '/2FE681F1-566E-45E0-9615-250475017D25.jpg', label: '30/4-1/5' },
                            { src: '/8DF9CBD1-0F6D-4EF2-A661-F09A1AB18FEA.jpg', label: 'Lửa trại' },
                            { src: '/10E5A8CC-D183-493C-B8E7-C867177EC8A3.jpg', label: 'Bình minh' },
                            { src: '/B45EE88D-E1FF-4E43-B5C6-74FBA6CCAADA.jpg', label: 'Nhộn nhịp tĩnh lặng' },
                            { src: '/ADD46894-B346-46EB-BA55-4262A07A6635.jpg', label: 'Lạc quan dữ' },
                            { src: '/B76D0E74-093D-47FE-9E8E-A6A989965C3F.jpg', label: 'Hoàng hôn' },
                            { src: '/9B545132-DD17-4DCD-B227-CF638ACCF429.jpg', label: 'Về nhà' },
                            { src: '/CE0D6D98-0D15-4F64-AA96-01C4B6073610.jpg', label: 'Selfie' },
                            { src: '/F5F27D41-2461-4B26-9EB9-30C59FCBC13D.jpg', label: 'Tổ chim' },
                            { src: '/382C1847-11B8-4FA1-82EE-28AF3A5AE8CE.jpg', label: 'Avatar nè' },
                            { src: '/A978C91C-1E23-4DCE-9DA6-17344E392AA2.jpg', label: 'Du lịch' },
                            { src: '/FF5A0748-D82B-4508-935A-B9F5860C5283.jpg', label: 'An Giang' },
                            { src: '/307D0197-65A9-45BD-A0BC-0D17DCF68763.jpg', label: 'Hello Nha Trang' },
                          ].map((image, index) => (
                            <motion.div
                              key={index}
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              onClick={() => handleImageClick(image)}
                              className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                            >
                              <img 
                                src={image.src} 
                                alt="Kỷ niệm đại học"
                                className="w-full h-24 object-cover"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                              <div className="absolute bottom-1 left-1 text-white text-xs font-be-vietnam">
                                {image.label}
                              </div>
                              {/* Click indicator */}
                              <div className="absolute top-1 right-1 bg-black/50 text-white rounded-full p-1 opacity-0 hover:opacity-100 transition-opacity duration-300">
                                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M15 12c0 1.657-1.343 3-3 3s-3-1.343-3-3 1.343-3 3-3 3 1.343 3 3zm-3-9c-5.514 0-10 4.486-10 10s4.486 10 10 10 10-4.486 10-10-4.486-10-10-10zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"/>
                                </svg>
                              </div>
                            </motion.div>
                          ))}
                        </div>

                        {/* Memory message */}
                        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-4 border-2 border-blue-200">
                          <Heart className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                          <p className="text-sm font-medium text-slate-800 font-be-vietnam italic">
                            "4 năm đại học với biết bao kỷ niệm đẹp, từ những ngày đầu bỡ ngỡ đến giờ sắp tốt nghiệp. 
                            Cảm ơn bạn đã đồng hành cùng mình trong suốt chặng đường này! 💙"
                          </p>
                        </div>
                      </motion.div>
                    )}

                    {currentPage === 3 && (
                      <motion.div
                        key="thankyou"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -30 }}
                        transition={{ duration: 0.5 }}
                        className="text-center"
                      >
                        <h3 className="text-3xl font-bold text-slate-800 mb-8 font-dancing handwritten-shadow">
                          Cảm ơn bạn rất nhiều!
                        </h3>
                        
                        <div className="bg-gradient-to-r from-blue-50 to-amber-50 rounded-2xl p-8 mb-8 border-2 border-blue-200">
                          <Star className="w-12 h-12 text-amber-500 mx-auto mb-4" />
                          <p className="text-xl text-slate-700 leading-relaxed mb-6 font-be-vietnam">
                            Cảm ơn bạn đã đồng hành cùng mình trong suốt chặng đường học tập và phát triển. 
                            Từ Junior Developer đến mục tiêu trở thành Senior và Manager, 
                            sự có mặt của bạn sẽ là niềm vui lớn nhất trong ngày đặc biệt này! ✨
                          </p>
                          <div className="text-lg font-semibold text-slate-800 font-dancing handwritten-shadow">
                            "Hẹn gặp bạn tại lễ tốt nghiệp để cùng chia sẻ hành trình phát triển sự nghiệp! 🎓💼"
                          </div>
                        </div>

                         <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0">
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={handleConfirmAttendance}
                            className="bg-gradient-to-r from-blue-800 to-slate-800 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 font-be-vietnam"
                          >
                            Mình sẽ đến! 🎉
                          </motion.button>
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={handleDownloadInvitation}
                            className="bg-gradient-to-r from-amber-500 to-yellow-500 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 font-be-vietnam flex items-center gap-2"
                          >
                            <Download className="w-4 h-4" />
                            Lưu thiệp
                          </motion.button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                 {/* Navigation */}
                 <div className="flex justify-between items-center p-4 sm:p-6 bg-slate-50 border-t border-slate-200 flex-shrink-0">
                  <motion.button
                    onClick={prevPage}
                    disabled={currentPage === 0}
                    className={`px-4 py-2 rounded-full font-semibold transition-all duration-300 font-be-vietnam ${
                      currentPage === 0 
                        ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
                        : 'bg-blue-100 text-blue-800 hover:bg-blue-200'
                    }`}
                  >
                    Trước
                  </motion.button>

                  <div className="flex space-x-2">
                    {pages.map((_, index) => (
                      <div
                        key={index}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          currentPage === index ? 'bg-amber-500' : 'bg-gray-300'
                        }`}
                      />
                    ))}
                  </div>

                  <motion.button
                    onClick={nextPage}
                    disabled={currentPage === pages.length - 1}
                    className={`px-4 py-2 rounded-full font-semibold transition-all duration-300 font-be-vietnam flex items-center gap-2 ${
                      currentPage === pages.length - 1 
                        ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
                        : 'bg-blue-100 text-blue-800 hover:bg-blue-200'
                    }`}
                  >
                    {currentPage === pages.length - 1 ? 'Hoàn thành' : 'Tiếp'}
                    {currentPage < pages.length - 1 && <ChevronRight className="w-4 h-4" />}
                  </motion.button>
                </div>

                {/* Footer */}
                <div className="bg-gradient-to-r from-slate-800 to-blue-900 text-white p-4 text-center flex-shrink-0">
                  <p className="text-sm opacity-90 font-be-vietnam">
                    Thân mời bạn • Lưu Minh Nhiều • Full-Stack Developer tại Outsource Company 💙
                  </p>
                  <p className="text-xs opacity-70 font-be-vietnam mt-1">
                    Java • JavaScript • C# • Python • ReactJS • VueJS • NextJS • NodeJS
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Thank you modal */}
      <AnimatePresence>
        {showThankYou && (
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
              className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl text-center"
            >
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 0.6, repeat: Infinity }}
                className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center"
              >
                <Heart className="w-8 h-8 text-white" />
              </motion.div>
              
              <h3 className="text-2xl font-bold text-slate-800 mb-4 font-dancing">
                Cảm ơn bạn! 💝
              </h3>
              
              <p className="text-slate-600 mb-6 font-be-vietnam">
                Mình rất vui khi biết bạn sẽ tham dự lễ tốt nghiệp! 
                Hẹn gặp bạn vào ngày 31/10/2025 vào buổi chiều tại trường Đại học Tôn Đức Thắng! 🎓
              </p>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowThankYou(false)}
                className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 font-be-vietnam"
              >
                Tuyệt vời! 🎉
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Download modal */}
      <AnimatePresence>
        {showDownload && (
          <InvitationDownload onClose={() => setShowDownload(false)} />
        )}
      </AnimatePresence>

      {/* Image overlay modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50 p-4 mobile-safe-area"
            onClick={closeImageOverlay}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl w-full h-full flex flex-col image-overlay-container"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={closeImageOverlay}
                className="absolute top-4 right-4 z-20 p-3 rounded-full bg-white/90 hover:bg-white shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <X className="w-6 h-6 text-slate-600" />
              </motion.button>

              {/* Image container */}
              <div className="flex-1 flex items-center justify-center p-4 overflow-hidden">
                <motion.img
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0.8 }}
                  src={selectedImage.src}
                  alt={selectedImage.label}
                  className="max-w-full max-h-full w-auto h-auto object-contain rounded-xl shadow-2xl image-overlay-img"
                  style={{
                    maxWidth: '100%',
                    maxHeight: 'calc(100vh - 200px)',
                    width: 'auto',
                    height: 'auto',
                    objectFit: 'contain'
                  }}
                  onLoad={(e) => {
                    const img = e.target;
                    const container = img.parentElement;
                    const containerRect = container.getBoundingClientRect();
                    const imgAspectRatio = img.naturalWidth / img.naturalHeight;
                    const containerAspectRatio = containerRect.width / containerRect.height;
                    
                    if (imgAspectRatio > containerAspectRatio) {
                      // Landscape image - fit to width
                      img.style.maxWidth = '100%';
                      img.style.maxHeight = 'none';
                    } else {
                      // Portrait image - fit to height
                      img.style.maxHeight = '100%';
                      img.style.maxWidth = 'none';
                    }
                  }}
                />
              </div>

              {/* Image label */}
              <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 mx-4 mb-4 text-center">
                <h3 className="text-lg font-semibold text-slate-800 font-be-vietnam">
                  {selectedImage.label}
                </h3>
                <p className="text-sm text-slate-600 font-be-vietnam mt-1">
                  Kỷ niệm đại học
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DigitalInvitation;
