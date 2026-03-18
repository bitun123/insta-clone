
import React, { useContext, useEffect } from 'react'
import { Heart, Trash2, Reply, X } from 'lucide-react'
import { DashboardContext } from '../context/dashboardContext'
import { useChat } from '../hooks/useChat'


function CommentsPopUp() {
    const { showCommentsPopup, setShowCommentsPopup } = useContext(DashboardContext)
    const chat = useChat()
    // Sample data structure matching the diagram
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
                }
            ]
        },

    ]


    useEffect(() => {
        chat.initializeSocketConnection()
    }, [])


    if (!showCommentsPopup) return null

    return (
        <div
            className="fixed -top-80 inset-0 bg-opacity-50 flex items-center justify-center z-50 p-3 sm:p-4  md:p-6  lg:top-0 lg:right-25 "
            onClick={() => setShowCommentsPopup(false)}
        >
            <div
                className="bg-gray-900 rounded-lg w-full max-w-sm sm:max-w-md md:max-w-xl  max-h-[90vh] md:max-h-[80vh] flex flex-col"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header */}
                <div className="flex items-center justify-between p-3 sm:p-4 md:p-6 border-b border-gray-800 sticky top-0 bg-gray-900 rounded-t-lg">
                    <div className="flex-1 min-w-0">
                        <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white truncate">Comments</h2>
                        <p className="text-xs sm:text-sm text-gray-400">{comments.length} {comments.length === 1 ? 'comment' : 'comments'}</p>
                    </div>
                    <button
                        onClick={() => setShowCommentsPopup(false)}
                        className="text-gray-400 hover:text-white transition p-1.5 sm:p-2 rounded-lg hover:bg-gray-800 flex-shrink-0 ml-2"
                    >
                        <X size={20} className="sm:w-6 sm:h-6" />
                    </button>
                </div>

                {/* Comments List */}
                <div className="flex-1 overflow-y-auto no-scrollbar">
                    <div className="p-3 sm:p-4 md:p-6 space-y-4 sm:space-y-5 md:space-y-6">
                        {comments.map((comment) => (
                            <div key={comment.id} className="space-y-3 sm:space-y-4">
                                {/* Main Comment - Users */}
                                <div className="flex gap-2.5 sm:gap-3 md:gap-4">
                                    {/* Avatar Circle */}
                                    <div className="flex-shrink-0">
                                        <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 p-0.5">
                                            <img
                                                src={comment.author.avatar}
                                                alt={comment.author.name}
                                                className="w-full h-full rounded-full object-cover"
                                            />
                                        </div>
                                    </div>

                                    {/* Comment Content */}
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-start justify-between gap-1.5 sm:gap-2">
                                            <div className="min-w-0">
                                                <h3 className="font-semibold text-white text-xs sm:text-sm md:text-base truncate">{comment.author.name}</h3>
                                                <p className="text-xs text-gray-500 truncate">{comment.author.handle}</p>
                                            </div>
                                            <span className="text-xs text-gray-500 whitespace-nowrap flex-shrink-0">{comment.timestamp}</span>
                                        </div>
                                        <p className="text-gray-200 text-xs sm:text-sm md:text-base mt-1.5 sm:mt-2 break-words">{comment.content}</p>

                                        {/* Action Buttons */}
                                        <div className="flex gap-2 sm:gap-3 md:gap-4 mt-2 sm:mt-3 flex-wrap">
                                            <button className="flex items-center gap-1 text-gray-500 hover:text-red-500 transition text-xs font-medium">
                                                <Heart size={14} className="sm:w-4 sm:h-4 md:w-5 md:h-5" />
                                                <span className="hidden sm:inline">{comment.likes}</span>
                                            </button>
                                            <button className="flex items-center gap-1 text-gray-500 hover:text-blue-500 transition text-xs font-medium">
                                                <Reply size={14} className="sm:w-4 sm:h-4 md:w-5 md:h-5" />
                                                <span className="hidden sm:inline">Reply</span>
                                            </button>
                                            <button className="flex items-center gap-1 text-gray-500 hover:text-red-600 transition text-xs font-medium ml-auto sm:ml-0">
                                                <Trash2 size={14} className="sm:w-4 sm:h-4 md:w-5 md:h-5" />
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                {/* Replies - Parent User Comments */}
                                {comment.replies.length > 0 && (
                                    <div className="space-y-2 sm:space-y-3 md:space-y-4 ml-3 sm:ml-4 md:ml-6 border-l-2 border-gray-700 pl-2.5 sm:pl-3 md:pl-4">
                                        {comment.replies.map((reply) => (
                                            <div key={reply.id} className="flex gap-2.5 sm:gap-3 md:gap-4">
                                                {/* Avatar Circle */}
                                                <div className="flex-shrink-0">
                                                    <div className="w-7 h-7 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-green-400 to-blue-500 p-0.5">
                                                        <img
                                                            src={reply.author.avatar}
                                                            alt={reply.author.name}
                                                            className="w-full h-full rounded-full object-cover"
                                                        />
                                                    </div>
                                                </div>

                                                {/* Reply Content */}
                                                <div className="flex-1 min-w-0">
                                                    <div className="flex items-start justify-between gap-1.5 sm:gap-2">
                                                        <div className="min-w-0">
                                                            <h3 className="font-semibold text-white text-xs sm:text-sm truncate">{reply.author.name}</h3>
                                                            <p className="text-xs text-gray-500 truncate">{reply.author.handle}</p>
                                                        </div>
                                                        <span className="text-xs text-gray-500 whitespace-nowrap flex-shrink-0">{reply.timestamp}</span>
                                                    </div>
                                                    <p className="text-gray-300 text-xs sm:text-sm md:text-base mt-1.5 sm:mt-2 break-words">{reply.content}</p>

                                                    {/* Action Buttons */}
                                                    <div className="flex gap-2 sm:gap-3 md:gap-4 mt-2 flex-wrap">
                                                        <button className="flex items-center gap-1 text-gray-500 hover:text-red-500 transition text-xs font-medium">
                                                            <Heart size={14} className="sm:w-4 sm:h-4 md:w-5 md:h-5" />
                                                            <span className="hidden sm:inline">{reply.likes}</span>
                                                        </button>
                                                        <button className="flex items-center gap-1 text-gray-500 hover:text-red-600 transition text-xs font-medium ml-auto sm:ml-0">
                                                            <Trash2 size={14} className="sm:w-4 sm:h-4 md:w-5 md:h-5" />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>


                {/* Comment Input */}
                <div className='w-full flex gap-1.5 sm:gap-2 md:gap-3 items-center p-2.5 sm:p-3 md:p-4 border-t border-gray-800 bg-gray-900 rounded-b-lg'>
                    <input
                        type="text"
                        placeholder="Add a comment..."
                        className='bg-gray-800 flex-1 py-1.5 sm:py-2 px-3 sm:px-4 text-xs sm:text-sm md:text-base rounded-full border border-gray-700 focus:border-gray-600 outline-none transition hover:bg-gray-750'
                    />
                    <button className='rounded-full px-4 sm:px-5 md:px-6 py-1.5 sm:py-2 text-xs sm:text-sm md:text-base font-semibold bg-blue-600 hover:bg-blue-700 active:scale-95 cursor-pointer text-white transition whitespace-nowrap'>
                        Post
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CommentsPopUp