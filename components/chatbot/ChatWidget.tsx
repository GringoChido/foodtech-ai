'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocale, useTranslations } from 'next-intl';
import { getGreeting, matchResponse, type ChatResponse } from './chatbot-engine';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  followUps?: string[];
}

export const ChatWidget = () => {
  const currentLocale = useLocale() as 'en' | 'es';
  const t = useTranslations('chat');
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [hasOpened, setHasOpened] = useState(false);
  const [pulseCount, setPulseCount] = useState(0);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const idRef = useRef(0);

  useEffect(() => {
    if (pulseCount >= 3) return;
    const timer = setTimeout(() => setPulseCount((c) => c + 1), 1200);
    return () => clearTimeout(timer);
  }, [pulseCount]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const addBotResponse = useCallback((response: ChatResponse) => {
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      idRef.current += 1;
      setMessages((prev) => [
        ...prev,
        {
          id: idRef.current,
          text: response.answer,
          sender: 'bot',
          followUps: response.followUps,
        },
      ]);
    }, 500);
  }, []);

  const handleOpen = () => {
    setIsOpen(true);
    if (!hasOpened) {
      setHasOpened(true);
      const greeting = getGreeting(currentLocale);
      idRef.current += 1;
      setMessages([
        {
          id: idRef.current,
          text: greeting.answer,
          sender: 'bot',
          followUps: greeting.followUps,
        },
      ]);
    }
    setTimeout(() => inputRef.current?.focus(), 100);
  };

  const handleSend = (text?: string) => {
    const msg = (text ?? input).trim();
    if (!msg) return;

    idRef.current += 1;
    setMessages((prev) => [...prev, { id: idRef.current, text: msg, sender: 'user' }]);
    setInput('');

    const response = matchResponse(msg, currentLocale);
    addBotResponse(response);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
    if (e.key === 'Escape') {
      setIsOpen(false);
    }
  };

  return (
    <>
      <button
        onClick={isOpen ? () => setIsOpen(false) : handleOpen}
        className="fixed bottom-6 left-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-sage text-navy shadow-lg transition-all duration-200 hover:bg-sage-hover hover:scale-105 active:scale-95 cursor-pointer"
        aria-label={isOpen ? t('closeChat') : t('openChat')}
        style={pulseCount < 3 ? { animation: 'fab-pulse 1.2s ease-in-out' } : undefined}
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 left-6 z-50 flex w-[380px] max-w-[calc(100vw-48px)] flex-col overflow-hidden rounded-2xl border border-white/10 shadow-2xl"
            style={{ height: 'min(500px, calc(100vh - 120px))' }}
          >
            <div className="flex items-center gap-3 bg-navy px-4 py-3 border-b border-white/10">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-sage/20">
                <MessageCircle className="h-5 w-5 text-sage" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">{t('title')}</p>
                <p className="text-[10px] text-cream/50">{t('subtitle')}</p>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto bg-gray-50 p-4 space-y-3">
              {messages.map((msg) => (
                <div key={msg.id}>
                  <div className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div
                      className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                        msg.sender === 'user'
                          ? 'rounded-br-sm bg-sage text-navy'
                          : 'rounded-bl-sm bg-white text-navy shadow-sm'
                      }`}
                    >
                      {msg.text}
                    </div>
                  </div>
                  {msg.followUps && msg.sender === 'bot' && (
                    <div className="mt-2 flex gap-2 overflow-x-auto pb-1">
                      {msg.followUps.map((q) => (
                        <button
                          key={q}
                          onClick={() => handleSend(q)}
                          className="shrink-0 rounded-full border border-sage/40 bg-white px-3 py-1.5 text-xs text-sage-hover transition-colors hover:bg-sage/10 cursor-pointer"
                        >
                          {q}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="flex gap-1 rounded-2xl rounded-bl-sm bg-white px-4 py-3 shadow-sm">
                    <span className="h-2 w-2 rounded-full bg-navy/30" style={{ animation: 'typing-bounce 1s infinite 0ms' }} />
                    <span className="h-2 w-2 rounded-full bg-navy/30" style={{ animation: 'typing-bounce 1s infinite 150ms' }} />
                    <span className="h-2 w-2 rounded-full bg-navy/30" style={{ animation: 'typing-bounce 1s infinite 300ms' }} />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <div className="flex items-center gap-2 border-t border-gray-200 bg-white px-3 py-2">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder={t('placeholder')}
                className="flex-1 rounded-lg border-0 bg-gray-50 px-3 py-2 text-base text-navy placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-sage"
              />
              <button
                onClick={() => handleSend()}
                disabled={!input.trim()}
                className="flex h-11 w-11 items-center justify-center rounded-lg bg-sage text-navy transition-colors hover:bg-sage-hover disabled:opacity-40 cursor-pointer"
                aria-label={t('sendMessage')}
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
