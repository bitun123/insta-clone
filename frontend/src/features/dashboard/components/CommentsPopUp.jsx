import React, { useState } from 'react'
import { Search, Filter, MessageCircle, Heart, Trash2, Reply } from 'lucide-react'

function CommentsPopUp() {
  const [searchQuery, setSearchQuery] = useState('')
  const [filterTab, setFilterTab] = useState('all')

  // Sample data structure - will be replaced with real data from API
  const comments = [
    {
      id: 1,
      author: {
        name: 'Sarah Anderson',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
        handle: '@sarah_anderson'
      },
      content: "This is absolutely amazing! Love the composition and colors in this shot 🔥",
      timestamp: '2 hours ago',
      likes: 124,
      replies: [
        {
          id: 1.1,
          author: {
            name: 'John Doe',
            avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
            handle: '@johndoe'
          },
          content: "I totally agree with you!",
          timestamp: '1 hour ago',
          likes: 45
        },
        {
          id: 1.2,
          author: {
            name: 'Sarah Anderson',
            avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
            handle: '@sarah_anderson'
          },
          content: "Thank you so much! Means a lot coming from you 💯",
          timestamp: '45 minutes ago',
          likes: 32
        }
      ]
    },
    {
      id: 2,
      author: {
        name: 'Emma Wilson',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
        handle: '@emmawilson'
      },
      content: "Where was this taken? The lighting is perfect!",
      timestamp: '3 hours ago',
      likes: 89,
      replies: []
    },
    {
      id: 3,
      author: {
        name: 'Michael Chen',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
        handle: '@mchen'
      },
      content: "Outstanding work! This deserves way more engagement.",
      timestamp: '4 hours ago',
      likes: 156,
      replies: []
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header Section */}
      <div className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Comments Dashboard</h1>
              <p className="text-sm sm:text-base text-gray-500 mt-1">Manage and respond to all comments</p>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <MessageCircle className="w-5 h-5" />
              <span className="font-semibold text-lg">{comments.length}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
    
        {/* Comments List */}
        <div className="space-y-4 sm:space-y-6">
          {comments.map((comment) => (
            <div key={comment.id} className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition">
              {/* Main Comment */}
              <div className="p-4 sm:p-6 border-b border-gray-100 hover:bg-gray-50 transition">
                <div className="flex gap-4">
                  {/* Avatar */}
                  <div className="flex-shrink-0">
                    <img
                      src={comment.author.avatar}
                      alt={comment.author.name}
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover ring-2 ring-gray-100"
                    />
                  </div>

                  {/* Comment Content */}
                  <div className="flex-grow min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mb-2">
                      <div>
                        <h4 className="font-semibold text-gray-900 text-sm sm:text-base">{comment.author.name}</h4>
                        <p className="text-xs sm:text-sm text-gray-500">{comment.author.handle}</p>
                      </div>
                      <span className="text-xs sm:text-sm text-gray-500 sm:ml-auto">{comment.timestamp}</span>
                    </div>
                    <p className="text-gray-700 text-sm sm:text-base mb-4 break-words">{comment.content}</p>

                    {/* Comment Actions */}
                    <div className="flex flex-wrap gap-4 sm:gap-6">
                      <button className="flex items-center gap-2 text-gray-500 hover:text-red-500 transition text-xs sm:text-sm font-medium">
                        <Heart className="w-4 h-4 sm:w-5 sm:h-5" />
                        <span>{comment.likes}</span>
                      </button>
                      <button className="flex items-center gap-2 text-gray-500 hover:text-blue-500 transition text-xs sm:text-sm font-medium">
                        <Reply className="w-4 h-4 sm:w-5 sm:h-5" />
                        <span>Reply</span>
                      </button>
                      <button className="flex items-center gap-2 text-gray-500 hover:text-red-600 transition text-xs sm:text-sm font-medium ml-auto sm:ml-0">
                        <Trash2 className="w-4 h-4 sm:w-5 sm:h-5" />
                        <span className="hidden sm:inline">Delete</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Replies Section */}
              {comment.replies.length > 0 && (
                <div className="bg-gray-50 p-0">
                  {comment.replies.map((reply) => (
                    <div key={reply.id} className="p-4 sm:p-6 border-t border-gray-200 hover:bg-gray-100 transition">
                      <div className="flex gap-4 ml-0 sm:ml-8">
                        {/* Reply Avatar */}
                        <div className="flex-shrink-0">
                          <img
                            src={reply.author.avatar}
                            alt={reply.author.name}
                            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover ring-2 ring-gray-200"
                          />
                        </div>

                        {/* Reply Content */}
                        <div className="flex-grow min-w-0">
                          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mb-2">
                            <div>
                              <h4 className="font-semibold text-gray-900 text-sm">{reply.author.name}</h4>
                              <p className="text-xs text-gray-500">{reply.author.handle}</p>
                            </div>
                            <span className="text-xs text-gray-500 sm:ml-auto">{reply.timestamp}</span>
                          </div>
                          <p className="text-gray-700 text-sm mb-3 break-words">{reply.content}</p>

                          {/* Reply Actions */}
                          <div className="flex gap-4 sm:gap-6">
                            <button className="flex items-center gap-1 text-gray-500 hover:text-red-500 transition text-xs font-medium">
                              <Heart className="w-4 h-4" />
                              <span>{reply.likes}</span>
                            </button>
                            <button className="flex items-center gap-1 text-gray-500 hover:text-red-600 transition text-xs font-medium">
                              <Trash2 className="w-4 h-4" />
                              <span className="hidden sm:inline">Delete</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Empty State */}
        {comments.length === 0 && (
          <div className="flex flex-col items-center justify-center py-12 sm:py-20">
            <MessageCircle className="w-12 h-12 sm:w-16 sm:h-16 text-gray-300 mb-4" />
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">No comments yet</h3>
            <p className="text-gray-500 text-sm sm:text-base">Comments will appear here once people engage with your posts</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default CommentsPopUp