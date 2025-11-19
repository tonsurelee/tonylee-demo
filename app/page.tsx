"use client";

import Image from "next/image";
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileNav = document.getElementById('mobile-nav');

    if (mobileMenuBtn && mobileNav) {
      const toggleMenu = () => {
        mobileNav.classList.toggle('show');
      };

      mobileMenuBtn.addEventListener('click', toggleMenu);

      // 点击导航链接后关闭菜单
      const navLinks = mobileNav.querySelectorAll('a');
      navLinks.forEach(link => {
        link.addEventListener('click', () => {
          mobileNav.classList.remove('show');
        });
      });

      // 清理事件监听器
      return () => {
        mobileMenuBtn.removeEventListener('click', toggleMenu);
        navLinks.forEach(link => {
          link.removeEventListener('click', () => {
            mobileNav.classList.remove('show');
          });
        });
      };
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-900 dark:to-slate-800">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm z-50 border-b border-slate-200 dark:border-slate-700">
        <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-slate-800 dark:text-slate-100">
            同旭Tony
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100 transition-colors">关于</a>
            <a href="#skills" className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100 transition-colors">专长</a>
            <a href="#projects" className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100 transition-colors">经历</a>
            <a href="#contact" className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100 transition-colors">交流</a>
          </div>
          {/* 移动端菜单按钮 */}
          <button className="md:hidden text-slate-600 dark:text-slate-300" id="mobile-menu-btn">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </nav>
        {/* 移动端菜单 */}
        <div className="mobile-nav" id="mobile-nav">
          <a href="#about">关于</a>
          <a href="#skills">专长</a>
          <a href="#projects">经历</a>
          <a href="#contact">交流</a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-36 h-36 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto shadow-lg flex items-center justify-center text-white text-4xl font-bold">
              同旭
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-slate-800 dark:text-slate-100 mb-6">
            你好，我是 <span className="text-blue-600 dark:text-blue-400">同旭Tony</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-8 max-w-3xl mx-auto">
            互联网老兵 • AIGC深耕者 • 江苏连云港
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
            >
              联系我
            </a>
            <a
              href="#projects"
              className="px-8 py-3 border border-slate-300 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg font-medium transition-colors"
            >
              查看项目
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-white dark:bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-slate-800 dark:text-slate-100 mb-16">关于我</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                互联网老兵，2014年开始从事本地微信公号和第三方平台开发运营，积累了丰富的本地资源。
                2016年下半年开始以移动支付为切入点，深入商户生态，专注本地O2O业务。
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                目前定位在AIP工具和AIP视频赛道深耕，致力于在AIGC领域寻找同频人一起深耕发展，
                专注AI绘画、AI视频等相关技术的应用与创新。
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-lg text-center">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">10+</div>
                <div className="text-slate-600 dark:text-slate-300">年经验</div>
              </div>
              <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-lg text-center">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">2014</div>
                <div className="text-slate-600 dark:text-slate-300">入行时间</div>
              </div>
              <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-lg text-center">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">O2O</div>
                <div className="text-slate-600 dark:text-slate-300">商户生态</div>
              </div>
              <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-lg text-center">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">AIGC</div>
                <div className="text-slate-600 dark:text-slate-300">深耕领域</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-slate-800 dark:text-slate-100 mb-16">专长领域</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-slate-900 p-8 rounded-xl shadow-lg">
              <div className="text-3xl mb-4">🎨</div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-4">AI绘画</h3>
              <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                <li>Midjourney 应用</li>
                <li>Stable Diffusion</li>
                <li>AI 绘画工具优化</li>
                <li>创意图像生成</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-slate-900 p-8 rounded-xl shadow-lg">
              <div className="text-3xl mb-4">🎬</div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-4">AI视频</h3>
              <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                <li>AIP 视频制作</li>
                <li>视频内容策划</li>
                <li>自动化视频生产</li>
                <li>视频赛道深耕</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-slate-900 p-8 rounded-xl shadow-lg">
              <div className="text-3xl mb-4">📱</div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-4">互联网运营</h3>
              <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                <li>微信公号运营</li>
                <li>第三方平台开发</li>
                <li>本地O2O业务</li>
                <li>移动支付集成</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-white dark:bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-slate-800 dark:text-slate-100 mb-16">主要经历</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group bg-slate-50 dark:bg-slate-800 rounded-xl overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white text-2xl font-bold">2014-2016</div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2">微信生态起步</h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  从事本地微信公号和第三方平台开发运营，积累本地资源
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full">微信开发</span>
                  <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-sm rounded-full">本地运营</span>
                </div>
              </div>
            </div>

            <div className="group bg-slate-50 dark:bg-slate-800 rounded-xl overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-r from-green-500 to-teal-600 flex items-center justify-center text-white text-2xl font-bold">2016-2020</div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2">移动支付 O2O</h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  以移动支付为切入点，深入商户生态，拓展本地O2O业务
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-sm rounded-full">移动支付</span>
                  <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 text-sm rounded-full">O2O</span>
                </div>
              </div>
            </div>

            <div className="group bg-slate-50 dark:bg-slate-800 rounded-xl overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-r from-orange-500 to-red-600 flex items-center justify-center text-white text-2xl font-bold">2020-至今</div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2">AIGC深耕</h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  定位AIP工具和AIP视频赛道，专注AIGC领域的深度发展
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 text-sm rounded-full">AI绘画</span>
                  <span className="px-3 py-1 bg-pink-100 dark:bg-pink-900 text-pink-800 dark:text-pink-200 text-sm rounded-full">AI视频</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-8">资源交流</h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 mb-4">
            🎯 <strong>我能提供：</strong>AI绘画、AI视频相关资源交流
          </p>
          <p className="text-xl text-slate-600 dark:text-slate-300 mb-12">
            🤝 <strong>我的需求：</strong>做好AIP，找到同频人一起深耕AIGC
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <a
              href="mailto:tongxutony@example.com"
              className="flex items-center justify-center gap-3 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
            >
              <span>📧</span>
              发送邮件
            </a>
            <a
              href="#"
              className="flex items-center justify-center gap-3 px-6 py-3 border border-slate-300 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg font-medium transition-colors"
            >
              <span>💬</span>
              微信交流
            </a>
            <a
              href="#"
              className="flex items-center justify-center gap-3 px-6 py-3 border border-slate-300 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg font-medium transition-colors"
            >
              <span>🎯</span>
              AIGC合作
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700">
        <div className="max-w-6xl mx-auto text-center text-slate-600 dark:text-slate-300">
          <p>&copy; 2024 同旭Tony. 江苏连云港 • 专注AIGC深耕</p>
        </div>
      </footer>
    </div>
  );
}
