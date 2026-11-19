import { prototypes } from './prototypes';

export default function Home() {
  return (
    <main className="wrap">
      <header className="head">
        <small>Solar50K</small>
        <h1>ต้นแบบโครงการโซลาร์ภาคประชาชน</h1>
        <p>เลือกต้นแบบที่ต้องการเปิด แต่ละต้นแบบเปิดเต็มหน้าและทำงานเหมือนตอนนำเสนอ มีแถบจำลองระบบ Admin มุมขวาล่าง</p>
      </header>
      <ul className="list">
        {prototypes.map((p) => (
          <li key={p.href} className="card">
            <div className="meta">
              <span className="tag">{p.tag}</span>
              <span className="ver">{p.version}</span>
            </div>
            <h2>{p.title}</h2>
            <p>{p.desc}</p>
            <div className="acts">
              <a className="btn" href={p.href}>{p.open || 'เปิดต้นแบบ'}</a>
              <a className="link" href={`/prototypes/${p.file}`} download>ดาวน์โหลด HTML</a>
            </div>
          </li>
        ))}
      </ul>
      <footer className="foot">ข้อมูลทั้งหมดในต้นแบบเป็นข้อมูลจำลอง</footer>
    </main>
  );
}
