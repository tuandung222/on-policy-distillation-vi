import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';
import type {ReactNode} from 'react';

/* ─── Category Badge Component ────────────────────────────── */
type BadgeColor = 'teal' | 'cyan' | 'emerald' | 'sky' | 'blue' | 'indigo' | 'violet' | 'amber';

const badgeColors: Record<BadgeColor, {bg: string; text: string; border: string}> = {
  teal:    {bg: 'rgba(20, 184, 166, 0.12)', text: '#14b8a6', border: 'rgba(20, 184, 166, 0.25)'},
  cyan:    {bg: 'rgba(34, 211, 238, 0.12)', text: '#22d3ee', border: 'rgba(34, 211, 238, 0.25)'},
  emerald: {bg: 'rgba(52, 211, 153, 0.12)', text: '#34d399', border: 'rgba(52, 211, 153, 0.25)'},
  sky:     {bg: 'rgba(56, 189, 248, 0.12)', text: '#38bdf8', border: 'rgba(56, 189, 248, 0.25)'},
  blue:    {bg: 'rgba(96, 165, 250, 0.12)', text: '#60a5fa', border: 'rgba(96, 165, 250, 0.25)'},
  indigo:  {bg: 'rgba(129, 140, 248, 0.12)', text: '#818cf8', border: 'rgba(129, 140, 248, 0.25)'},
  violet:  {bg: 'rgba(167, 139, 250, 0.12)', text: '#a78bfa', border: 'rgba(167, 139, 250, 0.25)'},
  amber:   {bg: 'rgba(251, 191, 36, 0.12)', text: '#fbbf24', border: 'rgba(251, 191, 36, 0.25)'},
};

function CategoryBadge({label, color}: {label: string; color: BadgeColor}) {
  const c = badgeColors[color];
  return (
    <span
      style={{
        display: 'inline-block',
        fontSize: '0.7rem',
        fontWeight: 700,
        letterSpacing: '0.06em',
        textTransform: 'uppercase',
        padding: '0.2rem 0.65rem',
        borderRadius: '6px',
        background: c.bg,
        color: c.text,
        border: `1px solid ${c.border}`,
        marginBottom: '0.75rem',
      }}
    >
      {label}
    </span>
  );
}

/* ─── Homepage Header ─────────────────────────────────────── */
function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('custom-hero', styles.heroBanner)}>
      <div className="container" style={{position: 'relative', zIndex: 1}}>
        <CategoryBadge label="BẢN DỊCH TIẾNG VIỆT • NGHIÊN CỨU AI" color="cyan" />
        <h1
          style={{
            fontSize: 'clamp(2rem, 5vw, 3.2rem)',
            fontWeight: 900,
            letterSpacing: '-0.04em',
            lineHeight: 1.15,
            marginTop: '0.75rem',
            marginBottom: '1.25rem',
            background: 'linear-gradient(135deg, #0891b2, #22d3ee, #06b6d4)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          {siteConfig.title}
        </h1>
        <p
          style={{
            fontSize: '1.1rem',
            maxWidth: '720px',
            margin: '0 auto',
            lineHeight: 1.7,
            opacity: 0.85,
          }}
        >
          {siteConfig.tagline}
        </p>
        <div className={styles.buttons} style={{gap: '1rem'}}>
          <Link
            className="button button--primary button--lg"
            to="/docs/gioi_thieu"
            style={{
              borderRadius: '12px',
              padding: '0.85rem 2rem',
              fontWeight: 700,
              fontSize: '1rem',
              background: 'linear-gradient(135deg, #0891b2, #0e7490)',
              border: 'none',
              boxShadow: '0 4px 14px rgba(8, 145, 178, 0.35)',
            }}
          >
            Bắt đầu đọc 📖
          </Link>
          <Link
            className="button button--outline button--lg"
            to="https://huggingface.co/spaces/HuggingFaceH4/blogpost-on-policy-distillation"
            style={{
              borderRadius: '12px',
              padding: '0.85rem 2rem',
              fontWeight: 700,
              fontSize: '1rem',
              borderWidth: '2px',
            }}
          >
            Bài viết gốc 🔗
          </Link>
        </div>
      </div>
    </header>
  );
}

/* ─── Key Highlights Section ──────────────────────────────── */
interface Highlight {
  title: string;
  badge: string;
  badgeColor: BadgeColor;
  description: string;
  emoji: string;
}

const highlights: Highlight[] = [
  {
    title: 'GOLD Method',
    badge: 'Thuật toán',
    badgeColor: 'teal',
    description:
      'Mở rộng Universal Logit Distillation (ULD) sang chế độ on-policy, cho phép mô hình học từ chính phân phối đầu ra của nó thay vì dữ liệu tĩnh.',
    emoji: '🧪',
  },
  {
    title: 'Cross-Tokenizer',
    badge: 'Đột phá',
    badgeColor: 'cyan',
    description:
      'Phá bỏ rào cản tokenizer — cho phép chưng cất tri thức giữa các họ mô hình khác nhau (Llama → Qwen, Gemma → Phi, v.v.).',
    emoji: '🔗',
  },
  {
    title: 'Outperforms GRPO',
    badge: 'Kết quả',
    badgeColor: 'emerald',
    description:
      'Đạt hiệu suất gấp 2 lần so với GRPO trên các benchmark như AlpacaEval, Arena-Hard, và các bài đánh giá toán học.',
    emoji: '🏆',
  },
];

function KeyHighlights() {
  return (
    <section style={{padding: '4rem 0', background: 'var(--surface-bg)'}}>
      <div className="container">
        <div style={{textAlign: 'center', marginBottom: '3rem'}}>
          <CategoryBadge label="Điểm nổi bật" color="teal" />
          <h2
            style={{
              fontSize: '2rem',
              fontWeight: 800,
              letterSpacing: '-0.03em',
              marginTop: '0.75rem',
            }}
          >
            Những đóng góp chính
          </h2>
          <p style={{color: 'var(--text-secondary)', maxWidth: '560px', margin: '0.5rem auto 0'}}>
            Ba đột phá cốt lõi từ nghiên cứu On-Policy Distillation
          </p>
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem',
            maxWidth: '960px',
            margin: '0 auto',
          }}
        >
          {highlights.map((h, idx) => (
            <div className="glass-panel" key={idx} style={{textAlign: 'center'}}>
              <div style={{fontSize: '2.5rem', marginBottom: '0.75rem'}}>{h.emoji}</div>
              <CategoryBadge label={h.badge} color={h.badgeColor} />
              <h3 style={{fontSize: '1.25rem', fontWeight: 700, marginTop: '0.25rem'}}>
                {h.title}
              </h3>
              <p style={{color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.65, marginBottom: 0}}>
                {h.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Chapter List Section ────────────────────────────────── */
interface Chapter {
  num: number;
  title: string;
  category: string;
  categoryColor: BadgeColor;
  description: string;
  path: string;
  emoji: string;
}

const chapters: Chapter[] = [
  {
    num: 1,
    title: 'Giới thiệu',
    category: 'Tổng quan',
    categoryColor: 'teal',
    description: 'Tổng quan về chưng cất tri thức và động lực nghiên cứu phương pháp on-policy cho mọi họ mô hình.',
    path: '/docs/gioi_thieu',
    emoji: '📋',
  },
  {
    num: 2,
    title: 'Phương pháp Chưng cất',
    category: 'Lý thuyết',
    categoryColor: 'sky',
    description: 'Nền tảng lý thuyết về các phương pháp chưng cất tri thức: off-policy, on-policy, và Universal Logit Distillation.',
    path: '/docs/phuong_phap_chung_cat',
    emoji: '📐',
  },
  {
    num: 3,
    title: 'Thuật toán GOLD',
    category: 'Thuật toán',
    categoryColor: 'cyan',
    description: 'Chi tiết thuật toán Generalized On-policy Logit Distillation — mở rộng ULD sang chế độ on-policy.',
    path: '/docs/gold_algorithm',
    emoji: '⚙️',
  },
  {
    num: 4,
    title: 'Thiết lập Thí nghiệm',
    category: 'Thí nghiệm',
    categoryColor: 'blue',
    description: 'Cấu hình mô hình, dataset, hyperparameter, và phương pháp đánh giá sử dụng trong nghiên cứu.',
    path: '/docs/thiet_lap_thi_nghiem',
    emoji: '🔬',
  },
  {
    num: 5,
    title: 'Kết quả Thí nghiệm',
    category: 'Kết quả',
    categoryColor: 'emerald',
    description: 'Phân tích kết quả trên AlpacaEval, Arena-Hard, GSM8K, MATH và các benchmark khác.',
    path: '/docs/ket_qua_thi_nghiem',
    emoji: '📊',
  },
  {
    num: 6,
    title: 'So sánh với GRPO',
    category: 'So sánh',
    categoryColor: 'indigo',
    description: 'So sánh chi tiết GOLD với GRPO — tại sao on-policy distillation vượt trội hơn reinforcement learning.',
    path: '/docs/so_sanh_grpo',
    emoji: '⚖️',
  },
  {
    num: 7,
    title: 'Chưng cất cho Domain',
    category: 'Ứng dụng',
    categoryColor: 'violet',
    description: 'Ứng dụng GOLD cho các domain cụ thể: toán học, lập trình, và các lĩnh vực chuyên biệt.',
    path: '/docs/chung_cat_cho_domain',
    emoji: '🎯',
  },
  {
    num: 8,
    title: 'Kết luận',
    category: 'Kết luận',
    categoryColor: 'amber',
    description: 'Tóm tắt đóng góp, hạn chế, hướng nghiên cứu tương lai, và tác động thực tiễn.',
    path: '/docs/ket_luan',
    emoji: '🎓',
  },
];

function ChapterList() {
  return (
    <section style={{padding: '4rem 0'}}>
      <div className="container">
        <div style={{textAlign: 'center', marginBottom: '3rem'}}>
          <CategoryBadge label="Mục lục" color="cyan" />
          <h2
            style={{
              fontSize: '2rem',
              fontWeight: 800,
              letterSpacing: '-0.03em',
              marginTop: '0.75rem',
            }}
          >
            Nội dung bài viết
          </h2>
          <p style={{color: 'var(--text-secondary)', maxWidth: '560px', margin: '0.5rem auto 0'}}>
            8 chương bao quát toàn bộ nghiên cứu — từ lý thuyết đến thực nghiệm
          </p>
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '1.25rem',
            maxWidth: '1100px',
            margin: '0 auto',
          }}
        >
          {chapters.map((ch) => (
            <Link
              key={ch.num}
              to={ch.path}
              style={{textDecoration: 'none', color: 'inherit'}}
            >
              <div
                className="glass-panel"
                style={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  cursor: 'pointer',
                  padding: '1.5rem',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '0.75rem',
                  }}
                >
                  <span style={{fontSize: '1.75rem'}}>{ch.emoji}</span>
                  <span
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: 800,
                      opacity: 0.2,
                      fontFamily: 'var(--ifm-heading-font-family)',
                    }}
                  >
                    {String(ch.num).padStart(2, '0')}
                  </span>
                </div>
                <CategoryBadge label={ch.category} color={ch.categoryColor} />
                <h3
                  style={{
                    fontSize: '1.1rem',
                    fontWeight: 700,
                    marginTop: '0.25rem',
                    marginBottom: '0.5rem',
                  }}
                >
                  Chương {ch.num}: {ch.title}
                </h3>
                <p
                  style={{
                    color: 'var(--text-secondary)',
                    fontSize: '0.88rem',
                    lineHeight: 1.6,
                    marginBottom: 0,
                    flex: 1,
                  }}
                >
                  {ch.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Bottom CTA Banner ───────────────────────────────────── */
function BottomCTA() {
  return (
    <section
      style={{
        padding: '4rem 0',
        background: 'var(--accent-glow)',
        textAlign: 'center',
      }}
    >
      <div className="container">
        <div
          className="glass-panel"
          style={{
            maxWidth: '680px',
            margin: '0 auto',
            textAlign: 'center',
          }}
        >
          <span style={{fontSize: '2.5rem', display: 'block', marginBottom: '0.75rem'}}>🚀</span>
          <h2
            style={{
              fontSize: '1.5rem',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              marginBottom: '0.75rem',
            }}
          >
            Thử nghiệm với TRL
          </h2>
          <p
            style={{
              color: 'var(--text-secondary)',
              fontSize: '0.95rem',
              lineHeight: 1.7,
              marginBottom: '1.5rem',
            }}
          >
            Phương pháp GOLD đã được tích hợp sẵn trong thư viện TRL của HuggingFace.
            Bắt đầu chưng cất mô hình của bạn ngay hôm nay!
          </p>
          <div style={{display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap'}}>
            <Link
              className="button button--primary button--md"
              to="https://huggingface.co/docs/trl"
              style={{
                borderRadius: '10px',
                fontWeight: 700,
                background: 'linear-gradient(135deg, #0891b2, #0e7490)',
                border: 'none',
              }}
            >
              TRL Documentation 📚
            </Link>
            <Link
              className="button button--outline button--md"
              to="https://github.com/tuandung222/on-policy-distillation-vi"
              style={{
                borderRadius: '10px',
                fontWeight: 700,
                borderWidth: '2px',
              }}
            >
              GitHub ⭐
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Main Page Component ─────────────────────────────────── */
export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="Trang chủ"
      description={siteConfig.tagline}
    >
      <HomepageHeader />
      <main>
        <KeyHighlights />
        <ChapterList />
        <BottomCTA />
      </main>
    </Layout>
  );
}
