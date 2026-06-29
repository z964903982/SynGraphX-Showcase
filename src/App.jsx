const asset = (path) => `${import.meta.env.BASE_URL}${path}`

const links = {
  github: 'https://github.com/z964903982/SynGraphX-Showcase',
}

const methods = [
  {
    step: '01',
    title: 'Kernel-DTW',
    body: '用核化动态时间规整度量证券序列的非线性同步、滞后联动和局部形态相似，弥补静态相关系数难以处理时间错位的问题。',
  },
  {
    step: '02',
    title: 'Louvain',
    body: '把高相似度证券关系组织成时序关联网络，通过社区发现识别跨行业、跨板块的潜在联动群组。',
  },
  {
    step: '03',
    title: '产业链知识图谱',
    body: '融合企业、行业、概念、供应链和股权等多源关系，为隐式时序关联补充可追溯的实体语义。',
  },
  {
    step: '04',
    title: 'Hybrid RAG',
    body: '结合结构化图谱检索与文本检索，让个股、行业和市场事件的解释能够回到证据链本身。',
  },
]

const capabilities = [
  '全市场关联网络构建与可视化',
  '个股隐性关联查询与可解释分析',
  '规则选股与短期联动验证',
  '新闻舆情、产业链关系与智能问答融合',
]

const metrics = [
  ['覆盖股票', '5500+', 'A 股证券样本'],
  ['图谱节点', '3.8 万+', '企业、行业、概念等实体'],
  ['图谱关系', '12.9 万+', '产业链、股权、概念关联'],
  ['策略提升', '8.3%', '短期跟涨率相较随机策略提高'],
]

const publicHighlights = [
  ['研究问题', '传统相关性方法难以发现证券市场中的滞后联动、跨行业传导和隐性社区结构。'],
  ['算法设计', '以 Kernel-DTW 建模非线性时序相似，结合 Louvain 发现关联社区，并以知识图谱补足解释链。'],
  ['系统实现', '形成覆盖市场网络、个股查询、规则选股、舆情分析和智能助手的完整可交互系统。'],
  ['实证价值', '在大规模 A 股样本上验证联动信号，相较随机策略短期跟涨率提升 8.3%。'],
]

function App() {
  return (
    <main>
      <header className="hero">
        <nav className="topbar" aria-label="页面导航">
          <a className="brand" href="#top" aria-label="SynGraphX 首页">
            <img src={asset('images/logo.png')} alt="" />
            <span>SynGraphX</span>
          </a>
          <div className="nav-links">
            <a href="#overview">概览</a>
            <a href="#method">方法</a>
            <a href="#demo">演示</a>
            <a href="#results">结果</a>
          </div>
        </nav>

        <section className="hero-grid" id="top">
          <div className="hero-copy">
            <p className="eyebrow">Explainable Financial Network Analytics</p>
            <h1>SynGraphX</h1>
            <p className="subtitle">基于时序网络的可解释证券关联分析系统</p>
            <p className="hero-text">
              面向证券市场隐性关联发现，SynGraphX 将时间序列相似性、复杂网络社区、产业链知识图谱与混合检索增强生成结合，辅助识别“为何联动、如何传导、是否可验证”的研究线索。
            </p>
            <div className="hero-actions" aria-label="项目入口">
              <a className="button primary" href={links.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a className="button" href="#method">
                技术路线
              </a>
              <a className="button" href="#demo">
                系统演示
              </a>
              <a className="button" href="#results">
                实验结果
              </a>
            </div>
          </div>
          <figure className="hero-figure">
            <img src={asset('images/interface-dashboard.png')} alt="SynGraphX 最新系统界面总览" />
            <figcaption>最新系统界面：市场监控、个股分析、关联网络与解释结果聚合</figcaption>
          </figure>
        </section>
      </header>

      <section className="section overview" id="overview">
        <div className="section-heading">
          <p className="eyebrow">Project Overview</p>
          <h2>从“相关”走向“可解释关联”</h2>
        </div>
        <div className="two-column">
          <div>
            <p>
              传统证券相关性分析常依赖静态相关系数，难以处理滞后响应、局部同步、跨产业链传导与事件驱动联动。SynGraphX 将证券价格序列转化为可分析的时序网络，在市场大范围波动中识别隐藏的结构性关系。
            </p>
            <p>
              系统进一步引入产业链知识图谱与 Hybrid RAG 能力，使关联结果不仅能被发现，也能被解释、被追溯，并服务于个股查询、规则选股、舆情分析与智能问答等场景。
            </p>
          </div>
          <div className="capability-list" aria-label="系统能力">
            {capabilities.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="section method" id="method">
        <div className="section-heading">
          <p className="eyebrow">Method</p>
          <h2>四步构建证券关联解释链</h2>
        </div>
        <div className="method-layout">
          <div className="method-cards">
            {methods.map((item) => (
              <article className="method-card" key={item.title}>
                <span>{item.step}</span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
          <div className="method-images">
            <img src={asset('images/method-architecture.png')} alt="SynGraphX 系统技术架构图" />
            <img src={asset('images/method-kernel-dtw.png')} alt="Kernel-DTW 原理图" />
          </div>
        </div>
      </section>

      <section className="section demo" id="demo">
        <div className="section-heading">
          <p className="eyebrow">System Demo</p>
          <h2>系统界面与功能演示</h2>
        </div>
        <div className="screenshots">
          <figure>
            <img src={asset('images/interface-network-orange.png')} alt="SynGraphX 证券关联网络界面" />
            <figcaption>证券关联网络与社区结构识别</figcaption>
          </figure>
          <figure>
            <img src={asset('images/interface-explainability.png')} alt="SynGraphX 个股解释界面" />
            <figcaption>个股关联解释、指标概览与知识图谱证据</figcaption>
          </figure>
          <figure>
            <img src={asset('images/interface-stock-table.png')} alt="SynGraphX 规则选股界面" />
            <figcaption>规则选股与候选证券列表</figcaption>
          </figure>
          <figure>
            <img src={asset('images/interface-ai-assistant.png')} alt="SynGraphX 智能助手界面" />
            <figcaption>Hybrid RAG 智能助手问答</figcaption>
          </figure>
        </div>
        <div className="video-grid">
          <article>
            <h3>智能助手</h3>
            <video controls preload="metadata" src={asset('videos/ai-assistant-demo.mp4')} />
          </article>
          <article>
            <h3>个股查询</h3>
            <video controls preload="metadata" src={asset('videos/stock-query-demo.mp4')} />
          </article>
          <article>
            <h3>规则选股</h3>
            <video controls preload="metadata" src={asset('videos/rule-selection-demo.mp4')} />
          </article>
          <article>
            <h3>新闻舆情</h3>
            <video controls preload="metadata" src={asset('videos/news-sentiment-demo.mp4')} />
          </article>
        </div>
      </section>

      <section className="section results" id="results">
        <div className="section-heading">
          <p className="eyebrow">Results</p>
          <h2>数据规模与实验效果</h2>
        </div>
        <div className="metrics">
          {metrics.map(([label, value, note]) => (
            <article className="metric" key={label}>
              <p>{label}</p>
              <strong>{value}</strong>
              <span>{note}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="section documents" id="documents">
        <div className="section-heading">
          <p className="eyebrow">Public Showcase</p>
          <h2>适合公开展示的项目亮点</h2>
        </div>
        <div className="highlight-list">
          {publicHighlights.map(([name, body]) => (
            <article key={name}>
              <h3>{name}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
        <a className="repo-link" href={links.github} target="_blank" rel="noreferrer">
          查看公开代码仓库
        </a>
      </section>
    </main>
  )
}

export default App
