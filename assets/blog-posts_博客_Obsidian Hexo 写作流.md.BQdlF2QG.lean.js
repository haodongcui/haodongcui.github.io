import{_ as n,c as a,a1 as p,o as e}from"./chunks/framework.B0cMFUTE.js";const g=JSON.parse('{"title":"Obsidian Hexo 工作流","description":"","frontmatter":{"title":"Obsidian Hexo 工作流","tags":["博客","Obsidian","Hexo"],"abbrlink":20240830104749,"categories":["博客"],"date":"2024-08-30T10:47:49.000Z","updated":"2024-09-10 12:59"},"headers":[],"relativePath":"blog-posts/博客/Obsidian Hexo 写作流.md","filePath":"blog-posts/博客/Obsidian Hexo 写作流.md","lastUpdated":1735324345000}'),l={name:"blog-posts/博客/Obsidian Hexo 写作流.md"};function t(i,s,o,c,d,b){return e(),a("div",null,s[0]||(s[0]=[p(`<p>文件树</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>ob仓库根目录</span></span>
<span class="line"><span>├─.obsidian</span></span>
<span class="line"><span>│  ├─plugins</span></span>
<span class="line"><span>│  │  ├─attachment-management</span></span>
<span class="line"><span>│  │  ├─better-export-pdf</span></span>
<span class="line"><span>│  │  └─templater-obsidian</span></span>
<span class="line"><span>│  ├─snippets</span></span>
<span class="line"><span>│  └─themes</span></span>
<span class="line"><span>│      └─Obsidian Nord</span></span>
<span class="line"><span>├─0_custom</span></span>
<span class="line"><span>|  ├─ob同步Blog批处理.FFS_BATCH</span></span>
<span class="line"><span>|  ├─预览.bat</span></span>
<span class="line"><span>|  ├─推送.bat</span></span>
<span class="line"><span>|  ├─Blog根目录.lnk</span></span>
<span class="line"><span>│  └─模板</span></span>
<span class="line"><span>|    └─Front-matter</span></span>
<span class="line"><span>├─Blog public</span></span>
<span class="line"><span>│  ├─博客</span></span>
<span class="line"><span>│  └─软件</span></span>
<span class="line"><span>│      ├─AdobeAcrobat安装教程</span></span>
<span class="line"><span>│      └─Anaconda+conda常用命令汇总</span></span>
<span class="line"><span>├─drafts</span></span>
<span class="line"><span>├─花园</span></span>
<span class="line"><span>├─数学</span></span>
<span class="line"><span>├─数学建模</span></span>
<span class="line"><span>└─[其他文件夹]</span></span></code></pre></div><blockquote><p>使用开源软件freefilesync同步，采用单向的镜像同步 将obsidian的<code>Blog public</code>文件夹同步到Hexo的<code>_post</code>文件夹，即 <code>C:\\Users\\用户名\\Nutstore\\1\\obBlog\\Blog public --&gt; E:\\Blog\\source\\_posts</code></p></blockquote><p>工作流为： 写作 --&gt; 移动到<code>Blog public</code> --&gt; ob同步Blog批处理 --&gt; 预览 --&gt; 推送</p>`,4)]))}const u=n(l,[["render",t]]);export{g as __pageData,u as default};
