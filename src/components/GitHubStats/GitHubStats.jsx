import { useEffect, useRef, useState } from 'react';
import { FaGithub, FaStar, FaCodeBranch, FaUsers } from 'react-icons/fa';
import './GitHubStats.css';

const GITHUB_USERNAME = 'CodeWithPriyank';

const useCountUp = (target, duration = 1500, start = false) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start || target === 0) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
};

const StatCard = ({ icon, label, value, animStart }) => {
  const count = useCountUp(value, 1200, animStart);
  return (
    <div className="gh-stat-card">
      <div className="gh-stat-icon">{icon}</div>
      <span className="gh-stat-value">{animStart ? count : 0}</span>
      <span className="gh-stat-label">{label}</span>
    </div>
  );
};

const GitHubStats = () => {
  const [stats, setStats] = useState(null);
  const [topLangs, setTopLangs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [animStart, setAnimStart] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const [userRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${GITHUB_USERNAME}`),
          fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100`),
        ]);
        const user = await userRes.json();
        const repos = await reposRes.json();

        const stars = repos.reduce((acc, r) => acc + r.stargazers_count, 0);

        const langCount = {};
        repos.forEach(r => {
          if (r.language) langCount[r.language] = (langCount[r.language] || 0) + 1;
        });
        const sorted = Object.entries(langCount)
          .sort((a, b) => b[1] - a[1])
          .slice(0, 4)
          .map(([lang]) => lang);

        setStats({ repos: user.public_repos, followers: user.followers, stars });
        setTopLangs(sorted);
      } catch {
        setStats({ repos: 0, followers: 0, stars: 0 });
      } finally {
        setLoading(false);
      }
    };
    fetchStats();
  }, []);

  useEffect(() => {
    if (loading) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimStart(true); },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [loading]);

  return (
    <div className="gh-stats-wrapper" ref={sectionRef}>
      <div className="gh-stats-header">
        <FaGithub className="gh-main-icon" />
        <a
          href={`https://github.com/${GITHUB_USERNAME}`}
          target="_blank"
          rel="noopener noreferrer"
          className="gh-username"
        >
          @{GITHUB_USERNAME}
        </a>
      </div>

      {loading ? (
        <div className="gh-loading">
          <span className="gh-pulse" />
          <span className="gh-pulse" />
          <span className="gh-pulse" />
        </div>
      ) : (
        <>
          <div className="gh-stats-grid">
            <StatCard icon={<FaCodeBranch />} label="Repositories" value={stats.repos} animStart={animStart} />
            <StatCard icon={<FaStar />} label="Stars Earned" value={stats.stars} animStart={animStart} />
            <StatCard icon={<FaUsers />} label="Followers" value={stats.followers} animStart={animStart} />
          </div>

          {topLangs.length > 0 && (
            <div className="gh-langs">
              <span className="gh-langs-label">Top languages</span>
              <div className="gh-lang-tags">
                {topLangs.map(lang => (
                  <span key={lang} className="gh-lang-tag">{lang}</span>
                ))}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default GitHubStats;
