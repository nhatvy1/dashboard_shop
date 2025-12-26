import { useState } from 'react'
import { Button, Input, Avatar } from '@heroui/react'
import {
  Plus,
  Phone,
  MoreHorizontal,
  Video,
  Info,
  Search,
  Settings,
  UserPlus,
  Smile,
  Send,
  Image,
  ThumbsUp,
  Sticker,
  Gift,
  MessageCircle
} from 'lucide-react'

interface User {
  id: string
  name: string
  avatar: string
  lastMessage: string
  timestamp: string
  isOnline: boolean
  unreadCount?: number
}

interface Message {
  id: string
  senderId: string
  senderName: string
  content: string
  timestamp: string
  type: 'text' | 'sticker' | 'image'
  stickerUrl?: string
  isOwn?: boolean
}

export default function ChatHomePage() {
  const [selectedUserId, setSelectedUserId] = useState<string>('1')
  const [messageInput, setMessageInput] = useState('')

  // Mock data for users - Facebook style
  const users: User[] = [
    {
      id: '1',
      name: 'Công chúa ❤️',
      avatar:
        'https://images.unsplash.com/photo-1494790108755-2616b612b1af?w=150&h=150&fit=crop&crop=face',
      lastMessage: 'Um · 22m',
      timestamp: 'Active 22m ago',
      isOnline: true
    },
    {
      id: '2',
      name: 'Nhật Thiên Huynh',
      avatar:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      lastMessage: 'Bọ ba nửa 😔😔 · 13h Reply?',
      timestamp: '13h',
      isOnline: false
    },
    {
      id: '3',
      name: 'Minh Minh HR',
      avatar:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      lastMessage: 'You sent a photo · 19h',
      timestamp: '19h',
      isOnline: false
    },
    {
      id: '4',
      name: 'Chường Bọ Lê Đức Thọ',
      avatar:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      lastMessage: 'Khương gửi 1 ảnh về · 1d',
      timestamp: '1d',
      isOnline: true
    },
    {
      id: '5',
      name: 'Dung Trần',
      avatar:
        'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=150&h=150&fit=crop&crop=face',
      lastMessage: 'You: Con di choi · Follow up?',
      timestamp: '2d',
      isOnline: false
    }
  ]

  // Mock data for messages - Facebook style with romantic pink theme
  const messages: Message[] = [
    {
      id: '1',
      senderId: 'you',
      senderName: 'You',
      content: 'Ngày 18/3 anh vy hôn em Duyên, một tụi hôn thật ngọt ngào',
      timestamp: '8:59 AM',
      type: 'text',
      isOwn: true
    },
    {
      id: '2',
      senderId: '1',
      senderName: 'Công chúa ❤️',
      content: 'Đau rứng đầu hay sao á',
      timestamp: '9:00 AM',
      type: 'text',
      isOwn: false
    },
    {
      id: '3',
      senderId: '1',
      senderName: 'Công chúa ❤️',
      content: 'Xong rồi á',
      timestamp: '9:01 AM',
      type: 'text',
      isOwn: false
    },
    {
      id: '4',
      senderId: '1',
      senderName: 'Công chúa ❤️',
      content: 'Còn cái là nữa thôi',
      timestamp: '9:01 AM',
      type: 'text',
      isOwn: false
    },
    {
      id: '5',
      senderId: '1',
      senderName: 'Công chúa ❤️',
      content: 'T2 có',
      timestamp: '9:02 AM',
      type: 'text',
      isOwn: false
    },
    {
      id: '6',
      senderId: 'you',
      senderName: 'You',
      content: 'Em mọc lên ly cỉ thứ 2, 3 tuần sau xong khum',
      timestamp: '9:03 AM',
      type: 'text',
      isOwn: true
    },
    {
      id: '7',
      senderId: '1',
      senderName: 'Công chúa ❤️',
      content: '',
      timestamp: '9:04 AM',
      type: 'sticker',
      stickerUrl: '🐶',
      isOwn: false
    },
    {
      id: '8',
      senderId: 'you',
      senderName: 'You',
      content: 'Th làm nè',
      timestamp: '9:05 AM',
      type: 'text',
      isOwn: true
    },
    {
      id: '9',
      senderId: 'you',
      senderName: 'You',
      content: 'Yêu em',
      timestamp: '9:05 AM',
      type: 'text',
      isOwn: true
    },
    {
      id: '10',
      senderId: '1',
      senderName: 'Công chúa ❤️',
      content: 'Ừm',
      timestamp: '9:06 AM',
      type: 'text',
      isOwn: false
    }
  ]

  const selectedUser = users.find((user) => user.id === selectedUserId)

  const handleSendMessage = () => {
    if (messageInput.trim()) {
      console.log('Sending message:', messageInput)
      setMessageInput('')
    }
  }

  return (
    <div className='flex h-screen bg-white'>
      {/* Left Sidebar - Chats List */}
      <div className='flex w-80 flex-col border-r border-gray-200 bg-white'>
        {/* Header */}
        <div className='border-b border-gray-200 p-4'>
          <div className='mb-4 flex items-center justify-between'>
            <h1 className='text-2xl font-bold text-gray-900'>Chats</h1>
            <div className='flex items-center space-x-2'>
              <Button isIconOnly className='text-gray-600 hover:bg-gray-100'>
                <MoreHorizontal className='h-5 w-5' />
              </Button>
              <Button isIconOnly className='text-gray-600 hover:bg-gray-100'>
                <Plus className='h-5 w-5' />
              </Button>
            </div>
          </div>

          {/* Search */}
          <div>
            <Input
              placeholder='Search Messenger'
              // classNames={{
              //   base: "w-full",
              //   mainWrapper: "h-full",
              //   input: "text-sm",
              //   inputWrapper: "h-full font-normal text-default-500 bg-gray-100 border-0 rounded-full",
              // }}
            />
          </div>
        </div>

        {/* Filter Tabs */}
        <div className='flex space-x-1 p-2'>
          <Button
            size='sm'
            className='bg-blue-100 text-blue-700 hover:bg-blue-200'
          >
            All
          </Button>
          <Button size='sm' className='text-gray-600 hover:bg-gray-100'>
            Unread
          </Button>
          <Button size='sm' className='text-gray-600 hover:bg-gray-100'>
            Groups
          </Button>
          <Button size='sm' className='text-gray-600 hover:bg-gray-100'>
            Communities
          </Button>
        </div>

        {/* Users List */}
        <div className='flex-1 overflow-y-auto'>
          <div className='py-2'>
            {users.map((user) => (
              <div
                key={user.id}
                onClick={() => setSelectedUserId(user.id)}
                className={`flex cursor-pointer items-center px-4 py-3 transition-colors hover:bg-gray-50 ${
                  selectedUserId === user.id ? 'bg-blue-50' : ''
                }`}
              >
                <div className='relative mr-3'>
                  <Avatar></Avatar>
                  {user.isOnline && (
                    <div className='absolute right-1 bottom-1 h-4 w-4 rounded-full border-2 border-white bg-green-500'></div>
                  )}
                </div>
                <div className='min-w-0 flex-1'>
                  <div className='flex items-center justify-between'>
                    <p className='truncate text-sm font-medium text-gray-900'>
                      {user.name}
                    </p>
                    <span className='text-xs text-gray-500'>
                      {user.timestamp}
                    </span>
                  </div>
                  <p className='truncate text-sm text-gray-600'>
                    {user.lastMessage}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Chat Area */}
      <div className='flex flex-1 flex-col bg-linear-to-br from-pink-50 via-pink-100 to-rose-100'>
        {selectedUser ? (
          <>
            {/* Chat Header */}
            <div className='border-b border-pink-200 bg-white/80 px-6 py-4 backdrop-blur-sm'>
              <div className='flex items-center justify-between'>
                <div className='flex items-center'>
                  <Avatar>
                    <Avatar.Image
                      alt='John Doe'
                      src='https://img.heroui.chat/image/avatar?w=400&h=400&u=3'
                    />
                    <Avatar.Fallback>JD</Avatar.Fallback>
                  </Avatar>
                  <div>
                    <h3 className='font-semibold text-gray-800'>
                      {selectedUser.name}
                    </h3>
                    <p className='text-sm text-gray-500'>
                      {selectedUser.timestamp}
                    </p>
                  </div>
                </div>
                <div className='flex items-center space-x-3'>
                  <Button
                    isIconOnly
                    className='text-blue-600 hover:bg-blue-100'
                  >
                    <Phone className='h-5 w-5' />
                  </Button>
                  <Button
                    isIconOnly
                    className='text-blue-600 hover:bg-blue-100'
                  >
                    <Video className='h-5 w-5' />
                  </Button>
                  <Button
                    isIconOnly
                    className='text-gray-600 hover:bg-gray-100'
                  >
                    <Info className='h-5 w-5' />
                  </Button>
                </div>
              </div>
            </div>

            {/* Messages Area */}
            <div className='flex-1 space-y-3 overflow-y-auto p-6'>
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.isOwn ? 'justify-end' : 'justify-start'}`}
                >
                  {!message.isOwn && (
                    <Avatar>
                      <Avatar.Image
                        alt='John Doe'
                        src='https://img.heroui.chat/image/avatar?w=400&h=400&u=3'
                      />
                      <Avatar.Fallback>JD</Avatar.Fallback>
                    </Avatar>
                  )}
                  <div
                    className={`max-w-xs lg:max-w-md ${message.isOwn ? 'order-1' : 'order-2'}`}
                  >
                    {message.type === 'sticker' ? (
                      <div className='p-2 text-6xl'>🐶</div>
                    ) : (
                      <div
                        className={`rounded-2xl px-4 py-2 ${
                          message.isOwn
                            ? 'rounded-br-md bg-blue-500 text-white'
                            : 'rounded-bl-md bg-white text-gray-800 shadow-sm'
                        }`}
                      >
                        <p className='text-sm'>{message.content}</p>
                      </div>
                    )}
                    <div
                      className={`mt-1 text-xs text-gray-500 ${message.isOwn ? 'text-right' : 'text-left'}`}
                    >
                      {message.timestamp}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Message Input */}
            <div className='border-t border-pink-200 bg-white/80 p-4 backdrop-blur-sm'>
              <div className='flex items-center space-x-3'>
                <Button isIconOnly className='text-blue-600 hover:bg-blue-100'>
                  <Plus className='h-5 w-5' />
                </Button>
                <Button isIconOnly className='text-blue-600 hover:bg-blue-100'>
                  <Image className='h-5 w-5' />
                </Button>
                <Button isIconOnly className='text-blue-600 hover:bg-blue-100'>
                  <Sticker className='h-5 w-5' />
                </Button>
                <Button isIconOnly className='text-blue-600 hover:bg-blue-100'>
                  <Gift className='h-5 w-5' />
                </Button>

                <div className='flex flex-1 items-center rounded-full bg-gray-100 px-4 py-2'>
                  <Input
                    placeholder='Aa'
                    value={messageInput}
                    onChange={(e) => setMessageInput(e.target.value)}
                  />
                  <Button isIconOnly className='ml-2 text-gray-500'>
                    <Smile className='h-5 w-5' />
                  </Button>
                </div>

                {messageInput.trim() ? (
                  <Button
                    isIconOnly
                    className='bg-blue-500 text-white hover:bg-blue-600'
                    onPress={handleSendMessage}
                  >
                    <Send className='h-5 w-5' />
                  </Button>
                ) : (
                  <Button
                    isIconOnly
                    className='text-blue-600 hover:bg-blue-100'
                  >
                    <ThumbsUp className='h-5 w-5' />
                  </Button>
                )}
              </div>
            </div>
          </>
        ) : (
          <div className='flex flex-1 items-center justify-center'>
            <div className='text-center'>
              <MessageCircle className='mx-auto mb-4 h-16 w-16 text-gray-300' />
              <p className='text-lg text-gray-500'>
                Chọn cuộc trò chuyện để bắt đầu
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Right Sidebar - Chat Info */}
      <div className='flex w-80 flex-col border-l border-gray-200 bg-white'>
        {selectedUser && (
          <>
            {/* Profile Section */}
            <div className='border-b border-gray-200 p-6 text-center'>
              <Avatar>
                <Avatar.Image
                  alt='John Doe'
                  src='https://img.heroui.chat/image/avatar?w=400&h=400&u=3'
                />
                <Avatar.Fallback>JD</Avatar.Fallback>
              </Avatar>
              <h3 className='mb-1 text-lg font-semibold text-gray-800'>
                {selectedUser.name}
              </h3>
              <p className='mb-4 text-sm text-gray-500'>
                {selectedUser.timestamp}
              </p>

              <div className='flex justify-center space-x-4'>
                <Button
                  isIconOnly
                  className='bg-gray-100 text-gray-700 hover:bg-gray-200'
                >
                  <UserPlus className='h-5 w-5' />
                </Button>
                <Button
                  isIconOnly
                  className='bg-gray-100 text-gray-700 hover:bg-gray-200'
                >
                  <Settings className='h-5 w-5' />
                </Button>
                <Button
                  isIconOnly
                  className='bg-gray-100 text-gray-700 hover:bg-gray-200'
                >
                  <Search className='h-5 w-5' />
                </Button>
              </div>
            </div>

            {/* Options */}
            <div className='flex-1 p-4'>
              <div className='space-y-4'>
                <div className='flex cursor-pointer items-center rounded-lg p-2 text-gray-700 hover:bg-gray-50'>
                  <div className='mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-blue-100'>
                    <span className='text-sm text-blue-600'>🔒</span>
                  </div>
                  <span className='font-medium'>End-to-end encrypted</span>
                </div>

                <button className='w-full rounded-lg p-3 text-left hover:bg-gray-50'>
                  <h4 className='mb-1 font-medium text-gray-800'>Chat info</h4>
                  <p className='text-sm text-gray-500'>
                    See members, files, links, and more
                  </p>
                </button>

                <button className='w-full rounded-lg p-3 text-left hover:bg-gray-50'>
                  <h4 className='mb-1 font-medium text-gray-800'>
                    Customize chat
                  </h4>
                  <p className='text-sm text-gray-500'>
                    Change colors, emoji, nicknames, and more
                  </p>
                </button>

                <button className='w-full rounded-lg p-3 text-left hover:bg-gray-50'>
                  <h4 className='mb-1 font-medium text-gray-800'>
                    Media & files
                  </h4>
                  <p className='text-sm text-gray-500'>
                    Photos, videos, files, and links
                  </p>
                </button>

                <button className='w-full rounded-lg p-3 text-left hover:bg-gray-50'>
                  <h4 className='mb-1 font-medium text-gray-800'>
                    Privacy & support
                  </h4>
                  <p className='text-sm text-gray-500'>
                    Block, report, restrict, and more
                  </p>
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
