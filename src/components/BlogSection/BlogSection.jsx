import { useRef, useEffect, useState } from 'react';
import { TbArrowUpRight, TbClock, TbCalendar } from 'react-icons/tb';
import './BlogSection.css';

// ─── Swap these out when you have a Dev.to account ───────────────────────────
// const DEVTO_USERNAME = 'your_username';
// const fetchPosts = () =>
//   fetch(`https://dev.to/api/articles?username=${DEVTO_USERNAME}&per_page=6`)
//     .then(r => r.json());
// ─────────────────────────────────────────────────────────────────────────────

const MOCK_POSTS = [
  {
    id: 1,
    title: 'Building a Real-Time Object Detection API with FastAPI & OpenCV',
    description:
      'How I built a production-ready REST API that processes live video frames for object detection using YOLOv8, FastAPI, and Redis as a result cache.',
    tag_list: ['Python', 'FastAPI', 'OpenCV', 'Redis'],
    reading_time_minutes: 7,
    published_at: '2025-03-12',
    url: '#',
  },
  {
    id: 2,
    title: 'Celery + RabbitMQ: Offloading Heavy ML Tasks in Django',
    description:
      'A practical guide to moving slow ML inference jobs off the request cycle using Celery workers, RabbitMQ as the broker, and Django as the orchestrator.',
    tag_list: ['Django', 'Celery', 'RabbitMQ', 'Machine Learning'],
    reading_time_minutes: 9,
    published_at: '2025-02-20',
    url: '#',
  },
  {
    id: 3,
    title: 'RAG From Scratch: Building a Document Q&A Bot with VectorDB',
    description:
      'Step-by-step walkthrough of implementing Retrieval-Augmented Generation using a vector database, embeddings, and an open-source LLM — no paid APIs needed.',
    tag_list: ['LLM', 'RAG', 'VectorDB', 'AI Agents'],
    reading_time_minutes: 12,
    published_at: '2025-01-08',
    url: '#',
  },
];

const formatDate = (iso) =>
  new Date(iso).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

const BlogSection = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="blog" className="blog-section" ref={sectionRef}>
      <div className="blog-container">
        <div className={`blog-header ${visible ? 'blog-visible' : ''}`}>
          <h2 className="blog-title">
            <span className="blog-yellow">/</span>writings
          </h2>
          <p className="blog-subtitle">
            <span className="blog-teal">Thoughts & guides</span> on Python,{' '}
            <span className="blog-orange">backend engineering</span>, and{' '}
            <span className="blog-pink">machine learning</span>
          </p>
        </div>

        <div className="blog-grid">
          {MOCK_POSTS.map((post, i) => (
            <a
              key={post.id}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`blog-card ${visible ? 'blog-visible' : ''}`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="blog-card-top">
                <div className="blog-tags">
                  {post.tag_list.slice(0, 3).map(tag => (
                    <span key={tag} className="blog-tag">{tag}</span>
                  ))}
                </div>
                <TbArrowUpRight className="blog-arrow" />
              </div>

              <h3 className="blog-post-title">{post.title}</h3>
              <p className="blog-post-desc">{post.description}</p>

              <div className="blog-meta">
                <span className="blog-meta-item">
                  <TbClock /> {post.reading_time_minutes} min read
                </span>
                <span className="blog-meta-item">
                  <TbCalendar /> {formatDate(post.published_at)}
                </span>
              </div>
            </a>
          ))}
        </div>

        <div className={`blog-footer ${visible ? 'blog-visible' : ''}`} style={{ transitionDelay: '0.35s' }}>
          <p className="blog-coming-soon">
            These are previews — posts will go live on{' '}
            <span className="blog-yellow">Dev.to</span> soon.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
