const StarChart = () => (
  <svg className="starChart" viewBox="0 0 400 400" aria-hidden="true">
    <circle cx="200" cy="200" r="190" fill="none" stroke="#252c3b" />
    <circle
      cx="200"
      cy="200"
      r="140"
      fill="none"
      stroke="#252c3b"
      strokeDasharray="2 6"
    />
    <circle cx="200" cy="200" r="90" fill="none" stroke="#252c3b" />
    <circle
      cx="200"
      cy="200"
      r="42"
      fill="none"
      stroke="#3a4356"
      strokeDasharray="2 6"
    />
    <line x1="10" y1="200" x2="390" y2="200" stroke="#252c3b" />
    <line x1="200" y1="10" x2="200" y2="390" stroke="#252c3b" />
    <path
      d="M200 164 L207 193 L236 200 L207 207 L200 236 L193 207 L164 200 L193 193 Z"
      fill="#ffb454"
    />
    <circle cx="92" cy="118" r="3" fill="#ede9e0" />
    <circle cx="126" cy="292" r="2" fill="#a4acbc" />
    <circle cx="306" cy="96" r="2.5" fill="#ede9e0" />
    <circle cx="332" cy="264" r="3.5" fill="#ede9e0" />
    <circle cx="262" cy="342" r="2" fill="#a4acbc" />
    <circle cx="60" cy="214" r="2" fill="#a4acbc" />
    <circle cx="232" cy="58" r="2" fill="#a4acbc" />
    <polyline
      points="92,118 200,200 332,264 262,342"
      fill="none"
      stroke="#ffb454"
      strokeOpacity="0.45"
    />
  </svg>
);

export default StarChart;
